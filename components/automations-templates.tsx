"use client"

import type React from "react"

import { useState } from "react"
import { Mail, ShoppingCart, Users, FileText, MessageSquare, BarChart3, ChevronDown, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ContactModal } from "@/components/contact-modal"

interface Template {
  id: string
  title: string
  description: string
  icon: React.ComponentType<{ className?: string }>
  category: string
  difficulty: "Fácil" | "Intermediário" | "Avançado"
  timeToImplement: string
  benefits: string[]
  features: string[]
  color: string
}

const templates: Template[] = [
  {
    id: "email-marketing",
    title: "Email Marketing Automático",
    description: "Envie campanhas de email segmentadas baseadas no comportamento e histórico do cliente.",
    icon: Mail,
    category: "Marketing",
    difficulty: "Fácil",
    timeToImplement: "30 min",
    benefits: [
      "Aumento de 45% em taxa de conversão",
      "Redução de 60% no tempo de marketing",
      "Engajamento personalizado em escala",
    ],
    features: [
      "Segmentação automática",
      "Templates responsivos",
      "Análise de desempenho em tempo real",
      "A/B testing integrado",
      "Integração com CRM",
    ],
    color: "bg-blue-500/10",
  },
  {
    id: "pedidos-ecommerce",
    title: "Processamento de Pedidos E-commerce",
    description: "Automatize todo o ciclo de pedidos: confirmação, pagamento, estoque e envio.",
    icon: ShoppingCart,
    category: "E-commerce",
    difficulty: "Intermediário",
    timeToImplement: "2 horas",
    benefits: ["Processamento 10x mais rápido", "Redução de erros em 95%", "Rastreamento automático de estoque"],
    features: [
      "Validação automática de pedidos",
      "Atualização de estoque em tempo real",
      "Geração de NF eletrônica",
      "Integração com transportadoras",
      "Notificações ao cliente",
    ],
    color: "bg-green-500/10",
  },
  {
    id: "onboarding-clientes",
    title: "Onboarding de Clientes",
    description: "Fluxo completo de boas-vindas com documentação, treinamento e suporte inicial.",
    icon: Users,
    category: "Operações",
    difficulty: "Intermediário",
    timeToImplement: "90 min",
    benefits: [
      "Redução de 50% no tempo de onboarding",
      "Aumento de satisfação de clientes",
      "Menos carga no time de suporte",
    ],
    features: [
      "Email de boas-vindas personalizado",
      "Compartilhamento automático de documentos",
      "Agendamento de chamadas",
      "Checklist interativo",
      "Feedback automático",
    ],
    color: "bg-purple-500/10",
  },
  {
    id: "relatorios-financeiros",
    title: "Relatórios Financeiros Automáticos",
    description: "Gere relatórios detalhados consolidando dados de múltiplas fontes automaticamente.",
    icon: FileText,
    category: "Financeiro",
    difficulty: "Avançado",
    timeToImplement: "4 horas",
    benefits: [
      "Elimina trabalho manual de 20 horas/semana",
      "Reduz erros de consolidação em 99%",
      "Insights financeiros em tempo real",
    ],
    features: [
      "Consolidação de múltiplas fontes",
      "Cálculos complexos automáticos",
      "Geração de PDFs formatados",
      "Envio agendado para stakeholders",
      "Análise preditiva incluída",
    ],
    color: "bg-amber-500/10",
  },
  {
    id: "atendimento-chatbot",
    title: "Chatbot de Atendimento 24/7",
    description: "Atenda clientes automaticamente com IA, escalando para humanos quando necessário.",
    icon: MessageSquare,
    category: "Suporte",
    difficulty: "Avançado",
    timeToImplement: "3 horas",
    benefits: [
      "Atendimento disponível 24/7",
      "Redução de 70% em tickets simples",
      "Satisfação de cliente acima de 92%",
    ],
    features: [
      "IA com aprendizado contínuo",
      "Suporte multiidioma",
      "Escalação inteligente",
      "Histórico de conversa persistente",
      "Integração com help desk",
    ],
    color: "bg-cyan-500/10",
  },
  {
    id: "dashboard-vendas",
    title: "Dashboard de Vendas em Tempo Real",
    description: "Monitore KPIs de vendas com visualizações atualizadas automaticamente.",
    icon: BarChart3,
    category: "Analytics",
    difficulty: "Fácil",
    timeToImplement: "45 min",
    benefits: ["Visibilidade total do pipeline", "Decisões baseadas em dados", "Identificação de oportunidades"],
    features: [
      "Sincronização automática com CRM",
      "Gráficos interativos",
      "Alertas de anomalias",
      "Comparação período a período",
      "Previsões de vendas",
    ],
    color: "bg-rose-500/10",
  },
]

export function AutomationsTemplates() {
  const [expandedId, setExpandedId] = useState<string | null>(null)

  const toggleExpanded = (id: string) => {
    setExpandedId(expandedId === id ? null : id)
  }

  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="container">
        <div className="grid grid-cols-1 gap-6">
          {templates.map((template) => {
            const Icon = template.icon
            const isExpanded = expandedId === template.id

            return (
              <Card key={template.id} className="overflow-hidden transition-all hover:shadow-lg border-border/50">
                <button
                  onClick={() => toggleExpanded(template.id)}
                  className="w-full text-left p-6 md:p-8 hover:bg-muted/50 transition-colors"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1 flex items-start gap-4">
                      <div className={`p-3 rounded-lg ${template.color} flex-shrink-0`}>
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="text-xl font-bold text-primary">{template.title}</h3>
                          <Badge variant="secondary">{template.category}</Badge>
                          <Badge
                            variant="outline"
                            className={
                              template.difficulty === "Fácil"
                                ? "border-green-500/30 text-green-700 dark:text-green-400"
                                : template.difficulty === "Intermediário"
                                  ? "border-amber-500/30 text-amber-700 dark:text-amber-400"
                                  : "border-red-500/30 text-red-700 dark:text-red-400"
                            }
                          >
                            {template.difficulty}
                          </Badge>
                        </div>
                        <p className="text-muted-foreground mb-3">{template.description}</p>
                      </div>
                    </div>
                    <ChevronDown
                      className={`h-5 w-5 text-muted-foreground flex-shrink-0 transition-transform ${isExpanded ? "rotate-180" : ""}`}
                    />
                  </div>
                </button>

                {isExpanded && (
                  <div className="border-t border-border/50 px-6 md:px-8 py-6 space-y-6 bg-muted/30">
                    <div>
                      <h4 className="font-bold text-primary mb-3 flex items-center gap-2">
                        <span>✨ Benefícios Principais</span>
                      </h4>
                      <ul className="space-y-2">
                        {template.benefits.map((benefit, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                            <span>{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-bold text-primary mb-3">🔧 Recursos Inclusos</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {template.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                            <div className="h-2 w-2 rounded-full bg-primary" />
                            {feature}
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="flex gap-3 pt-4">
                      <ContactModal>
                      <Button className="flex-1 md:flex-none bg-primary hover:bg-primary/90">Solicitar Demo</Button>
                      </ContactModal>
                    </div>
                  </div>
                )}
              </Card>
            )
          })}
        </div>

        <div className="mt-16 p-8 rounded-lg bg-primary/5 border border-primary/10">
          <h3 className="text-xl font-bold text-primary mb-2">Não encontrou a automação que procura?</h3>
          <p className="text-muted-foreground mb-4">
            Desenvolvemos soluções personalizadas para qualquer processo. Entre em contato com nossos especialistas para
            discutir suas necessidades específicas.
          </p>
          <ContactModal>
          <Button variant="default" className="bg-primary hover:bg-primary/90">
            Solicitar Automação Personalizada
          </Button>
          </ContactModal>
        </div>
      </div>
    </section>
  )
}
