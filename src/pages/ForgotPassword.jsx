import React, { useState } from 'react';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import MainLayout from '../components/MainLayout';
import { useAlert } from '../components/AlertProvider';
import { formatApiError } from '../utils/apiErrors';
import CustomButton from '../components/ui/CustomButton';
import { requestPasswordResetEmail } from '../api/auth';

export default function ForgotPassword() {
  const { showAlert } = useAlert();
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [busy, setBusy] = useState(false);

  const nextUrl = (() => {
    const raw = searchParams.get('next');
    if (!raw) return '/';
    return raw.startsWith('/') ? raw : '/';
  })();

  const onSubmit = async (e) => {
    e.preventDefault();
    const v = (email || '').trim().toLowerCase();
    if (!v || !v.includes('@')) {
      await showAlert('أدخل بريد إلكتروني صحيح.', 'تنبيه');
      return;
    }
    setBusy(true);
    try {
      await requestPasswordResetEmail(v);
      await showAlert('تم إرسال رابط إعادة تعيين كلمة المرور إلى بريدك الإلكتروني.', 'تم');
      navigate(`/login?next=${encodeURIComponent(nextUrl)}`, { replace: true });
    } catch (err) {
      await showAlert(formatApiError(err, 'تعذر إرسال البريد حالياً. حاول لاحقاً.'), 'خطأ');
    } finally {
      setBusy(false);
    }
  };

  return (
    <MainLayout>
      <div className="auth-page" dir="rtl">
        <div className="auth-card" style={{ maxWidth: 420 }}>
          <h1 className="auth-title" style={{ marginBottom: 6 }}>نسيت كلمة المرور؟</h1>
          <p className="auth-sub" style={{ marginTop: 0 }}>
            اكتب بريدك الإلكتروني وسنرسل لك رابطاً لإعادة تعيين كلمة المرور.
          </p>

          <form onSubmit={onSubmit}>
            <input
              className="auth-input"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="البريد الإلكتروني"
              autoComplete="email"
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
              style={{ width: '100%' }}
              confirm={false}
              showErrorAlert={false}
            >
              إرسال رابط إعادة التعيين
            </CustomButton>
          </form>

          <p className="auth-footer-link" style={{ marginTop: 14 }}>
            تذكرت كلمة المرور؟{' '}
            <Link to={`/login?next=${encodeURIComponent(nextUrl)}`}>تسجيل الدخول</Link>
          </p>
        </div>
      </div>
    </MainLayout>
  );
}

