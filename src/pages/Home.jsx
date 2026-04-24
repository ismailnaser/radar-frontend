import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { Link, useSearchParams, useNavigate, useLocation } from 'react-router-dom';
import {
  Menu,
  ChevronLeft,
  ShoppingCart,
  Heart,
  Store,
  Coffee,
  UtensilsCrossed,
  Cookie,
  Cross,
  LayoutGrid,
  Map,
  Shirt,
  Sparkles,
  Gem,
  Flower2,
  BookOpen,
  Laptop,
  Smartphone,
  Home as HomeIcon,
  Wrench,
  Dumbbell,
  Car,
  Bike,
  Camera,
  Gift,
  PawPrint,
  IceCream,
  Gamepad2,
  Glasses,
  Plane,
  Fish,
  Paintbrush,
  Truck,
  Building2,
  Beef,
  Drumstick,
  CupSoda,
  Milk,
  Nut,
  Wheat,
  Sprout,
  GraduationCap,
  School,
  Landmark,
  Hotel,
  Church,
  MoonStar,
  HeartHandshake,
  Smile,
  HeartPulse,
  Printer,
  Flame,
  Droplets,
  Fuel,
  HardHat,
  Hammer,
  Scale,
  KeyRound,
  Stethoscope,
  Warehouse,
  Candy,
  Croissant,
  PlugZap,
  Briefcase,
  Ribbon,
  Baby,
  Footprints,
  Soup,
  Armchair,
  Brush,
  Tag,
  MapPin,
  Sun,
} from 'lucide-react';
import MainLayout from '../components/MainLayout';
import { HomeBackGuard } from '../components/HomeBackGuard';
import {
  getCategories,
  getCommunityCategories,
  getCommunityPoints,
  getNearbyStores,
  getOffers,
  getPublicProducts,
  getCarts,
  addToCart,
  createCart,
  addFavorite,
  getFavorites,
  removeFavorite,
  updateCart,
} from '../api/data';
import { useAlert } from '../components/AlertProvider';
import { ensureCartNamed } from '../utils/cartNaming';
import { getStorePinDisplay, matchCategoryKey } from '../components/maps/storePinDefaults';
import { useMapExplore } from '../context/MapExploreContext';
import ImageCarousel from '../components/ImageCarousel';
import { visualImageUrls } from '../utils/productImages';
import { storeHasWeeklyHoursSchedule } from '../utils/storeHours';
// اختيار السلة عبر النافذة المنبثقة العامة (CustomModal)
import { formatApiError } from '../utils/apiErrors';
import { canUseShoppingCarts } from '../utils/cartAccess';
import { communityPointHasMapCoords, communityPointLatLng } from '../utils/communityPointCoords';
import { storeCategoryLabel, storeMatchesAnyCategory } from '../utils/storeCategories';
import FiltersDropdown from '../components/ui/FiltersDropdown';

function haversineKm(a, b) {
  const R = 6371;
  const toRad = (v) => (v * Math.PI) / 180;
  const dLat = toRad(b[0] - a[0]);
  const dLng = toRad(b[1] - a[1]);
  const lat1 = toRad(a[0]);
  const lat2 = toRad(b[0]);
  const x = Math.sin(dLat / 2) ** 2 + Math.cos(lat1) * Math.cos(lat2) * Math.sin(dLng / 2) ** 2;
  return 2 * R * Math.asin(Math.sqrt(x));
}

/** إحداثيات صالحة للعرض على الخريطة (تستبعد القيم القريبة من 0،0 الخاطئة) */
function hasMappableCoords(s) {
  const lat = Number(s.latitude);
  const lng = Number(s.longitude);
  if (!Number.isFinite(lat) || !Number.isFinite(lng)) return false;
  if (Math.abs(lat) < 0.25 && Math.abs(lng) < 0.25) return false;
  return true;
}

function parseStoreCategoryId(search) {
  try {
    const raw = new URLSearchParams(search).get('category');
    if (raw == null || raw === '') return null;
    const first = String(raw).split(',')[0];
    const n = Number(first);
    return Number.isFinite(n) ? n : null;
  } catch {
    return null;
  }
}

function parseCsvNumbers(raw) {
  if (raw == null) return [];
  const s = String(raw).trim();
  if (!s) return [];
  const out = [];
  for (const part of s.split(',')) {
    const n = Number(String(part).trim());
    if (Number.isFinite(n)) out.push(n);
  }
  return Array.from(new Set(out));
}

function parseFilterMode(search) {
  try {
    return new URLSearchParams(search).get('filter') === 'community' ? 'community' : 'stores';
  } catch {
    return 'stores';
  }
}

function parseCommunityCategoryId(search) {
  try {
    const raw = new URLSearchParams(search).get('cc');
    if (raw == null || raw === '') return null;
    const n = Number(raw);
    return Number.isFinite(n) ? n : null;
  } catch {
    return null;
  }
}

/** تطبيع بسيط لأسماء التصنيفات العربية لتحسين التطابق */
function normalizeCategoryLabel(raw) {
  return (raw || '')
    .trim()
    .toLowerCase()
    .replace(/[أإآٱ]/g, 'ا')
    .replace(/ى/g, 'ي')
    .replace(/ة/g, 'ه')
    .replace(/ؤ/g, 'و')
    .replace(/ئ/g, 'ي')
    .replace(/\s+/g, ' ');
}

/**
 * قواعد بالترتيب: الأكثر تحديداً أولاً. أيقونة ولون دائرة التصنيف.
 */
const CATEGORY_ICON_RULES = [
  { re: /مسجد|جامع|مصلى|mosque|islamic center/i, Icon: MoonStar, tone: '#1b5e20' },
  { re: /كنيس|كنيسة|church|christian/i, Icon: Church, tone: '#3949ab' },
  { re: /جمعيه خيريه|جمعية خيرية|خيريه|خيرية|تطوع|ngo|charity|تكافل|أيتام/i, Icon: HeartHandshake, tone: '#c2185b' },
  { re: /مدرسه|مدرسة|روضه|روضة|حضانه|حضانة|ابتدائ|اعداد|إعداد|ثانوي|school|kindergarten/i, Icon: School, tone: '#283593' },
  { re: /جامعه|جامعة|university|كليه|كلية/i, Icon: GraduationCap, tone: '#4527a0' },
  { re: /محام|قانون|legal|شرعي|عدل|نوتر|محكمه|محكمة|lawyer/i, Icon: Scale, tone: '#37474f' },
  { re: /بلديه|بلدية|حكوم|وزاره|وزارة|دائرة|مركز خدمات|بلدي|municipal/i, Icon: Landmark, tone: '#455a64' },
  { re: /بنك|مصرف|صراف|مالي|bank|atm|تحويلات ماليه|تحويلات مالية/i, Icon: Landmark, tone: '#1565c0' },
  { re: /فندق|نزل|hotel|hostel|ضيافه|ضيافة/i, Icon: Hotel, tone: '#6a1b9a' },
  { re: /عقار|عقارات|وساطه|وساطة|real\s*estate|أراضي|املاك|أملاك/i, Icon: Building2, tone: '#5d4037' },
  { re: /اسنان|أسنان|تقويم|مخدر|تجميل اسنان|dentist|dental|orthodont/i, Icon: Smile, tone: '#00897b' },
  { re: /بيطر|بيطريه|بيطرية|عياده بيط|عيادة بيط|حيوانات اهليه|حيوانات أهلية|veterinar/i, Icon: PawPrint, tone: '#795548' },
  { re: /صيدل|دواء|pharm|روشته|روشتة|dispensary|صيدليات/i, Icon: Cross, tone: '#c62828' },
  { re: /عياده|عيادة|طبيب|دكتور|مستشفى|مستوصف|تحاليل طب|مختبر طب|طوارئ طب|clinic|emergency|ممرض/i, Icon: HeartPulse, tone: '#c62828' },
  { re: /اسعاف|إسعاف|هيئه اسعاف|هيئة إسعاف|paramedic/i, Icon: Stethoscope, tone: '#ad1457' },
  { re: /خضار|فواكه|فاكهه|فاكهة|خضروات|greengrocer|produce|فواكه وخضار/i, Icon: Sprout, tone: '#2e7d32' },
  { re: /سمك|اسماك|أسماك|بحري|ماكولات بحر|مأكولات بحر|seafood|fish shop|fish store/i, Icon: Fish, tone: '#0277bd' },
  { re: /لحوم|جزاره|جزارة|جزار|لحم|butcher|لحام|لحوم حمراء/i, Icon: Beef, tone: '#6d4c41' },
  { re: /دواجن|دجاج|فراخ|ديك رومي|poultry|دواجن طازجه|دواجن طازجة/i, Icon: Drumstick, tone: '#e65100' },
  { re: /البان|ألبان|اجبان|أجبان|حليب|جبن|dairy|cheese|البان واجبان|ألبان وأجبان/i, Icon: Milk, tone: '#5d4037' },
  { re: /مكسرات|مكسره|مكسرة|فستق|لوز|سكب|كاجو|nuts/i, Icon: Nut, tone: '#795548' },
  { re: /قمح|حبوب|اعلاف|أعلاف|علف|wheat|grain|مطحنه|مطحنة/i, Icon: Wheat, tone: '#f9a825' },
  { re: /وقود|بنزين|ديزل|محطه وقود|محطة وقود|fuel|petrol|بترول|غاز سيارات/i, Icon: Fuel, tone: '#263238' },
  {
    re: /طاقه\s*شمسيه|طاقة\s*شمسية|الطاقة\s*الشمسية|مولدات\s*و|مولدات.*شمس|شمس.*مولد|بانل\s*شمس|انفرتر|solar|photovoltaic|pv\s*panel/i,
    Icon: Sun,
    tone: '#f57c00',
  },
  { re: /اطارات|إطارات|بنشري|بنشر|اطار|إطار|tyre|tire|patch/i, Icon: Car, tone: '#37474f' },
  { re: /غسيل|مغسله|مغسلة|كوي|تنظيف جاف|laundry|dry\s*clean|مكوايه|مكواية/i, Icon: Droplets, tone: '#0277bd' },
  { re: /طباعه|طباعة|مطبعه|مطبعة|نسخ|print|copy\s*center/i, Icon: Printer, tone: '#424242' },
  { re: /ارجيله|أرجيلة|معسل|شيشه|شيشة|hookah|narghile/i, Icon: Flame, tone: '#bf360c' },
  { re: /عصير|عصائر|مشروبات غاز|برتقال طرش|soft\s*drinks|مشروبات بارده|مشروبات باردة/i, Icon: CupSoda, tone: '#ef6c00' },
  { re: /ايس كريم|آيس كريم|بوظه|بوظة|ايس|آيس|ice\s*cream|جلاطي|gelato/i, Icon: IceCream, tone: '#ec407a' },
  { re: /مفاتيح|اقفال|أقفال|اقفل|أقفل|locksmith|key\s*mak/i, Icon: KeyRound, tone: '#5d4037' },
  { re: /مطعم|مأكول|اكل|أكل|restaurant|مشويات|سفره|سفرة|وجبات|فاست فود|fast\s*food|برجر|بيتزا|شاورما|فلافل|كنفه|ارز|أرز بال|بوفيه مفتوح|مندي|كبسه|كبسة|مطاعم/i, Icon: UtensilsCrossed, tone: '#e65100' },
  { re: /كافيه|كافي|قهوه|قهوة|cafe|coffee|مقهى|قهوجي/i, Icon: Coffee, tone: '#5d4037' },
  { re: /مخبز|حلو|حلويات|معجن|ساندوتش|سندوتش|كيك|كعك|معكروت|مخبوزات|pastry|donut|دونات/i, Icon: Cookie, tone: '#f9a825' },
  { re: /سوبر|هايبر|ماركت|بقاله|بقالة|تموين|اقتصادي|grocery|minimarket|ماركت صغير/i, Icon: ShoppingCart, tone: '#2e7d32' },
  { re: /اقمشه|أقمشة|قماش|مزاين|خياط|خياطه|خياطة|تفصيل|زي موحد/i, Icon: Shirt, tone: '#ad1457' },
  { re: /ملابس|أزياء|موضه|موضة|نسائي|رجالي|احذيه|أحذيه|أحذية|حقائب|جلديات|عبايه|عباية|فاشن|fashion|boutique/i, Icon: Shirt, tone: '#ad1457' },
  { re: /لابتوب|كمبيوتر مكتبي|كمبيوتر|حاسوب|كمبيتور|لاب توب|pc|gaming\s*pc|كمبيوترات/i, Icon: Laptop, tone: '#00695c' },
  { re: /موبايل|موبيل|هاتف|اتصالات|اتصال|جوال|mobile|phone|smartphone|شاحن|كابلات/i, Icon: Smartphone, tone: '#00695c' },
  { re: /واي فاي|wifi|انترنت|إنترنت|net|راوتر/i, Icon: Smartphone, tone: '#0277bd' },
  { re: /كتب|قرطاس|مكتبه|مكتبة|ادوات كتابيه|أدوات كتابية|دفتر|أقلام|stationery/i, Icon: BookOpen, tone: '#3949ab' },
  { re: /عطور|تجميل|مكياج|اظافر|أظافر|صالون|حلاق|حلاقه|حلاقة|barber|كوافير|cosmetic|beauty/i, Icon: Sparkles, tone: '#d81b60' },
  { re: /ذهب|مجوهر|مجوهرات|فضه|فضة|ساعه يد|ساعة يد|watch\s*shop/i, Icon: Gem, tone: '#fbc02d' },
  { re: /زهور|ورود|نبات|حديقه|حديقة|مزهريه|مزهرية|flower|ورده|وردة/i, Icon: Flower2, tone: '#2e7d32' },
  { re: /رياضه|رياضة|sport|لياقه|لياقة|جيم|صاله رياضيه|صالة رياضية|protein|مكملات غذائيه|مكملات غذائية/i, Icon: Dumbbell, tone: '#ef6c00' },
  { re: /العاب|ألعاب|toys|playstation|دمى|دميه|دمية|games/i, Icon: Gamepad2, tone: '#7b1fa2' },
  { re: /حيوان|اليف|أليف|pet|قطه|قطة|كلب|بيطر|veterinar|عياده بيطريه|عيادة بيطرية/i, Icon: PawPrint, tone: '#795548' },
  { re: /اثاث|أثاث|مفروشات|سجاد|كنب|ديكور|اناره|إنارة|مفروش|furniture|lamps|اضاءه|إضاءة/i, Icon: HomeIcon, tone: '#5d4037' },
  { re: /دهان|طلاء|بويه|بوية|دهانات|paint\s*shop|الوان|ألوان/i, Icon: Paintbrush, tone: '#8e24aa' },
  { re: /بناء|مقاول|انشاءات|إنشاءات|مقاولين|خرسان|هندسه|هندسة معمار|هندسة معماري/i, Icon: HardHat, tone: '#5d4037' },
  { re: /نجار|نجاره|نجارة|الخشب|الومنيوم زجاج|ألمنيوم|حداد|حداده|حدادة|حدادين|خشبيات/i, Icon: Hammer, tone: '#6d4c41' },
  { re: /كهرباء|سباك|سباكه|سباكة|تكييف|صيانه|صيانة|لحام|صيانة عامه|صيانة عامة|أدوات صناعيه|أدوات صناعية|عده|عدة/i, Icon: Wrench, tone: '#607d8b' },
  { re: /سفريات|سياحه|سياحة|travel|طيران محلي|wings tour/i, Icon: Plane, tone: '#0277bd' },
  { re: /شحن|توصيل|نقل بضائع|delivery|لوجست|logistics|ديلفري/i, Icon: Truck, tone: '#33691e' },
  { re: /هديا|هدايا|ورود و هدايا|gift/i, Icon: Gift, tone: '#d84315' },
  { re: /تصوير|فوتو|استوديو|photo|كاميرا/i, Icon: Camera, tone: '#ad1457' },
  { re: /نظارات|بصريات|optical|عدسات لاصقه|عدسات لاصقة/i, Icon: Glasses, tone: '#3f51b5' },
  { re: /دراجه|دراجة|سيكل|bike|bicycle/i, Icon: Bike, tone: '#006064' },
  { re: /سيارات|ورشه|ورشة|ميكانيك|كراج|غسيل سيارات|car\s*wash|ورشه سيارات|ورشة سيارات/i, Icon: Car, tone: '#37474f' },
  { re: /مشتل|مشاتل|زراعه|زراعة|تربه|تربة|مزارع|agricultur|مبيدات زراعيه|مبيدات زراعية/i, Icon: Sprout, tone: '#558b2f' },
];

/** أيقونات شريط «خدمات مجتمعية» — حسب slug ثابت من الـ API */
const COMMUNITY_SLUG_BROWSE_VISUAL = {
  medical: { Icon: Stethoscope, tone: '#c62828' },
  education: { Icon: GraduationCap, tone: '#4527a0' },
  food: { Icon: Soup, tone: '#e65100' },
  water: { Icon: Droplets, tone: '#0277bd' },
  institution: { Icon: Landmark, tone: '#5d4037' },
};

/**
 * أيقونات تفاصيل لكل مفتاح قسم (نفس منطق دبابيس الخريطة) — بدون تكرار بين الأقسام المعروفة.
 */
const PIN_KEY_BROWSE_VISUAL = {
  mini_mall: { Icon: Warehouse, tone: '#6a1b9a' },
  supermarket: { Icon: ShoppingCart, tone: '#2e7d32' },
  wholesale: { Icon: Warehouse, tone: '#455a64' },
  greengrocer: { Icon: Sprout, tone: '#43a047' },
  butcher: { Icon: Beef, tone: '#c62828' },
  fish: { Icon: Fish, tone: '#0277bd' },
  dairy: { Icon: Milk, tone: '#5c6bc0' },
  bakery: { Icon: Croissant, tone: '#ef6c00' },
  sweets: { Icon: Candy, tone: '#ad1457' },
  spices: { Icon: Flame, tone: '#e65100' },
  restaurant: { Icon: UtensilsCrossed, tone: '#d84315' },
  cafe: { Icon: Coffee, tone: '#4e342e' },
  coworking: { Icon: Briefcase, tone: '#455a64' },
  solar_generators: { Icon: Sun, tone: '#f57c00' },
  pharmacy: { Icon: Cross, tone: '#1565c0' },
  cosmetics: { Icon: Sparkles, tone: '#ec407a' },
  shoes: { Icon: Footprints, tone: '#6d4c41' },
  clothing: { Icon: Tag, tone: '#3949ab' },
  clothing_women: { Icon: Ribbon, tone: '#c2185b' },
  clothing_men: { Icon: Shirt, tone: '#283593' },
  clothing_kids: { Icon: Baby, tone: '#ef6c00' },
  electronics: { Icon: Laptop, tone: '#1e88e5' },
  electric_tools: { Icon: PlugZap, tone: '#607d8b' },
  household: { Icon: HomeIcon, tone: '#7e57c2' },
  furniture: { Icon: Armchair, tone: '#8d6e63' },
  hardware: { Icon: Hammer, tone: '#78909c' },
  books: { Icon: BookOpen, tone: '#5e35b1' },
  toys: { Icon: Gamepad2, tone: '#f9a825' },
  sports: { Icon: Dumbbell, tone: '#00897b' },
  pets: { Icon: PawPrint, tone: '#6a1b9a' },
  jewelry: { Icon: Gem, tone: '#ffd54f' },
  auto: { Icon: Car, tone: '#37474f' },
  cleaning: { Icon: Brush, tone: '#26a69a' },
  gifts: { Icon: Gift, tone: '#c2185b' },
  flowers: { Icon: Flower2, tone: '#2e7d32' },
  generic: { Icon: Store, tone: '#fbc02d' },
};

function browseCategoryVisual(name, communitySlug = null) {
  if (communitySlug && COMMUNITY_SLUG_BROWSE_VISUAL[communitySlug]) {
    return COMMUNITY_SLUG_BROWSE_VISUAL[communitySlug];
  }
  const pinKey = matchCategoryKey(name);
  if (pinKey && PIN_KEY_BROWSE_VISUAL[pinKey]) {
    return PIN_KEY_BROWSE_VISUAL[pinKey];
  }
  const n = normalizeCategoryLabel(name);
  if (!n) return { Icon: Store, tone: 'var(--secondary)' };
  for (const rule of CATEGORY_ICON_RULES) {
    if (rule.re.test(n)) return { Icon: rule.Icon, tone: rule.tone };
  }
  return { Icon: Store, tone: 'var(--secondary)' };
}

/** خلفيات باستيل هادئة لبطاقة التصنيف من لون السمة */
function categoryTileSurface(tone) {
  const s = String(tone || '');
  if (!s || s.startsWith('var(')) {
    return {
      background: 'rgba(26, 29, 38, 0.06)',
      borderColor: 'rgba(26, 29, 38, 0.12)',
    };
  }
  const hex = s.replace('#', '');
  if (hex.length !== 6 || !/^[0-9a-fA-F]+$/.test(hex)) {
    return {
      background: 'var(--primary-light)',
      borderColor: 'rgba(255, 204, 0, 0.35)',
    };
  }
  const r = parseInt(hex.slice(0, 2), 16);
  const g = parseInt(hex.slice(2, 4), 16);
  const b = parseInt(hex.slice(4, 6), 16);
  return {
    background: `rgba(${r}, ${g}, ${b}, 0.15)`,
    borderColor: `rgba(${r}, ${g}, ${b}, 0.28)`,
  };
}

function sponsoredOfferBadge(ad) {
  const catalogRaw = ad.product_details != null ? Number(ad.product_details.price) : NaN;
  const offerRaw = Number(ad.product_price);
  if (Number.isFinite(catalogRaw) && Number.isFinite(offerRaw) && catalogRaw > offerRaw && catalogRaw > 0) {
    const pct = Math.round((1 - offerRaw / catalogRaw) * 100);
    if (pct > 0 && pct < 100) {
      return `تخفيض ${pct}%`;
    }
  }
  const t = (ad.title || '').trim();
  if (/buy\s*1|bogo|1\s*\+\s*1/i.test(t)) return 'اشترِ واحد واحصل على الآخر';
  if ((ad.title || '').length <= 28 && (ad.title || '').trim()) return (ad.title || '').trim();
  return 'عرض مميز';
}

const SPONSORED_PER_PAGE = 6;
/** شبكة الإعلانات الممولة في الرئيسية (مثل صفحة المتاجر) */
const STORES_PER_PAGE_DESKTOP = 12;
const STORES_PER_PAGE_MOBILE = 8;
const SPONSORED_ROTATE_MS = 5 * 60 * 1000;
const DEMO_SPONSORED_ADS = [
  {
    id: 'demo-sponsored-1',
    is_demo: true,
    title: 'عرض تجريبي: قهوة + حلى بسعر خاص',
    store_name: 'متجر تجريبي 1',
    store_category_name: 'مأكولات',
    product_price: 18.5,
    image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=900&q=80',
    store: null,
  },
  {
    id: 'demo-sponsored-2',
    is_demo: true,
    title: 'عرض تجريبي: خصم 20% على أدوات المنزل',
    store_name: 'متجر تجريبي 2',
    store_category_name: 'منزل',
    product_price: 74.0,
    image: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=900&q=80',
    store: null,
  },
  {
    id: 'demo-sponsored-3',
    is_demo: true,
    title: 'عرض تجريبي: تشكيلة ملابس الموسم',
    store_name: 'متجر تجريبي 3',
    store_category_name: 'أزياء',
    product_price: 129.0,
    image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=900&q=80',
    store: null,
  },
  {
    id: 'demo-sponsored-4',
    is_demo: true,
    title: 'عرض تجريبي: عطور أصلية بخصم نهاية الأسبوع',
    store_name: 'متجر تجريبي 4',
    store_category_name: 'تجميل',
    product_price: 59.0,
    image: 'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=900&q=80',
    store: null,
  },
  {
    id: 'demo-sponsored-5',
    is_demo: true,
    title: 'عرض تجريبي: أجهزة كهربائية منزلية',
    store_name: 'متجر تجريبي 5',
    store_category_name: 'إلكترونيات',
    product_price: 199.0,
    image: 'https://images.unsplash.com/photo-1580910051074-3eb694886505?auto=format&fit=crop&w=900&q=80',
    store: null,
  },
  {
    id: 'demo-sponsored-6',
    is_demo: true,
    title: 'عرض تجريبي: أدوات مطبخ عملية',
    store_name: 'متجر تجريبي 6',
    store_category_name: 'منزل',
    product_price: 42.0,
    image: 'https://images.unsplash.com/photo-1506368083636-6defb67639a7?auto=format&fit=crop&w=900&q=80',
    store: null,
  },
  {
    id: 'demo-sponsored-7',
    is_demo: true,
    title: 'عرض تجريبي: مستلزمات أطفال',
    store_name: 'متجر تجريبي 7',
    store_category_name: 'أطفال',
    product_price: 35.0,
    image: 'https://images.unsplash.com/photo-1515488764276-beab7607c1e6?auto=format&fit=crop&w=900&q=80',
    store: null,
  },
  {
    id: 'demo-sponsored-8',
    is_demo: true,
    title: 'عرض تجريبي: باقة فواكه طازجة',
    store_name: 'متجر تجريبي 8',
    store_category_name: 'خضار وفواكه',
    product_price: 27.0,
    image: 'https://images.unsplash.com/photo-1619566636858-adf3ef46400b?auto=format&fit=crop&w=900&q=80',
    store: null,
  },
  {
    id: 'demo-sponsored-9',
    is_demo: true,
    title: 'عرض تجريبي: أدوات رياضية منزلية',
    store_name: 'متجر تجريبي 9',
    store_category_name: 'رياضة',
    product_price: 89.0,
    image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=900&q=80',
    store: null,
  },
  {
    id: 'demo-sponsored-10',
    is_demo: true,
    title: 'عرض تجريبي: باقة كتب تعليمية',
    store_name: 'متجر تجريبي 10',
    store_category_name: 'كتب',
    product_price: 49.0,
    image: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=900&q=80',
    store: null,
  },
];

function shuffledCopy(list, seed = Math.random()) {
  const arr = [...list];
  let s = Math.floor(Math.abs(seed) * 1_000_000) + 1;
  for (let i = arr.length - 1; i > 0; i -= 1) {
    s = (s * 1664525 + 1013904223) % 4294967296;
    const j = s % (i + 1);
    const tmp = arr[i];
    arr[i] = arr[j];
    arr[j] = tmp;
  }
  return arr;
}

const Home = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const location = useLocation();
  const { showAlert, showPrompt, showSelect } = useAlert();
  const storesSectionRef = useRef(null);
  const communityBelowRef = useRef(null);
  const browseScrollRef = useRef(null);
  const sponsoredRailWrapRef = useRef(null);
  const sponsoredRailTrackRef = useRef(null);
  const sponsoredSeekInputRef = useRef(null);
  const sponsoredPausedRef = useRef(false);
  const sponsoredSectionHoveredRef = useRef(false);
  const sponsoredDirectionRef = useRef(-1);
  const sponsoredPositionRef = useRef(0);
  const sponsoredMaxTravelRef = useRef(0);
  const sponsoredDraggingRef = useRef(false);
  const sponsoredDragLastXRef = useRef(0);
  const sponsoredWheelResumeTimerRef = useRef(0);
  const randomRailsRef = useRef(new globalThis.Map());
  const {
    userMapLocation,
    locationFocusNonce,
    setManualMapLocation,
    requestUserLocation,
    locating,
    searchQuery,
    setSearchQuery,
  } = useMapExplore();
  const [sponsoredPage, setSponsoredPage] = useState(1);
  const [storesPage, setStoresPage] = useState(1);
  const [isSmallScreen, setIsSmallScreen] = useState(() =>
    typeof window !== 'undefined' ? window.matchMedia('(max-width: 640px)').matches : false
  );
  const [stores, setStores] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [categoriesLoading, setCategoriesLoading] = useState(true);
  const [error, setError] = useState('');
  const [userLocation, setUserLocation] = useState(null);
  const [hideNoLocation, setHideNoLocation] = useState(true);
  const [filterMode, setFilterMode] = useState(() =>
    typeof window !== 'undefined' ? parseFilterMode(window.location.search) : 'stores'
  );
  const [selectedCategoryId, setSelectedCategoryId] = useState(() =>
    typeof window !== 'undefined' ? parseStoreCategoryId(window.location.search) : null
  );
  const [selectedCategoryIds, setSelectedCategoryIds] = useState(() =>
    typeof window !== 'undefined'
      ? parseCsvNumbers(new URLSearchParams(window.location.search).get('category'))
      : []
  );
  const [selectedCommunityCategoryId, setSelectedCommunityCategoryId] = useState(() =>
    typeof window !== 'undefined' ? parseCommunityCategoryId(window.location.search) : null
  );
  const [sponsoredAds, setSponsoredAds] = useState([]);
  const [sponsoredLoading, setSponsoredLoading] = useState(true);
  const [randomCategoryProducts, setRandomCategoryProducts] = useState([]);
  const [randomCategorySeed] = useState(() => Math.random());
  const [viewportWidth, setViewportWidth] = useState(() =>
    typeof window !== 'undefined' ? window.innerWidth : 1024
  );
  /** فلترة إعلانات الصفحة الرئيسية حسب أقسام المتاجر (متعدد) */
  const [exclusiveOfferCategoryIds, setExclusiveOfferCategoryIds] = useState([]);
  const [sponsoredFavByAdId, setSponsoredFavByAdId] = useState({});
  const [communityPoints, setCommunityPoints] = useState([]);
  const [communityPointsLoading, setCommunityPointsLoading] = useState(false);
  const [communityCategories, setCommunityCategories] = useState([]);
  const [communityCatsLoading, setCommunityCatsLoading] = useState(true);
  const [pendingCartAdd, setPendingCartAdd] = useState(null);
  const pendingCartAddRef = useRef(null);

  useEffect(() => {
    if (typeof window === 'undefined') return undefined;
    const mq = window.matchMedia('(max-width: 640px)');
    const onChange = () => setIsSmallScreen(mq.matches);
    onChange();
    if (typeof mq.addEventListener === 'function') mq.addEventListener('change', onChange);
    else mq.addListener(onChange);
    return () => {
      if (typeof mq.removeEventListener === 'function') mq.removeEventListener('change', onChange);
      else mq.removeListener(onChange);
    };
  }, []);

  useEffect(() => {
    if (typeof window === 'undefined') return undefined;
    const onResize = () => setViewportWidth(window.innerWidth || 1024);
    onResize();
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  const [browseDotsCount, setBrowseDotsCount] = useState(0);
  const [browseDotActive, setBrowseDotActive] = useState(0);

  const wireScrollDots = useCallback((containerEl, itemSelector, setCount, setActive) => {
    if (!containerEl) return () => {};

    let raf = 0;
    const getItems = () => Array.from(containerEl.querySelectorAll(itemSelector));

    const recalc = () => {
      const items = getItems();
      setCount(items.length);
      if (items.length === 0) {
        setActive(0);
        return;
      }
      const center = containerEl.scrollLeft + containerEl.clientWidth / 2;
      let bestIdx = 0;
      let bestDist = Infinity;
      for (let i = 0; i < items.length; i += 1) {
        const it = items[i];
        const itCenter = it.offsetLeft + it.offsetWidth / 2;
        const d = Math.abs(itCenter - center);
        if (d < bestDist) {
          bestDist = d;
          bestIdx = i;
        }
      }
      setActive(bestIdx);
    };

    const onScroll = () => {
      if (raf) return;
      raf = window.requestAnimationFrame(() => {
        raf = 0;
        recalc();
      });
    };

    recalc();
    containerEl.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', recalc);
    return () => {
      if (raf) window.cancelAnimationFrame(raf);
      containerEl.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', recalc);
    };
  }, []);

  useEffect(() => {
    return wireScrollDots(browseScrollRef.current, '.home-browse-item', setBrowseDotsCount, setBrowseDotActive);
  }, [wireScrollDots, filterMode, categoriesLoading, communityCatsLoading, categories.length, communityCategories.length]);

  useEffect(() => {
    setFilterMode(parseFilterMode(`?${searchParams.toString()}`));
    const rawCat = searchParams.get('category');
    const cats = parseCsvNumbers(rawCat);
    setSelectedCategoryIds(cats);
    setSelectedCategoryId(cats.length ? cats[0] : null);
    const rawCc = searchParams.get('cc');
    if (rawCc == null || rawCc === '') setSelectedCommunityCategoryId(null);
    else {
      const n = Number(rawCc);
      setSelectedCommunityCategoryId(Number.isFinite(n) ? n : null);
    }
  }, [searchParams]);

  useEffect(() => {
    const mf = location.state?.mapFocus;
    if (!mf) return;
    const lat = Number(mf.lat);
    const lng = Number(mf.lng);
    if (!Number.isFinite(lat) || !Number.isFinite(lng)) return;
    setManualMapLocation(lat, lng);
    navigate({ pathname: location.pathname, search: location.search }, { replace: true, state: {} });
  }, [location.state, location.pathname, location.search, navigate, setManualMapLocation]);

  useEffect(() => {
    if (filterMode !== 'stores' || selectedCategoryId == null) return;
    const t = window.setTimeout(() => {
      storesSectionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 180);
    return () => window.clearTimeout(t);
  }, [filterMode, selectedCategoryId]);

  // تدوير ترتيب الإعلانات الممولة كل 5 دقائق حتى لا يبقى إعلان ثابت بنفس المكان
  const [sponsoredRotateSlot, setSponsoredRotateSlot] = useState(() =>
    Math.floor(Date.now() / SPONSORED_ROTATE_MS)
  );
  useEffect(() => {
    let t1 = 0;
    let t2 = 0;
    const schedule = () => {
      const now = Date.now();
      const next = (Math.floor(now / SPONSORED_ROTATE_MS) + 1) * SPONSORED_ROTATE_MS;
      const delay = Math.max(250, next - now + 50);
      t1 = window.setTimeout(() => {
        setSponsoredRotateSlot(Math.floor(Date.now() / SPONSORED_ROTATE_MS));
        t2 = window.setInterval(() => {
          setSponsoredRotateSlot(Math.floor(Date.now() / SPONSORED_ROTATE_MS));
        }, SPONSORED_ROTATE_MS);
      }, delay);
    };
    schedule();
    return () => {
      if (t1) window.clearTimeout(t1);
      if (t2) window.clearInterval(t2);
    };
  }, []);

  const rotatedSponsoredAds = useMemo(() => {
    const list = Array.isArray(sponsoredAds) ? sponsoredAds : [];
    const n = list.length;
    if (n <= 1) return list;
    const offset = ((sponsoredRotateSlot % n) + n) % n;
    if (offset === 0) return list;
    return [...list.slice(offset), ...list.slice(0, offset)];
  }, [sponsoredAds, sponsoredRotateSlot]);

  const filteredExclusiveAds = useMemo(() => {
    const list = Array.isArray(rotatedSponsoredAds) ? rotatedSponsoredAds : [];
    if (!exclusiveOfferCategoryIds?.length) return list;
    const allowed = new Set(exclusiveOfferCategoryIds.map((x) => Number(x)));
    return list.filter((ad) => {
      const cid = ad.store_category_id != null ? Number(ad.store_category_id) : NaN;
      return Number.isFinite(cid) && allowed.has(cid);
    });
  }, [rotatedSponsoredAds, exclusiveOfferCategoryIds]);

  const sponsoredRailAds = useMemo(
    () => [...filteredExclusiveAds, ...DEMO_SPONSORED_ADS],
    [filteredExclusiveAds]
  );

  const randomProductCategoryGroups = useMemo(() => {
    const productList = (randomCategoryProducts || []).filter((p) => p && p.store != null);
    if (!productList.length) return [];
    const minItemsPerSection =
      viewportWidth <= 640 ? 2 :
      viewportWidth <= 900 ? 3 :
      4;
    const grouped = new globalThis.Map();
    productList.forEach((p) => {
      const key = p.store_category_id != null ? `id:${p.store_category_id}` : `name:${p.store_category_name || 'other'}`;
      if (!grouped.has(key)) {
        grouped.set(key, {
          key,
          categoryId: p.store_category_id ?? null,
          categoryName: p.store_category_name || 'قسم متنوع',
          items: [],
        });
      }
      grouped.get(key).items.push(p);
    });
    const withProducts = Array.from(grouped.values()).filter((g) => g.items.length >= minItemsPerSection);
    const picked = shuffledCopy(withProducts, randomCategorySeed).slice(0, 3);
    return picked.map((group, idx) => ({
      ...group,
      items: shuffledCopy(group.items, randomCategorySeed + idx + 0.37).slice(0, 8),
    }));
  }, [randomCategoryProducts, randomCategorySeed, viewportWidth]);

  const ensureRandomRailState = useCallback((key) => {
    const map = randomRailsRef.current;
    if (!map.has(key)) {
      map.set(key, {
        wrap: null,
        track: null,
        input: null,
        paused: false,
        hovered: false,
        dragging: false,
        lastX: 0,
        position: 0,
        maxTravel: 0,
        direction: -1,
        wheelTimer: 0,
        didInit: false,
      });
    }
    return map.get(key);
  }, []);

  const setRandomRailNode = useCallback(
    (key, field, el) => {
      const st = ensureRandomRailState(key);
      st[field] = el;
    },
    [ensureRandomRailState]
  );

  const setRandomPaused = useCallback(
    (key, pause) => {
      const st = ensureRandomRailState(key);
      if (pause) {
        st.paused = true;
        return;
      }
      st.paused = st.hovered || st.dragging;
    },
    [ensureRandomRailState]
  );

  const setRandomPosition = useCallback(
    (key, nextPos) => {
      const st = ensureRandomRailState(key);
      if (!st.track) return 0;
      const max = Math.max(0, st.maxTravel || 0);
      const next = Math.max(0, Math.min(max, nextPos));
      st.position = next;
      st.track.style.transform = `translate3d(${-next}px, 0, 0)`;
      if (st.input) {
        const maxRounded = Math.max(1, Math.round(max));
        st.input.max = String(maxRounded);
        st.input.value = String(Math.max(0, maxRounded - Math.round(next)));
      }
      return next;
    },
    [ensureRandomRailState]
  );

  useEffect(() => {
    if (filterMode !== 'stores' || sponsoredLoading || randomProductCategoryGroups.length === 0) return undefined;
    const activeKeys = new Set(randomProductCategoryGroups.map((g) => g.key));
    Array.from(randomRailsRef.current.keys()).forEach((k) => {
      if (!activeKeys.has(k)) randomRailsRef.current.delete(k);
    });

    const cleanups = [];
    randomProductCategoryGroups.forEach((group) => {
      const key = group.key;
      const st = ensureRandomRailState(key);
      const wrap = st.wrap;
      const track = st.track;
      if (!wrap || !track) return;
      let pxPerSec = 80;
      const recalc = () => {
        st.maxTravel = Math.max(0, track.scrollWidth - wrap.clientWidth);
        const adCount = Math.max(1, group.items.length);
        const avgAdWidth = Math.max(160, track.scrollWidth / adCount);
        pxPerSec = avgAdWidth / 1.5;
        if (!st.didInit) {
          setRandomPosition(key, st.maxTravel);
          st.didInit = true;
        } else {
          setRandomPosition(key, st.position);
        }
      };
      st.direction = st.direction === 1 ? 1 : -1;
      recalc();
      let rafId = 0;
      let lastTs = 0;
      const step = (ts) => {
        if (!track.isConnected) return;
        if (!lastTs) {
          lastTs = ts;
        } else if (!st.paused) {
          const dt = Math.min(64, ts - lastTs);
          const delta = (pxPerSec * dt) / 1000;
          let next = st.position + st.direction * delta;
          if (next <= 0) {
            next = 0;
            st.direction = 1;
          } else if (next >= st.maxTravel) {
            next = st.maxTravel;
            st.direction = -1;
          }
          setRandomPosition(key, next);
        }
        lastTs = ts;
        rafId = window.requestAnimationFrame(step);
      };
      const ro = typeof ResizeObserver !== 'undefined' ? new ResizeObserver(recalc) : null;
      if (ro) {
        ro.observe(wrap);
        ro.observe(track);
      }
      rafId = window.requestAnimationFrame(step);
      cleanups.push(() => {
        if (ro) ro.disconnect();
        if (rafId) window.cancelAnimationFrame(rafId);
      });
    });
    return () => {
      cleanups.forEach((fn) => fn());
    };
  }, [filterMode, sponsoredLoading, randomProductCategoryGroups, ensureRandomRailState, setRandomPosition]);

  const setSponsoredPaused = useCallback((pause) => {
    if (pause) {
      sponsoredPausedRef.current = true;
      return;
    }
    if (sponsoredSectionHoveredRef.current || sponsoredDraggingRef.current) {
      sponsoredPausedRef.current = true;
      return;
    }
    sponsoredPausedRef.current = false;
  }, []);

  const setSponsoredPosition = useCallback((nextPos) => {
    const trackEl = sponsoredRailTrackRef.current;
    const seekInputEl = sponsoredSeekInputRef.current;
    if (!trackEl) return 0;
    const maxTravel = Math.max(0, sponsoredMaxTravelRef.current);
    const next = Math.max(0, Math.min(maxTravel, nextPos));
    sponsoredPositionRef.current = next;
    trackEl.style.transform = `translate3d(${-next}px, 0, 0)`;
    if (seekInputEl) {
      const maxRounded = Math.max(1, Math.round(maxTravel));
      seekInputEl.max = String(maxRounded);
      // السلايدر معكوس بصريًا (RTL): البداية من اليمين.
      seekInputEl.value = String(Math.max(0, maxRounded - Math.round(next)));
    }
    return next;
  }, []);

  useEffect(() => {
    const wrap = sponsoredRailWrapRef.current;
    const track = sponsoredRailTrackRef.current;
    if (!wrap || !track || filterMode !== 'stores' || sponsoredLoading || sponsoredRailAds.length <= 1) {
      return undefined;
    }
    let pxPerSec = 90;
    let didInitPosition = false;
    const recalc = () => {
      const maxTravel = Math.max(0, track.scrollWidth - wrap.clientWidth);
      sponsoredMaxTravelRef.current = maxTravel;
      const adCount = Math.max(1, sponsoredRailAds.length);
      const avgAdWidth = Math.max(160, track.scrollWidth / adCount);
      // سرعة تكيفية حسب حجم الإعلان وعدده: كل إعلان يأخذ وقت عرض قريب من الثابت.
      const secondsPerAd = 1.5;
      pxPerSec = avgAdWidth / secondsPerAd;
      // أول مرة: ابدأ من النهاية اليمنى بصريًا. بعد ذلك حافظ على مكان المستخدم.
      if (!didInitPosition) {
        setSponsoredPosition(maxTravel);
        didInitPosition = true;
      } else {
        setSponsoredPosition(sponsoredPositionRef.current);
      }
    };
    sponsoredDirectionRef.current = -1;
    sponsoredPausedRef.current = false;
    recalc();
    let rafId = 0;
    let lastTs = 0;
    const step = (ts) => {
      if (!track.isConnected) return;
      if (!lastTs) {
        lastTs = ts;
      } else if (!sponsoredPausedRef.current) {
        const dt = Math.min(64, ts - lastTs);
        const delta = (pxPerSec * dt) / 1000;
        const maxTravel = Math.max(0, sponsoredMaxTravelRef.current);
        const current = sponsoredPositionRef.current;
        let next = current + sponsoredDirectionRef.current * delta;
        if (next <= 0) {
          next = 0;
          sponsoredDirectionRef.current = 1;
        } else if (next >= maxTravel) {
          next = maxTravel;
          sponsoredDirectionRef.current = -1;
        }
        setSponsoredPosition(next);
      }
      lastTs = ts;
      rafId = window.requestAnimationFrame(step);
    };
    const ro = typeof ResizeObserver !== 'undefined' ? new ResizeObserver(recalc) : null;
    if (ro) {
      ro.observe(wrap);
      ro.observe(track);
    }
    rafId = window.requestAnimationFrame(step);
    return () => {
      if (ro) ro.disconnect();
      if (rafId) window.cancelAnimationFrame(rafId);
      track.style.transform = '';
      sponsoredPositionRef.current = 0;
      sponsoredMaxTravelRef.current = 0;
      sponsoredDraggingRef.current = false;
    };
  }, [filterMode, sponsoredLoading, sponsoredRailAds.length, setSponsoredPosition]);

  useEffect(() => {
    setSponsoredPage(1);
  }, [filterMode, selectedCategoryId]);

  useEffect(() => {
    setStoresPage(1);
  }, [filterMode, selectedCategoryId, hideNoLocation]);

  // الخريطة لم تعد ضمن الصفحة الرئيسية — تم نقلها لصفحة /map

  const openCartPickerFor = async (payload) => {
    if (!canUseShoppingCarts()) {
      await showAlert(
        'ميزة السلال للأعضاء المسجّلين فقط (متسوّق، تاجر، أو مدير) وليست لوضع الزائر. سجّل الدخول ثم أعد المحاولة.',
      );
      return;
    }
    const noteVal = await showPrompt(
      'أضف ملاحظة على هذا المنتج داخل السلة (اختياري). اترك الحقل فارغاً إذا لا تريد.',
      'مثال: بدون بصل / توصيل بعد العصر',
      'ملاحظة على المنتج',
      payload?.note || ''
    );
    const enrichedPayload = { ...payload, note: noteVal == null ? '' : String(noteVal).trim() };
    pendingCartAddRef.current = enrichedPayload;
    setPendingCartAdd(enrichedPayload);
    const carts = await getCarts();
    const list = Array.isArray(carts) ? carts : [];
    if (list.length === 0) {
      await createCartAndAddPending(enrichedPayload, { isFirstCart: true });
      return;
    }
    const opts = list.map((c) => ({
      id: String(c.id),
      label: c.name || `سلة #${c.id}`,
      value: c.id,
      badge: Array.isArray(c.items) ? c.items.length : 0,
    }));
    const pick = await showSelect(
      'اختر السلة التي تريد إضافة المنتج إليها:',
      'إضافة إلى أي سلة؟',
      opts,
      { primaryActionLabel: 'سلة جديدة' }
    );
    if (pick == null) return;
    if (pick === '__primary__') {
      await createCartAndAddPending();
      return;
    }
    await pickCartAndAddPending({ id: pick });
  };

  const createCartAndAddPending = async (payloadOverride, { isFirstCart = false } = {}) => {
    const p = payloadOverride != null ? payloadOverride : pendingCartAddRef.current;
    if (!p) return;
    const name = await showPrompt(
      isFirstCart
        ? 'لا توجد لديك سلال بعد. اكتب اسماً لسلتك الأولى — يُضاف المنتج إليها مباشرة.'
        : 'اكتب اسماً للسلة الجديدة ثم يُضاف المنتج إليها.',
      isFirstCart ? 'مثال: سلة اليوم' : 'اسم السلة...',
      isFirstCart ? 'إنشاء أول سلة' : 'سلة جديدة'
    );
    if (!name || !String(name).trim()) return;
    const cart = await createCart(String(name).trim());
    await addToCart(cart.id, p.productId ?? null, p.quantity ?? 1, p.sponsoredAdId ?? null, p.note ?? '');
    await showAlert('تمت إضافة المنتج إلى السلة.');
    setPendingCartAdd(null);
    pendingCartAddRef.current = null;
  };

  const pickCartAndAddPending = async (cart) => {
    const p = pendingCartAddRef.current;
    if (!p) return;
    await addToCart(cart.id, p.productId ?? null, p.quantity ?? 1, p.sponsoredAdId ?? null, p.note ?? '');
    await showAlert('تمت إضافة المنتج إلى السلة.');
    setPendingCartAdd(null);
    pendingCartAddRef.current = null;
  };

  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        const list = await getCommunityCategories();
        if (!cancelled) setCommunityCategories(Array.isArray(list) ? list : []);
      } catch (e) {
        console.error(e);
        if (!cancelled) setCommunityCategories([]);
      } finally {
        if (!cancelled) setCommunityCatsLoading(false);
      }
    })();
    return () => {
      cancelled = true;
    };
  }, []);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        const list = await getCategories();
        if (!cancelled) setCategories(Array.isArray(list) ? list : []);
      } catch (e) {
        console.error(e);
        if (!cancelled) setCategories([]);
      } finally {
        if (!cancelled) setCategoriesLoading(false);
      }
    })();
    return () => {
      cancelled = true;
    };
  }, []);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      if (filterMode !== 'stores') {
        if (!cancelled) {
          setSponsoredAds([]);
          setSponsoredLoading(false);
        }
        return;
      }
      try {
        if (!cancelled) setSponsoredLoading(true);
        const data = await getOffers(null);
        if (!cancelled) setSponsoredAds(Array.isArray(data) ? data : []);
      } catch (e) {
        console.error(e);
        if (!cancelled) setSponsoredAds([]);
      } finally {
        if (!cancelled) setSponsoredLoading(false);
      }
    })();
    return () => {
      cancelled = true;
    };
  }, [filterMode]);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      if (filterMode !== 'stores') {
        if (!cancelled) setRandomCategoryProducts([]);
        return;
      }
      try {
        const data = await getPublicProducts(null);
        if (!cancelled) setRandomCategoryProducts(Array.isArray(data) ? data : []);
      } catch (e) {
        console.error(e);
        if (!cancelled) setRandomCategoryProducts([]);
      }
    })();
    return () => {
      cancelled = true;
    };
  }, [filterMode]);

  useEffect(() => {
    let cancelled = false;
    const isCommunity = filterMode === 'community';
    (async () => {
      if (isCommunity) {
        if (!cancelled) setCommunityPointsLoading(true);
      }
      try {
        const catArg =
          isCommunity && selectedCommunityCategoryId != null ? selectedCommunityCategoryId : null;
        const pts = await getCommunityPoints(catArg);
        if (!cancelled) setCommunityPoints(Array.isArray(pts) ? pts : []);
      } catch (e) {
        console.error(e);
        if (!cancelled) setCommunityPoints([]);
      } finally {
        if (!cancelled && isCommunity) setCommunityPointsLoading(false);
      }
    })();
    return () => {
      cancelled = true;
      setCommunityPointsLoading(false);
    };
  }, [filterMode, selectedCommunityCategoryId]);

  useEffect(() => {
    let cancelled = false;

    const load = async () => {
      try {
        setLoading(true);
        setError('');

        let lat;
        let lng;
        let locPair = null;

        if (userMapLocation?.length === 2) {
          lat = userMapLocation[0];
          lng = userMapLocation[1];
          locPair = [lat, lng];
          if (!cancelled) setUserLocation(locPair);
        } else {
          lat = 31.5;
          lng = 34.4;
          locPair = null;
          if (!cancelled) setUserLocation(null);
        }

        const data = await getNearbyStores(lat, lng);
        const list = Array.isArray(data) ? data : data?.results || [];
        if (!cancelled) setStores(list);
      } catch (err) {
        console.error('Error fetching stores:', err);
        if (!cancelled) {
          const status = err.response?.status;
          if (!err.response) {
            setError(
              'تعذر الاتصال بالخادم. من مجلد backend شغّل: python manage.py runserver ثم حدّث الصفحة (الواجهة على المنفذ 3000).'
            );
          } else if (status >= 500) {
            setError(
              'الخادم أرجع خطأ أثناء تحميل المتاجر. راجع نافذة تشغيل Django أو أعد تشغيل السيرفر.'
            );
          } else {
            setError(`تعذر تحميل المتاجر (رمز ${status}). جرّب مرة أخرى.`);
          }
        }
      } finally {
        if (!cancelled) setLoading(false);
      }
    };

    load();
    return () => {
      cancelled = true;
    };
  }, [userMapLocation]);

  const filteredStores = useMemo(() => {
    if (filterMode !== 'stores') return [];
    return (stores || []).filter((s) => {
      if (selectedCategoryId != null) {
        if (!storeMatchesAnyCategory(s, [selectedCategoryId])) {
          return false;
        }
      }
      return true;
    });
  }, [stores, filterMode, selectedCategoryId]);

  const visibleStores = useMemo(
    () =>
      filteredStores.filter((s) => {
        const hasLoc = hasMappableCoords(s);
        return hideNoLocation ? hasLoc : true;
      }),
    [filteredStores, hideNoLocation]
  );

  const sortedStores = useMemo(() => {
    if (!userLocation) return visibleStores;
    const base = userLocation;
    return [...visibleStores].sort((a, b) => {
      const aLoc = [Number(a.latitude), Number(a.longitude)];
      const bLoc = [Number(b.latitude), Number(b.longitude)];
      if (!hasMappableCoords(a)) return 1;
      if (!hasMappableCoords(b)) return -1;
      const da = haversineKm(base, aLoc);
      const db = haversineKm(base, bLoc);
      return da - db;
    });
  }, [visibleStores, userLocation]);

  // الخريطة لم تعد ضمن الصفحة الرئيسية — تم نقلها لصفحة /map

  const totalSponsoredPages = Math.max(1, Math.ceil(rotatedSponsoredAds.length / SPONSORED_PER_PAGE));
  const safeSponsoredPage = Math.min(sponsoredPage, totalSponsoredPages);
  const pagedSponsoredAds = useMemo(() => {
    const start = (safeSponsoredPage - 1) * SPONSORED_PER_PAGE;
    return rotatedSponsoredAds.slice(start, start + SPONSORED_PER_PAGE);
  }, [rotatedSponsoredAds, safeSponsoredPage]);

  useEffect(() => {
    if (sponsoredPage > totalSponsoredPages) setSponsoredPage(totalSponsoredPages);
  }, [sponsoredPage, totalSponsoredPages]);

  const storesPerPage = isSmallScreen ? STORES_PER_PAGE_MOBILE : STORES_PER_PAGE_DESKTOP;
  const totalStoresPages = Math.max(1, Math.ceil(sortedStores.length / storesPerPage));
  const safeStoresPage = Math.min(storesPage, totalStoresPages);
  const pagedStores = useMemo(() => {
    const start = (safeStoresPage - 1) * storesPerPage;
    return sortedStores.slice(start, start + storesPerPage);
  }, [sortedStores, safeStoresPage, storesPerPage]);

  useEffect(() => {
    if (storesPage > totalStoresPages) setStoresPage(totalStoresPages);
  }, [storesPage, totalStoresPages]);

  const isGuestVisitor = localStorage.getItem('isGuest') === 'true';
  const isMerchantOnHome =
    !!localStorage.getItem('token') && !isGuestVisitor && localStorage.getItem('user_type') === 'merchant';
  const canUseOfferFavorites =
    !!localStorage.getItem('token') && !isGuestVisitor;
  const canUseCarts = canUseShoppingCarts();
  const sponsoredIsFavorite = (ad) => !!sponsoredFavByAdId[ad.id];

  useEffect(() => {
    if (filterMode !== 'community' || isMerchantOnHome) return;
    const t = window.setTimeout(() => {
      communityBelowRef.current?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }, 200);
    return () => window.clearTimeout(t);
  }, [filterMode, selectedCommunityCategoryId, isMerchantOnHome]);

  useEffect(() => {
    if (!canUseOfferFavorites) {
      setSponsoredFavByAdId({});
      return undefined;
    }
    let cancelled = false;
    (async () => {
      try {
        const list = await getFavorites();
        if (cancelled) return;
        const sm = {};
        for (const f of list || []) {
          if ((f.product == null || f.product === '') && f.sponsored_ad != null) sm[f.sponsored_ad] = f.id;
        }
        setSponsoredFavByAdId(sm);
      } catch {
        if (!cancelled) setSponsoredFavByAdId({});
      }
    })();
    return () => {
      cancelled = true;
    };
  }, [canUseOfferFavorites]);

  const addSponsoredToCart = async (ad) => {
    if (!canUseShoppingCarts()) {
      await showAlert(
        'ميزة السلال للأعضاء المسجّلين فقط (متسوّق، تاجر، أو مدير) وليست لوضع الزائر. سجّل الدخول ثم أعد المحاولة.',
        'تنبيه',
      );
      return;
    }
    try {
      await openCartPickerFor({
        productId: ad.product ?? null,
        sponsoredAdId: ad.id,
        quantity: 1,
      });
    } catch (e) {
      await showAlert(formatApiError(e, 'تعذرت الإضافة للسلة.'), 'خطأ');
    }
  };

  const addProductToCart = async (product) => {
    if (!canUseShoppingCarts()) {
      await showAlert(
        'ميزة السلال للأعضاء المسجّلين فقط (متسوّق، تاجر، أو مدير) وليست لوضع الزائر. سجّل الدخول ثم أعد المحاولة.',
        'تنبيه',
      );
      return;
    }
    try {
      await openCartPickerFor({
        productId: product.id,
        sponsoredAdId: null,
        quantity: 1,
      });
    } catch (e) {
      await showAlert(formatApiError(e, 'تعذرت الإضافة للسلة.'), 'خطأ');
    }
  };

  const goToFilterStores = () => {
    const next = new URLSearchParams(searchParams);
    next.delete('filter');
    next.delete('cc');
    setSearchParams(next, { replace: true });
  };

  const goToFilterCommunity = () => {
    const next = new URLSearchParams(searchParams);
    next.set('filter', 'community');
    next.delete('category');
    setSearchParams(next, { replace: true });
  };

  const addSponsoredToFavorites = async (ad) => {
    if (!canUseOfferFavorites) {
      await showAlert('سجّل الدخول لاستخدام المفضلة. وضع الزائر لا يدعمها.', 'تنبيه');
      return;
    }
    try {
      if (!ad.product) {
        const existing = sponsoredFavByAdId[ad.id];
        if (existing) {
          await removeFavorite(existing);
          setSponsoredFavByAdId((prev) => {
            const n = { ...prev };
            delete n[ad.id];
            return n;
          });
          await showAlert('أُزيل العرض المستقل من المفضلة.', 'تم');
        } else {
          await addFavorite(null, ad.id);
          const list = await getFavorites();
          const row = (list || []).find(
            (f) => f.sponsored_ad === ad.id && (f.product == null || f.product === ''),
          );
          if (row) setSponsoredFavByAdId((prev) => ({ ...prev, [ad.id]: row.id }));
          await showAlert('تمت إضافة عرض الإعلان للمفضلة — يُزال تلقائياً عند انتهاء الإعلان.', 'تم');
        }
        return;
      }
      await addFavorite(ad.product, ad.id);
      await showAlert('تمت إضافة المنتج للمفضلة.', 'تم');
    } catch (e) {
      await showAlert(formatApiError(e, 'تعذرت الإضافة للمفضلة.'), 'خطأ');
    }
  };

  const addProductToFavorites = async (product) => {
    if (!canUseOfferFavorites) {
      await showAlert('سجّل الدخول لاستخدام المفضلة. وضع الزائر لا يدعمها.', 'تنبيه');
      return;
    }
    try {
      await addFavorite(product.id, null);
      await showAlert('تمت إضافة المنتج للمفضلة.', 'تم');
    } catch (e) {
      await showAlert(formatApiError(e, 'تعذرت الإضافة للمفضلة.'), 'خطأ');
    }
  };

  return (
    <MainLayout>
      <HomeBackGuard />
      <div className="home-container">
        {isMerchantOnHome ? (
          <div
            className="card home-merchant-banner"
            role="status"
            style={{
              marginTop: 6,
              marginBottom: 18,
              padding: '14px 16px',
              display: 'flex',
              alignItems: 'flex-start',
              gap: 14,
              background: 'linear-gradient(135deg, rgba(245, 192, 0, 0.15) 0%, var(--surface) 55%)',
              border: '1.5px solid rgba(245, 192, 0, 0.45)',
              borderRadius: 14,
            }}
          >
            <div
              className="flex-center"
              style={{
                flexShrink: 0,
                width: 44,
                height: 44,
                borderRadius: 12,
                background: 'var(--primary-light)',
                color: 'var(--secondary)',
              }}
            >
              <Menu size={24} strokeWidth={2.25} />
            </div>
            <div style={{ lineHeight: 1.65, fontSize: '0.95rem', color: 'var(--text-primary)' }}>
              <strong style={{ display: 'block', marginBottom: 6, fontSize: '1rem' }}>
                أنت في وضع التاجر على الصفحة الرئيسية
              </strong>
              لإدارة متجرك — مثل <strong>منتجاتي</strong>، <strong>الإعلانات</strong>، <strong>الاشتراك</strong>، و<strong>
                إعدادات المتجر
              </strong>
              — افتح <strong>القائمة الجانبية</strong> من زر القائمة{' '}
              <span style={{ whiteSpace: 'nowrap' }}>(☰ أسفل الصفحة)</span>.
            </div>
          </div>
        ) : null}

        {!isMerchantOnHome ? (
          <section className="home-hero" aria-label="ترحيب">
            <div className="home-hero-backdrop" aria-hidden />
            <div className="home-hero-inner">
              <div className="home-hero-copy">
                <h1 className="home-hero-title">ما الذي تبحث عنه اليوم</h1>
                <p className="home-hero-sub">
                  تصفّح الأقسام، العروض، والمتاجر القريبة، واستخدم الخريطة لمطابقة المواقع بسهولة.
                </p>
              </div>
            </div>
          </section>
        ) : null}

        <div className="home-top-grid">
          {filterMode === 'stores' ? (
            <section
              className="home-top-grid__exclusive home-sponsored-block"
              aria-label="إعلانات ممولة"
              onMouseEnter={() => {
                sponsoredSectionHoveredRef.current = true;
                setSponsoredPaused(true);
              }}
              onMouseLeave={() => {
                sponsoredSectionHoveredRef.current = false;
                setSponsoredPaused(false);
              }}
            >
              <div className="home-sponsored-head">
                <div className="home-sponsored-head-text">
                  <h2 className="home-sponsored-title">إعلانات ممولة من المتاجر</h2>
                  <div className="home-sponsored-controls">
                    <FiltersDropdown
                      buttonLabel="فلاتر"
                      title="تصفية الإعلانات حسب قسم المتجر"
                      allLabel="كل الأقسام"
                      options={(categories || []).map((c) => ({ id: c.id, label: c.name }))}
                      selectedIds={exclusiveOfferCategoryIds}
                      onChangeSelectedIds={(ids) =>
                        setExclusiveOfferCategoryIds(Array.isArray(ids) ? ids : [])
                      }
                    />
                  </div>
                </div>
                <Link to="/offers" className="home-sponsored-more">
                  عرض المزيد
                  <ChevronLeft size={18} aria-hidden />
                </Link>
              </div>
              {sponsoredLoading ? (
                <div className="home-sponsored-rail" role="list">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <div key={i} className="home-sponsored-skel" aria-hidden />
                  ))}
                </div>
              ) : (
                <div
                  className="home-sponsored-rail-wrap"
                  onPointerDown={(e) => {
                    if (e.button !== 0) return;
                    const target = e.target;
                    if (
                      target instanceof Element &&
                      target.closest('button, a, input, textarea, select, label, [role="button"]')
                    ) {
                      return;
                    }
                    sponsoredDraggingRef.current = true;
                    setSponsoredPaused(true);
                    sponsoredDragLastXRef.current = e.clientX;
                    if (typeof e.currentTarget.setPointerCapture === 'function') {
                      e.currentTarget.setPointerCapture(e.pointerId);
                    }
                  }}
                  onPointerMove={(e) => {
                    if (!sponsoredDraggingRef.current) return;
                    const dx = e.clientX - sponsoredDragLastXRef.current;
                    sponsoredDragLastXRef.current = e.clientX;
                    const trackEl = sponsoredRailTrackRef.current;
                    if (!trackEl) return;
                    const maxTravel = sponsoredMaxTravelRef.current;
                    const next = Math.max(0, Math.min(maxTravel, sponsoredPositionRef.current - dx));
                    setSponsoredPosition(next);
                  }}
                  onPointerUp={(e) => {
                    sponsoredDraggingRef.current = false;
                    setSponsoredPaused(false);
                    if (typeof e.currentTarget.releasePointerCapture === 'function') {
                      try {
                        e.currentTarget.releasePointerCapture(e.pointerId);
                      } catch (_) {
                        // no-op
                      }
                    }
                  }}
                  onPointerCancel={() => {
                    sponsoredDraggingRef.current = false;
                    setSponsoredPaused(false);
                  }}
                  onWheel={(e) => {
                    const trackEl = sponsoredRailTrackRef.current;
                    if (!trackEl) return;
                    const delta = Math.abs(e.deltaX) > Math.abs(e.deltaY) ? e.deltaX : e.deltaY;
                    if (!Number.isFinite(delta) || delta === 0) return;
                    e.preventDefault();
                    sponsoredPausedRef.current = true;
                    const maxTravel = sponsoredMaxTravelRef.current;
                    const next = Math.max(0, Math.min(maxTravel, sponsoredPositionRef.current + delta));
                    setSponsoredPosition(next);
                    if (sponsoredWheelResumeTimerRef.current) {
                      window.clearTimeout(sponsoredWheelResumeTimerRef.current);
                    }
                    sponsoredWheelResumeTimerRef.current = window.setTimeout(() => {
                      setSponsoredPaused(false);
                    }, 300);
                  }}
                >
                  <div className="home-sponsored-rail" role="list" ref={sponsoredRailWrapRef}>
                    <div className="home-sponsored-rail__track" ref={sponsoredRailTrackRef}>
                    {sponsoredRailAds.map((ad) => {
                      const img = visualImageUrls(ad)[0] || null;
                      const isDemo = ad.is_demo === true;
                      return (
                        <article key={ad.id} className="home-sponsored-card" role="listitem" aria-label={`${ad.title} — ${ad.store_name}`}>
                          <div className="home-sponsored-card__thumb" aria-hidden>
                            {img ? (
                              <img className="home-sponsored-card__img" src={img} alt="" loading="lazy" width="800" height="800" />
                            ) : (
                              <span className="home-sponsored-card__ph">📣</span>
                            )}
                            <button
                              type="button"
                              className={`home-sponsored-card__cartbtn${canUseCarts ? '' : ' home-sponsored-card__cartbtn--muted'}`}
                              onClick={(e) => {
                                e.preventDefault();
                                e.stopPropagation();
                                if (isDemo) {
                                  void showAlert('هذا إعلان تجريبي للمعاينة فقط.');
                                  return;
                                }
                                void addSponsoredToCart(ad);
                              }}
                              title={isDemo ? 'إعلان تجريبي' : 'إضافة إلى السلة'}
                              aria-label="إضافة إلى السلة"
                            >
                              <ShoppingCart size={17} strokeWidth={2} aria-hidden />
                            </button>
                            <button
                              type="button"
                              className={`home-sponsored-card__favbtn${canUseOfferFavorites ? '' : ' home-sponsored-card__favbtn--muted'}`}
                              onClick={(e) => {
                                e.preventDefault();
                                e.stopPropagation();
                                if (isDemo) {
                                  void showAlert('هذا إعلان تجريبي للمعاينة فقط.');
                                  return;
                                }
                                void addSponsoredToFavorites(ad);
                              }}
                              title={isDemo ? 'إعلان تجريبي' : ad.product ? '' : 'يُزال من المفضلة عند انتهاء الإعلان'}
                              aria-label={sponsoredIsFavorite(ad) ? 'إزالة من المفضلة' : 'إضافة للمفضلة'}
                            >
                              <Heart
                                size={18}
                                strokeWidth={2}
                                color="#e91e63"
                                fill={sponsoredIsFavorite(ad) ? '#e91e63' : 'none'}
                              />
                            </button>
                          </div>
                          <div className="home-sponsored-card__body">
                            <div className="home-sponsored-card__badge">{isDemo ? 'إعلان ممول (تجريبي)' : 'إعلان ممول'}</div>
                            <div className="home-sponsored-card__adtitle">{ad.title}</div>
                            <div className="home-sponsored-card__meta">
                              <span className="home-sponsored-card__store">{ad.store_name}</span>
                              {ad.store_category_name ? (
                                <>
                                  <span className="home-sponsored-card__dot" aria-hidden />
                                  <span>{ad.store_category_name}</span>
                                </>
                              ) : null}
                            </div>
                            {Number(ad.product_price) > 0 ? (
                              <div className="home-sponsored-card__price">
                                {Number(ad.product_price).toFixed(2)} ₪
                              </div>
                            ) : null}
                            {isDemo ? (
                              <div className="home-sponsored-card__actions">
                                <button
                                  type="button"
                                  className="home-sponsored-card__detailsbtn home-sponsored-card__detailsbtn--demo"
                                  onClick={() => {
                                    void showAlert('لا توجد صفحة تفاصيل لإعلان تجريبي.');
                                  }}
                                >
                                  عرض التفاصيل
                                </button>
                                <button
                                  type="button"
                                  className="home-sponsored-card__storebtn home-sponsored-card__storebtn--demo"
                                  onClick={() => {
                                    void showAlert('لا يوجد متجر مرتبط بالإعلان التجريبي.');
                                  }}
                                >
                                  عرض داخل المتجر
                                </button>
                              </div>
                            ) : (
                              <div className="home-sponsored-card__actions">
                                <Link
                                  to={`/stores/${ad.store}/item/sponsored/${ad.id}`}
                                  className="home-sponsored-card__detailsbtn"
                                >
                                  عرض التفاصيل
                                </Link>
                                <Link
                                  to={`/stores/${ad.store}#sponsored-ad-${ad.id}`}
                                  className="home-sponsored-card__storebtn"
                                >
                                  عرض داخل المتجر
                                </Link>
                              </div>
                            )}
                          </div>
                        </article>
                      );
                    })}
                    </div>
                  </div>
                  <input
                    ref={sponsoredSeekInputRef}
                    type="range"
                    className="home-sponsored-seek-input"
                    min="0"
                    max={Math.max(1, Math.round(sponsoredMaxTravelRef.current))}
                    defaultValue="0"
                    aria-label="تحريك سكرول الإعلانات الممولة"
                    onMouseDown={() => {
                      setSponsoredPaused(true);
                    }}
                    onTouchStart={() => {
                      setSponsoredPaused(true);
                    }}
                    onInput={(e) => {
                      const raw = Number(e.currentTarget.value);
                      const max = Number(e.currentTarget.max);
                      if (Number.isFinite(raw) && Number.isFinite(max)) {
                        setSponsoredPosition(Math.max(0, max - raw));
                      }
                    }}
                    onMouseUp={() => {
                      setSponsoredPaused(false);
                    }}
                    onTouchEnd={() => {
                      setSponsoredPaused(false);
                    }}
                    onBlur={() => {
                      setSponsoredPaused(false);
                    }}
                  />
                </div>
              )}
            </section>
          ) : null}
        </div>

        {filterMode === 'stores' && randomProductCategoryGroups.length > 0 ? (
          <div className="home-random-cats">
            {randomProductCategoryGroups.map((group) => (
              <section
                key={group.key}
                className="home-random-cat-block home-sponsored-block"
                aria-label={`منتجات ${group.categoryName}`}
                onMouseEnter={() => {
                  const st = ensureRandomRailState(group.key);
                  st.hovered = true;
                  setRandomPaused(group.key, true);
                }}
                onMouseLeave={() => {
                  const st = ensureRandomRailState(group.key);
                  st.hovered = false;
                  setRandomPaused(group.key, false);
                }}
              >
                <div className="home-sponsored-head">
                  <div className="home-sponsored-head-text">
                    <h3 className="home-sponsored-title">{group.categoryName}</h3>
                  </div>
                  <Link
                    to={
                      group.categoryId != null
                        ? `/category-products?category=${encodeURIComponent(String(group.categoryId))}`
                        : `/category-products?category_name=${encodeURIComponent(group.categoryName)}`
                    }
                    className="home-sponsored-more"
                  >
                    عرض المزيد
                    <ChevronLeft size={18} aria-hidden />
                  </Link>
                </div>
                <div
                  className="home-sponsored-rail-wrap"
                  onPointerDown={(e) => {
                    if (e.button !== 0) return;
                    const target = e.target;
                    if (
                      target instanceof Element &&
                      target.closest('button, a, input, textarea, select, label, [role="button"]')
                    ) {
                      return;
                    }
                    const st = ensureRandomRailState(group.key);
                    st.dragging = true;
                    setRandomPaused(group.key, true);
                    st.lastX = e.clientX;
                    if (typeof e.currentTarget.setPointerCapture === 'function') {
                      e.currentTarget.setPointerCapture(e.pointerId);
                    }
                  }}
                  onPointerMove={(e) => {
                    const st = ensureRandomRailState(group.key);
                    if (!st.dragging) return;
                    const dx = e.clientX - st.lastX;
                    st.lastX = e.clientX;
                    setRandomPosition(group.key, st.position - dx);
                  }}
                  onPointerUp={(e) => {
                    const st = ensureRandomRailState(group.key);
                    st.dragging = false;
                    setRandomPaused(group.key, false);
                    if (typeof e.currentTarget.releasePointerCapture === 'function') {
                      try {
                        e.currentTarget.releasePointerCapture(e.pointerId);
                      } catch (_) {
                        // no-op
                      }
                    }
                  }}
                  onPointerCancel={() => {
                    const st = ensureRandomRailState(group.key);
                    st.dragging = false;
                    setRandomPaused(group.key, false);
                  }}
                  onWheel={(e) => {
                    const st = ensureRandomRailState(group.key);
                    const delta = Math.abs(e.deltaX) > Math.abs(e.deltaY) ? e.deltaX : e.deltaY;
                    if (!Number.isFinite(delta) || delta === 0) return;
                    e.preventDefault();
                    setRandomPaused(group.key, true);
                    setRandomPosition(group.key, st.position + delta);
                    if (st.wheelTimer) window.clearTimeout(st.wheelTimer);
                    st.wheelTimer = window.setTimeout(() => {
                      setRandomPaused(group.key, false);
                    }, 300);
                  }}
                >
                  <div className="home-sponsored-rail" role="list" ref={(el) => setRandomRailNode(group.key, 'wrap', el)}>
                    <div className="home-sponsored-rail__track" ref={(el) => setRandomRailNode(group.key, 'track', el)}>
                      {group.items.map((p) => {
                        const img = visualImageUrls(p)[0] || null;
                        return (
                          <article
                            key={`rand-cat-${group.key}-${p.id}`}
                            className="home-sponsored-card"
                            role="listitem"
                            aria-label={`${p.name} — ${p.store_name}`}
                          >
                            <div className="home-sponsored-card__thumb" aria-hidden>
                              {img ? (
                                <img className="home-sponsored-card__img" src={img} alt="" loading="lazy" width="800" height="800" />
                              ) : (
                                <span className="home-sponsored-card__ph">📣</span>
                              )}
                              <button
                                type="button"
                                className={`home-sponsored-card__cartbtn${canUseCarts ? '' : ' home-sponsored-card__cartbtn--muted'}`}
                                onClick={(e) => {
                                  e.preventDefault();
                                  e.stopPropagation();
                                  void addProductToCart(p);
                                }}
                                title="إضافة إلى السلة"
                                aria-label="إضافة إلى السلة"
                              >
                                <ShoppingCart size={17} strokeWidth={2} aria-hidden />
                              </button>
                              <button
                                type="button"
                                className={`home-sponsored-card__favbtn${canUseOfferFavorites ? '' : ' home-sponsored-card__favbtn--muted'}`}
                                onClick={(e) => {
                                  e.preventDefault();
                                  e.stopPropagation();
                                  void addProductToFavorites(p);
                                }}
                                title="إضافة للمفضلة"
                                aria-label="إضافة للمفضلة"
                              >
                                <Heart
                                  size={18}
                                  strokeWidth={2}
                                  color="#e91e63"
                                  fill="none"
                                />
                              </button>
                            </div>
                            <div className="home-sponsored-card__body">
                              <div className="home-sponsored-card__adtitle">{p.name}</div>
                              <div className="home-sponsored-card__meta">
                                <span className="home-sponsored-card__store">{p.store_name}</span>
                                {p.store_category_name ? (
                                  <>
                                    <span className="home-sponsored-card__dot" aria-hidden />
                                    <span>{p.store_category_name}</span>
                                  </>
                                ) : null}
                              </div>
                              {Number(p.price) > 0 ? (
                                <div className="home-sponsored-card__price">{Number(p.price).toFixed(2)} ₪</div>
                              ) : null}
                              <div className="home-sponsored-card__actions">
                                <Link to={`/stores/${p.store}/item/product/${p.id}`} className="home-sponsored-card__detailsbtn">
                                  عرض التفاصيل
                                </Link>
                                <Link to={`/stores/${p.store}#product-${p.id}`} className="home-sponsored-card__storebtn">
                                  عرض داخل المتجر
                                </Link>
                              </div>
                            </div>
                          </article>
                        );
                      })}
                    </div>
                  </div>
                  <input
                    ref={(el) => setRandomRailNode(group.key, 'input', el)}
                    type="range"
                    className="home-sponsored-seek-input"
                    min="0"
                    max="1"
                    defaultValue="0"
                    aria-label={`تحريك سكرول منتجات ${group.categoryName}`}
                    onMouseDown={() => {
                      setRandomPaused(group.key, true);
                    }}
                    onTouchStart={() => {
                      setRandomPaused(group.key, true);
                    }}
                    onInput={(e) => {
                      const raw = Number(e.currentTarget.value);
                      const max = Number(e.currentTarget.max);
                      if (Number.isFinite(raw) && Number.isFinite(max)) {
                        setRandomPosition(group.key, Math.max(0, max - raw));
                      }
                    }}
                    onMouseUp={() => {
                      setRandomPaused(group.key, false);
                    }}
                    onTouchEnd={() => {
                      setRandomPaused(group.key, false);
                    }}
                    onBlur={() => {
                      setRandomPaused(group.key, false);
                    }}
                  />
                </div>
              </section>
            ))}
          </div>
        ) : null}

        <div style={{ display: 'none' }}>
        <div className="home-mode-strip" role="presentation">
          <div className="home-mode-switch" role="tablist" aria-label="تصفح المتاجر أو الخدمات المجتمعية">
            <button
              type="button"
              role="tab"
              aria-selected={filterMode === 'stores'}
              title="المتاجر والعروض التجارية"
              className={`home-mode-btn${filterMode === 'stores' ? ' home-mode-btn--on' : ''}`}
              onClick={goToFilterStores}
            >
              <Store size={15} strokeWidth={2.25} aria-hidden />
              <span>متاجر</span>
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={filterMode === 'community'}
              title="خدمات مجتمعية على الخريطة"
              className={`home-mode-btn${filterMode === 'community' ? ' home-mode-btn--on' : ''}`}
              onClick={goToFilterCommunity}
            >
              <Sparkles size={15} strokeWidth={2.25} aria-hidden />
              <span>مجتمعي</span>
            </button>
          </div>
        </div>

        {!isMerchantOnHome ? (
          <section className="home-browse-block" aria-label="تصفح حسب الفئات">
            <div className="home-browse-head">
              <h2 className="home-browse-title">
                {isSmallScreen ? 'تصفية سريعة' : filterMode === 'stores' ? 'تصفح حسب الفئات' : 'أقسام الخدمات المجتمعية'}
              </h2>
              <FiltersDropdown
                className="filters-dd--home-quick"
                buttonClassName="home-browse-filterbtn"
                buttonLabel="فلترة"
                title={filterMode === 'stores' ? 'فلترة المتاجر حسب الأقسام' : 'فلترة الخدمات حسب الأقسام'}
                allLabel={filterMode === 'stores' ? 'كل الأقسام' : 'كل الخدمات'}
                requireConfirm
                options={(filterMode === 'stores' ? categories : communityCategories).map((c) => ({
                  id: c.id,
                  label: c.name,
                }))}
                selectedIds={
                  filterMode === 'stores'
                    ? selectedCategoryIds
                    : selectedCommunityCategoryId != null
                      ? [selectedCommunityCategoryId]
                      : []
                }
                onChangeSelectedIds={(ids) => {
                  const next = new URLSearchParams(searchParams);
                  if (filterMode === 'stores') {
                    next.delete('filter');
                    next.delete('cc');
                    const picks = Array.isArray(ids)
                      ? ids.filter((x) => x != null && String(x).trim() !== '')
                      : [];
                    if (picks.length === 0) next.delete('category');
                    else next.set('category', picks.join(','));
                  } else {
                    next.set('filter', 'community');
                    next.delete('category');
                    const pick = Array.isArray(ids) && ids.length ? Number(ids[0]) : null;
                    if (pick == null || !Number.isFinite(pick)) next.delete('cc');
                    else next.set('cc', String(pick));
                  }
                  setSearchParams(next, { replace: true });
                }}
              />
            </div>
            <div className="home-browse-scroll" ref={browseScrollRef}>
              {filterMode === 'stores' ? (
                <>
                  <button
                    type="button"
                    className={`home-browse-item home-browse-item--all${selectedCategoryId == null ? ' home-browse-item--active' : ''}`}
                    onClick={() => {
                      const next = new URLSearchParams(searchParams);
                      next.delete('category');
                      next.delete('filter');
                      next.delete('cc');
                      setSearchParams(next, { replace: true });
                    }}
                  >
                    <span
                      className="home-browse-tile"
                      style={{
                        color: 'var(--secondary)',
                        ...categoryTileSurface('var(--secondary)'),
                      }}
                    >
                      <LayoutGrid size={22} strokeWidth={1.85} aria-hidden />
                    </span>
                    <span className="home-browse-label">الكل</span>
                  </button>
                  {categoriesLoading
                    ? null
                    : categories.map((c) => {
                        const { Icon, tone } = browseCategoryVisual(c.name);
                        const surf = categoryTileSurface(tone);
                        return (
                          <button
                            key={c.id}
                            type="button"
                            className={`home-browse-item${selectedCategoryId === c.id ? ' home-browse-item--active' : ''}`}
                            onClick={() => {
                              const p = new URLSearchParams(searchParams);
                              p.delete('filter');
                              p.delete('cc');
                              p.set('category', String(c.id));
                              setSearchParams(p, { replace: true });
                            }}
                          >
                            <span
                              className="home-browse-tile"
                              style={{ color: tone, background: surf.background, borderColor: surf.borderColor }}
                            >
                              <Icon size={22} strokeWidth={1.85} aria-hidden />
                            </span>
                            <span className="home-browse-label">{c.name}</span>
                          </button>
                        );
                      })}
                </>
              ) : (
                <>
                  <button
                    type="button"
                    className={`home-browse-item home-browse-item--all${selectedCommunityCategoryId == null ? ' home-browse-item--active' : ''}`}
                    onClick={() => {
                      const next = new URLSearchParams(searchParams);
                      next.set('filter', 'community');
                      next.delete('cc');
                      next.delete('category');
                      setSearchParams(next, { replace: true });
                    }}
                  >
                    <span
                      className="home-browse-tile"
                      style={{
                        color: 'var(--secondary)',
                        ...categoryTileSurface('var(--secondary)'),
                      }}
                    >
                      <LayoutGrid size={22} strokeWidth={1.85} aria-hidden />
                    </span>
                    <span className="home-browse-label">الكل</span>
                  </button>
                  {communityCatsLoading
                    ? null
                    : communityCategories.map((c) => {
                        const { Icon: CommIcon, tone: commTone } = browseCategoryVisual(c.name, c.slug);
                        const commSurf = categoryTileSurface(commTone);
                        return (
                        <button
                          key={c.id}
                          type="button"
                          className={`home-browse-item${selectedCommunityCategoryId === c.id ? ' home-browse-item--active' : ''}`}
                          onClick={() => {
                            const p = new URLSearchParams(searchParams);
                            p.set('filter', 'community');
                            p.set('cc', String(c.id));
                            p.delete('category');
                            setSearchParams(p, { replace: true });
                          }}
                        >
                          <span
                            className="home-browse-tile"
                            style={{
                              color: commTone,
                              background: commSurf.background,
                              borderColor: commSurf.borderColor,
                            }}
                          >
                            <CommIcon size={22} strokeWidth={1.85} aria-hidden />
                          </span>
                          <span className="home-browse-label">{c.name}</span>
                        </button>
                        );
                      })}
                </>
              )}
            </div>
            {browseDotsCount > 1 ? (
              <div className="scroll-dots scroll-dots--browse" aria-label="التنقل بين الفئات" role="tablist">
                {Array.from({ length: browseDotsCount }).slice(0, 14).map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    className={`scroll-dot${i === browseDotActive ? ' scroll-dot--active' : ''}`}
                    aria-label={`فئة ${i + 1}`}
                    aria-selected={i === browseDotActive}
                    onClick={() => {
                      const rail = browseScrollRef.current;
                      if (!rail) return;
                      const items = Array.from(rail.querySelectorAll('.home-browse-item'));
                      const el = items[i];
                      if (!el) return;
                      rail.scrollTo({ left: Math.max(0, el.offsetLeft - 12), behavior: 'smooth' });
                    }}
                  />
                ))}
              </div>
            ) : null}
            {filterMode === 'community' ? (
              <div
                className="home-community-below"
                ref={communityBelowRef}
                aria-label="نقاط الخدمة في القسم المحدد"
              >
                <h3 className="home-community-below-title">
                  {selectedCommunityCategoryId != null
                    ? 'النقاط في هذا القسم'
                    : 'كل النقاط المعتمدة'}
                </h3>
                {communityPointsLoading ? (
                  <p className="home-community-below-loading" role="status">
                    جاري تحميل النقاط…
                  </p>
                ) : communityPoints.length === 0 ? (
                  <p className="home-community-below-empty">
                    {selectedCommunityCategoryId != null
                      ? 'لا توجد نقاط معتمدة في هذا القسم بعد.'
                      : 'لا توجد نقاط خدمات مجتمعية معتمدة حالياً.'}
                  </p>
                ) : (
                  <ul className="home-community-below-list">
                    {communityPoints.map((p) => {
                      const coordsOk = communityPointHasMapCoords(p);
                      const desc = (p.detail_description || '').trim();
                      const descShort =
                        desc.length > 160 ? `${desc.slice(0, 160).trimEnd()}…` : desc;
                      return (
                        <li key={p.id} className="home-community-point">
                          <div className="home-community-point-body">
                            <span className="home-community-point-cat">{p.category_name}</span>
                            <div className="home-community-point-title">{p.title}</div>
                            {p.category_slug === 'water' && p.water_is_potable != null ? (
                              <span
                                className={`home-community-point-chip${p.water_is_potable ? ' home-community-point-chip--ok' : ''}`}
                              >
                                {p.water_is_potable
                                  ? 'مياه صالحة للشرب'
                                  : 'مياه غير صالحة للشرب'}
                              </span>
                            ) : null}
                            {p.institution_scope ? (
                              <span className="home-community-point-chip home-community-point-chip--muted">
                                {p.institution_scope_label || p.institution_scope}
                              </span>
                            ) : null}
                            {descShort ? (
                              <p className="home-community-point-desc">{descShort}</p>
                            ) : null}
                            {p.address_text ? (
                              <p className="home-community-point-address">{p.address_text}</p>
                            ) : null}
                          </div>
                          {coordsOk ? (
                            <button
                              type="button"
                              className="home-community-point-mapbtn"
                              onClick={() => {
                                const ll = communityPointLatLng(p);
                                if (!ll) return;
                                navigate('/map', {
                                  state: {
                                    mapFocus: { lat: ll[0], lng: ll[1], communityPointId: p.id },
                                    mapPreset: {
                                      mode: 'community',
                                      cc: p.category ?? null,
                                      q: p.title ?? '',
                                    },
                                  },
                                });
                              }}
                            >
                              <MapPin size={16} strokeWidth={2} aria-hidden />
                              على الخريطة
                            </button>
                          ) : null}
                        </li>
                      );
                    })}
                  </ul>
                )}
              </div>
            ) : null}
          </section>
        ) : null}

        <div
          className={`ads-section${filterMode === 'stores' ? ' ads-section--panel' : ''}`}
          ref={storesSectionRef}
        >
          {filterMode === 'community' ? (
            <div className="home-community-ads-footnote card">
              <p className="home-community-ads-footnote-text">
                لتفاصيل أكثر أو اقتراح نقطة جديدة:{' '}
                <Link to="/services" className="home-community-ads-footnote-link">
                  صفحة الخدمات المجتمعية
                </Link>
              </p>
            </div>
          ) : (
            <>
              <div className="nearby-head flex-between">
                <h3 className="nearby-title">
                  {selectedCategoryId != null
                    ? `المتاجر القريبة — ${categories.find((x) => Number(x.id) === Number(selectedCategoryId))?.name || 'القسم المختار'}`
                    : 'المتاجر القريبة'}
                </h3>
                <div className="nearby-filter-option">
                  <label className="nearby-map-toggle">
                    <input
                      type="checkbox"
                      className="nearby-map-toggle-input"
                      checked={hideNoLocation}
                      onChange={(e) => setHideNoLocation(e.target.checked)}
                    />
                    <span className="nearby-map-toggle-track" aria-hidden />
                    <span className="nearby-map-toggle-copy">
                      <span className="nearby-map-toggle-title">المتاجر على الخريطة فقط</span>
                      <span className="nearby-map-toggle-hint">
                        مفعّل: تُخفى المحلات بدون نقطة على الخريطة. معطّل: تظهر كل النتائج.
                      </span>
                    </span>
                  </label>
                </div>
              </div>
              {loading ? (
                <p className="nearby-loading">جاري تحميل المتاجر...</p>
              ) : sortedStores.length > 0 ? (
                <>
                  <div className="nearby-rail">
                    {pagedStores.map((store) => {
                      const visual = getStorePinDisplay(store, categories);
                      const distKm =
                        userLocation && hasMappableCoords(store)
                          ? haversineKm(userLocation, [Number(store.latitude), Number(store.longitude)])
                          : null;
                      const openTag =
                        storeHasWeeklyHoursSchedule(store.business_hours_weekly) && store.is_open_now === true
                          ? 'مفتوح'
                          : storeHasWeeklyHoursSchedule(store.business_hours_weekly) && store.is_open_now === false
                            ? 'مغلق'
                            : null;
                      return (
                        <Link key={store.id} to={`/stores/${store.id}`} className="nearby-card">
                          <div className="nearby-card-main">
                            <div className="nearby-card-text">
                              <span className="nearby-card-name">{store.store_name}</span>
                              <span className="nearby-card-cat">{storeCategoryLabel(store)}</span>
                              <span className="nearby-card-dist">
                                {distKm != null ? (
                                  <>
                                    📍 {distKm.toFixed(1)} كم
                                  </>
                                ) : (
                                  <>بدون مسافة</>
                                )}
                              </span>
                            </div>
                            {openTag ? <span className="nearby-card-status">{openTag}</span> : null}
                          </div>
                          <div className="nearby-card-thumb">
                            {visual.type === 'image' ? (
                              <img className="nearby-card-thumb-img" src={visual.url} alt="" loading="lazy" width="800" height="800" />
                            ) : (
                              <span className="nearby-card-thumb-emoji" style={{ background: visual.bg }}>
                                {visual.emoji}
                              </span>
                            )}
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                  {totalStoresPages > 1 ? (
                    <div className="home-pagination" role="navigation" aria-label="صفحات المتاجر">
                      <button
                        type="button"
                        className="home-pagination-btn"
                        disabled={safeStoresPage <= 1}
                        onClick={() => setStoresPage((p) => Math.max(1, p - 1))}
                      >
                        السابق
                      </button>
                      <span className="home-pagination-meta">
                        {safeStoresPage} / {totalStoresPages}
                      </span>
                      <button
                        type="button"
                        className="home-pagination-btn"
                        disabled={safeStoresPage >= totalStoresPages}
                        onClick={() => setStoresPage((p) => Math.min(totalStoresPages, p + 1))}
                      >
                        التالي
                      </button>
                    </div>
                  ) : null}
                  {totalStoresPages > 1 ? (
                    <div className="scroll-dots scroll-dots--pages" aria-label="صفحات المتاجر" role="tablist">
                      {Array.from({ length: totalStoresPages }).slice(0, 12).map((_, i) => {
                        const page = i + 1;
                        return (
                          <button
                            key={page}
                            type="button"
                            className={`scroll-dot${page === safeStoresPage ? ' scroll-dot--active' : ''}`}
                            aria-label={`صفحة ${page}`}
                            aria-selected={page === safeStoresPage}
                            onClick={() => setStoresPage(page)}
                          />
                        );
                      })}
                    </div>
                  ) : null}
                </>
              ) : (
                <p className="nearby-empty">
                  لا توجد متاجر ضمن الفلتر. جرّب «الكل» أو ألغِ «على الخريطة فقط» لرؤية متاجر بدون موقع. للبحث بالاسم
                  استخدم مربع البحث في أعلى الصفحة (قسم الترحيب).
                </p>
              )}
            </>
          )}
        </div>
        </div>

        <style dangerouslySetInnerHTML={{ __html: `
          .home-container {
            padding-inline: clamp(8px, 2.2vw, 22px);
            box-sizing: border-box;
            max-width: 1240px;
            margin-inline: auto;
            padding-bottom: 22px;
          }
          .home-hero {
            position: relative;
            margin-bottom: 14px;
            margin-top: 2px;
            border-radius: 22px;
            border: 1px solid rgba(255, 213, 79, 0.35);
            box-shadow: 0 8px 32px rgba(26, 29, 38, 0.08);
            overflow: hidden;
            background: linear-gradient(165deg, #fffef5 0%, #fff9e6 42%, #fffdf0 100%);
          }

          .home-exclusive {
            margin: 10px 0 14px;
            border-radius: 22px;
            border: 1px solid rgba(232, 230, 224, 0.95);
            background: rgba(255, 255, 255, 0.92);
            box-shadow: 0 6px 22px rgba(26, 29, 38, 0.06);
            padding: 12px 12px 10px;
          }
          .home-exclusive-head {
            display: flex;
            align-items: flex-end;
            justify-content: space-between;
            gap: 12px;
            margin-bottom: 10px;
          }
          .home-exclusive-title {
            margin: 0;
            font-size: 1.05rem;
            font-weight: 900;
            color: var(--secondary);
            letter-spacing: -0.02em;
          }
          .home-exclusive-sub {
            margin: 4px 0 0;
            font-size: 0.76rem;
            font-weight: 600;
            color: var(--text-secondary);
            line-height: 1.4;
          }
          .home-exclusive-more {
            display: inline-flex;
            align-items: center;
            gap: 6px;
            font-size: 0.8rem;
            font-weight: 900;
            color: var(--secondary);
            text-decoration: none;
            padding: 8px 12px;
            border-radius: 999px;
            background: var(--primary-light);
            border: 1px solid rgba(245, 192, 0, 0.45);
            flex-shrink: 0;
          }
          .home-exclusive-more:hover { filter: brightness(1.03); }
          .home-exclusive-rail {
            display: flex;
            gap: 12px;
            overflow-x: auto;
            padding-bottom: 8px;
            scroll-snap-type: x proximity;
            -webkit-overflow-scrolling: touch;
            /* مثل التصميم بالصورة: سكرول مخفي */
            scrollbar-width: none;
          }
          .home-exclusive-rail::-webkit-scrollbar { height: 0; }

          .scroll-dots {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 6px;
            margin-top: 10px;
            margin-bottom: 2px;
          }
          .scroll-dots--browse {
            margin-top: 8px;
          }
          .scroll-dots--pages {
            margin-top: 10px;
            margin-bottom: 0;
          }
          .scroll-dot {
            width: 7px;
            height: 7px;
            border-radius: 999px;
            border: 1px solid rgba(245, 192, 0, 0.45);
            background: rgba(245, 192, 0, 0.18);
            padding: 0;
            cursor: pointer;
            transition: transform 0.12s ease, background 0.15s ease, border-color 0.15s ease;
          }
          .scroll-dot:hover {
            border-color: rgba(245, 192, 0, 0.68);
            background: rgba(245, 192, 0, 0.28);
          }
          .scroll-dot--active {
            width: 18px;
            background: linear-gradient(90deg, var(--primary-hover), var(--primary));
            border-color: rgba(245, 192, 0, 0.8);
            box-shadow: 0 4px 12px rgba(245, 192, 0, 0.28);
          }
          .scroll-dot:focus-visible {
            outline: 3px solid rgba(245, 192, 0, 0.45);
            outline-offset: 3px;
          }

          .home-exclusive-card {
            position: relative;
            flex: 0 0 auto;
            width: 230px;
            border-radius: 18px;
            overflow: hidden;
            text-decoration: none;
            color: inherit;
            scroll-snap-align: start;
            border: 1px solid rgba(232, 230, 224, 0.95);
            box-shadow: 0 6px 20px rgba(26, 29, 38, 0.08);
            background: #fff;
            display: flex;
            flex-direction: column;
          }
          .home-exclusive-card:hover {
            border-color: rgba(245, 192, 0, 0.5);
            box-shadow: 0 10px 28px rgba(245, 192, 0, 0.16);
            transform: translateY(-1px);
          }
          .home-exclusive-cover {
            position: relative;
            width: 100%;
            height: 130px;
            background-size: cover;
            background-position: center;
            background-color: rgba(26, 29, 38, 0.04);
          }
          .home-exclusive-badge {
            position: absolute;
            top: 10px;
            inset-inline-end: 10px;
            padding: 4px 10px;
            border-radius: 999px;
            font-size: 0.72rem;
            font-weight: 900;
            color: #111;
            background: rgba(255, 204, 0, 0.92);
            border: 1px solid rgba(255, 255, 255, 0.35);
            z-index: 2;
          }
          .home-exclusive-meta {
            padding: 10px 12px 12px;
            text-align: right;
            display: flex;
            flex-direction: column;
            gap: 4px;
          }
          .home-exclusive-ad-title {
            font-weight: 900;
            font-size: 0.92rem;
            color: var(--secondary);
            line-height: 1.25;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            overflow: hidden;
          }
          .home-exclusive-store {
            font-size: 0.75rem;
            font-weight: 700;
            color: var(--text-secondary);
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
          }
          .home-exclusive-price {
            margin-top: 2px;
            align-self: flex-start;
            font-weight: 950;
            font-size: 0.82rem;
            color: var(--secondary);
            background: var(--primary-light);
            border: 1px solid rgba(245, 192, 0, 0.35);
            padding: 5px 9px;
            border-radius: 999px;
            white-space: nowrap;
          }
          .home-exclusive-skel {
            flex: 0 0 auto;
            width: 230px;
            height: 172px;
            border-radius: 18px;
            background: linear-gradient(90deg, rgba(232, 230, 224, 0.65), rgba(245, 243, 238, 0.8), rgba(232, 230, 224, 0.65));
            background-size: 220% 100%;
            animation: homeExclusiveShimmer 1.25s ease-in-out infinite;
            border: 1px solid rgba(232, 230, 224, 0.95);
          }
          .home-exclusive-empty {
            padding: 12px 14px;
            border-radius: 14px;
            border: 1px dashed rgba(232, 230, 224, 0.95);
            background: rgba(255, 255, 255, 0.72);
            color: var(--text-secondary);
            font-weight: 700;
            font-size: 0.86rem;
          }
          @keyframes homeExclusiveShimmer {
            0% { background-position: 0% 0; }
            100% { background-position: 100% 0; }
          }
          @media (max-width: 520px) {
            .home-exclusive-card,
            .home-exclusive-skel {
              width: 220px;
              border-radius: 16px;
            }
            .home-exclusive-cover {
              height: 118px;
            }
            .home-exclusive-badge {
              font-size: 0.68rem;
              padding: 3px 9px;
            }
          }
          .home-hero-backdrop {
            position: absolute;
            inset: 0;
            pointer-events: none;
            background:
              radial-gradient(ellipse 90% 70% at 15% 18%, rgba(255, 210, 0, 0.35) 0%, transparent 55%),
              radial-gradient(ellipse 65% 50% at 88% 82%, rgba(255, 235, 160, 0.45) 0%, transparent 50%),
              linear-gradient(168deg, rgba(255, 253, 245, 0.9) 0%, rgba(255, 249, 230, 0.98) 50%, rgba(255, 252, 238, 1) 100%);
            filter: saturate(1.08);
          }
          .home-hero-inner {
            position: relative;
            z-index: 1;
            padding: clamp(16px, 3.6vw, 26px) clamp(14px, 3vw, 24px) clamp(18px, 3.8vw, 28px);
            display: flex;
            flex-direction: column;
            align-items: stretch;
            gap: clamp(14px, 3vw, 20px);
            max-width: min(640px, 100%);
            margin-inline: auto;
            text-align: center;
          }
          .home-hero-copy {
            text-align: center;
          }
          .home-hero-title {
            margin: 0 0 8px;
            font-size: clamp(1.38rem, 4.2vw, 1.78rem);
            font-weight: 900;
            color: var(--secondary);
            letter-spacing: -0.03em;
            line-height: 1.22;
          }
          .home-hero-sub {
            margin: 0 auto;
            font-size: 0.9rem;
            color: var(--text-secondary);
            line-height: 1.65;
            max-width: 34em;
            font-weight: 600;
          }
          @media (max-width: 768px) {
            .home-hero-inner {
              padding: 12px 12px 14px;
              gap: 10px;
              max-width: 100%;
            }
            .home-hero-title {
              font-size: 1.18rem;
              margin-bottom: 6px;
              line-height: 1.2;
            }
            .home-hero-sub {
              font-size: 0.82rem;
              line-height: 1.55;
              max-width: 30em;
            }
          }

          /* على الشاشات الكبيرة: زر "الكل" في شريط الفئات غير لازم */
          @media (min-width: 900px) {
            .home-browse-item--all {
              display: none;
            }
          }
          .home-mode-strip {
            display: flex;
            justify-content: center;
            margin-bottom: 12px;
            margin-top: 0;
          }
          .home-mode-switch {
            display: inline-flex;
            align-items: stretch;
            padding: 3px;
            gap: 2px;
            border-radius: var(--radius-pill);
            background: var(--white);
            border: 1px solid rgba(232, 230, 224, 0.95);
            box-shadow: 0 2px 14px rgba(26, 29, 38, 0.06);
          }
          .home-mode-btn {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            gap: 5px;
            padding: 5px 12px;
            min-height: 32px;
            border: none;
            border-radius: var(--radius-pill);
            font-family: inherit;
            font-size: 0.74rem;
            font-weight: 900;
            letter-spacing: 0.02em;
            cursor: pointer;
            color: var(--text-secondary);
            background: transparent;
            transition: color 0.15s ease, background 0.18s ease, box-shadow 0.18s ease;
          }
          .home-mode-btn:hover {
            color: var(--secondary);
            background: var(--primary-light);
          }
          .home-mode-btn:focus-visible {
            outline: 2px solid var(--primary);
            outline-offset: 2px;
          }
          .home-mode-btn--on {
            color: var(--secondary);
            background: linear-gradient(180deg, var(--primary) 0%, var(--primary-hover) 100%);
            box-shadow: var(--shadow-gold);
          }
          .home-mode-btn--on:hover {
            filter: brightness(1.02);
          }

          .map-section {
            margin-bottom: 12px;
            margin-top: 2px;
            padding: clamp(8px, 1.6vw, 11px);
            border-radius: 16px;
            background: linear-gradient(160deg, #f8fbf9 0%, rgba(255, 253, 244, 0.88) 100%);
            border: 1px solid rgba(190, 202, 196, 0.5);
            box-shadow: 0 3px 16px rgba(26, 29, 38, 0.045);
            max-width: min(460px, 100%);
            margin-inline: auto;
          }
          .map-section-head--compact {
            margin-bottom: 4px;
            align-items: center;
          }
          .map-section-title--with-icon {
            display: inline-flex;
            align-items: center;
            gap: 7px;
            font-size: 1rem;
          }
          .map-section-title-icon {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 30px;
            height: 30px;
            border-radius: 10px;
            background: linear-gradient(150deg, rgba(255, 204, 0, 0.2) 0%, rgba(255, 255, 255, 0.92) 100%);
            border: 1px solid rgba(255, 204, 0, 0.32);
            color: var(--secondary);
            box-shadow: 0 1px 8px rgba(26, 29, 38, 0.05);
          }
          .map-section--compact .map-section-badge {
            font-size: 0.64rem;
            padding: 2px 8px;
            font-weight: 800;
            letter-spacing: 0.02em;
          }
          .map-section-hint-muted--short {
            margin: 0 0 6px;
            font-size: 0.7rem;
            line-height: 1.4;
            color: var(--text-secondary);
            font-weight: 600;
          }
          .map-hint-line--compact {
            margin: 0 0 6px;
            font-size: 0.68rem;
            padding: 5px 9px;
            border-radius: 9px;
          }
          .map-section-footnote {
            margin: 8px 0 0;
            font-size: 0.76rem;
            color: var(--text-secondary);
            line-height: 1.5;
            font-weight: 600;
          }
          .map-section-footnote-link {
            font-weight: 800;
            color: var(--secondary);
            text-decoration: none;
            border-bottom: 1px solid rgba(26, 29, 38, 0.12);
          }
          .map-section-footnote-link:hover {
            border-bottom-color: var(--primary-hover);
          }
          .map-section-error {
            margin: 8px 0 0;
            color: #c0392b;
            font-weight: 800;
            font-size: 0.82rem;
          }

          .home-top-grid {
            display: block;
            margin: 10px 0 14px;
          }
          .home-top-grid__exclusive {
            min-width: 0;
          }

          .home-sponsored-block {
            border-radius: 22px;
            border: 1px solid rgba(232, 230, 224, 0.95);
            background: rgba(255, 255, 255, 0.94);
            box-shadow: 0 6px 22px rgba(26, 29, 38, 0.06);
            padding: 14px 12px 16px;
          }
          .home-sponsored-head {
            display: flex;
            align-items: flex-start;
            justify-content: flex-start;
            gap: 12px;
            margin-bottom: 12px;
            flex-wrap: nowrap;
          }
          .home-sponsored-head-text {
            flex: 1 1 auto;
            min-width: 0;
          }
          .home-sponsored-title {
            margin: 0 0 6px;
            font-size: 1.05rem;
            font-weight: 900;
            color: var(--secondary);
          }
          .home-sponsored-sub {
            margin: 0;
            font-size: 0.8rem;
            color: var(--text-secondary);
            line-height: 1.45;
            font-weight: 600;
          }
          .home-sponsored-controls {
            margin-top: 12px;
            display: flex;
            flex-wrap: wrap;
            gap: 10px;
            align-items: center;
          }
          .home-sponsored-more {
            display: inline-flex;
            align-items: center;
            gap: 6px;
            font-size: 0.8rem;
            font-weight: 900;
            color: var(--secondary);
            text-decoration: none;
            padding: 8px 12px;
            border-radius: 999px;
            background: var(--primary-light);
            border: 1px solid rgba(245, 192, 0, 0.45);
            flex-shrink: 0;
            margin-inline-start: auto;
          }
          .home-sponsored-more:hover {
            filter: brightness(1.03);
          }
          @media (max-width: 640px) {
            .home-sponsored-head {
              flex-wrap: wrap;
            }
            .home-sponsored-more {
              margin-inline-start: 0;
            }
          }
          .home-random-cats {
            display: flex;
            flex-direction: column;
            gap: 12px;
            margin: 0 0 12px;
            width: 100%;
            max-width: 100%;
            overflow: hidden;
          }
          .home-random-cat-block {
            padding: 14px 12px 16px;
            width: 100%;
            max-width: 100%;
            margin: 0;
            position: relative;
            left: auto !important;
            inset-inline-start: auto !important;
            transform: none !important;
            overflow: hidden;
            box-sizing: border-box;
          }
          .home-random-cat-block .home-sponsored-rail {
            direction: rtl;
          }
          .home-random-cat-block .home-sponsored-rail__track {
            direction: rtl;
          }
          .home-sponsored-rail-wrap {
            overflow: hidden;
            width: 100%;
            cursor: grab;
            touch-action: pan-y;
            user-select: none;
          }
          .home-sponsored-rail-wrap:active {
            cursor: grabbing;
          }
          .home-sponsored-rail {
            overflow: hidden;
            width: 100%;
            padding-bottom: 2px;
            direction: ltr;
          }
          .home-sponsored-rail__track {
            display: flex;
            gap: 10px;
            width: max-content;
            will-change: transform;
            transform: translate3d(0, 0, 0);
            direction: ltr;
          }
          .home-sponsored-seek-input {
            margin-top: 8px;
            width: 100%;
            height: 10px;
            -webkit-appearance: none;
            appearance: none;
            background: transparent;
            border: 0;
            box-shadow: none;
            cursor: grab;
            direction: rtl;
          }
          .home-sponsored-seek-input:active { cursor: grabbing; }
          .home-sponsored-seek-input:focus {
            outline: none;
          }
          .home-sponsored-seek-input::-webkit-slider-runnable-track {
            height: 8px;
            border-radius: 999px;
            background: #f0f0f0;
            border: 0;
          }
          .home-sponsored-seek-input::-webkit-slider-thumb {
            -webkit-appearance: none;
            appearance: none;
            width: 18px;
            height: 18px;
            border-radius: 50%;
            background: #f3c800;
            border: 0;
            box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
            margin-top: -6px;
            cursor: grab;
          }
          .home-sponsored-seek-input::-moz-range-track {
            height: 8px;
            border-radius: 999px;
            background: #f0f0f0;
            border: 0;
          }
          .home-sponsored-seek-input::-moz-range-thumb {
            width: 18px;
            height: 18px;
            border-radius: 50%;
            background: #f3c800;
            border: 0;
            box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
            cursor: grab;
          }
          @media (max-width: 640px) {
            .home-sponsored-seek-input {
              display: none;
            }
          }
          .home-sponsored-card {
            display: flex;
            flex-direction: column;
            align-items: stretch;
            text-decoration: none;
            color: inherit;
            border-radius: 16px;
            border: 1px solid rgba(232, 230, 224, 0.95);
            background: rgba(255, 255, 255, 0.92);
            box-shadow: 0 10px 26px rgba(26, 29, 38, 0.05);
            overflow: hidden;
            min-width: 0;
            flex: 0 0 clamp(210px, 26vw, 280px);
            direction: rtl;
            cursor: default;
          }
          .home-sponsored-card:hover {
            border-color: rgba(245, 192, 0, 0.45);
            box-shadow: 0 16px 40px rgba(245, 192, 0, 0.14);
          }
          .home-sponsored-card__thumb {
            order: -1;
            width: 100%;
            aspect-ratio: 4 / 3;
            max-height: 140px;
            background: rgba(26, 29, 38, 0.04);
            display: flex;
            align-items: center;
            justify-content: center;
            border-bottom: 1px solid rgba(232, 230, 224, 0.85);
            position: relative;
          }
          .home-sponsored-card__img {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
          .home-sponsored-card__ph {
            font-size: 2rem;
            opacity: 0.85;
          }
          .home-sponsored-card__cartbtn{
            position: absolute;
            top: 8px;
            inset-inline-start: 8px;
            z-index: 3;
            width: 34px;
            height: 34px;
            border-radius: 11px;
            border: 1px solid rgba(245,192,0,0.5);
            background: rgba(255, 255, 255, 0.94);
            box-shadow: 0 6px 18px rgba(26, 29, 38, 0.12);
            color: var(--secondary);
            display: inline-flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            transition: transform 0.12s ease, box-shadow 0.16s ease, filter 0.16s ease;
          }
          .home-sponsored-card__cartbtn--muted { opacity: 0.88; }
          .home-sponsored-card__cartbtn:hover:not(:disabled) {
            transform: translateY(-1px) scale(1.04);
            box-shadow: 0 8px 18px rgba(26, 29, 38, 0.16);
            filter: brightness(1.02);
          }
          .home-sponsored-card__cartbtn:active {
            transform: scale(0.9);
            filter: brightness(0.98);
            box-shadow: 0 3px 10px rgba(26, 29, 38, 0.12);
          }
          .home-sponsored-card__favbtn{
            position: absolute;
            top: 8px;
            inset-inline-end: 8px;
            z-index: 3;
            width: 34px;
            height: 34px;
            border-radius: 11px;
            border: 1px solid rgba(233, 30, 99, 0.38);
            background: rgba(255, 255, 255, 0.94);
            box-shadow: 0 6px 18px rgba(26, 29, 38, 0.12);
            color: #e91e63;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            transition: transform 0.12s ease, box-shadow 0.16s ease, filter 0.16s ease;
          }
          .home-sponsored-card__favbtn--muted { opacity: 0.88; }
          .home-sponsored-card__favbtn:hover:not(:disabled) {
            transform: translateY(-1px) scale(1.04);
            box-shadow: 0 8px 18px rgba(26, 29, 38, 0.16);
            filter: brightness(1.02);
          }
          .home-sponsored-card__favbtn:active {
            transform: scale(0.9);
            filter: brightness(0.98);
            box-shadow: 0 3px 10px rgba(26, 29, 38, 0.12);
          }
          .home-sponsored-card__body {
            padding: 10px 10px 12px;
            display: flex;
            flex-direction: column;
            gap: 6px;
            min-width: 0;
          }
          .home-sponsored-card__badge {
            align-self: flex-start;
            font-size: 0.68rem;
            font-weight: 900;
            padding: 3px 8px;
            border-radius: 999px;
            background: rgba(255, 204, 0, 0.88);
            color: #111;
            border: 1px solid rgba(255, 255, 255, 0.35);
          }
          .home-sponsored-card__adtitle {
            font-weight: 950;
            font-size: 0.88rem;
            color: var(--secondary);
            line-height: 1.25;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            overflow: hidden;
          }
          .home-sponsored-card__meta {
            display: flex;
            align-items: center;
            gap: 8px;
            flex-wrap: wrap;
            font-size: 0.78rem;
            font-weight: 800;
            color: var(--text-secondary);
          }
          .home-sponsored-card__store {
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            min-width: 0;
            max-width: 100%;
          }
          .home-sponsored-card__dot {
            width: 4px;
            height: 4px;
            border-radius: 999px;
            background: rgba(26, 29, 38, 0.25);
            flex-shrink: 0;
          }
          .home-sponsored-card__price {
            font-weight: 950;
            font-size: 0.82rem;
            color: var(--secondary);
            background: var(--primary-light);
            border: 1px solid rgba(245, 192, 0, 0.35);
            padding: 5px 9px;
            border-radius: 999px;
            align-self: flex-start;
          }
          .home-sponsored-card__storebtn{
            margin-top: 0;
            width: 100%;
            text-align: center;
            text-decoration: none;
            border-radius: 12px;
            border: 1.5px solid var(--primary);
            background: var(--white);
            color: var(--secondary);
            font-weight: 900;
            font-size: 0.76rem;
            padding: 8px 10px;
            box-sizing: border-box;
            cursor: pointer;
          }
          .home-sponsored-card__detailsbtn{
            margin-top: 0;
            width: 100%;
            text-align: center;
            text-decoration: none;
            border-radius: 12px;
            border: 1.5px solid rgba(245, 192, 0, 0.52);
            background: var(--primary-light);
            color: var(--secondary);
            font-weight: 900;
            font-size: 0.76rem;
            padding: 8px 10px;
            box-sizing: border-box;
            display: inline-block;
            cursor: pointer;
          }
          .home-sponsored-card__actions{
            margin-top: auto;
            display: flex;
            flex-direction: column;
            gap: 8px;
          }
          .home-sponsored-card__detailsbtn:hover{
            transform: translateY(-1px) scale(1.01);
            filter: brightness(1.01);
            box-shadow: 0 8px 16px rgba(245, 192, 0, 0.2);
          }
          .home-sponsored-card__detailsbtn:active{
            transform: scale(0.97);
          }
          .home-sponsored-card__storebtn:hover{
            transform: translateY(-1px) scale(1.01);
            filter: brightness(1.01);
            box-shadow: 0 8px 16px rgba(245, 192, 0, 0.2);
          }
          .home-sponsored-card__storebtn:active{
            transform: scale(0.97);
          }
          .home-sponsored-card__storebtn--demo {
            border-style: dashed;
            opacity: 0.86;
          }
          .home-sponsored-card__detailsbtn--demo {
            border-style: dashed;
            opacity: 0.86;
            cursor: pointer;
          }
          .home-sponsored-skel {
            border-radius: 16px;
            min-height: 200px;
            flex: 0 0 clamp(210px, 26vw, 280px);
            background: linear-gradient(
              90deg,
              rgba(232, 230, 224, 0.65),
              rgba(245, 243, 238, 0.8),
              rgba(232, 230, 224, 0.65)
            );
            background-size: 220% 100%;
            animation: homeExclusiveShimmer 1.25s ease-in-out infinite;
            border: 1px solid rgba(232, 230, 224, 0.95);
          }
          .home-sponsored-empty {
            padding: 16px;
            text-align: center;
            border-radius: 16px;
            border: 1px dashed rgba(232, 230, 224, 0.95);
            color: var(--text-secondary);
            font-weight: 800;
            font-size: 0.88rem;
          }
          .home-offers-section--split {
            margin-bottom: 0;
            flex: 1;
            min-height: 0;
            padding: clamp(9px, 1.8vw, 13px) clamp(10px, 2vw, 14px) clamp(11px, 2vw, 15px);
            display: flex;
            flex-direction: column;
            border-radius: 16px;
            border: 1px solid rgba(232, 210, 120, 0.42);
            color: var(--text-primary);
            background: linear-gradient(
              165deg,
              rgba(255, 253, 244, 0.98) 0%,
              rgba(255, 250, 230, 0.88) 38%,
              rgba(255, 255, 255, 0.97) 100%
            );
            box-shadow:
              0 1px 0 rgba(255, 255, 255, 0.85) inset,
              0 4px 20px rgba(26, 29, 38, 0.06);
          }
          .home-offers-section--split .home-offers-head {
            margin-bottom: 12px;
            padding-bottom: 10px;
            border-bottom: 1px solid rgba(245, 192, 0, 0.22);
            align-items: flex-start;
          }
          .home-offers-section--split .home-offers-kicker {
            font-size: 0.95rem;
            font-weight: 900;
            color: var(--secondary);
            letter-spacing: -0.02em;
            line-height: 1.25;
          }
          .home-offers-section--split .home-offers-sub {
            font-size: 0.72rem;
            color: var(--text-secondary);
            margin-top: 4px;
            line-height: 1.4;
          }
          .home-offers-section--split .home-offers-more {
            flex-shrink: 0;
            padding: 7px 13px;
            font-size: 0.76rem;
          }
          .home-offers-section--split .home-offer-card {
            border-radius: 13px;
            border: 1px solid rgba(232, 230, 224, 0.95);
            background: #fff;
            box-shadow: 0 4px 14px rgba(26, 29, 38, 0.06);
            isolation: isolate;
          }
          .home-offers-section--split .home-offer-card-visual {
            display: grid;
            grid-template-rows: 76px 1fr;
          }
          .home-offers-section--split .home-offer-img {
            border-bottom: 1px solid rgba(232, 230, 224, 0.75);
          }
          .home-offers-section--split .home-offer-card:hover {
            border-color: rgba(245, 192, 0, 0.45);
            box-shadow: 0 12px 26px rgba(245, 192, 0, 0.14);
          }
          .home-offers-section--split .home-offer-title {
            font-size: 0.82rem;
            color: var(--secondary);
          }
          .home-offers-section--split .home-offer-store {
            color: var(--text-secondary);
          }
          .home-offers-section--split .home-offer-price {
            color: var(--secondary);
          }
          /* تثبيت ظهور النص داخل لوحة العروض (حماية من أي تعارضات) */
          .home-offers-section--split .home-offer-card-visual,
          .home-offers-section--split .home-offer-body,
          .home-offers-section--split .home-offer-topline,
          .home-offers-section--split .home-offer-title,
          .home-offers-section--split .home-offer-desc,
          .home-offers-section--split .home-offer-store,
          .home-offers-section--split .home-offer-badge,
          .home-offers-section--split .home-offer-price,
          .home-offers-section--split .home-offer-cta {
            opacity: 1 !important;
            visibility: visible !important;
            color: inherit;
          }
          .home-offers-section--split .home-offer-body { color: var(--text-primary); }
          .home-offers-section--split .home-offer-title,
          .home-offers-section--split .home-offer-price,
          .home-offers-section--split .home-offer-cta { color: var(--secondary); }
          .home-offers-section--split .home-offer-store,
          .home-offers-section--split .home-offer-desc { color: var(--text-secondary); }
          .home-offers-section--split .home-offer-badge {
            max-width: 70%;
          }
          .home-offers-section--split .home-offer-body {
            padding: 8px 10px 10px;
            gap: 4px;
            min-height: 92px;
            position: relative;
            z-index: 1;
            background: transparent;
          }
          .home-offers-section--split .home-offer-cta {
            display: inline-flex;
            align-items: center;
            gap: 6px;
            border-radius: 9px;
            border-color: rgba(245, 192, 0, 0.42);
            background: var(--primary-light);
            color: var(--secondary);
          }
          .home-offers-panel-loading {
            flex: 1;
            min-height: 200px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 0.84rem;
            font-weight: 700;
            color: var(--text-secondary);
            border: 1px dashed rgba(245, 192, 0, 0.38);
            border-radius: 13px;
            background: rgba(255, 255, 255, 0.72);
          }
          .home-offers-panel-empty {
            flex: 1;
            min-height: 200px;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: 10px;
            padding: 16px;
            text-align: center;
            border-radius: 12px;
            border: 1px dashed rgba(232, 230, 224, 0.95);
            background: rgba(255, 255, 255, 0.72);
          }
          .home-offers-panel-empty-text {
            margin: 0;
            font-size: 0.82rem;
            font-weight: 700;
            color: var(--text-secondary);
            line-height: 1.5;
          }
          .home-offers-panel-empty-link {
            font-size: 0.8rem;
            font-weight: 900;
            color: var(--secondary);
            text-decoration: none;
            padding: 8px 14px;
            border-radius: 999px;
            border: 1px solid rgba(245, 192, 0, 0.5);
            background: var(--primary-light);
          }
          .home-offers-panel-empty-link:hover {
            filter: brightness(1.03);
          }
          .home-offers-grid--split {
            /* ثابت داخل اللوحة الجانبية: لا يتغير عدد الأعمدة مع كبر الشاشة */
            display: flex;
            flex-direction: column;
            gap: 11px;
            flex: 1;
            overflow-y: auto;
            max-height: min(360px, 50vh);
            padding: 2px 2px 2px 0;
            padding-inline-end: 6px;
            /* مثل التصميم بالصورة: سكرول مخفي */
            scrollbar-width: none;
          }
          /* تأكيد أعلى خصوصية ضد ميديا .home-offers-grid العامة */
          .home-offers-grid.home-offers-grid--split {
            display: flex !important;
            grid-template-columns: none !important;
          }
          .home-offers-grid--split::-webkit-scrollbar { width: 0; }
          .home-pagination--split {
            margin-top: 12px;
            padding-top: 10px;
            gap: 10px;
            border-top: 1px solid rgba(245, 192, 0, 0.22);
          }

          @media (max-width: 520px) {
            .home-top-grid { gap: 12px; }
          }

          .ads-section { margin-bottom: 22px; }
          .ads-section--panel {
            padding: clamp(16px, 3vw, 22px) clamp(14px, 2.5vw, 20px);
            border-radius: var(--radius-xl);
            background: linear-gradient(165deg, rgba(255, 255, 255, 1) 0%, rgba(255, 249, 230, 0.55) 100%);
            border: 1px solid rgba(232, 230, 224, 0.9);
            box-shadow: 0 4px 22px rgba(26, 29, 38, 0.06);
          }

          .home-pagination {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 14px;
            margin-top: 16px;
            flex-wrap: wrap;
          }

          .home-pagination-btn {
            font-family: inherit;
            font-weight: 800;
            font-size: 0.86rem;
            padding: 9px 16px;
            border-radius: 12px;
            border: 1px solid var(--border);
            background: linear-gradient(135deg, var(--primary) 0%, var(--primary-hover) 100%);
            color: var(--secondary);
            cursor: pointer;
            box-shadow: var(--shadow-sm);
          }

          .home-pagination-btn:disabled {
            opacity: 0.45;
            cursor: not-allowed;
          }

          .home-pagination-meta {
            font-weight: 800;
            font-size: 0.86rem;
            color: var(--text-secondary);
          }

          .home-browse-block {
            margin-bottom: 16px;
            padding: 14px 14px 12px;
            border-radius: 18px;
            background: rgba(255, 255, 255, 0.92);
            border: 1px solid rgba(232, 230, 224, 0.95);
            box-shadow: 0 4px 18px rgba(26, 29, 38, 0.06);
          }
          .home-browse-head {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 10px;
            margin-bottom: 10px;
          }
          .home-browse-title {
            font-size: 1.1rem;
            font-weight: 900;
            color: var(--secondary);
            margin: 0 0 10px;
            letter-spacing: -0.02em;
          }
          .home-browse-head .home-browse-title {
            margin: 0;
          }
          .home-browse-filterbtn {
            appearance: none;
            border: 1px solid rgba(232, 230, 224, 0.95);
            background: rgba(255, 255, 255, 0.92);
            box-shadow: 0 2px 12px rgba(26, 29, 38, 0.06);
            color: var(--secondary);
            border-radius: 999px;
            padding: 9px 12px;
            display: inline-flex;
            align-items: center;
            gap: 8px;
            font-family: inherit;
            cursor: pointer;
            font-weight: 900;
            min-width: 0;
          }
          .home-browse-filterbtn:disabled {
            opacity: 0.6;
            cursor: wait;
          }
          .home-browse-filterbtn-text {
            font-size: 0.86rem;
            font-weight: 900;
            color: var(--text-secondary);
            max-width: 160px;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
          }
          .home-browse-scroll {
            display: flex;
            gap: 10px;
            overflow-x: auto;
            padding-bottom: 6px;
            scroll-snap-type: x proximity;
            -webkit-overflow-scrolling: touch;
            /* مثل التصميم بالصورة: سكرول مخفي */
            scrollbar-width: none;
          }
          .home-browse-scroll::-webkit-scrollbar { height: 0; }
          .home-browse-item {
            flex: 0 0 auto;
            scroll-snap-align: start;
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 8px;
            width: 70px;
            border: none;
            background: none;
            cursor: pointer;
            font-family: inherit;
            padding: 4px 2px;
            color: var(--text-primary);
            transition: transform 0.18s ease;
          }

          /* موبايل: اخفِ شريط الأيقونات وخلي الفلتر الصغير هو الأساس */
          @media (max-width: 520px) {
            .home-browse-scroll,
            .scroll-dots--browse {
              display: none;
            }
            .home-browse-block {
              padding: 12px;
            }
            .home-browse-filterbtn-text {
              max-width: 190px;
            }
          }
          .home-browse-item:hover {
            transform: translateY(-2px);
          }
          .home-browse-tile {
            width: 54px;
            height: 54px;
            border-radius: 16px;
            display: flex;
            align-items: center;
            justify-content: center;
            border: 1.5px solid transparent;
            box-shadow: 0 3px 12px rgba(26, 29, 38, 0.06);
            transition: transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease, filter 0.2s ease;
          }
          .home-browse-item:hover .home-browse-tile {
            box-shadow: 0 8px 26px rgba(26, 29, 38, 0.11);
            filter: brightness(1.03);
          }
          .home-browse-item--active .home-browse-tile {
            border-color: var(--primary) !important;
            box-shadow: 0 6px 22px rgba(255, 204, 0, 0.35);
            transform: translateY(-1px);
          }
          .home-browse-label {
            font-size: 0.68rem;
            font-weight: 700;
            text-align: center;
            line-height: 1.25;
            color: var(--text-secondary);
            max-width: 82px;
          }
          .home-browse-item--active .home-browse-label {
            color: var(--secondary);
          }

          .home-community-below {
            margin-top: 18px;
            padding-top: 16px;
            border-top: 1px solid rgba(232, 230, 224, 0.95);
          }
          .home-community-below-title {
            margin: 0 0 12px;
            font-size: 1.02rem;
            font-weight: 900;
            color: var(--secondary);
            letter-spacing: -0.02em;
          }
          .home-community-below-loading,
          .home-community-below-empty {
            margin: 0;
            font-size: 0.86rem;
            font-weight: 600;
            color: var(--text-secondary);
            line-height: 1.55;
          }
          .home-community-below-list {
            list-style: none;
            margin: 0;
            padding: 0;
            display: flex;
            flex-direction: column;
            gap: 10px;
          }
          .home-community-point {
            display: flex;
            flex-wrap: wrap;
            align-items: flex-start;
            justify-content: space-between;
            gap: 10px 14px;
            padding: 12px 14px;
            border-radius: 14px;
            background: var(--white);
            border: 1px solid rgba(232, 230, 224, 0.95);
            box-shadow: 0 2px 12px rgba(26, 29, 38, 0.05);
          }
          .home-community-point-body {
            flex: 1;
            min-width: min(100%, 220px);
          }
          .home-community-point-cat {
            display: inline-block;
            font-size: 0.66rem;
            font-weight: 800;
            text-transform: none;
            color: var(--secondary);
            background: var(--primary-light);
            padding: 3px 8px;
            border-radius: 8px;
            margin-bottom: 6px;
          }
          .home-community-point-title {
            font-size: 0.92rem;
            font-weight: 900;
            color: var(--secondary);
            line-height: 1.35;
            margin: 0 0 6px;
          }
          .home-community-point-chip {
            display: inline-block;
            font-size: 0.65rem;
            font-weight: 800;
            padding: 2px 8px;
            border-radius: 7px;
            margin-inline-end: 6px;
            margin-bottom: 4px;
            background: rgba(2, 119, 189, 0.12);
            color: #0277bd;
          }
          .home-community-point-chip--ok {
            background: rgba(46, 125, 50, 0.14);
            color: #2e7d32;
          }
          .home-community-point-chip--muted {
            background: rgba(26, 29, 38, 0.06);
            color: var(--text-secondary);
          }
          .home-community-point-desc {
            margin: 6px 0 0;
            font-size: 0.78rem;
            font-weight: 600;
            color: var(--text-secondary);
            line-height: 1.5;
          }
          .home-community-point-address {
            margin: 6px 0 0;
            font-size: 0.74rem;
            font-weight: 700;
            color: var(--text-primary);
            line-height: 1.45;
          }
          .home-community-point-mapbtn {
            flex-shrink: 0;
            display: inline-flex;
            align-items: center;
            gap: 6px;
            padding: 8px 12px;
            border-radius: 11px;
            border: 1.5px solid rgba(245, 192, 0, 0.55);
            background: linear-gradient(180deg, var(--primary) 0%, var(--primary-hover) 100%);
            color: var(--secondary);
            font-family: inherit;
            font-size: 0.74rem;
            font-weight: 900;
            cursor: pointer;
            box-shadow: var(--shadow-sm);
            transition: filter 0.15s ease, transform 0.12s ease;
          }
          .home-community-point-mapbtn:hover {
            filter: brightness(1.04);
          }
          .home-community-point-mapbtn:active {
            transform: scale(0.98);
          }

          .home-community-ads-footnote {
            padding: 12px 16px;
            margin-bottom: 12px;
            border-radius: 14px;
            border: 1px dashed rgba(232, 230, 224, 0.95);
            background: rgba(255, 255, 255, 0.72);
          }
          .home-community-ads-footnote-text {
            margin: 0;
            font-size: 0.82rem;
            font-weight: 600;
            color: var(--text-secondary);
            line-height: 1.55;
            text-align: center;
          }
          .home-community-ads-footnote-link {
            font-weight: 900;
            color: var(--secondary);
            text-decoration: none;
            border-bottom: 1px solid rgba(26, 29, 38, 0.15);
          }
          .home-community-ads-footnote-link:hover {
            border-bottom-color: var(--primary-hover);
          }

          .home-offers-loading {
            margin-bottom: 16px;
            padding: 12px 16px;
            font-size: 0.9rem;
            color: var(--text-secondary);
            border: 1px dashed var(--border);
            border-radius: 16px;
          }

          .home-offers-section {
            margin-bottom: 20px;
            padding: 14px 14px 16px;
            border-radius: 20px;
            border: 1px solid rgba(245, 192, 0, 0.38);
            background: linear-gradient(152deg, rgba(255, 250, 232, 0.95) 0%, rgba(255, 255, 255, 1) 45%, var(--surface) 100%);
            box-shadow: 0 10px 36px rgba(30, 30, 46, 0.07);
          }
          .home-offers-head {
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            justify-content: space-between;
            gap: 12px;
            margin-bottom: 14px;
          }
          .home-offers-head-text {
            min-width: 0;
          }
          .home-offers-kicker {
            font-weight: 900;
            font-size: 0.98rem;
            color: var(--secondary);
            letter-spacing: -0.02em;
          }
          .home-offers-sub {
            font-size: 0.76rem;
            font-weight: 600;
            color: var(--text-secondary);
            margin-top: 3px;
            line-height: 1.35;
          }
          .home-offers-more {
            display: inline-flex;
            align-items: center;
            gap: 5px;
            font-weight: 900;
            font-size: 0.78rem;
            color: var(--secondary);
            text-decoration: none;
            padding: 8px 14px;
            border-radius: 999px;
            background: linear-gradient(135deg, var(--primary) 0%, var(--primary-hover) 100%);
            box-shadow: var(--shadow-gold);
            border: 1px solid rgba(245, 192, 0, 0.45);
          }
          .home-offers-more:hover { filter: brightness(1.05); }
          .home-offers-grid {
            display: grid;
            grid-template-columns: 1fr;
            gap: 10px;
            overflow: visible;
          }
          @media (min-width: 640px) {
            .home-offers-grid {
              grid-template-columns: repeat(2, 1fr);
              gap: 10px;
            }
          }
          @media (min-width: 900px) {
            .home-offers-grid {
              grid-template-columns: repeat(3, 1fr);
              gap: 10px;
            }
          }
          @media (min-width: 1100px) {
            .home-offers-grid {
              grid-template-columns: repeat(4, 1fr);
              gap: 10px;
            }
          }
          @media (min-width: 1320px) {
            .home-offers-grid {
              grid-template-columns: repeat(5, 1fr);
              gap: 10px;
            }
          }
          .home-offer-card {
            width: 100%;
            min-width: 0;
            border-radius: 13px;
            border: 1px solid rgba(224, 223, 213, 0.95);
            background: var(--white);
            overflow: hidden;
            box-shadow: 0 4px 16px rgba(30, 30, 46, 0.06);
            transition: transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease;
          }
          .home-offer-card:hover {
            transform: translateY(-2px);
            box-shadow: 0 10px 28px rgba(245, 192, 0, 0.16);
            border-color: rgba(245, 192, 0, 0.45);
          }
          .home-offer-card-visual {
            text-decoration: none;
            color: inherit;
            display: block;
          }
          .home-offer-img {
            height: 76px;
            background: linear-gradient(180deg, var(--grey-light) 0%, #f3f2ec 100%);
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .home-offer-img.home-offer-img--empty {
            background:
              radial-gradient(ellipse 110% 75% at 65% 30%, rgba(255, 204, 0, 0.14) 0%, transparent 55%),
              radial-gradient(ellipse 90% 70% at 22% 80%, rgba(2, 119, 189, 0.08) 0%, transparent 52%),
              linear-gradient(180deg, rgba(245, 243, 238, 0.9) 0%, rgba(238, 241, 240, 0.9) 100%);
          }
          .home-offer-img img { width: 100%; height: 100%; object-fit: cover; display: block; }
          .home-offer-body {
            padding: 8px 10px 9px;
            display: flex;
            flex-direction: column;
            gap: 3px;
          }
          .home-offer-topline {
            display: flex;
            align-items: flex-start;
            justify-content: space-between;
            gap: 10px;
          }
          .home-offer-badge {
            font-size: 0.66rem;
            font-weight: 900;
            color: var(--secondary);
            background: var(--primary-light);
            padding: 3px 7px;
            border-radius: 6px;
            line-height: 1.3;
            max-width: 62%;
          }
          .home-offer-price {
            font-size: 0.78rem;
            font-weight: 900;
            color: var(--secondary);
            white-space: nowrap;
          }
          .home-offer-price-old {
            text-decoration: line-through;
            font-weight: 600;
            font-size: 0.65rem;
            color: var(--text-secondary);
            margin-inline-end: 6px;
          }
          .home-offer-title {
            font-size: 0.84rem;
            font-weight: 800;
            color: var(--secondary);
            margin: 0;
            line-height: 1.35;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            overflow: hidden;
          }
          .home-offer-desc {
            margin: 0;
            font-size: 0.74rem;
            font-weight: 600;
            color: var(--text-secondary);
            line-height: 1.45;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            overflow: hidden;
          }
          .home-offer-store {
            font-size: 0.7rem;
            font-weight: 700;
            color: var(--text-secondary);
          }
          .home-offer-cta {
            margin-top: 2px;
            display: inline-block;
            align-self: flex-start;
            font-size: 0.72rem;
            font-weight: 800;
            padding: 5px 10px;
            border-radius: 8px;
            border: 1.5px solid var(--border);
            background: var(--surface);
            color: var(--secondary);
          }
          .home-offer-actions {
            display: flex;
            gap: 6px;
            padding: 7px 10px;
            border-top: 1px solid var(--border);
            background: var(--surface);
          }
          .home-offer-iconbtn {
            flex: 1;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 6px;
            border-radius: 8px;
            border: 1px solid var(--border);
            background: var(--white);
            cursor: pointer;
            color: var(--secondary);
          }
          .home-offer-iconbtn:hover { background: var(--primary-light); }

          .map-section-head { margin-bottom: 10px; align-items: flex-end; }
          .map-section-title { font-size: 1.35rem; font-weight: 900; color: var(--secondary); margin: 0; }
          .map-section--compact .map-section-title.map-section-title--with-icon {
            font-size: 0.88rem;
            font-weight: 900;
            margin: 0;
            letter-spacing: -0.02em;
          }
          .map-section-badge { font-size: 0.72rem; }
          .map-section-hint-muted {
            margin: 0 0 14px;
            font-size: 0.86rem;
            color: var(--text-secondary);
            line-height: 1.55;
          }

          .map-hint-line {
            margin: 0 0 10px;
            font-size: 0.78rem;
            color: var(--text-secondary);
            line-height: 1.45;
            font-weight: 600;
          }
          .map-hint-line--above-map {
            padding: 8px 12px;
            border-radius: 12px;
            background: var(--surface);
            border: 1px solid var(--border);
          }

          .nearby-head {
            margin-bottom: 18px;
            margin-top: 4px;
            align-items: stretch;
            gap: 14px;
            flex-direction: column;
          }
          .nearby-title {
            font-size: clamp(1.15rem, 3.2vw, 1.42rem);
            font-weight: 900;
            color: var(--secondary);
            margin: 0;
            letter-spacing: -0.03em;
            line-height: 1.25;
          }
          .nearby-filter-option {
            width: 100%;
            max-width: 100%;
          }
          .nearby-map-toggle {
            display: flex;
            align-items: flex-start;
            gap: 14px;
            cursor: pointer;
            margin: 0;
            padding: 14px 16px;
            border-radius: 18px;
            border: 1px solid var(--border);
            background: linear-gradient(145deg, #ffffff 0%, var(--surface) 100%);
            box-shadow: 0 4px 20px rgba(30, 30, 46, 0.06);
            transition: box-shadow 0.2s ease, border-color 0.2s ease;
          }
          .nearby-map-toggle:hover {
            border-color: rgba(245, 192, 0, 0.45);
            box-shadow: 0 8px 28px rgba(245, 192, 0, 0.12);
          }
          .nearby-map-toggle-input {
            position: absolute;
            opacity: 0;
            width: 0;
            height: 0;
            pointer-events: none;
          }
          .nearby-map-toggle-track {
            flex-shrink: 0;
            width: 50px;
            height: 30px;
            border-radius: 999px;
            background: #e2e1da;
            position: relative;
            margin-top: 2px;
            transition: background 0.22s ease;
            box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.08);
          }
          .nearby-map-toggle-track::after {
            content: '';
            position: absolute;
            width: 24px;
            height: 24px;
            top: 3px;
            inset-inline-start: 3px;
            border-radius: 50%;
            background: #fff;
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
            transition: inset-inline-start 0.22s ease, transform 0.22s ease;
          }
          .nearby-map-toggle-input:checked + .nearby-map-toggle-track {
            background: linear-gradient(135deg, var(--primary) 0%, var(--primary-hover) 100%);
          }
          .nearby-map-toggle-input:checked + .nearby-map-toggle-track::after {
            inset-inline-start: calc(100% - 24px - 3px);
          }
          .nearby-map-toggle-input:focus-visible + .nearby-map-toggle-track {
            outline: 2px solid var(--primary);
            outline-offset: 2px;
          }
          .nearby-map-toggle-copy {
            display: flex;
            flex-direction: column;
            gap: 5px;
            min-width: 0;
            text-align: right;
          }
          .nearby-map-toggle-title {
            font-weight: 900;
            font-size: 0.92rem;
            color: var(--secondary);
            line-height: 1.35;
          }
          .nearby-map-toggle-hint {
            font-size: 0.76rem;
            font-weight: 600;
            color: var(--text-secondary);
            line-height: 1.45;
          }
          .nearby-loading,
          .nearby-empty {
            color: var(--text-secondary);
            font-size: 0.95rem;
          }
          .nearby-rail {
            display: flex;
            flex-direction: column;
            gap: 12px;
            margin-top: 6px;
            overflow: visible;
            padding-bottom: 0;
          }
          /* موبايل: عمودين + صورة فوق + تفاصيل تحت */
          @media (max-width: 640px) {
            .nearby-rail {
              display: grid;
              grid-template-columns: repeat(2, minmax(0, 1fr));
              gap: 12px;
            }
            .nearby-card {
              flex-direction: column;
              align-items: stretch;
              justify-content: flex-start;
              padding: 10px;
              border-radius: 18px;
            }
            .nearby-card-thumb {
              order: -1;
              width: 100%;
              height: 110px;
              border-radius: 16px;
            }
            .nearby-card-main {
              width: 100%;
            }
            .nearby-card-text {
              gap: 6px;
            }
          }
          @media (min-width: 720px) {
            .nearby-rail {
              display: grid;
              grid-template-columns: repeat(2, 1fr);
              gap: 16px;
            }
          }
          @media (min-width: 980px) {
            .nearby-rail {
              grid-template-columns: repeat(3, 1fr);
              gap: 18px;
            }
          }
          @media (min-width: 1200px) {
            .nearby-rail {
              grid-template-columns: repeat(4, 1fr);
              gap: 18px;
            }
          }
          .nearby-card {
            width: 100%;
            min-width: 0;
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 14px;
            padding: 14px 16px;
            border-radius: 20px;
            background: var(--white);
            border: 1px solid rgba(224, 223, 213, 0.9);
            box-shadow: 0 6px 24px rgba(30, 30, 46, 0.07);
            text-decoration: none;
            color: inherit;
            transition: transform 0.18s ease, box-shadow 0.18s ease, border-color 0.18s ease;
          }
          .nearby-card:hover {
            transform: translateY(-2px);
            box-shadow: 0 12px 32px rgba(30, 30, 46, 0.1);
            border-color: rgba(245, 192, 0, 0.35);
          }
          .nearby-card-main {
            flex: 1;
            min-width: 0;
            display: flex;
            flex-direction: column;
            justify-content: center;
            gap: 6px;
          }
          .nearby-card-text {
            display: flex;
            flex-direction: column;
            gap: 4px;
          }
          .nearby-card-name {
            font-weight: 900;
            font-size: 1rem;
            color: var(--secondary);
          }
          .nearby-card-cat {
            font-size: 0.78rem;
            font-weight: 700;
            color: var(--text-secondary);
          }
          .nearby-card-dist {
            font-size: 0.82rem;
            font-weight: 700;
            color: var(--text-secondary);
          }
          .nearby-card-status {
            align-self: flex-start;
            font-size: 0.68rem;
            font-weight: 900;
            padding: 3px 8px;
            border-radius: 999px;
            background: var(--primary-light);
            color: var(--secondary);
          }
          .nearby-card-thumb {
            width: 76px;
            height: 76px;
            flex-shrink: 0;
            border-radius: 16px;
            overflow: hidden;
            background: var(--grey-light);
            border: 1px solid rgba(224, 223, 213, 0.85);
            box-shadow: 0 2px 10px rgba(30, 30, 46, 0.06);
          }
          .nearby-card-thumb-img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            display: block;
          }
          .nearby-card-thumb-emoji {
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 1.75rem;
            font-family: "Segoe UI Emoji", "Apple Color Emoji", "Noto Color Emoji", sans-serif;
          }

          @media (max-width: 640px) {
            .map-section-head.flex-between {
              flex-wrap: wrap;
              gap: 10px;
            }
          }

          @media (min-width: 900px) {
            .nearby-head.flex-between {
              flex-direction: row;
              align-items: flex-start;
              justify-content: space-between;
            }
            .nearby-filter-option {
              max-width: 420px;
              flex-shrink: 0;
            }
          }
        `}} />
      </div>

      {/* اختيار السلة يتم عبر showSelect في AlertProvider */}
    </MainLayout>
  );
};

export default Home;
