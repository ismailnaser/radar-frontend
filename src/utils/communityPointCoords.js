/** إحداثيات نقطة خدمة مجتمعية — توحيد الحقول كما في الخريطة */
export function communityPointLatLng(p) {
  const rawLat = p?.latitude ?? p?.lat ?? p?.location_lat ?? p?.location?.lat;
  const rawLng = p?.longitude ?? p?.lng ?? p?.location_lng ?? p?.location?.lng;
  const la = Number(rawLat);
  const ln = Number(rawLng);
  if (!Number.isFinite(la) || !Number.isFinite(ln)) return null;
  if (Math.abs(la) < 0.25 && Math.abs(ln) < 0.25) return null;
  return [la, ln];
}

export function communityPointHasMapCoords(p) {
  return communityPointLatLng(p) != null;
}
