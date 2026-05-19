import Image from "next/image";
import Navbar from "../others/navbar";
import CardServicio from "../cards/cardServicio";
import CardPlan from "../cards/cardPlan";

export default function AlarmasPage() {

    return (
        <div className="grid bg-[--negro1]">
            <Navbar />
            <div className="grid h-[80px] place-items-center"></div> {/* Espacio para el navbar */}
            <div className="bg-[--negro1] grid grid-flow-row place-items-center ">
                <div className="grid Quantico font-bold text-5xl min-[1250px]:text-6xl text-[--white1] py-14">Sistema de Alarma y detección.</div>
                <div className="grid grid-flow-row min-[1250px]:grid-flow-col min-[1250px]:grid-cols-2 place-items-center place-content-center 
                px-8 gap-4 w-[700px] min-[1250px]:w-[1200px] min-[1450px]:w-[1400px] min-[1650px]:w-[1600px] min-[1850px]:w-[1800px]">
                    <div>
                        <Image src="/images/servicios/alarmas/Alarma01.png" alt="no image" width={600} height={400}
                        className="rounded-[10%] mx-auto w-[400px] min-[1250px]:w-[500px] min-[1450px]:w-[600px] h-[300px] min-[1250px]:h-[400px] min-[1450px]:h-[500px]"/>
                    </div>
                    <div className="Quantico text-lg min-[1450px]:text-xl text-[--white1]">
                        En STE Seguridad Electrónica diseñamos e implementamos sistemas de alarmas profesionales orientados a la protección integral de hogares, comercios, empresas y entidades financieras, combinando tecnología cableada e inalámbrica con monitoreo y respuesta eficiente.<br/>
                        También ofrecemos mantenimiento, soporte técnico y optimización de sistemas de cámaras existentes, asegurando un funcionamiento continuo y eficiente.<br/><br/>

                        Servicios incluidos:<br/>
                        ⦁	Diseño y asesoramiento a medida<br/>
                        ⦁	Instalación profesional certificada<br/>
                        ⦁	Monitoreo 24 horas<br/>
                        ⦁	Mantenimiento preventivo y soporte técnico<br/>

                    </div>

                </div>
                <div className="Quantico BoxShine Big font-bold text-[--white1] bg-[--azulClaro] rounded-full cursor-pointer w-[300px] min-[1200px]:w-[400px] text-3xl min-[1400px]:text-4xl py-4 text-center my-12">Contacto</div>
                <div className="grid place-self-center justify-items-center w-full bg-[--negro1] my-8 px-8 pb-8">
                    <div className="grid bg-[--negro1] w-[80%] gap-8">     
                        <CardPlan name={"Alarmas Inalambricas para el Hogar"} img={"/images/servicios/alarmas/Alarma05.png"} 
                        text={
                            "• Sensores de movimiento, apertura y rotura de vidrio\n"+
                            "• Comunicación segura y redundante\n"+
                            "• Control desde app móvil (armado/desarmado, notificaciones)\n"+
                            "• Integración con cámaras y domóticas\n"+
                            "• Instalación limpia sin obras\n"
                        }/>
                        <CardPlan name={"Sistemas híbridos para empresas (cableado + inalámbrico) "} img={"/images/servicios/alarmas/Alarma02.jpg"} 
                        text={
                            "• Alta estabilidad en zonas críticas (cableado)\n"+
                            "• Expansión simple en áreas dinámicas (inalámbrico)\n"+
                            "• Particiones por sectores y horarios \n"+
                            "• Integración con CCTV, control de accesos y monitoreo 24 hs \n"+
                            "• Escalabilidad para crecimiento del negocio \n"
                        }/>
                        <CardPlan name={"Seguridad para bancos, bóvedas y cajas de seguridad "} img={"/images/servicios/alarmas/Alarma08.jpg"} 
                        text={
                            "• Sensores sísmicos y de vibración para bóvedas \n"+
                            "• Detección de intrusión perimetral y volumétrica \n"+
                            "• Sistemas anti-sabotaje y redundancia de comunicaciones \n"+
                            "• Integración con CCTV, control de accesos y protocolos de emergencia \n"+
                            "• Registro y auditoría de eventos críticos \n"
                        }/>
                        <CardPlan name={"Detección temprana de incendios"} img={"/images/servicios/alarmas/Alarma09.jpg"} 
                        text={
                            "• Detectores de humo, temperatura y monóxido \n"+
                            "• Paneles de incendio direccionables y convencionales \n"+
                            "• Sirenas, señalización y notificaciones remotas \n"+
                            "• Integración con sistemas de evacuación y automatización \n"+
                            "• Cumplimiento de normativas de seguridad \n"
                        }/>
                    </div>
                </div>

                <div className="grid w-full bg-[--negro1] pt-20 px-8 pb-8">
                    <div className="Quantico font-bold text-center text-[--white1] text-6xl py-8">Otros Servicios que Ofrecemos</div>
                    <div className="grid grid-flow-row grid-cols-3 grid-rows-2 place-self-center place-content-center place-items-center gap-8 py-8">
                    <CardServicio 
                    img={"/images/servicios/Camaras.jpeg"}
                    url={"/camaras"}
                    title={"Camaras de Seguridad"}
                    text={"Instalación de cámaras de seguridad (CCTV) diseñadas para brindar vigilancia inteligente, control total y prevención efectiva en hogares, comercios, empresas y barrios privados."}
                    />
                    <CardServicio 
                    img={"/images/servicios/Alarma.jpg"}
                    url={"/alarmas"}
                    title={"Sistema de alarmas y detección"}
                    text={"Implementamos sistemas de alarmas profesionales orientados a la protección integral de hogares, comercios, empresas y entidades financieras."}
                    />
                    <CardServicio 
                    img={"/images/servicios/Guardia.jpg"}
                    url={"/monitoreo"}
                    title={"Monitoreo 24 Horas"}
                    text={"Servicio de monitoreo 24 horas continuo, garantizando respuesta inmediata ante cualquier evento de seguridad en hogares, comercios y empresas en Santa Fe y la región."}
                    />
                    <CardServicio 
                    img={"/images/servicios/Satelital.jpg"}
                    url={"/rastreo"}
                    title={"Rastreo Satelital de Vehículos"}
                    text={"Ofrecemos soluciones de rastreo satelital de vehículos para control, seguridad y gestión eficiente de flotas. Instalamos dispositivos GPS en cada unidad para monitorear su ubicación en tiempo real y obtener información precisa sobre su uso."}
                    />
                    <CardServicio
                    img={"/images/servicios/Vial.jpeg"}
                    url={"/vial"}
                    title={"Soluciones Viales y Analítica Avanzada"}
                    text={"Desarrollamos soluciones de videovigilancia vial y analítica inteligente orientadas a municipios, barrios privados, parques industriales y empresas que requieren control avanzado del tránsito y trazabilidad de vehículos."}
                    />
                    <CardServicio
                    img={"/images/servicios/Personas.jpg"}
                    url={"/personas"}
                    title={"Analítica de Comportamiento y Conteo de Personas"}
                    text={"En STE Seguridad Electrónica incorporamos soluciones avanzadas de analítica de video que permiten estudiar el comportamiento de las personas en tiempo real, transformando las cámaras de seguridad en herramientas estratégicas para la toma de decisiones en comercios y empresas."}
                    />
                    </div>
                </div>
            </div>
        </div>
    );
}