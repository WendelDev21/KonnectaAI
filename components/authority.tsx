import Image from "next/image"
import { CheckCircle2 } from "lucide-react"

export function Authority() {
  return (
    <section id="about" className="py-20 md:py-32 overflow-hidden">
      <div className="container">
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          <div className="relative order-2 lg:order-1">
            <div className="relative aspect-square md:aspect-video lg:aspect-square overflow-hidden rounded-2xl">
              <Image src="/professional-software-engineering-team-meeting-gla.jpg" alt="KonnectaAI Team" fill className="object-cover" />
            </div>
            {/* Floating Badge */}
            <div className="absolute bottom-8 left-8 bg-background/95 backdrop-blur p-6 rounded-lg shadow-xl border max-w-[280px]">
              <p className="text-4xl font-bold text-primary mb-2">4+</p>
              <p className="text-sm text-muted-foreground font-medium">
                Anos de experiência combinada em engenharia de software e automação.
              </p>
            </div>
          </div>

          <div className="order-1 lg:order-2 space-y-8">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-primary">
              Excelência Técnica e Compromisso com Resultado
            </h2>
            <p className="text-muted-foreground md:text-xl">
              Na KonnectaAI, não apenas escrevemos código. Nós desenhamos o futuro da sua operação com uma metodologia
              focada em ROI e escalabilidade.
            </p>

            <ul className="space-y-4">
              {[
                "Metodologia Ágil e Transparente",
                "Arquitetura Cloud-Native Escalável",
                "Suporte Premium 24/7",
                "Consultoria Estratégica Inclusa",
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <CheckCircle2 className="h-6 w-6 text-ring" />
                  <span className="font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
