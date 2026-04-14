/**
 * Vite ينسخ محتويات `public/` إلى جذر `dist/` بعد البناء.
 * إن وُجد `public/index.html` فسيُستبدل ملف SPA الرئيسي ويظهر للمستخدم
 * HTML ثابت (مثلاً صفحة تحذير) بدل تطبيق React.
 */
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const bad = path.join(__dirname, '..', 'public', 'index.html')

if (fs.existsSync(bad)) {
  console.error(
    [
      'خطأ: يوجد الملف frontend/public/index.html',
      'احذفه: Vite ينسخه فوق dist/index.html فيكسر تشغيل التطبيق.',
      'استخدم فقط frontend/index.html (جذر الفرونت) كقالب Vite.',
    ].join('\n'),
  )
  process.exit(1)
}
