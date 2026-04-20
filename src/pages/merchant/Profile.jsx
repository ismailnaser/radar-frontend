import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import MainLayout from '../../components/MainLayout';
import { getMerchantStoreProfile } from '../../api/data';
import { Image as ImageIcon, MapPin, Package, Megaphone, Pencil } from 'lucide-react';
import ImageCarousel from '../../components/ImageCarousel';
import { visualImageUrls } from '../../utils/productImages';

const MerchantProfile = () => {
  const [loading, setLoading] = useState(true);
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    const load = async () => {
      try {
        const data = await getMerchantStoreProfile();
        setProfile(data);
      } finally {
        setLoading(false);
      }
    };
    load();
  }, []);

  const products = profile?.products || [];
  const ads = profile?.sponsored_ads || [];

  return (
    <MainLayout>
      <div className="merchant-profile">
        <h1 style={{ marginBottom: 14, fontSize: '1.8rem' }}>بروفايل المتجر</h1>

        <div className="card" style={{ marginBottom: 16 }}>
          {loading ? (
            <div>جاري التحميل...</div>
          ) : (
            <div style={{ display: 'flex', gap: 16, alignItems: 'flex-start', flexWrap: 'wrap' }}>
              <div className="logoBox">
                {profile?.logo ? <img src={profile.logo} alt="logo" loading="lazy" width="120" height="120" /> : <ImageIcon size={22} />}
              </div>
              <div style={{ flex: 1, minWidth: 240 }}>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    gap: 12,
                    flexWrap: 'wrap',
                  }}
                >
                  <div style={{ fontWeight: 900, fontSize: '1.25rem' }}>{profile?.store_name}</div>
                  {profile ? (
                    <Link
                      to="/merchant/settings"
                      className="btn-primary"
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: 8,
                        padding: '9px 14px',
                        borderRadius: 12,
                        textDecoration: 'none',
                        fontWeight: 800,
                        fontSize: '0.88rem',
                        whiteSpace: 'nowrap',
                      }}
                    >
                      <Pencil size={17} strokeWidth={2.1} aria-hidden />
                      تعديل معلومات المتجر
                    </Link>
                  ) : null}
                </div>
                <div style={{ color: 'var(--text-secondary)', marginTop: 6 }}>{profile?.description || '—'}</div>
                <div style={{ marginTop: 10, display: 'flex', gap: 10, flexWrap: 'wrap', alignItems: 'center' }}>
                  <span className="badge">{profile?.category_name || 'بدون قسم'}</span>
                  {Array.isArray(profile?.store_features) && profile.store_features.filter(Boolean).length > 0 ? (
                    profile.store_features.filter(Boolean).slice(0, 10).map((t, i) => (
                      <span key={`${i}-${t}`} className="badge" style={{ background: 'rgba(255, 204, 0, 0.16)' }}>
                        {t}
                      </span>
                    ))
                  ) : null}
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="card" style={{ padding: 0, overflow: 'hidden', marginBottom: 16 }}>
          <div style={{ padding: 16, fontWeight: 900, background: 'var(--surface)', borderBottom: '1px solid var(--border)', display: 'flex', gap: 10, alignItems: 'center' }}>
            <Megaphone size={18} />
            الإعلانات الممولة
          </div>
          {loading ? (
            <div style={{ padding: 16 }}>...</div>
          ) : ads.length === 0 ? (
            <div style={{ padding: 16 }}>لا يوجد إعلانات.</div>
          ) : (
            ads.map((a) => (
              <div key={a.id} style={{ padding: 16, borderTop: '1px solid var(--border)', display: 'flex', gap: 12, alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap' }}>
                <div style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                  <div style={{ width: 88, flexShrink: 0 }}>
                    {visualImageUrls(a).length > 0 ? (
                      <ImageCarousel images={visualImageUrls(a)} height={56} borderRadius={14} />
                    ) : (
                      <div className="thumbSm">
                        <ImageIcon size={18} />
                      </div>
                    )}
                  </div>
                  <div>
                    <div style={{ fontWeight: 900 }}>{a.title}</div>
                    <div style={{ color: 'var(--text-secondary)' }}>{a.description}</div>
                  </div>
                </div>
                <span className="badge">{a.status}</span>
              </div>
            ))
          )}
        </div>

        <div className="card" style={{ padding: 0, overflow: 'hidden' }}>
          <div style={{ padding: 16, fontWeight: 900, background: 'var(--surface)', borderBottom: '1px solid var(--border)', display: 'flex', gap: 10, alignItems: 'center' }}>
            <Package size={18} />
            منتجات المتجر
          </div>
          {loading ? (
            <div style={{ padding: 16 }}>...</div>
          ) : products.length === 0 ? (
            <div style={{ padding: 16 }}>لا يوجد منتجات.</div>
          ) : (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(220px, 100%), 1fr))', gap: 12, padding: 16 }}>
              {products.map((p) => (
                <div key={p.id} className="card" style={{ padding: 14 }}>
                  <div style={{ borderRadius: 16, overflow: 'hidden', marginBottom: 8 }}>
                    {visualImageUrls(p).length > 0 ? (
                      <ImageCarousel images={visualImageUrls(p)} height={120} borderRadius={0} />
                    ) : (
                      <div className="thumbSm" style={{ width: '100%', height: 140, borderRadius: 16 }}>
                        <ImageIcon size={18} />
                      </div>
                    )}
                  </div>
                  <div style={{ marginTop: 10, fontWeight: 900 }}>{p.name}</div>
                  <div style={{ color: 'var(--text-secondary)' }}>{p.description || '—'}</div>
                  <div style={{ marginTop: 8, fontWeight: 900, color: 'var(--secondary)' }}>{p.price} ₪</div>
                </div>
              ))}
            </div>
          )}
        </div>

        <style dangerouslySetInnerHTML={{ __html: `
          .merchant-profile{
            max-width: 1240px;
            margin-inline: auto;
            padding-inline: clamp(8px, 2.2vw, 22px);
            padding-bottom: 32px;
            box-sizing: border-box;
          }
          .logoBox { width: 92px; height: 92px; border-radius: 26px; background: var(--primary-light); border: 1px solid rgba(245,192,0,0.25); display: flex; align-items: center; justify-content: center; overflow: hidden; }
          .logoBox img { width: 100%; height: 100%; object-fit: cover; }
          .thumbSm { width: 52px; height: 52px; border-radius: 16px; background: var(--primary-light); border: 1px solid rgba(245,192,0,0.25); display: flex; align-items: center; justify-content: center; overflow: hidden; }
          .thumbSm img { width: 100%; height: 100%; object-fit: cover; }
        `}} />
      </div>
    </MainLayout>
  );
};

export default MerchantProfile;

