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

// Add Interceptor for authentication token
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Add Response Interceptor to handle global errors (like 401 Unauthorized)
api.interceptors.response.use(
  (response) => response,
  (error) => {
    // If we have a 401 error and it's NOT from the login endpoint itself
    if (error.response && error.response.status === 401) {
      const isLoginPage = window.location.pathname === '/login';
      if (!isLoginPage) {
        localStorage.removeItem('token');
        localStorage.removeItem('refresh');
        localStorage.removeItem('is_primary_admin');
        window.location.href = '/login'; 
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
    // Store verification status if returned by backend, default to true for now to avoid blocks unless we add user endpoint
    localStorage.setItem('is_verified', response.data.user?.is_whatsapp_verified ?? 'true');
    localStorage.setItem('user_type', response.data.user?.user_type || 'shopper');
    localStorage.setItem('user_name', response.data.user?.username || username || '');
    localStorage.setItem(
      'is_primary_admin',
      response.data.user?.is_primary_admin ? 'true' : 'false'
    );
    localStorage.removeItem('isGuest');
  }
  return response.data;
};

export const register = async (userData) => {
  const response = await api.post('users/register/', userData);
  return response.data;
};

export const logout = () => {
  localStorage.removeItem('token');
  localStorage.removeItem('refresh');
  localStorage.removeItem('user_type');
  localStorage.removeItem('user_name');
  localStorage.removeItem('is_verified');
  localStorage.removeItem('is_primary_admin');
  localStorage.removeItem('isGuest');
};

export default api;
