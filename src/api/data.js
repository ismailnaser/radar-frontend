import api from './auth';

// Stores & Locations
export const getCategories = async () => {
  const response = await api.get('stores/categories/');
  return response.data;
};

export const getServices = async () => {
  const response = await api.get('stores/services/');
  return response.data;
};

/** أقسام الخدمات المجتمعية */
export const getCommunityCategories = async () => {
  const response = await api.get('stores/community/categories/');
  return response.data;
};

/** نقاط معتمدة للعرض على الخريطة والصفحة */
export const getCommunityPoints = async (categoryId = null) => {
  const q =
    categoryId != null && String(categoryId).trim() !== ''
      ? `?category=${encodeURIComponent(categoryId)}`
      : '';
  const response = await api.get(`stores/community/points/${q}`);
  return response.data;
};

export const getMyCommunityPoints = async () => {
  const response = await api.get('stores/community/points/mine/');
  return response.data;
};

export const submitCommunityPoint = async (payload) => {
  const response = await api.post('stores/community/points/submit/', payload, {
    headers: { 'Content-Type': 'application/json' },
  });
  return response.data;
};

export const getAdminCommunityPoints = async (status) => {
  const q = status === '' || status == null ? '' : `?status=${encodeURIComponent(status)}`;
  const response = await api.get(`stores/admin/community-points/${q}`);
  return response.data;
};

export const adminCreateCommunityPoint = async (payload) => {
  const response = await api.post('stores/admin/community-points/', payload, {
    headers: { 'Content-Type': 'application/json' },
  });
  return response.data;
};

export const adminModerateCommunityPoint = async (id, action, rejectionReason = '') => {
  const body = { action };
  if (rejectionReason) body.rejection_reason = rejectionReason;
  const response = await api.patch(`stores/admin/community-points/${id}/moderate/`, body, {
    headers: { 'Content-Type': 'application/json' },
  });
  return response.data;
};

export const adminUpdateCommunityPoint = async (id, payload) => {
  const response = await api.patch(`stores/admin/community-points/${id}/`, payload, {
    headers: { 'Content-Type': 'application/json' },
  });
  return response.data;
};

export const adminDeleteCommunityPoint = async (id) => {
  const response = await api.delete(`stores/admin/community-points/${id}/`);
  return response.data;
};

export const getNearbyStores = async (lat, lng, categoryId = null) => {
  let url = `stores/stores/?lat=${lat}&lng=${lng}`;
  if (categoryId) url += `&category=${categoryId}`;
  const response = await api.get(url);
  return response.data;
};

export const getStoreDetail = async (id) => {
  const response = await api.get(`stores/stores/${id}/`);
  return response.data;
};

/** تقييم متجر 1–5 — للمتسوّقين فقط */
export const rateStore = async (storeId, stars) => {
  const sid = Number(storeId);
  const n = Number(stars);
  const response = await api.post(
    `stores/stores/${sid}/rate/`,
    { stars: n },
    { headers: { 'Content-Type': 'application/json' } }
  );
  return response.data;
};

// Merchant specific
export const getMerchantStats = async () => {
  const response = await api.get('orders/merchant-stats/');
  return response.data;
};

export const getMerchantProducts = async () => {
  const response = await api.get('products/merchant/products/');
  return response.data;
};

export const getMerchantProduct = async (id) => {
  const response = await api.get(`products/merchant/products/${id}/`);
  return response.data;
};

export const createMerchantProduct = async (formData) => {
  const response = await api.post('products/merchant/products/', formData);
  return response.data;
};

/** لا تضبط Content-Type يدوياً مع FormData — axios والمتصفح يضيفان boundary تلقائياً */
export const updateMerchantProduct = async (id, data) => {
  const response = await api.patch(`products/merchant/products/${id}/`, data);
  return response.data;
};

export const deleteMerchantProduct = async (id) => {
  const response = await api.delete(`products/merchant/products/${id}/`);
  return response.data;
};

/** تصدير منتجات التاجر كملف Excel — يُرجع Blob */
export const exportMerchantProductsExcel = async () => {
  const response = await api.get('products/merchant/products/export-excel/', {
    responseType: 'blob',
  });
  return response.data;
};

/** استيراد منتجات من ملف Excel مع صور اختيارية من الجهاز */
export const importMerchantProductsExcel = async (file, images = []) => {
  const fd = new FormData();
  fd.append('file', file);
  if (Array.isArray(images)) {
    images.forEach((img) => {
      if (img) fd.append('images', img);
    });
  }
  const response = await api.post('products/merchant/products/import-excel/', fd);
  return response.data;
};

export const getMerchantAds = async () => {
  const response = await api.get('products/merchant/ads/');
  return response.data;
};

export const createMerchantAd = async (formData) => {
  const response = await api.post('products/merchant/ads/', formData);
  return response.data;
};

export const updateMerchantAd = async (id, data) => {
  const response = await api.patch(`products/merchant/ads/${id}/`, data);
  return response.data;
};

export const deleteMerchantAd = async (id) => {
  const response = await api.delete(`products/merchant/ads/${id}/`);
  return response.data;
};

export const getMerchantSubscriptionStatus = async () => {
  const response = await api.get('products/merchant/subscription/');
  return response.data;
};

export const getMerchantSubscriptionRenewalRequests = async () => {
  const response = await api.get('products/merchant/subscription/renew/');
  return response.data;
};

export const createMerchantSubscriptionRenewalRequest = async (formData) => {
  const response = await api.post('products/merchant/subscription/renew/', formData);
  return response.data;
};

// ——— إدارة التطبيق (صلاحيات مدير) ———
export const getAdminPendingCounts = async () => {
  const response = await api.get('products/admin/pending-counts/');
  return response.data;
};

export const getAdminAds = async (status) => {
  const q = status === '' || status == null ? '' : `?status=${encodeURIComponent(status)}`;
  const response = await api.get(`products/admin/ads/${q}`);
  return response.data;
};

export const getAdminAd = async (id) => {
  const response = await api.get(`products/admin/ads/${id}/`);
  return response.data;
};

export const setAdminAdStatus = async (id, status) => {
  const response = await api.post(`products/admin/ads/${id}/set-status/`, { status });
  return response.data;
};

export const getAdminSubscriptionRenewals = async (status) => {
  const q = status === '' || status == null ? '' : `?status=${encodeURIComponent(status)}`;
  const response = await api.get(`products/admin/subscription/renew/${q}`);
  return response.data;
};

export const approveAdminSubscriptionRenewal = async (id) => {
  const response = await api.post(`products/admin/subscription/renew/${id}/approve/`);
  return response.data;
};

export const rejectAdminSubscriptionRenewal = async (id) => {
  const response = await api.post(`products/admin/subscription/renew/${id}/reject/`);
  return response.data;
};

/** حسابات المدراء — للمدير الأساسي فقط */
export const getPrimaryAdminAccounts = async () => {
  const response = await api.get('users/admin/accounts/');
  return response.data;
};

export const createAdminAccount = async (payload) => {
  const response = await api.post('users/admin/accounts/', payload);
  return response.data;
};

export const setAdminAccountActive = async (id, isActive) => {
  const response = await api.patch(`users/admin/accounts/${id}/`, { is_active: isActive });
  return response.data;
};

export const getAdminMetrics = async () => {
  const response = await api.get('users/admin/metrics/');
  return response.data;
};

// إعلانات عامة (تظهر لكل المستخدمين)
export const getPublicAnnouncements = async () => {
  const response = await api.get('users/public/announcements/');
  return response.data;
};

// إشعارات الأدمن داخل التطبيق
export const getAdminNotifications = async (sinceId = null) => {
  const params = {};
  if (sinceId != null && String(sinceId).trim() !== '') params.since_id = String(sinceId);
  const response = await api.get('users/admin/notifications/', { params });
  return response.data;
};

export const getPrimaryAdminAnnouncements = async () => {
  const response = await api.get('users/admin/announcements/');
  return response.data;
};

export const createPrimaryAdminAnnouncement = async (message) => {
  const response = await api.post('users/admin/announcements/', { message });
  return response.data;
};

export const deletePrimaryAdminAnnouncement = async (id) => {
  const response = await api.delete(`users/admin/announcements/${id}/`);
  return response.data;
};

// أرباح/تحويلات (للمدير الأساسي)
export const getAdminFinanceTransfers = async ({ q = '', from = '', to = '', method = '', kind = '' } = {}) => {
  const params = {};
  if (q && String(q).trim() !== '') params.q = String(q).trim();
  if (from && String(from).trim() !== '') params.from = String(from).trim();
  if (to && String(to).trim() !== '') params.to = String(to).trim();
  if (method && String(method).trim() !== '') params.method = String(method).trim();
  if (kind && String(kind).trim() !== '') params.kind = String(kind).trim();
  const response = await api.get('products/admin/finance/transfers/', { params });
  return response.data;
};

export const deleteAdminFinanceTransfer = async (id) => {
  await api.delete(`products/admin/finance/transfers/${id}/`);
};

// مدفوعات الإدارة للتطبيق (للمدير الأساسي)
export const getAdminAppPayments = async ({ status = '' } = {}) => {
  const params = {};
  if (status && String(status).trim() !== '') params.status = String(status).trim();
  const response = await api.get('products/admin/payments/', { params });
  return response.data;
};

export const createAdminAppPayment = async (payload) => {
  const response = await api.post('products/admin/payments/', payload, {
    headers: { 'Content-Type': 'application/json' },
  });
  return response.data;
};

export const patchAdminAppPayment = async (id, payload) => {
  const response = await api.patch(`products/admin/payments/${id}/`, payload, {
    headers: { 'Content-Type': 'application/json' },
  });
  return response.data;
};

export const deleteAdminAppPayment = async (id) => {
  await api.delete(`products/admin/payments/${id}/`);
};

export const adminSearchUsers = async (q = '', userType = '') => {
  const params = {};
  if (q != null && String(q).trim() !== '') params.q = String(q).trim();
  if (userType != null && String(userType).trim() !== '') params.user_type = String(userType).trim();
  const response = await api.get('users/admin/users/', { params });
  return response.data;
};

export const adminSetUserActive = async (id, isActive) => {
  const response = await api.patch(`users/admin/users/${id}/`, { is_active: isActive });
  return response.data;
};

export const adminConvertUserToMerchant = async (id) => {
  const response = await api.patch(`users/admin/users/${id}/`, { user_type: 'merchant' });
  return response.data;
};

/** جميع المتاجر — للمدير الأساسي فقط (?q=&category= مثل الخريطة) */
export const getPrimaryAdminStores = async (q, categoryId) => {
  const params = {};
  if (q != null && String(q).trim() !== '') params.q = String(q).trim();
  if (categoryId != null && String(categoryId).trim() !== '') {
    const n = Number(categoryId);
    if (Number.isFinite(n) && n > 0) params.category = String(n);
  }
  const response = await api.get('stores/admin/stores/', { params });
  return response.data;
};

export const patchPrimaryAdminStoreSuspend = async (id, isSuspended) => {
  const response = await api.patch(`stores/admin/stores/${id}/suspend/`, {
    is_suspended_by_admin: isSuspended,
  });
  return response.data;
};

export const patchPrimaryAdminStoreCategories = async (id, categories = []) => {
  const response = await api.patch(`stores/admin/stores/${id}/categories/`, {
    categories: Array.isArray(categories) ? categories : [],
  });
  return response.data;
};

// إدارة الأقسام (مدير أساسي)
export const getPrimaryAdminStoreCategories = async () => {
  const response = await api.get('stores/admin/categories/');
  return response.data;
};

export const createPrimaryAdminStoreCategory = async ({ name, imageFile } = {}) => {
  const fd = new FormData();
  fd.append('name', name || '');
  if (imageFile) fd.append('image', imageFile);
  const response = await api.post('stores/admin/categories/', fd);
  return response.data;
};

export const deletePrimaryAdminStoreCategory = async (id) => {
  const response = await api.delete(`stores/admin/categories/${id}/`);
  return response.data;
};

export const getPrimaryAdminCommunityCategories = async () => {
  const response = await api.get('stores/admin/community/categories/');
  return response.data;
};

export const createPrimaryAdminCommunityCategory = async ({ name, slug = '', description_hint = '', sort_order = 0, imageFile } = {}) => {
  const fd = new FormData();
  fd.append('name', name || '');
  if (slug) fd.append('slug', slug);
  if (description_hint) fd.append('description_hint', description_hint);
  if (sort_order != null) fd.append('sort_order', String(sort_order));
  if (imageFile) fd.append('image', imageFile);
  const response = await api.post('stores/admin/community/categories/', fd);
  return response.data;
};

export const deletePrimaryAdminCommunityCategory = async (id) => {
  const response = await api.delete(`stores/admin/community/categories/${id}/`);
  return response.data;
};

export const getMerchantStoreProfile = async () => {
  const response = await api.get('stores/merchant/profile/');
  return response.data;
};

export const updateMerchantStoreProfile = async (data) => {
  const config = data instanceof FormData ? {} : undefined;
  const response = await api.patch('stores/merchant/profile/', data, config);
  return response.data;
};

// Carts
export const getCarts = async () => {
  const response = await api.get('orders/carts/');
  return response.data;
};

export const getCart = async (cartId) => {
  const response = await api.get(`orders/carts/${cartId}/`);
  return response.data;
};

export const deleteCart = async (cartId) => {
  await api.delete(`orders/carts/${cartId}/`);
};

/** عرض عام للسلة؛ يُرسل التوكن إن وُجد لعرض is_owner، وعند 401 يُعاد الطلب بدون توكن */
export const getSharedCart = async (shareToken) => {
  const url = `/api/orders/carts/share/${shareToken}/`;
  const token = localStorage.getItem('token');
  const opts = (auth) =>
    auth ? { headers: { Authorization: `Bearer ${token}` } } : {};
  let res = await fetch(url, token ? opts(true) : {});
  if (res.status === 401 && token) {
    res = await fetch(url);
  }
  if (!res.ok) throw new Error('shared cart fetch failed');
  return res.json();
};

export const createCart = async (name) => {
  const response = await api.post('orders/carts/', { name });
  return response.data;
};

export const updateCart = async (cartId, payload) => {
  const response = await api.patch(`orders/carts/${cartId}/`, payload);
  return response.data;
};

// --- WhatsApp Verification ---
export const verifyOTP = async (code) => {
  const response = await api.post('users/verify-whatsapp/', { code });
  return response.data;
};

export const resendOTP = async () => {
  const response = await api.post('users/resend-otp/');
  return response.data;
};

// فتح التطبيق (عداد عام)
export const pingAppOpen = async () => {
  const res = await fetch('/api/users/app-open/', { method: 'POST' });
  if (!res.ok) return null;
  return res.json();
};

export const addToCart = async (cartId, productId, quantity = 1, sponsoredAdId = null, note = '') => {
  const body = {
    cart: cartId,
    quantity,
  };
  if (productId != null && productId !== '') {
    body.product = productId;
  }
  if (sponsoredAdId != null && sponsoredAdId !== '') {
    body.sponsored_ad = sponsoredAdId;
  }
  if (note != null && String(note).trim() !== '') {
    body.note = String(note).trim();
  }
  const response = await api.post('orders/cart-items/', body);
  return response.data;
};

export const updateCartItem = async (itemId, payload) => {
  const response = await api.patch(`orders/cart-items/${itemId}/`, payload);
  return response.data;
};

export const deleteCartItem = async (itemId) => {
  await api.delete(`orders/cart-items/${itemId}/`);
};

/** أول سلة للمستخدم أو إنشاء سلة افتراضية */
export const getOrCreateDefaultCart = async () => {
  const carts = await getCarts();
  if (carts && carts.length > 0) return carts[0];
  return createCart('سلة المشتريات');
};
// Offers — categoryId اختياري: نفس فلترة الخريطة حسب القسم
export const getOffers = async (categoryId = null) => {
  const params = new URLSearchParams();
  if (categoryId != null && categoryId !== '') {
    const n = Number(categoryId);
    if (Number.isFinite(n) && n > 0) params.set('category', String(n));
  }
  const suffix = params.toString() ? `?${params.toString()}` : '';
  const response = await api.get(`products/public/ads/${suffix}`);
  return response.data;
};

// Favorites
export const getFavorites = async () => {
  const response = await api.get('products/user/favorites/');
  return response.data;
};

/** منتج فقط، أو منتج+إعلان، أو إعلان مستقل (productId فارغ مع sponsoredAdId) */
export const addFavorite = async (productId, sponsoredAdId = null) => {
  const body = {};
  if (productId != null && productId !== '') {
    body.product = productId;
  }
  if (sponsoredAdId != null && sponsoredAdId !== '') {
    body.sponsored_ad = sponsoredAdId;
  }
  const response = await api.post('products/user/favorites/', body);
  return response.data;
};

/** إشعارات متسوق (مرة واحدة بعد الجلب) — مثلاً إزالة من المفضلة بانتهاء إعلان */
export const getShopperNotices = async () => {
  const response = await api.get('users/me/notices/');
  return response.data;
};

// إعدادات الحساب — لكل مستخدم مسجّل
export const changeMyUsername = async (username) => {
  const response = await api.patch('users/me/username/', { username });
  return response.data;
};

export const changeMyPassword = async ({ current_password, new_password }) => {
  const response = await api.post('users/me/password/', { current_password, new_password });
  return response.data;
};

export const changeMyEmail = async (email) => {
  const response = await api.patch('users/me/email/', { email });
  return response.data;
};

export const removeFavorite = async (favoriteId) => {
  const response = await api.delete(`products/user/favorites/${favoriteId}/`);
  return response.data;
};

/** محلات مفضّلة للمستخدم المسجّل */
export const getStoreFavorites = async () => {
  const response = await api.get('products/user/store-favorites/');
  return response.data;
};

export const addStoreFavorite = async (storeId) => {
  const response = await api.post('products/user/store-favorites/', { store: storeId });
  return response.data;
};

export const removeStoreFavorite = async (favoriteId) => {
  const response = await api.delete(`products/user/store-favorites/${favoriteId}/`);
  return response.data;
};
