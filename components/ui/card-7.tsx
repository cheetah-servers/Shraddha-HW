'use client'
import * as React from 'react'
import { cn } from '@/lib/utils'

export interface TravelCardProps extends React.HTMLAttributes<HTMLDivElement> {
  badge?: string
  badgeColor?: string
  badgeBg?: string
  icon?: React.ReactNode
  title: string
  subtitle?: string
  overview: string
  features?: string[]
  accentColor?: string
  accentPale?: string
  onBookNow?: () => void
  onLearnMore?: () => void
  exploreLabel?: string
  onExplore?: () => void
  showBookNowAlways?: boolean
}

export const TravelCard = React.forwardRef<HTMLDivElement, TravelCardProps>(
  (
    {
      className,
      badge,
      badgeColor = '#0B2AC0',
      badgeBg = '#EEF1FB',
      icon,
      title,
      subtitle,
      overview,
      features = [],
      accentColor = '#0B2AC0',
      accentPale = '#EEF1FB',
      onBookNow,
      onLearnMore,
      exploreLabel,
      onExplore,
      showBookNowAlways = false,
      ...props
    },
    ref
  ) => {
    // Has always-visible bottom buttons?
    const hasAlwaysButtons = !!(exploreLabel || showBookNowAlways || onLearnMore)

    return (
      <div
        ref={ref}
        className={cn(
          'group relative w-full overflow-hidden rounded-2xl border bg-white flex flex-col',
          'transition-all duration-300 ease-in-out hover:shadow-2xl hover:-translate-y-2',
          className
        )}
        style={{
          borderColor: `${accentColor}1A`,
          boxShadow: `0 4px 20px ${accentColor}0D`,
        }}
        {...props}
      >
        {/* ── Top accent band ── */}
        <div className="px-6 pt-6 pb-5 flex items-center gap-4" style={{ background: accentPale }}>
          {icon && (
            <div
              className="flex-shrink-0 flex items-center justify-center rounded-2xl"
              style={{
                width: 56,
                height: 56,
                background: 'white',
                boxShadow: `0 4px 16px ${accentColor}22`,
                border: `1.5px solid ${accentColor}18`,
              }}
            >
              {icon}
            </div>
          )}
          <div className="flex-1 min-w-0">
            {badge && (
              <span
                className="inline-block font-display text-[10px] font-medium rounded-md px-2 py-0.5 mb-1.5"
                style={{ color: badgeColor, background: `${badgeBg}` }}
              >
                {badge}
              </span>
            )}
            <h3
              className="font-display font-semibold text-[17px] leading-snug"
              style={{ color: '#0F2566' }}
            >
              {title}
            </h3>
            {subtitle && (
              <p className="font-display text-[12px] font-normal mt-0.5 leading-snug" style={{ color: `${accentColor}B0` }}>{subtitle}</p>
            )}
          </div>
        </div>

        {/* ── Body ── */}
        <div className={cn('px-6 flex-1', hasAlwaysButtons ? 'pb-2' : 'pb-6 relative overflow-hidden')}>
          <p className="font-display text-[13.5px] font-normal leading-relaxed pt-4 line-clamp-4" style={{ color: '#4A5980' }}>
            {overview}
          </p>
          {features.length > 0 && (
            <ul className="mt-3 flex flex-col gap-2">
              {features.map(f => (
                <li key={f} className="flex items-center gap-2 font-display text-[12.5px] font-normal" style={{ color: '#0F2566' }}>
                  <svg viewBox="0 0 16 16" fill="none" width="14" height="14" aria-hidden="true" style={{ flexShrink: 0 }}>
                    <circle cx="8" cy="8" r="7" fill={accentColor} opacity=".15" />
                    <polyline points="4.5 8 7 10.5 11.5 5.5" stroke={accentColor} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  {f}
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* ── Always-visible bottom buttons ── */}
        {hasAlwaysButtons && (
          <>
            <div style={{ height: 1, background: `${accentColor}12` }} />
            <div className="flex gap-2 px-5 py-4">

              {/* Explore button */}
              {exploreLabel && onExplore && (
                <button
                  onClick={onExplore}
                  className="flex-1 flex items-center justify-center gap-2 font-display font-semibold text-[13px] py-2.5 rounded-xl transition-all"
                  style={{
                    background: 'white',
                    border: `1.5px solid ${accentColor}25`,
                    color: accentColor,
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.borderColor = accentColor
                    e.currentTarget.style.background = accentPale
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.borderColor = `${accentColor}25`
                    e.currentTarget.style.background = 'white'
                  }}
                >
                  {exploreLabel}
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" width="14" height="14" aria-hidden="true">
                    <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
                  </svg>
                </button>
              )}

              {/* Learn More button */}
              {onLearnMore && (
                <button
                  onClick={onLearnMore}
                  className="flex-1 flex items-center justify-center gap-2 font-bold text-[13px] py-2.5 rounded-xl transition-all"
                  style={{
                    background: 'white',
                    border: `1.5px solid ${accentColor}25`,
                    color: accentColor,
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.borderColor = accentColor
                    e.currentTarget.style.background = accentPale
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.borderColor = `${accentColor}25`
                    e.currentTarget.style.background = 'white'
                  }}
                >
                  Learn More
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" width="13" height="13" aria-hidden="true">
                    <circle cx="12" cy="12" r="9" /><line x1="12" y1="8" x2="12" y2="16" /><line x1="8" y1="12" x2="16" y2="12" />
                  </svg>
                </button>
              )}

              {/* Book Now button */}
              {showBookNowAlways && onBookNow && (
                <button
                  onClick={onBookNow}
                  className="flex-1 flex items-center justify-center gap-2 font-display font-semibold text-[13px] py-2.5 rounded-xl text-white transition-opacity hover:opacity-90"
                  style={{ background: accentColor }}
                >
                  Book Now
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" width="14" height="14" aria-hidden="true">
                    <rect x="3" y="4" width="18" height="18" rx="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" />
                  </svg>
                </button>
              )}

            </div>
          </>
        )}
      </div>
    )
  }
)
TravelCard.displayName = 'TravelCard'

export { TravelCard as ProgramCard }
export { TravelCard as ProgramShowcaseCard }
