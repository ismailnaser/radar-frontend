import React, { useCallback, useEffect, useMemo, useState } from 'react';
import MainLayout from '../../components/MainLayout';
import { useAlert } from '../../components/AlertProvider';
import { adminSearchUsers, adminSetUserActive } from '../../api/data';
import { formatApiError } from '../../utils/apiErrors';
import { adminPanelCss } from './adminPanelCss';

function AdminUsers() {
  const { showAlert, showConfirm } = useAlert();
  const [q, setQ] = useState('');
  const [userType, setUserType] = useState('');
  const [loading, setLoading] = useState(true);
  const [busyId, setBusyId] = useState(null);
  const [rows, setRows] = useState([]);

  const load = useCallback(async () => {
    setLoading(true);
    try {
      const data = await adminSearchUsers(q, userType);
      setRows(Array.isArray(data?.results) ? data.results : []);
    } catch (e) {
      setRows([]);
      await showAlert(formatApiError(e, 'تعذر تحميل المستخدمين.'), 'خطأ');
    } finally {
      setLoading(false);
    }
  }, [q, userType, showAlert]);

  useEffect(() => {
    load();
  }, [load]);

  const typeLabel = (t) => (t === 'merchant' ? 'تاجر' : t === 'shopper' ? 'متسوق' : t === 'admin' ? 'مدير' : t);

  const toggleActive = async (u) => {
    const next = !u.is_active;
    const ok = await showConfirm(
      next
        ? `تفعيل المستخدم «${u.username}»؟`
        : `إيقاف المستخدم «${u.username}»؟ سيتم منعه من الدخول، وإن كان تاجرًا سيتم تعليق متجره.`,
      'تأكيد'
    );
    if (!ok) return;
    setBusyId(u.id);
    try {
      await adminSetUserActive(u.id, next);
      await showAlert(next ? 'تم تفعيل الحساب.' : 'تم إيقاف الحساب.', 'تم');
      await load();
    } catch (e) {
      await showAlert(formatApiError(e, 'تعذر تحديث الحساب.'), 'خطأ');
    } finally {
      setBusyId(null);
    }
  };

  const filteredCount = useMemo(() => rows.length, [rows]);

  return (
    <MainLayout>
      <div className="admin-dash">
        <h1>المستخدمون</h1>
        <p className="admin-intro">بحث وتفعيل/إيقاف حسابات المتسوقين والتجار.</p>

        <section className="card admin-section">
          <div className="admin-section-head" style={{ alignItems: 'flex-end', gap: 12, flexWrap: 'wrap' }}>
            <div style={{ flex: '1 1 260px' }}>
              <label className="admin-label" htmlFor="u-q">بحث</label>
              <input
                id="u-q"
                className="admin-input"
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder="اسم المستخدم أو رقم الهاتف…"
              />
            </div>
            <div style={{ width: 200 }}>
              <label className="admin-label" htmlFor="u-type">النوع</label>
              <select id="u-type" className="admin-filter" value={userType} onChange={(e) => setUserType(e.target.value)}>
                <option value="">الكل</option>
                <option value="shopper">متسوق</option>
                <option value="merchant">تاجر</option>
                <option value="admin">مدير</option>
              </select>
            </div>
            <button type="button" className="btn-primary" onClick={load} style={{ height: 44 }}>
              تحديث
            </button>
          </div>

          {loading ? (
            <p>جاري التحميل…</p>
          ) : rows.length === 0 ? (
            <p className="admin-empty">لا توجد نتائج.</p>
          ) : (
            <>
              <p className="muted" style={{ marginTop: 8 }}>عدد النتائج: {filteredCount}</p>
              <div className="admin-cards" style={{ marginTop: 12 }}>
                {rows.map((u) => (
                  <article key={u.id} className="admin-card">
                    <div className="admin-card-body">
                      <h3 style={{ marginBottom: 6 }}>{u.username}</h3>
                      <p className="muted" style={{ marginTop: 0 }}>
                        {typeLabel(u.user_type)} · {u.phone_number}
                      </p>
                      <p className="muted" style={{ marginTop: 6 }}>
                        الحالة: {u.is_active ? 'نشط' : 'موقوف'} · التحقق: {u.is_whatsapp_verified ? 'تم' : 'لا'}
                      </p>
                      <div className="admin-actions" style={{ marginTop: 12 }}>
                        <button
                          type="button"
                          className={u.is_active ? 'btn-no' : 'btn-ok'}
                          disabled={busyId === u.id}
                          onClick={() => toggleActive(u)}
                        >
                          {u.is_active ? 'إيقاف الحساب' : 'تفعيل الحساب'}
                        </button>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </>
          )}
        </section>

        <style dangerouslySetInnerHTML={{ __html: adminPanelCss }} />
      </div>
    </MainLayout>
  );
}

export default AdminUsers;

