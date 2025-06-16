import { TrendingUp, Target, Users, Zap, ArrowRight } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";

const ResultsSection = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleVerMasCasos = () => {
    if (location.pathname === '/resultados') {
      // Si ya estamos en la página de resultados, hacer scroll al header
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    } else {
      // Si estamos en otra página, navegar a resultados
      navigate('/resultados');
    }
  };
  
  const metrics = [
    {
      icon: TrendingUp,
      value: "340%",
      label: "Incremento promedio en ROAS",
      color: "from-green-500/20 to-emerald-500/20"
    },
    {
      icon: Target,
      value: "87%",
      label: "Reducción en CPA",
      color: "from-blue-500/20 to-cyan-500/20"
    },
    {
      icon: Zap,
      value: "95%",
      label: "Automatización de procesos",
      color: "from-purple-500/20 to-pink-500/20"
    },
    {
      icon: Users,
      value: "75%",
      label: "Mejora en conversión",
      color: "from-yellow-500/20 to-orange-500/20"
    }
  ];

  return (
    <section id="resultados" className="py-20 pb-8 bg-black relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary/5 to-transparent" />
      </div>
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="text-center mb-20 animate-fade-in-up">
          <h2 className="text-3xl font-medium mb-8" data-aos="fade-up">
            <span className="text-foreground">Resultados reales</span> <span className="text-primary">para tu negocio</span>
          </h2>
          <p className="text-large text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Aplicamos IA, automatización y datos para generar impacto tangible desde el primer día
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16 stagger-animation" data-aos="fade-up">
          {metrics.map((metric, index) => (
            <div 
              key={index} 
              className="text-center group animate-fade-in-up"
            >
              <metric.icon className="w-12 h-12 text-primary mx-auto mb-6 group-hover:scale-110 transition-transform duration-300" />
              <div className="text-4xl lg:text-5xl font-medium text-primary mb-2 group-hover:scale-105 transition-transform duration-300">
                {metric.value}
              </div>
              <h3 className="subtitle font-medium">
                {metric.label}
              </h3>
            </div>
          ))}
        </div>

        {/* Ver más button */}
        <div className="text-center mb-32" data-aos="fade-up">
          <button 
            onClick={() => navigate('/resultados')}
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-primary to-primary/80 text-black font-medium rounded-full hover:scale-105 transition-transform duration-300 group"
          >
            <span>Ver más casos de estudio</span>
            <ArrowRight 
              size={20} 
              className="transform group-hover:translate-x-1 transition-transform"
            />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ResultsSection;
