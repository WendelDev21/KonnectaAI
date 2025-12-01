import type React from "react"
import type { Metadata } from "next"

import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

import {
  Inter,
  Inter as V0_Font_Inter,
  Geist_Mono as V0_Font_Geist_Mono,
  Source_Serif_4 as V0_Font_Source_Serif_4,
} from "next/font/google"
import CookieConsent from "@/components/cookie-consent"

// Initialize fonts
const _inter = V0_Font_Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
})
const _geistMono = V0_Font_Geist_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
})
const _sourceSerif_4 = V0_Font_Source_Serif_4({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
})

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "KonnectaAI - Automação Inteligente e Soluções de Software",
  description:
    "Transforme sua empresa com soluções de automação, integração de sistemas e desenvolvimento de software sob medida.",
  icons: {
    icon: [
      {
        url: "/images/konnectaai-logo.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/images/konnectaai-logo-dark.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/images/KonnectaAI_logo.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/images/konnectaai-logo-dark.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} font-sans antialiased`}>
        {children}
        <CookieConsent />
        <Analytics />
      </body>
    </html>
  )
}
