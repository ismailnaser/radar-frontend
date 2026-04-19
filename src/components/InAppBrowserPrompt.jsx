import React, { useState, useEffect } from 'react';
import './InAppBrowserPrompt.css';

export function InAppBrowserPrompt() {
  const [isInApp, setIsInApp] = useState(false);
  const [os, setOs] = useState('unknown');

  useEffect(() => {
    try {
      const ua = navigator.userAgent || navigator.vendor || window.opera || '';
      
      const isInstagram = (ua.indexOf('Instagram') > -1) || (ua.indexOf('IGWebView') > -1);
      const isFacebook = (ua.indexOf('FBAN') > -1) || (ua.indexOf('FBAV') > -1);
      const isTikTok = (ua.indexOf('ByteLocale') > -1) || (ua.indexOf('trill') > -1);
      
      if (isInstagram || isFacebook || isTikTok) {
        setIsInApp(true);
        if (/iPad|iPhone|iPod/.test(ua) && !window.MSStream) {
          setOs('ios');
        } else if (/android/i.test(ua)) {
          setOs('android');
        }
      }
    } catch (error) {
      // ignore
    }
  }, []);

  if (!isInApp) return null;

  return (
    <div className="in-app-overlay">
      <div className="in-app-modal">
        <img src="/logo.png" alt="Radar Logo" className="in-app-logo" />
        
        <h2>تجربة أسرع لك!</h2>
        <p>لتثبيت التطبيق والحصول على أفضل تجربة مستخدم:</p>
        
        {/* زر التحويل للاختيار اليدوي */}
        <div className="os-toggle-container">
          <button 
            className={`os-toggle-btn ${os === 'android' ? 'active' : ''}`}
            onClick={() => setOs('android')}
          >
            🤖 Android
          </button>
          <button 
            className={`os-toggle-btn ${os === 'ios' ? 'active' : ''}`}
            onClick={() => setOs('ios')}
          >
            🍎 iOS
          </button>
        </div>

        <div className="in-app-instruction-box">
          {os === 'ios' ? (
            <>
              <div className="in-app-step">
                1. اضغط على <span className="in-app-dots">⋯</span>
              </div>
              <div className="in-app-step" style={{ marginTop: '15px', color: 'var(--secondary)' }}>
                2. اختر "الفتح في Safari" 🧭
              </div>
            </>
          ) : (
            <>
              <div className="in-app-step">
                1. اضغط على <span className="in-app-dots">⋮</span> بالأعلى
              </div>
              <div className="in-app-step" style={{ marginTop: '15px', color: 'var(--secondary)' }}>
                2. اختر "الفتح في Chrome" 🌐
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
