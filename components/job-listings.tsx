"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"

const jobs = [
  {
    id: 1,
    title: "Desenvolvedor Full Stack",
    department: "Automações",
    level: "Júnior",
    location: "Aracaju, SE",
    type: "Remoto",
    description:
      "Procuramos um desenvolvedor full stack com experiência em n8n e automação. Você será responsável por liderar projetos de automação e integração.",
    requirements: ["1+ anos de experiência", "n8n, Make, Zapier ou outros", "Html, Css e Javascript","Experiência com APIs REST"],
  },
]

export function JobListings() {
  const [expandedId, setExpandedId] = useState<number | null>(null)

  return (
    <section className="py-20 bg-secondary">
      <div className="container max-w-5xl">
        <div className="space-y-8">
          <div>
            <h2 className="text-4xl font-bold text-foreground mb-2">Oportunidades em Aberto</h2>
            <p className="text-muted-foreground text-lg">{jobs.length} posições disponíveis para talentos como você</p>
          </div>

          <div className="space-y-3">
            {jobs.map((job) => (
              <button
                key={job.id}
                onClick={() => setExpandedId(expandedId === job.id ? null : job.id)}
                className="w-full bg-background border border-border rounded-lg hover:border-ring transition-colors overflow-hidden"
              >
                <div className="p-6 flex items-start justify-between gap-4">
                  <div className="text-left flex-1">
                    <h3 className="text-xl font-bold text-foreground mb-2">{job.title}</h3>
                    <div className="flex flex-wrap gap-3">
                      <span className="text-sm bg-muted text-muted-foreground px-3 py-1 rounded-full">
                        {job.department}
                      </span>
                      <span className="text-sm bg-muted text-muted-foreground px-3 py-1 rounded-full">{job.level}</span>
                      <span className="text-sm bg-muted text-muted-foreground px-3 py-1 rounded-full">
                        {job.location}
                      </span>
                      <span className="text-sm border border-ring text-ring px-3 py-1 rounded-full">{job.type}</span>
                    </div>
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 text-muted-foreground transition-transform ${
                      expandedId === job.id ? "rotate-180" : ""
                    }`}
                  />
                </div>

                {expandedId === job.id && (
                  <div className="border-t border-border px-6 py-4 bg-muted/50 space-y-4">
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Sobre a vaga</h4>
                      <p className="text-muted-foreground leading-relaxed">{job.description}</p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Requisitos</h4>
                      <ul className="space-y-1">
                        {job.requirements.map((req, idx) => (
                          <li key={idx} className="text-muted-foreground text-sm flex gap-2">
                            <span>•</span>
                            <span>{req}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Button className="bg-ring hover:bg-ring/90 text-primary-foreground w-full md:w-auto">
                      Candidatar-se
                    </Button>
                  </div>
                )}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
