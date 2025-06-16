import Navigation from "@/components/Navigation";
import SuperHeader from "@/components/SuperHeader";
import FooterSection from "@/components/FooterSection";
import { ArrowLeft, ArrowRight, ChevronLeft, ChevronRight, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

const NuestroEquipo = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const valores = [
    {
      number: "1",
      title: "Geek",
      description: "Nos impulsa las nuevas tendencias y esa búsqueda nos obsesiona a movilizarnos constantemente."
    },
    {
      number: "2", 
      title: "Entusiastas",
      description: "Nos encanta lo que hacemos, y se nota en la pasión, esfuerzo y dedicación que ponemos en todo lo que hacemos."
    },
    {
      number: "3",
      title: "Creativos", 
      description: "Siempre hay más de una solución y eso nos desafía como pensadores, a encontrar esas respuestas desde la innovación."
    },
    {
      number: "4",
      title: "Lúdicos",
      description: "Somos versátiles y, cada uno de nosotros, aporta desde sus propios gustos e intereses una manera distinta de ver las cosas."
    },
    {
      number: "5",
      title: "Auténticos", 
      description: "Somos consecuentes en todo lo que hacemos, originales desde nuestra esencia y eso, nos aleja del miedo a proponer nuevas soluciones."
    },
    {
      number: "6",
      title: "Directos",
      description: "Ir desde la verdad, sin rodeos, siendo contundentes y con argumentos que validan nuestras recomendaciones."
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % valores.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + valores.length) % valores.length);
  };

  const goToSlide = (index) => {
    if (index === currentSlide) return;
    setCurrentSlide(index);
  };

  return (
    <div className="min-h-screen bg-background">
      <SuperHeader />
      <Navigation />
      
      {/* Header Image Section */}
      <section className="pt-20 pb-8 relative">
        <div className="w-full h-64 lg:h-80 overflow-hidden">
          <img 
            src="/lovable-uploads/5.png" 
            alt="Nosotros - VOU Team" 
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* Banner Content Overlay */}
        <div className="absolute inset-0 flex items-center pt-2.5">
          <div className="container mx-auto px-4 lg:px-8 pt-4">
            <div className="text-left max-w-2xl ml-8 lg:ml-16">
              <div className="mb-4">
                <h1 className="font-bold" style={{ color: '#000000', fontSize: '45px' }}>
                  Sobre Vou
                </h1>
              </div>
              <div>
                <p className="text-base lg:text-lg font-medium" style={{ color: '#000000' }}>
                  Potenciamos el crecimiento de tu negocio desde los medios digitales.
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

          {/* Page title */}

          {/* Nuestro propósito Section */}
          <div className="max-w-6xl mx-auto px-8 lg:px-12 py-16 lg:py-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              {/* Left column - Title with accent line */}
              <div className="relative">
                <div className="absolute left-0 top-0 w-1 h-20 bg-primary"></div>
                <div className="pl-8">
                  <h2 className="text-3xl lg:text-4xl font-medium text-foreground">
                    Nuestro propósito
                  </h2>
                </div>
              </div>
              
              {/* Right column - Content */}
              <div>
                <p className="text-lg lg:text-xl text-foreground leading-relaxed">
                  Ser el partner del negocio de nuestros clientes, ayudándolos a entender a sus consumidores y a conseguir crecimientos sostenibles en ventas.
                </p>
              </div>
            </div>
          </div>

          {/* Nuestra Personalidad Section */}
          <div className="max-w-6xl mx-auto mt-32 py-16 lg:py-20">
            <div className="relative">
              <div className="absolute left-0 top-0 w-0.5 h-64 bg-primary opacity-50"></div>
              <div className="absolute left-0 top-64 w-2.5 h-2.5 bg-primary opacity-50 transform rotate-45 -translate-x-1"></div>
              <div className="pl-6">
                <h2 className="text-xl lg:text-4xl font-normal text-foreground mb-5">
                  Nuestra Personalidad
                </h2>
                <p className="text-base lg:text-xl font-normal text-foreground leading-relaxed max-w-4xl">
                  Aspiramos a una cultura orientada al aprendizaje continuo para formar personas íntegras que vivan y sientan nuestros valores, que transmitan nuestra cultura y que sean verdaderos líderes y agentes de cambio.
                </p>
              </div>
            </div>
          </div>

          {/* Valores Carousel Section */}
          <div className="max-w-6xl mx-auto mt-20 relative">
            <div className="relative overflow-hidden">
              {/* Carousel Content */}
              <div className="relative min-h-[400px]">
                <div 
                  className="flex transition-transform duration-500 ease-in-out"
                  style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                >
                  {valores.map((valor, index) => (
                    <div 
                      key={index}
                      className="w-full flex-shrink-0 flex items-center px-8"
                    >
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-center w-full max-w-5xl mx-auto">
                        {/* Left column - Large Number */}
                                                  <div className="flex justify-center lg:justify-center">
                           <div className="text-[10rem] lg:text-[16rem] font-bold text-primary opacity-20">
                             {valor.number}
                           </div>
                          </div>
                        
                        {/* Right column - Title and Description */}
                        <div className="text-left lg:pl-4">
                          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-primary">
                            {valor.title}
                          </h2>
                          <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed">
                            {valor.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Navigation Arrows */}
              <button 
                onClick={prevSlide}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <ChevronLeft className="w-6 h-6 text-foreground" />
              </button>
              
              <button 
                onClick={nextSlide}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <ChevronRight className="w-6 h-6 text-foreground" />
              </button>
            </div>

            {/* Pagination Dots */}
            <div className="flex justify-center mt-8 space-x-2">
              {valores.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 transform hover:scale-125 cursor-pointer ${
                    index === currentSlide 
                      ? 'bg-primary scale-110' 
                      : 'bg-white/30 hover:bg-white/50'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Video Section */}
          <div className="max-w-6xl mx-auto mt-20">
            <div className="flex flex-col lg:flex-row gap-8 justify-center items-start">
              {/* Vertical Video */}
              <div className="w-full lg:w-1/4 mb-4 lg:mb-0">
                <div className="relative w-full" style={{ aspectRatio: '9/16' }}>
                  <iframe 
                    className="absolute inset-0 w-full h-full rounded-lg"
                    src="https://www.youtube.com/embed/VIuKyxV6u8I" 
                    frameBorder="0" 
                    allow="autoplay; fullscreen; picture-in-picture" 
                    allowFullScreen
                    title="VOU Video Vertical"
                  />
                </div>
              </div>
              
              {/* Horizontal Video */}
              <div className="w-full lg:w-2/3">
                <div className="relative w-full" style={{ aspectRatio: '16/9' }}>
                  <iframe 
                    className="absolute inset-0 w-full h-full rounded-lg"
                    src="https://www.youtube.com/embed/ejGDFdBUcQ0?si=-_iF8uxN6_qUdzGR" 
                    frameBorder="0" 
                    allow="autoplay; fullscreen; picture-in-picture" 
                    allowFullScreen
                    title="VOU Video Horizontal"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Lideran Moov Team Section */}
          <div className="max-w-6xl mx-auto mt-20">
            <h2 className="text-3xl lg:text-4xl font-medium text-foreground text-center mb-12">
              Lideran Vou
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Team Member 1 - Cecilia Galaz */}
              <div className="text-left">
                <figure className="mb-4">
                  <img 
                    src="https://www.moov.cl/wp-content/uploads/sites/7/2022/08/Cecilia-Galaz.png" 
                    alt="Cecilia Galaz" 
                    className="w-full h-64 object-cover object-top"
                  />
                </figure>
                <a 
                  href="https://www.linkedin.com/in/cecilia-galaz-vi%C3%B1als-76416481/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-block mb-4"
                >
                  <Linkedin className="w-6 h-6 text-gray-500 hover:text-primary transition-colors" />
                </a>
                <h3 className="text-sm text-foreground mb-2">
                  Managing Director
                </h3>
                <h4 className="text-xl font-semibold text-foreground mb-2">
                  Cecilia Galaz
                </h4>
                <div className="w-16 h-0.5 bg-primary"></div>
              </div>

              {/* Team Member 2 - Cami Alarma */}
              <div className="text-left">
                <figure className="mb-4">
                  <img 
                    src="https://www.moov.cl/wp-content/uploads/sites/7/2022/10/Camila-Alarma.png" 
                    alt="Cami Alarma" 
                    className="w-full h-64 object-cover object-top"
                  />
                </figure>
                <a 
                  href="https://www.linkedin.com/in/camila-alarma-herrmann-22359230/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-block mb-4"
                >
                  <Linkedin className="w-6 h-6 text-gray-500 hover:text-primary transition-colors" />
                </a>
                <h3 className="text-sm text-foreground mb-2">
                  Directora de Planning y Construcción de Marca
                </h3>
                <h4 className="text-xl font-semibold text-foreground mb-2">
                  Cami Alarma
                </h4>
                <div className="w-16 h-0.5 bg-primary"></div>
              </div>

              {/* Team Member 3 - Eduardo Herreros */}
              <div className="text-left">
                <figure className="mb-4">
                  <img 
                    src="https://www.moov.cl/wp-content/uploads/sites/7/2023/10/Eduardo-Herreros.png" 
                    alt="Eduardo Herreros" 
                    className="w-full h-64 object-cover object-top"
                  />
                </figure>
                <a 
                  href="https://www.linkedin.com/in/eherrerosy/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-block mb-4"
                >
                  <Linkedin className="w-6 h-6 text-gray-500 hover:text-primary transition-colors" />
                </a>
                <h3 className="text-sm text-foreground mb-2">
                  Director de Operaciones
                </h3>
                <h4 className="text-xl font-semibold text-foreground mb-2">
                  Eduardo Herreros
                </h4>
                <div className="w-16 h-0.5 bg-primary"></div>
              </div>

              {/* Team Member 4 - Madelaine Calfuleo */}
              <div className="text-left">
                <figure className="mb-4">
                  <img 
                    src="https://www.moov.cl/wp-content/uploads/sites/7/2024/01/Madi-497x493-1.webp" 
                    alt="Madelaine Calfuleo" 
                    className="w-full h-64 object-cover object-top"
                  />
                </figure>
                <a 
                  href="https://www.linkedin.com/in/madelaine-calfuleo/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-block mb-4"
                >
                  <Linkedin className="w-6 h-6 text-gray-500 hover:text-primary transition-colors" />
                </a>
                <h3 className="text-sm text-foreground mb-2">
                  Directora de Contenidos y Redes Sociales
                </h3>
                <h4 className="text-xl font-semibold text-foreground mb-2">
                  Madelaine Calfuleo
                </h4>
                <div className="w-16 h-0.5 bg-primary"></div>
              </div>


            </div>
          </div>

          {/* Nuestros socios de Moov Media Group Section */}
          <div className="max-w-6xl mx-auto mt-20">
            <div className="relative">
              <div className="absolute left-0 top-0 w-0.5 h-64 bg-primary opacity-50"></div>
              <div className="absolute left-0 top-64 w-2.5 h-2.5 bg-primary opacity-50 transform rotate-45 -translate-x-1"></div>
              <div className="pl-6">
                <h2 className="text-xl lg:text-4xl font-normal text-foreground mb-5">
                  Nuestros socios de Moov Media Group
                </h2>
                <p className="text-base lg:text-xl font-normal text-foreground leading-relaxed max-w-4xl pb-8 lg:pb-24">
                  Desde el año 2010 somos parte de una gran familia, un grupo de empresas ligadas al mundo digital, capaces de implementar soluciones de marketing omnicanal, integrando tecnología, data analytics, medios digitales y publicidad.
                  <br /><br />
                  Contamos con un modelo de integración colaborativo, que nos permite trabajar de manera específica o integral con cada uno de nuestros clientes.
                </p>
              </div>
            </div>
          </div>

          {/* Socios Fundadores de Moov Media Group Section */}
          <div className="max-w-6xl mx-auto mt-20">
      
            
                          <div className="relative">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {/* Founder 1 - Andrés Alcalde */}
                  <div className="text-center">
                    <figure className="mb-4">
                      <img 
                        src="https://www.moov.cl/wp-content/uploads/sites/7/2024/01/Andres-370-x-367-_1_.webp" 
                        alt="Andrés Alcalde" 
                        className="w-full h-64 object-cover object-top"
                      />
                    </figure>
                    <a 
                      href="https://www.linkedin.com/in/andresalcaldel/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-block mb-4"
                    >
                      <Linkedin className="w-6 h-6 text-gray-500 hover:text-primary transition-colors" />
                    </a>
                    <h3 className="text-sm text-foreground mb-2">
                      Chief Innovation & Strategy Officer / Co-Founder
                    </h3>
                    <h4 className="text-xl font-semibold text-foreground mb-2">
                      Andrés Alcalde
                    </h4>
                    <div className="w-16 h-0.5 bg-primary mx-auto mb-4"></div>
                    <p className="text-sm text-foreground/80 mb-2">
                      Bachelor of Science in Business Administration at UAI.
                    </p>
                    <p className="text-sm text-foreground/80">
                      M.S. in Technology Management at Columbia College
                    </p>
                  </div>

                  {/* Founder 2 - Rodrigo Andrade */}
                  <div className="text-center">
                    <figure className="mb-4">
                      <img 
                        src="https://www.moov.cl/wp-content/uploads/sites/7/2024/01/Rodrigo-370-x-367.webp" 
                        alt="Rodrigo Andrade" 
                        className="w-full h-64 object-cover object-top"
                      />
                    </figure>
                    <a 
                      href="https://www.linkedin.com/in/rodrigoandradeherrera/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-block mb-4"
                    >
                      <Linkedin className="w-6 h-6 text-gray-500 hover:text-primary transition-colors" />
                    </a>
                    <h3 className="text-sm text-foreground mb-2">
                      Chief Executive Officer / Co-Founder
                    </h3>
                    <h4 className="text-xl font-semibold text-foreground mb-2">
                      Rodrigo Andrade
                    </h4>
                    <div className="w-16 h-0.5 bg-primary mx-auto mb-4"></div>
                    <p className="text-sm text-foreground/80 mb-2">
                      Bachelor of Science in Business Administration at PUC.
                    </p>
                    <p className="text-sm text-foreground/80">
                      M.S in Technology Management at Georgetown University.
                      <br /><br />
                      Professor in Data Science in Digital Marketing at UAI.
                      <br />
                      Diploma Instructor in Growth Marketing at UAI.
                    </p>
                  </div>

                  {/* Founder 3 - Ignacio Miranda */}
                  <div className="text-center">
                    <figure className="mb-4">
                      <img 
                        src="https://www.moov.cl/wp-content/uploads/sites/7/2024/01/Ignacio-370-x-367-_1_.webp" 
                        alt="Ignacio Miranda" 
                        className="w-full h-64 object-cover object-top"
                      />
                    </figure>
                    <a 
                      href="https://www.linkedin.com/in/ignacio-miranda-62a23423/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-block mb-4"
                    >
                      <Linkedin className="w-6 h-6 text-gray-500 hover:text-primary transition-colors" />
                    </a>
                    <h3 className="text-sm text-foreground mb-2">
                      Corporate Growth & Development Manager / Co-Founder
                    </h3>
                    <h4 className="text-xl font-semibold text-foreground mb-2">
                      Ignacio Miranda
                    </h4>
                    <div className="w-16 h-0.5 bg-primary mx-auto mb-4"></div>
                    <p className="text-sm text-foreground/80 mb-2">
                      Bachelor of Science in Business Administration at PUC.
                    </p>
                    <p className="text-sm text-foreground/80">
                      MBA candidate at Kellog School of Management.
                      <br /><br />
                      Start up advisor. Board Member at Profejobs.
                    </p>
                  </div>
                                </div>
              </div>
            </div>

        </div>
      </section>
      
      {/* Sé parte de Moov Section - Full Width */}
      <section className="w-full mt-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[400px]">
          {/* Left column - Content */}
          <div className="flex items-center p-8 lg:p-12 bg-background">
            <div className="w-full">
              <h3 className="text-foreground text-3xl lg:text-4xl font-medium mb-6">
                Sé parte de Moov
              </h3>
              <p className="text-foreground/90 text-lg mb-4 leading-relaxed">
                Nos mueve el aprendizaje continúo sobre las últimas tendencias digitales en marketing y tecnología.
              </p>
              <p className="text-foreground/90 text-lg mb-8 leading-relaxed">
                Si te interesa desarrollarte en un grupo dinámico, en constante crecimiento y desarrollo ¡únete al equipo!
              </p>
              <div className="button-offers">
                <a 
                  href="https://moovmediagroup.com/buscamos-talento/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-8 py-4 bg-primary text-black font-medium rounded-full hover:bg-primary/90 transition-colors"
                >
                  Ver ofertas de trabajo
                </a>
              </div>
            </div>
          </div>
          
          {/* Right column - Background Image */}
          <div 
            className="min-h-[400px] bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: 'url(https://www.moov.cl/wp-content/uploads/sites/7/2021/11/postula.jpg)'
            }}
          >
          </div>
        </div>
      </section>

      {/* CTA Section - Estamos para asesorarte */}
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

export default NuestroEquipo;
