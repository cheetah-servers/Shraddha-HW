import type { Metadata } from 'next'
import Hero from '@/components/sections/Hero'
import Stats from '@/components/sections/Stats'
import Pillars from '@/components/sections/Pillars'
import FeaturedCards from '@/components/sections/FeaturedCards'
import Showcase from '@/components/sections/Showcase'
import WhyChooseUs from '@/components/sections/WhyChooseUs'
import QuoteBand from '@/components/sections/QuoteBand'
import Testimonials from '@/components/sections/Testimonials'
import CTABanner from '@/components/sections/CTABanner'
import BookingSection from '@/components/sections/BookingSection'

export const metadata: Metadata = {
  title: 'Shraddha – Good & Neat Handwriting Institute | Best Handwriting & Calligraphy Classes in Hyderabad',
  description: 'Learn good, legible, and neat handwriting (cursive, print, Lucida) & beautiful modern/classic calligraphy at Shraddha Handwriting Institute. Professional classes for children, students, and adults in Hyderabad. Book a free demo class today!',
  alternates: {
    canonical: 'https://shraddha.edu.in',
  },
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <Stats />
      <Pillars />
      <FeaturedCards />
      <Showcase />
      <WhyChooseUs />
      <QuoteBand />
      <Testimonials />
      <CTABanner />
      <BookingSection />
    </>
  )
}
