import { useEffect, useRef } from 'react';
import { useBlocker } from 'react-router-dom';
import { useAlert } from './AlertProvider';
import { logout } from '../api/auth';

/** مسارات الدخول/التسجيل/التحقق — الرجوع إليها من الصفحة الرئيسية وهو مسجّل يتطلب تأكيد */
const AUTH_BACK_PATHS = new Set(['/login', '/register', '/verify-whatsapp']);

/**
 * داخل صفحة Home فقط: زر الرجوع (المتصفح / أندرويد / إلخ) نحو صفحات الدخول أو التسجيل
 * يُعطّل الانتقال ويُظهر تأكيد تسجيل الخروج. يعتمد على data router (useBlocker).
 */
export function HomeBackGuard() {
  const { showConfirm } = useAlert();
  const blocker = useBlocker(({ nextLocation }) => {
    const token = localStorage.getItem('token');
    if (!token || localStorage.getItem('isGuest') === 'true') return false;
    return AUTH_BACK_PATHS.has(nextLocation.pathname);
  });

  const busy = useRef(false);

  useEffect(() => {
    if (blocker.state !== 'blocked') return;
    if (busy.current) return;
    busy.current = true;

    (async () => {
      try {
        const ok = await showConfirm('هل تريد تسجيل الخروج؟', 'تأكيد');
        if (ok) {
          logout();
          blocker.proceed();
        } else {
          blocker.reset();
        }
      } finally {
        busy.current = false;
      }
    })();
  }, [blocker.state, blocker, showConfirm]);

  return null;
}
