import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 bg-foreground text-background/80">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <img 
              src="/img/logo-main.jpg" 
              alt="Acalme Baby" 
              className="h-8 w-auto"
            />
            <Heart className="w-5 h-5 text-primary fill-primary" />
          </div>
          
          <p className="text-sm mb-6">
            1º Dispositivo Híbrido do Brasil — Tecnologia com patente requerida no INPI
          </p>
          
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-background/60">
            <span>© 2024 Acalme Baby</span>
            <span>•</span>
            <span>Todos os direitos reservados</span>
            <span>•</span>
            <span>Feito com amor no Brasil</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
