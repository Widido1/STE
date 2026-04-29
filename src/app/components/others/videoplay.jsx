'use client'; // Necesario si usas App Router (Next.js 13+)

import { useRef, useState } from 'react';

export default function VideoPlay({ src, className }) {
  const videoRef = useRef(null);
  const [isMuted, setIsMuted] = useState(true); // Comienza mudo (para autoplay)

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <div className={className}>
      <video
        ref={videoRef}
        src={src}
        autoPlay
        loop
        muted={isMuted}
        playsInline // Importante en móviles
        className="grid w-full h-[50vh] min-[700px]:h-[65vh] min-[900px]:h-screen object-cover" // Ajusta según diseño
      />
      <button
        onClick={toggleMute}
        className="absolute bottom-4 right-4 bg-black/50 text-white p-2 rounded"
      >
        {isMuted ? '🔇' : '🔊'}
      </button>
    </div>
  );
}