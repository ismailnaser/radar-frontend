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
}) {
  const divRef = useRef(null);
  const [ready, setReady] = useState(false);
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
      width: 320,
    });
  }, [ready]);

  if (!clientId) return null;

  return (
    <div style={{ marginTop: 12, ...style }}>
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
    </div>
  );
}

