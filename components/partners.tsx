const partners = [
  { name: "Konverta", src: "/partners/konverta.png" },
  { name: "Global Tech", src: "/partners/global_tech.jpg" },
  { name: "Sisle", src: "/partners/sisle.png" },
  { name: "Flash Benefícios", src: "/partners/Flash.jpg" },
  { name: "Cakto", src: "/partners/cakto.png" },
  { name: "n8n", src: "/partners/n8n.png" },
  { name: "Pipedrive", src: "/partners/pipedrive.png" },
]

export function Partners() {
  return (
    <section className="border-y bg-muted/40 py-12">
      <div className="container">
        <p className="text-center text-sm font-medium text-muted-foreground mb-8">A CONFIANÇA DE LÍDERES DO MERCADO</p>
        <div className="relative w-full overflow-hidden">
          <div className="flex w-max animate-scroll gap-12 sm:gap-24">
            {[...partners, ...partners].map((partner, i) => (
              <div
                key={i}
                className="flex items-center justify-center gap-2 transition-all opacity-80 hover:opacity-100"
              >
                {partner.src ? (
                  <img src={partner.src} alt={partner.name} className="h-6 object-contain" />
                ) : (
                  <div className="text-xl font-bold tracking-tight text-foreground flex items-center gap-2">
                    <div className="h-6 w-6 rounded bg-primary/20"></div>
                    {partner.name}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
