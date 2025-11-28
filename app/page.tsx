import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { Partners } from "@/components/partners"
import { Services } from "@/components/services"
import { Metrics } from "@/components/metrics"
import { Authority } from "@/components/authority"
import { CTA } from "@/components/cta"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col bg-background selection:bg-primary/20">
      <Navbar />
      <Hero />
      <Partners />
      <Services />
      <Metrics />
      <Authority />
      <CTA />
      <Footer />
    </main>
  )
}
