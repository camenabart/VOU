
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    email: "",
    telefono: "",
    empresa: "",
    sitioWeb: "",
    pais: "",
    servicio: "",
    mensaje: ""
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Formulario enviado:", formData);
    // Aquí se manejaría el envío del formulario
  };

  return (
    <div className="glass-effect rounded-3xl p-8 lg:p-12 shadow-2xl animate-fade-in-up">
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Nombre y Apellido */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label htmlFor="nombre" className="text-foreground">Nombre *</Label>
            <Input
              id="nombre"
              type="text"
              value={formData.nombre}
              onChange={(e) => handleInputChange("nombre", e.target.value)}
              className="bg-background/50 border-white/20"
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="apellido" className="text-foreground">Apellido *</Label>
            <Input
              id="apellido"
              type="text"
              value={formData.apellido}
              onChange={(e) => handleInputChange("apellido", e.target.value)}
              className="bg-background/50 border-white/20"
              required
            />
          </div>
        </div>

        {/* Email y Teléfono */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label htmlFor="email" className="text-foreground">Email corporativo *</Label>
            <Input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => handleInputChange("email", e.target.value)}
              className="bg-background/50 border-white/20"
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="telefono" className="text-foreground">Teléfono *</Label>
            <Input
              id="telefono"
              type="tel"
              value={formData.telefono}
              onChange={(e) => handleInputChange("telefono", e.target.value)}
              className="bg-background/50 border-white/20"
              required
            />
          </div>
        </div>

        {/* Empresa y Sitio Web */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label htmlFor="empresa" className="text-foreground">Empresa *</Label>
            <Input
              id="empresa"
              type="text"
              value={formData.empresa}
              onChange={(e) => handleInputChange("empresa", e.target.value)}
              className="bg-background/50 border-white/20"
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="sitioWeb" className="text-foreground">Sitio web de la empresa</Label>
            <Input
              id="sitioWeb"
              type="url"
              value={formData.sitioWeb}
              onChange={(e) => handleInputChange("sitioWeb", e.target.value)}
              className="bg-background/50 border-white/20"
              placeholder="https://www.ejemplo.com"
            />
          </div>
        </div>

        {/* País y Servicio */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label htmlFor="pais" className="text-foreground">País/Región *</Label>
            <Select onValueChange={(value) => handleInputChange("pais", value)}>
              <SelectTrigger className="bg-background/50 border-white/20">
                <SelectValue placeholder="Selecciona tu país" />
              </SelectTrigger>
              <SelectContent className="bg-background border-white/20">
                <SelectItem value="mexico">México</SelectItem>
                <SelectItem value="argentina">Argentina</SelectItem>
                <SelectItem value="colombia">Colombia</SelectItem>
                <SelectItem value="chile">Chile</SelectItem>
                <SelectItem value="peru">Perú</SelectItem>
                <SelectItem value="espana">España</SelectItem>
                <SelectItem value="usa">Estados Unidos</SelectItem>
                <SelectItem value="otro">Otro</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="servicio" className="text-foreground">Servicio que desea cotizar *</Label>
            <Select onValueChange={(value) => handleInputChange("servicio", value)}>
              <SelectTrigger className="bg-background/50 border-white/20">
                <SelectValue placeholder="Selecciona un servicio" />
              </SelectTrigger>
              <SelectContent className="bg-background border-white/20">
                <SelectItem value="performance-marketing">Performance Marketing</SelectItem>
                <SelectItem value="social-media">Social Media</SelectItem>
                <SelectItem value="automatizacion">Automatización IA</SelectItem>
                <SelectItem value="google-ads">Google Ads</SelectItem>
                <SelectItem value="facebook-ads">Facebook Ads</SelectItem>
                <SelectItem value="email-marketing">Email Marketing</SelectItem>
                <SelectItem value="seo">SEO</SelectItem>
                <SelectItem value="consultoria">Consultoría Digital</SelectItem>
                <SelectItem value="otro">Otro</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Mensaje */}
        <div className="space-y-2">
          <Label htmlFor="mensaje" className="text-foreground">Mensaje</Label>
          <Textarea
            id="mensaje"
            value={formData.mensaje}
            onChange={(e) => handleInputChange("mensaje", e.target.value)}
            className="bg-background/50 border-white/20 min-h-[120px]"
            placeholder="Cuéntanos más sobre tu proyecto, objetivos y presupuesto estimado..."
          />
        </div>

        {/* Botón de envío */}
        <div className="pt-6">
          <Button 
            type="submit" 
            size="lg" 
            className="w-full bg-primary text-primary-foreground hover:bg-primary/90 text-lg py-4 hover-lift"
          >
            Enviar solicitud
          </Button>
        </div>

        <p className="text-sm text-muted-foreground text-center">
          Al enviar este formulario, aceptas que nos pongamos en contacto contigo sobre nuestros servicios.
        </p>
      </form>
    </div>
  );
};

export default ContactForm;
