// src/components/Testimonials.jsx
import { TESTIMONIALS } from '../data/content'

// ── نجوم التقييم ──────────────────────────────────────────
const Stars = ({ count }) => (
  <div className="flex gap-1">
    {Array.from({ length: count }).map((_, i) => (
      <svg key={i} viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 text-gold">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
      </svg>
    ))}
  </div>
)

export default function Testimonials() {
  return (
    <section id="testimonials" className="section-pad bg-ebony">
      <div className="max-w-7xl mx-auto">

        {/* ── عنوان القسم ──────────────────────────────── */}
        <div className="text-center mb-16">
          <p className="font-display italic text-gold/70 text-lg mb-3">آراء عملائي</p>
          <h2 className="heading-lg text-cream mb-5">
            كلامهم <span className="text-gold">أجمل جائزة</span>
          </h2>
          <span className="gold-divider" />
        </div>

        {/* ── كاردات الآراء ────────────────────────────── */}
        <div className="grid md:grid-cols-3 gap-6">
          {TESTIMONIALS.map(t => (
            <div
              key={t.id}
              className="bg-ebony-mid border border-gold/15 p-8 rounded-sm card-hover relative"
            >
              {/* علامة الاقتباس */}
              <span className="font-display text-6xl text-gold/15 absolute top-4 right-6 leading-none select-none">
                "
              </span>

              <Stars count={t.stars} />

              <p className="text-cream/70 leading-8 mt-4 mb-6 font-body text-sm relative z-10">
                {t.text}
              </p>

              {/* الاسم */}
              <div className="flex items-center gap-3">
                <div className="w-8 h-px bg-gold/40" />
                <p className="text-gold font-body text-sm tracking-wider">{t.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
