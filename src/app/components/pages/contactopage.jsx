"use client";
import Image from "next/image";
import Navbar from "../others/navbar";
import Link from "next/link";
import { useState, useRef } from "react";
import { sendEmail } from "@/app/actions/sendEmail";
import { Turnstile } from "@marsidev/react-turnstile";

const EMAIL = process.env.NEXT_PUBLIC_EMAIL;
const TURNSTILE_SITE_KEY = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;

export default function ContactoPage() {
  const [nombre, setNombre] = useState("");
  const [telefono, setTelefono] = useState("");
  const [ciudad, setCiudad] = useState("");
  const [servicio, setServicio] = useState("");
  const [asunto, setAsunto] = useState("");

  // Estado y referencia para Turnstile
  const [token, setToken] = useState(null);
  const [enviando, setEnviando] = useState(false);
  const turnstileRef = useRef(null);

  const handleSolicitud = async () => {
    // Validaciones de campos
    if (nombre.trim() === "") {
      alert("Por favor, ingrese su nombre.");
      return;
    }
    if (ciudad.trim() === "") {
      alert("Por favor, ingrese su ciudad.");
      return;
    }
    if (telefono.trim() === "") {
      alert("Por favor, ingrese su teléfono.");
      return;
    }
    if (servicio.trim() === "") {
      alert("Por favor, seleccione el tipo de servicio.");
      return;
    }
    if (asunto.trim() === "") {
      alert("Por favor, cuéntenos el asunto de su solicitud.");
      return;
    }
    if (!token) {
      alert("Por favor, complete la verificación de seguridad.");
      return;
    }

    setEnviando(true);
    try {
      const textoVendedor = `
        ¡Hola! Se ha solicitado un nuevo asesoramiento:
        Nombre: ${nombre}
        Teléfono: ${telefono}
        Ciudad: ${ciudad}
        Servicio: ${servicio}
        Asunto: ${asunto}
      `;
      await sendEmail({
        email: EMAIL,
        text: textoVendedor,
        turnstileToken: token,   // Enviamos el token al servidor
      });
      alert("Solicitud enviada correctamente.");
      // Limpiar formulario
      setNombre("");
      setTelefono("");
      setCiudad("");
      setServicio("");
      setAsunto("");
      // Resetear Turnstile
      turnstileRef.current?.reset();
      setToken(null);
    } catch (error) {
      console.error("Error al enviar:", error);
      alert("Error al enviar la solicitud. Por favor, intente de nuevo.");
      turnstileRef.current?.reset();
      setToken(null);
    } finally {
      setEnviando(false);
    }
  };

  return (
    <div className="min-h-screen bg-[--negro1] Montserrat flex flex-col">
      <Navbar />
      <div className="flex flex-1 flex-col w-full">
        <div className="flex flex-1 flex-col h-full w-full bg-[--white1] px-4">
          <div className="flex flex-col self-center max-[500px]:items-center justify-center rounded-md bg-[--azulOscuro] text-[--white1] my-4 py-4 px-6 min-[500px]:px-16">
            {/* Campo NOMBRE */}
            <div className="flex flex-col py-2">
              <div className="text-base min-[500px]:text-xl font-semibold px-2 py-2">NOMBRE</div>
              <input
                className="rounded-md bg-[--white2] text-[--azulOscuro] px-4 py-2 w-[230px] min-[500px]:w-[300px]"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
              />
            </div>
            {/* Campo TELEFONO */}
            <div className="flex flex-col py-2">
              <div className="text-base min-[500px]:text-xl font-semibold px-2 py-2">TELEFONO</div>
              <input
                className="rounded-md bg-[--white2] text-[--azulOscuro] px-4 py-2 w-[230px] min-[500px]:w-[300px]"
                value={telefono}
                onChange={(e) => setTelefono(e.target.value)}
              />
            </div>
            {/* Campo CIUDAD */}
            <div className="flex flex-col py-2">
              <div className="text-base min-[500px]:text-xl font-semibold px-2 py-2">CIUDAD</div>
              <input
                className="rounded-md bg-[--white2] text-[--azulOscuro] px-4 py-2 w-[230px] min-[500px]:w-[300px]"
                value={ciudad}
                onChange={(e) => setCiudad(e.target.value)}
              />
            </div>
            {/* Tipo de servicio con radio buttons (selección única) */}
            <div className="flex flex-col py-2 gap-2">
              <div className="text-base min-[500px]:text-xl font-semibold px-2">TIPO DE SERVICIO</div>
              <div className="grid grid-flow-col grid-cols-3 gap-1">
                <div className="flex flex-col text-center items-center gap-2">
                  <div className="text-xs min-[500px]:text-base font-semibold">Hogar</div>
                  <input
                    type="radio"
                    name="servicio"
                    className="w-[20px] h-[20px]"
                    value="Hogar"
                    checked={servicio === "Hogar"}
                    onChange={(e) => setServicio(e.target.value)}
                  />
                </div>
                <div className="flex flex-col text-center items-center gap-2">
                  <div className="text-xs min-[500px]:text-base font-semibold">Comercio</div>
                  <input
                    type="radio"
                    name="servicio"
                    className="w-[20px] h-[20px]"
                    value="Comercio"
                    checked={servicio === "Comercio"}
                    onChange={(e) => setServicio(e.target.value)}
                  />
                </div>
                <div className="flex flex-col text-center items-center gap-2">
                  <div className="text-xs min-[500px]:text-base font-semibold">Empresa</div>
                  <input
                    type="radio"
                    name="servicio"
                    className="w-[20px] h-[20px]"
                    value="Empresa"
                    checked={servicio === "Empresa"}
                    onChange={(e) => setServicio(e.target.value)}
                  />
                </div>
              </div>
            </div>
            {/* Campo ASUNTO */}
            <div className="flex flex-col py-2">
              <div className="text-base min-[500px]:text-xl font-semibold px-2 py-2">ASUNTO</div>
              <textarea
                className="rounded-md text-sm bg-[--white2] text-[--azulOscuro] px-4 py-2 w-[230px] min-[500px]:w-[300px] h-[100px]"
                value={asunto}
                onChange={(e) => setAsunto(e.target.value)}
              />
            </div>
            {/* Turnstile Widget */}
            <div className="flex flex-col py-2 items-center">
              <Turnstile
                ref={turnstileRef}
                siteKey={TURNSTILE_SITE_KEY}
                onSuccess={(t) => setToken(t)}
                onError={() => {
                  alert("Error con la verificación. Recarga la página o intenta más tarde.");
                  setToken(null);
                }}
                onExpire={() => setToken(null)}
                options={{ theme: "dark" }} // para que combine con el fondo oscuro
              />
            </div>
            {/* Botón ENVIAR */}
            <div className="flex flex-col py-4">
              <button
                className={`text-xl font-semibold px-4 py-2 rounded-md transition-colors ${
                  !enviando && token
                    ? "bg-[--azulClaro] text-[--white1] hover:opacity-90 cursor-pointer"
                    : "bg-gray-400 text-gray-200 cursor-not-allowed"
                }`}
                onClick={handleSolicitud}
                disabled={enviando || !token}
              >
                {enviando ? "ENVIANDO..." : "ENVIAR"}
              </button>
            </div>
          </div>
        </div>
        {/* Footer igual que antes */}
        <div className="flex flex-col gap-4 bg-[--azulOscuro] py-2 px-4 text-lg min-[800px]:flex-row min-[800px]:justify-between min-[800px]:items-center">
          <div className="flex flex-row items-center justify-center gap-4 flex-1 min-[800px]:justify-start">
            <Image src="/images/STEGrande2.png" alt="logo" width={75} height={75} className="cursor-pointer rounded-[10%] w-[90px] h-[30px]" />
            <div className="text-sm text-[--white1] text-center min-[800px]:text-left">
              SEGURIDAD <br />ELECTRONICA
            </div>
          </div>
          <div className="text-center text-[--white1] text-sm flex-1">
            Seguridad, tecnología y confianza.<br /> © 2024 STE Seguridad Electronica. Todos los derechos reservados.
          </div>
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