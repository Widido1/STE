import Image from "next/image";

export default function CardServicio(props) {
  return (
    <div className="relative group bg-transparent h-[500px] w-[350px] z-20">
      {/* Imagen de fondo */}
      <Image
        src={props.img}
        alt="Frente"
        width={800}
        height={800}
        className="absolute inset-0 z-10 rounded-md w-full h-full object-cover"
      />

      {/* Contenedor anclado al fondo con flex columna normal */}
      <div className="absolute bottom-0 left-0 right-0 z-20 flex flex-col OdibeeSans w-full Theme2 rounded-md">
        {/* Título: siempre visible, inicialmente pegado al fondo */}
        <div className="bg-[--azulClaro] text-[--white1] rounded-md text-center text-3xl py-2 px-4 transition-all">
          {props.title}
        </div>

        {/* Texto expandible: altura 0 inicialmente, al hover crece y empuja el título hacia arriba */}
        <div className="grid overflow-hidden transition-all duration-500 max-h-0 group-hover:max-h-40">
          <div className="grid text-xl py-2 px-4">{props.text}</div>
        </div>
      </div>
    </div>
  );
}