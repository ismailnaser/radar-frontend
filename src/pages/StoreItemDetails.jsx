import React, { useEffect, useMemo, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { ArrowLeft, ChevronDown, ChevronUp, Heart, Image as ImageIcon, ShoppingCart } from 'lucide-react';
import MainLayout from '../components/MainLayout';
import {
  addFavorite,
  addToCart,
  createCart,
  getCarts,
  getFavorites,
  getStoreDetail,
  removeFavorite,
} from '../api/data';
import { useAlert } from '../components/AlertProvider';
import ImageCarousel from '../components/ImageCarousel';
import { canUseShoppingCarts } from '../utils/cartAccess';
import { visualImageUrls } from '../utils/productImages';

export default function StoreItemDetails() {
  const { storeId, itemType, itemId } = useParams();
  const navigate = useNavigate();
  const { showAlert, showPrompt, showSelect } = useAlert();
  const [loading, setLoading] = useState(true);
  const [store, setStore] = useState(null);
  const [error, setError] = useState('');
  const [busy, setBusy] = useState(false);
  const [favoriteId, setFavoriteId] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const isGuest = localStorage.getItem('isGuest') === 'true';
  const authed = !!localStorage.getItem('token') && !isGuest;
  const canUseCarts = canUseShoppingCarts();

  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        setLoading(true);
        const data = await getStoreDetail(storeId);
        if (!cancelled) {
          setStore(data);
          setError('');
        }
      } catch (e) {
        if (!cancelled) {
          setError(e?.response?.data?.detail || 'تعذر تحميل تفاصيل المنتج.');
        }
      } finally {
        if (!cancelled) setLoading(false);
      }
    })();
    return () => {
      cancelled = true;
    };
  }, [storeId]);

  const item = useMemo(() => {
    if (!store) return null;
    const idNum = Number(itemId);
    if (!Number.isFinite(idNum)) return null;
    if (itemType === 'product') {
      return (store.products || []).find((p) => Number(p.id) === idNum) || null;
    }
    if (itemType === 'sponsored') {
      return (store.sponsored_ads || []).find((ad) => Number(ad.id) === idNum) || null;
    }
    return null;
  }, [store, itemType, itemId]);

  const images = visualImageUrls(item);
  const isSponsored = itemType === 'sponsored';
  const title = item?.name || item?.title || 'تفاصيل المنتج';
  const description = item?.description || '';
  const price = isSponsored ? item?.product_price : item?.price;
  const oldPrice = isSponsored ? item?.catalog_product_price : null;
  const features = Array.isArray(item?.product_features)
    ? item.product_features.map((x) => String(x || '').trim()).filter(Boolean).slice(0, 8)
    : [];
  const isFav = favoriteId != null;
  const safeQty = Number.isFinite(Number(quantity)) ? Math.max(1, Math.min(99, Number(quantity))) : 1;

  useEffect(() => {
    if (!authed || !item) {
      setFavoriteId(null);
      return;
    }
    let cancelled = false;
    (async () => {
      try {
        const rows = await getFavorites();
        if (cancelled || !Array.isArray(rows)) return;
        const row = rows.find((f) => {
          if (isSponsored) return Number(f.sponsored_ad) === Number(item.id);
          return Number(f.product) === Number(item.id);
        });
        setFavoriteId(row?.id ?? null);
      } catch {
        if (!cancelled) setFavoriteId(null);
      }
    })();
    return () => {
      cancelled = true;
    };
  }, [authed, item, isSponsored]);

  const addPayloadForItem = () => ({
    productId: isSponsored ? (item?.product ?? null) : item?.id,
    sponsoredAdId: isSponsored ? item?.id : null,
    quantity: safeQty,
    note: '',
  });

  const createCartAndAdd = async (payload, { isFirstCart = false } = {}) => {
    const name = await showPrompt(
      isFirstCart
        ? 'لا توجد لديك سلال بعد. اكتب اسماً لسلتك الأولى — يُضاف المنتج إليها مباشرة.'
        : 'اكتب اسماً للسلة الجديدة ثم يُضاف المنتج إليها.',
      isFirstCart ? 'مثال: سلة اليوم' : 'اسم السلة...',
      isFirstCart ? 'إنشاء أول سلة' : 'سلة جديدة'
    );
    if (!name || !String(name).trim()) return false;
    const cart = await createCart(String(name).trim());
    await addToCart(cart.id, payload.productId ?? null, payload.quantity ?? 1, payload.sponsoredAdId ?? null, payload.note ?? '');
    return true;
  };

  const bumpQty = (delta) => {
    setQuantity((prev) => {
      const n = Number(prev);
      const base = Number.isFinite(n) ? n : 1;
      return Math.max(1, Math.min(99, base + delta));
    });
  };

  const onAddToCart = async () => {
    if (!authed) {
      navigate('/login', { state: { flash: 'يجب تسجيل الدخول أولاً.' } });
      return;
    }
    if (!canUseCarts) return;
    if (!item) return;
    setBusy(true);
    try {
      const payload = addPayloadForItem();
      const noteVal = await showPrompt(
        'أضف ملاحظة على هذا المنتج داخل السلة (اختياري). اترك الحقل فارغاً إذا لا تريد.',
        'مثال: بدون بصل / توصيل بعد العصر',
        'ملاحظة على المنتج',
        ''
      );
      payload.note = noteVal == null ? '' : String(noteVal).trim();
      const carts = await getCarts();
      const list = Array.isArray(carts) ? carts : [];
      if (list.length === 0) {
        const ok = await createCartAndAdd(payload, { isFirstCart: true });
        if (!ok) return;
      } else {
        const options = list.map((c) => ({
          id: String(c.id),
          label: c.name || `سلة #${c.id}`,
          value: c.id,
          badge: Array.isArray(c.items) ? c.items.length : 0,
        }));
        const pick = await showSelect(
          'اختر السلة التي تريد إضافة المنتج إليها:',
          'إضافة إلى أي سلة؟',
          options,
          { primaryActionLabel: 'سلة جديدة' }
        );
        if (pick == null) return;
        if (pick === '__primary__') {
          const ok = await createCartAndAdd(payload);
          if (!ok) return;
        } else {
          await addToCart(Number(pick), payload.productId ?? null, payload.quantity ?? 1, payload.sponsoredAdId ?? null, payload.note ?? '');
        }
      }
      await showAlert('تمت إضافة العنصر إلى السلة.', 'تم');
    } catch (e) {
      await showAlert(e?.response?.data?.error || 'تعذر الإضافة إلى السلة.', 'خطأ');
    } finally {
      setBusy(false);
    }
  };

  const onToggleFavorite = async () => {
    if (!authed) {
      navigate('/login', { state: { flash: 'يجب تسجيل الدخول أولاً.' } });
      return;
    }
    if (!item) return;
    setBusy(true);
    try {
      if (favoriteId) {
        await removeFavorite(favoriteId);
        setFavoriteId(null);
        await showAlert('تمت إزالة العنصر من المفضلة.', 'تم');
      } else {
        const res = await addFavorite(isSponsored ? (item.product ?? null) : item.id, isSponsored ? item.id : null);
        setFavoriteId(res?.id ?? true);
        await showAlert('تمت إضافة العنصر إلى المفضلة.', 'تم');
      }
    } catch (e) {
      await showAlert(e?.response?.data?.error || 'تعذر تعديل المفضلة.', 'خطأ');
    } finally {
      setBusy(false);
    }
  };

  return (
    <MainLayout>
      <div style={{ maxWidth: 920, margin: '0 auto', padding: '12px clamp(10px, 2vw, 20px) 34px' }}>
        <button type="button" className="item-details-back-btn" onClick={() => navigate(`/stores/${storeId}`)}>
          <ArrowLeft size={18} />
          العودة إلى المتجر
        </button>

        {loading ? <div className="card">جاري التحميل…</div> : null}
        {!loading && error ? <div className="card" style={{ color: '#c62828' }}>{error}</div> : null}
        {!loading && !error && !item ? (
          <div className="card">
            هذا العنصر غير موجود حالياً.
            <div style={{ marginTop: 10 }}>
              <Link to={`/stores/${storeId}`}>الرجوع للمتجر</Link>
            </div>
          </div>
        ) : null}

        {!loading && !error && item ? (
          <article className="card" style={{ overflow: 'hidden', padding: 0 }}>
            <div className="item-details-media-shell">
              {images.length > 0 ? (
                <ImageCarousel
                  images={images}
                  alt={title}
                  height={340}
                  borderRadius={12}
                  fit="contain"
                  className="item-details-media-carousel"
                />
              ) : (
                <div className="flex-center" style={{ minHeight: 260 }}>
                  <ImageIcon size={46} color="var(--text-light)" />
                </div>
              )}
            </div>
            <div style={{ padding: '14px clamp(12px, 2vw, 20px) 18px' }}>
              <h1 style={{ margin: 0, color: 'var(--secondary)', fontSize: 'clamp(1.18rem, 2.2vw, 1.7rem)' }}>{title}</h1>
              <div style={{ marginTop: 8, color: 'var(--text-secondary)', fontWeight: 700 }}>
                من متجر: <Link to={`/stores/${storeId}`}>{store?.store_name || 'المتجر'}</Link>
              </div>
              {price != null && Number.isFinite(Number(price)) ? (
                <div style={{ marginTop: 12, display: 'flex', gap: 8, alignItems: 'center', flexWrap: 'wrap' }}>
                  {oldPrice != null && Number.isFinite(Number(oldPrice)) && Number(oldPrice) > Number(price) ? (
                    <span style={{ textDecoration: 'line-through', color: 'var(--text-light)' }}>{Number(oldPrice).toFixed(2)} ₪</span>
                  ) : null}
                  <span style={{ fontSize: '1.28rem', fontWeight: 900, color: 'var(--secondary)' }}>{Number(price).toFixed(2)} ₪</span>
                </div>
              ) : null}
              <div className="item-details-actions">
                <div className="item-details-qty">
                  <button type="button" className="item-details-qty-btn" onClick={() => bumpQty(-1)} aria-label="نقص الكمية">
                    <ChevronDown size={18} />
                  </button>
                  <input
                    className="item-details-qty-input"
                    type="text"
                    inputMode="numeric"
                    value={safeQty}
                    onChange={(e) => {
                      const raw = String(e.target.value || '').replace(/\D+/g, '');
                      if (!raw) return setQuantity(1);
                      const n = Number(raw);
                      setQuantity(Number.isFinite(n) ? Math.max(1, Math.min(99, n)) : 1);
                    }}
                    onBlur={() => setQuantity(safeQty)}
                  />
                  <button type="button" className="item-details-qty-btn" onClick={() => bumpQty(1)} aria-label="زيادة الكمية">
                    <ChevronUp size={18} />
                  </button>
                </div>
                <button
                  type="button"
                  className={`item-details-action-btn${!canUseCarts ? ' item-details-action-btn--muted' : ''}`}
                  onClick={onAddToCart}
                  disabled={busy || !canUseCarts}
                >
                  <ShoppingCart size={18} />
                  {busy ? 'جارٍ التنفيذ…' : 'إضافة إلى السلة'}
                </button>
                <button type="button" className="item-details-action-btn item-details-action-btn--fav" onClick={onToggleFavorite} disabled={busy}>
                  <Heart size={18} color="#e91e63" fill={isFav ? '#e91e63' : 'none'} />
                  {isFav ? 'إزالة من المفضلة' : 'إضافة إلى المفضلة'}
                </button>
              </div>

              {description ? (
                <p style={{ marginTop: 12, lineHeight: 1.8, color: 'var(--text-primary)' }}>{description}</p>
              ) : null}

              {features.length > 0 ? (
                <div style={{ marginTop: 10, display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                  {features.map((f, i) => (
                    <span key={`${f}-${i}`} className="badge" style={{ background: 'var(--white)' }}>
                      {f}
                    </span>
                  ))}
                </div>
              ) : null}
            </div>
          </article>
        ) : null}
      </div>
      <style>{`
        .item-details-back-btn{
          width: auto;
          margin-bottom: 12px;
          border: 1px solid var(--border);
          background: var(--white);
          color: var(--secondary);
          border-radius: 12px;
          padding: 10px 14px;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-weight: 800;
          cursor: pointer;
        }
        .item-details-actions{
          margin-top: 14px;
          display: grid;
          grid-template-columns: repeat(3, minmax(0,1fr));
          gap: 10px;
        }
        .item-details-qty{
          display: grid;
          grid-template-columns: 40px 1fr 40px;
          border: 1px solid var(--border);
          border-radius: 12px;
          overflow: hidden;
          background: var(--white);
          min-height: 42px;
        }
        .item-details-qty-btn{
          border: none;
          background: var(--surface);
          color: var(--secondary);
          display: inline-flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
        }
        .item-details-qty-input{
          border: none;
          text-align: center;
          font-weight: 900;
          color: var(--secondary);
          background: var(--white);
        }
        .item-details-qty-input:focus{ outline: none; }
        .item-details-action-btn{
          border: 1px solid var(--border);
          background: var(--white);
          color: var(--secondary);
          border-radius: 12px;
          padding: 10px 12px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          font-weight: 800;
          cursor: pointer;
        }
        .item-details-action-btn--fav{
          border-color: rgba(233,30,99,0.32);
          background: rgba(255,255,255,0.95);
        }
        .item-details-action-btn--muted{
          opacity: .65;
          cursor: not-allowed;
        }
        .item-details-media-shell{
          background: var(--grey-light);
          min-height: 260px;
          padding: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .item-details-media-carousel{
          width: min(100%, 620px);
          margin-inline: auto;
        }
        @media (max-width: 560px){
          .item-details-actions{ grid-template-columns: 1fr; }
          .item-details-media-shell{ padding: 8px; }
          .item-details-media-carousel{ width: 100%; }
        }
      `}</style>
    </MainLayout>
  );
}

