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
  description: 'Arryan Tiwari is a Business Analyst who works close to founders, finds what\'s breaking and fixes it with data, automation or a better process — using SQL, Power BI, Python and Apps Script.',
  keywords: ['Arryan Tiwari', 'Business Analyst', 'Founder\'s Office', 'Internal Tools', 'Revenue Operations', 'Power BI', 'SQL', 'Team Leadership', 'Margo Digitech'],
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
  worksFor: { '@type': 'Organization', name: 'Margo Digitech' },
  alumniOf: {
    '@type': 'CollegeOrUniversity',
    name: 'Maharaja Surajmal Institute of Technology',
  },
  address: { '@type': 'PostalAddress', addressLocality: 'New Delhi', addressCountry: 'IN' },
  email: 'mailto:arryantiwari08@gmail.com',
  sameAs: ['https://www.linkedin.com/in/arryan-tiwari/', 'https://github.com/Arryan08'],
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
