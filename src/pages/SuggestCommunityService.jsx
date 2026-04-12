import React, { useEffect, useMemo, useState } from 'react';
import { getRefinedGeolocationPosition } from '../utils/geolocation';
import { Link, useNavigate } from 'react-router-dom';
import { MapContainer, Marker, Popup } from 'react-leaflet';
import MainLayout from '../components/MainLayout';
import { adminCreateCommunityPoint, getCommunityCategories, submitCommunityPoint } from '../api/data';
import { useAlert } from '../components/AlertProvider';
import { formatApiError } from '../utils/apiErrors';
import BasemapLayersControl from '../components/maps/BasemapLayersControl';
import LeafletInvalidateOnLayout from '../components/maps/LeafletInvalidateOnLayout';
import { MapClickPicker } from '../components/maps/ShopperMap';
import MapFlyToPosition from '../components/maps/MapFlyToPosition';
import '../components/maps/leafletIconFix';
import CustomButton from '../components/ui/CustomButton';

const DEFAULT_CENTER = [31.5, 34.4];

const SuggestCommunityService = () => {
  const navigate = useNavigate();
  const { showAlert } = useAlert();
  const userType = localStorage.getItem('user_type') || 'shopper';
  const isAdmin = userType === 'admin';
  const [categories, setCategories] = useState([]);
  const [loadingCats, setLoadingCats] = useState(true);
  const [categoryId, setCategoryId] = useState('');
  const [title, setTitle] = useState('');
  const [detailDescription, setDetailDescription] = useState('');
  const [addressText, setAddressText] = useState('');
  const [pick, setPick] = useState(null);
  const [waterPotable, setWaterPotable] = useState('');
  const [institutionScope, setInstitutionScope] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [locating, setLocating] = useState(false);
  const [mapExpanded, setMapExpanded] = useState(false);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        const data = await getCommunityCategories();
        if (!cancelled) setCategories(Array.isArray(data) ? data : []);
      } catch {
        if (!cancelled) setCategories([]);
      } finally {
        if (!cancelled) setLoadingCats(false);
      }
    })();
    return () => {
      cancelled = true;
    };
  }, []);

  const selectedCat = useMemo(
    () => categories.find((c) => String(c.id) === String(categoryId)),
    [categories, categoryId]
  );
  const slug = selectedCat?.slug || '';

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!categoryId) {
      await showAlert('اختر القسم.', 'تنبيه');
      return;
    }
    if (!title.trim() || !detailDescription.trim() || !addressText.trim()) {
      await showAlert('عنوان الخدمة والوصف التفصيلي والعنوان النصي مطلوبة.', 'تنبيه');
      return;
    }
    if (!pick || pick.length !== 2) {
      await showAlert('انقر على الخريطة لتحديد موقع النقطة.', 'تنبيه');
      return;
    }
    const payload = {
      category: Number(categoryId),
      title: title.trim(),
      detail_description: detailDescription.trim(),
      latitude: pick[0],
      longitude: pick[1],
      address_text: addressText.trim(),
    };
    if (slug === 'water') {
      if (waterPotable !== 'true' && waterPotable !== 'false') {
        await showAlert('حدد هل المياه صالحة للشرب.', 'تنبيه');
        return;
      }
      payload.water_is_potable = waterPotable === 'true';
    } else {
      payload.water_is_potable = null;
    }
    if (slug === 'institution') {
      if (!['local', 'international', 'charity'].includes(institutionScope)) {
        await showAlert('اختر نطاق المؤسسة (محلية / عالمية / خيرية).', 'تنبيه');
        return;
      }
      payload.institution_scope = institutionScope;
    } else {
      payload.institution_scope = '';
    }

    setSubmitting(true);
    try {
      if (isAdmin) {
        await adminCreateCommunityPoint(payload);
        await showAlert('تمت إضافة النقطة مباشرة (كمدير).', 'تم');
      } else {
        await submitCommunityPoint(payload);
        await showAlert('تم إرسال الطلب. سيظهر على الخريطة بعد موافقة الإدارة.', 'تم');
      }
      navigate('/services');
    } catch (err) {
      await showAlert(formatApiError(err, 'تعذر إرسال الطلب.'), 'فشل');
    } finally {
      setSubmitting(false);
    }
  };

  const mapCenter = pick || DEFAULT_CENTER;

  const useMyLocationOnMap = async () => {
    if (!navigator.geolocation) {
      await showAlert('المتصفح لا يدعم تحديد الموقع.', 'تنبيه');
      return;
    }
    setLocating(true);
    try {
      const r = await getRefinedGeolocationPosition({ maxWaitMs: 22000, goodEnoughM: 110 });
      setPick([r.latitude, r.longitude]);
      const acc = r.accuracy;
      if (acc != null && acc > 1200) {
        await showAlert(
          `تم وضع الدبوس على موقعك. الدقة تقريبية (~${Math.round(acc)} م). على الكمبيوتر غالباً لا يوجد GPS؛ للدقة استخدم الهاتف أو انقر الموقع يدوياً على الخريطة.`,
          'موقع تقريبي'
        );
      } else {
        await showAlert('تم ضبط الدبوس على موقعك الحالي.', 'تم');
      }
    } catch {
      await showAlert(
        'لم نتمكن من تحديد موقعك. تأكد من السماح بالوصول للموقع في المتصفح أو حاول لاحقاً.',
        'الموقع'
      );
    } finally {
      setLocating(false);
    }
  };

  return (
    <MainLayout>
      <div
        className="services-page"
        style={{
          maxWidth: 1240,
          marginInline: 'auto',
          paddingInline: 'clamp(8px, 2.2vw, 22px)',
          paddingBottom: 32,
          boxSizing: 'border-box',
        }}
      >
        <p style={{ marginBottom: 16 }}>
          <Link to="/services" style={{ fontWeight: 700, color: 'var(--secondary)' }}>
            ← الخدمات المجتمعية
          </Link>
        </p>
        <h1>اقتراح نقطة خدمة مجتمعية</h1>
        <p style={{ lineHeight: 1.65, color: '#555' }}>
          املأ التفاصيل وحدد الموقع على الخريطة.
          {isAdmin ? ' سيتم إضافة النقطة مباشرة.' : ' الطلب يُراجع من الإدارة قبل الظهور للجميع.'}
        </p>

        {loadingCats ? (
          <p>جاري تحميل الأقسام…</p>
        ) : (
          <form onSubmit={handleSubmit} className="card" style={{ padding: 'clamp(16px, 4vw, 22px)', marginTop: 20 }}>
            <label style={{ display: 'block', fontWeight: 800, marginBottom: 8 }}>القسم</label>
            <select
              value={categoryId}
              onChange={(e) => {
                setCategoryId(e.target.value);
                setWaterPotable('');
                setInstitutionScope('');
              }}
              style={{ width: '100%', padding: 10, borderRadius: 10, marginBottom: 16 }}
              required
            >
              <option value="">— اختر —</option>
              {categories.map((c) => (
                <option key={c.id} value={c.id}>
                  {c.name}
                </option>
              ))}
            </select>
            {selectedCat?.description_hint ? (
              <p style={{ fontSize: '0.88rem', color: '#666', marginTop: -8, marginBottom: 16 }}>
                {selectedCat.description_hint}
              </p>
            ) : null}

            {slug === 'water' ? (
              <div style={{ marginBottom: 16 }}>
                <div style={{ fontWeight: 800, marginBottom: 8 }}>المياه</div>
                <label style={{ display: 'flex', gap: 8, alignItems: 'center', marginBottom: 6 }}>
                  <input
                    type="radio"
                    name="wp"
                    checked={waterPotable === 'true'}
                    onChange={() => setWaterPotable('true')}
                  />
                  صالحة للشرب
                </label>
                <label style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
                  <input
                    type="radio"
                    name="wp"
                    checked={waterPotable === 'false'}
                    onChange={() => setWaterPotable('false')}
                  />
                  غير صالحة للشرب
                </label>
              </div>
            ) : null}

            {slug === 'institution' ? (
              <div style={{ marginBottom: 16 }}>
                <label style={{ display: 'block', fontWeight: 800, marginBottom: 8 }}>نطاق المؤسسة</label>
                <select
                  value={institutionScope}
                  onChange={(e) => setInstitutionScope(e.target.value)}
                  style={{ width: '100%', padding: 10, borderRadius: 10 }}
                  required={slug === 'institution'}
                >
                  <option value="">— اختر —</option>
                  <option value="local">محلية</option>
                  <option value="international">عالمية</option>
                  <option value="charity">خيرية</option>
                </select>
              </div>
            ) : null}

            <label style={{ display: 'block', fontWeight: 800, marginBottom: 8 }}>عنوان / اسم النقطة</label>
            <input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              style={{ width: '100%', padding: 10, borderRadius: 10, marginBottom: 16 }}
              maxLength={220}
              required
            />

            <label style={{ display: 'block', fontWeight: 800, marginBottom: 8 }}>وصف تفصيلي للخدمة</label>
            <textarea
              value={detailDescription}
              onChange={(e) => setDetailDescription(e.target.value)}
              rows={5}
              style={{ width: '100%', padding: 10, borderRadius: 10, marginBottom: 16, resize: 'vertical' }}
              required
            />

            <label style={{ display: 'block', fontWeight: 800, marginBottom: 8 }}>الموقع النصي التفصيلي</label>
            <textarea
              value={addressText}
              onChange={(e) => setAddressText(e.target.value)}
              rows={3}
              style={{ width: '100%', padding: 10, borderRadius: 10, marginBottom: 16, resize: 'vertical' }}
              required
            />

            <div style={{ fontWeight: 800, marginBottom: 8 }}>الموقع على الخريطة</div>
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: 10,
                alignItems: 'center',
                marginBottom: 10,
              }}
            >
              <CustomButton
                type="button"
                variant="secondary"
                loading={locating}
                onClick={useMyLocationOnMap}
                style={{ width: 'auto' }}
                confirm={false}
                showErrorAlert={false}
              >
                موقعي الحالي
              </CustomButton>
              <span style={{ fontSize: '0.88rem', color: '#666' }}>
                أو انقر على الخريطة لوضع الدبوس يدوياً.
                {pick ? ` الإحداثيات: ${pick[0].toFixed(5)}, ${pick[1].toFixed(5)}` : ''}
              </span>
            </div>
            <div className="card" style={{ padding: 0, overflow: 'hidden', marginBottom: 20 }}>
              <button
                type="button"
                onClick={() => setMapExpanded(true)}
                aria-label="تكبير الخريطة لتحديد الموقع"
                title="اضغط لتكبير الخريطة"
                style={{
                  width: '100%',
                  padding: 0,
                  border: 'none',
                  background: 'transparent',
                  cursor: 'zoom-in',
                  display: 'block',
                  textAlign: 'inherit',
                }}
              >
                <MapContainer
                  center={mapCenter}
                  zoom={14}
                  minZoom={10}
                  maxZoom={19}
                  scrollWheelZoom
                  style={{ height: 'clamp(260px, 48dvh, 360px)', width: '100%' }}
                >
                  <BasemapLayersControl />
                  <LeafletInvalidateOnLayout />
                  <MapFlyToPosition position={pick} />
                  <MapClickPicker onPick={(lat, lng) => setPick([lat, lng])} />
                  {pick ? (
                    <Marker position={pick}>
                      <Popup>موقع النقطة المقترحة</Popup>
                    </Marker>
                  ) : null}
                </MapContainer>
              </button>
            </div>

            {mapExpanded ? (
              <div
                role="dialog"
                aria-modal="true"
                aria-label="خريطة تحديد الموقع"
                onClick={() => setMapExpanded(false)}
                style={{
                  position: 'fixed',
                  inset: 0,
                  zIndex: 6000,
                  background: 'rgba(14, 16, 20, 0.62)',
                  backdropFilter: 'blur(10px)',
                  WebkitBackdropFilter: 'blur(10px)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: 14,
                }}
              >
                <div
                  className="card"
                  onClick={(e) => e.stopPropagation()}
                  style={{
                    position: 'relative',
                    width: 'min(520px, 96vw)',
                    height: 'min(86dvh, calc(100dvh - 48px))',
                    padding: 0,
                    overflow: 'hidden',
                    borderRadius: 26,
                  }}
                >
                  <button
                    type="button"
                    onClick={() => {
                      if (!pick || pick.length !== 2) {
                        showAlert('انقر على الخريطة لتحديد الموقع أولاً.', 'تنبيه');
                        return;
                      }
                      setMapExpanded(false);
                    }}
                    aria-label="تأكيد الموقع"
                    title="تأكيد الموقع"
                    style={{
                      position: 'absolute',
                      top: 10,
                      insetInlineStart: 10,
                      zIndex: 2500,
                      pointerEvents: 'auto',
                      height: 44,
                      padding: '0 14px',
                      borderRadius: 999,
                      border: '1px solid rgba(245, 192, 0, 0.55)',
                      background: 'linear-gradient(145deg, var(--primary) 0%, var(--primary-hover) 100%)',
                      boxShadow: 'var(--shadow-gold)',
                      color: 'var(--secondary)',
                      cursor: 'pointer',
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontWeight: 950,
                      fontSize: '0.92rem',
                    }}
                  >
                    تأكيد الموقع
                  </button>
                  <button
                    type="button"
                    onClick={() => setMapExpanded(false)}
                    aria-label="إغلاق"
                    title="إغلاق"
                    style={{
                      position: 'absolute',
                      top: 10,
                      left: '50%',
                      transform: 'translateX(-50%)',
                      zIndex: 2500,
                      pointerEvents: 'auto',
                      width: 44,
                      height: 44,
                      borderRadius: 999,
                      border: '1px solid rgba(245, 192, 0, 0.55)',
                      background: 'linear-gradient(145deg, var(--primary) 0%, var(--primary-hover) 100%)',
                      boxShadow: 'var(--shadow-gold)',
                      color: 'var(--secondary)',
                      cursor: 'pointer',
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontWeight: 900,
                    }}
                  >
                    ×
                  </button>

                  <MapContainer
                    center={mapCenter}
                    zoom={15}
                    minZoom={10}
                    maxZoom={19}
                    scrollWheelZoom
                    style={{ height: '100%', width: '100%' }}
                  >
                    <BasemapLayersControl />
                    <LeafletInvalidateOnLayout />
                    <MapFlyToPosition position={pick} />
                    <MapClickPicker onPick={(lat, lng) => setPick([lat, lng])} />
                    {pick ? (
                      <Marker position={pick}>
                        <Popup>موقع النقطة المقترحة</Popup>
                      </Marker>
                    ) : null}
                  </MapContainer>
                </div>
              </div>
            ) : null}

            <CustomButton
              type="submit"
              loading={submitting}
              style={{ width: '100%' }}
              confirm={false}
              showErrorAlert={false}
            >
              {isAdmin ? 'إضافة النقطة' : 'إرسال الطلب للمراجعة'}
            </CustomButton>
          </form>
        )}
      </div>
    </MainLayout>
  );
};

export default SuggestCommunityService;
