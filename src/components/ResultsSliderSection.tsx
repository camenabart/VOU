
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { ArrowRight } from "lucide-react";

const ResultsSliderSection = () => {
  const services = [
    {
      subtitle: "E-Content",
      description: "Mejoramos tu Contenido Gráfico",
      fullDescription: "El E-Content en performance marketing crea contenido digital altamente optimizado para atraer y convertir audiencias. Personalizamos la experiencia del usuario, maximizando el rendimiento y el engagement en cada interacción.",
      image: "/lovable-uploads/345b9d42-8bcd-49be-92cd-f25c13fa4d9f.png",
      gradient: "from-purple-600 to-blue-600"
    },
    {
      subtitle: "IA Conversacional",
      description: "Automatiza tu Atención al Cliente",
      fullDescription: "Agentes conversacionales que gestionan el funnel completo, automatizando captación, calificación y conversión de leads con integración omnicanal en WhatsApp, redes sociales y CRM.",
      image: "/lovable-uploads/47d81cc9-75d6-4a52-8902-e679c640d7ce.png",
      gradient: "from-green-600 to-teal-600"
    },
    {
      subtitle: "Automatización Inteligente",
      description: "Optimiza tus Procesos Digitales",
      fullDescription: "Journeys omnicanal automatizados con base en data del cliente. Conexión ágil entre herramientas de medios y martech para maximizar la eficiencia operativa.",
      image: "/lovable-uploads/4f9fac23-7bf0-4024-9467-9e599a950faf.png",
      gradient: "from-purple-600 to-pink-600"
    },
    {
      subtitle: "Creatividad Generativa",
      description: "Escala tu Producción Creativa",
      fullDescription: "Contenidos generados por IA con Director Creativo IA que alinea copys y visuales con métricas de negocio para producción iterativa multicanal.",
      image: "/lovable-uploads/58139b61-1437-47d1-a2c0-ba10b2fefbf5.png",
      gradient: "from-orange-600 to-red-600"
    }
  ];

  return (
    <section className="py-32 bg-black relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <Carousel className="w-full max-w-7xl mx-auto">
          <CarouselContent>
            {services.map((service, index) => (
              <CarouselItem key={index}>
                <Card className="bg-transparent border-none shadow-none overflow-hidden">
                  <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[600px]">
                    {/* Content Side - Left */}
                    <div className="space-y-8 text-white order-2 lg:order-1">
                      <div className="space-y-6">
                        <div className="space-y-4">
                          <h2 className="text-3xl lg:text-4xl font-semibold text-primary">
                            {service.subtitle}
                          </h2>
                          <h3 className="text-xl lg:text-2xl font-medium text-white/90">
                            {service.description}
                          </h3>
                        </div>
                        <p className="text-lg text-white/80 leading-relaxed max-w-lg">
                          {service.fullDescription}
                        </p>
                      </div>
                      
                      <div className="flex flex-col sm:flex-row gap-4">
                        <Button 
                          size="lg" 
                          className="bg-gradient-to-r from-primary to-primary/80 text-black font-semibold hover:scale-105 transition-transform duration-300"
                        >
                          Contratar
                        </Button>
                        <Button 
                          size="lg" 
                          variant="outline" 
                          className="border-white/30 text-white hover:bg-white/10 group"
                        >
                          Conocer Más
                          <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                        </Button>
                      </div>
                    </div>
                    
                    {/* Image Side - Right */}
                    <div className="relative order-1 lg:order-2">
                      <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/20 p-8">
                        <div className="absolute inset-0 bg-gradient-to-br from-transparent to-black/20" />
                        <img 
                          src={service.image} 
                          alt={service.subtitle}
                          className="w-full h-auto object-cover rounded-lg relative z-10"
                        />
                        {/* Decorative elements */}
                        <div className="absolute top-4 right-4 w-8 h-8 bg-primary rounded-full animate-pulse" />
                        <div className="absolute bottom-4 left-4 w-12 h-12 bg-blue-500/30 rounded-full blur-md" />
                      </div>
                    </div>
                  </div>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          
          <div className="flex justify-center mt-8 gap-4">
            <CarouselPrevious className="relative translate-x-0 translate-y-0 bg-white/10 border-white/20 text-white hover:bg-white/20" />
            <CarouselNext className="relative translate-x-0 translate-y-0 bg-white/10 border-white/20 text-white hover:bg-white/20" />
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export default ResultsSliderSection;
