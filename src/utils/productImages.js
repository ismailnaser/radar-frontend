/** قائمة عناوين صور المنتج أو الإعلان للعرض (مع توافق الحقل القديم `image`). */
export function visualImageUrls(entity) {
  if (!entity) return [];
  if (Array.isArray(entity.images) && entity.images.length > 0) {
    return entity.images.filter(Boolean);
  }
  if (entity.image) return [entity.image];
  return [];
}

/** صور سطر السلة: معرض من الخادم أو تفاصيل المنتج. */
export function cartItemImageUrls(item) {
  if (!item) return [];
  if (Array.isArray(item.line_images) && item.line_images.length > 0) {
    return item.line_images.filter(Boolean);
  }
  return visualImageUrls(item.product_details);
}
