import Image from "next/image";
import Navbar from "../others/navbar";
import Pie from "../others/pie";

export default function HomePage() {


  return (
    <div className="grid grid-flow-row grid-rows-2 bg-[--negro1] h-screen Montserrat">
      <div className="grid z-20">
        <Navbar />
        <Image src="/images/Portada.jpeg" alt="Frente" width={1920} height={1080}
          className="absolute w-full h-[50vh] z-10"
        />
        <div className="grid grid-flow-col grid-cols-2 z-20 h-full py-4 px-16">
          <div className="grid grid-flow-row gap-6">
            <div className="grid grid-flow-row text-5xl font-bold">
              <div className="text-[--white1]">SEGURIDAD ELECTRONICA</div>
              <div className="text-[--azulClaro]">PROFESIONAL EN SANTA FE</div>
            </div>
            <div className="text-lg text-[--white1] ">
              Sistema de cámaras, alarmas y monitoreo las 24 horas <br/>
              Con sistema inteligente y soporte técnico real.
            </div>
            <div className="grid grid-flow-col grid-cols-2 gap-4 w-[650px]">
              <div className="grid grid-flow-col place-items-center rounded-md bg-[--azulClaro] text-[--white1] font-semibold py-2 px-4 gap-2">
                <Image src="/images/icons/planilla2.png" alt="logo" width={50} height={50}
                className="justify-self-end w-[35px] h-[35px]"/>
                <div className="justify-self-start">SOLICITAR ASESORAMIENTO</div>
              </div>
              
              <div className="grid grid-flow-col justify-items-start place-items-center rounded-full border-2 border-[--white1] text-[--white1] font-semibold py-2 px-4 gap-4">
                <Image src="/images/icons/whatsapp.png" alt="logo" width={25} height={25}
                className="justify-self-end"/>
                <div className="justify-self-start">HABLAR POR WHATSAPP</div>
              </div>
            </div>
            <div className="grid grid-flow-col grid-cols-3 gap-8 text-[--white1] text-sm font-semibold justify-self-start">
              <div className="grid grid-flow-col place-items-center gap-2">
                <Image src="/images/icons/escudochico.png" alt="logo" width={50} height={50}
                className="w-[50px] h-[50px] rounded-full p-1 border-[1px] border-[--azulClaro] justify-self-end"/>
                <div className="justify-self-start">+15 AÑOS<br/> DE EXPERIENCIA</div>
              </div>
              <div className="grid grid-flow-col place-items-center gap-2">
                <Image src="/images/icons/tuerca2.png" alt="logo" width={50} height={50}
                className="w-[50px] h-[50px] rounded-full p-2.5 border-[1px] border-[--azulClaro] justify-self-end"/>
                <div className="justify-self-start">SOPORTE TÉCNICO<br/> REAL Y PRACTICO</div>
              </div>
              <div className="grid grid-flow-col place-items-center gap-2">
                <Image src="/images/icons/tuercaA2.png" alt="logo" width={50} height={50}
                className="w-[50px] h-[50px] rounded-full  border-[1px] border-[--azulClaro] justify-self-end"/>
                <div className="justify-self-start">INSTALACIONES<br/> PROFESIONALES</div>
              </div>
            </div>
          </div>
          <div>
            {/*Empty for spacing*/}
          </div>
        </div>
      </div>
      {/*Segunda mitad*/}
      <div className="grid grid-flow-row grid-rows-[auto_1fr] bg-[--white1] gap-2">
        <div className="grid justify-center font-bold text-2xl pt-4">SOLUCIONES PARA CADA NECESIDAD</div>
        <div className="grid grid-flow-col place-items-center text-[--azulOscuro] text-lg">
          <div className="grid grid-flow-col place-items-center gap-4">
            <Image src="/images/icons/house2.png" alt="logo" width={200} height={200}
            className="w-[150px] h-[150px]"/>
            <div className="grid grid-flow-row text-sm gap-2">
              <div className="text-xl font-bold">HOGARES</div>
              <div className="font-semibold">
                Camaras Wifi <br/>
                Alarmas Inalambricas <br/>
                Monitoreo 24hs <br/>
              </div>
              <div className="grid text-[--azulClaro] font-semibold text-base py-2">CONSULTAR</div>
            </div>
          </div>
          <div className="grid grid-flow-col place-items-center gap-4">
            <Image src="/images/icons/edificio2.png" alt="logo" width={200} height={200}
            className="w-[150px] h-[150px]"/>
            <div className="grid grid-flow-row text-sm gap-2">
              <div className="text-xl font-bold">EMPRESAS</div>
              <div className="font-semibold">
                Sistemas CCTV profesionales <br/>
                Alarmas y control de accesos <br/>
                Soluciones a medida <br/>
              </div>
              <div className="grid text-[--azulClaro] font-semibold text-base py-2">CONSULTAR</div>
            </div>
          </div>
          <div className="grid grid-flow-col place-items-center gap-4">
            <Image src="/images/icons/blindaje2.png" alt="logo" width={300} height={300}
            className="w-[150px] h-[150px]"/>
            <div className="grid grid-flow-row text-sm gap-2">
              <div className="text-xl font-bold">SOLUCIONES AVANZADAS</div>
              <div className="font-semibold">
                Inteligencia artificial <br/>
                Lectura de patentes (ANPR) <br/>
                Rastreo y analitica <br/>
              </div>
              <div className="grid text-[--azulClaro] font-semibold text-base py-2">CONSULTAR</div>
            </div>
          </div>
        </div>
        <div>
          <Pie/>
        </div>
      </div>

      

    </div>
  );
}


/*
Formulario
  <div className="grid grid-flow-row place-items-center place-self-end text-center Quantico mr-28
  rounded-[5%] bg-[--azulT] text-[--white1] w-[300px] min-[1200px]:w-[350px] min-[1500px]:w-[400px] h-[450px] min-[1200px]:h-[500px] min-[1500px]:h-[600px] text-lg min-[1200px]:text-xl min-[1500px]:text-2xl">
    <div>Cotizá tu alarma llamando al</div>
    <div className="text-2xl min-[1200px]:text-3xl min-[1500px]:text-4xl font-bold text-[--white1]">+5493424220579</div>
    <div>Si preferis, te llamamos!<br/> Dejanos tus datos.</div>
    <input className="px-4 py-2 rounded-md" type="text" placeholder="Nombre"/>
    <input className="px-4 py-2 rounded-md" type="text" placeholder="Teléfono"/>
    <div className="BoxShine Big text-center bg-[--azulClaro] text-[--white1] rounded-full cursor-pointer w-[200px] py-2 ">Enviar</div>
  </div>
*/