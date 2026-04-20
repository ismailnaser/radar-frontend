import React, { useEffect } from 'react'
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
  Navigate,
  Outlet,
  useLocation,
  useParams,
} from 'react-router-dom'
import Login from './pages/Login'
import Register from './pages/Register'
import ForgotPassword from './pages/ForgotPassword'
import ResetPasswordConfirm from './pages/ResetPasswordConfirm'
import Home from './pages/Home'
import Dashboard from './pages/Dashboard'
import MerchantDashboard from './pages/merchant/Dashboard'
import MerchantProducts from './pages/merchant/Products'
import MerchantProductForm from './pages/merchant/ProductForm'
import MerchantAds from './pages/merchant/Ads'
import MerchantMySponsoredAds from './pages/merchant/MySponsoredAds'
import MerchantSubscription from './pages/merchant/Subscription'
import MerchantStoreSettings from './pages/merchant/StoreSettings'
import MerchantCompleteProfile from './pages/merchant/MerchantCompleteProfile'
import MerchantProfile from './pages/merchant/Profile'
import Categories from './pages/Categories'
import Services from './pages/Services'
import ServicesCategory from './pages/ServicesCategory'
import SuggestCommunityService from './pages/SuggestCommunityService'
import Carts from './pages/Carts'
import CartDetails from './pages/CartDetails'
import Offers from './pages/Offers'
import Search from './pages/Search'
import Favorites from './pages/Favorites'
import Contact from './pages/Contact'
import UserGuide from './pages/UserGuide'
import Verification from './pages/Verification'
import StoreProfile from './pages/StoreProfile'
import SharedCart from './pages/SharedCart'
import MapPage from './pages/Map'
import StoresPage from './pages/Stores'
import AdminHome from './pages/admin/AdminHome'
import AdminAccounts from './pages/admin/AdminAccounts'
import AdminAds from './pages/admin/AdminAds'
import AdminAdReview from './pages/admin/AdminAdReview'
import AdminSubscriptions from './pages/admin/AdminSubscriptions'
import AdminStores from './pages/admin/AdminStores'
import AdminCommunity from './pages/admin/AdminCommunity'
import AdminUsers from './pages/admin/AdminUsers'
import AdminFinance from './pages/admin/AdminFinance'
import AdminPayments from './pages/admin/AdminPayments'
import AdminAnnouncements from './pages/admin/AdminAnnouncements'
import AdminCategoryManagement from './pages/admin/AdminCategoryManagement'
import SettingsPage from './pages/Settings'
import { AlertProvider } from './components/AlertProvider'
import { MapExploreProvider } from './context/MapExploreContext'
import { AdminPendingCountsProvider } from './context/AdminPendingCountsContext'
import { AdminNotificationsProvider } from './context/AdminNotificationsContext'
import { InAppBrowserPrompt } from './components/InAppBrowserPrompt'
import { pingAppOpen } from './api/data'

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
  if (t !== 'shopper' && t !== 'merchant') {
    return <Navigate to="/services" replace />;
  }
  return children;
};

function ScrollToTopOnRouteChange() {
  const { pathname, search, hash } = useLocation();

  useEffect(() => {
    // Keep native anchor behavior when navigating to a hash target.
    if (hash) return;

    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
    }

    if (typeof document !== 'undefined') {
      const contentEl = document.querySelector('.content');
      if (contentEl && typeof contentEl.scrollTo === 'function') {
        contentEl.scrollTo({ top: 0, left: 0, behavior: 'auto' });
      }
    }
  }, [pathname, search, hash]);

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
        <Outlet />
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
