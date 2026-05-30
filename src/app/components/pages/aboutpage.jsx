import Image from "next/image";
import Navbar from "../others/navbar";
import Pie from "../others/pie";

export default function AboutPage() {
  return (
    // Contenedor principal: altura mínima para que crezca con el contenido
    <div className="min-h-screen bg-[--negro1] Montserrat flex flex-col">
      
      {/* ========== MITAD SUPERIOR (hero) ========== */}
      {/* Usamos un contenedor relativo que ocupa el 50% de la altura inicial */}
      <div className="relative w-full h-[50vh] min-h-[450px]">
        <picture className="absolute inset-0 w-full h-full">
          {/* Imagen para pantallas menores a 640px (móviles) */}
          <source media="(max-width: 1024px)" srcSet="/images/servicios/nosotros/portada_b.jpg" />
          {/* Imagen por defecto (escritorio) */}
          <Image
            src="/images/servicios/nosotros/portada_nosotros.png"
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
                <div className="text-[--white1]">SOBRE </div>
                <div className="text-[--azulClaro]">NOSOTROS</div>
              </div>
              
              <div className="text-[10px] min-[400px]:text-xs min-[600px]:text-sm min-[800px]:text-base min-[1200px]:text-lg text-[--white1]">
                Desarrollamos soluciones de videovigilancia vial y analítica inteligente orientadas a municipios, barrios privados, parques industriales y empresas que requieren control avanzado del tránsito y trazabilidad de vehículos.
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
            

        </div>
        
        <Pie />
      </div>
    </div>
  );
}