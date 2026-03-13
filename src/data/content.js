// ============================================================
//  📝 ملف البيانات — كل التعديلات هنا فقط
//  يمكنك تغيير الأسماء والصور والروابط والنصوص من هنا
// ============================================================

// ── الميك أب ارتيست ──────────────────────────────────────
export const ARTIST = {
  name:       'اسمك هنا',           // ✏️ اسمك بالعربي
  nameEn:     'Your Name',          // ✏️ اسمك بالإنجليزي
  title:      'Makeup Artist',      // ✏️ اللقب
  tagline:    'جمالك فن، وأنتِ لوحتي', // ✏️ الشعار الصغير
  bio: `نبذة مختصرة عنك — شاركي تجربتك وشغفك بالميك أب.
كم سنة خبرة؟ إيه اللي بيميزك؟ اكتبي هنا.`,
  phone:      '201XXXXXXXXX',       // ✏️ رقم الواتساب (بدون + مثل 201001234567)
  instagram:  'https://instagram.com/YOUR_USERNAME', // ✏️ لينك انستجرام
  facebook:   'https://facebook.com/YOUR_USERNAME',  // ✏️ لينك فيسبوك
}

// ── الصور ────────────────────────────────────────────────
// ضع صورك في مجلد /public/images/
// أو استخدم روابط خارجية مباشرة
export const IMAGES = {
  logo:       '/images/logo.png',          // ✏️ اللوجو (شفاف PNG أفضل)
  heroBg:     '/images/hero-bg.jpg',       // ✏️ صورة خلفية الهيرو (كبيرة وعالية الجودة)
  aboutPhoto: '/images/about-photo.jpg',   // ✏️ صورتك في قسم "عني"
}

// ── الخدمات ──────────────────────────────────────────────
export const SERVICES = [
  {
    id: 1,
    title:    'ميك أب عرايس',
    desc:     'إطلالة لا تُنسى ليوم أجمل أيام حياتك',
    icon:     '💍',
    imgSrc:   '/images/service-bride.jpg',  // ✏️ صورة الخدمة
  },
  {
    id: 2,
    title:    'ميك أب سهرات',
    desc:     'تألقي في كل مناسبة بلمسة احترافية',
    icon:     '✨',
    imgSrc:   '/images/service-party.jpg',
  },
  {
    id: 3,
    title:    'ميك أب طبيعي',
    desc:     'إبراز جمالك الطبيعي بأخف اللمسات',
    icon:     '🌸',
    imgSrc:   '/images/service-natural.jpg',
  },
  {
    id: 4,
    title:    'ميك أب تصوير',
    desc:     'لوك مثالي أمام الكاميرا في كل الإضاءات',
    icon:     '📸',
    imgSrc:   '/images/service-photo.jpg',
  },
]

// ── معرض الأعمال ─────────────────────────────────────────
// أضف صور أعمالك هنا — أضف أو احذف كما تريد
export const PORTFOLIO = [
  { id: 1, src: '/images/portfolio/work-1.jpg', alt: 'ميك أب عرايس' },
  { id: 2, src: '/images/portfolio/work-2.jpg', alt: 'ميك أب سهرة' },
  { id: 3, src: '/images/portfolio/work-3.jpg', alt: 'ميك أب طبيعي' },
  { id: 4, src: '/images/portfolio/work-4.jpg', alt: 'ميك أب تصوير' },
  { id: 5, src: '/images/portfolio/work-5.jpg', alt: 'لوك جريء' },
  { id: 6, src: '/images/portfolio/work-6.jpg', alt: 'ميك أب كلاسيك' },
]

// ── آراء العملاء ─────────────────────────────────────────
export const TESTIMONIALS = [
  {
    id:     1,
    name:   'اسم العميلة',
    text:   'تجربتي كانت رائعة جداً، الميك أب استمر طول اليوم وكل الناس اتكلمت فيه!',
    stars:  5,
  },
  {
    id:     2,
    name:   'اسم العميلة',
    text:   'محترفة جداً وبتسمع لطلبات العميلة، أوصي بيها لأي عروسة.',
    stars:  5,
  },
  {
    id:     3,
    name:   'اسم العميلة',
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
