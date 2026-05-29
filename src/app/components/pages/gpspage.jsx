import Image from "next/image";
import Navbar from "../others/navbar";
import Pie from "../others/pie";

export default function GPSPage() {
  return (
    // Contenedor principal: altura mínima para que crezca con el contenido
    <div className="min-h-screen bg-[--negro1] Montserrat flex flex-col">
      
      {/* ========== MITAD SUPERIOR (hero) ========== */}
      {/* Usamos un contenedor relativo que ocupa el 50% de la altura inicial */}
      <div className="relative w-full h-[50vh] min-h-[450px]">
        {/* Imagen de fondo: ocupa todo el contenedor, se mueve con él */}
        <Image
          src="/images/servicios/rastreo/portada_rastreo.jpg"
          alt="Frente"
          fill
          className="object-cover"
          priority
        />
        
        {/* Contenido superpuesto (Navbar + texto) */}
        <div className="absolute inset-0 z-20 flex flex-col" style={{ background: 'var(--azulGradiente)' }}>
          <Navbar />
          
          {/* Grid de dos columnas para el texto y botones */}
          <div className="flex-1 grid grid-flow-col min-[800px]:grid-cols-[2fr_1fr] min-[1100px]:grid-cols-2 gap-4 py-4 px-4 min-[1100px]:px-6 min-[1200px]:px-8 min-[1700px]:px-16">
            {/* Columna izquierda: contenido principal */}
            <div className="flex flex-col gap-4 min-[1700px]:gap-6 justify-center">
              <div className="font-bold text-lg min-[400px]:text-xl min-[600px]:text-2xl min-[800px]:text-3xl min-[1200px]:text-4xl min-[1600px]:text-5xl">
                <div className="text-[--white1]">RASTREO SATELITAL </div>
                <div className="text-[--azulClaro]">DE VEHÍCULOS (GPS)</div>
              </div>
              
              <div className="text-[10px] min-[400px]:text-xs min-[600px]:text-sm min-[800px]:text-base min-[1200px]:text-lg text-[--white1]">
                En STE Seguridad Electrónica ofrecemos soluciones de rastreo satelital de vehículos para control, seguridad y gestión eficiente de flotas.<br/>
                Instalamos dispositivos GPS en cada unidad para monitorear su ubicación en tiempo real y obtener información precisa sobre su uso.
              </div>
              
              <div className="flex flex-col min-[1100px]:flex-row flex-wrap gap-4 w-[250px] min-[1100px]:w-full max-w-[600px] min-[1200px]:max-w-[650px] text-xs min-[1200px]:text-sm min-[1700px]:text-base">
                <button className="flex items-center gap-2 rounded-md bg-[--azulClaro] text-[--white1] font-semibold py-2 px-4">
                  <Image src="/images/icons/planilla2.png" alt="logo" width={35} height={35} 
                  className="w-[25px] min-[1200px]:w-[35px] h-[25px] min-[1200px]:h-[35px]"/>
                  <span>SOLICITAR ASESORAMIENTO</span>
                </button>
                
                <button className="flex items-center gap-2 rounded-full border-2 border-[--white1] text-[--white1] font-semibold 
                py-2 px-4">
                  <Image src="/images/icons/whatsapp.png" alt="logo" width={25} height={25} 
                  className="w-[18px] min-[1200px]:w-[25px] h-[18px] min-[1200px]:h-[25px]"/>
                  <span>HABLAR POR WHATSAPP</span>
                </button>
              </div>
              
            </div>
            
            {/* Columna derecha: vacía (o podés agregar el formulario comentado) */}
            <div></div>
          </div>
        </div>
      </div>
      
      {/* ========== MITAD INFERIOR ========== */}
      <div className="bg-[--white1] flex flex-1 flex-col">      
        {/* SECCIÓN DE TARJETAS: Flex en mobile, Grid en desktop */}
        <div className="flex flex-1 flex-col min-[1100px]:flex-row justify-self-center mx-auto min-[1100px]:items-center min-[1100px]:justify-items-center gap-6 px-4
        min-[1100px]:grid min-[1100px]:grid-flow-col min-[1100px]:place-content-center py-8 min-[1100px]:py-3 min-[1100px]:grid-cols-3 min-[1100px]:gap-4">
            <div className="flex flex-row min-[1100px]:flex-col justify-start min-[1100px]:justify-center items-center self-start min-[1100px]:self-start gap-2 min-[1100px]:gap-4 font-semibold text-base">
                <Image src="/images/icons/icon04.png" alt="logo" width={125} height={125} 
                className="w-[75px] h-[75px] "/>
                <div className="flex flex-col">
                  <div className="text-[13px] min-[1600px]:text-base font-bold text-left min-[1100px]:text-center">MONITOREO Y CONTROL EN TIEMPO REAL</div>
                  <div className="text-xs min-[1600px]:text-sm font-semibold text-left min-[1100px]:text-center">
                      ⦁ Seguimiento de ubicación 24/7 desde app o plataforma web <br/>
                      ⦁ Visualización de recorridos históricos y en vivo <br/>
                      ⦁ Geocercas (alertas de entrada/salida de zonas) <br/>
                  </div>
                </div>
            </div>
            <div className="flex flex-row min-[1100px]:flex-col justify-start min-[1100px]:justify-center items-center self-start min-[1100px]:self-start gap-2 min-[1100px]:gap-4 font-semibold text-base">
                <Image src="/images/icons/icon17.png" alt="logo" width={125} height={125} 
                className="w-[75px] h-[75px] "/>
                <div className="flex flex-col">
                  <div className="text-[13px] min-[1600px]:text-base font-bold text-left min-[1100px]:text-center">NOTIFICACIONES</div>
                  <div className="text-xs min-[1600px]:text-sm font-semibold text-left min-[1100px]:text-center">
                      ⦁ Reportes detallados por día, semana o mes <br/>
                      ⦁ Alertas por exceso de velocidad <br/>
                      ⦁ Alertas ante desconexión de batería o manipulación <br/>
                      ⦁ Notificaciones ante eventos sospechosos <br/>
                  </div>
                </div>

            </div>
            <div className="flex flex-row min-[1100px]:flex-col justify-start min-[1100px]:justify-center items-center self-start min-[1100px]:self-start gap-2 min-[1100px]:gap-4 font-semibold text-base">           
                <Image src="/images/icons/icon12.png" alt="logo" width={125} height={125} 
                className="w-[75px] h-[75px] "/>
                <div className="flex flex-col">
                  <div className="text-[13px] min-[1600px]:text-base font-bold text-left min-[1100px]:text-center">APLICACIONES</div>
                  <div className="text-xs min-[1600px]:text-sm font-semibold text-left min-[1100px]:text-center">
                      ⦁ Vehículos particulares <br/>
                      ⦁ Flotas empresariales <br/>
                      ⦁ Logística y distribución <br/>
                      ⦁ Maquinaria y equipos móviles <br/>
                  </div>
                </div>
            </div>
          </div>
        
        <Pie />
      </div>
    </div>
  );
}