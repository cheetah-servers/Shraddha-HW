'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'

const NAV_LINKS = [
  { label: 'Home', href: '/#' },
  { label: 'About', href: '/#about' },
  { label: 'Programs', href: '/#programs' },
  { label: 'Gallery', href: '/#gallery' },
  { label: 'Testimonials', href: '/#testimonials' },
  { label: 'Contact', href: '/#book' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  return (
    <nav
      className={`sticky top-0 z-50 transition-shadow duration-150 border-b border-gold-pale ${
        scrolled ? 'shadow-soft' : ''
      }`}
      style={{ background: 'rgba(254,252,247,0.95)', backdropFilter: 'blur(16px)' }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 h-20 flex items-center justify-between md:justify-start gap-0">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 md:gap-3 shrink-0">
          <Image src="/logo-icon.png" alt="Shraddha logo" width={64} height={68} className="h-[52px] md:h-[68px] w-auto animate-fade-in" priority />
          <span className="flex flex-col justify-center">
            <span className="block font-display font-bold text-[19px] md:text-[27px] leading-none text-ink" style={{ letterSpacing: '-0.4px' }}>Shraddha</span>
            <span className="block text-[8px] md:text-[11px] font-normal mt-1 text-ink/85">
              Good &amp; Neat Handwriting Institute
            </span>
          </span>
        </Link>

        {/* Separator after logo */}
        <div className="hidden md:block h-10 w-px bg-gold-pale mx-7 shrink-0" />

        {/* Nav links — left aligned */}
        <ul className="hidden md:flex gap-7 flex-1">
          {NAV_LINKS.map((l) => (
            <li key={l.label}>
              <Link href={l.href} className="text-muted hover:text-gold text-[13px] font-medium transition-colors">
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Separator after menu items */}
        <div className="hidden md:block h-10 w-px bg-gold-pale mx-7 shrink-0" />

        <Link
          href="/#book"
          className="hidden md:flex items-center gap-1.5 bg-ink text-cream font-serif font-semibold text-[12px] px-5 py-2.5 rounded-md hover:bg-ink-deep transition-colors shrink-0"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" width="14" height="14" aria-hidden="true">
            <rect x="3" y="4" width="18" height="18" rx="2" />
            <line x1="16" y1="2" x2="16" y2="6" />
            <line x1="8" y1="2" x2="8" y2="6" />
            <line x1="3" y1="10" x2="21" y2="10" />
          </svg>
          Book Free Demo
        </Link>

        {/* Animated Hamburger menu toggle */}
        <button 
          onClick={() => setOpen(!open)} 
          className="md:hidden w-10 h-10 flex items-center justify-center relative border border-gold-pale/50 rounded-xl focus:outline-none bg-white shadow-sm"
          aria-label="Toggle menu"
        >
          <div className="w-5 h-4 flex flex-col justify-between relative">
            <span className={`block w-5 h-0.5 bg-ink rounded transition-all duration-300 origin-left ${open ? 'rotate-45 translate-x-[3px] -translate-y-[1px]' : ''}`} />
            <span className={`block w-5 h-0.5 bg-ink rounded transition-all duration-300 ${open ? 'opacity-0 scale-0' : ''}`} />
            <span className={`block w-5 h-0.5 bg-ink rounded transition-all duration-300 origin-left ${open ? '-rotate-45 translate-x-[3px] translate-y-[1px]' : ''}`} />
          </div>
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2, ease: 'easeInOut' }}
            className="md:hidden overflow-hidden bg-paper border-t border-gold-pale/50"
          >
            <div className="px-6 py-5 flex flex-col gap-3.5">
              {NAV_LINKS.map((l) => (
                <Link 
                  key={l.label} 
                  href={l.href} 
                  onClick={() => setOpen(false)} 
                  className="text-muted hover:text-ink text-sm font-medium py-1.5 transition-colors border-b border-gold-pale/10 last:border-0"
                >
                  {l.label}
                </Link>
              ))}
              <Link
                href="/#book"
                onClick={() => setOpen(false)}
                className="bg-ink text-cream font-serif font-semibold text-sm px-5 py-3 rounded-xl text-center shadow-md hover:bg-ink-deep transition-all mt-2"
              >
                Book Free Demo
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
