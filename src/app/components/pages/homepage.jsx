import Image from "next/image";
import VideoPlay from "../others/videoplay";
import MatrixRain from "../others/matrix-rain";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="grid w-full">
      <MatrixRain/>
      <div className="grid grid-flow-row w-full">
        
        <div className="grid w-full h-screen bg-black z-10">
            <VideoPlay src="/video/Publicidad01.mp4" className="absolute w-full h-screen z-10 max-[900px]:grid max-[900px]:place-items-center max-[900px]:place-content-center max-[900px]:place-self-center" />
            <div className="grid w-full relative max-[900px]:place-items-start max-[900px]:place-self-start max-[900px]:place-content-center z-30 h-[95vh] bg-transparent">
              <div className="grid min-[900px]:grid-flow-col min-[900px]:grid-cols-2 h-[90vh] min-[900px]:h-[60vh] w-full min-[900px]:w-[80%] place-self-center min-[900px]:place-self-center">
                
                <div className="grid grid-flow-row place-items-start min-[550px]:place-items-center place-content-start min-[550px]:grid-flow-col min-[550px]:grid-cols-2 w-full min-[550px]:justify-center min-[900px]:grid-flow-row min-[900px]:grid-cols-1 min-[900px]:place-items-start min-[900px]:place-content-start p-4">
                  <div className="grid min-[550px]:place-content-center min-[550px]:place-items-center OdibeeSans text-amber-400 text-8xl min-[550px]:text-9xl min-[1150px]:text-[180px] min-[1150px]:leading-none">Morfeo</div>
                  <div className="grid place-content-center place-items-center QuanticoRegular text-(--gris1) text-left min-[550px]:text-center text-4xl min-[1150px]:text-6xl min-[550px]:pl-2">Desarrollo Web</div>
                </div>

                <div className="grid max-[900px]:grid-flow-col max-[900px]:grid-cols-2 max-[900px]:w-full gap-4 place-content-center place-items-center place-self-end min-[900px]:place-content-end min-[900px]:place-items-end">
                  <Link href={`https://wa.me/543425935644`}>
                    <div className="grid BoxShine overflow-visible place-self-end QuanticoRegular text-xl min-[550px]:text-3xl min-[1150px]:text-4xl bg-amber-400 text-(--negro1) place-content-end place-items-center py-2 px-4 my-2 rounded-lg cursor-pointer">Contactanos</div>
                  </Link>
                  <div className="grid QuanticoRegular text-center min-[900px]:text-right text-(--gris1) text-xl min-[550px]:text-2xl min-[1150px]:text-3xl place-items-center">La Matrix no puede esperar.</div>
                </div>

              </div>
            </div>
        </div>

        <div className="grid w-full h-screen z-10 bg-black">
          
          <div className="grid w-[80%] grid-flow-row min-[1150px]:grid-flow-col min-[1150px]:grid-cols-[auto_1fr] place-items-center place-content-center place-self-center px-4 gap-4 ">
            <div className="grid">
              <Image 
              src="/images/Morfeo.webp" 
              alt="Morfeo" 
              width={500} 
              height={500}
              />
            </div>
            <div className="QuanticoRegular grid grid-flow-row place-self-start gap-4 text-xs min-[550px]:text-lg min-[700px]:text-2xl min-[1350]:text-3xl mb-4">
              <div className="grid text-left text-(--white1) px-4">
                ¿Sabes que tu web apesta pero no te animas a cambiarla?<br/>
                ¿Quieres vender mientras duermes?<br/>
                ¿Estás harto de promesas vacías y plantillas que parecen todas iguales?<br/>
                ¿Crees que la web es demasiado cara?<br/>
              </div>
              <div className="grid text-left text-(--white1) px-4">
                Entonces este servicio es para ti. <br/><br/>
                Morfeo no solo te ofrece código.<br/>
                Te ofrece la llave para salir de lo ordinario.<br/>
                Nosotros te mostramos hasta dónde puede llegar tu web.<br/>
              </div>
            </div>
          </div>
        </div>

        <div className="grid w-full h-screen z-10">
          <div className="Orbitron grid grid-flow-row place-self-center place-content-center text-xs min-[550px]:text-lg min-[900px]:text-2xl text-(--white1)">
            <div className="grid place-content-center text-lg min-[400px]:text-xl min-[550px]:text-3xl min-[700px]:text-4xl min-[1150px]:text-6xl text-(--white1) pb-8">
              La elección está en tus manos:
            </div>
            <div className="QuanticoRegular grid grid-flow-col place-self-center text-left gap-3 min-[550px]:gap-6 min-[900px]:gap-8 min-[1150px]:gap-16">
              <div className="grid grid-flow-row rounded-md bg-(--fondoT) border-2 border-amber-400 
              w-[165px] min-[400px]:w-[200px] min-[550px]:w-[250px] min-[700px]:w-[320px] min-[900px]:w-[400px] min-[1150px]:w-[500px] min-[1350px]:w-[600px] 
              py-2 px-3 min-[550px]:py-4 min-[550px]:px-6 min-[700px]:py-6 min-[700px]:px-8 min-[900px]:py-8 min-[900px]:px-12">
                <div>
                  <Link href={`https://es.wikipedia.org/wiki/Miedo_al_%C3%A9xito_(psicolog%C3%ADa)`}>
                    <Image 
                    src="/images/ManoAzul.webp"
                    alt="Mano Azul" 
                    width={500} height={500}
                    className="grid BlueGlowT Bigger place-self-center w-[400px] cursor-pointer"
                    />
                  </Link>
                </div>
                <div>
                  Puedes tomar la pastilla azul y seguir viendo tu web como un folleto digital.<br/>
                  Los visitantes pasan de largo, como sombras.<br/>
                  Creés que el problema es el mercado, la gente, la suerte.<br/>
                  Sigues durmiendo. Y tus ventas también.<br/>
                </div>
                <div className="grid place-content-center pt-8">
                  <Link href={`https://es.wikipedia.org/wiki/Miedo_al_%C3%A9xito_(psicolog%C3%ADa)`}>
                    <div className="Orbitron BlueG BlueGlow Bigger rounded-full text-sm min-[400px]:text-lg min-[550px]:text-xl min-[700px]:text-2xl min-[900px]:text-4xl py-2 px-4 min-[550px]:px-8 min-[550px]:py-4 cursor-pointer">Olvidalo</div>
                  </Link>
                </div>

              </div>
              <div className="grid grid-flow-row rounded-md bg-(--fondoT) border-2 border-amber-400 
              w-[165px] min-[400px]:w-[200px] min-[550px]:w-[250px] min-[700px]:w-[320px] min-[900px]:w-[400px] min-[1150px]:w-[500px] min-[1350px]:w-[600px]
              py-2 px-3 min-[550px]:py-4 min-[550px]:px-6 min-[700px]:py-6 min-[700px]:px-8 min-[900px]:py-8 min-[900px]:px-12">
                <div>
                  <Link href={`https://wa.me/543425935644`}>
                    <Image 
                    src="/images/ManoRoja.webp" 
                    alt="Mano Roja" 
                    width={500} height={500}
                    className="grid RedGlowT Bigger place-self-center w-[400px] cursor-pointer"
                    />
                  </Link>
                </div>
                <div>
                  O puedes tomar la pastilla roja y despertár.<br/>
                  Tu web se convierte en imán, un vendedor 24/7.<br/>
                  Una web con un diseño que gusta, acorde a tu estilo.<br/>
                  Una web veloz, con un rendimiento optimizado.<br/>
                  Un golpe arriba de la mesa.<br/>
                </div>
                <div className="grid place-content-center pt-8">
                  <Link href={`https://wa.me/543425935644`}>
                  <button className="Orbitron grid RedG RedGlow Bigger rounded-full text-sm min-[400px]:text-lg min-[550px]:text-xl min-[700px]:text-2xl min-[900px]:text-4xl py-2 px-4 min-[550px]:px-8 min-[550px]:py-4 cursor-pointer">Contactanos</button>
                  </Link>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}