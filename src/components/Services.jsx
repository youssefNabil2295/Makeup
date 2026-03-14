// src/components/Services.jsx
import { Link } from 'react-router-dom'
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
              {/* ── صورة الخدمة — اضغط عليها تروح للجاليري */}
              <Link to={`/service/${service.slug}`} className="block relative h-52 overflow-hidden">
                <img
                  src={service.imgSrc}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ebony-mid via-transparent to-transparent" />

                {/* overlay عند hover */}
                <div className="absolute inset-0 bg-ebony/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-gold border border-gold/60 px-4 py-1.5 text-xs font-body tracking-widest">
                    شوفي الأعمال
                  </span>
                </div>

                <span className="absolute top-4 right-4 text-2xl">{service.icon}</span>
              </Link>

              {/* ── نص الكارد ────────────────────────────── */}
              <div className="p-6">
                <Link to={`/service/${service.slug}`}>
                  <h3 className="font-display text-xl text-cream mb-2 tracking-wide hover:text-gold transition-colors">
                    {service.title}
                  </h3>
                </Link>
                <p className="text-cream/55 text-sm leading-7">{service.desc}</p>

                <div className="mt-5 flex items-center justify-between">
                  {/* رابط الجاليري */}
                  <Link
                    to={`/service/${service.slug}`}
                    className="inline-flex items-center gap-2 text-gold text-sm font-semibold tracking-wide hover:underline underline-offset-4 transition"
                  >
                    شوفي الأعمال
                    <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 rtl:rotate-180">
                      <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"/>
                    </svg>
                  </Link>

                  {/* زرار الحجز المباشر */}
                  <a
                    href={`https://wa.me/${ARTIST.phone}?text=مرحبا، أريد حجز موعد لـ ${encodeURIComponent(service.title)}`}
                    target="_blank" rel="noopener noreferrer"
                    className="text-cream/30 hover:text-[#25D366] transition-colors"
                    title="احجزي على واتساب"
                  >
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
