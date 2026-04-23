import React, { useEffect, useMemo, useRef, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { Heart, ShoppingCart, Tag } from 'lucide-react';
import MainLayout from '../components/MainLayout';
import { addFavorite, addToCart, createCart, getCarts, getFavorites, getPublicProducts, removeFavorite } from '../api/data';
import { useAlert } from '../components/AlertProvider';
import { canUseShoppingCarts } from '../utils/cartAccess';
import { formatApiError } from '../utils/apiErrors';
import { visualImageUrls } from '../utils/productImages';
import ImageCarousel from '../components/ImageCarousel';

const PAGE_SIZE = 24;

const CategoryProducts = () => {
  const [searchParams] = useSearchParams();
  const { showAlert, showPrompt, showSelect } = useAlert();
  const categoryId = Number(searchParams.get('category') || '');
  const categoryName = (searchParams.get('category_name') || '').trim();
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [productFavById, setProductFavById] = useState({});
  const [pendingCartAdd, setPendingCartAdd] = useState(null);
  const pendingCartAddRef = useRef(null);
  const canUseCarts = canUseShoppingCarts();
  const isGuest = localStorage.getItem('isGuest') === 'true';
  const canUseFavorites = !!localStorage.getItem('token') && !isGuest;

  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        setLoading(true);
        const data = await getPublicProducts(Number.isFinite(categoryId) ? categoryId : null);
        if (!cancelled) setItems(Array.isArray(data) ? data : []);
      } catch (e) {
        console.error(e);
        if (!cancelled) setItems([]);
      } finally {
        if (!cancelled) setLoading(false);
      }
    })();
    return () => {
      cancelled = true;
    };
  }, [categoryId]);

  useEffect(() => {
    if (!canUseFavorites) {
      setProductFavById({});
      return;
    }
    let cancelled = false;
    (async () => {
      try {
        const list = await getFavorites();
        if (cancelled) return;
        const map = {};
        for (const f of list || []) {
          const pid = f.product ?? f.product_details?.id;
          if (pid != null) map[String(pid)] = f.id;
        }
        setProductFavById(map);
      } catch {
        if (!cancelled) setProductFavById({});
      }
    })();
    return () => {
      cancelled = true;
    };
  }, [canUseFavorites]);

  const visibleItems = useMemo(() => {
    const list = Array.isArray(items) ? items : [];
    if (!categoryName) return list;
    const q = categoryName.toLowerCase();
    return list.filter((p) => String(p?.store_category_name || '').toLowerCase() === q);
  }, [items, categoryName]);

  const totalPages = Math.max(1, Math.ceil(visibleItems.length / PAGE_SIZE));
  const safePage = Math.min(page, totalPages);
  const paged = useMemo(() => {
    const start = (safePage - 1) * PAGE_SIZE;
    return visibleItems.slice(start, start + PAGE_SIZE);
  }, [visibleItems, safePage]);

  const openCartPickerFor = async (payload) => {
    if (!canUseShoppingCarts()) {
      await showAlert('ميزة السلال متاحة للأعضاء المسجلين فقط.', 'تنبيه');
      return;
    }
    const noteVal = await showPrompt('أضف ملاحظة على المنتج (اختياري).', 'مثال: بدون سكر', 'ملاحظة', payload?.note || '');
    const enriched = { ...payload, note: noteVal == null ? '' : String(noteVal).trim() };
    pendingCartAddRef.current = enriched;
    setPendingCartAdd(enriched);
    const carts = await getCarts();
    const list = Array.isArray(carts) ? carts : [];
    if (list.length === 0) {
      const name = await showPrompt('اكتب اسماً لسلتك الأولى.', 'سلة اليوم', 'إنشاء سلة');
      if (!name || !String(name).trim()) return;
      const cart = await createCart(String(name).trim());
      await addToCart(cart.id, enriched.productId, 1, null, enriched.note || '');
      await showAlert('تمت إضافة المنتج إلى السلة.');
      setPendingCartAdd(null);
      pendingCartAddRef.current = null;
      return;
    }
    const opts = list.map((c) => ({ id: String(c.id), label: c.name || `سلة #${c.id}` }));
    const pick = await showSelect('اختر السلة:', 'إضافة إلى أي سلة؟', opts, { primaryActionLabel: 'سلة جديدة' });
    if (pick == null) return;
    if (pick === '__primary__') {
      const name = await showPrompt('اسم السلة الجديدة', 'سلة جديدة', 'سلة جديدة');
      if (!name || !String(name).trim()) return;
      const cart = await createCart(String(name).trim());
      await addToCart(cart.id, enriched.productId, 1, null, enriched.note || '');
    } else {
      await addToCart(Number(pick), enriched.productId, 1, null, enriched.note || '');
    }
    await showAlert('تمت إضافة المنتج إلى السلة.');
    setPendingCartAdd(null);
    pendingCartAddRef.current = null;
  };

  const toggleFavorite = async (p) => {
    if (!canUseFavorites) {
      await showAlert('سجّل الدخول لاستخدام المفضلة.', 'تنبيه');
      return;
    }
    const pid = String(p.id);
    try {
      if (productFavById[pid]) {
        await removeFavorite(productFavById[pid]);
        setProductFavById((prev) => {
          const n = { ...prev };
          delete n[pid];
          return n;
        });
      } else {
        await addFavorite(p.id, null);
        const list = await getFavorites();
        const row = (list || []).find((f) => f.product != null && String(f.product) === pid);
        if (row) setProductFavById((prev) => ({ ...prev, [pid]: row.id }));
      }
    } catch (e) {
      await showAlert(formatApiError(e, 'تعذرت العملية.'), 'خطأ');
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
            <h1 className="offers-hero-title">منتجات القسم</h1>
            <p className="offers-hero-sub">
              {categoryName ? `كل منتجات قسم: ${categoryName}` : 'كل منتجات القسم المحدد'}
            </p>
          </div>
        </header>

        {loading ? (
          <p className="offers-loading">جاري تحميل المنتجات...</p>
        ) : visibleItems.length > 0 ? (
          <>
            <div className="offers-grid">
              {paged.map((p) => (
                <article key={p.id} className="offers-card">
                  <div className="offers-card-media">
                    {visualImageUrls(p).length > 0 ? (
                      <ImageCarousel images={visualImageUrls(p)} fill borderRadius={0} />
                    ) : (
                      <div className="offers-card-media-fallback">منتج</div>
                    )}
                    <button
                      type="button"
                      className={`offers-card-media-cartbtn${canUseCarts ? '' : ' offers-card-media-cartbtn--muted'}`}
                      onClick={(e) => {
                        e.stopPropagation();
                        void openCartPickerFor({ productId: p.id, note: '' });
                      }}
                      title="إضافة إلى السلة"
                      aria-label="إضافة إلى السلة"
                    >
                      <ShoppingCart size={18} strokeWidth={2} aria-hidden />
                    </button>
                    <button
                      type="button"
                      className={`offers-card-media-favbtn${canUseFavorites ? '' : ' offers-card-media-favbtn--muted'}`}
                      onClick={(e) => {
                        e.stopPropagation();
                        void toggleFavorite(p);
                      }}
                      aria-label={productFavById[String(p.id)] ? 'إزالة من المفضلة' : 'إضافة للمفضلة'}
                    >
                      <Heart size={20} strokeWidth={2} color="#e91e63" fill={productFavById[String(p.id)] ? '#e91e63' : 'none'} />
                    </button>
                  </div>
                  <div className="offers-card-body">
                    <span className="offers-card-store">{p.store_name}</span>
                    <h2 className="offers-card-title">{p.name}</h2>
                    {Number(p.price) > 0 ? <span className="offers-price-now">{Number(p.price).toFixed(2)} ₪</span> : null}
                    {p.description ? <p className="offers-card-desc">{p.description}</p> : null}
                    <Link to={`/stores/${p.store}/item/product/${p.id}`} className="offers-btn offers-btn--block">
                      عرض التفاصيل
                    </Link>
                    <Link to={`/stores/${p.store}#product-${p.id}`} className="offers-btn offers-btn--block" style={{ marginTop: 8 }}>
                      عرض داخل المتجر
                    </Link>
                  </div>
                </article>
              ))}
            </div>
            {totalPages > 1 ? (
              <div className="offers-pager" aria-label="تصفح المنتجات">
                <button type="button" onClick={() => setPage((x) => Math.max(1, x - 1))} disabled={safePage <= 1}>السابق</button>
                <span className="offers-pager-meta">صفحة {safePage} من {totalPages} — {visibleItems.length} منتج</span>
                <button type="button" onClick={() => setPage((x) => Math.min(totalPages, x + 1))} disabled={safePage >= totalPages}>التالي</button>
              </div>
            ) : null}
          </>
        ) : (
          <div className="offers-empty card">
            <Tag size={44} color="var(--text-light)" aria-hidden />
            <p>لا توجد منتجات في هذا القسم حالياً.</p>
          </div>
        )}
        <style>{`
          .offers-page-wrap{max-width:1240px;margin-inline:auto;padding-inline:clamp(8px,2.2vw,22px);padding-bottom:32px;box-sizing:border-box;}
          .offers-hero{display:flex;align-items:flex-start;gap:16px;margin-bottom:18px;padding:18px 20px;border-radius:22px;background:linear-gradient(135deg,rgba(255,250,232,.95) 0%,var(--white) 55%,var(--surface) 100%);border:1px solid rgba(245,192,0,.35);}
          .offers-hero-icon{flex-shrink:0;width:52px;height:52px;border-radius:16px;display:flex;align-items:center;justify-content:center;background:linear-gradient(135deg,var(--primary) 0%,var(--primary-hover) 100%);color:var(--secondary);}
          .offers-hero-title{margin:0;font-size:clamp(1.25rem,3.5vw,1.55rem);font-weight:900;color:var(--secondary);}
          .offers-hero-sub{margin:8px 0 0;font-size:.88rem;font-weight:600;color:var(--text-secondary);}
          .offers-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:10px;}
          @media (min-width:900px){.offers-grid{grid-template-columns:repeat(4,minmax(0,1fr));}}
          .offers-card{border:1px solid rgba(232,230,224,.95);border-radius:16px;background:#fff;overflow:hidden;display:flex;flex-direction:column;}
          .offers-card-media{position:relative;aspect-ratio:4/3;background:#f3f3f3;}
          .offers-card-media-fallback{height:100%;display:flex;align-items:center;justify-content:center;font-weight:800;color:var(--text-secondary);}
          .offers-card-body{padding:10px;display:flex;flex-direction:column;gap:6px}
          .offers-card-title{margin:0;font-size:.95rem;color:var(--secondary);}
          .offers-card-store{font-size:.78rem;color:var(--text-secondary);font-weight:800;}
          .offers-price-now{font-size:.95rem;font-weight:900;color:var(--secondary);}
          .offers-card-desc{margin:0;font-size:.8rem;color:var(--text-secondary);line-height:1.5;}
          .offers-btn{display:inline-flex;align-items:center;justify-content:center;text-decoration:none;border-radius:10px;border:1.5px solid var(--primary);color:var(--secondary);background:#fff;font-size:.78rem;font-weight:900;padding:8px 10px;}
          .offers-btn--block{width:100%;}
          .offers-pager{display:flex;align-items:center;justify-content:center;gap:10px;flex-wrap:wrap;margin-top:14px;}
          .offers-pager button{border-radius:10px;border:1px solid rgba(232,230,224,.95);background:linear-gradient(135deg,var(--primary) 0%,var(--primary-hover) 100%);color:var(--secondary);font-weight:900;padding:9px 13px;cursor:pointer;}
          .offers-pager-meta{font-size:.86rem;color:var(--text-secondary);font-weight:800;}
          .offers-loading{font-weight:800;color:var(--text-secondary);}
        `}</style>
      </div>
    </MainLayout>
  );
};

export default CategoryProducts;

