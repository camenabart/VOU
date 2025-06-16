const ServicesGridSection = () => {
  const services = [
    {
      title: "Performance potenciado por datos y modelos",
      image: "/lovable-uploads/1.png",
      alt: "Medios-digitales-performance-and-branding",
      link: "/servicios"
    },
    {
      title: "IA Conversacional al servicio de la experiencia del cliente",
      image: "/lovable-uploads/2.png",
      alt: "Optimizacion",
      link: "/servicios"
    },
    {
      title: "Automatización e Integración Tecnológica",
      image: "/lovable-uploads/3.png",
      alt: "Automatización",
      link: "/servicios"
    },
    {
      title: "Creatividad Generativa orientada a performance",
      image: "/lovable-uploads/4.png",
      alt: "Creatividad Generativa",
      link: "/servicios"
    }
  ];

  return (
    <section className="pt-20 pb-40 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-sm text-primary mb-4">
            <span>SOLUCIONES</span>
          </h2>
          <h2 className="text-xs lg:text-3xl font-medium text-foreground mb-8">
            Nuestros Servicios
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {services.map((service, index) => (
            <div key={index} className="service" data-aos="fade-up" data-aos-delay={index * 100}>
              <a href={service.link} className="block mb-4">
                <img 
                  src={service.image} 
                  alt={service.alt}
                  className="w-full h-48 lg:h-56 object-cover rounded-lg hover:scale-105 transition-transform duration-300"
                />
              </a>
              <a 
                href={service.link}
                className="text-foreground hover:text-primary transition-colors font-medium text-base"
              >
                {service.title}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesGridSection; 