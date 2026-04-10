import React, { useEffect, useMemo, useRef, useState } from 'react';
import { getRefinedGeolocationPosition } from '../../utils/geolocation';
import { MapContainer, Marker, Popup, useMap, useMapEvents } from 'react-leaflet';
import '../../components/maps/leafletIconFix';
import BasemapLayersControl from './BasemapLayersControl';
import LeafletInvalidateOnLayout from './LeafletInvalidateOnLayout';
import CustomButton from '../ui/CustomButton';

const DEFAULT_CENTER = [31.5, 34.4];

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

const MerchantLocationPicker = ({ value, onChange }) => {
  const [busy, setBusy] = useState(false);

  const center = useMemo(() => {
    if (value?.length === 2) return value;
    return DEFAULT_CENTER;
  }, [value]);

  const useMyLocation = async () => {
    if (!navigator.geolocation) return alert('المتصفح لا يدعم تحديد الموقع');
    setBusy(true);
    try {
      const r = await getRefinedGeolocationPosition({ maxWaitMs: 22000, goodEnoughM: 110 });
      onChange([r.latitude, r.longitude]);
      if (r.accuracy != null && r.accuracy > 1200) {
        const acc = Math.round(r.accuracy);
        alert(
          `تم أخذ الموقع بعد عدة قراءات. الدقة لا تزال تقريبية (~${acc} م). على الكمبيوتر غالباً لا يوجد GPS؛ للدقة استخدم الهاتف أو انقر موقع المتجر يدوياً على الخريطة.`
        );
      }
    } catch {
      alert('لم نتمكن من تحديد موقعك. تأكد من صلاحيات الموقع والموقع الدقيق في إعدادات النظام.');
    } finally {
      setBusy(false);
    }
  };

  return (
    <div className="card" style={{ padding: 0, overflow: 'hidden' }}>
      <div style={{ padding: 12, display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 12, flexWrap: 'wrap' }}>
        <div style={{ fontWeight: 900 }}>حدد موقع المتجر</div>
        <CustomButton variant="secondary" onClick={useMyLocation} loading={busy} style={{ width: 'auto' }}>
          موقعي الحالي
        </CustomButton>
      </div>
      <MapContainer
        center={center}
        zoom={14}
        minZoom={10}
        maxZoom={19}
        scrollWheelZoom
        style={{ height: 'clamp(260px, 50dvh, 380px)', width: '100%' }}
      >
        <BasemapLayersControl />
        <LeafletInvalidateOnLayout />
        <FlyToPoint point={value} />
        <ClickToSet onPick={onChange} />
        {value?.length === 2 && (
          <Marker position={value}>
            <Popup>موقع المتجر</Popup>
          </Marker>
        )}
      </MapContainer>
      <div style={{ padding: 12, color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.5 }}>
        اضغط على الخريطة لتحديد الموقع، أو استخدم «موقعي الحالي» (يجب السماح بالموقع الدقيق).
        إن خزّن المتصفح موقعاً قديماً أو كانت الدقة ضعيفة قد تختلف النقطة — جرّب مرة أخرى بعد تفعيل الـ GPS أو صحّح بالنقر على الخريطة.
        يُحفظ الموقع عند الضغط على حفظ في أعلى النموذج.
      </div>
    </div>
  );
};

export default MerchantLocationPicker;

