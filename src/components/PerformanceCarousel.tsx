import { ArrowRight } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";

const PerformanceCarousel = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleVerTodosCasos = () => {
    if (location.pathname === '/resultados') {
      // Si ya estamos en la página de resultados, hacer scroll al header
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    } else {
      // Si estamos en otra página, navegar a resultados
      navigate('/resultados');
    }
  };

  // SECCIÓN COMENTADA TEMPORALMENTE - Casos de estudio Repuestodo
  return null;

  /*
  return (
    <section id="nosotros" className="py-20 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-sm text-primary mb-4">
            <span>CASOS DE ESTUDIO</span>
          </h2>
          <h2 className="text-xs lg:text-3xl font-medium text-foreground mb-8">
            Cómo ayudamos a maximizar el crecimiento de nuestros clientes
          </h2>
        </div>
      </div>
      
      <div className="w-full">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[500px]">
            {/* Left column - Black container with content *//*}
            <div className="bg-black text-white p-8 lg:p-12 flex flex-col justify-center">
              <p className="text-primary text-sm mb-4 uppercase tracking-wider">
                Ecommerce strategy & data management
              </p>
              <h2 className="font-medium text-white mb-6 leading-tight" style={{ fontSize: '25px' }}>
                Éxito Digital en Repuestos<br/>
                Obtuvieron un Impression Share del 60%<br/>
                Un aumento del 108% en ROAS en marzo
              </h2>
              <p className="text-gray-300 text-sm mb-8 leading-relaxed">
                Repuestodo, del Grupo Kaufmann, ha experimentado una transformación digital exitosa. 
                Enfocados en construir la mejor plataforma de repuestos, implementamos estrategias de SEM y SEO, 
                destacando "Tienda online de repuestos". Este enfoque integral ha consolidado a la marca como 
                líder en repuestos automotrices en línea.
              </p>
              <div className="flex items-center">
                <button 
                  onClick={handleVerTodosCasos}
                  className="text-white hover:text-primary transition-colors flex items-center gap-2"
                >
                  <ArrowRight size={20} className="text-primary" />
                </button>
              </div>
            </div>
            
            {/* Right column - Background image *//*}
            <div 
              className="bg-cover bg-center bg-no-repeat min-h-[400px] lg:min-h-[500px] rounded-lg"
              style={{
                backgroundImage: "url(https://www.metrix.digital/wp-content/uploads/sites/8/2023/12/Metrix-760x565px-_1_-2.webp)"
              }}
            />
          </div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 lg:px-8 mt-12">
        <div className="text-center">
          <button 
            onClick={() => navigate('/resultados')}
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-primary to-primary/80 text-black font-medium rounded-full hover:scale-105 transition-transform duration-300"
          >
            Ver todos los casos
          </button>
        </div>
      </div>
    </section>
  );
  */
};

export default PerformanceCarousel;
