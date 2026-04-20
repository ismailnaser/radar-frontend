import React from 'react';

/**
 * صف مصغرات للصور المختارة (حتى max) — ترتيب 1…n يطابق ترتيب الرفع/العرض.
 */
export default function GalleryThumbRow({ urls = [], max = 5 }) {
  const list = (Array.isArray(urls) ? urls : []).filter(Boolean).slice(0, max);
  if (list.length === 0) return null;

  const size = 72;

  return (
    <div style={{ marginBottom: 12 }} aria-label="معاينة الصور المحددة">
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: 10,
          alignItems: 'center',
        }}
      >
        {list.map((src, i) => (
          <div
            key={`${i}-${src.slice(0, 32)}`}
            style={{
              width: size,
              height: size,
              borderRadius: 12,
              overflow: 'hidden',
              border: '2px solid rgba(245, 192, 0, 0.55)',
              background: 'var(--grey-light)',
              flexShrink: 0,
              position: 'relative',
              boxSizing: 'border-box',
            }}
          >
            <img src={src} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} loading="lazy" width="120" height="120" />
            <span
              style={{
                position: 'absolute',
                top: 4,
                insetInlineStart: 4,
                minWidth: 20,
                height: 20,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: 11,
                fontWeight: 900,
                background: 'rgba(30, 30, 46, 0.88)',
                color: '#fff',
                borderRadius: 6,
                padding: '0 5px',
                lineHeight: 1,
              }}
            >
              {i + 1}
            </span>
          </div>
        ))}
      </div>
      <p
        style={{
          margin: '10px 0 0',
          fontSize: '0.82rem',
          fontWeight: 800,
          color: 'var(--text-secondary)',
        }}
      >
        {list.length} من {max} صورة — الترتيب كما سيظهر في المتجر (الأولى غلاف)
      </p>
    </div>
  );
}
