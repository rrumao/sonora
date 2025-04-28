import HeroSection from "@/components/sections/hero-section"
import FeaturesSection from "@/components/sections/features-section"
import HowItWorksSection from "@/components/sections/how-it-works-section"
import AboutSection from "@/components/sections/about-section"
import PricingSection from "@/components/sections/pricing-section"
import FaqSection from "@/components/sections/faq-section"
import CtaSection from "@/components/sections/cta-section"

export default function Home() {
  return (
    <>
      <HeroSection />
      <FeaturesSection />
      <HowItWorksSection />
      <AboutSection />
      <PricingSection />
      <FaqSection />
      <CtaSection />
    </>
  )
}
