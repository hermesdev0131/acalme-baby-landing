import { Play, Pause, Volume2, Maximize } from "lucide-react";
import { useState, useRef } from "react";

const VideoSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [showControls, setShowControls] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-xs font-semibold tracking-wider uppercase rounded-full mb-6">
              Demonstração Visual
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-medium text-foreground mb-4">
              Veja Como Funciona na Prática
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Um vídeo rápido mostrando o dispositivo em ação e como ele ajuda o bebê a relaxar
            </p>
          </div>

          {/* Video Player */}
          <div className="bg-card rounded-3xl p-6 border border-border shadow-xl overflow-hidden">
            <div className="relative aspect-video bg-foreground/5 rounded-2xl overflow-hidden group">
              <video
                ref={videoRef}
                src="/video/comparison-visual.mp4"
                poster="/img/comparison-visual.jpg"
                className="w-full h-full object-contain"
                controls={showControls}
                playsInline
                preload="metadata"
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
                aria-label="Vídeo demonstrativo: dispositivo Acalme Baby em ação"
              >
                <source src="/video/comparison-visual.mp4" type="video/mp4" />
                {/* Fallback to image if video not available */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <img
                    src="/img/comparison-visual.jpg"
                    alt="Demonstração visual do dispositivo Acalme Baby"
                    className="w-full h-full object-contain"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                      const fallback = e.currentTarget.parentElement?.querySelector('.video-fallback') as HTMLElement;
                      if (fallback) fallback.style.display = 'flex';
                    }}
                  />
                </div>
              </video>

              {/* Custom Play Button Overlay (if needed) */}
              {!isPlaying && !showControls && (
                <button
                  onClick={togglePlay}
                  className="absolute inset-0 flex items-center justify-center bg-foreground/10 hover:bg-foreground/20 transition-colors group"
                  aria-label="Reproduzir vídeo"
                >
                  <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform">
                    <Play className="w-10 h-10 text-primary-foreground ml-1" fill="currentColor" />
                  </div>
                </button>
              )}

              {/* Fallback Message */}
              <div className="video-fallback hidden absolute inset-0 flex flex-col items-center justify-center bg-muted/50 p-8">
                <Play className="w-16 h-16 text-muted-foreground mb-4" />
                <p className="text-muted-foreground text-center">
                  Vídeo em produção
                  <br />
                  <span className="text-sm">Em breve você poderá ver o dispositivo em ação</span>
                </p>
              </div>
            </div>

            {/* Video Description */}
            <div className="mt-6 space-y-4">
              <div className="bg-muted/30 rounded-xl p-6">
                <h3 className="font-semibold text-foreground mb-3">
                  O que você verá no vídeo:
                </h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-0.5">•</span>
                    <span>Dispositivo sendo colocado corretamente no bebê (barriga + costas)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-0.5">•</span>
                    <span>Destaque para o aquecimento simultâneo na região abdominal e lombar</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-0.5">•</span>
                    <span>Representação visual do sinal neural indo para o cérebro (Gate Control Theory)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-0.5">•</span>
                    <span>Movimento de gases e liberação de fezes (representação simbólica)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-0.5">•</span>
                    <span>Bebê relaxando e encontrando alívio</span>
                  </li>
                </ul>
              </div>

              <p className="text-xs text-muted-foreground text-center">
                Duração aproximada: 20-30 segundos
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
