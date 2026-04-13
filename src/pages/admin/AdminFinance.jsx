import React, { useCallback, useEffect, useMemo, useState } from 'react';
import MainLayout from '../../components/MainLayout';
import { useAlert } from '../../components/AlertProvider';
import { deleteAdminFinanceTransfer, getAdminFinanceTransfers } from '../../api/data';
import { Trash2 } from 'lucide-react';

function formatDt(iso) {
  if (!iso) return '—';
  try {
    const d = new Date(iso);
    if (Number.isNaN(d.getTime())) return String(iso);
    return d.toLocaleString('ar', { dateStyle: 'medium', timeStyle: 'short' });
  } catch {
    return String(iso);
  }
}

export default function AdminFinance() {
  const { showAlert, showConfirm } = useAlert();

  const [q, setQ] = useState('');
  const [kind, setKind] = useState('');
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [method, setMethod] = useState('');
  const [loading, setLoading] = useState(false);
  const [rows, setRows] = useState([]);
  const [meta, setMeta] = useState({ total_count: 0, total_amount_ils: '0.00' });

  const loadTransfers = useCallback(async () => {
    setLoading(true);
    try {
      const d = await getAdminFinanceTransfers({ q, from, to, method, kind });
      setRows(Array.isArray(d?.results) ? d.results : []);
      setMeta(d?.meta || { total_count: 0, total_amount_ils: '0.00' });
    } catch (e) {
      console.error(e);
      setRows([]);
      setMeta({ total_count: 0, total_amount_ils: '0.00' });
      await showAlert('تعذر تحميل التحويلات/الأرباح.', 'خطأ');
    } finally {
      setLoading(false);
    }
  }, [q, from, to, method, kind, showAlert]);

  const removeTransfer = useCallback(
    async (row) => {
      const ok = await showConfirm?.(
        `هل تريد حذف هذه التحويلة (${row.amount_ils} ₪)؟ هذا الإجراء لا يمكن التراجع عنه.`,
        'تأكيد الحذف',
      );
      if (!ok) return;
      try {
        await deleteAdminFinanceTransfer(row.id);
        await showAlert('تم حذف التحويلة.', 'تم');
        await loadTransfers();
      } catch (e) {
        console.error(e);
        await showAlert('تعذر حذف التحويلة.', 'خطأ');
      }
    },
    [deleteAdminFinanceTransfer, loadTransfers, showAlert, showConfirm],
  );

  useEffect(() => {
    loadTransfers();
  }, [loadTransfers]);

  return (
    <MainLayout>
      <div className="admin-dash admin-finance-page">
        <h1 style={{ marginTop: 0 }}>الأرباح والتحويلات</h1>
        <p className="admin-intro">
          هذه الصفحة للمدير الأساسي: مراجعة التحويلات/الأرباح من الإعلانات الممولة وتجديد الاشتراكات المقبولة.
        </p>

        <section className="card admin-section">
          <div className="admin-section-head" style={{ alignItems: 'flex-start' }}>
            <div>
              <h2 style={{ margin: 0 }}>الأرباح والتحويلات</h2>
              <p className="muted small" style={{ margin: '6px 0 0' }}>
                إجمالي التحويلات ضمن الفلتر: <strong dir="ltr">{meta.total_count ?? 0}</strong> — مجموع المبالغ:{' '}
                <strong dir="ltr">{meta.total_amount_ils ?? '0.00'} ₪</strong>
              </p>
            </div>
          </div>

          <div className="admin-finance-filters" style={{ marginBottom: 12 }}>
            <label>
              بحث باسم المتجر/اليوزر/الجوال
              <input
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder="مثال: اسم متجر أو 059..."
                autoComplete="off"
              />
            </label>
            <label>
              مصدر الأرباح
              <select value={kind} onChange={(e) => setKind(e.target.value)}>
                <option value="">الكل</option>
                <option value="sponsored_ad">الإعلانات الممولة فقط</option>
                <option value="subscription_renewal">الاشتراكات فقط</option>
              </select>
            </label>
            <label>
              من تاريخ
              <input type="date" value={from} onChange={(e) => setFrom(e.target.value)} />
            </label>
            <label>
              إلى تاريخ
              <input type="date" value={to} onChange={(e) => setTo(e.target.value)} />
            </label>
            <label>
              طريقة التحويل
              <select value={method} onChange={(e) => setMethod(e.target.value)}>
                <option value="">الكل</option>
                <option value="balipay_wallet">محفظة بال باي</option>
                <option value="bank_palestine">بنك فلسطين</option>
                <option value="other">أخرى</option>
              </select>
            </label>
            <button type="button" className="btn-ok" onClick={loadTransfers} disabled={loading}>
              تحديث
            </button>
            <button
              type="button"
              className="btn-toggle"
              onClick={() => {
                setQ('');
                setKind('');
                setFrom('');
                setTo('');
                setMethod('');
              }}
            >
              مسح الفلاتر
            </button>
          </div>

          {loading ? (
            <p>جاري التحميل…</p>
          ) : rows.length === 0 ? (
            <p className="muted">لا توجد تحويلات ضمن هذه الفلاتر.</p>
          ) : (
            <>
              {/* Desktop / Tablet table */}
              <div className="admin-table-wrap admin-finance-table-wrap">
                <table className="admin-accounts-table admin-finance-table">
                  <thead>
                    <tr>
                      <th>الإشعار</th>
                      <th>المتجر</th>
                      <th>صاحب المتجر</th>
                      <th>الجوال</th>
                      <th>النوع</th>
                      <th>طريقة التحويل</th>
                      <th>المبلغ</th>
                      <th>تاريخ/وقت التحويل</th>
                      <th>إجراءات</th>
                    </tr>
                  </thead>
                  <tbody>
                    {rows.map((r) => (
                      <tr key={r.id}>
                        <td>
                          {r.receipt_image ? (
                            <a href={r.receipt_image} target="_blank" rel="noreferrer" className="fin-receipt">
                              <img src={r.receipt_image} alt="إشعار التحويل" loading="lazy" />
                            </a>
                          ) : (
                            <span className="muted small">—</span>
                          )}
                        </td>
                        <td>
                          <strong>{r.store_name}</strong>
                          <span className="muted small" style={{ display: 'block' }}>
                            #{r.store_id}
                          </span>
                        </td>
                        <td>{r.merchant_username || '—'}</td>
                        <td dir="ltr" style={{ textAlign: 'right' }}>
                          {r.merchant_phone || '—'}
                        </td>
                        <td>
                          <span className="fin-pill fin-pill--kind">{r.kind_label || r.kind}</span>
                        </td>
                        <td>
                          <span className={`fin-pill fin-pill--method fin-pill--${r.payment_method || 'other'}`}>
                            {r.payment_method_label || r.payment_method}
                          </span>
                        </td>
                        <td className="fin-amount" dir="ltr">
                          {r.amount_ils} ₪
                        </td>
                        <td className="fin-dt">{formatDt(r.created_at)}</td>
                        <td>
                          <button
                            type="button"
                            className="fin-del"
                            onClick={() => removeTransfer(r)}
                            title="حذف التحويلة"
                            aria-label="حذف التحويلة"
                          >
                            <Trash2 size={16} strokeWidth={2.25} aria-hidden />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Mobile cards */}
              <div className="fin-cards" aria-label="قائمة التحويلات">
                {rows.map((r) => (
                  <article key={`m-${r.id}`} className="fin-card">
                    <div className="fin-card__top">
                      <div className="fin-card__store">
                        <div className="fin-card__storeName">{r.store_name}</div>
                        <div className="muted small">#{r.store_id}</div>
                      </div>
                      <div className="fin-card__amount" dir="ltr">
                        {r.amount_ils} ₪
                      </div>
                    </div>

                    {r.receipt_image ? (
                      <a href={r.receipt_image} target="_blank" rel="noreferrer" className="fin-card__receipt">
                        <img src={r.receipt_image} alt="إشعار التحويل" loading="lazy" />
                        <span>فتح إشعار التحويل</span>
                      </a>
                    ) : null}

                    <div className="fin-card__pills">
                      <span className="fin-pill fin-pill--kind">{r.kind_label || r.kind}</span>
                      <span className={`fin-pill fin-pill--method fin-pill--${r.payment_method || 'other'}`}>
                        {r.payment_method_label || r.payment_method}
                      </span>
                    </div>

                    <div className="fin-kv">
                      <div className="fin-kv__row">
                        <span className="fin-kv__k">صاحب المتجر</span>
                        <span className="fin-kv__v">{r.merchant_username || '—'}</span>
                      </div>
                      <div className="fin-kv__row">
                        <span className="fin-kv__k">الجوال</span>
                        <span className="fin-kv__v" dir="ltr">
                          {r.merchant_phone || '—'}
                        </span>
                      </div>
                      <div className="fin-kv__row">
                        <span className="fin-kv__k">التاريخ</span>
                        <span className="fin-kv__v">{formatDt(r.created_at)}</span>
                      </div>
                    </div>

                    <div className="fin-card__actions">
                      <button
                        type="button"
                        className="fin-del"
                        onClick={() => removeTransfer(r)}
                        title="حذف التحويلة"
                        aria-label="حذف التحويلة"
                      >
                        <Trash2 size={16} strokeWidth={2.25} aria-hidden />
                        حذف
                      </button>
                    </div>
                  </article>
                ))}
              </div>
            </>
          )}

          <style
            dangerouslySetInnerHTML={{
              __html: `
              .admin-finance-filters{
                display: grid;
                grid-template-columns: repeat(6, minmax(0, 1fr));
                gap: 10px;
                align-items: end;
              }
              .admin-finance-filters label{
                display: flex;
                flex-direction: column;
                gap: 6px;
                font-weight: 800;
                color: var(--secondary);
                font-size: 0.9rem;
              }
              .admin-finance-filters input,
              .admin-finance-filters select{
                padding: 10px 12px;
                border-radius: 12px;
                border: 1.5px solid var(--border);
                background: var(--white);
                font-family: inherit;
              }
              @media (max-width: 900px){
                .admin-finance-filters{ grid-template-columns: 1fr 1fr; }
              }

              .admin-finance-table th{
                position: sticky;
                top: 0;
                background: var(--surface);
                z-index: 1;
              }
              .admin-finance-table-wrap{
                border-radius: 18px;
                border: 1px solid rgba(232, 230, 224, 0.95);
                background: rgba(255,255,255,0.92);
                box-shadow: 0 14px 34px rgba(26, 29, 38, 0.06);
                overflow: auto;
              }
              .admin-finance-table{
                width: 100%;
                min-width: 1120px;
                border-collapse: separate;
                border-spacing: 0;
              }
              .admin-finance-table th, .admin-finance-table td{
                padding: 14px 14px;
                border-bottom: 1px solid rgba(232, 230, 224, 0.95);
                vertical-align: middle;
              }
              .admin-finance-table thead th{
                background: linear-gradient(180deg, rgba(255, 249, 230, 0.75) 0%, rgba(255,255,255,0.96) 100%);
                font-weight: 950;
                white-space: nowrap;
              }
              .admin-finance-table tbody tr:nth-child(even){
                background: rgba(245, 246, 248, 0.55);
              }
              .admin-finance-table tbody tr:hover{
                background: rgba(255, 204, 0, 0.08);
              }
              .admin-finance-table tbody tr:last-child td{
                border-bottom: none;
              }
              .fin-amount{
                font-weight: 950;
                text-align: right;
                white-space: nowrap;
              }
              .fin-dt{
                white-space: nowrap;
              }
              .fin-receipt{
                display: inline-flex;
                width: 56px;
                height: 56px;
                border-radius: 14px;
                overflow: hidden;
                border: 1px solid rgba(232, 230, 224, 0.95);
                background: rgba(255,255,255,0.92);
                box-shadow: 0 10px 24px rgba(26, 29, 38, 0.06);
              }
              .fin-receipt img{
                width: 100%;
                height: 100%;
                object-fit: cover;
                display: block;
              }

              /* Mobile cards */
              .fin-cards{ display: none; }
              @media (max-width: 820px){
                .admin-finance-table-wrap{ display: none; }
                .fin-cards{
                  display: grid;
                  grid-template-columns: 1fr;
                  gap: 12px;
                }
                .fin-card{
                  border-radius: 18px;
                  border: 1px solid rgba(232, 230, 224, 0.95);
                  background: rgba(255,255,255,0.92);
                  box-shadow: 0 14px 34px rgba(26, 29, 38, 0.06);
                  padding: 14px 14px;
                }
                .fin-card__top{
                  display: flex;
                  align-items: flex-start;
                  justify-content: space-between;
                  gap: 10px;
                  margin-bottom: 10px;
                }
                .fin-card__storeName{
                  font-weight: 950;
                  color: var(--secondary);
                  line-height: 1.35;
                }
                .fin-card__amount{
                  flex-shrink: 0;
                  font-weight: 950;
                  color: var(--secondary);
                  background: linear-gradient(135deg, rgba(245, 192, 0, 0.18) 0%, rgba(255,255,255,0.92) 100%);
                  border: 1px solid rgba(245, 192, 0, 0.35);
                  padding: 6px 10px;
                  border-radius: 999px;
                  white-space: nowrap;
                }
                .fin-card__receipt{
                  display: flex;
                  align-items: center;
                  gap: 10px;
                  padding: 10px 10px;
                  border-radius: 16px;
                  border: 1px solid rgba(232, 230, 224, 0.95);
                  background: rgba(255,255,255,0.92);
                  text-decoration: none;
                  color: var(--secondary);
                  box-shadow: 0 10px 24px rgba(26, 29, 38, 0.06);
                  margin-bottom: 12px;
                }
                .fin-card__receipt img{
                  width: 54px;
                  height: 54px;
                  border-radius: 14px;
                  object-fit: cover;
                  border: 1px solid rgba(232, 230, 224, 0.95);
                  flex-shrink: 0;
                }
                .fin-card__receipt span{
                  font-weight: 950;
                  color: var(--secondary);
                }
                .fin-card__pills{
                  display: flex;
                  flex-wrap: wrap;
                  gap: 8px;
                  margin-bottom: 12px;
                }
                .fin-kv{
                  display: grid;
                  gap: 8px;
                }
                .fin-kv__row{
                  display: flex;
                  align-items: baseline;
                  justify-content: space-between;
                  gap: 10px;
                  padding-top: 8px;
                  border-top: 1px dashed rgba(232, 230, 224, 0.95);
                }
                .fin-kv__row:first-child{
                  border-top: none;
                  padding-top: 0;
                }
                .fin-kv__k{
                  font-weight: 900;
                  color: var(--text-secondary);
                  font-size: 0.86rem;
                }
                .fin-kv__v{
                  font-weight: 900;
                  color: var(--secondary);
                  text-align: left;
                }
              }

              .fin-pill{
                display: inline-flex;
                align-items: center;
                justify-content: center;
                padding: 4px 10px;
                border-radius: 999px;
                font-weight: 900;
                font-size: 0.8rem;
                line-height: 1.2;
                border: 1px solid rgba(232, 230, 224, 0.95);
                background: rgba(255, 255, 255, 0.92);
                color: var(--secondary);
                white-space: nowrap;
              }
              .fin-pill--kind{
                background: linear-gradient(135deg, rgba(245, 192, 0, 0.18) 0%, rgba(255,255,255,0.92) 100%);
                border-color: rgba(245, 192, 0, 0.35);
              }
              .fin-pill--balipay_wallet{
                border-color: rgba(37, 211, 102, 0.35);
                background: linear-gradient(135deg, rgba(37, 211, 102, 0.14) 0%, rgba(255,255,255,0.92) 100%);
              }
              .fin-pill--bank_palestine{
                border-color: rgba(2, 119, 189, 0.28);
                background: linear-gradient(135deg, rgba(2, 119, 189, 0.12) 0%, rgba(255,255,255,0.92) 100%);
              }
              .fin-pill--other{
                border-color: rgba(99, 110, 114, 0.28);
              }

              .fin-del{
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
                transition: background 0.15s ease, border-color 0.15s ease, transform 0.12s ease;
                white-space: nowrap;
              }
              .fin-del:hover{
                background: rgba(255, 227, 227, 0.95);
                border-color: rgba(198, 40, 40, 0.45);
              }
              .fin-del:active{ transform: scale(0.98); }
              .fin-card__actions{ margin-top: 12px; display: flex; justify-content: flex-end; }
            `,
            }}
          />
        </section>
      </div>
    </MainLayout>
  );
}

