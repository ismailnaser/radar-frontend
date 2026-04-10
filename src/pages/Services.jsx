import React, { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, PlusCircle } from 'lucide-react';
import MainLayout from '../components/MainLayout';
import { getCommunityCategories, getCommunityPoints } from '../api/data';
import { communityCategoryCardTone, communityCategoryEmoji } from '../utils/communityServiceCategoryVisual';

const Services = () => {
  const [categories, setCategories] = useState([]);
  const [points, setPoints] = useState([]);
  const [loading, setLoading] = useState(true);

  const isGuest = localStorage.getItem('isGuest') === 'true';
  const authed = !!localStorage.getItem('token') && !isGuest;
  const userType = localStorage.getItem('user_type') || 'shopper';
  const canPropose = authed && (userType === 'shopper' || userType === 'merchant');

  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        const [cats, pts] = await Promise.all([getCommunityCategories(), getCommunityPoints()]);
        if (!cancelled) {
          setCategories(Array.isArray(cats) ? cats : []);
          setPoints(Array.isArray(pts) ? pts : []);
        }
      } catch (err) {
        console.error(err);
        if (!cancelled) {
          setCategories([]);
          setPoints([]);
        }
      } finally {
        if (!cancelled) setLoading(false);
      }
    })();
    return () => {
      cancelled = true;
    };
  }, []);

  const countByCategory = useMemo(() => {
    const m = new Map();
    for (const c of categories) m.set(c.id, 0);
    for (const p of points) {
      const k = p.category;
      if (!m.has(k)) m.set(k, 0);
      m.set(k, m.get(k) + 1);
    }
    return m;
  }, [categories, points]);

  return (
    <MainLayout>
      <div className="services-page">
        <header className="services-hero">
          <div className="services-hero-icon" aria-hidden>
            <Sparkles size={26} strokeWidth={2} />
          </div>
          <h1 className="services-hero-title">الخدمات المجتمعية</h1>
          <p className="services-hero-sub">
            نقاط طبية وتعليمية وتوزيع طعام ومياه ومؤسسات مجتمعية — تظهر على الخريطة بعد موافقة الإدارة.
          </p>
          {canPropose ? (
            <Link to="/services/suggest" className="services-cta">
              <PlusCircle size={20} aria-hidden />
              اقترح نقطة خدمة
            </Link>
          ) : (
            <p className="services-guest-note">لتقديم اقتراح: سجّل الدخول كمتسوّق أو كتاجر (وليس زائراً).</p>
          )}
        </header>

        {loading ? (
          <div className="services-loading card">جاري تحميل الأقسام…</div>
        ) : categories.length === 0 ? (
          <p className="services-empty">لا توجد أقسام مفعّلة حالياً.</p>
        ) : (
          <div className="services-grid" role="list">
            {categories.map((cat) => {
              const tone = communityCategoryCardTone(cat.slug);
              const emoji = communityCategoryEmoji(cat.slug);
              const n = countByCategory.get(cat.id) ?? 0;
              return (
                <Link
                  key={cat.id}
                  to={`/services/category/${encodeURIComponent(cat.slug)}`}
                  className="services-grid-card card"
                  role="listitem"
                  style={{ '--svc-tone': tone }}
                >
                  <div className="services-grid-card-visual" aria-hidden>
                    <span className="services-grid-card-emoji">{emoji}</span>
                  </div>
                  <div className="services-grid-card-body">
                    <h2 className="services-grid-card-title">{cat.name}</h2>
                    {cat.description_hint ? (
                      <p className="services-grid-card-hint">{cat.description_hint}</p>
                    ) : null}
                    <span className="services-grid-card-count">
                      {n === 0 ? 'لا توجد نقاط بعد' : `${n} ${n === 1 ? 'نقطة' : 'نقاط'} معتمدة`}
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        )}

        <style dangerouslySetInnerHTML={{ __html: `
          .services-page {
            max-width: 1240px;
            margin-inline: auto;
            padding-inline: clamp(8px, 2.2vw, 22px);
            box-sizing: border-box;
            padding-bottom: 28px;
          }
          .services-hero {
            text-align: center;
            padding: clamp(22px, 4vw, 34px) clamp(16px, 3vw, 24px);
            margin-bottom: 22px;
            border-radius: var(--radius-xl);
            background: linear-gradient(165deg, var(--white) 0%, rgba(30, 200, 160, 0.08) 100%);
            border: 1px solid rgba(30, 200, 160, 0.22);
            box-shadow: var(--shadow);
          }
          .services-hero-icon {
            width: 54px;
            height: 54px;
            margin: 0 auto 12px;
            border-radius: 18px;
            display: flex;
            align-items: center;
            justify-content: center;
            background: var(--white);
            color: #1ebea5;
            border: 1px solid rgba(30, 200, 160, 0.35);
            box-shadow: var(--shadow-sm);
          }
          .services-hero-title {
            margin: 0 0 10px;
            font-size: clamp(1.35rem, 4vw, 1.7rem);
            font-weight: 900;
            color: var(--secondary);
            letter-spacing: -0.03em;
          }
          .services-hero-sub {
            margin: 0 auto 18px;
            max-width: 560px;
            font-size: 0.92rem;
            color: var(--text-secondary);
            line-height: 1.65;
            font-weight: 600;
          }
          .services-cta {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            gap: 8px;
            padding: 12px 22px;
            border-radius: var(--radius-pill);
            font-weight: 900;
            font-size: 0.92rem;
            text-decoration: none;
            background: linear-gradient(180deg, var(--primary) 0%, var(--primary-hover) 100%);
            color: var(--secondary);
            box-shadow: var(--shadow-gold);
          }
          .services-cta:hover {
            filter: brightness(1.03);
          }
          .services-guest-note {
            margin: 0;
            font-size: 0.88rem;
            color: var(--text-secondary);
            font-weight: 600;
          }
          .services-loading {
            padding: 20px;
            text-align: center;
            font-weight: 700;
            color: var(--text-secondary);
          }
          .services-empty {
            text-align: center;
            color: var(--text-secondary);
            font-weight: 700;
            padding: 24px;
          }
          .services-grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(min(100%, 260px), 1fr));
            gap: 16px;
          }
          .services-grid-card {
            display: flex;
            flex-direction: column;
            align-items: stretch;
            text-decoration: none;
            color: inherit;
            padding: 0;
            overflow: hidden;
            border: 1px solid color-mix(in srgb, var(--svc-tone) 25%, var(--border));
            transition: transform 0.15s ease, box-shadow 0.15s ease;
            background: linear-gradient(
              180deg,
              color-mix(in srgb, var(--svc-tone) 10%, var(--white)) 0%,
              var(--surface) 48%
            );
          }
          .services-grid-card:hover {
            transform: translateY(-2px);
            box-shadow: var(--shadow);
          }
          .services-grid-card:focus-visible {
            outline: 2px solid var(--svc-tone);
            outline-offset: 2px;
          }
          .services-grid-card-visual {
            height: 120px;
            display: flex;
            align-items: center;
            justify-content: center;
            background: color-mix(in srgb, var(--svc-tone) 16%, var(--white));
            border-bottom: 1px solid color-mix(in srgb, var(--svc-tone) 20%, transparent);
          }
          .services-grid-card-emoji {
            font-size: 3.25rem;
            line-height: 1;
          }
          .services-grid-card-body {
            padding: 14px 16px 16px;
            text-align: center;
          }
          .services-grid-card-title {
            margin: 0 0 8px;
            font-size: 1.1rem;
            font-weight: 900;
            color: var(--secondary);
          }
          .services-grid-card-hint {
            margin: 0 0 10px;
            font-size: 0.82rem;
            line-height: 1.5;
            color: var(--text-secondary);
            font-weight: 600;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            overflow: hidden;
          }
          .services-grid-card-count {
            font-size: 0.8rem;
            font-weight: 800;
            color: #0d9488;
          }
        `}} />
      </div>
    </MainLayout>
  );
};

export default Services;
