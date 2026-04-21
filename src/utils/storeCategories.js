export function storeCategoryIds(store) {
  const ids = new Set();
  const primary = Number(store?.category);
  if (Number.isFinite(primary)) ids.add(primary);
  const multi = Array.isArray(store?.categories) ? store.categories : [];
  for (const c of multi) {
    const n = Number(c);
    if (Number.isFinite(n)) ids.add(n);
  }
  return Array.from(ids);
}

export function storeMatchesAnyCategory(store, selectedIds = []) {
  if (!Array.isArray(selectedIds) || selectedIds.length === 0) return true;
  const selected = new Set(selectedIds.map((x) => Number(x)).filter((x) => Number.isFinite(x)));
  if (selected.size === 0) return true;
  const ids = storeCategoryIds(store);
  return ids.some((id) => selected.has(id));
}

