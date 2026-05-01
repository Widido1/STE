import Image from "next/image";
import Navbar from "../others/navbar";
import SliderServicios from "../sliders/sliderServicios";

export default function CamarasPage() {
    const ImgArr = [
        "/images/servicios/camaras/camara01.png",
        "/images/servicios/camaras/camara02.png",
        "/images/servicios/camaras/camara03.png",
    ];
    const desArr = [
        "Descripcion de la camara numero 1",
        "Descripcion de la camara numero 2",
        "Descripcion de la camara numero 3",
    ]

    return (
        <div className="grid ">
            <Navbar />
            <div className="bg-[--negro1] h-screen grid grid-flow-row place-items-center ">
                <div className="Quantico Shine text-6xl text-[--white1]">Camaras de Seguridad</div>
                <div className="grid grid-flow-col grid-cols-2 place-items-center">
                    <div>
                        <SliderServicios ImgArr={ImgArr} desArr={desArr}/>
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
            </div>
        </div>
    );
}