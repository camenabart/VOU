import { Link } from "react-router-dom";

const CTASection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left column - Video */}
          <div className="relative max-w-md mx-auto lg:ml-auto lg:mr-8" data-aos="fade-right">
            <video 
              className="w-full h-auto rounded-2xl shadow-2xl"
              autoPlay 
              muted 
              loop 
              playsInline
            >
              <source src="/lovable-uploads/vino.mp4" type="video/mp4" />
              Tu navegador no soporta el elemento de video.
            </video>
          </div>

          {/* Right column - Content */}
          <div className="space-y-8" data-aos="fade-left">
            <div>
              <h2 className="text-3xl font-medium text-foreground mb-6" style={{ fontSize: '30px' }}>
                ¿Listo para crecer con IA?
              </h2>
              <p className="text-sm text-muted-foreground leading-relaxed mb-8">
                Descubre cómo nuestras soluciones pueden transformar tu performance digital y hacer crecer tu negocio con inteligencia artificial y automatización.
              </p>
            </div>
            
            <Link 
              to="/contacto"
              className="text-primary hover:text-primary/80 transition-colors font-medium text-sm"
            >
              Quiero asesoría &gt;
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection; 