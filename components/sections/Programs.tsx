'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { PROGRAMS, type Program } from '@/lib/data'
import { PROGRAM_ICONS, ARROW } from '@/components/ui/icons'
import SectionHeading from '@/components/ui/SectionHeading'

function GroupLabel({ children }: { children: string }) {
  return (
    <div className="flex items-center justify-center gap-3 my-5">
      <span className="w-9 h-px bg-gold-pale" />
      <span className="font-serif text-sm font-bold text-gold tracking-wider uppercase">{children}</span>
      <span className="w-9 h-px bg-gold-pale" />
    </div>
  )
}

function Card({ program, onOpen }: { program: Program; onOpen: (p: Program) => void }) {
  const calli = program.category === 'calligraphy'
  return (
    <motion.button
      whileHover={{ y: -5, boxShadow: '0 12px 32px rgba(0,0,0,0.10)' }}
      transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
      onClick={() => onOpen(program)}
      className="text-left flex flex-col w-full bg-paper border border-gold-pale rounded-2xl p-5 hover:border-gold/60 transition-all h-full cursor-pointer group"
    >
      {/* Icon */}
      <div
        className={`w-11 h-11 rounded-xl flex items-center justify-center mb-4 flex-shrink-0 ${
          calli ? 'bg-gold text-ink-deep' : 'bg-ink text-gold-light'
        }`}
      >
        {PROGRAM_ICONS[program.slug]}
      </div>

      {/* Title */}
      <h3 className="font-display font-bold text-[15px] leading-snug text-ink mb-2">
        {program.name}
      </h3>

      {/* Divider */}
      <span className="block w-8 h-px bg-gold/30 mb-3 flex-shrink-0" />

      {/* Description – grows to fill remaining space */}
      <p className="text-muted text-[13px] leading-relaxed flex-grow mb-4">
        {program.short}
      </p>

      {/* CTA – always at the bottom */}
      <span className="inline-flex items-center gap-1.5 text-[12px] font-semibold text-gold group-hover:gap-2.5 transition-all duration-200">
        Learn More {ARROW}
      </span>
    </motion.button>
  )
}

function ProgramModal({ program, onClose }: { program: Program | null; onClose: () => void }) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    if (program) {
      document.addEventListener('keydown', onKey)
      document.body.style.overflow = 'hidden'
    }
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [program, onClose])

  return (
    <AnimatePresence>
      {program && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={onClose}
          className="fixed inset-0 z-[1000] flex items-center justify-center p-5 sm:p-6"
          style={{ background: 'rgba(6,16,61,0.55)', backdropFilter: 'blur(5px)' }}
          role="dialog"
          aria-modal="true"
          aria-label={program.name}
        >
          <motion.div
            initial={{ opacity: 0, y: 22, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 22, scale: 0.97 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="bg-paper rounded-[24px] max-w-xl w-full max-h-[88vh] overflow-y-auto shadow-2xl"
            style={{ borderTop: '5px solid var(--gold-light)' }}
          >
            {/* Head */}
            <div className="px-7 sm:px-9 pt-8 flex items-start gap-4">
              <div
                className={`w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 ${
                  program.category === 'calligraphy' ? 'bg-gold text-ink-deep' : 'bg-ink text-gold-light'
                }`}
              >
                {PROGRAM_ICONS[program.slug]}
              </div>
              <div className="pt-0.5">
                <span className="font-script text-[19px] text-gold block leading-none mb-1.5">
                  {program.category === 'calligraphy' ? 'the art of lettering' : 'handwriting program'}
                </span>
                <h3 className="font-display font-extrabold text-[26px] leading-[1.15] text-ink tracking-[-0.01em]">
                  {program.name}
                </h3>
              </div>
            </div>

            {/* Tagline */}
            <p className="px-7 sm:px-9 pt-4 font-serif italic text-[15px] text-ink/70">{program.tagline}</p>

            {/* Body */}
            <p className="px-7 sm:px-9 pt-3 pb-2 font-sans text-[15px] leading-[1.85] text-muted">
              {program.overview}
            </p>

            {/* Actions */}
            <div className="px-7 sm:px-9 py-7 flex flex-col sm:flex-row gap-3">
              <Link
                href="/#book"
                onClick={onClose}
                className="flex-1 justify-center bg-ink text-cream font-serif font-bold text-[15px] px-6 py-3.5 rounded-xl inline-flex items-center gap-2 hover:bg-ink-deep transition-colors"
              >
                Book Now
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" width="16" height="16" aria-hidden="true">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </Link>
              <button
                onClick={onClose}
                className="flex-1 sm:flex-none sm:px-8 bg-transparent text-ink font-serif font-semibold text-[15px] py-3.5 rounded-xl border-[1.5px] border-rule hover:border-ink hover:bg-cream transition-all"
              >
                Close
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default function Programs() {
  const [active, setActive] = useState<Program | null>(null)
  const handwriting = PROGRAMS.filter((p) => p.category === 'handwriting')
  const calligraphy = PROGRAMS.filter((p) => p.category === 'calligraphy')

  return (
    <section id="programs" className="py-16 px-6 lg:px-10 bg-paper scroll-mt-20">
      <SectionHeading eyebrow="our programs" title="Courses For Every Hand" />

      <div className="max-w-6xl mx-auto">
        <GroupLabel>Handwriting</GroupLabel>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-9">
          {handwriting.map((p) => (
            <Card key={p.slug} program={p} onOpen={setActive} />
          ))}
        </div>

        <GroupLabel>Calligraphy</GroupLabel>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
          {calligraphy.map((p) => (
            <Card key={p.slug} program={p} onOpen={setActive} />
          ))}
        </div>
      </div>

      <ProgramModal program={active} onClose={() => setActive(null)} />
    </section>
  )
}
