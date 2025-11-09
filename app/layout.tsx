import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "KonnectaAI - Automação e Integração de Software",
  description:
    "Conecte, integre e desenvolva soluções de software que transformam seu negócio. Automação inteligente e integração de sistemas para empresas modernas.",
  icons: {
    icon: [
      {
        url: "/KonnectaAI_logo.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/KonnectaAI_logo.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/KonnectaAI_logo.png",
        type: "image/png",
      },
    ],
    apple: "/KonnectaAI_logo.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
