import type { Metadata } from 'next'
import { Playfair_Display, Poppins } from 'next/font/google'
import './globals.css'
import './swiper.css'

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-serif',
  display: 'swap',
})

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Wedding Invitation - Join Us in Celebration',
  description: 'You are cordially invited to celebrate the wedding of our beloved couple',
  keywords: 'wedding, invitation, celebration, marriage',
  openGraph: {
    title: 'Wedding Invitation',
    description: 'Join us in celebrating our special day',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${poppins.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
