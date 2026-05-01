import Image from "next/image";
import Navbar from "../others/navbar";
import Esphere from "../others/esphere";
import Carrousel from "../others/carrousel";
import CardServicio from "../cards/cardServicio";

export default function HomePage() {
  const itemclass = "Shine Quantico text-lg text-[--white1] text-center pl-8";
  const items = [
    <div key={1} className={itemclass}> ● Cámaras de seguridad</div>,
    <div key={2} className={itemclass} > ● Monitoreo 24 hs</div>,
    <div key={3} className={itemclass} > ● Asistencia móvil a domicilio</div>,
    <div key={4} className={itemclass} > ● Visión nocturna</div>,
    <div key={5} className={itemclass} > ● Sensor de movimiento antimascotas</div>,
    <div key={6} className={itemclass} > ● GPS Tracker</div>,
    <div key={7} className={itemclass} > ● SmartPanics</div>,
    <div key={8} className={itemclass} > ● Seguridad Fisica</div>,
    <div key={9} className={itemclass} > ● Sensor de movimiento inalámbrico</div>,
    <div key={10} className={itemclass} > ● Acceso Multiplataforma</div>
  ]

  const Espheres = [
    <Esphere key={1} img={"/images/Espheres/asoem.jpg"}/>,
    <Esphere key={2} img={"/images/Espheres/colon.webp"}/>,
    <Esphere key={3} img={"/images/Espheres/costa.jpg"}/>,
    <Esphere key={4} img={"/images/Espheres/diag.jpg"}/>,
    <Esphere key={5} img={"/images/Espheres/freestyle.jpg"}/>,
    <Esphere key={6} img={"/images/Espheres/gob.jpg"}/>,
    <Esphere key={7} img={"/images/Espheres/lagunas.jpg"}/>,
    <Esphere key={8} img={"/images/Espheres/lucat.webp"}/>,
    <Esphere key={9} img={"/images/Espheres/oil.jpg"}/>,
    <Esphere key={10} img={"/images/Espheres/remax.jpg"}/>,
    <Esphere key={11} img={"/images/Espheres/travel.jpg"}/>,
    <Esphere key={12} img={"/images/Espheres/union.jpg"}/>,
    <Esphere key={13} img={"/images/Espheres/upcn.webp"}/>,
    <Esphere key={14} img={"/images/Espheres/ventafe.jpg"}/>,
    <Esphere key={15} img={"/images/Espheres/ypf.webp"}/>,
  ]

  return (
    <div className="grid bg-[--negro1]">
      <Navbar />
      <Image src="/images/Camara2.jpg" alt="Frente" width={1920} height={1080}
        className="absolute h-screen z-10"
      />
      <div className="grid h-[95vh] bg-black/50 z-20">
        <div className=" z-20 w-full overflow-x-hidden bg-black/50 py-2 self-start h-min">
          <Carrousel items={items} speed={70} direction="right"/>
        </div>
        <div className="grid grid-flow-col place-content-center place-items-center z-20 ">
          <div className="grid grid-flow-row place-content-center place-items-center gap-8">
            <div className="Shine Orbitron font-bold text-center text-[--white1] text-8xl ">Servicio de Seguridad<br/> y Vigilancia</div>
            <div className="Quantico text-[--azulClaro] text-3xl">Instalación profesional, configuración completa y soporte técnico.</div>
            <div className="Quantico BoxShine Big text-[--white1] bg-[--azulClaro] rounded-full cursor-pointer w-[400px] text-4xl py-4 text-center">Contactanos</div>
          </div>
          <div className="grid grid-flow-row place-items-center place-self-end text-center Quantico
          rounded-[5%] bg-[--azulT] text-[--white1] w-[400px] h-[600px] text-2xl mx-20">
            <div>Cotizá tu alarma llamando al</div>
            <div className="Shine text-4xl font-bold text-[--white1]">+5493424220579</div>
            <div>Si preferis, te llamamos!<br/> Dejanos tus datos.</div>
            <input className="px-4 py-2 rounded-md" type="text" placeholder="Nombre"/>
            <input className="px-4 py-2 rounded-md" type="text" placeholder="Teléfono"/>
            <div className="BoxShine Big text-center bg-[--azulClaro] text-[--white1] rounded-full cursor-pointer w-[200px] py-2 ">Enviar</div>

          </div>
        </div>
        <div className="z-20 w-full overflow-x-hidden self-start h-min">
          <Carrousel items={Espheres} speed={40}/>
        </div>
      </div>
      <div className="Quantico z-20 grid place-content-center place-items-center place-self-center text-[--white1] text-center w-[60%] h-screen text-4xl gap-8 py-16">
        <Image src="/images/STEGrande.png" alt="Logo STE Seguridad Electrónica" width={1200} height={1200}
        className="absolute z-10 opacity-20 w-[1400px] h-[700px]"/>
        <div className="z-20">Somos STE Seguridad Electrónica una empresa nacida en Santa Fe en el año 2005, especializada en el diseño e implementación de soluciones integrales de seguridad. </div>
        <div className="z-20">Desde nuestros inicios, nos enfocamos en brindar servicios profesionales adaptados a las necesidades reales de cada cliente, combinando tecnología, experiencia y un fuerte compromiso con la calidad.</div>
        <div className="z-20">Elegir STE Seguridad Electrónica es contar con un aliado en seguridad: una empresa que responde, que está presente y que prioriza la tranquilidad del cliente a largo plazo.</div>

      </div>
      <div>
        <div className="Shine Orbitron font-bold text-center text-[--white1] text-6xl py-8">Estos son los servicios que ofrecemos</div>
        <div className="grid grid-flow-col place-content-center place-items-center gap-8 py-8">
          <CardServicio 
          img={"/images/servicios/Camaras.jpeg"}
          url={"/camaras"}
          title={"Camaras de Seguridad"}
          text={"Instalación de cámaras de seguridad (CCTV) diseñadas para brindar vigilancia inteligente, control total y prevención efectiva en hogares, comercios, empresas y barrios privados."}
          />
          <CardServicio 
          img={"/images/servicios/Alarma.jpg"}
          url={"/camaras"}
          title={"Sistema de alarmas y deteción"}
          text={"Implementamos sistemas de alarmas profesionales orientados a la protección integral de hogares, comercios, empresas y entidades financieras."}
          />
          <CardServicio 
          img={"/images/servicios/Guardia.jpg"}
          url={"/camaras"}
          title={"Monitoreo 24 Horas"}
          text={"Servicio de monitoreo 24 horas continuo, garantizando respuesta inmediata ante cualquier evento de seguridad en hogares, comercios y empresas en Santa Fe y la región."}
          />
          <CardServicio 
          img={"/images/servicios/Satelital.jpg"}
          url={"/camaras"}
          title={"Rastreo Satelital de Vehículos"}
          text={"Ofrecemos soluciones de rastreo satelital de vehículos para control, seguridad y gestión eficiente de flotas. Instalamos dispositivos GPS en cada unidad para monitorear su ubicación en tiempo real y obtener información precisa sobre su uso."}
          />
        </div>
      </div>
      

    </div>
  );
}