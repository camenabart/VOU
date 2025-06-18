import { Instagram, Youtube, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";

const FooterSection = () => {
  return (
    <>
      {/* Main Footer */}
      <div className="bg-background py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            {/* Logo Column */}
            <div className="col-span-12 md:col-span-3 order-0 md:order-1">
              <div className="footer-logo">
                <img 
                  src="/lovable-uploads/VOU.png" 
                  alt="VOU Logo"
                  className="h-12 w-auto"
                />
              </div>
            </div>

            {/* Services Column */}
            <div className="col-span-7 md:col-span-3 order-1 md:order-1">
              <h4 className="text-white font-medium mb-6 text-sm">Servicios</h4>
              <ul className="space-y-3 text-muted-foreground">
                <li><span className="text-sm">Performance potenciado por datos y modelos</span></li>
                <li><span className="text-sm">IA Conversacional al servicio de la experiencia del cliente</span></li>
                <li><span className="text-sm">Automatización e integración tecnológica</span></li>
                <li><span className="text-sm">Creatividad generativa orientada a performance</span></li>
              </ul>
            </div>

            {/* Agencies Column */}
            <div className="col-span-5 md:col-span-2 order-2 md:order-2">
              <h4 className="text-white font-medium mb-6 text-sm">Agencias y consultoras</h4>
              <ul className="space-y-3 text-muted-foreground">
                <li><a href="https://moovmediagroup.com/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors text-sm">Moov Media Group</a></li>
                <li><a href="https://www.somosforma.com/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors text-sm">Forma</a></li>
                <li><a href="https://www.moov.cl/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors text-sm">Moov</a></li>
                <li><a href="https://www.metrix.digital/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors text-sm">Metrix</a></li>
              </ul>
            </div>

            {/* Offices Column */}
            <div className="col-span-12 md:col-span-3 order-3 md:order-3">
              <h4 className="text-white font-medium mb-6 text-sm">Nuestras Oficinas</h4>
              <div className="space-y-6">
                <div>
                  <h5 className="text-white font-medium mb-2 text-sm">Chile</h5>
                  <p className="text-muted-foreground text-sm">
                    Apoquindo 4660, piso 11, Oficina 1102, Las Condes, Santiago<br />
                    Código postal: 7560969
                  </p>
                </div>
                <div>
                  <h5 className="text-white font-medium mb-2 text-sm">Costa Rica</h5>
                  <p className="text-muted-foreground text-sm">
                    WVMC+898, Trejos Montealegre, San José Province, Escazu, Costa Rica
                  </p>
                </div>
              </div>
              <a 
                href="/contacto" 
                className="inline-flex items-center gap-2 mt-6 text-primary hover:text-primary/80 transition-colors text-sm"
              >
                <span>✉</span> Hablemos
              </a>
            </div>

            {/* Partner Logos */}
            <div className="col-span-12 order-4 md:order-4 pt-8 border-t border-border/30">
              <div className="flex flex-wrap items-center justify-center gap-8">
                <img src="https://www.moov.cl/wp-content/uploads/sites/7/2024/11/BUK.png" alt="BUK" className="h-12 w-auto filter grayscale hover:grayscale-0 transition-all duration-300 hover:scale-110" />
                <img src="https://www.moov.cl/wp-content/uploads/sites/7/2024/11/festival-achap-300x159.png" alt="Festival ACHAP" className="h-12 w-auto filter grayscale hover:grayscale-0 transition-all duration-300 hover:scale-110" />
                <img src="https://www.moov.cl/wp-content/uploads/sites/7/2025/03/PremierPartner-RGB.png" alt="Premier Partner" className="h-12 w-auto filter grayscale hover:grayscale-0 transition-all duration-300 hover:scale-110" />
                <img src="https://www.moov.cl/wp-content/uploads/sites/7/2024/11/endeavor-300x149.png" alt="Endeavor" className="h-12 w-auto filter grayscale hover:grayscale-0 transition-all duration-300 hover:scale-110" />
                <img src="https://www.moov.cl/wp-content/uploads/sites/7/2024/11/hubspot.png" alt="HubSpot" className="h-12 w-auto filter grayscale hover:grayscale-0 transition-all duration-300 hover:scale-110" />
                <img src="https://www.moov.cl/wp-content/uploads/sites/7/2024/11/conectif.png" alt="Conectif" className="h-12 w-auto filter grayscale hover:grayscale-0 transition-all duration-300 hover:scale-110" />
                <img src="https://www.moov.cl/wp-content/uploads/sites/7/2024/11/shopify-partners-300x112.png" alt="Shopify Partners" className="h-12 w-auto filter grayscale hover:grayscale-0 transition-all duration-300 hover:scale-110" />
                <img src="https://www.moov.cl/wp-content/uploads/sites/7/2024/11/AWS-partner-300x100.png" alt="AWS Partner" className="h-12 w-auto filter grayscale hover:grayscale-0 transition-all duration-300 hover:scale-110" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="bg-secondary py-6 border-t border-border/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                         <div className="text-center md:text-left">
               <p className="text-muted-foreground text-sm">Copyright © 2025 VOU. All rights reserved</p>
               <p className="text-muted-foreground text-sm">
                 Diseño y Desarrollo <a href="https://www.somosforma.com/" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80 transition-colors">VOU | Moov Media Group</a>.
               </p>
             </div>
                         <div className="flex items-center gap-4">
               <p className="text-muted-foreground text-sm">Síguenos</p>
               <div className="flex gap-3">
                 <a href="https://www.instagram.com/somosmoov/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors p-2 rounded-full hover:bg-primary/10">
                   <Instagram size={18} />
                 </a>
                 <a href="https://www.youtube.com/@MoovMediaGroup" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors p-2 rounded-full hover:bg-primary/10">
                   <Youtube size={18} />
                 </a>
                 <a href="https://www.linkedin.com/company/vouagencycl/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors p-2 rounded-full hover:bg-primary/10">
                   <Linkedin size={18} />
                 </a>
                 <a href="https://www.tiktok.com/@moovmediagroup" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors p-2 rounded-full hover:bg-primary/10">
                   <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                     <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                   </svg>
                 </a>
               </div>
             </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FooterSection;
