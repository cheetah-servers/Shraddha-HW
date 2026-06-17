import Link from 'next/link'
import FadeIn from '@/components/ui/FadeIn'

export default function QuoteBand() {
  return (
    <section className="py-16 px-6 lg:px-10 bg-cream overflow-hidden">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <FadeIn direction="left">
          <div className="flex justify-center">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://ik.imagekit.io/dypkhqxip/Novelist%20writing-bro.svg"
              alt="Illustration of a novelist writing"
              className="w-full max-w-[380px] h-auto"
            />
          </div>
        </FadeIn>

        <FadeIn direction="right">
          <div>
            <span className="font-script text-2xl text-gold block mb-1">a little reminder</span>
            <h2 className="font-display font-semibold text-[28px] text-ink leading-tight mb-4">
              Your Handwriting Is Your Signature
            </h2>
            <p className="text-muted text-[15px] leading-relaxed mb-6">
              Every word you write carries a little of who you are. Our programs help you make that mark
              legible, beautiful, and uniquely yours — whether it&apos;s a quick classroom note, a signature on
              an important document, or a piece of calligraphy art.
            </p>
            <Link href="/#book" className="btn-ink">
              Book Free Demo
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" width="15" height="15" aria-hidden="true">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
