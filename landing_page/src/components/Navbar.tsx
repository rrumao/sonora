import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/80 backdrop-blur-lg shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <a href="/" className="text-2xl font-heading font-bold gradient-text">
              Sonora
            </a>
          </div>
          
          <nav className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-sm font-medium hover:text-sonora-purple transition-colors">
              Features
            </a>
            <a href="#how-it-works" className="text-sm font-medium hover:text-sonora-purple transition-colors">
              How It Works
            </a>
            <a href="#pricing" className="text-sm font-medium hover:text-sonora-purple transition-colors">
              Pricing
            </a>
          </nav>
          
          <div className="hidden md:flex items-center">
            <Button 
              className="bg-sonora-purple hover:bg-sonora-deep-purple text-white font-medium"
            >
              Request Early Access
            </Button>
          </div>
          
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>
        
        {isMenuOpen && (
          <div className="md:hidden py-4 bg-white/95 backdrop-blur-lg">
            <div className="flex flex-col space-y-4">
              <a href="#features" className="px-4 py-2 text-sm font-medium hover:bg-muted rounded-md">
                Features
              </a>
              <a href="#how-it-works" className="px-4 py-2 text-sm font-medium hover:bg-muted rounded-md">
                How It Works
              </a>
              <a href="#pricing" className="px-4 py-2 text-sm font-medium hover:bg-muted rounded-md">
                Pricing
              </a>
              <div className="pt-4 px-4">
                <Button className="w-full bg-sonora-purple hover:bg-sonora-deep-purple">
                  Request Early Access
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
