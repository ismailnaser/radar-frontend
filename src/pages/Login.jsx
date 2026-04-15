import React, { useEffect, useState } from 'react';
import { User, Lock, Eye, EyeOff, MapPin } from 'lucide-react';
import { Link, useLocation, useNavigate, useSearchParams } from 'react-router-dom';
import { login } from '../api/auth';
import MainLayout from '../components/MainLayout';
import CustomInput from '../components/ui/CustomInput';
import CustomButton from '../components/ui/CustomButton';
import { useAlert } from '../components/AlertProvider';
import { formatApiError } from '../utils/apiErrors';
import { loadRememberedLogin, saveRememberedLogin } from '../utils/rememberLogin';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { showAlert } = useAlert();
  const location = useLocation();
  const [searchParams] = useSearchParams();

  const nextUrl = (() => {
    const raw = searchParams.get('next');
    if (!raw) return '/';
    // only allow relative in-app navigation
    return raw.startsWith('/') ? raw : '/';
  })();

  useEffect(() => {
    const saved = loadRememberedLogin();
    if (saved.rememberMe) {
      setUsername(saved.username);
      setPassword(saved.password);
      setRememberMe(true);
    }
  }, []);

  useEffect(() => {
    const msg = location.state?.flash;
    if (msg) {
      showAlert(String(msg), 'تنبيه').catch(() => {});
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const continueAsGuest = async () => {
    localStorage.removeItem('token');
    localStorage.removeItem('refresh');
    localStorage.removeItem('user_type');
    localStorage.removeItem('user_name');
    localStorage.removeItem('is_verified');
    localStorage.setItem('isGuest', 'true');
    navigate('/', { replace: true });
    await showAlert('أنت الآن في وضع الزائر.', 'تم');
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      await login(username.trim(), password);
      saveRememberedLogin({
        username: username.trim(),
        password,
        rememberMe,
      });
      await showAlert('تم تسجيل الدخول بنجاح.', 'تم');
      navigate(nextUrl || '/', { replace: true });
    } catch (err) {
      console.error('Login error:', err);
      const status = err?.response?.status;
      const network = err?.message === 'Network Error' || !err?.response;
      if (status >= 500 || network) {
        setError('');
        await showAlert(formatApiError(err, 'تعذر تسجيل الدخول حالياً. حاول لاحقاً.'), 'خطأ');
      } else {
        setError('اسم المستخدم أو كلمة المرور غير صحيحة.');
        await showAlert('بيانات الدخول غير صحيحة، يرجى التحقق من اسم المستخدم وكلمة المرور.', 'فشل');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <MainLayout>
      <div className="auth-page">
        <div className="auth-card" style={{ maxWidth: 420 }}>
          <div className="auth-chip">
            <MapPin size={18} strokeWidth={2.25} aria-hidden />
            رادار — محلاتك القريبة على الخريطة
          </div>

          <img className="auth-logo" src="/logo.png" alt="رادار" />

          <h1 className="auth-title">مرحباً بعودتك</h1>
          <p className="auth-sub">سجّل الدخول لمزامنة سلتك والعروض والمفضلة.</p>

          {error && (
            <p style={{ color: '#c62828', fontSize: '0.85rem', marginBottom: '12px', fontWeight: 700 }}>{error}</p>
          )}

          <form onSubmit={handleLogin}>
            <CustomInput
              icon={<User size={18} strokeWidth={2} />}
              placeholder="اسم المستخدم"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />

            <div className="auth-password-field">
              <CustomInput
                icon={<Lock size={18} strokeWidth={2} />}
                type={showPassword ? 'text' : 'password'}
                placeholder="كلمة المرور"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
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
              title="حفظ اسم المستخدم وكلمة المرور محلياً على هذا الجهاز لتعبئتهما تلقائياً لاحقاً"
            >
              <span className="auth-remember__txt">تذكرني</span>
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
              />
            </label>

            <CustomButton
              type="submit"
              loading={loading}
              style={{ width: '100%', marginTop: '4px' }}
              confirm={false}
              showErrorAlert={false}
            >
              تسجيل الدخول
            </CustomButton>
          </form>

          <p className="auth-footer-link">
            لا تملك حساباً؟ <Link to={`/register?next=${encodeURIComponent(nextUrl || '/')}`}>إنشاء حساب</Link>
          </p>

          <button type="button" className="btn-ghost auth-guest-btn" onClick={continueAsGuest}>
            التصفّح كزائر
          </button>
        </div>

        <style dangerouslySetInnerHTML={{ __html: `
          .auth-guest-btn {
            width: 100%;
            margin-top: 14px;
            font-family: inherit;
            font-size: 0.92rem;
          }
        `}} />
      </div>
    </MainLayout>
  );
};

export default Login;
