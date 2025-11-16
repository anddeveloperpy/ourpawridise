import { Navigation } from '@/components/navigation'
import { CommunitySection } from '@/components/community-section'
import { Footer } from '@/components/footer'
import { MobileNav } from '@/components/mobile-nav'
import { ScrollToTop } from '@/components/scroll-to-top'

export const metadata = {
  title: 'Comunidad - OurPawradise',
  description: 'Únete a nuestra comunidad y comparte historias de adopción y rescate.',
}

export default function CommunityPage() {
  return (
    <>
      <main className="min-h-screen pb-20 md:pb-0">
        <Navigation />
        <CommunitySection />
        <Footer />
      </main>
      <MobileNav />
      <ScrollToTop />
    </>
  )
}
