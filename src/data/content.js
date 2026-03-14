// ============================================================
//  📝 ملف البيانات — كل التعديلات هنا فقط
//  يمكنك تغيير الأسماء والصور والروابط والنصوص من هنا
// ============================================================

// ── الميك أب ارتيست ──────────────────────────────────────
export const ARTIST = {
  name:       ' Menna ismail',           // ✏️ اسمك بالعربي
  nameEn:     'Menna ismail',          // ✏️ اسمك بالإنجليزي
  title:      'Makeup Artist',      // ✏️ اللقب
  tagline:    'جمالك فن، وأنتِ لوحتي', // ✏️ الشعار الصغير
  bio: ``,
  phone:      '+201141328059',       // ✏️ رقم الواتساب (بدون + مثل 201001234567)
  instagram:  'https://instagram.com/YOUR_USERNAME', // ✏️ لينك انستجرام
  facebook:   'https://facebook.com/YOUR_USERNAME',  // ✏️ لينك فيسبوك
}

// ── الصور ────────────────────────────────────────────────
// ضع صورك في مجلد /public/images/
// أو استخدم روابط خارجية مباشرة
export const IMAGES = {
  logo:       '../../public/images/pexels-marcelo-moreira-988124-1926620.jpg',          // ✏️ اللوجو (شفاف PNG أفضل)
  logo:       '../../public/images/pexels-marcelo-moreira-988124-1926620.jpg',          // ✏️ اللوجو (شفاف PNG أفضل)
  heroBg:     '../../public/images/pexels-valeriya-90297.jpg',       // ✏️ صورة خلفية الهيرو (كبيرة وعالية الجودة)
  aboutPhoto: '../../public/images/pexels-photosbychalo-8091881.jpg',   // ✏️ صورتك في قسم "عني"
}

// ── الخدمات ──────────────────────────────────────────────
export const SERVICES = [
  {
    id:    1,
    slug:  'bride',
    title: 'ميك أب عرايس',
    desc:  'إطلالة لا تُنسى ليوم أجمل أيام حياتك',
    icon:  '💍',
    imgSrc: '../../public/images/arosa.jpeg',
    gallery: [
      { src: '../../public/images/arosa.jpeg', alt: 'عروسة ١' },
      { src: '../../public/images/arosa.jpeg', alt: 'عروسة ٢' },
      { src: '../../public/images/arosa.jpeg', alt: 'عروسة ٣' },
      { src: '../../public/images/arosa.jpeg', alt: 'عروسة ٤' },
      { src: '../../public/images/arosa.jpeg', alt: 'عروسة ٥' },
      { src: '../../public/images/arosa.jpeg', alt: 'عروسة ٦' },
    ],
  },
  {
    id:    2,
    slug:  'party',
    title: 'ميك أب سهرات',
    desc:  'تألقي في كل مناسبة بلمسة احترافية',
    icon:  '✨',
    imgSrc: '../../public/images/sahrat.jpg',
    gallery: [
      { src: '../../public/images/sahrat.jpg', alt: 'سهرة ١' },
      { src: '../../public/images/sahrat.jpg', alt: 'سهرة ٢' },
      { src: '../../public/images/sahrat.jpg', alt: 'سهرة ٣' },
      { src: '../../public/images/sahrat.jpg', alt: 'سهرة ٤' },
      { src: '../../public/images/sahrat.jpg', alt: 'سهرة ٥' },
      { src: '../../public/images/sahrat.jpg', alt: 'سهرة ٦' },
    ],
  },
  {
    id:    3,
    slug:  'natural',
    title: 'ميك أب طبيعي',
    desc:  'إبراز جمالك الطبيعي بأخف اللمسات',
    icon:  '🌸',
    imgSrc: '../../public/images/classick.jpg',
    gallery: [
      { src: '../../public/images/classick.jpg', alt: 'طبيعي ١' },
      { src: '../../public/images/classick.jpg', alt: 'طبيعي ٢' },
      { src: '../../public/images/classick.jpg', alt: 'طبيعي ٣' },
      { src: '../../public/images/classick.jpg', alt: 'طبيعي ٤' },
      { src: '../../public/images/classick.jpg', alt: 'طبيعي ٥' },
      { src: '../../public/images/classick.jpg', alt: 'طبيعي ٦' },
    ],
  },
  {
    id:    4,
    slug:  'photo',
    title: 'ميك أب تصوير',
    desc:  'لوك مثالي أمام الكاميرا في كل الإضاءات',
    icon:  '📸',
    imgSrc: '../../public/images/photogarph.jfif',
    gallery: [
      { src: '../../public/images/photogarph.jfif', alt: 'تصوير ١' },
      { src: '../../public/images/photogarph.jfif', alt: 'تصوير ٢' },
      { src: '../../public/images/photogarph.jfif', alt: 'تصوير ٣' },
      { src: '../../public/images/photogarph.jfif', alt: 'تصوير ٤' },
      { src: '../../public/images/photogarph.jfif', alt: 'تصوير ٥' },
      { src: '../../public/images/photogarph.jfif', alt: 'تصوير ٦' },
    ],
  },
]

// ── معرض الأعمال ─────────────────────────────────────────
// أضف صور أعمالك هنا — أضف أو احذف كما تريد
export const PORTFOLIO = [
  { id: 1, src: '../../public/images/arosa.jpeg', alt: 'ميك أب عرايس' },
  { id: 2, src: '../../public/images/sahrat.jpg', alt: 'ميك أب سهرة' },
  { id: 3, src: '../../public/images/classick.jpg', alt: 'ميك أب طبيعي' },
  { id: 4, src: '../../public/images/photogarph.jfif', alt: 'ميك أب تصوير' },
  { id: 5, src: '../../public/images/مكياج كلاسيكي بأحمر الشفاه الأحمر_0.jpg.webp', alt: 'لوك جريء' },
  { id: 6, src: '../../public/images/classek.jpg', alt: 'ميك أب كلاسيك' },
  { id: 6, src: '../../public/images/2751221-83993266.jpg', alt: 'ميك أب كلاسيك' },
  { id: 6, src: '../../public/images/maxresdefault.jpg', alt: 'ميك أب كلاسيك' },
]

// ── آراء العملاء ─────────────────────────────────────────
export const TESTIMONIALS = [
  {
    id:     1,
    name:   'mona mohamed',
    text:   'تجربتي كانت رائعة جداً، الميك أب استمر طول اليوم وكل الناس اتكلمت فيه!',
    stars:  5,
  },
  {
    id:     2,
    name:   'aya ahmed',
    text:   'محترفة جداً وبتسمع لطلبات العميلة، أوصي بيها لأي عروسة.',
    stars:  5,
  },
  {
    id:     3,
    name:   'salma',
    text:   'ميك أب السهرة طلع تحفة، الشغل نظيف وأنيق.',
    stars:  5,
  },
]

// ── إحصائيات ─────────────────────────────────────────────
export const STATS = [
  { value: '+٥٠٠', label: 'عميلة سعيدة' },
  { value: '+٥',   label: 'سنوات خبرة' },
  { value: '١٠٠٪', label: 'رضا العملاء' },
]
