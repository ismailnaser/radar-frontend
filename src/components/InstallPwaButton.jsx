import React, { useEffect, useMemo, useState } from 'react';
import { Download, Share2 } from 'lucide-react';
import { useAlert } from './AlertProvider';

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
  const { showConfirm, showAlert } = useAlert();
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
    const ok = await showConfirm(
      mode === 'ios'
        ? 'عرض تعليمات إضافة رادار إلى الشاشة الرئيسية على آيفون/آيباد؟'
        : 'تثبيت تطبيق رادار على هذا الجهاز؟',
      'تثبيت التطبيق'
    );
    if (!ok) return;
    if (mode === 'ios') {
      setShowIOSHelp((v) => !v);
      await showAlert('اتبع التعليمات أسفل الزر لإضافة الموقع إلى الشاشة الرئيسية.', 'تلميح');
      return;
    }
    try {
      deferredPrompt?.prompt?.();
      const choice = await deferredPrompt?.userChoice;
      setDeferredPrompt(null);
      if (choice?.outcome === 'accepted') {
        setInstalled(true);
        await showAlert('تمت الموافقة على التثبيت. أكمل الخطوة من نافذة المتصفح إن ظهرت.', 'تم');
      } else {
        await showAlert('تم إلغاء طلب التثبيت.', 'تنبيه');
      }
    } catch {
      await showAlert('تعذر إكمال التثبيت. حاول لاحقاً أو من متصفح آخر.', 'خطأ');
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

