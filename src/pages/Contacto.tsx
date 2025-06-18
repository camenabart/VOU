import Navigation from "@/components/Navigation";
import SuperHeader from "@/components/SuperHeader";
import FooterSection from "@/components/FooterSection";
import { ArrowLeft, Mail, Phone, MapPin, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

const Contacto = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Formulario básico - sin funcionalidad de envío
    console.log('Datos del formulario:', formData);
    alert('Formulario enviado (función básica)');
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
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      Nombre *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="Tu nombre"
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
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="tu@empresa.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
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
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
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
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
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
                      <option key={index} value={service} className="bg-background text-foreground">
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
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-y"
                    placeholder="Cuéntanos sobre tu proyecto y cómo podemos ayudarte..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full px-8 py-4 bg-primary text-black font-semibold rounded-lg hover:bg-primary/90 transition-colors"
                >
                  Enviar Consulta
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                <h3 className="text-xl font-bold text-foreground mb-6">
                  Información de Contacto
                </h3>
                
                <div className="space-y-6">
                  {contactInfo.map((item, index) => (
                    <div key={index} className="flex items-start gap-4">
                      {item.icon}
                      <div>
                        <h4 className="font-semibold text-foreground mb-2">
                          {item.title}
                        </h4>
                        {item.details ? (
                          <div className="space-y-3">
                            {item.details.map((detail, idx) => (
                              <div key={idx}>
                                <p className="font-medium text-primary text-sm">
                                  {detail.location}
                                </p>
                                <p className="text-muted-foreground text-sm">
                                  {detail.address}
                                </p>
                                {detail.code && (
                                  <p className="text-muted-foreground text-sm">
                                    {detail.code}
                                  </p>
                                )}
                              </div>
                            ))}
                          </div>
                        ) : (
                          <p className="text-muted-foreground">
                            {item.info}
                          </p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Contact Methods */}
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                <h3 className="text-xl font-bold text-foreground mb-6">
                  Contacto Directo
                </h3>
                <div className="space-y-4">
                  <a 
                    href="mailto:alejandro@agenciavou.cl"
                    className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Mail size={20} />
                    <span>alejandro@agenciavou.cl</span>
                  </a>
                  <a 
                    href="tel:+56212345678"
                    className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Phone size={20} />
                    <span>+56 2 1234 5678</span>
                  </a>
                </div>
              </div>

              {/* Map or additional info could go here */}
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                <h3 className="text-xl font-bold text-foreground mb-6">
                  ¿Por qué elegir VOU?
                </h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span>Especialistas en Performance Digital + IA</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span>Consultoría personalizada y estratégica</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span>Resultados medibles y escalables</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span>Respuesta en menos de 24 horas</span>
                  </li>
                </ul>
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