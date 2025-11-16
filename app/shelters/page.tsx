import { Navigation } from '@/components/navigation'
import { SheltersSection } from '@/components/shelters-section'
import { Footer } from '@/components/footer'
import { MobileNav } from '@/components/mobile-nav'
import { ScrollToTop } from '@/components/scroll-to-top'

export const metadata = {
  title: 'Refugios - OurPawradise',
  description: 'Encuentra refugios de perros en Guatemala y ayuda a salvar vidas.',
}

export default function SheltersPage() {
  return (
    <>
      <main className="min-h-screen pb-20 md:pb-0">
        <Navigation />
        <SheltersSection />
        <Footer />
      </main>
      <MobileNav />
      <ScrollToTop />
    </>
  )
}
