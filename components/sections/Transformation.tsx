'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import SectionHeading from '@/components/ui/SectionHeading'
import { TRANSFORMATIONS } from '@/lib/data'

export default function Transformation() {
  const [active, setActive] = useState<number | null>(null)

  return (
    <section className="py-16 px-6 lg:px-10 bg-cream">
      <SectionHeading
        eyebrow="proof on paper"
        title="See The Transformation"
        sub="Every student starts somewhere. Here is a selection of real handwriting before-and-after results."
      />

      <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {TRANSFORMATIONS.map((t, i) => (
          <motion.div
            key={i}
            whileHover={{ y: -6, boxShadow: '0 24px 48px rgba(11,42,192,0.14)' }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="group relative bg-white p-4 rounded-2xl cursor-pointer border border-gold-pale hover:border-gold/50 transition-all flex flex-col"
            style={{ boxShadow: '0 8px 30px rgba(11,42,192,0.05)' }}
            onClick={() => setActive(i)}
          >
            {/* Image Container with hover effects */}
            <div className="relative rounded-xl overflow-hidden aspect-[4/5] bg-cream flex-shrink-0">
              <img
                src={t.img}
                alt={t.alt}
                className="w-full h-full object-cover object-top group-hover:scale-[1.04] transition-transform duration-500 ease-out"
              />
              {/* Zoom hint overlay */}
              <div className="absolute inset-0 bg-ink/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="bg-white/95 rounded-full px-4 py-2 flex items-center gap-1.5 text-xs font-bold text-[#0B2AC0] shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" width="14" height="14" aria-hidden="true">
                    <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
                    <line x1="11" y1="8" x2="11" y2="14" /><line x1="8" y1="11" x2="14" y2="11" />
                  </svg>
                  Quick View
                </div>
              </div>
            </div>

            {/* Bottom Label (Polaroid style) */}
            <div className="pt-4 pb-1 text-center flex flex-col items-center">
              <span className="font-script text-2xl text-gold leading-none mb-1.5 block">
                {t.name}
              </span>
              <span className="font-display font-semibold text-[10px] uppercase tracking-wider text-muted">
                {t.program}
              </span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {active !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[1000] flex items-center justify-center p-4"
            style={{ background: 'rgba(6,16,61,0.85)', backdropFilter: 'blur(8px)' }}
            onClick={() => setActive(null)}
          >
            <motion.div
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
              onClick={e => e.stopPropagation()}
              className="relative max-w-lg w-full"
            >
              <img
                src={TRANSFORMATIONS[active].img}
                alt={TRANSFORMATIONS[active].alt}
                className="w-full rounded-2xl shadow-2xl border-4 border-white"
                style={{ maxHeight: '80vh', objectFit: 'contain' }}
              />
              <button
                onClick={() => setActive(null)}
                className="absolute -top-3 -right-3 bg-white hover:bg-gold-pale rounded-full w-9 h-9 flex items-center justify-center shadow-lg transition-colors"
                aria-label="Close"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="#0B2AC0" strokeWidth="2.5" strokeLinecap="round" width="16" height="16" aria-hidden="true">
                  <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
              <div className="mt-4 text-center">
                <p className="text-white font-script text-3xl text-gold mb-1">
                  {TRANSFORMATIONS[active].name}
                </p>
                <p className="text-white/70 font-display text-xs uppercase tracking-widest">
                  {TRANSFORMATIONS[active].program}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
