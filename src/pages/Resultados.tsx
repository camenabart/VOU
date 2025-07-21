import Navigation from "@/components/Navigation";
import SuperHeader from "@/components/SuperHeader";
import FooterSection from "@/components/FooterSection";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

const Resultados = () => {
  const [activeFilter, setActiveFilter] = useState("Ver todos");
  const filters = ["Ver todos", "Forma", "E-commerce", "Servicios Financieros","Retail & Medios" , "SaaS & Technology"];
  
  const caseStudies = [
    {
      id: 1,
      title: "Optimización de la Experiencia del Usuario en Salfa Agrícola",
      description: "Salfa Agrícola optimizó su sitio web mediante análisis cuantitativos y cualitativos, identificando fricciones en la página de producto y probando mejoras con un AB Test. Resultado: +14.64% en la conversión de leads y +64.09% en descargas de folletos. Esto impulsó ventas, redujo costos por lead y maximizó el ROI, destacando la importancia de un enfoque centrado en el usuario y la optimización continua.",
      image: "/lovable-uploads/5.png",
      results: [
        "+14.64% conversión de leads",
        "+64.09% descargas de folletos",
        "Reducción significativa en costos por lead"
      ],
      category: "Forma",
      businessUnit: "Forma"
    },
    {
      id: 2,
      title: "Escalamiento Digital para E-commerce",
      description: "Implementamos una estrategia integral de automatización y IA conversacional para un e-commerce líder, optimizando todo el funnel de conversión desde la captación hasta la post-venta. La integración de modelos predictivos permitió personalizar la experiencia de usuario en tiempo real.",
      image: "/lovable-uploads/5.png",
      results: [
        "+340% incremento en ROAS",
        "+87% reducción en CPA",
        "+95% automatización de procesos"
      ],
      category: "E-commerce",
      businessUnit: "E-commerce"
    },
    {
      id: 3,
      title: "Transformación Digital con IA Conversacional",
      description: "Desarrollamos agentes conversacionales inteligentes para una empresa de servicios financieros, automatizando la calificación de leads y mejorando la experiencia de atención al cliente. La integración omnicanal permitió un seguimiento completo del customer journey.",
      image: "/lovable-uploads/5.png",
      results: [
        "+75% mejora en conversión",
        "+60% reducción en tiempo de respuesta",
        "+85% satisfacción del cliente"
      ],
      category: "Servicios Financieros",
      businessUnit: "Servicios Financieros"
    },
    {
      id: 4,
      title: "Campaña Multicanal para Retail",
      description: "Desarrollamos una estrategia completa de medios para una cadena de retail, integrando canales digitales y tradicionales con tecnología de atribución avanzada. La implementación de IA predictiva permitió optimizar la inversión publicitaria en tiempo real.",
      image: "/lovable-uploads/5.png",
      results: [
        "+180% incremento en ventas online",
        "+45% mejora en atribución",
        "+60% eficiencia en medios"
      ],
      category: "Retail & Medios",
      businessUnit: "Retail & Medios"
    },
    {
      id: 5,
      title: "Automatización de Marketing para SaaS",
      description: "Implementamos un ecosistema completo de marketing automation para una empresa SaaS, incluyendo lead scoring, nurturing automatizado y análisis predictivo de churn. La integración con CRM permitió un seguimiento completo del customer lifecycle.",
      image: "/lovable-uploads/5.png",
      results: [
        "+220% incremento en MQLs",
        "+35% reducción en churn",
        "+90% automatización de procesos"
      ],
      category: "SaaS & Technology",
      businessUnit: "SaaS & Technology"
    }
  ];

  const filteredCaseStudies = activeFilter === "Ver todos" 
    ? caseStudies 
    : caseStudies.filter(caseStudy => caseStudy.businessUnit === activeFilter);

  return (
    <div className="min-h-screen bg-background">
      <SuperHeader />
      <Navigation />
      
      {/* Header Image Section */}
      <section className="pt-32 pb-8 relative">
        <div className="w-full h-64 lg:h-80 overflow-hidden">
          <img 
            src="/lovable-uploads/5.png" 
            alt="Casos de Estudio - VOU" 
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* Banner Content Overlay */}
        <div className="absolute inset-0 flex items-center pt-2.5">
          <div className="container mx-auto px-4 lg:px-8 pt-4">
            <div className="text-left max-w-2xl ml-8 lg:ml-16">
              <div className="mb-4">
                <h1 className="font-bold" style={{ color: '#000000', fontSize: '45px' }}>
                  Casos de Estudio
                </h1>
              </div>
              <div>
                <p className="text-base lg:text-lg font-medium" style={{ color: '#000000' }}>
                  Descubre cómo hemos transformado negocios mediante estrategias de marketing digital potenciadas por IA y datos.
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

          {/* Filter Tabs */}
          <div className="max-w-4xl mx-auto mb-16 text-center">
            <div className="flex justify-center">
              <div className="inline-flex space-x-8">
                {filters.map((filter) => (
                  <button
                    key={filter}
                    onClick={() => setActiveFilter(filter)}
                    className={`px-4 py-3 text-sm font-medium uppercase tracking-wider transition-all duration-300 relative ${
                      activeFilter === filter
                        ? "text-foreground"
                        : "text-gray-400 hover:text-gray-600"
                    }`}
                  >
                    {filter}
                    {activeFilter === filter && (
                      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary rounded-full"></div>
                    )}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Case Studies */}
          <div className="max-w-7xl mx-auto space-y-24">
            {filteredCaseStudies.map((caseStudy, index) => (
              <div 
                key={caseStudy.id} 
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}
                data-aos="fade-up"
              >
                {/* Image Side */}
                <div className={`relative ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <div className="relative bg-gradient-to-br from-primary/20 to-blue-600/20 rounded-3xl p-8 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-transparent to-black/20" />
                    <div className="relative flex items-center justify-center">
                      <div className="w-48 h-48 rounded-full border-4 border-white/30 flex items-center justify-center bg-white/10 backdrop-blur-sm">
                        <span className="text-white text-2xl font-bold">
                          Metodología<br/>360°
                        </span>
                      </div>
                      <img 
                        src={caseStudy.image} 
                        alt={caseStudy.title}
                        className="absolute right-4 top-4 w-32 h-40 object-contain rounded-xl shadow-2xl"
                      />
                      <img 
                        src={caseStudy.image} 
                        alt={caseStudy.title}
                        className="absolute right-20 bottom-4 w-32 h-40 object-contain rounded-xl shadow-2xl"
                      />
                    </div>
                  </div>
                </div>

                {/* Content Side */}
                <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                  <div className="inline-block px-4 py-2 rounded-full bg-primary/20 text-primary text-sm font-medium">
                    {caseStudy.category}
                  </div>
                  
                  <h2 className="text-xl lg:text-2xl font-bold text-foreground leading-tight">
                    {caseStudy.title}
                  </h2>
                  
                  <p className="text-sm lg:text-base text-muted-foreground leading-relaxed">
                    {caseStudy.description}
                  </p>

                  {/* Results */}
                  <div className="space-y-3">
                    <h3 className="text-lg font-semibold text-primary mb-4">Resultados obtenidos:</h3>
                    {caseStudy.results.map((result, resultIndex) => (
                      <div key={resultIndex} className="flex items-center">
                        <div className="w-2 h-2 rounded-full bg-primary mr-4" />
                        <span className="text-sm lg:text-base text-foreground font-medium">{result}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-4">
                    <button className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors group">
                      <span className="font-medium">Seguir leyendo</span>
                      <ArrowLeft 
                        size={16} 
                        className="rotate-180 transform group-hover:translate-x-1 transition-transform"
                      />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <FooterSection />
    </div>
  );
};

export default Resultados; 