"use client";
import { useEffect, useState, useCallback } from "react";
import Image from "next/image";

// Datos de las imágenes: ruta, texto alternativo y clave única
const imagesData = [
  { src: "/images/galeria/Img01.jpg", alt: "Imagen 1", key: 1 },
  { src: "/images/galeria/Img02.webp", alt: "Imagen 2", key: 2 },
  { src: "/images/galeria/Img03.webp", alt: "Imagen 3", key: 3 },
  { src: "/images/galeria/Img04.jpg", alt: "Imagen 4", key: 4 },
  { src: "/images/galeria/Img05.jpg", alt: "Imagen 5", key: 5 },
  { src: "/images/galeria/Img06.jpg", alt: "Imagen 6", key: 6 },
  { src: "/images/galeria/Img07.jpg", alt: "Imagen 7", key: 7 },
  { src: "/images/galeria/Img08.jpg", alt: "Imagen 8", key: 8 }
];

export default function ImageSlider(props) {
  const nameClass =
    "imgGray w-[55px] min-[1100px]:w-[120px] h-[40px] min-[1100px]:h-[120px] rounded-md cursor-pointer transition-transform hover:scale-105";
  const ITEMS_TO_SHOW = 4;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [arrowLDisabled, setArrowLDisabled] = useState(true);
  const [arrowRDisabled, setArrowRDisabled] = useState(false);
  // Estado para el lightbox
  const [lightboxImage, setLightboxImage] = useState(null); // { src, alt } o null

  const name = props.name;

  const baseArrowClass =
    "font-bold Bigger rounded-full text-[--white3] text-3xl w-[30px] h-[30px] flex items-center justify-center transition-all";

  useEffect(() => {
    setArrowLDisabled(currentIndex === 0);
    setArrowRDisabled(currentIndex >= imagesData.length - ITEMS_TO_SHOW);
  }, [currentIndex]);

  const nextSlide = useCallback(() => {
    if (arrowRDisabled) return;
    let N = ITEMS_TO_SHOW;
    while (N > 0 && currentIndex + N >= imagesData.length - (ITEMS_TO_SHOW - 1)) {
      N -= 1;
    }
    if (N > 0) setCurrentIndex(currentIndex + N);
  }, [currentIndex, arrowRDisabled]);

  const prevSlide = useCallback(() => {
    if (arrowLDisabled) return;
    let N = ITEMS_TO_SHOW;
    while (N > 0 && currentIndex - N < 0) {
      N -= 1;
    }
    if (N > 0) setCurrentIndex(currentIndex - N);
  }, [currentIndex, arrowLDisabled]);

  // Abrir lightbox con la imagen seleccionada
  const openLightbox = (src, alt) => {
    setLightboxImage({ src, alt });
    // Prevenir scroll del fondo mientras el modal está abierto
    document.body.style.overflow = "hidden";
  };

  // Cerrar lightbox
  const closeLightbox = () => {
    setLightboxImage(null);
    document.body.style.overflow = "auto";
  };

  // Cerrar con tecla Escape
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && lightboxImage) {
        closeLightbox();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxImage]);

  return (
    <>
      <div>
        <div className="grid grid-flow-col place-content-center place-items-center w-full">
          <div className="text-center text-3xl font-extrabold">{name}</div>
        </div>
        <div className="pb-2 text-[--white3] px-2 min-[1500px]:px-4">
          <div className="grid grid-flow-col place-self-center place-content-center place-items-center gap-4 min-[1500px]:gap-8">
            <button
              className={`${baseArrowClass} ${arrowLDisabled ? "opacity-0 pointer-events-none" : "opacity-90 hover:opacity-100"}`}
              onClick={prevSlide}
              aria-label="Anterior"
            >
              {"<"}
            </button>
            <div className="grid grid-cols-4 gap-4 min-[1500px]:gap-8">
              {imagesData.slice(currentIndex, currentIndex + ITEMS_TO_SHOW).map((img) => (
                <div
                  key={img.key}
                  onClick={() => openLightbox(img.src, img.alt)}
                  className="cursor-pointer"
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    width={150}
                    height={150}
                    className={nameClass}
                  />
                </div>
              ))}
            </div>
            <button
              className={`${baseArrowClass} ${arrowRDisabled ? "opacity-0 pointer-events-none" : "opacity-90 hover:opacity-100"}`}
              onClick={nextSlide}
              aria-label="Siguiente"
            >
              {">"}
            </button>
          </div>
        </div>
      </div>

      {/* Lightbox / Modal */}
      {lightboxImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
          onClick={closeLightbox} // Cerrar al hacer clic fuera
        >
          <div
            className="relative max-w-[90vw] max-h-[90vh] p-2"
            onClick={(e) => e.stopPropagation()} // Evitar cerrar al hacer clic dentro de la imagen
          >
            <button
              className="absolute -top-10 right-0 text-white text-3xl font-bold bg-black/50 rounded-full w-8 h-8 flex items-center justify-center hover:bg-black/80 transition"
              onClick={closeLightbox}
              aria-label="Cerrar"
            >
              ×
            </button>
            <div className="relative w-full h-full flex items-center justify-center">
              <Image
                src={lightboxImage.src}
                alt={lightboxImage.alt}
                width={1200}
                height={800}
                className="object-contain rounded-lg shadow-2xl max-w-full max-h-[85vh] w-auto h-auto"
                priority
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}