
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';
import { cn } from '@/lib/utils';

const PricingPlans = () => {
  const [isAnnual, setIsAnnual] = useState(true);

  const plans = [
    {
      name: "Starter",
      price: isAnnual ? 99 : 129,
      period: "month",
      description: "Perfect for small businesses just getting started",
      features: [
        "AI voice follow-up calls",
        "100 calls per month",
        "Review collection via SMS",
        "Basic analytics dashboard",
        "Email support"
      ],
      highlighted: false,
      delay: 0
    },
    {
      name: "Growth",
      price: isAnnual ? 199 : 249,
      period: "month",
      description: "Ideal for growing businesses looking to scale",
      features: [
        "Everything in Starter",
        "500 calls per month",
        "Appointment management",
        "Advanced analytics & reporting",
        "Custom voice agent configuration",
        "Priority email support"
      ],
      highlighted: true,
      delay: 100
    },
    {
      name: "Business",
      price: isAnnual ? 349 : 399,
      period: "month",
      description: "For established businesses with multiple locations",
      features: [
        "Everything in Growth",
        "1500 calls per month",
        "Multiple location support",
        "White-labeled agent voice",
        "API access",
        "Dedicated account manager",
        "Phone & email support"
      ],
      highlighted: false,
      delay: 200
    }
  ];

  return (
    <section id="pricing" className="section">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Simple, <span className="gradient-text">Transparent Pricing</span>
          </h2>
          <p className="text-lg text-gray-600">
            Flexible plans that grow with your business, with no hidden fees
          </p>
          
          {/* Billing toggle */}
          <div className="flex items-center justify-center mt-8">
            <span className={`mr-3 ${isAnnual ? 'text-gray-900' : 'text-gray-500'}`}>Annual Billing</span>
            <button 
              onClick={() => setIsAnnual(!isAnnual)}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring ${isAnnual ? 'bg-sonora-purple' : 'bg-gray-300'}`}
              role="switch"
              aria-checked={!isAnnual}
            >
              <span 
                className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow-lg ring-0 transition-transform ${isAnnual ? 'translate-x-0' : 'translate-x-5'}`}
              />
            </button>
            <span className={`ml-3 ${!isAnnual ? 'text-gray-900' : 'text-gray-500'}`}>Monthly Billing</span>
          </div>
          {isAnnual && (
            <p className="mt-2 text-sm text-sonora-purple font-medium">Save 20% with annual billing</p>
          )}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={cn(
                "relative rounded-2xl p-8 transition-all duration-300 animate-fade-in",
                plan.highlighted 
                  ? "bg-gradient-to-b from-sonora-black to-sonora-black/90 text-white border-0 shadow-lg transform hover:-translate-y-1" 
                  : "bg-white border border-gray-100 hover:shadow-xl"
              )}
              style={{ animationDelay: `${plan.delay}ms` }}
            >
              {plan.highlighted && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-sonora-purple text-white text-sm font-medium px-4 py-1 rounded-full">
                  Most Popular
                </div>
              )}
              
              <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
              
              <div className="mb-6">
                <span className="text-4xl font-bold">${plan.price}</span>
                <span className={plan.highlighted ? "text-gray-300" : "text-gray-500"}>/{plan.period}</span>
                <p className={`mt-2 ${plan.highlighted ? "text-gray-300" : "text-gray-500"}`}>
                  {plan.description}
                </p>
              </div>
              
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start">
                    <Check 
                      className={cn(
                        "h-5 w-5 mr-2 mt-0.5",
                        plan.highlighted ? "text-sonora-purple" : "text-sonora-purple"
                      )}
                    />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              
              <Button 
                className={cn(
                  "w-full py-6",
                  plan.highlighted 
                    ? "bg-white text-sonora-black hover:bg-gray-100" 
                    : "bg-sonora-purple text-white hover:bg-sonora-deep-purple"
                )}
              >
                Get Started
              </Button>
            </div>
          ))}
        </div>
        
        <p className="text-center mt-12 text-gray-500 text-sm">
          Need a custom solution? <a href="#" className="text-sonora-purple underline">Contact us</a> for enterprise pricing.
        </p>
      </div>
    </section>
  );
};

export default PricingPlans;
