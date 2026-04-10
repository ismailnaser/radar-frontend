import React, { useState, useEffect } from 'react';
import MainLayout from '../components/MainLayout';
import { Share2, Trash2, Plus, ChevronUp, ChevronDown, Image as ImageIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
import {
  getCarts,
  getCart,
  createCart,
  updateCart,
  deleteCart,
  updateCartItem,
  deleteCartItem,
  getShopperNotices,
} from '../api/data';
import { useAlert } from '../components/AlertProvider';
import GuestAccessPrompt from '../components/GuestAccessPrompt';
import ImageCarousel from '../components/ImageCarousel';
import { cartItemImageUrls } from '../utils/productImages';
import { formatApiError } from '../utils/apiErrors';
import { canUseShoppingCarts } from '../utils/cartAccess';

const buildSharedCartPageUrl = (shareToken) => {
  if (typeof window === 'undefined' || !shareToken) return '';
  return `${window.location.origin}/share/cart/${shareToken}`;
};

/** أسطر الرابط لواتساب: تسمية ASCII ثم رابط مع LRO ثم نسخة خام */
const whatsappCartLinkBlock = (pageUrl) => {
  const u = String(pageUrl || '').trim();
  if (!u) return [];
  return ['Cart link:', `\u202D${u}\u202C`, u];
};

const Carts = () => {
  const [carts, setCarts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [savingItemId, setSavingItemId] = useState(null);
  const [savingCartId, setSavingCartId] = useState(null);
  const [isGuest, setIsGuest] = useState(localStorage.getItem('isGuest') === 'true');
  const { showAlert, showPrompt, showConfirm } = useAlert();

  const fetchCarts = async () => {
    try {
      const data = await getCarts();
      setCarts(data);
    } catch (err) {
      console.error('Error fetching carts:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    (async () => {
      await fetchCarts();
      if (!canUseShoppingCarts()) return;
      try {
        const { notices } = await getShopperNotices();
        const list = Array.isArray(notices) ? notices : [];
        for (const entry of list) {
          const t = typeof entry === 'string' ? entry : entry?.text;
          if (t) await showAlert(t, 'تنبيه');
        }
      } catch {
        /* ignore */
      }
    })();
  }, []);

  const removeCartItemWithConfirm = async (item) => {
    const label = item.line_title || item.product_details?.name || 'هذا السطر';
    const ok = await showConfirm(`هل تريد إزالة «${label}» من السلة؟`, 'تأكيد الحذف');
    if (!ok) return;
    setSavingItemId(item.id);
    try {
      await deleteCartItem(item.id);
      await fetchCarts();
    } catch (err) {
      showAlert(formatApiError(err, 'تعذر حذف المنتج.'));
    } finally {
      setSavingItemId(null);
    }
  };

  const adjustItemQuantity = async (item, delta) => {
    const next = item.quantity + delta;
    if (next < 1) {
      await removeCartItemWithConfirm(item);
      return;
    }
    setSavingItemId(item.id);
    try {
      await updateCartItem(item.id, { quantity: next });
      await fetchCarts();
    } catch (err) {
      showAlert(formatApiError(err, 'تعذر تحديث الكمية.'));
    } finally {
      setSavingItemId(null);
    }
  };

  const commitItemQuantity = async (item, raw) => {
    const q = parseInt(String(raw), 10);
    if (Number.isNaN(q) || q < 1) {
      showAlert('الكمية يجب أن تكون رقماً صحيحاً ≥ ١');
      await fetchCarts();
      return;
    }
    setSavingItemId(item.id);
    try {
      await updateCartItem(item.id, { quantity: q });
      await fetchCarts();
    } catch (err) {
      showAlert(formatApiError(err, 'تعذر تحديث الكمية.'));
      await fetchCarts();
    } finally {
      setSavingItemId(null);
    }
  };

  const handleCreateCart = async () => {
    const name = await showPrompt('أدخل اسم السلة الجديدة (مثل: أغراض المنزل):', 'اسم السلة...');
    if (name) {
      try {
        await createCart(name);
        fetchCarts();
      } catch (err) {
        showAlert(formatApiError(err, 'تعذر إنشاء السلة.'), 'خطأ');
      }
    }
  };

  const unitEffective = (item) => {
    if (item.effective_unit_price != null && item.effective_unit_price !== '') {
      const n = Number(item.effective_unit_price);
      if (Number.isFinite(n)) return n;
    }
    return Number(item.product_details?.price ?? 0);
  };

  const catalogUnit = (item) => {
    const raw = item.catalog_unit_price;
    if (raw == null || raw === '') return null;
    const n = Number(raw);
    return Number.isFinite(n) ? n : null;
  };

  const linePrice = (item) => unitEffective(item) * Number(item.quantity ?? 0);

  const shareOnWhatsApp = async (cart) => {
    let token =
      cart.share_token != null && cart.share_token !== '' ? String(cart.share_token) : '';
    if (!token) {
      try {
        const fresh = await getCart(cart.id);
        token =
          fresh?.share_token != null && fresh.share_token !== ''
            ? String(fresh.share_token)
            : '';
      } catch {
        token = '';
      }
    }
    if (!token) {
      showAlert(
        'تعذر الحصول على رابط المشاركة. تحقق من الاتصال بالخادم ثم حدّث الصفحة.',
        'مشاركة السلة'
      );
      return;
    }

    const pageUrl = buildSharedCartPageUrl(token);
    const name = cart.name || 'سلة المشتريات';
    const items = cart.items || [];
    const total = items.reduce((acc, item) => acc + linePrice(item), 0);

    const blocks = items.map((item, i) => {
      const d = item.product_details || {};
      const title = item.line_title || d.name || 'منتج';
      const unit = unitEffective(item);
      const cat = catalogUnit(item);
      const q = Number(item.quantity ?? 0);
      const sub = linePrice(item);
      let block = `${i + 1}) ${title}\n   ${q} × ${unit.toFixed(2)} ₪ = ${sub.toFixed(2)} ₪`;
      if (item.is_promotional_line && cat != null && Math.abs(unit - cat) > 1e-9) {
        block += `\n   (سعر عرض ممول؛ السعر المعتاد في المتجر ${cat.toFixed(2)} ₪)`;
      } else if (item.is_promotional_line && item.is_standalone_ad_line) {
        block += `\n   (عرض ممول مستقل — بسعر الإعلان)`;
      }
      const itemNote = (item.note || '').trim();
      if (itemNote) {
        block += `\n   📌 ملاحظة: ${itemNote}`;
      }
      return block;
    });

    const cartNote = (cart.notes || '').trim();
    const buildText = (short) => {
      if (short) {
        return [
          `رادار — ${name}`,
          `الإجمالي: ${total} ₪`,
          'التفاصيل الكاملة في الرابط أدناه.',
          '',
          '────────',
          'رابط عرض السلة على موقع رادار:',
          ...whatsappCartLinkBlock(pageUrl),
          '',
          'تم إنشاء القائمة من تطبيق رادار.',
        ].join('\n');
      }
      return [
        `رادار — ${name}`,
        ...(cartNote ? [`ملاحظة على السلة: ${cartNote}`, '──────────────────'] : []),
        ...blocks,
        '──────────────────',
        `الإجمالي: ${total} ₪`,
        '',
        '────────',
        'رابط عرض السلة على موقع رادار (اضغط للصفحة والصور):',
        ...whatsappCartLinkBlock(pageUrl),
        '',
        'تم إنشاء القائمة من تطبيق رادار.',
      ].join('\n');
    };

    let text = buildText(false);
    let waUrl = `https://wa.me/?text=${encodeURIComponent(text)}`;
    if (waUrl.length > 6000) {
      text = buildText(true);
      waUrl = `https://wa.me/?text=${encodeURIComponent(text)}`;
    }

    const w = window.open(waUrl, '_blank', 'noopener,noreferrer');
    if (!w) {
      showAlert('تعذر فتح واتساب. اسمح بالنوافذ المنبثقة ثم أعد المحاولة.', 'مشاركة السلة');
    }
  };

  const handleDeleteCart = async (cart) => {
    const ok = await showConfirm(
      `حذف السلة «${cart.name}» وجميع محتوياتها نهائياً؟ لا يمكن التراجع.`,
      'تأكيد حذف السلة'
    );
    if (!ok) return;
    try {
      await deleteCart(cart.id);
      await fetchCarts();
    } catch (err) {
      showAlert(formatApiError(err, 'تعذر حذف السلة.'), 'خطأ');
    }
  };

  const saveCartNotes = async (cart, raw) => {
    const next = raw ?? '';
    if ((cart.notes ?? '') === next) return;
    setSavingCartId(cart.id);
    try {
      await updateCart(cart.id, { notes: next });
      await fetchCarts();
    } catch (err) {
      showAlert(formatApiError(err, 'تعذر حفظ الملاحظة.'));
      await fetchCarts();
    } finally {
      setSavingCartId(null);
    }
  };

  const saveItemNote = async (item, raw) => {
    const next = raw ?? '';
    if ((item.note ?? '') === next) return;
    setSavingItemId(item.id);
    try {
      await updateCartItem(item.id, { note: next });
      await fetchCarts();
    } catch (err) {
      showAlert(formatApiError(err, 'تعذر حفظ الملاحظة.'));
      await fetchCarts();
    } finally {
      setSavingItemId(null);
    }
  };

  return (
    <MainLayout>
      <div className="carts-page">
        {isGuest ? (
          <GuestAccessPrompt 
            title="سلال المشتريات متوفرة للأعضاء فقط" 
            message="قم بإنشاء حساب مجاني لتتمكن من إنشاء سلال مشتريات متعددة ومشاركتها مع عائلتك وأصدقائك عبر الواتساب."
          />
        ) : (
          <>
            <div className="carts-head flex-between">
              <h1 className="carts-title">سلال المشتريات</h1>
              <button className="btn-primary carts-new-btn" onClick={handleCreateCart}>
                <Plus size={20} /> سلة جديدة
              </button>
            </div>

            {loading ? (
              <p>جاري تحميل السلال...</p>
            ) : carts.length > 0 ? (
              <div className="carts-grid">
                {carts.map(cart => {
                  const isSponsoredAdNoteLine = (l) =>
                    l.includes('الإعلان الممول') &&
                    (l.includes('انتهت') ||
                      l.includes('انتهاء') ||
                      l.includes('تمت إزالة') ||
                      l.includes('أُزيل') ||
                      l.includes('مستقل') ||
                      l.includes('غير مربوط') ||
                      l.includes('كتالوج') ||
                      l.includes('عُدِّ سعره') ||
                      l.includes('السعر الأصلي'));
                  const sponsoredNoticeLines = String(cart.notes || '')
                    .split('\n')
                    .map((l) => l.trim())
                    .filter(isSponsoredAdNoteLine);
                  const dismissSponsoredNotices = async () => {
                    const rest = String(cart.notes || '')
                      .split('\n')
                      .map((l) => l.trim())
                      .filter((l) => !isSponsoredAdNoteLine(l))
                      .join('\n')
                      .trim();
                    setSavingCartId(cart.id);
                    try {
                      await updateCart(cart.id, { notes: rest });
                      await fetchCarts();
                    } finally {
                      setSavingCartId(null);
                    }
                  };
                  return (
                    <div key={cart.id} className="card shopping-cart-card">
                      <div className="cart-collapsed-row">
                        <Link to={`/carts/${cart.id}`} className="cart-collapsed-link" aria-label={`فتح سلة ${cart.name}`}>
                          <h3 className="cart-collapsed-title">{cart.name}</h3>
                        </Link>
                        <div className="actions flex-center" style={{ gap: '10px' }}>
                          <button
                            type="button"
                            className="action-btn share"
                            title="مشاركة واتساب"
                            onClick={() => shareOnWhatsApp(cart)}
                          >
                            <Share2 size={18} />
                          </button>
                          <button
                            type="button"
                            className="action-btn delete"
                            title="حذف السلة"
                            onClick={() => handleDeleteCart(cart)}
                          >
                            <Trash2 size={18} />
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            ) : (
              <div className="empty-state card flex-center" style={{ flexDirection: 'column', padding: '50px' }}>
                 <p>ليس لديك أي سلال مشتريات بعد.</p>
                 <button className="btn-primary" onClick={handleCreateCart} style={{ width: 'auto', marginTop: '20px' }}>ابدأ بإنشاء أول سلة</button>
              </div>
            )}
          </>
        )}

        <style dangerouslySetInnerHTML={{ __html: `
          .carts-page{
            max-width: 1240px;
            margin-inline: auto;
            padding-inline: clamp(8px, 2.2vw, 22px);
            padding-bottom: 32px;
            box-sizing: border-box;
          }
          .carts-head{
            margin-bottom: 20px;
            flex-wrap: wrap;
            gap: 12px;
          }
          .carts-title{
            margin: 0;
            font-weight: 950;
            font-size: 1.65rem;
            color: var(--secondary);
            letter-spacing: -0.02em;
          }
          .carts-new-btn{
            width: auto;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            gap: 10px;
            padding: 10px 16px;
          }
          .carts-grid{
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: clamp(12px, 3vw, 20px);
          }
          @media (min-width: 960px) {
            .carts-grid{
              grid-template-columns: repeat(3, minmax(0, 1fr));
            }
          }
          .shopping-cart-card { border-top: 5px solid var(--primary); }
          .cart-collapsed-row{
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 12px;
          }
          .cart-collapsed-link{
            flex: 1;
            min-width: 0;
            text-decoration: none;
            color: inherit;
            padding: 10px 4px 10px 0;
            margin: -6px 0;
            border-radius: 12px;
            cursor: pointer;
            transition: background 0.15s ease;
          }
          .cart-collapsed-link:hover{
            background: rgba(245, 192, 0, 0.12);
          }
          .cart-collapsed-link:focus-visible{
            outline: 2px solid rgba(245, 192, 0, 0.65);
            outline-offset: 2px;
          }
          .cart-collapsed-title{
            margin: 0;
            font-weight: 950;
            color: var(--secondary);
            min-width: 0;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
          }
          .action-btn { background: none; border: none; cursor: pointer; color: #777; padding: 5px; transition: color 0.2s; }
          .action-btn.share:hover { color: #25D366; }
          .action-btn.delete:hover { color: #FF5252; }
          .qty-mini {
            background: var(--white);
            border: 1px solid var(--border);
            border-radius: 8px;
            padding: 6px 8px;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            color: var(--secondary);
          }
          .qty-mini:disabled { opacity: 0.55; cursor: not-allowed; }
          .cart-notes-section {
            margin-bottom: 14px;
            padding-bottom: 14px;
            border-bottom: 1px solid var(--border, #e8e8e8);
          }
          .cart-note-label {
            display: block;
            font-size: 0.82rem;
            font-weight: 800;
            color: var(--text-secondary);
            margin-bottom: 6px;
          }
          .cart-note-input {
            width: 100%;
            padding: 10px 12px;
            border-radius: 12px;
            border: 1px solid var(--border);
            background: var(--surface, #fdfdf9);
            font-size: 0.92rem;
            resize: vertical;
            min-height: 44px;
            font-family: inherit;
            line-height: 1.45;
          }
          .cart-note-input:focus {
            outline: none;
            border-color: var(--primary, #f5c000);
            box-shadow: 0 0 0 2px rgba(245, 192, 0, 0.25);
          }
          .cart-note-input:disabled { opacity: 0.65; cursor: wait; }
          .cart-note-input-sm { min-height: 40px; font-size: 0.88rem; }
          .cart-line-block {
            border-bottom: 1px solid #f0f0f0;
            margin-bottom: 4px;
          }
          .cart-line-block:last-of-type { border-bottom: none; margin-bottom: 0; }
          .cart-item-note-wrap {
            padding: 0 0 12px 0;
            margin-inline-start: 0;
          }
          @media (min-width: 560px) {
            .cart-item-note-wrap { margin-inline-start: 68px; }
          }
          .cart-item-thumb {
            width: 56px;
            height: 56px;
            border-radius: 14px;
            overflow: hidden;
            flex-shrink: 0;
            background: var(--primary-light);
            border: 1px solid rgba(245,192,0,0.25);
          }
          .cart-item-thumb img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            display: block;
          }
          .cart-item-thumb-placeholder {
            width: 100%;
            height: 100%;
            background: var(--grey-light, #f0f0f0);
          }
          @media (max-width: 420px) {
            .cart-item-row {
              grid-template-columns: 48px minmax(0, 1fr) !important;
            }
            .cart-item-actions {
              grid-column: 1 / -1;
              justify-content: flex-start !important;
              margin-top: 6px;
            }
            .cart-item-thumb { width: 48px; height: 48px; border-radius: 12px; }
          }
        `}} />
      </div>
    </MainLayout>
  );
};

export default Carts;
