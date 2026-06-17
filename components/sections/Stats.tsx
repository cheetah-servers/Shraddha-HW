import { STATS } from '@/lib/data'

export default function Stats() {
  return (
    <div className="relative z-10 -mt-10 px-6 lg:px-10 pb-2">
      <div className="max-w-4xl mx-auto bg-ink rounded-2xl overflow-hidden shadow-lg grid grid-cols-2 md:grid-cols-4">
        {STATS.map((s, idx) => (
          <div 
            key={s.label} 
            className={`py-8 px-6 text-center border-gold/10
              ${idx % 2 !== 0 ? 'border-l' : ''} 
              ${idx >= 2 ? 'border-t' : ''} 
              md:border-t-0 ${idx === 0 ? 'md:border-l-0' : 'md:border-l'}`}
          >
            <div
              className="font-display font-semibold text-[28px] text-gold-light leading-none"
              style={{
                fontVariantNumeric: 'tabular-nums',
                fontFeatureSettings: '"tnum" 1, "lnum" 1',
              }}
            >
              {s.num}
            </div>

            <div className="text-cream/60 text-[11px] font-normal mt-2.5">
              {s.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}