import React, { useEffect, useMemo, useRef, useState } from 'react';

function loadGsiScriptOnce() {
  if (typeof window === 'undefined') return Promise.reject(new Error('no window'));
  if (window.google?.accounts?.id) return Promise.resolve();
  if (window.__radar_gsi_loading_promise) return window.__radar_gsi_loading_promise;

  window.__radar_gsi_loading_promise = new Promise((resolve, reject) => {
    const s = document.createElement('script');
    s.src = 'https://accounts.google.com/gsi/client';
    s.async = true;
    s.defer = true;
    s.onload = () => {
      console.log('[GSI] script loaded');
      resolve();
    };
    s.onerror = (e) => {
      console.error('[GSI] script failed to load', e);
      reject(new Error('تعذر تحميل مكتبة Google Identity.'));
    };
    document.head.appendChild(s);
  });
  return window.__radar_gsi_loading_promise;
}

export default function GoogleLoginButton({
  text = 'تسجيل الدخول عبر Google',
  onCredential,
  disabled = false,
  style = {},
  matchAuthButtonSize = false,
}) {
  const wrapperRef = useRef(null);
  const divRef = useRef(null);
  const [ready, setReady] = useState(false);
  const [btnWidth, setBtnWidth] = useState(320);
  const clientId = useMemo(
    () =>
      import.meta.env.VITE_GOOGLE_CLIENT_ID ||
      '407689787967-7qo6llkgshi16oreveh6ndikj0aod9kt.apps.googleusercontent.com',
    []
  );

  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        console.log('[GSI] VITE_GOOGLE_CLIENT_ID =', clientId ? `${String(clientId).slice(0, 12)}…` : '(empty)');
        if (!clientId) return;
        await loadGsiScriptOnce();
        if (cancelled) return;
        window.google.accounts.id.initialize({
          client_id: clientId,
          callback: (resp) => {
            const cred = resp?.credential;
            console.log('[GSI] credential received =', cred ? `${String(cred).slice(0, 18)}…` : '(empty)');
            if (cred && typeof onCredential === 'function') onCredential(cred);
          },
          ux_mode: 'popup',
        });
        setReady(true);
      } catch (e) {
        console.error('[GSI] init failed', e);
        setReady(false);
      }
    })();
    return () => {
      cancelled = true;
    };
  }, [clientId, onCredential]);

  // Render button when ready. If clientId missing, show nothing.
  useEffect(() => {
    if (!wrapperRef.current) return;
    const el = wrapperRef.current;
    const update = () => {
      const w = Math.max(280, Math.floor(el.clientWidth || 320));
      setBtnWidth(w);
    };
    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    window.addEventListener('resize', update);
    return () => {
      ro.disconnect();
      window.removeEventListener('resize', update);
    };
  }, []);

  useEffect(() => {
    if (!ready) return;
    if (!divRef.current) return;
    divRef.current.innerHTML = '';
    window.google.accounts.id.renderButton(divRef.current, {
      type: 'standard',
      theme: 'outline',
      size: 'large',
      text: 'continue_with',
      shape: 'pill',
      locale: 'ar',
      width: btnWidth,
    });

  }, [ready, btnWidth, matchAuthButtonSize]);

  if (!clientId) return null;

  return (
    <div
      ref={wrapperRef}
      className={matchAuthButtonSize ? 'google-login-wrap google-login-wrap--match-auth' : 'google-login-wrap'}
      style={{
        marginTop: 12,
        width: '100%',
        ...(matchAuthButtonSize ? { minHeight: 52 } : null),
        ...style,
      }}
    >
      {/* hidden fallback label for screen readers */}
      <div style={{ position: 'absolute', width: 1, height: 1, overflow: 'hidden' }}>{text}</div>
      <div
        ref={divRef}
        style={{
          opacity: disabled ? 0.6 : 1,
          pointerEvents: disabled ? 'none' : 'auto',
          display: 'flex',
          justifyContent: 'center',
        }}
      />
      {!ready ? (
        <div style={{ marginTop: 8, textAlign: 'center', fontWeight: 800, fontSize: '0.82rem', color: '#666' }}>
          جاري تجهيز تسجيل الدخول عبر Google…
        </div>
      ) : null}
      {matchAuthButtonSize ? (
        <style>{`
          .google-login-wrap--match-auth .S9gUrf-YoZ4jf > div{
            display: flex !important;
            justify-content: center !important;
          }
          .google-login-wrap--match-auth [class*="nsm7Bb-HzV7m-LgbsSe"]{
            min-height: 52px !important;
            height: 52px !important;
            border-radius: 14px !important;
            justify-content: center !important;
            text-align: center !important;
          }
          .google-login-wrap--match-auth [class*="nsm7Bb-HzV7m-LgbsSe-MJoBVe"]{
            display: flex !important;
            align-items: center !important;
            justify-content: center !important;
            width: 100% !important;
            height: 52px !important;
          }
          .google-login-wrap--match-auth [class*="nsm7Bb-HzV7m-LgbsSe-bN97Pc"]{
            display: inline-flex !important;
            align-items: center !important;
            justify-content: center !important;
            gap: 10px !important;
            width: auto !important;
            height: 100% !important;
            margin: 0 auto !important;
            padding-top: 0 !important;
            padding-bottom: 0 !important;
          }
          .google-login-wrap--match-auth [class*="nsm7Bb-HzV7m-LgbsSe-Bz112c"]{
            display: inline-flex !important;
            align-items: center !important;
            justify-content: center !important;
            flex: 0 1 auto !important;
            height: 100% !important;
            text-align: center !important;
          }
          .google-login-wrap--match-auth [class*="nsm7Bb-HzV7m-LgbsSe-BPrWId"]{
            display: inline-flex !important;
            align-items: center !important;
            flex: 0 0 auto !important;
            width: auto !important;
            height: 100% !important;
            margin: 0 !important;
            text-align: center !important;
            line-height: 1 !important;
          }
          .google-login-wrap--match-auth [class*="LgbsSe-Bz112c"]{
            display: flex !important;
            flex-direction: column !important;
            align-items: center !important;
            justify-content: center !important;
            margin: 0 !important;
            padding: 0 !important;
            vertical-align: middle !important;
            position: relative !important;
            top: 0 !important;
            transform: translateY(0) !important;
            align-self: center !important;
          }
          .google-login-wrap--match-auth [class*="M5MNb"]{
            display: inline-flex !important;
            align-items: center !important;
            justify-content: center !important;
            height: 100% !important;
            padding-top: 0 !important;
            padding-bottom: 0 !important;
          }
        `}</style>
      ) : null}
    </div>
  );
}

