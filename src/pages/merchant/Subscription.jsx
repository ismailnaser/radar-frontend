import React, { useEffect, useMemo, useState } from 'react';
import MainLayout from '../../components/MainLayout';
import { getMerchantSubscriptionStatus, getMerchantSubscriptionRenewalRequests, createMerchantSubscriptionRenewalRequest } from '../../api/data';
import CustomButton from '../../components/ui/CustomButton';
import { useAlert } from '../../components/AlertProvider';
import { formatApiError } from '../../utils/apiErrors';
import { Clock, Image as ImageIcon, Upload } from 'lucide-react';

const MAX_IMAGE_MB = 3;

const MerchantSubscription = () => {
  const { showAlert } = useAlert();
  const [subscription, setSubscription] = useState(null);
  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(true);

  const [notes, setNotes] = useState('');
  const [receipt, setReceipt] = useState(null);
  const [submitting, setSubmitting] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState('balipay_wallet');

  const statusLabel = (s) => {
    const v = String(s || '').toLowerCase();
    if (v === 'approved') return 'مقبول';
    if (v === 'pending') return 'قيد المراجعة';
    if (v === 'rejected') return 'مرفوض';
    return s || '—';
  };

  const preview = useMemo(() => (receipt ? URL.createObjectURL(receipt) : ''), [receipt]);

  const daysLeft = useMemo(() => {
    if (!subscription?.end_date) return null;
    const end = new Date(subscription.end_date).getTime();
    const now = Date.now();
    const diff = Math.ceil((end - now) / (1000 * 60 * 60 * 24));
    return Number.isFinite(diff) ? diff : null;
  }, [subscription]);

  const refresh = async () => {
    setLoading(true);
    try {
      const [sub, reqs] = await Promise.all([
        getMerchantSubscriptionStatus(),
        getMerchantSubscriptionRenewalRequests(),
      ]);
      setSubscription(sub);
      setRequests(reqs);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { refresh(); }, []);

  const pick = (file) => {
    if (!file) return;
    const mb = file.size / (1024 * 1024);
    if (mb > MAX_IMAGE_MB) {
      void showAlert(`حجم الصورة كبير. الحد الأقصى ${MAX_IMAGE_MB}MB`, 'تنبيه');
      return;
    }
    setReceipt(file);
  };

  const submit = async (e) => {
    e.preventDefault();
    if (!receipt) {
      await showAlert('لازم ترفع إشعار الدفع (صورة)', 'تنبيه');
      return;
    }
    setSubmitting(true);
    try {
      const fd = new FormData();
      fd.append('receipt_image', receipt);
      if (notes) fd.append('notes', notes);
      if (paymentMethod) fd.append('payment_method', paymentMethod);
      await createMerchantSubscriptionRenewalRequest(fd);
      setNotes('');
      setReceipt(null);
      setPaymentMethod('balipay_wallet');
      await refresh();
      await showAlert('تم إرسال طلب التجديد بنجاح. سيتم المراجعة خلال 24 ساعة.', 'تم');
    } catch (err) {
      await showAlert(formatApiError(err, 'تعذر إرسال طلب التجديد.'), 'فشل');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <MainLayout>
      <div className="merchant-subscription">
        <h1 style={{ marginBottom: 14, fontSize: '1.8rem' }}>الاشتراك</h1>

        <div className="card" style={{ marginBottom: 16 }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12, flexWrap: 'wrap' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              <div style={{ background: '#FFF9E6', padding: 10, borderRadius: 14, display: 'flex' }}>
                <Clock size={22} color="#FFCC00" />
              </div>
              <div>
                <div style={{ fontWeight: 900 }}>المدة المتبقية</div>
                <div style={{ color: 'var(--text-secondary)' }}>
                  {loading ? '...' : (daysLeft == null ? '—' : `${Math.max(daysLeft, 0)} يوم`)}
                </div>
              </div>
            </div>
            <span className="badge">
              {subscription?.is_active ? 'نشط' : 'غير نشط'}
            </span>
          </div>
        </div>

        <div
          className="card"
          style={{
            padding: '14px 16px',
            marginBottom: 16,
            background: 'linear-gradient(135deg, #FFF9E6 0%, #fff 100%)',
            border: '1px solid rgba(245,192,0,0.35)',
            borderRadius: 14,
            lineHeight: 1.65,
            fontSize: '0.95rem',
          }}
        >
          <strong style={{ color: 'var(--secondary)' }}>ملاحظة:</strong> رسوم تجديد الاشتراك <strong>10 شيكل</strong>.
          رقم التحويل الخاص بـ <strong>رادار</strong> هو <strong dir="ltr">0592377078</strong> باسم{' '}
          <strong>اسماعيل عبدالعال</strong> (بنك ومحفظة). سيتم الرد على طلبك خلال <strong>24 ساعة</strong>.
        </div>

        <div className="card" style={{ marginBottom: 16 }}>
          <h3 style={{ marginBottom: 10 }}>طلب تجديد (رفع إشعار دفع)</h3>
          <form onSubmit={submit}>
            <div className="card" style={{ padding: 12, marginBottom: 14, background: 'var(--surface)' }}>
              <div style={{ fontWeight: 900, marginBottom: 8 }}>طريقة التحويل</div>
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
                  borderRadius: 14,
                  overflow: 'hidden',
                  border: '1.5px solid var(--border)',
                  background: 'var(--white)',
                }}
                role="group"
                aria-label="طريقة التحويل"
              >
                <button
                  type="button"
                  onClick={() => setPaymentMethod('balipay_wallet')}
                  style={{
                    padding: '12px 8px',
                    border: 'none',
                    cursor: 'pointer',
                    fontWeight: 800,
                    fontFamily: 'inherit',
                    background: paymentMethod === 'balipay_wallet' ? 'var(--primary)' : 'transparent',
                    color: paymentMethod === 'balipay_wallet' ? 'var(--secondary)' : 'var(--text-secondary)',
                  }}
                >
                  محفظة بال باي
                </button>
                <button
                  type="button"
                  onClick={() => setPaymentMethod('bank_palestine')}
                  style={{
                    padding: '12px 8px',
                    border: 'none',
                    cursor: 'pointer',
                    fontWeight: 800,
                    fontFamily: 'inherit',
                    borderInlineStart: '1.5px solid var(--border)',
                    background: paymentMethod === 'bank_palestine' ? 'var(--primary)' : 'transparent',
                    color: paymentMethod === 'bank_palestine' ? 'var(--secondary)' : 'var(--text-secondary)',
                  }}
                >
                  بنك فلسطين
                </button>
              </div>
              <div className="muted small" style={{ marginTop: 8, lineHeight: 1.5 }}>
                اختر القناة التي ستحوّل عليها.
              </div>
            </div>
            <div className="input-group">
              <textarea
                placeholder="ملاحظات (اختياري)"
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                style={{
                  width: '100%',
                  padding: '0.85rem 1rem',
                  borderRadius: 'var(--radius-md)',
                  border: '1.5px solid var(--border)',
                  background: 'var(--surface)',
                  minHeight: 90,
                  resize: 'vertical',
                }}
              />
            </div>

            <div className="card" style={{ padding: 14, marginBottom: 14, background: 'var(--surface)' }}>
              <div style={{ display: 'flex', gap: 14, alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap' }}>
                <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
                  <div className="thumbLg">
                    {preview ? <img src={preview} alt="receipt" /> : <ImageIcon size={22} />}
                  </div>
                  <div>
                    <div style={{ fontWeight: 900 }}>إشعار الدفع</div>
                    <div style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>PNG/JPG حتى {MAX_IMAGE_MB}MB</div>
                  </div>
                </div>

                <label className="iconBtn" style={{ cursor: 'pointer' }}>
                  <Upload size={18} />
                  رفع صورة
                  <input type="file" accept="image/*" style={{ display: 'none' }} onChange={(e) => pick(e.target.files?.[0])} />
                </label>
              </div>
            </div>

            <CustomButton
              type="submit"
              loading={submitting}
              style={{ width: '100%' }}
              confirm={false}
              showErrorAlert={false}
            >
              إرسال طلب التجديد
            </CustomButton>
          </form>
        </div>

        <div className="card" style={{ padding: 0, overflow: 'hidden' }}>
          <div style={{ padding: 16, fontWeight: 900, background: 'var(--surface)', borderBottom: '1px solid var(--border)' }}>
            طلبات التجديد
          </div>
          {loading ? (
            <div style={{ padding: 16 }}>جاري التحميل...</div>
          ) : requests.length === 0 ? (
            <div style={{ padding: 16 }}>لا يوجد طلبات بعد.</div>
          ) : (
            requests.map((r) => (
              <div key={r.id} style={{ padding: 14, borderTop: '1px solid var(--border)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12, flexWrap: 'wrap' }}>
                <div>
                  <div style={{ fontWeight: 900 }}>طلب #{r.id}</div>
                  <div style={{ color: 'var(--text-secondary)' }}>{r.notes || '—'}</div>
                </div>
                <span className="badge">{statusLabel(r.status)}</span>
              </div>
            ))
          )}
        </div>

        <style dangerouslySetInnerHTML={{ __html: `
          .merchant-subscription{
            max-width: 1240px;
            margin-inline: auto;
            padding-inline: clamp(8px, 2.2vw, 22px);
            padding-bottom: 32px;
            box-sizing: border-box;
          }
          .thumbLg { width: 72px; height: 72px; border-radius: 20px; background: var(--primary-light); border: 1px solid rgba(245,192,0,0.25); display: flex; align-items: center; justify-content: center; overflow: hidden; }
          .thumbLg img { width: 100%; height: 100%; object-fit: cover; }
          .iconBtn { border: 1px solid var(--border); background: var(--white); padding: 10px 14px; border-radius: 14px; font-weight: 900; color: var(--secondary); display: inline-flex; align-items: center; gap: 8px; }
          .iconBtn:hover { background: var(--primary-light); }
        `}} />
      </div>
    </MainLayout>
  );
};

export default MerchantSubscription;

