// Configuración para EmailJS
export const EMAILJS_CONFIG = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || 'YOUR_SERVICE_ID', // Configura en tu .env
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'YOUR_TEMPLATE_ID', // Configura en tu .env
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'YOUR_PUBLIC_KEY', // Configura en tu .env
};

// Tipos para EmailJS
declare global {
  interface Window {
    emailjs: {
      send: (serviceId: string, templateId: string, templateParams: any, publicKey: string) => Promise<any>;
      init: (options: { publicKey: string }) => void;
    };
  }
} 