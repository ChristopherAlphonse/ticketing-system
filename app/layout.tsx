import "./css/globals.css"
import "@radix-ui/themes/styles.css"

import type { Metadata } from "next"
import { Roboto } from "next/font/google"
import { Theme, ThemePanel } from "@radix-ui/themes"
import { Analytics } from "@vercel/analytics/react"

import NavBar from "./component/NavBar"

const inter = Roboto({
  weight: ["400", "700"],
  style: ["normal", "italic"],
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
        <Theme appearance="dark">
          <Analytics />

          <main className="flex flex-col min-h-screen overflow-hidden supports-[overflow:clip]:overflow-clip  bg-black text-white">
            <NavBar />
            {children}
          </main>
        </Theme>
      </body>
    </html>
  )
}
