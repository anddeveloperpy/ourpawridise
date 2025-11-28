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
  title: 'OurPawradise - Rescate de Perros, Adopción y Comunidad',
  description: 'Ayuda a los perros rescatados a encontrar amor y una nueva vida en Guatemala. Conecta con refugios, adopta un perro rescatado y únete a una comunidad compasiva.',
  generator: 'v0.app',
  metadataBase: new URL('https://ourpawradise.site'),
  openGraph: {
    title: 'OurPawradise - Rescate de Perros, Adopción y Comunidad',
    description: 'Ayuda a los perros rescatados a encontrar amor y una nueva vida en Guatemala. Conecta con refugios, adopta un perro rescatado y únete a una comunidad compasiva.',
    url: 'https://ourpawradise.site',
    siteName: 'OurPawradise',
    images: [
      {
        url: '/Logos/LogoOurPawradise.png',
        width: 800,
        height: 600,
        alt: 'Logo de OurPawradise',
      },
    ],
    locale: 'es_GT',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'OurPawradise - Rescate de Perros, Adopción y Comunidad',
    description: 'Ayuda a los perros rescatados a encontrar amor y una nueva vida en Guatemala.',
    images: ['/Logos/LogoOurPawradise.png'],
  },
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
