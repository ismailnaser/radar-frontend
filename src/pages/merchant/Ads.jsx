import React, { useEffect, useMemo, useRef, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import MainLayout from '../../components/MainLayout';
import { createMerchantAd, getMerchantProducts } from '../../api/data';
import CustomButton from '../../components/ui/CustomButton';
import CustomInput from '../../components/ui/CustomInput';
import ImageCarousel from '../../components/ImageCarousel';
import GalleryThumbRow from '../../components/GalleryThumbRow';
import { useAlert } from '../../components/AlertProvider';
import { formatApiError } from '../../utils/apiErrors';
import { visualImageUrls } from '../../utils/productImages';
import { mergeNewGalleryFiles } from '../../utils/galleryFiles';
import { Image as ImageIcon, Megaphone, Upload, Search } from 'lucide-react';

const MAX_IMAGE_MB = 3;
const MAX_AD_GALLERY = 5;

function productHasVisual(p) {
  return p ? visualImageUrls(p).length > 0 : false;
}

/** تطبيع بسيط للبحث بالعربية (ألف/ة/ى وهَمْز) */
function normalizeProductSearchText(s) {
  if (s == null || typeof s !== 'string') return '';
  return s
    .trim()
    .toLowerCase()
    .replace(/\u0640/g, '')
    .replace(/[\u064B-\u0652\u0670]/g, '')
    .replace(/[أإآٱ]/g, 'ا')
    .replace(/ى/g, 'ي')
    .replace(/ة/g, 'ه');
}

function productMatchesSearch(p, qRaw) {
  const q = normalizeProductSearchText(qRaw);
  if (!q) return true;
  const fields = [
    p?.name,
    p?.description,
    ...(Array.isArray(p?.product_features) ? p.product_features : []).map((x) => String(x ?? '')),
  ];
  if (fields.some((t) => normalizeProductSearchText(t).includes(q))) return true;
  if (String(p?.price ?? '').includes(qRaw.trim())) return true;
  if (String(p?.id ?? '') === qRaw.trim()) return true;
  return false;
}

const PAY_BALIPAY = 'balipay_wallet';
const PAY_BANK_PS = 'bank_palestine';

async function tryFetchImageAsFile(url, nameHint = 'product') {
  if (!url || typeof url !== 'string') return null;
  try {
    const res = await fetch(url, { mode: 'cors', credentials: 'include' });
    if (!res.ok) return null;
    const blob = await res.blob();
    if (!blob.size) return null;
    const ext = (blob.type && blob.type.split('/')[1]) || 'jpg';
    const safe = String(nameHint || 'product')
      .replace(/[^\w\u0600-\u06FF-]/g, '')
      .slice(0, 48) || 'product';
    return new File([blob], `${safe}-ad.${ext}`, { type: blob.type || 'image/jpeg' });
  } catch {
    return null;
  }
}

const MerchantAds = () => {
  const { showAlert } = useAlert();
  const location = useLocation();
  const navigate = useNavigate();
  const adFormRef = useRef(null);

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [productPrice, setProductPrice] = useState('');
  const [paymentMethod, setPaymentMethod] = useState(PAY_BALIPAY);
  const [imageFiles, setImageFiles] = useState([]);
  const [paymentReceipt, setPaymentReceipt] = useState(null);
  const [submitting, setSubmitting] = useState(false);
  const [merchantProducts, setMerchantProducts] = useState([]);
  const [productId, setProductId] = useState('');
  const [productSearch, setProductSearch] = useState('');

  useEffect(() => {
    const pre = location.state?.prefillFromProduct;
    if (!pre || pre.id == null) return;

    setProductId(String(pre.id));
    setTitle(String(pre.name || '').trim());
    setDescription(String(pre.description || '').trim());
    setProductPrice(pre.price != null && pre.price !== '' ? String(pre.price) : '');
    setProductSearch('');
    setImageFiles([]);

    navigate(location.pathname, { replace: true, state: {} });

    const urls =
      Array.isArray(pre.images) && pre.images.length > 0
        ? pre.images
        : pre.image
          ? [pre.image]
          : [];
    if (urls.length > 0) {
      Promise.all(
        urls.slice(0, MAX_AD_GALLERY).map((u, i) => tryFetchImageAsFile(u, `${pre.name || 'ad'}-${i}`)),
      ).then((files) => {
        setImageFiles(files.filter(Boolean));
      });
    }

    const t = window.setTimeout(() => {
      adFormRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 150);
    return () => window.clearTimeout(t);
  }, [location.state, location.pathname, navigate]);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        const raw = await getMerchantProducts();
        const list = Array.isArray(raw) ? raw : raw?.results ?? [];
        if (!cancelled) setMerchantProducts(list.filter((p) => !p.is_archived));
      } catch {
        if (!cancelled) setMerchantProducts([]);
      }
    })();
    return () => {
      cancelled = true;
    };
  }, []);

  const previewUrls = useMemo(() => imageFiles.map((f) => URL.createObjectURL(f)), [imageFiles]);
  useEffect(() => {
    return () => {
      previewUrls.forEach((u) => URL.revokeObjectURL(u));
    };
  }, [previewUrls]);
  const receiptPreview = useMemo(() => (paymentReceipt ? URL.createObjectURL(paymentReceipt) : ''), [paymentReceipt]);

  const selectedProduct = useMemo(() => {
    if (!productId) return null;
    return merchantProducts.find((p) => String(p.id) === String(productId)) ?? null;
  }, [merchantProducts, productId]);

  /** إعلان مستقل، أو منتج له أي صورة في الكتالوج → وصف الإعلان مطلوب (الصور تُنسخ من المنتج إن لم تُرفع) */
  const strictAdImageAndDesc = !productId || productHasVisual(selectedProduct);

  /** يجب رفع صور يدوياً فقط: بدون منتج، أو منتج بلا صور */
  const needExplicitAdImage = !productId || (selectedProduct ? !productHasVisual(selectedProduct) : true);

  const filteredProducts = useMemo(() => {
    const q = productSearch.trim();
    let list = merchantProducts;
    if (q) {
      list = merchantProducts.filter((p) => productMatchesSearch(p, q));
    }
    const selected = productId
      ? merchantProducts.find((p) => String(p.id) === String(productId))
      : null;
    if (selected && !list.some((p) => p.id === selected.id)) {
      list = [selected, ...list];
    }
    return list;
  }, [merchantProducts, productSearch, productId]);

  const onSelectProduct = (e) => {
    const id = e.target.value;
    setProductId(id);
    if (!id) {
      setImageFiles([]);
      return;
    }
    const p = merchantProducts.find((x) => String(x.id) === id);
    if (!p) return;
    setTitle((prev) => (prev.trim() ? prev : p.name || ''));
    setDescription((prev) => (prev.trim() ? prev : String(p.description || '').trim()));
    setProductPrice((prev) => (prev.trim() ? prev : String(p.price ?? '')));
    const urls = visualImageUrls(p);
    if (urls.length > 0) {
      Promise.all(urls.slice(0, MAX_AD_GALLERY).map((u, i) => tryFetchImageAsFile(u, `${p.name || 'ad'}-${i}`))).then(
        (files) => {
          setImageFiles(files.filter(Boolean));
        },
      );
    } else {
      setImageFiles([]);
    }
  };

  const onPickGallery = (fileList) => {
    if (!fileList?.length) return;
    const arr = Array.from(fileList);
    const big = arr.find((f) => f.size / (1024 * 1024) > MAX_IMAGE_MB);
    if (big) {
      void showAlert(`حجم إحدى الصور كبير. الحد الأقصى ${MAX_IMAGE_MB}MB لكل صورة`, 'تنبيه');
      return;
    }
    setImageFiles((prev) => {
      const { merged, skippedForCap } = mergeNewGalleryFiles(prev, arr, MAX_AD_GALLERY);
      if (skippedForCap > 0) {
        void showAlert(
          `وصلت للحد الأقصى ${MAX_AD_GALLERY} صور للإعلان. لم تُضف ${skippedForCap} ملفاً من هذه الجولة.`,
          'تنبيه',
        );
      }
      return merged;
    });
  };

  const onPickReceipt = (file) => {
    if (!file) return;
    const mb = file.size / (1024 * 1024);
    if (mb > MAX_IMAGE_MB) {
      void showAlert(`حجم الصورة كبير. الحد الأقصى ${MAX_IMAGE_MB}MB`, 'تنبيه');
      return;
    }
    setPaymentReceipt(file);
  };

  const submit = async (e) => {
    e.preventDefault();
    if (needExplicitAdImage && imageFiles.length === 0) {
      await showAlert(
        'اختر صوراً للإعلان، أو اربط الطلب بمنتج له صور في «منتجاتي» لنسخها تلقائياً على السيرفر.',
        'تنبيه',
      );
      return;
    }
    if (strictAdImageAndDesc && !description.trim()) {
      await showAlert('يرجى إدخال تفاصيل الإعلان.', 'تنبيه');
      return;
    }
    if (!paymentReceipt) {
      await showAlert('لازم ترفع إشعار دفع الإعلان', 'تنبيه');
      return;
    }
    const priceNum = parseFloat(String(productPrice).replace(',', '.'));
    if (!Number.isFinite(priceNum) || priceNum <= 0) {
      await showAlert('أدخل سعر المنتج المعروض في الإعلان (رقم أكبر من صفر)', 'تنبيه');
      return;
    }
    setSubmitting(true);
    try {
      const fd = new FormData();
      fd.append('title', title);
      fd.append('description', description.trim());
      if (productId) fd.append('product', String(productId));
      fd.append('product_price', String(priceNum));
      fd.append('payment_method', paymentMethod);
      for (const f of imageFiles) {
        fd.append('images', f);
      }
      fd.append('payment_receipt_image', paymentReceipt);
      await createMerchantAd(fd);
      setTitle('');
      setDescription('');
      setProductPrice('');
      setProductId('');
      setProductSearch('');
      setPaymentMethod(PAY_BALIPAY);
      setImageFiles([]);
      setPaymentReceipt(null);
      await showAlert('تم إرسال الطلب بنجاح. سيتم المراجعة خلال 24 ساعة.', 'تم');
    } catch (err) {
      await showAlert(formatApiError(err, 'تعذر إرسال الطلب. تحقق من الاتصال والبيانات.'), 'فشل');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <MainLayout>
      <div className="merchant-ads">
        <div className="flex-between" style={{ marginBottom: 14, flexWrap: 'wrap', gap: 12 }}>
          <h1 style={{ fontSize: '1.8rem', margin: 0 }}>طلب إعلان ممول</h1>
          <Link to="/merchant/my-ads" className="iconBtn" style={{ textDecoration: 'none' }}>
            إعلاناتي الممولة
          </Link>
        </div>

        <div className="card" style={{ maxWidth: 820, margin: '0 auto 18px auto' }}>
          <h3 style={{ marginBottom: 10 }}>طلب إعلان ممول</h3>
          <div
            className="card"
            style={{
              padding: '14px 16px',
              marginBottom: 16,
              background: 'linear-gradient(135deg, #FFF9E6 0%, #fff 100%)',
              border: '1px solid rgba(245,192,0,0.35)',
              borderRadius: 14,
              lineHeight: 1.65,
              fontSize: '0.95rem',
            }}
          >
            <strong style={{ color: 'var(--secondary)' }}>تنبيه مهم:</strong> رسوم الإعلان الممول{' '}
            <strong>5 شيكل</strong> تُسدَّد عبر القناة التي تختارها أدناه، ومدة ظهور الإعلان بعد قبول الإدارة{' '}
            <strong>24 ساعة</strong> فقط. يمكنك إما ربط الإعلان بمنتج من صفحة «منتجاتي»، أو ترك الإعلان مستقلاً.
          </div>
          <div
            className="card"
            style={{
              padding: '14px 16px',
              marginBottom: 16,
              background: 'linear-gradient(135deg, rgba(230, 239, 232, 0.9) 0%, #fff 100%)',
              border: '1px solid rgba(2, 119, 189, 0.22)',
              borderRadius: 14,
              lineHeight: 1.65,
              fontSize: '0.95rem',
            }}
          >
            <strong style={{ color: 'var(--secondary)' }}>ملاحظة التحويل:</strong> رقم التحويل الخاص بـ{' '}
            <strong>رادار</strong> هو <strong dir="ltr">0592377078</strong> باسم <strong>اسماعيل عبدالعال</strong>{' '}
            (بنك ومحفظة). سيتم الرد على طلبك خلال <strong>24 ساعة</strong>.
          </div>
          <form ref={adFormRef} onSubmit={submit}>
            <CustomInput
              icon={<Megaphone size={18} />}
              placeholder="عنوان الإعلان"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />

            <div style={{ marginBottom: 14 }}>
              <div style={{ fontWeight: 900, marginBottom: 8 }}>ربط اختياري بمنتج من «منتجاتي»</div>
              <p style={{ margin: '0 0 8px', fontSize: '0.88rem', color: 'var(--text-secondary)' }}>
                اترك القائمة على «إعلان مستقل» أو اختر منتجاً (غير مؤرشف). عند الاختيار نملأ العنوان والوصف والسعر،
                ونحاول جلب حتى {MAX_AD_GALLERY} صور من معرض المنتج للمعاينة. منتج بلا صور: يمكنك رفع صور الإعلان وتفاصيل
                الإعلان اختيارية.
              </p>
              <CustomInput
                type="search"
                autoComplete="off"
                enterKeyHint="search"
                icon={<Search size={18} />}
                placeholder="ابحث باسم المنتج، الوصف، السعر…"
                value={productSearch}
                onChange={(e) => setProductSearch(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') e.preventDefault();
                }}
              />
              <select
                value={productId}
                onChange={onSelectProduct}
                style={{
                  width: '100%',
                  padding: '0.85rem 1rem',
                  borderRadius: 'var(--radius-md)',
                  border: '1.5px solid var(--border)',
                  background: 'var(--surface)',
                  fontSize: '0.95rem',
                  fontFamily: 'inherit',
                  marginTop: 8,
                }}
              >
                <option value="">— إعلان مستقل (بدون منتج في الكتالوج) —</option>
                {filteredProducts.map((p) => (
                  <option key={p.id} value={p.id}>
                    {p.name} — {p.price} ₪
                  </option>
                ))}
              </select>
              {merchantProducts.length > 0 && filteredProducts.length === 0 ? (
                <p style={{ marginTop: 8, fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                  لا نتائج مطابقة لـ «{productSearch.trim()}». جرّب بحثاً أقصر أو امسح الحقل لعرض الكل.
                </p>
              ) : null}
              {merchantProducts.length === 0 ? (
                <p style={{ marginTop: 8, fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                  لا توجد منتجات بعد — يمكنك هذا الطلب كإعلان مستقل، أو أضف منتجات من «منتجاتي» لاحقاً لربط إعلاناتك بها.
                </p>
              ) : null}
            </div>

            <CustomInput
              type="number"
              inputMode="decimal"
              step="0.01"
              min="0.01"
              placeholder="سعر المنتج المعروض في الإعلان (₪)"
              value={productPrice}
              onChange={(e) => setProductPrice(e.target.value)}
              required
            />

            <div className="payment-method-block" style={{ marginBottom: 16 }}>
              <div style={{ fontWeight: 900, marginBottom: 8 }}>قناة دفع رسوم الإعلان</div>
              <div
                className="payment-method-switch"
                role="group"
                aria-label="طريقة الدفع"
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
                  borderRadius: 14,
                  overflow: 'hidden',
                  border: '1.5px solid var(--border)',
                  background: 'var(--surface)',
                }}
              >
                <button
                  type="button"
                  onClick={() => setPaymentMethod(PAY_BALIPAY)}
                  style={{
                    padding: '12px 8px',
                    border: 'none',
                    cursor: 'pointer',
                    fontWeight: 800,
                    fontFamily: 'inherit',
                    fontSize: 'clamp(0.76rem, 2.8vw, 0.9rem)',
                    lineHeight: 1.25,
                    textAlign: 'center',
                    background: paymentMethod === PAY_BALIPAY ? 'var(--primary)' : 'transparent',
                    color: paymentMethod === PAY_BALIPAY ? 'var(--secondary)' : 'var(--text-secondary)',
                  }}
                >
                  محفظة بال باي
                </button>
                <button
                  type="button"
                  onClick={() => setPaymentMethod(PAY_BANK_PS)}
                  style={{
                    padding: '12px 8px',
                    border: 'none',
                    cursor: 'pointer',
                    fontWeight: 800,
                    fontFamily: 'inherit',
                    fontSize: 'clamp(0.76rem, 2.8vw, 0.9rem)',
                    lineHeight: 1.25,
                    textAlign: 'center',
                    borderInlineStart: '1.5px solid var(--border)',
                    background: paymentMethod === PAY_BANK_PS ? 'var(--primary)' : 'transparent',
                    color: paymentMethod === PAY_BANK_PS ? 'var(--secondary)' : 'var(--text-secondary)',
                  }}
                >
                  بنك فلسطين
                </button>
              </div>
            </div>

            <div className="input-group">
              <div style={{ fontWeight: 800, marginBottom: 8, color: 'var(--secondary)' }}>
                تفاصيل الإعلان
                {!strictAdImageAndDesc ? (
                  <span style={{ fontWeight: 600, color: 'var(--text-secondary)', fontSize: '0.88rem' }}>
                    {' '}
                    (اختياري — منتج بلا صور)
                  </span>
                ) : null}
              </div>
              <textarea
                placeholder={
                  strictAdImageAndDesc
                    ? 'تفاصيل الإعلان'
                    : 'يمكنك تركه فارغاً عند ربط منتج بلا صور في الكتالوج'
                }
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                style={{
                  width: '100%',
                  padding: '0.85rem 1rem',
                  borderRadius: 'var(--radius-md)',
                  border: '1.5px solid var(--border)',
                  background: 'var(--surface)',
                  minHeight: 110,
                  resize: 'vertical',
                }}
                required={strictAdImageAndDesc}
              />
            </div>

            <div className="card" style={{ padding: 14, marginBottom: 14, background: 'var(--surface)' }}>
              <div style={{ marginBottom: 10, color: 'var(--text-secondary)', fontSize: '0.88rem', lineHeight: 1.55 }}>
                يمكن رفع حتى <strong>{MAX_AD_GALLERY} صور</strong>.                 كل مرة تضغط «اختر صوراً» تُضاف الصور الجديدة إلى التي اخترتها
                سابقاً حتى يكتمل العدد — دون استبدال ما أضفته قبلها. الصورة الأولى غلاف حيث يُعرض صورة واحدة فقط.
              </div>
              <div style={{ display: 'flex', gap: 14, alignItems: 'flex-start', justifyContent: 'space-between', flexWrap: 'wrap' }}>
                <div style={{ flex: '1 1 220px', minWidth: 0 }}>
                  {previewUrls.length > 0 ? (
                    <>
                      <GalleryThumbRow urls={previewUrls} max={MAX_AD_GALLERY} />
                      <ImageCarousel images={previewUrls} height={140} borderRadius={16} />
                    </>
                  ) : (
                    <div className="thumbLg" style={{ width: '100%', maxWidth: 280, height: 120 }}>
                      <ImageIcon size={28} />
                    </div>
                  )}
                </div>
                <div style={{ flex: '1 1 200px' }}>
                  <div style={{ fontWeight: 900 }}>
                    صور الإعلان
                    {!needExplicitAdImage ? (
                      <span style={{ fontWeight: 600, color: 'var(--text-secondary)', fontSize: '0.85rem' }}>
                        {' '}
                        (اختياري — تُنسخ من معرض المنتج تلقائياً إن لم ترفع صوراً هنا)
                      </span>
                    ) : (
                      <span style={{ fontWeight: 600, color: 'var(--text-secondary)', fontSize: '0.85rem' }}>
                        {' '}
                        (مطلوب)
                      </span>
                    )}
                  </div>
                  <div style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginTop: 6 }}>
                    حتى {MAX_AD_GALLERY} صور — PNG/JPG حتى {MAX_IMAGE_MB}MB لكل صورة
                    {productHasVisual(selectedProduct) && imageFiles.length === 0 ? (
                      <span>
                        {' '}
                        — يُفضَّل رفع صوراً؛ وإلا تُنسخ من معرض المنتج عند الإرسال.
                      </span>
                    ) : null}
                  </div>
                  <label
                    className="iconBtn merchant-file-pick-label"
                    style={{
                      cursor: 'pointer',
                      marginTop: 12,
                      display: 'inline-flex',
                      alignItems: 'center',
                      position: 'relative',
                      overflow: 'hidden',
                    }}
                  >
                    {needExplicitAdImage ? `اختر صوراً (حتى ${MAX_AD_GALLERY})` : 'تغيير صور الإعلان (اختياري)'}
                    <input
                      type="file"
                      accept="image/*,.jpg,.jpeg,.png,.webp,.heif,.heic"
                      multiple
                      style={{
                        position: 'absolute',
                        inset: 0,
                        width: '100%',
                        height: '100%',
                        opacity: 0,
                        cursor: 'pointer',
                        fontSize: 'inherit',
                        zIndex: 2,
                      }}
                      onChange={(e) => {
                        const list = e.target.files;
                        if (list?.length) onPickGallery(list);
                        e.target.value = '';
                      }}
                    />
                  </label>
                </div>
              </div>
            </div>

            <div className="card" style={{ padding: 14, marginBottom: 14, background: 'var(--surface)' }}>
              <div style={{ display: 'flex', gap: 14, alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap' }}>
                <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
                  <div className="thumbLg">
                    {receiptPreview ? <img src={receiptPreview} alt="receipt" loading="lazy" width="120" height="120" /> : <ImageIcon size={22} />}
                  </div>
                  <div>
                    <div style={{ fontWeight: 900 }}>إشعار الدفع</div>
                    <div style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>PNG/JPG حتى {MAX_IMAGE_MB}MB</div>
                  </div>
                </div>

                <label
                  className="iconBtn merchant-file-pick-label"
                  style={{
                    cursor: 'pointer',
                    display: 'inline-flex',
                    gap: 8,
                    alignItems: 'center',
                    position: 'relative',
                    overflow: 'hidden',
                  }}
                >
                  <Upload size={18} />
                  رفع إشعار الدفع
                  <input
                    type="file"
                    accept="image/*,.jpg,.jpeg,.png,.webp"
                    style={{
                      position: 'absolute',
                      inset: 0,
                      width: '100%',
                      height: '100%',
                      opacity: 0,
                      cursor: 'pointer',
                      fontSize: 'inherit',
                      zIndex: 2,
                    }}
                    onChange={(e) => {
                      const f = e.target.files?.[0];
                      if (f) onPickReceipt(f);
                      e.target.value = '';
                    }}
                  />
                </label>
              </div>
            </div>

            <CustomButton
              type="submit"
              loading={submitting}
              style={{ width: '100%' }}
              confirm={false}
              showErrorAlert={false}
            >
              إرسال الطلب
            </CustomButton>
          </form>
        </div>

        <p style={{ textAlign: 'center', marginTop: 18, color: 'var(--text-secondary)' }}>
          لمراجعة كل إعلاناتك (المنتهية والنشطة وغيرها) افتح{' '}
          <Link to="/merchant/my-ads" style={{ fontWeight: 800, color: 'var(--secondary)' }}>
            إعلاناتي الممولة
          </Link>
          .
        </p>

        <style dangerouslySetInnerHTML={{ __html: `
          .merchant-ads{
            max-width: 1240px;
            margin-inline: auto;
            padding-inline: clamp(8px, 2.2vw, 22px);
            padding-bottom: 32px;
            box-sizing: border-box;
          }
          .thumbLg { width: 72px; height: 72px; border-radius: 20px; background: var(--primary-light); border: 1px solid rgba(245,192,0,0.25); display: flex; align-items: center; justify-content: center; overflow: hidden; }
          .thumbLg img { width: 100%; height: 100%; object-fit: cover; }
          .iconBtn { border: 1px solid var(--border); background: var(--white); padding: 10px 14px; border-radius: 14px; font-weight: 900; color: var(--secondary); display: inline-flex; align-items: center; gap: 8px; }
          .iconBtn:hover { background: var(--primary-light); }
          .merchant-file-pick-label input[type=file]::-webkit-file-upload-button { cursor: pointer; }
        `}} />
      </div>
    </MainLayout>
  );
};

export default MerchantAds;

