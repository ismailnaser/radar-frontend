import React, { useEffect, useMemo, useState } from 'react';
import MainLayout from '../../components/MainLayout';
import {
  BarChart3,
  Clock,
  Package,
  Heart,
  ShoppingCart,
  Sparkles,
  TrendingUp,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { getMerchantStats, getMerchantSubscriptionStatus } from '../../api/data';

const MerchantDashboard = () => {
  const [statsData, setStatsData] = useState(null);
  const [subscription, setSubscription] = useState(null);
  const [loading, setLoading] = useState(true);
  const storeHint = localStorage.getItem('user_name') || 'تاجرنا';

  useEffect(() => {
    const run = async () => {
      try {
        const [stats, sub] = await Promise.all([
          getMerchantStats(),
          getMerchantSubscriptionStatus(),
        ]);
        setStatsData(stats);
        setSubscription(sub);
      } finally {
        setLoading(false);
      }
    };
    run();
  }, []);

  const subscriptionDaysLeft = useMemo(() => {
    if (!subscription?.end_date) return null;
    const end = new Date(subscription.end_date).getTime();
    const now = Date.now();
    const diff = Math.ceil((end - now) / (1000 * 60 * 60 * 24));
    return Number.isFinite(diff) ? diff : null;
  }, [subscription]);

  const insights = statsData?.product_insights ?? [];
  const summary = statsData?.summary ?? {};

  const { maxCart, maxFav } = useMemo(() => {
    if (!insights.length) return { maxCart: 1, maxFav: 1 };
    return {
      maxCart: Math.max(1, ...insights.map((i) => i.in_carts_quantity)),
      maxFav: Math.max(1, ...insights.map((i) => i.favorites_count)),
    };
  }, [insights]);

  const kpis = [
    {
      label: 'زيارات متجرك اليوم',
      value: loading ? '…' : statsData?.visitor_count ?? 0,
      hint: 'عدد فتحات صفحة المتجر',
      icon: <BarChart3 size={22} strokeWidth={2.2} />,
    },
    {
      label: 'وحدات في سلال الزبائن',
      value: loading ? '…' : summary.total_units_in_carts ?? 0,
      hint: 'مجموع الكميات المضافة لسلال المشتريات',
      icon: <ShoppingCart size={22} strokeWidth={2.2} />,
    },
    {
      label: 'تسجيلات مفضلة على منتجاتك',
      value: loading ? '…' : summary.total_favorite_marks ?? 0,
      hint: 'عدد مرات أضيف فيها منتج للمفضلة',
      icon: <Heart size={22} strokeWidth={2.2} />,
    },
    {
      label: 'منتجاتك النشطة',
      value: loading ? '…' : summary.active_products ?? 0,
      hint: 'غير مؤرشفة وظاهرة للزبائن',
      icon: <Package size={22} strokeWidth={2.2} />,
    },
  ];

  const subDays = subscriptionDaysLeft == null ? null : Math.max(subscriptionDaysLeft, 0);

  return (
    <MainLayout>
      <div className="merchant-dashboard">
        <header className="mdash-hero card">
          <div className="mdash-hero-text">
            <p className="mdash-kicker">
              <Sparkles size={16} /> مرحباً {storeHint}
            </p>
            <h1>لوحة تحكم متجرك</h1>
            <p className="mdash-lead">
              لمحة سريعة عن اهتمام الزبائن بمنتجاتك — <strong>السلة</strong> تعكس رغبة الشراء، و<strong>المفضلة</strong>{' '}
              تعكس الاهتمام. راقب البسيط واتخذ قرارات أوضح.
            </p>
          </div>
          <div className="mdash-hero-stat">
            <div className="mdash-mini-label">الاشتراك</div>
            <div className="mdash-mini-value">
              {loading ? '…' : subDays == null ? '—' : `${subDays} يوم`}
            </div>
            <Clock size={18} className="mdash-hero-clock" />
          </div>
        </header>

        <section className="mdash-kpis">
          {kpis.map((k, i) => (
            <div key={i} className="card mdash-kpi">
              <div className="mdash-kpi-top">
                <div className="mdash-kpi-icon">{k.icon}</div>
                <div className="mdash-kpi-label">{k.label}</div>
              </div>
              <div className="mdash-kpi-value">{k.value}</div>
              <p className="mdash-kpi-hint">{k.hint}</p>
            </div>
          ))}
        </section>

        <section className="card mdash-insights">
          <div className="mdash-insights-head">
            <div>
              <h2>
                <TrendingUp size={22} className="inline-icon" /> تحليلات المنتجات
              </h2>
              <p className="mdash-insights-sub">
                ترتيب حسب إجمالي الكمية في السلال ثم المفضلة — بيانات من نشاط المتسوقين الحقيقي.
              </p>
            </div>
            <Link to="/merchant/products" className="mdash-link-products">
              إدارة المنتجات
            </Link>
          </div>

          {loading ? (
            <p className="mdash-muted">جاري التحميل…</p>
          ) : insights.length === 0 ? (
            <div className="mdash-empty">
              <Package size={40} strokeWidth={1.5} />
              <p>
                لا توجد منتجات نشطة بعد، أو لم يُسجَّل نشاط على السلة والمفضلة.
              </p>
              <Link to="/merchant/products/new" className="mdash-btn-outline">
                إضافة منتج
              </Link>
            </div>
          ) : (
            <div className="mdash-table-wrap">
              <table className="mdash-table">
                <thead>
                  <tr>
                    <th>المنتج</th>
                    <th>في السلال (الكمية)</th>
                    <th>المفضلة</th>
                  </tr>
                </thead>
                <tbody>
                  {insights.map((row) => (
                    <tr key={row.id}>
                      <td className="mdash-td-name">{row.name}</td>
                      <td>
                        <div className="mdash-bar-cell">
                          <div
                            className="mdash-bar-fill mdash-bar-cart"
                            style={{
                              width: `${Math.round((row.in_carts_quantity / maxCart) * 100)}%`,
                            }}
                          />
                          <span className="mdash-bar-num">{row.in_carts_quantity}</span>
                        </div>
                      </td>
                      <td>
                        <div className="mdash-bar-cell">
                          <div
                            className="mdash-bar-fill mdash-bar-fav"
                            style={{
                              width: `${Math.round((row.favorites_count / maxFav) * 100)}%`,
                            }}
                          />
                          <span className="mdash-bar-num">{row.favorites_count}</span>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </section>

        <section className="card mdash-tip">
          <h3>ملاحظة سريعة</h3>
          <p>
            من <strong>القائمة الجانبية</strong> تدير المنتجات، الإعلانات الممولة، والاشتراك. كلما زاد ظهور منتجاتك
            جودةً ووضوحاً، غالباً تتحسن أرقام السلة والمفضلة.
          </p>
        </section>

        <style dangerouslySetInnerHTML={{ __html: `
          .merchant-dashboard {
            max-width: 1240px;
            margin-inline: auto;
            padding-bottom: 32px;
            padding-inline: clamp(8px, 2.2vw, 22px);
            box-sizing: border-box;
          }
          .mdash-hero {
            display: flex;
            flex-wrap: wrap;
            align-items: stretch;
            justify-content: space-between;
            gap: 20px;
            padding: 22px 24px;
            margin-bottom: 20px;
            background: linear-gradient(135deg, rgba(245, 192, 0, 0.14) 0%, var(--surface) 45%, var(--white) 100%);
            border: 1.5px solid rgba(245, 192, 0, 0.35);
            border-radius: 16px;
          }
          .mdash-hero-text { flex: 1; min-width: 240px; }
          .mdash-kicker {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            margin: 0 0 8px;
            font-size: 0.85rem;
            font-weight: 800;
            color: var(--secondary);
            opacity: 0.9;
          }
          .merchant-dashboard h1 {
            margin: 0 0 10px;
            font-size: clamp(1.35rem, 2.5vw, 1.85rem);
            color: var(--secondary);
          }
          .mdash-lead {
            margin: 0;
            color: var(--text-secondary);
            line-height: 1.75;
            font-size: 0.95rem;
            max-width: 640px;
          }
          .mdash-hero-stat {
            align-self: center;
            min-width: 140px;
            padding: 16px 20px;
            border-radius: 14px;
            background: var(--white);
            border: 1px solid var(--border);
            box-shadow: var(--shadow-sm);
            position: relative;
            text-align: center;
          }
          .mdash-mini-label { font-size: 0.78rem; font-weight: 700; color: var(--text-secondary); }
          .mdash-mini-value { font-size: 1.65rem; font-weight: 900; color: var(--secondary); margin-top: 4px; }
          .mdash-hero-clock {
            position: absolute;
            top: 12px;
            left: 12px;
            color: var(--primary-hover);
            opacity: 0.7;
          }

          .mdash-kpis {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(min(220px, 100%), 1fr));
            gap: 14px;
            margin-bottom: 20px;
          }
          .mdash-kpi {
            padding: 18px;
            border-radius: 14px;
            transition: box-shadow 0.15s ease, transform 0.15s ease;
          }
          .mdash-kpi:hover {
            box-shadow: var(--shadow-gold);
            transform: translateY(-2px);
          }
          .mdash-kpi-top {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 12px;
          }
          .mdash-kpi-icon {
            background: linear-gradient(135deg, #FFF9E6 0%, #FFEFC2 100%);
            border-radius: 12px;
            padding: 10px;
            display: flex;
            color: var(--secondary);
          }
          .mdash-kpi-label {
            font-weight: 800;
            color: var(--secondary);
            font-size: 0.92rem;
            line-height: 1.35;
            text-align: end;
            flex: 1;
          }
          .mdash-kpi-value {
            margin-top: 12px;
            font-size: 1.75rem;
            font-weight: 900;
            color: var(--secondary);
            font-variant-numeric: tabular-nums;
          }
          .mdash-kpi-hint {
            margin: 8px 0 0;
            font-size: 0.78rem;
            color: var(--text-secondary);
            line-height: 1.45;
          }

          .mdash-insights { padding: 22px 24px; border-radius: 16px; }
          .mdash-insights-head {
            display: flex;
            flex-wrap: wrap;
            align-items: flex-start;
            justify-content: space-between;
            gap: 16px;
            margin-bottom: 18px;
          }
          .mdash-insights-head h2 {
            margin: 0 0 6px;
            font-size: 1.2rem;
            color: var(--secondary);
            display: flex;
            align-items: center;
            gap: 10px;
          }
          .inline-icon { flex-shrink: 0; opacity: 0.9; }
          .mdash-insights-sub {
            margin: 0;
            font-size: 0.88rem;
            color: var(--text-secondary);
            line-height: 1.6;
            max-width: 560px;
          }
          .mdash-link-products {
            display: inline-flex;
            align-items: center;
            padding: 10px 16px;
            border-radius: 12px;
            font-weight: 800;
            font-size: 0.88rem;
            background: linear-gradient(135deg, var(--primary) 0%, var(--primary-hover) 100%);
            color: var(--secondary);
            text-decoration: none;
            white-space: nowrap;
            box-shadow: var(--shadow-sm);
          }
          .mdash-link-products:hover { opacity: 0.95; }

          .mdash-table-wrap {
            overflow-x: auto;
            max-height: 420px;
            overflow-y: auto;
            border: 1px solid var(--border);
            border-radius: 12px;
          }
          .mdash-table {
            width: 100%;
            border-collapse: collapse;
            font-size: 0.9rem;
          }
          .mdash-table th {
            position: sticky;
            top: 0;
            background: var(--surface);
            text-align: right;
            padding: 12px 14px;
            font-weight: 800;
            color: var(--secondary);
            border-bottom: 2px solid var(--border);
            z-index: 1;
          }
          .mdash-table td {
            padding: 12px 14px;
            border-bottom: 1px solid var(--border);
            vertical-align: middle;
          }
          .mdash-td-name { font-weight: 700; color: var(--text-primary); max-width: 220px; }

          .mdash-bar-cell {
            position: relative;
            height: 28px;
            background: var(--grey-light);
            border-radius: 8px;
            overflow: hidden;
            min-width: 120px;
          }
          .mdash-bar-fill {
            position: absolute;
            inset: 0 auto 0 0;
            height: 100%;
            border-radius: 8px;
            min-width: 0;
            transition: width 0.35s ease;
          }
          .mdash-bar-cart {
            background: linear-gradient(90deg, rgba(245, 192, 0, 0.55) 0%, rgba(245, 192, 0, 0.9) 100%);
          }
          .mdash-bar-fav {
            background: linear-gradient(90deg, rgba(255, 82, 82, 0.35) 0%, rgba(255, 82, 82, 0.65) 100%);
          }
          .mdash-bar-num {
            position: relative;
            z-index: 1;
            display: flex;
            align-items: center;
            justify-content: flex-end;
            height: 100%;
            padding: 0 10px;
            font-weight: 800;
            font-size: 0.82rem;
            color: var(--secondary);
            font-variant-numeric: tabular-nums;
          }

          .mdash-empty {
            text-align: center;
            padding: 36px 20px;
            color: var(--text-secondary);
          }
          .mdash-empty p { margin: 14px 0 18px; line-height: 1.65; }
          .mdash-btn-outline {
            display: inline-block;
            padding: 10px 18px;
            border-radius: 12px;
            border: 2px solid var(--primary);
            color: var(--secondary);
            font-weight: 800;
            text-decoration: none;
            font-size: 0.9rem;
          }

          .mdash-tip {
            margin-top: 18px;
            padding: 18px 20px;
            border-radius: 14px;
            background: linear-gradient(180deg, var(--surface) 0%, var(--white) 100%);
            border: 1px solid var(--border);
          }
          .mdash-tip h3 { margin: 0 0 8px; font-size: 1.05rem; color: var(--secondary); }
          .mdash-tip p {
            margin: 0;
            color: var(--text-secondary);
            line-height: 1.75;
            font-size: 0.92rem;
          }
          .mdash-muted { color: var(--text-secondary); }
        `}} />
      </div>
    </MainLayout>
  );
};

export default MerchantDashboard;
