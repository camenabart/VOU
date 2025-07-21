import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const NosotrosSection = () => {
  return (
    <section id="nosotros" className="pt-20 pb-40 bg-background relative">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent" />
      </div>
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Left column - Logo section */}
          <div className="animate-fade-in-up">
            <p className="text-2xl text-primary mb-6 font-medium">Somos</p>
            <img 
              src="/lovable-uploads/VOU.png" 
              alt="VOU Logo" 
              className="w-full max-w-xs h-auto object-contain"
            />
          </div>

          {/* Right column - Description */}
          <div className="animate-fade-in-up">
            <div className="space-y-6 text-foreground leading-relaxed">
              <p className="text-sm opacity-90">
                VOU es la unidad especializada en performance digital y en soluciones de medios potenciadas por datos e Inteligencia Artificial de Moov Media Group.
              </p>
              <p className="text-sm opacity-90">
                Con un enfoque full-funnel y data-driven, VOU aplica modelos predictivos, automatización y agentes inteligentes verticales para escalar resultados con precisión y eficiencia. La IA está integrada transversalmente en todas las soluciones de medios, potenciando su efectividad, automatización y capacidad de adaptación en tiempo real.
              </p>
            </div>
            
            <p className="mt-8">
              <a 
                href="https://moovmediagroup.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary hover:text-primary/80 transition-colors font-medium text-sm"
              >
                Conoce sobre Moov Media Group &gt;
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NosotrosSection;
