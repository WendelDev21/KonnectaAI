"use client"

import { useInView, useMotionValue, useSpring } from "framer-motion"
import { useEffect, useRef } from "react"

function Counter({ value, suffix = "" }: { value: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const motionValue = useMotionValue(0)
  const springValue = useSpring(motionValue, {
    damping: 30,
    stiffness: 100,
  })
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  useEffect(() => {
    if (isInView) {
      motionValue.set(value)
    }
  }, [isInView, value, motionValue])

  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = Intl.NumberFormat("pt-BR").format(Math.floor(latest)) + suffix
      }
    })
  }, [springValue, suffix])

  return <span ref={ref} className="text-4xl md:text-5xl font-bold text-primary-foreground" />
}

const metrics = [
  {
    value: 500,
    suffix: "+",
    label: "Projetos Entregues",
  },
  {
    value: 98,
    suffix: "%",
    label: "Satisfação dos Clientes",
  },
  {
    value: 12000,
    suffix: "+",
    label: "Horas Automatizadas",
  },
  {
    value: 50,
    suffix: "+",
    label: "Parceiros Enterprise",
  },
]

export function Metrics() {
  return (
    <section id="metrics" className="bg-primary py-20 text-primary-foreground">
      <div className="container">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {metrics.map((metric, index) => (
            <div key={index} className="flex flex-col items-center justify-center text-center space-y-2">
              <Counter value={metric.value} suffix={metric.suffix} />
              <p className="text-sm md:text-base font-medium text-primary-foreground/80">{metric.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
