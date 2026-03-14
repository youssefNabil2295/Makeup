// src/components/CalendlyWidget.jsx
// ── تقويم Calendly مضمّن جوه الصفحة مباشرة ───────────────
//
// ⚙️ خطوة واحدة بس:
//   افتح src/data/content.js وحط لينك Calendly بتاعك:
//   calendly: 'https://calendly.com/اسمك'
//
import { useEffect } from 'react'
import { ARTIST } from '../data/content'

export default function CalendlyWidget() {
  useEffect(() => {
    // تحميل Calendly CSS
    if (!document.getElementById('calendly-css')) {
      const link  = document.createElement('link')
      link.id     = 'calendly-css'
      link.rel    = 'stylesheet'
      link.href   = 'https://assets.calendly.com/assets/external/widget.css'
      document.head.appendChild(link)
    }

    // تحميل Calendly JS
    if (!document.getElementById('calendly-js')) {
      const script    = document.createElement('script')
      script.id       = 'calendly-js'
      script.src      = 'https://assets.calendly.com/assets/external/widget.js'
      script.async    = true
      script.onload   = () => {
        // لما الـ script يتحمل، ابني الـ widget
        if (window.Calendly) {
          window.Calendly.initInlineWidget({
            url:         ARTIST.calendly,
            parentElement: document.getElementById('calendly-embed'),
            prefill:     {},
            utm:         {},
          })
        }
      }
      document.body.appendChild(script)
    } else if (window.Calendly) {
      // لو الـ script موجود خلاص
      window.Calendly.initInlineWidget({
        url:           ARTIST.calendly,
        parentElement: document.getElementById('calendly-embed'),
      })
    }
  }, [])

  return (
    <div className="w-full rounded-sm overflow-hidden border border-gold/15">
      {/* الـ widget بيتحمل هنا */}
      <div
        id="calendly-embed"
        style={{ minWidth: '320px', height: '700px' }}
      />
    </div>
  )
}
