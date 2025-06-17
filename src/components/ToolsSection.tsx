const ToolsSection = () => {
  const tools = [
    {
      name: "Google Analytics 4",
      image: "https://www.metrix.digital/wp-content/uploads/sites/8/2023/03/GA4.png",
      alt: "Google Analytics 4"
    },
    {
      name: "Looker Studio", 
      image: "https://www.metrix.digital/wp-content/uploads/sites/8/2024/02/Logo-Looker-Studio-260×120px-_3_.webp",
      alt: "Looker Studio"
    },
    {
      name: "Data Slayer",
      image: "https://www.metrix.digital/wp-content/uploads/sites/8/2024/02/Logo-Dataslayer-260×120px-_1_.webp", 
      alt: "Data Slayer"
    },
    {
      name: "Semrush",
      image: "https://www.metrix.digital/wp-content/uploads/sites/8/2023/03/Semrush.png",
      alt: "Semrush"
    },
    {
      name: "BUK",
      image: "https://www.moov.cl/wp-content/uploads/sites/7/2024/11/BUK.png",
      alt: "BUK"
    },
    {
      name: "Festival ACHAP",
      image: "https://www.moov.cl/wp-content/uploads/sites/7/2024/11/festival-achap-300x159.png",
      alt: "Festival ACHAP"
    },
    {
      name: "Premier Partner",
      image: "https://www.moov.cl/wp-content/uploads/sites/7/2025/03/PremierPartner-RGB.png",
      alt: "Premier Partner"
    },
    {
      name: "Endeavor",
      image: "https://www.moov.cl/wp-content/uploads/sites/7/2024/11/endeavor-300x149.png",
      alt: "Endeavor"
    },
    {
      name: "HubSpot",
      image: "https://www.moov.cl/wp-content/uploads/sites/7/2024/11/hubspot.png",
      alt: "HubSpot"
    },
    {
      name: "Conectif",
      image: "https://www.moov.cl/wp-content/uploads/sites/7/2024/11/conectif.png",
      alt: "Conectif"
    },
    {
      name: "Shopify Partners",
      image: "https://www.moov.cl/wp-content/uploads/sites/7/2024/11/shopify-partners-300x112.png",
      alt: "Shopify Partners"
    },
    {
      name: "AWS Partner",
      image: "https://www.moov.cl/wp-content/uploads/sites/7/2024/11/AWS-partner-300x100.png",
      alt: "AWS Partner"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-sm text-primary mb-4">
            <span>CONOCE</span>
          </h2>
          <h2 className="text-xs lg:text-3xl font-medium text-foreground mb-8">
            Las herramientas que permiten nuestras creaciones
          </h2>
        </div>
        
        <div className="flex flex-wrap justify-center items-center gap-12 lg:gap-16">
          {tools.map((tool, index) => (
            <figure key={index} className="mb-0" data-aos="fade-up" data-aos-delay={index * 100}>
              <img 
                src={tool.image} 
                alt={tool.alt}
                className="h-16 lg:h-20 w-auto object-contain filter grayscale hover:grayscale-0 transition-all duration-300 hover:scale-110"
              />
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ToolsSection; 