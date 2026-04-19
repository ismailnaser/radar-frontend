import React, { useEffect, useMemo, useRef, useState } from 'react';
import MainLayout from '../../components/MainLayout';
import { useNavigate, useParams } from 'react-router-dom';
import {
  createMerchantProduct,
  exportMerchantProductsExcel,
  getMerchantProduct,
  importMerchantProductsExcel,
  updateMerchantProduct,
} from '../../api/data';
import { useAlert } from '../../components/AlertProvider';
import { formatApiError } from '../../utils/apiErrors';
import CustomInput from '../../components/ui/CustomInput';
import CustomButton from '../../components/ui/CustomButton';
import ImageCarousel from '../../components/ImageCarousel';
import GalleryThumbRow from '../../components/GalleryThumbRow';
import { visualImageUrls } from '../../utils/productImages';
import { mergeNewGalleryFiles } from '../../utils/galleryFiles';
import { Package, Image as ImageIcon, FileText, Sparkles, Download, Upload } from 'lucide-react';

const ShekelIcon = () => (
  <span
    title="الشيكل الجديد (₪)"
    aria-hidden
    style={{
      fontWeight: 900,
      fontSize: '1.05rem',
      lineHeight: 1,
      color: 'var(--secondary)',
    }}
  >
    ₪
  </span>
);

const MAX_IMAGE_MB = 3;
const MAX_GALLERY = 5;
const MAX_PRODUCT_FEATURES = 5;

const MerchantProductForm = () => {
  const { showAlert, showConfirm } = useAlert();
  const { id } = useParams();
  const isEdit = !!id;
  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [features, setFeatures] = useState(['']);
  /** عند التعديل: عرض الصور الحالية حتى يختار التاجر استبدالاً */
  const [existingImageUrls, setExistingImageUrls] = useState([]);
  /** ملفات جديدة تُرسل مع الطلب؛ تُختار على دفعات ويُدمج الاختيار حتى 5 */
  const [replacementFiles, setReplacementFiles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [excelImporting, setExcelImporting] = useState(false);
  const excelImportInputRef = useRef(null);

  const newBlobUrls = useMemo(() => replacementFiles.map((f) => URL.createObjectURL(f)), [replacementFiles]);

  useEffect(() => {
    return () => {
      newBlobUrls.forEach((u) => URL.revokeObjectURL(u));
    };
  }, [newBlobUrls]);

  const displayUrls = replacementFiles.length > 0 ? newBlobUrls : existingImageUrls;

  useEffect(() => {
    const load = async () => {
      if (!isEdit) return;
      const p = await getMerchantProduct(id);
      setName(p.name || '');
      setPrice(p.price ?? '');
      setDescription(p.description || '');
      const rawFeats = Array.isArray(p.product_features) ? p.product_features.filter(Boolean) : [];
      setFeatures(rawFeats.length ? rawFeats.slice(0, MAX_PRODUCT_FEATURES) : ['']);
      setExistingImageUrls(visualImageUrls(p));
      setReplacementFiles([]);
    };
    load();
  }, [id, isEdit]);

  const onPickGallery = (fileList) => {
    if (!fileList?.length) return;
    const arr = Array.from(fileList);
    const oversized = arr.find((f) => f.size / (1024 * 1024) > MAX_IMAGE_MB);
    if (oversized) {
      void showAlert(`حجم إحدى الصور كبير. الحد الأقصى ${MAX_IMAGE_MB}MB لكل صورة`, 'تنبيه');
      return;
    }
    setReplacementFiles((prev) => {
      const { merged, skippedForCap } = mergeNewGalleryFiles(prev, arr, MAX_GALLERY);
      if (skippedForCap > 0) {
        void showAlert(
          `وصلت للحد الأقصى ${MAX_GALLERY} صور. لم تُضف ${skippedForCap} ملفاً من هذه الجولة — احذف بـ «إلغاء الصور» أو أرسل ثم عدّل لاحقاً.`,
          'تنبيه',
        );
      }
      return merged;
    });
  };

  const submit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const featList = features
        .map((x) => String(x || '').trim())
        .filter(Boolean)
        .slice(0, MAX_PRODUCT_FEATURES);
      const fd = new FormData();
      fd.append('name', name);
      fd.append('price', price);
      fd.append('description', description);
      fd.append('product_features', JSON.stringify(featList));

      if (!isEdit) {
        for (const f of replacementFiles) {
          fd.append('images', f);
        }
        await createMerchantProduct(fd);
        await showAlert('تمت إضافة المنتج بنجاح.', 'تم');
      } else {
        if (replacementFiles.length > 0) {
          for (const f of replacementFiles) {
            fd.append('images', f);
          }
        }
        await updateMerchantProduct(id, fd);
        await showAlert('تم حفظ تعديلات المنتج.', 'تم');
      }
      navigate('/merchant/products');
    } catch (err) {
      await showAlert(formatApiError(err, isEdit ? 'تعذر حفظ المنتج.' : 'تعذر إضافة المنتج.'), 'فشل');
    } finally {
      setLoading(false);
    }
  };

  const addFeatureRow = async () => {
    const ok = await showConfirm('إضافة سطر تفصيل جديد؟', 'تأكيد');
    if (!ok) return;
    setFeatures((prev) => {
      if (prev.length >= MAX_PRODUCT_FEATURES) return prev;
      return [...prev, ''];
    });
    await showAlert('تمت إضافة السطر.', 'تم');
  };

  const removeFeatureRow = async (idx) => {
    const ok = await showConfirm('حذف هذا السطر من تفاصيل المنتج؟', 'تأكيد');
    if (!ok) return;
    setFeatures((prev) => {
      const next = prev.filter((_, i) => i !== idx);
      return next.length ? next : [''];
    });
    await showAlert('تم حذف السطر.', 'تم');
  };

  const handleExcelExport = async () => {
    try {
      const blob = await exportMerchantProductsExcel();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `منتجات_رادار_${new Date().toLocaleDateString('ar-EG').replace(/\//g, '-')}.xlsx`;
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
      document.body.removeChild(a);
    } catch {
      void showAlert('تعذر تصدير الملف. حاول مرة أخرى.', 'خطأ');
    }
  };

  const handleExcelImport = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setExcelImporting(true);
    try {
      const res = await importMerchantProductsExcel(file);
      await showAlert(res.message || 'تم استيراد المنتجات.', 'تم');
      navigate('/merchant/products');
    } catch (err) {
      const msg =
        err.response?.data?.error || 'فشل استيراد الملف. تأكد من صيغة .xlsx والأعمدة كما في ملف التصدير.';
      void showAlert(msg, 'خطأ');
    } finally {
      setExcelImporting(false);
      e.target.value = '';
    }
  };

  return (
    <MainLayout>
      <div className="merchant-product-form">
        <h1 style={{ marginBottom: 14, fontSize: '1.8rem' }}>{isEdit ? 'تعديل منتج' : 'إضافة منتج'}</h1>

        {!isEdit ? (
          <div
            className="card merchant-excel-card"
            style={{ maxWidth: 720, margin: '0 auto 16px', position: 'relative' }}
          >
            <div style={{ fontWeight: 900, marginBottom: 8, fontSize: '1.02rem' }}>استيراد وتصدير Excel</div>
            <p style={{ margin: '0 0 12px', fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
              <strong>تصدير:</strong> ينزّل ملفاً فيه كل منتجات متجرك الحالية بأعمدة جاهزة (اسم، سعر، وصف، تفاصيل، حالة).
              <br />
              <strong>استيراد:</strong> يضيف <strong>منتجاً جديداً</strong> لكل صف بيانات بعد صف العناوين — لا يعدّل
              المنتجات الموجودة. يُفضّل استخدام ملفاً صدرته من هنا كقالب.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, marginBottom: 12 }}>
              <button
                type="button"
                className="iconBtn"
                onClick={() => void handleExcelExport()}
                style={{ gap: 8 }}
              >
                <Download size={18} />
                تصدير ملف Excel
              </button>
              <input
                ref={excelImportInputRef}
                type="file"
                accept=".xlsx,.xls"
                className="merchant-excel-file-input"
                aria-hidden
                tabIndex={-1}
                onChange={(e) => void handleExcelImport(e)}
              />
              <button
                type="button"
                className="iconBtn"
                disabled={excelImporting}
                onClick={() => excelImportInputRef.current?.click()}
                style={{ gap: 8 }}
              >
                <Upload size={18} />
                {excelImporting ? 'جاري الاستيراد…' : 'استيراد ملف Excel'}
              </button>
            </div>
            <p style={{ margin: 0, fontSize: '0.8rem', color: 'var(--text-light)', lineHeight: 1.55 }}>
              الصف الأول في الملف للعناوين؛ تبدأ البيانات من الصف الثاني. للتفاصيل الدقيقة راجع صفحة «منتجاتي» بعد
              الاستيراد.
            </p>
          </div>
        ) : null}

        <div className="card" style={{ maxWidth: 720, margin: '0 auto' }}>
          <form onSubmit={submit}>
            <CustomInput
              icon={<Package size={18} />}
              placeholder="اسم المنتج"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />

            <CustomInput
              icon={<ShekelIcon />}
              placeholder="السعر بالشيكل (₪)"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              required
            />

            <div className="input-group">
              <div className="input-icon"><FileText size={18} /></div>
              <textarea
                placeholder="وصف المنتج"
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
              />
            </div>

            <div style={{ marginTop: 18, paddingTop: 16, borderTop: '1px solid var(--border)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8, fontWeight: 800 }}>
                <Sparkles size={18} />
                تفاصيل المنتج (اختياري — حتى {MAX_PRODUCT_FEATURES})
              </div>
              <p style={{ margin: '0 0 10px', fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.55 }}>
                اكتب تفاصيل قصيرة تظهر للمتسوّق (مثل: المقاس، اللون، الخامة…). كل سطر = تفصيل واحد.
              </p>
              {features.map((f, idx) => (
                <div key={idx} style={{ display: 'flex', gap: 8, marginBottom: 8, alignItems: 'center' }}>
                  <input
                    type="text"
                    value={f}
                    maxLength={80}
                    placeholder={`تفصيل ${idx + 1}`}
                    onChange={(e) => {
                      const v = e.target.value;
                      setFeatures((prev) => prev.map((x, i) => (i === idx ? v : x)));
                    }}
                    style={{
                      flex: 1,
                      padding: '0.75rem 0.9rem',
                      borderRadius: 'var(--radius-md)',
                      border: '1.5px solid var(--border)',
                      background: 'var(--surface)',
                    }}
                  />
                  {features.length > 1 ? (
                    <button
                      type="button"
                      onClick={() => removeFeatureRow(idx)}
                      style={{
                        padding: '8px 10px',
                        borderRadius: 10,
                        border: '1px solid var(--border)',
                        background: 'var(--surface)',
                        cursor: 'pointer',
                        fontWeight: 700,
                      }}
                    >
                      حذف
                    </button>
                  ) : null}
                </div>
              ))}
              {features.length < MAX_PRODUCT_FEATURES ? (
                <button
                  type="button"
                  onClick={addFeatureRow}
                  style={{
                    marginTop: 4,
                    padding: '8px 14px',
                    borderRadius: 10,
                    border: '1px dashed var(--border)',
                    background: 'transparent',
                    cursor: 'pointer',
                    fontWeight: 700,
                    color: 'var(--secondary)',
                  }}
                >
                  + إضافة تفصيل
                </button>
              ) : null}
            </div>

            <div className="card" style={{ padding: 14, marginBottom: 14, background: 'var(--surface)' }}>
              <div style={{ fontWeight: 900, marginBottom: 6 }}>صور المنتج (معرض واحد)</div>
              <p style={{ margin: '0 0 12px', fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                يمكنك إضافة حتى <strong>{MAX_GALLERY} صور</strong>. اختر من المعرض عدة مرات — كل اختيار <strong>يُضاف</strong>{' '}
                للصور الحالية حتى يكتمل العدد، وليس استبدالاً لها. يمكنك اختيار عدة ملفات دفعة واحدة أيضاً (Ctrl أو ⌘).{' '}
                {isEdit
                  ? 'عند الإرسال بصور جديدة تُستبدل صور المتجر السابقة كلها بهذه المجموعة.'
                  : null}
              </p>

              {displayUrls.length > 0 ? (
                <div style={{ marginBottom: 12 }}>
                  <GalleryThumbRow urls={displayUrls} max={MAX_GALLERY} />
                  <ImageCarousel images={displayUrls} alt="" height={152} borderRadius={14} />
                </div>
              ) : (
                <div
                  className="thumbLg"
                  style={{
                    marginBottom: 12,
                    width: '100%',
                    maxWidth: 280,
                    height: 160,
                    borderRadius: 20,
                    marginInline: 'auto',
                  }}
                >
                  <ImageIcon size={36} />
                </div>
              )}

              <label
                className="iconBtn merchant-file-pick-label"
                style={{
                  cursor: 'pointer',
                  display: 'inline-flex',
                  gap: 8,
                  position: 'relative',
                  overflow: 'hidden',
                  alignItems: 'center',
                }}
              >
                <ImageIcon size={18} />
                {isEdit ? 'اختر صوراً جديدة (تستبدل الحالي)' : `اختر الصور (حتى ${MAX_GALLERY})`}
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
              {replacementFiles.length > 0 ? (
                <button
                  type="button"
                  className="iconBtn"
                  style={{ marginInlineStart: 10, background: 'transparent' }}
                  onClick={async () => {
                    const ok = await showConfirm('إلغاء الصور الجديدة المختارة للاستبدال؟', 'تأكيد');
                    if (!ok) return;
                    setReplacementFiles([]);
                    await showAlert('تم إلغاء اختيار الصور.', 'تم');
                  }}
                >
                  إلغاء الصور المختارة
                </button>
              ) : null}
            </div>

            <CustomButton
              type="submit"
              loading={loading}
              style={{ width: '100%' }}
              confirm={false}
              showErrorAlert={false}
            >
              {isEdit ? 'حفظ التعديل' : 'إضافة المنتج'}
            </CustomButton>
          </form>
        </div>

        <style dangerouslySetInnerHTML={{ __html: `
          .merchant-product-form{
            max-width: 1240px;
            margin-inline: auto;
            padding-inline: clamp(8px, 2.2vw, 22px);
            padding-bottom: 32px;
            box-sizing: border-box;
          }
          .thumbLg { background: var(--primary-light); border: 1px solid rgba(245,192,0,0.25); display: flex; align-items: center; justify-content: center; overflow: hidden; }
          .iconBtn { border: 1px solid var(--border); background: var(--white); padding: 10px 14px; border-radius: 14px; font-weight: 900; color: var(--secondary); display: inline-flex; align-items: center; gap: 8px; }
          .iconBtn:hover { background: var(--primary-light); }
          .merchant-file-pick-label input[type=file]::-webkit-file-upload-button { cursor: pointer; }
          .merchant-excel-card .iconBtn:disabled { opacity: 0.65; cursor: wait; }
          .merchant-excel-file-input {
            position: absolute;
            width: 1px;
            height: 1px;
            opacity: 0;
            pointer-events: none;
          }
        `}} />
      </div>
    </MainLayout>
  );
};

export default MerchantProductForm;
