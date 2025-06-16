import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Linkedin, Twitter } from "lucide-react";

const FooterSection = () => {
  const partnerLogos = [
    {
      src: "/lovable-uploads/49673cb0-380a-461e-805d-1249dc445d1c.png",
      alt: "Google Partner Premier 2025",
      name: "Google Partner"
    },
    {
      src: "/lovable-uploads/d6a61654-65d4-4cda-8a9c-94f379f120eb.png",
      alt: "HubSpot Platinum Partner",
      name: "HubSpot Platinum"
    },
    {
      src: "/lovable-uploads/8e5265c1-c6cb-42c1-bae7-cd32364451a1.png",
      alt: "Google Cloud Partner",
      name: "Google Cloud"
    },
    {
      src: "/lovable-uploads/0c939a7b-94d2-431b-b5d7-2a579cc0235f.png",
      alt: "Meta Business Partner",
      name: "Meta Business"
    }
  ];

  return (
    <footer className="bg-background border-t border-border/50 py-20 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-secondary/50 to-transparent" />
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-16 mb-16">
          <div className="lg:col-span-2">
            <div className="flex items-center mb-6">
              <img 
                src="/lovable-uploads/7f634f2f-6185-4afb-88d3-fed919990075.png" 
                alt="VOU Logo" 
                className="h-10 w-auto mr-4"
              />
              <div className="text-muted-foreground text-lg">
                Performance Digital & AI
              </div>
            </div>
            <p className="text-muted-foreground mb-8 max-w-md leading-relaxed text-lg">
              La unidad especializada en performance digital y soluciones de medios 
              potenciadas por datos e Inteligencia Artificial de Moov Media Group.
            </p>
            
            {/* Partners logos */}
            <div className="mb-8">
              <h4 className="font-semibold mb-4 text-foreground">Partners Certificados</h4>
              <div className="flex items-center gap-6">
                {partnerLogos.map((partner, index) => (
                  <img 
                    key={index}
                    src={partner.src} 
                    alt={partner.alt}
                    className="h-12 w-auto object-contain filter brightness-90 hover:brightness-100 transition-all duration-300 hover:scale-110"
                  />
                ))}
              </div>
            </div>
            
            {/* Social links */}
            <div className="flex space-x-4">
              <Button 
                variant="outline" 
                size="icon" 
                className="glass-effect border-white/20 hover-lift"
              >
                <Linkedin className="w-5 h-5" />
              </Button>
              <Button 
                variant="outline" 
                size="icon" 
                className="glass-effect border-white/20 hover-lift"
              >
                <Twitter className="w-5 h-5" />
              </Button>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-6 text-foreground text-xl">Servicios</h3>
            <ul className="space-y-4 text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors duration-300 text-base">Automatización Inteligente</a></li>
              <li><a href="#" className="hover:text-primary transition-colors duration-300 text-base">Modelos Predictivos</a></li>
              <li><a href="#" className="hover:text-primary transition-colors duration-300 text-base">Agentes IA Verticales</a></li>
              <li><a href="#" className="hover:text-primary transition-colors duration-300 text-base">Data Management</a></li>
              <li><a href="#" className="hover:text-primary transition-colors duration-300 text-base">Attribution Modeling</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-6 text-foreground text-xl">Contacto</h3>
            <div className="space-y-4 text-muted-foreground">
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary" />
                <span className="text-base">hello@vou.agency</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary" />
                <span className="text-base">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-primary" />
                <span className="text-base">New York, NY</span>
              </div>
            </div>
            <Button className="mt-8 bg-primary text-primary-foreground hover:bg-primary/90 hover-lift text-base px-6 py-3">
              Contáctanos
            </Button>
          </div>
        </div>

        <div className="border-t border-border/50 pt-10 flex flex-col md:flex-row justify-between items-center">
          <div className="text-muted-foreground mb-6 md:mb-0 text-base">
            © 2024 VOU - Moov Media Group. Todos los derechos reservados.
          </div>
          <div className="flex space-x-8 text-muted-foreground">
            <a href="#" className="hover:text-primary transition-colors duration-300 text-base">Privacidad</a>
            <a href="#" className="hover:text-primary transition-colors duration-300 text-base">Términos</a>
            <a href="#" className="hover:text-primary transition-colors duration-300 text-base">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
