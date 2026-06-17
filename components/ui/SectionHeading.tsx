import FadeIn from './FadeIn'

interface SectionHeadingProps {
  eyebrow: string
  title: string
  sub?: string
  light?: boolean
}

export default function SectionHeading({ eyebrow, title, sub, light }: SectionHeadingProps) {
  return (
    <FadeIn>
      <div className="text-center max-w-xl mx-auto mb-2">
        <span className="font-script text-3xl text-gold block mb-1" style={{ opacity: 1 }}>{eyebrow}</span>
        <h2 className={`font-display font-semibold text-[28px] leading-tight mb-2 ${light ? 'text-cream' : 'text-ink'}`}>
          {title}
        </h2>
        <div className="flex items-center justify-center gap-2 my-3">
          <span className="w-10 h-px bg-gold" />
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="18" height="18" className="text-gold" aria-hidden="true">
            <path d="M12 19l7-7 3 3-7 7-3-3z" />
            <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
            <circle cx="11" cy="11" r="2" />
          </svg>
          <span className="w-10 h-px bg-gold" />
        </div>
        {sub && <p className={`text-sm leading-relaxed ${light ? 'text-cream/70' : 'text-muted'}`}>{sub}</p>}
      </div>
    </FadeIn>
  )
}
