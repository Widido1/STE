import Image from "next/image";
import Navbar from "../others/navbar";

export default function HomePage() {
  return (
    <div className="grid w-full">
      <Navbar />
      <Image src="/images/Camara1.jpg" alt="Frente" width={1920} height={1080}
        className="absolute h-screen z-10"
      />
      <div>
        <div className="grid grid-flow-row">
          <div></div>
        </div>
        <div className="grid grid-flow-row place-items-center place-self-end text-center z-20
        rounded-[5%] bg-[--azulT] text-[--white1] w-[400px] h-[600px] text-2xl m-20">
          <div>Cotizá tu alarma llamando al</div>
          <div className="text-3xl font-bold">+5493424220579</div>
          <div>Si preferis, te llamamos!<br/> Dejanos tus datos.</div>
          <input className="px-4 py-2 rounded-md" type="text" placeholder="Nombre"/>
          <input className="px-4 py-2 rounded-md" type="text" placeholder="Teléfono"/>
          <div className="bg-[--white1] text-[--azulSTE] px-4 py-2 rounded-md">Enviar</div>

        </div>
      </div>

    </div>
  );
}