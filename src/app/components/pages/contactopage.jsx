"use client"
import Image from "next/image";
import Navbar from "../others/navbar";
import Link from "next/link";
import { useState } from "react";
import { sendEmail } from "@/app/actions/sendEmail";

const EMAIL = process.env.NEXT_PUBLIC_EMAIL;

export default function ContactoPage() {
    const [nombre, setNombre] = useState("");
    const [telefono, setTelefono] = useState("");
    const [ciudad, setCiudad] = useState("");
    const [servicio, setServicio] = useState("");
    const [asunto, setAsunto] = useState("");



    const handleSolicitud = async () => {
    if (nombre.trim() === "") {
        alert("Por favor, ingrese su nombre.");
        return;
    } else if (ciudad.trim() === "") {
        alert("Por favor, ingrese su ciudad.");
        return;
    }  else if (telefono.trim() === "") {
        alert("Por favor, ingrese su teléfono.");
        return;
    } else if (servicio.trim() === "") {
        alert("Por favor, ingrese el tipo de servicio.");
        return;
    } else if (asunto.trim() === "") {
        alert("Por favor, cuentenos el asunto de tu solicitud.");
        return;
    }try{     
        let textoVendedor = `
        ¡Hola! Se ha solicitado un nuevo asesoramiento:
        Nombre: ${nombre}
        Telefono: ${telefono}
        Ciudad: ${ciudad}
        Servicio: ${servicio}
        Asunto: ${asunto}
        `;
        const emailVendedor = { 
            email: `${EMAIL}`,
            text: textoVendedor
        };

        await sendEmail(emailVendedor);  
        

    }catch(error){
        console.error("Error al crear la preferencia de pago:", error);
        alert("Error al enviar la solicitud de compra. Por favor, inténtalo de nuevo.");
    }
    }

    return (
    // Contenedor principal: altura mínima para que crezca con el contenido
    <div className="min-h-screen bg-[--negro1] Montserrat flex flex-col">      
        {/* Contenido superpuesto (Navbar + texto) */}
        <Navbar />          
          {/* Grid de dos columnas para el texto y botones */}
          <div className="flex flex-1 flex-col w-full">
            <div className="flex flex-1 flex-col h-full w-full bg-[--white1] px-4">
                <div className="flex flex-col self-center justify-center rounded-md bg-[--azulOscuro] text-[--white1] my-4 py-4 px-16">
                    <div className="flex flex-col py-2">
                        <div className="text-xl font-semibold px-2 py-2">NOMBRE</div>
                        <input className="rounded-md bg-[--white2] text-[--azulOscuro] px-4 py-2 w-[300px]" value={nombre} onChange={(e) => setNombre(e.target.value)}/>
                    </div>
                    <div className="flex flex-col py-2">
                        <div className="text-xl font-semibold px-2 py-2">TELEFONO</div>
                        <input className="rounded-md bg-[--white2] text-[--azulOscuro] px-4 py-2 w-[300px]" value={telefono} onChange={(e) => setTelefono(e.target.value)}/>
                    </div>
                    <div className="flex flex-col py-2">
                        <div className="text-xl font-semibold px-2 py-2">CIUDAD</div>
                        <input className="rounded-md bg-[--white2] text-[--azulOscuro] px-4 py-2 w-[300px]" value={ciudad} onChange={(e) => setCiudad(e.target.value)}/>
                    </div>
                    <div className="flex flex-col py-2 gap-2">
                        <div className="text-xl font-semibold px-2 ">TIPO DE SERVICIO</div>
                        <div className="grid grid-flow-col grid-cols-3 gap-1">
                            <div className="flex flex-col text-center items-center justify-self-start gap-2">
                                <div className="text-base font-semibold">Hogar</div>
                                <input type="checkbox" className="w-[20px] h-[20px]" value="Hogar" checked={servicio === "Hogar"} onChange={(e) => setServicio(e.target.value)}/>
                            </div>
                            <div className="flex flex-col text-center items-center gap-2">
                                <div className="text-base font-semibold">Comercio</div>
                                <input type="checkbox" className="w-[20px] h-[20px]" value="Comercio" checked={servicio === "Comercio"} onChange={(e) => setServicio(e.target.value)}/>
                            </div>
                            <div className="flex flex-col text-center items-center justify-self-end gap-2">
                                <div className="text-base font-semibold">Empresa</div>
                                <input type="checkbox" className="w-[20px] h-[20px]" value="Empresa" checked={servicio === "Empresa"} onChange={(e) => setServicio(e.target.value)}/>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col py-2">
                        <div className="text-xl font-semibold px-2 py-2">ASUNTO</div>
                        <textarea className="rounded-md text-sm bg-[--white2] text-[--azulOscuro] px-4 py-2 w-[300px] h-[100px]" value={asunto} onChange={(e) => setAsunto(e.target.value)}/>
                    </div>
                    <div className="flex flex-col py-2">
                        <div className="text-xl font-semibold px-2 py-2">CAPCHA</div>
                        <input className="rounded-md bg-[--white2] text-[--white1] px-4 py-2 w-[300px]"/>
                    </div>
                    <div className="flex flex-col py-4">
                        <button className="text-xl font-semibold px-4 py-2 rounded-md bg-[--gray1] text-[--white3]" onClick={handleSolicitud}>ENVIAR</button>
                    </div>
                    
                </div>



            </div>
            {/* Barra inferior: logo, copyright, redes sociales */}
            <div className="flex flex-col gap-4 bg-[--azulOscuro] py-2 px-4 text-lg
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
    </div>
  );
}