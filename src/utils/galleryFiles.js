/** هوية ملف للتمييز والتجاهل المكرر ضمن نفس الجلسة */
export function fileIdentity(f) {
  return `${f.name}-${f.size}-${f.lastModified}`;
}

/** يضيف ملفات جديدة إلى المختارة سابقاً (بدون استبدال)، حتى max، مع تخطي المكرر */
export function mergeNewGalleryFiles(prevFiles, newList, max) {
  const seen = new Set(prevFiles.map(fileIdentity));
  const merged = [...prevFiles];
  let skippedForCap = 0;
  for (const f of newList) {
    if (merged.length >= max) {
      skippedForCap += 1;
      continue;
    }
    const id = fileIdentity(f);
    if (seen.has(id)) continue;
    seen.add(id);
    merged.push(f);
  }
  return { merged, skippedForCap };
}
