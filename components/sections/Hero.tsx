'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function Hero() {
  return (
    <section
      className="relative overflow-hidden min-h-[480px]"
      style={{ background: '#EEF1FB' }}
    >
      {/* ruled paper texture */}
      <div className="absolute inset-0 ruled-bg opacity-20 pointer-events-none" />

      {/* Centered grid — aligns with navbar logo */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 grid grid-cols-1 lg:grid-cols-[1fr_0.9fr] min-h-[480px] pb-14">

        {/* LEFT — text content */}
        <div className="flex flex-col justify-center py-10 max-w-2xl">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.25 }}>
            <span className="inline-flex items-center gap-2 mb-5 w-fit">
              <span className="text-[11px] font-medium tracking-wide" style={{ color: '#0B2AC0' }}>Handwriting Improvement &amp; Calligraphy Art</span>
            </span>

            <h1 className="font-display font-semibold text-ink leading-tight mb-0.5" style={{ fontSize: 'clamp(28px,3.5vw,36px)', letterSpacing: '-0.01em' }}>
              Master the Art of
            </h1>
            <span className="font-script text-gold font-bold leading-none block mb-4" style={{ fontSize: 'clamp(40px,5vw,50px)' }}>
              Beautiful Writing
            </span>

            <p className="text-muted text-[15px] leading-relaxed mb-7 max-w-md">
              From neat, confident everyday handwriting to elegant calligraphy art — expert-led training for kids,
              students, adults, and creative hobbyists.
            </p>

            <div className="flex flex-wrap gap-3 mb-7">
              <Link href="/#book" className="btn-ink">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" width="16" height="16" aria-hidden="true">
                  <rect x="3" y="4" width="18" height="18" rx="2" />
                  <line x1="16" y1="2" x2="16" y2="6" />
                  <line x1="8" y1="2" x2="8" y2="6" />
                  <line x1="3" y1="10" x2="21" y2="10" />
                </svg>
                Book Free Demo
              </Link>
              <Link href="/#programs" className="btn-outline-ink">
                Explore Programs
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" width="15" height="15" aria-hidden="true">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </Link>
            </div>
          </motion.div>
        </div>

        {/* RIGHT — illustration */}
        <div className="relative hidden lg:flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.15 }}
            className="w-full max-w-[480px]"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://ik.imagekit.io/dypkhqxip/Creative%20writing-amico.svg"
              alt="Creative writing illustration"
              className="w-full h-auto"
              loading="eager"
            />
          </motion.div>
        </div>

      </div>
    </section>
  )
}
