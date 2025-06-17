import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const navHeight = 80; // Height of the fixed navigation
      const elementPosition = element.offsetTop - navHeight;
      
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
    setIsMenuOpen(false); // Close mobile menu after clicking
  };

  const navigateToPage = (path: string) => {
    navigate(path);
    setIsMenuOpen(false); // Close mobile menu after clicking
  };

  return (
    <nav className="fixed top-8 w-full z-40 bg-background/95 backdrop-blur-sm border-b border-white/10">
      <div className="container mx-auto px-4 lg:px-32">
        <div className="flex items-center justify-between h-20">
          {/* Left logo */}
          <div className="flex items-center flex-shrink-0">
            <button 
              onClick={() => navigateToPage('/')}
              className="cursor-pointer hover:opacity-80 transition-opacity"
            >
              <img 
                src="/lovable-uploads/logo.png" 
                alt="VOU Logo" 
                className="h-8 w-auto"
              />
            </button>
          </div>

          {/* Right menu items */}
          <div className="hidden lg:flex items-center space-x-12 ml-auto">
            <button 
              onClick={() => navigateToPage('/nuestro-equipo')}
              className="text-white hover:text-white/80 transition-colors cursor-pointer"
            >
              Nosotros
            </button>
            <button 
              onClick={() => navigateToPage('/servicios')}
              className="text-white hover:text-white/80 transition-colors cursor-pointer"
            >
              Servicios
            </button>
            <button 
              onClick={() => navigateToPage('/contacto')}
              className="bg-primary hover:bg-primary/90 text-black px-4 py-2 rounded-full transition-colors cursor-pointer font-medium"
            >
              Quiero asesoría
            </button>
          </div>

          <div className="lg:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </Button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-border">
            <div className="flex flex-col space-y-4">
              <button 
                onClick={() => navigateToPage('/nuestro-equipo')}
                className="text-white hover:text-white/80 transition-colors text-left"
              >
                Nosotros
              </button>
              <button 
                onClick={() => navigateToPage('/servicios')}
                className="text-white hover:text-white/80 transition-colors text-left"
              >
                Servicios
              </button>
              <button 
                onClick={() => navigateToPage('/contacto')}
                className="text-white hover:text-white/80 transition-colors text-left font-medium"
              >
                Quiero asesoría
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
