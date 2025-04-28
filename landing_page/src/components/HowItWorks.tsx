
import { useEffect, useRef, useState } from 'react';

const HowItWorks = () => {
  const [activeStep, setActiveStep] = useState(0);
  const stepRefs = useRef<Array<HTMLDivElement | null>>([]);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = Number(entry.target.getAttribute('data-index'));
          if (entry.isIntersecting) {
            setActiveStep(index);
          }
        });
      },
      { threshold: 0.6 }
    );
    
    stepRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });
    
    return () => {
      stepRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  const steps = [
    {
      title: "Easy Setup",
      description: "Tell us about your business, customize your feedback questions, and let us train an AI voice that represents your brand. We handle all the technical details while you focus on your business.",
    },
    {
      title: "Automated Feedback Collection",
      description: "After each customer interaction, our AI voice agent makes a friendly call to gather feedback. The conversation feels natural and respects your customer's time while collecting valuable insights specific to your business needs.",
    },
    {
      title: "Smart Review Management",
      description: "Satisfied customers receive their feedback as a ready-to-post review via text message. With just one click, they can share their experience on Google, Yelp, or other platforms. Plus, you get detailed analytics and insights to help grow your business.",
    },
  ];

  return (
    <section id="how-it-works" className="section bg-gradient-to-b from-background to-sonora-light-purple/10">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            How <span className="gradient-text">Sonora Works</span>
          </h2>
          <p className="text-lg text-gray-600">
            A seamless three-step process that transforms how you engage with customers
            and collect valuable feedback without adding to your workload.
          </p>
        </div>
        
        <div className="relative">
          {/* Progress line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-0.5 bg-gray-200 hidden md:block"></div>
          
          {/* Steps */}
          {steps.map((step, index) => (
            <div
              key={index}
              ref={(el) => (stepRefs.current[index] = el)}
              data-index={index}
              className={`relative flex flex-col md:flex-row items-center mb-24 last:mb-0 ${
                index % 2 !== 0 ? 'md:flex-row-reverse' : ''
              } animate-fade-in`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              {/* Step number */}
              <div className="absolute left-1/2 md:left-auto transform -translate-x-1/2 md:translate-x-0 top-0 md:top-1/2 md:-translate-y-1/2 z-10 hidden md:block">
                <div className={`flex items-center justify-center w-12 h-12 rounded-full border-2 font-bold transition-all duration-300 ${
                  activeStep >= index 
                    ? 'bg-sonora-purple text-white border-sonora-purple' 
                    : 'bg-white text-gray-500 border-gray-300'
                }`}>
                  {index + 1}
                </div>
              </div>
              
              {/* Content */}
              <div className="w-full p-8">
                <div className="md:hidden flex items-center mb-4">
                  <div className={`flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full border-2 font-bold mr-3 ${
                    activeStep >= index 
                      ? 'bg-sonora-purple text-white border-sonora-purple' 
                      : 'bg-white text-gray-500 border-gray-300'
                  }`}>
                    {index + 1}
                  </div>
                  <h3 className="text-xl font-bold">{step.title}</h3>
                </div>
                <div className="glass-card p-8">
                  <h3 className="hidden md:block text-2xl font-bold mb-4">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
