import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import '../styles/globals.css'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import WhatsAppButton from '@/components/ui/WhatsAppButton'

export const metadata: Metadata = {
  title: {
    default: 'Shraddha – Good & Neat Handwriting Institute | Hyderabad',
    template: '%s | Shraddha',
  },
  description:
    'Shraddha offers expert handwriting improvement and calligraphy classes in Hyderabad — for kids, students, adults, and hobbyists. Book a free demo today.',
  keywords: [
    'Handwriting Classes Hyderabad',
    'Calligraphy Classes',
    'Kids Handwriting Improvement',
    'Cursive Writing Course',
    'Handwriting Improvement',
    'Calligraphy Training',
    'Signature Styling',
  ],
  metadataBase: new URL('https://shraddha.edu.in'),
  icons: { icon: '/favicon.png', apple: '/favicon.png' },
  openGraph: {
    type: 'website',
    siteName: 'Shraddha',
    title: 'Shraddha | Handwriting & Calligraphy',
    description: 'Master the art of beautiful writing — handwriting improvement and calligraphy for all ages.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

const localBusinessJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  'name': 'Shraddha – Good & Neat Handwriting Institute',
  'image': 'https://shraddha.edu.in/logo-full.png',
  'url': 'https://shraddha.edu.in',
  'telephone': '+918143444110, +919490937410',
  'email': 'shraddhasri9@gmail.com',
  'address': {
    '@type': 'PostalAddress',
    'streetAddress': '40-180, plot no.204, Jawaharnagar colony, ECIL extension',
    'addressLocality': 'Hyderabad',
    'addressRegion': 'Telangana',
    'postalCode': '500040',
    'addressCountry': 'IN'
  },
  'geo': {
    '@type': 'GeoCoordinates',
    'latitude': '17.4729',
    'longitude': '78.5701'
  },
  'openingHoursSpecification': {
    '@type': 'OpeningHoursSpecification',
    'dayOfWeek': [
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday'
    ],
    'opens': '09:00',
    'closes': '20:00'
  }
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
        />
      </head>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  )
}
