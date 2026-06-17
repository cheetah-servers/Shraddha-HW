'use client'
import { useState, type FormEvent } from 'react'
import { PROGRAMS } from '@/lib/data'

const TIMINGS = ['Morning (6 AM – 10 AM)', 'Afternoon (10 AM – 2 PM)', 'Evening (4 PM – 8 PM)', 'Weekend Batch']

type F = { name: string; phone: string; email: string; program: string; timing: string }
type E = Partial<Record<keyof F, string>>

function validate(f: F): E {
  const e: E = {}
  if (!f.name.trim()) e.name = 'Name is required'
  if (!/^[6-9]\d{9}$/.test(f.phone)) e.phone = 'Enter a valid 10-digit number'
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(f.email)) e.email = 'Enter a valid email'
  if (!f.program) e.program = 'Please select a program'
  if (!f.timing) e.timing = 'Please select a timing'
  return e
}

export default function BookingForm() {
  const [form, setForm] = useState<F>({ name: '', phone: '', email: '', program: '', timing: '' })
  const [errors, setErrors] = useState<E>({})
  const [done, setDone] = useState(false)

  const set = (k: keyof F, v: string) => {
    setForm((f) => ({ ...f, [k]: v }))
    if (errors[k]) setErrors((e) => ({ ...e, [k]: '' }))
  }

  const submit = (e: FormEvent) => {
    e.preventDefault()
    const errs = validate(form)
    if (Object.keys(errs).length) {
      setErrors(errs)
      return
    }
    setDone(true)
  }

  const field = 'w-full border-t-0 border-x-0 border-b border-gold-pale/80 hover:border-gold/50 focus:border-gold rounded-none px-1 py-2.5 text-sm outline-none bg-transparent placeholder:text-faint text-ink transition-all duration-200 focus:ring-0'

  if (done) {
    return (
      <div className="bg-paper border border-gold-pale rounded-3xl p-10 text-center shadow-card">
        <div className="w-16 h-16 bg-gold-pale rounded-full flex items-center justify-center mx-auto mb-4">
          <svg viewBox="0 0 24 24" fill="none" stroke="#E0A407" strokeWidth="2.5" width="30" height="30" aria-hidden="true">
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>
        <h3 className="font-display font-semibold text-xl text-ink mb-2">You&apos;re all set!</h3>
        <p className="text-muted text-sm">We&apos;ll contact you within 24 hours to confirm your free demo class.</p>
      </div>
    )
  }

  return (
    <form onSubmit={submit} className="bg-paper border border-gold-pale rounded-3xl p-8 md:p-10 flex flex-col gap-6 shadow-card relative overflow-hidden">
      {/* Subtle inner gold frame accent */}
      <div className="absolute inset-2 border border-gold/5 rounded-[22px] pointer-events-none" />

      <h3 className="font-display font-semibold text-2xl text-ink tracking-tight">Book Your Free Demo</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <input className={field} placeholder="Full Name" value={form.name} onChange={(e) => set('name', e.target.value)} />
          {errors.name && <p className="text-red-600 text-xs mt-1">{errors.name}</p>}
        </div>
        <div>
          <input className={field} placeholder="Phone Number" value={form.phone} onChange={(e) => set('phone', e.target.value)} />
          {errors.phone && <p className="text-red-600 text-xs mt-1">{errors.phone}</p>}
        </div>
      </div>
      <div>
        <input className={field} type="email" placeholder="Email Address" value={form.email} onChange={(e) => set('email', e.target.value)} />
        {errors.email && <p className="text-red-600 text-xs mt-1">{errors.email}</p>}
      </div>
      <div>
        <select className={`${field} cursor-pointer`} value={form.program} onChange={(e) => set('program', e.target.value)}>
          <option value="" className="bg-paper text-ink">Program of Interest…</option>
          {PROGRAMS.map((p) => (
            <option key={p.slug} className="bg-paper text-ink">{p.name}</option>
          ))}
        </select>
        {errors.program && <p className="text-red-600 text-xs mt-1">{errors.program}</p>}
      </div>
      <div>
        <select className={`${field} cursor-pointer`} value={form.timing} onChange={(e) => set('timing', e.target.value)}>
          <option value="" className="bg-paper text-ink">Preferred Timing…</option>
          {TIMINGS.map((t) => (
            <option key={t} className="bg-paper text-ink">{t}</option>
          ))}
        </select>
        {errors.timing && <p className="text-red-600 text-xs mt-1">{errors.timing}</p>}
      </div>
      <button 
        type="submit" 
        className="inline-flex items-center justify-center gap-2 bg-gold hover:bg-gold-light text-ink-deep font-display font-bold text-sm px-6 py-3.5 rounded-xl transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 mt-2"
        style={{ boxShadow: '0 8px 24px rgba(252,187,25,0.2)' }}
      >
        Book My Free Demo
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" width="16" height="16" aria-hidden="true">
          <line x1="5" y1="12" x2="19" y2="12" />
          <polyline points="12 5 19 12 12 19" />
        </svg>
      </button>
    </form>
  )
}
