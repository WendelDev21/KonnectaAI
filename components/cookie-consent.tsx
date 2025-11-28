"use client"

import { useState, useEffect } from "react"
import { X } from "lucide-react"

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Check if user has already accepted cookies
    const cookieConsent = localStorage.getItem("cookie-consent")
    if (!cookieConsent) {
      setIsVisible(true)
    }
  }, [])

  const handleAccept = () => {
    localStorage.setItem("cookie-consent", "accepted")
    setIsVisible(false)
  }

  const handleDismiss = () => {
    setIsVisible(false)
  }

  if (!isVisible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50">
      <div className="bg-card border-t border-border shadow-lg">
        <div className="container mx-auto px-4 py-6 sm:py-4">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            {/* Content */}
            <div className="flex-1">
              <h3 className="font-semibold text-foreground mb-2">Cookies & Privacidade</h3>
              <p className="text-sm text-muted-foreground">
                Utilizamos cookies para melhorar sua experiência, personalizar conteúdo e analisar nosso tráfego. Ao
                aceitar, você concorda com nossa{" "}
                <a href="#" className="text-primary hover:underline font-medium">
                  política de privacidade
                </a>
                .
              </p>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-2 w-full sm:w-auto">
              <button
                onClick={handleDismiss}
                className="flex-1 sm:flex-none px-4 py-2 rounded-md border border-border text-foreground hover:bg-muted transition-colors text-sm font-medium"
              >
                Rejeitar
              </button>
              <button
                onClick={handleAccept}
                className="flex-1 sm:flex-none px-4 py-2 rounded-md bg-primary text-primary-foreground hover:bg-primary/90 transition-colors text-sm font-medium"
              >
                Aceitar
              </button>
              <button
                onClick={handleDismiss}
                className="hidden sm:flex p-2 text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Fechar"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
