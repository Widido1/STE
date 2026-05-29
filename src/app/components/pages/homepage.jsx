import Image from "next/image";
import Navbar from "../others/navbar";
import Pie from "../others/pie";

export default function HomePage() {
  return (
    // Contenedor principal: altura mínima para que crezca con el contenido
    <div className="min-h-screen bg-[--negro1] Montserrat flex flex-col">
      
      {/* ========== MITAD SUPERIOR (hero) ========== */}
      {/* Usamos un contenedor relativo que ocupa el 50% de la altura inicial */}
      <div className="relative w-full h-[50vh] min-h-[450px]">
        {/* Imagen de fondo: ocupa todo el contenedor, se mueve con él */}
        <picture className="absolute inset-0 w-full h-full">
          {/* Imagen para pantallas menores a 640px (móviles) */}
          <source media="(max-width: 1024px)" srcSet="/images/portada_b.png" />
          {/* Imagen por defecto (escritorio) */}
          <Image
            src="/images/portada.jpg"
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
          <div className="flex-1 grid grid-flow-col min-[800px]:grid-cols-[2fr_1fr] min-[1000px]:grid-cols-2 gap-4 py-4 px-4 min-[1100px]:px-6 min-[1200px]:px-8 min-[1500px]:px-16">
            {/* Columna izquierda: contenido principal */}
            <div className="flex flex-col gap-4 min-[1400px]:gap-6 justify-center">
              <div className="font-bold text-lg min-[400px]:text-xl min-[600px]:text-2xl min-[800px]:text-3xl min-[1200px]:text-4xl min-[1600px]:text-5xl">
                <div className="text-[--white1]">SEGURIDAD ELECTRONICA</div>
                <div className="text-[--azulClaro]">PROFESIONAL</div>
              </div>
              
              <div className="text-[10px] min-[400px]:text-xs min-[600px]:text-sm min-[800px]:text-base min-[1200px]:text-lg text-[--white1]">
                Sistema de cámaras, alarmas y monitoreo las 24 horas <br />
                Con sistema inteligente y soporte técnico real.
              </div>
              
              <div className="flex flex-col min-[1000px]:flex-row flex-wrap gap-4 w-[250px] min-[1000px]:w-full max-w-[600px] min-[1200px]:max-w-[650px] text-xs min-[1200px]:text-sm min-[1500px]:text-base">
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
              
              <div className="flex flex-wrap gap-4 text-[--white1] font-semibold text-[8px] min-[600px]:text-[10px] min-[1200px]:text-xs min-[1400px]:text-sm">
                <div className="flex items-center gap-2">
                  <Image src="/images/icons/escudochico.png" alt="logo" width={50} height={50}
                    className="rounded-full border border-[--azulClaro] w-[30px] min-[600px]:w-[40px] min-[1200px]:w-[50px] h-[30px] min-[600px]:h-[40px] min-[1200px]:h-[50px] p-0.5 min-[600px]:p-1"/>
                  <span>+15 AÑOS<br/>DE EXPERIENCIA</span>
                </div>
                <div className="flex items-center gap-2">
                  <Image src="/images/icons/tuerca2.png" alt="logo" width={50} height={50}
                    className="rounded-full border border-[--azulClaro] w-[30px] min-[600px]:w-[40px] min-[1200px]:w-[50px] h-[30px] min-[600px]:h-[40px] min-[1200px]:h-[50px] p-1.5 min-[600px]:p-2 min-[800px]:p-2.5" />
                  <span>SOPORTE TÉCNICO<br/>REAL Y PRACTICO</span>
                </div>
                <div className="flex items-center gap-2">
                  <Image src="/images/icons/tuercaA2.png" alt="logo" width={50} height={50}
                    className="rounded-full border border-[--azulClaro] w-[30px] min-[600px]:w-[40px] min-[1200px]:w-[50px] h-[30px] min-[600px]:h-[40px] min-[1200px]:h-[50px] p-0.5 min-[600px]:p-1" />
                  <span>INSTALACIONES<br/>PROFESIONALES</span>
                </div>
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
                    min-[1000px]:grid min-[1000px]:grid-flow-col min-[1000px]:justify-items-center min-[1000px]:gap-4">
          
          {/* Tarjeta 1: Hogares */}
          <div className="flex flex-row items-center text-center min-[1000px]:text-left min-[1000px]:items-center gap-4 max-w-[300px] min-[1000px]:max-w-none">
            <Image src="/images/icons/house2.png" alt="logo" width={150} height={150}
              className="w-[125px] min-[1200px]:w-[150px] h-auto" />
            <div>
              <div className="text-base min-[500px]:text-lg min-[1300px]:text-xl font-bold text-[--azulOscuro]">HOGARES</div>
              <div className="font-semibold text-xs min-[500px]:text-sm">
                Camaras Wifi <br />
                Alarmas Inalambricas <br />
                Monitoreo 24hs
              </div>
              <div className="text-[--azulClaro] font-semibold text-sm min-[500px]:text-base py-2 cursor-pointer">CONSULTAR</div>
            </div>
          </div>
          
          {/* Tarjeta 2: Empresas */}
          <div className="flex flex-row items-center text-center min-[1000px]:text-left min-[1000px]:items-center gap-4 max-w-[300px] min-[1000px]:max-w-none">
            <Image src="/images/icons/edificio2.png" alt="logo" width={150} height={150}
              className="w-[125px] min-[1200px]:w-[150px] h-auto" />
            <div>
              <div className="text-base min-[500px]:text-lg min-[1300px]:text-xl font-bold text-[--azulOscuro]">EMPRESAS</div>
              <div className="font-semibold text-xs min-[500px]:text-sm">
                Sistemas CCTV profesionales <br />
                Alarmas y control de accesos <br />
                Soluciones a medida
              </div>
              <div className="text-[--azulClaro] font-semibold text-sm min-[500px]:text-base py-2 cursor-pointer">CONSULTAR</div>
            </div>
          </div>
          
          {/* Tarjeta 3: Soluciones avanzadas */}
          <div className="flex flex-row items-center text-center min-[1000px]:text-left min-[1000px]:items-center gap-4 max-w-[300px] min-[1000px]:max-w-none">
            <Image src="/images/icons/blindaje2.png" alt="logo" width={150} height={150}
              className="w-[125px] min-[1200px]:w-[150px] h-auto" />
            <div>
              <div className="text-base min-[500px]:text-lg min-[1300px]:text-xl font-bold text-[--azulOscuro]">SOLUCIONES AVANZADAS</div>
              <div className="font-semibold text-xs min-[500px]:text-sm">
                Inteligencia artificial <br />
                Lectura de patentes (ANPR) <br />
                Rastreo y analitica
              </div>
              <div className="text-[--azulClaro] font-semibold text-sm min-[500px]:text-base py-2 cursor-pointer">CONSULTAR</div>
            </div>
          </div>
        </div>
        
        <Pie />
      </div>
    </div>
  );
}