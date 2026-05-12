import Image from "next/image";
import Navbar from "../others/navbar";
import SliderServicios from "../sliders/sliderServicios";
import YouTube from "../others/youtube";
import CardServicio from "../cards/cardServicio";

export default function CamarasPage() {
    const ImgArr = [
        ["/images/servicios/camaras/camara01.png", "Nombre Camara 1", "Aqui debe ir la descripcion de la camara 1 en conjunto con sus diferentes caracteristicas y propiedades."],
        ["/images/servicios/camaras/camara02.png", "Nombre Camara 2", "Aqui debe ir la descripcion de la camara 2 en conjunto con sus diferentes caracteristicas y propiedades."],
        ["/images/servicios/camaras/camara03.png", "Nombre Camara 3", "Aqui debe ir la descripcion de la camara 3 en conjunto con sus diferentes caracteristicas y propiedades."],
    ];

    return (
        <div className="grid bg-[--negro1]">
            <Navbar />
            <div className="grid h-[80px] place-items-center"></div> {/* Espacio para el navbar */}
            <div className="bg-[--negro1] grid grid-flow-row place-items-center ">
                <div className="grid Quantico Shine text-6xl text-[--white1] py-14">Camaras de Seguridad</div>
                <div className="grid grid-flow-col grid-cols-2 place-items-center place-content-center px-8 w-[1800px]">
                    <div>
                        <Image src="/images/servicios/camaras/CamarasPrincipal.jpg" alt="no image" width={600} height={400}
                               className="rounded-[10%] mx-auto w-[600px] h-[500px]"/>
                    </div>

                    <div className="Quantico grid grid-flow-row place-items-start gap-8 text-3xl text-[--white1]">
                        <div className="grid text-4xl">Servicios incluidos:</div>
                        <div className="grid grid-flow-col place-items-center gap-4">
                            <div><Image src="/images/icons/icon01.png" alt="check" width={75} height={90}
                                        className="rounded-[10%] mx-auto w-[75px] h-[90px]"/></div>
                            <div>Instalación de cámaras de seguridad para casas, negocios y empresas.</div>
                        </div>
                        <div className="grid grid-flow-col place-items-center gap-4">
                            <div><Image src="/images/icons/icon12.png" alt="check" width={75} height={75}
                                        className="rounded-[10%] mx-auto w-[75px] h-[75px]"/></div>
                            <div>Sistemas de videovigilancia con acceso remoto.</div>
                        </div>
                        <div className="grid grid-flow-col place-items-center gap-4">
                            <div><Image src="/images/icons/icon09.png" alt="check" width={75} height={75}
                                        className="rounded-[10%] mx-auto w-[75px] h-[75px]"/></div>
                            <div>Cámaras con visión nocturna y detección inteligente.</div>
                        </div>
                        <div className="grid grid-flow-col place-items-center gap-4">
                            <div><Image src="/images/icons/icon05.png" alt="check" width={75} height={75}
                                        className="rounded-[10%] mx-auto w-[75px] h-[75px]"/></div>
                            <div>Integración con monitoreo 24 horas.</div>
                        </div>
                        <div className="grid grid-flow-col place-items-center gap-4">
                            <div><Image src="/images/icons/icon04.png" alt="check" width={75} height={75}
                                        className="rounded-[10%] mx-auto w-[75px] h-[75px]"/></div>
                            <div>Mantenimiento y servicio técnico de CCTV.</div>
                        </div>

                    </div>

                </div>
                <div className="grid justify-items-center w-full bg-[--negro1] pt-20 px-8 pb-8">
                    <div className="grid w-[80%] bg-[--negro1] pt-20">     
                        <div className="Quantico text-2xl text-[--white1]">
                            En STE Seguridad Electrónica ofrecemos soluciones profesionales en instalación de cámaras de seguridad (CCTV) diseñadas para brindar vigilancia inteligente, control total y prevención efectiva en hogares, comercios, empresas y barrios privados en Santa Fe y la región.<br/><br/>
                            Implementamos sistemas de videovigilancia con cámaras IP de alta resolución, visión nocturna, detección de movimiento y analítica de video basada en inteligencia artificial, permitiendo identificar personas, vehículos y eventos relevantes en tiempo real.<br/><br/>
                            Nuestros sistemas de cámaras de seguridad permiten acceso remoto desde celular, tablet o PC, brindando monitoreo en vivo y reproducción de grabaciones desde cualquier lugar, las 24 horas. Además, integramos soluciones con grabadores NVR de alto rendimiento, optimizando almacenamiento y calidad de imagen.<br/><br/>
                            Cada proyecto de CCTV es diseñado a medida, analizando puntos críticos, accesos, perímetros y zonas de riesgo, para lograr una cobertura completa sin puntos ciegos. Nos enfocamos en maximizar la seguridad perimetral y el control interno de cada espacio.<br/><br/>
                            También ofrecemos mantenimiento, soporte técnico y optimización de sistemas de cámaras existentes, asegurando un funcionamiento continuo y eficiente.
                        </div>
                    </div>
                </div>

                <div className="grid w-full bg-[--negro1] pt-20 px-8 pb-8">
                    <div className="grid grid-flow-col grid-cols-2 place-self-center place-content-center place-items-center w-[80%]">  
                        <div>
                            <YouTube videoId={"rd9t8izLgW8"}/>
                        </div>
                        <div>
                            <SliderServicios ImgArr={ImgArr}/>
                        </div>
                    </div>
                    <div className="grid justify-items-center">
                        <div className="grid Quantico Shine text-6xl text-[--white1] py-14">Sub Servicios de Camaras</div>
                        <div className="grid grid-flow-col gap-8">
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
        </div>
    );
}