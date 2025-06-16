import Navigation from "@/components/Navigation";
import SuperHeader from "@/components/SuperHeader";
import HeroSection from "@/components/HeroSection";
import NosotrosSection from "@/components/NosotrosSection";
import ResultsSection from "@/components/ResultsSection";
import PerformanceCarousel from "@/components/PerformanceCarousel";
import FooterSection from "@/components/FooterSection";
import ClientsLogosSection from "@/components/ClientsLogosSection";
import ToolsSection from "@/components/ToolsSection";
import ServicesGridSection from "@/components/ServicesGridSection";
import CTASection from "@/components/CTASection";
import FinalCTASection from "@/components/FinalCTASection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative overflow-x-hidden">
      {/* SuperHeader - above navigation */}
      <SuperHeader />
      
      {/* Navigation - full width, fixed positioning */}
      <Navigation />
      
      {/* Hero Section - Full Screen Video */}
      <HeroSection />
      
      {/* Main content container with side margins and top padding */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 lg:px-8">
        <div id="nosotros">
          <NosotrosSection />
        </div>
      </div>
      
      {/* Services Grid Section - Full width background after NosotrosSection */}
      <div className="w-full">
        <ServicesGridSection />
      </div>
      
      {/* Main content container continued */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 lg:px-8">
        <div id="Casos de estudio">
          <ResultsSection />
        </div>
      </div>
      
      {/* Tools Section - Full width background after ResultsSection */}
      <div className="w-full">
        <ToolsSection />
      </div>
      
      {/* Performance Carousel Section - Full width background immediately after ToolsSection */}
      <div className="w-full" id="servicios">
        <PerformanceCarousel />
      </div>
      
      {/* CTA Section - Full width background */}
      <div className="w-full">
        <CTASection />
      </div>
      
      {/* Clients Logos Section */}
      <div className="w-full">
        <ClientsLogosSection />
      </div>
      
      {/* Final CTA Section - Full width background before footer */}
      <div className="w-full">
        <FinalCTASection />
      </div>
      
      {/* Continue with main content container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 lg:px-8">
        <FooterSection />
      </div>
    </div>
  );
};

export default Index;
