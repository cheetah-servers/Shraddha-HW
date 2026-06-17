import { SITE } from '@/lib/data'
import BookingForm from '@/components/sections/BookingForm'
import SectionHeading from '@/components/ui/SectionHeading'

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

export default function BookingSection() {
  return (
    <section id="book" className="relative overflow-hidden py-20 px-6 lg:px-10 bg-cream scroll-mt-20">
      {/* Brand Ruled Paper background texture */}
      <div className="absolute inset-0 ruled-bg opacity-35 pointer-events-none" />

      {/* Decorative Soft Ambient Glow Orbs */}
      <div 
        className="absolute -top-20 -right-20 w-[300px] h-[300px] rounded-full bg-gold/10 pointer-events-none"
        style={{ filter: 'blur(80px)' }}
      />
      <div 
        className="absolute -bottom-20 -left-20 w-[250px] h-[250px] rounded-full bg-ink/5 pointer-events-none"
        style={{ filter: 'blur(70px)' }}
      />

      <div className="relative z-10">
        <SectionHeading eyebrow="get started" title="Book Your Free Demo Class" />

        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mt-10">
          {/* Info */}
          <div className="lg:pr-6">
            <h3 className="font-display font-semibold text-2xl text-ink mb-3 tracking-tight">We&apos;re Here to Help</h3>
            <p className="text-muted text-sm mb-8 leading-relaxed max-w-md">
              Reach out for any questions about our handwriting and calligraphy programs, batches, or fees — or
              just fill in the form and we&apos;ll call you back within 24 hours.
            </p>
            <div className="flex flex-col gap-6">
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
          </div>

          {/* Form */}
          <BookingForm />
        </div>
      </div>
    </section>
  )
}
