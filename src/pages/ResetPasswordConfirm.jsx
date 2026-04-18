import React, { useMemo, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import MainLayout from '../components/MainLayout';
import { useAlert } from '../components/AlertProvider';
import { formatApiError } from '../utils/apiErrors';
import CustomButton from '../components/ui/CustomButton';
import { confirmPasswordReset } from '../api/auth';

/** صفحة تأكيد إعادة التعيين — المسار: `/password-reset/confirm/:uid/:token`؛ uid و token من useParams. */
export default function ResetPasswordConfirm() {
  const { uid, token } = useParams();
  const navigate = useNavigate();
  const { showAlert } = useAlert();

  const [p1, setP1] = useState('');
  const [p2, setP2] = useState('');
  const [busy, setBusy] = useState(false);

  const canSubmit = useMemo(() => {
    if (!uid || !token) return false;
    if (!p1 || !p2) return false;
    if (p1.length < 8) return false;
    if (p1 !== p2) return false;
    return true;
  }, [uid, token, p1, p2]);

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!uid || !token) {
      await showAlert('رابط إعادة التعيين غير صالح.', 'خطأ');
      return;
    }
    if (!p1 || p1.length < 8) {
      await showAlert('كلمة المرور يجب أن تكون 8 أحرف على الأقل.', 'تنبيه');
      return;
    }
    if (p1 !== p2) {
      await showAlert('كلمتا المرور غير متطابقتين.', 'تنبيه');
      return;
    }
    setBusy(true);
    try {
      await confirmPasswordReset({
        uid,
        token,
        new_password1: p1,
        new_password2: p2,
      });
      await showAlert('تم تغيير كلمة المرور بنجاح. يمكنك تسجيل الدخول الآن.', 'تم');
      navigate('/login', { replace: true });
    } catch (err) {
      await showAlert(formatApiError(err, 'تعذر تغيير كلمة المرور. حاول لاحقاً.'), 'خطأ');
    } finally {
      setBusy(false);
    }
  };

  return (
    <MainLayout>
      <div className="auth-page" dir="rtl">
        <div className="auth-card" style={{ maxWidth: 420 }}>
          <h1 className="auth-title" style={{ marginBottom: 6 }}>إعادة تعيين كلمة المرور</h1>
          <p className="auth-sub" style={{ marginTop: 0 }}>
            أدخل كلمة المرور الجديدة.
          </p>

          <form onSubmit={onSubmit}>
            <input
              className="auth-input"
              type="password"
              value={p1}
              onChange={(e) => setP1(e.target.value)}
              placeholder="كلمة المرور الجديدة"
              autoComplete="new-password"
              required
              style={{
                width: '100%',
                height: 46,
                borderRadius: 14,
                border: '1px solid rgba(232, 230, 224, 0.95)',
                padding: '0 12px',
                fontFamily: 'inherit',
                outline: 'none',
                background: 'rgba(255,255,255,0.95)',
                marginBottom: 10,
              }}
            />
            <input
              className="auth-input"
              type="password"
              value={p2}
              onChange={(e) => setP2(e.target.value)}
              placeholder="تأكيد كلمة المرور"
              autoComplete="new-password"
              required
              style={{
                width: '100%',
                height: 46,
                borderRadius: 14,
                border: '1px solid rgba(232, 230, 224, 0.95)',
                padding: '0 12px',
                fontFamily: 'inherit',
                outline: 'none',
                background: 'rgba(255,255,255,0.95)',
                marginBottom: 10,
              }}
            />

            <CustomButton
              type="submit"
              loading={busy}
              disabled={!canSubmit}
              style={{ width: '100%' }}
              confirm={false}
              showErrorAlert={false}
            >
              حفظ
            </CustomButton>
          </form>

          <p className="auth-footer-link" style={{ marginTop: 14 }}>
            <Link to="/login">العودة لتسجيل الدخول</Link>
          </p>
        </div>
      </div>
    </MainLayout>
  );
}

