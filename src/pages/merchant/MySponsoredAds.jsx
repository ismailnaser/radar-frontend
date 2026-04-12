import React, { useCallback, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import MainLayout from '../../components/MainLayout';
import { useAlert } from '../../components/AlertProvider';
import { deleteMerchantAd, getMerchantAds, updateMerchantAd } from '../../api/data';
import ImageCarousel from '../../components/ImageCarousel';
import { visualImageUrls } from '../../utils/productImages';
import { Image as ImageIcon, Pencil, Trash2 } from 'lucide-react';

function fmtDt(iso) {
  if (!iso) return '—';
  try {
    const d = new Date(iso);
    if (Number.isNaN(d.getTime())) return String(iso);
    return d.toLocaleString('ar', { dateStyle: 'medium', timeStyle: 'short' });
  } catch {
    return String(iso);
  }
}

function lifecycleBadge(ad) {
  if (ad.status === 'pending') {
    return { label: 'بانتظار موافقة الإدارة', className: 'mb-pill mb-pill-pending' };
  }
  if (ad.status === 'rejected') {
    return { label: 'مرفوض', className: 'mb-pill mb-pill-rejected' };
  }
  if (ad.status === 'expired') {
    return { label: 'منتهي الصلاحية', className: 'mb-pill mb-pill-expired' };
  }
  if (ad.status === 'active' && ad.approved_at) {
    const start = new Date(ad.approved_at);
    const end = new Date(start.getTime() + 24 * 60 * 60 * 1000);
    if (Date.now() <= end.getTime()) {
      return {
        label: `يعرض للمتسوّقين حتى ${fmtDt(end.toISOString())}`,
        className: 'mb-pill mb-pill-active',
      };
    }
    return { label: 'نافذة العرض منتهية (يُحدَّث السجل تلقائياً)', className: 'mb-pill mb-pill-warn' };
  }
  return { label: ad.status, className: 'mb-pill' };
}

export default function MySponsoredAds() {
  const { showAlert, showConfirm, showPrompt } = useAlert();
  const [ads, setAds] = useState([]);
  const [loading, setLoading] = useState(true);

  const refresh = useCallback(async () => {
    setLoading(true);
    try {
      const data = await getMerchantAds();
      setAds(Array.isArray(data) ? data : []);
    } catch (e) {
      console.error(e);
      setAds([]);
      await showAlert('تعذر تحميل إعلاناتك.', 'خطأ');
    } finally {
      setLoading(false);
    }
  }, [showAlert]);

  useEffect(() => {
    refresh();
  }, [refresh]);

  const remove = async (ad) => {
    const ok = await showConfirm('حذف هذا الطلب؟ (مسموح فقط أثناء انتظار الموافقة)', 'تأكيد');
    if (!ok) return;
    try {
      await deleteMerchantAd(ad.id);
      await showAlert('تم الحذف.', 'تم');
      await refresh();
    } catch (e) {
      console.error(e);
      await showAlert('تعذر الحذف. قد لا يكون الطلب قيد الانتظار.', 'خطأ');
    }
  };

  const quickEdit = async (ad) => {
    const newTitle = await showPrompt('عدّل عنوان الإعلان', 'العنوان', 'تعديل الطلب', ad.title || '');
    if (newTitle == null) return;
    const newDesc = await showPrompt('عدّل وصف الإعلان', 'الوصف', 'تعديل الطلب', ad.description || '');
    if (newDesc == null) return;
    try {
      await updateMerchantAd(ad.id, { title: newTitle, description: newDesc });
      await showAlert('تم التعديل.', 'تم');
      await refresh();
    } catch (e) {
      console.error(e);
      await showAlert('تعذر التعديل.', 'خطأ');
    }
  };

  return (
    <MainLayout>
      <div className="merchant-my-ads">
        <div className="flex-between" style={{ marginBottom: 14, flexWrap: 'wrap', gap: 12 }}>
          <div>
            <h1 style={{ fontSize: '1.8rem', margin: '0 0 6px' }}>إعلاناتي الممولة</h1>
            <p style={{ margin: 0, color: 'var(--text-secondary)', lineHeight: 1.65, maxWidth: 640 }}>
              كل الطلبات التي أرسلتها: قيد المراجعة، المرفوضة، النشطة، أو المنتهية بعد 24 ساعة من الموافقة. التفاصيل
              كاملة لكل إعلان بما فيها المنتج المربوط (إن وُجد) وإشعار الدفع.
            </p>
          </div>
          <Link to="/merchant/ads" className="btn-request-ad">
            طلب إعلان ممول جديد
          </Link>
        </div>

        {loading ? (
          <p>جاري التحميل…</p>
        ) : ads.length === 0 ? (
          <div className="card" style={{ padding: 24, textAlign: 'center' }}>
            <p style={{ margin: 0, color: 'var(--text-secondary)' }}>لا توجد إعلانات بعد.</p>
            <Link to="/merchant/ads" style={{ display: 'inline-block', marginTop: 14, fontWeight: 800 }}>
              إرسال طلب إعلان ممول
            </Link>
          </div>
        ) : (
          <div className="my-ads-stack">
            {ads.map((ad) => {
              const badge = lifecycleBadge(ad);
              const imgs = visualImageUrls(ad);
              const canEditPending = ad.status === 'pending';
              return (
                <article key={ad.id} className="card my-ad-card">
                  <div className="my-ad-top">
                    <div className="my-ad-media">
                      {imgs.length > 0 ? (
                        <ImageCarousel images={imgs} height={152} borderRadius={16} />
                      ) : (
                        <div className="my-ad-media-empty">
                          <ImageIcon size={32} />
                        </div>
                      )}
                    </div>
                    <div className="my-ad-main">
                      <div className="my-ad-title-row">
                        <h2 className="my-ad-title">{ad.title}</h2>
                        <span className={badge.className}>{badge.label}</span>
                      </div>
                      <div className="my-ad-meta">
                        <span>
                          <strong>سعر العرض في الإعلان:</strong>{' '}
                          {Number(ad.product_price) > 0 ? `${Number(ad.product_price).toFixed(2)} ₪` : '—'}
                        </span>
                        <span>
                          <strong>قناة الدفع:</strong> {ad.payment_method_label || '—'}
                        </span>
                        <span>
                          <strong>أُنشئ:</strong> {fmtDt(ad.created_at)}
                        </span>
                        {ad.approved_at ? (
                          <span>
                            <strong>وافقت الإدارة:</strong> {fmtDt(ad.approved_at)}
                          </span>
                        ) : null}
                      </div>
                      <div className="my-ad-product-block">
                        <strong>المنتج في الكتالوج:</strong>{' '}
                        {ad.product_details ? (
                          <>
                            <Link to={`/merchant/products/${ad.product}/edit`}>{ad.product_details.name}</Link>
                            <span className="muted">
                              {' '}
                              — سعر الكتالوج: {Number(ad.product_details.price).toFixed(2)} ₪
                            </span>
                          </>
                        ) : ad.product ? (
                          <span>مرتبط بمنتج #{ad.product}</span>
                        ) : (
                          <span className="muted">إعلان مستقل (غير مربوط بمنتج في «منتجاتي»)</span>
                        )}
                      </div>
                      <div className="my-ad-desc">
                        <strong>تفاصيل الإعلان</strong>
                        <p>{ad.description?.trim() ? ad.description : <span className="muted">لا يوجد وصف</span>}</p>
                      </div>
                      {ad.payment_receipt_image ? (
                        <div className="my-ad-receipt">
                          <strong>إشعار الدفع</strong>
                          <a href={ad.payment_receipt_image} target="_blank" rel="noreferrer">
                            <img src={ad.payment_receipt_image} alt="إشعار الدفع" className="receipt-thumb" />
                          </a>
                        </div>
                      ) : null}
                      {canEditPending ? (
                        <div className="my-ad-actions">
                          <button type="button" className="iconBtn" onClick={() => quickEdit(ad)} title="تعديل سريع">
                            <Pencil size={18} />
                            تعديل
                          </button>
                          <button type="button" className="iconBtn danger" onClick={() => remove(ad)} title="حذف">
                            <Trash2 size={18} />
                            حذف
                          </button>
                        </div>
                      ) : null}
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        )}

        <style dangerouslySetInnerHTML={{ __html: `
          .merchant-my-ads{
            max-width: 1240px;
            margin-inline: auto;
            padding-inline: clamp(8px, 2.2vw, 22px);
            padding-bottom: 32px;
            box-sizing: border-box;
          }
          .merchant-my-ads .btn-request-ad {
            display: inline-flex; align-items: center; justify-content: center;
            padding: 12px 18px; border-radius: 14px; font-weight: 900; text-decoration: none;
            background: linear-gradient(135deg, var(--primary) 0%, var(--primary-hover) 100%);
            color: var(--secondary); box-shadow: var(--shadow-gold); white-space: nowrap;
          }
          .merchant-my-ads .btn-request-ad:hover { filter: brightness(1.03); }
          .my-ads-stack { display: flex; flex-direction: column; gap: 20px; }
          .my-ad-card { padding: 18px; overflow: hidden; }
          .my-ad-top { display: grid; grid-template-columns: minmax(0, 280px) 1fr; gap: 18px; }
          @media (max-width: 768px) {
            .my-ad-top { grid-template-columns: 1fr; }
          }
          .my-ad-media-empty {
            height: 200px; border-radius: 16px; background: var(--primary-light);
            display: flex; align-items: center; justify-content: center; color: var(--text-secondary);
            border: 1px dashed var(--border);
          }
          .my-ad-title-row { display: flex; flex-wrap: wrap; align-items: flex-start; gap: 10px; margin-bottom: 10px; }
          .my-ad-title { margin: 0; font-size: 1.25rem; color: var(--secondary); flex: 1; min-width: 0; }
          .mb-pill {
            padding: 6px 12px; border-radius: 999px; font-size: 0.78rem; font-weight: 800; white-space: nowrap;
          }
          .mb-pill-pending { background: #fff8e6; color: #856404; border: 1px solid #f5d77a; }
          .mb-pill-active { background: #e8f8f0; color: #1e6b48; border: 1px solid #9dceb5; }
          .mb-pill-rejected { background: #fdecea; color: #922b21; border: 1px solid #f5c6c2; }
          .mb-pill-expired { background: #eef1f4; color: #566573; border: 1px solid var(--border); }
          .mb-pill-warn { background: #fff4e5; color: #a65c00; border: 1px solid #ffc999; }
          .my-ad-meta {
            display: flex; flex-direction: column; gap: 6px; font-size: 0.88rem; line-height: 1.5;
            margin-bottom: 12px; color: var(--text-primary);
          }
          .my-ad-product-block { margin-bottom: 12px; font-size: 0.92rem; line-height: 1.55; }
          .my-ad-product-block a { font-weight: 800; color: var(--secondary); }
          .my-ad-desc { margin-bottom: 12px; }
          .my-ad-desc p { margin: 6px 0 0; line-height: 1.7; white-space: pre-wrap; }
          .my-ad-receipt { margin-top: 8px; }
          .my-ad-receipt .receipt-thumb {
            display: block; margin-top: 8px; max-width: 220px; max-height: 160px; object-fit: contain;
            border-radius: 10px; border: 1px solid var(--border);
          }
          .my-ad-actions { display: flex; gap: 10px; margin-top: 14px; flex-wrap: wrap; }
          .merchant-my-ads .iconBtn {
            border: 1px solid var(--border); background: var(--white); padding: 10px 14px; border-radius: 14px;
            font-weight: 800; color: var(--secondary); display: inline-flex; align-items: center; gap: 8px;
            cursor: pointer; font-family: inherit;
          }
          .merchant-my-ads .iconBtn:hover { background: var(--primary-light); }
          .merchant-my-ads .iconBtn.danger { color: #c0392b; }
        `}} />
      </div>
    </MainLayout>
  );
}
