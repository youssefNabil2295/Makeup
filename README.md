# 💄 Makeup Artist Website

موقع ويب احترافي لميك أب ارتيست — React + Vite + Tailwind CSS

---

## 🚀 تشغيل المشروع

```bash
# 1. تثبيت المكتبات
npm install

# 2. تشغيل السيرفر المحلي
npm run dev

# 3. فتح المتصفح على
# http://localhost:5173
```

---

## ✏️ كيف أعدّل البيانات؟

**ملف واحد فقط:** `src/data/content.js`

افتحه وغيّر:
- اسمك (عربي وإنجليزي)
- رقم الواتساب
- لينك انستجرام وفيسبوك
- النبذة التعريفية
- الخدمات
- آراء العملاء والإحصائيات

---

## 🖼️ كيف أضيف الصور؟

ضع صورك داخل مجلد `public/images/` ثم ادكر الاسم في `content.js`:

```
public/
  images/
    logo.png          ← اللوجو
    hero-bg.jpg       ← خلفية الهيرو
    about-photo.jpg   ← صورتك
    service-bride.jpg ← صورة الخدمات
    portfolio/
      work-1.jpg
      work-2.jpg
      ...
```

---

## 📁 هيكل المشروع

```
src/
  data/
    content.js          ← ✏️ كل البيانات هنا
  components/
    Navbar.jsx          ← شريط التنقل
    Hero.jsx            ← القسم الأول
    About.jsx           ← قسم عني
    Services.jsx        ← الخدمات
    Portfolio.jsx       ← معرض الأعمال
    Testimonials.jsx    ← آراء العملاء
    Contact.jsx         ← قسم التواصل
    Footer.jsx          ← الفوتر
    WhatsAppFloat.jsx   ← زر واتساب عائم
  pages/
    Home.jsx            ← تجميع الأقسام
  App.jsx               ← الـ Root
  main.jsx              ← نقطة الدخول
  index.css             ← الستايلات الأساسية
```

---

## 🏗️ بناء للنشر

```bash
npm run build
# الملفات الجاهزة في مجلد /dist
```
