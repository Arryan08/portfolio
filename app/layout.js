import { Inter, Manrope } from 'next/font/google'
import './globals.css'
import SmoothScroll from './components/SmoothScroll'
import CursorGlow from './components/CursorGlow'
import Loader from './components/Loader'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' })
const manrope = Manrope({ subsets: ['latin'], variable: '--font-manrope', display: 'swap' })

const siteUrl = 'https://arryantiwari.dev'

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Arryan Tiwari — Execution-Driven Business Analyst',
    template: '%s · Arryan Tiwari',
  },
  description: 'Arryan Tiwari partners directly with founders to build internal products, automate operations, and turn business chaos into scalable systems — using Python, Power BI, Mixpanel, and SQL.',
  keywords: ['Arryan Tiwari', 'Business Analyst', 'Founder\'s Office', 'Internal Tools', 'Revenue Operations', 'Power BI', 'Mixpanel', 'Product Analytics'],
  authors: [{ name: 'Arryan Tiwari' }],
  creator: 'Arryan Tiwari',
  openGraph: {
    type: 'website',
    url: siteUrl,
    title: 'Arryan Tiwari — Execution-Driven Business Analyst',
    description: 'Building products, systems, and scalable operations directly alongside founders.',
    siteName: 'Arryan Tiwari',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Arryan Tiwari — Execution-Driven Business Analyst',
    description: 'Building products, systems, and scalable operations directly alongside founders.',
  },
  robots: { index: true, follow: true },
}

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Arryan Tiwari',
  jobTitle: 'Business Analyst',
  worksFor: { '@type': 'Organization', name: 'TransCurators' },
  alumniOf: {
    '@type': 'CollegeOrUniversity',
    name: 'Maharaja Surajmal Institute of Technology',
  },
  address: { '@type': 'PostalAddress', addressLocality: 'New Delhi', addressCountry: 'IN' },
  email: 'mailto:arryantiwari08@gmail.com',
  sameAs: ['https://www.linkedin.com/in/arryan-tiwari/'],
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${manrope.variable} scroll-smooth`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className="bg-paper text-ink antialiased selection:bg-accent selection:text-white">
        <Loader />
        <CursorGlow />
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  )
}
