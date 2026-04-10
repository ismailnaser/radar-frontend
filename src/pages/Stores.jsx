import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import MainLayout from '../components/MainLayout';
import { getCategories, getNearbyStores } from '../api/data';
import { useMapExplore } from '../context/MapExploreContext';
import { Map, SlidersHorizontal, X } from 'lucide-react';
import { getStorePinDisplay } from '../components/maps/storePinDefaults';
import { useAlert } from '../components/AlertProvider';

const DEFAULT_CENTER = [31.5, 34.4];
const STORES_PER_PAGE = 12;

function hasMappableCoords(store) {
  const la = Number(store?.latitude);
  const ln = Number(store?.longitude);
  return Number.isFinite(la) && Number.isFinite(ln);
}

function haversineKm(a, b) {
  const toRad = (v) => (v * Math.PI) / 180;
  const R = 6371;
  const dLat = toRad(b[0] - a[0]);
  const dLng = toRad(b[1] - a[1]);
  const s1 = Math.sin(dLat / 2) ** 2;
  const s2 = Math.cos(toRad(a[0])) * Math.cos(toRad(b[0])) * Math.sin(dLng / 2) ** 2;
  return 2 * R * Math.asin(Math.sqrt(s1 + s2));
}

export default function StoresPage() {
  const { userMapLocation, setManualMapLocation, requestUserLocation, locating, locationFocusNonce } = useMapExplore();
  const userLocation = userMapLocation || DEFAULT_CENTER;
  const { showSelect } = useAlert();
  const navigate = useNavigate();

  const [categories, setCategories] = useState([]);
  const [categoriesLoading, setCategoriesLoading] = useState(true);
  const [stores, setStores] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategoryId, setSelectedCategoryId] = useState(null);
  const [hideNoLocation, setHideNoLocation] = useState(true);
  const [page, setPage] = useState(1);

  useEffect(() => {
    let mounted = true;
    setCategoriesLoading(true);
    getCategories()
      .then((d) => {
        if (!mounted) return;
        setCategories(Array.isArray(d) ? d : []);
      })
      .catch(() => {
        if (!mounted) return;
        setCategories([]);
      })
      .finally(() => {
        if (!mounted) return;
        setCategoriesLoading(false);
      });
    return () => {
      mounted = false;
    };
  }, []);

  useEffect(() => {
    let mounted = true;
    setLoading(true);
    getNearbyStores(userLocation[0], userLocation[1], selectedCategoryId)
      .then((d) => {
        if (!mounted) return;
        setStores(Array.isArray(d) ? d : []);
      })
      .catch(() => {
        if (!mounted) return;
        setStores([]);
      })
      .finally(() => {
        if (!mounted) return;
        setLoading(false);
      });
    return () => {
      mounted = false;
    };
  }, [userLocation[0], userLocation[1], selectedCategoryId]);

  useEffect(() => {
    setPage(1);
  }, [selectedCategoryId, hideNoLocation]);

  const visibleStores = useMemo(() => {
    const raw = Array.isArray(stores) ? stores : [];
    return raw.filter((s) => (hideNoLocation ? hasMappableCoords(s) : true));
  }, [stores, hideNoLocation]);

  const sortedStores = useMemo(() => {
    if (!userLocation) return visibleStores;
    const base = userLocation;
    return [...visibleStores].sort((a, b) => {
      if (!hasMappableCoords(a)) return 1;
      if (!hasMappableCoords(b)) return -1;
      return (
        haversineKm(base, [Number(a.latitude), Number(a.longitude)]) -
        haversineKm(base, [Number(b.latitude), Number(b.longitude)])
      );
    });
  }, [visibleStores, userLocation]);

  const totalPages = Math.max(1, Math.ceil(sortedStores.length / STORES_PER_PAGE));
  const safePage = Math.min(page, totalPages);
  const pagedStores = useMemo(() => {
    const start = (safePage - 1) * STORES_PER_PAGE;
    return sortedStores.slice(start, start + STORES_PER_PAGE);
  }, [sortedStores, safePage]);

  const openCategoryPicker = useCallback(async () => {
    if (categoriesLoading) return;
    const opts = [
      { id: '__all__', label: 'الكل', value: '__all__' },
      ...categories.map((c) => ({ id: String(c.id), label: c.name, value: c.id })),
    ];
    const pick = await showSelect('اختر القسم:', 'تصفية المتاجر', opts);
    if (pick == null) return;
    if (pick === '__all__') setSelectedCategoryId(null);
    else setSelectedCategoryId(Number(pick));
  }, [categoriesLoading, categories, showSelect]);

  const mapStoresCount = useMemo(
    () => sortedStores.filter((s) => hasMappableCoords(s)).length,
    [sortedStores]
  );

  const selectedLabel =
    selectedCategoryId == null
      ? 'كل الأقسام'
      : categories.find((c) => Number(c.id) === Number(selectedCategoryId))?.name || 'القسم';

  return (
    <MainLayout>
      <div className="stores-page">
        <section className="stores-hero" aria-label="عنوان الصفحة وفتح الخريطة">
          <div className="stores-head">
            <div className="stores-head__titles">
              <h1 className="stores-title">المتاجر</h1>
              <p className="stores-sub">فلترة سريعة + خريطة منبثقة عند الضغط.</p>
            </div>

            <div className="stores-controls">
              <button
                type="button"
                className="stores-filterbtn"
                onClick={openCategoryPicker}
                disabled={categoriesLoading}
                title="تصفية"
                aria-label="تصفية المتاجر"
              >
                <SlidersHorizontal size={18} strokeWidth={2} aria-hidden />
                <span>{selectedLabel}</span>
              </button>

              <label className="stores-onlymapped">
                <input
                  type="checkbox"
                  checked={hideNoLocation}
                  onChange={(e) => setHideNoLocation(e.target.checked)}
                />
                <span>المتاجر الموجودة على الخريطة فقط</span>
              </label>
            </div>
          </div>

          <button
            type="button"
            className="stores-mini-map"
            onClick={() => navigate('/map')}
            aria-label="فتح الخريطة"
          >
            <span className="stores-mini-map__bg" aria-hidden />
            <span className="stores-mini-map__shine" aria-hidden />
            <span className="stores-mini-map__badge">
              <Map size={16} strokeWidth={2} aria-hidden />
              اضغط لفتح الخريطة
            </span>
            <span className="stores-mini-map__hint">
              {mapStoresCount} متجر على الخريطة
            </span>
          </button>
        </section>

        {loading ? (
          <div className="stores-loading">جاري تحميل المتاجر…</div>
        ) : pagedStores.length === 0 ? (
          <div className="stores-empty">لا توجد متاجر ضمن الفلاتر الحالية.</div>
        ) : (
          <div className="stores-grid" role="list">
            {pagedStores.map((s) => {
              const visual = getStorePinDisplay(s, categories);
              const distKm =
                userLocation && hasMappableCoords(s)
                  ? haversineKm(userLocation, [Number(s.latitude), Number(s.longitude)])
                  : null;
              return (
                <Link key={s.id} to={`/stores/${s.id}`} className="store-card" role="listitem">
                  <div className="store-card__text">
                    <div className="store-card__name">{s.store_name}</div>
                    <div className="store-card__meta">
                      <span className="store-card__cat">{s.category_name || '—'}</span>
                      <span className="store-card__dot" aria-hidden />
                      <span className="store-card__dist">{distKm != null ? `${distKm.toFixed(1)} كم` : 'بدون مسافة'}</span>
                    </div>
                  </div>
                  <div className="store-card__thumb" aria-hidden>
                    {visual.type === 'image' ? (
                      <img className="store-card__thumb-img" src={visual.url} alt="" />
                    ) : (
                      <span className="store-card__thumb-emoji" style={{ background: visual.bg }}>
                        {visual.emoji}
                      </span>
                    )}
                  </div>
                </Link>
              );
            })}
          </div>
        )}

        {totalPages > 1 ? (
          <div className="stores-pager" aria-label="تنقل الصفحات">
            <button type="button" onClick={() => setPage((p) => Math.max(1, p - 1))} disabled={safePage <= 1}>
              السابق
            </button>
            <span>
              {safePage} / {totalPages}
            </span>
            <button
              type="button"
              onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
              disabled={safePage >= totalPages}
            >
              التالي
            </button>
          </div>
        ) : null}

        <style dangerouslySetInnerHTML={{ __html: `
          .stores-page {
            max-width: 1240px;
            margin-inline: auto;
            padding-inline: clamp(8px, 2.2vw, 22px);
            box-sizing: border-box;
            display: flex;
            flex-direction: column;
            gap: 12px;
          }

          .stores-hero {
            display: contents;
          }

          .stores-head {
            display: flex;
            align-items: flex-start;
            justify-content: space-between;
            gap: 12px;
            padding: 16px 16px;
            border-radius: 20px;
            background: linear-gradient(180deg, rgba(255, 255, 255, 0.96) 0%, rgba(255, 254, 248, 0.92) 100%);
            border: 1px solid rgba(232, 230, 224, 0.92);
            box-shadow: 0 10px 30px rgba(26, 29, 38, 0.07);
          }
          @media (max-width: 520px) {
            .stores-head{
              flex-direction: column;
              align-items: stretch;
              gap: 12px;
            }
            .stores-controls{
              justify-content: flex-start;
            }
          }
          .stores-title {
            margin: 0;
            font-size: 1.25rem;
            font-weight: 950;
            color: var(--secondary);
          }
          .stores-sub {
            margin: 6px 0 0;
            font-size: 0.88rem;
            color: var(--text-secondary);
            line-height: 1.55;
          }
          .stores-controls {
            display: flex;
            align-items: center;
            gap: 10px;
            flex-wrap: wrap;
            justify-content: flex-end;
          }
          .stores-filterbtn {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            border-radius: 999px;
            padding: 10px 12px;
            border: 1px solid rgba(232, 230, 224, 0.95);
            background: rgba(255, 255, 255, 0.92);
            box-shadow: 0 2px 12px rgba(26, 29, 38, 0.06);
            font-weight: 900;
            font-family: inherit;
            cursor: pointer;
            color: var(--secondary);
            max-width: 280px;
          }
          .stores-filterbtn:hover{
            border-color: rgba(245, 192, 0, 0.45);
            box-shadow: 0 8px 20px rgba(245, 192, 0, 0.12);
          }
          .stores-filterbtn span {
            color: var(--text-secondary);
            font-weight: 900;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
          }
          .stores-onlymapped {
            display: inline-flex;
            align-items: center;
            gap: 10px;
            font-weight: 800;
            color: var(--text-secondary);
            user-select: none;
            padding: 10px 14px;
            border-radius: 999px;
            border: 1px solid rgba(232, 230, 224, 0.95);
            background: rgba(255, 255, 255, 0.92);
            box-shadow: 0 2px 12px rgba(26, 29, 38, 0.06);
            cursor: pointer;
            line-height: 1;
            min-width: 0;
            flex: 0 1 auto;
            max-width: min(420px, 100%);
          }
          .stores-onlymapped:hover{
            border-color: rgba(245, 192, 0, 0.45);
            box-shadow: 0 8px 20px rgba(245, 192, 0, 0.12);
          }
          .stores-onlymapped input {
            width: 18px;
            height: 18px;
            accent-color: var(--primary, #f5c000);
            transform: none;
            margin: 0;
          }
          .stores-onlymapped span{
            font-weight: 900;
            min-width: 0;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
          }
          @media (max-width: 420px){
            .stores-onlymapped{
              padding: 9px 12px;
            }
            .stores-onlymapped span{
              font-size: 0.86rem;
            }
          }

          .stores-mini-map {
            position: relative;
            border: 1px solid rgba(232, 230, 224, 0.95);
            border-radius: 22px;
            background: rgba(255, 255, 255, 0.94);
            box-shadow: 0 14px 36px rgba(26, 29, 38, 0.08);
            padding: 18px 18px 16px;
            cursor: pointer;
            overflow: hidden;
            min-height: 130px;
            text-align: right;
            font-family: inherit;
          }
          .stores-mini-map__shine {
            display: none;
          }
          .stores-mini-map:hover{
            border-color: rgba(245, 192, 0, 0.45);
            box-shadow: 0 18px 46px rgba(245, 192, 0, 0.14);
          }
          .stores-mini-map__bg {
            position: absolute;
            inset: 0;
            background:
              radial-gradient(ellipse 80% 60% at 15% 30%, rgba(255, 204, 0, 0.18) 0%, transparent 60%),
              radial-gradient(ellipse 70% 60% at 92% 70%, rgba(2, 119, 189, 0.06) 0%, transparent 55%),
              linear-gradient(180deg, rgba(230, 239, 232, 0.9) 0%, rgba(220, 232, 224, 0.92) 100%);
          }
          .stores-mini-map__badge {
            position: relative;
            z-index: 1;
            display: inline-flex;
            align-items: center;
            gap: 8px;
            padding: 10px 12px;
            border-radius: 999px;
            background: rgba(255, 255, 255, 0.9);
            border: 1px solid rgba(255, 204, 0, 0.35);
            color: var(--secondary);
            font-weight: 950;
          }
          .stores-mini-map__hint {
            position: relative;
            z-index: 1;
            margin-top: 10px;
            color: rgba(26, 29, 38, 0.75);
            font-weight: 800;
          }

          .stores-grid {
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 12px;
          }
          @media (max-width: 420px) {
            .stores-grid { gap: 10px; }
          }
          .store-card {
            display: flex;
            flex-direction: column;
            align-items: stretch;
            justify-content: space-between;
            gap: 10px;
            padding: 12px 12px 14px;
            border-radius: 20px;
            background: rgba(255, 255, 255, 0.92);
            border: 1px solid rgba(232, 230, 224, 0.95);
            text-decoration: none;
            color: inherit;
            box-shadow: 0 10px 26px rgba(26, 29, 38, 0.05);
            min-width: 0;
          }
          .store-card:hover{
            border-color: rgba(245, 192, 0, 0.45);
            box-shadow: 0 16px 40px rgba(245, 192, 0, 0.14);
          }
          .store-card__name {
            font-weight: 950;
            color: var(--secondary);
            margin-bottom: 6px;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
          }
          .store-card__meta {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            color: var(--text-secondary);
            font-weight: 800;
            font-size: 0.84rem;
          }
          .store-card__dot {
            width: 4px;
            height: 4px;
            border-radius: 999px;
            background: rgba(26, 29, 38, 0.25);
          }
          .store-card__thumb {
            order: -1;
            width: 100%;
            aspect-ratio: 1 / 1;
            height: auto;
            border-radius: 18px;
            overflow: hidden;
            border: 1px solid rgba(232, 230, 224, 0.95);
            background: rgba(255,255,255,0.8);
            display: flex;
            align-items: center;
            justify-content: center;
            flex-shrink: 0;
          }
          .store-card__thumb-img { width: 100%; height: 100%; object-fit: cover; }
          .store-card__thumb-emoji {
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 2rem;
          }

          .stores-pager {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 10px;
            margin-top: 6px;
          }
          .stores-pager button {
            border-radius: 12px;
            border: 1px solid rgba(232, 230, 224, 0.95);
            background: linear-gradient(135deg, var(--primary) 0%, var(--primary-hover) 100%);
            color: var(--secondary);
            font-weight: 900;
            padding: 9px 14px;
            cursor: pointer;
          }
          .stores-pager button:disabled { opacity: 0.5; cursor: not-allowed; }
          .stores-pager span { font-weight: 900; color: var(--text-secondary); }

          .stores-loading, .stores-empty {
            padding: 14px;
            border-radius: 18px;
            border: 1px solid rgba(232, 230, 224, 0.95);
            background: rgba(255,255,255,0.92);
            color: var(--text-secondary);
            font-weight: 800;
            text-align: center;
          }

          @media (min-width: 721px) {
            .stores-hero {
              display: grid;
              grid-template-columns: minmax(0, 1fr) min(300px, 30vw);
              gap: 18px;
              align-items: stretch;
            }
            .stores-page {
              gap: 18px;
            }
            .stores-head {
              padding: 22px 26px;
              border-radius: 24px;
              align-self: stretch;
              border: 1px solid rgba(232, 230, 224, 0.85);
              background:
                linear-gradient(145deg, rgba(255, 255, 255, 0.98) 0%, rgba(255, 252, 240, 0.94) 55%, rgba(255, 250, 235, 0.9) 100%);
              box-shadow:
                0 1px 0 rgba(255, 255, 255, 0.9) inset,
                0 16px 40px rgba(26, 29, 38, 0.08),
                0 4px 12px rgba(245, 192, 0, 0.06);
            }
            .stores-title {
              font-size: 1.5rem;
              letter-spacing: -0.02em;
            }
            .stores-sub {
              max-width: 42ch;
              font-size: 0.92rem;
            }
            .stores-controls {
              flex-wrap: nowrap;
              gap: 12px;
            }
            .stores-filterbtn {
              max-width: none;
              padding: 11px 16px;
              border-radius: 14px;
            }
            .stores-onlymapped {
              padding: 11px 16px;
              border-radius: 14px;
              max-width: min(360px, 28vw);
            }
            .stores-onlymapped span{
              /* الديسكتوب: لو المساحة ضاقت، اعرض سطرين بدل ما يختفي النص */
              white-space: normal;
              display: -webkit-box;
              -webkit-line-clamp: 2;
              -webkit-box-orient: vertical;
              overflow: hidden;
              text-overflow: ellipsis;
              line-height: 1.25;
            }
            .stores-mini-map {
              align-self: stretch;
              display: flex;
              flex-direction: column;
              justify-content: center;
              min-height: 0;
              padding: 22px 22px 20px;
              border-radius: 24px;
              border: 1px solid rgba(245, 192, 0, 0.28);
              background: rgba(255, 255, 255, 0.72);
              box-shadow:
                0 1px 0 rgba(255, 255, 255, 0.85) inset,
                0 18px 48px rgba(26, 29, 38, 0.1),
                0 0 0 1px rgba(255, 255, 255, 0.5) inset;
              transition: transform 0.22s ease, box-shadow 0.22s ease, border-color 0.2s ease;
            }
            .stores-mini-map:hover {
              transform: translateY(-2px);
              border-color: rgba(245, 192, 0, 0.45);
              box-shadow:
                0 1px 0 rgba(255, 255, 255, 0.85) inset,
                0 22px 52px rgba(245, 192, 0, 0.18),
                0 0 0 1px rgba(255, 255, 255, 0.55) inset;
            }
            .stores-mini-map:focus-visible {
              outline: none;
              box-shadow:
                0 0 0 3px rgba(255, 255, 255, 0.95),
                0 0 0 6px rgba(245, 192, 0, 0.45),
                0 22px 50px rgba(26, 29, 38, 0.12);
            }
            .stores-mini-map__bg {
              z-index: 0;
              background:
                radial-gradient(ellipse 85% 70% at 88% 18%, rgba(255, 204, 0, 0.22) 0%, transparent 55%),
                radial-gradient(ellipse 60% 55% at 12% 78%, rgba(2, 119, 189, 0.09) 0%, transparent 50%),
                repeating-linear-gradient(
                  -12deg,
                  transparent,
                  transparent 11px,
                  rgba(255, 255, 255, 0.07) 11px,
                  rgba(255, 255, 255, 0.07) 12px
                ),
                linear-gradient(165deg, rgba(232, 242, 235, 0.95) 0%, rgba(210, 228, 218, 0.92) 48%, rgba(198, 220, 208, 0.9) 100%);
            }
            .stores-mini-map__shine {
              display: block;
              position: absolute;
              inset: 0;
              z-index: 1;
              border-radius: inherit;
              pointer-events: none;
              background: linear-gradient(
                125deg,
                transparent 40%,
                rgba(255, 255, 255, 0.35) 48%,
                rgba(255, 255, 255, 0.12) 52%,
                transparent 60%
              );
              opacity: 0.85;
            }
            .stores-mini-map__badge {
              z-index: 2;
              padding: 11px 16px;
              font-size: 0.95rem;
              border-radius: 14px;
              box-shadow: 0 4px 16px rgba(26, 29, 38, 0.08);
            }
            .stores-mini-map__hint {
              z-index: 2;
              margin-top: 12px;
              font-size: 0.9rem;
            }
            .stores-grid {
              grid-template-columns: repeat(4, minmax(0, 1fr));
            }
          }

          /* ديسكتوب متوسط: اسم القسم أحيانًا طويل—اسمح بلف الكنترولز */
          @media (min-width: 721px) and (max-width: 1099px) {
            .stores-controls {
              flex-wrap: wrap;
              justify-content: flex-end;
            }
            .stores-filterbtn,
            .stores-onlymapped {
              max-width: 100%;
            }
          }

        `}} />
      </div>
    </MainLayout>
  );
}

