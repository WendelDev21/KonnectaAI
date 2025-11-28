import { Navbar } from "@/components/navbar"
import { DevelopmentHero } from "@/components/development-hero"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "Desenvolvimento | KonnectaAI",
  description: "Acompanhe o desenvolvimento de novas funcionalidades e recursos da plataforma KonnectaAI",
}

export default function DevelopmentPage() {
  return (
    <main className="min-h-screen flex flex-col bg-background selection:bg-primary/20">
      <Navbar />
      <DevelopmentHero />
      <Footer />
    </main>
  )
}
