import { ArrowDown } from "lucide-react";

const HeroSection = () => {
  const scrollToNextSection = () => {
    const nextSection = document.getElementById('nosotros');
    nextSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
