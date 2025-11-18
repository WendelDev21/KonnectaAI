"use client"

import { useState } from "react"
import { X, ChevronRight, ChevronLeft } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { SuccessModal } from "./success-modal"

interface BudgetOption {
  label: string
  price: number
  maintenance?: number
  maintenanceType?: string
}

interface DeadlineOption {
  label: string
  timeframe: string
  price: number
}

const budgetOptions: BudgetOption[] = [
  {
    label: "Em nosso ambiente",
    price: 2000,
    maintenance: 800,
    maintenanceType: "diária/semanal/mensal",
  },
  {
    label: "Ambiente do cliente",
    price: 1500,
    maintenance: 1100,
    maintenanceType: "individual",
  },
]

const deadlineOptions: Record<string, DeadlineOption[]> = {
  "Em nosso ambiente": [
    { label: "Urgente", timeframe: "1-2 semanas", price: 2200 },
    { label: "Razoável", timeframe: "2-4 semanas", price: 2000 },
    { label: "Sem pressa", timeframe: "4+ semanas", price: 1800 },
  ],
  "Ambiente do cliente": [
    { label: "Urgente", timeframe: "1-2 semanas", price: 1700 },
    { label: "Razoável", timeframe: "2-4 semanas", price: 1500 },
    { label: "Sem pressa", timeframe: "4+ semanas", price: 1300 },
  ],
}

export function BudgetModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean
  onClose: () => void
}) {
  const [step, setStep] = useState(1)
  const [selectedDeployment, setSelectedDeployment] = useState<string | null>(null)
  const [selectedDeadline, setSelectedDeadline] = useState<DeadlineOption | null>(null)
  const [showSuccess, setShowSuccess] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    whatsapp: "",
  })

  const currentDeadlines = selectedDeployment
    ? deadlineOptions[selectedDeployment] || []
    : []

  const deploymentOption = budgetOptions.find(
    (opt) => opt.label === selectedDeployment
  )

  // Calculate total: maintenance + deadline price (deadline replaces implementation price)
  const calculateTotal = () => {
    return selectedDeadline?.price || 0
  }

  const handleNext = () => {
    if (step === 1 && !selectedDeployment) return
    if (step === 2 && !selectedDeadline) return
    if (step < 4) setStep(step + 1)
  }

  const handlePrev = () => {
    if (step > 1) {
      if (step === 2) {
        setSelectedDeployment(null)
        setSelectedDeadline(null)
      } else if (step === 3) {
        setSelectedDeadline(null)
      } else if (step === 4) {
        setFormData({
          name: "",
          company: "",
          email: "",
          whatsapp: "",
        })
      }
      setStep(step - 1)
    }
  }

  const handleSubmit = async () => {
    if (!formData.name || !formData.email || !formData.company) return

    // Here you can send the data to your backend
    console.log({
      ...formData,
      deployment: selectedDeployment,
      deadline: selectedDeadline,
      total: calculateTotal(),
    })

    setShowSuccess(true)
  }

  const handleSuccessClose = () => {
    setShowSuccess(false)
    // Reset everything and close the budget modal
    setStep(1)
    setSelectedDeployment(null)
    setSelectedDeadline(null)
    setFormData({
      name: "",
      company: "",
      email: "",
      whatsapp: "",
    })
    onClose()
  }

  if (!isOpen) return null

  return (
    <>
      <div 
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
        onClick={onClose}
      >
        <div 
          className="relative bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 hover:bg-slate-100 rounded-lg transition-colors"
            aria-label="Fechar"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Progress Bar */}
          <div className="sticky top-0 bg-white border-b border-slate-200">
            <div className="px-6 sm:px-8 pt-6 pb-4">
              <div className="flex items-center justify-between gap-2 mb-4">
                <div className="flex items-center gap-2">
                  <span className="text-sm font-semibold text-slate-600">
                    Passo {step} de 4
                  </span>
                </div>
                <span className="text-lg font-bold bg-gradient-to-r from-[#1ECCC4] via-[#006B89] to-[#001F3F] bg-clip-text text-transparent">
                  R$ {calculateTotal().toLocaleString("pt-BR")}
                </span>
              </div>

              {/* Progress Bar */}
              <div className="w-full bg-slate-200 rounded-full h-2">
                <div
                  className="bg-gradient-to-r from-[#1ECCC4] via-[#006B89] to-[#001F3F] h-2 rounded-full transition-all duration-300"
                  style={{ width: `${(step / 4) * 100}%` }}
                ></div>
              </div>

              {/* Step Indicators */}
              <div className="flex justify-between mt-4 text-xs sm:text-sm">
                <span
                  className={step >= 1 ? "text-[#006B89] font-semibold" : "text-slate-500"}
                >
                  Implantação
                </span>
                <span
                  className={step >= 2 ? "text-[#006B89] font-semibold" : "text-slate-500"}
                >
                  Prazo
                </span>
                <span
                  className={step >= 3 ? "text-[#006B89] font-semibold" : "text-slate-500"}
                >
                  Dados
                </span>
                <span
                  className={step >= 4 ? "text-[#006B89] font-semibold" : "text-slate-500"}
                >
                  Resumo
                </span>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="px-6 sm:px-8 py-8">
            {/* Step 1: Deployment */}
            {step === 1 && (
              <div className="space-y-6">
                <div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-2">
                    Implantação
                  </h2>
                  <p className="text-slate-600">
                    Escolha onde deseja implantar sua solução
                  </p>
                </div>

                <div className="space-y-3">
                  {budgetOptions.map((option) => (
                    <button
                      key={option.label}
                      onClick={() => setSelectedDeployment(option.label)}
                      className={`w-full p-4 border-2 rounded-lg text-left transition-all ${
                        selectedDeployment === option.label
                          ? "border-[#006B89] bg-[#006B89]/5"
                          : "border-slate-200 hover:border-slate-300"
                      }`}
                    >
                      <div className="font-semibold text-slate-900">
                        {option.label}
                      </div>
                      <div className="text-sm text-slate-600 mt-1">
                        Implantação: R$ {option.price.toLocaleString("pt-BR")} + Manutenção{" "}
                        {option.maintenanceType}: R${" "}
                        {option.maintenance?.toLocaleString("pt-BR")}
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Step 2: Deadline */}
            {step === 2 && (
              <div className="space-y-6">
                <div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-2">
                    Prazo para implantação
                  </h2>
                  <p className="text-slate-600">
                    {selectedDeployment} - Escolha seu prazo ideal
                  </p>
                </div>

                <div className="space-y-3">
                  {currentDeadlines.map((deadline) => (
                    <button
                      key={deadline.label}
                      onClick={() => setSelectedDeadline(deadline)}
                      className={`w-full p-4 border-2 rounded-lg text-left transition-all ${
                        selectedDeadline?.label === deadline.label
                          ? "border-[#006B89] bg-[#006B89]/5"
                          : "border-slate-200 hover:border-slate-300"
                      }`}
                    >
                      <div className="flex justify-between items-start">
                        <div>
                          <div className="font-semibold text-slate-900">
                            {deadline.label}
                          </div>
                          <div className="text-sm text-slate-600 mt-1">
                            {deadline.timeframe}
                          </div>
                        </div>
                        <div className="font-semibold text-[#006B89]">
                          R$ {deadline.price.toLocaleString("pt-BR")}
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Step 3: Contact Form */}
            {step === 3 && (
              <div className="space-y-6">
                <div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-2">
                    Seus dados
                  </h2>
                  <p className="text-slate-600">
                    Preencha suas informações para entrarmos em contato
                  </p>
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">
                      Nome completo
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#006B89]"
                      placeholder="Seu nome"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">
                      Empresa
                    </label>
                    <input
                      type="text"
                      value={formData.company}
                      onChange={(e) =>
                        setFormData({ ...formData, company: e.target.value })
                      }
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#006B89]"
                      placeholder="Nome da sua empresa"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#006B89]"
                      placeholder="seu@email.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">
                      WhatsApp
                    </label>
                    <input
                      type="tel"
                      value={formData.whatsapp}
                      onChange={(e) =>
                        setFormData({ ...formData, whatsapp: e.target.value })
                      }
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#006B89]"
                      placeholder="(11) 99999-9999"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Step 4: Summary */}
            {step === 4 && (
              <div className="space-y-6">
                <div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-2">
                    Resumo do orçamento
                  </h2>
                  <p className="text-slate-600">
                    Revise suas escolhas antes de enviar
                  </p>
                </div>

                <div className="space-y-4 bg-slate-50 p-6 rounded-lg">
                  <div className="flex justify-between pb-4 border-b border-slate-200">
                    <span className="text-slate-600">Implantação:</span>
                    <span className="font-semibold text-slate-900">
                      {selectedDeployment}
                    </span>
                  </div>

                  <div className="flex justify-between pb-4 border-b border-slate-200">
                    <span className="text-slate-600">Prazo:</span>
                    <span className="font-semibold text-slate-900">
                      {selectedDeadline?.label} ({selectedDeadline?.timeframe})
                    </span>
                  </div>

                  <div className="flex justify-between pb-4 border-b border-slate-200">
                    <span className="text-slate-600">Manutenção:</span>
                    <span className="font-semibold text-slate-900">
                      {selectedDeployment === "Em nosso ambiente"
                        ? "R$ 800 mensal"
                        : "R$ 1.100 cada manutenção"}
                    </span>
                  </div>

                  <div className="flex justify-between pb-4 border-b border-slate-200">
                    <span className="text-slate-600">Valor do prazo:</span>
                    <span className="font-semibold text-slate-900">
                      R$ {selectedDeadline?.price?.toLocaleString("pt-BR")}
                    </span>
                  </div>

                  <div className="flex justify-between text-lg font-bold bg-gradient-to-r from-[#1ECCC4]/10 via-[#006B89]/10 to-[#001F3F]/10 p-4 rounded-lg mt-4">
                    <span>Total:</span>
                    <span className="text-[#006B89]">
                      R$ {calculateTotal().toLocaleString("pt-BR")}
                    </span>
                  </div>

                  <div className="space-y-2 text-sm text-slate-600 mt-4 pt-4 border-t border-slate-200">
                    <p>
                      <strong>Nome:</strong> {formData.name}
                    </p>
                    <p>
                      <strong>Empresa:</strong> {formData.company}
                    </p>
                    <p>
                      <strong>Email:</strong> {formData.email}
                    </p>
                    <p>
                      <strong>WhatsApp:</strong> {formData.whatsapp}
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Navigation Buttons */}
          <div className="sticky bottom-0 bg-white border-t border-slate-200 px-6 sm:px-8 py-4 flex gap-3">
            {step > 1 && (
              <Button
                onClick={handlePrev}
                variant="outline"
                className="flex-1 border-slate-300 text-slate-700 hover:bg-slate-50"
              >
                <ChevronLeft className="w-4 h-4 mr-2" />
                Anterior
              </Button>
            )}

            {step < 4 ? (
              <Button
                onClick={handleNext}
                disabled={
                  (step === 1 && !selectedDeployment) ||
                  (step === 2 && !selectedDeadline)
                }
                className="flex-1 bg-[#006B89] hover:bg-[#001F3F] text-white disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Próximo
                <ChevronRight className="w-4 h-4 ml-2" />
              </Button>
            ) : (
              <Button
                onClick={handleSubmit}
                disabled={
                  !formData.name ||
                  !formData.email ||
                  !formData.company ||
                  !formData.whatsapp
                }
                className="flex-1 bg-[#006B89] hover:bg-[#001F3F] text-white disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Enviar orçamento
              </Button>
            )}
          </div>
        </div>
      </div>

      <SuccessModal isOpen={showSuccess} onClose={handleSuccessClose} />
    </>
  )
}
