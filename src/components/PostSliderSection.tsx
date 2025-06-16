import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const PostSliderSection = () => {
  const segments = [
    {
      title: "B2C & eCommerce",
      description: "Marcas que necesitan escalar performance con eficiencia",
      industries: ["Consumo masivo", "Retail", "Educación", "Salud"],
      icon: "🛒",
      results: "340% incremento promedio en ROAS"
    },
    {
      title: "B2B & SaaS",
      description: "Empresas con funnels comerciales activos y ticket medio-alto",
      industries: ["SaaS", "Servicios financieros", "Tecnología"],
      icon: "💼",
      results: "87% reducción en CAC promedio"
    },
    {
      title: "Startups en Crecimiento",
      description: "Empresas DTC con alto potencial de escalabilidad digital",
      industries: ["DTC", "Marketplace", "Apps", "Servicios digitales"],
      icon: "🚀",
      results: "95% automatización de procesos"
    }
  ];

  return (
    <section className="py-32 bg-black relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary/5 to-transparent" />
      </div>
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="mb-20">
          <h3 className="title-card text-center mb-16 animate-fade-in-up" data-aos="fade-up">¿Para Quién Trabajamos?</h3>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 stagger-animation">
            {segments.map((segment, index) => (
              <Card 
                key={index} 
                className="glass-effect border border-white/10 hover-lift group animate-fade-in-up"
              >
                <CardHeader className="relative">
                  <div className="flex items-center justify-between mb-6">
                    <span className="px-4 py-2 rounded-full bg-primary/20 text-primary font-medium border border-primary/30 text-small">
                      {segment.title}
                    </span>
                    <div className="text-3xl">{segment.icon}</div>
                  </div>
                  <CardTitle className="subtitle group-hover:text-primary transition-colors duration-300">
                    {segment.description}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="mb-8">
                    <div className="flex flex-wrap gap-2 mb-6">
                      {segment.industries.map((industry, industryIndex) => (
                        <span 
                          key={industryIndex} 
                          className="px-3 py-1 rounded-lg glass-effect text-muted-foreground border border-white/10 text-small hover:text-primary transition-colors"
                        >
                          {industry}
                        </span>
                      ))}
                    </div>
                    <div className="p-4 rounded-lg bg-primary/10 border border-primary/20">
                      <p className="text-base text-primary font-medium">{segment.results}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="py-16 animate-scale-in" data-aos="fade-up">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Video container - lado izquierdo */}
            <div className="order-2 lg:order-1">
              <div className="relative aspect-[9/16] max-w-sm mx-auto rounded-2xl overflow-hidden bg-black">
                <iframe
                  src="https://www.youtube.com/embed/-Y9xBaVfzsk?autoplay=1&mute=1&loop=1&playlist=-Y9xBaVfzsk"
                  title="Escalando con IA"
                  className="w-full h-full"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>

            {/* Contenido de texto - lado derecho */}
            <div className="order-1 lg:order-2 text-center lg:text-left">
              <h3 className="title-card mb-6 text-primary text-4xl" data-aos="fade-up">¿Listo para escalar con ia?</h3>
              <p className="text-large text-muted-foreground mb-10 leading-relaxed">
                Descubre cómo VOU puede transformar tu performance digital con soluciones inteligentes
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PostSliderSection;
