// src/pages/ServiceGallery.jsx
import { useState } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { SERVICES, ARTIST } from '../data/content'

export default function ServiceGallery() {
  const { slug }     = useParams()
  const navigate     = useNavigate()
  const [lightbox, setLightbox] = useState(null)

  const service = SERVICES.find(s => s.slug === slug)

  // لو الخدمة مش موجودة رجّع للرئيسية
  if (!service) {
    navigate('/')
    return null
  }

  const total = service.gallery.length

  return (
    <section className="min-h-screen pt-32 pb-24 section-pad bg-ebony">
      <div className="max-w-6xl mx-auto">

        {/* ── Breadcrumb ────────────────────────────────── */}
        <div className="flex items-center gap-2 text-cream/30 text-xs font-body tracking-wider mb-10">
          <Link to="/" className="hover:text-gold transition-colors">الرئيسية</Link>
          <span>/</span>
          <Link to="/#services" className="hover:text-gold transition-colors">خدماتي</Link>
          <span>/</span>
          <span className="text-gold">{service.title}</span>
        </div>

        {/* ── عنوان الخدمة ──────────────────────────────── */}
        <div className="text-center mb-14">
          <span className="text-4xl mb-4 block">{service.icon}</span>
          <h1 className="heading-lg text-cream mb-4">{service.title}</h1>
          <p className="text-cream/50 text-sm leading-7 max-w-md mx-auto">{service.desc}</p>
          <span className="gold-divider mt-6 block" />
        </div>

        {/* ── الجاليري ─────────────────────────────────── */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
          {service.gallery.map((img, i) => (
            <div
              key={i}
              onClick={() => setLightbox(i)}
              className="relative overflow-hidden rounded-sm aspect-[3/4] cursor-pointer group"
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-ebony/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-gold border border-gold/60 px-4 py-2 text-sm font-body tracking-widest">
                  عرض
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* ── زر الحجز ──────────────────────────────────── */}
        <div className="text-center mt-16">
          <p className="text-cream/40 text-sm mb-5">أعجبك الشغل؟ احجزي موعدك دلوقتي ✨</p>
          <Link to="/booking" className="btn-gold text-sm px-10 py-4">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
              <rect x="3" y="4" width="18" height="18" rx="2"/>
              <line x1="16" y1="2" x2="16" y2="6"/>
              <line x1="8"  y1="2" x2="8"  y2="6"/>
              <line x1="3"  y1="10" x2="21" y2="10"/>
            </svg>
            احجزي موعد {service.title}
          </Link>
        </div>

      </div>

      {/* ── Lightbox ──────────────────────────────────────── */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-50 bg-ebony/96 flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          {/* إغلاق */}
          <button
            className="absolute top-6 left-6 text-cream/50 hover:text-gold text-3xl leading-none transition-colors"
            onClick={() => setLightbox(null)}
          >✕</button>

          {/* عداد الصور */}
          <p className="absolute top-6 right-6 text-cream/30 text-xs tracking-widest">
            {lightbox + 1} / {total}
          </p>

          {/* زرار السابق */}
          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-ebony-soft border border-gold/20 hover:border-gold text-gold flex items-center justify-center transition-all"
            onClick={e => { e.stopPropagation(); setLightbox((lightbox - 1 + total) % total) }}
          >
            <svg viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
              <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"/>
            </svg>
          </button>

          {/* الصورة */}
          <img
            src={service.gallery[lightbox].src}
            alt={service.gallery[lightbox].alt}
            className="max-h-[85vh] max-w-[85vw] object-contain rounded-sm shadow-2xl"
            onClick={e => e.stopPropagation()}
          />

          {/* زرار التالي */}
          <button
            className="absolute left-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-ebony-soft border border-gold/20 hover:border-gold text-gold flex items-center justify-center transition-all"
            onClick={e => { e.stopPropagation(); setLightbox((lightbox + 1) % total) }}
          >
            <svg viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
              <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd"/>
            </svg>
          </button>

          {/* اسم الصورة */}
          <p className="absolute bottom-6 text-cream/30 text-xs tracking-widest">
            {service.gallery[lightbox].alt}
          </p>
        </div>
      )}
    </section>
  )
}
