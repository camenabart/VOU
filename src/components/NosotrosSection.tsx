import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const NosotrosSection = () => {
  return (
    <section id="nosotros" className="py-40 bg-background relative">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent" />
      </div>
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Left column - Focused content */}
          <div className="animate-fade-in-up">
            <h2 className="title-section text-primary mb-8">
              Somos VOU
            </h2>
            <div className="space-y-6 text-foreground leading-relaxed">
              <p className="text-large opacity-90">
                <strong>VOU es la unidad de Moov Media Group especializada en performance digital.</strong>
              </p>
              <p className="text-base opacity-90">
                Aplicamos IA, automatización y datos para generar impacto tangible desde el primer día. 
                Nuestros agentes inteligentes verticales escalan soluciones con mayor velocidad y precisión.
              </p>
              
              {/* Key differentiators */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-6">
                <div className="flex items-center">
                  <div className="w-3 h-3 rounded-full bg-primary mr-3" />
                  <span className="text-base">Agentes IA especializados</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 rounded-full bg-primary mr-3" />
                  <span className="text-base">Automatización full-funnel</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 rounded-full bg-primary mr-3" />
                  <span className="text-base">Modelos predictivos</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 rounded-full bg-primary mr-3" />
                  <span className="text-base">Optimización continua</span>
                </div>
              </div>
              
              {/* Arrow link to team page */}
              <div className="pt-6">
                <Link 
                  to="/nuestro-equipo" 
                  className="inline-flex items-center gap-3 text-primary hover:text-primary/80 transition-all duration-300 group text-large font-medium"
                >
                  <span>Conócenos</span>
                  <ArrowRight 
                    size={24} 
                    className="transform group-hover:translate-x-2 transition-transform duration-300"
                  />
                </Link>
              </div>
            </div>
          </div>

          {/* Right column - Enhanced image */}
          <div className="flex justify-center lg:justify-end animate-fade-in-up">
            <div className="relative">
              <div className="glass-effect rounded-3xl p-3 shadow-2xl hover-lift">
                <img 
                  src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Team working"
                  className="rounded-2xl w-full h-96 object-cover"
                />
                {/* Floating elements */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-primary rounded-full animate-pulse" />
                <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-primary/60 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NosotrosSection;
