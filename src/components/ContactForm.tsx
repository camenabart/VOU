import { useEffect, useRef } from 'react';

const ContactForm = () => {
  const scriptLoaded = useRef(false);
  const formContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Verificar si el script ya fue cargado
    if (scriptLoaded.current) return;
    
    // Cargar el script de HubSpot
    const script = document.createElement('script');
    script.src = 'https://js.hsforms.net/forms/embed/developer/20087212.js';
    script.async = true;
    script.defer = true;
    
    // Crear el contenedor del formulario
    const formContainer = document.createElement('div');
    formContainer.className = 'hs-form-html';
    formContainer.setAttribute('data-region', 'na1');
    formContainer.setAttribute('data-form-id', '705d2068-2083-493f-97b2-740943eab1ff');
    formContainer.setAttribute('data-portal-id', '20087212');
    
    // Limpiar cualquier contenido anterior
    if (formContainerRef.current) {
      formContainerRef.current.innerHTML = '';
      formContainerRef.current.appendChild(formContainer);
    }
    
    // Agregar el script al documento
    document.body.appendChild(script);
    scriptLoaded.current = true;
    
    // Limpieza al desmontar el componente
    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <div className="w-full min-h-[500px]">
      <div className="w-full p-0" ref={formContainerRef}>
        <div 
          className="hs-form-html w-full" 
          data-region="na1"
          data-form-id="705d2068-2083-493f-97b2-740943eab1ff"
          data-portal-id="20087212"
          style={{ 
            width: '100%', 
            minHeight: '500px',
            margin: '0',
            padding: '0',
            border: 'none',
            maxWidth: '100%'
          }}
        >
        </div>
      </div>
      <p className="mt-4 text-sm text-gray-500 text-center w-full px-4">
        ¿Problemas con el formulario?{' '}
        <a 
          href="https://byje4.share.hsforms.com/2cF0gaCCDST-XsnQJQ-qx_w" 
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-black text-white hover:bg-black/90 px-4 py-2 rounded-full transition-colors font-medium hover:no-underline"
        >
          Ábrelo en una nueva pestaña
        </a>
      </p>
    </div>
  );
};

export default ContactForm;
