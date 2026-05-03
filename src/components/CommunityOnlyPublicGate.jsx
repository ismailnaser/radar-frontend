import { Navigate, useLocation } from 'react-router-dom';
import { isCommunityOnlyPublicUi } from '../config/publicUiMode';

function isCommercePublicPath(pathname) {
  if (pathname === '/stores' || pathname.startsWith('/stores/')) return true;
  if (pathname === '/offers') return true;
  if (pathname === '/category-products') return true;
  if (pathname === '/categories') return true;
  if (pathname === '/carts' || pathname.startsWith('/carts/')) return true;
  if (pathname === '/favorites') return true;
  return false;
}

/** داخل الـ Router: يعيد توجيه مسارات التسوّق العامة عند تفعيل وضع المجتمع فقط. */
export default function CommunityOnlyPublicGate() {
  const { pathname } = useLocation();
  if (!isCommunityOnlyPublicUi()) return null;
  if (!isCommercePublicPath(pathname)) return null;
  return <Navigate to="/" replace />;
}
