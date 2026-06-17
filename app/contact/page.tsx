import type { Metadata } from 'next'
import { SITE } from '@/lib/data'
import BookingForm from '@/components/sections/BookingForm'

export const metadata: Metadata = {
  title: 'Contact & Book a Demo',
  description: 'Contact Shraddha or book a free handwriting / calligraphy demo class in Hyderabad.',
}

const INFO = [
  {
    label: 'Phone',
    value: SITE.phone,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="18" height="18" aria-hidden="true">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.18h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.8a16 16 0 0 0 6.29 6.29l.98-.98a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
      </svg>
    ),
  },
  {
    label: 'Email',
    value: SITE.email,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="18" height="18" aria-hidden="true">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    ),
  },
  {
    label: 'Address',
    value: SITE.address,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="18" height="18" aria-hidden="true">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
  },
]

export default function ContactPage() {
  return (
    <div>
      <section className="relative overflow-hidden py-16 px-6 lg:px-10 bg-ink">
        <div className="absolute inset-0 ruled-bg opacity-10 pointer-events-none" />
        <div className="max-w-3xl mx-auto text-center relative z-10">
          <span className="font-script text-2xl text-gold-light block mb-1">get in touch</span>
          <h1 className="font-display font-extrabold text-4xl text-cream mb-3">Book Your Free Demo</h1>
          <p className="text-cream/70 text-base">Fill in the form and we&apos;ll call you to schedule your free class.</p>
        </div>
      </section>

      <section className="py-16 px-6 lg:px-10 bg-paper">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          {/* Info */}
          <div className="lg:pr-6">
            <h2 className="font-display font-semibold text-2xl text-ink mb-3 tracking-tight">We&apos;re Here to Help</h2>
            <p className="text-muted text-sm mb-8 leading-relaxed max-w-md">
              Reach out for any questions about our handwriting and calligraphy programs, batches, or fees.
            </p>
            <div className="flex flex-col gap-6 mb-8">
              {INFO.map((item) => (
                <div key={item.label} className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white text-gold rounded-2xl flex items-center justify-center flex-shrink-0 shadow-sm border border-gold-pale/50 transition-all duration-300 hover:scale-105">
                    {item.icon}
                  </div>
                  <div>
                    <div className="font-serif font-bold text-sm text-ink mb-0.5">{item.label}</div>
                    <div className="text-ink font-medium text-sm leading-relaxed max-w-sm">{item.value}</div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Map placeholder */}
            <div className="bg-cream border border-gold-pale rounded-2xl h-56 flex items-center justify-center relative overflow-hidden">
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage:
                    'linear-gradient(#E6DFC4 1px,transparent 1px),linear-gradient(90deg,#E6DFC4 1px,transparent 1px)',
                  backgroundSize: '28px 28px',
                  opacity: 0.5,
                }}
              />
              <div className="relative z-10 text-center">
                <div className="w-12 h-12 bg-gold-pale border-2 border-gold rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg viewBox="0 0 24 24" fill="none" stroke="#E0A407" strokeWidth="2" width="22" height="22" aria-hidden="true">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <div className="font-serif font-bold text-ink text-sm">Shraddha</div>
                <div className="text-faint text-xs mt-0.5 mb-3">Hyderabad, Telangana</div>
                <a
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-ink text-cream text-xs font-bold px-4 py-2 rounded-md hover:bg-gold hover:text-ink-deep transition-colors inline-block"
                >
                  Open in Google Maps
                </a>
              </div>
            </div>
          </div>

          {/* Form */}
          <BookingForm />
        </div>
      </section>
    </div>
  )
}
