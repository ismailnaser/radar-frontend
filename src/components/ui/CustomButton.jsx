import React, { useState } from 'react';
import { useAlert } from '../AlertProvider';
import { formatApiError } from '../../utils/apiErrors';
import { DEFAULT_CONFIRM_MESSAGE } from '../../utils/confirmDefaults';

/**
 * @param {boolean|string} [confirm] — false لإلغاء التأكيد؛ نص مخصص؛ غير معرّف أو true = رسالة افتراضية
 * @param {string} [successMessage] — تُعرض بعد نجاح onClick إن وُجدت
 */
const CustomButton = ({
  children,
  onClick,
  type = 'button',
  variant = 'primary',
  loading = false,
  disabled = false,
  icon,
  style = {},
  confirm,
  confirmTitle = 'تأكيد',
  successMessage,
  successTitle = 'تم',
  errorFallback = 'تعذرت العملية.',
  showErrorAlert = true,
  ...props
}) => {
  const { showConfirm, showAlert } = useAlert();
  const [innerBusy, setInnerBusy] = useState(false);
  const busy = loading || innerBusy;

  const resolveConfirmMessage = () => {
    if (confirm === false) return null;
    if (typeof confirm === 'string' && confirm.trim()) return confirm.trim();
    return DEFAULT_CONFIRM_MESSAGE;
  };

  const handleClick = async (e) => {
    const msg = resolveConfirmMessage();

    if (type === 'submit') {
      const form = e.currentTarget?.form;
      const submitForm = () => {
        if (!form) return;
        if (typeof form.checkValidity === 'function' && !form.checkValidity()) {
          form.reportValidity();
          return;
        }
        if (typeof form.requestSubmit === 'function') {
          form.requestSubmit();
        } else {
          const ev = new Event('submit', { bubbles: true, cancelable: true });
          const notPrevented = form.dispatchEvent(ev);
          if (notPrevented) {
            form.submit();
          }
        }
      };

      if (msg) {
        e.preventDefault();
        const ok = await showConfirm(msg, confirmTitle);
        if (!ok) return;
        submitForm();
        return;
      }

      // بدون تأكيد: يجب استدعاء requestSubmit يدوياً لأن onClick قد يمنع وصول submit إلى React في بعض الحالات
      e.preventDefault();
      submitForm();
      return;
    }

    if (!onClick) return;

    if (msg) {
      const ok = await showConfirm(msg, confirmTitle);
      if (!ok) return;
    }

    setInnerBusy(true);
    try {
      await Promise.resolve(onClick(e));
      if (successMessage) {
        await showAlert(successMessage, successTitle);
      }
    } catch (err) {
      if (showErrorAlert) {
        await showAlert(formatApiError(err, errorFallback), 'خطأ');
      }
    } finally {
      setInnerBusy(false);
    }
  };

  return (
    <button
      type={type}
      onClick={handleClick}
      className={`btn-${variant} ${busy ? 'loading' : ''}`}
      disabled={disabled || busy}
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '10px',
        ...style,
      }}
      {...props}
    >
      {busy ? (
        <span className="spinner"></span>
      ) : (
        <>
          {icon && <span className="btn-icon">{icon}</span>}
          {children}
        </>
      )}

      <style dangerouslySetInnerHTML={{ __html: `
        .spinner {
          width: 22px;
          height: 22px;
          border: 2px solid rgba(26, 29, 38, 0.2);
          border-top-color: var(--secondary);
          border-radius: 50%;
          animation: spin 0.8s linear infinite;
        }
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
        .btn-primary.loading {
          background: linear-gradient(180deg, var(--primary-muted) 0%, var(--primary) 100%);
          opacity: 0.92;
        }
        .btn-danger { background: #FF5252; color: #fff; border: none; border-radius: var(--radius-pill); }
        .btn-danger:hover { background: #e53935; }
      `}} />
    </button>
  );
};

export default CustomButton;
