"use client"

import { useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { useRouter } from 'next/navigation'

export default function HeroSection() {
  const containerRef = useRef(null)
  const router = useRouter()
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!containerRef.current) return

      const { left, top, width, height } = containerRef.current.getBoundingClientRect()
      const x = (e.clientX - left) / width - 0.5
      const y = (e.clientY - top) / height - 0.5

      const elements = containerRef.current.querySelectorAll(".parallax")
      elements.forEach((el) => {
        const speed = Number.parseFloat(el.dataset.speed || "0.1")
        const rotateX = y * 10 * speed
        const rotateY = -x * 10 * speed
        const translateX = -x * 20 * speed
        const translateY = -y * 20 * speed
        el.style.transform = `translate(${translateX}px, ${translateY}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`
      })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden" ref={containerRef}>
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-white/5 blur-3xl parallax"
          data-speed="0.05"
        ></div>
        <div
          className="absolute bottom-1/3 right-1/3 w-96 h-96 rounded-full bg-white/5 blur-3xl parallax"
          data-speed="0.08"
        ></div>
      </div>

      <div className="container relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold tracking-tight mb-6 animate-fade-up">
            <span className="gradient-text">Conversations That Drive Growth</span>
          </h1>

          <p
            className="text-lg md:text-xl text-muted-foreground mb-8 animate-fade-up"
            style={{ animationDelay: "0.1s" }}
          >
            Sonora's AI voice agent naturally collects customer reviews and feedback after appointments, helping
            service-based businesses boost their online presence and gain actionable insights.
          </p>

          <div
            className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-up"
            style={{ animationDelay: "0.2s" }}
          >
            <a href="mailto:mrugank@mit.edu">
              <Button size="lg" className="group" >
                Request Early Access
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </a>
            <Button size="lg" variant="outline" onClick={() => router.push('/about')}>
              Learn More
            </Button>
          </div>

          <div
            className="mt-16 p-6 glass-card rounded-xl gradient-border animate-fade-up"
            style={{ animationDelay: "0.3s" }}
          >
            <p className="text-sm text-muted-foreground mb-4">Trusted by service businesses across industries</p>
            <div className="flex flex-wrap justify-center gap-8 items-center">
              <div className="text-lg font-medium opacity-70 hover:opacity-100 transition-opacity">Spa & Wellness</div>
              <div className="text-lg font-medium opacity-70 hover:opacity-100 transition-opacity">Dental Clinics</div>
              <div className="text-lg font-medium opacity-70 hover:opacity-100 transition-opacity">Hair Salons</div>
              <div className="text-lg font-medium opacity-70 hover:opacity-100 transition-opacity">Auto Services</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
