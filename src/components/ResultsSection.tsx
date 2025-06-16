import { TrendingUp, Target, Users, Zap } from "lucide-react";

const ResultsSection = () => {
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
    <section id="resultados" className="py-32 bg-black relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary/5 to-transparent" />
      </div>
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="text-center mb-20 animate-fade-in-up">
          <h2 className="title-section mb-8" data-aos="fade-up">
            <span className="text-foreground">Resultados reales</span> <span className="text-primary">para tu negocio</span>
          </h2>
          <p className="text-large text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Aplicamos IA, automatización y datos para generar impacto tangible desde el primer día
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-32 stagger-animation" data-aos="fade-up">
          {metrics.map((metric, index) => (
            <div 
              key={index} 
              className="text-center group animate-fade-in-up"
            >
              <metric.icon className="w-12 h-12 text-primary mx-auto mb-6 group-hover:scale-110 transition-transform duration-300" />
              <div className="text-4xl lg:text-5xl font-bold text-primary mb-2 group-hover:scale-105 transition-transform duration-300">
                {metric.value}
              </div>
              <h3 className="subtitle font-semibold">
                {metric.label}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResultsSection;
