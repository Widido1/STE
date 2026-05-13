import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
    return (
        <div className="Theme1 fixed w-full Orbitron font-bold z-30 grid grid-flow-col grid-cols-3 place-content-center place-items-center p-4 text-lg min-[1050px]:text-xl min-[1200px]:text-2xl">
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
            <div>
                <Link href="/">
                <Image src="/images/STEGrande2.png" alt="logo" width={100} height={100}
                className="Bigger ShineLogo cursor-pointer rounded-[10%] mx-auto w-[150px] h-[50px]"/>
                </Link>
            </div>
            <div className="grid grid-flow-col grid-cols-3 place-content-center place-items-center gap-4">
                <div>Servicios</div>
                <Link href="https://miscuentas.control-24.com.ar/" className="Big cursor-pointer">
                    <div>Monitoreo</div>
                </Link>
                
                <div>Contacto</div>
            </div>
        </div>
    )
}