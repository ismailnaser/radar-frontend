import React, { useEffect, useMemo, useRef, useState } from 'react';
import { getRefinedGeolocationPosition } from '../../utils/geolocation';
import { MapContainer, Marker, Popup, useMap, useMapEvents } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import '../../components/maps/leafletIconFix';
import BasemapLayersControl from './BasemapLayersControl';
import LeafletInvalidateOnLayout from './LeafletInvalidateOnLayout';
import CustomButton from '../ui/CustomButton';
import { useAlert } from '../AlertProvider';

// مركز قطاع غزة تقريباً
const DEFAULT_CENTER = [31.45, 34.40];
// حدود قطاع غزة (جنوب/غرب ← شمال/شرق)
const GAZA_BOUNDS = [
  [31.20, 34.20],
  [31.62, 34.62],
];

function isPointInsideGazaBounds(point) {
  if (!Array.isArray(point) || point.length !== 2) return false;
  const lat = Number(point[0]);
  const lng = Number(point[1]);
  if (!Number.isFinite(lat) || !Number.isFinite(lng)) return false;
  return lat >= GAZA_BOUNDS[0][0] && lat <= GAZA_BOUNDS[1][0] && lng >= GAZA_BOUNDS[0][1] && lng <= GAZA_BOUNDS[1][1];
}

function isLatLngInsideGaza(lat, lng) {
  const la = Number(lat);
  const ln = Number(lng);
  if (!Number.isFinite(la) || !Number.isFinite(ln)) return false;
  return la >= GAZA_BOUNDS[0][0] && la <= GAZA_BOUNDS[1][0] && ln >= GAZA_BOUNDS[0][1] && ln <= GAZA_BOUNDS[1][1];
}

function ClickToSet({ onPick }) {
  useMapEvents({
    click(e) {
      onPick([e.latlng.lat, e.latlng.lng]);
    },
  });
  return null;
}

/** `center` في MapContainer عند react-leaflet يُقرأ مرة واحدة؛ ننقل الكاميرا عند كل تحديث للدبوس (GPS أو نقرة). */
function FlyToPoint({ point }) {
  const map = useMap();
  const lastKey = useRef('');

  useEffect(() => {
    if (!point || point.length !== 2) return;
    const lat = Number(point[0]);
    const lng = Number(point[1]);
    if (!Number.isFinite(lat) || !Number.isFinite(lng)) return;
    const key = `${lat.toFixed(7)},${lng.toFixed(7)}`;
    if (key === lastKey.current) return;
    lastKey.current = key;
    map.flyTo([lat, lng], 18, { duration: 0.55 });
  }, [map, point]);

  return null;
}

/** عند فتح الخريطة أول مرة (بدون نقطة صالحة) ثبّت الكاميرا على حدود غزة بدل البحر */
function InitGazaBounds({ enabled }) {
  const map = useMap();
  const didInit = useRef(false);
  useEffect(() => {
    if (!enabled || didInit.current) return;
    didInit.current = true;
    map.fitBounds(GAZA_BOUNDS, { padding: [14, 14], maxZoom: 12 });
  }, [enabled, map]);
  return null;
}

const MerchantLocationPicker = ({ value, onChange }) => {
  const [busy, setBusy] = useState(false);
  const [mapExpanded, setMapExpanded] = useState(false);
  const { showAlert } = useAlert();

  const center = useMemo(() => {
    if (isPointInsideGazaBounds(value)) return [Number(value[0]), Number(value[1])];
    return DEFAULT_CENTER;
  }, [value]);

  const initialZoom = value?.length === 2 ? 16 : 12;

  const useMyLocation = async () => {
    if (!navigator.geolocation) {
      await showAlert('المتصفح لا يدعم تحديد الموقع.', 'تنبيه');
      throw new Error('no-geolocation');
    }
    setBusy(true);
    try {
      const r = await getRefinedGeolocationPosition({ maxWaitMs: 22000, goodEnoughM: 110 });
      if (!isLatLngInsideGaza(r.latitude, r.longitude)) {
        await showAlert('أنت بتحاول تضيف موقع خارج حدود قطاع غزة.', 'تنبيه');
        return;
      }
      onChange([r.latitude, r.longitude]);
      if (r.accuracy != null && r.accuracy > 1200) {
        const acc = Math.round(r.accuracy);
        await showAlert(
          `تم أخذ الموقع بعد عدة قراءات. الدقة لا تزال تقريبية (~${acc} م). على الكمبيوتر غالباً لا يوجد GPS؛ للدقة استخدم الهاتف أو انقر موقع المتجر يدوياً على الخريطة.`,
          'تنبيه'
        );
      } else {
        await showAlert('تم ضبط موقع المتجر من موقعك الحالي.', 'تم');
      }
    } catch {
      await showAlert(
        'لم نتمكن من تحديد موقعك. تأكد من صلاحيات الموقع والموقع الدقيق في إعدادات النظام.',
        'خطأ'
      );
      throw new Error('geo-failed');
    } finally {
      setBusy(false);
    }
  };

  return (
    <div className="card" style={{ padding: 0, overflow: 'hidden' }}>
      <div style={{ padding: 12, display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 12, flexWrap: 'wrap' }}>
        <div style={{ fontWeight: 900 }}>حدد موقع المتجر (اختياري)</div>
        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
          <CustomButton
            variant="secondary"
            onClick={() => setMapExpanded(true)}
            style={{ width: 'auto' }}
            confirm={false}
            showErrorAlert={false}
          >
            فتح الخريطة
          </CustomButton>
          <CustomButton
            variant="secondary"
            onClick={useMyLocation}
            loading={busy}
            style={{ width: 'auto' }}
            confirm="استخدام موقع جهازك الحالي (GPS) لتحديد المتجر؟"
            showErrorAlert={false}
          >
            موقعي الحالي
          </CustomButton>
        </div>
      </div>
      <button
        type="button"
        onClick={() => setMapExpanded(true)}
        aria-label="تكبير الخريطة لتحديد موقع المتجر"
        title="اضغط لتكبير الخريطة"
        style={{
          width: '100%',
          padding: 0,
          border: 'none',
          background: 'transparent',
          cursor: 'zoom-in',
          display: 'block',
          textAlign: 'inherit',
        }}
      >
        <MapContainer
          center={center}
          zoom={initialZoom}
          minZoom={10}
          maxZoom={19}
          scrollWheelZoom
          maxBounds={GAZA_BOUNDS}
          maxBoundsViscosity={1.0}
          style={{ height: 'clamp(260px, 48dvh, 360px)', width: '100%' }}
        >
          <InitGazaBounds enabled={!isPointInsideGazaBounds(value)} />
          <BasemapLayersControl />
          <LeafletInvalidateOnLayout />
          <FlyToPoint point={value} />
          <ClickToSet
            onPick={async (loc) => {
              if (!isPointInsideGazaBounds(loc)) {
                await showAlert('أنت بتحاول تضيف موقع خارج حدود قطاع غزة.', 'تنبيه');
                return;
              }
              onChange(loc);
            }}
          />
          {value?.length === 2 && (
            <Marker position={value}>
              <Popup>موقع المتجر</Popup>
            </Marker>
          )}
        </MapContainer>
      </button>
      {mapExpanded ? (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="خريطة تحديد موقع المتجر"
          onClick={() => setMapExpanded(false)}
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 6000,
            background: 'rgba(14, 16, 20, 0.62)',
            backdropFilter: 'blur(10px)',
            WebkitBackdropFilter: 'blur(10px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: 14,
          }}
        >
          <div
            className="card"
            onClick={(e) => e.stopPropagation()}
            style={{
              position: 'relative',
              width: 'min(520px, 96vw)',
              height: 'min(86dvh, calc(100dvh - 48px))',
              padding: 0,
              overflow: 'hidden',
              borderRadius: 26,
            }}
          >
            <button
              type="button"
              onClick={async () => {
                if (!value || value.length !== 2) {
                  await showAlert('انقر على الخريطة لتحديد موقع المتجر أولاً.', 'تنبيه');
                  return;
                }
                setMapExpanded(false);
              }}
              aria-label="تأكيد الموقع"
              title="تأكيد الموقع"
              style={{
                position: 'absolute',
                top: 10,
                insetInlineStart: 10,
                zIndex: 2500,
                pointerEvents: 'auto',
                height: 44,
                padding: '0 14px',
                borderRadius: 999,
                border: '1px solid rgba(245, 192, 0, 0.55)',
                background: 'linear-gradient(145deg, var(--primary) 0%, var(--primary-hover) 100%)',
                boxShadow: 'var(--shadow-gold)',
                color: 'var(--secondary)',
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontWeight: 950,
                fontSize: '0.92rem',
              }}
            >
              تأكيد الموقع
            </button>
            <button
              type="button"
              onClick={() => setMapExpanded(false)}
              aria-label="إغلاق"
              title="إغلاق"
              style={{
                position: 'absolute',
                top: 10,
                left: '50%',
                transform: 'translateX(-50%)',
                zIndex: 2500,
                pointerEvents: 'auto',
                width: 44,
                height: 44,
                borderRadius: 999,
                border: '1px solid rgba(245, 192, 0, 0.55)',
                background: 'linear-gradient(145deg, var(--primary) 0%, var(--primary-hover) 100%)',
                boxShadow: 'var(--shadow-gold)',
                color: 'var(--secondary)',
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontWeight: 900,
              }}
            >
              ×
            </button>
            <MapContainer
              center={center}
              zoom={15}
              minZoom={10}
              maxZoom={19}
              scrollWheelZoom
              maxBounds={GAZA_BOUNDS}
              maxBoundsViscosity={1.0}
              style={{ height: '100%', width: '100%' }}
            >
              <InitGazaBounds enabled={!isPointInsideGazaBounds(value)} />
              <BasemapLayersControl />
              <LeafletInvalidateOnLayout />
              <FlyToPoint point={value} />
              <ClickToSet
                onPick={async (loc) => {
                  if (!isPointInsideGazaBounds(loc)) {
                    await showAlert('أنت بتحاول تضيف موقع خارج حدود قطاع غزة.', 'تنبيه');
                    return;
                  }
                  onChange(loc);
                }}
              />
              {value?.length === 2 && (
                <Marker position={value}>
                  <Popup>موقع المتجر</Popup>
                </Marker>
              )}
            </MapContainer>
          </div>
        </div>
      ) : null}
      <div style={{ padding: 12, color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.5 }}>
        هذه الخطوة اختيارية. اضغط على الخريطة لتحديد الموقع، أو استخدم «موقعي الحالي» (يجب السماح بالموقع الدقيق).
        إن خزّن المتصفح موقعاً قديماً أو كانت الدقة ضعيفة قد تختلف النقطة — جرّب مرة أخرى بعد تفعيل الـ GPS أو صحّح بالنقر على الخريطة.
        يُحفظ الموقع عند الضغط على حفظ في أعلى النموذج.
      </div>
    </div>
  );
};

export default MerchantLocationPicker;

