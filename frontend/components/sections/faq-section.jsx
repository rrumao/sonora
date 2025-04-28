"use client"

import { useRef, useEffect } from "react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "How natural does the AI voice agent sound?",
    answer:
      "Our AI voice agent uses advanced natural language processing and voice synthesis to create conversations that sound remarkably human. Customers often can't tell they're speaking with an AI, which leads to more authentic feedback and higher response rates.",
  },
  {
    question: "How soon after an appointment does the AI call customers?",
    answer:
      "You can customize the timing of calls based on your business needs. Most clients set calls to happen 1-2 hours after service completion or the following day. Our system allows you to define the ideal window for feedback collection.",
  },
  {
    question: "Can I customize what questions the AI asks?",
    answer:
      "You can fully customize the questions asked during calls to gather the specific feedback that matters most to your business. You can also set up different question flows based on initial responses to dig deeper into areas of interest.",
  },
  {
    question: "How does the review posting process work?",
    answer:
      "After collecting positive feedback, our system automatically sends customers a text message with a direct link to your Google Business Profile, Yelp page, or other review platforms. This one-click approach dramatically increases the likelihood of customers posting public reviews.",
  },
  {
    question: "What insights will I see in the dashboard?",
    answer:
      "Our dashboard provides comprehensive analytics including satisfaction scores, sentiment analysis, trending topics in feedback, comparison data across time periods, and actionable recommendations based on customer responses. You'll gain clear visibility into what customers love and areas for improvement.",
  },
  {
    question: "Is Sonora compliant with privacy regulations?",
    answer:
      "Yes, Sonora is designed with privacy in mind. We comply with GDPR, CCPA, and other privacy regulations. Calls are recorded only with consent, data is encrypted, and customers can opt out at any time. We provide all necessary disclosures and privacy documentation for your business.",
  },
]

export default function FaqSection() {
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
    <section ref={sectionRef} className="py-20" id="faq">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-muted-foreground">Everything you need to know about Sonora</p>
        </div>

        <div
          ref={contentRef}
          className="max-w-3xl mx-auto opacity-0 translate-y-10 transition-all duration-700 ease-out"
        >
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left font-heading font-medium">{faq.question}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
