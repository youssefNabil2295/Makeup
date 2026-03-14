// src/components/Portfolio.jsx
import { useState, useEffect, useRef, useCallback } from 'react'
import { PORTFOLIO } from '../data/content'

// ✏️ سرعة التحرك التلقائي بالميلي ثانية (3000 = 3 ثواني)
const AUTO_PLAY_INTERVAL = 3000

export default function Portfolio() {
  const [current,  setCurrent]  = useState(0)
  const [selected, setSelected] = useState(null)
  const [paused,   setPaused]   = useState(false)
  const timerRef = useRef(null)
  const total    = PORTFOLIO.length

  // ── التحرك للصورة التالية ─────────────────────────────
  const next = useCallback(() =>
    setCurrent(c => (c + 1) % total), [total])

  const prev = () =>
    setCurrent(c => (c - 1 + total) % total)

  // ── Auto-play ─────────────────────────────────────────
  useEffect(() => {
    if (paused) return
    timerRef.current = setInterval(next, AUTO_PLAY_INTERVAL)
    return () => clearInterval(timerRef.current)
  }, [paused, next])

  // الصور الظاهرة: السابقة + الحالية + التالية + التالية
  const visible = [
    PORTFOLIO[(current - 1 + total) % total],
    PORTFOLIO[current],
    PORTFOLIO[(current + 1) % total],
    PORTFOLIO[(current + 2) % total],
  ]

  return (
    <section id="portfolio" className="section-pad bg-ebony-soft overflow-hidden">
      <div className="max-w-7xl mx-auto">

        {/* ── عنوان القسم ──────────────────────────────── */}
        <div className="text-center mb-16">
          <p className="font-display italic text-gold/70 text-lg mb-3">معرض الأعمال</p>
          <h2 className="heading-lg text-cream mb-5">
            من <span className="text-gold">أعمالي</span>
          </h2>
          <span className="gold-divider" />
        </div>

        {/* ── الكاروسيل ────────────────────────────────── */}
        <div
          className="relative"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {/* الصور */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
            {visible.map((item, i) => (
              <div
                key={`${item.id}-${i}`}
                onClick={() => setSelected(item)}
                className={`
                  relative overflow-hidden rounded-sm cursor-pointer group
                  transition-all duration-700 ease-in-out
                  ${i === 1
                    ? 'aspect-[3/5] scale-105 z-10'   // الصورة الرئيسية أكبر
                    : 'aspect-[3/4] opacity-75 hover:opacity-100'}
                `}
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* overlay عند hover */}
                <div className="absolute inset-0 bg-ebony/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <span className="text-cream/90 text-xs font-body tracking-widest border-b border-gold/50 pb-1">
                    {item.alt}
                  </span>
                </div>

                {/* إطار ذهبي للصورة الرئيسية */}
                {i === 1 && (
                  <div className="absolute inset-0 border border-gold/30 pointer-events-none rounded-sm" />
                )}
              </div>
            ))}
          </div>

          {/* ── أزرار التنقل ──────────────────────────── */}
          <button
            onClick={() => { prev(); setPaused(true); setTimeout(() => setPaused(false), 4000) }}
            className="absolute top-1/2 -translate-y-1/2 -right-5 md:-right-7 w-12 h-12 rounded-full bg-ebony border border-gold/30 hover:border-gold text-gold flex items-center justify-center transition-all duration-200 hover:scale-110 shadow-xl z-20"
            aria-label="السابق"
          >
            <svg viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
              <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"/>
            </svg>
          </button>

          <button
            onClick={() => { next(); setPaused(true); setTimeout(() => setPaused(false), 4000) }}
            className="absolute top-1/2 -translate-y-1/2 -left-5 md:-left-7 w-12 h-12 rounded-full bg-ebony border border-gold/30 hover:border-gold text-gold flex items-center justify-center transition-all duration-200 hover:scale-110 shadow-xl z-20"
            aria-label="التالي"
          >
            <svg viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
              <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd"/>
            </svg>
          </button>
        </div>

        {/* ── Dots ─────────────────────────────────────── */}
        <div className="flex justify-center gap-2 mt-8">
          {PORTFOLIO.map((_, i) => (
            <button
              key={i}
              onClick={() => { setCurrent(i); setPaused(true); setTimeout(() => setPaused(false), 4000) }}
              className={`transition-all duration-300 rounded-full ${
                i === current
                  ? 'w-6 h-2 bg-gold'
                  : 'w-2 h-2 bg-gold/25 hover:bg-gold/50'
              }`}
              aria-label={`صورة ${i + 1}`}
            />
          ))}
        </div>

        {/* مؤشر الإيقاف المؤقت */}
        {paused && (
          <p className="text-center text-cream/20 text-xs mt-3 tracking-widest">
            ⏸ متوقف مؤقتاً
          </p>
        )}
      </div>

      {/* ── Lightbox ─────────────────────────────────────── */}
      {selected && (
        <div
          className="fixed inset-0 z-50 bg-ebony/96 flex items-center justify-center p-4"
          onClick={() => setSelected(null)}
        >
          <button
            className="absolute top-6 left-6 text-cream/50 hover:text-gold text-3xl leading-none transition-colors"
            onClick={() => setSelected(null)}
          >✕</button>

          {/* زرار السابق في Lightbox */}
          <button
            className="absolute right-6 top-1/2 -translate-y-1/2 text-cream/40 hover:text-gold text-4xl transition-colors"
            onClick={e => { e.stopPropagation(); setSelected(PORTFOLIO[(PORTFOLIO.indexOf(selected) - 1 + total) % total]) }}
          >‹</button>

          <img
            src={selected.src}
            alt={selected.alt}
            className="max-h-[85vh] max-w-full object-contain rounded-sm shadow-2xl"
            onClick={e => e.stopPropagation()}
          />

          {/* زرار التالي في Lightbox */}
          <button
            className="absolute left-6 top-1/2 -translate-y-1/2 text-cream/40 hover:text-gold text-4xl transition-colors"
            onClick={e => { e.stopPropagation(); setSelected(PORTFOLIO[(PORTFOLIO.indexOf(selected) + 1) % total]) }}
          >›</button>

          <p className="absolute bottom-6 text-cream/30 text-xs tracking-widest">{selected.alt}</p>
        </div>
      )}
    </section>
  )
}
