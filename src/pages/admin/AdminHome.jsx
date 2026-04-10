import React, { useEffect, useState } from 'react';
import MainLayout from '../../components/MainLayout';
import { adminPanelCss } from './adminPanelCss';
import { getAdminMetrics } from '../../api/data';

function AdminHome() {
  const [metrics, setMetrics] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      setLoading(true);
      try {
        const data = await getAdminMetrics();
        if (!cancelled) setMetrics(data);
      } catch {
        if (!cancelled) setMetrics(null);
      } finally {
        if (!cancelled) setLoading(false);
      }
    })();
    return () => {
      cancelled = true;
    };
  }, []);

  const u = metrics?.users;
  const opens = metrics?.app_opens;
  return (
    <MainLayout>
      <div className="admin-dash">
        <h1>لوحة الإدارة</h1>
        <section className="card admin-section">
          <div className="admin-section-head">
            <h2>ملخص سريع</h2>
          </div>
          {loading ? (
            <p>جاري التحميل…</p>
          ) : !metrics ? (
            <p className="admin-empty">تعذر تحميل المؤشرات.</p>
          ) : (
            <div className="admin-cards" style={{ marginTop: 12 }}>
              <article className="admin-card">
                <div className="admin-card-body">
                  <h3>المستخدمون</h3>
                  <p className="muted">الإجمالي: {u?.total ?? 0} · النشط: {u?.active_total ?? 0}</p>
                  <p className="muted">متسوقين: {u?.shopper?.total ?? 0} (نشط {u?.shopper?.active ?? 0})</p>
                  <p className="muted">تجار: {u?.merchant?.total ?? 0} (نشط {u?.merchant?.active ?? 0})</p>
                </div>
              </article>
              <article className="admin-card">
                <div className="admin-card-body">
                  <h3>فتح التطبيق اليوم</h3>
                  <p className="muted">{opens?.today ?? ''}</p>
                  <p style={{ fontWeight: 900, fontSize: '1.2rem', marginTop: 6 }}>{opens?.opens_today ?? 0}</p>
                </div>
              </article>
              <article className="admin-card">
                <div className="admin-card-body">
                  <h3>المتاجر</h3>
                  <p className="muted">الإجمالي: {metrics?.stores?.total ?? 0}</p>
                  <p className="muted">معلقة: {metrics?.stores?.suspended ?? 0}</p>
                </div>
              </article>
            </div>
          )}
        </section>
        <style dangerouslySetInnerHTML={{ __html: adminPanelCss }} />
      </div>
    </MainLayout>
  );
}

export default AdminHome;
