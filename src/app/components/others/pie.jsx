import Image from "next/image";
import Link from "next/link";
import MiniSlider from "../sliders/minislider";

export default function Pie() {
    return (
        <div className="flex flex-col w-full h-full Montserrat">
            {/* Sección superior: 3 columnas con flex */}
            <div className="flex flex-col min-[1000px]:flex-row flex-wrap justify-center items-center bg-[--white2] py-2 px-8 gap-8
                            min-[1000px]:flex-nowrap min-[1000px]:justify-between">
                
                {/* Columna izquierda: Monitoreo 24hs */}
                <div className="flex flex-row items-center gap-2 min-[1400px]:gap-4 flex-1 justify-center min-[1000px]:justify-start">
                    <Image src="/images/icons/cliente1.png" alt="logo" width={200} height={200}
                           className="w-[75px] min-[1000px]:w-[100px] h-[75px] min-[1000px]:h-[100px]" />
                    <div className="flex flex-col text-xs min-[1200px]:text-sm gap-1 min-[1400px]:gap-2">
                        <div className="text-sm min-[1200px]:text-base min-[1300px]:text-lg min-[1400px]:text-xl font-bold">
                            MONITOREO 24HS
                        </div>
                        <div className="font-semibold">
                            Central Propia los 365 dias del año
                            con respuesta inmediata ante eventos.
                        </div>
                        <div className="text-[--azulClaro] font-semibold text-base py-2 cursor-pointer">
                            CONSULTAR
                        </div>
                    </div>
                </div>

                {/* Columna central: Slider de confianza */}
                <div className="flex flex-col items-center gap-4 py-4 px-4 flex-[0_auto] min-w-[200px]">
                    <div className="font-bold text-sm min-[1200px]:text-base min-[1300px]:text-lg min-[1400px]:text-xl text-center">
                        LA CONFIANZA DE QUIENES NOS ELIGEN
                    </div>
                    <MiniSlider />
                    <div></div>
                </div>

                {/* Columna derecha: ¿Hablamos? */}
                <div className="flex flex-col items-center min-[1000px]:items-start gap-4 flex-1">
                    <div className="font-bold text-[--azulClaro] text-sm min-[1200px]:text-base min-[1300px]:text-lg min-[1400px]:text-xl">
                        ¿HABLAMOS?
                    </div>
                    <div className="text-xs min-[1200px]:text-sm font-semibold text-center min-[1000px]:text-left">
                        Escribinos por Whatsapp y te asesoramos sin compromiso.
                    </div>
                    <div className="flex flex-row items-center rounded-full text-[--azulOscuro] border-2 border-[--azulOscuro] font-semibold 
                                    w-[200px] min-[1200px]:w-[230px] text-xs min-[1200px]:text-sm min-[1400px]:text-base px-4 py-1.5 min-[1400px]:py-2 gap-2 cursor-pointer">
                        <Image src="/images/icons/whatsapp2.png" alt="logo" width={25} height={25}
                               className="w-[25px] h-[25px]" />
                        <div className="font-semibold">ESCRIBIR AHORA</div>
                    </div>
                </div>
            </div>

            {/* Barra inferior: logo, copyright, redes sociales */}
            <div className="flex flex-col gap-4 bg-[--azulOscuro] py-2 px-4 text-lg mt-auto
                            min-[800px]:flex-row min-[800px]:justify-between min-[800px]:items-center">
                
                {/* Logo + texto */}
                <div className="flex flex-row items-center justify-center gap-4 flex-1 min-[800px]:justify-start">
                    <Image src="/images/STEGrande2.png" alt="logo" width={75} height={75}
                           className="cursor-pointer rounded-[10%] w-[90px] h-[30px]" />
                    <div className="text-sm text-[--white1] text-center min-[800px]:text-left">
                        SEGURIDAD <br />ELECTRONICA
                    </div>
                </div>

                {/* Copyright */}
                <div className="text-center text-[--white1] text-sm flex-1">
                    Seguridad, tecnología y confianza.<br /> © 2024 STE Seguridad Electronica. Todos los derechos reservados.
                </div>

                {/* Redes sociales */}
                <div className="flex flex-row justify-center items-center gap-4 flex-1 min-[800px]:justify-end">
                    <Link href="https://www.facebook.com/steargentina/" className="cursor-pointer">
                        <Image src="/images/icons/Facebook.png" alt="logo" width={25} height={25} />
                    </Link>
                    <Link href="https://www.instagram.com/ste_seguridad_electronica/" className="cursor-pointer">
                        <Image src="/images/icons/Instagram.png" alt="logo" width={25} height={25} />
                    </Link>
                    <Link href="https://www.youtube.com/channel/UCva72R0KUO4cfmzgJf0j7QA" className="cursor-pointer">
                        <Image src="/images/icons/Youtube.png" alt="logo" width={25} height={25} />
                    </Link>
                    <Link href="https://www.youtube.com/channel/UCva72R0KUO4cfmzgJf0j7QA" className="cursor-pointer">
                        <Image src="/images/icons/linkedin.png" alt="logo" width={25} height={25} />
                    </Link>
                </div>
            </div>
        </div>
    );
}