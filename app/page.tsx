import { ComingSoonHero } from "@/components/coming-soon-hero"
import { ImageSection } from "@/components/image-section"
import { EmailSignup } from "@/components/email-signup"
import { MissionSection } from "@/components/mission-section"
import { Footer } from "@/components/footer"

export default function Page() {
  return (
    <main className="min-h-screen">
      <ComingSoonHero />
      <ImageSection />
      <MissionSection />
      <EmailSignup />
      <Footer />
    </main>
  )
}
