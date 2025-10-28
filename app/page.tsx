import { ComingSoonHero } from "@/components/coming-soon-hero"
import { EmailSignup } from "@/components/email-signup"
import { MissionSection } from "@/components/mission-section"
import { Footer } from "@/components/footer"

export default function Page() {
  return (
    <main className="min-h-screen">
      <ComingSoonHero />
      <MissionSection />
      <EmailSignup />
      <Footer />
    </main>
  )
}
