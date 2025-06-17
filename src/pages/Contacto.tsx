import Navigation from "@/components/Navigation";
import SuperHeader from "@/components/SuperHeader";
import FooterSection from "@/components/FooterSection";
import { ArrowLeft, Mail, Phone, MapPin, Clock, CheckCircle, XCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { EMAILJS_CONFIG } from "@/config/emailjs";

const Contacto = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Verificar si EmailJS está configurado correctamente
      const isEmailJSConfigured = 
        window.emailjs && 
        EMAILJS_CONFIG.serviceId !== 'YOUR_SERVICE_ID' &&
        EMAILJS_CONFIG.templateId !== 'YOUR_TEMPLATE_ID' &&
        EMAILJS_CONFIG.publicKey !== 'YOUR_PUBLIC_KEY';

      if (isEmailJSConfigured) {
        // Usar EmailJS si está configurado
        const templateParams = {
          from_name: formData.name,
          from_email: formData.email,
          company: formData.company || 'No especificada',
          phone: formData.phone || 'No especificado',
          service: formData.service || 'No especificado',
          message: formData.message || 'Sin mensaje adicional',
          to_email: 'alejandro@agenciavou.cl,catalina.amenabar@agenciavou.cl,mariajose.valdes@agenciavou.cl'
        };

        await window.emailjs.send(
          EMAILJS_CONFIG.serviceId,
          EMAILJS_CONFIG.templateId,
          templateParams,
          EMAILJS_CONFIG.publicKey
        );
        
        setSubmitStatus('success');
      } else {
        // Fallback a mailto si EmailJS no está configurado
        const emailBody = `
Nueva solicitud de asesoría desde VOU.digital

Datos del contacto:
- Nombre: ${formData.name}
- Email: ${formData.email}
- Empresa: ${formData.company || 'No especificada'}
- Teléfono: ${formData.phone || 'No especificado'}
- Servicio de interés: ${formData.service || 'No especificado'}

Mensaje:
${formData.message || 'Sin mensaje adicional'}

---
Este email fue enviado desde el formulario de contacto de VOU.digital
        `;

        const subject = encodeURIComponent(`Nueva solicitud de asesoría - ${formData.name}`);
        const body = encodeURIComponent(emailBody);
        const mailtoLink = `mailto:alejandro@agenciavou.cl,catalina.amenabar@agenciavou.cl,mariajose.valdes@agenciavou.cl?subject=${subject}&body=${body}`;
        
        window.open(mailtoLink, '_blank');
        setSubmitStatus('success');
      }
      
      // Limpiar formulario después de 3 segundos
      setTimeout(() => {
        setFormData({
          name: '',
          email: '',
          company: '',
          phone: '',
          service: '',
          message: ''
        });
        setSubmitStatus('idle');
      }, 3000);
      
    } catch (error) {
      console.error('Error al enviar formulario:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: <MapPin className="w-6 h-6 text-primary" />,
      title: "Nuestras Oficinas",
      details: [
        {
          location: "Chile",
          address: "Apoquindo 4660, piso 11, Oficina 1102, Las Condes, Santiago",
          code: "Código postal: 7560969"
        },
        {
          location: "Costa Rica",
          address: "WVMC+898, Trejos Montealegre, San José Province, Escazu, Costa Rica"
        }
      ]
    },
    {
      icon: <Mail className="w-6 h-6 text-primary" />,
      title: "Email",
      info: "alejandro@agenciavou.cl"
    },
    {
      icon: <Phone className="w-6 h-6 text-primary" />,
      title: "Teléfono",
      info: "+56 2 1234 5678"
    },
    {
      icon: <Clock className="w-6 h-6 text-primary" />,
      title: "Horario de Atención",
      info: "Lunes a Viernes: 9:00 - 18:00"
    }
  ];

  const services = [
    "Performance Digital & IA",
    "IA Conversacional",
    "Conversion Rate Optimization (CRO)",
    "SEO Potenciado por IA",
    "Medios Digitales: Performance & Branding",
    "Automatización de Marketing"
  ];

  return (
    <div className="min-h-screen bg-background">
      <SuperHeader />
      <Navigation />
      
      <section className="pt-32 pb-24">
        <div className="container mx-auto px-4 lg:px-8">
          {/* Back arrow */}
          <div className="mb-12">
            <Link 
              to="/" 
              className="inline-flex items-center gap-3 text-primary hover:text-primary/80 transition-colors group"
            >
              <ArrowLeft 
                size={20} 
                className="transform group-hover:-translate-x-1 transition-transform"
              />
              <span>Volver</span>
            </Link>
          </div>

          {/* Hero Section */}
          <div className="max-w-4xl mx-auto mb-20 text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-primary mb-8">
              Contacto
            </h1>
            <p className="text-xl text-foreground leading-relaxed mb-8">
              Estamos para asesorarte y hacer crecer tu negocio con IA y automatización
            </p>
          </div>

          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-foreground mb-6">
                Solicita tu consultoría gratuita
              </h2>
              <p className="text-muted-foreground mb-8">
                Completa el formulario y uno de nuestros especialistas se contactará contigo en las próximas 24 horas.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      Nombre *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-foreground placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="Tu nombre completo"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-foreground placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="tu@empresa.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-foreground mb-2">
                      Empresa
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-foreground placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="Nombre de tu empresa"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                      Teléfono
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-foreground placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="+56 9 1234 5678"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-foreground mb-2">
                    Servicio de interés
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  >
                    <option value="">Selecciona un servicio</option>
                    {services.map((service, index) => (
                      <option key={index} value={service} className="bg-gray-800">
                        {service}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Mensaje
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-foreground placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
                    placeholder="Cuéntanos sobre tu proyecto y objetivos..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-primary hover:bg-primary/90 disabled:bg-gray-600 disabled:cursor-not-allowed text-black py-4 rounded-lg font-medium transition-colors flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin h-5 w-5 border-2 border-black border-t-transparent rounded-full"></div>
                      Enviando...
                    </>
                  ) : (
                    'Enviar Asesoría'
                  )}
                </button>

                {/* Success/Error Messages */}
                {submitStatus === 'success' && (
                  <div className="flex items-center gap-2 p-4 bg-green-500/20 border border-green-500/30 rounded-lg text-green-400">
                    <CheckCircle size={20} />
                    <span>¡Solicitud procesada exitosamente! Te contactaremos en las próximas 24 horas.</span>
                  </div>
                )}
                
                {submitStatus === 'error' && (
                  <div className="flex items-center gap-2 p-4 bg-red-500/20 border border-red-500/30 rounded-lg text-red-400">
                    <XCircle size={20} />
                    <span>Hubo un error al enviar la solicitud. Por favor, intenta nuevamente o contáctanos directamente a alejandro@agenciavou.cl</span>
                  </div>
                )}
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                <h2 className="text-2xl font-bold text-foreground mb-6">
                  Información de contacto
                </h2>
                
                <div className="space-y-6">
                  {contactInfo.map((item, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="flex-shrink-0 p-3 bg-primary/20 rounded-lg">
                        {item.icon}
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                        {item.details ? (
                          <div className="space-y-3">
                            {item.details.map((detail, detailIndex) => (
                              <div key={detailIndex}>
                                <p className="font-medium text-primary">{detail.location}</p>
                                <p className="text-sm text-muted-foreground">{detail.address}</p>
                                {detail.code && (
                                  <p className="text-sm text-muted-foreground">{detail.code}</p>
                                )}
                              </div>
                            ))}
                          </div>
                        ) : (
                          <p className="text-muted-foreground">{item.info}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Partners */}
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                <h3 className="text-xl font-bold text-foreground mb-6">
                  Nuestros partners
                </h3>
                <div className="grid grid-cols-3 gap-4">
                  {['Meta', 'Google', 'HubSpot'].map((partner, index) => (
                    <div 
                      key={index}
                      className="flex items-center justify-center p-4 bg-white/10 rounded-lg"
                    >
                      <span className="text-primary font-medium text-sm">{partner}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <FooterSection />
    </div>
  );
};

export default Contacto; 