"use client"

import { Button } from "@/components/ui/button"
import { ContactModal } from "@/components/contact-modal"
import { ArrowRight, Zap, Users, Target } from "lucide-react"

export function DevelopmentHero() {
  return (
    <section className="relative flex-1 overflow-hidden">
      {/* Background gradient effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent pointer-events-none" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 md:px-6 py-20 md:py-32">
        <div className="flex flex-col items-center text-center space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-primary/5 text-sm font-medium">
            <Zap className="w-4 h-4 text-primary" />
            Em Desenvolvimento
          </div>

          {/* Main heading */}
          <div className="space-y-4 max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-balance">
              Inovações em progresso
            </h1>
            <p className="text-lg md:text-xl text-foreground/70 leading-relaxed text-balance">
              Estamos trabalhando continuamente para trazer novos recursos e melhorias à plataforma KonnectaAI.
              Acompanhe nossas atualizações e seja notificado quando os novos recursos estiverem disponíveis.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <ContactModal>
              <Button size="lg" className="gap-2">
                Saber mais sobre novidades
                <ArrowRight className="w-4 h-4" />
              </Button>
            </ContactModal>
          </div>

          {/* Features grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-12 w-full max-w-3xl">
            <div className="flex flex-col items-center gap-3 p-6 rounded-lg border border-primary/10 bg-primary/5 hover:border-primary/30 transition-colors">
              <Target className="w-6 h-6 text-primary" />
              <div>
                <h3 className="font-semibold text-sm mb-1">Foco em qualidade</h3>
                <p className="text-xs text-foreground/60">Cada recurso é desenvolvido com excelência</p>
              </div>
            </div>

            <div className="flex flex-col items-center gap-3 p-6 rounded-lg border border-primary/10 bg-primary/5 hover:border-primary/30 transition-colors">
              <Users className="w-6 h-6 text-primary" />
              <div>
                <h3 className="font-semibold text-sm mb-1">Feedback da comunidade</h3>
                <p className="text-xs text-foreground/60">Suas ideias guiam nosso desenvolvimento</p>
              </div>
            </div>

            <div className="flex flex-col items-center gap-3 p-6 rounded-lg border border-primary/10 bg-primary/5 hover:border-primary/30 transition-colors">
              <Zap className="w-6 h-6 text-primary" />
              <div>
                <h3 className="font-semibold text-sm mb-1">Inovação contínua</h3>
                <p className="text-xs text-foreground/60">Sempre trazendo novas possibilidades</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
