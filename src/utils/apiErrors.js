/** استخراج رسالة خطأ مقروءة من استجابة DRF أو شبكة */

export function formatApiError(err, fallback = 'حدث خطأ غير متوقع.') {
  const status = err?.response?.status;
  const d = err?.response?.data;
  if (!d) {
    if (err?.message === 'Network Error') return 'تعذر الاتصال بالخدمة حالياً. حاول مرة أخرى.';
    return fallback;
  }
  if (status >= 500) return 'حدث خطأ في الخادم. حاول مرة أخرى لاحقاً.';
  if (status === 404) return 'العنصر غير موجود أو لم يعد متاحاً.';
  if (status === 403) return 'لا تملك صلاحية تنفيذ هذا الإجراء.';
  if (status === 401) return 'يرجى تسجيل الدخول للمتابعة.';
  if (typeof d.error === 'string' && d.error.trim()) return d.error.trim();
  if (typeof d.detail === 'string' && d.detail.trim()) return d.detail.trim();
  if (Array.isArray(d.detail)) return d.detail.map(String).join(' — ');
  if (d.non_field_errors?.length) return String(d.non_field_errors[0]);
  try {
    const flat = Object.values(d)
      .flat()
      .filter((x) => x != null && String(x).trim())
      .map(String);
    if (flat.length) return flat.join(' — ');
  } catch {
    /* ignore */
  }
  return fallback;
}
