"use client"

import { useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export default function AboutSection() {
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
    <section ref={sectionRef} className="py-20" id="about">
      <div className="container">
        <div
          ref={contentRef}
          className="max-w-3xl mx-auto opacity-0 translate-y-10 transition-all duration-700 ease-out"
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">Learn More About Sonora</h2>

          <div className="space-y-6 text-lg">
            <p>
              Sonora is building the next generation of customer engagement tools for service-based businesses. We
              believe that authentic customer feedback is the most valuable asset for business growth, but traditional
              methods of collecting it are inefficient and often ignored.
            </p>

            <p>
              Our AI voice agent technology creates natural, conversational experiences that customers actually respond
              to. By making the feedback process effortless for both businesses and their customers, we're helping
              service providers understand their strengths and weaknesses while boosting their online presence through
              increased reviews.
            </p>

            <p>
              We're passionate about helping small businesses thrive in a competitive digital landscape where online
              reputation can make or break success. With Sonora, you'll not only collect more feedback but gain the
              actionable insights needed to continuously improve your service quality.
            </p>
          </div>

          <div className="mt-8">
            <Link href="/about">
              <Button variant="outline" className="group">
                Meet Our Team
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
