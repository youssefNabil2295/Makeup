// src/pages/Booking.jsx
import BookingForm from '../components/BookingForm'
import { ARTIST } from '../data/content'

export default function Booking() {
  return (
    <section className="min-h-screen pt-32 pb-24 section-pad bg-ebony">
      <div className="max-w-2xl mx-auto">

        {/* ── عنوان الصفحة ──────────────────────────────── */}
        <div className="text-center mb-14">
          <p className="font-display italic text-gold/70 text-lg mb-3">احجزي موعدك</p>
          <h1 className="heading-lg text-cream mb-5">
            إطلالتك <span className="text-gold">تبدأ من هنا</span>
          </h1>
          <span className="gold-divider mb-6 block" />
          <p className="text-cream/50 text-sm leading-7">
            املأي الفورم وهيجيلي رسالة على واتساب فوراً 💬
          </p>
        </div>

        {/* ── الفورم ────────────────────────────────────── */}
        <div className="bg-ebony-soft border border-gold/15 rounded-sm p-8 md:p-10">
          <BookingForm />
        </div>

        {/* ── رقم مباشر ─────────────────────────────────── */}
      
            <p className="text-center text-cream/30 text-xs mt-8 leading-6">
  أو تواصلي مباشرة:{' '}
  
<a 
  href={`https://wa.me/${ARTIST.phone}`}
  target="_blank"
  rel="noopener"
  className="text-gold hover:underline underline-offset-2"
>
  {ARTIST.phone}
</a>
</p>
      </div>
    </section>
  )
}