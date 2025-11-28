import { Navigation } from '@/components/navigation'
import { AdoptionSection } from '@/components/adoption-section'
import { Footer } from '@/components/footer'
import { MobileNav } from '@/components/mobile-nav'
import { ScrollToTop } from '@/components/scroll-to-top'
import { getAllDogs } from '@/lib/api/dogs'

export const metadata = {
  title: 'Adopción - OurPawradise',
  description: 'Conoce a los perros rescatados disponibles para adopción en Guatemala.',
}

// Force dynamic rendering - no caching
export const dynamic = 'force-dynamic'
export const revalidate = 0

export default async function AdoptionPage() {
  const dogs = await getAllDogs()

  return (
    <>
      <main className="min-h-screen pb-20 md:pb-0">
        <Navigation />
        <AdoptionSection dogs={dogs} />
        <Footer />
      </main>
      <MobileNav />
      <ScrollToTop />
    </>
  )
}
