/** تحويل الأرقام العربية/الفارسية إلى لاتينية ثم استخراج الأرقام فقط */
export function normalizePhoneDigits(raw) {
  if (raw == null || raw === '') return '';
  const mapAr = '٠١٢٣٤٥٦٧٨٩';
  const mapFa = '۰۱۲۳۴۵۶۷۸۹';
  const lat = '0123456789';
  let out = '';
  for (const ch of String(raw)) {
    let i = mapAr.indexOf(ch);
    if (i >= 0) {
      out += lat[i];
      continue;
    }
    i = mapFa.indexOf(ch);
    if (i >= 0) {
      out += lat[i];
      continue;
    }
    out += ch;
  }
  return out.replace(/\D/g, '');
}

/**
 * رابط wa.me من النص المخزّن؛ متوافق مع منطق الخادم (بما فيها 05… → 970…).
 * @returns {string|null}
 */
export function whatsappMeUrlFromStoredNumber(raw) {
  let d = normalizePhoneDigits(raw);
  if (!d) return null;
  if (d.length === 10 && d[0] === '0' && d[1] === '5') {
    d = `970${d.slice(1)}`;
  } else if (d.length === 9 && d[0] === '5') {
    d = `970${d}`;
  }
  if (d.length < 8) return null;
  return `https://wa.me/${d}`;
}
