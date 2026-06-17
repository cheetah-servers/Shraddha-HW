import { ReactNode } from 'react'
import { FeatureCard } from '@/components/ui/feature-card'
import SectionHeading from '@/components/ui/SectionHeading'
import FadeIn from '@/components/ui/FadeIn'

const ICON = (children: ReactNode) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="24" height="24" aria-hidden="true">
    {children}
  </svg>
)

const FEATURES = [
  { t: 'Expert Calligraphers', d: 'Trained handwriting and lettering specialists with years of teaching.', i: ICON(<><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></>) },
  { t: 'Flexible Batches', d: 'Online and offline classes for kids and adults, weekdays or weekends.', i: ICON(<><rect x="3" y="4" width="18" height="18" rx="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /></>) },
  { t: 'Free Practice Sheets', d: 'Take-home worksheets and ruled templates to reinforce every lesson.', i: ICON(<><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /></>) },
  { t: 'Completion Certificate', d: 'A recognised certificate to celebrate and showcase progress made.', i: ICON(<><circle cx="12" cy="8" r="6" /><path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11" /></>) },
  { t: 'Visible Results', d: 'Most students see clear improvement within just 30 days.', i: ICON(<><polyline points="22 7 13.5 15.5 8.5 10.5 2 17" /><polyline points="16 7 22 7 22 13" /></>) },
  { t: 'Personal Attention', d: 'Small batches mean one-on-one correction for every student.', i: ICON(<path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3z" />) },
]

export default function WhyChooseUs() {
  return (
    <section className="py-16 px-6 lg:px-10 bg-cream">
      <SectionHeading eyebrow="why choose us" title="Crafted For Real Improvement" />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto mt-8">
        {FEATURES.map((f, i) => (
          <FadeIn key={f.t} delay={i * 0.06}>
            <FeatureCard className="h-full bg-white transition-all duration-300 border border-gold-pale hover:border-gold/50">
              <div className="flex flex-col gap-4">
                <div className="w-12 h-12 rounded-xl bg-gold-pale text-gold flex items-center justify-center transition-all duration-300 group-hover:bg-gold group-hover:text-white group-hover:scale-110 group-hover:rotate-3">
                  {f.i}
                </div>
                <div>
                  <h3 className="font-display font-bold text-[16px] text-ink mb-1.5">{f.t}</h3>
                  <span className="block w-6 h-[2px] bg-gold/30 group-hover:w-12 transition-all duration-300" />
                </div>
                <p className="text-muted text-[13px] leading-relaxed mt-0.5">{f.d}</p>
              </div>
            </FeatureCard>
          </FadeIn>
        ))}
      </div>
    </section>
  )
}
