import Image from "next/image";
import Navbar from "../others/navbar";
import Pie from "../others/pie";

export default function CamarasPage() {
  return (
    // Contenedor principal: altura mínima para que crezca con el contenido
    <div className="min-h-screen bg-[--negro1] Montserrat flex flex-col">
      
      {/* ========== MITAD SUPERIOR (hero) ========== */}
      {/* Usamos un contenedor relativo que ocupa el 50% de la altura inicial */}
      <div className="relative w-full h-[50vh] min-h-[450px]">
        {/* Imagen de fondo: ocupa todo el contenedor, se mueve con él */}
        <picture className="absolute inset-0 w-full h-full">
          {/* Imagen para pantallas menores a 640px (móviles) */}
          <source media="(max-width: 1024px)" srcSet="/images/servicios/camaras/portada_b2.jpg" />
          {/* Imagen por defecto (escritorio) */}
          <Image
            src="/images/servicios/camaras/portada_camaras2.jpg"
            alt="Frente"
            fill
            className="object-cover"
            priority
          />
        </picture>
        
        {/* Contenido superpuesto (Navbar + texto) */}
        <div className="absolute inset-0 z-20 flex flex-col" style={{ background: 'var(--azulGradiente)' }}>
          <Navbar />
          
          {/* Grid de dos columnas para el texto y botones */}
          <div className="flex-1 grid grid-flow-col grid-cols-[5fr_1fr] min-[800px]:grid-cols-[2fr_1fr] min-[1100px]:grid-cols-2 gap-4 py-4 px-4 min-[1100px]:px-6 min-[1200px]:px-8 min-[1700px]:px-16">
            {/* Columna izquierda: contenido principal */}
            <div className="flex flex-col gap-4 min-[1700px]:gap-6 justify-center">
              <div className="flex flex-col min-[1100px]:flex-row min-[1100px]:gap-4 font-bold text-lg min-[400px]:text-xl min-[600px]:text-2xl min-[800px]:text-3xl min-[1200px]:text-4xl min-[1600px]:text-5xl">
                <div className="text-[--white1]">CÁMARAS DE </div>
                <div className="text-[--azulClaro]"> SEGURIDAD</div>
              </div>
              
              <div className="text-[10px] min-[400px]:text-xs min-[600px]:text-sm min-[800px]:text-base min-[1200px]:text-lg text-[--white1]">
                En STE Seguridad Electrónica ofrecemos soluciones profesionales en instalación de cámaras de seguridad (CCTV) diseñadas para brindar vigilancia inteligente, control total y prevención efectiva en hogares, comercios, empresas y barrios privados en Santa Fe y la región.
              </div>
              
              <div className="flex flex-col min-[1100px]:flex-row flex-wrap gap-4 w-[250px] min-[1100px]:w-full max-w-[600px] min-[1200px]:max-w-[650px] text-xs min-[1200px]:text-sm min-[1700px]:text-base">
                <button className="flex items-center gap-2 rounded-md bg-[--azulClaro] text-[--white1] font-semibold py-2 px-4">
                  <Image src="/images/icons/planilla2.png" alt="logo" width={35} height={35} 
                  className="w-[25px] min-[1200px]:w-[35px] h-[25px] min-[1200px]:h-[35px]"/>
                  <span>SOLICITAR ASESORAMIENTO</span>
                </button>
                
                <button className="flex items-center gap-2 rounded-full border-2 border-[--white1] text-[--white1] bg-[--azulOscuroT] font-semibold 
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
        min-[1100px]:grid min-[1100px]:grid-flow-col min-[1100px]:place-content-center py-8 min-[1100px]:py-3 min-[1100px]:grid-cols-5 min-[1100px]:gap-4">
            <div className="flex flex-row min-[1100px]:flex-col justify-start min-[1100px]:justify-center items-center self-start min-[1100px]:self-start gap-2 min-[1100px]:gap-4 font-semibold text-base">
                <Image src="/images/icons/icon_1.png" alt="logo" width={125} height={125} 
                className="w-[75px] h-[75px]  "/>
                <div className="flex flex-col">
                  <div className="text-[13px] min-[1600px]:text-base font-bold text-left min-[1100px]:text-center">INSTALACIÓN DE CÁMARAS <br className="max-[1000px]:hidden"/>(CCTV HD y 4K)</div>
                  <div className="text-xs min-[1600px]:text-sm font-semibold text-left min-[1100px]:text-center">
                      Sistemas de videovigilancia de alta definición para hogares, empresas y barrios privados.
                  </div>
                </div>
            </div>
            <div className="flex flex-row min-[1100px]:flex-col justify-start min-[1100px]:justify-center items-center self-start min-[1100px]:self-start gap-2 min-[1100px]:gap-4 font-semibold text-base">
                <Image src="/images/icons/icon09.png" alt="logo" width={125} height={125} 
                className="w-[75px] h-[75px]  "/>
                <div className="flex flex-col">
                  <div className="text-[13px] min-[1600px]:text-base font-bold text-left min-[1100px]:text-center">CÁMARAS CON ANALÍTICA INTELIGENTE</div>
                  <div className="text-xs min-[1600px]:text-sm font-semibold text-left min-[1100px]:text-center">
                      Detección de movimiento, personas y vehículos para una seguridad proactiva y eficiente. 
                  </div>
                </div>

            </div>
            <div className="flex flex-row min-[1100px]:flex-col justify-start min-[1100px]:justify-center items-center self-start min-[1100px]:self-start gap-2 min-[1100px]:gap-4 font-semibold text-base">           
                <Image src="/images/icons/icon12.png" alt="logo" width={125} height={125} 
                className="w-[75px] h-[75px]  "/>
                <div className="flex flex-col">
                  <div className="text-[13px] min-[1600px]:text-base font-bold text-left min-[1100px]:text-center">MONITOREO REMOTO DESDE EL CELULAR</div>
                  <div className="text-xs min-[1600px]:text-sm font-semibold text-left min-[1100px]:text-center">
                      Acceso en tiempo real a tus cámaras de seguridad desde cualquier lugar, las 24 horas. 
                  </div>
                </div>
            </div>
            <div className="flex flex-row min-[1100px]:flex-col justify-start min-[1100px]:justify-center items-center self-start min-[1100px]:self-start gap-2 min-[1100px]:gap-4 font-semibold text-base">           
                <Image src="/images/icons/icon15.png" alt="logo" width={125} height={125} 
                className="w-[75px] h-[75px] "/>
                <div className="flex flex-col">
                  <div className="text-[13px] min-[1600px]:text-base font-bold text-left min-[1100px]:text-center">GRABACIÓN CONTINUA Y ALMACENAMIENTO SEGURO</div>
                  <div className="text-xs min-[1600px]:text-sm font-semibold text-left min-[1100px]:text-center">
                      Sistemas con DVR/NVR y respaldo de imágenes, garantizando evidencia ante incidentes.
                  </div>
                </div>
            </div>
            <div className="flex flex-row min-[1100px]:flex-col justify-start min-[1100px]:justify-center items-center self-start min-[1100px]:self-start gap-2 min-[1100px]:gap-4 font-semibold text-base">           
                <Image src="/images/icons/icon16.png" alt="logo" width={125} height={125} 
                className="w-[75px] h-[75px]  "/>
                <div className="flex flex-col">
                  <div className="text-[13px] min-[1600px]:text-base font-bold text-left min-[1100px]:text-center">INSTALACIÓN PROFESIONAL Y MANTENIMIENTO</div>
                  <div className="text-xs min-[1600px]:text-sm font-semibold text-left min-[1100px]:text-center">
                      Servicio integral en cámaras de seguridad en Santa Fe, con soporte técnico y actualización tecnológica.
                  </div>
                </div>
            </div>
          </div>
        
        <Pie />
      </div>
    </div>
  );
}