// src/components/Services.jsx
import { SERVICES, ARTIST } from '../data/content'

export default function Services() {
  return (
    <section id="services" className="section-pad bg-ebony">
      <div className="max-w-7xl mx-auto">

        {/* ── عنوان القسم ──────────────────────────────── */}
        <div className="text-center mb-16">
          <p className="font-display italic text-gold/70 text-lg mb-3">خدماتي</p>
          <h2 className="heading-lg text-cream mb-5">
            كل لوك هو <span className="text-gold">قصة فريدة</span>
          </h2>
          <span className="gold-divider" />
        </div>

        {/* ── كاردات الخدمات ───────────────────────────── */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map(service => (
            <div
              key={service.id}
              className="card-hover group relative overflow-hidden rounded-sm bg-ebony-mid border border-gold/10 hover:border-gold/40 transition-colors duration-300"
            >
              {/* صورة الخدمة */}
              <div className="relative h-52 overflow-hidden">
                <img
                  src={service.imgSrc}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ebony-mid via-transparent to-transparent" />

                {/* الأيقونة */}
                <span className="absolute top-4 right-4 text-2xl">{service.icon}</span>
              </div>

              {/* نص الكارد */}
              <div className="p-6">
                <h3 className="font-display text-xl text-cream mb-2 tracking-wide">{service.title}</h3>
                <p className="text-cream/55 text-sm leading-7">{service.desc}</p>

                {/* رابط الحجز */}
                <a
                  href={`https://wa.me/${ARTIST.phone}?text=مرحبا، أريد حجز موعد لـ ${encodeURIComponent(service.title)}`}
                  target="_blank" rel="noopener noreferrer"
                  className="mt-5 inline-flex items-center gap-2 text-gold text-sm font-semibold tracking-wide hover:underline underline-offset-4 transition"
                >
                  احجزي الآن
                  <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 rtl:rotate-180">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"/>
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
