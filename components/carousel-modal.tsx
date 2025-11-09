"use client"

import { useState } from "react"
import { X, ChevronLeft, ChevronRight } from "lucide-react"

interface CarouselModalProps {
  isOpen: boolean
  onClose: () => void
}

export function CarouselModal({ isOpen, onClose }: CarouselModalProps) {
  const [currentIndex, setCurrentIndex] = useState(0)

  // Array de vídeos - substitua com seus vídeos reais
  const videos = [
    {
      title: "Automação de Vendas",
      url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      description: "Veja como automatizamos o processo de vendas de uma empresa",
    },
    {
      title: "Integração de Sistemas",
      url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      description: "Conectando múltiplos sistemas em tempo real",
    },
    {
      title: "Desenvolvimento Customizado",
      url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      description: "Soluções de software personalizadas para seu negócio",
    },
  ]

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? videos.length - 1 : prev - 1))
  }

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === videos.length - 1 ? 0 : prev + 1))
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl shadow-2xl w-full max-w-2xl overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-slate-200">
          <h2 className="text-2xl font-bold text-slate-900">Casos de uso</h2>
          <button
            onClick={onClose}
            className="text-slate-500 hover:text-slate-700 transition-colors"
            aria-label="Fechar"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Carousel */}
        <div className="p-6">
          <div className="space-y-4">
            {/* Video */}
            <div className="relative w-full bg-black rounded-lg overflow-hidden" style={{ paddingBottom: "56.25%" }}>
              <iframe
                src={videos[currentIndex].url}
                title={videos[currentIndex].title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 w-full h-full"
              />
            </div>

            {/* Title and Description */}
            <div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">{videos[currentIndex].title}</h3>
              <p className="text-slate-600">{videos[currentIndex].description}</p>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-between pt-4">
              <button
                onClick={handlePrev}
                className="p-2 hover:bg-slate-100 rounded-lg transition-colors"
                aria-label="Anterior"
              >
                <ChevronLeft className="w-6 h-6 text-[#006B89]" />
              </button>

              <div className="flex gap-2">
                {videos.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      index === currentIndex ? "bg-[#006B89]" : "bg-slate-300"
                    }`}
                    aria-label={`Ir para vídeo ${index + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={handleNext}
                className="p-2 hover:bg-slate-100 rounded-lg transition-colors"
                aria-label="Próximo"
              >
                <ChevronRight className="w-6 h-6 text-[#006B89]" />
              </button>
            </div>

            {/* Counter */}
            <p className="text-center text-sm text-slate-600">
              {currentIndex + 1} de {videos.length}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
