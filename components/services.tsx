import { Bot, Workflow, Code2, Cpu, LineChart, ShieldCheck } from "lucide-react"

const services = [
  {
    title: "Automação Inteligente",
    description: "Elimine tarefas repetitivas com bots e workflows que trabalham 24/7 para sua empresa.",
    icon: Bot,
  },
  {
    title: "Integração de Sistemas",
    description: "Conecte seu ERP, CRM e ferramentas de marketing em um ecossistema unificado e fluido.",
    icon: Workflow,
  },
  {
    title: "Desenvolvimento Sob Medida",
    description: "Software exclusivo projetado para resolver os desafios específicos do seu modelo de negócio.",
    icon: Code2,
  },
  {
    title: "IA & Machine Learning",
    description: "Implemente inteligência artificial para previsão de dados e tomada de decisão estratégica.",
    icon: Cpu,
  },
  {
    title: "Analytics & Dashboards",
    description: "Visualize métricas em tempo real com painéis intuitivos para total controle operacional.",
    icon: LineChart,
  },
  {
    title: "Segurança & Compliance",
    description: "Arquitetura robusta que garante a proteção dos seus dados e conformidade com LGPD.",
    icon: ShieldCheck,
  },
]

export function Services() {
  return (
    <section id="services" className="py-20 md:py-32 bg-background">
      <div className="container">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-primary">Nossas Soluções</h2>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Tecnologia de ponta para impulsionar cada aspecto da sua organização.
          </p>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-12">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg border bg-card p-6 shadow-sm transition-all hover:shadow-md hover:-translate-y-1"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <service.icon className="h-6 w-6" />
              </div>
              <h3 className="mb-2 text-xl font-bold text-primary">{service.title}</h3>
              <p className="text-muted-foreground">{service.description}</p>
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary/10 rounded-lg pointer-events-none transition-colors" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
