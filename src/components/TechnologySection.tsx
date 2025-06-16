
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Bot, BarChart3, Workflow } from "lucide-react";

const TechnologySection = () => {
  const capabilities = [
    {
      icon: Bot,
      title: "Agentes IA Verticales",
      description: "IA especializada en medios que permite escalar con mayor velocidad y precisión",
      metrics: ["Especialización vertical", "Escalabilidad inteligente", "Precisión optimizada"],
      color: "from-blue-500/10 to-cyan-500/10"
    },
    {
      icon: BarChart3,
      title: "Ecosistema Data Marketing",
      description: "GA4, CRM, CDP, dashboards y data lakes para decisiones inteligentes",
      metrics: ["ROI visualizado", "Atribución completa", "Incrementabilidad medible"],
      color: "from-green-500/10 to-emerald-500/10"
    },
    {
      icon: Workflow,
      title: "Automatización Full-Funnel",
      description: "Journeys omnicanal con agentes especializados en captación y conversión",
      metrics: ["Gestión unificada", "Optimización continua", "Performance escalable"],
      color: "from-purple-500/10 to-pink-500/10"
    }
  ];

  return (
    <section id="tecnologia" className="py-40 bg-background relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      </div>
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="text-center mb-20 animate-fade-in-up">
          <h2 className="title-section mb-8">
            <span className="text-primary">Tecnología</span> de Vanguardia
          </h2>
          <p className="text-large text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Combinamos automatización, datos y tecnología para transformar el rendimiento en resultados reales
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mb-20 stagger-animation">
          {capabilities.map((capability, index) => (
            <Card 
              key={index} 
              className="glass-effect border border-white/10 hover-lift group animate-fade-in-up overflow-hidden"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${capability.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
              <CardContent className="p-10 relative z-10">
                <div className="flex items-center mb-8">
                  <div className="w-16 h-16 rounded-xl bg-primary flex items-center justify-center mr-6 group-hover:scale-110 transition-transform duration-300">
                    <capability.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <h3 className="title-card group-hover:text-primary transition-colors duration-300">
                    {capability.title}
                  </h3>
                </div>
                <p className="text-base text-muted-foreground mb-8 leading-relaxed">
                  {capability.description}
                </p>
                <div className="space-y-4">
                  {capability.metrics.map((metric, metricIndex) => (
                    <div key={metricIndex} className="flex items-center group/metric">
                      <div className="w-3 h-3 rounded-full bg-primary mr-4 group-hover/metric:scale-125 transition-transform" />
                      <span className="text-base text-foreground">{metric}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center glass-effect rounded-3xl p-16 animate-scale-in">
          <div className="max-w-4xl mx-auto">
            <h3 className="title-card mb-6">¿Listo para Escalar con IA?</h3>
            <p className="text-base text-muted-foreground mb-10 leading-relaxed">
              Ejecutamos con agilidad, optimizamos con tecnología y escalamos resultados 
              con soluciones inteligentes.
            </p>
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 text-large px-8 py-4 hover-lift">
              Solicitar Demo
              <ArrowRight className="ml-3" size={24} />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnologySection;
