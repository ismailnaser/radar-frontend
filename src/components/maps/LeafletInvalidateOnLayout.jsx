import { useEffect } from 'react';
import { useMap } from 'react-leaflet';

/** بعد فتح/إغلاق السايدبار أو تغيير حجم النافذة — يصحّح مقاس الخريطة ويقلّل تشويه/ضبابية البلاط */
export default function LeafletInvalidateOnLayout() {
  const map = useMap();

  useEffect(() => {
    const fix = () => {
      map.invalidateSize({ animate: false });
    };
    window.addEventListener('resize', fix);
    window.addEventListener('radar-map-invalidate', fix);
    return () => {
      window.removeEventListener('resize', fix);
      window.removeEventListener('radar-map-invalidate', fix);
    };
  }, [map]);

  return null;
}
