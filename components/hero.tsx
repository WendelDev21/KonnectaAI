"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Database, Zap } from "lucide-react"
import { motion } from "framer-motion"
import Image from "next/image"
import { ContactModal } from "@/components/contact-modal"

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-background py-20 md:py-32 lg:py-40">
      {/* Background Decor */}
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-primary/20 opacity-20 blur-[100px]"></div>

      <div className="w-full max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col justify-center space-y-8"
          >
            <div className="inline-flex items-center rounded-lg bg-muted px-3 py-1 text-sm font-medium">
              🎉 <span className="ml-2 text-primary">A Nova Era da Automação Corporativa</span>
            </div>
            <div className="space-y-4">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-7xl/none text-primary">
                Transforme Dados em <span className="text-ring">Inteligência</span>
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                Unificamos seus sistemas, automatizamos processos complexos e desenvolvemos software sob medida para
                escalar sua operação com segurança e eficiência.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <ContactModal>
                <Button size="lg" className="gap-2">
                  Entre em contato <ArrowRight className="h-4 w-4" />
                </Button>
              </ContactModal>
            </div>
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <p>Confiança de +50 empresas</p>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mx-auto w-full max-w-md lg:max-w-full relative"
          >
            <div className="relative rounded-xl border bg-background p-2 shadow-2xl">
              <Image
                src="/futuristic-dashboard-automation-interface-dark-mod.jpg"
                width={800}
                height={600}
                alt="KonnectaAI Dashboard"
                className="rounded-lg shadow-sm"
              />
              {/* Floating Elements */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Number.POSITIVE_INFINITY, duration: 4, ease: "easeInOut" }}
                className="absolute -left-8 top-20 flex items-center gap-3 rounded-lg bg-background p-4 shadow-xl border"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                  <Database className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs font-medium text-muted-foreground">Integração</p>
                  <p className="font-bold text-primary">Conectado</p>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Number.POSITIVE_INFINITY, duration: 5, ease: "easeInOut", delay: 1 }}
                className="absolute -right-8 bottom-20 flex items-center gap-3 rounded-lg bg-background p-4 shadow-xl border"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100 text-green-600">
                  <Zap className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs font-medium text-muted-foreground">Automação</p>
                  <p className="font-bold text-primary">Ativa</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
