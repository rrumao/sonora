import Link from "next/link"

export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-12 mt-20">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-8 md:mb-0">
            <Link href="/" className="flex items-center">
              <span className="text-xl font-heading font-bold tracking-tight">SONORA</span>
            </Link>
            <p className="mt-2 text-sm text-muted-foreground max-w-xs">
              AI voice agent for service-based businesses to collect reviews and feedback.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-x-12 gap-y-4 text-sm">
            <Link href="/privacy" className="hover:text-white/80 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-white/80 transition-colors">
              Terms of Service
            </Link>
            <Link href="/about" className="hover:text-white/80 transition-colors">
              About Us
            </Link>
            <Link href="#" className="hover:text-white/80 transition-colors">
              Contact
            </Link>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Sonora. All rights reserved.</p>
          <div className="mt-4 md:mt-0 flex space-x-6">
            <Link href="#" className="hover:text-white/80 transition-colors">
              Twitter
            </Link>
            <Link href="#" className="hover:text-white/80 transition-colors">
              LinkedIn
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
