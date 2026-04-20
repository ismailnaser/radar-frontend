import React, { useCallback, useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { Link, useLocation, useNavigate, useSearchParams } from 'react-router-dom';
import Sidebar from './Sidebar';
import { Menu, MapPin, User, UserPlus, Home as HomeIcon, Map as MapIcon, Megaphone, Store, Search as SearchIcon, LayoutDashboard, Users, Tags, ChevronRight, Briefcase, Bell } from 'lucide-react';
import { useMapExplore } from '../context/MapExploreContext';
import { useAdminPendingCounts } from '../context/AdminPendingCountsContext';
import { useAdminNotifications } from '../context/AdminNotificationsContext';
import { useAlert } from './AlertProvider';
import { getPublicAnnouncements } from '../api/data';
const MainLayout = ({ children }) => {
  const location = useLocation();
  const { pathname } = location;
  const navigate = useNavigate();
  const [urlSearchParams] = useSearchParams();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const { requestUserLocation, locating, searchQuery, setSearchQuery } = useMapExplore();
  const mobileSearchInputRef = useRef(null);
  const mobileSearchNavDebounceRef = useRef(null);
  const [announcements, setAnnouncements] = useState([]);
  const [adminNotifsOpen, setAdminNotifsOpen] = useState(false);
  const [isNarrowScreen, setIsNarrowScreen] = useState(
    () => typeof window !== 'undefined' && window.matchMedia('(max-width: 720px)').matches,
  );
  const adminNotifs = useAdminNotifications();
  const { showAlert } = useAlert();

  useEffect(() => {
    if (pathname !== '/search') return;
    setSearchQuery(urlSearchParams.get('q') ?? '');
  }, [pathname, urlSearchParams, setSearchQuery]);

  useEffect(() => {
    return () => {
      if (mobileSearchNavDebounceRef.current) {
        window.clearTimeout(mobileSearchNavDebounceRef.current);
        mobileSearchNavDebounceRef.current = null;
      }
    };
  }, []);

  useEffect(() => {
    let cancelled = false;
    getPublicAnnouncements()
      .then((d) => {
        const list = Array.isArray(d?.results) ? d.results : [];
        if (!cancelled) setAnnouncements(list);
      })
      .catch(() => {
        if (!cancelled) setAnnouncements([]);
      });
    return () => {
      cancelled = true;
    };
  }, []);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  useEffect(() => {
    const t = window.setTimeout(() => {
      window.dispatchEvent(new CustomEvent('radar-map-invalidate'));
    }, 320);
    return () => window.clearTimeout(t);
  }, [isSidebarOpen]);

  useEffect(() => {
    const mq = window.matchMedia('(max-width: 720px)');
    const onChange = () => setIsNarrowScreen(mq.matches);
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, []);

  useEffect(() => {
    if (!adminNotifsOpen || !isNarrowScreen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const onKey = (e) => {
      if (e.key === 'Escape') setAdminNotifsOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener('keydown', onKey);
    };
  }, [adminNotifsOpen, isNarrowScreen]);

  /** زائر صريح: لا يُعامل كجلسة عضو حتى لو بقي توكن قديماً في التخزين */
  const isGuestUser = localStorage.getItem('isGuest') === 'true';
  const hasToken = !!localStorage.getItem('token');
  const isAuthenticated = hasToken && !isGuestUser;
  const userName = localStorage.getItem('user_name') || '';
  const userType = localStorage.getItem('user_type') || 'shopper';
  const isAdminUser = isAuthenticated && userType === 'admin';

  const isPrimaryAdmin = localStorage.getItem('is_primary_admin') === 'true';
  const { pendingTotal } = useAdminPendingCounts();
  const displayName =
    userType === 'admin'
      ? userName || (isPrimaryAdmin ? 'مدير أساسي' : 'مدير فرعي')
      : userName || (isAuthenticated ? 'حسابي' : '');

  const sidebarVariant =
    isAuthenticated && userType === 'merchant'
      ? 'merchant'
      : isAuthenticated && userType === 'admin'
        ? 'admin'
        : 'shopper';

  const isMerchantHomeContext =
    isAuthenticated && userType === 'merchant' && pathname === '/merchant/dashboard';

  const isAdminPanelContext =
    isAuthenticated && userType === 'admin' && pathname.startsWith('/admin');

  const hideHeaderOnMap = pathname === '/map';
  /** إخفاء الناف العلوي: تسجيل الدخول وإنشاء الحساب فقط — الخريطة تخفي الهيدر على الموبايل بالـ CSS */
  const hideMainHeader =
    pathname === '/register' ||
    pathname === '/login' ||
    pathname === '/forgot-password' ||
    pathname.startsWith('/password-reset/confirm') ||
    pathname.startsWith('/reset-password/confirm');
  /** الشريط السفلي الثابت يغطي أزرار أسفل بطاقة الدخول/التسجيل؛ نخفيه هناك مثل الهيدر */
  const hideBottomNav =
    pathname === '/register' ||
    pathname === '/login' ||
    pathname === '/forgot-password' ||
    pathname.startsWith('/password-reset/confirm') ||
    pathname.startsWith('/reset-password/confirm');
  const hideHeaderLocationButton = pathname === '/';
  const hideHeaderProfileFab =
    pathname === '/register' ||
    pathname === '/login' ||
    pathname === '/forgot-password' ||
    pathname.startsWith('/password-reset/confirm') ||
    pathname.startsWith('/reset-password/confirm');
  const storesTabActive = pathname === '/stores';
  const adminHomeActive = pathname === '/admin';
  const adminStoresActive = pathname === '/admin/stores';
  const adminAdsActive = pathname === '/admin/ads';
  const adminUsersActive = pathname === '/admin/users';

  const showLayoutBack = pathname !== '/';
  /** واجهة السوق الموحّدة (بدون لوحة الأدمن): نفس سلوك الموبايل على كل الشاشات */
  const shopperMarketChrome = !isAdminPanelContext;

  const handleLayoutBack = useCallback(() => {
    if (typeof window !== 'undefined' && window.history.length > 1) {
      navigate(-1);
      return;
    }
    if (pathname.startsWith('/admin')) {
      navigate('/admin');
      return;
    }
    if (pathname.startsWith('/merchant')) {
      navigate('/merchant/dashboard');
      return;
    }
    navigate('/');
  }, [navigate, pathname]);

  const nextForAuth = `${location.pathname}${location.search}${location.hash || ''}`;

  useEffect(() => {
    setAdminNotifsOpen(false);
  }, [pathname]);

  const adminNotifsPanelInner = isAdminUser && adminNotifs && (
    <>
      <div className="admin-notifs-pop__head">
        <strong>الإشعارات</strong>
        <button
          type="button"
          className="btn-toggle"
          onClick={async () => {
            try {
              await Promise.resolve(adminNotifs.pollOnce?.());
            } catch {
              await showAlert('تعذر التحديث. حاول لاحقاً.', 'خطأ');
            }
          }}
        >
          تحديث
        </button>
      </div>
      <div className="admin-notifs-list">
        {(adminNotifs.items || [])
          .slice()
          .reverse()
          .slice(0, 12)
          .map((n) => {
            const type = n?.event_type;
            const rid = n?.related_id;
            const href =
              type === 'ad_request' && rid != null
                ? `/admin/ads/${rid}`
                : type === 'subscription_renewal'
                  ? '/admin/subscriptions'
                  : type === 'community_point'
                    ? '/admin/community'
                    : '/admin';
            return (
              <button
                key={n.id}
                type="button"
                className="admin-notifs-item"
                onClick={() => {
                  setAdminNotifsOpen(false);
                  navigate(href);
                }}
                title="فتح الطلب"
              >
                <div className="admin-notifs-item__title">{n.title}</div>
                {n.body ? <div className="admin-notifs-item__body">{n.body}</div> : null}
                <div className="admin-notifs-item__meta">
                  <span>{n.event_type_label || n.event_type}</span>
                  <span className="muted small">{new Date(n.created_at).toLocaleString('ar')}</span>
                </div>
              </button>
            );
          })}
        {!adminNotifs.items || adminNotifs.items.length === 0 ? (
          <div className="muted small" style={{ padding: 10 }}>
            لا إشعارات بعد.
          </div>
        ) : null}
      </div>
    </>
  );

  return (
    <div
      className={`layout-container${isSidebarOpen ? ' sidebar-open' : ''}${pathname === '/map' ? ' layout-container--map' : ''}${pathname === '/' ? ' layout-container--home' : ''}`}
      dir="rtl"
      lang="ar"
    >
      {!hideMainHeader ? (
      <header
        className={`main-header main-header--market${shopperMarketChrome ? ' main-header--shopper-market' : ''}${pathname === '/' ? ' main-header--home' : ''}`}
      >
        <div className="main-header__primary">
          <div className="header-right">
            {showLayoutBack && !hideMainHeader ? (
              <button
                type="button"
                className="header-back-btn"
                onClick={handleLayoutBack}
                aria-label="رجوع للخلف"
                title="رجوع"
              >
                <ChevronRight size={22} strokeWidth={2.25} aria-hidden />
              </button>
            ) : null}

            <Link to="/" className="brand-block brand-block--toolbar" title="رادار — الرئيسية">
              <img className="brand-block-logo brand-block-logo--toolbar" src="/logo.png" alt="رادار" />
            </Link>
          </div>

          <div className="header-left">
            {isAuthenticated ? (
              <Link
                to={userType === 'admin' ? '/admin' : '/settings'}
                className="header-user-pill header-user-pill--member"
                title={displayName || 'حسابي'}
                aria-label={`المستخدم: ${displayName || 'حسابي'}`}
              >
                <User size={18} strokeWidth={1.85} aria-hidden className="header-user-pill__ico" />
                <span className="header-user-pill__name">{displayName || 'حسابي'}</span>
              </Link>
            ) : (
              <Link
                to={`/register?next=${encodeURIComponent(nextForAuth)}`}
                className="header-register-btn"
                aria-label="إنشاء حساب — تسجيل"
                title="تسجيل"
              >
                <UserPlus size={18} strokeWidth={2} aria-hidden />
                <span className="header-register-btn__txt">+ تسجيل</span>
              </Link>
            )}

            {isAdminUser && adminNotifs ? (
              <div className="admin-notifs">
                <button
                  type="button"
                  className="admin-notifs-btn"
                  aria-label="إشعارات الإدارة"
                  title="إشعارات الإدارة"
                  aria-expanded={adminNotifsOpen}
                  onClick={(e) => {
                    e.stopPropagation();
                    setAdminNotifsOpen((prev) => {
                      const next = !prev;
                      if (next) adminNotifs.markAllRead?.();
                      return next;
                    });
                  }}
                >
                  <Bell size={20} strokeWidth={2} aria-hidden />
                  {adminNotifs.unreadCount > 0 ? (
                    <span className="admin-notifs-badge">
                      {adminNotifs.unreadCount > 99 ? '99+' : adminNotifs.unreadCount}
                    </span>
                  ) : null}
                </button>
                {!isNarrowScreen && adminNotifsOpen ? (
                  <div className="admin-notifs-pop admin-notifs-pop--dropdown" role="dialog" aria-modal="true" aria-label="إشعارات الإدارة">
                    {adminNotifsPanelInner}
                  </div>
                ) : null}
                {isNarrowScreen &&
                  adminNotifsOpen &&
                  typeof document !== 'undefined' &&
                  createPortal(
                    <>
                      <button
                        type="button"
                        className="admin-notifs-backdrop"
                        aria-label="إغلاق الإشعارات"
                        onClick={() => setAdminNotifsOpen(false)}
                      />
                      <div
                        className="admin-notifs-sheet"
                        role="dialog"
                        aria-modal="true"
                        aria-label="إشعارات الإدارة"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <div className="admin-notifs-sheet__handle" aria-hidden />
                        {adminNotifsPanelInner}
                      </div>
                    </>,
                    document.body,
                  )}
              </div>
            ) : null}
          </div>
        </div>

        {/* موبايل: شريط بحث مطابق للصورة (يُخفى في صفحة الخريطة لأن البحث موجود فوق الخريطة) */}
        {!isAdminPanelContext && pathname !== '/map' ? (
          <div
            className="header-mobile-search"
            aria-label="بحث سريع"
            onClick={() => {
              navigate('/search');
            }}
          >
            <form
              className="header-mobile-search__bar"
              role="search"
              aria-label="بحث"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                navigate('/search');
              }}
              onSubmit={(e) => {
                e.preventDefault();
                const q = (searchQuery || '').trim();
                navigate(q ? `/search?q=${encodeURIComponent(q)}` : '/search');
              }}
            >
              <input
                ref={mobileSearchInputRef}
                className="header-mobile-search__input"
                type="search"
                value={searchQuery || ''}
                readOnly
                onFocus={() => navigate('/search')}
                placeholder="ابحث عن متجر، منتج، أو قسم…"
                aria-label="اكتب للبحث"
                enterKeyHint="search"
              />
              <button type="submit" className="header-mobile-search__submit" aria-label="بحث">
                <SearchIcon size={18} strokeWidth={2} aria-hidden />
              </button>
            </form>
          </div>
        ) : null}

        {!isAdminPanelContext ? (
          <nav className="header-nav" aria-label="التنقل">
            <Link to="/" className={`header-nav-item${pathname === '/' ? ' header-nav-item--active' : ''}`}>
              <HomeIcon size={20} strokeWidth={2} aria-hidden />
              <span>الرئيسية</span>
            </Link>
            <Link to="/map" className={`header-nav-item${pathname === '/map' ? ' header-nav-item--active' : ''}`}>
              <MapIcon size={20} strokeWidth={2} aria-hidden />
              <span>الخريطة</span>
            </Link>
            <Link to="/stores" className={`header-nav-item${storesTabActive ? ' header-nav-item--active' : ''}`}>
              <Store size={20} strokeWidth={2} aria-hidden />
              <span>المتاجر</span>
            </Link>
            <Link to="/services" className={`header-nav-item${pathname === '/services' ? ' header-nav-item--active' : ''}`}>
              <Briefcase size={20} strokeWidth={2} aria-hidden />
              <span>الخدمات</span>
            </Link>
            <button type="button" className="header-nav-item header-nav-item--menu" onClick={toggleSidebar} aria-label="القائمة">
              <Menu size={20} strokeWidth={2} aria-hidden />
              {isAdminUser && pendingTotal > 0 ? (
                <span className="nav-menu-badge" aria-label={`طلبات معلّقة: ${pendingTotal}`}>
                  {pendingTotal > 99 ? '99+' : pendingTotal}
                </span>
              ) : null}
              <span>القائمة</span>
            </button>
          </nav>
        ) : (
          <nav className="header-nav header-nav--admin" aria-label="تنقل لوحة الإدارة">
            <Link to="/admin" className={`header-nav-item${adminHomeActive ? ' header-nav-item--active' : ''}`}>
              <LayoutDashboard size={20} strokeWidth={2} aria-hidden />
              <span>لوحة</span>
            </Link>
            <Link to="/admin/stores" className={`header-nav-item${adminStoresActive ? ' header-nav-item--active' : ''}`}>
              <Store size={20} strokeWidth={2} aria-hidden />
              <span>متاجر</span>
            </Link>
            <Link to="/admin/ads" className={`header-nav-item${adminAdsActive ? ' header-nav-item--active' : ''}`}>
              <Tags size={20} strokeWidth={2} aria-hidden />
              <span>إعلانات</span>
            </Link>
            <Link to="/admin/users" className={`header-nav-item${adminUsersActive ? ' header-nav-item--active' : ''}`}>
              <Users size={20} strokeWidth={2} aria-hidden />
              <span>مستخدمون</span>
            </Link>
            <button type="button" className="header-nav-item header-nav-item--menu" onClick={toggleSidebar} aria-label="القائمة">
              <Menu size={20} strokeWidth={2} aria-hidden />
              {isAdminUser && pendingTotal > 0 ? (
                <span className="nav-menu-badge" aria-label={`طلبات معلّقة: ${pendingTotal}`}>
                  {pendingTotal > 99 ? '99+' : pendingTotal}
                </span>
              ) : null}
              <span>القائمة</span>
            </button>
          </nav>
        )}
      </header>
      ) : null}

      {!hideMainHeader && pathname !== '/map' && announcements.length > 0 ? (
        <div className="site-announcements" role="region" aria-label="إعلانات عامة">
          {announcements.map((a) => (
            <div key={a.id} className="site-announcement">
              <Megaphone size={18} strokeWidth={2} aria-hidden />
              <div className="site-announcement__msg">{a.message}</div>
            </div>
          ))}
        </div>
      ) : null}

      {/* زر التثبيت أصبح داخل الهيدر (منتصف) */}

      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} variant={sidebarVariant} />

      <main
        className={`content${pathname === '/' ? ' content--home' : ''}${pathname === '/map' ? ' content--map' : ''}${hideBottomNav ? ' content--auth' : ''}`}
      >
        {showLayoutBack && hideHeaderOnMap ? (
          <div className="layout-back-floating">
            <button
              type="button"
              className="header-back-btn header-back-btn--floating"
              onClick={handleLayoutBack}
              aria-label="رجوع للخلف"
              title="رجوع"
            >
              <ChevronRight size={22} strokeWidth={2.25} aria-hidden />
            </button>
          </div>
        ) : null}
        {children}
        {pathname !== '/map' ? (
          <footer className="site-footer" aria-label="تذييل الصفحة">
            <div className="site-footer__inner" dir="ltr">
              <span className="site-footer__label">Created by</span>
              <div className="site-footer__people" aria-label="المساهمون">
                <div className="site-footer__person">
                  <div className="site-footer__name">ismail_nsr</div>
                  <a className="site-footer__email" href="mailto:ismailnaser67@gmail.com">
                    ismailnaser67@gmail.com
                  </a>
                </div>
                <div className="site-footer__person">
                  <div className="site-footer__name">lama_dirbi</div>
                  <a className="site-footer__email" href="mailto:lamaadirbi@gmail.com">
                    lamaadirbi@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </footer>
        ) : null}
      </main>

      {!hideBottomNav ? (
        !isAdminPanelContext ? (
          <nav className="bottom-nav" aria-label="شريط التنقل السفلي">
            <Link to="/" className={`bottom-nav-item${pathname === '/' ? ' bottom-nav-item--active' : ''}`}>
              <HomeIcon size={22} strokeWidth={2} aria-hidden />
              <span>الرئيسية</span>
            </Link>
            <Link to="/map" className={`bottom-nav-item${pathname === '/map' ? ' bottom-nav-item--active' : ''}`}>
              <MapIcon size={22} strokeWidth={2} aria-hidden />
              <span>الخريطة</span>
            </Link>
            <Link to="/stores" className={`bottom-nav-item${storesTabActive ? ' bottom-nav-item--active' : ''}`}>
              <Store size={22} strokeWidth={2} aria-hidden />
              <span>المتاجر</span>
            </Link>
            <Link to="/services" className={`bottom-nav-item${pathname === '/services' ? ' bottom-nav-item--active' : ''}`}>
              <Briefcase size={22} strokeWidth={2} aria-hidden />
              <span>الخدمات</span>
            </Link>
            <button type="button" className="bottom-nav-item" onClick={toggleSidebar} aria-label="القائمة">
              <Menu size={22} strokeWidth={2} aria-hidden />
              <span>القائمة</span>
            </button>
          </nav>
        ) : (
          <nav className="bottom-nav" aria-label="شريط الأدمن السفلي">
            <Link to="/admin" className={`bottom-nav-item${adminHomeActive ? ' bottom-nav-item--active' : ''}`}>
              <LayoutDashboard size={22} strokeWidth={2} aria-hidden />
              <span>لوحة</span>
            </Link>
            <Link to="/admin/stores" className={`bottom-nav-item${adminStoresActive ? ' bottom-nav-item--active' : ''}`}>
              <Store size={22} strokeWidth={2} aria-hidden />
              <span>متاجر</span>
            </Link>
            <Link to="/admin/ads" className={`bottom-nav-item${adminAdsActive ? ' bottom-nav-item--active' : ''}`}>
              <Tags size={22} strokeWidth={2} aria-hidden />
              <span>إعلانات</span>
            </Link>
            <Link to="/admin/users" className={`bottom-nav-item${adminUsersActive ? ' bottom-nav-item--active' : ''}`}>
              <Users size={22} strokeWidth={2} aria-hidden />
              <span>مستخدمون</span>
            </Link>
            <button type="button" className="bottom-nav-item" onClick={toggleSidebar} aria-label="القائمة">
              <Menu size={22} strokeWidth={2} aria-hidden />
              <span>القائمة</span>
            </button>
          </nav>
        )
      ) : null}

      <style dangerouslySetInnerHTML={{ __html: `
        .layout-container {
          min-height: 100vh;
          min-height: 100dvh;
          display: flex;
          flex-direction: column;
          overflow-x: clip;
          background: var(--background);
        }

        .layout-container--map {
          min-height: 100dvh;
        }

        /* صفحة الخريطة: أخفِ الهيدر على كل أحجام الشاشات (مثل الموبايل) */
        .layout-container--map .main-header {
          display: none !important;
        }

        .main-header {
          display: flex;
          flex-direction: column;
          align-items: stretch;
          padding: 8px 10px 10px;
          gap: 0;
          margin-inline: 0;
          margin-top: 2px;
          background: #ffffff;
          box-shadow: 0 4px 22px rgba(26, 29, 38, 0.07);
          border: 1px solid rgba(232, 230, 224, 0.95);
          border-radius: 0 0 22px 22px;
          position: sticky;
          top: 0;
          z-index: 1100;
          isolation: isolate;
          overflow: visible;
        }

        .site-announcements{
          max-width: 1240px;
          margin: 16px auto 16px;
          padding-inline: clamp(8px, 2.2vw, 22px);
          box-sizing: border-box;
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        .site-announcement{
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 10px 16px;
          border-radius: 999px;
          border: 1px solid rgba(100, 181, 246, 0.35);
          background: linear-gradient(135deg, #e3f2fd 0%, #f5fbff 55%, #ffffff 100%);
          box-shadow: 0 4px 18px rgba(26, 29, 38, 0.06);
          color: var(--secondary);
        }
        .site-announcement__msg{
          font-weight: 800;
          color: var(--text-secondary);
          line-height: 1.5;
          white-space: pre-wrap;
        }

        .pwa-install{
          display: flex;
          flex-direction: column;
          gap: 8px;
          align-items: center;
        }
        .pwa-install__btn{
          width: 100%;
          max-width: 360px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          padding: 10px 14px;
          border-radius: 14px;
          border: 1px solid rgba(245, 192, 0, 0.55);
          background: linear-gradient(135deg, var(--primary) 0%, var(--primary-hover) 100%);
          color: var(--secondary);
          font-weight: 950;
          cursor: pointer;
          font-family: inherit;
          box-shadow: var(--shadow-gold);
          transition: transform 0.12s ease, filter 0.15s ease, box-shadow 0.15s ease;
        }
        .pwa-install__btn:hover{
          filter: brightness(1.02);
          box-shadow: 0 18px 42px rgba(245, 192, 0, 0.22);
        }
        .pwa-install__btn:active{
          transform: scale(0.98);
        }
        .pwa-install__btn-ico{
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 34px;
          height: 34px;
          border-radius: 12px;
          background: rgba(255,255,255,0.28);
          border: 1px solid rgba(255,255,255,0.35);
          box-shadow: 0 1px 0 rgba(255,255,255,0.35) inset;
          flex-shrink: 0;
        }
        .pwa-install__help{
          width: 100%;
          max-width: 680px;
          padding: 10px 12px;
          border-radius: 14px;
          border: 1px solid rgba(232, 230, 224, 0.95);
          background: rgba(255,255,255,0.92);
          color: var(--text-secondary);
          font-weight: 800;
          line-height: 1.6;
          text-align: center;
        }

        /* نفس عرض/محاذاة الصفحة لكل محتوى الهيدر */
        .main-header__primary,
        .header-nav {
          max-width: 1240px;
          margin-inline: auto;
          padding-inline: clamp(8px, 2.2vw, 22px);
          box-sizing: border-box;
        }
        /* شريط بحث الموبايل لازم يلمس حواف الناف بار */
        .header-mobile-search {
          max-width: 1240px;
          margin-inline: auto;
          padding-inline: 0;
          box-sizing: border-box;
        }

        /* على الشاشات الكبيرة: خلي الناف بار بنفس عرض الأقسام تحته */
        @media (min-width: 721px) {
          .main-header {
            /* طابق عرض منطقة المحتوى (content padding) + حد أقصى مثل الأقسام */
            width: min(1240px, calc(100vw - (2 * clamp(12px, 2.8vw, 20px))));
            margin-inline: auto;
            border-radius: 22px;
            margin-top: 10px;
          }
          /* مع تقييد الهيدر نفسه، لا نحتاج توسيط/حشو إضافي داخله */
          .main-header__primary,
          .header-mobile-search,
          .header-nav {
            max-width: none;
            margin-inline: 0;
            padding-inline: 0;
          }
        }

        .main-header__primary {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 10px;
          width: 100%;
          min-width: 0;
        }

        .header-right{
          display: inline-flex;
          align-items: center;
          gap: 10px;
          /* الصفحة RTL: start = أقصى اليمين */
          justify-self: start;
          min-width: 0;
          flex-wrap: nowrap;
        }

        .header-left{
          display: inline-flex;
          align-items: center;
          gap: 8px;
          min-width: 0;
          flex-wrap: nowrap;
          flex-shrink: 0;
          padding-inline-end: 4px;
        }

        .header-user-pill{
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          padding: 8px 14px;
          min-height: 40px;
          border-radius: 999px;
          border: 1px solid var(--border);
          background: linear-gradient(180deg, rgba(255, 255, 255, 0.96) 0%, rgba(255, 254, 248, 0.92) 100%);
          box-shadow: var(--shadow-sm);
          color: var(--secondary);
          max-width: min(320px, 42vw);
          min-width: 0;
          flex: 0 1 auto;
          text-align: center;
          text-decoration: none;
          box-sizing: border-box;
        }
        .header-user-pill--member {
          max-width: min(340px, 46vw);
        }
        .header-user-pill__ico{
          flex-shrink: 0;
        }
        .header-user-pill__name{
          font-weight: 950;
          color: var(--text-secondary);
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          min-width: 0;
          flex: 1 1 auto;
          text-align: center;
        }
        .header-register-btn{
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 6px;
          min-height: 40px;
          padding: 8px 12px;
          border-radius: 999px;
          font-size: 0.88rem;
          font-weight: 950;
          text-decoration: none;
          color: var(--secondary);
          background: rgba(255, 255, 255, 0.92);
          border: 1px solid var(--border);
          box-shadow: var(--shadow-sm);
          white-space: nowrap;
          flex-shrink: 0;
          transition: background 0.18s ease, border-color 0.18s ease, box-shadow 0.18s ease;
        }
        .header-register-btn:hover{
          border-color: rgba(255, 204, 0, 0.55);
          box-shadow: var(--shadow-sm);
          background: var(--white);
        }
        .header-register-btn__txt{
          letter-spacing: -0.02em;
        }

        /* تخطيط الهيدر: يمين/وسط/يسار */

        @media (max-width: 720px){
          .header-user-pill{
            max-width: min(280px, 52vw);
          }
          .header-user-pill--member{
            max-width: min(300px, 58vw);
          }
          img.brand-block-logo.brand-block-logo--toolbar{
            max-width: min(320px, 72vw);
          }
        }

        /* الموبايل: يظل صف واحد، نقلل الأحجام بدل ما ننزل لسطر ثاني */
        @media (max-width: 720px){
          .main-header__primary{
            gap: 8px;
          }
          .header-right{
            gap: 6px;
          }
          .header-left{
            gap: 6px;
          }
          .header-user-pill{
            padding: 6px 10px;
            max-width: min(200px, 48vw);
          }
          .header-user-pill--member{
            max-width: min(220px, 52vw);
          }
          .header-user-pill__name{
            max-width: min(160px, 38vw);
          }
          .header-register-btn{
            padding: 6px 10px;
            font-size: 0.82rem;
            min-height: 38px;
          }
          img.brand-block-logo.brand-block-logo--toolbar{
            height: 64px;
            max-width: min(240px, 52vw);
          }
          .pwa-install__btn{
            max-width: max-content;
            padding: 8px;
            border-radius: 12px;
          }
          .pwa-install__btn-txt{
            display: none;
          }
          .pwa-install__btn-ico{
            margin: 0;
            width: 28px;
            height: 28px;
          }
        }

        /* أصغر الشاشات: اقتطاع اسم المستخدم مع الإبقاء على أيقونة + عنوان كامل في title */
        @media (max-width: 360px){
          img.brand-block-logo.brand-block-logo--toolbar{
            height: 56px;
            max-width: min(190px, 46vw);
          }
          .header-user-pill{
            padding: 6px 8px;
            max-width: min(140px, 42vw);
          }
          .header-user-pill--member{
            max-width: min(150px, 44vw);
          }
          .header-user-pill__name{
            max-width: min(100px, 30vw);
            font-size: 0.78rem;
          }
          .header-register-btn{
            padding: 6px 8px;
            font-size: 0.75rem;
            gap: 4px;
          }
          .header-register-btn__txt{
            max-width: 72px;
            overflow: hidden;
            text-overflow: ellipsis;
          }
        }

        .search-submit-btn {
          flex-shrink: 0;
          border: none;
          font-family: inherit;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 44px;
          height: 44px;
          padding: 0;
          border-radius: 50%;
          cursor: pointer;
          background: linear-gradient(145deg, var(--primary) 0%, var(--primary-hover) 100%);
          color: var(--secondary);
          box-shadow: var(--shadow-gold);
          transition: filter 0.15s ease, transform 0.12s ease;
        }

        .search-submit-btn:hover {
          filter: brightness(1.05);
        }

        .search-submit-btn:active {
          transform: scale(0.96);
        }

        .search-filter-btn {
          flex-shrink: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 44px;
          height: 44px;
          border-radius: 50%;
          color: var(--secondary);
          background: var(--surface);
          border: 1.5px solid var(--border);
          text-decoration: none;
          transition: background 0.18s ease, border-color 0.18s ease, color 0.18s ease;
        }

        .search-filter-btn:hover {
          background: rgba(255, 204, 0, 0.16);
          border-color: rgba(255, 204, 0, 0.5);
          color: var(--secondary);
        }

        .admin-notifs{
          position: relative;
          display: inline-flex;
          align-items: center;
          margin-inline-start: 0;
          overflow: visible;
          z-index: 1350;
        }
        .admin-notifs-btn{
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 44px;
          height: 44px;
          border-radius: 999px;
          border: 1px solid rgba(232, 230, 224, 0.95);
          background: rgba(255,255,255,0.92);
          cursor: pointer;
          position: relative;
          box-shadow: var(--shadow-sm);
          color: var(--secondary);
        }
        .admin-notifs-badge{
          position: absolute;
          top: -6px;
          inset-inline-start: -6px;
          min-width: 20px;
          height: 20px;
          padding: 0 6px;
          border-radius: 999px;
          background: #e74c3c;
          color: #fff;
          font-weight: 900;
          font-size: 0.72rem;
          line-height: 20px;
          text-align: center;
          border: 2px solid #fff;
        }
        .admin-notifs-pop--dropdown{
          display: flex;
          flex-direction: column;
          position: absolute;
          top: calc(100% + 8px);
          inset-inline-end: 0;
          width: min(420px, calc(100vw - 24px));
          max-width: calc(100vw - 20px);
          background: rgba(255,255,255,0.98);
          border: 1px solid rgba(232, 230, 224, 0.95);
          border-radius: 18px;
          box-shadow: 0 18px 46px rgba(26, 29, 38, 0.18);
          overflow: hidden;
          z-index: 5000;
          box-sizing: border-box;
        }
        .admin-notifs-backdrop{
          position: fixed;
          inset: 0;
          z-index: 8000;
          border: none;
          padding: 0;
          margin: 0;
          cursor: pointer;
          background: rgba(14, 16, 22, 0.45);
          -webkit-backdrop-filter: blur(4px);
          backdrop-filter: blur(4px);
          touch-action: manipulation;
        }
        .admin-notifs-sheet{
          position: fixed;
          left: 50%;
          top: 86px;
          transform: translateX(-50%);
          z-index: 8010;
          display: flex;
          flex-direction: column;
          width: min(420px, calc(100vw - 28px));
          max-height: min(70dvh, 520px);
          background: rgba(255,255,255,0.98);
          border-radius: 18px;
          box-shadow: 0 18px 46px rgba(26, 29, 38, 0.22);
          padding-bottom: 0;
          box-sizing: border-box;
          overflow: hidden;
          touch-action: pan-y;
        }
        .admin-notifs-sheet__handle{
          width: 40px;
          height: 5px;
          border-radius: 999px;
          background: rgba(26, 29, 38, 0.2);
          margin: 10px auto 6px;
          flex-shrink: 0;
        }
        .admin-notifs-sheet .admin-notifs-list{
          flex: 1;
          min-height: 0;
          max-height: none;
          overflow-y: auto;
          -webkit-overflow-scrolling: touch;
          overscroll-behavior: contain;
        }
        .admin-notifs-pop__head{
          display:flex;
          align-items:center;
          justify-content: space-between;
          gap: 10px;
          padding: 10px 12px;
          background: var(--surface);
          border-bottom: 1px solid rgba(232, 230, 224, 0.95);
        }
        .admin-notifs-list{
          max-height: 360px;
          overflow: auto;
        }
        .admin-notifs-item{
          width: 100%;
          text-align: right;
          background: transparent;
          border: none;
          padding: 10px 12px;
          border-bottom: 1px solid rgba(232, 230, 224, 0.85);
          cursor: pointer;
        }
        .admin-notifs-item:hover{ background: rgba(26,29,38,0.04); }
        .admin-notifs-item:active{ background: rgba(26,29,38,0.06); }
        .admin-notifs-item:focus-visible{
          outline: 2px solid rgba(245, 192, 0, 0.55);
          outline-offset: -2px;
        }
        .admin-notifs-item:last-child{ border-bottom: none; }
        .admin-notifs-item__title{
          font-weight: 950;
          color: var(--secondary);
          margin-bottom: 4px;
        }
        .admin-notifs-item__body{
          color: var(--text-secondary);
          font-weight: 800;
          line-height: 1.55;
          margin-bottom: 6px;
        }
        .admin-notifs-item__meta{
          display:flex;
          align-items:center;
          justify-content: space-between;
          gap: 10px;
          color: var(--text-secondary);
          font-weight: 800;
          font-size: 0.82rem;
        }

        .header-user-status {
          display: none;
          align-items: center;
          gap: 8px;
          padding: 8px 12px;
          border-radius: 999px;
          border: 1px solid var(--border);
          background: rgba(255, 255, 255, 0.92);
          box-shadow: var(--shadow-sm);
          color: var(--secondary);
          max-width: 240px;
          min-width: 0;
        }
        .header-user-status__text {
          font-weight: 900;
          color: var(--text-secondary);
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          min-width: 0;
        }

        /* واجهة السوق: نبقي شريط بحث الموبايل فقط */
        .header-mobile-search {
          display: none;
        }
        .main-header--shopper-market .header-mobile-search {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-top: 8px;
          margin-inline: calc(-1 * clamp(8px, 2.2vw, 22px));
          padding-inline: clamp(8px, 2.2vw, 22px);
          position: relative;
          z-index: 1205;
          pointer-events: auto !important;
        }
        .main-header--shopper-market .header-mobile-search__bar {
          flex: 1;
          min-width: 0;
          height: 50px;
          border-radius: 999px;
          border: 1px solid rgba(232, 230, 224, 0.95);
          background: rgba(255, 255, 255, 0.92);
          box-shadow: 0 2px 14px rgba(26, 29, 38, 0.06);
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 10px;
          padding: 0 14px;
          color: var(--text-secondary);
          flex-direction: row-reverse;
          width: 100%;
          box-sizing: border-box;
          position: relative;
          z-index: 1206;
          cursor: pointer;
          -webkit-tap-highlight-color: transparent;
          touch-action: manipulation;
          pointer-events: auto !important;
        }
        .main-header--shopper-market .header-mobile-search__input {
          flex: 1;
          min-width: 0;
          height: 100%;
          border: none;
          outline: none;
          background: transparent;
          font-family: inherit;
          font-weight: 800;
          font-size: 0.92rem;
          color: var(--secondary);
          direction: rtl;
          text-align: right;
        }
        .main-header--shopper-market .header-mobile-search__input::placeholder {
          color: rgba(26, 29, 38, 0.55);
          font-weight: 800;
        }
        .main-header--shopper-market .header-mobile-search__submit {
          flex: 0 0 auto;
          width: 34px;
          height: 34px;
          border-radius: 12px;
          border: none;
          background: transparent;
          color: rgba(26, 29, 38, 0.5);
          display: inline-flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          padding: 0;
        }
        .main-header--shopper-market .header-mobile-search__placeholder {
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          font-weight: 800;
          font-size: 0.9rem;
          color: rgba(26, 29, 38, 0.55);
          text-align: right;
          flex: 1;
          min-width: 0;
        }
        .main-header--shopper-market .header-mobile-search__ico {
          color: rgba(26, 29, 38, 0.5);
          flex-shrink: 0;
        }
        @media (min-width: 901px) {
          .main-header--shopper-market .header-right {
            justify-content: flex-end;
          }
        }

        .header-login-ghost {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 6px;
          min-height: 40px;
          padding: 9px 14px;
          border-radius: 999px;
          font-size: 0.82rem;
          font-weight: 900;
          text-decoration: none;
          color: var(--secondary);
          background: transparent;
          border: 2px solid rgba(232, 230, 224, 0.98);
          white-space: nowrap;
          box-sizing: border-box;
          line-height: 1;
          transition: background 0.18s ease, border-color 0.18s ease, box-shadow 0.18s ease;
        }

        .header-login-ghost:hover {
          background: var(--white);
          border-color: rgba(255, 204, 0, 0.55);
          box-shadow: var(--shadow-sm);
        }

        .content--map {
          display: flex;
          flex-direction: column;
          flex: 1 1 auto;
          min-height: 0;
        }

        .main-header--market {
          border-radius: 22px;
        }

        .brand-block {
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 6px 14px;
          min-height: 52px;
          border-radius: 16px;
          background: linear-gradient(180deg, #fff 0%, var(--surface) 100%);
          border: 1px solid var(--border);
          box-shadow: 0 2px 12px rgba(30, 30, 46, 0.06);
          text-decoration: none;
          flex-shrink: 0;
          transition: box-shadow 0.2s ease, border-color 0.2s ease;
        }

        .brand-block:hover {
          border-color: rgba(245, 192, 0, 0.55);
          box-shadow: var(--shadow-gold);
        }

        .brand-block-logo {
          height: 42px;
          width: auto;
          max-width: min(140px, 28vw);
          object-fit: contain;
          object-position: center;
          display: block;
        }

        .menu-btn {
          background: var(--surface);
          border: 1px solid var(--border);
          cursor: pointer;
          color: var(--secondary);
          display: flex;
          padding: 8px;
          border-radius: 12px;
          transition: background 0.2s ease, box-shadow 0.2s ease;
          position: relative;
        }

        .menu-btn-badged {
          overflow: visible;
        }

        .header-menu-pending-total {
          position: absolute;
          top: 2px;
          inset-inline-start: 2px;
          min-width: 18px;
          height: 18px;
          padding: 0 5px;
          border-radius: 999px;
          background: #e74c3c;
          color: #fff;
          font-size: 10px;
          font-weight: 800;
          line-height: 18px;
          text-align: center;
          box-shadow: 0 1px 4px rgba(0, 0, 0, 0.25);
          pointer-events: none;
        }

        .menu-btn:hover {
          background: var(--primary-light);
          box-shadow: var(--shadow-sm);
        }

        /* يجب أن تكون بعد .brand-block و .brand-block-logo حتى لا تُلغى */
        .brand-block.brand-block--toolbar {
          padding: 0;
          min-height: 0;
          border-radius: 0;
          background: transparent;
          border: none;
          box-shadow: none;
          flex-shrink: 0;
        }

        .brand-block.brand-block--toolbar:hover {
          border: none;
          box-shadow: none;
          opacity: 0.9;
        }

        img.brand-block-logo.brand-block-logo--toolbar {
          height: 98px;
          width: auto;
          max-width: min(460px, 78vw);
          object-fit: contain;
          object-position: center;
          display: block;
          margin-left: 8px;
          border: none;
          outline: none;
          box-shadow: none;
          vertical-align: middle;
        }

        .menu-btn.menu-btn--toolbar {
          flex-shrink: 0;
          align-items: center;
          justify-content: center;
          width: 50px;
          height: 50px;
          padding: 0;
          border-radius: 16px;
          border: none;
          background: linear-gradient(180deg, #ffffff 0%, #f3f4f6 100%);
          box-shadow:
            0 1px 0 rgba(255, 255, 255, 0.9) inset,
            0 4px 14px rgba(26, 29, 38, 0.1);
          color: var(--secondary);
        }

        .menu-btn.menu-btn--toolbar:hover {
          background: linear-gradient(180deg, var(--primary-light) 0%, #fffef6 100%);
          box-shadow:
            0 1px 0 rgba(255, 255, 255, 0.95) inset,
            0 6px 20px rgba(255, 204, 0, 0.22);
        }

        .header-auth-inline {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          flex-shrink: 0;
        }
        .header-auth-inline__login,
        .header-auth-inline__register {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 6px;
          min-height: 44px;
          padding: 10px 14px;
          border-radius: 999px;
          font-size: 0.84rem;
          font-weight: 900;
          text-decoration: none;
          line-height: 1;
          white-space: nowrap;
        }
        .header-auth-inline__login {
          color: var(--secondary);
          background: var(--white);
          border: 2px solid rgba(232, 230, 224, 0.98);
          box-shadow: 0 2px 12px rgba(26, 29, 38, 0.06);
        }
        .header-auth-inline__login:hover {
          border-color: rgba(255, 204, 0, 0.55);
          box-shadow: var(--shadow-sm);
        }
        .header-auth-inline__register {
          color: var(--secondary);
          background: linear-gradient(135deg, var(--primary) 0%, var(--primary-hover) 100%);
          border: 2px solid transparent;
          box-shadow: var(--shadow-gold);
        }
        .header-auth-inline__register:hover {
          filter: brightness(1.05);
        }

        .search-bar {
          position: relative;
          max-width: min(560px, 100%);
          width: 100%;
        }

        .search-bar--pill {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 2px 4px 2px 12px;
          border-radius: 999px;
          border: 1.5px solid rgba(232, 230, 224, 0.95);
          background: var(--white);
          box-shadow: 0 2px 14px rgba(26, 29, 38, 0.06), inset 0 1px 0 rgba(255, 255, 255, 0.9);
        }

        .search-bar--pill .search-icon {
          position: static;
          transform: none;
          flex-shrink: 0;
          color: var(--text-light);
        }

        .search-bar--pill input {
          flex: 1;
          min-width: 0;
          border: none !important;
          background: transparent !important;
          box-shadow: none !important;
          padding: 0.5rem 0.15rem !important;
          font-size: 0.9rem;
        }

        .search-icon {
          position: absolute;
          inset-inline-start: 15px;
          top: 50%;
          transform: translateY(-50%);
          color: var(--text-light);
        }

        .header-register-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 6px;
          min-height: 40px;
          padding: 9px 14px;
          border-radius: 999px;
          font-size: 0.82rem;
          font-weight: 900;
          text-decoration: none;
          color: var(--secondary);
          background: linear-gradient(135deg, var(--primary) 0%, var(--primary-hover) 100%);
          border: 2px solid transparent;
          box-shadow: var(--shadow-gold);
          white-space: nowrap;
          box-sizing: border-box;
          line-height: 1;
          transition: filter 0.15s ease, transform 0.12s ease;
        }

        .header-register-btn:hover {
          filter: brightness(1.05);
        }

        .header-register-btn:active {
          transform: scale(0.98);
        }

        .location-badge {
          display: flex;
          align-items: center;
          gap: 4px;
          background: linear-gradient(135deg, var(--primary) 0%, var(--primary-hover) 100%);
          color: var(--secondary);
          padding: 8px 12px;
          border-radius: 999px;
          font-size: 0.84rem;
          font-weight: bold;
          cursor: pointer;
          box-shadow: var(--shadow-gold);
          border: none;
          font-family: inherit;
        }

        .location-badge:disabled {
          opacity: 0.75;
          cursor: wait;
        }

        .user-badge--filled {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 6px 10px;
          border-radius: 999px;
          border: 1px solid var(--border);
          background: var(--white);
          box-shadow: var(--shadow-sm);
          color: var(--secondary);
          max-width: 200px;
        }

        .user-name {
          font-weight: 800;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }

        .header-back-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 44px;
          height: 44px;
          padding: 0;
          border-radius: 50%;
          border: none;
          background: linear-gradient(160deg, var(--primary-light) 0%, rgba(255, 249, 230, 0.92) 55%, #fff 100%);
          color: var(--secondary);
          cursor: pointer;
          box-shadow:
            0 1px 2px rgba(26, 29, 38, 0.06),
            0 6px 20px rgba(245, 192, 0, 0.18);
          flex-shrink: 0;
          font-family: inherit;
          transition: background 0.2s ease, box-shadow 0.2s ease, transform 0.14s ease, color 0.15s ease;
        }
        .header-back-btn:hover {
          background: linear-gradient(160deg, rgba(255, 230, 150, 0.45) 0%, var(--primary-light) 40%, #fffef8 100%);
          box-shadow:
            0 2px 4px rgba(26, 29, 38, 0.07),
            0 10px 28px rgba(245, 192, 0, 0.28);
          color: #141820;
        }
        .header-back-btn:active {
          transform: scale(0.96);
          box-shadow:
            0 1px 3px rgba(26, 29, 38, 0.08),
            0 4px 14px rgba(245, 192, 0, 0.2);
        }
        .header-back-btn:focus-visible {
          outline: none;
          box-shadow:
            0 0 0 3px rgba(255, 255, 255, 0.95),
            0 0 0 6px rgba(245, 192, 0, 0.45),
            0 6px 20px rgba(245, 192, 0, 0.2);
        }
        .layout-back-floating {
          position: fixed;
          top: calc(10px + env(safe-area-inset-top, 0px));
          inset-inline-start: clamp(8px, 2.2vw, 16px);
          z-index: 1001;
          pointer-events: none;
        }
        .layout-back-floating .header-back-btn {
          pointer-events: auto;
        }
        .header-back-btn--floating {
          -webkit-backdrop-filter: blur(10px);
          backdrop-filter: blur(10px);
          background: linear-gradient(145deg, rgba(255, 255, 255, 0.72) 0%, rgba(255, 252, 238, 0.82) 100%);
          box-shadow:
            0 1px 1px rgba(255, 255, 255, 0.8) inset,
            0 8px 24px rgba(26, 29, 38, 0.12);
        }
        .header-back-btn--floating:hover {
          background: linear-gradient(145deg, rgba(255, 255, 255, 0.85) 0%, rgba(255, 245, 210, 0.88) 100%);
        }

        .content {
          flex: 1;
          padding: 0;
          padding-top: clamp(12px, 2.2vw, 20px);
          padding-inline: env(safe-area-inset-left, 0) env(safe-area-inset-right, 0);
          padding-bottom: calc(72px + env(safe-area-inset-bottom, 0px));
          background: var(--background);
          min-width: 0;
        }

        .content.content--auth {
          padding-bottom: env(safe-area-inset-bottom, 0px);
          /* Match auth pages' background so footer area doesn't look different */
          background: linear-gradient(168deg, var(--background) 0%, var(--surface) 38%, var(--primary-light) 100%);
        }

        .content.content--home {
          padding: 0;
          padding-top: clamp(12px, 2.2vw, 20px);
          padding-bottom: calc(72px + env(safe-area-inset-bottom, 0px));
        }

        .site-footer{
          max-width: 1240px;
          width: 100%;
          margin: 18px auto 0;
          padding: 8px clamp(8px, 2.2vw, 22px);
          box-sizing: border-box;
          text-align: center;
        }
        .site-footer__inner{
          display: inline-flex;
          align-items: center;
          gap: 12px;
          padding: 8px 12px;
          border-radius: 18px;
          background: linear-gradient(180deg, rgba(255,255,255,0.92) 0%, rgba(255,254,248,0.92) 100%);
          border: 1px solid rgba(232, 230, 224, 0.95);
          box-shadow:
            0 10px 28px rgba(26, 29, 38, 0.07),
            0 1px 0 rgba(255,255,255,0.65) inset;
          color: rgba(26, 29, 38, 0.78);
          line-height: 1;
          -webkit-backdrop-filter: blur(10px);
          backdrop-filter: blur(10px);
        }
        .site-footer__label{
          font-weight: 900;
          color: rgba(26, 29, 38, 0.55);
          letter-spacing: -0.01em;
          font-size: 0.78rem;
          text-transform: uppercase;
          letter-spacing: 0.08em;
        }
        .site-footer__people{
          display: grid;
          grid-auto-flow: column;
          align-items: center;
          column-gap: 18px;
        }
        .site-footer__person{
          display: inline-flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 5px;
          min-width: 0;
          padding-inline: 2px;
        }
        .site-footer__person + .site-footer__person{
          border-inline-start: 1px solid rgba(26, 29, 38, 0.12);
          padding-inline-start: 18px;
        }
        .site-footer__name{
          font-weight: 950;
          color: var(--secondary);
          letter-spacing: -0.015em;
          font-size: 0.94rem;
          white-space: nowrap;
        }
        .site-footer__email{
          font-weight: 850;
          font-size: 0.82rem;
          color: rgba(26, 29, 38, 0.6);
          text-decoration: none;
          white-space: nowrap;
        }
        .site-footer__email:hover{
          color: rgba(26, 29, 38, 0.8);
          text-decoration: underline;
          text-decoration-thickness: 2px;
          text-underline-offset: 3px;
        }

        @media (max-width: 420px){
          .site-footer__inner{
            gap: 10px;
            padding: 8px 10px;
            border-radius: 16px;
          }
          .site-footer__label{ font-size: 0.74rem; }
          .site-footer__people{
            grid-auto-flow: row;
            row-gap: 10px;
          }
          .site-footer__person{
            align-items: center;
            text-align: center;
          }
          .site-footer__person + .site-footer__person{
            border-inline-start: none;
            padding-inline-start: 0;
            padding-top: 10px;
            border-top: 1px solid rgba(26, 29, 38, 0.12);
          }
          .site-footer__name{ font-size: 0.9rem; }
          .site-footer__email{ font-size: 0.8rem; }
        }

        .header-nav {
          display: none;
          margin-top: 8px;
          padding: 8px 0 6px;
          border-top: 1px solid rgba(232, 230, 224, 0.75);
          gap: 8px;
          width: 100%;
          max-width: none;
          align-self: stretch;
          box-sizing: border-box;
        }
        .header-nav-item {
          appearance: none;
          border: 1px solid rgba(232, 230, 224, 0.95);
          background: rgba(255, 255, 255, 0.92);
          color: var(--text-secondary);
          text-decoration: none;
          font-family: inherit;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          padding: 10px 12px;
          border-radius: 999px;
          font-weight: 900;
          font-size: 0.86rem;
          box-shadow: 0 2px 12px rgba(26, 29, 38, 0.06);
          transition: background 0.15s ease, border-color 0.15s ease, box-shadow 0.15s ease, transform 0.12s ease;
          flex: 1;
          min-width: 0;
          white-space: nowrap;
        }
        .header-nav-item:hover {
          border-color: rgba(245, 192, 0, 0.45);
          box-shadow: 0 8px 20px rgba(245, 192, 0, 0.14);
        }
        .header-nav-item--active {
          color: var(--secondary);
          background: #fff9e6;
          border-color: rgba(255, 204, 0, 0.45);
          box-shadow: 0 2px 12px rgba(255, 204, 0, 0.18);
        }
        .header-nav-item:active { transform: scale(0.99); }

        .header-nav-item--menu{
          position: relative;
        }
        .nav-menu-badge{
          position: absolute;
          top: -6px;
          inset-inline-start: 10px; /* فوق الأيقونة */
          min-width: 20px;
          height: 20px;
          padding: 0 6px;
          border-radius: 999px;
          background: #e74c3c;
          color: #fff;
          font-weight: 900;
          font-size: 0.72rem;
          line-height: 20px;
          text-align: center;
          border: 2px solid rgba(255,255,255,0.95);
          box-shadow: 0 6px 16px rgba(0,0,0,0.18);
          pointer-events: none;
        }

        .bottom-nav {
          display: flex;
          position: fixed;
          bottom: 0;
          inset-inline: 0;
          z-index: 1200;
          height: 64px;
          padding: 8px 10px calc(8px + env(safe-area-inset-bottom, 0px));
          background: rgba(255, 255, 255, 0.88);
          border-top: 1px solid rgba(232, 230, 224, 0.95);
          -webkit-backdrop-filter: blur(12px);
          backdrop-filter: blur(12px);
          box-shadow: 0 -14px 34px rgba(26, 29, 38, 0.08);
          justify-content: space-around;
          gap: 8px;
        }

        /* الموبايل: التنقل في الشريط السفلي — الديسكتوب: في الناف بار فقط (بدون شريط سفلي) */
        @media (min-width: 721px) {
          .header-nav {
            display: flex;
          }
          .bottom-nav {
            display: none;
          }
          .header-user-status {
            display: inline-flex;
          }
          .content {
            padding-bottom: clamp(8px, 1.5vw, 16px);
          }
          .content.content--home {
            padding-bottom: clamp(8px, 1.5vw, 16px);
          }
          .content.content--auth {
            padding-bottom: clamp(8px, 1.5vw, 16px);
          }
        }

        @media (max-width: 720px) {
          .bottom-nav-item {
            appearance: none;
            background: rgba(255, 255, 255, 0.92);
            border: 1px solid rgba(232, 230, 224, 0.95);
            cursor: pointer;
            min-width: 0;
            flex: 1;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: 3px;
            text-decoration: none;
            color: var(--text-secondary);
            font-family: inherit;
            padding: 6px 4px;
            border-radius: 16px;
            box-shadow: 0 2px 10px rgba(26, 29, 38, 0.06);
            transition: background 0.15s ease, border-color 0.15s ease, color 0.15s ease, transform 0.12s ease, box-shadow 0.15s ease;
          }
          .bottom-nav-item:hover {
            border-color: rgba(245, 192, 0, 0.45);
            box-shadow: 0 6px 18px rgba(245, 192, 0, 0.14);
          }
          .bottom-nav-item span {
            font-size: 0.7rem;
            font-weight: 800;
            line-height: 1;
          }
          .bottom-nav-item--active {
            color: var(--secondary);
            background: linear-gradient(135deg, rgba(255, 204, 0, 0.22) 0%, rgba(255, 204, 0, 0.10) 100%);
            border-color: rgba(245, 192, 0, 0.55);
            box-shadow: var(--shadow-gold);
          }
          .bottom-nav-item:active { transform: scale(0.98); }
        }

        @media (max-width: 900px) {
          .main-header {
            padding: 6px 8px 8px;
          }
          .main-header__primary {
            gap: 8px;
          }
          img.brand-block-logo.brand-block-logo--toolbar {
            height: 84px;
            max-width: min(400px, 76vw);
          }
          .menu-btn.menu-btn--toolbar {
            width: 48px;
            height: 48px;
            border-radius: 15px;
          }
          .header-actions {
            gap: 6px;
          }
        }

        /* على الشاشات الكبيرة: أزرار الدخول/التسجيل لأقصى اليسار (لوحة الأدمن فقط؛ السوق يستخدم main-header--shopper-market) */
        @media (min-width: 901px) {
          .main-header:not(.main-header--shopper-market) .header-right {
            justify-content: flex-end;
          }
        }

        /* تمت إعادة بناء الهيدر ب Grid (يمين/وسط/يسار) */

        /* ضبيطات مقاس فقط للسوق على الشاشات الضيقة (المنطق موحّد أعلاه) */
        @media (max-width: 520px) {
          .main-header--shopper-market {
            padding: 5px 6px 7px;
          }
          .main-header--shopper-market img.brand-block-logo.brand-block-logo--toolbar {
            height: 58px;
            max-width: min(280px, 72vw);
          }
        }

        .layout-container.sidebar-open .leaflet-control-attribution,
        .layout-container.sidebar-open .leaflet-control-layers {
          visibility: hidden !important;
          opacity: 0 !important;
          pointer-events: none !important;
        }
      `}} />
    </div>
  );
};

export default MainLayout;
