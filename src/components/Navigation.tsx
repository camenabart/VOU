import { useNavigate } from "react-router-dom";

const Navigation = () => {
  const navigate = useNavigate();

  const navigateToPage = (path: string) => {
    navigate(path);
    // Asegurar que vaya al header de la página
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 200);
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
                src="/lovable-uploads/VOU.png" 
                alt="VOU Logo" 
                className="h-12 w-auto"
              />
            </button>
          </div>

          {/* Right menu items */}
          <div className="hidden lg:flex items-center ml-auto">
            <button 
              onClick={() => navigateToPage('/contacto')}
              className="bg-primary hover:bg-primary/90 text-black px-4 py-2 rounded-full transition-colors cursor-pointer font-medium"
            >
              Quiero asesoría
            </button>
          </div>

          <div className="lg:hidden">
            <button 
              onClick={() => navigateToPage('/contacto')}
              className="bg-primary hover:bg-primary/90 text-black px-4 py-2 rounded-full transition-colors cursor-pointer font-medium"
            >
              Quiero asesoría
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
