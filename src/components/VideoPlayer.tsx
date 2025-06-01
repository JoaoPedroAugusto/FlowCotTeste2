import React from 'react';
import { Play, Pause, Volume2, VolumeX } from 'lucide-react';

interface VideoPlayerProps {
  src: string;
  title: string;
  poster?: string;
  initialMuted?: boolean; // Adiciona prop para controle inicial do mute
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ src, title, poster, initialMuted = true }) => {
  const [isPlaying, setIsPlaying] = React.useState(false);
  const [isMuted, setIsMuted] = React.useState(initialMuted); // Usa a prop para o estado inicial
  const videoRef = React.useRef<HTMLVideoElement>(null);

  React.useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = isMuted;
    }
  }, [isMuted]);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const handleVideoPlay = () => setIsPlaying(true);
  const handleVideoPause = () => setIsPlaying(false);
  const handleVideoEnded = () => setIsPlaying(false);
  const handleVideoError = () => console.error("Erro ao carregar o vídeo."); // Exemplo de tratamento de erro

  return (
    <div className="relative rounded-xl overflow-hidden shadow-lg group">
      <video
        ref={videoRef}
        className="w-full aspect-video object-cover"
        src={src}
        poster={poster}
        muted={isMuted} // Controlado pelo estado isMuted
        playsInline
        onPlay={handleVideoPlay}
        onPause={handleVideoPause}
        onEnded={handleVideoEnded}
        onError={handleVideoError}
      />
      
      <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
        <div className="flex gap-4">
          <button
            onClick={togglePlay}
            className="p-3 bg-white rounded-full hover:bg-primary-50 transition-colors"
            aria-label={isPlaying ? "Pausar vídeo" : "Reproduzir vídeo"}
          >
            {isPlaying ? (
              <Pause className="w-6 h-6 text-primary-600" />
            ) : (
              <Play className="w-6 h-6 text-primary-600" />
            )}
          </button>
          <button
            onClick={toggleMute}
            className="p-3 bg-white rounded-full hover:bg-primary-50 transition-colors"
            aria-label={isMuted ? "Ativar som" : "Desativar som"}
          >
            {isMuted ? (
              <VolumeX className="w-6 h-6 text-primary-600" />
            ) : (
              <Volume2 className="w-6 h-6 text-primary-600" />
            )}
          </button>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent">
        <h3 className="text-white font-medium">{title}</h3>
      </div>
    </div>
  );
};

export default VideoPlayer;