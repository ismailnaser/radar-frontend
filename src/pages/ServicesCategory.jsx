import React, { useEffect, useMemo, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { ArrowLeft, MapPin, Sparkles } from 'lucide-react';
import MainLayout from '../components/MainLayout';
import { getCommunityCategories, getCommunityPoints } from '../api/data';
import { communityCategoryCardTone, communityCategoryEmoji } from '../utils/communityServiceCategoryVisual';

const ServicesCategory = () => {
  const { categorySlug } = useParams();
  const navigate = useNavigate();
  const [categories, setCategories] = useState([]);
  const [points, setPoints] = useState([]);
  const [loading, setLoading] = useState(true);

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

  const category = useMemo(
    () => categories.find((c) => String(c.slug) === String(categorySlug)),
    [categories, categorySlug]
  );

  const list = useMemo(() => {
    if (!category) return [];
    return points.filter((p) => Number(p.category) === Number(category.id));
  }, [category, points]);

  useEffect(() => {
    if (loading || !categories.length) return;
    if (!categorySlug || !category) {
      navigate('/services', { replace: true });
    }
  }, [loading, categories.length, categorySlug, category, navigate]);

  const tone = category ? communityCategoryCardTone(category.slug) : '#1ebea5';
  const emoji = category ? communityCategoryEmoji(category.slug) : '✨';

  const canMap = (p) => {
    const lat = Number(p?.latitude);
    const lng = Number(p?.longitude);
    return Number.isFinite(lat) && Number.isFinite(lng);
  };

  return (
    <MainLayout>
      <div className="services-page services-category-page">
        <nav className="services-breadcrumb">
          <Link to="/services" className="services-breadcrumb-link">
            الخدمات المجتمعية
          </Link>
          <span className="services-breadcrumb-sep" aria-hidden>
            /
          </span>
          <span className="services-breadcrumb-current">{category?.name || '…'}</span>
        </nav>

        <header className="services-category-hero card" style={{ '--cat-tone': tone }}>
          <div className="services-category-hero-visual" aria-hidden>
            <span className="services-category-hero-emoji">{emoji}</span>
          </div>
          <h1 className="services-category-hero-title">{category?.name || 'القسم'}</h1>
          {category?.description_hint ? (
            <p className="services-category-hero-hint">{category.description_hint}</p>
          ) : null}
        </header>

        {loading ? (
          <div className="services-loading card">جاري تحميل النقاط…</div>
        ) : list.length === 0 ? (
          <p className="services-empty card">لا توجد نقاط معتمدة في هذا القسم بعد.</p>
        ) : (
          <ul className="services-points">
            {list.map((p) => (
              <li key={p.id} className="services-point">
                <div className="services-point-title">{p.title}</div>
                {p.category_slug === 'water' && p.water_is_potable != null ? (
                  <div className="services-point-badge">
                    {p.water_is_potable ? 'مياه صالحة للشرب' : 'مياه غير صالحة للشرب'}
                  </div>
                ) : null}
                {p.institution_scope ? (
                  <div className="services-point-meta">
                    النطاق: {p.institution_scope_label || p.institution_scope}
                  </div>
                ) : null}
                <p className="services-point-desc">{p.detail_description}</p>
                <p className="services-point-address">{p.address_text}</p>
                <div className="services-point-actions">
                  <button
                    type="button"
                    className="services-point-mapbtn"
                    disabled={!canMap(p)}
                    onClick={() => {
                      if (!canMap(p)) return;
                      navigate('/map', {
                        state: {
                          mapFocus: {
                            lat: p.latitude,
                            lng: p.longitude,
                            communityPointId: p.id,
                          },
                          mapPreset: {
                            mode: 'community',
                            cc: category?.id ?? null,
                          },
                        },
                      });
                    }}
                    title={canMap(p) ? 'عرض على الخريطة' : 'لا يوجد إحداثيات لهذا العنصر'}
                  >
                    <MapPin size={16} aria-hidden />
                    عرض على الخريطة
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}

        <p className="services-category-back-wrap">
          <button type="button" className="services-category-back" onClick={() => navigate(-1)}>
            <ArrowLeft size={18} aria-hidden />
            رجوع
          </button>
          <Link to="/services" className="services-category-back-alt">
            <Sparkles size={16} aria-hidden />
            كل الأقسام
          </Link>
        </p>

        <style dangerouslySetInnerHTML={{ __html: `
          .services-category-page {
            max-width: 1240px;
            margin-inline: auto;
            padding-inline: clamp(8px, 2.2vw, 22px);
            box-sizing: border-box;
            padding-bottom: 28px;
          }
          .services-breadcrumb {
            display: flex;
            align-items: center;
            gap: 8px;
            flex-wrap: wrap;
            margin-bottom: 16px;
            font-size: 0.88rem;
            font-weight: 700;
          }
          .services-breadcrumb-link {
            color: #0d9488;
            text-decoration: none;
          }
          .services-breadcrumb-link:hover {
            text-decoration: underline;
          }
          .services-breadcrumb-sep {
            color: var(--text-light);
            user-select: none;
          }
          .services-breadcrumb-current {
            color: var(--text-secondary);
          }
          .services-category-hero {
            text-align: center;
            padding: clamp(20px, 3.5vw, 28px);
            margin-bottom: 20px;
            border: 1px solid color-mix(in srgb, var(--cat-tone) 28%, transparent);
            background: linear-gradient(
              165deg,
              var(--white) 0%,
              color-mix(in srgb, var(--cat-tone) 14%, transparent) 100%
            );
          }
          .services-category-hero-visual {
            width: 88px;
            height: 88px;
            margin: 0 auto 14px;
            border-radius: 24px;
            display: flex;
            align-items: center;
            justify-content: center;
            background: color-mix(in srgb, var(--cat-tone) 12%, var(--white));
            border: 1px solid color-mix(in srgb, var(--cat-tone) 22%, transparent);
            box-shadow: var(--shadow-sm);
          }
          .services-category-hero-emoji {
            font-size: 2.75rem;
            line-height: 1;
          }
          .services-category-hero-title {
            margin: 0 0 8px;
            font-size: clamp(1.25rem, 3.8vw, 1.55rem);
            font-weight: 900;
            color: var(--secondary);
          }
          .services-category-hero-hint {
            margin: 0 auto;
            max-width: 520px;
            font-size: 0.9rem;
            color: var(--text-secondary);
            line-height: 1.6;
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
          .services-points {
            list-style: none;
            padding: 0;
            margin: 0;
            display: grid;
            gap: 12px;
          }
          .services-point {
            border: 1px solid var(--border);
            border-radius: var(--radius-lg);
            padding: 14px 16px;
            background: var(--surface);
          }
          .services-point-title {
            font-weight: 900;
            margin-bottom: 8px;
            color: var(--secondary);
          }
          .services-point-badge {
            font-size: 0.8rem;
            font-weight: 800;
            margin-bottom: 8px;
            color: #0d9488;
          }
          .services-point-meta {
            font-size: 0.82rem;
            margin-bottom: 8px;
            color: var(--text-secondary);
            font-weight: 600;
          }
          .services-point-desc {
            font-size: 0.9rem;
            line-height: 1.55;
            color: var(--text-primary);
            margin: 0 0 8px;
          }
          .services-point-address {
            font-size: 0.82rem;
            color: var(--text-secondary);
            margin: 0;
            font-weight: 600;
          }
          .services-point-actions{
            margin-top: 10px;
            display: flex;
            justify-content: flex-start;
          }
          .services-point-mapbtn{
            display: inline-flex;
            align-items: center;
            gap: 8px;
            padding: 9px 12px;
            border-radius: 999px;
            border: 1px solid rgba(245, 192, 0, 0.55);
            background: linear-gradient(135deg, rgba(245, 192, 0, 0.22) 0%, rgba(255,255,255,0.92) 100%);
            color: var(--secondary);
            font-weight: 900;
            font-family: inherit;
            cursor: pointer;
            box-shadow: 0 8px 20px rgba(245, 192, 0, 0.14);
          }
          .services-point-mapbtn:hover{
            box-shadow: 0 14px 30px rgba(245, 192, 0, 0.20);
          }
          .services-point-mapbtn:disabled{
            opacity: 0.65;
            cursor: not-allowed;
            box-shadow: none;
          }
          .services-category-back-wrap {
            margin-top: 22px;
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            gap: 14px;
          }
          .services-category-back {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            padding: 10px 18px;
            border-radius: var(--radius-pill);
            border: 1px solid var(--border);
            background: var(--surface);
            font-weight: 800;
            font-size: 0.88rem;
            cursor: pointer;
            color: var(--secondary);
          }
          .services-category-back:hover {
            background: rgba(30, 200, 160, 0.08);
          }
          .services-category-back-alt {
            display: inline-flex;
            align-items: center;
            gap: 6px;
            font-weight: 800;
            font-size: 0.88rem;
            color: #0d9488;
            text-decoration: none;
          }
          .services-category-back-alt:hover {
            text-decoration: underline;
          }
        `}} />
      </div>
    </MainLayout>
  );
};

export default ServicesCategory;
