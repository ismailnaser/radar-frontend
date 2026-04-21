import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import MainLayout from '../../components/MainLayout';
import CustomInput from '../../components/ui/CustomInput';
import CustomButton from '../../components/ui/CustomButton';
import { useAlert } from '../../components/AlertProvider';
import { getCategories, getMerchantStoreProfile, updateMerchantStoreProfile } from '../../api/data';
import { formatApiError } from '../../utils/apiErrors';
import { Store, FileText, MapPin, Image as ImageIcon, MessageCircle, Clock, Sparkles } from 'lucide-react';
import MerchantLocationPicker from '../../components/maps/MerchantLocationPicker';
import FiltersDropdown from '../../components/ui/FiltersDropdown';

const WEEKDAY_LABELS = ['الأحد', 'الإثنين', 'الثلاثاء', 'الأربعاء', 'الخميس', 'الجمعة', 'السبت'];
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

const emptyWeeklyLines = () =>
  Array.from({ length: 7 }, () => ({
    start: '',
    end: '',
  }));

function weeklyFromApi(v) {
  const lines = emptyWeeklyLines();
  if (!v || typeof v !== 'object') return lines;
  for (let i = 0; i < 7; i++) {
    const arr = v[String(i)] ?? v[i];
    if (Array.isArray(arr) && arr.length > 0 && arr[0] && typeof arr[0] === 'object') {
      lines[i].start = String(arr[0].start || '').slice(0, 5);
      lines[i].end = String(arr[0].end || '').slice(0, 5);
    }
  }
  return lines;
}

function weeklyToApi(lines) {
  const o = {};
  for (let i = 0; i < 7; i++) {
    const st = (lines[i].start || '').trim();
    const en = (lines[i].end || '').trim();
    if (st && en) {
      o[String(i)] = [{ start: st, end: en }];
    } else {
      o[String(i)] = [];
    }
  }
  return o;
}

const MerchantStoreSettings = () => {
  const navigate = useNavigate();
  const { showAlert, showConfirm } = useAlert();
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState('');
  const [storeId, setStoreId] = useState(null);
  const [allCategories, setAllCategories] = useState([]);
  const [selectedCategoryIds, setSelectedCategoryIds] = useState([]);

  const [storeName, setStoreName] = useState('');
  const [description, setDescription] = useState('');
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');
  const [locationAddress, setLocationAddress] = useState('');
  const [pickedLocation, setPickedLocation] = useState(null);
  const [logoFile, setLogoFile] = useState(null);
  const [logoPreview, setLogoPreview] = useState(null);

  const [contactWhatsapp, setContactWhatsapp] = useState('');
  const [features, setFeatures] = useState(['']);
  const [businessHoursNote, setBusinessHoursNote] = useState('');
  const [weeklyLines, setWeeklyLines] = useState(emptyWeeklyLines);
  const [storeTimezone, setStoreTimezone] = useState('Asia/Gaza');

  useEffect(() => {
    const load = async () => {
      setError('');
      setLoading(true);
      try {
        const [p, cats] = await Promise.all([getMerchantStoreProfile(), getCategories().catch(() => [])]);
        setAllCategories(Array.isArray(cats) ? cats : []);
        setStoreId(p.id != null ? p.id : null);
        setStoreName(p.store_name || '');
        setDescription(p.description || '');
        setLatitude(p.latitude ?? '');
        setLongitude(p.longitude ?? '');
        setLocationAddress(p.location_address || '');
        setLogoPreview(p.logo || null);
        setLogoFile(null);
        setContactWhatsapp(p.contact_whatsapp || '');
        const rawFeats = Array.isArray(p.store_features) ? p.store_features.filter(Boolean) : [];
        setFeatures(rawFeats.length ? rawFeats : ['']);
        setBusinessHoursNote(p.business_hours_note || '');
        setWeeklyLines(weeklyFromApi(p.business_hours_weekly));
        setStoreTimezone((p.store_timezone || 'Asia/Gaza').trim() || 'Asia/Gaza');
        const ids =
          Array.isArray(p.categories) && p.categories.length
            ? p.categories.map((x) => Number(x)).filter((x) => Number.isFinite(x))
            : p.category != null
              ? [Number(p.category)].filter((x) => Number.isFinite(x))
              : [];
        setSelectedCategoryIds(Array.from(new Set(ids)));
        if (Number.isFinite(Number(p.latitude)) && Number.isFinite(Number(p.longitude))) {
          setPickedLocation([Number(p.latitude), Number(p.longitude)]);
        }
      } catch (e) {
        const status = e?.response?.status;
        const detail = e?.response?.data?.detail || e?.response?.data?.error;
        if (status === 401) {
          setError('الجلسة انتهت أو التوكن غير موجود. اعمل تسجيل خروج ثم تسجيل دخول كتاجر.');
        } else if (status === 403) {
          setError('هذا الحساب ليس تاجر (أو لا يملك صلاحية). تأكد من نوع الحساب merchant.');
        } else {
          setError(`تعذر تحميل بيانات المتجر. ${detail ? `(${detail})` : ''}`.trim());
        }
      } finally {
        setLoading(false);
      }
    };
    load();
  }, []);

  const buildCommonPayload = (latToSave, lngToSave) => {
    const featList = features.map((x) => String(x || '').trim()).filter(Boolean).slice(0, 10);
    return {
      store_name: storeName,
      description,
      categories: selectedCategoryIds,
      location_address: locationAddress || '',
      latitude: latToSave,
      longitude: lngToSave,
      contact_whatsapp: contactWhatsapp.trim(),
      store_features: featList,
      business_hours_note: businessHoursNote.trim(),
      business_hours_weekly: weeklyToApi(weeklyLines),
      store_timezone: storeTimezone.trim() || 'Asia/Gaza',
    };
  };

  const save = async (e) => {
    e.preventDefault();
    setSaving(true);
    try {
      const latToSave = pickedLocation?.[0] ?? (latitude === '' ? null : Number(latitude));
      const lngToSave = pickedLocation?.[1] ?? (longitude === '' ? null : Number(longitude));
      if ((latToSave != null || lngToSave != null) && !isInsideGaza(latToSave, lngToSave)) {
        await showAlert('أنت بتحاول تضيف موقع خارج حدود قطاع غزة.', 'تنبيه');
        setSaving(false);
        return;
      }
      const common = buildCommonPayload(latToSave, lngToSave);

      let data;
      if (logoFile) {
        const fd = new FormData();
        fd.append('store_name', common.store_name);
        fd.append('description', common.description || '');
        // DRF multipart expects repeated pk values for many-to-many fields, not a JSON string.
        (common.categories || []).forEach((catId) => {
          const n = Number(catId);
          if (Number.isFinite(n)) fd.append('categories', String(n));
        });
        fd.append('location_address', common.location_address);
        fd.append('contact_whatsapp', common.contact_whatsapp);
        fd.append('business_hours_note', common.business_hours_note);
        fd.append('store_timezone', common.store_timezone);
        fd.append('store_features', JSON.stringify(common.store_features));
        fd.append('business_hours_weekly', JSON.stringify(common.business_hours_weekly));
        if (latToSave != null && latToSave !== '') {
          fd.append('latitude', String(latToSave));
        }
        if (lngToSave != null && lngToSave !== '') {
          fd.append('longitude', String(lngToSave));
        }
        fd.append('logo', logoFile);
        data = fd;
      } else {
        data = common;
      }

      const result = await updateMerchantStoreProfile(data);
      if (result?.id != null) {
        setStoreId(result.id);
      }
      if (result?.logo) {
        setLogoPreview(result.logo);
      }
      setLogoFile(null);
      await showAlert('تم حفظ المعلومات بنجاح', 'تم');
      const sid = result?.id ?? storeId;
      if (sid != null) {
        navigate(`/stores/${sid}`);
      }
    } catch (err) {
      await showAlert(formatApiError(err, 'تعذر حفظ البيانات. حاول مرة أخرى.'), 'فشل');
    } finally {
      setSaving(false);
    }
  };

  const addFeatureRow = async () => {
    const ok = await showConfirm('إضافة حقل ميزة جديد؟', 'تأكيد');
    if (!ok) return;
    setFeatures((prev) => {
      if (prev.length >= 10) return prev;
      return [...prev, ''];
    });
    await showAlert('تمت إضافة حقل جديد.', 'تم');
  };

  const removeFeatureRow = async (idx) => {
    const ok = await showConfirm('حذف هذا السطر من مميزات المتجر؟', 'تأكيد');
    if (!ok) return;
    setFeatures((prev) => {
      const next = prev.filter((_, i) => i !== idx);
      return next.length ? next : [''];
    });
    await showAlert('تم حذف السطر.', 'تم');
  };

  return (
    <MainLayout>
      <div
        className="merchant-settings"
        style={{
          maxWidth: 1240,
          marginInline: 'auto',
          paddingInline: 'clamp(8px, 2.2vw, 22px)',
          paddingBottom: 32,
          boxSizing: 'border-box',
        }}
      >
        <h1 style={{ marginBottom: 14, fontSize: '1.8rem' }}>إعدادات المتجر</h1>

        <div className="card">
          {loading ? (
            <div>جاري التحميل...</div>
          ) : error ? (
            <div>
              <p style={{ color: '#c0392b', fontWeight: 800, marginBottom: 12 }}>{error}</p>
              <CustomButton
                onClick={() => window.location.reload()}
                style={{ width: '100%' }}
                confirm="إعادة تحميل الصفحة الآن؟"
                showErrorAlert={false}
              >
                إعادة المحاولة
              </CustomButton>
            </div>
          ) : (
            <form onSubmit={save}>
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
                  <FileText size={18} />
                </div>
                <textarea
                  placeholder="وصف المتجر"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '0.85rem 1rem',
                    borderRadius: 'var(--radius-md)',
                    border: '1.5px solid var(--border)',
                    background: 'var(--surface)',
                    minHeight: 110,
                    resize: 'vertical',
                  }}
                />
              </div>

              <div style={{ marginTop: 18, paddingTop: 16, borderTop: '1px solid var(--border)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8, fontWeight: 800 }}>
                  <MessageCircle size={18} />
                  التواصل مع المتجر (واتساب)
                </div>
                <p style={{ margin: '0 0 10px', fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.55 }}>
                  يمكنك إدخال الرقم بصيغة محلية (مثال: 0599123456) أو دولية بدون + (970599123456). يظهر زر «تواصل معنا»
                  للمتسوّقين بعد الحفظ هنا فقط.
                </p>
                <CustomInput
                  icon={<MessageCircle size={18} />}
                  placeholder="رقم واتساب للاستفسارات"
                  value={contactWhatsapp}
                  onChange={(e) => setContactWhatsapp(e.target.value)}
                  type="tel"
                  autoComplete="tel"
                />
              </div>

              <div style={{ marginTop: 18, paddingTop: 16, borderTop: '1px solid var(--border)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8, fontWeight: 800 }}>
                  <Sparkles size={18} />
                  مميزات المتجر (حتى 10)
                </div>
                <p style={{ margin: '0 0 10px', fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.55 }}>
                  تظهر كوسوم صغيرة في البروفايل وقائمة المحال القريبة — للعرض فقط وليس للفلترة.
                </p>
                {features.map((f, idx) => (
                  <div
                    key={idx}
                    style={{ display: 'flex', gap: 8, marginBottom: 8, alignItems: 'center' }}
                  >
                    <input
                      type="text"
                      value={f}
                      maxLength={80}
                      placeholder={`ميزة ${idx + 1}`}
                      onChange={(e) => {
                        const v = e.target.value;
                        setFeatures((prev) => prev.map((x, i) => (i === idx ? v : x)));
                      }}
                      style={{
                        flex: 1,
                        padding: '0.75rem 0.9rem',
                        borderRadius: 'var(--radius-md)',
                        border: '1.5px solid var(--border)',
                        background: 'var(--surface)',
                      }}
                    />
                    {features.length > 1 ? (
                      <button
                        type="button"
                        onClick={() => removeFeatureRow(idx)}
                        style={{
                          padding: '8px 10px',
                          borderRadius: 10,
                          border: '1px solid var(--border)',
                          background: 'var(--surface)',
                          cursor: 'pointer',
                          fontWeight: 700,
                        }}
                      >
                        حذف
                      </button>
                    ) : null}
                  </div>
                ))}
                {features.length < 10 ? (
                  <button
                    type="button"
                    onClick={addFeatureRow}
                    style={{
                      marginTop: 4,
                      padding: '8px 14px',
                      borderRadius: 10,
                      border: '1px dashed var(--border)',
                      background: 'transparent',
                      cursor: 'pointer',
                      fontWeight: 700,
                      color: 'var(--secondary)',
                    }}
                  >
                    + إضافة ميزة
                  </button>
                ) : null}
              </div>

              <div style={{ marginTop: 18, paddingTop: 16, borderTop: '1px solid var(--border)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8, fontWeight: 800 }}>
                  <Clock size={18} />
                  مواعيد العمل
                </div>
                <p style={{ margin: '0 0 10px', fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.55 }}>
                  النص أدناه يظهر للمتسوّقين كما هو. الجدول يُستخدم لحساب «مفتوح / مغلق» حسب المنطقة الزمنية.
                </p>
                <div className="input-group" style={{ marginBottom: 12 }}>
                  <div className="input-icon">
                    <Clock size={18} />
                  </div>
                  <textarea
                    placeholder="مواعيد العمل (نص للمتسوّقين)، مثال: السبت–الخميس 9–5، الجمعة إجازة"
                    value={businessHoursNote}
                    onChange={(e) => setBusinessHoursNote(e.target.value)}
                    style={{
                      width: '100%',
                      padding: '0.85rem 1rem',
                      borderRadius: 'var(--radius-md)',
                      border: '1.5px solid var(--border)',
                      background: 'var(--surface)',
                      minHeight: 88,
                      resize: 'vertical',
                    }}
                  />
                </div>
                <CustomInput
                  icon={<Clock size={18} />}
                  placeholder="المنطقة الزمنية (مثال: Asia/Gaza)"
                  value={storeTimezone}
                  onChange={(e) => setStoreTimezone(e.target.value)}
                />
                <p style={{ margin: '10px 0 12px', fontSize: '0.82rem', color: 'var(--text-secondary)' }}>
                  الأيام من الأحد (0) إلى السبت (6). اترك الفترة فارغة ليوم إجازة. فترة واحدة يومياً في هذا النموذج.
                </p>
                <div
                  style={{
                    display: 'grid',
                    gap: 8,
                    fontSize: '0.9rem',
                  }}
                >
                  {WEEKDAY_LABELS.map((label, i) => (
                    <div
                      key={label}
                      style={{
                        display: 'grid',
                        gridTemplateColumns: 'minmax(72px, 1fr) 1fr 1fr',
                        gap: 8,
                        alignItems: 'center',
                      }}
                    >
                      <span style={{ fontWeight: 700 }}>{label}</span>
                      <input
                        type="time"
                        value={weeklyLines[i].start}
                        onChange={(e) => {
                          const v = e.target.value;
                          setWeeklyLines((prev) => {
                            const next = [...prev];
                            next[i] = { ...next[i], start: v };
                            return next;
                          });
                        }}
                        style={{
                          padding: '8px 10px',
                          borderRadius: 10,
                          border: '1.5px solid var(--border)',
                          background: 'var(--surface)',
                        }}
                      />
                      <input
                        type="time"
                        value={weeklyLines[i].end}
                        onChange={(e) => {
                          const v = e.target.value;
                          setWeeklyLines((prev) => {
                            const next = [...prev];
                            next[i] = { ...next[i], end: v };
                            return next;
                          });
                        }}
                        style={{
                          padding: '8px 10px',
                          borderRadius: 10,
                          border: '1.5px solid var(--border)',
                          background: 'var(--surface)',
                        }}
                      />
                    </div>
                  ))}
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
                  style={{
                    width: '100%',
                    padding: '0.85rem 1rem',
                    borderRadius: 'var(--radius-md)',
                    border: '1.5px solid var(--border)',
                    background: 'var(--surface)',
                    minHeight: 88,
                    resize: 'vertical',
                  }}
                />
              </div>

              <div style={{ marginTop: 6 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8, fontWeight: 700 }}>
                  <ImageIcon size={18} />
                  صورة المتجر (اختياري)
                </div>
                <p style={{ margin: '0 0 10px', fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                  تظهر على الخريطة كرمز للمتجر. إن لم ترفع صورة، يُستخدم رمز حسب نوع القسم أو صورة القسم إن وُجدت.
                </p>
                {logoPreview ? (
                  <img
                    src={logoPreview}
                    alt=""
                    loading="lazy"
                    width="120"
                    height="120"
                    style={{
                      width: 120,
                      height: 120,
                      objectFit: 'cover',
                      borderRadius: 16,
                      marginBottom: 10,
                      border: '1.5px solid var(--border)',
                    }}
                  />
                ) : null}
                <input
                  type="file"
                  accept="image/*"
                  style={{ width: '100%', fontSize: '0.9rem' }}
                  onChange={(e) => {
                    const f = e.target.files?.[0];
                    if (!f) return;
                    setLogoPreview((prev) => {
                      if (prev && String(prev).startsWith('blob:')) URL.revokeObjectURL(prev);
                      return URL.createObjectURL(f);
                    });
                    setLogoFile(f);
                  }}
                />
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
                <CustomInput
                  icon={<MapPin size={18} />}
                  placeholder="Latitude"
                  value={latitude}
                  onChange={(e) => setLatitude(e.target.value)}
                />
                <CustomInput
                  icon={<MapPin size={18} />}
                  placeholder="Longitude"
                  value={longitude}
                  onChange={(e) => setLongitude(e.target.value)}
                />
              </div>

              <div style={{ marginTop: 14 }}>
                <MerchantLocationPicker
                  value={pickedLocation}
                  onChange={(loc) => {
                    setPickedLocation(loc);
                    setLatitude(String(loc[0]));
                    setLongitude(String(loc[1]));
                  }}
                />
              </div>

              <div style={{ marginTop: 14 }}>
                <CustomButton
                  type="submit"
                  loading={saving}
                  style={{ width: '100%' }}
                  confirm={false}
                  showErrorAlert={false}
                >
                  حفظ
                </CustomButton>
              </div>
            </form>
          )}
        </div>
      </div>
    </MainLayout>
  );
};

export default MerchantStoreSettings;
