
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';

const testimonials = [
  {
    quote: "Sonora has transformed how we gather customer feedback. Our Google review count has tripled since implementation!",
    author: "Sarah Johnson",
    role: "Owner, Luxe Salon",
    avatar: "/avatar1.png"
  },
  {
    quote: "The voice AI is remarkably natural. My clients actually enjoy the follow-up calls, and we're getting insights we never had before.",
    author: "Michael Chen",
    role: "Director, Wellness Center",
    avatar: "/avatar2.png"
  },
  {
    quote: "Our business has seen a 40% increase in positive online reviews, and the analytics dashboard has helped us identify key improvement areas.",
    author: "Priya Patel",
    role: "Manager, Dental Practice",
    avatar: "/avatar3.png"
  }
];

const TestimonialSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  
  // Auto-advance the testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 8000);
    
    return () => clearInterval(interval);
  }, [currentIndex]);
  
  const handleNext = () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    
    setTimeout(() => {
      setIsAnimating(false);
    }, 500);
  };
  
  const handlePrev = () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    
    setTimeout(() => {
      setIsAnimating(false);
    }, 500);
  };

  return (
    <section id="testimonials" className="section bg-gradient-to-br from-sonora-black to-sonora-black/90 text-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Loved by <span className="gradient-text">Business Owners</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            See what forward-thinking service businesses are saying about Sonora's impact on their customer experience and bottom line.
          </p>
        </div>
        
        <div className="relative max-w-4xl mx-auto px-4">
          {/* Large quote marks */}
          <div className="absolute top-0 left-0 text-sonora-purple/20 text-9xl leading-none font-serif -translate-x-4 -translate-y-8">
            &ldquo;
          </div>
          <div className="absolute bottom-0 right-0 text-sonora-purple/20 text-9xl leading-none font-serif translate-x-4 translate-y-8">
            &rdquo;
          </div>
          
          {/* Testimonial Card */}
          <div className="relative z-10 bg-white/5 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-xl border border-white/10">
            <div className="min-h-[200px] flex flex-col items-center">
              {testimonials.map((testimonial, index) => (
                <div 
                  key={index}
                  className={`transition-all duration-500 w-full text-center ${
                    index === currentIndex 
                      ? 'opacity-100 translate-x-0' 
                      : 'opacity-0 absolute translate-x-16'
                  }`}
                  style={{
                    display: index === currentIndex ? 'block' : 'none'
                  }}
                >
                  <p className="text-xl md:text-2xl mb-8 italic text-gray-100">
                    {testimonial.quote}
                  </p>
                  
                  <div className="flex flex-col items-center">
                    <div className="w-16 h-16 rounded-full bg-gray-300 mb-4"></div>
                    <div>
                      <p className="font-bold text-lg">{testimonial.author}</p>
                      <p className="text-sonora-purple">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Navigation dots */}
            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2.5 h-2.5 rounded-full ${
                    index === currentIndex ? 'bg-sonora-purple' : 'bg-white/30'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            
            {/* Navigation buttons */}
            <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 flex justify-between pointer-events-none">
              <Button
                variant="ghost"
                size="icon"
                className="text-white/70 hover:text-white hover:bg-white/10 pointer-events-auto"
                onClick={handlePrev}
                aria-label="Previous testimonial"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m15 18-6-6 6-6"/>
                </svg>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="text-white/70 hover:text-white hover:bg-white/10 pointer-events-auto"
                onClick={handleNext}
                aria-label="Next testimonial"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m9 18 6-6-6-6"/>
                </svg>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSlider;
