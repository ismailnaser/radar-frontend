import { useEffect, useRef } from 'react';
import { useMap } from 'react-leaflet';

/** يحرّك الكاميرا عند تحديث الإحداثيات (نقرة على الخريطة أو GPS). */
export default function MapFlyToPosition({ position, zoom = 17 }) {
  const map = useMap();
  const lastKey = useRef('');

  useEffect(() => {
    if (!position || position.length !== 2) return;
    const lat = Number(position[0]);
    const lng = Number(position[1]);
    if (!Number.isFinite(lat) || !Number.isFinite(lng)) return;
    const key = `${lat.toFixed(7)},${lng.toFixed(7)}`;
    if (key === lastKey.current) return;
    lastKey.current = key;
    map.flyTo([lat, lng], zoom, { duration: 0.55, animate: true });
  }, [map, position, zoom]);

  return null;
}
