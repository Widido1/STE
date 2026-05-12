import Image from "next/image";
import Navbar from "../others/navbar";
import CardServicio from "../cards/cardServicio";
import CardPlan from "../cards/cardPlan";

export default function PersonasPage() {

    return (
        <div className="grid bg-[--negro1]">
            <Navbar />
            <div className="grid h-[80px] place-items-center"></div> {/* Espacio para el navbar */}
            <div className="bg-[--negro1] grid grid-flow-row place-items-center ">
                <div className="grid Quantico Shine text-6xl text-[--white1] py-14">Analítica de Comportamiento y Conteo de Personas</div>
                <div className="grid grid-flow-col grid-cols-2 place-items-center place-content-center px-8 w-[1800px]">
                    <div>
                        <Image src="/images/servicios/alarmas/Alarma01.png" alt="no image" width={600} height={400}
                        className="rounded-[10%] mx-auto w-[600px] h-[500px]"/>
                    </div>
                    <div className="Quantico text-2xl text-[--white1]">
                        En STE Seguridad Electrónica incorporamos soluciones avanzadas de analítica de video que permiten estudiar el comportamiento de las personas en tiempo real, transformando las cámaras de seguridad en herramientas estratégicas para la toma de decisiones en comercios y empresas.
                    </div>

                </div>
                <div className="grid place-self-center justify-items-center w-full bg-[--negro1] pt-20 px-8 pb-8">
                    <div className="grid bg-[--negro1] w-[80%] gap-8">     
                        <CardPlan name={"Conteo de personas y flujo de clientes "} img={"/images/Camara1_02.png"}  
                        text={
                            "Implementamos sistemas inteligentes de conteo de personas que permiten conocer con precisión la cantidad de ingresos y egresos en un local o empresa.\n"+
                            "• Medición de tráfico diario, semanal y mensual\n"+ 
                            "• Identificación de horarios pico\n"+
                            "• Optimización de recursos y personal\n"
                        }/>
                        <CardPlan name={"Análisis de comportamiento en negocios "} img={"/images/Camara1_02.png"} 
                        text={
                            "A través de inteligencia artificial, analizamos cómo se mueven y actúan las personas dentro de un espacio.\n"+
                            "• Mapas de calor (zonas más concurridas)\n"+
                            "• Seguimiento de recorridos dentro del local\n"+
                            "• Identificación de zonas de mayor interés comercial \n"
                        }/>
                        <CardPlan name={"Detección de aglomeraciones"} img={"/images/Camara1_02.png"}  
                        text={
                            "Sistemas capaces de detectar acumulación de personas en tiempo real, permitiendo actuar rápidamente ante situaciones de riesgo o mejorar la experiencia del cliente.\n"+
                            "• Alertas automáticas por alta densidad de personas \n"+
                            "• Aplicable en eventos, locales comerciales y espacios públicos \n"
                        }/>
                        <CardPlan name={"Control de uso de elementos de protección personal (EPP)"} img={"/images/Camara1_02.png"} 
                        text={
                            "En entornos industriales y empresas, utilizamos cámaras con inteligencia artificial para verificar el cumplimiento de normas de seguridad laboral. \n"+
                            "• Detección de uso de casco, chaleco, guantes, etc. \n"+
                            "• Alertas ante incumplimientos \n"+
                            "• Mejora en la prevención de riesgos laborales \n"
                        }/>
                        <CardPlan name={"Reportes y métricas para gestión "} img={"/images/Camara1_02.png"} 
                        text={
                            "Toda la información recolectada se transforma en reportes claros y exportables que permiten tomar decisiones basadas en datos. \n"+
                            "• Estadísticas por horarios, días y comportamiento \n"+
                            "• Integración con sistemas de gestión \n"+
                            "• Mejora continua de procesos operativos y comerciales \n"
                        }/>
                    </div>
                </div>

                <div className="grid w-full bg-[--negro1] pt-20 px-8 pb-8">
                    <div className="Shine Orbitron font-bold text-center text-[--white1] text-6xl py-8">Otros Servicios que Ofrecemos</div>
                    <div className="grid grid-flow-row grid-cols-3 grid-rows-2 place-self-center place-content-center place-items-center w-[60%] gap-8 py-8">
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