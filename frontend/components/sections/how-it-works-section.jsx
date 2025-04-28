"use client"

import { useRef, useEffect } from "react"
import { cn } from "@/lib/utils"

const steps = [
  {
    number: "01",
    title: "Setup Your Account",
    description:
      "Connect your customer database, customize your feedback questions, and set your preferences for when the AI should contact customers.",
  },
  {
    number: "02",
    title: "AI Agent Calls Customers",
    description:
      "After appointments, our AI voice agent naturally calls your customers to collect reviews and specific feedback about their experience.",
  },
  {
    number: "03",
    title: "Get Actionable Insights",
    description:
      "Access your dashboard to view organized feedback, analytics on customer satisfaction, and actionable insights to improve your business.",
  },
]

export default function HowItWorksSection() {
  const sectionRef = useRef(null)
  const stepsRef = useRef([])

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

    stepsRef.current.forEach((step) => {
      if (step) observer.observe(step)
    })

    return () => {
      stepsRef.current.forEach((step) => {
        if (step) observer.unobserve(step)
      })
    }
  }, [])

  return (
    <section ref={sectionRef} className="py-20 bg-black/50" id="how-it-works">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">How Sonora Works</h2>
          <p className="text-muted-foreground">
            A simple three-step process to transform your customer feedback collection
          </p>
        </div>

        <div className="relative">
          {/* Connecting Line */}
          <div className="absolute left-[50%] top-0 bottom-0 w-px bg-gradient-to-b from-white/20 via-white/10 to-transparent hidden md:block"></div>

          <div className="space-y-16 md:space-y-24 relative">
            {steps.map((step, index) => (
              <div
                key={index}
                ref={(el) => (stepsRef.current[index] = el)}
                className={cn(
                  "flex flex-col md:flex-row items-center opacity-0 translate-y-10 transition-all duration-700 ease-out",
                  index % 2 === 1 ? "md:flex-row-reverse" : "",
                )}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="md:w-1/2 mb-8 md:mb-0">
                  <div
                    className={cn(
                      "glass-card rounded-xl p-8 md:p-10 relative",
                      "hover:border-white/20 hover:shadow-lg hover:shadow-white/5 transition-all",
                    )}
                  >
                    <span className="text-6xl font-heading font-bold text-white/10 absolute -top-6 -left-4">
                      {step.number}
                    </span>
                    <h3 className="text-2xl font-heading font-semibold mb-4">{step.title}</h3>
                    <p className="text-muted-foreground">{step.description}</p>
                  </div>
                </div>

                <div className="md:w-1/2 flex justify-center">
                  <div className="w-12 h-12 rounded-full bg-white/10 border border-white/20 flex items-center justify-center z-10">
                    <span className="font-heading font-bold">{index + 1}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
