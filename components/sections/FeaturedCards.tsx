'use client'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { PROGRAMS, type Program } from '@/lib/data'
import { PROGRAM_ICONS } from '@/components/ui/icons'
import { TravelCard } from '@/components/ui/card-7'
import SectionHeading from '@/components/ui/SectionHeading'

// ── Program detail modal ──────────────────────────────────────────────────────
function ProgramModal({ program, onClose }: { program: Program | null; onClose: () => void }) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose() }
    if (program) {
      document.addEventListener('keydown', onKey)
      document.body.style.overflow = 'hidden'
    }
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [program, onClose])

  const isCalli = program?.category === 'calligraphy'
  const accent = isCalli ? '#E0A407' : '#0B2AC0'
  const accentPale = isCalli ? '#FEF7E0' : '#EEF1FB'

  return (
    <AnimatePresence>
      {program && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.1 }}
          onClick={onClose}
          className="fixed inset-0 z-[1000] flex items-center justify-center p-5"
          style={{ background: 'rgba(6,16,61,0.55)', backdropFilter: 'blur(6px)' }}
          role="dialog" aria-modal="true" aria-label={program.name}
        >
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.97 }}
            transition={{ duration: 0.15, ease: [0.22, 1, 0.36, 1] }}
            onClick={e => e.stopPropagation()}
            className="bg-white rounded-3xl w-full max-w-2xl max-h-[88vh] overflow-y-auto shadow-2xl"
            style={{ borderTop: `5px solid ${accent}` }}
          >
            <div className="px-7 pt-7 flex items-start gap-4">
              <div className="flex-shrink-0 flex items-center justify-center rounded-2xl" style={{ width: 52, height: 52, background: accentPale }}>
                {PROGRAM_ICONS[program.slug]}
              </div>
              <div>
                <span className="text-[10px] font-bold uppercase tracking-widest block mb-1" style={{ color: accent }}>
                  {isCalli ? 'Calligraphy Program' : 'Handwriting Program'}
                </span>
                <h3 className="font-display font-extrabold text-[24px] leading-tight" style={{ color: '#0F2566' }}>
                  {program.name}
                </h3>
              </div>
            </div>

            <p className="px-7 pt-3 italic text-[13px]" style={{ color: '#4A5980' }}>{program.tagline}</p>
            <p className="px-7 pt-2 text-[13.5px] leading-[1.75]" style={{ color: '#4A5980' }}>{program.overview}</p>

            <div className="px-7 pt-5">
              <p className="text-[10px] font-bold uppercase tracking-widest mb-4" style={{ color: accent }}>Course Steps</p>
              <div className="flex flex-col gap-3">
                {program.curriculum.map((mod, i) => (
                  <div key={mod.title} className="flex gap-3 rounded-xl p-3.5" style={{ background: accentPale }}>
                    <div className="flex-shrink-0 flex items-center justify-center rounded-full text-white font-display font-bold text-[12px]"
                      style={{ width: 28, height: 28, background: accent, marginTop: 1 }}>
                      {i + 1}
                    </div>
                    <div>
                      <p className="font-display font-bold text-[13px] mb-0.5" style={{ color: '#0F2566' }}>
                        Step {i + 1}: {mod.title}
                      </p>
                      {mod.topics.map(t => (
                        <p key={t} className="text-[12.5px] leading-relaxed" style={{ color: '#4A5980' }}>{t}</p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="px-7 pt-5">
              <p className="text-[10px] font-bold uppercase tracking-widest mb-2.5" style={{ color: accent }}>Benefits</p>
              <div className="flex flex-wrap gap-2">
                {program.benefits.map(b => (
                  <span key={b} className="inline-flex items-center gap-1.5 text-[12px] rounded-full px-3 py-1"
                    style={{ color: '#0F2566', background: '#F4F7FF', border: '1px solid rgba(11,42,192,0.10)' }}>
                    <svg viewBox="0 0 16 16" fill="none" width="10" height="10" aria-hidden="true">
                      <circle cx="8" cy="8" r="7" fill={accent} opacity=".2" />
                      <polyline points="4.5 8 7 10.5 11.5 5.5" stroke={accent} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    {b}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex gap-3 px-7 py-6">
              <button
                onClick={() => { onClose(); document.getElementById('book')?.scrollIntoView({ behavior: 'instant' as ScrollBehavior }) }}
                className="flex-1 flex items-center justify-center gap-2 font-display font-bold text-[14px] text-white py-3 rounded-xl transition-opacity hover:opacity-90"
                style={{ background: accent }}
              >
                Book Now
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" width="15" height="15" aria-hidden="true">
                  <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
                </svg>
              </button>
              <button
                onClick={onClose}
                className="flex-1 flex items-center justify-center gap-2 font-display font-bold text-[14px] py-3 rounded-xl border transition-colors"
                style={{ color: '#0B2AC0', borderColor: 'rgba(11,42,192,0.22)', background: 'white' }}
                onMouseEnter={e => (e.currentTarget.style.borderColor = '#0B2AC0')}
                onMouseLeave={e => (e.currentTarget.style.borderColor = 'rgba(11,42,192,0.22)')}
              >
                Close
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" width="13" height="13" aria-hidden="true">
                  <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

// ── Section ───────────────────────────────────────────────────────────────────
export default function FeaturedCards() {
  const [active, setActive] = useState<Program | null>(null)

  const kidsProgram = PROGRAMS.find(p => p.slug === 'kids-handwriting')!
  const cursiveProgram = PROGRAMS.find(p => p.slug === 'cursive-writing')!
  const adultProgram = PROGRAMS.find(p => p.slug === 'adult-handwriting')!
  const examProgram = PROGRAMS.find(p => p.slug === 'exam-writing')!

  const modernCalli = PROGRAMS.find(p => p.slug === 'modern-calligraphy')!
  const classicCalli = PROGRAMS.find(p => p.slug === 'classic-calligraphy')!
  const artCalli = PROGRAMS.find(p => p.slug === 'calligraphy-art')!

  const scrollToBook = () => {
    document.getElementById('book')?.scrollIntoView({ behavior: 'instant' as ScrollBehavior })
  }

  return (
    <section id="programs" className="scroll-mt-20">

      {/* ── Handwriting Programs ── */}
      <div id="handwriting" className="py-16 px-6 lg:px-10 bg-paper scroll-mt-20">
        <SectionHeading eyebrow="everyday writing" title="Handwriting Programs" />
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">

          {/* Kids Handwriting */}
          <TravelCard
            icon={<div className="flex items-center justify-center">{PROGRAM_ICONS[kidsProgram.slug]}</div>}
            title={kidsProgram.name}
            subtitle={kidsProgram.short}
            overview={kidsProgram.overview}
            features={kidsProgram.benefits.slice(0, 3)}
            accentColor="#0B2AC0"
            accentPale="#EEF1FB"
            onLearnMore={() => setActive(kidsProgram)}
          />

          {/* Cursive Handwriting */}
          <TravelCard
            icon={<div className="flex items-center justify-center">{PROGRAM_ICONS[cursiveProgram.slug]}</div>}
            title={cursiveProgram.name}
            subtitle={cursiveProgram.short}
            overview={cursiveProgram.overview}
            features={cursiveProgram.benefits.slice(0, 3)}
            accentColor="#0B2AC0"
            accentPale="#EEF1FB"
            onLearnMore={() => setActive(cursiveProgram)}
          />

          {/* Adult Handwriting */}
          <TravelCard
            icon={<div className="flex items-center justify-center">{PROGRAM_ICONS[adultProgram.slug]}</div>}
            title={adultProgram.name}
            subtitle={adultProgram.short}
            overview={adultProgram.overview}
            features={adultProgram.benefits.slice(0, 3)}
            accentColor="#0B2AC0"
            accentPale="#EEF1FB"
            onLearnMore={() => setActive(adultProgram)}
          />

          {/* Speed & Exam Writing */}
          <TravelCard
            icon={<div className="flex items-center justify-center">{PROGRAM_ICONS[examProgram.slug]}</div>}
            title={examProgram.name}
            subtitle={examProgram.short}
            overview={examProgram.overview}
            features={examProgram.benefits.slice(0, 3)}
            accentColor="#0B2AC0"
            accentPale="#EEF1FB"
            onLearnMore={() => setActive(examProgram)}
          />

        </div>
      </div>

      {/* ── Calligraphy Services & Programs ── */}
      <div id="calligraphy" className="py-16 px-6 lg:px-10 bg-cream scroll-mt-20">
        <SectionHeading
          eyebrow="the art of lettering"
          title="Calligraphy Services & Programs"
          sub="We offer professional custom calligraphy services for your special events alongside structured courses to master modern and classic lettering."
        />
        
        <div className="mt-12 max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-start">

          {/* Left Column: Services Provided */}
          <div className="flex flex-col gap-6">
            <div className="text-center md:text-left border-b-2 border-gold/20 pb-2 mb-2">
              <h3 className="font-display font-extrabold text-[20px] text-ink tracking-tight">
                Services Provided
              </h3>
              <p className="text-[12px] text-muted font-sans mt-0.5">Bespoke hand-lettered calligraphy for events & gifts</p>
            </div>
            <div className="flex flex-col gap-6">
              
              {/* Wedding Invitations */}
              <TravelCard
                icon={
                  <div className="flex items-center justify-center">
                    <svg viewBox="0 0 24 24" fill="none" stroke="#E0A407" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="24" height="24" aria-hidden="true">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><path d="m22 6-10 7L2 6" />
                    </svg>
                  </div>
                }
                title="Wedding Invitations"
                subtitle="Elegant hand-lettered invite suites"
                overview="We craft custom script invitation suites, envelopes, place cards, RSVP cards, and menus to match your wedding style and make your guests feel special."
                features={['Hand-addressed envelopes', 'Bespoke script selection', 'Custom place cards & menus']}
                accentColor="#E0A407"
                accentPale="#FEF7E0"
                exploreLabel="Enquire Now"
                onExplore={scrollToBook}
              />

              {/* Event Signage */}
              <TravelCard
                icon={
                  <div className="flex items-center justify-center">
                    <svg viewBox="0 0 24 24" fill="none" stroke="#E0A407" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="24" height="24" aria-hidden="true">
                      <rect x="3" y="3" width="18" height="18" rx="2" /><path d="M9 3v18" /><path d="M15 3v18" /><path d="M3 9h18" /><path d="M3 15h18" />
                    </svg>
                  </div>
                }
                title="Event Signage"
                subtitle="Decorative boards & welcome signs"
                overview="Bespoke hand-lettered welcome boards, seating charts, and decorative signage for weddings, corporate celebrations, baby showers, and milestones."
                features={['Wooden & acrylic signage', 'Elegant table numbers', 'Seating layout sheets']}
                accentColor="#E0A407"
                accentPale="#FEF7E0"
                exploreLabel="Enquire Now"
                onExplore={scrollToBook}
              />

              {/* Quote Art & Frames */}
              <TravelCard
                icon={
                  <div className="flex items-center justify-center">
                    <svg viewBox="0 0 24 24" fill="none" stroke="#E0A407" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="24" height="24" aria-hidden="true">
                      <rect x="3" y="3" width="18" height="18" rx="2" /><rect x="7" y="7" width="10" height="10" />
                    </svg>
                  </div>
                }
                title="Quote Art & Frames"
                subtitle="Inspirational quotes & wall art"
                overview="Inspirational quotes, personal vows, or poems turned into framed hand-lettered masterpieces — perfect as visual focal points or personalized gifts."
                features={['Handcrafted script layouts', 'High-quality ink & paper', 'Professional custom framing']}
                accentColor="#E0A407"
                accentPale="#FEF7E0"
                exploreLabel="Enquire Now"
                onExplore={scrollToBook}
              />

            </div>
          </div>

          {/* Right Column: Courses We Teach */}
          <div className="flex flex-col gap-6">
            <div className="text-center md:text-left border-b-2 border-gold/20 pb-2 mb-2">
              <h3 className="font-display font-extrabold text-[20px] text-ink tracking-tight">
                Courses We Teach
              </h3>
              <p className="text-[12px] text-muted font-sans mt-0.5">Structured courses to learn modern & classic lettering</p>
            </div>
            <div className="flex flex-col gap-6">

              {/* Modern Calligraphy */}
              <TravelCard
                icon={<div className="flex items-center justify-center">{PROGRAM_ICONS[modernCalli.slug]}</div>}
                title={modernCalli.name}
                subtitle={modernCalli.short}
                overview={modernCalli.overview}
                features={modernCalli.benefits.slice(0, 3)}
                accentColor="#E0A407"
                accentPale="#FEF7E0"
                exploreLabel="Book Course"
                onExplore={scrollToBook}
              />

              {/* Classic & Nib Lettering */}
              <TravelCard
                icon={<div className="flex items-center justify-center">{PROGRAM_ICONS[classicCalli.slug]}</div>}
                title={classicCalli.name}
                subtitle={classicCalli.short}
                overview={classicCalli.overview}
                features={classicCalli.benefits.slice(0, 3)}
                accentColor="#E0A407"
                accentPale="#FEF7E0"
                exploreLabel="Book Course"
                onExplore={scrollToBook}
              />

              {/* Invitations & Lettering Art */}
              <TravelCard
                icon={<div className="flex items-center justify-center">{PROGRAM_ICONS[artCalli.slug]}</div>}
                title={artCalli.name}
                subtitle={artCalli.short}
                overview={artCalli.overview}
                features={artCalli.benefits.slice(0, 3)}
                accentColor="#E0A407"
                accentPale="#FEF7E0"
                exploreLabel="Book Course"
                onExplore={scrollToBook}
              />

            </div>
          </div>

        </div>
      </div>

      <ProgramModal program={active} onClose={() => setActive(null)} />
    </section>
  )
}
