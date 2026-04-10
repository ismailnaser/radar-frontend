import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { LayoutGrid, ChevronLeft } from 'lucide-react';
import MainLayout from '../components/MainLayout';
import { getCategories } from '../api/data';
import { getCategoryPinMeta } from '../components/maps/storePinDefaults';

const Categories = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCats = async () => {
      try {
        const data = await getCategories();
        setCategories(Array.isArray(data) ? data : []);
      } catch (err) {
        console.error('Error fetching categories:', err);
      } finally {
        setLoading(false);
      }
    };
    fetchCats();
  }, []);

  return (
    <MainLayout>
      <div className="categories-page">
        <header className="categories-hero">
          <div className="categories-hero-icon" aria-hidden>
            <LayoutGrid size={28} strokeWidth={2} />
          </div>
          <h1 className="categories-hero-title">أقسام رادار</h1>
          <p className="categories-hero-sub">اختر قسماً للانتقال إلى المتاجر القريبة في هذا النوع.</p>
        </header>

        {loading ? (
          <div className="categories-loading card">جاري تحميل الأقسام…</div>
        ) : categories.length > 0 ? (
          <div className="categories-grid">
            {categories.map((cat) => {
              const pin = getCategoryPinMeta(cat.name);
              return (
                <Link key={cat.id} to={`/?category=${cat.id}`} className="categories-card">
                  {cat.image ? (
                    <span className="categories-card-photo-wrap">
                      <img className="categories-card-photo" src={cat.image} alt="" loading="lazy" />
                    </span>
                  ) : (
                    <span className="categories-card-emoji" style={{ background: pin.bg }}>
                      {pin.emoji}
                    </span>
                  )}
                  <div className="categories-card-body">
                    <h2 className="categories-card-name">{cat.name}</h2>
                    <p className="categories-card-desc">
                      {cat.description || 'عرض المحلات القريبة في هذا القسم'}
                    </p>
                    <span className="categories-card-cta">
                      استكشف
                      <ChevronLeft size={16} aria-hidden />
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        ) : (
          <p className="categories-empty">لا توجد أقسام مسجلة حالياً.</p>
        )}

        <style dangerouslySetInnerHTML={{ __html: `
          .categories-page {
            max-width: 1240px;
            margin-inline: auto;
            padding-inline: clamp(8px, 2.2vw, 22px);
            box-sizing: border-box;
            padding-bottom: 28px;
          }
          .categories-hero {
            text-align: center;
            padding: clamp(22px, 4vw, 32px) clamp(16px, 3vw, 24px);
            margin-bottom: 22px;
            border-radius: var(--radius-xl);
            background: linear-gradient(160deg, var(--white) 0%, var(--primary-light) 100%);
            border: 1px solid rgba(255, 214, 10, 0.3);
            box-shadow: var(--shadow);
          }
          .categories-hero-icon {
            width: 56px;
            height: 56px;
            margin: 0 auto 12px;
            border-radius: 18px;
            display: flex;
            align-items: center;
            justify-content: center;
            background: var(--white);
            border: 1px solid var(--border);
            color: var(--secondary);
            box-shadow: var(--shadow-sm);
          }
          .categories-hero-title {
            margin: 0 0 8px;
            font-size: clamp(1.35rem, 4vw, 1.75rem);
            font-weight: 900;
            color: var(--secondary);
            letter-spacing: -0.03em;
          }
          .categories-hero-sub {
            margin: 0;
            font-size: 0.92rem;
            color: var(--text-secondary);
            font-weight: 600;
            line-height: 1.55;
            max-width: 420px;
            margin-inline: auto;
          }
          .categories-loading {
            padding: 20px;
            text-align: center;
            font-weight: 700;
            color: var(--text-secondary);
          }
          .categories-grid {
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: clamp(14px, 2.5vw, 20px);
          }
          @media (min-width: 720px) {
            .categories-grid {
              grid-template-columns: repeat(3, minmax(0, 1fr));
            }
          }
          @media (min-width: 1024px) {
            .categories-grid {
              grid-template-columns: repeat(4, minmax(0, 1fr));
            }
          }
          .categories-card {
            display: flex;
            flex-direction: column;
            align-items: center;
            text-align: center;
            text-decoration: none;
            color: inherit;
            padding: clamp(20px, 3vw, 26px) clamp(16px, 2.5vw, 20px);
            border-radius: var(--radius-xl);
            background: var(--white);
            border: 1px solid rgba(26, 29, 38, 0.07);
            box-shadow: var(--shadow-sm);
            transition: transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease;
          }
          .categories-card:hover {
            transform: translateY(-4px);
            box-shadow: var(--shadow-lg);
            border-color: rgba(255, 214, 10, 0.45);
          }
          .categories-card-emoji {
            width: 72px;
            height: 72px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 2rem;
            margin-bottom: 14px;
            border: 3px solid var(--white);
            box-shadow: var(--shadow-sm);
            font-family: "Segoe UI Emoji", "Apple Color Emoji", sans-serif;
          }
          .categories-card-photo-wrap {
            width: 72px;
            height: 72px;
            border-radius: 50%;
            margin-bottom: 14px;
            border: 3px solid var(--white);
            box-shadow: var(--shadow-sm);
            overflow: hidden;
            flex-shrink: 0;
            background: var(--surface);
          }
          .categories-card-photo {
            width: 100%;
            height: 100%;
            object-fit: cover;
            object-position: center;
            display: block;
          }
          .categories-card-body {
            width: 100%;
          }
          .categories-card-name {
            margin: 0 0 8px;
            font-size: 1.15rem;
            font-weight: 900;
            color: var(--secondary);
          }
          .categories-card-desc {
            margin: 0 0 14px;
            font-size: 0.84rem;
            color: var(--text-secondary);
            line-height: 1.55;
            font-weight: 600;
          }
          .categories-card-cta {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            gap: 6px;
            font-size: 0.82rem;
            font-weight: 900;
            color: var(--secondary);
            padding: 8px 14px;
            border-radius: var(--radius-pill);
            background: linear-gradient(180deg, var(--primary) 0%, var(--primary-hover) 100%);
            box-shadow: var(--shadow-gold);
          }
          .categories-empty {
            text-align: center;
            color: var(--text-secondary);
            font-weight: 700;
            padding: 32px 16px;
          }
        `}} />
      </div>
    </MainLayout>
  );
};

export default Categories;
