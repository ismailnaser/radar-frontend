import axios from 'axios';

/** نسبي مع Vite proxy؛ أو عيّن VITE_API_BASE_URL مثل http://127.0.0.1:8000/api إذا تعطل البروكسي */
function resolveApiBaseURL() {
  const raw = import.meta.env.VITE_API_BASE_URL;
  if (raw != null && String(raw).trim() !== '') {
    const u = String(raw).trim();
    return u.endsWith('/') ? u : `${u}/`;
  }
  return '/api/';
}

const api = axios.create({
  baseURL: resolveApiBaseURL(),
});

/** يُعرَّف من AlertProvider عبر showConfirm — قبل التحميل قد يكون null لثوانٍ */
let unauthorizedLogoutConfirm = null;
let sessionExpiredPromptInFlight = false;

export function registerUnauthorizedLogoutConfirm(fn) {
  unauthorizedLogoutConfirm = typeof fn === 'function' ? fn : null;
}

// Add Interceptor for authentication token
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Add Response Interceptor to handle global errors (like 401 Unauthorized)
function persistAuthUser(user, usernameFallback = '') {
  if (!user) return;
  localStorage.setItem('is_verified', user.is_whatsapp_verified ?? 'true');
  localStorage.setItem('user_type', user.user_type || 'shopper');
  localStorage.setItem('user_name', user.username || usernameFallback || '');
  localStorage.setItem('is_primary_admin', user.is_primary_admin ? 'true' : 'false');
  if (user.email != null && String(user.email).trim() !== '') {
    localStorage.setItem('user_email', String(user.email).trim().toLowerCase());
  } else {
    localStorage.removeItem('user_email');
  }
  if (user.user_type === 'merchant') {
    localStorage.setItem('merchant_profile_complete', user.merchant_profile_complete === true ? 'true' : 'false');
  } else {
    localStorage.removeItem('merchant_profile_complete');
  }
}

api.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error.response && error.response.status === 401) {
      const path = window.location.pathname;
      const reqUrl = String(error.config?.url || '');
      // صفحات الدخول/التسجيل: لا نُفرغ الجلسة عند فشل كلمة المرور وغيره
      if (path === '/login' || path === '/register') {
        return Promise.reject(error);
      }
      if (reqUrl.includes('/users/login/') || reqUrl.includes('/users/register/')) {
        return Promise.reject(error);
      }

      if (sessionExpiredPromptInFlight) {
        return Promise.reject(error);
      }
      sessionExpiredPromptInFlight = true;
      try {
        let waitMs = 0;
        while (!unauthorizedLogoutConfirm && waitMs < 800) {
          await new Promise((r) => setTimeout(r, 40));
          waitMs += 40;
        }
        let proceed = true;
        if (unauthorizedLogoutConfirm) {
          proceed = await unauthorizedLogoutConfirm();
        } else {
          proceed = true;
        }
        if (proceed) {
          localStorage.removeItem('token');
          localStorage.removeItem('refresh');
          localStorage.removeItem('is_primary_admin');
          window.location.href = '/login';
        }
      } finally {
        sessionExpiredPromptInFlight = false;
      }
    }
    return Promise.reject(error);
  }
);

export const login = async (username, password) => {
  const response = await api.post('users/login/', {
    username,
    password,
  });
  if (response.data.access) {
    localStorage.setItem('token', response.data.access);
    localStorage.setItem('refresh', response.data.refresh);
    persistAuthUser(response.data.user, username);
    localStorage.removeItem('isGuest');
  }
  return response.data;
};

export const register = async (userData) => {
  const response = await api.post('users/register/', userData);
  return response.data;
};

export const loginWithGoogleAccessToken = async (accessToken) => {
  const response = await api.post('users/auth/google/', { access_token: accessToken }, {
    headers: { 'Content-Type': 'application/json' },
  });
  if (response.data.access) {
    localStorage.setItem('token', response.data.access);
    localStorage.setItem('refresh', response.data.refresh);
    persistAuthUser(response.data.user);
    localStorage.removeItem('isGuest');
  }
  return response.data;
};

export const loginWithGoogleIdToken = async (idToken, options = {}) => {
  const body = { id_token: idToken };
  if (options.registerAsMerchant) {
    body.register_as_merchant = true;
  }
  const response = await api.post('users/auth/google/', body, {
    headers: { 'Content-Type': 'application/json' },
  });
  if (response.data.access) {
    localStorage.setItem('token', response.data.access);
    localStorage.setItem('refresh', response.data.refresh);
    persistAuthUser(response.data.user);
    localStorage.removeItem('isGuest');
  }
  return response.data;
};

export const requestPasswordResetEmail = async (email) => {
  const response = await api.post('auth/password/reset/', { email }, {
    headers: { 'Content-Type': 'application/json' },
  });
  return response.data;
};

/** POST /api/auth/password/reset/confirm/ — dj-rest-auth يتوقع new_password1 و new_password2 (مثل Django SetPasswordForm). */
export const confirmPasswordReset = async ({ uid, token, new_password1, new_password2 }) => {
  const response = await api.post('auth/password/reset/confirm/', {
    uid,
    token,
    new_password1,
    new_password2,
  }, {
    headers: { 'Content-Type': 'application/json' },
  });
  return response.data;
};

export const logout = () => {
  localStorage.removeItem('token');
  localStorage.removeItem('refresh');
  localStorage.removeItem('user_type');
  localStorage.removeItem('user_name');
  localStorage.removeItem('user_email');
  localStorage.removeItem('merchant_profile_complete');
  localStorage.removeItem('is_verified');
  localStorage.removeItem('is_primary_admin');
  localStorage.removeItem('isGuest');
};

export default api;
