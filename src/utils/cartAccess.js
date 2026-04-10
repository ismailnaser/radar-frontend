/**
 * السلال: عضو مسجّل دخول وليس زائراً، من نوع متسوّق أو تاجر أو مدير.
 * الزائر (isGuest) لا يُسمح له بالسلات حتى ولو وُجد token.
 */
export function canUseShoppingCarts() {
  if (!localStorage.getItem('token')) return false;
  if (localStorage.getItem('isGuest') === 'true') return false;
  const t = localStorage.getItem('user_type') || 'shopper';
  return t === 'shopper' || t === 'merchant' || t === 'admin';
}
