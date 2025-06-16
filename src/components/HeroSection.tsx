import { ArrowDown } from "lucide-react";

const HeroSection = () => {
  const scrollToNextSection = () => {
    const nextSection = document.getElementById('nosotros');
    if (nextSection) {
      const rect = nextSection.getBoundingClientRect();
      const offsetTop = window.pageYOffset + rect.top - 120; // Ajusta este valor para controlar qué tan arriba se detiene
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden" style={{ alignItems: 'flex-start', paddingTop: '35vh' }}>
      {/* Video Background - Full Screen */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <iframe
          src="https://www.youtube.com/embed/sYyD8blK_W0?autoplay=1&mute=1&loop=1&playlist=sYyD8blK_W0&controls=0&showinfo=0&rel=0&modestbranding=1"
          title="Background Video"
          className="w-full h-full object-cover"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          style={{ transform: 'scale(1.1)' }}
        />
      </div>
      
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/50 z-10" />
      
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/30 to-background pointer-events-none z-20" />
      
      <div className="container mx-auto px-4 lg:px-8 relative z-30">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col items-center text-center mb-12">
            {/* Simplified tagline and value prop */}
            <div className="animate-fade-in-delayed max-w-5xl">
              <h1 className="title-hero text-primary mb-8 tracking-tight drop-shadow-lg" data-aos="fade-down">
                Your ai-powered growth partner
              </h1>
              <p className="subtitle text-white/90 leading-relaxed mb-12 drop-shadow-md" data-aos="fade-up">
                Agencia de medios digitales que integra ia y datos para escalar tu performance.
              </p>
              
              {/* Down Arrow */}
              <div className="flex justify-center mt-8" data-aos="fade-up" data-aos-delay="300">
                <button 
                  onClick={scrollToNextSection}
                  className="p-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300 group"
                  style={{
                    animation: 'gentle-bounce 2s ease-in-out infinite'
                  }}
                >
                  <ArrowDown 
                    size={24} 
                    className="text-white group-hover:text-primary transition-colors duration-300" 
                  />
                </button>
              </div>
              
              <style>{`
                @keyframes gentle-bounce {
                  0%, 100% {
                    transform: translateY(0px);
                  }
                  50% {
                    transform: translateY(-0.25px);
                  }
                }
              `}</style>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
