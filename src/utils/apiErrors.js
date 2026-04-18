/** استخراج رسالة خطأ مقروءة وآمنة للمستخدم — بدون تفاصيل تقنية (Django، قاعدة البيانات، إلخ). */

/** كلمات/أنماط تشير لتفريغ تقني أو رسالة غير مخصصة للمستخدم */
const TECH_LEAK_PATTERNS = [
  /\bdjango\b/i,
  /\bmigrate\b/i,
  /\bmigration\b/i,
  /\btraceback\b/i,
  /\bbackend\b/i,
  /\bpostgres(ql)?\b/i,
  /\bsqlite\b/i,
  /\bintegrityerror\b/i,
  /\boperationalerror\b/i,
  /\bprogrammingerror\b/i,
  /\bdatabase\b/i,
  /\bqueryset\b/i,
  /\bexception\b/i,
  /\bfile\s*["']/i,
  /\bline\s+\d+\b/i,
  /\bsettings\.py\b/i,
  /\bwsgi\b/i,
  /\basgi\b/i,
  /\bgunicorn\b/i,
  /\buvicorn\b/i,
  /\bwhitenoise\b/i,
  /\bredis\b/i,
  /\bcelery\b/i,
  /\bserver\s+error\b/i,
  /\b500\s*\(/i,
  /\b<!doctype\b/i,
  /<html[\s>]/i,
  /<body[\s>]/i,
];

function looksLikeTechnicalLeak(text) {
  if (!text || typeof text !== 'string') return true;
  const s = text.trim();
  if (s.length > 420) return true;
  if (/[\x00-\x08\x0b\x0c\x0e-\x1f]/.test(s)) return true;
  return TECH_LEAK_PATTERNS.some((re) => re.test(s));
}

/**
 * يبقي رسائل التحقق القصيرة (عربي/إنجليزي عادي) ويحجب الباقي.
 * @returns {string|null} نص آمن أو null لاستخدام fallback
 */
function sanitizeUserFacingMessage(raw) {
  if (raw == null) return null;
  const s = String(raw).trim();
  if (!s) return null;
  if (looksLikeTechnicalLeak(s)) return null;
  return s;
}

/**
 * @param {unknown} err — خطأ axios أو عام
 * @param {string} fallback — رسالة عربية موحّدة عند عدم إمكانية عرض سبب آمن
 */
export function formatApiError(err, fallback = 'تعذر إكمال العملية. حاول مرة أخرى.') {
  const status = err?.response?.status;
  const d = err?.response?.data;

  if (!d) {
    if (err?.message === 'Network Error') {
      return 'تعذر الاتصال بالخدمة. تحقق من الشبكة وحاول مرة أخرى.';
    }
    return fallback;
  }

  if (status >= 500) {
    return 'حدث خطأ في الخدمة. حاول لاحقاً.';
  }
  if (status === 404) {
    return 'المحتوى غير متوفر أو لم يعد موجوداً.';
  }
  if (status === 403) {
    return 'لا تملك صلاحية تنفيذ هذا الإجراء.';
  }
  if (status === 401) {
    return 'يرجى تسجيل الدخول للمتابعة.';
  }
  if (status === 429) {
    const msg = typeof d.error === 'string' && d.error.trim() ? d.error.trim() : null;
    const safe = sanitizeUserFacingMessage(msg);
    if (safe) return safe;
    return 'تجاوزت عدد المحاولات المسموح. حاول لاحقاً.';
  }

  let candidate = null;
  if (typeof d.error === 'string' && d.error.trim()) candidate = d.error.trim();
  else if (typeof d.detail === 'string' && d.detail.trim()) candidate = d.detail.trim();
  else if (Array.isArray(d.detail)) candidate = d.detail.map(String).join(' — ');
  else if (d.non_field_errors?.length) candidate = String(d.non_field_errors[0]);
  else {
    try {
      const flat = Object.values(d)
        .flat()
        .filter((x) => x != null && String(x).trim())
        .map(String);
      if (flat.length) candidate = flat.join(' — ');
    } catch {
      /* ignore */
    }
  }

  const safe = sanitizeUserFacingMessage(candidate);
  if (safe) return safe;

  if (status === 400 || status === 422) {
    return 'تعذر إكمال العملية. راجع البيانات وحاول مجدداً.';
  }

  return fallback;
}
