
import { Button } from '@/components/ui/button';
import { ArrowRight, MessageSquare, Star, BarChart3 } from 'lucide-react';

const HeroSection = () => {
  return (
    <section 
      className="relative min-h-[90vh] pt-32 pb-16 overflow-hidden bg-gradient-to-br from-background via-background to-sonora-light-purple/10"
    >
      {/* Abstract Shapes */}
      <div className="absolute top-0 right-0 w-[40vw] h-[40vw] bg-gradient-to-br from-sonora-purple/20 to-sonora-blue/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[30vw] h-[30vw] bg-gradient-to-tr from-sonora-blue/10 to-sonora-purple/10 rounded-full blur-3xl" />
      
      {/* Content Container */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
          
          {/* Text Content */}
          <div className="w-full lg:w-1/2 space-y-8 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              <span className="gradient-text">Turn Customer Experience Into Growth</span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-700 max-w-xl">
              Let our AI voice agents automatically collect feedback and boost your online reviews. Perfect for service-based businesses looking to grow their digital presence effortlessly.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-sonora-purple hover:bg-sonora-deep-purple text-lg px-8 py-6 rounded-xl shadow-lg shadow-sonora-purple/20 transition-all hover:shadow-xl hover:shadow-sonora-purple/30"
              >
                Get Early Access
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
            
            <div className="pt-4">
              <p className="text-sm text-gray-500">Why businesses love Sonora:</p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4">
                <div className="flex items-start space-x-2 p-4 bg-white/50 rounded-lg">
                  <MessageSquare className="h-6 w-6 text-sonora-purple shrink-0" />
                  <div>
                    <h3 className="font-medium">AI-Powered Calls</h3>
                    <p className="text-sm text-gray-600">Natural conversations that gather meaningful feedback</p>
                  </div>
                </div>
                <div className="flex items-start space-x-2 p-4 bg-white/50 rounded-lg">
                  <Star className="h-6 w-6 text-sonora-purple shrink-0" />
                  <div>
                    <h3 className="font-medium">One-Click Reviews</h3>
                    <p className="text-sm text-gray-600">Effortless review posting to Google & Yelp</p>
                  </div>
                </div>
                <div className="flex items-start space-x-2 p-4 bg-white/50 rounded-lg">
                  <BarChart3 className="h-6 w-6 text-sonora-purple shrink-0" />
                  <div>
                    <h3 className="font-medium">Custom Analytics</h3>
                    <p className="text-sm text-gray-600">Tailored insights for your business</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Visual Content */}
          <div className="w-full lg:w-1/2 relative animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-sonora-purple/20 to-sonora-blue/20 rounded-2xl blur-2xl transform -rotate-3 scale-105"></div>
              <div className="relative bg-white/80 backdrop-blur-sm border border-white/50 rounded-2xl shadow-2xl p-6 animate-float">
                <div className="space-y-6">
                  <div className="flex items-start space-x-4 p-4 bg-sonora-purple/5 rounded-lg border border-sonora-purple/10">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-sonora-purple to-sonora-blue flex items-center justify-center text-white font-bold">1</div>
                    <div>
                      <h3 className="font-medium mb-1">AI Voice Call</h3>
                      <p className="text-sm text-gray-600">Our AI agent calls your customer post-service for feedback</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4 p-4 bg-sonora-blue/5 rounded-lg border border-sonora-blue/10">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-sonora-blue to-sonora-light-purple flex items-center justify-center text-white font-bold">2</div>
                    <div>
                      <h3 className="font-medium mb-1">Smart Review Collection</h3>
                      <p className="text-sm text-gray-600">Customer receives a text with their feedback ready to post</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4 p-4 bg-sonora-light-purple/5 rounded-lg border border-sonora-light-purple/10">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-sonora-light-purple to-sonora-purple flex items-center justify-center text-white font-bold">3</div>
                    <div>
                      <h3 className="font-medium mb-1">Business Insights</h3>
                      <p className="text-sm text-gray-600">You get actionable feedback and analytics</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
