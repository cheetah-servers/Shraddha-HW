'use client'
import FadeIn from '@/components/ui/FadeIn'
import SectionHeading from '@/components/ui/SectionHeading'
import { TravelCard } from '@/components/ui/card-7'

function HandwritingIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="#0B2AC0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="30" height="30" aria-hidden="true">
      <path d="M12 20h9" />
      <path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z" />
    </svg>
  )
}

function CalligraphyIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="#E0A407" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="30" height="30" aria-hidden="true">
      <path d="M18.37 2.63 14 7l-1.59-1.59a2 2 0 0 0-2.82 0L8 7l9 9 1.59-1.59a2 2 0 0 0 0-2.82L17 10l4.37-4.37a2.12 2.12 0 1 0-3-3Z" />
      <path d="M9 8c-2 3-4 3.5-7 4l8 10c2-1 6-5 6-7" />
      <path d="M14.5 17.5 4.5 15" />
    </svg>
  )
}

export default function Pillars() {
  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'instant' as ScrollBehavior })

  return (
    <section id="about" className="py-16 px-6 lg:px-10 bg-cream scroll-mt-20">
      <SectionHeading
        eyebrow="two paths, one craft"
        title="Choose Your Writing Journey"
        sub="Whether you want clear, confident everyday writing or the artistry of decorative lettering — we teach both, beautifully."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mt-8">

        {/* Handwriting */}
        <FadeIn direction="left">
          <TravelCard
            badge="Everyday Writing"
            badgeColor="#0B2AC0"
            badgeBg="#EEF1FB"
            icon={<HandwritingIcon />}
            title="Handwriting Improvement"
            subtitle="For kids, career aspirants & working adults"
            overview="Turn messy, rushed writing into neat, legible, confident handwriting. Ideal for school children and adults who want their everyday writing to look its best."
            features={[
              'Letter formation & spacing',
              'Cursive & print styles',
              'Speed & exam neatness',
            ]}
            accentColor="#0B2AC0"
            accentPale="#EEF1FB"
            exploreLabel="Explore Handwriting"
            onExplore={() => scrollTo('handwriting')}
          />
        </FadeIn>

        {/* Calligraphy */}
        <FadeIn direction="right">
          <TravelCard
            badge="The Art of Lettering"
            badgeColor="#E0A407"
            badgeBg="#FEF7E0"
            icon={<CalligraphyIcon />}
            title="Calligraphy Art"
            subtitle="Hobbyists, artists & creative learners"
            overview="Learn the timeless craft of decorative lettering with brush pens and nibs. Perfect for creative hobbyists, artists, and anyone who wants to make beautiful art."
            features={[
              'Modern & classic styles',
              'Brush pen & nib techniques',
              'Invitations, cards & art',
            ]}
            accentColor="#E0A407"
            accentPale="#FEF7E0"
            exploreLabel="Explore Calligraphy"
            onExplore={() => scrollTo('calligraphy')}
          />
        </FadeIn>

      </div>
    </section>
  )
}
