import Link from 'next/link'
import Image from 'next/image'
import { SITE } from '@/lib/data'

const SOCIAL = [
  { label: 'Facebook', path: 'M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z' },
  { label: 'Instagram', custom: true },
  { label: 'YouTube', custom2: true },
]

export default function Footer() {
  return (
    <footer className="bg-[#F4F6F9] pt-14 border-t border-gold-pale/60 relative overflow-hidden">
      {/* Decorative subtle ruled line at the top */}
      <div className="absolute top-0 left-0 right-0 h-0.5 ruled-bg opacity-30" />

      <div className="max-w-7xl mx-auto px-6 lg:px-10 grid grid-cols-1 md:grid-cols-4 gap-11 pb-11 relative z-10">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <Image src="/logo-icon.png" alt="Shraddha logo" width={64} height={68} className="h-[68px] w-auto" />
            <div className="flex flex-col justify-center">
              <span className="block font-display font-bold text-[25px] leading-none text-ink" style={{ letterSpacing: '-0.4px' }}>Shraddha</span>
              <span className="block text-[9px] font-normal mt-1 text-ink/75 leading-tight">
                Good &amp; Neat Handwriting Institute
              </span>
            </div>
          </div>
          <p className="text-muted text-xs leading-relaxed max-w-[250px] mb-4">
            Helping kids and adults transform their handwriting, and discover the art of calligraphy, since 2014.
          </p>
          <div className="flex gap-2">
            {[
              <svg key="fb" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="15" height="15" aria-hidden="true"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>,
              <svg key="ig" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="15" height="15" aria-hidden="true"><rect x="2" y="2" width="20" height="20" rx="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></svg>,
              <svg key="yt" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="15" height="15" aria-hidden="true"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" /><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" /></svg>,
            ].map((icon, i) => (
              <a
                key={i}
                href="#"
                aria-label={['Facebook', 'Instagram', 'YouTube'][i]}
                className="w-8 h-8 rounded-lg flex items-center justify-center text-ink/60 transition-all duration-200 hover:bg-gold hover:text-ink-deep hover:scale-105"
                style={{ background: '#FFF', border: '1px solid rgba(11,42,192,0.1)' }}
              >
                {icon}
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-serif font-bold text-[14px] text-ink mb-4">Quick Links</h3>
          <ul className="flex flex-col gap-2.5">
            {['Home', 'About Us', 'Programs', 'Gallery', 'Contact'].map((l) => (
              <li key={l}>
                <Link href="#" className="text-muted hover:text-ink text-xs transition-colors">
                  {l}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-serif font-bold text-[14px] text-ink mb-4">Programs</h3>
          <ul className="flex flex-col gap-2.5">
            {['Kids Handwriting', 'Cursive Writing', 'Modern Calligraphy', 'Decorative Writing', 'Fast Handwriting'].map((l) => (
              <li key={l}>
                <Link href="#" className="text-muted hover:text-ink text-xs transition-colors">
                  {l}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-serif font-bold text-[14px] text-ink mb-4">Contact Us</h3>
          {[
            { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="14" height="14" aria-hidden="true"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.18h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.8a16 16 0 0 0 6.29 6.29l.98-.98a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>, text: SITE.phone },
            { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="14" height="14" aria-hidden="true"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>, text: SITE.email },
            { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="14" height="14" aria-hidden="true"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>, text: SITE.address },
          ].map((item, i) => (
            <div key={i} className="flex items-start gap-2.5 mb-3 text-muted text-xs leading-relaxed">
              <span className="text-gold mt-0.5 flex-shrink-0">{item.icon}</span>
              {item.text}
            </div>
          ))}

          {/* Map integration */}
          <div className="mt-4 border border-gold-pale rounded-xl overflow-hidden h-32 w-full relative shadow-sm hover:border-gold/45 transition-all">
            <iframe 
              src="https://maps.google.com/maps?q=40-180,%20plot%20no.204,%20Jawaharnagar%20colony,%20ECIL%20extension,%20Hyderabad%20500040&t=&z=14&ie=UTF8&iwloc=&output=embed"
              width="100%" 
              height="100%" 
              style={{ border: 0 }}
              allowFullScreen={false} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Shraddha Handwriting Institute Location Map"
            />
          </div>
        </div>
      </div>

      <div
        className="max-w-7xl mx-auto px-6 lg:px-10 py-5 flex justify-between items-center flex-wrap gap-3 relative z-10"
        style={{ borderTop: '1px solid rgba(11,42,192,0.06)' }}
      >
        <p className="text-muted/65 text-[11px]">
          © 2026 <span className="text-ink font-semibold">Shraddha</span>. All Rights Reserved.
        </p>
        <p className="text-muted/65 text-[11px] font-medium">A The Polyglot Academy Division</p>
        <p className="text-muted/65 text-[11px]">
          Built and maintained by{' '}
          <a 
            href="https://www.redlix.co.in" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="underline hover:text-ink font-medium transition-colors"
          >
            Studio Redlix
          </a>
        </p>
      </div>
    </footer>
  )
}
