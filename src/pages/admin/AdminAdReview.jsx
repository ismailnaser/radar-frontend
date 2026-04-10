import React, { useCallback, useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import MainLayout from '../../components/MainLayout';
import { useAlert } from '../../components/AlertProvider';
import { getAdminAd, setAdminAdStatus } from '../../api/data';
import { adminPanelCss, statusLabel } from './adminPanelCss';
import { ArrowRight } from 'lucide-react';
import ImageCarousel from '../../components/ImageCarousel';
import { visualImageUrls } from '../../utils/productImages';
import { useAdminPendingCounts } from '../../context/AdminPendingCountsContext';

function AdminAdReview() {
  const { adId } = useParams();
  const navigate = useNavigate();
  const { showAlert, showConfirm } = useAlert();
  const { refresh } = useAdminPendingCounts();
  const [ad, setAd] = useState(null);
  const [loading, setLoading] = useState(true);
  const [busy, setBusy] = useState(false);
  const [receiptBroken, setReceiptBroken] = useState(false);

  const load = useCallback(async () => {
    if (!adId) return;
    setLoading(true);
    try {
      const data = await getAdminAd(adId);
      setAd(data);
      setReceiptBroken(false);
    } catch (e) {
      console.error(e);
      setAd(null);
      await showAlert('تعذر تحميل بيانات الإعلان.', 'خطأ');
    } finally {
      setLoading(false);
    }
  }, [adId, showAlert]);

  useEffect(() => {
    load();
  }, [load]);

  const handleDecision = async (status) => {
    if (!ad?.id) return;
    const word = status === 'active' ? 'قبول' : 'رفض';
    const ok = await showConfirm(`تأكيد ${word} هذا الإعلان؟`, 'تأكيد');
    if (!ok) return;
    setBusy(true);
    try {
      await setAdminAdStatus(ad.id, status);
      await showAlert(status === 'active' ? 'تم تفعيل الإعلان.' : 'تم رفض الإعلان.', 'تم');
      await refresh();
      navigate('/admin/ads');
    } catch (e) {
      console.error(e);
      await showAlert('تعذر تحديث حالة الإعلان.', 'خطأ');
    } finally {
      setBusy(false);
    }
  };

  const fmtPrice = (v) => {
    const n = Number(v);
    return Number.isFinite(n) ? n.toFixed(2) : '—';
  };

  return (
    <MainLayout>
      <div className="admin-dash admin-ad-review">
        <Link to="/admin/ads" className="admin-back-link">
          <ArrowRight size={18} aria-hidden />
          العودة لقائمة الإعلانات
        </Link>

        <h1>مراجعة طلب إعلان ممول</h1>
        <p className="admin-intro">
          تُعرض صور الإعلان وإشعار الدفع هنا داخل الموقع. بعد التحقق يمكنك القبول أو الرفض.
        </p>

        {loading ? (
          <p>جاري التحميل…</p>
        ) : !ad ? (
          <p className="admin-empty">لم يُعثَر على الإعلان.</p>
      ) : (
          <>
            <section className="card admin-section">
              <h2 style={{ marginTop: 0 }}>إشعار الدفع</h2>
              {ad.payment_receipt_image && !receiptBroken ? (
                <div className="admin-review-receipt-wrap">
                  <img
                    src={ad.payment_receipt_image}
                    alt="إشعار الدفع"
                    className="admin-review-receipt-img"
                    onError={() => setReceiptBroken(true)}
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                </div>
              ) : (
                <div className="admin-review-receipt-wrap" style={{ padding: 14 }}>
                  <p className="muted" style={{ margin: 0, lineHeight: 1.6 }}>
                    {ad.payment_receipt_image
                      ? 'تعذر عرض صورة إشعار الدفع حالياً.'
                      : 'لا يوجد صورة لإشعار الدفع.'}
                  </p>
                  {ad.payment_receipt_image ? (
                    <a
                      href={ad.payment_receipt_image}
                      target="_blank"
                      rel="noreferrer noopener"
                      style={{
                        display: 'inline-flex',
                        marginTop: 10,
                        fontWeight: 900,
                        color: 'var(--secondary)',
                        textDecoration: 'underline',
                      }}
                    >
                      فتح الصورة في تبويب جديد
                    </a>
                  ) : null}
                </div>
              )}
            </section>

            <section className="card admin-section">
              <h2 style={{ marginTop: 0 }}>صور الإعلان</h2>
              {visualImageUrls(ad).length > 0 ? (
                <div className="admin-review-receipt-wrap">
                  <ImageCarousel images={visualImageUrls(ad)} height={320} borderRadius={12} />
                </div>
              ) : (
                <p className="muted">لا توجد صور للإعلان.</p>
              )}
            </section>

            <section className="card admin-section">
              <h2 style={{ marginTop: 0 }}>التفاصيل</h2>
              <p className="desc"><strong>العنوان:</strong> {ad.title}</p>
              <p className="desc"><strong>المتجر:</strong> {ad.store_name || `#${ad.store}`}</p>
              <p className="desc"><strong>الوصف:</strong> {ad.description}</p>
              <p className="desc">
                <strong>المنتج المرتبط:</strong>{' '}
                {ad.product_details?.name ? (
                  <>
                    {ad.product_details.name} (معرّف {ad.product})
                  </>
                ) : ad.product ? (
                  <>معرّف المنتج #{ad.product}</>
                ) : (
                  <>لا يوجد</>
                )}
              </p>
              <p className="desc">
                <strong>سعر المنتج في الإعلان:</strong> {fmtPrice(ad.product_price)} ₪
              </p>
              <p className="desc">
                <strong>قناة الدفع:</strong>{' '}
                {ad.payment_method_label || ad.payment_method || '—'}
              </p>
              <p className="status-pill">
                الحالة: <strong>{statusLabel[ad.status] || ad.status}</strong>
              </p>

              {ad.status === 'pending' ? (
                <div className="admin-actions">
                  <button type="button" className="btn-ok" disabled={busy} onClick={() => handleDecision('active')}>
                    قبول وتفعيل
                  </button>
                  <button type="button" className="btn-no" disabled={busy} onClick={() => handleDecision('rejected')}>
                    رفض
                  </button>
                </div>
              ) : null}
            </section>
          </>
        )}

        <style
          dangerouslySetInnerHTML={{
            __html: `${adminPanelCss}
            .admin-ad-review .admin-back-link {
              display: inline-flex; align-items: center; gap: 8px; margin-bottom: 16px;
              font-weight: 800; color: var(--secondary); text-decoration: none;
            }
            .admin-ad-review .admin-back-link:hover { text-decoration: underline; }
            .admin-review-receipt-wrap {
              margin-top: 12px; border-radius: 12px; overflow: hidden;
              border: 1px solid var(--border); background: var(--surface);
            }
            .admin-review-receipt-img {
              display: block; width: 100%; max-height: min(70vh, 720px); object-fit: contain;
              background: #f5f5f5;
            }
          `,
          }}
        />
      </div>
    </MainLayout>
  );
}

export default AdminAdReview;
