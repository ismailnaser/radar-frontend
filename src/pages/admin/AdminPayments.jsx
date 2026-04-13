import React, { useCallback, useEffect, useMemo, useState } from 'react';
import MainLayout from '../../components/MainLayout';
import { useAlert } from '../../components/AlertProvider';
import { createAdminAppPayment, deleteAdminAppPayment, getAdminAppPayments, patchAdminAppPayment } from '../../api/data';
import { Trash2 } from 'lucide-react';

function fmt(iso) {
  if (!iso) return '—';
  try {
    const d = new Date(iso);
    if (Number.isNaN(d.getTime())) return String(iso);
    return d.toLocaleString('ar', { dateStyle: 'medium', timeStyle: 'short' });
  } catch {
    return String(iso);
  }
}

export default function AdminPayments() {
  const { showAlert, showConfirm } = useAlert();

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState('');
  const [rows, setRows] = useState([]);
  const [meta, setMeta] = useState({ total_count: 0, total_paid_ils: '0.00', total_all_ils: '0.00' });

  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [newStatus, setNewStatus] = useState('paid');
  const [notes, setNotes] = useState('');

  const load = useCallback(async () => {
    setLoading(true);
    try {
      const d = await getAdminAppPayments({ status });
      setRows(Array.isArray(d?.results) ? d.results : []);
      setMeta(d?.meta || { total_count: 0, total_paid_ils: '0.00', total_all_ils: '0.00' });
    } catch (e) {
      console.error(e);
      setRows([]);
      setMeta({ total_count: 0, total_paid_ils: '0.00', total_all_ils: '0.00' });
      await showAlert('تعذر تحميل المدفوعات.', 'خطأ');
    } finally {
      setLoading(false);
    }
  }, [status, showAlert]);

  useEffect(() => {
    load();
  }, [load]);

  const totalsLabel = useMemo(() => {
    return `المدفوع: ${meta.total_paid_ils ?? '0.00'} ₪ — الإجمالي (مدفوع + قيد الدفع): ${meta.total_all_ils ?? '0.00'} ₪`;
  }, [meta]);

  const submit = useCallback(async () => {
    const n = Number(String(amount).replace(',', '.'));
    if (!Number.isFinite(n)) {
      await showAlert('يرجى إدخال مبلغ صحيح.', 'تنبيه');
      return;
    }
    try {
      await createAdminAppPayment({
        title: String(title || '').trim(),
        amount_ils: n,
        status: newStatus,
        due_date: dueDate || null,
        notes: String(notes || '').trim(),
      });
      setTitle('');
      setAmount('');
      setDueDate('');
      setNewStatus('paid');
      setNotes('');
      await showAlert('تمت إضافة الدفعة.', 'تم');
      await load();
    } catch (e) {
      console.error(e);
      await showAlert('تعذر إضافة الدفعة.', 'خطأ');
    }
  }, [amount, dueDate, load, newStatus, notes, showAlert, title]);

  const togglePaid = useCallback(
    async (row) => {
      const next = row.status === 'paid' ? 'planned' : 'paid';
      try {
        await patchAdminAppPayment(row.id, { status: next });
        await load();
      } catch (e) {
        console.error(e);
        await showAlert('تعذر تحديث الحالة.', 'خطأ');
      }
    },
    [load, patchAdminAppPayment, showAlert],
  );

  const remove = useCallback(
    async (row) => {
      const ok = await showConfirm?.(`هل تريد حذف هذه الدفعة (${row.amount_ils} ₪)؟`, 'تأكيد الحذف');
      if (!ok) return;
      try {
        await deleteAdminAppPayment(row.id);
        await showAlert('تم حذف الدفعة.', 'تم');
        await load();
      } catch (e) {
        console.error(e);
        await showAlert('تعذر حذف الدفعة.', 'خطأ');
      }
    },
    [deleteAdminAppPayment, load, showAlert, showConfirm],
  );

  return (
    <MainLayout>
      <div className="admin-dash admin-payments-page">
        <h1 style={{ marginTop: 0 }}>المدفوعات</h1>
        <p className="admin-intro">تسجيل ما تم دفعه للتطبيق وما هو قيد الدفع، مع إجمالي واضح للمبالغ.</p>

        <section className="card admin-section">
          <div className="admin-section-head" style={{ alignItems: 'flex-start' }}>
            <div>
              <h2 style={{ margin: 0 }}>المدفوعات</h2>
              <p className="muted small" style={{ margin: '6px 0 0' }}>
                <strong dir="ltr">{meta.total_count ?? 0}</strong> عناصر — <span dir="ltr">{totalsLabel}</span>
              </p>
            </div>
          </div>

          <div className="pay-filters">
            <label>
              الحالة
              <select value={status} onChange={(e) => setStatus(e.target.value)}>
                <option value="">الكل</option>
                <option value="paid">مدفوع</option>
                <option value="planned">قيد الدفع</option>
              </select>
            </label>
            <button type="button" className="btn-ok" onClick={load} disabled={loading}>
              تحديث
            </button>
          </div>

          <div className="pay-create">
            <label>
              العنوان (اختياري)
              <input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="مثال: استضافة / دومين / صيانة..." />
            </label>
            <label>
              المبلغ (₪)
              <input value={amount} onChange={(e) => setAmount(e.target.value)} inputMode="decimal" placeholder="مثال: 50" />
            </label>
            <label>
              الحالة
              <select value={newStatus} onChange={(e) => setNewStatus(e.target.value)}>
                <option value="paid">مدفوع</option>
                <option value="planned">قيد الدفع</option>
              </select>
            </label>
            <label>
              تاريخ الاستحقاق (اختياري)
              <input type="date" value={dueDate} onChange={(e) => setDueDate(e.target.value)} />
            </label>
            <label className="pay-notes">
              ملاحظات (اختياري)
              <input value={notes} onChange={(e) => setNotes(e.target.value)} placeholder="أي تفاصيل إضافية..." />
            </label>
            <button type="button" className="btn-ok" onClick={submit} disabled={loading}>
              إضافة
            </button>
          </div>

          {loading ? (
            <p>جاري التحميل…</p>
          ) : rows.length === 0 ? (
            <p className="muted">لا توجد عناصر.</p>
          ) : (
            <div className="pay-cards">
              {rows.map((r) => (
                <article key={r.id} className="pay-card">
                  <div className="pay-card__top">
                    <div className="pay-card__title">
                      <div style={{ fontWeight: 950, color: 'var(--secondary)' }}>{r.title || 'دفعة'}</div>
                      <div className="muted small">{fmt(r.created_at)}</div>
                      {r.due_date ? <div className="muted small">استحقاق: {r.due_date}</div> : null}
                    </div>
                    <div className="pay-card__amount" dir="ltr">
                      {r.amount_ils} ₪
                    </div>
                  </div>

                  {r.notes ? <div className="pay-card__notes">{r.notes}</div> : null}

                  <div className="pay-card__actions">
                    <button
                      type="button"
                      className={`pay-pill${r.status === 'paid' ? ' pay-pill--paid' : ' pay-pill--planned'}`}
                      onClick={() => togglePaid(r)}
                      title="تغيير الحالة"
                    >
                      {r.status_label || r.status}
                    </button>
                    <button type="button" className="pay-del" onClick={() => remove(r)} title="حذف">
                      <Trash2 size={16} strokeWidth={2.25} aria-hidden /> حذف
                    </button>
                  </div>
                </article>
              ))}
            </div>
          )}

          <style>{`
            .pay-filters{
              display:flex;
              flex-wrap: wrap;
              gap: 10px;
              align-items: end;
              margin-bottom: 12px;
            }
            .pay-filters label{
              display:flex;
              flex-direction: column;
              gap: 6px;
              font-weight: 900;
              color: var(--secondary);
              font-size: 0.9rem;
              min-width: 220px;
            }
            .pay-filters select,
            .pay-create input,
            .pay-create select{
              padding: 10px 12px;
              border-radius: 12px;
              border: 1.5px solid var(--border);
              background: var(--white);
              font-family: inherit;
            }
            .pay-create{
              display:grid;
              grid-template-columns: repeat(5, minmax(0, 1fr));
              gap: 10px;
              align-items: end;
              margin-bottom: 14px;
            }
            .pay-create label{
              display:flex;
              flex-direction: column;
              gap: 6px;
              font-weight: 900;
              color: var(--secondary);
              font-size: 0.9rem;
              min-width: 0;
            }
            .pay-notes{ grid-column: span 2; }
            @media (max-width: 980px){
              .pay-create{ grid-template-columns: 1fr 1fr; }
              .pay-notes{ grid-column: auto; }
            }
            .pay-cards{
              display:grid;
              grid-template-columns: 1fr;
              gap: 12px;
            }
            .pay-card{
              border-radius: 18px;
              border: 1px solid rgba(232, 230, 224, 0.95);
              background: rgba(255,255,255,0.92);
              box-shadow: 0 14px 34px rgba(26, 29, 38, 0.06);
              padding: 14px 14px;
            }
            .pay-card__top{
              display:flex;
              justify-content: space-between;
              gap: 10px;
              align-items: flex-start;
              margin-bottom: 10px;
            }
            .pay-card__amount{
              flex-shrink: 0;
              font-weight: 950;
              color: var(--secondary);
              background: linear-gradient(135deg, rgba(245, 192, 0, 0.18) 0%, rgba(255,255,255,0.92) 100%);
              border: 1px solid rgba(245, 192, 0, 0.35);
              padding: 6px 10px;
              border-radius: 999px;
              white-space: nowrap;
            }
            .pay-card__notes{
              color: var(--text-secondary);
              font-weight: 800;
              line-height: 1.6;
              padding-top: 10px;
              border-top: 1px dashed rgba(232, 230, 224, 0.95);
              margin-top: 6px;
            }
            .pay-card__actions{
              display:flex;
              justify-content: flex-end;
              gap: 10px;
              margin-top: 12px;
              flex-wrap: wrap;
            }
            .pay-pill{
              display:inline-flex;
              align-items:center;
              justify-content:center;
              padding: 8px 12px;
              border-radius: 999px;
              border: 1px solid rgba(232, 230, 224, 0.95);
              background: rgba(255,255,255,0.92);
              font-weight: 950;
              cursor: pointer;
              font-family: inherit;
            }
            .pay-pill--paid{
              border-color: rgba(37, 211, 102, 0.35);
              background: linear-gradient(135deg, rgba(37, 211, 102, 0.14) 0%, rgba(255,255,255,0.92) 100%);
              color: #0b6b2f;
            }
            .pay-pill--planned{
              border-color: rgba(2, 119, 189, 0.28);
              background: linear-gradient(135deg, rgba(2, 119, 189, 0.12) 0%, rgba(255,255,255,0.92) 100%);
              color: #064d79;
            }
            .pay-del{
              display: inline-flex;
              align-items: center;
              justify-content: center;
              gap: 8px;
              padding: 8px 10px;
              border-radius: 12px;
              border: 1.5px solid rgba(229, 115, 115, 0.35);
              background: rgba(255, 241, 241, 0.92);
              color: #c62828;
              cursor: pointer;
              font-weight: 900;
              font-family: inherit;
            }
          `}</style>
        </section>
      </div>
    </MainLayout>
  );
}

