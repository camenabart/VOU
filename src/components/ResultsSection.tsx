import { TrendingUp, Target, Users, Zap, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const ResultsSection = () => {
  
  const metrics = [
    {
      icon: TrendingUp,
      value: "340%",
      label: "Incremento promedio en ROAS",
      color: "from-green-500/20 to-emerald-500/20"
    },
    {
      icon: Target,
      value: "87%",
      label: "Reducción en CPA",
      color: "from-blue-500/20 to-cyan-500/20"
    },
    {
      icon: Zap,
      value: "95%",
      label: "Automatización de procesos",
      color: "from-purple-500/20 to-pink-500/20"
    },
    {
      icon: Users,
      value: "75%",
      label: "Mejora en conversión",
      color: "from-yellow-500/20 to-orange-500/20"
    }
  ];

  // Sección eliminada por solicitud del usuario
  return null;
};

export default ResultsSection;
