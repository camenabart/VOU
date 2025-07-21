import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const FinalCTASection = () => {
  return (
    <section 
      className="py-16 bg-cover bg-center bg-no-repeat relative"
      style={{
        backgroundImage: "url(https://www.moov.cl/wp-content/uploads/sites/7/2022/09/cta-background.png)"
      }}
    >
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/50"></div>
      
      <div className="container mx-auto px-4 lg:px-8 h-full relative z-10">
        <div className="flex items-center justify-center h-full min-h-[150px]">
          <div className="flex flex-col lg:flex-row items-center gap-6 lg:gap-8 max-w-4xl mx-auto">
            <h2 className="text-xl lg:text-2xl font-medium text-white text-center lg:text-left">
              Estamos para asesorarte<br />y hacer crecer tu negocio
            </h2>
            <Link 
              to="/contacto"
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-primary to-primary/80 text-black font-medium rounded-full hover:scale-105 transition-transform duration-300 group flex-shrink-0"
            >
              <span>Me interesa</span>
              <ArrowRight 
                size={20} 
                className="transform group-hover:translate-x-1 transition-transform"
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection; 