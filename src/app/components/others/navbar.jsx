import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
    return (
        <div className="grid w-full Montserrat font-semibold z-30 grid-flow-col px-8 text-base">

            <div className="grid grid-flow-col align-middle justify-self-start gap-4">
                <Image src="/images/STEGrande2.png" alt="logo" width={100} height={100}
                className="grid place-self-center Big cursor-pointer rounded-[10%] w-[120px] h-[40px]"/>
                <div className="grid place-items-center align-middle text-base text-[--white1]">SEGURIDAD <br/>ELECTRONICA</div>
            </div>
            <div className="grid grid-flow-col place-content-center place-items-center gap-8 text-[--white1]">
                <div>INICIO</div>
                <div>SERVICIOS</div>
                <Link href="https://miscuentas.control-24.com.ar/" className="Big cursor-pointer">
                    <div>MONITOREO</div>
                </Link>
                <div>NOSOTROS</div>
                <div>CONTACTO</div>
            </div>
            <div className="grid grid-flow-col rounded-full text-[--white1] bg-[--azulClaro] place-items-center justify-self-end self-center px-6 py-3 gap-2">
                <Image src="/images/icons/whatsapp.png" alt="logo" width={25} height={25}
                className="w-[25px] h-[25px] justify-self-end"/>
                <div className="justify-self-start">WHATSAPP</div>
            </div>
        </div>
    )
}


/*
    <div className="grid grid-flow-col gap-4">
        <Link href={"https://www.facebook.com/steargentina/"} className="Bigger cursor-pointer">
            <Image src="/images/icons/Facebook.png" alt="logo" width={25} height={25}/>
        </Link>
        <Link href={"https://www.instagram.com/ste_seguridad_electronica/"} className="Bigger cursor-pointer">
            <Image src="/images/icons/Instagram.png" alt="logo" width={25} height={25}/>
        </Link>
        <Link href={"https://www.youtube.com/channel/UCva72R0KUO4cfmzgJf0j7QA"} className="Bigger cursor-pointer">
            <Image src="/images/icons/Youtube.png" alt="logo" width={25} height={25}/>
        </Link>
    </div>
*/