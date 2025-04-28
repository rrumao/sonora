
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ArrowRight } from "lucide-react";

const FaqSection = () => {
  const faqs = [
    {
      question: "How natural does the AI voice agent sound?",
      answer: "Our AI voice agents use advanced natural language processing to create conversations that feel authentic and engaging. Most customers can't tell they're speaking with an AI, which leads to more honest feedback and a better experience."
    },
    {
      question: "Can I customize what questions the agent asks?",
      answer: "Absolutely! You can fully customize the questions your AI agent asks, the feedback metrics it collects, and even aspects of its personality to align with your brand. Our platform makes it easy to configure your perfect virtual representative."
    },
    {
      question: "How does the review collection process work?",
      answer: "After the AI agent calls your customer and receives positive feedback, it automatically sends a follow-up SMS with direct links to your preferred review platforms. This one-click approach dramatically increases review completion rates compared to traditional methods."
    },
    {
      question: "Do I need to integrate with my current scheduling system?",
      answer: "Yes, but we've made it simple. Sonora integrates with most popular scheduling systems including Calendly, Acuity, Mindbody, and more. Our team can help set up custom integrations if needed for your specific workflow."
    },
    {
      question: "What kind of analytics will I receive?",
      answer: "Our dashboard provides comprehensive analytics including customer satisfaction scores, sentiment analysis, review conversion rates, service-specific feedback, trend analysis over time, and actionable insights to improve your business operations."
    },
    {
      question: "Is there a limit to how many calls I can make?",
      answer: "Each pricing tier includes a specific number of monthly calls. You can always upgrade your plan as your business grows, or purchase additional call packs if you temporarily need more capacity."
    }
  ];

  return (
    <section id="faq" className="section">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Frequently Asked <span className="gradient-text">Questions</span>
          </h2>
          <p className="text-lg text-gray-600">
            Everything you need to know about Sonora and how it can transform your business
          </p>
        </div>
        
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="animate-fade-in backdrop-blur-sm bg-white/80 data-[state=open]:bg-gradient-to-r data-[state=open]:from-sonora-purple/5 data-[state=open]:to-sonora-blue/5 rounded-lg mb-4 border border-white/20 shadow-sm"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <AccordionTrigger className="px-6 hover:text-sonora-purple [&[data-state=open]>svg]:text-sonora-purple">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-6 text-gray-600">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
        
        <div className="mt-12 text-center animate-fade-in">
          <div className="relative p-8 rounded-2xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-sonora-purple/10 to-sonora-blue/10 blur-2xl"></div>
            <div className="relative bg-white/80 backdrop-blur-sm rounded-xl p-8 border border-white/20 shadow-lg">
              <p className="text-lg font-medium mb-4">
                Still have questions?
              </p>
              <a 
                href="#" 
                className="inline-flex items-center text-sonora-purple font-medium hover:text-sonora-deep-purple transition-colors"
              >
                Contact our team for answers
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
