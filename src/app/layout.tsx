import type { Metadata } from "next"
import { Geist_Mono, Noto_Sans } from "next/font/google"

import "@/styles/globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@/lib/utils"

const notoSans = Noto_Sans({ subsets: ["latin"], variable: "--font-sans" })

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export const metadata: Metadata = {
  title: {
    default: "Jason | DevOps Engineer and Software Developer",
    template: "%s | Jason",
  },
  description:
    "Portfolio of Jason, a DevOps engineer, software developer, and product builder creating reliable software from interface to infrastructure.",
  applicationName: "Jason's Portfolio",
  authors: [{ name: "Jason" }],
  creator: "Jason",
  openGraph: {
    type: "website",
    locale: "en_GB",
    title: "Jason | DevOps Engineer and Software Developer",
    description:
      "DevOps, software engineering, product development, and technical work by Jason.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jason | DevOps Engineer and Software Developer",
    description:
      "DevOps, software engineering, product development, and technical work by Jason.",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn(
        "antialiased",
        fontMono.variable,
        "font-sans",
        notoSans.variable
      )}
    >
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}
