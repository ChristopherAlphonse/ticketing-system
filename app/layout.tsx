import "./css/globals.css"

import type { Metadata } from "next"
import { Inter } from "next/font/google"
import Script from "next/script"
import { Analytics } from "@vercel/analytics/react"

import NavBar from "./component/NavBar"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

export const metadata: Metadata = {
  title: "HelpPilot",
  description:
    "Navigate support effortlessly with HelpPilot. Your co-pilot in streamlined assistance, where efficiency meets simplicity.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} font-inter antialiased tracking-tight`}
    >
      <body className={inter.className}>
        <Analytics />

        <main className="flex flex-col min-h-screen overflow-hidden supports-[overflow:clip]:overflow-clip">
          <NavBar />
          {children}
        </main>
      </body>
    </html>
  )
}
