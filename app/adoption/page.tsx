import { Navigation } from '@/components/navigation'
import { AdoptionSection } from '@/components/adoption-section'
import { Footer } from '@/components/footer'
import { MobileNav } from '@/components/mobile-nav'
import { ScrollToTop } from '@/components/scroll-to-top'

export const metadata = {
  title: 'Adopción - OurPawradise',
  description: 'Conoce a los perros rescatados disponibles para adopción en Guatemala.',
}

export default function AdoptionPage() {
  return (
    <>
      <main className="min-h-screen pb-20 md:pb-0">
        <Navigation />
        <AdoptionSection />
        <Footer />
      </main>
      <MobileNav />
      <ScrollToTop />
    </>
  )
}
