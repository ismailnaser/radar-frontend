/**
 * هل عند المتجر جدول أسبوعي بفترات start/end صالحة؟
 * بدون ذلك لا نعرض «مفتوح/مغلق» ونعرض «لا يوجد مواعيد عمل محددة».
 */
export function storeHasWeeklyHoursSchedule(weekly) {
  if (!weekly || typeof weekly !== 'object') return false;
  for (let i = 0; i < 7; i++) {
    const day = weekly[String(i)] ?? weekly[i];
    if (!Array.isArray(day)) continue;
    for (const it of day) {
      if (!it || typeof it !== 'object') continue;
      const st = String(it.start ?? '').trim();
      const en = String(it.end ?? '').trim();
      if (st && en) return true;
    }
  }
  return false;
}
