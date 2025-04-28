"use client"

import { useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"
import { cn } from "@/lib/utils"

const plans = [
  {
    name: "Starter",
    price: "$99",
    description: "Perfect for small businesses just getting started with customer feedback.",
    features: [
      "Up to 100 AI calls per month",
      "Basic feedback questions",
      "Google & Yelp review integration",
      "Simple analytics dashboard",
    ],
  },
  {
    name: "Growth",
    price: "$199",
    description: "For growing businesses looking to scale their customer feedback collection.",
    features: [
      "Up to 300 AI calls per month",
      "Customizable feedback questions",
      "All review platform integrations",
      "Advanced analytics dashboard",
      "Priority support",
    ],
  },
  {
    name: "Business",
    price: "$349",
    description: "Comprehensive solution for established businesses with multiple locations.",
    features: [
      "Unlimited AI calls",
      "Fully customizable questions",
      "All platform integrations",
      "Advanced analytics with trends",
      "Dedicated account manager",
      "Multi-location support",
    ],
  },
]

export default function PricingSection() {
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
    <section ref={sectionRef} className="py-20" id="pricing">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">Simple, Transparent Pricing</h2>
          <p className="text-muted-foreground">Choose the plan that fits your business needs</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              ref={(el) => (cardsRef.current[index] = el)}
              className={cn(
                "glass-card rounded-xl p-8 opacity-0 translate-y-10 transition-all duration-700 ease-out",
                "hover:border-white/20 hover:shadow-lg hover:shadow-white/5 transition-all",
              )}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <h3 className="text-xl font-heading font-semibold mb-2">{plan.name}</h3>
              <div className="flex items-baseline mb-4">
                <span className="text-3xl font-heading font-bold">{plan.price}</span>
                <span className="text-muted-foreground ml-2">/month</span>
              </div>
              <p className="text-muted-foreground mb-6">{plan.description}</p>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <Check className="h-5 w-5 text-white mr-2 shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <Button variant={index === 1 ? "default" : "outline"} className="w-full">
                Request Access
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
