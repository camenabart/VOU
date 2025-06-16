
import { MapPin } from "lucide-react";
import GoogleMap from "./GoogleMap";

const ContactInfo = () => {
  return (
    <div className="glass-effect rounded-3xl p-8 shadow-2xl animate-fade-in-up h-fit">
      <h3 className="text-2xl font-bold text-primary mb-8">Información de contacto</h3>
      
      <div className="space-y-6">
        <div className="flex items-start space-x-4">
          <MapPin className="text-primary mt-1 flex-shrink-0" size={24} />
          <div>
            <h4 className="font-semibold text-foreground mb-2">Dirección</h4>
            <p className="text-muted-foreground font-medium">Oficina Chile</p>
            <p className="text-muted-foreground">
              Apoquindo 4660, piso 11, Oficina 1102<br />
              Las Condes, Santiago
            </p>
          </div>
        </div>
        
        {/* Mapa de Google Maps */}
        <div className="mt-8">
          <h4 className="font-semibold text-foreground mb-4">Ubicación</h4>
          <GoogleMap />
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
