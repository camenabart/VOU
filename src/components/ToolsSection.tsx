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
      name: "Google Partner",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/2560px-Google_2015_logo.svg.png",
      alt: "Google Partner Premium"
    },
    {
      name: "HubSpot Gold Partner",
      image: "https://www.hubspot.com/hubfs/HubSpot_Logos/HubSpot-Inversed-Favicon.png",
      alt: "HubSpot Gold Partner"
    },
    {
      name: "Shopify Partners",
      image: "https://cdn.shopify.com/s/files/1/0070/7032/files/shopify_logo_darkbg.svg",
      alt: "Shopify Partners"
    },
    {
      name: "AWS Partner",
      image: "https://a0.awsstatic.com/libra-css/images/logos/aws_logo_smile_1200x630.png",
      alt: "AWS Partner Network"
    },
    {
      name: "Endeavor",
      image: "https://endeavor.org/wp-content/uploads/2021/03/endeavor-logo-white.svg",
      alt: "Endeavor"
    },
    {
      name: "Connectif",
      image: "https://connectif.ai/wp-content/uploads/2020/02/connectif-logo-dark.svg",
      alt: "Connectif Select"
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