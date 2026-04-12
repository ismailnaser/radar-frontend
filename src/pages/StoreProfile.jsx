import React, { useCallback, useEffect, useState } from 'react';
import { Link, useLocation, useParams, useNavigate } from 'react-router-dom';
import MainLayout from '../components/MainLayout';
import {
  getStoreDetail,
  addToCart,
  getCarts,
  createCart,
  getFavorites,
  addFavorite,
  removeFavorite,
  getStoreFavorites,
  addStoreFavorite,
  removeStoreFavorite,
  updateCart,
  rateStore,
} from '../api/data';
import { useAlert } from '../components/AlertProvider';
import { ensureCartNamed } from '../utils/cartNaming';
import {
  ArrowLeft,
  ChevronDown,
  ChevronUp,
  Heart,
  Image as ImageIcon,
  Loader2,
  ShoppingCart,
  Store,
  MapPin,
  Star,
  MessageCircle,
  LogIn,
} from 'lucide-react';
import ImageCarousel from '../components/ImageCarousel';
import { visualImageUrls } from '../utils/productImages';
import { whatsappMeUrlFromStoredNumber } from '../utils/whatsapp';
import { storeHasWeeklyHoursSchedule } from '../utils/storeHours';
import { formatApiError } from '../utils/apiErrors';
import { canUseShoppingCarts } from '../utils/cartAccess';
// اختيار السلة عبر النافذة المنبثقة العامة (CustomModal)

const clampInt = (n, min, max) => {
  const x = parseInt(String(n), 10);
  if (Number.isNaN(x)) return min;
  return Math.min(max, Math.max(min, x));
};

/** يطابق منطق showStoreOnMap: إظهار أزرار الخريطة فقط عند وجود إحداثيات صالحة رقماً */
const storeHasMappableCoords = (s) =>
  !!s && Number.isFinite(Number(s.latitude)) && Number.isFinite(Number(s.longitude));

const StoreProfile = () => {
  const { storeId } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const { showAlert, showPrompt, showSelect } = useAlert();

  const [loading, setLoading] = useState(true);
  const [store, setStore] = useState(null);
  const [error, setError] = useState('');
  const [quantities, setQuantities] = useState({});
  const [inCartQty, setInCartQty] = useState({});
  const [addingId, setAddingId] = useState(null);
  const [storeFavoriteRecordId, setStoreFavoriteRecordId] = useState(null);
  const [productFavByProductId, setProductFavByProductId] = useState({});
  const [sponsoredFavByAdId, setSponsoredFavByAdId] = useState({});
  const [favBusy, setFavBusy] = useState(false);
  const [ratingBusy, setRatingBusy] = useState(false);
  const [pendingCartAdd, setPendingCartAdd] = useState(null);
  const [flashProductId, setFlashProductId] = useState(null);

  const isGuest = localStorage.getItem('isGuest') === 'true';
  const authed = !!localStorage.getItem('token') && !isGuest;
  const canUseCarts = canUseShoppingCarts();
  /** تقييم المتجر: متسوّق فقط */
  const canShopSponsored =
    authed && localStorage.getItem('user_type') === 'shopper';

  const submitStoreRating = async (stars) => {
    if (!canShopSponsored) {
      await showAlert('التقييم متاح لحساب المتسوّق فقط (وليس وضع الزائر أو التاجر).', 'تنبيه');
      return;
    }
    const sid = storeId != null ? Number(storeId) : store?.id;
    if (!sid) return;
    setRatingBusy(true);
    try {
      const data = await rateStore(sid, stars);
      setStore((prev) =>
        prev
          ? {
              ...prev,
              rating_average: data.rating_average ?? prev.rating_average,
              rating_count: data.rating_count ?? prev.rating_count,
              my_rating: stars,
            }
          : prev
      );
      await showAlert('شكراً، تم حفظ تقييمك.', 'تم');
    } catch (e) {
      await showAlert(formatApiError(e, 'تعذر إرسال التقييم.'), 'خطأ');
    } finally {
      setRatingBusy(false);
    }
  };

  const refreshCartQuantities = useCallback(async () => {
    if (!authed) {
      setInCartQty({});
      return;
    }
    try {
      const carts = await getCarts();
      const cart = carts[0];
      if (!cart?.items?.length) {
        setInCartQty({});
        return;
      }
      const map = {};
      for (const it of cart.items) {
        map[it.product] = it.quantity;
      }
      setInCartQty(map);
    } catch {
      setInCartQty({});
    }
  }, [authed]);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      setLoading(true);
      setError('');
      try {
        const data = await getStoreDetail(storeId);
        if (!cancelled) {
          setStore(data);
          const q0 = {};
          const products = data.products || [];
          for (const p of products) {
            q0[p.id] = 1;
          }
          setQuantities(q0);
        }
      } catch (e) {
        if (!cancelled) {
          setError('تعذر تحميل بيانات المتجر');
          setStore(null);
        }
      } finally {
        if (!cancelled) setLoading(false);
      }
    })();
    return () => {
      cancelled = true;
    };
  }, [storeId]);

  useEffect(() => {
    const pid = location.state?.scrollToProductId;
    if (pid == null || pid === '') return;
    // انتظر رندر الشبكة بعد تحميل المنتجات
    const t = window.setTimeout(() => {
      const el = document.querySelector(`[data-store-product-id="${String(pid)}"]`);
      if (el && typeof el.scrollIntoView === 'function') {
        el.scrollIntoView({ behavior: 'smooth', block: 'center' });
        setFlashProductId(String(pid));
        window.setTimeout(() => setFlashProductId(null), 1600);
      }
    }, 220);
    return () => window.clearTimeout(t);
  }, [location.state, storeId]);

  useEffect(() => {
    refreshCartQuantities();
  }, [refreshCartQuantities, storeId]);

  useEffect(() => {
    if (!authed || !store?.id) {
      setStoreFavoriteRecordId(null);
      setProductFavByProductId({});
      setSponsoredFavByAdId({});
      return;
    }
    let cancelled = false;
    (async () => {
      try {
        const [pList, sList] = await Promise.all([getFavorites(), getStoreFavorites()]);
        if (cancelled) return;
        const pm = {};
        const sm = {};
        for (const f of pList || []) {
          const pid = f.product ?? f.product_details?.id;
          if (pid != null) pm[pid] = f.id;
          if ((f.product == null || f.product === '') && f.sponsored_ad != null) {
            sm[f.sponsored_ad] = f.id;
          }
        }
        setProductFavByProductId(pm);
        setSponsoredFavByAdId(sm);
        if (!store.is_owner) {
          const hit = (sList || []).find(
            (f) =>
              Number(f.store) === Number(store.id) || Number(f.store_details?.id) === Number(store.id)
          );
          setStoreFavoriteRecordId(hit?.id ?? null);
        } else {
          setStoreFavoriteRecordId(null);
        }
      } catch {
        if (!cancelled) {
          setProductFavByProductId({});
          setSponsoredFavByAdId({});
          setStoreFavoriteRecordId(null);
        }
      }
    })();
    return () => {
      cancelled = true;
    };
  }, [authed, store?.id, store?.is_owner]);

  const showStoreOnMap = () => {
    const lat = Number(store?.latitude);
    const lng = Number(store?.longitude);
    if (!Number.isFinite(lat) || !Number.isFinite(lng)) {
      showAlert('لا توجد إحداثيات خريطة محفوظة لهذا المتجر.');
      return;
    }
    navigate('/map', {
      state: {
        mapFocus: { lat, lng, storeId: store.id },
        mapPreset: {
          mode: 'stores',
          category: store?.category ?? null,
          q: store?.store_name ?? '',
        },
      },
    });
  };

  const sponsoredCartBusyKey = (ad) => (ad.product ? `p-${ad.product}` : `ad-${ad.id}`);

  const addSponsoredAdToCart = async (ad) => {
    if (!canUseCarts) {
      showAlert(
        'ميزة السلال للأعضاء المسجّلين فقط (متسوّق، تاجر، أو مدير) وليست لوضع الزائر. سجّل الدخول ثم أعد المحاولة.',
      );
      return;
    }
    setAddingId(sponsoredCartBusyKey(ad));
    try {
      const cartPayload = {
        productId: ad.product ?? null,
        sponsoredAdId: ad.id,
        quantity: 1,
        success: 'تمت إضافة العرض للسلة.',
      };
      setPendingCartAdd(cartPayload);
      const carts = await getCarts();
      const list = Array.isArray(carts) ? carts : [];
      if (list.length === 0) {
        await createCartAndAddPending(cartPayload, { isFirstCart: true });
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
        { primaryActionLabel: 'سلة جديدة' }
      );
      if (pick == null) return;
      if (pick === '__primary__') {
        await createCartAndAddPending();
        return;
      }
      await pickCartAndAddPending({ id: pick });
    } catch (e) {
      showAlert(formatApiError(e, 'تعذرت الإضافة للسلة.'), 'خطأ');
    } finally {
      setAddingId(null);
    }
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
    await refreshCartQuantities();
    await showAlert(p.success || 'تمت الإضافة للسلة.', 'تم');
    setPendingCartAdd(null);
  };

  const pickCartAndAddPending = async (cart) => {
    const p = pendingCartAdd;
    if (!p) return;
    await addToCart(cart.id, p.productId ?? null, p.quantity ?? 1, p.sponsoredAdId ?? null);
    await refreshCartQuantities();
    await showAlert(p.success || 'تمت الإضافة للسلة.', 'تم');
    setPendingCartAdd(null);
  };

  const addSponsoredAdToFavorites = async (ad) => {
    if (!authed) {
      showAlert('سجّل الدخول لاستخدام المفضلة. وضع الزائر لا يدعمها.');
      return;
    }
    if (favBusy) return;
    setFavBusy(true);
    try {
      if (!ad.product) {
        const existing = sponsoredFavByAdId[ad.id];
        if (existing) {
          await removeFavorite(existing);
          setSponsoredFavByAdId((prev) => {
            const n = { ...prev };
            delete n[ad.id];
            return n;
          });
          showAlert('أُزيل العرض المستقل من المفضلة.');
        } else {
          const r = await addFavorite(null, ad.id);
          setSponsoredFavByAdId((prev) => ({ ...prev, [ad.id]: r.id }));
          showAlert('أُضيف عرض الإعلان للمفضلة — يُزال تلقائياً عند انتهاء مدة الإعلان.');
        }
        return;
      }
      const r = await addFavorite(ad.product, ad.id);
      setProductFavByProductId((prev) => ({ ...prev, [ad.product]: r.id }));
      showAlert('أُضيف المنتج للمفضلة.');
    } catch (e) {
      showAlert(formatApiError(e, 'تعذرت العملية.'), 'خطأ');
    } finally {
      setFavBusy(false);
    }
  };

  const toggleStoreFavorite = async () => {
    if (!authed) {
      showAlert('سجّل الدخول لاستخدام المفضلة.');
      return;
    }
    if (store.is_owner) return;
    if (favBusy) return;
    setFavBusy(true);
    try {
      if (storeFavoriteRecordId) {
        await removeStoreFavorite(storeFavoriteRecordId);
        setStoreFavoriteRecordId(null);
        showAlert('أُزيل المحل من المفضلة.');
      } else {
        const r = await addStoreFavorite(store.id);
        setStoreFavoriteRecordId(r.id);
        showAlert('أُضيف المحل للمفضلة.');
      }
    } catch (e) {
      const msg = e?.response?.data?.store?.[0] || e?.response?.data?.detail;
      showAlert(msg ? String(msg) : 'تعذرت العملية.');
    } finally {
      setFavBusy(false);
    }
  };

  const toggleProductFavorite = async (p) => {
    if (!authed) {
      showAlert('سجّل الدخول لاستخدام المفضلة.');
      return;
    }
    if (store.is_owner) return;
    const existingId = productFavByProductId[p.id];
    if (favBusy) return;
    setFavBusy(true);
    try {
      if (existingId) {
        await removeFavorite(existingId);
        setProductFavByProductId((prev) => {
          const n = { ...prev };
          delete n[p.id];
          return n;
        });
        showAlert('أُزيل المنتج من المفضلة.');
      } else {
        const r = await addFavorite(p.id);
        setProductFavByProductId((prev) => ({ ...prev, [p.id]: r.id }));
        showAlert('أُضيف المنتج للمفضلة.');
      }
    } catch {
      showAlert('تعذرت العملية — ربما المنتج مضاف مسبقاً.');
    } finally {
      setFavBusy(false);
    }
  };

  /* المنتجات المؤرشفة لا تُرسل من الـ API عادةً؛ نتعامل مع القيم المنطقية بأشكالها */
  const products = (store?.products || []).filter((p) => {
    const a = p.is_archived;
    return a !== true && a !== 1 && a !== 'true' && a !== 'True';
  });

  const setQty = (productId, value) => {
    setQuantities((prev) => ({
      ...prev,
      [productId]: clampInt(value, 1, 9999),
    }));
  };

  const bumpQty = (productId, delta) => {
    setQuantities((prev) => ({
      ...prev,
      [productId]: clampInt((prev[productId] ?? 1) + delta, 1, 9999),
    }));
  };

  const waContactUrl =
    store != null
      ? store.contact_whatsapp_url || whatsappMeUrlFromStoredNumber(store.contact_whatsapp)
      : null;

  const hasWeeklyHoursSchedule =
    store != null ? storeHasWeeklyHoursSchedule(store.business_hours_weekly) : false;

  const handleAddToCart = async (product) => {
    if (store?.is_owner) return;
    if (!canUseCarts) {
      showAlert(
        'ميزة السلال للأعضاء المسجّلين فقط (متسوّق، تاجر، أو مدير) وليست لوضع الزائر. سجّل الدخول ثم أعد المحاولة.',
      );
      return;
    }
    const qty = quantities[product.id] ?? 1;
    setAddingId(product.id);
    try {
      const cartPayload = {
        productId: product.id,
        sponsoredAdId: null,
        quantity: qty,
        success: `تمت إضافة «${product.name}» للسلة.`,
      };
      setPendingCartAdd(cartPayload);
      const carts = await getCarts();
      const list = Array.isArray(carts) ? carts : [];
      if (list.length === 0) {
        await createCartAndAddPending(cartPayload, { isFirstCart: true });
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
        { primaryActionLabel: 'سلة جديدة' }
      );
      if (pick == null) return;
      if (pick === '__primary__') {
        await createCartAndAddPending();
        return;
      }
      await pickCartAndAddPending({ id: pick });
    } catch (err) {
      showAlert(formatApiError(err, 'تعذر إضافة المنتج للسلة.'), 'خطأ');
    } finally {
      setAddingId(null);
    }
  };

  return (
    <MainLayout>
      <div
        style={{
          maxWidth: 1240,
          marginInline: 'auto',
          paddingBottom: 48,
          paddingInline: 'clamp(8px, 2.2vw, 22px)',
          boxSizing: 'border-box',
        }}
      >
        <Link
          to="/map"
          className="flex-center"
          style={{
            gap: 8,
            marginBottom: 16,
            color: 'var(--text-secondary)',
            textDecoration: 'none',
            fontWeight: 700,
            width: 'fit-content',
          }}
        >
          <ArrowLeft size={18} />
          رجوع للخريطة
        </Link>

        {loading && (
          <div className="card flex-center" style={{ padding: 48, gap: 12 }}>
            <Loader2 className="spin" size={28} />
            جاري التحميل...
          </div>
        )}

        {!loading && error && (
          <div className="card" style={{ color: '#c62828' }}>
            {error}
          </div>
        )}

        {!loading && store && (
          <>
            <header className="card store-profile-hero">
              <div className="store-profile-hero-banner" />
              <div className="store-profile-hero-body">
                <div className="flex-between store-profile-hero-top">
                  <div className="store-profile-hero-logo">
                    {store.logo ? (
                      <img
                        src={store.logo}
                        alt=""
                        className="store-profile-hero-logo-img"
                      />
                    ) : (
                      <Store size={40} color="var(--text-secondary)" />
                    )}
                  </div>
                </div>
                <div className="flex-between store-profile-hero-row">
                  <h1 className="store-profile-title">
                    {store.store_name}
                  </h1>
                  {storeHasMappableCoords(store) || (authed && !store.is_owner) ? (
                    <div className="store-profile-hero-actions">
                      {storeHasMappableCoords(store) ? (
                        <button
                          type="button"
                          onClick={showStoreOnMap}
                          title="عرض موقع المتجر على الخريطة"
                          aria-label="عرض على الخريطة"
                          className="store-profile-icon-btn"
                        >
                          <MapPin size={26} color="var(--secondary)" />
                        </button>
                      ) : null}
                      {authed && !store.is_owner ? (
                        <button
                          type="button"
                          onClick={toggleStoreFavorite}
                          disabled={favBusy}
                          title={storeFavoriteRecordId ? 'إزالة من المفضلة' : 'إضافة للمفضلة'}
                          aria-label="مفضلة المحل"
                          className={`store-profile-icon-btn ${storeFavoriteRecordId ? 'store-profile-icon-btn--fav' : ''}`}
                          style={{ cursor: favBusy ? 'wait' : undefined }}
                        >
                          <Heart
                            size={26}
                            color="#e91e63"
                            fill={storeFavoriteRecordId ? '#e91e63' : 'none'}
                          />
                        </button>
                      ) : null}
                    </div>
                  ) : null}
                </div>
                <div className="store-profile-subtitle">
                  {store.category_name || 'متجر'}
                </div>
                <div className="store-profile-contact">
                  <div className="store-profile-contact-head">
                    <MessageCircle size={18} aria-hidden />
                    تواصل معنا
                  </div>
                  {waContactUrl ? (
                    <a
                      href={waContactUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="store-profile-whatsapp-btn"
                    >
                      <MessageCircle size={20} />
                      مراسلة عبر واتساب
                    </a>
                  ) : (
                    <div>
                      <p
                        className="store-profile-contact-note"
                      >
                        لم يُضف رقم واتساب للتواصل بعد — يظهر الزر تلقائياً عندما يضيفه صاحب المتجر من إعدادات
                        المتجر.
                      </p>
                      {store.is_owner ? (
                        <Link
                          to="/merchant/settings"
                          className="store-profile-settings-link"
                        >
                          فتح إعدادات المتجر لإضافة الرقم
                        </Link>
                      ) : null}
                    </div>
                  )}
                </div>

                {Array.isArray(store.store_features) && store.store_features.filter(Boolean).length > 0 ? (
                  <div className="store-profile-features">
                    {store.store_features.filter(Boolean).map((t, ti) => (
                      <span
                        key={`${ti}-${t}`}
                        className="store-feature-chip"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                ) : null}

                <div className="store-profile-box">
                  <div className="store-profile-box-row">
                    <span className="store-profile-box-title">مواعيد العمل</span>
                    {hasWeeklyHoursSchedule ? (
                      store.is_open_now === true ? (
                        <span className="store-profile-pill store-profile-pill--open">مفتوح الآن</span>
                      ) : store.is_open_now === false ? (
                        <span className="store-profile-pill store-profile-pill--closed">مغلق الآن</span>
                      ) : (
                        <span className="store-profile-pill store-profile-pill--muted">—</span>
                      )
                    ) : (
                      <span className="store-profile-pill store-profile-pill--muted">لا يوجد مواعيد عمل محددة</span>
                    )}
                  </div>
                  {(store.business_hours_note || '').trim() ? (
                    <div className="store-profile-note">
                      {store.business_hours_note.trim()}
                    </div>
                  ) : null}
                </div>

                <div className="store-profile-box store-profile-box--rating">
                  <div className="store-profile-box-title">تقييم المتجر (من 5 نجوم)</div>
                  {store.rating_count > 0 && store.rating_average != null ? (
                    <div
                      dir="ltr"
                      className="store-profile-rating-row"
                    >
                      <span className="store-profile-rating-avg">
                        {Number(store.rating_average).toFixed(1)}
                      </span>
                      <span className="star-row-readonly" aria-hidden>
                        {[1, 2, 3, 4, 5].map((lvl) => (
                          <Star
                            key={lvl}
                            size={22}
                            color="#f5c000"
                            fill={lvl <= Math.round(Number(store.rating_average)) ? '#f5c000' : 'none'}
                            strokeWidth={lvl <= Math.round(Number(store.rating_average)) ? 0 : 1.5}
                          />
                        ))}
                      </span>
                      <span className="store-profile-rating-count">
                        بناءً على {store.rating_count} تقييم
                      </span>
                    </div>
                  ) : (
                    <p className="store-profile-muted">لا يوجد تقييمات بعد.</p>
                  )}
                  {canShopSponsored && !store.is_owner ? (
                    <div>
                      <div className="store-profile-rate-hint">
                        {store.my_rating ? 'تقييمك الحالي (اضغط نجمة لتغييره)' : 'قيّم هذا المحل'}
                      </div>
                      <div dir="ltr" className="store-profile-rate-row">
                        {[1, 2, 3, 4, 5].map((lvl) => (
                          <button
                            key={lvl}
                            type="button"
                            disabled={ratingBusy}
                            onClick={() => submitStoreRating(lvl)}
                            aria-label={`تقييم ${lvl} من 5`}
                            className="store-profile-star-btn"
                            style={{ cursor: ratingBusy ? 'wait' : undefined }}
                          >
                            <Star
                              size={30}
                              color="#f5c000"
                              fill={lvl <= (store.my_rating || 0) ? '#f5c000' : 'none'}
                              strokeWidth={lvl <= (store.my_rating || 0) ? 0 : 1.5}
                            />
                          </button>
                        ))}
                      </div>
                    </div>
                  ) : store.is_owner ? (
                    <p className="store-profile-muted store-profile-muted--tight">
                      يظهر تقييمك الإجمالي للزوار؛ التقييم من حسابات المتسوّقين فقط.
                    </p>
                  ) : !authed ? (
                    <button
                      type="button"
                      className="store-profile-rating-login-cta"
                      onClick={() => navigate('/login')}
                    >
                      <span className="store-profile-rating-login-cta-icon" aria-hidden>
                        <LogIn size={18} strokeWidth={2} />
                      </span>
                      <span className="store-profile-rating-login-cta-label">
                        سجّل دخول كمتسوّق لتتمكن من التقييم
                      </span>
                    </button>
                  ) : null}
                </div>

                {store.description ? (
                  <p className="store-profile-desc">
                    {store.description}
                  </p>
                ) : null}

                {(store.location_address || '').trim() ? (
                  <div className="store-profile-box">
                    <div className="store-profile-loc-head">
                      <MapPin size={18} aria-hidden />
                      الموقع (نصاً)
                    </div>
                    <div className="store-profile-loc-text">{store.location_address.trim()}</div>
                  </div>
                ) : null}

                {/* تم إخفاء زر "عرض السلة" من صفحة المتجر حسب الطلب */}
              </div>
            </header>

            {Array.isArray(store.sponsored_ads) && store.sponsored_ads.length > 0 && (
              <section className="store-profile-sponsored">
                <h2 className="store-profile-section-title">عروض وإعلانات</h2>
                <div className="store-profile-sponsored-rail">
                  {store.sponsored_ads.map((ad) => (
                    <div
                      key={ad.id}
                      className="card store-profile-sponsored-card"
                    >
                      {visualImageUrls(ad).length > 0 ? (
                        <div className="store-profile-sponsored-media">
                          <ImageCarousel images={visualImageUrls(ad)} height={100} borderRadius={12} />
                          {!store.is_owner ? (
                            <>
                              <button
                                type="button"
                                className={`store-profile-sponsored-fab store-profile-sponsored-fab--cart${
                                  canUseCarts ? '' : ' store-profile-sponsored-fab--muted'
                                }`}
                                onClick={(e) => {
                                  e.stopPropagation();
                                  addSponsoredAdToCart(ad);
                                }}
                                disabled={addingId === sponsoredCartBusyKey(ad)}
                                title="إضافة إلى السلة"
                                aria-label="إضافة إلى السلة"
                                style={{ cursor: addingId === sponsoredCartBusyKey(ad) ? 'wait' : 'pointer' }}
                              >
                                <ShoppingCart size={16} strokeWidth={2} aria-hidden />
                              </button>
                              <button
                                type="button"
                                className={`store-profile-sponsored-fab store-profile-sponsored-fab--fav${
                                  authed ? '' : ' store-profile-sponsored-fab--muted'
                                }`}
                                onClick={(e) => {
                                  e.stopPropagation();
                                  addSponsoredAdToFavorites(ad);
                                }}
                                disabled={favBusy}
                                title={ad.product ? 'مفضلة' : 'مفضلة — يُزال عند انتهاء الإعلان'}
                                aria-label="مفضلة"
                                style={{ cursor: favBusy ? 'wait' : 'pointer' }}
                              >
                                <Heart
                                  size={16}
                                  color="#e91e63"
                                  fill={
                                    ad.product
                                      ? productFavByProductId[ad.product]
                                        ? '#e91e63'
                                        : 'none'
                                      : sponsoredFavByAdId[ad.id]
                                        ? '#e91e63'
                                        : 'none'
                                  }
                                  aria-hidden
                                />
                              </button>
                            </>
                          ) : null}
                        </div>
                      ) : null}
                      <div className="store-profile-sponsored-title">{ad.title}</div>
                      {Number(ad.product_price) > 0 ? (
                        <div className="store-profile-sponsored-price-row">
                          {ad.catalog_product_price != null &&
                          ad.catalog_product_price !== '' &&
                          Math.abs(Number(ad.catalog_product_price) - Number(ad.product_price)) > 1e-9 ? (
                            <>
                              <span className="store-profile-sponsored-old">
                                {Number(ad.catalog_product_price).toFixed(2)} ₪
                              </span>
                              <span className="store-profile-sponsored-badge">
                                سعر العرض
                              </span>
                            </>
                          ) : null}
                          <span className="store-profile-sponsored-now">{Number(ad.product_price).toFixed(2)} ₪</span>
                        </div>
                      ) : null}
                      <div className="store-profile-sponsored-desc">
                        {ad.description}
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}

            <section>
              <h2 className="store-profile-section-title store-profile-section-title--products">المنتجات</h2>
              {products.length === 0 ? (
                <div className="card" style={{ color: 'var(--text-secondary)', lineHeight: 1.65 }}>
                  <div>لا توجد منتجات متاحة للمتسوّقين حالياً.</div>
                  {store.is_owner ? (
                    <div style={{ marginTop: 10, fontSize: '0.9rem' }}>
                      إن كنت صاحب/ة هذا المتجر: المنتجات «المؤرشفة» من صفحة «منتجاتي» لا تظهر هنا — عطّل الأرشفة ليظهر المنتج للجمهور.
                    </div>
                  ) : null}
                </div>
              ) : (
                <div className="store-profile-products-grid">
                  {products.map((p) => {
                    const inQ = inCartQty[p.id];
                    return (
                      <article
                        key={p.id}
                        className="card store-profile-product-card"
                        data-store-product-id={p.id}
                        data-flash={flashProductId != null && String(flashProductId) === String(p.id) ? 'true' : 'false'}
                      >
                        <div className="store-profile-product-media">
                          {authed && !store.is_owner ? (
                            <button
                              type="button"
                              onClick={() => toggleProductFavorite(p)}
                              disabled={favBusy}
                              title={productFavByProductId[p.id] ? 'إزالة من المفضلة' : 'إضافة للمفضلة'}
                              aria-label="مفضلة المنتج"
                              className="store-profile-product-favbtn"
                              style={{ cursor: favBusy ? 'wait' : 'pointer' }}
                            >
                              <Heart
                                size={18}
                                color="#e91e63"
                                fill={productFavByProductId[p.id] ? '#e91e63' : 'none'}
                              />
                            </button>
                          ) : null}
                          {visualImageUrls(p).length > 0 ? (
                            <div className="store-profile-product-media-inner">
                              <ImageCarousel
                                images={visualImageUrls(p)}
                                fill
                                borderRadius={0}
                                className="store-product-grid-carousel"
                              />
                            </div>
                          ) : (
                            <ImageIcon size={32} color="var(--text-light)" />
                          )}
                          <div className="store-profile-product-media-overlay">
                            <div className="store-profile-product-media-name">{p.name}</div>
                            <div className="store-profile-product-media-price">{p.price} ₪</div>
                          </div>
                          {!store.is_owner ? (
                            <button
                              type="button"
                              className={`store-profile-product-media-cartbtn${
                                canUseCarts ? '' : ' store-profile-product-media-cartbtn--muted'
                              }`}
                              onClick={() => handleAddToCart(p)}
                              disabled={addingId === p.id}
                              title="إضافة إلى السلة"
                              aria-label="إضافة إلى السلة"
                              style={{ cursor: addingId === p.id ? 'wait' : 'pointer' }}
                            >
                              <ShoppingCart size={18} />
                            </button>
                          ) : null}
                        </div>
                        <div className="store-profile-product-body">
                          {p.description ? (
                            <div className="store-profile-product-desc">
                              {p.description}
                            </div>
                          ) : null}
                          {Array.isArray(p.product_features) && p.product_features.filter(Boolean).length > 0 ? (
                            <div className="store-profile-product-feats">
                              {p.product_features
                                .map((x) => String(x || '').trim())
                                .filter(Boolean)
                                .slice(0, 5)
                                .map((t, i) => (
                                  <span
                                    key={i}
                                    className="store-profile-product-feat"
                                    title={t}
                                  >
                                    {t}
                                  </span>
                                ))}
                            </div>
                          ) : null}
                          <div className="store-profile-product-price">{p.price} ₪</div>

                          {inQ != null && inQ > 0 && <div className="store-profile-in-cart">في السلة: {inQ}</div>}

                          <div className="flex-between store-profile-qty-row">
                            <button
                              type="button"
                              onClick={() => bumpQty(p.id, -1)}
                              className="store-profile-qty-btn"
                              aria-label="نقص الكمية"
                            >
                              <ChevronDown size={18} />
                            </button>
                            <input
                              type="text"
                              inputMode="numeric"
                              value={quantities[p.id] ?? 1}
                              onChange={(e) => setQty(p.id, e.target.value)}
                              onBlur={(e) => setQty(p.id, e.target.value || 1)}
                              className="store-profile-qty-input"
                            />
                            <button
                              type="button"
                              onClick={() => bumpQty(p.id, 1)}
                              className="store-profile-qty-btn"
                              aria-label="زيادة الكمية"
                            >
                              <ChevronUp size={18} />
                            </button>
                          </div>

                        </div>
                      </article>
                    );
                  })}
                </div>
              )}
            </section>
          </>
        )}
      </div>

      <style>{`
        @keyframes spin { to { transform: rotate(360deg); } }
        .spin { animation: spin 0.9s linear infinite; }

        .store-profile-hero{
          padding: 0;
          overflow: hidden;
          margin-bottom: 20px;
        }
        .store-profile-hero-banner{
          height: 120px;
          background: linear-gradient(135deg, var(--primary-light) 0%, var(--primary) 45%, var(--primary-hover) 100%);
        }
        .store-profile-hero-body{
          padding: 0 1.25rem 1.25rem;
          margin-top: -48px;
        }
        .store-profile-hero-top{ align-items: flex-end; }
        .store-profile-hero-logo{
          width: 96px;
          height: 96px;
          border-radius: 24px;
          border: 4px solid var(--white);
          background: var(--surface);
          overflow: hidden;
          box-shadow: var(--shadow);
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .store-profile-hero-logo-img{
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }
        .store-profile-hero-row{
          margin-top: 14px;
          align-items: flex-start;
          gap: 12px;
        }
        .store-profile-title{
          margin: 0;
          font-size: 1.75rem;
          font-weight: 900;
          flex: 1;
          min-width: 0;
        }
        .store-profile-hero-actions{
          display: flex;
          gap: 8px;
          flex-shrink: 0;
        }
        .store-profile-icon-btn{
          background: var(--surface);
          cursor: pointer;
          padding: 10px;
          border-radius: 14px;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1.5px solid var(--border);
          transition: background 0.15s ease, border-color 0.15s ease, box-shadow 0.15s ease;
        }
        .store-profile-icon-btn:hover{
          background: var(--primary-light);
          border-color: rgba(245, 192, 0, 0.4);
          box-shadow: var(--shadow-sm);
        }
        .store-profile-icon-btn:disabled{
          opacity: 0.6;
          cursor: wait;
        }
        .store-profile-icon-btn--fav{
          background: rgba(233, 30, 99, 0.10);
        }
        .store-profile-subtitle{
          color: var(--text-secondary);
          margin-top: 4px;
          font-weight: 700;
        }
        /* store-profile-mapcta removed */
        .store-profile-contact{
          margin-top: 14px;
          padding: 12px 14px;
          border-radius: 14px;
          background: var(--surface);
          border: 1px solid var(--border);
        }
        .store-profile-contact-head{
          font-weight: 900;
          margin-bottom: 10px;
          color: var(--secondary);
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .store-profile-whatsapp-btn{
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 11px 18px;
          border-radius: 12px;
          font-weight: 900;
          text-decoration: none;
          background: #25D366;
          color: #fff;
          border: none;
          box-shadow: 0 2px 8px rgba(37, 211, 102, 0.35);
        }
        .store-profile-whatsapp-btn:hover{ filter: brightness(1.02); }
        .store-profile-contact-note{
          margin: 0 0 10px;
          font-size: 0.92rem;
          color: var(--text-secondary);
          line-height: 1.65;
        }
        .store-profile-settings-link{
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-weight: 900;
          color: var(--secondary);
          text-decoration: underline;
        }
        @media (max-width: 520px){
          .store-profile-title{ font-size: 1.45rem; }
          .store-profile-hero-body{ padding: 0 1rem 1.1rem; }
        }

        .store-profile-features{
          margin-top: 12px;
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
        }
        .store-feature-chip{
          font-size: 0.72rem;
          font-weight: 800;
          padding: 4px 10px;
          border-radius: 999px;
          background: var(--surface);
          border: 1px solid var(--border);
          color: var(--text-secondary);
        }

        .store-profile-in-cart{
          font-size: 0.82rem;
          font-weight: 900;
          color: var(--secondary);
          background: var(--primary-light);
          padding: 6px 10px;
          border-radius: 10px;
          width: fit-content;
        }
        .store-profile-qty-row{
          gap: 8px;
          margin-top: 4px;
          direction: ltr;
        }
        .store-profile-qty-btn{
          border: 1px solid var(--border);
          background: var(--white);
          border-radius: 10px;
          padding: 8px 10px;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--secondary);
        }
        .store-profile-qty-btn:hover{ background: var(--primary-light); }
        .store-profile-qty-input{
          flex: 1;
          text-align: center;
          font-weight: 900;
          border: 1px solid var(--border);
          border-radius: 10px;
          padding: 8px 6px;
          font-size: 1rem;
          background: var(--white);
          color: var(--secondary);
        }

        .store-profile-box{
          margin-top: 12px;
          padding: 12px 14px;
          border-radius: 12px;
          background: var(--surface);
          border: 1px solid var(--border);
        }
        .store-profile-box--rating{
          margin-top: 14px;
          padding: 14px 16px;
          border-radius: 14px;
        }
        .store-profile-box-row{
          display: flex;
          align-items: center;
          gap: 10px;
          flex-wrap: wrap;
          margin-bottom: 8px;
        }
        .store-profile-box-title{
          font-weight: 900;
          color: var(--secondary);
        }
        .store-profile-pill{
          font-size: 0.78rem;
          font-weight: 900;
          padding: 3px 10px;
          border-radius: 999px;
        }
        .store-profile-pill--open{ background: rgba(46, 125, 50, 0.12); color: #2e7d32; }
        .store-profile-pill--closed{ background: rgba(198, 40, 40, 0.10); color: #c62828; }
        .store-profile-pill--muted{ background: var(--grey-light); color: var(--text-secondary); }
        .store-profile-note{
          line-height: 1.65;
          white-space: pre-wrap;
          font-size: 0.95rem;
          color: var(--text-primary);
        }
        .store-profile-rating-row{
          display: flex;
          align-items: center;
          gap: 10px;
          flex-wrap: wrap;
          margin-bottom: 10px;
        }
        .store-profile-rating-avg{
          font-weight: 950;
          font-size: 1.2rem;
          color: var(--secondary);
        }
        .store-profile-rating-count{
          color: var(--text-secondary);
          font-size: 0.9rem;
        }
        .store-profile-muted{
          margin: 0 0 10px;
          color: var(--text-secondary);
          font-size: 0.92rem;
          line-height: 1.65;
        }
        .store-profile-muted--tight{
          margin: 0;
          font-size: 0.88rem;
        }
        .store-profile-rating-login-cta{
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          width: 100%;
          margin-top: 12px;
          padding: 12px 14px;
          border: none;
          border-radius: 14px;
          cursor: pointer;
          font-family: inherit;
          font-weight: 900;
          font-size: 0.9rem;
          line-height: 1.35;
          text-align: center;
          color: var(--secondary);
          background: linear-gradient(135deg, rgba(255, 236, 160, 0.45) 0%, rgba(255, 249, 230, 0.95) 45%, var(--white) 100%);
          box-shadow:
            0 1px 0 rgba(255, 255, 255, 0.9) inset,
            0 4px 16px rgba(245, 192, 0, 0.2);
          transition: transform 0.12s ease, box-shadow 0.2s ease, filter 0.15s ease;
        }
        .store-profile-rating-login-cta:hover{
          filter: brightness(1.02);
          box-shadow:
            0 1px 0 rgba(255, 255, 255, 0.95) inset,
            0 8px 22px rgba(245, 192, 0, 0.28);
        }
        .store-profile-rating-login-cta:active{
          transform: scale(0.99);
        }
        .store-profile-rating-login-cta:focus-visible{
          outline: none;
          box-shadow:
            0 0 0 3px rgba(255, 255, 255, 0.95),
            0 0 0 5px rgba(245, 192, 0, 0.55),
            0 4px 16px rgba(245, 192, 0, 0.22);
        }
        .store-profile-rating-login-cta-icon{
          flex-shrink: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 38px;
          height: 38px;
          border-radius: 12px;
          background: linear-gradient(145deg, var(--primary) 0%, var(--primary-hover) 100%);
          color: var(--secondary);
          box-shadow: var(--shadow-gold);
        }
        .store-profile-rating-login-cta-label{
          flex: 1;
          min-width: 0;
        }
        .store-profile-rate-hint{
          font-weight: 900;
          margin-bottom: 8px;
          font-size: 0.9rem;
          color: var(--secondary);
        }
        .store-profile-rate-row{
          display: inline-flex;
          gap: 6px;
        }
        .store-profile-star-btn{
          padding: 6px;
          border: none;
          background: transparent;
          border-radius: 8px;
          line-height: 0;
          cursor: pointer;
        }
        .store-profile-star-btn:disabled{
          opacity: 0.6;
          cursor: wait;
        }
        .store-profile-desc{
          margin-top: 12px;
          color: var(--text-primary);
          line-height: 1.65;
        }
        .store-profile-loc-head{
          font-weight: 900;
          margin-bottom: 6px;
          display: flex;
          align-items: center;
          gap: 8px;
          color: var(--secondary);
        }
        .store-profile-loc-text{
          line-height: 1.65;
          white-space: pre-wrap;
          color: var(--text-primary);
        }
        .store-profile-linkbtn{
          background: none;
          border: none;
          padding: 0;
          cursor: pointer;
          color: var(--secondary);
          font-weight: 900;
          text-decoration: underline;
          font: inherit;
        }

        .store-profile-section-title{
          font-size: 1.1rem;
          margin: 0 0 12px;
          font-weight: 950;
          color: var(--secondary);
        }
        .store-profile-section-title--products{
          font-size: 1.15rem;
          margin-bottom: 14px;
        }
        .store-profile-sponsored{ margin-bottom: 22px; }
        .store-profile-sponsored-rail{
          display: flex;
          gap: 12px;
          overflow-x: auto;
          padding-bottom: 6px;
          scrollbar-width: none;
        }
        .store-profile-sponsored-rail::-webkit-scrollbar{ height: 0; }
        .store-profile-sponsored-card{
          min-width: 188px;
          max-width: 228px;
          padding: 10px;
          flex-shrink: 0;
        }
        .store-profile-sponsored-media{
          position: relative;
          margin-bottom: 8px;
          border-radius: 12px;
          overflow: hidden;
        }
        .store-profile-sponsored-fab{
          position: absolute;
          top: 8px;
          z-index: 4;
          width: 34px;
          height: 34px;
          border-radius: 12px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 0;
          margin: 0;
          cursor: pointer;
          background: rgba(255,255,255,0.94);
          box-shadow: 0 4px 14px rgba(26,29,38,0.14);
          transition: transform 0.12s ease, filter 0.15s ease;
        }
        .store-profile-sponsored-fab--cart{
          inset-inline-start: 8px;
          border: 1px solid rgba(245,192,0,0.5);
          color: var(--secondary);
        }
        .store-profile-sponsored-fab--fav{
          inset-inline-end: 8px;
          border: 1px solid rgba(233, 30, 99, 0.35);
          background: rgba(255,255,255,0.96);
        }
        .store-profile-sponsored-fab:hover:not(:disabled){
          transform: translateY(-1px);
          filter: brightness(1.02);
        }
        .store-profile-sponsored-fab:disabled{
          opacity: 0.65;
          cursor: wait !important;
        }
        .store-profile-sponsored-fab--muted{
          opacity: 0.88;
        }
        .store-profile-sponsored-title{ font-weight: 900; color: var(--secondary); }
        .store-profile-sponsored-price-row{
          margin-top: 6px;
          display: flex;
          flex-wrap: wrap;
          align-items: baseline;
          gap: 6px 10px;
          font-weight: 900;
        }
        .store-profile-sponsored-old{
          text-decoration: line-through;
          color: var(--text-secondary);
          font-weight: 700;
          font-size: 0.95rem;
        }
        .store-profile-sponsored-badge{
          display: inline-block;
          padding: 2px 8px;
          border-radius: 8px;
          font-size: 0.72rem;
          font-weight: 950;
          color: var(--secondary);
          background: rgba(245,192,0,0.35);
          border: 1px solid rgba(245,192,0,0.45);
        }
        .store-profile-sponsored-now{ color: var(--secondary); }
        .store-profile-sponsored-desc{
          font-size: 0.85rem;
          color: var(--text-secondary);
          margin-top: 4px;
          line-height: 1.55;
        }
        .store-profile-products-grid{
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(min(136px, 100%), 1fr));
          gap: 12px;
        }
        .store-profile-product-card{
          padding: 0;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          position: relative;
        }
        .store-profile-product-card[data-flash="true"]{
          outline: 3px solid rgba(255, 204, 0, 0.75);
          box-shadow: 0 16px 48px rgba(255, 204, 0, 0.18);
        }
        .store-profile-product-favbtn{
          position: absolute;
          top: 8px;
          inset-inline-end: 8px;
          z-index: 4;
          border: none;
          border-radius: 999px;
          width: 36px;
          height: 36px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(255,255,255,0.92);
          box-shadow: 0 2px 8px rgba(0,0,0,0.12);
          cursor: pointer;
          transition: transform 0.12s ease, filter 0.15s ease;
        }
        .store-profile-product-favbtn:hover{ transform: translateY(-1px); filter: brightness(1.02); }
        .store-profile-product-favbtn:disabled{ opacity: 0.6; cursor: wait; }

        .store-profile-product-media{
          aspect-ratio: 1;
          max-height: 200px;
          background: var(--grey-light);
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
        }
        .store-profile-product-media-overlay{
          position: absolute;
          inset-inline: 0;
          bottom: 0;
          padding: 10px 10px 9px;
          background: linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.58) 65%, rgba(0,0,0,0.72) 100%);
          color: #fff;
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          gap: 10px;
          pointer-events: none;
        }
        .store-profile-product-media-cartbtn{
          position: absolute;
          top: 10px;
          inset-inline-start: 10px;
          z-index: 4;
          width: 40px;
          height: 40px;
          border-radius: 14px;
          border: 1px solid rgba(245,192,0,0.45);
          background: rgba(255, 255, 255, 0.92);
          box-shadow: 0 6px 18px rgba(26, 29, 38, 0.14);
          color: var(--secondary);
          display: inline-flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: transform 0.12s ease, filter 0.15s ease;
        }
        .store-profile-product-media-cartbtn:hover:not(:disabled){
          transform: translateY(-1px);
          filter: brightness(1.02);
        }
        .store-profile-product-media-cartbtn:active:not(:disabled){
          transform: translateY(0);
        }
        .store-profile-product-media-cartbtn:disabled{
          opacity: 0.65;
        }
        .store-profile-product-media-cartbtn--muted{
          opacity: 0.88;
        }
        .store-profile-product-media:has(.store-profile-product-favbtn) .store-profile-product-media-overlay{
          padding-inline-end: 44px;
        }
        .store-profile-product-media:has(.store-profile-product-media-cartbtn) .store-profile-product-media-overlay{
          padding-inline-start: 48px;
        }
        .store-profile-product-media-name{
          font-weight: 950;
          font-size: 0.92rem;
          line-height: 1.2;
          min-width: 0;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
          text-shadow: 0 2px 10px rgba(0,0,0,0.35);
        }
        .store-profile-product-media-price{
          flex: 0 0 auto;
          font-weight: 950;
          font-size: 0.9rem;
          padding: 6px 10px;
          border-radius: 999px;
          background: rgba(255,255,255,0.18);
          border: 1px solid rgba(255,255,255,0.22);
          backdrop-filter: blur(6px);
          text-shadow: 0 2px 10px rgba(0,0,0,0.35);
          white-space: nowrap;
        }
        .store-profile-product-media-inner{
          flex: 1;
          align-self: stretch;
          width: 100%;
          min-height: 0;
          display: flex;
          flex-direction: column;
        }
        .store-profile-product-body{
          padding: 10px;
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 8px;
          min-height: 0;
        }
        .store-profile-product-desc{
          font-size: 0.8rem;
          color: var(--text-secondary);
          line-height: 1.4;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .store-profile-product-feats{
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
        }
        .store-profile-product-feat{
          font-size: 0.78rem;
          font-weight: 900;
          padding: 4px 10px;
          border-radius: 999px;
          background: var(--surface);
          border: 1px solid var(--border);
          color: var(--secondary);
          max-width: 100%;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        .store-profile-product-price{
          font-weight: 950;
          color: var(--secondary);
          margin-top: auto;
        }

      `}</style>

      {/* اختيار السلة يتم عبر showSelect في AlertProvider */}
    </MainLayout>
  );
};

export default StoreProfile;
