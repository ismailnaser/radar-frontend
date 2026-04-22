import React, { useEffect, useMemo, useState } from 'react';
import { Download, Share2 } from 'lucide-react';
import { useAlert } from './AlertProvider';
import IOSInstallGuide from './IOSInstallGuide';

function isIOS() {
  if (typeof window === 'undefined') return false;
  const ua = window.navigator.userAgent || '';
  return /iPad|iPhone|iPod/.test(ua) || (ua.includes('Mac') && 'ontouchend' in document);
}

function isAndroid() {
  if (typeof window === 'undefined') return false;
  const ua = window.navigator.userAgent || '';
  return /android/i.test(ua);
}

function isCursorBrowser() {
  if (typeof window === 'undefined') return false;
  const ua = window.navigator.userAgent || '';
  return /Cursor|Electron/i.test(ua);
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
  const { showAlert, showConfirm } = useAlert();
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [installed, setInstalled] = useState(false);

  useEffect(() => {
    setInstalled(isInStandaloneMode());
    const onAppInstalled = () => setInstalled(true);
    window.addEventListener('appinstalled', onAppInstalled);
    return () => window.removeEventListener('appinstalled', onAppInstalled);
  }, []);

  useEffect(() => {
    const cached = typeof window !== 'undefined' ? window.__radarDeferredInstallPrompt : null;
    if (cached) setDeferredPrompt(cached);
    const onPromptReady = () => {
      const p = window.__radarDeferredInstallPrompt || null;
      if (p) setDeferredPrompt(p);
    };
    const onBeforeInstallPrompt = (e) => {
      // Chromium: امنع البانر الافتراضي وخزّن الحدث لإظهار زرنا
      e.preventDefault();
      setDeferredPrompt(e);
      window.__radarDeferredInstallPrompt = e;
    };
    window.addEventListener('radar:beforeinstallprompt-ready', onPromptReady);
    window.addEventListener('beforeinstallprompt', onBeforeInstallPrompt);
    return () => {
      window.removeEventListener('radar:beforeinstallprompt-ready', onPromptReady);
      window.removeEventListener('beforeinstallprompt', onBeforeInstallPrompt);
    };
  }, []);

  const mode = useMemo(() => {
    if (installed) return 'installed';
    if (isCursorBrowser()) return 'unsupported';
    if (deferredPrompt) return 'prompt';
    if (isIOS()) return 'ios';
    return 'manual';
  }, [installed, deferredPrompt]);

  if (mode === 'installed') return null;

  const onInstall = async () => {
    if (mode === 'unsupported') {
      await showAlert(
        'متصفح Cursor لا يدعم نافذة التثبيت التلقائي. افتح الموقع في Chrome أو Edge ثم اضغط زر تثبيت التطبيق.',
        'تنبيه'
      );
      return;
    }
    if (mode === 'ios') {
      return;
    }
    const promptEvent =
      deferredPrompt || (typeof window !== 'undefined' ? window.__radarDeferredInstallPrompt : null);
    if (promptEvent && typeof promptEvent.prompt === 'function') {
      const ok = await showConfirm(
        'هل تريد تثبيت تطبيق رادار على هذا الجهاز الآن؟',
        'تأكيد التثبيت'
      );
      if (!ok) return;
      try {
        promptEvent.prompt();
        const choice = await promptEvent.userChoice;
        setDeferredPrompt(null);
        if (typeof window !== 'undefined') window.__radarDeferredInstallPrompt = null;
        if (choice?.outcome === 'accepted') {
          setInstalled(true);
          await showAlert('تمت الموافقة على التثبيت. أكمل الخطوة من نافذة المتصفح إن ظهرت.', 'تم');
        } else {
          await showAlert('تم إلغاء طلب التثبيت.', 'تنبيه');
        }
      } catch {
        await showAlert('تعذر إكمال التثبيت. حاول لاحقاً أو من متصفح آخر.', 'خطأ');
      }
      return;
    }
    if (mode === 'manual') {
      await showAlert('التثبيت التلقائي غير متاح حاليًا على هذا المتصفح.', 'تنبيه');
      return;
    }
    await showAlert('التثبيت التلقائي غير متاح حاليًا على هذا المتصفح.', 'تنبيه');
  };

  return (
    <div className={`pwa-install ${className}`.trim()}>
      <button type="button" className="pwa-install__btn" onClick={onInstall}>
        <span className="pwa-install__btn-ico" aria-hidden>
          {mode === 'ios' ? <Share2 size={18} strokeWidth={2} /> : <Download size={18} strokeWidth={2} />}
        </span>
        <span className="pwa-install__btn-txt">
          تثبيت التطبيق
        </span>
      </button>
      {mode === 'ios' ? <IOSInstallGuide /> : null}
    </div>
  );
}

