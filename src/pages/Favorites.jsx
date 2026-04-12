import React, { useCallback, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import MainLayout from '../components/MainLayout';
import { Heart, ShoppingBasket, Trash2, Store, Package, Megaphone } from 'lucide-react';
import {
  getFavorites,
  removeFavorite,
  getStoreFavorites,
  removeStoreFavorite,
  addToCart,
  getCarts,
  createCart,
  getShopperNotices,
  updateCart,
} from '../api/data';
import { useAlert } from '../components/AlertProvider';
import GuestAccessPrompt from '../components/GuestAccessPrompt';
import ImageCarousel from '../components/ImageCarousel';
import { visualImageUrls } from '../utils/productImages';
import { ensureCartNamed } from '../utils/cartNaming';
import { canUseShoppingCarts } from '../utils/cartAccess';
import { formatApiError } from '../utils/apiErrors';
// اختيار السلة عبر النافذة المنبثقة العامة (CustomModal)

const Favorites = () => {
  const [productFavorites, setProductFavorites] = useState([]);
  const [storeFavorites, setStoreFavorites] = useState([]);
  const [loading, setLoading] = useState(true);
  const [tab, setTab] = useState('products'); // 'products' | 'stores'
  const [isGuest, setIsGuest] = useState(localStorage.getItem('isGuest') === 'true');
  const { showAlert, showConfirm, showPrompt, showSelect } = useAlert();
  const [pendingCartAdd, setPendingCartAdd] = useState(null);

  const loadAll = useCallback(async () => {
    setLoading(true);
    try {
      const shopper =
        localStorage.getItem('token') &&
        localStorage.getItem('isGuest') !== 'true' &&
        localStorage.getItem('user_type') === 'shopper';
      const [pf, sf, noticesRes] = await Promise.all([
        getFavorites(),
        getStoreFavorites(),
        shopper ? getShopperNotices().catch(() => ({ notices: [] })) : Promise.resolve({ notices: [] }),
      ]);
      setProductFavorites(Array.isArray(pf) ? pf : pf?.results || []);
      setStoreFavorites(Array.isArray(sf) ? sf : sf?.results || []);
      const raw = noticesRes?.notices;
      const list = Array.isArray(raw) ? raw : [];
      for (const entry of list) {
        const t = typeof entry === 'string' ? entry : entry?.text;
        if (t) await showAlert(t, 'تنبيه');
      }
    } catch (err) {
      console.error('Error fetching favorites:', err);
      setProductFavorites([]);
      setStoreFavorites([]);
    } finally {
      setLoading(false);
    }
  }, [showAlert]);

  useEffect(() => {
    loadAll();
  }, [loadAll]);

  const openCartPickerFor = async (payload, { allowCreate = true } = {}) => {
    if (!canUseShoppingCarts()) {
      await showAlert(
        'ميزة السلال للأعضاء المسجّلين فقط (متسوّق، تاجر، أو مدير) وليست لوضع الزائر. سجّل الدخول ثم أعد المحاولة.',
      );
      return;
    }
    setPendingCartAdd(payload);
    const carts = await getCarts();
    const list = Array.isArray(carts) ? carts : [];
    if (list.length === 0 && allowCreate) {
      await createCartAndAddPending(payload, { isFirstCart: true });
      return;
    }
    const opts = list.map((c) => ({
      id: String(c.id),
      label: c.name || `سلة #${c.id}`,
      value: c.id,
      badge: Array.isArray(c.items) ? c.items.length : 0,
    }));
    const pick = await showSelect(
      'اختر السلة التي تريد إضافة المنتج إليها:',
      'إضافة إلى أي سلة؟',
      opts,
      allowCreate ? { primaryActionLabel: 'سلة جديدة' } : {}
    );
    if (pick == null) return;
    if (pick === '__primary__') {
      if (!allowCreate) return;
      await createCartAndAddPending();
      return;
    }
    await pickCartAndAddPending({ id: pick });
  };

  const createCartAndAddPending = async (payloadOverride, { isFirstCart = false } = {}) => {
    const p = payloadOverride != null ? payloadOverride : pendingCartAdd;
    if (!p) return;
    const name = await showPrompt(
      isFirstCart
        ? 'لا توجد لديك سلال بعد. اكتب اسماً لسلتك الأولى — يُضاف المنتج إليها مباشرة.'
        : 'اكتب اسماً للسلة الجديدة ثم يُضاف المنتج إليها.',
      isFirstCart ? 'مثال: سلة اليوم' : 'اسم السلة...',
      isFirstCart ? 'إنشاء أول سلة' : 'سلة جديدة'
    );
    if (!name || !String(name).trim()) return;
    const cart = await createCart(String(name).trim());
    await addToCart(cart.id, p.productId ?? null, p.quantity ?? 1, p.sponsoredAdId ?? null);
    await showAlert(p.success || 'تمت الإضافة للسلة.', 'تم');
    setPendingCartAdd(null);
  };

  const pickCartAndAddPending = async (cart) => {
    const p = pendingCartAdd;
    if (!p) return;
    await addToCart(cart.id, p.productId ?? null, p.quantity ?? 1, p.sponsoredAdId ?? null);
    await showAlert(p.success || 'تمت الإضافة للسلة.', 'تم');
    setPendingCartAdd(null);
  };

  const handleRemoveProduct = async (id) => {
    const confirm = await showConfirm('إزالة هذا المنتج من المفضلة؟');
    if (!confirm) return;
    try {
      await removeFavorite(id);
      setProductFavorites((prev) => prev.filter((fav) => fav.id !== id));
      await showAlert('تمت إزالة المنتج من المفضلة.', 'تم');
    } catch (e) {
      await showAlert(formatApiError(e, 'حدث خطأ أثناء الإزالة.'), 'خطأ');
    }
  };

  const handleRemoveStore = async (id) => {
    const confirm = await showConfirm('إزالة هذا المحل من المفضلة؟');
    if (!confirm) return;
    try {
      await removeStoreFavorite(id);
      setStoreFavorites((prev) => prev.filter((fav) => fav.id !== id));
      await showAlert('تمت إزالة المحل من المفضلة.', 'تم');
    } catch (e) {
      await showAlert(formatApiError(e, 'حدث خطأ أثناء الإزالة.'), 'خطأ');
    }
  };

  const handleAddProductToCart = async (productId) => {
    if (productId == null || productId === '') {
      await showAlert('معرّف المنتج غير متوفر. افتح صفحة المتجر وأعد المحاولة.');
      return;
    }
    try {
      await openCartPickerFor(
        {
          productId,
          sponsoredAdId: null,
          quantity: 1,
          success: 'تمت إضافة المنتج للسلة.',
        },
        { allowCreate: true }
      );
    } catch (e) {
      await showAlert(formatApiError(e, 'تعذرت الإضافة للسلة.'), 'خطأ');
    }
  };

  const handleAddStandaloneOfferToCart = async (sponsoredAdId) => {
    try {
      await openCartPickerFor({
        productId: null,
        sponsoredAdId,
        quantity: 1,
        success: 'تمت إضافة عرض الإعلان المستقل للسلة.',
      });
    } catch (e) {
      await showAlert(formatApiError(e, 'تعذرت الإضافة للسلة.'), 'خطأ');
    }
  };

  const tabBtn = (key, label, count) => (
    <button
      type="button"
      className={`fav-tab ${tab === key ? 'fav-tab-active' : ''}`}
      onClick={() => setTab(key)}
    >
      {label}
      {count > 0 ? <span className="fav-tab-count">{count}</span> : null}
    </button>
  );

  return (
    <MainLayout>
      <div className="favorites-page">
        {isGuest ? (
          <GuestAccessPrompt
            title="المفضلة متوفرة للأعضاء فقط"
            message="سجل دخولك لتجميع المنتجات والمحلات المفضّلة لديك."
          />
        ) : (
          <>
            <div
              className="favorites-head flex-center"
            >
              <div className="favorites-head-icon">
                <Heart size={24} />
              </div>
              <h1 className="favorites-head-title">المفضلة</h1>
            </div>

            <div className="fav-tabs-row">
              {tabBtn('products', 'المنتجات المفضّلة', productFavorites.length)}
              {tabBtn('stores', 'المحلات المفضّلة', storeFavorites.length)}
            </div>

            {loading ? (
              <p>جاري التحميل...</p>
            ) : tab === 'products' ? (
              productFavorites.length > 0 ? (
                <div className="favorites-grid">
                  {productFavorites.map((fav) => {
                    const isStandalone =
                      (fav.product == null || fav.product === '') && fav.sponsored_ad != null;
                    const ad = fav.standalone_ad_display;
                    if (isStandalone) {
                      if (!ad) {
                        return (
                          <div key={fav.id} className="card favorite-card favorite-card--expired">
                            <p className="favorite-card-title">عرض ممول مستقل</p>
                            <p className="favorite-card-sub">
                              هذا الإعلان انتهى أو لم يعد متاحاً. يمكنك إزالته من المفضلة.
                            </p>
                            <button
                              type="button"
                              className="btn-primary"
                              style={{ marginTop: 14 }}
                              onClick={() => handleRemoveProduct(fav.id)}
                            >
                              إزالة من المفضلة
                            </button>
                          </div>
                        );
                      }
                      const urls = visualImageUrls(ad);
                      return (
                        <div key={fav.id} className="card favorite-card">
                          <div className="favorite-card-media">
                            {urls.length > 0 ? (
                              <ImageCarousel images={urls} height={152} borderRadius={0} />
                            ) : (
                              <Megaphone size={40} color="var(--text-secondary)" />
                            )}
                          </div>
                          <div className="favorite-card-body">
                          <span
                            className="badge"
                            style={{
                              display: 'inline-block',
                              marginBottom: 8,
                              background: '#FFF9E6',
                              color: 'var(--secondary)',
                              fontWeight: 800,
                              fontSize: '0.78rem',
                            }}
                          >
                            عرض ممول مستقل — يُزال تلقائياً عند انتهاء الإعلان
                          </span>
                          {ad.store_name ? (
                            <p
                              style={{
                                margin: '0 0 8px',
                                fontSize: '0.88rem',
                                fontWeight: 800,
                                color: 'var(--secondary)',
                              }}
                            >
                              المتجر: {ad.store_name}
                            </p>
                          ) : null}
                          <div className="flex-center" style={{ justifyContent: 'space-between', marginBottom: '12px' }}>
                            <h3 style={{ fontSize: '1.2rem', margin: 0 }}>{ad.title}</h3>
                            <button
                              type="button"
                              className="action-btn delete"
                              onClick={() => handleRemoveProduct(fav.id)}
                              style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#FF5252' }}
                              aria-label="إزالة من المفضلة"
                            >
                              <Trash2 size={20} />
                            </button>
                          </div>
                          <p style={{ color: 'var(--secondary)', fontWeight: 'bold', fontSize: '1.1rem' }}>
                            {Number(ad.product_price).toFixed(2)} ₪
                          </p>
                          <p style={{ color: '#666', fontSize: '0.85rem', marginTop: '5px' }}>
                            {ad.description || '—'}
                          </p>
                          <div className="actions" style={{ marginTop: '20px', display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                            <button
                              type="button"
                              className="btn-primary"
                              style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px' }}
                              onClick={() => handleAddStandaloneOfferToCart(fav.sponsored_ad)}
                            >
                              <ShoppingBasket size={18} /> إضافة للسلة
                            </button>
                            {ad.store != null ? (
                              <Link
                                to={`/stores/${ad.store}`}
                                style={{
                                  display: 'inline-flex',
                                  alignItems: 'center',
                                  padding: '10px 14px',
                                  borderRadius: 10,
                                  border: '1.5px solid var(--border)',
                                  textDecoration: 'none',
                                  color: 'var(--secondary)',
                                  fontWeight: 700,
                                  fontSize: '0.9rem',
                                }}
                              >
                                المتجر
                              </Link>
                            ) : null}
                          </div>
                          </div>
                        </div>
                      );
                    }
                    const p = fav.product_details || {};
                    const productIdForCart = p.id ?? fav.product ?? null;
                    const priceNum = Number(p.price);
                    const priceLabel = Number.isFinite(priceNum) ? priceNum.toFixed(2) : (p.price ?? '');
                    const targetStoreId = p.store ?? p.store_id ?? fav.store ?? null;
                    return (
                    <div key={fav.id} className="card favorite-card">
                      {targetStoreId ? (
                        <Link
                          to={`/stores/${targetStoreId}`}
                          state={{ scrollToProductId: p.id }}
                          className="favorite-card-media"
                          title="فتح المنتج داخل المتجر"
                        >
                          {visualImageUrls(p).length > 0 ? (
                            <ImageCarousel images={visualImageUrls(p)} height={152} borderRadius={0} />
                          ) : (
                            <Package size={40} color="var(--text-secondary)" />
                          )}
                        </Link>
                      ) : (
                        <div className="favorite-card-media">
                          {visualImageUrls(p).length > 0 ? (
                            <ImageCarousel images={visualImageUrls(p)} height={152} borderRadius={0} />
                          ) : (
                            <Package size={40} color="var(--text-secondary)" />
                          )}
                        </div>
                      )}
                      <div className="favorite-card-body">
                      {p.store_name ? (
                        <p
                          style={{
                            margin: '0 0 8px',
                            fontSize: '0.88rem',
                            fontWeight: 800,
                            color: 'var(--secondary)',
                          }}
                        >
                          المتجر: {p.store_name}
                        </p>
                      ) : null}
                      <div className="flex-center" style={{ justifyContent: 'space-between', marginBottom: '12px' }}>
                        <h3 style={{ fontSize: '1.2rem', margin: 0 }}>{p.name}</h3>
                        <button
                          type="button"
                          className="action-btn delete"
                          onClick={() => handleRemoveProduct(fav.id)}
                          style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#FF5252' }}
                          aria-label="إزالة من المفضلة"
                        >
                          <Trash2 size={20} />
                        </button>
                      </div>
                      <div className="favorite-card-price">{priceLabel} ₪</div>
                      <div className="favorite-card-desc">{p.description || 'لا يوجد وصف'}</div>
                      <div className="actions" style={{ marginTop: '20px', display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                        <button
                          type="button"
                          className="btn-primary"
                          style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px' }}
                          disabled={productIdForCart == null || productIdForCart === ''}
                          title={
                            productIdForCart == null || productIdForCart === ''
                              ? 'لا يمكن الإضافة — بيانات المنتج ناقصة'
                              : 'إضافة المنتج إلى سلة تختارها'
                          }
                          onClick={() => handleAddProductToCart(productIdForCart)}
                        >
                          <ShoppingBasket size={18} /> إضافة للسلة
                        </button>
                        {p.store != null ? (
                          <Link
                            to={`/stores/${p.store}`}
                            className="favorite-card-storebtn"
                            style={{
                              display: 'inline-flex',
                              alignItems: 'center',
                              padding: '10px 14px',
                              borderRadius: 10,
                              border: '1.5px solid var(--border)',
                              textDecoration: 'none',
                              color: 'var(--secondary)',
                              fontWeight: 700,
                              fontSize: '0.9rem',
                            }}
                          >
                            المتجر
                          </Link>
                        ) : null}
                      </div>
                      </div>
                    </div>
                  );
                  })}
                </div>
              ) : (
                <div className="empty-state card flex-center" style={{ flexDirection: 'column', padding: '50px' }}>
                  <Heart size={48} color="#ccc" />
                  <p style={{ marginTop: '15px', color: '#777' }}>لا توجد منتجات مفضّلة بعد.</p>
                  <p style={{ color: '#999', fontSize: '0.9rem' }}>
                    افتح صفحة أي متجر واضغط القلب بجانب المنتج.
                  </p>
                </div>
              )
            ) : storeFavorites.length > 0 ? (
              <div
                className="favorites-grid"
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fill, minmax(min(280px, 100%), 1fr))',
                  gap: '20px',
                }}
              >
                {storeFavorites.map((fav) => {
                  const s = fav.store_details || {};
                  return (
                    <div key={fav.id} className="card favorite-card favorite-card--store">
                      <div className="flex-center" style={{ justifyContent: 'space-between', marginBottom: '12px' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                          <div
                            style={{
                              width: 48,
                              height: 48,
                              borderRadius: 12,
                              overflow: 'hidden',
                              background: 'var(--grey-light)',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                            }}
                          >
                            {s.logo ? (
                              <img src={s.logo} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                            ) : (
                              <Store size={22} color="var(--text-secondary)" />
                            )}
                          </div>
                          <div>
                            <h3 style={{ fontSize: '1.15rem', margin: 0 }}>{s.store_name}</h3>
                            <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginTop: 4 }}>
                              {s.category_name || 'متجر'}
                            </div>
                          </div>
                        </div>
                        <button
                          type="button"
                          onClick={() => handleRemoveStore(fav.id)}
                          style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#FF5252' }}
                          aria-label="إزالة من المفضلة"
                        >
                          <Trash2 size={20} />
                        </button>
                      </div>
                      {s.description ? (
                        <p style={{ color: '#666', fontSize: '0.88rem', lineHeight: 1.5, marginTop: 8 }}>
                          {s.description.slice(0, 140)}
                          {s.description.length > 140 ? '…' : ''}
                        </p>
                      ) : null}
                      <Link
                        to={`/stores/${s.id}`}
                        className="btn-primary"
                        style={{
                          display: 'inline-flex',
                          marginTop: 16,
                          padding: '10px 16px',
                          borderRadius: 10,
                          textDecoration: 'none',
                          fontWeight: 800,
                        }}
                      >
                        عرض المتجر
                      </Link>
                    </div>
                  );
                })}
              </div>
            ) : (
              <div className="empty-state card flex-center" style={{ flexDirection: 'column', padding: '50px' }}>
                <Store size={48} color="#ccc" />
                <p style={{ marginTop: '15px', color: '#777' }}>لا توجد محلات مفضّلة بعد.</p>
                <p style={{ color: '#999', fontSize: '0.9rem' }}>افتح صفحة المتجر واضغط القلب بجانب الاسم.</p>
              </div>
            )}
          </>
        )}
      </div>

        {/* اختيار السلة يتم عبر showSelect في AlertProvider */}

      <style dangerouslySetInnerHTML={{ __html: `
        .favorites-page{
          max-width: 1240px;
          margin-inline: auto;
          padding-inline: clamp(8px, 2.2vw, 22px);
          padding-bottom: 32px;
          box-sizing: border-box;
        }
        .favorites-head{
          justify-content: flex-start;
          gap: 14px;
          margin-bottom: 18px;
          flex-wrap: wrap;
        }
        .favorites-head-icon{
          background: linear-gradient(135deg, #ff6b6b, #ff3b3b);
          padding: 10px;
          border-radius: 14px;
          color: #fff;
          box-shadow: 0 10px 26px rgba(255, 82, 82, 0.22);
          display: inline-flex;
          align-items: center;
          justify-content: center;
        }
        .favorites-head-title{
          margin: 0;
          font-weight: 950;
          font-size: 1.65rem;
          color: var(--secondary);
          letter-spacing: -0.02em;
        }
        .fav-tabs-row{
          display: flex;
          gap: 10px;
          margin-bottom: 22px;
          flex-wrap: wrap;
        }
        .favorites-grid{
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 12px;
        }
        @media (max-width: 720px) {
          .favorites-grid{
            grid-template-columns: 1fr;
            gap: 10px;
            justify-items: center;
            max-width: min(280px, 94vw);
            margin-inline: auto;
          }
          .favorite-card{
            width: 100%;
            max-width: min(280px, 94vw);
            border-radius: 16px;
          }
          .favorite-card-media{
            max-height: 132px;
            min-height: 88px;
            aspect-ratio: 3 / 2;
          }
          .favorite-card-body{
            padding: 9px 11px 11px;
          }
          .favorite-card--store{
            padding: 14px;
          }
        }
        @media (min-width: 960px) {
          .favorites-grid{
            grid-template-columns: repeat(3, minmax(0, 1fr));
            gap: 12px;
          }
        }
        @media (min-width: 1200px) {
          .favorites-grid{
            grid-template-columns: repeat(4, minmax(0, 1fr));
            gap: 12px;
          }
        }
        .favorite-card{
          display: flex;
          flex-direction: column;
          overflow: hidden;
          padding: 0;
        }
        .favorite-card--store{
          aspect-ratio: auto;
          padding: 20px;
          gap: 0;
        }
        .favorite-card-media{
          flex: 0 0 auto;
          width: 100%;
          aspect-ratio: 3 / 2;
          max-height: 168px;
          min-height: 96px;
          background: var(--grey-light);
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
        }
        a.favorite-card-media{
          text-decoration: none;
          color: inherit;
          cursor: pointer;
        }
        .favorite-card-body{
          flex: 1 1 auto;
          min-height: 0;
          display: flex;
          flex-direction: column;
          padding: 11px 12px 13px;
          overflow: hidden;
        }
        .favorite-card h3{
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .favorite-card-body p{
          margin-bottom: 8px;
        }
        .favorite-card-price{
          font-weight: 950;
          color: var(--secondary);
          font-size: 1.08rem;
          margin: 0 0 8px;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          align-self: flex-start;
          padding: 7px 12px;
          border-radius: 999px;
          background: rgba(255, 204, 0, 0.22);
          border: 1px solid rgba(245, 192, 0, 0.45);
          box-shadow: 0 6px 18px rgba(245, 192, 0, 0.16);
        }
        .favorite-card-desc{
          color: var(--text-secondary);
          font-size: 0.86rem;
          line-height: 1.45;
          margin: 0 0 8px;
          display: -webkit-box;
          -webkit-line-clamp: 1;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .favorite-card .actions{
          margin-top: auto !important;
        }
        .favorite-card .actions{
          display: grid !important;
          grid-template-columns: 1fr;
          gap: 8px !important;
          align-items: stretch;
          width: 100%;
        }
        .favorite-card .actions .btn-primary{
          width: 100%;
          padding: 10px 12px;
          font-size: 0.9rem;
          border-radius: 14px;
        }
        .favorite-card-storebtn{
          width: 100%;
          box-sizing: border-box;
          border-radius: 14px !important;
          font-weight: 900 !important;
          justify-content: center !important;
          background: var(--white) !important;
          border: 1.5px solid var(--border) !important;
        }
        .favorite-card--expired{
          padding: 20px;
        }
        .favorite-card-title{
          margin: 0;
          font-weight: 900;
          color: var(--secondary);
        }
        .favorite-card-sub{
          color: var(--text-secondary);
          font-size: 0.92rem;
          margin-top: 8px;
          line-height: 1.6;
        }
        .fav-tab {
          border: 1.5px solid var(--border);
          background: var(--white);
          color: var(--secondary);
          padding: 10px 18px;
          border-radius: 999px;
          font-weight: 800;
          font-size: 0.95rem;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          transition: background 0.15s, border-color 0.15s;
        }
        .fav-tab:hover { background: var(--primary-light); border-color: var(--primary); }
        .fav-tab-active {
          background: linear-gradient(135deg, var(--primary) 0%, var(--primary-hover) 100%);
          color: var(--secondary);
          border-color: transparent;
          box-shadow: var(--shadow-gold);
        }
        .fav-tab-count {
          background: rgba(0,0,0,0.08);
          padding: 2px 8px;
          border-radius: 999px;
          font-size: 0.82rem;
        }
        .fav-tab-active .fav-tab-count { background: rgba(255,255,255,0.35); }
      `}} />
    </MainLayout>
  );
};

export default Favorites;
