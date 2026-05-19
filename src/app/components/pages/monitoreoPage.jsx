import Image from "next/image";
import Navbar from "../others/navbar";
import CardServicio from "../cards/cardServicio";
import CardPlan from "../cards/cardPlan";

export default function MonitoreoPage() {

    return (
        <div className="grid bg-[--negro1]">
            <Navbar />
            <div className="grid h-[80px] place-items-center"></div> {/* Espacio para el navbar */}
            <div className="bg-[--negro1] grid grid-flow-row place-items-center ">
                <div className="grid Quantico font-bold text-5xl min-[1250px]:text-6xl text-[--white1] py-14">Monitoreo 24 hs.</div>
                <div className="grid grid-flow-col grid-cols-2 place-items-center place-content-center 
                px-8 w-[1200px] min-[1450px]:w-[1400px] min-[1650px]:w-[1600px] min-[1850px]:w-[1800px]">
                    <div>
                        <Image src="/images/servicios/monitoreo/Monitoreo01.jpeg" alt="no image" width={600} height={400}
                        className="rounded-[10%] mx-auto w-[400px] min-[1250px]:w-[500px] min-[1450px]:w-[600px] h-[300px] min-[1250px]:h-[400px] min-[1450px]:h-[500px]"/>
                    </div>
                    <div className="Quantico text-lg min-[1450px]:text-2xl text-[--white1]">
                        En STE Seguridad Electrónica brindamos un servicio de monitoreo 24 horas continuo, los 365 días del año, garantizando respuesta inmediata ante cualquier evento de seguridad en hogares, comercios y empresas en Santa Fe y la región. <br/><br/>
                        Contamos con una central de monitoreo equipada con tecnología de vanguardia, preparada para recibir, procesar y gestionar señales de alarmas en tiempo real, asegurando una supervisión constante y confiable.<br/><br/>
                        Nuestro equipo de operadores altamente capacitados trabaja bajo protocolos estrictos de verificación y actuación, permitiendo una respuesta rápida, precisa y coordinada ante intrusiones, emergencias o eventos críticos.<br/><br/>

                    </div>

                </div>
                <div className="Quantico BoxShine Big font-bold text-[--white1] bg-[--azulClaro] rounded-full cursor-pointer w-[300px] min-[1200px]:w-[400px] text-3xl min-[1400px]:text-4xl py-4 text-center my-12">Contacto</div>
                <div className="grid place-self-center justify-items-center w-full bg-[--negro1] pt-20 px-8 pb-8">
                    <div className="grid bg-[--negro1] w-[80%] gap-8">     
                        <CardPlan name={"Características del servicio de monitoreo"} img={"/images/servicios/monitoreo/Monitoreo02.jpg"}  
                        text={
                            "• Supervisión permanente 24/7/365\n"+
                            "• Recepción de señales de alarmas en tiempo real\n"+
                            "• Protocolos de actuación y verificación de eventos\n"+
                            "• Notificación inmediata al cliente\n"+
                            "• Coordinación con fuerzas de seguridad y emergencias\n"
                        }/>
                        <CardPlan name={"Tecnología aplicada"} img={"/images/servicios/monitoreo/Monitoreo03.jpg"}  
                        text={
                            "• Sistemas redundantes de comunicación\n"+
                            "• Software profesional de monitoreo\n"+
                            "• Integración con alarmas, cámaras y control de accesos \n"+
                            "• Registro y trazabilidad de eventos \n"
                        }/>
                        <CardPlan name={"Beneficios del monitoreo activo"} img={"/images/servicios/monitoreo/Monitoreo04.png"} 
                        text={
                            "• Respuesta inmediata ante incidentes \n"+
                            "• Reducción de riesgos y pérdidas \n"+
                            "• Mayor tranquilidad y control \n"+
                            "• Servicio escalable para distintos tipos de clientes \n"
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