import React, { useCallback, useEffect, useMemo, useState } from 'react';
import MainLayout from '../components/MainLayout';
import ShopperMap from '../components/maps/ShopperMap';
import { getCategories, getCommunityCategories, getCommunityPoints, getNearbyStores } from '../api/data';
import { useMapExplore } from '../context/MapExploreContext';
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom';

const DEFAULT_CENTER = [31.5, 34.4];

function normalizeQ(raw) {
  return String(raw || '').trim().toLowerCase();
}

function parseNumberOrNull(raw) {
  const n = Number(raw);
  return Number.isFinite(n) ? n : null;
}

export default function MapPage() {
  const { userMapLocation, setManualMapLocation, requestUserLocation, locating, locationFocusNonce, searchQuery, setSearchQuery } =
    useMapExplore();
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
  const storeCategoryId = parseNumberOrNull(searchParams.get('category'));
  const communityCategoryId = parseNumberOrNull(searchParams.get('cc'));
  const qNorm = normalizeQ(searchQuery);

  const filteredStores = useMemo(() => {
    const base = Array.isArray(stores) ? stores : [];
    const byCat = storeCategoryId ? base.filter((s) => Number(s.category) === Number(storeCategoryId)) : base;
    if (!qNorm) return byCat;
    return byCat.filter((s) => {
      const hay = `${s.store_name || ''} ${s.category_name || ''} ${s.description || ''}`.toLowerCase();
      return hay.includes(qNorm);
    });
  }, [stores, storeCategoryId, qNorm]);

  const filteredCommunityPoints = useMemo(() => {
    const base = Array.isArray(communityPoints) ? communityPoints : [];
    const byCat = communityCategoryId ? base.filter((p) => Number(p.category) === Number(communityCategoryId)) : base;
    if (!qNorm) return byCat;
    return byCat.filter((p) => {
      const hay = `${p.title || ''} ${p.category_name || ''} ${p.detail_description || ''} ${p.address_text || ''}`.toLowerCase();
      return hay.includes(qNorm);
    });
  }, [communityPoints, communityCategoryId, qNorm]);

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
    return raw ? [...base, raw] : base;
  }, [mode, filteredCommunityPoints, communityPoints, focusCommunityPointId]);

  const focusOnResults = Boolean(qNorm) || (mode === 'stores' ? storeCategoryId != null : communityCategoryId != null);

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
            showGpsOnMap
            gpsLocating={locating}
            onGpsClick={handleGpsClick}
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

                  {mode === 'stores' ? (
                    <select
                      className="map-topbar-select"
                      value={storeCategoryId ?? 'all'}
                      onChange={(e) => setParam('category', e.target.value)}
                      aria-label="فلتر الأقسام"
                    >
                      <option value="all">كل الأقسام</option>
                      {categories.map((c) => (
                        <option key={c.id} value={c.id}>{c.name}</option>
                      ))}
                    </select>
                  ) : (
                    <select
                      className="map-topbar-select"
                      value={communityCategoryId ?? 'all'}
                      onChange={(e) => setParam('cc', e.target.value)}
                      aria-label="فلتر الخدمات"
                    >
                      <option value="all">كل الخدمات</option>
                      {communityCategories.map((c) => (
                        <option key={c.id} value={c.id}>{c.name}</option>
                      ))}
                    </select>
                  )}
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
            max-width: 1240px;
            margin-inline: auto;
            padding-inline: clamp(8px, 2.2vw, 22px);
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
            gap: 10px;
            padding: 10px 12px;
            background: linear-gradient(180deg, rgba(255,255,255,0.96) 0%, rgba(255,255,255,0.86) 100%);
            border-bottom: 1px solid rgba(0,0,0,0.08);
            backdrop-filter: blur(10px);
            pointer-events: auto;
          }
          .map-topbar-row{
            display: flex;
            flex-wrap: wrap;
            gap: 8px;
            align-items: center;
          }
          .map-topbar-chip{
            border: 1.5px solid var(--border);
            background: var(--white);
            color: var(--secondary);
            font-weight: 900;
            padding: 8px 12px;
            border-radius: 999px;
            cursor: pointer;
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
          .map-topbar-search{
            width: 100%;
          }
          .map-topbar-search-input{
            width: 100%;
            border: 1.5px solid rgba(232, 230, 224, 0.95);
            background: rgba(255, 255, 255, 0.92);
            border-radius: 999px;
            padding: 12px 14px;
            font-weight: 800;
            font-size: 0.95rem;
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

