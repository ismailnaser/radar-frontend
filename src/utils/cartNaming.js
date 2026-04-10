/** يطابق القيمة الافتراضية عند إنشاء السلة من الخادم */
export const DEFAULT_CART_NAME = 'سلة المشتريات';

/**
 * يضمن اسم السلة غير الافتراضي قبل إضافة أول عنصر (حسب طلب المنتج).
 * @returns السلة بعد التحديث، أو null عند الإلغاء/رفض التسمية
 */
export async function ensureCartNamed(cart, { showPrompt, showAlert, updateCart }) {
  if (!cart?.id) return null;
  const raw = (cart.name || '').trim();
  if (raw && raw !== DEFAULT_CART_NAME) {
    return cart;
  }
  const val = await showPrompt(
    'اختر اسماً مميزاً لهذه السلة قبل إضافة منتجات (مثال: مشتريات الأسبوع، طلب من محل معيّن).',
    raw || '',
    'اسم السلة',
  );
  if (val == null) return null;
  const name = String(val).trim();
  if (!name) {
    await showAlert('لا يمكن الإضافة دون تسمية السلة. اكتب اسماً يميّزها لديك.', 'تنبيه');
    return null;
  }
  await updateCart(cart.id, { name });
  return { ...cart, name };
}
