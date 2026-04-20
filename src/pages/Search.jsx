import React, { useEffect, useMemo, useState } from 'react';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import { Search as SearchIcon } from 'lucide-react';
import MainLayout from '../components/MainLayout';
import { getNearbyStores, getCategories } from '../api/data';
import { useMapExplore } from '../context/MapExploreContext';
import { getStorePinDisplay } from '../components/maps/storePinDefaults';
import { storeHasWeeklyHoursSchedule } from '../utils/storeHours';
import FiltersDropdown from '../components/ui/FiltersDropdown';

function haversineKm(a, b) {
  const R = 6371;
  const toRad = (v) => (v * Math.PI) / 180;
  const dLat = toRad(b[0] - a[0]);
  const dLon = toRad(b[1] - a[1]);
  const lat1 = toRad(a[0]);
  const lat2 = toRad(b[0]);
  const h =
    Math.sin(dLat / 2) ** 2 + Math.cos(lat1) * Math.cos(lat2) * Math.sin(dLon / 2) ** 2;
  return R * (2 * Math.atan2(Math.sqrt(h), Math.sqrt(1 - h)));
}

function hasMappableCoords(s) {
  const la = Number(s?.latitude);
  const ln = Number(s?.longitude);
  return Number.isFinite(la) && Number.isFinite(ln);
}

const STORES_PER_PAGE = 12;

function parseCsvIds(raw) {
  if (raw == null) return [];
  const s = String(raw).trim();
  if (!s) return [];
  const out = [];
  for (const part of s.split(',')) {
    const n = Number(String(part).trim());
    if (Number.isFinite(n)) out.push(n);
  }
  return Array.from(new Set(out));
}

function toggleId(list, id) {
  const n = Number(id);
  if (!Number.isFinite(n)) return list;
  return list.includes(n) ? list.filter((x) => x !== n) : [...list, n];
}

const SearchPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const qRaw = searchParams.get('q') || '';
  const q = qRaw.trim();
  const ql = q.toLowerCase();
  const { userMapLocation, setSearchQuery } = useMapExplore();
  const selectedCategoryIds = useMemo(() => parseCsvIds(searchParams.get('category')), [searchParams]);

  const [stores, setStores] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [userLocation, setUserLocation] = useState(null);
  const [page, setPage] = useState(1);

  useEffect(() => {
    setSearchQuery(q);
  }, [q, setSearchQuery]);

  useEffect(() => {
    setPage(1);
  }, [qRaw]);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        const list = await getCategories();
        if (!cancelled) setCategories(Array.isArray(list) ? list : []);
      } catch (e) {
        console.error(e);
        if (!cancelled) setCategories([]);
      }
    })();
    return () => {
      cancelled = true;
    };
  }, []);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        setLoading(true);
        setError('');
        let lat;
        let lng;
        let locPair = null;
        if (userMapLocation?.length === 2) {
          lat = userMapLocation[0];
          lng = userMapLocation[1];
          locPair = [lat, lng];
          if (!cancelled) setUserLocation(locPair);
        } else {
          lat = 31.5;
          lng = 34.4;
          locPair = null;
          if (!cancelled) setUserLocation(null);
        }
        const data = await getNearbyStores(lat, lng);
        const list = Array.isArray(data) ? data : data?.results || [];
        if (!cancelled) setStores(list);
      } catch (err) {
        console.error(err);
        if (!cancelled) {
          setError('تعذر تحميل المتاجر. تحقق من الاتصال بالخادم.');
          setStores([]);
        }
      } finally {
        if (!cancelled) setLoading(false);
      }
    })();
    return () => {
      cancelled = true;
    };
  }, [userMapLocation]);

  const filtered = useMemo(() => {
    let base = Array.isArray(stores) ? stores : [];
    if (selectedCategoryIds.length > 0) {
      base = base.filter((s) => selectedCategoryIds.includes(Number(s.category)));
    }
    if (!ql) return base;
    return base.filter((s) => {
      const name = (s.store_name || '').toLowerCase();
      const cat = (s.category_name || '').toLowerCase();
      return name.includes(ql) || cat.includes(ql);
    });
  }, [stores, ql, selectedCategoryIds]);

  const sorted = useMemo(() => {
    if (!userLocation) return filtered;
    const base = userLocation;
    return [...filtered].sort((a, b) => {
      if (!hasMappableCoords(a)) return 1;
      if (!hasMappableCoords(b)) return -1;
      const da = haversineKm(base, [Number(a.latitude), Number(a.longitude)]);
      const db = haversineKm(base, [Number(b.latitude), Number(b.longitude)]);
      return da - db;
    });
  }, [filtered, userLocation]);

  const totalPages = Math.max(1, Math.ceil(sorted.length / STORES_PER_PAGE));
  const safePage = Math.min(page, totalPages);
  const paged = useMemo(() => {
    const start = (safePage - 1) * STORES_PER_PAGE;
    return sorted.slice(start, start + STORES_PER_PAGE);
  }, [sorted, safePage]);

  useEffect(() => {
    if (safePage !== page) setPage(safePage);
  }, [safePage, page]);

  return (
    <MainLayout>
      <div className="search-page">
        <header className="search-page-hero">
          <div className="search-page-head">
            <h1 className="search-page-title">نتائج البحث</h1>
            {q ? (
              <p className="search-page-query">
                <SearchIcon size={18} aria-hidden />
                «{q}»
              </p>
            ) : (
              <p className="search-page-hint">
                اكتب في شريط البحث أعلاه واضغط Enter أو زر البحث لعرض المتاجر المطابقة.
              </p>
            )}
          </div>
        </header>

        <div className="search-page-filter">
          <FiltersDropdown
            buttonLabel="فلاتر"
            title="فلترة حسب الأقسام"
            allLabel="كل الأقسام"
            requireConfirm
            options={(categories || []).map((c) => ({ id: c.id, label: c.name }))}
            selectedIds={selectedCategoryIds}
            onChangeSelectedIds={(ids) => {
              const next = new URLSearchParams(searchParams);
              if (ids && ids.length) next.set('category', ids.join(','));
              else next.delete('category');
              setSearchParams(next, { replace: true });
            }}
          />
        </div>

        {error ? <p className="search-page-error">{error}</p> : null}

        {loading ? (
          <p className="search-page-loading">جاري تحميل المتاجر…</p>
        ) : sorted.length === 0 ? (
          <p className="search-page-empty">
            {q ? 'لا توجد متاجر تطابق بحثك. جرّب كلمات أخرى أو تصفح من الصفحة الرئيسية.' : 'لا توجد نتائج بعد.'}
          </p>
        ) : (
          <>
            <p className="search-page-count">{sorted.length} متجر</p>
            <div className="search-page-grid">
              {paged.map((store) => {
                const visual = getStorePinDisplay(store, categories);
                const distKm =
                  userLocation && hasMappableCoords(store)
                    ? haversineKm(userLocation, [Number(store.latitude), Number(store.longitude)])
                    : null;
                const openTag =
                  storeHasWeeklyHoursSchedule(store.business_hours_weekly) && store.is_open_now === true
                    ? 'مفتوح'
                    : storeHasWeeklyHoursSchedule(store.business_hours_weekly) && store.is_open_now === false
                      ? 'مغلق'
                      : null;
                return (
                  <Link key={store.id} to={`/stores/${store.id}`} className="search-page-card">
                    <div className="search-page-card-main">
                      <div className="search-page-card-text">
                        <span className="search-page-card-name">{store.store_name}</span>
                        {store.category_name ? (
                          <span className="search-page-card-cat">{store.category_name}</span>
                        ) : null}
                        <span className="search-page-card-dist">
                          {distKm != null ? `📍 ${distKm.toFixed(1)} كم` : 'بدون مسافة'}
                        </span>
                      </div>
                      {openTag ? <span className="search-page-card-status">{openTag}</span> : null}
                    </div>
                    <div className="search-page-card-thumb">
                      {visual.type === 'image' ? (
                        <img className="search-page-card-thumb-img" src={visual.url} alt="" loading="lazy" width="800" height="800" />
                      ) : (
                        <span className="search-page-card-thumb-emoji" style={{ background: visual.bg }}>
                          {visual.emoji}
                        </span>
                      )}
                    </div>
                  </Link>
                );
              })}
            </div>
            {totalPages > 1 ? (
              <div className="search-page-pager" role="navigation" aria-label="تصفح الصفحات">
                <button
                  type="button"
                  className="search-page-pager-btn"
                  disabled={safePage <= 1}
                  onClick={() => setPage((p) => Math.max(1, p - 1))}
                >
                  السابق
                </button>
                <span className="search-page-pager-meta">
                  {safePage} / {totalPages}
                </span>
                <button
                  type="button"
                  className="search-page-pager-btn"
                  disabled={safePage >= totalPages}
                  onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                >
                  التالي
                </button>
              </div>
            ) : null}
          </>
        )}

        <style dangerouslySetInnerHTML={{ __html: `
          .search-page {
            max-width: 1240px;
            margin-inline: auto;
            padding-inline: clamp(8px, 2.2vw, 22px);
            box-sizing: border-box;
            padding-bottom: 28px;
          }
          .search-page-hero {
            margin-bottom: 22px;
            padding: clamp(18px, 3vw, 24px) clamp(16px, 2.5vw, 22px);
            border-radius: var(--radius-xl);
            background: linear-gradient(160deg, var(--white) 0%, var(--primary-light) 100%);
            border: 1px solid rgba(255, 214, 10, 0.28);
            box-shadow: var(--shadow-sm);
          }
          .search-page-head {
            margin: 0;
          }
          .search-page-filter{
            display:flex;
            justify-content: flex-start;
            margin: -8px 0 14px;
          }
          /* moved filters UI to FiltersDropdown component */
          .search-page-title {
            margin: 0 0 8px;
            font-size: 1.45rem;
            font-weight: 900;
            color: var(--secondary);
          }
          .search-page-query {
            margin: 0;
            display: flex;
            align-items: center;
            gap: 8px;
            font-weight: 700;
            color: var(--text-secondary);
            font-size: 0.95rem;
          }
          .search-page-hint {
            margin: 0;
            line-height: 1.6;
            color: var(--text-secondary);
            font-size: 0.92rem;
          }
          .search-page-error {
            color: #c0392b;
            font-weight: 800;
          }
          .search-page-loading,
          .search-page-empty {
            color: var(--text-secondary);
            line-height: 1.65;
          }
          .search-page-count {
            margin: 0 0 12px;
            font-size: 0.88rem;
            font-weight: 800;
            color: var(--text-secondary);
          }
          .search-page-grid {
            display: flex;
            flex-direction: column;
            gap: 10px;
          }
          .search-page-card {
            display: flex;
            align-items: stretch;
            gap: 10px;
            padding: 12px 14px;
            border-radius: var(--radius-lg);
            background: var(--white);
            border: 1px solid var(--border);
            box-shadow: 0 6px 20px rgba(30, 30, 46, 0.06);
            text-decoration: none;
            color: inherit;
            transition: box-shadow 0.2s ease, border-color 0.2s ease;
          }
          .search-page-card:hover {
            border-color: rgba(245, 192, 0, 0.45);
            box-shadow: var(--shadow-gold);
          }
          .search-page-card-main {
            flex: 1;
            min-width: 0;
            display: flex;
            align-items: flex-start;
            justify-content: space-between;
            gap: 10px;
          }
          .search-page-card-text {
            display: flex;
            flex-direction: column;
            gap: 4px;
            min-width: 0;
          }
          .search-page-card-name {
            font-weight: 900;
            font-size: 1rem;
            color: var(--secondary);
          }
          .search-page-card-cat {
            font-size: 0.82rem;
            font-weight: 700;
            color: var(--text-secondary);
          }
          .search-page-card-dist {
            font-size: 0.8rem;
            color: var(--text-light);
          }
          .search-page-card-status {
            flex-shrink: 0;
            font-size: 0.72rem;
            font-weight: 800;
            padding: 4px 10px;
            border-radius: 999px;
            background: var(--primary-light);
            color: var(--secondary);
          }
          .search-page-card-thumb {
            flex-shrink: 0;
            width: 52px;
            height: 52px;
            border-radius: 12px;
            overflow: hidden;
            border: 1px solid var(--border);
          }
          .search-page-card-thumb-img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            display: block;
          }
          .search-page-card-thumb-emoji {
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 1.5rem;
          }
          .search-page-pager {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 16px;
            margin-top: 22px;
            flex-wrap: wrap;
          }
          .search-page-pager-btn {
            font-family: inherit;
            font-weight: 800;
            font-size: 0.88rem;
            padding: 10px 18px;
            border-radius: 12px;
            border: 1px solid var(--border);
            background: linear-gradient(135deg, var(--primary) 0%, var(--primary-hover) 100%);
            color: var(--secondary);
            cursor: pointer;
            box-shadow: var(--shadow-sm);
          }
          .search-page-pager-btn:disabled {
            opacity: 0.45;
            cursor: not-allowed;
          }
          .search-page-pager-meta {
            font-weight: 800;
            font-size: 0.88rem;
            color: var(--text-secondary);
          }
        `}} />
      </div>
    </MainLayout>
  );
};

export default SearchPage;
