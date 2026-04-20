import React, { useCallback, useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

/**
 * معرض صور بسيط (أزرار + نقاط) — RTL. يرجع null إذا لا توجد صور (يعرض الأب placeholder).
 */
export default function ImageCarousel({
  images = [],
  alt = '',
  className = '',
  height = 152,
  borderRadius = 12,
  /** يملأ الحاوية الأب (يحتاج ارتفاعاً محدداً للأب، مثل aspect-ratio) */
  fill = false,
}) {
  const list = (Array.isArray(images) ? images : []).filter(Boolean);
  const [idx, setIdx] = useState(0);
  const n = list.length;

  useEffect(() => {
    setIdx((i) => (n === 0 ? 0 : Math.min(i, n - 1)));
  }, [n]);

  const go = useCallback(
    (delta) => {
      if (n <= 1) return;
      setIdx((i) => (i + delta + n) % n);
    },
    [n],
  );

  if (n === 0) return null;

  const wrapStyle = {
    position: 'relative',
    width: fill ? '100%' : undefined,
    height: fill ? '100%' : height,
    minHeight: fill ? 0 : undefined,
    borderRadius,
    overflow: 'hidden',
    background: 'var(--grey-light, #eee)',
  };

  const imgStyle = {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    display: 'block',
  };

  const btnBase = {
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    zIndex: 2,
    border: 'none',
    borderRadius: '50%',
    width: 36,
    height: 36,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    background: 'rgba(255,255,255,0.92)',
    color: 'var(--secondary)',
    boxShadow: '0 2px 8px rgba(0,0,0,0.12)',
  };

  return (
    <div className={`radar-image-carousel ${className || ''}`.trim()} style={wrapStyle}>
      <img src={list[idx]} alt={alt} style={imgStyle} loading="lazy" width="800" height="800" />

      {n > 1 ? (
        <>
          <button
            type="button"
            style={{ ...btnBase, insetInlineEnd: 8 }}
            onClick={() => go(1)}
            aria-label="الصورة التالية"
          >
            <ChevronLeft size={22} strokeWidth={2.4} />
          </button>
          <button
            type="button"
            style={{ ...btnBase, insetInlineStart: 8 }}
            onClick={() => go(-1)}
            aria-label="الصورة السابقة"
          >
            <ChevronRight size={22} strokeWidth={2.4} />
          </button>
          <div
            style={{
              position: 'absolute',
              bottom: 8,
              left: 0,
              right: 0,
              display: 'flex',
              justifyContent: 'center',
              gap: 6,
              zIndex: 2,
            }}
          >
            {list.map((_, i) => (
              <button
                key={i}
                type="button"
                aria-label={`صورة ${i + 1} من ${n}`}
                onClick={() => setIdx(i)}
                style={{
                  width: i === idx ? 22 : 8,
                  height: 8,
                  borderRadius: 4,
                  border: 'none',
                  padding: 0,
                  cursor: 'pointer',
                  background: i === idx ? 'var(--primary)' : 'rgba(255,255,255,0.75)',
                  transition: 'width 0.15s ease',
                }}
              />
            ))}
          </div>
        </>
      ) : null}
    </div>
  );
}
