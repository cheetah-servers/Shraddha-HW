import type { Metadata } from 'next'
import Link from 'next/link'
import FadeIn from '@/components/ui/FadeIn'
import { FeatureCard } from '@/components/ui/feature-card'

export const metadata: Metadata = {
  title: 'Gallery',
  description: 'A gallery of handwriting transformations and calligraphy artwork created by students of Shraddha.',
  alternates: {
    canonical: 'https://shraddha.edu.in/gallery',
  },
}

const PIECES = [
  { word: 'Gratitude', cap: 'Modern brush script', size: 40, fill: '#0B2AC0', border: '#E6DFC4' },
  { word: 'Dream', cap: 'Pointed-pen flourish', size: 46, fill: '#E0A407', border: '#E6DFC4' },
  { word: 'Believe', cap: 'Italic hand', size: 40, fill: '#0B2AC0', border: '#E6DFC4' },
  { word: 'Invited', cap: 'Wedding invitation', size: 40, fill: '#0B2AC0', border: '#FCBB19', sub: 'YOU ARE' },
  { word: 'Joy', cap: 'Bounce lettering', size: 50, fill: '#E0A407', border: '#E6DFC4' },
  { word: 'Bloom', cap: 'Copperplate', size: 42, fill: '#0B2AC0', border: '#E6DFC4' },
]

export default function GalleryPage() {
  return (
    <div>
      <section className="relative overflow-hidden py-20 px-6 lg:px-10 bg-ink">
        <div className="absolute inset-0 ruled-bg opacity-10 pointer-events-none" />
        <div className="max-w-3xl mx-auto text-center relative z-10">
          <span className="font-script text-2xl text-gold-light block mb-1">student work</span>
          <h1 className="font-display font-extrabold text-4xl md:text-5xl text-cream mb-4">Our Gallery</h1>
          <p className="text-cream/70 text-lg leading-relaxed">
            A glimpse of the calligraphy artwork and lettering created by our students.
          </p>
        </div>
      </section>

      <section className="py-16 px-6 lg:px-10 bg-cream">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto place-items-center">
          {PIECES.map((g, i) => (
            <FadeIn key={g.word} delay={i * 0.06}>
              <FeatureCard className="w-full !p-0 overflow-hidden">
                <div className="bg-paper rounded-xl overflow-hidden">
                  <svg viewBox="0 0 300 180" width="100%" height="180" aria-label={`Calligraphy piece reading ${g.word}`}>
                    <rect width="300" height="180" fill="#FEFCF7" />
                    <rect x="14" y="14" width="272" height="152" fill="none" stroke={g.border} strokeWidth="1.2" rx="6" />
                    {g.sub && (
                      <text x="150" y="68" textAnchor="middle" fontFamily="Poppins,sans-serif" fontSize="13" fontWeight="600" fill="#4A5680" letterSpacing="4">
                        {g.sub}
                      </text>
                    )}
                    <text x="150" y={g.sub ? 112 : 100} textAnchor="middle" fontFamily="Dancing Script,cursive" fontSize={g.size} fontWeight="700" fill={g.fill}>
                      {g.word}
                    </text>
                    {!g.sub && <path d="M90 120 Q150 134 210 120" stroke="#E0A407" strokeWidth="1.2" fill="none" />}
                  </svg>
                  <div className="py-3.5 px-5 text-xs text-muted font-semibold text-center border-t border-gold-pale">{g.cap}</div>
                </div>
              </FeatureCard>
            </FadeIn>
          ))}
        </div>
      </section>

      <section className="py-16 px-6 lg:px-10 text-center bg-paper">
        <div className="max-w-xl mx-auto">
          <h2 className="font-display font-extrabold text-3xl text-ink mb-3">Create Work Like This</h2>
          <p className="text-muted text-sm mb-7">Join a calligraphy batch and start your own portfolio.</p>
          <Link href="/#book" className="btn-gold !px-9 !py-4">Book Free Demo</Link>
        </div>
      </section>
    </div>
  )
}
