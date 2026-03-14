// ============================================================
//  📝 ملف البيانات — كل التعديلات هنا فقط
//  تم تعديل المسارات لتظهر الصور بشكل صحيح على Vercel
// ============================================================

// ── الميك أب ارتيست ──────────────────────────────────────
export const ARTIST = {
  name:       ' Menna ismail',           // ✏️ الاسم بالعربي
  nameEn:     'Menna ismail',          // ✏️ الاسم بالإنجليزي
  title:      'Makeup Artist',      // ✏️ اللقب
  tagline:    'جمالك فن، وأنتِ لوحتي', // ✏️ الشعار الصغير
  bio: ``,
  phone:      '+201141328059',       // ✏️ رقم الواتساب
  instagram:  'https://instagram.com/YOUR_USERNAME', // ✏️ لينك انستجرام
  facebook:   'https://facebook.com/YOUR_USERNAME',  // ✏️ لينك فيسبوك
}

// ── الصور ────────────────────────────────────────────────
export const IMAGES = {
  logo:       '/images/pexels-marcelo-moreira-988124-1926620.jpg', 
  heroBg:     '/images/pexels-valeriya-90297.jpg',       
  aboutPhoto: '/images/pexels-photosbychalo-8091881.jpg',   
}

// ── الخدمات ──────────────────────────────────────────────
export const SERVICES = [
  {
    id:    1,
    slug:  'bride',
    title: 'ميك أب عرايس',
    desc:  'إطلالة لا تُنسى ليوم أجمل أيام حياتك',
    icon:  '💍',
    imgSrc: '/images/arosa.jpeg',
    gallery: [
      { src: '/images/arosa.jpeg', alt: 'عروسة ١' },
      { src: '/images/arosa.jpeg', alt: 'عروسة ٢' },
      { src: '/images/arosa.jpeg', alt: 'عروسة ٣' },
      { src: '/images/arosa.jpeg', alt: 'عروسة ٤' },
      { src: '/images/arosa.jpeg', alt: 'عروسة ٥' },
      { src: '/images/arosa.jpeg', alt: 'عروسة ٦' },
    ],
  },
  {
    id:    2,
    slug:  'party',
    title: 'ميك أب سهرات',
    desc:  'تألقي في كل مناسبة بلمسة احترافية',
    icon:  '✨',
    imgSrc: '/images/sahrat.jpg',
    gallery: [
      { src: '/images/sahrat.jpg', alt: 'سهرة ١' },
      { src: '/images/sahrat.jpg', alt: 'سهرة ٢' },
      { src: '/images/sahrat.jpg', alt: 'سهرة ٣' },
      { src: '/images/sahrat.jpg', alt: 'سهرة ٤' },
      { src: '/images/sahrat.jpg', alt: 'سهرة ٥' },
      { src: '/images/sahrat.jpg', alt: 'سهرة ٦' },
    ],
  },
  {
    id:    3,
    slug:  'natural',
    title: 'ميك أب طبيعي',
    desc:  'إبراز جمالك الطبيعي بأخف اللمسات',
    icon:  '🌸',
    imgSrc: '/images/classick.jpg',
    gallery: [
      { src: '/images/classick.jpg', alt: 'طبيعي ١' },
      { src: '/images/classick.jpg', alt: 'طبيعي ٢' },
      { src: '/images/classick.jpg', alt: 'طبيعي ٣' },
      { src: '/images/classick.jpg', alt: 'طبيعي ٤' },
      { src: '/images/classick.jpg', alt: 'طبيعي ٥' },
      { src: '/images/classick.jpg', alt: 'طبيعي ٦' },
    ],
  },
  {
    id:    4,
    slug:  'photo',
    title: 'ميك أب تصوير',
    desc:  'لوك مثالي أمام الكاميرا في كل الإضاءات',
    icon:  '📸',
    imgSrc: '/images/photogarph.jfif',
    gallery: [
      { src: '/images/photogarph.jfif', alt: 'تصوير ١' },
      { src: '/images/photogarph.jfif', alt: 'تصوير ٢' },
      { src: '/images/photogarph.jfif', alt: 'تصوير ٣' },
      { src: '/images/photogarph.jfif', alt: 'تصوير ٤' },
      { src: '/images/photogarph.jfif', alt: 'تصوير ٥' },
      { src: '/images/photogarph.jfif', alt: 'تصوير ٦' },
    ],
  },
]

// ── معرض الأعمال ─────────────────────────────────────────
export const PORTFOLIO = [
  { id: 1, src: '/images/arosa.jpeg', alt: 'ميك أب عرايس' },
  { id: 2, src: '/images/sahrat.jpg', alt: 'ميك أب سهرة' },
  { id: 3, src: '/images/classick.jpg', alt: 'ميك أب طبيعي' },
  { id: 4, src: '/images/photogarph.jfif', alt: 'ميك أب تصوير' },
  { id: 5, src: '/images/مكياج كلاسيكي بأحمر الشفاه الأحمر_0.jpg.webp', alt: 'لوك جريء' },
  { id: 6, src: '/images/classek.jpg', alt: 'ميك أب كلاسيك' },
  { id: 7, src: '/images/2751221-83993266.jpg', alt: 'ميك أب كلاسيك' },
  { id: 8, src: '/images/maxresdefault.jpg', alt: 'ميك أب كلاسيك' },
]

// ── آراء العملاء ─────────────────────────────────────────
export const TESTIMONIALS = [
  {
    id:      1,
    name:    'mona mohamed',
    text:    'تجربتي كانت رائعة جداً، الميك أب استمر طول اليوم وكل الناس اتكلمت فيه!',
    stars:   5,
  },
  {
    id:      2,
    name:    'aya ahmed',
    text:    'محترفة جداً وبتسمع لطلبات العميلة، أوصي بيها لأي عروسة.',
    stars:   5,
  },
  {
    id:      3,
    name:    'salma',
    text:    'ميك أب السهرة طلع تحفة، الشغل نظيف وأنيق.',
    stars:   5,
  },
]

// ── إحصائيات ─────────────────────────────────────────────
export const STATS = [
  { value: '+٥٠٠', label: 'عميلة سعيدة' },
  { value: '+٥',   label: 'سنوات خبرة' },
  { value: '١٠٠٪', label: 'رضا العملاء' },
]