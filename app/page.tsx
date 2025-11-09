"use client"

import { useState } from "react"
import Image from "next/image"
import {
  ArrowRight,
  Zap,
  Link2,
  Code2,
  CheckCircle2,
  Instagram,
  MessageCircle,
  Mail,
  Phone,
  Linkedin,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { FormModal } from "@/components/form-modal"
import { CarouselModal } from "@/components/carousel-modal"

export default function Home() {
  const [isFormOpen, setIsFormOpen] = useState(false)
  const [isCarouselOpen, setIsCarouselOpen] = useState(false)

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-50">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 border-b border-slate-200/50 bg-white/80 backdrop-blur-md">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4 flex items-center justify-between gap-4">
          <div className="flex items-center gap-2 sm:gap-3 min-w-0">
            <Image
              src="KonnectaAI.png"
              alt="KonnectaAI Logo"
              width={40}
              height={40}
              className="w-8 h-8 sm:w-10 sm:h-10 flex-shrink-0"
            />
            <span className="font-bold text-lg sm:text-xl bg-gradient-to-r from-[#1ECCC4] via-[#006B89] to-[#001F3F] bg-clip-text text-transparent truncate">
              KonnectaAI
            </span>
          </div>
          <Button
            onClick={() => setIsFormOpen(true)}
            className="bg-[#006B89] hover:bg-[#001F3F] text-white text-sm sm:text-base px-4 sm:px-6 py-2 h-auto flex-shrink-0"
          >
            Começar
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          <div>
            <div className="space-y-6">
              <div className="space-y-4">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 text-balance leading-tight">
                  Conecte seu software ao{" "}
                  <span className="bg-gradient-to-r from-[#1ECCC4] via-[#006B89] to-[#001F3F] bg-clip-text text-transparent">
                    futuro
                  </span>
                </h1>
                <p className="text-base sm:text-lg lg:text-xl text-slate-600 text-balance">
                  Automação e integração de software que transformam sua empresa. Conectamos sistemas, aumentamos
                  eficiência e desbloqueamos novo potencial.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-4">
                <Button
                  onClick={() => setIsFormOpen(true)}
                  className="bg-[#006B89] hover:bg-[#001F3F] text-white text-base px-6 sm:px-8 py-3 sm:py-6 h-auto w-full sm:w-auto"
                >
                  Agendar demo <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2" />
                </Button>
                <Button
                  onClick={() => setIsCarouselOpen(true)}
                  variant="outline"
                  className="text-[#006B89] border-[#1ECCC4] hover:bg-[#1ECCC4]/10 text-base px-6 sm:px-8 py-3 sm:py-6 h-auto bg-transparent w-full sm:w-auto"
                >
                  Ver casos de uso
                </Button>
              </div>
            </div>
          </div>

          {/* Logo Highlight */}
          <div className="flex items-center justify-center py-8 sm:py-0">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-[#1ECCC4]/20 via-[#C8E6C9]/20 to-[#006B89]/20 rounded-2xl blur-2xl"></div>
              <Image
                src="KonnectaAI.png"
                alt="KonnectaAI"
                width={400}
                height={400}
                className="w-64 h-64 sm:w-80 h-80 lg:w-96 h-96 relative drop-shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-slate-900 text-white py-16 sm:py-24 lg:py-32">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4">
              Soluções que conectam, integram e desenvolvem
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-slate-300 max-w-2xl mx-auto px-2">
              Três pilares de excelência tecnológica para impulsionar seu negócio
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {/* Automation */}
            <div className="group bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl p-6 sm:p-8 border border-[#1ECCC4]/20 hover:border-[#1ECCC4]/50 transition-all duration-300">
              <div className="w-12 h-12 bg-[#1ECCC4]/20 rounded-lg flex items-center justify-center mb-4 sm:mb-6 group-hover:bg-[#1ECCC4]/30 transition-colors">
                <Zap className="w-6 h-6 text-[#1ECCC4]" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3">Automação</h3>
              <p className="text-sm sm:text-base text-slate-300 mb-4">
                Elimine tarefas repetitivas e aumente a produtividade da sua equipe com processos inteligentes e
                automatizados.
              </p>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-400">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#1ECCC4] flex-shrink-0" />
                  Workflows customizados
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#1ECCC4] flex-shrink-0" />
                  Redução de custos
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#1ECCC4] flex-shrink-0" />
                  Escalabilidade
                </li>
              </ul>
            </div>

            {/* Integration */}
            <div className="group bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl p-6 sm:p-8 border border-[#006B89]/20 hover:border-[#006B89]/50 transition-all duration-300">
              <div className="w-12 h-12 bg-[#006B89]/20 rounded-lg flex items-center justify-center mb-4 sm:mb-6 group-hover:bg-[#006B89]/30 transition-colors">
                <Link2 className="w-6 h-6 text-[#006B89]" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3">Integração</h3>
              <p className="text-sm sm:text-base text-slate-300 mb-4">
                Conecte todos os seus sistemas e plataformas em um único ecossistema coeso e eficiente.
              </p>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-400">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#006B89] flex-shrink-0" />
                  APIs robustas
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#006B89] flex-shrink-0" />
                  Sincronização em tempo real
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#006B89] flex-shrink-0" />
                  Compatibilidade universal
                </li>
              </ul>
            </div>

            {/* Development */}
            <div className="group bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl p-6 sm:p-8 border border-[#C8E6C9]/20 hover:border-[#C8E6C9]/50 transition-all duration-300 sm:col-span-2 lg:col-span-1">
              <div className="w-12 h-12 bg-[#C8E6C9]/20 rounded-lg flex items-center justify-center mb-4 sm:mb-6 group-hover:bg-[#C8E6C9]/30 transition-colors">
                <Code2 className="w-6 h-6 text-[#C8E6C9]" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3">Desenvolvimento</h3>
              <p className="text-sm sm:text-base text-slate-300 mb-4">
                Software customizado construído com as melhores práticas e tecnologias mais modernas do mercado.
              </p>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-400">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#C8E6C9] flex-shrink-0" />
                  Código limpo e escalável
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#C8E6C9] flex-shrink-0" />
                  Suporte contínuo
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#C8E6C9] flex-shrink-0" />
                  Performance otimizada
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-[#1ECCC4]/10 via-[#006B89]/10 to-[#001F3F]/10 py-16 sm:py-20 lg:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4 sm:mb-6">
            Pronto para transformar seu negócio?
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-slate-600 mb-6 sm:mb-8 text-balance px-2">
            Deixe-nos ajudá-lo a conectar, integrar e desenvolver soluções que impulsionam o crescimento.
          </p>
          <Button
            onClick={() => setIsFormOpen(true)}
            className="bg-[#006B89] hover:bg-[#001F3F] text-white text-base px-6 sm:px-8 py-3 sm:py-6 h-auto w-full sm:w-auto"
          >
            Começar agora <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2" />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-8 border-t border-slate-800 pt-8">
            {/* Logo and brand */}
            <div className="flex items-center gap-2 sm:gap-3">
              <Image
                src="KonnectaAI_logo.png"
                alt="KonnectaAI Logo"
                width={32}
                height={32}
                className="w-8 h-8 flex-shrink-0"
              />
              <span className="font-semibold text-white text-sm sm:text-base">KonnectaAI</span>
            </div>

            {/* Social Media Icons - Centered on mobile */}
            <div className="flex items-center justify-center sm:justify-start gap-4 sm:gap-6">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-[#1ECCC4] transition-colors duration-200"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://wa.me"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-[#1ECCC4] transition-colors duration-200"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
              <a
                href="mailto:contact@konnectaai.com"
                className="text-slate-400 hover:text-[#006B89] transition-colors duration-200"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
              <a
                href="tel:+5511999999999"
                className="text-slate-400 hover:text-[#006B89] transition-colors duration-200"
                aria-label="Telefone"
              >
                <Phone className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-[#C8E6C9] transition-colors duration-200"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>

            {/* Copyright */}
            <p className="text-xs sm:text-sm text-center sm:text-left">
              © 2025 KonnectaAI. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>

      <FormModal isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} />
      <CarouselModal isOpen={isCarouselOpen} onClose={() => setIsCarouselOpen(false)} />
    </div>
  )
}
