import React, { useEffect, useState } from 'react';
import { Lock, Eye, EyeOff, User } from 'lucide-react';
import { Link, useLocation, useNavigate, useSearchParams } from 'react-router-dom';
import { register, login, loginWithGoogleIdToken } from '../api/auth';
import MainLayout from '../components/MainLayout';
import CustomInput from '../components/ui/CustomInput';
import CustomButton from '../components/ui/CustomButton';
import { useAlert } from '../components/AlertProvider';
import { formatApiError } from '../utils/apiErrors';
import { loadRememberedLogin, saveRememberedLogin } from '../utils/rememberLogin';
import GoogleLoginButton from '../components/GoogleLoginButton';

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [registerCooldownSec, setRegisterCooldownSec] = useState(null);
  const navigate = useNavigate();
  const { showAlert } = useAlert();
  const location = useLocation();
  const [searchParams] = useSearchParams();

  const nextUrl = (() => {
    const raw = searchParams.get('next');
    if (!raw) return '/';
    return raw.startsWith('/') ? raw : '/';
  })();

  useEffect(() => {
    const msg = location.state?.flash;
    if (msg) {
      showAlert(String(msg), 'تنبيه').catch(() => {});
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const saved = loadRememberedLogin();
    if (saved.rememberMe) {
      setUsername(saved.username);
      setPassword(saved.password);
      setRememberMe(true);
    }
  }, []);

  const registerCooldownActive = registerCooldownSec != null && registerCooldownSec > 0;
  useEffect(() => {
    if (!registerCooldownActive) return undefined;
    const id = window.setInterval(() => {
      setRegisterCooldownSec((s) => (s == null || s <= 1 ? null : s - 1));
    }, 1000);
    return () => window.clearInterval(id);
  }, [registerCooldownActive]);

  const navigateAfterAuth = () => {
    if (
      localStorage.getItem('user_type') === 'merchant' &&
      localStorage.getItem('merchant_profile_complete') !== 'true'
    ) {
      navigate(`/merchant/complete-profile?next=${encodeURIComponent(nextUrl || '/')}`, { replace: true });
      return;
    }
    navigate(nextUrl || '/', { replace: true });
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    if (registerCooldownSec != null && registerCooldownSec > 0) {
      return;
    }
    setLoading(true);
    setError('');

    const uNorm = String(username || '').trim();
    if (uNorm.length < 6) {
      setError('اسم المستخدم يجب أن يكون 6 أحرف على الأقل.');
      setLoading(false);
      return;
    }
    const pw = String(password || '');
    const strong =
      pw.length >= 8 &&
      /[a-z]/.test(pw) &&
      /[A-Z]/.test(pw) &&
      /\d/.test(pw) &&
      /[^A-Za-z0-9]/.test(pw);
    if (!strong) {
      setError('كلمة المرور ضعيفة: استخدم 8 أحرف على الأقل مع حرف كبير وصغير ورقم ورمز.');
      setLoading(false);
      return;
    }

    try {
      const payload = {
        username: uNorm,
        user_type: 'shopper',
        password,
      };
      await register(payload);
      await login(username.trim(), password);
      saveRememberedLogin({
        username: username.trim(),
        password,
        rememberMe,
      });
      await showAlert('تم إنشاء الحساب وتسجيل الدخول بنجاح.', 'تم');
      navigateAfterAuth();
    } catch (err) {
      if (err?.response?.status === 429) {
        const retry = err.response.data?.retry_after;
        const n = Number(retry);
        if (Number.isFinite(n) && n > 0) {
          setRegisterCooldownSec(Math.min(120, Math.ceil(n)));
        }
      }
      const msg = formatApiError(err, 'تعذر إنشاء الحساب. حاول مرة أخرى.');
      setError(msg);
      await showAlert(msg, err?.response?.status === 429 ? 'تجاوز الحد' : 'فشل');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleCredential = async (credential) => {
    setLoading(true);
    setError('');
    try {
      await loginWithGoogleIdToken(credential, { registerAsMerchant: false });
      saveRememberedLogin({
        username: '',
        password: '',
        rememberMe,
      });
      await showAlert('تم تسجيل الدخول عبر Google بنجاح.', 'تم');
      navigateAfterAuth();
    } catch (err) {
      const msg = formatApiError(err, 'تعذر تسجيل الدخول عبر Google.');
      setError(msg);
      await showAlert(msg, 'خطأ');
    } finally {
      setLoading(false);
    }
  };

  const handleGuestMode = async () => {
    localStorage.removeItem('token');
    localStorage.removeItem('refresh');
    localStorage.removeItem('user_type');
    localStorage.removeItem('user_name');
    localStorage.removeItem('user_email');
    localStorage.removeItem('merchant_profile_complete');
    localStorage.removeItem('is_verified');
    localStorage.removeItem('is_primary_admin');
    localStorage.setItem('isGuest', 'true');
    navigate('/', { replace: true });
    await showAlert('أنت الآن في وضع الزائر.', 'تم');
  };

  return (
    <MainLayout>
      <div className="auth-page">
        <div className="auth-card" style={{ maxWidth: 420 }}>
          <img className="auth-logo" src="/logo.png" alt="رادار" loading="lazy" width="160" height="160" />

          <h1 className="auth-title" style={{ marginBottom: '6px' }}>
            إنشاء حساب
          </h1>
          <p className="auth-sub" style={{ marginBottom: '1rem' }}>
            أنشئ حساباً للمشاركة في الخدمات المجتمعية والتصفّح على رادار.
          </p>

          {error && (
            <p style={{ color: '#c62828', fontSize: '0.85rem', marginBottom: '12px', fontWeight: 700 }}>{error}</p>
          )}

          {registerCooldownSec != null && registerCooldownSec > 0 ? (
            <p
              style={{
                color: 'var(--secondary)',
                fontSize: '0.9rem',
                marginBottom: '12px',
                fontWeight: 900,
                textAlign: 'center',
              }}
            >
              يمكنك إعادة المحاولة بعد{' '}
              <span dir="ltr" style={{ fontVariantNumeric: 'tabular-nums' }}>
                {registerCooldownSec}
              </span>{' '}
              ثانية
            </p>
          ) : null}

          <form onSubmit={handleRegister}>
            <CustomInput
              icon={<User size={18} />}
              placeholder="اسم المستخدم"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              minLength={6}
              required
            />

            <div className="auth-password-field">
              <CustomInput
                icon={<Lock size={18} strokeWidth={2} />}
                type={showPassword ? 'text' : 'password'}
                placeholder="كلمة المرور"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                minLength={8}
                required
              />
              <button
                type="button"
                className="auth-password-eye-btn"
                onClick={() => setShowPassword(!showPassword)}
                aria-label={showPassword ? 'إخفاء كلمة المرور' : 'إظهار كلمة المرور'}
                title={showPassword ? 'إخفاء' : 'إظهار'}
              >
                {showPassword ? <EyeOff size={18} strokeWidth={2} aria-hidden /> : <Eye size={18} strokeWidth={2} aria-hidden />}
              </button>
            </div>

            <label
              className="auth-remember"
              title="حفظ اسم المستخدم وكلمة المرور محلياً على هذا الجهاز بعد إنشاء الحساب"
            >
              <span className="auth-remember__txt">تذكرني</span>
              <input type="checkbox" checked={rememberMe} onChange={(e) => setRememberMe(e.target.checked)} />
            </label>

            <CustomButton
              type="submit"
              loading={loading}
              disabled={registerCooldownSec != null && registerCooldownSec > 0}
              style={{ width: '100%', marginTop: '10px' }}
              confirm={false}
              showErrorAlert={false}
            >
              سجل الآن
            </CustomButton>

            <GoogleLoginButton
              onCredential={handleGoogleCredential}
              disabled={loading}
              matchAuthButtonSize
              style={{ marginTop: 10 }}
            />
          </form>

          <div className="flex-center" style={{ margin: '15px 0' }}>
            <div style={{ flex: 1, height: '1px', background: '#eee' }} />
            <span style={{ padding: '0 10px', color: '#999', fontSize: '0.8rem' }}>أو</span>
            <div style={{ flex: 1, height: '1px', background: '#eee' }} />
          </div>

          <CustomButton
            variant="secondary"
            type="button"
            onClick={handleGuestMode}
            style={{ width: '100%' }}
            confirm={false}
            showErrorAlert={false}
          >
            تصفح كزائر
          </CustomButton>

          <p className="auth-footer-link">
            لديك حساب بالفعل؟ <Link to={`/login?next=${encodeURIComponent(nextUrl || '/')}`}>تسجيل الدخول</Link>
          </p>
        </div>
      </div>
    </MainLayout>
  );
};

export default Register;
