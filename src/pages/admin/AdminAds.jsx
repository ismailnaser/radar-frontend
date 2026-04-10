import React, { useCallback, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import MainLayout from '../../components/MainLayout';
import { useAlert } from '../../components/AlertProvider';
import { getAdminAds, setAdminAdStatus } from '../../api/data';
import { adminPanelCss, statusLabel } from './adminPanelCss';
import { useAdminPendingCounts } from '../../context/AdminPendingCountsContext';
import ImageCarousel from '../../components/ImageCarousel';
import { visualImageUrls } from '../../utils/productImages';

function AdminAds() {
  const { showAlert, showConfirm } = useAlert();
  const { refresh } = useAdminPendingCounts();
  const [adFilter, setAdFilter] = useState('pending');
  const [ads, setAds] = useState([]);
  const [loadingAds, setLoadingAds] = useState(true);
  const [busyAdId, setBusyAdId] = useState(null);

  const loadAds = useCallback(async () => {
    setLoadingAds(true);
    try {
      const data = await getAdminAds(adFilter);
      setAds(Array.isArray(data) ? data : []);
    } catch (e) {
      console.error(e);
      setAds([]);
      await showAlert('تعذر تحميل الإعلانات.', 'خطأ');
    } finally {
      setLoadingAds(false);
    }
  }, [adFilter, showAlert]);

  useEffect(() => {
    loadAds();
  }, [loadAds]);

  const handleAdDecision = async (id, status) => {
    const word = status === 'active' ? 'قبول' : 'رفض';
    const ok = await showConfirm(`تأكيد ${word} هذا الإعلان؟`, 'تأكيد');
    if (!ok) return;
    setBusyAdId(id);
    try {
      await setAdminAdStatus(id, status);
      await showAlert(status === 'active' ? 'تم تفعيل الإعلان.' : 'تم رفض الإعلان.', 'تم');
      await refresh();
      loadAds();
    } catch (e) {
      console.error(e);
      await showAlert('تعذر تحديث حالة الإعلان.', 'خطأ');
    } finally {
      setBusyAdId(null);
    }
  };

  return (
    <MainLayout>
      <div className="admin-dash">
        <h1>إدارة الإعلانات الممولة</h1>
        <p className="admin-intro">راجع إشعار الدفع ثم وافق على الإعلان أو ارفضه.</p>

        <section className="card admin-section">
          <div className="admin-section-head">
            <h2>قائمة الإعلانات</h2>
            <select
              className="admin-filter"
              value={adFilter}
              onChange={(e) => setAdFilter(e.target.value)}
              aria-label="تصفية حالة الإعلان"
            >
              <option value="pending">بانتظار الموافقة</option>
              <option value="active">نشط</option>
              <option value="rejected">مرفوض</option>
              <option value="expired">منتهي الصلاحية</option>
              <option value="">الكل</option>
            </select>
          </div>
          {loadingAds ? (
            <p>جاري التحميل…</p>
          ) : ads.length === 0 ? (
            <p className="admin-empty">لا توجد إعلانات في هذا الفلتر.</p>
          ) : (
            <div className="admin-cards">
              {ads.map((ad) => (
                <article key={ad.id} className="admin-card">
                  <div className="admin-card-media">
                    {visualImageUrls(ad).length > 0 ? (
                      <Link to={`/admin/ads/${ad.id}`} title="مراجعة الطلب" style={{ display: 'block' }}>
                        <ImageCarousel images={visualImageUrls(ad)} height={140} borderRadius={10} />
                      </Link>
                    ) : null}
                    {ad.payment_receipt_image ? (
                      <Link to={`/admin/ads/${ad.id}`} className="receipt-link">
                        مراجعة إشعار الدفع
                      </Link>
                    ) : (
                      <span className="muted">لا يوجد إشعار دفع</span>
                    )}
                  </div>
                  <div className="admin-card-body">
                    <h3>{ad.title}</h3>
                    <p className="store-line">المتجر: {ad.store_name || `#${ad.store}`}</p>
                    <p className="desc">
                      سعر المنتج: {Number(ad.product_price) > 0 ? `${Number(ad.product_price).toFixed(2)} ₪` : '—'} — الدفع:{' '}
                      {ad.payment_method_label || ad.payment_method || '—'}
                    </p>
                    <p className="desc">{ad.description}</p>
                    <p className="status-pill">
                      الحالة: <strong>{statusLabel[ad.status] || ad.status}</strong>
                    </p>
                    {ad.status === 'pending' ? (
                      <div className="admin-actions">
                        <button
                          type="button"
                          className="btn-ok"
                          disabled={busyAdId === ad.id}
                          onClick={() => handleAdDecision(ad.id, 'active')}
                        >
                          قبول وتفعيل
                        </button>
                        <button
                          type="button"
                          className="btn-no"
                          disabled={busyAdId === ad.id}
                          onClick={() => handleAdDecision(ad.id, 'rejected')}
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

export default AdminAds;
