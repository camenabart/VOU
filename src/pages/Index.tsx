import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import NosotrosSection from "@/components/NosotrosSection";
import ContactSection from "@/components/ContactSection";
import ResultsSection from "@/components/ResultsSection";
import PerformanceCarousel from "@/components/PerformanceCarousel";
import PostSliderSection from "@/components/PostSliderSection";
import FooterSection from "@/components/FooterSection";
import ClientsLogosSection from "@/components/ClientsLogosSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative">
      {/* Navigation - full width, fixed positioning */}
      <Navigation />
      
      {/* Hero Section - Full Screen Video */}
      <HeroSection />
      
      {/* Main content container with side margins and top padding */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 lg:px-8">
        <div id="nosotros">
          <NosotrosSection />
        </div>
        <div id="resultados">
          <ResultsSection />
        </div>
      </div>
      
      {/* Performance Carousel Section - Full width background immediately after ResultsSection */}
      <div className="w-full" id="servicios">
        <PerformanceCarousel />
      </div>
      
      {/* Post Slider Section - Full width background after slider */}
      <div className="w-full">
        <PostSliderSection />
      </div>
      
      {/* Clients Logos Section */}
      <div className="w-full">
        <ClientsLogosSection />
      </div>
      
      {/* Continue with main content container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 lg:px-8">
        <div id="contacto">
          <ContactSection />
        </div>
        <FooterSection />
      </div>
    </div>
  );
};

export default Index;
