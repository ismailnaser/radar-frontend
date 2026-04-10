import React, { useCallback, useEffect, useMemo, useState } from 'react';
import MainLayout from '../../components/MainLayout';
import { useAlert } from '../../components/AlertProvider';
import {
  createPrimaryAdminAnnouncement,
  deletePrimaryAdminAnnouncement,
  getPrimaryAdminAnnouncements,
} from '../../api/data';
import { adminPanelCss } from './adminPanelCss';

export default function AdminAnnouncements() {
  const { showAlert, showConfirm } = useAlert();
  const [announceMsg, setAnnounceMsg] = useState('');
  const [announcements, setAnnouncements] = useState([]);
  const [loading, setLoading] = useState(false);

  const load = useCallback(async () => {
    setLoading(true);
    try {
      const d = await getPrimaryAdminAnnouncements();
      setAnnouncements(Array.isArray(d?.results) ? d.results : []);
    } catch (e) {
      console.error(e);
      setAnnouncements([]);
      await showAlert('تعذر تحميل الإعلانات.', 'خطأ');
    } finally {
      setLoading(false);
    }
  }, [showAlert]);

  useEffect(() => {
    load();
  }, [load]);

  const activeAnnouncement = useMemo(
    () => announcements.find((a) => a.is_active) || null,
    [announcements]
  );

  const publish = async () => {
    const msg = announceMsg.trim();
    if (!msg) return showAlert('اكتب نص الإعلان أولاً.', 'تنبيه');
    const ok = await showConfirm('نشر إعلان عام جديد؟ سيتم إيقاف الإعلان النشط السابق إن وُجد.', 'تأكيد');
    if (!ok) return;
    try {
      await createPrimaryAdminAnnouncement(msg);
      setAnnounceMsg('');
      await load();
      await showAlert('تم نشر الإعلان.', 'تم');
    } catch (e) {
      console.error(e);
      await showAlert('تعذر نشر الإعلان.', 'خطأ');
    }
  };

  const removeActive = async () => {
    if (!activeAnnouncement) return;
    const ok = await showConfirm('حذف/إيقاف الإعلان النشط؟', 'تأكيد');
    if (!ok) return;
    try {
      await deletePrimaryAdminAnnouncement(activeAnnouncement.id);
      await load();
      await showAlert('تم حذف الإعلان.', 'تم');
    } catch (e) {
      console.error(e);
      await showAlert('تعذر حذف الإعلان.', 'خطأ');
    }
  };

  return (
    <MainLayout>
      <div className="admin-dash">
        <h1>إعلان عام</h1>
        <p className="admin-intro">
          نشر إعلان عام يظهر لكل المستخدمين تحت الهيدر. يوجد إعلان نشط واحد فقط في نفس الوقت.
        </p>

        <section className="card admin-section">
          <div className="admin-section-head">
            <h2>الإعلان الحالي</h2>
            {loading ? <span className="muted small">جاري التحميل…</span> : null}
          </div>

          {activeAnnouncement ? (
            <div className="card" style={{ padding: 14, background: 'var(--surface)', marginBottom: 14 }}>
              <div style={{ fontWeight: 900, marginBottom: 8 }}>نشط الآن</div>
              <div style={{ whiteSpace: 'pre-wrap', lineHeight: 1.7 }}>{activeAnnouncement.message}</div>
              <div className="admin-actions">
                <button type="button" className="btn-no" onClick={removeActive}>
                  حذف الإعلان
                </button>
              </div>
            </div>
          ) : (
            <p className="muted" style={{ marginTop: 0 }}>
              لا يوجد إعلان نشط حالياً.
            </p>
          )}

          <h2 style={{ marginTop: 0 }}>نشر إعلان جديد</h2>
          <label style={{ display: 'block', fontWeight: 800 }}>
            نص الإعلان
            <textarea
              value={announceMsg}
              onChange={(e) => setAnnounceMsg(e.target.value)}
              placeholder="اكتب إعلاناً عاماً يظهر للجميع…"
              style={{
                width: '100%',
                marginTop: 8,
                padding: '0.85rem 1rem',
                borderRadius: 14,
                border: '1.5px solid var(--border)',
                background: 'var(--white)',
                minHeight: 110,
                resize: 'vertical',
                fontFamily: 'inherit',
              }}
            />
          </label>
          <div className="admin-actions">
            <button type="button" className="btn-ok" onClick={publish}>
              نشر الإعلان
            </button>
          </div>
        </section>

        <style dangerouslySetInnerHTML={{ __html: adminPanelCss }} />
      </div>
    </MainLayout>
  );
}

