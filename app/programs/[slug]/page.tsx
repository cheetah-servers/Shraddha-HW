import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { PROGRAMS, FAQS } from '@/lib/data'
import { PROGRAM_ICONS } from '@/components/ui/icons'
import { FeatureCard } from '@/components/ui/feature-card'

export function generateStaticParams() {
  return PROGRAMS.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const program = PROGRAMS.find((p) => p.slug === slug)
  if (!program) return { title: 'Program Not Found' }
  return {
    title: `${program.name} | Shraddha`,
    description: program.overview,
    keywords: [program.name, `${program.category} classes`, 'Shraddha', 'Hyderabad'],
    alternates: {
      canonical: `https://shraddha.edu.in/programs/${slug}`,
    },
  }
}

export default async function ProgramPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const program = PROGRAMS.find((p) => p.slug === slug)
  if (!program) {
    notFound()
    return null
  }

  const isCalli = program.category === 'calligraphy'

  const courseJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Course',
    'name': program.name,
    'description': program.overview,
    'provider': {
      '@type': 'LocalBusiness',
      'name': 'Shraddha – Good & Neat Handwriting Institute',
      'sameAs': 'https://shraddha.edu.in'
    }
  }

  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(courseJsonLd) }}
      />
      {/* Hero */}
      <section className="relative overflow-hidden py-20 px-6 lg:px-10 bg-ink">
        <div className="absolute inset-0 ruled-bg opacity-10 pointer-events-none" />
        <div className="max-w-3xl mx-auto text-center relative z-10">
          <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-5 ${isCalli ? 'bg-gold text-ink-deep' : 'bg-cream text-ink'}`}>
            {PROGRAM_ICONS[program.slug]}
          </div>
          <span className="inline-block text-[10px] font-bold tracking-[2px] uppercase px-3 py-1 rounded-full mb-4" style={{ background: 'rgba(252,187,25,0.18)', color: '#FCBB19' }}>
            {isCalli ? 'Calligraphy' : 'Handwriting'}
          </span>
          <h1 className="font-display font-extrabold text-4xl md:text-5xl text-cream mb-3">{program.name}</h1>
          <p className="text-cream/70 text-lg mb-7 max-w-xl mx-auto leading-relaxed">{program.tagline}</p>
          <Link href="/#book" className="btn-gold !px-8 !py-3.5">
            Book Free Demo
          </Link>
        </div>
      </section>

      {/* Overview */}
      <section className="py-16 px-6 lg:px-10 bg-paper">
        <div className="max-w-3xl mx-auto text-center">
          <span className="font-script text-2xl text-gold block mb-1">about this course</span>
          <h2 className="font-display font-extrabold text-3xl text-ink mb-4">Course Overview</h2>
          <p className="text-muted text-[15px] leading-relaxed">{program.overview}</p>
        </div>
      </section>

      {/* Curriculum */}
      <section className="py-16 px-6 lg:px-10 bg-cream">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <span className="font-script text-2xl text-gold block mb-1">what you&apos;ll learn</span>
            <h2 className="font-display font-extrabold text-3xl text-ink">Course Curriculum</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 place-items-center">
            {program.curriculum.map((mod, i) => (
              <FeatureCard key={mod.title} className="w-full h-full">
                <div>
                  <div className="text-gold text-xs font-bold uppercase tracking-widest mb-1">Module {i + 1}</div>
                  <h3 className="font-display font-bold text-lg text-ink mb-3">{mod.title}</h3>
                  <ul className="flex flex-col gap-2">
                    {mod.topics.map((t) => (
                      <li key={t} className="flex items-center gap-2 text-muted text-sm">
                        <span className="text-gold font-bold text-xs">→</span>
                        {t}
                      </li>
                    ))}
                  </ul>
                </div>
              </FeatureCard>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 px-6 lg:px-10 bg-paper">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <span className="font-script text-2xl text-gold block mb-1">the rewards</span>
            <h2 className="font-display font-extrabold text-3xl text-ink">What You&apos;ll Gain</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {program.benefits.map((b) => (
              <div key={b} className="flex items-center gap-3 bg-cream border border-gold-pale rounded-xl p-4">
                <span className="w-7 h-7 bg-gold-pale rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg viewBox="0 0 24 24" fill="none" stroke="#E0A407" strokeWidth="3" width="14" height="14" aria-hidden="true">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </span>
                <span className="text-ink text-sm font-medium">{b}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-6 lg:px-10 bg-cream">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <span className="font-script text-2xl text-gold block mb-1">good to know</span>
            <h2 className="font-display font-extrabold text-3xl text-ink">Frequently Asked Questions</h2>
          </div>
          <div className="flex flex-col gap-4">
            {FAQS.map((f) => (
              <div key={f.q} className="bg-paper border border-gold-pale rounded-xl p-6">
                <h3 className="font-serif font-bold text-ink mb-2">{f.q}</h3>
                <p className="text-muted text-sm leading-relaxed">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 lg:px-10 text-center" style={{ background: 'linear-gradient(135deg,#082A8C,#0B2AC0,#1640E8)' }}>
        <div className="max-w-xl mx-auto">
          <h2 className="font-display font-extrabold text-3xl text-cream mb-3">Ready to Begin {program.name}?</h2>
          <p className="text-cream/70 text-sm mb-7">Book your free demo class today and take the first step.</p>
          <Link href="/#book" className="btn-gold !px-9 !py-4">
            Book Free Demo
          </Link>
        </div>
      </section>
    </div>
  )
}
