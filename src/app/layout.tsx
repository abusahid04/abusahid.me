import type { Metadata } from 'next'
import './globals.css'

const siteUrl = 'https://abusahid.me'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Abu Sahid — Vibe Coder & Developer',
    template: '%s | Abu Sahid',
  },
  description:
    'Portfolio of Abu Sahid — Vibe Coder & Developer, building Android apps (TrendCuts), high-performance web platforms (BornToShine), and creative digital experiences.',
  keywords: [
    'Abu Sahid',
    'Vibe Coder',
    'Android Developer',
    'Web Developer',
    'Next.js Developer',
    'React Developer',
    'TrendCuts',
    'BornToShine',
    'Civil Engineering ADTU',
    'Assam down town University',
    'Guwahati Developer',
    'Software Developer India',
    'Portfolio',
  ],
  authors: [{ name: 'Abu Sahid', url: siteUrl }],
  creator: 'Abu Sahid',
  publisher: 'Abu Sahid',
  alternates: {
    canonical: '/',
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  manifest: '/site.webmanifest',
  openGraph: {
    title: 'Abu Sahid — Vibe Coder & Developer',
    description:
      'Portfolio of Abu Sahid — Vibe Coder & Developer building apps, websites, and creative digital products.',
    url: siteUrl,
    siteName: 'Abu Sahid Portfolio',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Abu Sahid — Vibe Coder & Developer',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Abu Sahid — Vibe Coder & Developer',
    description:
      'Portfolio of Abu Sahid — Vibe Coder & Developer building apps, websites, and creative digital products.',
    images: ['/og-image.png'],
    creator: '@abusahid04',
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Abu Sahid',
    url: siteUrl,
    image: `${siteUrl}/apple-touch-icon.png`,
    jobTitle: 'Vibe Coder & Developer',
    worksFor: {
      '@type': 'Organization',
      name: 'ProjuktiSoft',
    },
    alumniOf: {
      '@type': 'EducationalOrganization',
      name: 'Assam down town University (ADTU)',
    },
    sameAs: [
      'https://github.com/abusahid04',
      'https://instagram.com/sahid.io',
      'https://play.google.com/store/apps/details?id=com.devsahid.capcuttemplates',
    ],
  }

  return (
    <html lang="en" style={{ scrollBehavior: 'smooth' }}>
      <head>
        <meta name="theme-color" content="#0b0f17" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        {children}
      </body>
    </html>
  )
}
