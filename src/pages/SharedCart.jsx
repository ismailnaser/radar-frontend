import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import MainLayout from '../components/MainLayout';
import { getSharedCart } from '../api/data';
import { Home, Loader2, ShoppingCart, Image as ImageIcon } from 'lucide-react';
import ImageCarousel from '../components/ImageCarousel';
import { visualImageUrls } from '../utils/productImages';

const SharedCart = () => {
  const { shareToken } = useParams();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const isAuthed = !!localStorage.getItem('token');
  const isGuest = localStorage.getItem('isGuest') === 'true';

  useEffect(() => {
    let cancelled = false;
    (async () => {
      setLoading(true);
      setError('');
      try {
        const res = await getSharedCart(shareToken);
        if (!cancelled) setData(res);
      } catch {
        if (!cancelled) {
          setError('تعذر تحميل السلة أو الرابط غير صالح.');
          setData(null);
        }
      } finally {
        if (!cancelled) setLoading(false);
      }
    })();
    return () => {
      cancelled = true;
    };
  }, [shareToken]);

  const items = data?.items || [];
  const total = data?.total ?? '0';

  return (
    <MainLayout>
      <div
        style={{
          maxWidth: 1240,
          marginInline: 'auto',
          paddingInline: 'clamp(8px, 2.2vw, 22px)',
          paddingBottom: 40,
          boxSizing: 'border-box',
        }}
      >
        <div className="flex-center" style={{ justifyContent: 'space-between', flexWrap: 'wrap', gap: 12, marginBottom: 18 }}>
          <h1 style={{ fontSize: '1.6rem', fontWeight: 900 }}>سلة مشتركة</h1>
          <Link
            to="/"
            className="flex-center"
            style={{ gap: 8, color: 'var(--text-secondary)', textDecoration: 'none', fontWeight: 700, fontSize: '0.95rem' }}
          >
            <Home size={18} />
            الرئيسية
          </Link>
        </div>

        {loading && (
          <div className="card flex-center" style={{ padding: 40, gap: 12 }}>
            <Loader2 className="spin" size={26} />
            جاري التحميل...
          </div>
        )}

        {!loading && error && <div className="card" style={{ color: '#c62828' }}>{error}</div>}

        {!loading && data && (
          <>
            <div className="card" style={{ marginBottom: 16 }}>
              <div style={{ fontWeight: 900, fontSize: '1.2rem', marginBottom: 8 }}>{data.name}</div>
              {data.notes ? (
                <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6, marginTop: 8 }}>{data.notes}</p>
              ) : null}
              {data.is_owner && isAuthed && !isGuest && (
                <Link
                  to="/carts"
                  className="flex-center"
                  style={{
                    marginTop: 14,
                    gap: 8,
                    padding: '10px 14px',
                    background: 'var(--primary-light)',
                    borderRadius: 'var(--radius-md)',
                    textDecoration: 'none',
                    color: 'var(--secondary)',
                    fontWeight: 800,
                    width: 'fit-content',
                  }}
                >
                  <ShoppingCart size={18} />
                  فتح سلتي وتعديلها
                </Link>
              )}
            </div>

            {items.length === 0 ? (
              <div className="card" style={{ color: 'var(--text-secondary)' }}>السلة فارغة.</div>
            ) : (
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                {items.map((row, idx) => {
                  const promo = !!row.is_promotional_line;
                  const standalone = !!row.is_standalone_ad_line;
                  const expired = !!row.is_expired_line;
                  const unit = Number(row.price);
                  const catRaw = row.catalog_price;
                  const cat =
                    catRaw != null && String(catRaw).trim() !== '' && !Number.isNaN(Number(catRaw))
                      ? Number(catRaw)
                      : null;
                  const showStruck = promo && !standalone && cat != null && Math.abs(unit - cat) > 1e-9;
                  const canOpenProduct = !expired && row.store_id && row.product_id;
                  return (
                  <div
                    key={idx}
                    className="card"
                    style={{
                      display: 'grid',
                      gridTemplateColumns: '72px 1fr',
                      gap: 14,
                      alignItems: 'start',
                      borderRadius: promo ? 14 : undefined,
                      background: promo
                        ? 'linear-gradient(135deg, rgba(245,192,0,0.1) 0%, rgba(255,249,230,0.4) 100%)'
                        : undefined,
                      border: promo ? '1px solid rgba(245,192,0,0.4)' : undefined,
                    }}
                  >
                    <div
                      style={{
                        width: 72,
                        flexShrink: 0,
                        borderRadius: 16,
                        overflow: 'hidden',
                        background: 'var(--primary-light)',
                        border: '1px solid rgba(245,192,0,0.25)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      {visualImageUrls(row).length > 0 ? (
                        <ImageCarousel images={visualImageUrls(row)} height={64} borderRadius={0} />
                      ) : (
                        <div
                          style={{
                            width: 72,
                            height: 72,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                          }}
                        >
                          <ImageIcon size={22} color="var(--text-light)" />
                        </div>
                      )}
                    </div>
                    <div style={{ minWidth: 0 }}>
                      {canOpenProduct ? (
                        <Link
                          to={`/stores/${row.store_id}`}
                          state={{ scrollToProductId: row.product_id }}
                          style={{ fontWeight: 900, fontSize: '1.05rem', color: 'var(--secondary)', textDecoration: 'none' }}
                          title="فتح المنتج داخل المتجر"
                        >
                          {row.product_name}
                        </Link>
                      ) : (
                        <div style={{ fontWeight: 900, fontSize: '1.05rem' }}>{row.product_name}</div>
                      )}
                      {expired ? (
                        <div
                          style={{
                            marginTop: 8,
                            padding: '8px 10px',
                            borderRadius: 12,
                            background: 'rgba(229, 115, 115, 0.10)',
                            border: '1px solid rgba(229, 115, 115, 0.28)',
                            color: '#8b2b2b',
                            fontWeight: 900,
                            fontSize: '0.9rem',
                            lineHeight: 1.45,
                          }}
                        >
                          {row.expired_message || 'انتهت صلاحية الإعلان.'}
                        </div>
                      ) : null}
                      {row.description ? (
                        <div style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', marginTop: 4, lineHeight: 1.45 }}>
                          {row.description}
                        </div>
                      ) : null}
                      {Array.isArray(row.product_features) && row.product_features.length > 0 ? (
                        <div style={{ marginTop: 8, color: 'var(--text-secondary)', fontSize: '0.88rem', lineHeight: 1.5 }}>
                          <div style={{ fontWeight: 900, color: 'var(--text-primary)', marginBottom: 4 }}>تفاصيل</div>
                          <ul style={{ margin: 0, paddingInlineStart: 18 }}>
                            {row.product_features.slice(0, 6).map((f, i) => (
                              <li key={i}>{String(f)}</li>
                            ))}
                          </ul>
                        </div>
                      ) : null}
                      {promo ? (
                        <div style={{ marginTop: 10, fontSize: '0.9rem', lineHeight: 1.5 }}>
                          <span
                            style={{
                              display: 'inline-block',
                              padding: '3px 10px',
                              borderRadius: 8,
                              fontWeight: 900,
                              color: 'var(--secondary)',
                              background: 'rgba(245,192,0,0.35)',
                              border: '1px solid rgba(245,192,0,0.5)',
                            }}
                          >
                            {standalone
                              ? `عرض ممول مستقل: ${Number.isFinite(unit) ? unit.toFixed(2) : row.price} ₪ للقطعة`
                              : `عرض ممول: ${Number.isFinite(unit) ? unit.toFixed(2) : row.price} ₪ للقطعة`}
                          </span>
                          {showStruck ? (
                            <span
                              style={{
                                marginInlineStart: 10,
                                textDecoration: 'line-through',
                                color: 'var(--text-secondary)',
                                fontWeight: 700,
                              }}
                            >
                              سعر المتجر {cat.toFixed(2)} ₪
                            </span>
                          ) : null}
                          <div style={{ marginTop: 6, fontWeight: 800, color: 'var(--secondary)' }}>
                            {Number.isFinite(unit) ? unit.toFixed(2) : row.price} ₪ × {row.quantity} = {row.line_total} ₪
                          </div>
                        </div>
                      ) : (
                        <div style={{ marginTop: 8, fontWeight: 800, color: 'var(--secondary)' }}>
                          {row.price} ₪ × {row.quantity} = {row.line_total} ₪
                        </div>
                      )}
                      {row.note ? (
                        <div
                          style={{
                            marginTop: 8,
                            fontSize: '0.86rem',
                            padding: '8px 10px',
                            background: 'var(--surface)',
                            borderRadius: 10,
                            border: '1px solid var(--border)',
                          }}
                        >
                          <span style={{ fontWeight: 800 }}>ملاحظة:</span> {row.note}
                        </div>
                      ) : null}
                    </div>
                  </div>
                  );
                })}
              </div>
            )}

            {items.length > 0 && (
              <div
                className="flex-center"
                style={{
                  justifyContent: 'space-between',
                  marginTop: 20,
                  padding: '16px 20px',
                  background: 'var(--secondary)',
                  color: 'var(--primary)',
                  borderRadius: 'var(--radius-lg)',
                  fontWeight: 900,
                  fontSize: '1.15rem',
                }}
              >
                <span>الإجمالي</span>
                <span>{total} ₪</span>
              </div>
            )}

            <p style={{ textAlign: 'center', marginTop: 24, color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
              تم إنشاء هذه القائمة من تطبيق رادار
            </p>
          </>
        )}
      </div>

      <style>{`
        @keyframes spin { to { transform: rotate(360deg); } }
        .spin { animation: spin 0.85s linear infinite; }
      `}</style>
    </MainLayout>
  );
};

export default SharedCart;
