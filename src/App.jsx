import React, { Suspense, lazy, useEffect } from 'react'
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
  Navigate,
  Outlet,
  useLocation,
  useNavigationType,
  useParams,
} from 'react-router-dom'
import { AlertProvider } from './components/AlertProvider'
import { MapExploreProvider } from './context/MapExploreContext'
import { AdminPendingCountsProvider } from './context/AdminPendingCountsContext'
import { AdminNotificationsProvider } from './context/AdminNotificationsContext'
import { InAppBrowserPrompt } from './components/InAppBrowserPrompt'
import CommunityOnlyPublicGate from './components/CommunityOnlyPublicGate'
import { pingAppOpen } from './api/data'

const Login = lazy(() => import('./pages/Login'));
const Register = lazy(() => import('./pages/Register'));
const ForgotPassword = lazy(() => import('./pages/ForgotPassword'));
const ResetPasswordConfirm = lazy(() => import('./pages/ResetPasswordConfirm'));
const Home = lazy(() => import('./pages/Home'));
const Dashboard = lazy(() => import('./pages/Dashboard'));
const MerchantDashboard = lazy(() => import('./pages/merchant/Dashboard'));
const MerchantProducts = lazy(() => import('./pages/merchant/Products'));
const MerchantProductForm = lazy(() => import('./pages/merchant/ProductForm'));
const MerchantAds = lazy(() => import('./pages/merchant/Ads'));
const MerchantMySponsoredAds = lazy(() => import('./pages/merchant/MySponsoredAds'));
const MerchantSubscription = lazy(() => import('./pages/merchant/Subscription'));
const MerchantStoreSettings = lazy(() => import('./pages/merchant/StoreSettings'));
const MerchantCompleteProfile = lazy(() => import('./pages/merchant/MerchantCompleteProfile'));
const MerchantProfile = lazy(() => import('./pages/merchant/Profile'));
const Categories = lazy(() => import('./pages/Categories'));
const Services = lazy(() => import('./pages/Services'));
const ServicesCategory = lazy(() => import('./pages/ServicesCategory'));
const SuggestCommunityService = lazy(() => import('./pages/SuggestCommunityService'));
const Carts = lazy(() => import('./pages/Carts'));
const CartDetails = lazy(() => import('./pages/CartDetails'));
const Offers = lazy(() => import('./pages/Offers'));
const CategoryProducts = lazy(() => import('./pages/CategoryProducts'));
const Search = lazy(() => import('./pages/Search'));
const Favorites = lazy(() => import('./pages/Favorites'));
const Contact = lazy(() => import('./pages/Contact'));
const UserGuide = lazy(() => import('./pages/UserGuide'));
const Verification = lazy(() => import('./pages/Verification'));
const StoreProfile = lazy(() => import('./pages/StoreProfile'));
const StoreItemDetails = lazy(() => import('./pages/StoreItemDetails'));
const SharedCart = lazy(() => import('./pages/SharedCart'));
const MapPage = lazy(() => import('./pages/Map'));
const StoresPage = lazy(() => import('./pages/Stores'));
const AdminHome = lazy(() => import('./pages/admin/AdminHome'));
const AdminAccounts = lazy(() => import('./pages/admin/AdminAccounts'));
const AdminAds = lazy(() => import('./pages/admin/AdminAds'));
const AdminAdReview = lazy(() => import('./pages/admin/AdminAdReview'));
const AdminSubscriptions = lazy(() => import('./pages/admin/AdminSubscriptions'));
const AdminStores = lazy(() => import('./pages/admin/AdminStores'));
const AdminCommunity = lazy(() => import('./pages/admin/AdminCommunity'));
const AdminUsers = lazy(() => import('./pages/admin/AdminUsers'));
const AdminFinance = lazy(() => import('./pages/admin/AdminFinance'));
const AdminPayments = lazy(() => import('./pages/admin/AdminPayments'));
const AdminAnnouncements = lazy(() => import('./pages/admin/AdminAnnouncements'));
const AdminCategoryManagement = lazy(() => import('./pages/admin/AdminCategoryManagement'));
const SettingsPage = lazy(() => import('./pages/Settings'));

// Helper to check if user is logged in
const isAuthenticated = () => !!localStorage.getItem('token');
const isGuest = () => localStorage.getItem('isGuest') === 'true';
const isMerchant = () => localStorage.getItem('user_type') === 'merchant';
const isAdmin = () => localStorage.getItem('user_type') === 'admin';
const merchantProfileComplete = () => localStorage.getItem('merchant_profile_complete') === 'true';

// 1. Force verification if logged in but not verified
const VerificationRoute = ({ children }) => {
  return children;
};

// 2. Protect Favorites and Carts from Guests
const ProtectedRoute = ({ children }) => {
  const location = useLocation();
  if (isGuest() || !isAuthenticated()) {
    const next = `${location.pathname}${location.search}${location.hash || ''}`;
    return (
      <Navigate
        to={`/login?next=${encodeURIComponent(next)}`}
        replace
        state={{ flash: 'يجب تسجيل الدخول أولاً.' }}
      />
    );
  }
  return children;
};

// 3. الرئيسية (الخريطة + الخدمات المجتمعية) لجميع المستخدمين؛ التاجر والمدير يصلون للوحة عبر القائمة
const RoleHomeRoute = () => <Home />;

/** تاجر مسجّل — بدون شرط اكتمال الملف (لصفحة إكمال بيانات المتجر). */
const MerchantAuthRoute = ({ children }) => {
  const location = useLocation();
  if (isGuest() || !isAuthenticated() || !isMerchant()) {
    const next = `${location.pathname}${location.search}${location.hash || ''}`;
    return (
      <Navigate
        to={`/login?next=${encodeURIComponent(next)}`}
        replace
        state={{ flash: 'يجب تسجيل الدخول كتاجر.' }}
      />
    );
  }
  return children;
};

const MerchantOnlyRoute = ({ children }) => {
  const location = useLocation();
  if (isGuest() || !isAuthenticated() || !isMerchant()) {
    const next = `${location.pathname}${location.search}${location.hash || ''}`;
    return (
      <Navigate
        to={`/login?next=${encodeURIComponent(next)}`}
        replace
        state={{ flash: 'يجب تسجيل الدخول أولاً.' }}
      />
    );
  }
  if (!merchantProfileComplete()) {
    const next = `${location.pathname}${location.search}${location.hash || ''}`;
    return (
      <Navigate
        to={`/merchant/complete-profile?next=${encodeURIComponent(next)}`}
        replace
      />
    );
  }
  return children;
};

const AdminOnlyRoute = ({ children }) => {
  const location = useLocation();
  if (isGuest() || !isAuthenticated() || !isAdmin()) {
    const next = `${location.pathname}${location.search}${location.hash || ''}`;
    return (
      <Navigate
        to={`/login?next=${encodeURIComponent(next)}`}
        replace
        state={{ flash: 'يجب تسجيل الدخول أولاً.' }}
      />
    );
  }
  return children;
};

const PrimaryAdminOnlyRoute = ({ children }) => {
  if (localStorage.getItem('is_primary_admin') !== 'true') {
    return <Navigate to="/admin" replace />;
  }
  return children;
};

const ShopperOrMerchantRoute = ({ children }) => {
  const location = useLocation();
  if (isGuest() || !isAuthenticated()) {
    const next = `${location.pathname}${location.search}${location.hash || ''}`;
    return (
      <Navigate
        to={`/login?next=${encodeURIComponent(next)}`}
        replace
        state={{ flash: 'يجب تسجيل الدخول أولاً.' }}
      />
    );
  }
  const t = localStorage.getItem('user_type');
  if (t !== 'shopper' && t !== 'merchant' && t !== 'admin') {
    return <Navigate to="/services" replace />;
  }
  return children;
};

function ScrollToTopOnRouteChange() {
  const { pathname, search, hash } = useLocation();
  const navigationType = useNavigationType();

  useEffect(() => {
    // Keep native anchor behavior when navigating to a hash target.
    if (hash) return;
    // عند الرجوع للخلف/الأمام (POP) نحافظ على موضع السكرول السابق.
    if (navigationType === 'POP') return;

    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
    }

    if (typeof document !== 'undefined') {
      const contentEl = document.querySelector('.content');
      if (contentEl && typeof contentEl.scrollTo === 'function') {
        contentEl.scrollTo({ top: 0, left: 0, behavior: 'auto' });
      }
    }
  }, [pathname, search, hash, navigationType]);

  return null;
}

function AppLayout() {
  useEffect(() => {
    pingAppOpen().catch(() => {});
  }, []);

  return (
    <MapExploreProvider>
      <AlertProvider>
        <AdminPendingCountsProvider>
        <AdminNotificationsProvider>
        <ScrollToTopOnRouteChange />
        <InAppBrowserPrompt />
        <CommunityOnlyPublicGate />
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
        </AdminNotificationsProvider>
        </AdminPendingCountsProvider>
      </AlertProvider>
    </MapExploreProvider>
  );
}

/** مسار قديم (reset-password) — إعادة توجيه إلى المسار الصحيح (password-reset). */
function LegacyResetPasswordConfirmRedirect() {
  const { uid, token } = useParams();
  return <Navigate to={`/password-reset/confirm/${uid}/${token}`} replace />;
}

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<AppLayout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/password-reset/confirm/:uid/:token" element={<ResetPasswordConfirm />} />
          <Route path="/password-reset/confirm/:uid/:token/" element={<ResetPasswordConfirm />} />
          <Route path="/reset-password/confirm/:uid/:token" element={<LegacyResetPasswordConfirmRedirect />} />
          <Route path="/reset-password/confirm/:uid/:token/" element={<LegacyResetPasswordConfirmRedirect />} />
          <Route path="/share/cart/:shareToken" element={<SharedCart />} />
          <Route path="/register" element={<Register />} />
          <Route path="/verify-whatsapp" element={<Verification />} />

          <Route
            path="/settings"
            element={
              <VerificationRoute>
                <ProtectedRoute>
                  <SettingsPage />
                </ProtectedRoute>
              </VerificationRoute>
            }
          />

          <Route path="/admin" element={
            <VerificationRoute>
              <AdminOnlyRoute>
                <AdminHome />
              </AdminOnlyRoute>
            </VerificationRoute>
          } />

          <Route path="/admin/accounts" element={
            <VerificationRoute>
              <AdminOnlyRoute>
                <PrimaryAdminOnlyRoute>
                  <AdminAccounts />
                </PrimaryAdminOnlyRoute>
              </AdminOnlyRoute>
            </VerificationRoute>
          } />

          <Route path="/admin/ads" element={
            <VerificationRoute>
              <AdminOnlyRoute>
                <AdminAds />
              </AdminOnlyRoute>
            </VerificationRoute>
          } />

          <Route path="/admin/ads/:adId" element={
            <VerificationRoute>
              <AdminOnlyRoute>
                <AdminAdReview />
              </AdminOnlyRoute>
            </VerificationRoute>
          } />

          <Route path="/admin/subscriptions" element={
            <VerificationRoute>
              <AdminOnlyRoute>
                <AdminSubscriptions />
              </AdminOnlyRoute>
            </VerificationRoute>
          } />

          <Route path="/admin/stores" element={
            <VerificationRoute>
              <AdminOnlyRoute>
                <PrimaryAdminOnlyRoute>
                  <AdminStores />
                </PrimaryAdminOnlyRoute>
              </AdminOnlyRoute>
            </VerificationRoute>
          } />

          <Route path="/admin/finance" element={
            <VerificationRoute>
              <AdminOnlyRoute>
                <PrimaryAdminOnlyRoute>
                  <AdminFinance />
                </PrimaryAdminOnlyRoute>
              </AdminOnlyRoute>
            </VerificationRoute>
          } />

          <Route path="/admin/payments" element={
            <VerificationRoute>
              <AdminOnlyRoute>
                <PrimaryAdminOnlyRoute>
                  <AdminPayments />
                </PrimaryAdminOnlyRoute>
              </AdminOnlyRoute>
            </VerificationRoute>
          } />

          <Route path="/admin/announcements" element={
            <VerificationRoute>
              <AdminOnlyRoute>
                <PrimaryAdminOnlyRoute>
                  <AdminAnnouncements />
                </PrimaryAdminOnlyRoute>
              </AdminOnlyRoute>
            </VerificationRoute>
          } />

          <Route path="/admin/categories" element={
            <VerificationRoute>
              <AdminOnlyRoute>
                <PrimaryAdminOnlyRoute>
                  <AdminCategoryManagement />
                </PrimaryAdminOnlyRoute>
              </AdminOnlyRoute>
            </VerificationRoute>
          } />

          <Route path="/admin/community" element={
            <VerificationRoute>
              <AdminOnlyRoute>
                <AdminCommunity />
              </AdminOnlyRoute>
            </VerificationRoute>
          } />

          <Route path="/admin/users" element={
            <VerificationRoute>
              <AdminOnlyRoute>
                <AdminUsers />
              </AdminOnlyRoute>
            </VerificationRoute>
          } />
          
          <Route path="/dashboard" element={
            <VerificationRoute>
              <Dashboard />
            </VerificationRoute>
          } />

          <Route path="/merchant/complete-profile" element={
            <VerificationRoute>
              <MerchantAuthRoute>
                <MerchantCompleteProfile />
              </MerchantAuthRoute>
            </VerificationRoute>
          } />

          <Route path="/merchant/dashboard" element={
            <VerificationRoute>
              <MerchantOnlyRoute>
                <MerchantDashboard />
              </MerchantOnlyRoute>
            </VerificationRoute>
          } />

          <Route path="/merchant/products" element={
            <VerificationRoute>
              <MerchantOnlyRoute>
                <MerchantProducts />
              </MerchantOnlyRoute>
            </VerificationRoute>
          } />

          <Route path="/merchant/products/new" element={
            <VerificationRoute>
              <MerchantOnlyRoute>
                <MerchantProductForm />
              </MerchantOnlyRoute>
            </VerificationRoute>
          } />

          <Route path="/merchant/products/:id/edit" element={
            <VerificationRoute>
              <MerchantOnlyRoute>
                <MerchantProductForm />
              </MerchantOnlyRoute>
            </VerificationRoute>
          } />

          <Route path="/merchant/my-ads" element={
            <VerificationRoute>
              <MerchantOnlyRoute>
                <MerchantMySponsoredAds />
              </MerchantOnlyRoute>
            </VerificationRoute>
          } />

          <Route path="/merchant/ads" element={
            <VerificationRoute>
              <MerchantOnlyRoute>
                <MerchantAds />
              </MerchantOnlyRoute>
            </VerificationRoute>
          } />

          <Route path="/merchant/subscription" element={
            <VerificationRoute>
              <MerchantOnlyRoute>
                <MerchantSubscription />
              </MerchantOnlyRoute>
            </VerificationRoute>
          } />

          <Route path="/merchant/settings" element={
            <VerificationRoute>
              <MerchantOnlyRoute>
                <MerchantStoreSettings />
              </MerchantOnlyRoute>
            </VerificationRoute>
          } />

          <Route path="/merchant/profile" element={
            <VerificationRoute>
              <MerchantOnlyRoute>
                <MerchantProfile />
              </MerchantOnlyRoute>
            </VerificationRoute>
          } />
          
          <Route path="/categories" element={
            <VerificationRoute>
              <Categories />
            </VerificationRoute>
          } />
          
          <Route path="/services" element={
            <VerificationRoute>
              <Services />
            </VerificationRoute>
          } />

          <Route path="/services/category/:categorySlug" element={
            <VerificationRoute>
              <ServicesCategory />
            </VerificationRoute>
          } />

          <Route path="/services/suggest" element={
            <VerificationRoute>
              <ShopperOrMerchantRoute>
                <SuggestCommunityService />
              </ShopperOrMerchantRoute>
            </VerificationRoute>
          } />
          
          <Route path="/offers" element={
            <VerificationRoute>
              <Offers />
            </VerificationRoute>
          } />

          <Route path="/category-products" element={
            <VerificationRoute>
              <CategoryProducts />
            </VerificationRoute>
          } />

          <Route path="/map" element={
            <VerificationRoute>
              <MapPage />
            </VerificationRoute>
          } />

          <Route path="/stores" element={
            <VerificationRoute>
              <StoresPage />
            </VerificationRoute>
          } />

          <Route path="/search" element={
            <VerificationRoute>
              <Search />
            </VerificationRoute>
          } />
          
          <Route path="/carts" element={
            <VerificationRoute>
              <ProtectedRoute>
                <Carts />
              </ProtectedRoute>
            </VerificationRoute>
          } />

          <Route path="/carts/:cartId" element={
            <VerificationRoute>
              <ProtectedRoute>
                <CartDetails />
              </ProtectedRoute>
            </VerificationRoute>
          } />
          
          <Route path="/favorites" element={
            <VerificationRoute>
              <ProtectedRoute>
                <Favorites />
              </ProtectedRoute>
            </VerificationRoute>
          } />

          <Route path="/contact" element={
            <VerificationRoute>
              <Contact />
            </VerificationRoute>
          } />

          <Route path="/guide" element={
            <VerificationRoute>
              <UserGuide />
            </VerificationRoute>
          } />

          <Route path="/stores/:storeId" element={
            <VerificationRoute>
              <StoreProfile />
            </VerificationRoute>
          } />

          <Route path="/stores/:storeId/item/:itemType/:itemId" element={
            <VerificationRoute>
              <StoreItemDetails />
            </VerificationRoute>
          } />
          
          <Route path="/" element={
            <VerificationRoute>
              <RoleHomeRoute />
            </VerificationRoute>
          } />
          
          {/* Catch-all route to redirect broken/old links to Home */}
          <Route path="*" element={<Home />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App
