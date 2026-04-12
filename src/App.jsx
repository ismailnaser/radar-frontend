import React, { useEffect } from 'react'
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
  Navigate,
  Outlet,
} from 'react-router-dom'
import Login from './pages/Login'
import Register from './pages/Register'
import Home from './pages/Home'
import Dashboard from './pages/Dashboard'
import MerchantDashboard from './pages/merchant/Dashboard'
import MerchantProducts from './pages/merchant/Products'
import MerchantProductForm from './pages/merchant/ProductForm'
import MerchantAds from './pages/merchant/Ads'
import MerchantMySponsoredAds from './pages/merchant/MySponsoredAds'
import MerchantSubscription from './pages/merchant/Subscription'
import MerchantStoreSettings from './pages/merchant/StoreSettings'
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
import AdminAnnouncements from './pages/admin/AdminAnnouncements'
import AdminCategoryManagement from './pages/admin/AdminCategoryManagement'
import SettingsPage from './pages/Settings'
import { AlertProvider } from './components/AlertProvider'
import { UnauthorizedSessionBridge } from './components/UnauthorizedSessionBridge'
import { MapExploreProvider } from './context/MapExploreContext'
import { AdminPendingCountsProvider } from './context/AdminPendingCountsContext'
import { AdminNotificationsProvider } from './context/AdminNotificationsContext'
import { pingAppOpen } from './api/data'

// Helper to check if user is logged in
const isAuthenticated = () => !!localStorage.getItem('token');
const isGuest = () => localStorage.getItem('isGuest') === 'true';
const isMerchant = () => localStorage.getItem('user_type') === 'merchant';
const isAdmin = () => localStorage.getItem('user_type') === 'admin';

// 1. Force verification if logged in but not verified
const VerificationRoute = ({ children }) => {
  return children;
};

// 2. Protect Favorites and Carts from Guests
const ProtectedRoute = ({ children }) => {
  if (isGuest() || !isAuthenticated()) {
    return <Navigate to="/login" replace />;
  }
  return children;
};

// 3. الرئيسية (الخريطة + الخدمات المجتمعية) لجميع المستخدمين؛ التاجر والمدير يصلون للوحة عبر القائمة
const RoleHomeRoute = () => <Home />;

const MerchantOnlyRoute = ({ children }) => {
  if (isGuest() || !isAuthenticated() || !isMerchant()) {
    return <Navigate to="/" replace />;
  }
  return children;
};

const AdminOnlyRoute = ({ children }) => {
  if (isGuest() || !isAuthenticated() || !isAdmin()) {
    return <Navigate to="/login" replace />;
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
  if (isGuest() || !isAuthenticated()) {
    return <Navigate to="/login" replace />;
  }
  const t = localStorage.getItem('user_type');
  if (t !== 'shopper' && t !== 'merchant') {
    return <Navigate to="/services" replace />;
  }
  return children;
};

function AppLayout() {
  useEffect(() => {
    pingAppOpen().catch(() => {});
  }, []);

  return (
    <MapExploreProvider>
      <AlertProvider>
        <UnauthorizedSessionBridge />
        <AdminPendingCountsProvider>
        <AdminNotificationsProvider>
        <Outlet />
        </AdminNotificationsProvider>
        </AdminPendingCountsProvider>
      </AlertProvider>
    </MapExploreProvider>
  );
}

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<AppLayout />}>
          <Route path="/login" element={<Login />} />
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
