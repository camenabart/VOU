import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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

  return (
    <nav className="fixed top-0 w-full z-50 bg-background/95 backdrop-blur-sm">
      <div className="container mx-auto px-4 lg:px-32">
        <div className="flex items-center justify-between h-20">
          {/* Left menu items */}
          <div className="hidden lg:flex items-center space-x-16 flex-1 justify-center">
            <button 
              onClick={() => scrollToSection('nosotros')}
              className="text-white hover:text-white/80 transition-colors cursor-pointer"
            >
              Nosotros
            </button>
            <button 
              onClick={() => scrollToSection('resultados')}
              className="text-white hover:text-white/80 transition-colors cursor-pointer"
            >
              Resultados
            </button>
          </div>

          {/* Center logo */}
          <div className="flex items-center justify-center flex-shrink-0">
            <img 
              src="/lovable-uploads/7f634f2f-6185-4afb-88d3-fed919990075.png" 
              alt="VOU Logo" 
              className="h-8 w-auto"
            />
          </div>

          {/* Right menu items */}
          <div className="hidden lg:flex items-center space-x-16 flex-1 justify-center">
            <button 
              onClick={() => scrollToSection('servicios')}
              className="text-white hover:text-white/80 transition-colors cursor-pointer"
            >
              Servicios
            </button>
            <button 
              onClick={() => scrollToSection('contacto')}
              className="text-white hover:text-white/80 transition-colors cursor-pointer"
            >
              Contacto
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
                onClick={() => scrollToSection('nosotros')}
                className="text-white hover:text-white/80 transition-colors text-left"
              >
                Nosotros
              </button>
              <button 
                onClick={() => scrollToSection('resultados')}
                className="text-white hover:text-white/80 transition-colors text-left"
              >
                Resultados
              </button>
              <button 
                onClick={() => scrollToSection('servicios')}
                className="text-white hover:text-white/80 transition-colors text-left"
              >
                Servicios
              </button>
              <button 
                onClick={() => scrollToSection('contacto')}
                className="text-white hover:text-white/80 transition-colors text-left"
              >
                Contacto
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
