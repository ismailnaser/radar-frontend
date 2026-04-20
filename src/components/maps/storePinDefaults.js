/** تلميحات دبوس الخريطة: صورة أو { emoji + لون } — الإيموجي عبر divIcon */

/** مطابقة أسماء أقسام التطبيق حرفياً (نفس migrations + شاشة التسجيل) */
const EXACT_NAME_TO_KEY = {
  'ميني مول': 'mini_mall',
  'سوبر ماركت': 'supermarket',
  'خضار و فواكه': 'greengrocer',
  ملحمة: 'butcher',
  حلويات: 'sweets',
  مطعم: 'restaurant',
  كافيه: 'cafe',
  'مساحات عمل': 'coworking',
  صيدلية: 'pharmacy',
  'أدوات منزلية': 'household',
  'أدوات كهربائية': 'electric_tools',
  'المولدات و الطاقة الشمسية': 'solar_generators',
  'المولدات والطاقة الشمسية': 'solar_generators',
  إلكترونيات: 'electronics',
  /** إملاء شائعة بدون همزة على الألف */
  الكترونيات: 'electronics',
  'أدوات بناء': 'hardware',
  'بيع بالجملة': 'wholesale',
  'تجارة الجملة': 'wholesale',
  'بيع جمله': 'wholesale',
  'ملابس نسائي': 'clothing_women',
  'ملابس رجالي': 'clothing_men',
  'ملابس أطفال': 'clothing_kids',
  أحذية: 'shoes',
  كوزماتكس: 'cosmetics',
};

function normalizeArabic(s) {
  return (s || '')
    .trim()
    .replace(/[\u0640\u200c-\u200f]/g, '')
    .replace(/[أإآٱ]/g, 'ا')
    .replace(/ى/g, 'ي')
    .replace(/ة/g, 'ه')
    .replace(/\s+/g, ' ');
}

/** نسخ طبيعية + طبيعية بعد normalizeArabic */
const EXACT_LOOKUP = (() => {
  const out = new Map();
  for (const [name, key] of Object.entries(EXACT_NAME_TO_KEY)) {
    out.set(name.trim(), key);
    out.set(normalizeArabic(name), key);
  }
  return out;
})();

function exactPinKey(name) {
  const t = (name || '').trim();
  if (!t) return null;
  return EXACT_LOOKUP.get(t) || EXACT_LOOKUP.get(normalizeArabic(t)) || null;
}

/** ترتيب القواعد من الأكثر تحديداً إلى العام */
const CATEGORY_RULES = [
  ['greengrocer', /(خضار|خضروات|خضرة|فاكهه|فاكهة|فواكه|بلح|موز|برتقال|طماطم|بندوره|خضار\s*و\s*فواكه|فواكه\s*و\s*خضار)/i],
  ['clothing_women', /(ملابس\s*نسائي|ملابس\s*نسائيه|ملابس\s*نساء|عبايه\s*نسائي|محل\s*نسائي)/i],
  ['clothing_men', /(ملابس\s*رجالي|ملابس\s*رجاليه|ملابس\s*رجال|بدله\s*رجالي|بدلة\s*رجالي)/i],
  ['clothing_kids', /(ملابس\s*أطفال|ملابس\s*اطفال|ملابس\s*ولادي|ملابس\s*البيبي)/i],
  [
    'clothing',
    /(ملابس|ملبسات|أزياء|عبايه|عباية|تيشيرت|جينز|فستان|بناطيل|محل\s*ملابس|براند)/i,
  ],
  ['shoes', /(احذيه|أحذية|شوز|كوتشي|كوتش|صندل|نعل|احذيه\s*رياضيه)/i],
  [
    'solar_generators',
    /(طاقه\s*شمسيه|طاقة\s*شمسية|الطاقة\s*الشمسية|مولدات\s*و|مولدات.*شمس|شمس.*مولد|بانل\s*شمس|بانوهات\s*شمس|انفرتر|اينفرتر|نظام\s*شمسي|solar|photovoltaic|pv\s*panel)/i,
  ],
  [
    'electric_tools',
    /(ادوات\s*كهربائيه|أدوات\s*كهربائية|معدات\s*كهربائيه|أدوات\s*الكهرباء)/i,
  ],
  [
    'electronics',
    /(الكترونيات|إلكترونيات|الكترون|إلكترون|موبايل|جوال|هاتف|كمبيوتر|لابتوب|كميرا|كاميرا|شاحن|سماعات|كهربائ)/i,
  ],
  ['furniture', /(اثاث|أثاث|مفروشات|كنب|سرير|خزائن|مكاتب)/i],
  [
    'hardware',
    /(عدد|عدّات|ادوات\s*يدويه|أدوات\s*يدوية|ادوات\s*بناء|أدوات\s*بناء|مواد\s*بناء|سباكه|كهربائي|نجار|حداد|قرميد|اسمنت|إسمنت|دهان|طلاء|بويه)/i,
  ],
  ['cosmetics', /(مكياج|عطور|صيدلانيه\s*تجميل|تجميل|عنايه|عناية|كريمات|مستحضرات|كوزماتكس|كوسمتيك|كوسماتكس)/i],
  ['pharmacy', /(صيدليه|صيدلية|دواء|ادويه|أدوية|روشته|روشتة)/i],
  ['butcher', /(ملحمه|ملحمة|جزار|جزاره|لحوم|لحمه|لحمة|دواجن|مجمدات\s*لحوم)/i],
  ['fish', /(سمك|بحري|بحريات|جمبري|شريده|شريدة|سوشي)/i],
  ['bakery', /(مخبز|مخبوزات|معجنات|فطاير|كيك|حلويات\s*شرقيه|كعك)/i],
  ['dairy', /(البان|ألبان|الألبان|حليب|اجبان|أجبان|اجبنه|أجبان|زبادي|لبنه)/i],
  ['cafe', /(قهوه|قهوة|كافيه|كافية|مقهى|نسكافيه|شاي|bubble)/i],
  ['restaurant', /(مطعم|مطاعم|شورما|شاورما|فلافل|فلافيل|برغر|بيتزا|وجبات|مأكولات)/i],
  ['sweets', /(حلويات|شوكولاته|شوكولاتة|بسكويت|سكريات|حلاوه|حلاوة)/i],
  ['spices', /(بهارات|توابل|عطاره|عطارة|زعتر|زارة\s*بهارات)/i],
  ['flowers', /(ورد|ازهار|نباتات|نبات|ياسمين|بائع\s*ورد|محل\s*ورد)/i],
  ['books', /(كتب|قرطاسيه|قرطاسية|أدوات\s*مدرسيه|أدوات\s*مدرسية|مكتبه|مكتبة)/i],
  ['toys', /(العاب|ألعاب|العاب\s*اطفال|ألعاب\s*أطفال|دمي|دمى)/i],
  ['wholesale', /(بيع\s*بالجمله|بيع\s*بالجملة|تجاره\s*جمله|تجارة\s*جملة|جمله|جملة)/i],
  ['sports', /(رياضه|رياضية|رياضي|جم|جيم|معدات\s*رياضيه|معدات\s*رياضية|كرة)/i],
  ['pets', /(حيوانات\s*اليفه|حيوانات\s*أليفة|قطط|كلاب|طيور|اسماك\s*زينه|أحواض)/i],
  ['jewelry', /(ذهب|فضه|مجوهرات|اكسسوار|إكسسوار|ساعات\s*ذهب)/i],
  ['auto', /(سيارات|سياره|بطاريات|زيوت|زيت\s*سيارات|قطع\s*غيار|ميكانيك)/i],
  ['cleaning', /(منظفات|تنظيف|مكانس|مساحات|كلور|صابون\s*غسيل)/i],
  ['gifts', /(هدايا|تحف|ديكورات|سفر\s*مائده|سفرة)/i],
  ['household', /(ادوات\s*منزليه|أدوات\s*منزلية|بلاستيك|تخزين|اواني|أواني|طناجر)/i],
  ['coworking', /(مساحات\s*عمل|كوركنج|coworking|مكتب\s*مشترك|شركه\s*ناشئه)/i],
  ['mini_mall', /(ميني\s*مول|مول\s*صغير|mini\s*mall)/i],
  [
    'supermarket',
    /(سوبر|سوبير|ماركت|بقال|بقالة|هايبر|سوق\s*مركزي|تموين|جمله|جملة)/i,
  ],
];

const PIN_META = {
  greengrocer: { emoji: '🥬', bg: '#43a047' },
  /** ملابس عامة (بدون تحديد نسائي/رجالي/أطفال في النص) */
  clothing: { emoji: '👕', bg: '#3949ab' },
  clothing_women: { emoji: '👗', bg: '#c2185b' },
  clothing_men: { emoji: '👔', bg: '#283593' },
  clothing_kids: { emoji: '🧒', bg: '#ef6c00' },
  shoes: { emoji: '👟', bg: '#6d4c41' },
  electronics: { emoji: '📱', bg: '#1e88e5' },
  furniture: { emoji: '🪑', bg: '#8d6e63' },
  hardware: { emoji: '🔨', bg: '#78909c' },
  cosmetics: { emoji: '💄', bg: '#ec407a' },
  pharmacy: { emoji: '💊', bg: '#1565c0' },
  butcher: { emoji: '🥩', bg: '#c62828' },
  fish: { emoji: '🐟', bg: '#0277bd' },
  bakery: { emoji: '🥐', bg: '#ef6c00' },
  dairy: { emoji: '🥛', bg: '#5c6bc0' },
  cafe: { emoji: '☕', bg: '#4e342e' },
  restaurant: { emoji: '🍴', bg: '#d84315' },
  sweets: { emoji: '🍰', bg: '#ad1457' },
  spices: { emoji: '🌶', bg: '#e65100' },
  flowers: { emoji: '💐', bg: '#2e7d32' },
  books: { emoji: '📚', bg: '#5e35b1' },
  toys: { emoji: '🧸', bg: '#f9a825' },
  wholesale: { emoji: '📦', bg: '#455a64' },
  sports: { emoji: '⚽', bg: '#00897b' },
  pets: { emoji: '🐾', bg: '#6a1b9a' },
  jewelry: { emoji: '💍', bg: '#ffd54f' },
  auto: { emoji: '🚗', bg: '#37474f' },
  cleaning: { emoji: '🧹', bg: '#26a69a' },
  gifts: { emoji: '🎁', bg: '#c2185b' },
  household: { emoji: '🏠', bg: '#7e57c2' },
  supermarket: { emoji: '🛒', bg: '#2e7d32' },
  mini_mall: { emoji: '🏬', bg: '#6a1b9a' },
  coworking: { emoji: '💼', bg: '#455a64' },
  solar_generators: { emoji: '☀️', bg: '#f57c00' },
  electric_tools: { emoji: '🔌', bg: '#607d8b' },
  generic: { emoji: '🏪', bg: '#fbc02d' },
};

export function matchCategoryKey(text) {
  const raw = (text || '').trim();
  if (!raw) return null;
  const exact = exactPinKey(raw);
  if (exact) return exact;
  for (const [key, re] of CATEGORY_RULES) {
    if (re.test(raw)) return key;
  }
  const norm = normalizeArabic(raw);
  if (norm && norm !== raw) {
    const ex2 = exactPinKey(norm);
    if (ex2) return ex2;
    for (const [key, re] of CATEGORY_RULES) {
      if (re.test(norm)) return key;
    }
  }
  return null;
}

/** إصلاح: بعض الـ API تُرجع category بدون category_name */
function categoryLabelFromList(store, categories) {
  if (!categories?.length || store?.category == null) return null;
  const cid = Number(store.category);
  if (!Number.isFinite(cid)) return null;
  const row = categories.find((c) => Number(c.id) === cid);
  return row?.name || null;
}

/**
 * @param {object} store
 * @param {{ id: number, name?: string }[] | null | undefined} categories من /stores/categories/
 */
function resolvePinKey(store, categories) {
  const seen = new Set();
  const tryFields = [];

  const push = (v) => {
    const t = (v && String(v).trim()) || '';
    if (t && !seen.has(t)) {
      seen.add(t);
      tryFields.push(t);
    }
  };

  push(store?.category_name);
  push(categoryLabelFromList(store, categories));
  push(store?.store_name);
  push(store?.description);

  for (const field of tryFields) {
    const key = matchCategoryKey(field);
    if (key) return key;
  }
  return 'generic';
}

/**
 * @param {object} store
 * @param {{ id: number, name?: string }[] | null | undefined} categories
 * @returns {{ type: 'image', url: string } | { type: 'emoji', emoji: string, bg: string }}
 */
export function getStorePinDisplay(store, categories) {
  const logo = store?.logo;
  const catImg = store?.category_image;
  if (logo) return { type: 'image', url: logo };
  if (catImg) return { type: 'image', url: catImg };
  const key = resolvePinKey(store, categories);
  return { type: 'emoji', ...PIN_META[key] };
}

/**
 * نفس أيقونة دبوس الخريطة (عند غياب صورة المتجر) لاسم القسم — للسايدبار وصفحة الأقسام.
 * @returns {{ emoji: string, bg: string }}
 */
export function getCategoryPinMeta(categoryName) {
  const key = resolvePinKey(
    { category_name: categoryName, category: null, store_name: '', description: '' },
    null
  );
  return PIN_META[key] || PIN_META.generic;
}
