import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ContactModal } from "@/components/contact-modal"
import { Zap, Settings, Repeat } from "lucide-react"

const features = [
  {
    title: "Workflows Automatizados",
    description: "Desenhe e execute fluxos que substituem tarefas manuais e reduzem erros operacionais.",
    icon: Repeat,
  },
  {
    title: "Integrações Confiáveis",
    description: "Conecte ERP, CRM e ferramentas em uma malha de dados segura e observável.",
    icon: Settings,
  },
  {
    title: "Execução em Escala",
    description: "Escalone bots e jobs com monitoração e alertas para operações críticas.",
    icon: Zap,
  },
]

export function Automacao() {
  return (
    <section id="automacao" className="py-20 md:py-28 bg-background">
      <div className="container">
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          <div>
            <div className="inline-flex items-center rounded-lg bg-muted px-3 py-1 text-sm font-medium">
              ⚙️ <span className="ml-2 text-primary">Automação & Integração</span>
            </div>
            <h1 className="mt-6 text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-primary">
              Automação que entrega resultados mensuráveis
            </h1>
            <p className="mt-4 max-w-[680px] text-muted-foreground md:text-lg">
              Acelere processos, reduza custos e minimize falhas com pipelines inteligentes que orquestram seus
              sistemas. Do mapeamento ao monitoramento, entregamos automações confiáveis que se integram ao seu
              ecossistema.
            </p>

            <div className="mt-6 flex items-center gap-4">
              <ContactModal>
                <Button size="lg">Solicitar Demonstração</Button>
              </ContactModal>
              <Button variant="ghost">Ver Casos de Uso</Button>
            </div>

            <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
              {features.map((f, i) => (
                <div key={i} className="rounded-lg border bg-card p-4">
                  <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-md bg-primary/10 text-primary">
                    <f.icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-semibold text-primary">{f.title}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{f.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mx-auto w-full max-w-md lg:max-w-full">
            <div className="relative rounded-xl border bg-background p-2 shadow-lg">
              <Image
                src="/images/automation-illustration.jpg"
                width={900}
                height={600}
                alt="Ilustração Automação"
                className="rounded-lg object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
