import React, { useCallback, useEffect, useMemo, useState } from 'react';
import MainLayout from '../components/MainLayout';
import ShopperMap from '../components/maps/ShopperMap';
import { getCategories, getCommunityCategories, getCommunityPoints, getNearbyStores } from '../api/data';
import { useMapExplore } from '../context/MapExploreContext';
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom';
import FiltersDropdown from '../components/ui/FiltersDropdown';
import { storeCategoryLabel, storeMatchesAnyCategory } from '../utils/storeCategories';

const DEFAULT_CENTER = [31.5, 34.4];

function normalizeQ(raw) {
  return String(raw || '').trim().toLowerCase();
}

function parseNumberOrNull(raw) {
  const n = Number(raw);
  return Number.isFinite(n) ? n : null;
}

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

export default function MapPage() {
  const {
    userMapLocation,
    setManualMapLocation,
    clearUserMapLocation,
    requestUserLocation,
    locating,
    locationFocusNonce,
    searchQuery,
    setSearchQuery,
  } = useMapExplore();
  const location = useLocation();
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();

  const userLocation = userMapLocation || DEFAULT_CENTER;
  const [categories, setCategories] = useState([]);
  const [communityCategories, setCommunityCategories] = useState([]);
  const [stores, setStores] = useState([]);
  const [communityPoints, setCommunityPoints] = useState([]);
  const [loading, setLoading] = useState(true);
  const [focusStoreId, setFocusStoreId] = useState(null);
  const [focusCommunityPointId, setFocusCommunityPointId] = useState(null);

  useEffect(() => {
    let mounted = true;
    setLoading(true);

    Promise.all([
      getCategories().catch(() => []),
      getCommunityCategories().catch(() => []),
      getCommunityPoints(null).catch(() => []),
      getNearbyStores(userLocation[0], userLocation[1], null).catch(() => []),
    ])
      .then(([cats, cCats, pts, st]) => {
        if (!mounted) return;
        setCategories(Array.isArray(cats) ? cats : []);
        setCommunityCategories(Array.isArray(cCats) ? cCats : []);
        setCommunityPoints(Array.isArray(pts) ? pts : []);
        setStores(Array.isArray(st) ? st : []);
      })
      .finally(() => {
        if (!mounted) return;
        setLoading(false);
      });

    return () => {
      mounted = false;
    };
  }, [userLocation[0], userLocation[1]]);

  useEffect(() => {
    const mf = location.state?.mapFocus;
    if (!mf) return;
    const lat = Number(mf.lat);
    const lng = Number(mf.lng);
    if (!Number.isFinite(lat) || !Number.isFinite(lng)) return;
    setManualMapLocation(lat, lng);
    setFocusStoreId(mf.storeId ?? null);
    setFocusCommunityPointId(mf.communityPointId ?? null);

    // دمج preset مع الرابط دفعة واحدة (تجنباً لمسح معلمات بسبب location.search القديم بعد setSearchParams)
    const preset = location.state?.mapPreset;
    if (preset) {
      const next = new URLSearchParams();
      if (preset.mode === 'community') next.set('mode', 'community');
      else if (preset.mode === 'stores') next.set('mode', 'stores');
      if (preset.category != null && String(preset.category).trim() !== '') next.set('category', String(preset.category));
      if (preset.cc != null && String(preset.cc).trim() !== '') next.set('cc', String(preset.cc));
      const qPreset = preset.q != null ? String(preset.q).trim() : '';
      if (qPreset !== '') next.set('q', qPreset);
      navigate({ pathname: location.pathname, search: next.toString() }, { replace: true, state: {} });
    } else {
      navigate({ pathname: location.pathname, search: location.search }, { replace: true, state: {} });
    }
  }, [location.state, location.pathname, location.search, navigate, setManualMapLocation]);

  useEffect(() => {
    const q = searchParams.get('q') || '';
    if (q !== searchQuery) setSearchQuery(q);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchParams]);

  const setParam = useCallback(
    (key, value) => {
      const next = new URLSearchParams(searchParams);
      if (value == null || String(value) === '' || String(value) === 'all') next.delete(key);
      else next.set(key, String(value));
      setSearchParams(next, { replace: true });
    },
    [searchParams, setSearchParams]
  );

  const mode = (searchParams.get('mode') === 'community') ? 'community' : 'stores';
  const storeCategoryIds = parseCsvIds(searchParams.get('category'));
  const communityCategoryIds = parseCsvIds(searchParams.get('cc'));
  const qNorm = normalizeQ(searchQuery);

  const filteredStores = useMemo(() => {
    const base = Array.isArray(stores) ? stores : [];
    const byCat =
      storeCategoryIds.length > 0
        ? base.filter((s) => storeMatchesAnyCategory(s, storeCategoryIds))
        : base;
    if (!qNorm) return byCat;
    return byCat.filter((s) => {
      const hay = `${s.store_name || ''} ${storeCategoryLabel(s)} ${s.description || ''}`.toLowerCase();
      return hay.includes(qNorm);
    });
  }, [stores, storeCategoryIds, qNorm]);

  const filteredCommunityPoints = useMemo(() => {
    const base = Array.isArray(communityPoints) ? communityPoints : [];
    const byCat =
      communityCategoryIds.length > 0
        ? base.filter((p) => communityCategoryIds.includes(Number(p.category)))
        : base;
    if (!qNorm) return byCat;
    return byCat.filter((p) => {
      const hay = `${p.title || ''} ${p.category_name || ''} ${p.detail_description || ''} ${p.address_text || ''}`.toLowerCase();
      return hay.includes(qNorm);
    });
  }, [communityPoints, communityCategoryIds, qNorm]);

  /** يضمن ظهور دبوس التركيز حتى لو استبعده البحث/الفلتر (مثلاً اختلاف بسيط في الاسم) */
  const storesForMap = useMemo(() => {
    const base = mode === 'stores' ? filteredStores : [];
    if (mode !== 'stores' || focusStoreId == null) return base;
    const id = Number(focusStoreId);
    if (!Number.isFinite(id)) return base;
    if (base.some((s) => Number(s?.id) === id)) return base;
    const raw = (stores || []).find((s) => Number(s?.id) === id);
    return raw ? [...base, raw] : base;
  }, [mode, filteredStores, stores, focusStoreId]);

  const communityPointsForMap = useMemo(() => {
    const base = mode === 'community' ? filteredCommunityPoints : [];
    if (mode !== 'community' || focusCommunityPointId == null) return base;
    const id = Number(focusCommunityPointId);
    if (!Number.isFinite(id)) return base;
    if (base.some((p) => Number(p?.id) === id)) return base;
    const raw = (communityPoints || []).find((p) => Number(p?.id) === id);
    const withFocus = raw ? [...base, raw] : base;
    // Dedup by id (defensive against duplicate API rows)
    const seen = new Set();
    return withFocus.filter((p) => {
      const pid = p?.id != null ? String(p.id) : '';
      if (!pid) return true;
      if (seen.has(pid)) return false;
      seen.add(pid);
      return true;
    });
  }, [mode, filteredCommunityPoints, communityPoints, focusCommunityPointId]);

  const focusOnResults =
    Boolean(qNorm) ||
    (mode === 'stores' ? storeCategoryIds.length > 0 : communityCategoryIds.length > 0);

  const handleGpsClick = useCallback(async () => {
    await requestUserLocation();
  }, [requestUserLocation]);

  const mapHeight = useMemo(() => 'calc(100dvh - 180px)', []);

  return (
    <MainLayout>
      <div className="map-page">
        <div className="map-page-stage" aria-busy={loading ? 'true' : 'false'}>
          <ShopperMap
            stores={storesForMap}
            communityPoints={communityPointsForMap}
            categories={categories}
            userLocation={userMapLocation}
            locationFocusNonce={locationFocusNonce}
            onManualLocationPick={setManualMapLocation}
            autoFitStoresWhenNoUserLocation={false}
            allowAutoCamera={false}
            showGpsOnMap
            gpsLocating={locating}
            onGpsClick={handleGpsClick}
            onClearUserLocation={clearUserMapLocation}
            mapHeight={mapHeight}
            isFullscreen
            gpsLabel="موقعي"
            gpsLocatingLabel="جاري الموقع…"
            gpsFabAlignStart
            focusOnResults={focusOnResults}
            focusKind={mode === 'community' ? 'community' : 'stores'}
            focusStoreId={mode === 'stores' ? focusStoreId : null}
            focusCommunityPointId={mode === 'community' ? focusCommunityPointId : null}
            topControls={
              <div className="map-topbar" onClick={(e) => e.stopPropagation()}>
                <div className="map-topbar-row">
                  <button
                    type="button"
                    className={`map-topbar-chip ${mode === 'stores' ? 'map-topbar-chip--active' : ''}`}
                    onClick={() => setParam('mode', 'stores')}
                  >
                    المتاجر
                  </button>
                  <button
                    type="button"
                    className={`map-topbar-chip ${mode === 'community' ? 'map-topbar-chip--active' : ''}`}
                    onClick={() => setParam('mode', 'community')}
                  >
                    الخدمات
                  </button>

                  <FiltersDropdown
                    buttonLabel="فلاتر"
                    title={mode === 'stores' ? 'فلترة المتاجر حسب الأقسام' : 'فلترة الخدمات حسب الأقسام'}
                    allLabel="الكل"
                    options={(mode === 'stores' ? categories : communityCategories).map((c) => ({ id: c.id, label: c.name }))}
                    selectedIds={mode === 'stores' ? storeCategoryIds : communityCategoryIds}
                    onChangeSelectedIds={(ids) => {
                      const key = mode === 'stores' ? 'category' : 'cc';
                      setParam(key, ids && ids.length ? ids.join(',') : '');
                    }}
                  />
                </div>

                <div className="map-topbar-search">
                  <input
                    className="map-topbar-search-input"
                    value={searchQuery}
                    onChange={(e) => {
                      const v = e.target.value;
                      setSearchQuery(v);
                      setParam('q', v);
                    }}
                    placeholder={mode === 'community' ? 'ابحث عن خدمة أو مؤسسة…' : 'ابحث عن متجر…'}
                  />
                </div>
              </div>
            }
          />
        </div>

        <style dangerouslySetInnerHTML={{ __html: `
          .map-page {
            width: 100%;
            max-width: none;
            margin-inline: 0;
            padding-inline: 0;
            box-sizing: border-box;
            display: flex;
            flex-direction: column;
            flex: 1 1 auto;
            min-height: 0;
            gap: 12px;
          }
          .map-page-stage {
            border-radius: 22px;
            overflow: hidden;
            border: 1px solid rgba(232, 230, 224, 0.92);
            box-shadow: 0 10px 30px rgba(26, 29, 38, 0.08);
            background: #dfe8e3;
            position: relative;
            flex: 1 1 auto;
            min-height: min(100dvh - 200px, 520px);
          }

          .map-topbar{
            display: flex;
            flex-direction: column;
            gap: 6px;
            padding: 6px 8px;
            background: transparent;
            border: 1px solid rgba(0,0,0,0.08);
            border-radius: 16px;
            backdrop-filter: blur(10px);
            pointer-events: auto;
            max-width: min(420px, 100%);
            margin-inline: auto;
          }
          .map-topbar-row{
            display: flex;
            flex-wrap: nowrap;
            gap: 6px;
            align-items: center;
            justify-content: center;
          }
          .map-topbar-row > *{
            flex: 0 0 auto;
          }
          .map-topbar-chip{
            border: 1.5px solid var(--border);
            background: var(--white);
            color: var(--secondary);
            font-weight: 900;
            padding: 6px 8px;
            border-radius: 999px;
            cursor: pointer;
            font-size: 0.82rem;
            line-height: 1.1;
          }
          .map-topbar .filters-dd__btn{
            padding: 6px 8px;
            gap: 6px;
            font-size: 0.82rem;
          }
          .map-topbar .filters-dd__btn svg{
            width: 16px;
            height: 16px;
          }
          .map-topbar .filters-dd__btnwrap{
            flex-direction: row;
            align-items: center;
            gap: 0;
          }
          /* لا نعرض سطر الملخص تحت زر الفلاتر داخل شريط الخريطة */
          .map-topbar .filters-dd__summary{
            display: none !important;
          }
          .map-topbar-chip--active{
            background: linear-gradient(180deg, var(--primary) 0%, var(--primary-hover) 100%);
            border-color: transparent;
            box-shadow: var(--shadow-gold);
          }
          .map-topbar-select{
            border: 1.5px solid var(--border);
            background: var(--white);
            color: var(--secondary);
            font-weight: 800;
            padding: 8px 10px;
            border-radius: 12px;
            min-width: min(220px, 100%);
          }
          /* moved filter chips to FiltersDropdown component */
          .map-topbar-search{
            width: 100%;
          }
          .map-topbar-search-input{
            width: 100%;
            border: 1.5px solid rgba(232, 230, 224, 0.95);
            background: rgba(255, 255, 255, 0.92);
            border-radius: 999px;
            padding: 8px 10px;
            font-weight: 800;
            font-size: 0.92rem;
            outline: none;
          }
          .map-topbar-search-input:focus{
            border-color: rgba(245, 192, 0, 0.55);
            box-shadow: 0 0 0 2px rgba(245, 192, 0, 0.22);
          }

          @media (max-width: 720px) {
            .map-page {
              gap: 10px;
            }
            .map-page-stage {
              border-radius: 20px;
            }
          }
        `}} />
      </div>
    </MainLayout>
  );
}

