import "./globals.css"
import { Inter, Montserrat } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import Header from "@/components/shared/header"
import Footer from "@/components/shared/footer"
import SoundWavesBackground from "@/components/SoundWavesBackground"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
})

export const metadata = {
  title: "Sonora | AI Voice Agent for Service Businesses",
  description:
    "Sonora helps service-based businesses collect customer reviews and feedback through natural AI voice calls, boosting online presence and providing actionable insights.",
    generator: 'v0.dev'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${montserrat.variable} font-sans min-h-screen bg-background`} suppressHydrationWarning>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} disableTransitionOnChange>
          <div className="relative min-h-screen flex flex-col">
            <SoundWavesBackground />
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
