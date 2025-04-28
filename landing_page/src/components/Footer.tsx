
import { Button } from '@/components/ui/button';
import { Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-sonora-black text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <a href="/" className="inline-block">
              <h2 className="text-3xl font-bold gradient-text mb-4">Sonora</h2>
            </a>
            <p className="text-gray-400 mb-6 max-w-md">
              AI voice agents that engage your customers, gather feedback, 
              boost reviews, and unlock powerful insights for your service business.
            </p>
            <div className="flex items-center mb-6">
              <div className="flex items-center justify-center h-10 w-10 rounded-full bg-white/10 mr-2">
                <Mail className="h-5 w-5" />
              </div>
              <div>
                <a href="mailto:info@sonora.ai" className="hover:text-sonora-purple">
                  info@sonora.ai
                </a>
              </div>
            </div>
          </div>
          
          {/* Quick links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Product</h3>
            <ul className="space-y-3">
              <li><a href="#features" className="text-gray-400 hover:text-white transition-colors">Features</a></li>
              <li><a href="#how-it-works" className="text-gray-400 hover:text-white transition-colors">How It Works</a></li>
              <li><a href="#pricing" className="text-gray-400 hover:text-white transition-colors">Pricing</a></li>
              <li><a href="#faq" className="text-gray-400 hover:text-white transition-colors">FAQ</a></li>
            </ul>
          </div>
          
          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-bold mb-4">Stay Updated</h3>
            <p className="text-gray-400 mb-4">Get the latest news and updates</p>
            <div className="flex flex-col sm:flex-row gap-2">
              <input 
                type="email" 
                placeholder="Your email" 
                className="px-4 py-2 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-sonora-purple"
              />
              <Button className="bg-sonora-purple hover:bg-sonora-deep-purple">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
        
        {/* Bottom section */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 mb-4 md:mb-0">
            © {currentYear} Sonora. All rights reserved.
          </div>
          
          <div className="flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">Terms</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
