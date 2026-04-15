import { Link, useNavigate, useLocation } from 'react-router-dom';
import {
  Tag,
  Heart,
  ShoppingBasket,
  LayoutGrid,
  Sparkles,
  Settings,
  BookOpen,
  LogOut,
  LogIn,
  Home,
  Phone,
  Package,
  Megaphone,
  CreditCard,
  BarChart3,
  UserCircle,
  Users,
  Store,
  PlusCircle,
  ClipboardList,
  LayoutDashboard,
} from 'lucide-react';
import { logout } from '../api/auth';
import { useAlert } from './AlertProvider';
import { useAdminPendingCounts } from '../context/AdminPendingCountsContext';

function backendBaseUrl() {
  const raw = (import.meta && import.meta.env && import.meta.env.VITE_PROXY_TARGET) || 'http://127.0.0.1:8000';
  return String(raw).replace(/\/$/, '');
}

function djangoAdminUrl() {
  const explicit = import.meta?.env?.VITE_DJANGO_ADMIN_URL;
  if (explicit != null && String(explicit).trim() !== '') {
    return String(explicit).trim();
  }
  // On production/server: use current origin so it never points to localhost.
  try {
    const origin = window?.location?.origin || '';
    const host = window?.location?.hostname || '';
    const isLocal =
      host === 'localhost' ||
      host === '127.0.0.1' ||
      host === '::1' ||
      host.endsWith('.local');
    if (origin && !isLocal) {
      return `${String(origin).replace(/\/$/, '')}/api/admin/`;
    }
  } catch {
    // ignore
  }
  // Local dev fallback: use configured backend base (proxy target) and go directly to /api/admin/
  return `${backendBaseUrl()}/api/admin/`;
}

function pathIsActive(pathname, path) {
  if (!path) return false;
  if (path === '/') return pathname === '/';
  return pathname === path || pathname.startsWith(`${path}/`);
}

const Sidebar = ({ isOpen, toggleSidebar, variant = 'shopper' }) => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const { showAlert, showConfirm } = useAlert();
  const { pendingAds, pendingRenewals, pendingCommunityPoints, pendingTotal } = useAdminPendingCounts();
  const isGuestUser = localStorage.getItem('isGuest') === 'true';
  const hasToken = !!localStorage.getItem('token');
  /** عضو مسجّل فعلياً — الزائر يُعامل كغير مسجّل لواجهة الدخول/الخروج */
  const isAuthenticated = hasToken && !isGuestUser;
  const userType = localStorage.getItem('user_type') || 'shopper';

  const shopperMenuItems = [
    { icon: <Home size={20} />, label: 'الرئيسية', path: '/' },
    { icon: <Tag size={20} />, label: 'عروض حصرية', path: '/offers' },
    { icon: <Heart size={20} />, label: 'المفضلة', path: '/favorites', protected: true },
    { icon: <ShoppingBasket size={20} />, label: 'السلال', path: '/carts', protected: true },
    { icon: <LayoutGrid size={20} />, label: 'الأقسام', path: '/categories' },
    { icon: <Sparkles size={20} />, label: 'الخدمات المجتمعية', path: '/services' },
    { icon: <BookOpen size={20} />, label: 'دليل المستخدم', path: '/guide' },
    { icon: <Phone size={20} />, label: 'اتصل بنا', path: '/contact' },
    { kind: 'section', label: 'الإعدادات' },
    { icon: <Settings size={20} />, label: 'إعدادات الحساب', path: '/settings', protected: true },
  ];

  /** بعد عناصر المتسوق — لوحة الإدارة (أساسي يشمل المدراء والمتاجر) */
  const adminMenuExtraPrimary = [
    { kind: 'section', label: 'إدارة النظام' },
    { icon: <LayoutDashboard size={20} />, label: 'لوحة الإدارة', path: '/admin' },
    {
      kind: 'external',
      icon: <Settings size={20} />,
      label: 'Django Admin',
      href: djangoAdminUrl(),
    },
    { icon: <Users size={20} />, label: 'المستخدمون', path: '/admin/users' },
    { icon: <Users size={20} />, label: 'إدارة المدراء', path: '/admin/accounts' },
    { icon: <Store size={20} />, label: 'المتاجر المشتركة', path: '/admin/stores' },
    { icon: <BarChart3 size={20} />, label: 'الأرباح والتحويلات', path: '/admin/finance' },
    { icon: <CreditCard size={20} />, label: 'المدفوعات', path: '/admin/payments' },
    { icon: <LayoutGrid size={20} />, label: 'إدارة الأقسام', path: '/admin/categories' },
    { icon: <Megaphone size={20} />, label: 'إدارة الإعلانات الممولة', path: '/admin/ads' },
    { icon: <CreditCard size={20} />, label: 'إدارة الاشتراكات', path: '/admin/subscriptions' },
    { icon: <Sparkles size={20} />, label: 'مراجعة الخدمات المجتمعية', path: '/admin/community' },
    { kind: 'section', label: 'إعدادات عامة' },
    { icon: <Megaphone size={20} />, label: 'إعلان عام', path: '/admin/announcements' },
  ];

  const adminMenuExtraSecondary = [
    { kind: 'section', label: 'إدارة النظام' },
    { icon: <LayoutDashboard size={20} />, label: 'لوحة الإدارة', path: '/admin' },
    {
      kind: 'external',
      icon: <Settings size={20} />,
      label: 'Django Admin',
      href: djangoAdminUrl(),
    },
    { icon: <Users size={20} />, label: 'المستخدمون', path: '/admin/users' },
    { icon: <Megaphone size={20} />, label: 'إدارة الإعلانات الممولة', path: '/admin/ads' },
    { icon: <CreditCard size={20} />, label: 'إدارة الاشتراكات', path: '/admin/subscriptions' },
    { icon: <Sparkles size={20} />, label: 'مراجعة الخدمات المجتمعية', path: '/admin/community' },
  ];

  const merchantMenuExtra = [
    { kind: 'section', label: 'إدارة المتجر' },
    { icon: <BarChart3 size={20} />, label: 'إحصائيات المتجر', path: '/merchant/dashboard', protected: true },
    { icon: <Package size={20} />, label: 'منتجاتي', path: '/merchant/products', protected: true },
    { icon: <ClipboardList size={20} />, label: 'إعلاناتي الممولة', path: '/merchant/my-ads', protected: true },
    { icon: <PlusCircle size={20} />, label: 'طلب إعلان ممول', path: '/merchant/ads', protected: true },
    { icon: <CreditCard size={20} />, label: 'الاشتراك', path: '/merchant/subscription', protected: true },
    { icon: <UserCircle size={20} />, label: 'بروفايل المتجر', path: '/merchant/profile', protected: true },
    { icon: <Settings size={20} />, label: 'إعدادات المتجر', path: '/merchant/settings', protected: true },
  ];

  const resolvedVariant =
    !isAuthenticated
      ? 'shopper'
      : userType === 'admin'
        ? 'admin'
        : userType === 'merchant'
          ? 'merchant'
          : 'shopper';

  const isPrimaryAdmin = localStorage.getItem('is_primary_admin') === 'true';

  const menuItems =
    resolvedVariant === 'admin'
      ? [...shopperMenuItems, ...(isPrimaryAdmin ? adminMenuExtraPrimary : adminMenuExtraSecondary)]
      : resolvedVariant === 'merchant'
        ? [...shopperMenuItems, ...merchantMenuExtra]
        : shopperMenuItems;

  const handleAuthAction = async () => {
    if (!isAuthenticated) {
      navigate('/login');
      toggleSidebar();
      return;
    }
    const ok = await showConfirm('تأكيد تسجيل الخروج من الحساب؟', 'تسجيل الخروج');
    if (!ok) return;
    localStorage.removeItem('isGuest');
    logout();
    navigate('/login');
    toggleSidebar();
    await showAlert('تم تسجيل الخروج بنجاح.', 'تم');
  };

  const pendingCountForPath = (path) => {
    if (path === '/admin/ads' && pendingAds > 0) return pendingAds;
    if (path === '/admin/subscriptions' && pendingRenewals > 0) return pendingRenewals;
    if (path === '/admin/community' && pendingCommunityPoints > 0) return pendingCommunityPoints;
    return null;
  };

  const handleProtectedClick = (e, item) => {
    if (item.protected && !isAuthenticated) {
      e.preventDefault();
      showAlert('عذراً، يجب تسجيل الدخول والتحقق من حسابك لاستخدام هذه الميزة.', 'الوصول محدود');
      navigate('/login');
      toggleSidebar();
    } else {
      toggleSidebar();
    }
  };

  return (
    <>
      {/* Overlay for mobile */}
      {isOpen && <div className="sidebar-overlay" onClick={toggleSidebar}></div>}

      <div className={`sidebar ${isOpen ? 'open' : ''}`}>
        <div className="sidebar-header">
          <div className="sidebar-brand">
            <img src="/logo.png" alt="رادار" className="sidebar-brand-img" />
            <span className="sidebar-brand-caption">لوحة التنقّل</span>
          </div>
        </div>

        <div className="sidebar-menu">
          {resolvedVariant === 'merchant' && <div className="sidebar-role-pill sidebar-role-pill--merchant">تاجر</div>}
          {resolvedVariant === 'admin' && (
            <div
              className={`sidebar-role-pill sidebar-role-pill--admin${isPrimaryAdmin ? ' sidebar-role-pill--primary' : ''}`}
            >
              {localStorage.getItem('is_primary_admin') === 'true' ? 'مدير أساسي' : 'مدير فرعي'}
            </div>
          )}
          {menuItems.map((item, index) => {
            if (item.kind === 'section') {
              return (
                <div key={`sec-${index}`} className="sidebar-section-title">
                  {item.label}
                </div>
              );
            }
            if (item.kind === 'external') {
              return (
                <a
                  key={`ext-${index}`}
                  href={item.href}
                  className="menu-item"
                  onClick={() => toggleSidebar()}
                  title="فتح لوحة Django Admin"
                >
                  <span className="menu-icon-wrap">{item.icon}</span>
                  <span className="menu-label-row">
                    <span className="menu-label">{item.label}</span>
                  </span>
                </a>
              );
            }
            const pendingN = resolvedVariant === 'admin' ? pendingCountForPath(item.path) : null;
            const active = pathIsActive(pathname, item.path);
            return (
              <Link
                key={index}
                to={item.path}
                className={`menu-item${active ? ' menu-item--active' : ''}`}
                onClick={(e) => handleProtectedClick(e, item)}
              >
                <span className="menu-icon-wrap">{item.icon}</span>
                <span className="menu-label-row">
                  <span className="menu-label">{item.label}</span>
                  {pendingN != null ? (
                    <span className="sidebar-pending-badge" title="طلبات قيد المراجعة">
                      {pendingN > 99 ? '99+' : pendingN}
                    </span>
                  ) : null}
                </span>
              </Link>
            );
          })}

          <div className="sidebar-footer">
            <button type="button" className="menu-item menu-item--logout" onClick={handleAuthAction}>
              <span className="menu-icon-wrap menu-icon-wrap--muted">
                {isAuthenticated ? <LogOut size={20} /> : <LogIn size={20} />}
              </span>
              <span className={`menu-label menu-label--logout${isAuthenticated ? ' menu-label--danger' : ''}`}>
                {isAuthenticated ? 'تسجيل الخروج' : 'تسجيل الدخول'}
              </span>
            </button>
          </div>
        </div>

        <style dangerouslySetInnerHTML={{ __html: `
          .sidebar {
            position: fixed;
            top: 0;
            width: min(300px, calc(100vw - 16px));
            right: calc(-1 * min(300px, 100vw - 16px));
            height: 100vh;
            height: 100dvh;
            background: linear-gradient(
              200deg,
              rgba(255, 255, 255, 0.92) 0%,
              rgba(255, 249, 230, 0.55) 55%,
              rgba(255, 255, 255, 0.92) 100%
            );
            box-shadow: -18px 0 60px rgba(30, 30, 46, 0.12);
            transition: right 0.32s cubic-bezier(0.4, 0, 0.2, 1);
            z-index: 1200;
            padding: 0;
            overflow-y: auto;
            border-inline-start: 1px solid rgba(224, 223, 213, 0.9);
            border-radius: 24px 0 0 24px;
            -webkit-backdrop-filter: blur(14px);
            backdrop-filter: blur(14px);
          }

          .sidebar.open {
            right: 0;
          }

          .sidebar::-webkit-scrollbar { width: 0; }
          .sidebar { scrollbar-width: none; }

          .sidebar-overlay {
            position: fixed;
            inset: 0;
            background: rgba(22, 22, 32, 0.4);
            backdrop-filter: blur(6px);
            z-index: 1190;
          }

          .sidebar-header {
            position: sticky;
            top: 0;
            z-index: 2;
            padding: 20px 18px 16px;
            background: linear-gradient(
              180deg,
              rgba(255, 255, 255, 0.96) 0%,
              rgba(255, 255, 255, 0.86) 70%,
              rgba(255, 255, 255, 0) 100%
            );
            border-bottom: 1px solid rgba(224, 223, 213, 0.75);
          }

          .sidebar-brand {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 8px;
            text-align: center;
          }

          .sidebar-brand-img {
            height: 68px;
            width: auto;
            max-width: 220px;
            object-fit: contain;
          }

          .sidebar-brand-caption {
            font-size: 0.72rem;
            font-weight: 800;
            color: var(--text-secondary);
            letter-spacing: 0.02em;
          }

          .sidebar-menu {
            padding: 14px 14px calc(28px + 84px + env(safe-area-inset-bottom, 0px));
          }

          .sidebar-role-pill {
            text-align: center;
            padding: 10px 14px;
            border-radius: 12px;
            font-weight: 900;
            font-size: 0.82rem;
            margin-bottom: 16px;
            border: 1px solid rgba(245, 192, 0, 0.4);
            background: rgba(255, 244, 204, 0.45);
            color: var(--secondary);
          }

          .sidebar-role-pill--admin {
            background: rgba(52, 152, 219, 0.08);
            border-color: rgba(52, 152, 219, 0.35);
          }

          .sidebar-role-pill--primary {
            background: linear-gradient(135deg, rgba(52, 152, 219, 0.15) 0%, rgba(255, 244, 204, 0.35) 100%);
          }

          .sidebar-section-title {
            font-size: 0.7rem;
            font-weight: 900;
            color: var(--text-light);
            letter-spacing: 0.06em;
            margin: 20px 12px 10px;
            padding-top: 14px;
            border-top: 1px solid rgba(224, 223, 213, 0.85);
          }

          .menu-item {
            display: flex;
            align-items: center;
            gap: 12px;
            padding: 12px 12px;
            margin-bottom: 4px;
            border-radius: 18px;
            cursor: pointer;
            transition: background 0.18s ease, box-shadow 0.18s ease, color 0.18s ease;
            color: var(--text-primary);
            text-decoration: none;
            border: 1px solid rgba(232, 230, 224, 0.72);
            background: rgba(255, 255, 255, 0.7);
            box-shadow: 0 1px 0 rgba(255, 255, 255, 0.75) inset, 0 10px 26px rgba(26, 29, 38, 0.045);
          }

          .menu-item:hover {
            background: rgba(255, 244, 204, 0.55);
            border-color: rgba(245, 192, 0, 0.35);
            color: var(--secondary);
          }

          .menu-item--active {
            background: linear-gradient(135deg, rgba(245, 192, 0, 0.28) 0%, rgba(255, 255, 255, 0.9) 100%);
            border-color: rgba(245, 192, 0, 0.45);
            box-shadow: 0 2px 12px rgba(245, 192, 0, 0.15);
            font-weight: 800;
          }

          .menu-item--active .menu-icon-wrap {
            background: var(--white);
            border-color: rgba(245, 192, 0, 0.5);
            color: var(--secondary);
          }

          .menu-icon-wrap {
            flex-shrink: 0;
            width: 42px;
            height: 42px;
            border-radius: 14px;
            display: flex;
            align-items: center;
            justify-content: center;
            background: rgba(255, 255, 255, 0.92);
            border: 1px solid rgba(224, 223, 213, 0.92);
            color: var(--secondary);
          }

          @media (min-width: 721px) {
            .sidebar {
              width: 340px;
              right: -340px;
              border-radius: 26px 0 0 26px;
            }
          }

          @media (max-width: 420px) {
            .sidebar-brand-img {
              height: 60px;
              max-width: 200px;
            }
          }

          .menu-icon-wrap--muted {
            color: var(--text-secondary);
          }

          .menu-label-row {
            display: flex;
            align-items: center;
            gap: 10px;
            flex: 1;
            min-width: 0;
          }

          .menu-label {
            font-size: 0.95rem;
            font-weight: 600;
            flex: 1;
            min-width: 0;
            line-height: 1.35;
          }

          .menu-item--active .menu-label {
            font-weight: 800;
          }

          .menu-label--logout {
            font-weight: 800;
            color: var(--primary-hover);
          }

          .menu-label--danger {
            color: #c0392b !important;
          }

          .sidebar-footer {
            margin-top: 20px;
            padding-top: 16px;
            border-top: 1px solid rgba(224, 223, 213, 0.85);
          }

          .menu-item--logout {
            width: 100%;
            border: none;
            font-family: inherit;
            text-align: right;
            background: rgba(255, 255, 255, 0.6);
            cursor: pointer;
          }

          .menu-item--logout:hover {
            background: rgba(255, 244, 204, 0.55);
          }

          .sidebar-pending-badge {
            flex-shrink: 0;
            min-width: 22px;
            height: 22px;
            padding: 0 7px;
            border-radius: 999px;
            background: #e74c3c;
            color: #fff;
            font-size: 0.72rem;
            font-weight: 900;
            line-height: 22px;
            text-align: center;
            box-shadow: 0 6px 16px rgba(0,0,0,0.12);
          }
        `}} />
      </div>
    </>
  );
};

export default Sidebar;
