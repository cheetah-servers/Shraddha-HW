import { STATS } from '@/lib/data'

export default function Stats() {
  return (
    <div className="relative z-10 -mt-10 px-6 lg:px-10 pb-2">
      <div className="max-w-4xl mx-auto bg-ink rounded-2xl overflow-hidden shadow-lg grid grid-cols-2 md:grid-cols-4 divide-x divide-gold/20">
        {STATS.map((s) => (
          <div key={s.label} className="py-8 px-6 text-center">
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