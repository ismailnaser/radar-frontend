/** قائمة عناوين صور المنتج أو الإعلان للعرض (مع توافق الحقل القديم `image`). */
export function visualImageUrls(entity) {
  if (!entity) return [];
  if (Array.isArray(entity.images) && entity.images.length > 0) {
    return entity.images.filter(Boolean);
  }
  // توافق: بعض الـ APIs تُرجع gallery_images كقائمة كائنات {image/url/...}
  if (Array.isArray(entity.gallery_images) && entity.gallery_images.length > 0) {
    const out = [];
    for (const g of entity.gallery_images) {
      if (!g) continue;
      if (typeof g === 'string') {
        if (g) out.push(g);
        continue;
      }
      const u = g.url || g.image || g.src;
      if (u) out.push(u);
    }
    if (out.length > 0) return out;
  }
  // توافق: قد تكون الصور ضمن تفاصيل المنتج
  if (entity.product_details) {
    const nested = visualImageUrls(entity.product_details);
    if (nested.length > 0) return nested;
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
