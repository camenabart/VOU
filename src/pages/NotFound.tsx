import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import SuperHeader from "@/components/SuperHeader";
import FooterSection from "@/components/FooterSection";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-background">
      <SuperHeader />
      <Navigation />
      <div className="flex items-center justify-center pt-32 pb-24">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4 text-primary">404</h1>
          <p className="text-xl text-muted-foreground mb-4">Oops! Página no encontrada</p>
          <Link to="/" className="text-primary hover:text-primary/80 underline transition-colors">
            Volver al Inicio
          </Link>
        </div>
      </div>
      <FooterSection />
    </div>
  );
};

export default NotFound;
