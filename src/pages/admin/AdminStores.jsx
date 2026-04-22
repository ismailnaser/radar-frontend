import React, { useCallback, useEffect, useState } from 'react';
import MainLayout from '../../components/MainLayout';
import { useAlert } from '../../components/AlertProvider';
import {
  getCategories,
  getPrimaryAdminStores,
  patchPrimaryAdminStoreCategories,
  patchPrimaryAdminStoreSuspend,
} from '../../api/data';
import { adminPanelCss } from './adminPanelCss';

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

function getRemainingDaysLabel(iso) {
  if (!iso) return null;
  const end = new Date(iso);
  if (Number.isNaN(end.getTime())) return null;
  const now = new Date();
  const diffMs = end.getTime() - now.getTime();
  const diffDays = Math.ceil(diffMs / (24 * 60 * 60 * 1000));
  if (diffDays > 0) return `متبقي ${diffDays} يوم`;
  if (diffDays === 0) return 'ينتهي اليوم';
  return `منتهي منذ ${Math.abs(diffDays)} يوم`;
}

function AdminStores() {
  const { showAlert, showConfirm } = useAlert();
  const [q, setQ] = useState('');
  const [searchInput, setSearchInput] = useState('');
  const [categoryId, setCategoryId] = useState(null);
  const [categories, setCategories] = useState([]);
  const [categoriesLoading, setCategoriesLoading] = useState(true);
  const [rows, setRows] = useState([]);
  const [meta, setMeta] = useState({ total_all_stores: 0, total_filtered: 0 });
  const [loading, setLoading] = useState(false);
  const [busyId, setBusyId] = useState(null);
  const [editCategoriesByStore, setEditCategoriesByStore] = useState({});

  useEffect(() => {
    let cancelled = false;
    (async () => {
      setCategoriesLoading(true);
      try {
        const list = await getCategories();
        if (!cancelled) setCategories(Array.isArray(list) ? list : []);
      } catch {
        if (!cancelled) setCategories([]);
      } finally {
        if (!cancelled) setCategoriesLoading(false);
      }
    })();
    return () => {
      cancelled = true;
    };
  }, []);

  const load = useCallback(async () => {
    setLoading(true);
    try {
      const data = await getPrimaryAdminStores(q, categoryId);
      if (data && Array.isArray(data.results)) {
        setRows(data.results);
        setMeta({
          total_all_stores: data.meta?.total_all_stores ?? data.results.length,
          total_filtered: data.meta?.total_filtered ?? data.results.length,
        });
      } else if (Array.isArray(data)) {
        setRows(data);
        setMeta({ total_all_stores: data.length, total_filtered: data.length });
      } else {
        setRows([]);
        setMeta({ total_all_stores: 0, total_filtered: 0 });
      }
    } catch (e) {
      console.error(e);
      setRows([]);
      setMeta({ total_all_stores: 0, total_filtered: 0 });
      await showAlert('تعذر تحميل قائمة المتاجر. تأكد أنك مدير أساسي.', 'خطأ');
    } finally {
      setLoading(false);
    }
  }, [q, categoryId, showAlert]);

  useEffect(() => {
    load();
  }, [load]);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    setQ(searchInput.trim());
  };

  const handleToggleSuspend = async (row) => {
    const next = !row.is_suspended_by_admin;
    const verb = next ? 'تعليق المتجر على الخريطة والعامة' : 'إلغاء التعليق وإتاحة الظهور ضمن شروط الاشتراك';
    const ok = await showConfirm(`هل تريد تأكيد: ${verb}؟`, 'تأكيد الإجراء');
    if (!ok) return;
    setBusyId(row.id);
    try {
      await patchPrimaryAdminStoreSuspend(row.id, next);
      await showAlert(next ? 'تم تعليق المتجر.' : 'تم إلغاء التعليق.', 'تم');
      load();
    } catch (err) {
      console.error(err);
      await showAlert('تعذر تحديث حالة المتجر.', 'خطأ');
    } finally {
      setBusyId(null);
    }
  };

  const getRowSelectedCategories = (row) => {
    const edited = editCategoriesByStore[row.id];
    if (Array.isArray(edited)) return edited;
    if (Array.isArray(row.categories) && row.categories.length > 0) return row.categories;
    if (row.category_id != null) return [row.category_id];
    return [];
  };

  const toggleStoreCategory = (rowId, categoryValue) => {
    const cid = Number(categoryValue);
    if (!Number.isFinite(cid) || cid <= 0) return;
    setEditCategoriesByStore((prev) => {
      const current = Array.isArray(prev[rowId]) ? prev[rowId] : [];
      const exists = current.includes(cid);
      const next = exists ? current.filter((v) => v !== cid) : [...current, cid];
      return { ...prev, [rowId]: next };
    });
  };

  const saveStoreCategories = async (row) => {
    const selectedIds = getRowSelectedCategories(row);
    setBusyId(row.id);
    try {
      await patchPrimaryAdminStoreCategories(row.id, selectedIds);
      await showAlert('تم تحديث أقسام المتجر بنجاح.', 'تم');
      await load();
    } catch (err) {
      console.error(err);
      await showAlert('تعذر تحديث أقسام المتجر.', 'خطأ');
    } finally {
      setBusyId(null);
    }
  };

  const totalAll = meta.total_all_stores ?? 0;
  const totalFiltered = meta.total_filtered ?? rows.length;
  const hasActiveFilter = Boolean(q) || categoryId != null;
  const filterDescription = [
    q ? `بحث «${q}»` : null,
    categoryId != null
      ? `قسم: ${categories.find((c) => c.id === categoryId)?.name || categoryId}`
      : null,
  ]
    .filter(Boolean)
    .join(' — ');

  return (
    <MainLayout>
      <div className="admin-dash admin-stores-page">
        <div className="admin-stores-heading-row">
          <div>
            <h1 style={{ margin: '0 0 6px' }}>المتاجر المشتركة</h1>
            <p className="admin-intro" style={{ margin: 0 }}>
              عمود <strong>القسم</strong> لكل متجر، والعدد المرفوع يطابق دائماً فلترة القسم والبحث معاً (ومع «الكل»
              بدون بحث يظهر إجمالي المتاجر المسجّلة).
            </p>
          </div>
          <div
            className="admin-stores-total-pill"
            title={
              hasActiveFilter
                ? `${totalFiltered} متجراً مطابقاً للفلترة${filterDescription ? ` (${filterDescription})` : ''} — إجمالي النظام ${totalAll}`
                : `إجمالي المتاجر المسجّلة: ${totalFiltered}`
            }
          >
            <span className="admin-stores-total-num">{totalFiltered}</span>
            <span className="admin-stores-total-label">متجر ضمن الفلتر</span>
            {hasActiveFilter && totalAll !== totalFiltered ? (
              <span className="admin-stores-total-sub">من أصل {totalAll} في النظام</span>
            ) : null}
          </div>
        </div>

        <p className="admin-stores-filter-hint muted" style={{ marginBottom: '1rem' }}>
          {hasActiveFilter ? (
            <>
              الفلتر النشط: {filterDescription || '—'} — العداد أعلاه = <strong>{totalFiltered}</strong> متجراً.
            </>
          ) : (
            <>لا يوجد فلتر نشط — يُعرض كل المتاجر المسجّلة (<strong>{totalFiltered}</strong>).</>
          )}
        </p>

        <section className="card admin-section">
          <div className="map-filters admin-store-filters" style={{ marginBottom: '1rem', padding: '12px 14px' }}>
            <div style={{ fontWeight: 800, marginBottom: 8, color: 'var(--secondary)' }}>فلترة حسب القسم</div>
            <p style={{ margin: '0 0 10px', fontSize: '0.88rem', color: 'var(--text-secondary)' }}>
              نفس منطق الخريطة: اختر قسماً أو «الكل»، ويُطبَّق مع حقل البحث معاً.
            </p>
            {categoriesLoading ? (
              <p style={{ margin: 0, color: 'var(--text-secondary)' }}>جاري تحميل الأقسام…</p>
            ) : (
              <div className="category-chips">
                <button
                  type="button"
                  className={`chip ${categoryId == null ? 'chip-active' : ''}`}
                  onClick={() => setCategoryId(null)}
                >
                  الكل
                </button>
                {categories.map((c) => (
                  <button
                    key={c.id}
                    type="button"
                    className={`chip ${categoryId === c.id ? 'chip-active' : ''}`}
                    onClick={() => setCategoryId(c.id)}
                  >
                    {c.name}
                  </button>
                ))}
              </div>
            )}
          </div>

          <form className="admin-account-form" onSubmit={handleSearchSubmit} style={{ marginBottom: '1rem' }}>
            <div className="form-row-grid" style={{ alignItems: 'flex-end' }}>
              <label style={{ flex: 1 }}>
                بحث (يُركَّب مع القسم)
                <input
                  type="search"
                  value={searchInput}
                  onChange={(e) => setSearchInput(e.target.value)}
                  placeholder="اسم المتجر، المستخدم، الجوال، العنوان التفصيلي…"
                  autoComplete="off"
                />
              </label>
              <button type="submit" className="btn-ok">
                تنفيذ البحث
              </button>
              <button
                type="button"
                className="btn-toggle"
                onClick={() => {
                  setSearchInput('');
                  setQ('');
                  setCategoryId(null);
                }}
              >
                مسح الكل
              </button>
            </div>
          </form>

          {loading ? (
            <p>جاري التحميل…</p>
          ) : (
            <div className="admin-table-wrap">
              <table className="admin-accounts-table">
                <thead>
                  <tr>
                    <th>المتجر</th>
                    <th>التقييم</th>
                    <th>القسم</th>
                    <th>العنوان التفصيلي</th>
                    <th>صاحب المتجر</th>
                    <th>الجوال</th>
                    <th>الإحداثيات والخريطة</th>
                    <th>ينتهي الاشتراك</th>
                    <th>للعامة</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {rows.map((row) => (
                    <tr key={row.id}>
                      <td>
                        <strong>{row.store_name}</strong>
                        <span className="muted small" style={{ display: 'block' }}>
                          #{row.id}
                        </span>
                      </td>
                      <td>
                        {row.rating_count > 0 && row.rating_average != null ? (
                          <>
                            <strong dir="ltr">{Number(row.rating_average).toFixed(1)}</strong>
                            <span className="muted small" style={{ display: 'block' }}>
                              {row.rating_count} تقييم
                            </span>
                          </>
                        ) : (
                          <span className="muted small">— بدون تقييم</span>
                        )}
                      </td>
                      <td>
                        <div className="admin-store-category-picker">
                          <div className="admin-store-category-list">
                            {categories.map((cat) => {
                              const selected = getRowSelectedCategories(row).includes(cat.id);
                              return (
                                <label key={`${row.id}-${cat.id}`} className={`admin-store-cat-item ${selected ? 'is-selected' : ''}`}>
                                  <input
                                    type="checkbox"
                                    checked={selected}
                                    onChange={() => toggleStoreCategory(row.id, cat.id)}
                                  />
                                  <span>{cat.name}</span>
                                </label>
                              );
                            })}
                          </div>
                          <button
                            type="button"
                            className="btn-toggle"
                            disabled={busyId === row.id}
                            onClick={() => saveStoreCategories(row)}
                            style={{ marginTop: 8 }}
                          >
                            حفظ الأقسام
                          </button>
                        </div>
                      </td>
                      <td style={{ maxWidth: '280px', lineHeight: 1.5 }}>
                        {row.location_address?.trim() ? (
                          <span>{row.location_address.trim()}</span>
                        ) : (
                          <span className="muted small">— لم يُدخل عنوان نصي</span>
                        )}
                      </td>
                      <td>{row.merchant_username || '—'}</td>
                      <td dir="ltr" style={{ textAlign: 'right' }}>
                        {row.merchant_phone || '—'}
                      </td>
                      <td>
                        {row.latitude != null && row.longitude != null ? (
                          <>
                            <span className="muted small" dir="ltr" style={{ display: 'block' }}>
                              {Number(row.latitude).toFixed(5)}, {Number(row.longitude).toFixed(5)}
                            </span>
                            {row.map_preview_url ? (
                              <a href={row.map_preview_url} target="_blank" rel="noreferrer">
                                فتح على الخريطة
                              </a>
                            ) : null}
                          </>
                        ) : (
                          <span className="muted small">لم يُحدد</span>
                        )}
                      </td>
                      <td>
                        {formatDt(row.subscription_end_date)}
                        {getRemainingDaysLabel(row.subscription_end_date) ? (
                          <span className="muted small" style={{ display: 'block' }}>
                            {getRemainingDaysLabel(row.subscription_end_date)}
                          </span>
                        ) : null}
                        <span className="muted small" style={{ display: 'block' }}>
                          {row.subscription_is_active ? 'علم نشط' : 'علم غير نشط'}
                        </span>
                        {row.is_suspended_by_admin ? (
                          <span className="tier-badge tier-secondary" style={{ marginTop: '0.25rem' }}>
                            معلّق إدارياً
                          </span>
                        ) : null}
                      </td>
                      <td>
                        {row.is_publicly_visible ? (
                          <span className="tier-badge tier-primary">يظهر</span>
                        ) : (
                          <span className="tier-badge tier-secondary">مخفي</span>
                        )}
                      </td>
                      <td>
                        <button
                          type="button"
                          className="btn-toggle"
                          disabled={busyId === row.id}
                          onClick={() => handleToggleSuspend(row)}
                        >
                          {row.is_suspended_by_admin ? 'رفع التعليق' : 'تعليق المتجر'}
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              {!loading && rows.length === 0 ? <p className="muted">لا توجد نتائج.</p> : null}
            </div>
          )}
        </section>

        <style dangerouslySetInnerHTML={{ __html: adminPanelCss }} />
        <style dangerouslySetInnerHTML={{ __html: `
          .admin-stores-heading-row {
            display: flex;
            flex-wrap: wrap;
            align-items: flex-start;
            justify-content: space-between;
            gap: 16px;
            margin-bottom: 8px;
          }
          .admin-stores-total-pill {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            min-width: 100px;
            padding: 12px 18px;
            border-radius: 16px;
            background: linear-gradient(145deg, #fde8e8 0%, #fff5f5 100%);
            border: 2px solid #e74c3c;
            box-shadow: 0 4px 14px rgba(231, 76, 60, 0.15);
            text-align: center;
          }
          .admin-stores-total-num {
            font-size: 1.75rem;
            font-weight: 900;
            color: #c0392b;
            line-height: 1.1;
          }
          .admin-stores-total-label {
            font-size: 0.78rem;
            font-weight: 700;
            color: #922b21;
            margin-top: 4px;
          }
          .admin-stores-total-sub {
            font-size: 0.72rem;
            font-weight: 600;
            color: #7b241c;
            margin-top: 6px;
            opacity: 0.9;
          }
          .admin-store-category-cell {
            font-weight: 700;
            color: var(--secondary);
            line-height: 1.4;
          }
          .admin-store-filters .category-chips {
            display: flex;
            flex-wrap: wrap;
            gap: 8px;
            max-height: 140px;
            overflow-y: auto;
          }
          .admin-store-filters .chip {
            border: 1.5px solid var(--border);
            background: var(--white);
            color: var(--secondary);
            padding: 6px 12px;
            border-radius: 999px;
            font-weight: 700;
            font-size: 0.85rem;
            cursor: pointer;
            transition: background 0.15s ease, border-color 0.15s ease;
            font-family: inherit;
          }
          .admin-store-filters .chip:hover {
            background: var(--primary-light);
            border-color: var(--primary);
          }
          .admin-store-filters .chip-active {
            background: linear-gradient(135deg, var(--primary) 0%, var(--primary-hover) 100%);
            color: var(--secondary);
            border-color: transparent;
            box-shadow: var(--shadow-gold);
          }
          .admin-store-category-picker {
            min-width: 190px;
          }
          .admin-store-category-list {
            max-height: 132px;
            overflow-y: auto;
            padding: 6px;
            border: 1px solid var(--border);
            border-radius: 10px;
            background: #fff;
            display: flex;
            flex-direction: column;
            gap: 6px;
          }
          .admin-store-cat-item {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            font-size: 0.82rem;
            font-weight: 700;
          }
          .admin-store-cat-item input {
            width: 14px;
            height: 14px;
          }
          .admin-store-cat-item.is-selected span {
            color: var(--secondary);
          }
        `}} />
      </div>
    </MainLayout>
  );
}

export default AdminStores;
