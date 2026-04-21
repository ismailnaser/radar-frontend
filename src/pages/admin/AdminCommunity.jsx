import React, { useCallback, useEffect, useMemo, useState } from 'react';
import MainLayout from '../../components/MainLayout';
import { useAlert } from '../../components/AlertProvider';
import {
  adminCreateCommunityPoint,
  adminDeleteCommunityPoint,
  adminModerateCommunityPoint,
  adminUpdateCommunityPoint,
  getAdminCommunityPoints,
  getCommunityCategories,
} from '../../api/data';
import { formatApiError } from '../../utils/apiErrors';
import { adminPanelCss } from './adminPanelCss';
import { useAdminPendingCounts } from '../../context/AdminPendingCountsContext';
import { MapContainer, Marker, Popup } from 'react-leaflet';
import BasemapLayersControl from '../../components/maps/BasemapLayersControl';
import LeafletInvalidateOnLayout from '../../components/maps/LeafletInvalidateOnLayout';
import { MapClickPicker } from '../../components/maps/ShopperMap';
import MapFlyToPosition from '../../components/maps/MapFlyToPosition';
import '../../components/maps/leafletIconFix';
import CustomButton from '../../components/ui/CustomButton';
import { getRefinedGeolocationPosition } from '../../utils/geolocation';

const DEFAULT_CENTER = [31.5, 34.4];
const GAZA_BOUNDS = {
  minLat: 31.20,
  maxLat: 31.62,
  minLng: 34.20,
  maxLng: 34.62,
};
const GAZA_BOUNDS_EXPR = [
  [GAZA_BOUNDS.minLat, GAZA_BOUNDS.minLng],
  [GAZA_BOUNDS.maxLat, GAZA_BOUNDS.maxLng],
];

function isInsideGaza(lat, lng) {
  const la = Number(lat);
  const ln = Number(lng);
  if (!Number.isFinite(la) || !Number.isFinite(ln)) return false;
  return la >= GAZA_BOUNDS.minLat && la <= GAZA_BOUNDS.maxLat && ln >= GAZA_BOUNDS.minLng && ln <= GAZA_BOUNDS.maxLng;
}

function AdminCommunity() {
  const { showAlert, showPrompt, showConfirm } = useAlert();
  const { refresh } = useAdminPendingCounts();
  const [statusFilter, setStatusFilter] = useState('pending');
  const [points, setPoints] = useState([]);
  const [loading, setLoading] = useState(true);
  const [busyId, setBusyId] = useState(null);
  const [categories, setCategories] = useState([]);
  const [catLoading, setCatLoading] = useState(true);

  const [addCategory, setAddCategory] = useState('');
  const [addTitle, setAddTitle] = useState('');
  const [addDetail, setAddDetail] = useState('');
  const [addAddress, setAddAddress] = useState('');
  const [addPick, setAddPick] = useState(null);
  const [addWater, setAddWater] = useState('');
  const [addInst, setAddInst] = useState('');
  const [addBusy, setAddBusy] = useState(false);
  const [addLocating, setAddLocating] = useState(false);

  const [editOpen, setEditOpen] = useState(false);
  const [editBusy, setEditBusy] = useState(false);
  const [editPoint, setEditPoint] = useState(null);
  const [editCategory, setEditCategory] = useState('');
  const [editTitle, setEditTitle] = useState('');
  const [editDetail, setEditDetail] = useState('');
  const [editAddress, setEditAddress] = useState('');
  const [editPick, setEditPick] = useState(null);
  const [editWater, setEditWater] = useState('');
  const [editInst, setEditInst] = useState('');
  const [editHidden, setEditHidden] = useState(false);

  const loadPoints = useCallback(async (statusOverride = null) => {
    setLoading(true);
    try {
      const st = statusOverride == null ? statusFilter : statusOverride;
      const data = await getAdminCommunityPoints(st);
      setPoints(Array.isArray(data) ? data : []);
    } catch (e) {
      console.error(e);
      setPoints([]);
      await showAlert('تعذر تحميل الطلبات.', 'خطأ');
    } finally {
      setLoading(false);
    }
  }, [statusFilter, showAlert]);

  useEffect(() => {
    loadPoints();
  }, [loadPoints]);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        const data = await getCommunityCategories();
        if (!cancelled) setCategories(Array.isArray(data) ? data : []);
      } catch {
        if (!cancelled) setCategories([]);
      } finally {
        if (!cancelled) setCatLoading(false);
      }
    })();
    return () => {
      cancelled = true;
    };
  }, []);

  const selectedAddCat = useMemo(
    () => categories.find((c) => String(c.id) === String(addCategory)),
    [categories, addCategory]
  );
  const addSlug = selectedAddCat?.slug || '';

  const selectedEditCat = useMemo(
    () => categories.find((c) => String(c.id) === String(editCategory)),
    [categories, editCategory]
  );
  const editSlug = selectedEditCat?.slug || '';

  const handleModerate = async (id, action) => {
    let reason = '';
    if (action === 'reject') {
      reason = await showPrompt('أدخل سبب الرفض (مطلوب):', 'سبب الرفض…', 'رفض الطلب', '');
      if (reason == null) return;
      reason = String(reason).trim();
      if (!reason) {
        await showAlert('سبب الرفض مطلوب.', 'تنبيه');
        return;
      }
    } else if (action === 'approve') {
      const ok = await showConfirm('تأكيد اعتماد هذه النقطة وإظهارها على الخريطة؟', 'تأكيد');
      if (!ok) return;
    }
    setBusyId(id);
    try {
      await adminModerateCommunityPoint(id, action, reason);
      const msg =
        action === 'approve'
          ? 'تم الاعتماد.'
          : action === 'reject'
            ? 'تم الرفض.'
            : action === 'hide'
              ? 'تم إخفاء النقطة عن العامة.'
              : 'تم إظهار النقطة للعامة.';
      await showAlert(msg, 'تم');
      await refresh();
      loadPoints();
    } catch (e) {
      await showAlert(formatApiError(e, 'تعذر التحديث.'), 'خطأ');
    } finally {
      setBusyId(null);
    }
  };

  const handleDelete = async (p) => {
    const ok = await showConfirm(`تأكيد حذف النقطة نهائياً؟\n\n${p?.title || ''}`, 'حذف');
    if (!ok) return;
    setBusyId(p.id);
    try {
      await adminDeleteCommunityPoint(p.id);
      await showAlert('تم حذف النقطة.', 'تم');
      await refresh();
      loadPoints();
    } catch (e) {
      await showAlert(formatApiError(e, 'تعذر حذف النقطة.'), 'خطأ');
    } finally {
      setBusyId(null);
    }
  };

  const openEdit = (p) => {
    setEditPoint(p);
    setEditCategory(p?.category != null ? String(p.category) : '');
    setEditTitle(p?.title || '');
    setEditDetail(p?.detail_description || '');
    setEditAddress(p?.address_text || '');
    const la = Number(p?.latitude);
    const lo = Number(p?.longitude);
    setEditPick(Number.isFinite(la) && Number.isFinite(lo) ? [la, lo] : null);
    setEditWater(p?.water_is_potable === true ? 'true' : p?.water_is_potable === false ? 'false' : '');
    setEditInst(p?.institution_scope || '');
    setEditHidden(Boolean(p?.is_hidden_by_admin));
    setEditOpen(true);
  };

  const closeEdit = () => {
    setEditOpen(false);
    setEditPoint(null);
    setEditPick(null);
    setEditWater('');
    setEditInst('');
    setEditHidden(false);
  };

  const saveEdit = async () => {
    if (!editPoint?.id) return;
    if (!editCategory) {
      await showAlert('اختر القسم.', 'تنبيه');
      return;
    }
    if (!String(editTitle || '').trim() || !String(editDetail || '').trim() || !String(editAddress || '').trim()) {
      await showAlert('عنوان ووصف وعنوان نصي مطلوبة.', 'تنبيه');
      return;
    }
    if (!editPick) {
      await showAlert('حدد الموقع على الخريطة.', 'تنبيه');
      return;
    }
    if (!isInsideGaza(editPick[0], editPick[1])) {
      await showAlert('أنت بتحاول تضيف موقع خارج حدود قطاع غزة.', 'تنبيه');
      return;
    }

    const payload = {
      category: Number(editCategory),
      title: String(editTitle).trim(),
      detail_description: String(editDetail).trim(),
      address_text: String(editAddress).trim(),
      latitude: editPick[0],
      longitude: editPick[1],
      is_hidden_by_admin: Boolean(editHidden),
    };
    if (editSlug === 'water') {
      if (editWater !== 'true' && editWater !== 'false') {
        await showAlert('حدد صلاحية الشرب للمياه.', 'تنبيه');
        return;
      }
      payload.water_is_potable = editWater === 'true';
    } else {
      payload.water_is_potable = null;
    }
    if (editSlug === 'institution') {
      if (!['local', 'international', 'charity'].includes(editInst)) {
        await showAlert('اختر نطاق المؤسسة.', 'تنبيه');
        return;
      }
      payload.institution_scope = editInst;
    } else {
      payload.institution_scope = '';
    }

    setEditBusy(true);
    try {
      await adminUpdateCommunityPoint(editPoint.id, payload);
      await showAlert('تم تعديل النقطة.', 'تم');
      await refresh();
      closeEdit();
      loadPoints();
    } catch (e) {
      await showAlert(formatApiError(e, 'تعذر تعديل النقطة.'), 'خطأ');
    } finally {
      setEditBusy(false);
    }
  };

  const handleDirectAdd = async (e) => {
    e.preventDefault();
    if (!addCategory) {
      await showAlert('اختر القسم.', 'تنبيه');
      return;
    }
    if (!addTitle.trim() || !addDetail.trim() || !addAddress.trim()) {
      await showAlert('عنوان ووصف وعنوان نصي مطلوبة.', 'تنبيه');
      return;
    }
    if (!addPick) {
      await showAlert('حدد الموقع على الخريطة.', 'تنبيه');
      return;
    }
    if (!isInsideGaza(addPick[0], addPick[1])) {
      await showAlert('أنت بتحاول تضيف موقع خارج حدود قطاع غزة.', 'تنبيه');
      return;
    }
    const payload = {
      category: Number(addCategory),
      title: addTitle.trim(),
      detail_description: addDetail.trim(),
      address_text: addAddress.trim(),
      latitude: addPick[0],
      longitude: addPick[1],
    };
    if (addSlug === 'water') {
      if (addWater !== 'true' && addWater !== 'false') {
        await showAlert('حدد صلاحية الشرب للمياه.', 'تنبيه');
        return;
      }
      payload.water_is_potable = addWater === 'true';
    } else {
      payload.water_is_potable = null;
    }
    if (addSlug === 'institution') {
      if (!['local', 'international', 'charity'].includes(addInst)) {
        await showAlert('اختر نطاق المؤسسة.', 'تنبيه');
        return;
      }
      payload.institution_scope = addInst;
    } else {
      payload.institution_scope = '';
    }
    setAddBusy(true);
    try {
      await adminCreateCommunityPoint(payload);
      await showAlert('تمت إضافة النقطة معتمدة مباشرة. سيتم عرضها ضمن "معتمد".', 'تم');
      setAddTitle('');
      setAddDetail('');
      setAddAddress('');
      setAddPick(null);
      setAddWater('');
      setAddInst('');
      setStatusFilter('approved');
      await refresh();
      loadPoints('approved');
    } catch (err) {
      await showAlert(formatApiError(err, 'تعذر الإضافة.'), 'خطأ');
    } finally {
      setAddBusy(false);
    }
  };

  const mapCenter = addPick || DEFAULT_CENTER;

  const useAddMyLocation = async () => {
    if (!navigator.geolocation) {
      await showAlert('المتصفح لا يدعم تحديد الموقع.', 'تنبيه');
      return;
    }
    setAddLocating(true);
    try {
      const r = await getRefinedGeolocationPosition({ maxWaitMs: 22000, goodEnoughM: 110 });
      if (!isInsideGaza(r.latitude, r.longitude)) {
        await showAlert('أنت بتحاول تضيف موقع خارج حدود قطاع غزة.', 'تنبيه');
        return;
      }
      setAddPick([r.latitude, r.longitude]);
      const acc = r.accuracy;
      if (acc != null && acc > 1200) {
        await showAlert(
          `تم وضع الدبوس على موقعك. الدقة تقريبية (~${Math.round(acc)} م). على الكمبيوتر غالباً لا يوجد GPS؛ للدقة استخدم الهاتف أو انقر الموقع يدوياً.`,
          'موقع تقريبي'
        );
      } else {
        await showAlert('تم ضبط الدبوس على موقعك الحالي.', 'تم');
      }
    } catch {
      await showAlert(
        'لم نتمكن من تحديد موقعك. تأكد من السماح بالوصول للموقع في المتصفح.',
        'الموقع'
      );
    } finally {
      setAddLocating(false);
    }
  };

  return (
    <MainLayout>
      <div className="admin-dash">
        <h1>الخدمات المجتمعية</h1>
        <p className="admin-intro">
          راجع طلبات المتسوّقين والتجار، أو أضف نقاطاً معتمدة مباشرة. المعتمد فقط يظهر على الخريطة وصفحة
          الخدمات.
        </p>

        <section className="card admin-section">
          <div className="admin-section-head">
            <h2>الطلبات والنقاط</h2>
            <select
              className="admin-filter"
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              aria-label="تصفية الحالة"
            >
              <option value="pending">قيد المراجعة</option>
              <option value="approved">معتمد</option>
              <option value="rejected">مرفوض</option>
              <option value="">الكل</option>
            </select>
          </div>
          {loading ? (
            <p>جاري التحميل…</p>
          ) : points.length === 0 ? (
            <p className="admin-empty">لا توجد عناصر في هذا الفلتر.</p>
          ) : (
            <div className="admin-cards">
              {points.map((p) => (
                <article key={p.id} className="admin-card">
                  <div className="admin-card-body">
                    <h3>{p.title}</h3>
                    <p className="muted">
                      {p.category_name} · {p.status === 'pending' ? 'قيد المراجعة' : p.status === 'approved' ? 'معتمد' : 'مرفوض'}
                    </p>
                    <p style={{ fontSize: '0.9rem', lineHeight: 1.5 }}>{p.detail_description}</p>
                    <p style={{ fontSize: '0.85rem', color: '#666' }}>{p.address_text}</p>
                    <p style={{ fontSize: '0.82rem', color: '#888' }}>
                      من: {p.submitted_by_username || p.submitted_by}
                    </p>
                    {p.status === 'rejected' && p.rejection_reason ? (
                      <p style={{ fontSize: '0.85rem', color: '#c0392b' }}>سبب الرفض: {p.rejection_reason}</p>
                    ) : null}
                    {p.status === 'pending' ? (
                      <div className="admin-actions" style={{ marginTop: 12 }}>
                        <button
                          type="button"
                          className="btn-ok"
                          disabled={busyId === p.id}
                          onClick={() => handleModerate(p.id, 'approve')}
                        >
                          اعتماد
                        </button>
                        <button
                          type="button"
                          className="btn-no"
                          disabled={busyId === p.id}
                          onClick={() => handleModerate(p.id, 'reject')}
                        >
                          رفض
                        </button>
                        <button
                          type="button"
                          className="btn-secondary"
                          disabled={busyId === p.id}
                          onClick={() => openEdit(p)}
                        >
                          تعديل
                        </button>
                        <button
                          type="button"
                          className="btn-danger"
                          disabled={busyId === p.id}
                          onClick={() => handleDelete(p)}
                        >
                          حذف
                        </button>
                      </div>
                    ) : p.status === 'approved' ? (
                      <div className="admin-actions" style={{ marginTop: 12 }}>
                        <button
                          type="button"
                          className={p.is_hidden_by_admin ? 'btn-ok' : 'btn-no'}
                          disabled={busyId === p.id}
                          onClick={() => handleModerate(p.id, p.is_hidden_by_admin ? 'unhide' : 'hide')}
                        >
                          {p.is_hidden_by_admin ? 'إظهار للعامة' : 'إخفاء عن العامة'}
                        </button>
                        <button
                          type="button"
                          className="btn-secondary"
                          disabled={busyId === p.id}
                          onClick={() => openEdit(p)}
                        >
                          تعديل
                        </button>
                        <button
                          type="button"
                          className="btn-danger"
                          disabled={busyId === p.id}
                          onClick={() => handleDelete(p)}
                        >
                          حذف
                        </button>
                      </div>
                    ) : p.status === 'rejected' ? (
                      <div className="admin-actions" style={{ marginTop: 12 }}>
                        <button
                          type="button"
                          className="btn-secondary"
                          disabled={busyId === p.id}
                          onClick={() => openEdit(p)}
                        >
                          تعديل
                        </button>
                        <button
                          type="button"
                          className="btn-danger"
                          disabled={busyId === p.id}
                          onClick={() => handleDelete(p)}
                        >
                          حذف
                        </button>
                      </div>
                    ) : null}
                  </div>
                </article>
              ))}
            </div>
          )}
        </section>

        <section className="card admin-section" style={{ marginTop: 24 }}>
          <h2>إضافة نقطة معتمدة مباشرة</h2>
          {catLoading ? (
            <p>جاري تحميل الأقسام…</p>
          ) : (
            <form onSubmit={handleDirectAdd}>
              <label style={{ display: 'block', fontWeight: 800, margin: '12px 0 6px' }}>القسم</label>
              <select
                value={addCategory}
                onChange={(e) => {
                  setAddCategory(e.target.value);
                  setAddWater('');
                  setAddInst('');
                }}
                style={{ width: '100%', maxWidth: 420, padding: 10, borderRadius: 10 }}
                required
              >
                <option value="">— اختر —</option>
                {categories.map((c) => (
                  <option key={c.id} value={c.id}>
                    {c.name}
                  </option>
                ))}
              </select>

              {addSlug === 'water' ? (
                <div style={{ marginTop: 12 }}>
                  <div style={{ fontWeight: 800, marginBottom: 6 }}>المياه</div>
                  <label style={{ marginRight: 16 }}>
                    <input
                      type="radio"
                      name="aw"
                      checked={addWater === 'true'}
                      onChange={() => setAddWater('true')}
                    />{' '}
                    صالحة للشرب
                  </label>
                  <label>
                    <input
                      type="radio"
                      name="aw"
                      checked={addWater === 'false'}
                      onChange={() => setAddWater('false')}
                    />{' '}
                    غير صالحة
                  </label>
                </div>
              ) : null}

              {addSlug === 'institution' ? (
                <div style={{ marginTop: 12 }}>
                  <label style={{ display: 'block', fontWeight: 800, marginBottom: 6 }}>نطاق المؤسسة</label>
                  <select
                    value={addInst}
                    onChange={(e) => setAddInst(e.target.value)}
                    style={{ width: '100%', maxWidth: 420, padding: 10, borderRadius: 10 }}
                  >
                    <option value="">— اختر —</option>
                    <option value="local">محلية</option>
                    <option value="international">عالمية</option>
                    <option value="charity">خيرية</option>
                  </select>
                </div>
              ) : null}

              <label style={{ display: 'block', fontWeight: 800, margin: '12px 0 6px' }}>العنوان</label>
              <input
                value={addTitle}
                onChange={(e) => setAddTitle(e.target.value)}
                style={{ width: '100%', maxWidth: 420, padding: 10, borderRadius: 10 }}
                required
              />

              <label style={{ display: 'block', fontWeight: 800, margin: '12px 0 6px' }}>الوصف التفصيلي</label>
              <textarea
                value={addDetail}
                onChange={(e) => setAddDetail(e.target.value)}
                rows={4}
                style={{ width: '100%', maxWidth: 520, padding: 10, borderRadius: 10 }}
                required
              />

              <label style={{ display: 'block', fontWeight: 800, margin: '12px 0 6px' }}>العنوان النصي</label>
              <textarea
                value={addAddress}
                onChange={(e) => setAddAddress(e.target.value)}
                rows={2}
                style={{ width: '100%', maxWidth: 520, padding: 10, borderRadius: 10 }}
                required
              />

              <p style={{ marginTop: 12, fontWeight: 800 }}>الخريطة</p>
              <div
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: 10,
                  alignItems: 'center',
                  marginBottom: 8,
                }}
              >
                <CustomButton
                  type="button"
                  variant="secondary"
                  loading={addLocating}
                  onClick={useAddMyLocation}
                  style={{ width: 'auto' }}
                  confirm="استخدام موقع جهازك الحالي؟"
                  showErrorAlert={false}
                >
                  موقعي الحالي
                </CustomButton>
                <span style={{ fontSize: '0.88rem', color: '#666' }}>
                  أو انقر على الخريطة.
                  {addPick ? ` ${addPick[0].toFixed(5)}, ${addPick[1].toFixed(5)}` : ''}
                </span>
              </div>
              <div style={{ maxWidth: 520, marginTop: 8, borderRadius: 12, overflow: 'hidden' }}>
                <MapContainer
                  center={mapCenter}
                  zoom={14}
                  minZoom={10}
                  maxZoom={19}
                  scrollWheelZoom
                  maxBounds={GAZA_BOUNDS_EXPR}
                  maxBoundsViscosity={1.0}
                  style={{ height: 'clamp(240px, 48dvh, 360px)', width: '100%' }}
                >
                  <BasemapLayersControl />
                  <LeafletInvalidateOnLayout />
                  <MapFlyToPosition position={addPick} />
                  <MapClickPicker
                    onPick={async (la, lo) => {
                      if (!isInsideGaza(la, lo)) {
                        await showAlert('أنت بتحاول تضيف موقع خارج حدود قطاع غزة.', 'تنبيه');
                        return;
                      }
                      setAddPick([la, lo]);
                    }}
                  />
                  {addPick ? (
                    <Marker position={addPick}>
                      <Popup>موقع النقطة</Popup>
                    </Marker>
                  ) : null}
                </MapContainer>
              </div>

              <div style={{ marginTop: 16 }}>
                <CustomButton
                  type="button"
                  onClick={handleDirectAdd}
                  loading={addBusy}
                  confirm="حفظ نقطة الخدمة المجتمعية كمعتمدة؟"
                  showErrorAlert={false}
                >
                  حفظ كمعتمد
                </CustomButton>
              </div>
            </form>
          )}
        </section>

        {editOpen ? (
          <div
            role="dialog"
            aria-modal="true"
            aria-label="تعديل نقطة خدمة مجتمعية"
            style={{
              position: 'fixed',
              inset: 0,
              zIndex: 9999,
              background: 'rgba(0,0,0,0.45)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: 12,
            }}
            onClick={closeEdit}
          >
            <div
              className="card"
              style={{
                width: 'min(720px, 100%)',
                maxHeight: 'min(88dvh, 780px)',
                overflow: 'auto',
                padding: 14,
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 10 }}>
                <h2 style={{ margin: 0 }}>تعديل النقطة</h2>
                <button type="button" className="btn-no" onClick={closeEdit}>
                  إغلاق
                </button>
              </div>

              <label style={{ display: 'block', fontWeight: 800, margin: '12px 0 6px' }}>القسم</label>
              <select
                value={editCategory}
                onChange={(e) => {
                  setEditCategory(e.target.value);
                  setEditWater('');
                  setEditInst('');
                }}
                style={{ width: '100%', maxWidth: 520, padding: 10, borderRadius: 10 }}
                required
              >
                <option value="">— اختر —</option>
                {categories.map((c) => (
                  <option key={c.id} value={c.id}>
                    {c.name}
                  </option>
                ))}
              </select>

              {editSlug === 'water' ? (
                <div style={{ marginTop: 12 }}>
                  <div style={{ fontWeight: 800, marginBottom: 6 }}>المياه</div>
                  <label style={{ marginRight: 16 }}>
                    <input type="radio" name="ew" checked={editWater === 'true'} onChange={() => setEditWater('true')} />{' '}
                    صالحة للشرب
                  </label>
                  <label>
                    <input type="radio" name="ew" checked={editWater === 'false'} onChange={() => setEditWater('false')} />{' '}
                    غير صالحة
                  </label>
                </div>
              ) : null}

              {editSlug === 'institution' ? (
                <div style={{ marginTop: 12 }}>
                  <label style={{ display: 'block', fontWeight: 800, marginBottom: 6 }}>نطاق المؤسسة</label>
                  <select
                    value={editInst}
                    onChange={(e) => setEditInst(e.target.value)}
                    style={{ width: '100%', maxWidth: 520, padding: 10, borderRadius: 10 }}
                  >
                    <option value="">— اختر —</option>
                    <option value="local">محلية</option>
                    <option value="international">عالمية</option>
                    <option value="charity">خيرية</option>
                  </select>
                </div>
              ) : null}

              <label style={{ display: 'block', fontWeight: 800, margin: '12px 0 6px' }}>العنوان</label>
              <input
                value={editTitle}
                onChange={(e) => setEditTitle(e.target.value)}
                style={{ width: '100%', maxWidth: 520, padding: 10, borderRadius: 10 }}
                required
              />

              <label style={{ display: 'block', fontWeight: 800, margin: '12px 0 6px' }}>الوصف التفصيلي</label>
              <textarea
                value={editDetail}
                onChange={(e) => setEditDetail(e.target.value)}
                rows={4}
                style={{ width: '100%', maxWidth: 680, padding: 10, borderRadius: 10 }}
                required
              />

              <label style={{ display: 'block', fontWeight: 800, margin: '12px 0 6px' }}>العنوان النصي</label>
              <textarea
                value={editAddress}
                onChange={(e) => setEditAddress(e.target.value)}
                rows={2}
                style={{ width: '100%', maxWidth: 680, padding: 10, borderRadius: 10 }}
                required
              />

              <label style={{ display: 'flex', alignItems: 'center', gap: 10, marginTop: 12, fontWeight: 850 }}>
                <input type="checkbox" checked={editHidden} onChange={(e) => setEditHidden(e.target.checked)} />
                إخفاء عن العامة
              </label>

              <p style={{ marginTop: 12, fontWeight: 800 }}>الموقع على الخريطة</p>
              <div style={{ maxWidth: 680, marginTop: 8, borderRadius: 12, overflow: 'hidden' }}>
                <MapContainer
                  center={editPick || DEFAULT_CENTER}
                  zoom={14}
                  minZoom={10}
                  maxZoom={19}
                  scrollWheelZoom
                  maxBounds={GAZA_BOUNDS_EXPR}
                  maxBoundsViscosity={1.0}
                  style={{ height: 'clamp(240px, 48dvh, 380px)', width: '100%' }}
                >
                  <BasemapLayersControl />
                  <LeafletInvalidateOnLayout />
                  <MapFlyToPosition position={editPick} />
                  <MapClickPicker
                    onPick={async (la, lo) => {
                      if (!isInsideGaza(la, lo)) {
                        await showAlert('أنت بتحاول تضيف موقع خارج حدود قطاع غزة.', 'تنبيه');
                        return;
                      }
                      setEditPick([la, lo]);
                    }}
                  />
                  {editPick ? (
                    <Marker position={editPick}>
                      <Popup>موقع النقطة</Popup>
                    </Marker>
                  ) : null}
                </MapContainer>
              </div>

              <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', marginTop: 16 }}>
                <CustomButton type="button" variant="secondary" onClick={closeEdit} confirm={false} showErrorAlert={false}>
                  إلغاء
                </CustomButton>
                <CustomButton type="button" loading={editBusy} onClick={saveEdit} confirm="حفظ تعديل النقطة؟" showErrorAlert={false}>
                  حفظ التعديلات
                </CustomButton>
              </div>
            </div>
          </div>
        ) : null}

        <style dangerouslySetInnerHTML={{ __html: adminPanelCss }} />
      </div>
    </MainLayout>
  );
}

export default AdminCommunity;
