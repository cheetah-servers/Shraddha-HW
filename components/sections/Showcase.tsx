'use client'
import FadeIn from '@/components/ui/FadeIn'
import { useState } from 'react'
import SectionHeading from '@/components/ui/SectionHeading'

function Lightbox({ src, label, onClose }: { src: string; label: string; onClose: () => void }) {
  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-[1000] flex items-center justify-center p-4"
      style={{ background: 'rgba(6,16,61,0.85)', backdropFilter: 'blur(8px)' }}
    >
      <div onClick={e => e.stopPropagation()} className="relative max-w-xl w-full">
        <img
          src={src}
          alt={`Transformation - ${label}`}
          className="w-full rounded-2xl shadow-2xl border-4 border-white"
          style={{ maxHeight: '80vh', objectFit: 'contain' }}
        />
        <button
          onClick={onClose}
          className="absolute -top-3 -right-3 bg-white hover:bg-gold-pale rounded-full w-9 h-9 flex items-center justify-center shadow-lg transition-colors"
          aria-label="Close"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="#0B2AC0" strokeWidth="2.5" strokeLinecap="round" width="16" height="16" aria-hidden="true">
            <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>
        <div className="mt-4 text-center">
          <p className="text-white font-script text-3xl text-gold-light mb-1">
            {label}
          </p>
          <p className="text-white/70 font-display text-xs uppercase tracking-widest">
            Before & After Transformation
          </p>
        </div>
      </div>
    </div>
  )
}

export default function Showcase() {
  const [activeImg, setActiveImg] = useState<{ src: string; label: string } | null>(null)

  const transformImages = [
    { src: '/before-after-1.webp', label: 'Kids Handwriting' },
    { src: '/before-after-2.webp', label: 'Cursive Writing' },
    { src: '/before-after-3.webp', label: 'Speed Writing' },
  ]

  return (
    <section id="gallery" className="py-16 px-6 lg:px-10 bg-ink scroll-mt-20">
      <div className="max-w-5xl mx-auto">

        <SectionHeading
          eyebrow="proof on paper"
          title="See The Transformation"
          light={true}
        />

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {transformImages.map((img, i) => (
            <FadeIn key={i} delay={i * 0.08}>
              <div
                className="group relative bg-white p-4 rounded-2xl cursor-pointer border border-gold/15 hover:border-gold-light/40 transition-all flex flex-col"
                style={{ boxShadow: '0 8px 30px rgba(0,0,0,0.15)' }}
                onClick={() => setActiveImg(img)}
              >
                {/* Image Wrapper */}
                <div className="relative rounded-xl overflow-hidden aspect-[3/4] bg-cream flex-shrink-0">
                  <img
                    src={img.src}
                    alt={`Before and after – ${img.label}`}
                    className="w-full h-full object-cover object-top group-hover:scale-[1.04] transition-transform duration-500 ease-out"
                  />
                  {/* Hover Overlay Badge */}
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

                {/* Polaroid Text details */}
                <div className="pt-4 pb-1 text-center flex flex-col items-center">
                  <span className="font-display font-extrabold text-[17px] text-ink leading-tight mb-1 block">
                    {img.label}
                  </span>
                  <span className="font-script text-xl text-gold leading-none">
                    Before & After
                  </span>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

      </div>
      {activeImg && (
        <Lightbox
          src={activeImg.src}
          label={activeImg.label}
          onClose={() => setActiveImg(null)}
        />
      )}
    </section>
  )
}
