import type { Metadata } from 'next'
import { Nunito, Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const nunito = Nunito({
  subsets: ["latin"],
  variable: '--font-sans',
  weight: ['300', '400', '600', '700', '800']
});

const inter = Inter({
  subsets: ["latin"],
  variable: '--font-body'
});

export const metadata: Metadata = {
  title: 'OurPawradise - Dog Rescue, Adoption & Community',
  description: 'Help rescued dogs find love and a new life in Guatemala. Connect with shelters, adopt a rescued dog, and join a compassionate community.',
  generator: 'v0.app',
  icons: {
    icon: '/Logos/LogoOurPawradise.png',
    apple: '/Logos/LogoOurPawradise.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body className={`${nunito.variable} ${inter.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
