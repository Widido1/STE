import Image from "next/image";
import Link from "next/link";
import Slider from "../sliders/slider";

export default function Pie() {
    return (
        <div className="grid w-full h-full Montserrat">
            <div className="grid grid-flow-col grid-cols-3 place-items-center bg-[--white2]">
                <div className="grid grid-flow-col place-items-center gap-4">
                    <Image src="/images/icons/cliente1.png" alt="logo" width={200} height={200}
                    className="w-[125px] h-[125px]"/>
                    <div className="grid grid-flow-row text-sm gap-2">
                        <div className="text-xl font-bold">MONITOREO 24HS</div>
                        <div className="font-semibold">
                            Central Propia los 365 dias del año <br/>
                            con respuesta inmediata ante eventos. <br/>
                        </div>
                        <div className="grid text-[--azulClaro] font-semibold text-base py-2">CONSULTAR</div>
                    </div>
                </div>
                <div className="grid grid-flow-row justify-items-center gap-4 py-4">
                    <div className="font-bold text-xl">LA CONFIANZA DE QUIENES NOS ELIGEN</div>
                    <Slider/>
                    <div></div>
                </div>
                <div className="grid grid-flow-row grid-rows-3">
                    <div className="text-xl font-bold text-[--azulClaro]">¿HABLAMOS?</div>
                    <div className="text-sm font-semibold">Escribinos por Whatsapp y te asesoramos sin compromiso.</div>
                    <div className="grid grid-flow-col place-items-center w-[230px] rounded-full text-[--azulOscuro] border-2 border-[--azulOscuro] font-semibold py-2 px-4 gap-2">
                        <Image src="/images/icons/whatsapp2.png" alt="logo" width={25} height={25}
                        className="justify-self-end w-[25px] h-[25px]"/>
                        <div className="justify-self-start font-semibold">ESCRIBIR AHORA</div>
                    </div>
                </div>
            </div>
            <div className="grid grid-flow-col grid-cols-3 bg-[--azulOscuro] z-30 py-2 px-8 text-lg">
                <div className="grid grid-flow-col align-middle justify-self-start font-semibold text-[--white2] gap-4">
                    <Image src="/images/STEGrande2.png" alt="logo" width={75} height={75}
                    className="grid place-self-center Big cursor-pointer rounded-[10%] w-[90px] h-[30px]"/>
                    <div className="grid place-items-center align-middle text-sm text-[--white1]">SEGURIDAD <br/>ELECTRONICA</div>
                </div>
                <div className="grid place-items-center text-[--white1] text-sm">
                    <div>Seguridad, tecnología y confianza.<br/> © 2024 STE Seguridad Electronica. Todos los derechos reservados.</div>
                </div>
                <div className="grid grid-flow-col justify-self-end place-items-center gap-4 w-[200px]">
                    <Link href={"https://www.facebook.com/steargentina/"} className="Bigger cursor-pointer">
                        <Image src="/images/icons/Facebook.png" alt="logo" width={25} height={25}/>
                    </Link>
                    <Link href={"https://www.instagram.com/ste_seguridad_electronica/"} className="Bigger cursor-pointer">
                        <Image src="/images/icons/Instagram.png" alt="logo" width={25} height={25}/>
                    </Link>
                    <Link href={"https://www.youtube.com/channel/UCva72R0KUO4cfmzgJf0j7QA"} className="Bigger cursor-pointer">
                        <Image src="/images/icons/Youtube.png" alt="logo" width={25} height={25}/>
                    </Link>
                    <Link href={"https://www.youtube.com/channel/UCva72R0KUO4cfmzgJf0j7QA"} className="Bigger cursor-pointer">
                        <Image src="/images/icons/linkedin.png" alt="logo" width={25} height={25}/>
                    </Link>
                </div>
            </div>
        </div>

    )
}