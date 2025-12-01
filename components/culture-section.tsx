import Image from "next/image"


export function CultureSection() {
  return (
    <section className="py-20 bg-background">
      <div className="container max-w-5xl space-y-12">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-foreground">Nossa Cultura</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Acreditamos que a melhor tecnologia nasce da colaboração genuína. Cada membro do nosso time é um agente de
              mudança, com autonomia para inovar e fazer diferença.
            </p>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <span className="text-ring font-bold text-lg">✓</span>
                <span className="text-foreground">Autonomia e responsabilidade</span>
              </li>
              <li className="flex gap-3">
                <span className="text-ring font-bold text-lg">✓</span>
                <span className="text-foreground">Desenvolvimento contínuo e aprendizado</span>
              </li>
              <li className="flex gap-3">
                <span className="text-ring font-bold text-lg">✓</span>
                <span className="text-foreground">Equilíbrio entre vida e trabalho</span>
              </li>
              <li className="flex gap-3">
                <span className="text-ring font-bold text-lg">✓</span>
                <span className="text-foreground">Diversidade e inclusão</span>
              </li>
            </ul>
          </div>
          <div className="bg-gradient-to-br from-ring/10 to-accent rounded-lg h-96 flex items-center justify-center text-muted-foreground">
            
            <Image
              src="/KonnectaAI_logo.png"
              alt="Equipe KonnectaAI"
              width={500}
              height={384}
              className="rounded-lg object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
