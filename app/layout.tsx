import "./css/globals.css"
import "@radix-ui/themes/styles.css"
import "./css/theme-config.css"

import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Theme } from "@radix-ui/themes"
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
      suppressHydrationWarning
      className={`${inter.variable} font-roboto antialiased tracking-tight`}
    >
      <body className={inter.className}>
        <Theme
          appearance="dark"
          accentColor="iris"
          radius="large"
          scaling="90%"
        >
          <Analytics />

          <main
            className={`${inter.variable}font-inter flex flex-col min-h-screen overflow-hidden supports-[overflow:clip]:overflow-clip  bg-black text-white`}
          >
            <NavBar />
            {children}
          </main>
        </Theme>
      </body>
    </html>
  )
}
