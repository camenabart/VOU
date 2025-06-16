import { Card } from "@/components/ui/card";

const ClientsLogosSection = () => {
  const clients = [
    { name: "Deport", logo: "/lovable-uploads/deport.png" },
    { name: "El Volcán", logo: "/lovable-uploads/elvolcan.png" },
    { name: "EM", logo: "/lovable-uploads/em.png" },
    { name: "RedSalud", logo: "/lovable-uploads/redsalud.png" },
    { name: "WOM", logo: "/lovable-uploads/wom.png" },
    { name: "Universidad Bernardo O'Higgins", logo: "/lovable-uploads/ubo.png" },
    { name: "Peaky Nuts", logo: "/lovable-uploads/pn.png" },
    { name: "Macal", logo: "/lovable-uploads/macal.png" },
  ];

  return (
    <section className="py-20 bg-background relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent" />
      </div>
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="text-center mb-16 animate-fade-in-up" data-aos="fade-up">
          <h2 className="title-section mb-8">
            <span className="text-foreground">Nuestros</span> <span className="text-primary">clientes</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center" data-aos="fade-up">
          {clients.map((client, index) => (
            <Card 
              key={index}
              className="bg-transparent border-none shadow-none hover:scale-105 transition-transform duration-300"
            >
              <img 
                src={client.logo} 
                alt={client.name}
                className="w-full h-auto max-h-16 object-contain filter grayscale brightness-90 hover:brightness-100 transition-all duration-300"
              />
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientsLogosSection; 