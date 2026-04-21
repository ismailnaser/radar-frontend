import React, { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { Store, MapPin } from 'lucide-react';
import MainLayout from '../../components/MainLayout';
import CustomInput from '../../components/ui/CustomInput';
import CustomButton from '../../components/ui/CustomButton';
import FiltersDropdown from '../../components/ui/FiltersDropdown';
import MerchantLocationPicker from '../../components/maps/MerchantLocationPicker';
import { useAlert } from '../../components/AlertProvider';
import { getCategories, getMerchantStoreProfile, updateMerchantStoreProfile } from '../../api/data';
import { formatApiError } from '../../utils/apiErrors';

function normalizeOptionalCoords(lat, lng) {
  const latN = Number(lat);
  const lngN = Number(lng);
  if (!Number.isFinite(latN) || !Number.isFinite(lngN)) return null;
  // (0,0) or very close is almost always invalid here; treat as "no location selected".
  if (Math.abs(latN) < 0.25 && Math.abs(lngN) < 0.25) return null;
  return [latN, lngN];
}

const GAZA_BOUNDS = {
  minLat: 31.20,
  maxLat: 31.62,
  minLng: 34.15,
  maxLng: 34.62,
};

function isInsideGaza(lat, lng) {
  const la = Number(lat);
  const ln = Number(lng);
  if (!Number.isFinite(la) || !Number.isFinite(ln)) return false;
  return la >= GAZA_BOUNDS.minLat && la <= GAZA_BOUNDS.maxLat && ln >= GAZA_BOUNDS.minLng && ln <= GAZA_BOUNDS.maxLng;
}

export default function MerchantCompleteProfile() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const { showAlert } = useAlert();

  const nextUrl = (() => {
    const raw = searchParams.get('next');
    if (!raw) return '/merchant/dashboard';
    return raw.startsWith('/') ? raw : '/merchant/dashboard';
  })();

  useEffect(() => {
    if (localStorage.getItem('merchant_profile_complete') === 'true') {
      navigate(nextUrl || '/merchant/dashboard', { replace: true });
    }
  }, [navigate, nextUrl]);

  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [allCategories, setAllCategories] = useState([]);
  const [selectedCategoryIds, setSelectedCategoryIds] = useState([]);
  const [storeName, setStoreName] = useState('');
  const [locationAddress, setLocationAddress] = useState('');
  const [pickedLocation, setPickedLocation] = useState(null);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      setLoading(true);
      try {
        const [p, cats] = await Promise.all([getMerchantStoreProfile(), getCategories().catch(() => [])]);
        if (cancelled) return;
        setAllCategories(Array.isArray(cats) ? cats : []);
        setStoreName(p.store_name || '');
        setLocationAddress(p.location_address || '');
        const ids =
          Array.isArray(p.categories) && p.categories.length
            ? p.categories.map((x) => Number(x)).filter((x) => Number.isFinite(x))
            : p.category != null
              ? [Number(p.category)].filter((x) => Number.isFinite(x))
              : [];
        setSelectedCategoryIds(Array.from(new Set(ids)));
        const safeCoords = normalizeOptionalCoords(p.latitude, p.longitude);
        if (safeCoords) setPickedLocation(safeCoords);
      } catch (e) {
        if (!cancelled) {
          await showAlert(formatApiError(e, 'تعذر تحميل بيانات المتجر.'), 'خطأ');
        }
      } finally {
        if (!cancelled) setLoading(false);
      }
    })();
    return () => {
      cancelled = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();
    const name = (storeName || '').trim();
    const addr = (locationAddress || '').trim();
    if (name.length < 2) {
      await showAlert('أدخل اسماً واضحاً للمتجر.', 'تنبيه');
      return;
    }
    if (addr.length < 5) {
      await showAlert('أدخل عنواناً نصّياً تفصيلياً للمتجر (5 أحرف على الأقل).', 'تنبيه');
      return;
    }
    if (!selectedCategoryIds.length) {
      await showAlert('اختر قسماً واحداً على الأقل للمتجر (يمكن أكثر من قسم).', 'تنبيه');
      return;
    }

    const safeCoords = normalizeOptionalCoords(pickedLocation?.[0], pickedLocation?.[1]);
    const latToSave = safeCoords?.[0] ?? null;
    const lngToSave = safeCoords?.[1] ?? null;
    if (safeCoords && !isInsideGaza(latToSave, lngToSave)) {
      await showAlert('أنت بتحاول تضيف موقع خارج حدود قطاع غزة.', 'تنبيه');
      return;
    }

    setSaving(true);
    try {
      const data = await updateMerchantStoreProfile({
        store_name: name,
        location_address: addr,
        categories: selectedCategoryIds,
        latitude: latToSave,
        longitude: lngToSave,
      });
      const done = data?.merchant_profile_complete === true;
      localStorage.setItem('merchant_profile_complete', done ? 'true' : 'false');
      if (done) {
        await showAlert('تم حفظ بيانات المتجر. يمكنك الآن استخدام لوحة التاجر.', 'تم');
        navigate(nextUrl || '/merchant/dashboard', { replace: true });
      } else {
        await showAlert(
          'لم يكتمل الملف بعد. تأكد من العنوان التفصيلي واختيار قسم واحد على الأقل.',
          'تنبيه'
        );
      }
    } catch (err) {
      await showAlert(formatApiError(err, 'تعذر حفظ البيانات. حاول مرة أخرى.'), 'خطأ');
    } finally {
      setSaving(false);
    }
  };

  return (
    <MainLayout>
      <div
        className="merchant-settings"
        dir="rtl"
        style={{
          maxWidth: 720,
          marginInline: 'auto',
          paddingInline: 'clamp(8px, 2.2vw, 22px)',
          paddingBottom: 32,
          boxSizing: 'border-box',
        }}
      >
        <h1 style={{ marginBottom: 10, fontSize: '1.65rem' }}>إكمال بيانات المتجر</h1>
        <p style={{ marginTop: 0, marginBottom: 18, fontWeight: 800, color: 'var(--text-secondary)', lineHeight: 1.7 }}>
          هذه الخطوة مطلوبة قبل الدخول إلى لوحة التاجر. يمكنك اختيار أكثر من قسم للمتجر.
        </p>

        <div className="card">
          {loading ? (
            <div style={{ fontWeight: 800 }}>جاري التحميل...</div>
          ) : (
            <form onSubmit={onSubmit}>
              <CustomInput
                icon={<Store size={18} />}
                placeholder="اسم المتجر"
                value={storeName}
                onChange={(e) => setStoreName(e.target.value)}
                required
              />

              <div className="card" style={{ padding: 12, marginBottom: 12, background: 'rgba(255,255,255,0.65)' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 10 }}>
                  <div style={{ fontWeight: 950, color: 'var(--secondary)' }}>أقسام المتجر</div>
                  <FiltersDropdown
                    buttonLabel="فلاتر"
                    title="اختر أقسام متجرك (يمكن أكثر من قسم)"
                    allLabel="بدون فلترة"
                    options={(allCategories || []).map((c) => ({ id: c.id, label: c.name }))}
                    selectedIds={selectedCategoryIds}
                    onChangeSelectedIds={(ids) => setSelectedCategoryIds(Array.isArray(ids) ? ids : [])}
                  />
                </div>
                <div style={{ marginTop: 8, fontSize: '0.82rem', fontWeight: 800, color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                  اختر أكثر من قسم ليظهر متجرك ضمن أكثر من فلتر في البحث والخريطة.
                </div>
              </div>

              <div className="input-group">
                <div className="input-icon">
                  <MapPin size={18} />
                </div>
                <textarea
                  placeholder="عنوان / موقع المتجر نصاً (يظهر للمتسوّقين في البروفايل، منفصل عن الخريطة)"
                  value={locationAddress}
                  onChange={(e) => setLocationAddress(e.target.value)}
                  required
                  rows={4}
                  style={{
                    width: '100%',
                    padding: '0.85rem 1rem',
                    borderRadius: 'var(--radius-md)',
                    border: '1.5px solid var(--border)',
                    background: 'var(--surface)',
                    minHeight: 100,
                    resize: 'vertical',
                    fontFamily: 'inherit',
                  }}
                />
              </div>

              <div style={{ marginTop: 14 }}>
                <div style={{ fontWeight: 900, marginBottom: 8, color: 'var(--secondary)' }}>موقع المتجر على الخريطة (اختياري)</div>
                <MerchantLocationPicker value={pickedLocation} onChange={setPickedLocation} />
              </div>

              <div style={{ marginTop: 18 }}>
                <CustomButton type="submit" loading={saving} style={{ width: '100%' }} confirm={false} showErrorAlert={false}>
                  حفظ والمتابعة
                </CustomButton>
              </div>
            </form>
          )}
        </div>
      </div>
    </MainLayout>
  );
}
