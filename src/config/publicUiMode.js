/**
 * وضع واجهة «خدمات مجتمعية فقط» للجمهور (بدون تغيير قاعدة البيانات).
 * فعّل عبر: VITE_PUBLIC_COMMUNITY_ONLY_UI=true ثم إعادة بناء الواجهة.
 */
export function isCommunityOnlyPublicUi() {
  try {
    return import.meta.env.VITE_PUBLIC_COMMUNITY_ONLY_UI === 'true';
  } catch {
    return false;
  }
}
