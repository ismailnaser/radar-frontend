import React, { useEffect, useMemo, useState } from 'react';
import { Download, Share2 } from 'lucide-react';

function isIOS() {
  if (typeof window === 'undefined') return false;
  const ua = window.navigator.userAgent || '';
  return /iPad|iPhone|iPod/.test(ua) || (ua.includes('Mac') && 'ontouchend' in document);
}

function isInStandaloneMode() {
  if (typeof window === 'undefined') return false;
  // iOS Safari standalone
  const iosStandalone = window.navigator.standalone === true;
  // Other browsers
  const displayStandalone =
    window.matchMedia && window.matchMedia('(display-mode: standalone)').matches;
  return iosStandalone || displayStandalone;
}

export default function InstallPwaButton({ className = '' }) {
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [installed, setInstalled] = useState(false);
  const [showIOSHelp, setShowIOSHelp] = useState(false);

  useEffect(() => {
    setInstalled(isInStandaloneMode());
    const onAppInstalled = () => setInstalled(true);
    window.addEventListener('appinstalled', onAppInstalled);
    return () => window.removeEventListener('appinstalled', onAppInstalled);
  }, []);

  useEffect(() => {
    const onBeforeInstallPrompt = (e) => {
      // Chromium: امنع البانر الافتراضي وخزّن الحدث لإظهار زرنا
      e.preventDefault();
      setDeferredPrompt(e);
    };
    window.addEventListener('beforeinstallprompt', onBeforeInstallPrompt);
    return () => window.removeEventListener('beforeinstallprompt', onBeforeInstallPrompt);
  }, []);

  const mode = useMemo(() => {
    if (installed) return 'installed';
    if (deferredPrompt) return 'prompt';
    if (isIOS()) return 'ios';
    return 'none';
  }, [installed, deferredPrompt]);

  if (mode === 'none' || mode === 'installed') return null;

  const onInstall = async () => {
    if (mode === 'ios') {
      setShowIOSHelp((v) => !v);
      return;
    }
    try {
      deferredPrompt?.prompt?.();
      const choice = await deferredPrompt?.userChoice;
      // choice?.outcome: 'accepted'|'dismissed'
      setDeferredPrompt(null);
      if (choice?.outcome === 'accepted') setInstalled(true);
    } catch {
      // ignore
    }
  };

  return (
    <div className={`pwa-install ${className}`.trim()}>
      <button type="button" className="pwa-install__btn" onClick={onInstall}>
        <span className="pwa-install__btn-ico" aria-hidden>
          {mode === 'ios' ? <Share2 size={18} strokeWidth={2} /> : <Download size={18} strokeWidth={2} />}
        </span>
        <span className="pwa-install__btn-txt">تثبيت التطبيق</span>
      </button>
      {mode === 'ios' && showIOSHelp ? (
        <div className="pwa-install__help">
          على iPhone/iPad: افتح الموقع في Safari ثم اضغط زر المشاركة (Share) واختر
          <strong> “Add to Home Screen”</strong>.
        </div>
      ) : null}
    </div>
  );
}

