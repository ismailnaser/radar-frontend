import React, { useEffect, useMemo, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { Link } from 'react-router-dom';
import { MapPin, Maximize2, Star, UserX, X } from 'lucide-react';
import L from 'leaflet';
import { MapContainer, Marker, Popup, Tooltip, useMap, useMapEvents } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import '../../components/maps/leafletIconFix';
import BasemapLayersControl from './BasemapLayersControl';
import LeafletInvalidateOnLayout from './LeafletInvalidateOnLayout';
import { getStorePinDisplay } from './storePinDefaults';
import { communityPointLatLng } from '../../utils/communityPointCoords';
import './ShopperMap.css';

function leafletIconForStoreDisplay(display) {
  if (display.type === 'image') {
    return L.icon({
      iconUrl: display.url,
      iconSize: [46, 46],
      iconAnchor: [23, 46],
      popupAnchor: [0, -42],
      className: 'store-map-pin-img',
    });
  }
  return L.divIcon({
    className: 'store-map-pin-divicon',
    html: `<div class="store-map-pin-emoji-inner" style="background:${display.bg}">${display.emoji}</div>`,
    iconSize: [46, 46],
    iconAnchor: [23, 46],
    popupAnchor: [0, -40],
  });
}

/** مركز تقريبي لقطاع غزة — نفس منطقة محاكاة التطبيق */
const DEFAULT_CENTER = [31.5, 34.4];
const DEFAULT_ZOOM = 13;
/** حدود قطاع غزة التقريبية (Lat/Lng) لمنع الخروج خارج المنطقة */
const GAZA_BOUNDS = L.latLngBounds(L.latLng(31.20, 34.20), L.latLng(31.62, 34.62));

function MapPopupStoreRating({ store }) {
  const avgRaw = store?.rating_average != null ? Number(store.rating_average) : null;
  const n = store?.rating_count != null ? Number(store.rating_count) : 0;
  const avg = avgRaw != null && Number.isFinite(avgRaw) ? avgRaw : null;

  if (!n || avg == null) {
    return (
      <div style={{ fontSize: '0.82rem', color: '#666', marginBottom: 8, lineHeight: 1.4 }}>
        لا يوجد تقييم بعد
      </div>
    );
  }

  const filledThrough = Math.min(5, Math.max(0, Math.round(avg)));
  return (
    <div
      dir="ltr"
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: 8,
        marginBottom: 8,
        flexWrap: 'wrap',
      }}
    >
      <span style={{ display: 'inline-flex', gap: 2, alignItems: 'center' }} aria-hidden>
        {[1, 2, 3, 4, 5].map((lvl) => (
          <Star
            key={lvl}
            size={16}
            color="#f5c000"
            fill={lvl <= filledThrough ? '#f5c000' : 'none'}
            strokeWidth={lvl <= filledThrough ? 0 : 1.5}
          />
        ))}
      </span>
      <span style={{ fontSize: '0.84rem', color: '#333', fontWeight: 800 }}>
        {avg.toFixed(1)}
        <span style={{ fontWeight: 600, color: '#666' }}> · {n} تقييم</span>
      </span>
    </div>
  );
}

function cameraStateSignature(userLocation, stores, communityPoints, locationFocusNonce, focusOnResults, focusKind) {
  const u =
    userLocation?.length === 2
      ? `${Number(userLocation[0]).toFixed(5)},${Number(userLocation[1]).toFixed(5)}`
      : 'none';
  const storePts = (stores || [])
    .map((s) => {
      const la = Number(s.latitude);
      const ln = Number(s.longitude);
      if (!Number.isFinite(la) || !Number.isFinite(ln)) return null;
      return `s:${s.id}:${la.toFixed(5)}:${ln.toFixed(5)}`;
    })
    .filter(Boolean);
  const commPts = (communityPoints || [])
    .map((p) => {
      const ll = communityPointLatLng(p);
      if (!ll) return null;
      return `c:${p.id}:${ll[0].toFixed(5)}:${ll[1].toFixed(5)}`;
    })
    .filter(Boolean);

  const pts =
    focusKind === 'community'
      ? commPts
      : focusKind === 'both'
        ? [...storePts, ...commPts]
        : storePts;

  return `${u}#${pts.sort().join('|')}#${locationFocusNonce}#${focusOnResults ? 'R' : 'U'}#${focusKind || 'stores'}`;
}

/**
 * مع موقع المستخدم: تمركز على إحداثيات المستخدم (زوم بعد ضغط «موقعي» أو يدوي).
 * بدون موقع: إما ملء الإطار بالمتاجر (الافتراضي) أو — مع autoFitStoresWhenNoUserLocation=false —
 * عدم تحريك الكاميرا تلقائياً حتى يضغط المستخدم «موقعي» (صفحة الاستكشاف).
 */
function AdaptiveCamera({
  userLocation,
  stores,
  communityPoints,
  locationFocusNonce,
  focusOnResults,
  focusKind,
  autoFitStoresWhenNoUserLocation = true,
  allowAutoCamera = true,
}) {
  const map = useMap();
  const lastCamSig = useRef('');

  useEffect(() => {
    const sig = cameraStateSignature(
      userLocation,
      stores,
      communityPoints,
      locationFocusNonce,
      focusOnResults,
      focusKind
    );
    if (sig === lastCamSig.current) return;
    lastCamSig.current = sig;

    const storePts = (stores || [])
      .map((s) => {
        const lat = Number(s.latitude);
        const lng = Number(s.longitude);
        if (!Number.isFinite(lat) || !Number.isFinite(lng)) return null;
        return [lat, lng];
      })
      .filter(Boolean);

    const communityPts = (communityPoints || [])
      .map((p) => communityPointLatLng(p))
      .filter(Boolean);

    const resultPts =
      focusKind === 'community'
        ? communityPts
        : focusKind === 'both'
          ? [...storePts, ...communityPts]
          : storePts;

    if (allowAutoCamera && focusOnResults) {
      if (resultPts.length === 0) {
        if (userLocation?.length === 2) {
          const lat = Number(userLocation[0]);
          const lng = Number(userLocation[1]);
          if (Number.isFinite(lat) && Number.isFinite(lng)) {
            map.flyTo([lat, lng], 17, { duration: 0.55, animate: true });
          }
        }
        return;
      }
      if (resultPts.length === 1) {
        map.setView(resultPts[0], 17, { animate: true });
        return;
      }
      map.fitBounds(L.latLngBounds(resultPts), { padding: [40, 40], maxZoom: 17, animate: true });
      return;
    }

    /* التمركز على موقع المستخدم يُدار عبر FlyToUserOnNonce عند كل ضغطة «موقعي» أو تحديد يدوي */

    if (!allowAutoCamera || !autoFitStoresWhenNoUserLocation) {
      return;
    }

    if (storePts.length === 0) return;
    if (storePts.length === 1) {
      map.setView(storePts[0], 15, { animate: true });
      return;
    }
    map.fitBounds(L.latLngBounds(storePts), { padding: [40, 40], maxZoom: 17, animate: true });
  }, [
    map,
    userLocation,
    stores,
    communityPoints,
    locationFocusNonce,
    focusOnResults,
    focusKind,
    autoFitStoresWhenNoUserLocation,
    allowAutoCamera,
  ]);

  return null;
}

export function MapClickPicker({ onPick }) {
  useMapEvents({
    click(e) {
      if (typeof onPick === 'function') {
        onPick(e.latlng.lat, e.latlng.lng);
      }
    },
  });
  return null;
}

/** بعد ضغط «موقعي» أو تحديد يدوي: زوم وتمركز على آخر إحداثيات (يتفوق على fitBounds للفلاتر) */
function FlyToUserOnNonce({ userLocation, locationFocusNonce }) {
  const map = useMap();
  const prevNonce = useRef(0);

  useEffect(() => {
    if (!userLocation || userLocation.length !== 2) {
      prevNonce.current = locationFocusNonce;
      return;
    }
    if (locationFocusNonce <= prevNonce.current) return;
    const lat = Number(userLocation[0]);
    const lng = Number(userLocation[1]);
    if (!Number.isFinite(lat) || !Number.isFinite(lng)) return;
    map.flyTo([lat, lng], 18, { duration: 0.85, animate: true });
    prevNonce.current = locationFocusNonce;
  }, [map, userLocation, locationFocusNonce]);

  return null;
}

/** يمنع Leaflet من اعتبار اللمس/الضغط بداية سحب على الخريطة (مهم على الجوال) */
function stopMapPointerCapture(e) {
  e.stopPropagation();
}

function InitGazaBounds({ onceRef }) {
  const map = useMap();
  useEffect(() => {
    if (onceRef?.current) return;
    if (onceRef) onceRef.current = true;
    map.fitBounds(GAZA_BOUNDS, { padding: [18, 18], animate: false });
  }, [map, onceRef]);
  return null;
}

/** زر GPS داخل حاوية Leaflet نفسها ليظهر فوق طبقة الخريطة على كل الشاشات */
function MapGpsFabOnMap({
  gpsFabAlignStart,
  gpsLocating,
  gpsLabel,
  gpsLocatingLabel,
  clearLabel = 'إلغاء موقعي',
  onGpsClick,
  onClearUserLocation,
  showClearUserLocation,
}) {
  const map = useMap();
  const container = map.getContainer();
  const showClear = Boolean(showClearUserLocation && typeof onClearUserLocation === 'function');
  return createPortal(
    <div
      className={`shopper-map-gps-fab-stack${gpsFabAlignStart ? ' shopper-map-gps-fab-stack--start' : ''}`}
    >
      {showClear ? (
        <button
          type="button"
          className="shopper-map-gps-fab shopper-map-gps-fab--clear"
          onPointerDown={stopMapPointerCapture}
          onPointerUp={stopMapPointerCapture}
          onTouchStart={stopMapPointerCapture}
          onMouseDown={stopMapPointerCapture}
          onClick={(e) => {
            stopMapPointerCapture(e);
            onClearUserLocation();
          }}
          title="إزالة دبوس موقعك من الخريطة"
          aria-label="إلغاء موقعي"
        >
          <UserX size={18} strokeWidth={2.25} aria-hidden className="shopper-map-gps-fab__ico" />
          <span className="shopper-map-gps-fab__txt">{clearLabel}</span>
        </button>
      ) : null}
      <button
        type="button"
        className="shopper-map-gps-fab"
        onPointerDown={stopMapPointerCapture}
        onPointerUp={stopMapPointerCapture}
        onTouchStart={stopMapPointerCapture}
        onMouseDown={stopMapPointerCapture}
        onClick={(e) => {
          stopMapPointerCapture(e);
          if (!gpsLocating && typeof onGpsClick === 'function') {
            void onGpsClick();
          }
        }}
        disabled={gpsLocating}
        title="تحديد موقعي الحالي على الخريطة والتمركز عليه"
        aria-label={gpsLocating ? 'جاري تحديد الموقع' : 'موقعي الحالي'}
      >
        <MapPin size={20} strokeWidth={2.25} aria-hidden className="shopper-map-gps-fab__ico" />
        <span className="shopper-map-gps-fab__txt">{gpsLocating ? gpsLocatingLabel : gpsLabel}</span>
      </button>
    </div>,
    container
  );
}

/** يطبّق cursor على حاوية Leaflet لأن MapContainer لا يحدّث className بعد الإنشاء */
function PickModeCursor({ active }) {
  const map = useMap();
  useEffect(() => {
    const el = map.getContainer();
    const cls = 'leaflet-pick-cursor';
    if (active) el.classList.add(cls);
    else el.classList.remove(cls);
    return () => el.classList.remove(cls);
  }, [map, active]);
  return null;
}

const COMMUNITY_SLUG_EMOJI = {
  medical: '🏥',
  education: '📚',
  food: '🍲',
  water: '💧',
  institution: '🤝',
};

function communityServiceIcon(slug) {
  const emoji = COMMUNITY_SLUG_EMOJI[slug] || '📍';
  return L.divIcon({
    className: 'community-map-pin-wrap',
    html: `<div class="community-map-pin-inner community-map-pin-inner--pin"><span class="community-pin-emoji">${emoji}</span></div>`,
    iconSize: [38, 38],
    iconAnchor: [19, 38],
    popupAnchor: [0, -34],
  });
}

const ShopperMap = ({
  stores,
  communityPoints = [],
  userLocation,
  locationFocusNonce = 0,
  onManualLocationPick,
  categories,
  showGpsOnMap = false,
  gpsLocating = false,
  onGpsClick,
  onClearUserLocation,
  mapHeight = 'clamp(260px, 52dvh, 420px)',
  gpsLabel = 'موقعي الحالي',
  gpsLocatingLabel = 'جاري الموقع… (حتى ~20ث)',
  wrapperClassName = '',
  gpsFabAlignStart = false,
  gpsInline = false,
  topControls = null,
  focusOnResults = false,
  focusKind = 'stores',
  focusStoreId = null,
  focusCommunityPointId = null,
  onExpandClick,
  /** يملأ حاوية بارتفاع كامل (عرض شاشة كامل) */
  isFullscreen = false,
  /**
   * true (افتراضي): بدون GPS تتمركز الخريطة على المتاجر إن وُجدت.
   * false (صفحة الخريطة): تبقى على المنطقة الافتراضية حتى يضغط المستخدم «موقعي».
   */
  autoFitStoresWhenNoUserLocation = true,
  /** لمنع أي تحريك/زوم تلقائي عند فتح الخريطة (إلا عبر GPS/تحديد يدوي/زوم المستخدم) */
  allowAutoCamera = true,
}) => {
  const center = useMemo(() => {
    if (userLocation?.length === 2) return userLocation;
    if (!autoFitStoresWhenNoUserLocation) return DEFAULT_CENTER;
    const first = (stores || []).find(
      (s) => Number.isFinite(Number(s.latitude)) && Number.isFinite(Number(s.longitude))
    );
    if (first) return [Number(first.latitude), Number(first.longitude)];
    return DEFAULT_CENTER;
  }, [stores, userLocation, autoFitStoresWhenNoUserLocation]);

  const storeIcons = useMemo(() => {
    const m = new Map();
    for (const s of stores || []) {
      const id = s?.id;
      if (id == null) continue;
      const display = getStorePinDisplay(s, categories);
      m.set(String(id), leafletIconForStoreDisplay(display));
    }
    return m;
  }, [stores, categories]);

  const [awaitingManualPick, setAwaitingManualPick] = useState(false);
  const [showGovSelector, setShowGovSelector] = useState(false);
  const [zoomGov, setZoomGov] = useState(null);
  const manualPickEnabled = typeof onManualLocationPick === 'function';
  const storeMarkerRefs = useRef({});
  const communityMarkerRefs = useRef({});
  const didInitBounds = useRef(false);
  const mapFillsSpace =
    isFullscreen ||
    (typeof mapHeight === 'string' &&
      (mapHeight.includes('100dvh') || mapHeight.includes('100vh') || mapHeight === '100%'));

  const handleManualMapPick = (lat, lng) => {
    if (typeof onManualLocationPick === 'function') {
      onManualLocationPick(lat, lng);
    }
    setAwaitingManualPick(false);
  };

  return (
    <div
      className={`radar-map card radar-map--manual-wrap radar-map--market${awaitingManualPick ? ' radar-map--pick-active' : ''}${mapFillsSpace ? ' radar-map--fill' : ''}${isFullscreen ? ' radar-map--fullscreen' : ''}${wrapperClassName ? ` ${wrapperClassName}` : ''}`}
      style={{
        padding: 0,
        overflow: 'hidden',
        position: isFullscreen ? 'absolute' : 'relative',
        ...(isFullscreen
          ? { inset: 0, width: '100%', height: '100%', display: 'flex', flexDirection: 'column' }
          : mapFillsSpace
            ? { flex: 1, minHeight: 0, display: 'flex', flexDirection: 'column' }
            : {}),
      }}
    >
      {manualPickEnabled ? (
        <div className="shopper-map-manual-bar" role="region" aria-label="تحديد الموقع يدوياً">
          {awaitingManualPick ? (
            <>
              <span className="shopper-map-manual-hint">انقر على الخريطة لتثبيت موقعك</span>
              <button
                type="button"
                className="shopper-map-manual-btn shopper-map-manual-btn-cancel"
                onClick={() => setAwaitingManualPick(false)}
              >
                إلغاء
              </button>
            </>
          ) : (
            <>
              <button
                type="button"
                className="shopper-map-manual-btn shopper-map-manual-btn-primary"
                onClick={() => setShowGovSelector(true)}
              >
                تحديد موقعي يدوياً
              </button>
              {gpsInline && showGpsOnMap && typeof onGpsClick === 'function' ? (
                <button
                  type="button"
                  className="shopper-map-gps-inline"
                  onClick={onGpsClick}
                  disabled={gpsLocating}
                  title="تحديد موقعي الحالي على الخريطة"
                  aria-label={gpsLocating ? 'جاري تحديد الموقع' : 'موقعي الحالي'}
                >
                  <MapPin size={18} strokeWidth={2.25} aria-hidden />
                  <span>{gpsLocating ? gpsLocatingLabel : gpsLabel}</span>
                </button>
              ) : null}
            </>
          )}
        </div>
      ) : null}

      {topControls ? (
        <div className="shopper-map-topbar" role="region" aria-label="بحث وفلاتر الخريطة">
          {topControls}
        </div>
      ) : null}
      {typeof onExpandClick === 'function' ? (
        <button
          type="button"
          className="shopper-map-expand-btn"
          onClick={onExpandClick}
          title="تكبير الخريطة"
          aria-label="تكبير الخريطة"
        >
          <Maximize2 size={20} strokeWidth={2.25} aria-hidden />
        </button>
      ) : null}

      {showGovSelector && typeof document !== 'undefined' ? createPortal(
        <>
          <div 
            onClick={() => setShowGovSelector(false)}
            style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.25)', zIndex: 12000, cursor: 'default' }} 
          />
          <div 
            style={{ 
              position: 'fixed', left: '50%', top: '50%', transform: 'translate(-50%, -50%)',
              width: 'min(380px, 92vw)', background: '#fff', borderRadius: '18px',
              border: '1px solid rgba(232,230,224,0.95)', boxShadow: '0 18px 46px rgba(26,29,38,0.18)',
              zIndex: 12001, display: 'flex', flexDirection: 'column', overflow: 'hidden'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '12px 14px', borderBottom: '1px solid rgba(0,0,0,0.08)', background: '#fdfdfd' }}>
              <strong style={{ fontWeight: 950, color: 'var(--secondary)' }}>اختر المحافظة أولاً</strong>
              <button 
                type="button" 
                onClick={() => setShowGovSelector(false)}
                style={{ border: 'none', background: 'transparent', cursor: 'pointer', width: '32px', height: '32px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '8px', color: '#5c6378' }}
              >
                <X size={18} strokeWidth={2} />
              </button>
            </div>
            <div style={{ padding: '16px' }}>
              <div style={{ paddingBottom: '14px', fontSize: '0.9rem', color: '#666', lineHeight: 1.5 }}>
                لتسهيل تحديد موقعك الدقيق، الرجاء اختيار المحافظة التي تتواجد بها لتوجيه الخريطة إليها:
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {[
                  { id: 'north', label: 'محافظة شمال غزة', lat: 31.54, lng: 34.50 },
                  { id: 'gaza', label: 'محافظة غزة', lat: 31.50, lng: 34.46 },
                  { id: 'middle', label: 'محافظة الوسطى', lat: 31.43, lng: 34.39 },
                  { id: 'khan', label: 'محافظة خانيونس', lat: 31.34, lng: 34.30 },
                ].map((gov) => (
                  <button
                    key={gov.id}
                    type="button"
                    onClick={() => {
                      setZoomGov(gov);
                      setAwaitingManualPick(true);
                      setShowGovSelector(false);
                    }}
                    style={{
                      padding: '14px 14px',
                      borderRadius: '12px',
                      border: '1.5px solid #e8e6e0',
                      background: '#fff',
                      fontWeight: 800,
                      cursor: 'pointer',
                      textAlign: 'right',
                      fontFamily: 'inherit',
                      fontSize: '0.95rem',
                      color: 'var(--secondary)',
                      boxShadow: '0 2px 8px rgba(0,0,0,0.03)',
                    }}
                    onMouseOver={(e) => { e.currentTarget.style.background = '#fafafa'; e.currentTarget.style.borderColor = 'var(--primary)'; }}
                    onMouseOut={(e) => { e.currentTarget.style.background = '#fff'; e.currentTarget.style.borderColor = '#e8e6e0'; }}
                  >
                    {gov.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </>,
        document.body
      ) : null}

      <MapContainer
        center={center}
        zoom={DEFAULT_ZOOM}
        minZoom={10}
        maxZoom={19}
        scrollWheelZoom
        maxBounds={GAZA_BOUNDS}
        maxBoundsViscosity={1.0}
        style={
          mapFillsSpace
            ? { flex: 1, minHeight: isFullscreen ? 0 : 220, width: '100%' }
            : { height: mapHeight, width: '100%' }
        }
      >
        <InitGazaBounds onceRef={didInitBounds} />
        <GovernorateZoomer zoomGov={zoomGov} clearGov={() => setZoomGov(null)} />
        <BasemapLayersControl />
        <LeafletInvalidateOnLayout />
        <PickModeCursor active={awaitingManualPick} />
        <AdaptiveCamera
          userLocation={userLocation}
          stores={stores}
          communityPoints={communityPoints}
          locationFocusNonce={locationFocusNonce}
          focusOnResults={focusOnResults}
          focusKind={focusKind}
          autoFitStoresWhenNoUserLocation={autoFitStoresWhenNoUserLocation}
          allowAutoCamera={allowAutoCamera}
        />
        <FlyToUserOnNonce userLocation={userLocation} locationFocusNonce={locationFocusNonce} />

        {/* افتح نافذة المتجر تلقائياً عند التركيز عليه */}
        {focusStoreId != null ? (
          <AutoOpenStorePopup storeId={focusStoreId} markerRefs={storeMarkerRefs} />
        ) : null}
        {focusCommunityPointId != null ? (
          <AutoOpenCommunityPopup pointId={focusCommunityPointId} markerRefs={communityMarkerRefs} />
        ) : null}

        {manualPickEnabled && awaitingManualPick ? (
          <MapClickPicker onPick={handleManualMapPick} />
        ) : null}

        {userLocation?.length === 2 && (
          <Marker position={userLocation}>
            <Popup>
              <div style={{ maxWidth: 220 }}>
                <div style={{ fontWeight: 800, marginBottom: 6 }}>موقعك للمقارنة بالمتاجر</div>
                <div style={{ fontSize: '0.88rem', lineHeight: 1.45, color: '#444' }}>
                  استخدم «تحديد موقعي يدوياً» ثم انقر المكان، أو زر «موقعي الحالي» على حافة الخريطة
                  للـ GPS.
                </div>
              </div>
            </Popup>
          </Marker>
        )}

        {(communityPoints || []).map((p) => {
          const ll = communityPointLatLng(p);
          if (!ll) return null;
          const slug = p.category_slug || '';
          const icon = communityServiceIcon(slug);
          const waterNote =
            slug === 'water' && p.water_is_potable != null
              ? p.water_is_potable
                ? 'مياه صالحة للشرب'
                : 'مياه غير صالحة للشرب'
              : null;
          return (
            <Marker
              key={`c-${p.id}`}
              position={ll}
              icon={icon}
              ref={(ref) => {
                const pid = p?.id != null ? String(p.id) : '';
                if (!pid) return;
                if (ref) communityMarkerRefs.current[pid] = ref;
              }}
            >
              <Popup offset={[0, -32]}>
                <div style={{ minWidth: 200, maxWidth: 280 }}>
                  <div style={{ fontWeight: 900, marginBottom: 6 }}>{p.title}</div>
                  <div style={{ fontSize: '0.82rem', color: '#555', marginBottom: 6 }}>
                    {p.category_name || 'خدمة مجتمعية'}
                  </div>
                  {waterNote ? (
                    <div style={{ fontSize: '0.8rem', fontWeight: 700, marginBottom: 6 }}>{waterNote}</div>
                  ) : null}
                  {p.institution_scope_label && p.institution_scope ? (
                    <div style={{ fontSize: '0.8rem', marginBottom: 6 }}>
                      النطاق: {p.institution_scope_label}
                    </div>
                  ) : null}
                  <div style={{ fontSize: '0.85rem', lineHeight: 1.45, marginBottom: 8 }}>
                    {p.detail_description}
                  </div>
                  <div style={{ fontSize: '0.8rem', color: '#666' }}>{p.address_text}</div>
                </div>
              </Popup>
            </Marker>
          );
        })}

        {(stores || []).map((s) => {
          const lat = Number(s.latitude);
          const lng = Number(s.longitude);
          if (!Number.isFinite(lat) || !Number.isFinite(lng)) return null;
          const sid = s.id != null ? String(s.id) : '';
          const icon = sid ? storeIcons.get(sid) : undefined;
          return (
            <Marker
              key={s.id}
              position={[lat, lng]}
              icon={icon}
              ref={(ref) => {
                if (!sid) return;
                if (ref) storeMarkerRefs.current[sid] = ref;
              }}
            >
              <Popup>
                <div style={{ minWidth: 180 }}>
                  <div style={{ fontWeight: 900, marginBottom: 4 }}>{s.store_name}</div>
                  <MapPopupStoreRating store={s} />
                  <div style={{ color: 'var(--text-secondary)', marginBottom: 8 }}>
                    {s.category_name || 'متجر'}
                  </div>
                  <div style={{ color: 'var(--text-secondary)', marginBottom: 10 }}>
                    {s.description || 'لا يوجد وصف'}
                  </div>
                  <Link
                    to={`/stores/${s.id}`}
                    style={{
                      display: 'inline-block',
                      fontWeight: 800,
                      color: 'var(--secondary)',
                      background: 'var(--primary)',
                      padding: '8px 12px',
                      borderRadius: 10,
                      textDecoration: 'none',
                      fontSize: '0.9rem',
                    }}
                  >
                    عرض المتجر
                  </Link>
                </div>
              </Popup>
            </Marker>
          );
        })}

        {!gpsInline && showGpsOnMap && typeof onGpsClick === 'function' ? (
          <MapGpsFabOnMap
            gpsFabAlignStart={gpsFabAlignStart}
            gpsLocating={gpsLocating}
            gpsLabel={gpsLabel}
            gpsLocatingLabel={gpsLocatingLabel}
            onGpsClick={onGpsClick}
            onClearUserLocation={onClearUserLocation}
            showClearUserLocation={userLocation?.length === 2}
          />
        ) : null}
      </MapContainer>
    </div>
  );
};

export default ShopperMap;

function AutoOpenStorePopup({ storeId, markerRefs }) {
  const map = useMap();
  useEffect(() => {
    const sid = storeId != null ? String(storeId) : '';
    if (!sid) return;
    let cancelled = false;
    let attempts = 0;
    const tryOpen = () => {
      if (cancelled) return;
      const marker = markerRefs?.current?.[sid];
      if (marker) {
        try {
          marker.openPopup();
          const ll = marker.getLatLng?.();
          if (ll) map.panTo(ll, { animate: true });
        } catch {
          /* ignore */
        }
        return;
      }
      attempts += 1;
      if (attempts < 14) window.setTimeout(tryOpen, 100);
    };
    window.setTimeout(tryOpen, 60);
    return () => {
      cancelled = true;
    };
  }, [storeId, markerRefs, map]);
  return null;
}

function GovernorateZoomer({ zoomGov, clearGov }) {
  const map = useMap();
  useEffect(() => {
    if (zoomGov) {
      map.flyTo([zoomGov.lat, zoomGov.lng], 13, { duration: 1.0, animate: true });
      clearGov();
    }
  }, [zoomGov, map, clearGov]);
  return null;
}

function AutoOpenCommunityPopup({ pointId, markerRefs }) {
  const map = useMap();
  useEffect(() => {
    const pid = pointId != null ? String(pointId) : '';
    if (!pid) return;
    let cancelled = false;
    let attempts = 0;
    const tryOpen = () => {
      if (cancelled) return;
      const marker = markerRefs?.current?.[pid];
      if (marker) {
        try {
          marker.openPopup();
          const ll = marker.getLatLng?.();
          if (ll) map.panTo(ll, { animate: true });
        } catch {
          /* ignore */
        }
        return;
      }
      attempts += 1;
      if (attempts < 14) window.setTimeout(tryOpen, 100);
    };
    window.setTimeout(tryOpen, 60);
    return () => {
      cancelled = true;
    };
  }, [pointId, markerRefs, map]);
  return null;
}
