import React, { useCallback, useEffect, useMemo, useState } from 'react';
import MainLayout from '../../components/MainLayout';
import { useAlert } from '../../components/AlertProvider';
import {
  createPrimaryAdminCommunityCategory,
  createPrimaryAdminStoreCategory,
  deletePrimaryAdminCommunityCategory,
  deletePrimaryAdminStoreCategory,
  getPrimaryAdminCommunityCategories,
  getPrimaryAdminStoreCategories,
} from '../../api/data';
import { adminPanelCss } from './adminPanelCss';

function ImgThumb({ src, alt }) {
  if (!src) return <span className="muted small">—</span>;
  return (
    <a className="cat-thumb" href={src} target="_blank" rel="noreferrer" title="فتح الصورة">
      <img src={src} alt={alt || 'صورة'} loading="lazy" width="88" height="88" />
    </a>
  );
}

export default function AdminCategoryManagement() {
  const { showAlert, showConfirm } = useAlert();
  const [tab, setTab] = useState('stores'); // stores | community

  const [loading, setLoading] = useState(false);
  const [storeCats, setStoreCats] = useState([]);
  const [communityCats, setCommunityCats] = useState([]);

  const [name, setName] = useState('');
  const [slug, setSlug] = useState('');
  const [descHint, setDescHint] = useState('');
  const [sortOrder, setSortOrder] = useState(0);
  const [imageFile, setImageFile] = useState(null);

  const activeList = useMemo(
    () => (tab === 'stores' ? storeCats : communityCats),
    [tab, storeCats, communityCats]
  );

  const load = useCallback(async () => {
    setLoading(true);
    try {
      const [a, b] = await Promise.all([getPrimaryAdminStoreCategories(), getPrimaryAdminCommunityCategories()]);
      setStoreCats(Array.isArray(a?.results) ? a.results : Array.isArray(a) ? a : []);
      setCommunityCats(Array.isArray(b?.results) ? b.results : Array.isArray(b) ? b : []);
    } catch (e) {
      console.error(e);
      setStoreCats([]);
      setCommunityCats([]);
      await showAlert('تعذر تحميل الأقسام.', 'خطأ');
    } finally {
      setLoading(false);
    }
  }, [showAlert]);

  useEffect(() => {
    load();
  }, [load]);

  const resetForm = () => {
    setName('');
    setSlug('');
    setDescHint('');
    setSortOrder(0);
    setImageFile(null);
  };

  const create = async () => {
    const n = name.trim();
    if (!n) return showAlert('اكتب اسم القسم.', 'تنبيه');
    setLoading(true);
    try {
      if (tab === 'stores') {
        await createPrimaryAdminStoreCategory({ name: n, imageFile });
      } else {
        await createPrimaryAdminCommunityCategory({
          name: n,
          slug: slug.trim(),
          description_hint: descHint.trim(),
          sort_order: Number(sortOrder) || 0,
          imageFile,
        });
      }
      resetForm();
      await load();
      await showAlert('تمت الإضافة.', 'تم');
    } catch (e) {
      console.error(e);
      await showAlert('تعذر إضافة القسم.', 'خطأ');
    } finally {
      setLoading(false);
    }
  };

  const remove = async (row) => {
    const ok = await showConfirm(`حذف القسم: ${row.name}؟`, 'تأكيد');
    if (!ok) return;
    setLoading(true);
    try {
      if (tab === 'stores') {
        await deletePrimaryAdminStoreCategory(row.id);
      } else {
        await deletePrimaryAdminCommunityCategory(row.id);
      }
      await load();
      await showAlert('تم الحذف.', 'تم');
    } catch (e) {
      console.error(e);
      await showAlert('تعذر الحذف. إن كان القسم مرتبط بنقاط خدمات مجتمعية سيتم تعطيله بدل الحذف.', 'تنبيه');
      await load();
    } finally {
      setLoading(false);
    }
  };

  return (
    <MainLayout>
      <div className="admin-dash">
        <h1>إدارة الأقسام</h1>
        <p className="admin-intro">إضافة/حذف أقسام المتاجر وأقسام الخدمات المجتمعية، مع صورة افتراضية للقسم.</p>

        <section className="card admin-section" style={{ marginBottom: 16 }}>
          <div className="admin-section-head">
            <h2 style={{ margin: 0 }}>النوع</h2>
            <div className="cat-tabs" role="tablist" aria-label="نوع الأقسام">
              <button type="button" className={`cat-tab${tab === 'stores' ? ' cat-tab--active' : ''}`} onClick={() => setTab('stores')}>
                أقسام المتاجر
              </button>
              <button type="button" className={`cat-tab${tab === 'community' ? ' cat-tab--active' : ''}`} onClick={() => setTab('community')}>
                أقسام الخدمات المجتمعية
              </button>
            </div>
          </div>

          <div className="cat-form">
            <label>
              اسم القسم
              <input value={name} onChange={(e) => setName(e.target.value)} placeholder="مثال: حلويات" />
            </label>

            {tab === 'community' ? (
              <>
                <label>
                  slug (اختياري)
                  <input value={slug} onChange={(e) => setSlug(e.target.value)} placeholder="يُنشأ تلقائياً إن تركته" />
                </label>
                <label style={{ gridColumn: '1 / -1' }}>
                  تلميح/وصف (اختياري)
                  <textarea value={descHint} onChange={(e) => setDescHint(e.target.value)} placeholder="يظهر عند اقتراح نقطة خدمة" />
                </label>
                <label>
                  ترتيب (اختياري)
                  <input type="number" value={sortOrder} onChange={(e) => setSortOrder(e.target.value)} />
                </label>
              </>
            ) : null}

            <label style={{ gridColumn: '1 / -1' }}>
              صورة افتراضية للقسم (اختياري)
              <input type="file" accept="image/*" onChange={(e) => setImageFile(e.target.files?.[0] || null)} />
              <span className="muted small">PNG/JPG</span>
            </label>

            <div className="admin-actions" style={{ gridColumn: '1 / -1' }}>
              <button type="button" className="btn-ok" onClick={create} disabled={loading}>
                إضافة قسم
              </button>
              <button type="button" className="btn-toggle" onClick={resetForm} disabled={loading}>
                مسح الحقول
              </button>
            </div>
          </div>
        </section>

        <section className="card admin-section">
          <div className="admin-section-head">
            <h2 style={{ margin: 0 }}>القائمة</h2>
            {loading ? <span className="muted small">جاري…</span> : <span className="muted small">{activeList.length} قسم</span>}
          </div>

          <div className="admin-table-wrap">
            <table className="admin-accounts-table">
              <thead>
                <tr>
                  <th>الصورة</th>
                  <th>الاسم</th>
                  {tab === 'community' ? <th>slug</th> : null}
                  {tab === 'community' ? <th>نشط</th> : null}
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {activeList.map((c) => (
                  <tr key={c.id}>
                    <td>
                      <ImgThumb src={c.image} alt={c.name} />
                    </td>
                    <td>
                      <strong>{c.name}</strong>
                      <span className="muted small" style={{ display: 'block' }}>
                        #{c.id}
                      </span>
                    </td>
                    {tab === 'community' ? <td dir="ltr">{c.slug}</td> : null}
                    {tab === 'community' ? <td>{c.is_active ? 'نعم' : 'لا'}</td> : null}
                    <td>
                      <button type="button" className="btn-no" onClick={() => remove(c)} disabled={loading}>
                        حذف
                      </button>
                    </td>
                  </tr>
                ))}
                {!loading && activeList.length === 0 ? (
                  <tr>
                    <td colSpan={tab === 'community' ? 5 : 4} className="muted">
                      لا يوجد أقسام.
                    </td>
                  </tr>
                ) : null}
              </tbody>
            </table>
          </div>
        </section>

        <style
          dangerouslySetInnerHTML={{
            __html: `
            ${adminPanelCss}
            .cat-tabs{ display:flex; gap:10px; flex-wrap:wrap; }
            .cat-tab{
              border:1.5px solid var(--border);
              background: var(--white);
              padding: 9px 12px;
              border-radius: 999px;
              font-weight: 900;
              cursor:pointer;
              font-family: inherit;
              color: var(--secondary);
            }
            .cat-tab--active{
              background: linear-gradient(135deg, var(--primary) 0%, var(--primary-hover) 100%);
              border-color: transparent;
              box-shadow: var(--shadow-gold);
            }
            .cat-form{
              display:grid;
              grid-template-columns: repeat(2, minmax(0, 1fr));
              gap: 12px;
              margin-top: 12px;
            }
            .cat-form label{
              display:flex;
              flex-direction:column;
              gap: 6px;
              font-weight: 900;
              color: var(--secondary);
              font-size: 0.9rem;
            }
            .cat-form input, .cat-form textarea{
              padding: 10px 12px;
              border-radius: 12px;
              border: 1.5px solid var(--border);
              background: var(--white);
              font-family: inherit;
            }
            .cat-form textarea{ min-height: 90px; resize: vertical; }
            @media (max-width: 900px){
              .cat-form{ grid-template-columns: 1fr; }
            }
            .cat-thumb{
              display:inline-flex;
              width: 54px;
              height: 54px;
              border-radius: 14px;
              overflow:hidden;
              border: 1px solid rgba(232, 230, 224, 0.95);
              background: rgba(255,255,255,0.92);
              box-shadow: 0 10px 24px rgba(26, 29, 38, 0.06);
            }
            .cat-thumb img{ width:100%; height:100%; object-fit:cover; display:block; }
          `,
          }}
        />
      </div>
    </MainLayout>
  );
}

