import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ContactModal } from "@/components/contact-modal"

export function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="w-full max-w-7xl mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2">
          <div className="relative h-8 w-8">
            <Image src="/images/konnectaai-logo.png" alt="KonnectaAI Logo" fill className="object-contain" />
          </div>
          <span className="text-xl font-bold tracking-tight text-primary">KonnectaAI</span>
        </Link>
        <div className="hidden md:flex items-center gap-6 text-sm font-medium">
          <Link href="#services" className="transition-colors hover:text-primary">
            Soluções
          </Link>
          <Link href="#metrics" className="transition-colors hover:text-primary">
            Resultados
          </Link>
          <Link href="#about" className="transition-colors hover:text-primary">
            Sobre
          </Link>
        </div>
        <div className="flex items-center gap-4">
          <ContactModal>
            <Button>Entre em contato</Button>
          </ContactModal>
        </div>
      </div>
    </nav>
  )
}
