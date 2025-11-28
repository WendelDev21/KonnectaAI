import Image from "next/image"
import Link from "next/link"
import { Facebook, Instagram, Linkedin, Twitter, MessageCircle } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground pt-16 pb-8">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <div className="relative h-8 w-8 bg-white rounded-full p-1">
                <Image src="/images/konnectaai-logo.png" alt="KonnectaAI Logo" fill className="object-contain p-1" />
              </div>
              <span className="text-xl font-bold tracking-tight">KonnectaAI</span>
            </Link>
            <p className="text-primary-foreground/70 text-sm">
              Potencializando negócios através de automação inteligente e integração de sistemas.
            </p>
          </div>

          <div>
            <h3 className="font-bold mb-4">Soluções</h3>
            <ul className="space-y-2 text-sm text-primary-foreground/70">
              <li>
                <Link href="./automacoes" className="hover:text-white transition-colors">
                  Automação
                </Link>
              </li>
              <li>
                <Link href="./desenvolvimento" className="hover:text-white transition-colors">
                  Desenvolvimento
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4">Empresa</h3>
            <ul className="space-y-2 text-sm text-primary-foreground/70">
              <li>
                <Link href="#sobre" className="hover:text-white transition-colors">
                  Sobre Nós
                </Link>
              </li>
              <li>
                <Link href="#carreiras" className="hover:text-white transition-colors">
                  Carreiras
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4">Social</h3>
            <div className="flex gap-4">
              <Link href="#" className="hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link href="#" className="hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </Link>
              <Link href="#" className="hover:text-white transition-colors">
                <MessageCircle className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-primary-foreground/50">
          <p>© 2025 KonnectaAI. Todos os direitos reservados.</p>
          <div className="flex gap-8">
            <Link href="#" className="hover:text-white transition-colors">
              Termos de Uso
            </Link>
            <Link href="#" className="hover:text-white transition-colors">
              Privacidade
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
