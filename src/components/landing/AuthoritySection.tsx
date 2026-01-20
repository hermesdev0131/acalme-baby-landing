import { Shield, Award, MapPin, Truck, CreditCard, Lock, Brain, Zap } from "lucide-react";

// Brazilian Flag SVG Component
const BrazilFlag = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg
    viewBox="0 0 20 14"
    className={className}
    role="img"
    aria-label="Bandeira do Brasil"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Green background */}
    <rect width="20" height="14" fill="#009739" />
    {/* Yellow diamond */}
    <path
      d="M 10 2 L 18 7 L 10 12 L 2 7 Z"
      fill="#FEDD00"
    />
    {/* Blue circle */}
    <circle cx="10" cy="7" r="3.5" fill="#012169" />
    {/* White stars - simplified Southern Cross */}
    <g fill="#FFFFFF">
      {/* Top star */}
      <path d="M 10 4.5 L 10.3 5.2 L 11 5.2 L 10.4 5.6 L 10.6 6.3 L 10 5.9 L 9.4 6.3 L 9.6 5.6 L 9 5.2 L 9.7 5.2 Z" />
      {/* Bottom star */}
      <path d="M 10 9.5 L 10.3 10.2 L 11 10.2 L 10.4 10.6 L 10.6 11.3 L 10 10.9 L 9.4 11.3 L 9.6 10.6 L 9 10.2 L 9.7 10.2 Z" />
      {/* Left star */}
      <path d="M 7.5 7 L 7.8 7.7 L 8.5 7.7 L 7.9 8.1 L 8.1 8.8 L 7.5 8.4 L 6.9 8.8 L 7.1 8.1 L 6.5 7.7 L 7.2 7.7 Z" />
      {/* Right star */}
      <path d="M 12.5 7 L 12.8 7.7 L 13.5 7.7 L 12.9 8.1 L 13.1 8.8 L 12.5 8.4 L 11.9 8.8 L 12.1 8.1 L 11.5 7.7 L 12.2 7.7 Z" />
    </g>
  </svg>
);

const AuthoritySection = () => {
  const trustBadges = [
    {
      icon: Shield,
      title: "Compra Segura",
      description: "Ambiente 100% protegido"
    },
    {
      icon: Truck,
      title: "Envio Rastreável",
      description: "Acompanhe sua entrega"
    },
    {
      icon: CreditCard,
      title: "Pagamento Protegido",
      description: "Principais bandeiras"
    },
    {
      icon: Lock,
      title: "Dados Seguros",
      description: "Criptografia SSL"
    }
  ];

  return (
    <section className="py-20 lg:py-28 bg-foreground text-background relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-trust/20 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Patent Section - Enhanced */}
          <div className="text-center mb-16">
            <div className="inline-flex flex-col items-center gap-6 bg-background/10 backdrop-blur-sm rounded-3xl px-10 py-8 border-2 border-background/30 shadow-2xl">
              <div className="w-20 h-20 bg-primary rounded-2xl flex items-center justify-center shadow-lg">
                <Award className="w-10 h-10 text-primary-foreground" />
              </div>
              <div className="text-center">
                <p className="text-sm text-background/70 uppercase tracking-wider mb-2 font-semibold">
                  Patente Protocolada INPI
                </p>
                <p className="text-3xl md:text-4xl font-display font-bold text-background mb-2 tracking-tight">
                  BR 10 2026 000250 0
                </p>
                <p className="text-base text-background/80 max-w-md mx-auto">
                  Tecnologia exclusiva em processo de proteção no INPI
                </p>
              </div>
            </div>
          </div>

          {/* Scientific Terms - Prominent */}
          {/* <div className="grid md:grid-cols-2 gap-6 mb-12">
            <div className="bg-background/10 backdrop-blur-sm rounded-2xl p-6 border border-background/20">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center">
                  <Brain className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-display font-semibold text-background">Plexo Sacral</h3>
                  <p className="text-sm text-background/70">Centro de comando digestivo</p>
                </div>
              </div>
              <p className="text-background/80 text-sm leading-relaxed">
                Localizado na região lombar, controla a coordenação digestiva e o relaxamento do esfíncter.
              </p>
            </div>
            
            <div className="bg-background/10 backdrop-blur-sm rounded-2xl p-6 border border-background/20">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center">
                  <Zap className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-display font-semibold text-background">Tecnologia de Bloqueio da Dor</h3>
                  <p className="text-xs text-background/60 italic">Baseado na Teoria do Portão da Dor</p>
                </div>
              </div>
              <p className="text-background/80 text-sm leading-relaxed">
                O calor bloqueia os sinais de dor no nível neural, proporcionando alívio mais rápido e eficaz.
              </p>
            </div>
          </div> */}

          {/* Made in Brazil */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-3 text-background/90 bg-background/5 px-6 py-3 rounded-full border border-background/20">
              <MapPin className="w-5 h-5 text-primary" />
              <span className="font-semibold">Desenvolvido e Produzido no Brasil</span>
              <BrazilFlag className="w-6 h-4 ml-1" />
            </div>
          </div>

          {/* Trust Badges */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {trustBadges.map((badge, index) => (
              <div 
                key={index}
                className="text-center p-5 bg-background/5 rounded-xl border border-background/10 hover:bg-background/10 transition-colors"
              >
                <badge.icon className="w-7 h-7 mx-auto mb-3 text-primary" />
                <p className="font-semibold text-background text-sm mb-1">{badge.title}</p>
                <p className="text-xs text-background/60">{badge.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AuthoritySection;
