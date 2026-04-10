import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import MainLayout from '../components/MainLayout';
import {
  getOffers,
  getCarts,
  addToCart,
  createCart,
  addFavorite,
  getFavorites,
  removeFavorite,
  updateCart,
} from '../api/data';
import { useAlert } from '../components/AlertProvider';
import { ensureCartNamed } from '../utils/cartNaming';
import { Tag, ShoppingCart, Heart } from 'lucide-react';
import ImageCarousel from '../components/ImageCarousel';
import { visualImageUrls } from '../utils/productImages';
// اختيار السلة عبر النافذة المنبثقة العامة (CustomModal)
import { formatApiError } from '../utils/apiErrors';
import { canUseShoppingCarts } from '../utils/cartAccess';

const Offers = () => {
  const [offers, setOffers] = useState([]);
  const [loading, setLoading] = useState(true);
  const { showAlert, showPrompt, showSelect } = useAlert();

  const isGuestVisitor = localStorage.getItem('isGuest') === 'true';
  const canUseCarts = canUseShoppingCarts();
  const canShopSponsored =
    !!localStorage.getItem('token') && !isGuestVisitor && localStorage.getItem('user_type') === 'shopper';

  const [sponsoredFavByAdId, setSponsoredFavByAdId] = useState({});
  const [pendingCartAdd, setPendingCartAdd] = useState(null);

  useEffect(() => {
    if (!canShopSponsored) {
      setSponsoredFavByAdId({});
      return undefined;
    }
    let cancelled = false;
    (async () => {
      try {
        const list = await getFavorites();
        if (cancelled) return;
        const sm = {};
        for (const f of list || []) {
          if ((f.product == null || f.product === '') && f.sponsored_ad != null) sm[f.sponsored_ad] = f.id;
        }
        setSponsoredFavByAdId(sm);
      } catch {
        if (!cancelled) setSponsoredFavByAdId({});
      }
    })();
    return () => {
      cancelled = true;
    };
  }, [canShopSponsored]);

  useEffect(() => {
    const fetchOffers = async () => {
      try {
        const data = await getOffers();
        setOffers(data);
      } catch (err) {
        console.error('Error fetching offers:', err);
      } finally {
        setLoading(false);
      }
    };
    fetchOffers();
  }, []);

  const openCartPickerFor = async (payload) => {
    if (!canUseCarts) {
      await showAlert(
        'ميزة السلال للأعضاء المسجّلين فقط (متسوّق، تاجر، أو مدير) وليست لوضع الزائر. سجّل الدخول ثم أعد المحاولة.',
        'تنبيه'
      );
      return;
    }
    setPendingCartAdd(payload);
    const carts = await getCarts();
    const list = Array.isArray(carts) ? carts : [];
    const opts = list.map((c) => ({
      id: String(c.id),
      label: c.name || `سلة #${c.id}`,
      value: c.id,
      badge: Array.isArray(c.items) ? c.items.length : 0,
    }));
    const pick = await showSelect(
      list.length === 0 ? 'لا يوجد لديك أي سلال.' : 'اختر السلة التي تريد إضافة المنتج إليها:',
      'إضافة إلى أي سلة؟',
      opts,
      { primaryActionLabel: list.length === 0 ? 'إنشاء أول سلة' : 'سلة جديدة' }
    );
    if (pick == null) return;
    if (pick === '__primary__') {
      await createCartAndAddPending();
      return;
    }
    await pickCartAndAddPending({ id: pick });
  };

  const createCartAndAddPending = async () => {
    const name = await showPrompt('اكتب اسم السلة الجديدة:', 'اسم السلة...');
    if (!name) return;
    const cart = await createCart(String(name));
    const p = pendingCartAdd;
    if (!p) return;
    await addToCart(cart.id, p.productId ?? null, p.quantity ?? 1, p.sponsoredAdId ?? null);
    await showAlert('تمت إضافة المنتج إلى السلة.', 'تم');
    setPendingCartAdd(null);
  };

  const pickCartAndAddPending = async (cart) => {
    const p = pendingCartAdd;
    if (!p) return;
    await addToCart(cart.id, p.productId ?? null, p.quantity ?? 1, p.sponsoredAdId ?? null);
    await showAlert('تمت إضافة المنتج إلى السلة.', 'تم');
    setPendingCartAdd(null);
  };

  const addSponsoredToCart = async (ad) => {
    try {
      await openCartPickerFor({
        productId: ad.product ?? null,
        sponsoredAdId: ad.id,
        quantity: 1,
      });
    } catch (e) {
      await showAlert(formatApiError(e, 'تعذرت الإضافة للسلة.'), 'خطأ');
    }
  };

  const addSponsoredToFavorites = async (ad) => {
    if (!canShopSponsored) {
      await showAlert('سجّل دخول كمتسوق لإضافة المنتج للمفضلة.', 'تنبيه');
      return;
    }
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
          await showAlert('أُزيل العرض المستقل من المفضلة.', 'تم');
        } else {
          await addFavorite(null, ad.id);
          const list = await getFavorites();
          const row = (list || []).find(
            (f) => f.sponsored_ad === ad.id && (f.product == null || f.product === ''),
          );
          if (row) setSponsoredFavByAdId((prev) => ({ ...prev, [ad.id]: row.id }));
          await showAlert('تمت إضافة عرض الإعلان — يُزال تلقائياً عند انتهاء الإعلان.', 'تم');
        }
        return;
      }
      await addFavorite(ad.product, ad.id);
      await showAlert('تمت إضافة المنتج للمفضلة.', 'تم');
    } catch (e) {
      await showAlert(formatApiError(e, 'تعذرت الإضافة للمفضلة.'), 'خطأ');
    }
  };

  return (
    <MainLayout>
      <div className="offers-page-wrap">
        <header className="offers-hero">
          <div className="offers-hero-icon" aria-hidden>
            <Tag size={26} strokeWidth={2.25} />
          </div>
          <div className="offers-hero-text">
            <h1 className="offers-hero-title">عروض حصرية</h1>
            <p className="offers-hero-sub">عروض مُختارة من المتاجر — بطاقات مرتبة لتصفّح مريح على كل الأجهزة</p>
          </div>
        </header>

        {loading ? (
          <p className="offers-loading">جاري تحميل العروض...</p>
        ) : offers.length > 0 ? (
          <div className="offers-grid">
            {offers.map((offer) => (
              <article key={offer.id} className="offers-card">
                <div className="offers-card-media">
                  {visualImageUrls(offer).length > 0 ? (
                    <ImageCarousel images={visualImageUrls(offer)} fill borderRadius={0} />
                  ) : (
                    <div className="offers-card-media-fallback">عرض</div>
                  )}
                  <div className="offers-card-media-overlay">
                    <div className="offers-card-media-title">{offer.title}</div>
                    {Number(offer.product_price) > 0 ? (
                      <div className="offers-card-media-price">
                        {Number(offer.product_price).toFixed(2)} ₪
                      </div>
                    ) : null}
                  </div>
                  {canUseCarts ? (
                    <button
                      type="button"
                      className="offers-card-media-cartbtn"
                      onClick={() => addSponsoredToCart(offer)}
                      title="إضافة إلى السلة"
                      aria-label="إضافة إلى السلة"
                    >
                      <ShoppingCart size={18} />
                    </button>
                  ) : null}
                </div>
                <div className="offers-card-body">
                  <span className="offers-card-store">{offer.store_name}</span>
                  <Link
                    to={`/stores/${offer.store}`}
                    state={offer.product ? { scrollToProductId: offer.product } : undefined}
                    className="offers-card-title-link"
                    title="فتح المنتج داخل المتجر"
                  >
                    <h2 className="offers-card-title">{offer.title}</h2>
                  </Link>
                  {Number(offer.product_price) > 0 ? (
                    <div className="offers-card-prices">
                      {offer.product_details &&
                      Number(offer.product_details.price) !== Number(offer.product_price) ? (
                        <span className="offers-price-old">
                          {Number(offer.product_details.price).toFixed(2)} ₪
                        </span>
                      ) : null}
                      <span className="offers-price-now">{Number(offer.product_price).toFixed(2)} ₪</span>
                      {offer.product_details &&
                      Number(offer.product_details.price) !== Number(offer.product_price) ? (
                        <span className="offers-price-badge">عرض</span>
                      ) : null}
                    </div>
                  ) : null}
                  {offer.description ? (
                    <p className="offers-card-desc">{offer.description}</p>
                  ) : null}
                  {canUseCarts || canShopSponsored ? (
                    <div className="offers-card-actions">
                      {canUseCarts ? (
                        <button
                          type="button"
                          className="offers-btn offers-btn--primary"
                          onClick={() => addSponsoredToCart(offer)}
                        >
                          <ShoppingCart size={18} />
                          إضافة للسلة
                        </button>
                      ) : null}
                      {canShopSponsored ? (
                        <button
                          type="button"
                          className="offers-btn offers-btn--ghost"
                          onClick={() => addSponsoredToFavorites(offer)}
                          title={offer.product ? '' : 'يُزال من المفضلة عند انتهاء الإعلان'}
                        >
                          <Heart
                            size={18}
                            color="#e91e63"
                            fill={
                              offer.product ? 'none' : sponsoredFavByAdId[offer.id] ? '#e91e63' : 'none'
                            }
                          />
                          مفضلة
                        </button>
                      ) : null}
                    </div>
                  ) : null}
                  <Link to={`/stores/${offer.store}`} className="offers-btn offers-btn--block">
                    عرض المتجر
                  </Link>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="offers-empty card">
            <Tag size={44} color="var(--text-light)" aria-hidden />
            <p>لا توجد عروض حالياً. عد لاحقاً.</p>
          </div>
        )}

        <style dangerouslySetInnerHTML={{ __html: `
          .offers-page-wrap {
            max-width: 1240px;
            margin-inline: auto;
            padding-inline: clamp(8px, 2.2vw, 22px);
            padding-bottom: 32px;
            box-sizing: border-box;
          }
          .offers-hero {
            display: flex;
            align-items: flex-start;
            gap: 16px;
            margin-bottom: clamp(22px, 4vw, 32px);
            padding: 20px 22px;
            border-radius: 22px;
            background: linear-gradient(135deg, rgba(255, 250, 232, 0.95) 0%, var(--white) 55%, var(--surface) 100%);
            border: 1px solid rgba(245, 192, 0, 0.35);
            box-shadow: 0 10px 32px rgba(30, 30, 46, 0.07);
          }
          .offers-hero-icon {
            flex-shrink: 0;
            width: 52px;
            height: 52px;
            border-radius: 16px;
            display: flex;
            align-items: center;
            justify-content: center;
            background: linear-gradient(135deg, var(--primary) 0%, var(--primary-hover) 100%);
            color: var(--secondary);
            box-shadow: var(--shadow-gold);
          }
          .offers-hero-title {
            margin: 0;
            font-size: clamp(1.35rem, 4vw, 1.65rem);
            font-weight: 900;
            color: var(--secondary);
            letter-spacing: -0.02em;
          }
          .offers-hero-sub {
            margin: 8px 0 0;
            font-size: 0.88rem;
            font-weight: 600;
            color: var(--text-secondary);
            line-height: 1.5;
            max-width: 520px;
          }
          .offers-loading {
            color: var(--text-secondary);
            font-weight: 700;
          }
          .offers-grid {
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 20px;
            align-items: start;
          }
          @media (max-width: 720px) {
            .offers-grid {
              grid-template-columns: 1fr;
              gap: 22px;
              justify-items: center;
            }
            .offers-card {
              width: 100%;
              max-width: 360px;
            }
          }
          @media (min-width: 960px) {
            .offers-grid {
              grid-template-columns: repeat(3, 1fr);
              gap: 24px;
            }
          }
          .offers-card {
            border-radius: 22px;
            overflow: hidden;
            background: var(--white);
            border: 1px solid rgba(224, 223, 213, 0.95);
            box-shadow: 0 8px 28px rgba(30, 30, 46, 0.08);
            transition: transform 0.18s ease, box-shadow 0.18s ease, border-color 0.18s ease;
            display: flex;
            flex-direction: column;
            min-height: 0;
          }
          .offers-card:hover {
            transform: translateY(-3px);
            box-shadow: 0 14px 40px rgba(245, 192, 0, 0.16);
            border-color: rgba(245, 192, 0, 0.4);
          }
          .offers-card-media {
            flex: 0 0 auto;
            width: 100%;
            aspect-ratio: 4 / 3;
            min-height: 120px;
            max-height: 240px;
            background: linear-gradient(180deg, var(--grey-light), #f0efe8);
            position: relative;
            display: flex;
            flex-direction: column;
            min-width: 0;
          }
          .offers-card-media > .radar-image-carousel,
          .offers-card-media > .offers-card-media-fallback {
            flex: 1 1 auto;
            min-height: 0;
            width: 100%;
          }
          .offers-card-media img {
            display: block;
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
          .offers-card-media-cartbtn{
            position: absolute;
            top: 10px;
            inset-inline-end: 10px;
            z-index: 3;
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
          .offers-card-media-cartbtn:hover{
            transform: translateY(-1px);
            filter: brightness(1.02);
          }
          .offers-card-media-cartbtn:active{
            transform: translateY(0);
          }
          .offers-card-media-overlay{
            position: absolute;
            inset-inline: 0;
            bottom: 0;
            padding-block: 10px 9px;
            padding-inline: 10px;
            background: linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.58) 65%, rgba(0,0,0,0.72) 100%);
            color: #fff;
            display: flex;
            align-items: flex-end;
            justify-content: space-between;
            gap: 10px;
            pointer-events: none;
          }
          .offers-card-media:has(.offers-card-media-cartbtn) .offers-card-media-overlay {
            padding-inline-end: 52px;
          }
          .offers-card-media-title{
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
          .offers-card-media-price{
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
          .offers-card-media-fallback {
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: 900;
            color: var(--text-light);
            font-size: 1.1rem;
          }
          .offers-card-body {
            padding: 16px 18px 18px;
            flex: 1 1 auto;
            min-height: 0;
            display: flex;
            flex-direction: column;
            gap: 2px;
          }
          .offers-card-store {
            display: inline-block;
            font-size: 0.78rem;
            font-weight: 800;
            color: var(--secondary);
            background: var(--primary-light);
            padding: 5px 10px;
            border-radius: 8px;
            margin-bottom: 8px;
          }
          .offers-card-title {
            margin: 0 0 10px;
            font-size: 1.05rem;
            font-weight: 900;
            color: var(--secondary);
            line-height: 1.35;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            overflow: hidden;
          }
          .offers-card-title-link{
            text-decoration: none;
            color: inherit;
          }
          .offers-card-prices {
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            gap: 8px;
            margin-bottom: 10px;
          }
          .offers-price-old {
            text-decoration: line-through;
            color: var(--text-secondary);
            font-size: 0.88rem;
            font-weight: 600;
          }
          .offers-price-now {
            font-weight: 900;
            font-size: 1.05rem;
            color: var(--secondary);
          }
          .offers-price-badge {
            font-size: 0.72rem;
            font-weight: 900;
            padding: 3px 8px;
            border-radius: 8px;
            background: rgba(245, 192, 0, 0.35);
            color: var(--secondary);
          }
          .offers-card-desc {
            margin: 0 0 14px;
            font-size: 0.88rem;
            color: var(--text-secondary);
            line-height: 1.55;
            display: -webkit-box;
            -webkit-line-clamp: 3;
            -webkit-box-orient: vertical;
            overflow: hidden;
          }
          .offers-card-actions {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 10px;
            margin-bottom: 10px;
            flex-shrink: 0;
          }
          .offers-btn {
            font-family: inherit;
            font-weight: 800;
            font-size: 0.86rem;
            border-radius: 14px;
            padding: 11px 14px;
            cursor: pointer;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            gap: 8px;
            text-decoration: none;
            border: none;
            transition: filter 0.15s ease, transform 0.12s ease;
          }
          .offers-btn:active {
            transform: scale(0.98);
          }
          .offers-btn--primary {
            background: linear-gradient(135deg, var(--primary) 0%, var(--primary-hover) 100%);
            color: var(--secondary);
            box-shadow: var(--shadow-gold);
          }
          .offers-btn--primary:hover {
            filter: brightness(1.05);
          }
          .offers-btn--ghost {
            background: var(--surface);
            color: var(--secondary);
            border: 1.5px solid var(--border);
          }
          .offers-btn--ghost:hover {
            background: var(--primary-light);
            border-color: var(--primary);
          }
          .offers-btn--block {
            width: 100%;
            max-width: 100%;
            box-sizing: border-box;
            background: var(--white);
            border: 2px solid var(--primary);
            color: var(--secondary);
            margin-top: auto;
            flex-shrink: 0;
            min-height: 44px;
            line-height: 1.25;
            text-align: center;
            white-space: normal;
          }
          .offers-btn--block:hover {
            background: var(--primary-light);
          }
          .offers-empty {
            text-align: center;
            padding: 48px 24px;
            color: var(--text-secondary);
            font-weight: 700;
          }
          .offers-empty p {
            margin: 16px 0 0;
          }
        `}} />
      </div>
    </MainLayout>
  );
};

export default Offers;
