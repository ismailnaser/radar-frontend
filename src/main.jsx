import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import ErrorBoundary from './components/ErrorBoundary.jsx'
import { resolvePublicUiMode } from './config/publicUiMode'
import { registerSW } from 'virtual:pwa-register'

function isStandalone() {
  try {
    // iOS Safari standalone
    if (window.navigator && window.navigator.standalone) return true
    // Chromium/others
    return window.matchMedia && window.matchMedia('(display-mode: standalone)').matches
  } catch {
    return false
  }
}

function applyTitleByMode() {
  // في المتصفح: العنوان الطويل يظهر في التبويب
  // في التطبيق المثبت: نخليه قصير لتجنب ظهور الاسم مرتين
  document.title = isStandalone() ? 'رادار' : 'رادار-دليلك للمحلات القريبة'
}

// تسجيل Service Worker مع حراسة التوافق (يدعم Safari iOS 11.3+)
if ('serviceWorker' in navigator) {
  registerSW({
    immediate: true,
    onRegistered() {
      // no-op: just confirm registration path is executed
    },
    onRegisterError(error) {
      // eslint-disable-next-line no-console
      console.error('SW registration failed:', error)
    },
  })
}

// التقط حدث التثبيت مبكراً قبل تركيب واجهة React
window.addEventListener('beforeinstallprompt', (e) => {
  e.preventDefault()
  window.__radarDeferredInstallPrompt = e
  window.dispatchEvent(new Event('radar:beforeinstallprompt-ready'))
})

applyTitleByMode()
window.addEventListener('appinstalled', applyTitleByMode)
try {
  window.matchMedia('(display-mode: standalone)').addEventListener('change', applyTitleByMode)
} catch {
  // ignore
}

const rootEl = document.getElementById('root')
if (!rootEl) {
  document.body.innerHTML =
    '<p style="font-family:sans-serif;padding:24px;direction:rtl;">عنصر #root غير موجود في الصفحة.</p>'
} else {
  void resolvePublicUiMode()
    .catch(() => {})
    .finally(() => {
      ReactDOM.createRoot(rootEl).render(
        <React.StrictMode>
          <ErrorBoundary>
            <App />
          </ErrorBoundary>
        </React.StrictMode>,
      )
    })
}
