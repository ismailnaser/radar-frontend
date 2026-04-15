import React, { useState, useEffect } from 'react';
import MainLayout from '../components/MainLayout';
import { Share2, Trash2, Plus, ChevronUp, ChevronDown, Image as ImageIcon, ShoppingBag } from 'lucide-react';
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
                  const itemCount = (cart.items || []).length;
                  const cartTotal = Number(
                    (cart.items || []).reduce((acc, item) => acc + linePrice(item), 0)
                  ).toFixed(2);
                  return (
                    <div key={cart.id} className="card shopping-cart-card">
                      <div className="cart-card-shell" dir="rtl">
                        <div className="cart-card-top">
                          <div className="cart-card-text-cluster" dir="rtl">
                            <div className="cart-card-row-head">
                              <div className="cart-card-icon" aria-hidden>
                                <ShoppingBag size={22} strokeWidth={2.25} />
                              </div>
                              <h3 className="cart-collapsed-title">{cart.name}</h3>
                            </div>
                            <div className="cart-card-details" dir="rtl">
                              <div className="cart-card-meta">
                                <span className="cart-card-pill">
                                  {itemCount} {itemCount === 1 ? 'عنصر' : 'عناصر'}
                                </span>
                              </div>
                              <div className="cart-card-total-strip">
                                <span className="cart-card-total-label">الإجمالي</span>
                                <span className="cart-card-total-num">{cartTotal} ₪</span>
                              </div>
                            </div>
                          </div>
                          <div className="cart-card-actions flex-center">
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
                        <div className="cart-card-bottom">
                          <Link
                            to={`/carts/${cart.id}`}
                            className="cart-card-view-btn"
                            aria-label={`عرض سلة ${cart.name}`}
                          >
                            عرض السلة
                          </Link>
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
            grid-template-columns: repeat(auto-fit, minmax(min(100%, 280px), 1fr));
            gap: clamp(12px, 3vw, 20px);
          }
          @media (min-width: 960px) {
            .carts-grid{
              grid-template-columns: repeat(auto-fit, minmax(min(100%, 300px), 1fr));
            }
          }
          .shopping-cart-card{
            border-top: 5px solid var(--primary);
            padding: 0;
            border-radius: 20px;
            min-height: 244px;
            box-shadow: 0 12px 34px rgba(26, 29, 38, 0.08);
            background: linear-gradient(165deg, rgba(255, 252, 238, 0.55) 0%, rgba(255, 255, 255, 0.98) 42%, rgba(255, 255, 255, 1) 100%);
            border: 1px solid rgba(232, 230, 224, 0.95);
            border-top-width: 5px;
            transition: transform 0.18s ease, box-shadow 0.18s ease, border-color 0.18s ease;
            overflow: hidden;
            display: flex;
            flex-direction: column;
          }
          .shopping-cart-card:hover{
            transform: translateY(-3px);
            box-shadow: 0 18px 44px rgba(245, 192, 0, 0.16);
            border-color: rgba(245, 192, 0, 0.42);
          }
          .cart-card-shell{
            flex: 1;
            display: flex;
            flex-direction: column;
            gap: 16px;
            padding: 18px 14px 20px;
            min-height: 244px;
            box-sizing: border-box;
          }
          .cart-card-top{
            display: flex;
            flex-direction: row;
            align-items: flex-start;
            justify-content: space-between;
            gap: 12px;
            flex: 1;
            min-height: 0;
            min-width: 0;
            flex-wrap: nowrap;
            position: relative;
          }
          .cart-card-text-cluster{
            display: flex;
            flex-direction: column;
            align-items: stretch;
            gap: 14px;
            flex: 1;
            min-width: 0;
            /* reserve space for the absolute actions column so the title+icon can truly center */
            padding-inline-end: 56px;
          }
          .cart-card-row-head{
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;
            gap: 12px;
            min-width: 0;
            text-align: center;
          }
          .cart-card-row-head .cart-collapsed-title{
            flex: 0 1 auto;
            min-width: 0;
            padding-top: 2px;
            text-align: start;
          }
          .cart-card-details{
            display: flex;
            flex-direction: column;
            align-items: stretch;
            gap: 10px;
            width: 100%;
            margin-top: 2px;
            padding-top: 12px;
            border-top: 1px solid rgba(232, 230, 224, 0.9);
            box-sizing: border-box;
          }
          .cart-card-bottom{
            display: flex;
            justify-content: center;
            width: 100%;
            flex-shrink: 0;
            padding-top: 2px;
          }
          .cart-card-view-btn{
            display: inline-flex;
            align-items: center;
            justify-content: center;
            padding: 11px 18px;
            border-radius: 14px;
            font-weight: 950;
            font-size: 0.88rem;
            max-width: min(220px, 100%);
            box-sizing: border-box;
            white-space: nowrap;
            text-decoration: none;
            color: var(--secondary);
            background: linear-gradient(180deg, rgba(255, 249, 220, 0.95) 0%, rgba(245, 192, 0, 0.42) 100%);
            border: 1.5px solid rgba(245, 192, 0, 0.55);
            box-shadow: 0 4px 14px rgba(245, 192, 0, 0.18), inset 0 1px 0 rgba(255, 255, 255, 0.75);
            transition: transform 0.14s ease, box-shadow 0.14s ease, border-color 0.14s ease;
          }
          .cart-card-view-btn:hover{
            transform: translateY(-1px);
            border-color: rgba(245, 192, 0, 0.85);
            box-shadow: 0 8px 22px rgba(245, 192, 0, 0.22), inset 0 1px 0 rgba(255, 255, 255, 0.85);
          }
          .cart-card-view-btn:focus-visible{
            outline: 2px solid rgba(245, 192, 0, 0.75);
            outline-offset: 2px;
          }
          .cart-card-view-btn:active{
            transform: translateY(0);
          }
          .cart-card-icon{
            flex-shrink: 0;
            align-self: flex-start;
            width: 48px;
            height: 48px;
            border-radius: 16px;
            display: flex;
            align-items: center;
            justify-content: center;
            color: var(--secondary);
            background: linear-gradient(160deg, rgba(245, 192, 0, 0.38) 0%, rgba(255, 249, 220, 0.9) 100%);
            border: 1px solid rgba(245, 192, 0, 0.45);
            box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.75);
          }
          .cart-card-meta{
            display: flex;
            flex-wrap: wrap;
            gap: 8px;
            align-items: center;
            justify-content: flex-start;
          }
          .cart-card-pill{
            display: inline-flex;
            align-items: center;
            padding: 4px 11px;
            border-radius: 999px;
            font-size: 0.78rem;
            font-weight: 900;
            color: var(--text-secondary);
            background: rgba(26, 29, 38, 0.06);
            border: 1px solid rgba(26, 29, 38, 0.08);
          }
          .cart-card-total-strip{
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 12px;
            padding: 11px 12px;
            border-radius: 14px;
            background: rgba(255, 255, 255, 0.82);
            border: 1px solid rgba(245, 192, 0, 0.28);
            box-shadow: 0 2px 10px rgba(26, 29, 38, 0.05);
          }
          .cart-card-total-label{
            font-size: 0.8rem;
            font-weight: 850;
            color: var(--text-secondary);
          }
          .cart-card-total-num{
            font-size: 1.08rem;
            font-weight: 950;
            font-variant-numeric: tabular-nums;
            color: var(--secondary);
            letter-spacing: -0.02em;
            min-width: 0;
            overflow-wrap: anywhere;
          }
          .cart-card-actions{
            flex-direction: column;
            flex-shrink: 0;
            gap: 8px;
            align-self: stretch;
            padding-top: 0;
            min-width: 44px;
            position: absolute;
            top: 0;
            inset-inline-end: 0;
            bottom: 0;
            justify-content: center;
            align-items: center;
          }
          .cart-collapsed-title{
            margin: 0;
            font-weight: 950;
            font-size: 1.06rem;
            line-height: 1.35;
            color: var(--secondary);
            min-width: 0;
            overflow-wrap: anywhere;
            word-break: break-word;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            overflow: hidden;
          }
          .action-btn {
            background: rgba(255,255,255,0.92);
            border: 1px solid rgba(232, 230, 224, 0.95);
            cursor: pointer;
            color: var(--secondary);
            width: 40px;
            height: 40px;
            border-radius: 14px;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            transition: transform 0.12s ease, box-shadow 0.15s ease, border-color 0.15s ease;
            box-shadow: 0 2px 12px rgba(26, 29, 38, 0.06);
          }
          .action-btn:hover { transform: translateY(-1px); border-color: rgba(245, 192, 0, 0.45); box-shadow: 0 10px 24px rgba(26, 29, 38, 0.10); }
          .action-btn:active { transform: translateY(0); }
          .action-btn.share { color: #1b5e20; }
          .action-btn.delete { color: #c62828; border-color: rgba(198, 40, 40, 0.25); }
          .action-btn.delete:hover { border-color: rgba(198, 40, 40, 0.45); }
          @media (max-width: 520px){
            .cart-card-top{
              flex-direction: column;
              align-items: stretch;
              gap: 14px;
              position: static;
            }
            .cart-card-text-cluster{
              order: 0;
              width: 100%;
              padding-inline-end: 0;
            }
            .cart-card-actions{
              flex-direction: row;
              justify-content: flex-start;
              gap: 10px;
              order: 1;
              align-self: stretch;
              padding-top: 0;
              position: static;
            }
            .cart-card-total-strip{
              flex-wrap: wrap;
              row-gap: 8px;
            }
          }
          @media (max-width: 420px){
            .cart-card-shell{
              padding: 16px 12px 18px;
              gap: 14px;
              min-height: 252px;
            }
            .cart-card-top{ gap: 12px; }
            .cart-card-view-btn{
              padding: 10px 14px;
              font-size: 0.84rem;
              max-width: 100%;
            }
            .cart-card-icon{ width: 44px; height: 44px; border-radius: 14px; }
            .cart-card-icon svg{ width: 19px; height: 19px; }
            .cart-collapsed-title{ font-size: 1rem; }
            .cart-card-total-num{ font-size: 1rem; }
            .action-btn{ width: 38px; height: 38px; border-radius: 13px; }
            .shopping-cart-card{ min-height: 252px; border-radius: 18px; }
          }
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
