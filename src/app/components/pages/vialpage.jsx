import Image from "next/image";
import Navbar from "../others/navbar";
import CardServicio from "../cards/cardServicio";
import CardPlan from "../cards/cardPlan";

export default function VialPage() {

    return (
        <div className="grid bg-[--negro1]">
            <Navbar />
            <div className="grid h-[80px] place-items-center"></div> {/* Espacio para el navbar */}
            <div className="bg-[--negro1] grid grid-flow-row place-items-center ">
                <div className="grid Quantico Shine text-6xl text-[--white1] py-14">Soluciones Viales y Analítica Avanzada</div>
                <div className="grid grid-flow-col grid-cols-2 place-items-center place-content-center px-8 w-[1800px]">
                    <div>
                        <Image src="/images/servicios/alarmas/Alarma01.png" alt="no image" width={600} height={400}
                        className="rounded-[10%] mx-auto w-[600px] h-[500px]"/>
                    </div>
                    <div className="Quantico text-2xl text-[--white1]">
                        Desarrollamos soluciones de videovigilancia vial y analítica inteligente orientadas a municipios, barrios privados, parques industriales y empresas que requieren control avanzado del tránsito y trazabilidad de vehículos.
                    </div>

                </div>
                <div className="grid place-self-center justify-items-center w-full bg-[--negro1] pt-20 px-8 pb-8">
                    <div className="grid bg-[--negro1] w-[80%] gap-8">     
                        <CardPlan name={"Cámaras viales y control de tránsito"} img={"/images/Camara1_02.png"}  
                        text={
                            "Implementación de cámaras de seguridad para entornos viales con alta performance en exteriores, capaces de operar 24/7 en condiciones exigentes (baja luz, lluvia, polvo).\n"+ 
                            "Diseñamos puntos de captura en accesos, rotondas y arterias principales para mejorar la seguridad y el control vehicular.\n"
                        }/>
                        <CardPlan name={"Detección de patentes (ANPR/LPR) "} img={"/images/Camara1_02.png"}  
                        text={
                            "Instalación de sistemas ANPR (Automatic Number Plate Recognition) para lectura automática de matrículas en tiempo real. Permite listas blancas/negras, alertas por vehículo, registro histórico y exportación de datos.\n \n"+
                            "• Control de accesos vehiculares automatizados\n"+
                            "• Integración con barreras y sistemas de control\n"+
                            "• Auditoría de ingresos/egresos \n"+
                            "• Alta precisión de lectura diurna y nocturna"
                        }/>
                        <CardPlan name={"Control de velocidad "} img={"/images/Camara1_02.png"}  
                        text={
                            "Soluciones de medición y control de velocidad mediante cámaras especializadas y analítica de video.\n"+
                            "Configuración de umbrales, generación de eventos y reportes para gestión de infracciones y prevención.\n \n"+
                            "• Detección de exceso de velocidad \n"+
                            "• Evidencia fotográfica y de video \n"+
                            "• Reportes y estadísticas por franjas horarias \n"
                        }/>
                        <CardPlan name={"Búsqueda inteligente por atributos"} img={"/images/Camara1_02.png"}  
                        text={
                            "Analítica avanzada basada en inteligencia artificial (Hikvision) que permite filtrar y buscar vehículos por características visuales. \n \n"+
                            "• Búsqueda por color, tipo de vehículo (auto, utilitario, camión, moto) \n"+
                            "• Identificación por marca/modelo cuando aplica \n"+
                            "• Recuperación rápida de eventos en grandes volúmenes de video \n"+
                            "• Optimización de investigaciones y auditorías \n"
                        }/>
                        <CardPlan name={"Integración y plataforma de gestión "} img={"/images/Camara1_02.png"}  
                        text={
                            "Centralizamos todos los eventos en plataformas de gestión de video (VMS) con dashboards, mapas y reportes exportables.\n \n"+
                            "• Integración con NVR/servidores y almacenamiento escalable \n"+
                            "• Acceso remoto seguro \n"+
                            "• API e integración con sistemas de terceros \n"
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