import React, { useCallback, useEffect, useState } from 'react';
import MainLayout from '../../components/MainLayout';
import { useAlert } from '../../components/AlertProvider';
import {
  getAdminSubscriptionRenewals,
  approveAdminSubscriptionRenewal,
  rejectAdminSubscriptionRenewal,
} from '../../api/data';
import { adminPanelCss, statusLabel } from './adminPanelCss';
import { useAdminPendingCounts } from '../../context/AdminPendingCountsContext';

function AdminSubscriptions() {
  const { showAlert, showConfirm } = useAlert();
  const { refresh } = useAdminPendingCounts();
  const [renewFilter, setRenewFilter] = useState('pending');
  const [renewals, setRenewals] = useState([]);
  const [loadingRenew, setLoadingRenew] = useState(true);
  const [busyRenewId, setBusyRenewId] = useState(null);

  const loadRenewals = useCallback(async () => {
    setLoadingRenew(true);
    try {
      const data = await getAdminSubscriptionRenewals(renewFilter);
      setRenewals(Array.isArray(data) ? data : []);
    } catch (e) {
      console.error(e);
      setRenewals([]);
      await showAlert('تعذر تحميل طلبات التجديد.', 'خطأ');
    } finally {
      setLoadingRenew(false);
    }
  }, [renewFilter, showAlert]);

  useEffect(() => {
    loadRenewals();
  }, [loadRenewals]);

  const handleRenewApprove = async (id) => {
    const ok = await showConfirm('تأكيد قبول طلب التجديد وتمديد الاشتراك؟', 'تأكيد');
    if (!ok) return;
    setBusyRenewId(id);
    try {
      await approveAdminSubscriptionRenewal(id);
      await showAlert('تم قبول الطلب وتمديد الاشتراك.', 'تم');
      await refresh();
      loadRenewals();
    } catch (e) {
      console.error(e);
      await showAlert('تعذر قبول الطلب.', 'خطأ');
    } finally {
      setBusyRenewId(null);
    }
  };

  const handleRenewReject = async (id) => {
    const ok = await showConfirm('تأكيد رفض طلب التجديد؟', 'تأكيد');
    if (!ok) return;
    setBusyRenewId(id);
    try {
      await rejectAdminSubscriptionRenewal(id);
      await showAlert('تم رفض الطلب.', 'تم');
      await refresh();
      loadRenewals();
    } catch (e) {
      console.error(e);
      await showAlert('تعذر رفض الطلب.', 'خطأ');
    } finally {
      setBusyRenewId(null);
    }
  };

  return (
    <MainLayout>
      <div className="admin-dash">
        <h1>إدارة الاشتراكات</h1>
        <p className="admin-intro">
          مراجعة طلبات <strong>تجديد الاشتراك</strong> وإشعارات الدفع. قيمة التجديد المعتمدة في الأرباح: <strong>10 شيكل</strong>.
        </p>

        <section className="card admin-section">
          <div className="admin-section-head">
            <h2>طلبات التجديد</h2>
            <select
              className="admin-filter"
              value={renewFilter}
              onChange={(e) => setRenewFilter(e.target.value)}
              aria-label="تصفية حالة طلب التجديد"
            >
              <option value="pending">بانتظار المراجعة</option>
              <option value="approved">مقبول</option>
              <option value="rejected">مرفوض</option>
              <option value="">الكل</option>
            </select>
          </div>
          {loadingRenew ? (
            <p>جاري التحميل…</p>
          ) : renewals.length === 0 ? (
            <p className="admin-empty">لا توجد طلبات في هذا الفلتر.</p>
          ) : (
            <div className="admin-cards">
              {renewals.map((r) => (
                <article key={r.id} className="admin-card renew-card">
                  <div className="admin-card-media">
                    {r.receipt_image ? (
                      <a href={r.receipt_image} target="_blank" rel="noopener noreferrer">
                        <img src={r.receipt_image} alt="إشعار الدفع" />
                      </a>
                    ) : (
                      <span className="muted">لا صورة</span>
                    )}
                  </div>
                  <div className="admin-card-body">
                    <h3>{r.store_name || `متجر #${r.store}`}</h3>
                    {r.notes ? <p className="desc">ملاحظات التاجر: {r.notes}</p> : null}
                    <p className="status-pill">
                      الحالة: <strong>{statusLabel[r.status] || r.status}</strong>
                    </p>
                    {r.decided_at ? (
                      <p className="muted small">
                        قرار سابق: {r.decided_by_username ? `${r.decided_by_username} — ` : ''}
                        {r.decided_at}
                      </p>
                    ) : null}
                    {r.status === 'pending' ? (
                      <div className="admin-actions">
                        <button
                          type="button"
                          className="btn-ok"
                          disabled={busyRenewId === r.id}
                          onClick={() => handleRenewApprove(r.id)}
                        >
                          قبول وتمديد الاشتراك
                        </button>
                        <button
                          type="button"
                          className="btn-no"
                          disabled={busyRenewId === r.id}
                          onClick={() => handleRenewReject(r.id)}
                        >
                          رفض
                        </button>
                      </div>
                    ) : null}
                  </div>
                </article>
              ))}
            </div>
          )}
        </section>

        <style dangerouslySetInnerHTML={{ __html: adminPanelCss }} />
      </div>
    </MainLayout>
  );
}

export default AdminSubscriptions;
