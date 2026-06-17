import Link from 'next/link'

export default function CTABanner() {
  return (
    <section className="py-20 px-6 lg:px-10 relative overflow-hidden bg-ink">
      
      {/* Brand Ruled Paper background texture */}
      <div className="absolute inset-0 ruled-bg opacity-10 pointer-events-none" />

      {/* Decorative Soft Ambient Glow Orbs */}
      <div 
        className="absolute -top-20 -left-20 w-[300px] h-[300px] rounded-full bg-gold/10 pointer-events-none"
        style={{ filter: 'blur(80px)' }}
      />
      <div 
        className="absolute -bottom-20 -right-20 w-[250px] h-[250px] rounded-full bg-ink-soft/20 pointer-events-none"
        style={{ filter: 'blur(70px)' }}
      />

      <div className="relative z-10 max-w-3xl mx-auto">
        <div 
          className="bg-white/[0.03] backdrop-blur-[4px] border border-white/10 rounded-[32px] px-6 py-10 md:py-14 md:px-12 text-center shadow-2xl relative overflow-hidden"
          style={{
            boxShadow: '0 30px 60px rgba(8,42,140,0.25)',
          }}
        >
          {/* Inner gold frame border */}
          <div className="absolute inset-3 border border-gold/10 rounded-[22px] pointer-events-none" />

          {/* Heading block */}
          <span className="font-script text-3xl text-gold-light block mb-2">ready when you are</span>
          <h2 className="font-display font-semibold text-3xl md:text-4xl text-cream leading-tight mb-4 tracking-tight">
            Start Writing Beautifully Today
          </h2>
          
          <p className="text-cream/75 text-sm md:text-[15px] leading-relaxed mb-8 max-w-lg mx-auto font-sans">
            Book your free demo class and take the first step towards neater, legible everyday writing or the creative elegance of calligraphy.
          </p>

          <Link 
            href="/#book" 
            className="inline-flex items-center justify-center gap-2 bg-gold hover:bg-gold-light text-ink-deep font-display font-bold text-sm px-8 py-4 rounded-xl transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0"
            style={{ boxShadow: '0 8px 24px rgba(252,187,25,0.3)' }}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" width="18" height="18" aria-hidden="true" style={{ stroke: '#082A8C' }}>
              <rect x="3" y="4" width="18" height="18" rx="2" />
              <line x1="16" y1="2" x2="16" y2="6" />
              <line x1="8" y1="2" x2="8" y2="6" />
              <line x1="3" y1="10" x2="21" y2="10" />
            </svg>
            Book Free Demo
          </Link>
        </div>
      </div>
    </section>
  )
}
