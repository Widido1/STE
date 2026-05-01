import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
    return (
        <div className="Theme1 Orbitron font-bold grid grid-flow-col grid-cols-3 place-content-center place-items-center p-4 text-2xl z-20">
            <div>Iconos</div>
            <div>
                <Link href="/">
                <Image src="/images/STEGrande2.png" alt="logo" width={100} height={100}
                className="Bigger ShineLogo cursor-pointer rounded-[10%] mx-auto w-[150px] h-[50px]"/>
                </Link>
            </div>
            <div className="grid grid-flow-col grid-cols-3 place-content-center place-items-center gap-4">
                <div>Servicios</div>
                <div>Monitoreo</div>
                <div>Contacto</div>
            </div>
        </div>
    )
}