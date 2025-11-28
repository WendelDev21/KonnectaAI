import { Button } from "@/components/ui/button"
import { ContactModal } from "@/components/contact-modal"

export function CTA() {
  return (
    <section className="py-20 md:py-32 bg-muted/30">
      <div className="container">
        <div className="flex flex-col items-center justify-center space-y-4 text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-primary">
            Pronto para escalar sua operação?
          </h2>
          <p className="text-muted-foreground md:text-xl mb-8">
            Agende uma consultoria gratuita e descubra como a KonnectaAI pode economizar tempo e recursos da sua empresa
            hoje mesmo.
          </p>
          <div className="flex flex-col w-full sm:flex-row items-center justify-center gap-4">
            <ContactModal>
              <Button size="lg" className="w-full sm:w-auto text-lg px-8 py-6">
                Falar com Especialista
              </Button>
            </ContactModal>
          </div>
        </div>
      </div>
    </section>
  )
}
