import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { ArrowRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const PerformanceCarousel = () => {
  const [api, setApi] = useState<any>();
  const [current, setCurrent] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const autoplayRef = useRef<NodeJS.Timeout>();

  const performanceServices = [
    {
      title: "Performance Potenciado por Datos",
      description: "Implementamos ecosistemas de data marketing con modelos predictivos y dashboards personalizados para optimización automática y continua.",
      features: ["GA4, CRM, CDP", "Modelos predictivos", "ROI visualizado"],
      image: "/lovable-uploads/perfomance.png",
      gradient: "from-blue-600 to-cyan-600"
    },
    {
      title: "IA Conversacional",
      description: "Agentes conversacionales que gestionan el funnel completo, automatizando captación, calificación y conversión de leads con integración omnicanal.",
      features: ["WhatsApp, redes sociales", "Integración CRM", "Gestión omnicanal"],
      image: "/lovable-uploads/google-assistant.png",
      gradient: "from-green-600 to-teal-600"
    },
    {
      title: "Automatización Inteligente",
      description: "Journeys omnicanal automatizados con base en data del cliente. Conexión ágil entre herramientas de medios y martech.",
      features: ["Journeys automatizados", "Integración tecnológica", "Stacks complejos"],
      image: "/lovable-uploads/4f9fac23-7bf0-4024-9467-9e599a950faf.png",
      gradient: "from-purple-600 to-pink-600"
    },
    {
      title: "Creatividad Generativa",
      description: "Contenidos generados por IA con Director Creativo IA que alinea copys y visuales con métricas de negocio para producción iterativa.",
      features: ["Contenido multicanal", "Director Creativo IA", "Producción iterativa"],
      image: "/lovable-uploads/58139b61-1437-47d1-a2c0-ba10b2fefbf5.png",
      gradient: "from-orange-600 to-red-600"
    }
  ];

  useEffect(() => {
    if (!api) return;

    const startAutoplay = () => {
      if (autoplayRef.current) {
        clearInterval(autoplayRef.current);
      }
      
      autoplayRef.current = setInterval(() => {
        if (!isHovered) {
          api.scrollNext();
        }
      }, 4000);
    };

    const stopAutoplay = () => {
      if (autoplayRef.current) {
        clearInterval(autoplayRef.current);
      }
    };

    // Start autoplay
    startAutoplay();

    // Update current slide
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });

    // Restart autoplay when not hovered
    if (!isHovered) {
      startAutoplay();
    } else {
      stopAutoplay();
    }

    return () => {
      stopAutoplay();
    };
  }, [api, isHovered]);

  return (
    <section className="py-16 bg-black relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <Carousel 
          className="w-full max-w-5xl mx-auto"
          setApi={setApi}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <CarouselContent>
            {performanceServices.map((service, index) => (
              <CarouselItem key={index} data-aos="fade-up">
                <Card className="bg-transparent border-none shadow-none overflow-hidden">
                  <div className="grid lg:grid-cols-2 gap-8 items-center min-h-[500px]">
                    {/* Content Side - Left */}
                    <div className="space-y-6 text-white order-2 lg:order-1">
                      <div className="space-y-4">
                        <div className="space-y-3">
                          <h2 className="text-2xl lg:text-3xl font-semibold text-primary">
                            {service.title}
                          </h2>
                        </div>
                        <p className="text-base text-white/80 leading-relaxed max-w-md">
                          {service.description}
                        </p>
                        
                        {/* Features list */}
                        <div className="space-y-3">
                          {service.features.map((feature, featureIndex) => (
                            <div key={featureIndex} className="flex items-center">
                              <div className="w-2 h-2 rounded-full bg-primary mr-4" />
                              <span className="text-white/90 font-medium">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      <div className="flex flex-col sm:flex-row gap-4">
                        <Button 
                          size="lg" 
                          className="bg-gradient-to-r from-primary to-primary/80 text-black font-semibold hover:scale-105 transition-transform duration-300"
                        >
                          Contratar
                        </Button>
                      </div>
                    </div>
                    
                    {/* Image Side - Right */}
                    <div className="relative order-1 lg:order-2 flex justify-center items-center">
                      {service.title === 'Performance Potenciado por Datos' ? (
                        <img 
                          src={service.image} 
                          alt={service.title}
                          className="max-w-[250px] w-full h-auto object-contain rounded-lg relative z-10"
                        />
                      ) : service.title === 'IA Conversacional' ? (
                        <img 
                          src={service.image} 
                          alt={service.title}
                          className="w-[180px] h-[180px] object-contain aspect-square mx-auto relative z-10 rounded-lg"
                        />
                      ) : (
                        <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm p-3">
                          <div className="absolute inset-0 bg-gradient-to-br from-transparent to-black/20" />
                          <img 
                            src={service.image} 
                            alt={service.title}
                            className="max-w-[250px] w-full h-auto object-contain rounded-lg relative z-10"
                          />
                          {/* Decorative elements */}
                          <div className="absolute top-3 right-3 w-6 h-6 bg-primary rounded-full animate-pulse" />
                          <div className="absolute bottom-3 left-3 w-8 h-8 bg-blue-500/30 rounded-full blur-md" />
                        </div>
                      )}
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

export default PerformanceCarousel;
