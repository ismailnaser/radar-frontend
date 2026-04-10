import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ChevronDown, ChevronUp, Image as ImageIcon, Trash2 } from 'lucide-react';
import MainLayout from '../components/MainLayout';
import ImageCarousel from '../components/ImageCarousel';
import { getCart, updateCart, updateCartItem, deleteCartItem } from '../api/data';
import { useAlert } from '../components/AlertProvider';
import { cartItemImageUrls } from '../utils/productImages';
import { formatApiError } from '../utils/apiErrors';

const CartDetails = () => {
  const { cartId } = useParams();
  const { showAlert, showConfirm } = useAlert();
  const [cart, setCart] = useState(null);
  const [loading, setLoading] = useState(true);
  const [savingItemId, setSavingItemId] = useState(null);
  const [savingCartId, setSavingCartId] = useState(null);

  const fetchCart = useCallback(async () => {
    if (!cartId) return;
    setLoading(true);
    try {
      const data = await getCart(cartId);
      setCart(data);
    } catch (e) {
      setCart(null);
      showAlert(formatApiError(e, 'تعذر تحميل السلة.'), 'خطأ');
    } finally {
      setLoading(false);
    }
  }, [cartId, showAlert]);

  useEffect(() => {
    fetchCart();
  }, [fetchCart]);

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

  const totalAmount = useMemo(() => {
    const items = cart?.items || [];
    return items.reduce((acc, item) => acc + linePrice(item), 0);
  }, [cart]);

  const saveCartNotes = async (raw) => {
    if (!cart) return;
    const next = raw ?? '';
    if ((cart.notes ?? '') === next) return;
    setSavingCartId(cart.id);
    try {
      await updateCart(cart.id, { notes: next });
      await fetchCart();
    } catch (e) {
      showAlert(formatApiError(e, 'تعذر حفظ الملاحظة.'));
      await fetchCart();
    } finally {
      setSavingCartId(null);
    }
  };

  const removeCartItemWithConfirm = async (item) => {
    const label = item.line_title || item.product_details?.name || 'هذا السطر';
    const ok = await showConfirm(`هل تريد إزالة «${label}» من السلة؟`, 'تأكيد الحذف');
    if (!ok) return;
    setSavingItemId(item.id);
    try {
      await deleteCartItem(item.id);
      await fetchCart();
    } catch (e) {
      showAlert(formatApiError(e, 'تعذر حذف المنتج.'));
    } finally {
      setSavingItemId(null);
    }
  };

  const adjustItemQuantity = async (item, delta) => {
    const next = Number(item.quantity ?? 0) + delta;
    if (next < 1) {
      await removeCartItemWithConfirm(item);
      return;
    }
    setSavingItemId(item.id);
    try {
      await updateCartItem(item.id, { quantity: next });
      await fetchCart();
    } catch (e) {
      showAlert(formatApiError(e, 'تعذر تحديث الكمية.'));
    } finally {
      setSavingItemId(null);
    }
  };

  const commitItemQuantity = async (item, raw) => {
    const q = parseInt(String(raw), 10);
    if (Number.isNaN(q) || q < 1) {
      showAlert('الكمية يجب أن تكون رقماً صحيحاً ≥ ١');
      await fetchCart();
      return;
    }
    setSavingItemId(item.id);
    try {
      await updateCartItem(item.id, { quantity: q });
      await fetchCart();
    } catch (e) {
      showAlert(formatApiError(e, 'تعذر تحديث الكمية.'));
      await fetchCart();
    } finally {
      setSavingItemId(null);
    }
  };

  return (
    <MainLayout>
      <div className="cart-details-page">
        <div style={{ marginBottom: 12 }}>
          <Link to="/carts" className="cart-details-back">← رجوع للسلال</Link>
        </div>

        {loading ? (
          <div className="card cart-details-loading">جاري تحميل السلة…</div>
        ) : !cart ? (
          <div className="card cart-details-loading">تعذر تحميل السلة.</div>
        ) : (
          <div className="card cart-details-card">
            <div className="cart-details-head">
              <h1 className="cart-details-title">{cart.name}</h1>
              <div className="cart-details-total">
                الإجمالي: <span className="cart-details-total-num">{totalAmount.toFixed(2)} ₪</span>
              </div>
            </div>

            <div className="cart-notes-section">
              <label className="cart-note-label" htmlFor={`cart-notes-${cart.id}`}>ملاحظة على السلة</label>
              <textarea
                id={`cart-notes-${cart.id}`}
                className="cart-note-input"
                rows={2}
                placeholder="مثال: موعد التوصيل، طلبات عامة على الطلب…"
                defaultValue={cart.notes || ''}
                key={`${cart.id}-cart-notes-${cart.notes ?? ''}`}
                disabled={savingCartId === cart.id}
                onBlur={(e) => saveCartNotes(e.target.value)}
              />
            </div>

            <div className="cart-items">
              {Array.isArray(cart.items) && cart.items.length > 0 ? (
                cart.items.map((item) => (
                  <div key={item.id} className="cart-line-block">
                    <div
                      className="item-row cart-item-row"
                      style={{
                        display: 'grid',
                        gridTemplateColumns: '56px minmax(0, 1fr) auto',
                        gap: 12,
                        alignItems: 'center',
                        padding: '10px 0 6px',
                        borderRadius: item.is_promotional_line ? 12 : 0,
                        marginInline: item.is_promotional_line ? -4 : 0,
                        paddingInline: item.is_promotional_line ? 10 : 0,
                        marginTop: item.is_promotional_line ? 6 : 0,
                        background: item.is_promotional_line
                          ? 'linear-gradient(135deg, rgba(245,192,0,0.12) 0%, rgba(255,249,230,0.35) 100%)'
                          : undefined,
                        border: item.is_promotional_line ? '1px solid rgba(245,192,0,0.4)' : undefined,
                      }}
                    >
                      <div className="cart-item-thumb">
                        {cartItemImageUrls(item).length > 0 ? (
                          <ImageCarousel images={cartItemImageUrls(item)} height={56} borderRadius={12} />
                        ) : (
                          <span className="cart-item-thumb-placeholder flex-center">
                            <ImageIcon size={20} color="var(--text-light)" />
                          </span>
                        )}
                      </div>
                      <div style={{ minWidth: 0 }}>
                        {(() => {
                          const sId =
                            item?.product_details?.store ??
                            item?.product_details?.store_id ??
                            item?.store ??
                            null;
                          const pId = item?.product ?? item?.product_details?.id ?? null;
                          const label = item.line_title || item.product_details?.name;
                          if (sId && pId) {
                            return (
                              <Link
                                to={`/stores/${sId}`}
                                state={{ scrollToProductId: pId }}
                                style={{ fontWeight: 900, color: 'var(--secondary)', textDecoration: 'none' }}
                                title="فتح المنتج داخل المتجر"
                              >
                                {label}
                              </Link>
                            );
                          }
                          return <div style={{ fontWeight: 800 }}>{label}</div>;
                        })()}
                        {item.is_promotional_line ? (
                          <div style={{ fontSize: '0.85rem', marginTop: 6 }}>
                            <span
                              style={{
                                display: 'inline-block',
                                padding: '3px 10px',
                                borderRadius: 8,
                                fontWeight: 900,
                                color: 'var(--secondary)',
                                background: 'rgba(245,192,0,0.35)',
                                border: '1px solid rgba(245,192,0,0.5)',
                              }}
                            >
                              {item.is_standalone_ad_line
                                ? `عرض ممول مستقل: ${unitEffective(item).toFixed(2)} ₪ للقطعة`
                                : `عرض ممول: ${unitEffective(item).toFixed(2)} ₪ للقطعة`}
                            </span>
                            {!item.is_standalone_ad_line &&
                            catalogUnit(item) != null &&
                            Math.abs(unitEffective(item) - catalogUnit(item)) > 1e-9 ? (
                              <span
                                style={{
                                  marginInlineStart: 10,
                                  textDecoration: 'line-through',
                                  color: 'var(--text-secondary)',
                                }}
                              >
                                سعر المتجر {catalogUnit(item).toFixed(2)} ₪
                              </span>
                            ) : null}
                            <span style={{ color: 'var(--text-light)', marginInlineStart: 8 }}>
                              · المجموع {linePrice(item).toFixed(2)} ₪
                            </span>
                          </div>
                        ) : (
                          <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginTop: 4 }}>
                            {(catalogUnit(item) != null ? catalogUnit(item) : unitEffective(item)).toFixed(2)} ₪ للقطعة
                            <span style={{ color: 'var(--text-light)', marginInlineStart: 8 }}>
                              · المجموع {linePrice(item).toFixed(2)} ₪
                            </span>
                          </div>
                        )}
                      </div>
                      <div className="flex-center cart-item-actions">
                        <div className="cart-qty-stepper" dir="ltr">
                          <button
                            type="button"
                            className="cart-qty-stepper__btn cart-qty-stepper__btn--minus"
                            disabled={savingItemId === item.id}
                            onClick={() => adjustItemQuantity(item, -1)}
                            aria-label="تقليل الكمية"
                          >
                            <ChevronDown size={18} strokeWidth={2.5} aria-hidden />
                          </button>
                          <input
                            type="text"
                            inputMode="numeric"
                            className="cart-qty-stepper__input"
                            disabled={savingItemId === item.id}
                            defaultValue={item.quantity}
                            key={`${item.id}-${item.quantity}`}
                            onBlur={(e) => commitItemQuantity(item, e.target.value)}
                            aria-label="الكمية"
                          />
                          <button
                            type="button"
                            className="cart-qty-stepper__btn cart-qty-stepper__btn--plus"
                            disabled={savingItemId === item.id}
                            onClick={() => adjustItemQuantity(item, 1)}
                            aria-label="زيادة الكمية"
                          >
                            <ChevronUp size={18} strokeWidth={2.5} aria-hidden />
                          </button>
                        </div>
                        <button
                          type="button"
                          className="cart-item-remove"
                          title="حذف من السلة"
                          disabled={savingItemId === item.id}
                          onClick={() => removeCartItemWithConfirm(item)}
                          aria-label="حذف من السلة"
                        >
                          <Trash2 size={17} strokeWidth={2.25} aria-hidden />
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <p style={{ color: '#999', fontSize: '0.9rem', margin: 0 }}>السلة فارغة حالياً.</p>
              )}
            </div>
          </div>
        )}

        <style dangerouslySetInnerHTML={{ __html: `
          .cart-details-page{
            max-width: 1240px;
            margin-inline: auto;
            padding-inline: clamp(8px, 2.2vw, 22px);
            padding-bottom: 32px;
            box-sizing: border-box;
          }
          .cart-details-back{
            color: var(--text-secondary);
            text-decoration: none;
            font-weight: 800;
          }
          .cart-details-back:hover{ text-decoration: underline; }
          .cart-details-loading{
            padding: 22px;
            font-weight: 800;
            color: var(--text-secondary);
            text-align: center;
          }
          .cart-details-card{
            padding: 16px 16px 18px;
          }
          .cart-items{
            margin-top: 10px;
          }
          .cart-line-block{
            border-bottom: 1px solid rgba(232, 230, 224, 0.85);
            padding: 10px 0;
          }
          .cart-line-block:last-child{
            border-bottom: none;
          }
          .cart-item-row{
            border-radius: 18px !important;
            padding: 12px 12px !important;
            background: rgba(255,255,255,0.92);
            border: 1px solid rgba(232, 230, 224, 0.95);
            box-shadow: 0 8px 22px rgba(26, 29, 38, 0.06);
          }
          .cart-item-row:hover{
            border-color: rgba(245, 192, 0, 0.45);
            box-shadow: 0 14px 34px rgba(245, 192, 0, 0.12);
          }
          .cart-item-thumb{
            width: 56px;
            height: 56px;
            border-radius: 14px;
            overflow: hidden;
            background: var(--primary-light);
            border: 1px solid rgba(245,192,0,0.22);
          }
          @media (max-width: 420px){
            .cart-item-row{
              grid-template-columns: 48px minmax(0, 1fr) auto !important;
              padding: 10px 10px !important;
              border-radius: 16px !important;
            }
            .cart-item-thumb{ width: 48px; height: 48px; border-radius: 12px; }
          }
          .cart-details-head{
            display: flex;
            align-items: flex-start;
            justify-content: space-between;
            gap: 12px;
            flex-wrap: wrap;
            margin-bottom: 12px;
          }
          .cart-details-title{
            margin: 0;
            font-size: 1.25rem;
            font-weight: 950;
            color: var(--secondary);
          }
          .cart-details-total{
            font-weight: 900;
            color: var(--text-secondary);
          }
          .cart-details-total-num{
            color: #FFCC00;
            font-weight: 950;
          }
          .cart-item-actions{
            gap: 10px;
            flex-wrap: wrap;
            justify-content: flex-end;
            align-items: center;
          }
          .cart-qty-stepper{
            display: inline-flex;
            align-items: stretch;
            border-radius: 14px;
            overflow: hidden;
            border: 1.5px solid rgba(245, 192, 0, 0.38);
            background: linear-gradient(180deg, rgba(255,255,255,0.98) 0%, rgba(255, 252, 238, 0.92) 100%);
            box-shadow: 0 2px 10px rgba(26, 29, 38, 0.06), inset 0 1px 0 rgba(255,255,255,0.85);
          }
          .cart-qty-stepper__btn{
            display: inline-flex;
            align-items: center;
            justify-content: center;
            min-width: 40px;
            padding: 0 8px;
            border: none;
            cursor: pointer;
            color: var(--secondary);
            background: rgba(245, 192, 0, 0.12);
            transition: background 0.15s ease, color 0.15s ease, transform 0.12s ease;
          }
          .cart-qty-stepper__btn:hover:not(:disabled){
            background: rgba(245, 192, 0, 0.28);
            color: var(--secondary);
          }
          .cart-qty-stepper__btn:active:not(:disabled){
            transform: scale(0.96);
          }
          .cart-qty-stepper__btn:disabled{
            opacity: 0.45;
            cursor: not-allowed;
          }
          .cart-qty-stepper__btn--minus{
            border-inline-end: 1px solid rgba(245, 192, 0, 0.22);
          }
          .cart-qty-stepper__btn--plus{
            border-inline-start: 1px solid rgba(245, 192, 0, 0.22);
          }
          .cart-qty-stepper__input{
            width: 48px;
            min-width: 44px;
            border: none;
            text-align: center;
            font-weight: 900;
            font-size: 0.95rem;
            font-variant-numeric: tabular-nums;
            color: var(--secondary);
            background: transparent;
            padding: 8px 4px;
            outline: none;
          }
          .cart-qty-stepper__input:focus{
            background: rgba(255, 255, 255, 0.65);
          }
          .cart-qty-stepper__input:disabled{
            opacity: 0.5;
          }
          .cart-item-remove{
            display: inline-flex;
            align-items: center;
            justify-content: center;
            width: 42px;
            height: 42px;
            border-radius: 12px;
            border: 1.5px solid rgba(229, 115, 115, 0.35);
            background: linear-gradient(180deg, rgba(255, 241, 241, 0.98) 0%, rgba(255, 250, 250, 0.88) 100%);
            color: #c62828;
            cursor: pointer;
            box-shadow: 0 2px 8px rgba(198, 40, 40, 0.08);
            transition: background 0.15s ease, border-color 0.15s ease, box-shadow 0.15s ease, transform 0.12s ease;
          }
          .cart-item-remove:hover:not(:disabled){
            background: rgba(255, 227, 227, 0.95);
            border-color: rgba(198, 40, 40, 0.45);
            box-shadow: 0 4px 14px rgba(198, 40, 40, 0.14);
          }
          .cart-item-remove:active:not(:disabled){
            transform: scale(0.96);
          }
          .cart-item-remove:disabled{
            opacity: 0.5;
            cursor: not-allowed;
          }
          @media (max-width: 420px){
            .cart-qty-stepper__btn{ min-width: 36px; }
            .cart-qty-stepper__input{ width: 42px; min-width: 38px; font-size: 0.9rem; }
            .cart-item-remove{ width: 40px; height: 40px; border-radius: 11px; }
          }
        `}} />
      </div>
    </MainLayout>
  );
};

export default CartDetails;

