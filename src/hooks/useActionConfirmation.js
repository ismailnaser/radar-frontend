import { useCallback } from 'react';
import { useAlert } from '../components/AlertProvider';
import { formatApiError } from '../utils/apiErrors';
import { DEFAULT_CONFIRM_MESSAGE } from '../utils/confirmDefaults';

export { DEFAULT_CONFIRM_MESSAGE };

/**
 * تنفيذ إجراء مع اختياري: تأكيد → تشغيل → رسالة نجاح أو فشل.
 */
export function useActionConfirmation() {
  const { showConfirm, showAlert } = useAlert();

  return useCallback(
    async (
      action,
      {
        confirm: confirmOpt = true,
        confirmTitle = 'تأكيد',
        successMessage,
        successTitle = 'تم',
        errorFallback = 'تعذرت العملية.',
        showErrorAlert = true,
      } = {}
    ) => {
      if (confirmOpt !== false) {
        const msg =
          typeof confirmOpt === 'string' && confirmOpt.trim()
            ? confirmOpt.trim()
            : DEFAULT_CONFIRM_MESSAGE;
        const ok = await showConfirm(msg, confirmTitle);
        if (!ok) return { cancelled: true };
      }
      try {
        const result = await action();
        if (successMessage) {
          await showAlert(successMessage, successTitle);
        }
        return { ok: true, result };
      } catch (err) {
        if (showErrorAlert) {
          await showAlert(formatApiError(err, errorFallback), 'خطأ');
        }
        return { ok: false, error: err };
      }
    },
    [showConfirm, showAlert]
  );
}
