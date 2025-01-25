import "./globals.css"
import { Playfair_Display, Roboto, Noto_Kufi_Arabic } from "next/font/google"
import { Toaster } from "sonner"
import SideNavigationBar from "./components/SideNavigationBar"

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
})

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-roboto",
})

const notoKufiArabic = Noto_Kufi_Arabic({
  subsets: ["arabic"],
  weight: ["400", "700"],
  variable: "--font-noto-kufi-arabic",
})

export const metadata = {
  title: "Fares Anbar | Professional Drummer",
  description: "Official website of Fares Anbar, Professional Drummer, Instructor, and Performer",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" dir="ltr" className={`${playfair.variable} ${roboto.variable} ${notoKufiArabic.variable}`}>
      <body className="bg-premium-black text-premium-white m-0 p-0 font-roboto">
        <SideNavigationBar />
        <main className="md:ml-64">{children}</main>
        <Toaster position="bottom-center" />
      </body>
    </html>
  )
}

