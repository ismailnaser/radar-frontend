import React, { useEffect, useMemo, useState } from 'react';
import { MapContainer, Marker, Popup } from 'react-leaflet';
import { Lock, Eye, EyeOff, User, Store, MapPin } from 'lucide-react';
import { Link, useLocation, useNavigate, useSearchParams } from 'react-router-dom';
import { register, login, loginWithGoogleIdToken } from '../api/auth';
import { getCategories } from '../api/data';
import MainLayout from '../components/MainLayout';
import CustomInput from '../components/ui/CustomInput';
import CustomButton from '../components/ui/CustomButton';
import { useAlert } from '../components/AlertProvider';
import BasemapLayersControl from '../components/maps/BasemapLayersControl';
import LeafletInvalidateOnLayout from '../components/maps/LeafletInvalidateOnLayout';
import { MapClickPicker } from '../components/maps/ShopperMap';
import MapFlyToPosition from '../components/maps/MapFlyToPosition';
import '../components/maps/leafletIconFix';
import { getRefinedGeolocationPosition } from '../utils/geolocation';
import { formatApiError } from '../utils/apiErrors';
import { loadRememberedLogin, saveRememberedLogin } from '../utils/rememberLogin';
import GoogleLoginButton from '../components/GoogleLoginButton';

const REGISTER_MAP_DEFAULT_CENTER = [31.5, 34.4];

/** ترتيب أقسام التاجر في القائمة؛ __CLOTHES__ = ملابس ثم اختيار نسائي/رجالي/أطفال */
const MERCHANT_MAIN_ORDER = [
  'ميني مول',
  'سوبر ماركت',
  'خضار و فواكه',
  'ملحمة',
  'حلويات',
  'مطعم',
  'كافيه',
  'مساحات عمل',
  'صيدلية',
  'أدوات منزلية',
  'أدوات كهربائية',
  'إلكترونيات',
  'أدوات بناء',
  '__CLOTHES__',
  'أحذية',
  'كوزماتكس',
];

const CLOTHING_LABELS = [
  { value: 'نسائي', label: 'ملابس نسائي' },
  { value: 'رجالي', label: 'ملابس رجالي' },
  { value: 'أطفال', label: 'ملابس أطفال' },
];

function resolveMerchantCategoryId(categories, mainKey, clothingValue) {
  const byName = (name) => categories.find((c) => c.name === name)?.id ?? null;
  if (mainKey === '__CLOTHES__') {
    const map = { نسائي: 'ملابس نسائي', رجالي: 'ملابس رجالي', أطفال: 'ملابس أطفال' };
    const dbName = map[clothingValue];
    return dbName ? byName(dbName) : null;
  }
  return mainKey ? byName(mainKey) : null;
}

const Register = () => {
  const [accountType, setAccountType] = useState('shopper');
  const [showPassword, setShowPassword] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [storeName, setStoreName] = useState('');
  const [merchantMain, setMerchantMain] = useState('');
  const [clothingSub, setClothingSub] = useState('نسائي');
  const [locationAddress, setLocationAddress] = useState('');
  const [merchantMapPick, setMerchantMapPick] = useState(null);
  const [registerMapExpanded, setRegisterMapExpanded] = useState(false);
  const [registerMapLocating, setRegisterMapLocating] = useState(false);
  const [categories, setCategories] = useState([]);
  const [categoriesLoading, setCategoriesLoading] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
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

  const merchantMapCenter = useMemo(
    () => (merchantMapPick && merchantMapPick.length === 2 ? merchantMapPick : REGISTER_MAP_DEFAULT_CENTER),
    [merchantMapPick]
  );

  useEffect(() => {
    const saved = loadRememberedLogin();
    if (saved.rememberMe) {
      setUsername(saved.username);
      setPassword(saved.password);
      setRememberMe(true);
    }
  }, []);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      setCategoriesLoading(true);
      try {
        const list = await getCategories();
        if (!cancelled) setCategories(Array.isArray(list) ? list : []);
      } catch {
        if (!cancelled) setCategories([]);
      } finally {
        if (!cancelled) setCategoriesLoading(false);
      }
    })();
    return () => {
      cancelled = true;
    };
  }, []);

  const merchantCategoryId = useMemo(
    () => resolveMerchantCategoryId(categories, merchantMain, clothingSub),
    [categories, merchantMain, clothingSub]
  );

  const whenMerchantChange = (next) => {
    setAccountType(next);
    if (next === 'shopper') {
      setStoreName('');
      setMerchantMain('');
      setClothingSub('نسائي');
      setLocationAddress('');
      setMerchantMapPick(null);
      setRegisterMapExpanded(false);
    }
  };

  const useMerchantMapGps = async () => {
    if (!navigator.geolocation) {
      await showAlert('المتصفح لا يدعم تحديد الموقع.', 'تنبيه');
      return;
    }
    setRegisterMapLocating(true);
    try {
      const r = await getRefinedGeolocationPosition({ maxWaitMs: 18000, goodEnoughM: 150 });
      setMerchantMapPick([r.latitude, r.longitude]);
    } catch {
      await showAlert('تعذر تحديد موقعك الحالي. جرّب النقر على الخريطة يدوياً.', 'الموقع');
    } finally {
      setRegisterMapLocating(false);
    }
  };

  const selectStyle = {
    width: '100%',
    padding: '0.85rem 1rem',
    borderRadius: 'var(--radius-md)',
    border: '1.5px solid var(--border)',
    background: 'var(--surface)',
    fontSize: '0.95rem',
    textAlign: 'right',
    marginBottom: '1.2rem',
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    const uNorm = String(username || '').trim();
    if (uNorm.length < 6) {
      setError('اسم المستخدم يجب أن يكون 6 أحرف على الأقل.');
      setLoading(false);
      return;
    }
    // تحقق سريع لقوة كلمة المرور (التحقق النهائي في الباك إند عبر Django validators)
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

    if (accountType === 'merchant') {
      if (!storeName.trim()) {
        setError('أدخل اسم المتجر.');
        setLoading(false);
        return;
      }
      if (!merchantMain) {
        setError('اختر نوع المتجر (القسم).');
        setLoading(false);
        return;
      }
      if (!merchantCategoryId) {
        setError(
          categoriesLoading || categories.length === 0
            ? 'تعذر تحميل الأقسام. تأكد من تشغيل الخادم وتشغيل الترحيلات (migrate).'
            : 'القسم المحدد غير متوفر في النظام. حدّث الصفحة أو راجع الأدمن.'
        );
        setLoading(false);
        return;
      }
      if (!locationAddress.trim()) {
        setError('أدخل عنوان المتجر أو وصف الموقع نصاً (يظهر لاحقاً في صفحة المتجر).');
        setLoading(false);
        return;
      }
    }

    try {
      const payload = {
        username: uNorm,
        user_type: accountType,
        password,
      };
      if (accountType === 'merchant') {
        payload.store_name = storeName.trim();
        payload.category = merchantCategoryId;
        payload.location_address = locationAddress.trim();
        if (merchantMapPick && merchantMapPick.length === 2) {
          payload.store_latitude = merchantMapPick[0];
          payload.store_longitude = merchantMapPick[1];
        }
      }

      const regData = await register(payload);
      if (accountType === 'merchant' && regData?.merchant_subscription_notice) {
        await showAlert(regData.merchant_subscription_notice, 'ملاحظة الاشتراك');
      }
      await login(username.trim(), password);
      saveRememberedLogin({
        username: username.trim(),
        password,
        rememberMe,
      });
      await showAlert('تم إنشاء الحساب وتسجيل الدخول بنجاح.', 'تم');
      navigate(nextUrl || '/', { replace: true });
    } catch (err) {
      const msg = formatApiError(err, 'تعذر إنشاء الحساب. حاول مرة أخرى.');
      setError(msg);
      await showAlert(msg, 'فشل');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleCredential = async (credential) => {
    setLoading(true);
    setError('');
    try {
      await loginWithGoogleIdToken(credential);
      saveRememberedLogin({
        username: '',
        password: '',
        rememberMe,
      });
      await showAlert('تم تسجيل الدخول عبر Google بنجاح.', 'تم');
      navigate(nextUrl || '/', { replace: true });
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
    localStorage.removeItem('is_verified');
    localStorage.removeItem('is_primary_admin');
    localStorage.setItem('isGuest', 'true');
    navigate('/', { replace: true });
    await showAlert('أنت الآن في وضع الزائر.', 'تم');
  };

  const cardMaxWidth = accountType === 'merchant' ? 480 : 420;

  return (
    <MainLayout>
      <div className="auth-page">
        <div className="auth-card" style={{ maxWidth: cardMaxWidth }}>
          <img className="auth-logo" src="/logo.png" alt="رادار" />

          <h1 className="auth-title" style={{ marginBottom: '6px' }}>
            إنشاء حساب
          </h1>
          <p className="auth-sub" style={{ marginBottom: '1rem' }}>
            انضم كمتسوق أو افتح متجرك على رادار.
          </p>

          <div className="type-toggle" role="tablist" aria-label="نوع الحساب">
            <button
              type="button"
              role="tab"
              aria-selected={accountType === 'shopper'}
              className={`type-item ${accountType === 'shopper' ? 'active' : ''}`}
              onClick={() => whenMerchantChange('shopper')}
            >
              <span className="type-item__icon" aria-hidden>
                <User size={22} strokeWidth={2} />
              </span>
              <span className="type-item__label">متسوق</span>
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={accountType === 'merchant'}
              className={`type-item ${accountType === 'merchant' ? 'active' : ''}`}
              onClick={() => whenMerchantChange('merchant')}
            >
              <span className="type-item__icon" aria-hidden>
                <Store size={22} strokeWidth={2} />
              </span>
              <span className="type-item__label">تاجر</span>
            </button>
          </div>

          {error && (
            <p style={{ color: '#c62828', fontSize: '0.85rem', marginBottom: '12px', fontWeight: 700 }}>{error}</p>
          )}

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
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
              />
            </label>

            {accountType === 'merchant' && (
              <>
                <CustomInput
                  icon={<Store size={18} />}
                  placeholder="اسم المتجر"
                  value={storeName}
                  onChange={(e) => setStoreName(e.target.value)}
                  required
                />

                <div
                  style={{
                    marginBottom: 10,
                    textAlign: 'right',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 8,
                    fontWeight: 800,
                    fontSize: '0.9rem',
                    justifyContent: 'flex-end',
                  }}
                >
                  <MapPin size={18} aria-hidden />
                  عنوان / موقع المتجر (نص تفصيلي)
                </div>
                <textarea
                  value={locationAddress}
                  onChange={(e) => setLocationAddress(e.target.value)}
                  placeholder="مثال: غزة — الرمال، بجوار… / شارع… (يُعرض للمتسوّقين بجانب وصف المتجر؛ منفصل عن النقطة على الخريطة)"
                  required
                  rows={3}
                  style={{
                    width: '100%',
                    padding: '0.85rem 1rem',
                    borderRadius: 'var(--radius-md)',
                    border: '1.5px solid var(--border)',
                    background: 'var(--surface)',
                    marginBottom: '1.2rem',
                    fontFamily: 'inherit',
                    fontSize: '0.95rem',
                    resize: 'vertical',
                  }}
                />

                <div className="register-merchant-map">
                  <div className="register-merchant-map__head">
                    <MapPin size={18} aria-hidden />
                    <span className="register-merchant-map__title">موقع المتجر على الخريطة</span>
                    <span className="register-merchant-map__optional">اختياري</span>
                  </div>
                  <p className="register-merchant-map__hint">
                    انقر على الخريطة لوضع دبوس المتجر، أو استخدم «موقعي الحالي»، أو تجاوز الخطوة وحدّث الموقع لاحقاً من إعدادات
                    المتجر.
                  </p>
                  <div className="register-merchant-map__toolbar">
                    <button
                      type="button"
                      className="register-merchant-map__mini-btn"
                      disabled={registerMapLocating}
                      onClick={useMerchantMapGps}
                    >
                      {registerMapLocating ? 'جاري الموقع…' : 'موقعي الحالي'}
                    </button>
                    {merchantMapPick ? (
                      <button
                        type="button"
                        className="register-merchant-map__mini-btn register-merchant-map__mini-btn--ghost"
                        onClick={() => setMerchantMapPick(null)}
                      >
                        إزالة النقطة
                      </button>
                    ) : null}
                    {merchantMapPick ? (
                      <span className="register-merchant-map__coords" dir="ltr">
                        {merchantMapPick[0].toFixed(5)} ، {merchantMapPick[1].toFixed(5)}
                      </span>
                    ) : null}
                  </div>
                  <div className="register-merchant-map__frame">
                    <button
                      type="button"
                      className="register-merchant-map__expand-fab"
                      onClick={() => setRegisterMapExpanded(true)}
                      aria-label="توسيع الخريطة"
                      title="توسيع الخريطة"
                    >
                      توسيع
                    </button>
                    <MapContainer
                      center={merchantMapCenter}
                      zoom={14}
                      minZoom={10}
                      maxZoom={19}
                      scrollWheelZoom
                      style={{ height: 'clamp(220px, 48dvh, 360px)', width: '100%' }}
                    >
                      <BasemapLayersControl />
                      <LeafletInvalidateOnLayout />
                      <MapFlyToPosition position={merchantMapPick} />
                      <MapClickPicker onPick={(lat, lng) => setMerchantMapPick([lat, lng])} />
                      {merchantMapPick ? (
                        <Marker position={merchantMapPick}>
                          <Popup>موقع المتجر المقترح</Popup>
                        </Marker>
                      ) : null}
                    </MapContainer>
                  </div>
                </div>

                <div style={{ marginBottom: 4, textAlign: 'right', fontWeight: 700, fontSize: '0.9rem' }}>
                  نوع المتجر (القسم)
                </div>
                <select
                  aria-label="نوع المتجر"
                  value={merchantMain}
                  onChange={(e) => setMerchantMain(e.target.value)}
                  style={selectStyle}
                  required
                  disabled={categoriesLoading}
                >
                  <option value="">— اختر القسم —</option>
                  {MERCHANT_MAIN_ORDER.map((key) => (
                    <option key={key} value={key}>
                      {key === '__CLOTHES__' ? 'ملابس' : key}
                    </option>
                  ))}
                </select>

                {merchantMain === '__CLOTHES__' && (
                  <>
                    <div style={{ marginBottom: 4, textAlign: 'right', fontWeight: 700, fontSize: '0.9rem' }}>
                      نوع الملابس
                    </div>
                    <select
                      aria-label="نوع الملابس"
                      value={clothingSub}
                      onChange={(e) => setClothingSub(e.target.value)}
                      style={selectStyle}
                    >
                      {CLOTHING_LABELS.map((o) => (
                        <option key={o.value} value={o.value}>
                          {o.label}
                        </option>
                      ))}
                    </select>
                  </>
                )}

                {categoriesLoading ? (
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', textAlign: 'right' }}>
                    جاري تحميل الأقسام...
                  </p>
                ) : null}
              </>
            )}

            <CustomButton
              type="submit"
              loading={loading}
              style={{ width: '100%', marginTop: '10px' }}
              confirm={false}
              showErrorAlert={false}
            >
              سجل الآن
            </CustomButton>

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

            <GoogleLoginButton onCredential={handleGoogleCredential} disabled={loading} />
          </form>

          <p className="auth-footer-link">
            لديك حساب بالفعل؟ <Link to={`/login?next=${encodeURIComponent(nextUrl || '/')}`}>تسجيل الدخول</Link>
          </p>
        </div>

        {registerMapExpanded ? (
          <div
            role="dialog"
            aria-modal="true"
            aria-label="تحديد موقع المتجر على الخريطة"
            className="register-map-modal-backdrop"
            onClick={() => setRegisterMapExpanded(false)}
          >
            <div className="register-map-modal" onClick={(e) => e.stopPropagation()}>
              <div className="register-map-modal__bar">
                <button
                  type="button"
                  className="register-map-modal__btn register-map-modal__btn--primary"
                  onClick={() => setRegisterMapExpanded(false)}
                >
                  تم
                </button>
                <button
                  type="button"
                  className="register-map-modal__btn register-map-modal__btn--ghost"
                  disabled={registerMapLocating}
                  onClick={useMerchantMapGps}
                >
                  {registerMapLocating ? '…' : 'موقعي'}
                </button>
                <button
                  type="button"
                  className="register-map-modal__btn register-map-modal__btn--close"
                  onClick={() => setRegisterMapExpanded(false)}
                  aria-label="إغلاق"
                >
                  ×
                </button>
              </div>
              <div className="register-map-modal__map">
                <MapContainer
                  center={merchantMapCenter}
                  zoom={15}
                  minZoom={10}
                  maxZoom={19}
                  scrollWheelZoom
                  style={{ height: '100%', width: '100%' }}
                >
                  <BasemapLayersControl />
                  <LeafletInvalidateOnLayout />
                  <MapFlyToPosition position={merchantMapPick} zoom={16} />
                  <MapClickPicker onPick={(lat, lng) => setMerchantMapPick([lat, lng])} />
                  {merchantMapPick ? (
                    <Marker position={merchantMapPick}>
                      <Popup>موقع المتجر</Popup>
                    </Marker>
                  ) : null}
                </MapContainer>
              </div>
            </div>
          </div>
        ) : null}

        <style
          dangerouslySetInnerHTML={{
            __html: `
          .register-merchant-map {
            margin-bottom: 1.25rem;
            padding: 12px 12px 14px;
            border-radius: 16px;
            border: 1.5px solid rgba(232, 230, 224, 0.95);
            background: linear-gradient(180deg, rgba(255,255,255,0.98) 0%, rgba(255,252,238,0.35) 100%);
            box-shadow: 0 6px 20px rgba(26, 29, 38, 0.05);
          }
          .register-merchant-map__head {
            display: flex;
            align-items: center;
            gap: 8px;
            flex-wrap: wrap;
            margin-bottom: 8px;
            font-weight: 900;
            color: var(--secondary);
            font-size: 0.92rem;
          }
          .register-merchant-map__title { flex: 1; min-width: 0; text-align: right; }
          .register-merchant-map__optional {
            font-size: 0.78rem;
            font-weight: 800;
            padding: 3px 10px;
            border-radius: 999px;
            background: rgba(245, 192, 0, 0.22);
            color: var(--secondary);
            border: 1px solid rgba(245, 192, 0, 0.4);
          }
          .register-merchant-map__hint {
            margin: 0 0 10px;
            font-size: 0.84rem;
            line-height: 1.55;
            color: var(--text-secondary);
            text-align: right;
          }
          .register-merchant-map__toolbar {
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            gap: 8px;
            margin-bottom: 10px;
          }
          .register-merchant-map__mini-btn {
            appearance: none;
            border: 1.5px solid rgba(232, 230, 224, 0.95);
            background: var(--white);
            color: var(--secondary);
            font-family: inherit;
            font-weight: 800;
            font-size: 0.82rem;
            padding: 8px 12px;
            border-radius: 999px;
            cursor: pointer;
            transition: border-color 0.15s ease, box-shadow 0.15s ease;
          }
          .register-merchant-map__mini-btn:hover:not(:disabled) {
            border-color: rgba(245, 192, 0, 0.55);
            box-shadow: var(--shadow-sm);
          }
          .register-merchant-map__mini-btn:disabled { opacity: 0.65; cursor: wait; }
          .register-merchant-map__mini-btn--ghost {
            background: transparent;
            border-style: dashed;
          }
          .register-merchant-map__coords {
            font-size: 0.8rem;
            font-weight: 800;
            color: var(--text-secondary);
            margin-inline-start: auto;
          }
          .register-merchant-map__frame {
            position: relative;
            border-radius: 14px;
            overflow: hidden;
            border: 1px solid rgba(232, 230, 224, 0.9);
          }
          .register-merchant-map__expand-fab {
            position: absolute;
            top: 10px;
            inset-inline-start: 10px;
            z-index: 500;
            pointer-events: auto;
            appearance: none;
            border: 1px solid rgba(245, 192, 0, 0.5);
            background: linear-gradient(145deg, var(--primary) 0%, var(--primary-hover) 100%);
            color: var(--secondary);
            font-family: inherit;
            font-weight: 900;
            font-size: 0.78rem;
            padding: 7px 12px;
            border-radius: 999px;
            cursor: pointer;
            box-shadow: var(--shadow-gold);
          }
          .register-merchant-map__expand-fab:hover {
            filter: brightness(1.03);
          }
          .register-map-modal-backdrop {
            position: fixed;
            inset: 0;
            z-index: 6000;
            background: rgba(14, 16, 20, 0.58);
            backdrop-filter: blur(8px);
            -webkit-backdrop-filter: blur(8px);
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 12px;
          }
          .register-map-modal {
            position: relative;
            width: min(560px, 100%);
            height: min(88dvh, calc(100dvh - 48px));
            background: var(--white);
            border-radius: 22px;
            overflow: hidden;
            border: 1px solid rgba(232, 230, 224, 0.95);
            box-shadow: 0 24px 60px rgba(26, 29, 38, 0.2);
            display: flex;
            flex-direction: column;
          }
          .register-map-modal__bar {
            display: flex;
            align-items: center;
            gap: 8px;
            padding: 10px 12px;
            border-bottom: 1px solid rgba(232, 230, 224, 0.9);
            background: linear-gradient(180deg, #fff 0%, #fffef8 100%);
            flex-shrink: 0;
          }
          .register-map-modal__btn {
            appearance: none;
            font-family: inherit;
            font-weight: 900;
            font-size: 0.86rem;
            padding: 9px 14px;
            border-radius: 999px;
            cursor: pointer;
            border: 1.5px solid transparent;
          }
          .register-map-modal__btn--primary {
            border-color: rgba(245, 192, 0, 0.55);
            background: linear-gradient(145deg, var(--primary) 0%, var(--primary-hover) 100%);
            color: var(--secondary);
            box-shadow: var(--shadow-gold);
          }
          .register-map-modal__btn--ghost {
            border-color: var(--border);
            background: var(--white);
            color: var(--secondary);
          }
          .register-map-modal__btn--close {
            margin-inline-start: auto;
            width: 40px;
            height: 40px;
            padding: 0;
            border-radius: 12px;
            border: 1px solid var(--border);
            background: var(--surface);
            font-size: 1.35rem;
            line-height: 1;
            color: var(--secondary);
          }
          .register-map-modal__map {
            flex: 1;
            min-height: 0;
            position: relative;
          }
        `,
          }}
        />
      </div>
    </MainLayout>
  );
};

export default Register;
