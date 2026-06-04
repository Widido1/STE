import Image from "next/image";
import Navbar from "../others/navbar";
import Pie from "../others/pie";
import Link from "next/link";

const numberWSP = process.env.NEXT_PUBLIC_WSP;

export default function SolucionesPage() {
  return (
    // Contenedor principal: altura mínima para que crezca con el contenido
    <div className="min-h-screen bg-[--negro1] Montserrat flex flex-col">
      
      {/* ========== MITAD SUPERIOR (hero) ========== */}
      {/* Usamos un contenedor relativo que ocupa el 50% de la altura inicial */}
      <div className="relative w-full h-[50vh] min-h-[450px]">
        <picture className="absolute inset-0 w-full h-full">
          {/* Imagen para pantallas menores a 640px (móviles) */}
          <source media="(max-width: 1024px)" srcSet="/images/servicios/soluciones/portada_b.jpg" />
          {/* Imagen por defecto (escritorio) */}
          <Image
            src="/images/servicios/soluciones/portada_soluciones.png"
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
              <div className="flex flex-col gap-4 font-bold text-lg min-[400px]:text-xl min-[600px]:text-2xl min-[800px]:text-3xl min-[1200px]:text-4xl min-[1600px]:text-5xl">
                <div className="text-[--white1]">SOLUCIONES  </div>
                <div className="text-[--azulClaro]">AVANZADAS</div>
              </div>
              
              <div className="text-[10px] min-[400px]:text-xs min-[600px]:text-sm min-[800px]:text-base min-[1200px]:text-lg text-[--white1]">
                Sistema de software de analítica de video con inteligencia artificial que transforma las cámaras en herramientas de gestión.
                Permite obtener datos clave como conteo de personas, detección de robos y análisis de comportamiento.
                Brinda información en tiempo real para mejorar la productividad, optimizar recursos y reducir pérdidas.
                Ideal para empresas y comercios que buscan tomar decisiones basadas en datos y aumentar la eficiencia operativa.
              </div>
              
              <div className="flex flex-col min-[1100px]:flex-row flex-wrap gap-4 w-[250px] min-[1100px]:w-full max-w-[600px] min-[1200px]:max-w-[650px] text-xs min-[1200px]:text-sm min-[1700px]:text-base">
                <Link href="/contacto" className="cursor-pointer">
                  <div className="flex items-center gap-2 rounded-md bg-[--azulClaro] text-[--white1] font-semibold py-2 px-4">
                    <Image src="/images/icons/planilla2.png" alt="logo" width={35} height={35} 
                    className="w-[25px] min-[1200px]:w-[35px] h-[25px] min-[1200px]:h-[35px]"/>
                    <span>SOLICITAR ASESORAMIENTO</span>
                  </div>
                </Link>
                
                <Link href={`https://wa.me/${numberWSP}`} target="_blank" className="grid cursor-pointer">
                  <div className="flex items-center gap-2 rounded-full border-2 border-[--white1] text-[--white1] bg-[--azulOscuroT] font-semibold 
                  py-2 px-4">
                    <Image src="/images/icons/whatsapp.png" alt="logo" width={25} height={25} 
                    className="w-[18px] min-[1200px]:w-[25px] h-[18px] min-[1200px]:h-[25px]"/>
                    <span>HABLAR POR WHATSAPP</span>
                  </div>
                </Link>
              </div>
              
            </div>
            
            {/* Columna derecha: vacía (o podés agregar el formulario comentado) */}
            <div></div>
          </div>
        </div>
      </div>
      
      {/* ========== MITAD INFERIOR ========== */}
      <div className="bg-[--white1] flex flex-1 flex-col">      
                <div className="text-center font-bold text-base min-[400px]:text-lg min-[500px]:text-xl min-[800px]:text-2xl pt-4">
          SOLUCIONES PARA CADA NECESIDAD
        </div>
        
        {/* SECCIÓN DE TARJETAS: Flex en mobile, Grid en desktop */}
        <div className="flex flex-1 flex-col items-center gap-4 min-[500px]:gap-8 py-4 px-4
        min-[1100px]:grid min-[1100px]:grid-flow-col min-[1100px]:justify-items-center min-[1100px]:gap-4">
          
          {/* Tarjeta 1: Hogares */}
          <div className="flex flex-row items-start max-[1100px]:w-full text-left min-[1100px]:items-center max-w-[300px] min-[1100px]:max-w-none gap-2">
            <Image src="/images/icons/icon07.png" alt="logo" width={150} height={150}
              className="w-[80px] min-[1100px]:w-[100px] h-auto" />
            <div>
              <div className="text-xs min-[500px]:text-sm min-[1300px]:text-base font-bold text-[--azulOscuro]">RASTREO SATELITAL DE VEHÍCULOS (GPS)</div>
              <div className="font-semibold text-[10px] min-[500px]:text-xs">
                Monitoreo y Control en tiempo real <br />
                Alertas por exceso de velocidad <br />
                Notificaciones ante eventos sospechosos
              </div>
              <Link href="/gps" className="cursor-pointer"><div className="text-[--azulClaro] font-semibold text-xs min-[500px]:text-sm py-2">CONSULTAR</div></Link>
            </div>
          </div>

          <div className="flex flex-row items-start max-[1100px]:w-full text-left min-[1100px]:items-center max-w-[300px] min-[1100px]:max-w-none gap-2">
            <Image src="/images/icons/icon03.png" alt="logo" width={150} height={150}
              className="w-[75px] h-[75px] min-[1100px]:w-[100px] min-[1100px]:h-[100px]" />
            <div>
              <div className="text-xs min-[500px]:text-sm min-[1300px]:text-base font-bold text-[--azulOscuro]">SOLUCIONES VIALES Y ANALÍTICA AVANZADA</div>
              <div className="font-semibold text-[10px] min-[500px]:text-xs">
                Analítica inteligente de video (IA)<br />
                Lectura de patentes(ANPR/LPR) <br />
                Búsqueda inteligente y gestión avanzada de video
              </div>
              <Link href="/vial" className="cursor-pointer"><div className="text-[--azulClaro] font-semibold text-xs min-[500px]:text-sm py-2">CONSULTAR</div></Link>
            </div>
          </div>
        </div>
        
        <Pie />
      </div>
    </div>
  );
}