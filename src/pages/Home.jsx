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
  Search,
  SlidersHorizontal,
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
    const n = Number(raw);
    return Number.isFinite(n) ? n : null;
  } catch {
    return null;
  }
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
const STORES_PER_PAGE_DESKTOP = 12;
const STORES_PER_PAGE_MOBILE = 8;
const SPONSORED_ROTATE_MS = 5 * 60 * 1000;

const Home = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const location = useLocation();
  const { showAlert, showPrompt, showSelect } = useAlert();
  const storesSectionRef = useRef(null);
  const communityBelowRef = useRef(null);
  const exclusiveRailRef = useRef(null);
  const browseScrollRef = useRef(null);
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
  const [selectedCommunityCategoryId, setSelectedCommunityCategoryId] = useState(() =>
    typeof window !== 'undefined' ? parseCommunityCategoryId(window.location.search) : null
  );
  const [sponsoredAds, setSponsoredAds] = useState([]);
  const [sponsoredLoading, setSponsoredLoading] = useState(true);
  const [sponsoredFavByAdId, setSponsoredFavByAdId] = useState({});
  const [communityPoints, setCommunityPoints] = useState([]);
  const [communityPointsLoading, setCommunityPointsLoading] = useState(false);
  const [communityCategories, setCommunityCategories] = useState([]);
  const [communityCatsLoading, setCommunityCatsLoading] = useState(true);
  const [pendingCartAdd, setPendingCartAdd] = useState(null);

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

  const [exclusiveDotsCount, setExclusiveDotsCount] = useState(0);
  const [exclusiveDotActive, setExclusiveDotActive] = useState(0);
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
    return wireScrollDots(exclusiveRailRef.current, '.home-exclusive-card', setExclusiveDotsCount, setExclusiveDotActive);
  }, [wireScrollDots, filterMode, sponsoredLoading, sponsoredAds.length]);

  useEffect(() => {
    return wireScrollDots(browseScrollRef.current, '.home-browse-item', setBrowseDotsCount, setBrowseDotActive);
  }, [wireScrollDots, filterMode, categoriesLoading, communityCatsLoading, categories.length, communityCategories.length]);

  const runHeroSearch = useCallback(
    (e) => {
      if (e && typeof e.preventDefault === 'function') e.preventDefault();
      const t = searchQuery.trim();
      navigate(t ? `/search?q=${encodeURIComponent(t)}` : '/search');
    },
    [navigate, searchQuery]
  );

  useEffect(() => {
    setFilterMode(parseFilterMode(`?${searchParams.toString()}`));
    const rawCat = searchParams.get('category');
    if (rawCat == null || rawCat === '') setSelectedCategoryId(null);
    else {
      const n = Number(rawCat);
      setSelectedCategoryId(Number.isFinite(n) ? n : null);
    }
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
    setPendingCartAdd(payload);
    const carts = await getCarts();
    const list = Array.isArray(carts) ? carts : [];
    if (list.length === 0) {
      await createCartAndAddPending(payload, { isFirstCart: true });
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

  const openCategoryPicker = useCallback(async () => {
    if (filterMode !== 'stores') return;
    if (categoriesLoading) return;
    const opts = [
      { id: '__all__', label: 'الكل', value: null },
      ...categories.map((c) => ({ id: String(c.id), label: c.name, value: c.id })),
    ];
    const pick = await showSelect('اختر القسم:', 'تصفية المتاجر', opts);
    if (pick == null) return;
    const next = new URLSearchParams(searchParams);
    next.delete('filter');
    next.delete('cc');
    if (pick === '__all__') {
      next.delete('category');
    } else {
      next.set('category', String(pick));
    }
    setSearchParams(next, { replace: true });
  }, [filterMode, categoriesLoading, categories, showSelect, searchParams, setSearchParams]);

  const openCommunityCategoryPicker = useCallback(async () => {
    if (filterMode !== 'community') return;
    if (communityCatsLoading) return;
    const opts = [
      { id: '__all__', label: 'الكل', value: null },
      ...communityCategories.map((c) => ({ id: String(c.id), label: c.name, value: c.id })),
    ];
    const pick = await showSelect('اختر القسم:', 'تصفية الخدمات', opts);
    if (pick == null) return;
    const next = new URLSearchParams(searchParams);
    next.set('filter', 'community');
    next.delete('category');
    if (pick === '__all__') {
      next.delete('cc');
    } else {
      next.set('cc', String(pick));
    }
    setSearchParams(next, { replace: true });
  }, [filterMode, communityCatsLoading, communityCategories, showSelect, searchParams, setSearchParams]);

  const createCartAndAddPending = async (payloadOverride, { isFirstCart = false } = {}) => {
    const p = payloadOverride != null ? payloadOverride : pendingCartAdd;
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
    await addToCart(cart.id, p.productId ?? null, p.quantity ?? 1, p.sponsoredAdId ?? null);
    await showAlert('تمت إضافة المنتج إلى السلة.');
    setPendingCartAdd(null);
  };

  const pickCartAndAddPending = async (cart) => {
    const p = pendingCartAdd;
    if (!p) return;
    await addToCart(cart.id, p.productId ?? null, p.quantity ?? 1, p.sponsoredAdId ?? null);
    await showAlert('تمت إضافة المنتج إلى السلة.');
    setPendingCartAdd(null);
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
      try {
        if (!cancelled) setSponsoredLoading(true);
        const offerCat = filterMode === 'stores' ? selectedCategoryId : null;
        const data = await getOffers(offerCat);
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
  }, [filterMode, selectedCategoryId]);

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
        if (s.category == null || Number(s.category) !== Number(selectedCategoryId)) {
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

  return (
    <MainLayout>
      <HomeBackGuard />
      <div className="home-container">
        {isMerchantOnHome ? (
          <div
            className="card"
            role="status"
            style={{
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
                <h1 className="home-hero-title">ماذا تبحث عنه اليوم؟</h1>
                <p className="home-hero-sub">
                  تصفّح الأقسام، العروض، والمتاجر القريبة — ابحث من مربع البحث أدناه، ثم استخدم الخريطة لمطابقة
                  المواقع.
                </p>
              </div>
              <form className="home-hero-search" onSubmit={runHeroSearch}>
                <div className="home-hero-search-bar">
                  <Search size={20} strokeWidth={1.85} className="home-hero-search-ico" aria-hidden />
                  <input
                    type="search"
                    className="home-hero-search-input"
                    placeholder="ابحث عن متجر أو قسم…"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    aria-label="بحث في رادار"
                    enterKeyHint="search"
                  />
                  <Link
                    to="/categories"
                    className="home-hero-filter-btn"
                    title="الأقسام والتصفية"
                    aria-label="الأقسام والتصفية"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <SlidersHorizontal size={20} strokeWidth={1.85} aria-hidden />
                  </Link>
                  <button type="submit" className="home-hero-submit-btn" aria-label="تنفيذ البحث">
                    <Search size={20} strokeWidth={1.85} aria-hidden />
                  </button>
                </div>
              </form>
            </div>
          </section>
        ) : null}

        <div className="home-top-grid">
          {filterMode === 'stores' ? (
            <section className="home-top-grid__exclusive home-exclusive" aria-label="عروض حصرية">
              <div className="home-exclusive-head">
                <div className="home-exclusive-head-text">
                  <h2 className="home-exclusive-title">عروض مميزة من المتاجر</h2>
                  <p className="home-exclusive-sub">إعلانات ممولة — اضغط البطاقة لفتح المتجر</p>
                </div>
                <Link to="/offers" className="home-exclusive-more">
                  عرض المزيد
                  <ChevronLeft size={18} aria-hidden />
                </Link>
              </div>
              <div className="home-exclusive-rail" role="list" ref={exclusiveRailRef}>
                {sponsoredLoading ? (
                  <>
                    {Array.from({ length: 4 }).map((_, i) => (
                      <div key={i} className="home-exclusive-skel" aria-hidden />
                    ))}
                  </>
                ) : rotatedSponsoredAds.length === 0 ? (
                  <div className="home-exclusive-empty">لا توجد عروض ممولة حالياً.</div>
                ) : (
                  rotatedSponsoredAds.slice(0, 10).map((ad) => {
                    const img = visualImageUrls(ad)[0] || null;
                    return (
                      <Link
                        key={ad.id}
                        to={`/stores/${ad.store}`}
                        className="home-exclusive-card"
                        role="listitem"
                        aria-label={`${ad.title} — ${ad.store_name}`}
                      >
                        <div
                          className="home-exclusive-cover"
                          style={img ? { backgroundImage: `url(${img})` } : undefined}
                          aria-hidden
                        />
                        <span className="home-exclusive-badge">إعلان ممول</span>
                        <div className="home-exclusive-meta">
                          <div className="home-exclusive-ad-title">{ad.title}</div>
                          <div className="home-exclusive-store">{ad.store_name}</div>
                          {Number(ad.product_price) > 0 ? (
                            <div className="home-exclusive-price">{Number(ad.product_price).toFixed(2)} ₪</div>
                          ) : null}
                        </div>
                      </Link>
                    );
                  })
                )}
              </div>
              {exclusiveDotsCount > 1 ? (
                <div className="scroll-dots" aria-label="التنقل بين العروض" role="tablist">
                  {Array.from({ length: exclusiveDotsCount }).slice(0, 12).map((_, i) => (
                    <button
                      key={i}
                      type="button"
                      className={`scroll-dot${i === exclusiveDotActive ? ' scroll-dot--active' : ''}`}
                      aria-label={`عرض ${i + 1}`}
                      aria-selected={i === exclusiveDotActive}
                      onClick={() => {
                        const rail = exclusiveRailRef.current;
                        if (!rail) return;
                        const items = Array.from(rail.querySelectorAll('.home-exclusive-card'));
                        const el = items[i];
                        if (!el) return;
                        rail.scrollTo({ left: Math.max(0, el.offsetLeft - 12), behavior: 'smooth' });
                      }}
                    />
                  ))}
                </div>
              ) : null}
            </section>
          ) : null}
        </div>

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
            {isSmallScreen ? (
              <div className="home-browse-head">
                <h2 className="home-browse-title">تصفية سريعة</h2>
                <button
                  type="button"
                  className="home-browse-filterbtn"
                  onClick={filterMode === 'stores' ? openCategoryPicker : openCommunityCategoryPicker}
                  disabled={filterMode === 'stores' ? categoriesLoading : communityCatsLoading}
                  aria-label={filterMode === 'stores' ? 'تصفية المتاجر حسب القسم' : 'تصفية الخدمات حسب القسم'}
                >
                  <SlidersHorizontal size={18} strokeWidth={2} aria-hidden />
                  <span className="home-browse-filterbtn-text">
                    {filterMode === 'stores'
                      ? selectedCategoryId == null
                        ? 'كل الأقسام'
                        : categories.find((x) => Number(x.id) === Number(selectedCategoryId))?.name || 'القسم'
                      : selectedCommunityCategoryId == null
                        ? 'كل الخدمات'
                        : communityCategories.find((x) => Number(x.id) === Number(selectedCommunityCategoryId))?.name ||
                          'الخدمة'}
                  </span>
                </button>
              </div>
            ) : (
              <h2 className="home-browse-title">
                {filterMode === 'stores' ? 'تصفح حسب الفئات' : 'أقسام الخدمات المجتمعية'}
              </h2>
            )}
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
                              {store.category_name ? (
                                <span className="nearby-card-cat">{store.category_name}</span>
                              ) : null}
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
                              <img className="nearby-card-thumb-img" src={visual.url} alt="" />
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
            border-radius: var(--radius-xl);
            border: 1px solid var(--section-warm-edge);
            box-shadow: 0 6px 28px rgba(26, 29, 38, 0.07);
            overflow: hidden;
            background: var(--section-warm);
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
              radial-gradient(ellipse 85% 65% at 18% 22%, rgba(255, 204, 0, 0.22) 0%, transparent 58%),
              radial-gradient(ellipse 70% 55% at 92% 78%, rgba(93, 64, 55, 0.08) 0%, transparent 52%),
              radial-gradient(ellipse 50% 40% at 72% 12%, rgba(2, 119, 189, 0.07) 0%, transparent 45%),
              linear-gradient(165deg, rgba(255, 255, 255, 0.55) 0%, rgba(255, 249, 230, 0.95) 45%, rgba(255, 252, 240, 1) 100%);
            filter: saturate(1.05);
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
          .home-hero-search {
            margin: 0;
            width: 100%;
          }
          .home-hero-search-bar {
            display: flex;
            align-items: center;
            gap: 8px;
            padding: 4px 6px 4px 14px;
            border-radius: 999px;
            background: rgba(255, 255, 255, 0.92);
            border: 1.5px solid rgba(255, 255, 255, 0.85);
            box-shadow:
              0 4px 24px rgba(26, 29, 38, 0.08),
              0 1px 0 rgba(255, 255, 255, 0.9) inset;
            -webkit-backdrop-filter: blur(10px);
            backdrop-filter: blur(10px);
          }
          .home-hero-search-ico {
            flex-shrink: 0;
            color: var(--text-light);
            opacity: 0.9;
          }
          .home-hero-search-input {
            flex: 1;
            min-width: 0;
            border: none !important;
            background: transparent !important;
            box-shadow: none !important;
            padding: 0.65rem 0.2rem !important;
            font-size: 0.95rem;
            font-weight: 600;
            font-family: inherit;
            color: var(--text-primary);
          }
          .home-hero-search-input::placeholder {
            color: var(--text-light);
            font-weight: 500;
          }

          /* موبايل: صغّر الهيرو، وخلي الـ placeholder أوضح وأقصر */
          @media (max-width: 520px) {
            /* على الشاشات الصغيرة: مربع "ماذا تبحث" غير لازم لأن البحث بالناف بار */
            .home-hero {
              display: none;
            }
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
            .home-hero-search-bar {
              padding: 3px 5px 3px 12px;
            }
            .home-hero-search-input {
              padding: 0.55rem 0.15rem !important;
              font-size: 0.9rem;
            }
            .home-hero-search-input::placeholder {
              font-size: 0.86rem;
            }
            /* شيل البحث القديم على الشاشات الصغيرة (الآن البحث في الهيدر) */
            .home-hero-search {
              display: none;
            }
          }

          /* على الشاشات الكبيرة: زر "الكل" في شريط الفئات غير لازم */
          @media (min-width: 900px) {
            .home-browse-item--all {
              display: none;
            }
          }
          .home-hero-filter-btn {
            flex-shrink: 0;
            display: flex;
            align-items: center;
            justify-content: center;
            width: 46px;
            height: 46px;
            border-radius: 50%;
            color: var(--secondary);
            background: var(--surface);
            border: 1.5px solid var(--border);
            text-decoration: none;
            transition: background 0.18s ease, border-color 0.18s ease, transform 0.15s ease;
          }
          .home-hero-filter-btn:hover {
            background: rgba(255, 204, 0, 0.14);
            border-color: rgba(255, 204, 0, 0.45);
          }
          .home-hero-submit-btn {
            flex-shrink: 0;
            width: 46px;
            height: 46px;
            border: none;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            background: linear-gradient(145deg, var(--primary) 0%, var(--primary-hover) 100%);
            color: var(--secondary);
            box-shadow: var(--shadow-gold);
            transition: filter 0.15s ease, transform 0.12s ease;
          }
          .home-hero-submit-btn:hover {
            filter: brightness(1.05);
          }
          .home-hero-submit-btn:active {
            transform: scale(0.96);
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
