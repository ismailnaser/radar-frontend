/**
 * حفظ بيانات تسجيل الدخول محلياً عند تفعيل «تذكرني» (نفس الجهاز/المتصفح).
 * كلمة المرور تُخزَّن مُرمّاة بـ base64 وليست تشفيراً حقيقياً — لا تستخدم على أجهزة مشتركة إن أمكن.
 */

const KEY_FLAG = 'radar_remember_login';
const KEY_USER = 'radar_saved_login_username';
const KEY_PASS = 'radar_saved_login_password_b64';

function utf8ToB64(str) {
  try {
    return btoa(unescape(encodeURIComponent(str)));
  } catch {
    return '';
  }
}

function b64ToUtf8(str) {
  if (!str) return '';
  try {
    return decodeURIComponent(escape(atob(str)));
  } catch {
    return '';
  }
}

export function loadRememberedLogin() {
  if (typeof localStorage === 'undefined') {
    return { username: '', password: '', rememberMe: false };
  }
  const rememberMe = localStorage.getItem(KEY_FLAG) === 'true';
  if (!rememberMe) {
    return { username: '', password: '', rememberMe: false };
  }
  const username = localStorage.getItem(KEY_USER) || '';
  const password = b64ToUtf8(localStorage.getItem(KEY_PASS) || '');
  return { username, password, rememberMe: true };
}

export function saveRememberedLogin({ username, password, rememberMe }) {
  if (typeof localStorage === 'undefined') return;
  if (!rememberMe) {
    localStorage.removeItem(KEY_FLAG);
    localStorage.removeItem(KEY_USER);
    localStorage.removeItem(KEY_PASS);
    return;
  }
  localStorage.setItem(KEY_FLAG, 'true');
  localStorage.setItem(KEY_USER, String(username || '').trim());
  localStorage.setItem(KEY_PASS, utf8ToB64(String(password ?? '')));
}

export function clearRememberedLogin() {
  saveRememberedLogin({ username: '', password: '', rememberMe: false });
}
