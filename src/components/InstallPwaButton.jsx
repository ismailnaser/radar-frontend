import React, { useEffect, useMemo, useState } from 'react';
import { Download, Share2 } from 'lucide-react';
import { useAlert } from './AlertProvider';

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
  const { showAlert } = useAlert();
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
    const cached = typeof window !== 'undefined' ? window.__radarDeferredInstallPrompt : null;
    if (cached) setDeferredPrompt(cached);
    const onBeforeInstallPrompt = (e) => {
      // Chromium: امنع البانر الافتراضي وخزّن الحدث لإظهار زرنا
      e.preventDefault();
      setDeferredPrompt(e);
      window.__radarDeferredInstallPrompt = e;
    };
    window.addEventListener('beforeinstallprompt', onBeforeInstallPrompt);
    return () => window.removeEventListener('beforeinstallprompt', onBeforeInstallPrompt);
  }, []);

  const mode = useMemo(() => {
    if (installed) return 'installed';
    if (deferredPrompt) return 'prompt';
    if (isIOS()) return 'ios';
    return 'manual';
  }, [installed, deferredPrompt]);

  if (mode === 'installed') return null;

  const onInstall = async () => {
    if (mode === 'ios') {
      await showAlert('التثبيت التلقائي غير مدعوم على iPhone/iPad من هذا الزر.', 'تنبيه');
      return;
    }
    const promptEvent =
      deferredPrompt || (typeof window !== 'undefined' ? window.__radarDeferredInstallPrompt : null);
    if (promptEvent && typeof promptEvent.prompt === 'function') {
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
        <span className="pwa-install__btn-txt">تثبيت التطبيق</span>
      </button>
      {(mode === 'ios' || mode === 'manual') && showIOSHelp ? (
        <div className="pwa-install__help">
          {mode === 'ios' ? (
            <>
              على iPhone/iPad: افتح الموقع في Safari ثم اضغط زر المشاركة (Share) واختر
              <strong> “Add to Home Screen”</strong>.
            </>
          ) : (
            <>
              إن لم يظهر تثبيت تلقائي: افتح قائمة المتصفح ثم اختر
              <strong> Install app</strong> أو <strong>Add to Home screen</strong>.
            </>
          )}
        </div>
      ) : null}
    </div>
  );
}

