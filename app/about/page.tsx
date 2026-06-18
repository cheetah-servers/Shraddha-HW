import type { Metadata } from 'next'
import Link from 'next/link'
import { STATS } from '@/lib/data'
import WhyChooseUs from '@/components/sections/WhyChooseUs'
import Counter from '@/components/ui/Counter'

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'Shraddha has helped thousands of students transform their handwriting and learn calligraphy since 2014. Meet the academy behind beautiful writing.',
  alternates: {
    canonical: 'https://shraddha.edu.in/about',
  },
}

export default function AboutPage() {
  return (
    <div>
      <section className="relative overflow-hidden py-20 px-6 lg:px-10 bg-ink">
        <div className="absolute inset-0 ruled-bg opacity-10 pointer-events-none" />
        <div className="max-w-3xl mx-auto text-center relative z-10">
          <span className="font-script text-2xl text-gold-light block mb-1">our story</span>
          <h1 className="font-display font-extrabold text-4xl md:text-5xl text-cream mb-4">Beautiful Writing, For Everyone</h1>
          <p className="text-cream/70 text-lg leading-relaxed">
            Since 2014, Shraddha has helped thousands of children and adults write with clarity,
            confidence, and artistry.
          </p>
        </div>
      </section>

      <section className="py-16 px-6 lg:px-10 bg-paper">
        <div className="max-w-3xl mx-auto">
          <div className="prose-custom flex flex-col gap-5 text-muted text-[15px] leading-relaxed">
            <p>
              Shraddha began with a simple belief: that good handwriting is a skill anyone can learn, at any
              age. What started as small handwriting batches for school children has grown into a complete writing
              academy covering everything from neat everyday handwriting to the fine art of calligraphy.
            </p>
            <p>
              Today we run two complementary wings under one roof. Our <strong className="text-ink">Handwriting Improvement</strong>{' '}
              programs help kids, students, and professionals write neatly and confidently. Our{' '}
              <strong className="text-ink">Calligraphy Art</strong> programs guide hobbyists and creatives into the beautiful
              world of decorative lettering.
            </p>
            <p>
              Every program is built on patient, personal instruction in small batches — because real improvement comes
              from consistent guidance and the right practice, not generic worksheets.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 px-6 lg:px-10 bg-ink">
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {STATS.map((s) => (
            <div key={s.label}>
              <div className="font-display font-extrabold text-3xl text-gold-light">
                <Counter value={s.num} />
              </div>
              <div className="text-cream/60 text-xs mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      <WhyChooseUs />

      <section className="py-16 px-6 lg:px-10 text-center bg-cream">
        <div className="max-w-xl mx-auto">
          <h2 className="font-display font-extrabold text-3xl text-ink mb-3">Come Write With Us</h2>
          <p className="text-muted text-sm mb-7">Book a free demo and see the difference for yourself.</p>
          <Link href="/#book" className="btn-gold !px-9 !py-4">Book Free Demo</Link>
        </div>
      </section>
    </div>
  )
}
