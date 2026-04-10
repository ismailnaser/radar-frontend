/**
 * قراءة موقع GPS/الجهاز مع تحسين تدريجي: watchPosition يجمع عدة نقاط ويأخذ الأدق.
 * - maximumAge: 0 يمنع إرجاع موقع قديم مخزّن بعيد عن مكانك الحالي.
 * - على أجهزة بدون GPS (كثير من أجهزة سطح المكتب) الدقة غالباً ضعيفة (شبكة أو IP).
 */
export function getRefinedGeolocationPosition({
  maxWaitMs = 20000,
  goodEnoughM = 95,
} = {}) {
  return new Promise((resolve, reject) => {
    if (!navigator.geolocation) {
      reject(new Error('unsupported'));
      return;
    }

    let best = null;
    let finished = false;
    let watchId = null;

    const finish = (err) => {
      if (finished) return;
      finished = true;
      if (watchId != null) navigator.geolocation.clearWatch(watchId);
      clearTimeout(timer);
      if (best) {
        resolve(best);
        return;
      }
      if (err) reject(err);
      else reject(new Error('no fix'));
    };

    watchId = navigator.geolocation.watchPosition(
      (pos) => {
        const accRaw = pos.coords.accuracy;
        const accuracy = Number.isFinite(accRaw) ? accRaw : 999999;
        const cur = {
          latitude: pos.coords.latitude,
          longitude: pos.coords.longitude,
          accuracy,
        };
        if (!best || accuracy < best.accuracy) best = cur;
        if (accuracy <= goodEnoughM) {
          finish(null);
        }
      },
      (err) => {
        if (err && err.code === 1) {
          finish(err);
        }
      },
      { enableHighAccuracy: true, maximumAge: 0 }
    );

    const timer = setTimeout(() => finish(null), maxWaitMs);
  });
}

/**
 * نسخة أسرع لتحميل الصفحة الأولى (قراءة واحدة حديثة قدر الإمكان).
 */
export function getQuickGeolocationPosition({ timeoutMs = 10000 } = {}) {
  return new Promise((resolve, reject) => {
    if (!navigator.geolocation) {
      reject(new Error('unsupported'));
      return;
    }
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        resolve({
          latitude: pos.coords.latitude,
          longitude: pos.coords.longitude,
          accuracy: pos.coords.accuracy ?? 999999,
        });
      },
      reject,
      { enableHighAccuracy: true, maximumAge: 0, timeout: timeoutMs }
    );
  });
}
