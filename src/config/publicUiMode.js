/**
 * وضع واجهة «خدمات مجتمعية فقط» للجمهور.
 *
 * 1) وقت البناء: VITE_PUBLIC_COMMUNITY_ONLY_UI=true
 * 2) وقت التشغيل (يغلب الملف إن وُجد ونجح التحميل): /radar-public-config.json
 *    { "communityOnlyPublicUi": true }
 *
 * استخدم الملف على السيرفر إذا منصة النشر لا تمرّر متغيرات Vite بشكل صحيح.
 */

let communityOnlyPublicUi =
  typeof import.meta !== 'undefined' && import.meta.env && import.meta.env.VITE_PUBLIC_COMMUNITY_ONLY_UI === 'true';

let resolvePromise;

export function isCommunityOnlyPublicUi() {
  return communityOnlyPublicUi;
}

/**
 * يُستدعى مرة قبل تركيب React. يحدّث isCommunityOnlyPublicUi() من الشبكة إن أمكن.
 */
export async function resolvePublicUiMode() {
  if (resolvePromise) return resolvePromise;

  const envFallback =
    typeof import.meta !== 'undefined' && import.meta.env && import.meta.env.VITE_PUBLIC_COMMUNITY_ONLY_UI === 'true';
  communityOnlyPublicUi = envFallback;

  resolvePromise = (async () => {
    try {
      const ctrl = new AbortController();
      const tid = window.setTimeout(() => ctrl.abort(), 3000);
      const res = await fetch('/radar-public-config.json', {
        cache: 'no-store',
        credentials: 'same-origin',
        signal: ctrl.signal,
      });
      window.clearTimeout(tid);
      if (!res.ok) return;
      const data = await res.json();
      if (data && typeof data.communityOnlyPublicUi === 'boolean') {
        communityOnlyPublicUi = data.communityOnlyPublicUi;
      }
    } catch {
      communityOnlyPublicUi = envFallback;
    }
  })();

  await resolvePromise;
}
