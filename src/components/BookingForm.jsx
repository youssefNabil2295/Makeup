// src/components/BookingForm.jsx
// ── فورم الحجز — بيتحول لرسالة واتساب تلقائياً ──────────
import { useState } from 'react'
import { ARTIST, SERVICES } from '../data/content'

const INITIAL = {
  name:    '',
  phone:   '',
  service: '',
  date:    '',
  time:    '',
  notes:   '',
}

const TIME_SLOTS = [
  '09:00 ص', '10:00 ص', '11:00 ص',
  '12:00 م', '01:00 م', '02:00 م',
  '03:00 م', '04:00 م', '05:00 م',
  '06:00 م', '07:00 م', '08:00 م',
]

export default function BookingForm() {
  const [form,   setForm]   = useState(INITIAL)
  const [errors, setErrors] = useState({})
  const [sent,   setSent]   = useState(false)

  function validate() {
    const e = {}
    if (!form.name.trim())  e.name    = 'من فضلك اكتبي اسمك'
    if (!form.phone.trim()) e.phone   = 'من فضلك اكتبي رقمك'
    if (!form.service)      e.service = 'اختاري نوع الخدمة'
    return e
  }

  function handleSubmit() {
    const e = validate()
    if (Object.keys(e).length) { setErrors(e); return }

    const msg = [
      '🌸 *طلب حجز موعد*',
      '─────────────────',
      `👤 *الاسم:* ${form.name}`,
      `📞 *الهاتف:* ${form.phone}`,
      `💄 *الخدمة:* ${form.service}`,
      form.date  ? `📅 *التاريخ:* ${form.date}`  : '',
      form.time  ? `🕐 *الوقت:* ${form.time}`    : '',
      form.notes ? `📝 *ملاحظات:* ${form.notes}` : '',
      '─────────────────',
      'أرجو تأكيد الحجز 🙏',
    ].filter(Boolean).join('\n')

    const url = `https://wa.me/${ARTIST.phone}?text=${encodeURIComponent(msg)}`
    window.open(url, '_blank')
    setSent(true)
    setForm(INITIAL)
    setErrors({})
  }

  function handleChange(field, value) {
    setForm(prev => ({ ...prev, [field]: value }))
    if (errors[field]) setErrors(prev => ({ ...prev, [field]: '' }))
  }

  if (sent) return (
    <div className="flex flex-col items-center justify-center py-16 gap-5 text-center">
      <div className="w-16 h-16 rounded-full bg-[#25D366]/15 border border-[#25D366]/40 flex items-center justify-center text-3xl">
        ✓
      </div>
      <h3 className="font-display text-2xl text-cream">تم فتح واتساب!</h3>
      <p className="text-cream/55 text-sm leading-7 max-w-xs">
        الرسالة جاهزة — ابعتيها وهنأكد موعدك في أسرع وقت 💬
      </p>
      <button onClick={() => setSent(false)} className="btn-ghost text-sm mt-2">
        حجز موعد جديد
      </button>
    </div>
  )

  return (
    <div className="grid md:grid-cols-2 gap-5">

      {/* ── الاسم ──────────────────────────────────────── */}
      <Field label="الاسم الكريم" error={errors.name} required>
        <input
          type="text"
          placeholder="اسمك هنا..."
          value={form.name}
          onChange={e => handleChange('name', e.target.value)}
          className={inputCls(errors.name)}
        />
      </Field>

      {/* ── رقم الهاتف ─────────────────────────────────── */}
      <Field label="رقم الهاتف" error={errors.phone} required>
        <input
          type="tel"
          placeholder="01XXXXXXXXX"
          value={form.phone}
          onChange={e => handleChange('phone', e.target.value)}
          className={inputCls(errors.phone)}
        />
      </Field>

      {/* ── نوع الخدمة ─────────────────────────────────── */}
      <Field label="نوع الخدمة" error={errors.service} required>
        <select
          value={form.service}
          onChange={e => handleChange('service', e.target.value)}
          className={inputCls(errors.service)}
        >
          <option value="">اختاري الخدمة...</option>
          {SERVICES.map(s => (
            <option key={s.id} value={s.title}>{s.icon} {s.title}</option>
          ))}
        </select>
      </Field>

      {/* ── الوقت (اختياري) ────────────────────────────── */}
      <Field label="الوقت المفضل (اختياري)">
        <select
          value={form.time}
          onChange={e => handleChange('time', e.target.value)}
          className={inputCls()}
        >
          <option value="">اختاري الوقت...</option>
          {TIME_SLOTS.map(t => (
            <option key={t} value={t}>{t}</option>
          ))}
        </select>
      </Field>

      {/* ── التاريخ (اختياري) ──────────────────────────── */}
      <Field label="تاريخ الموعد (اختياري)" className="md:col-span-2">
        <input
          type="date"
          min={new Date().toISOString().split('T')[0]}
          value={form.date}
          onChange={e => handleChange('date', e.target.value)}
          className={inputCls()}
        />
      </Field>

      {/* ── ملاحظات ─────────────────────────────────────── */}
      <Field label="ملاحظات إضافية (اختياري)" className="md:col-span-2">
        <textarea
          rows={3}
          placeholder="أي تفاصيل تانية تحبي تذكريها..."
          value={form.notes}
          onChange={e => handleChange('notes', e.target.value)}
          className={inputCls() + ' resize-none'}
        />
      </Field>

      {/* ── زر الإرسال ──────────────────────────────────── */}
      <div className="md:col-span-2 pt-2">
        <button onClick={handleSubmit} className="btn-gold w-full justify-center py-4 text-sm">
          <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
          احجزي موعدك على واتساب
        </button>
        <p className="text-center text-cream/30 text-xs mt-3 leading-6">
          هيتفتح واتساب برسالة جاهزة — بعتيها وخلاص 🎉
        </p>
      </div>

    </div>
  )
}

function inputCls(error) {
  return [
    'w-full bg-ebony border rounded-sm px-4 py-3',
    'font-body text-sm text-cream placeholder-cream/25',
    'focus:outline-none focus:border-gold/70 transition-colors duration-200',
    'appearance-none',
    error ? 'border-red-500/60' : 'border-gold/20 hover:border-gold/40',
  ].join(' ')
}

function Field({ label, error, required, children, className = '' }) {
  return (
    <div className={`flex flex-col gap-2 ${className}`}>
      <label className="text-cream/60 text-xs tracking-widest font-body">
        {label}
        {required && <span className="text-gold mr-1">*</span>}
      </label>
      {children}
      {error && (
        <p className="text-red-400/80 text-xs flex items-center gap-1">
          <span>⚠</span> {error}
        </p>
      )}
    </div>
  )
}