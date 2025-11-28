import { Navigation } from '@/components/navigation'
import { SheltersSection } from '@/components/shelters-section'
import { Footer } from '@/components/footer'
import { MobileNav } from '@/components/mobile-nav'
import { ScrollToTop } from '@/components/scroll-to-top'
import { getShelters } from '@/lib/api/shelters'

export const metadata = {
  title: 'Refugios - OurPawradise',
  description: 'Encuentra refugios de perros en Guatemala y ayuda a salvar vidas.',
}

// Force dynamic rendering - no caching
export const dynamic = 'force-dynamic'
export const revalidate = 0

export default async function SheltersPage() {
  const shelters = await getShelters()

  return (
    <>
      <main className="min-h-screen pb-20 md:pb-0">
        <Navigation />
        <SheltersSection shelters={shelters} />
        <Footer />
      </main>
      <MobileNav />
      <ScrollToTop />
    </>
  )
}
