import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import ErrorBoundary from './components/ErrorBoundary.jsx'
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

// تسجيل Service Worker لتفعيل التثبيت + العمل بدون إنترنت (عرض آخر كاش)
registerSW({ immediate: true })

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
  ReactDOM.createRoot(rootEl).render(
    <React.StrictMode>
      <ErrorBoundary>
        <App />
      </ErrorBoundary>
    </React.StrictMode>,
  )
}
