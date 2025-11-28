import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { AutomationsHero } from "@/components/automations-hero"
import { AutomationsTemplates } from "@/components/automations-templates"

export const metadata = {
  title: "Automações - KonnectaAI",
  description: "Explore nossos templates de automação pré-configurados para potencializar seu negócio.",
}

export default function AutomacoesPage() {
  return (
    <main className="min-h-screen flex flex-col bg-background selection:bg-primary/20">
      <Navbar />
      <AutomationsHero />
      <AutomationsTemplates />
      <Footer />
    </main>
  )
}
