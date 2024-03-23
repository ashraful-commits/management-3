import { Work_Sans } from "next/font/google"

import "@/styles/globals.css"
import { Metadata } from "next"

import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { Toaster } from "@/components/ui/toaster"
import Header from "@/components/Header"
import HeaderComp from "@/components/common-ui/HeaderComp"

import { AuthProvider } from "./Providers"

const worksans = Work_Sans({
  weight: ["400", "500"],
  subsets: ["latin"],
  variable:['--work-sans']
})

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  metadataBase: new URL("https://salesfam.com"),
  openGraph: {
    title: {
      default: siteConfig.name,
      template: `%s - ${siteConfig.name}`,
    },
    description: siteConfig.description,
    images: [{ url: "/salesfam-og.jpg", alt: "Sales Fam" }],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
}

export default function RootLayout({ children }) {
  return (
    <>
      <html lang="en">
        <body className={worksans.className} suppressHydrationWarning={true}>
          <AuthProvider>
            <div className="relative flex flex-col min-h-screen">
              <HeaderComp />
              <div className="flex-1">{children}</div>
              <Toaster />
            </div>
          </AuthProvider>
        </body>
      </html>
    </>
  )
}
