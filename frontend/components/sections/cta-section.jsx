"use client"

import { useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function CtaSection() {
  const sectionRef = useRef(null)
  const contentRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-up")
            entry.target.classList.remove("opacity-0", "translate-y-10")
          }
        })
      },
      { threshold: 0.1 },
    )

    if (contentRef.current) {
      observer.observe(contentRef.current)
    }

    return () => {
      if (contentRef.current) {
        observer.unobserve(contentRef.current)
      }
    }
  }, [])

  return (
    <section ref={sectionRef} className="py-20" id="cta">
      <div className="container">
        <div
          ref={contentRef}
          className="glass-card rounded-xl p-12 max-w-4xl mx-auto text-center opacity-0 translate-y-10 transition-all duration-700 ease-out"
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
            Ready to Transform Your Customer Feedback?
          </h2>

          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join the waitlist today and be among the first businesses to experience Sonora's AI voice agent technology.
          </p>
          <a href="mailto:mrugank@mit.edu">
          <Button size="lg" className="group">
            Request Early Access
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </a>
        </div>
      </div>
    </section>
  )
}
