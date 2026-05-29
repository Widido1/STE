"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

function MenuItems() {
  const [menuAbierto, setMenuAbierto] = useState(false);

  const servicios = [
    <Link key={0} className="cursor-pointer w-full" onClick={() => setMenuAbierto(false)} href="/camaras"><div className="w-full">Cámaras de seguridad</div></Link>,
    <Link key={1} className="cursor-pointer w-full" onClick={() => setMenuAbierto(false)} href="/alarmas">Alarmas</Link>,
    <Link key={2} className="cursor-pointer w-full" onClick={() => setMenuAbierto(false)} href="/gps">GPS</Link>,
    <Link key={3} className="cursor-pointer w-full" onClick={() => setMenuAbierto(false)} href="/vial">Soluciones Viales</Link>,
    <Link key={4} className="cursor-pointer w-full" onClick={() => setMenuAbierto(false)} href="/personas">Analítica de Comportamiento</Link>,
    

  ];

  return (
    <div className="flex flex-wrap justify-start items-start gap-2 min-[600px]:gap-4 min-[1200px]:gap-8 text-[--white1]">
      <Link href="/"><div className="cursor-pointer">INICIO</div></Link>

      {/* Dropdown más simple del mundo */}
      <div className="relative">
        <div
          className="cursor-pointer select-none"
          onClick={() => setMenuAbierto(!menuAbierto)}
        >
          SERVICIOS {menuAbierto ? "▲" : "▼"}
        </div>
        {menuAbierto && (
          <div className="flex flex-col gap-2 absolute top-full left-0 mt-2 bg-[--azulOscuroT] text-[--white1] rounded shadow-lg z-50 w-48">
            <Link key={0} className="cursor-pointer w-full hover:bg-[--azulClaro] py-1 px-2" onClick={() => setMenuAbierto(false)} href="/camaras"><div className="w-full">Cámaras de seguridad</div></Link>
            <Link key={1} className="cursor-pointer w-full hover:bg-[--azulClaro] py-1 px-2" onClick={() => setMenuAbierto(false)} href="/alarmas">Alarmas</Link>
            <Link key={2} className="cursor-pointer w-full hover:bg-[--azulClaro] py-1 px-2" onClick={() => setMenuAbierto(false)} href="/gps">GPS</Link>
            <Link key={3} className="cursor-pointer w-full hover:bg-[--azulClaro] py-1 px-2" onClick={() => setMenuAbierto(false)} href="/vial">Analítica</Link>
          </div>
        )}
      </div>

      <Link href="/monitoreo" className="cursor-pointer">
        <div>MONITOREO</div>
      </Link>
      <div className="cursor-pointer">NOSOTROS</div>
      <div className="cursor-pointer">CONTACTO</div>
    </div>
  );
}

export default function Navbar() {
    // Elemento común: logo
    const Logo = () => (
        <div className="flex flex-row items-center gap-2 min-[600px]:gap-4">
            <Image
                src="/images/STEGrande2.png"
                alt="logo"
                width={100}
                height={100}
                className="cursor-pointer rounded-[10%] w-[80px] min-[800px]:w-[120px] h-[30px] min-[800px]:h-[40px]"
            />
            <div className="text-[10px] min-[350px]:text-xs min-[800px]:text-base text-[--white1] leading-tight">
                SEGURIDAD <br />ELECTRONICA
            </div>
        </div>
    );

    // Botón WhatsApp común
    const WhatsAppButton = () => (
        <div className="flex flex-row items-center rounded-full text-[--white1] bg-[--azulClaro] px-4 min-[800px]:px-6 py-2 gap-2 cursor-pointer whitespace-nowrap">
            <Image
                src="/images/icons/whatsapp.png"
                alt="WhatsApp"
                width={25}
                height={25}
                className="w-[15px] min-[800px]:w-[25px] h-[15px] min-[800px]:h-[25px]"
            />
            <div>WHATSAPP</div>
        </div>
    );

    return (
        <>
            {/* Layout para pantallas >= 1000px: logo, menú y WhatsApp en una fila */}
            <div className="hidden bg-[--azulOscuroT] min-[1000px]:flex flex-wrap items-center justify-between w-full Montserrat font-semibold z-30 
            px-4 py-4 text-xs min-[600px]:text-sm min-[800px]:text-base gap-2 min-[600px]:gap-4">
                <Logo />
                <MenuItems />
                <WhatsAppButton />
            </div>

            {/* Layout para pantallas < 1000px: primera fila (logo + WhatsApp), segunda fila (menú centrado) */}
            <div className="flex flex-col bg-[--azulOscuroT] min-[1000px]:hidden w-full Montserrat font-semibold z-30 
            text-[8px] min-[350px]:text-[10px] min-[600px]:text-xs min-[800px]:text-base px-4 py-4 gap-4">
                <div className="flex flex-row justify-between items-center w-full">
                    <Logo />
                    <WhatsAppButton />
                </div>
                <div className="flex justify-start w-full">
                    <MenuItems />
                </div>
            </div>
        </>
    );
}