import Navigation from "@/components/Navigation";
import SuperHeader from "@/components/SuperHeader";
import FooterSection from "@/components/FooterSection";
import { ArrowLeft, ArrowRight, Bot, TrendingUp, Search, BarChart, Globe, Users } from "lucide-react";
import { Link } from "react-router-dom";

const Servicios = () => {
  const services = [
    {
      icon: <TrendingUp className="w-12 h-12 text-primary" />,
      title: "Performance Digital & IA",
      description: "Optimización integral del funnel de conversión con modelos predictivos y automatización inteligente para maximizar ROAS y reducir CPA.",
      features: ["Algoritmos de Machine Learning", "Optimización en tiempo real", "Attribution modeling avanzado"]
    },
    {
      icon: <Bot className="w-12 h-12 text-primary" />,
      title: "IA Conversacional",
      description: "Agentes conversacionales inteligentes que automatizan la calificación de leads y mejoran la experiencia del cliente 24/7.",
      features: ["Chatbots con NLP avanzado", "Automatización de leads", "Integración omnicanal"]
    },
    {
      icon: <BarChart className="w-12 h-12 text-primary" />,
      title: "Conversion Rate Optimization (CRO)",
      description: "Análisis cuantitativos y cualitativos para identificar fricciones y optimizar la experiencia del usuario mediante A/B testing.",
      features: ["A/B Testing avanzado", "Análisis de comportamiento", "Optimización UX/UI"]
    },
    {
      icon: <Search className="w-12 h-12 text-primary" />,
      title: "SEO Potenciado por IA",
      description: "Posicionamiento orgánico utilizando inteligencia artificial para análisis de keywords y optimización de contenido.",
      features: ["Análisis semántico IA", "Optimización técnica", "Content optimization"]
    },
    {
      icon: <Globe className="w-12 h-12 text-primary" />,
      title: "Medios Digitales: Performance & Branding",
      description: "Estrategias de medios on-off con análisis predictivo para identificar oportunidades eficientes de inversión.",
      features: ["Programmatic advertising", "Cross-channel attribution", "Audience intelligence"]
    },
    {
      icon: <Users className="w-12 h-12 text-primary" />,
      title: "Automatización de Marketing",
      description: "Ecosistemas completos de marketing automation con lead scoring, nurturing y análisis predictivo de churn.",
      features: ["Lead scoring inteligente", "Customer lifecycle automation", "Predictive analytics"]
    }
  ];

  const tools = [
    { name: "Google Analytics 4", logo: "/lovable-uploads/ga4-logo.png" },
    { name: "Looker Studio", logo: "/lovable-uploads/looker-logo.png" },
    { name: "Meta Business", logo: "/lovable-uploads/meta-logo.png" },
    { name: "Google Ads", logo: "/lovable-uploads/google-ads-logo.png" },
    { name: "HubSpot", logo: "/lovable-uploads/hubspot-logo.png" },
    { name: "Salesforce", logo: "/lovable-uploads/salesforce-logo.png" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SuperHeader />
      <Navigation />
      
      {/* Header Image Section */}
      <section className="pt-32 pb-8 relative">
        <div className="w-full h-64 lg:h-80 overflow-hidden">
          <img 
            src="/lovable-uploads/5.png" 
            alt="Servicios - VOU" 
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* Banner Content Overlay */}
        <div className="absolute inset-0 flex items-center pt-2.5">
          <div className="container mx-auto px-4 lg:px-8 pt-4">
            <div className="text-left max-w-2xl ml-8 lg:ml-16">
              <div className="mb-4">
                <h1 className="font-bold" style={{ color: '#000000', fontSize: '45px' }}>
                  Servicios
                </h1>
              </div>
              <div>
                <p className="text-base lg:text-lg font-medium" style={{ color: '#000000' }}>
                  Desarrollamos, diseñamos e implementamos estrategias de marketing digital potenciadas por IA que apoyan el crecimiento del negocio de nuestros clientes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-24">
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

          {/* Services Section */}
          <section className="py-16 lg:py-20 bg-black">
            <div className="container mx-auto px-4">
              <div className="grid grid-cols-1 gap-8 max-w-4xl mx-auto">
                {/* Performance Digital & IA */}
                <div className="bg-black rounded-lg shadow-lg overflow-hidden min-h-[345px] flex border border-gray-800">
                  <div className="flex-1 p-6 lg:p-8 flex flex-col justify-center">
                    <h3 className="text-xl lg:text-2xl font-bold text-white mb-3 lg:mb-4">Performance potenciado por datos y modelos</h3>
                    <div className="text-sm lg:text-base text-gray-300 leading-relaxed mb-4 space-y-2">
                      <p>• Campañas orientadas a resultados medibles, con optimización automática y continua.</p>
                      <p>• Implementación acelerada de ecosistemas de data marketing (GA4, CRM, CDP, dashboards, data lakes).</p>
                      <p>• Modelos predictivos para presupuestación inteligente y toma de decisiones.</p>
                      <p>• Dashboards personalizados para visualizar ROI, atribución e incrementabilidad.</p>
                    </div>
                    <button className="text-primary hover:text-primary/80 transition-colors text-left flex items-center gap-2 text-sm font-medium">
                      Leer más
                      <span className="text-lg">›</span>
                    </button>
                  </div>
                  <div className="w-1/2">
                    <img 
                      src="/lovable-uploads/5.png" 
                      alt="Performance Digital & IA"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* IA Conversacional */}
                <div className="bg-black rounded-lg shadow-lg overflow-hidden min-h-[345px] flex border border-gray-800">
                  <div className="w-1/2">
                    <img 
                      src="/lovable-uploads/5.png" 
                      alt="IA Conversacional"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 p-6 lg:p-8 flex flex-col justify-center">
                    <h3 className="text-xl lg:text-2xl font-bold text-white mb-3 lg:mb-4">IA Conversacional al servicio de la experiencia del cliente</h3>
                    <div className="text-sm lg:text-base text-gray-300 leading-relaxed mb-4 space-y-2">
                      <p>• Agentes conversacionales que gestionan el funnel completo.</p>
                      <p>• Automatización de captación, calificación y conversión de leads.</p>
                      <p>• Gestión unificada de interacciones (redes sociales, WhatsApp, sitios, apps).</p>
                      <p>• Integración fluida con plataformas CRM, CDP y sistemas de atención al cliente.</p>
                    </div>
                    <button className="text-primary hover:text-primary/80 transition-colors text-left flex items-center gap-2 text-sm font-medium">
                      Leer más
                      <span className="text-lg">›</span>
                    </button>
                  </div>
                </div>

                {/* Automatización e Integración Tecnológica */}
                <div className="bg-black rounded-lg shadow-lg overflow-hidden min-h-[345px] flex border border-gray-800">
                  <div className="flex-1 p-6 lg:p-8 flex flex-col justify-center">
                    <h3 className="text-xl lg:text-2xl font-bold text-white mb-3 lg:mb-4">Automatización e Integración Tecnológica</h3>
                    <div className="text-sm lg:text-base text-gray-300 leading-relaxed mb-4 space-y-2">
                      <p>• Activación de journeys omnicanal con base en data del cliente.</p>
                      <p>• Conexión ágil entre herramientas de medios, martech y procesos internos.</p>
                      <p>• Soporte técnico-operativo especializado en stacks de mediana y alta complejidad.</p>
                    </div>
                    <button className="text-primary hover:text-primary/80 transition-colors text-left flex items-center gap-2 text-sm font-medium">
                      Leer más
                      <span className="text-lg">›</span>
                    </button>
                  </div>
                  <div className="w-1/2">
                    <img 
                      src="/lovable-uploads/5.png" 
                      alt="Automatización e Integración Tecnológica"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Creatividad Generativa orientada a performance */}
                <div className="bg-black rounded-lg shadow-lg overflow-hidden min-h-[345px] flex border border-gray-800">
                  <div className="w-1/2">
                    <img 
                      src="/lovable-uploads/5.png" 
                      alt="Creatividad Generativa orientada a performance"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 p-6 lg:p-8 flex flex-col justify-center">
                    <h3 className="text-xl lg:text-2xl font-bold text-white mb-3 lg:mb-4">Creatividad Generativa orientada a performance</h3>
                    <div className="text-sm lg:text-base text-gray-300 leading-relaxed mb-4 space-y-2">
                      <p>• Contenidos generados por IA adaptados a múltiples canales digitales.</p>
                      <p>• Director Creativo IA que alinea copys y visuales con métricas de negocio.</p>
                      <p>• Producción creativa iterativa, testeable y basada en data.</p>
                    </div>
                    <button className="text-primary hover:text-primary/80 transition-colors text-left flex items-center gap-2 text-sm font-medium">
                      Leer más
                      <span className="text-lg">›</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Tools Section - COMENTADO TEMPORALMENTE */}
          {/*
          <div className="max-w-6xl mx-auto mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Las herramientas que potencian nuestras soluciones
              </h2>
              <p className="text-muted-foreground">
                Tecnología de vanguardia para resultados excepcionales
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
              {tools.map((tool, index) => (
                <div 
                  key={index}
                  className="flex flex-col items-center p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl hover:bg-white/10 transition-all duration-300"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-3">
                    <span className="text-primary font-bold text-sm">{tool.name.split(' ')[0]}</span>
                  </div>
                  <span className="text-xs text-muted-foreground text-center">{tool.name}</span>
                </div>
              ))}
            </div>
          </div>
          */}


        </div>
      </section>

      {/* CTA Section - FinalCTASection style */}
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

      <FooterSection />
    </div>
  );
};

export default Servicios; 