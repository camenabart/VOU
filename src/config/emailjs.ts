// Configuración para EmailJS
export const EMAILJS_CONFIG = {
  serviceId: 'service_ufxlhff',
  templateId: 'template_a4yov9f',
  publicKey: 'K-MTrrx59hF2h5QDB'
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