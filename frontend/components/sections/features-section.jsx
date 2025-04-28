"use client"

import { useRef, useEffect } from "react"
import { Phone, Star, MessageSquare, BarChart3 } from "lucide-react"
import { cn } from "@/lib/utils"

const features = [
  {
    icon: Phone,
    title: "AI Voice Review Collection",
    description:
      "Our AI voice agent naturally calls customers after appointments to gather detailed feedback and reviews, achieving higher response rates than traditional methods.",
  },
  {
    icon: Star,
    title: "One-Click Review Posting",
    description:
      "Customers receive a simple SMS with a link to post their positive reviews directly to Google, Yelp, and other platforms with minimal friction.",
  },
  {
    icon: MessageSquare,
    title: "Customized Feedback Gathering",
    description:
      "Tailor the questions and metrics collected during calls to match your business needs and gather the specific insights that matter most to you.",
  },
  {
    icon: BarChart3,
    title: "Actionable Insights Dashboard",
    description:
      "Transform customer feedback into clear, actionable insights with our intuitive analytics dashboard, helping you identify trends and improvement opportunities.",
  },
]

export default function FeaturesSection() {
  const sectionRef = useRef(null)
  const cardsRef = useRef([])

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

    cardsRef.current.forEach((card) => {
      if (card) observer.observe(card)
    })

    return () => {
      cardsRef.current.forEach((card) => {
        if (card) observer.unobserve(card)
      })
    }
  }, [])

  return (
    <section ref={sectionRef} className="py-20" id="features">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">Powerful Features for Service Businesses</h2>
          <p className="text-muted-foreground">
            Sonora combines AI voice technology with customer feedback tools to help your business grow.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              ref={(el) => (cardsRef.current[index] = el)}
              className={cn(
                "glass-card rounded-xl p-8 opacity-0 translate-y-10 transition-all duration-700 ease-out",
                "hover:border-white/20 hover:shadow-lg hover:shadow-white/5 transition-all",
              )}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center mb-6">
                <feature.icon className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-heading font-semibold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
