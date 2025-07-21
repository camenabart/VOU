import { Link } from "react-router-dom";

const Navigation = () => {

  return (
    <nav className="fixed top-8 w-full z-40 bg-background/95 backdrop-blur-sm border-b border-white/10">
      <div className="container mx-auto px-4 lg:px-32">
        <div className="flex items-center justify-between h-20">
          {/* Left logo */}
          <div className="flex items-center flex-shrink-0">
            <Link 
              to="/"
              className="cursor-pointer hover:opacity-80 transition-opacity"
            >
              <img 
                src="/lovable-uploads/VOU.png" 
                alt="VOU Logo" 
                className="h-12 w-auto"
              />
            </Link>
          </div>

          {/* Right menu items */}
          <div className="hidden lg:flex items-center ml-auto">
            <Link 
              to="/contacto"
              className="bg-primary hover:bg-primary/90 text-black px-4 py-2 rounded-full transition-colors cursor-pointer font-medium"
            >
              Quiero asesoría
            </Link>
          </div>

          <div className="lg:hidden">
            <Link 
              to="/contacto"
              className="bg-primary hover:bg-primary/90 text-black px-4 py-2 rounded-full transition-colors cursor-pointer font-medium"
            >
              Quiero asesoría
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
