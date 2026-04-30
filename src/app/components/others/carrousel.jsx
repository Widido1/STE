export default function Carrousel({ items, direction = 'left', speed = 20 }) {
  const duplicatedItems = [...items, ...items];

  return (
    <div className="infinite-track-container">
      <div
        className={`infinite-marquee-track ${direction === 'right' ? 'reverse' : ''}`}
        style={{ '--speed': `${speed}s` }}
      >
        {duplicatedItems.map((item, index) => (
          <div key={index} className="infinite-marquee-item">
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}
// El Carrousel solo funciona, si el ancho de total de los items del carrousel son mas grandes que el ancho de la pantalla

/* 
CSS que va en el global para que esto funcione:
/*Carrousel ==========================================*/

/* Contenedor principal que oculta el desbordamiento 
.infinite-track-container {
  width: 100%;
  overflow-x: clip;
  position: relative;
}

/* Pista que se anima 
.infinite-marquee-track {
  display: flex; /* en lugar de inline-flex 
  animation: infinite-scroll var(--speed, 20s) linear infinite;
  width: max-content;
}

/* Dirección inversa (hacia la derecha) 
.infinite-marquee-track.reverse {
  animation-direction: reverse;
}

/* Cada elemento del tren 
.infinite-marquee-item {
  flex-shrink: 0;
  margin-right: 1rem;  /* Ajusta el espacio entre elementos
  white-space: normal; /* Permite que el texto interno pueda saltar línea si es necesario 
}

/* Pausa al hacer hover 
.infinite-marquee-track:hover {
  animation-play-state: paused;
}

@keyframes infinite-scroll {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}


*/