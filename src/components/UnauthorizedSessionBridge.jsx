import { useEffect, useRef } from 'react';
import { registerUnauthorizedLogoutConfirm } from '../api/auth';
import { useAlert } from './AlertProvider';

/**
 * يربط axios (401) بنفس نمط تأكيد تسجيل الخروج في الواجهة،
 * حتى لا يُفرغ التوكن ويُعاد التوجيه تلقائياً دون سؤال المستخدم (مثلاً بعد زر الرجوع على الموبايل).
 */
export function UnauthorizedSessionBridge() {
  const { showConfirm } = useAlert();
  const showConfirmRef = useRef(showConfirm);
  showConfirmRef.current = showConfirm;

  useEffect(() => {
    registerUnauthorizedLogoutConfirm(async () =>
      showConfirmRef.current(
        'تم قطع الجلسة أو انتهت صلاحية الدخول (أحياناً بعد الرجوع في المتصفح). هل تريد الانتقال إلى صفحة تسجيل الدخول؟',
        'تسجيل الخروج'
      )
    );
    return () => registerUnauthorizedLogoutConfirm(null);
  }, []);

  return null;
}
