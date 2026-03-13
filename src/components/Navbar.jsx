// src/components/Navbar.jsx
import { useState, useEffect } from 'react'
import { ARTIST, IMAGES } from '../data/content'

// ── أيقونات السوشيال ──────────────────────────────────────
const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
  </svg>
)

const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
)

// ── روابط التنقل ──────────────────────────────────────────
const NAV_LINKS = [
  { label: 'الرئيسية',   href: '#hero' },
  { label: 'عني',        href: '#about' },
  { label: 'خدماتي',     href: '#services' },
  { label: 'أعمالي',     href: '#portfolio' },
  { label: 'آراء العملاء', href: '#testimonials' },
  { label: 'تواصلي',     href: '#contact' },
]

export default function Navbar() {
  const [scrolled,     setScrolled]     = useState(false)
  const [menuOpen,     setMenuOpen]     = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-ebony/95 backdrop-blur-md shadow-lg shadow-black/40' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between h-20">

        {/* ── اللوجو ─────────────────────────────────── */}
        <a href="#hero" className="flex items-center gap-3">
          <img
            src={IMAGES.logo}
            alt={ARTIST.name}
            className="h-10 w-auto object-contain"
            onError={e => { e.target.style.display = 'none' }}
          />
          <span className="font-display text-xl text-gold tracking-widest hidden sm:block">
            {ARTIST.nameEn}
          </span>
        </a>

        {/* ── روابط Desktop ─────────────────────────── */}
        <nav className="hidden md:flex items-center gap-7">
          {NAV_LINKS.map(link => (
            <a
              key={link.href}
              href={link.href}
              className="text-cream/70 hover:text-gold font-body text-sm tracking-wide transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* ── أيقونات السوشيال + موبايل ──────────────── */}
        <div className="flex items-center gap-4">

          {/* سوشيال */}
          <a href={ARTIST.instagram} target="_blank" rel="noopener noreferrer"
             className="text-cream/50 hover:text-gold transition-colors duration-200">
            <InstagramIcon />
          </a>
          <a href={ARTIST.facebook} target="_blank" rel="noopener noreferrer"
             className="text-cream/50 hover:text-gold transition-colors duration-200">
            <FacebookIcon />
          </a>

          {/* زر المحادثة WhatsApp – Desktop */}
          <a
            href={`https://wa.me/${ARTIST.phone}`}
            target="_blank" rel="noopener noreferrer"
            className="btn-gold hidden md:inline-flex text-xs"
          >
            احجزي موعدك
          </a>

          {/* Hamburger */}
          <button
            className="md:hidden text-cream focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="القائمة"
          >
            {menuOpen
              ? <span className="text-2xl leading-none">✕</span>
              : <span className="flex flex-col gap-1.5">
                  <span className="block w-6 h-px bg-cream" />
                  <span className="block w-4 h-px bg-cream" />
                  <span className="block w-6 h-px bg-cream" />
                </span>
            }
          </button>
        </div>
      </div>

      {/* ── Mobile Menu ───────────────────────────────── */}
      {menuOpen && (
        <div className="md:hidden bg-ebony-soft border-t border-gold/20 px-6 py-6 flex flex-col gap-5">
          {NAV_LINKS.map(link => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-cream/80 hover:text-gold font-body text-base tracking-wide transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href={`https://wa.me/${ARTIST.phone}`}
            target="_blank" rel="noopener noreferrer"
            className="btn-gold text-sm text-center"
          >
            احجزي موعدك عبر واتساب
          </a>
        </div>
      )}
    </header>
  )
}
