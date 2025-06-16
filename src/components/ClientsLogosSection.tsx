import { Card } from "@/components/ui/card";

const ClientsLogosSection = () => {
  const clients = [

    {
      name: "El Volcán",
      logo: "/lovable-uploads/volcan.png",
      alt: "El Volcán"
    },
    {
      name: "WOM",
      logo: "/lovable-uploads/wom.png",
      alt: "WOM"
    },
    {
      name: "Macal",
      logo: "/lovable-uploads/macal.png",
      alt: "Macal"
    },
    {
      name: "Universidad Bernardo O'Higgins",
      logo: "/lovable-uploads/ubo.png",
      alt: "Universidad Bernardo O'Higgins"
    },
    {
      name: "Peaky Nuts",
      logo: "/lovable-uploads/pn.png",
      alt: "Peaky Nuts"
    },
    {
      name: "EM",
      logo: "/lovable-uploads/em.png",
      alt: "EM"
    },
    {
      name: "Red Salud",
      logo: "/lovable-uploads/redsalud.png",
      alt: "redsalud"
    },
    {
      name: "DEPORT",
      logo: "/lovable-uploads/deport.png",
      alt: "deport"
    },
  ];

  return (
    <section id="clientes" className="py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center justify-items-center">
          {clients.map((client, index) => (
            <figure key={index} className="mb-0" data-aos="fade-up" data-aos-delay={index * 50}>
              <img 
                src={client.logo} 
                alt={client.alt}
                className="h-16 w-auto object-contain filter grayscale hover:grayscale-0 transition-all duration-300 hover:scale-110 max-w-full"
              />
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientsLogosSection; 