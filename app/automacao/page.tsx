import { Navbar } from "@/components/navbar"
import { Automacao } from "@/components/automacao"
import { Services } from "@/components/services"
import { Metrics } from "@/components/metrics"
import { CTA } from "@/components/cta"
import { Footer } from "@/components/footer"

export default function AutomacaoPage() {
  return (
    <main className="min-h-screen flex flex-col bg-background selection:bg-primary/20">
      <Navbar />
      <Automacao />
      <Services />
      <Metrics />
      <CTA />
      <Footer />
    </main>
  )
}
