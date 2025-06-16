import Navigation from "@/components/Navigation";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const NuestroEquipo = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <section className="pt-32 pb-24">
        <div className="container mx-auto px-4 lg:px-8">
          {/* Back arrow */}
          <div className="mb-12">
            <Link 
              to="/" 
              className="inline-flex items-center gap-3 text-primary hover:text-primary/80 transition-colors group"
            >
              <ArrowLeft 
                size={20} 
                className="transform group-hover:-translate-x-1 transition-transform"
              />
              <span>Volver</span>
            </Link>
          </div>

          {/* Page title */}
          <h3 className="mb-16 tracking-wider text-center text-primary">
            NUESTRO EQUIPO
          </h3>

          {/* Team content */}
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-foreground leading-relaxed">
                Conoce al equipo de expertos que impulsa VOU y hace posible 
                las soluciones de performance digital más innovadoras del mercado.
              </p>
            </div>

            {/* Team grid placeholder */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3, 4, 5, 6].map((member) => (
                <div key={member} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center">
                  <div className="w-24 h-24 bg-primary/20 rounded-full mx-auto mb-4"></div>
                  <h3 className="text-lg font-medium text-foreground mb-2">Miembro del Equipo {member}</h3>
                  <p className="text-primary">Especialista en Performance Digital</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NuestroEquipo;
