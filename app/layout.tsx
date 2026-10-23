import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Maruva Massage Spa — Relax. Rejuvenate. Revive.',
  description:
    'Experience the healing touch of true relaxation. Skilled therapists, calming spaces, and treatments crafted to soothe stress and restore balance — body and mind. Located in Batangas, Philippines.',
  openGraph: {
    title: 'Maruva Massage Spa',
    description: 'Relax. Rejuvenate. Revive. Premium massage and wellness in Batangas.',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400&family=Poppins:wght@300;400;500;600;700&family=Cormorant+Garamond:ital,wght@1,400;1,500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
