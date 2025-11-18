"use client"

import { Check } from 'lucide-react'
import { useEffect, useState } from 'react'

export function SuccessModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean
  onClose: () => void
}) {
  const [isAnimating, setIsAnimating] = useState(false)

  useEffect(() => {
    if (isOpen) {
      setIsAnimating(true)
      const timer = setTimeout(onClose, 3000)
      return () => clearTimeout(timer)
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
      <div className="bg-white rounded-2xl max-w-md w-full p-8 text-center">
        <div className="flex justify-center mb-6">
          <div
            className={`relative w-20 h-20 rounded-full bg-gradient-to-r from-[#1ECCC4] via-[#006B89] to-[#001F3F] flex items-center justify-center transform transition-all duration-500 ${
              isAnimating ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
            }`}
          >
            <Check className="w-10 h-10 text-white" strokeWidth={3} />
          </div>
        </div>

        <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-2">
          Orçamento enviado!
        </h2>

        <p className="text-slate-600 mb-6">
          Obrigado! Recebemos seu pedido de orçamento. Em breve, entraremos em contato com você.
        </p>

        <button
          onClick={onClose}
          className="w-full px-6 py-3 bg-gradient-to-r from-[#1ECCC4] via-[#006B89] to-[#001F3F] text-white font-semibold rounded-lg hover:opacity-90 transition-opacity"
        >
          Fechar
        </button>
      </div>
    </div>
  )
}
