import React from 'react';

function isIOSDevice() {
  if (typeof window === 'undefined') return false;
  const ua = window.navigator.userAgent || '';
  return /iPad|iPhone|iPod/.test(ua) || (ua.includes('Mac') && 'ontouchend' in document);
}

function isStandalone() {
  if (typeof window === 'undefined') return false;
  return window.navigator.standalone === true;
}

export default function IOSInstallGuide() {
  if (!isIOSDevice() || isStandalone()) return null;

  return (
    <div className="pwa-install__help" role="note" aria-label="خطوات التثبيت على ايفون">
      <strong>تثبيت على iPhone:</strong> اضغط زر <strong>Share</strong> في Safari، ثم اختر{' '}
      <strong>Add to Home Screen</strong>، وبعدها اضغط <strong>Add</strong>.
    </div>
  );
}

