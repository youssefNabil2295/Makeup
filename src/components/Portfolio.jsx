// src/components/Portfolio.jsx
import { useState } from 'react'
import { PORTFOLIO } from '../data/content'

export default function Portfolio() {
  const [selected, setSelected] = useState(null)

  return (
    <section id="portfolio" className="section-pad bg-ebony-soft">
      <div className="max-w-7xl mx-auto">

        {/* ── عنوان القسم ──────────────────────────────── */}
        <div className="text-center mb-16">
          <p className="font-display italic text-gold/70 text-lg mb-3">معرض الأعمال</p>
          <h2 className="heading-lg text-cream mb-5">
            من <span className="text-gold">أعمالي</span>
          </h2>
          <span className="gold-divider" />
        </div>

        {/* ── الجاليري ─────────────────────────────────── */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
          {PORTFOLIO.map(item => (
            <div
              key={item.id}
              className="relative overflow-hidden rounded-sm aspect-[3/4] cursor-pointer group"
              onClick={() => setSelected(item)}
            >
              <img
                src={item.src}
                alt={item.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              {/* hover overlay */}
              <div className="absolute inset-0 bg-ebony/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-gold border border-gold/60 px-4 py-2 text-sm font-body tracking-widest">
                  عرض
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Lightbox ─────────────────────────────────────── */}
      {selected && (
        <div
          className="fixed inset-0 z-50 bg-ebony/95 flex items-center justify-center p-4"
          onClick={() => setSelected(null)}
        >
          <button
            className="absolute top-6 left-6 text-cream/60 hover:text-gold text-3xl leading-none"
            onClick={() => setSelected(null)}
          >
            ✕
          </button>
          <img
            src={selected.src}
            alt={selected.alt}
            className="max-h-[85vh] max-w-full object-contain rounded-sm shadow-2xl"
            onClick={e => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  )
}
