"use client";
import { useEffect, useState, useCallback } from "react";
import Image from "next/image";

export default function MiniSlider(props) {
  const nameClass =
    "imgGray w-[55px] min-[1200px]:w-[80px] h-[40px] min-[1200px]:h-[60px] rounded-md";
  const items = [
    <Image src="/images/Espheres/arca.webp" alt="logo" width={80} height={60} key={1} className={nameClass} />,
    <Image src="/images/Espheres/meducacion.png" alt="logo" width={80} height={60} key={2} className={nameClass} />,
    <Image src="/images/Espheres/mseguridad.svg" alt="logo" width={80} height={60} key={3} className={nameClass} />,
    <Image src="/images/Espheres/asoem.jpg" alt="logo" width={80} height={60} key={4} className={nameClass} />,
    <Image src="/images/Espheres/diag.jpg" alt="logo" width={80} height={60} key={5} className={nameClass} />,
    <Image src="/images/Espheres/travel.jpg" alt="logo" width={80} height={60} key={6} className={nameClass} />,
    <Image src="/images/Espheres/upcn.webp" alt="logo" width={80} height={60} key={7} className={nameClass} />,
    <Image src="/images/Espheres/union.jpg" alt="logo" width={80} height={60} key={8} className={nameClass} />
  ];
  const cArray = items;
  const [mI, setMI] = useState(0);
  const [arrowLDisabled, setArrowLDisabled] = useState(true);
  const [arrowRDisabled, setArrowRDisabled] = useState(false);
  const name = props.name;
  const ITEMS_TO_SHOW = 4;

  // Clase base para ambas flechas (siempre ocupan espacio, sin absolute)
  const baseArrowClass =
    "font-bold Bigger rounded-full text-[--white3] text-xl w-[30px] h-[30px] flex items-center justify-center transition-all";

  useEffect(() => {
    setArrowLDisabled(mI === 0);
    setArrowRDisabled(mI >= cArray.length - ITEMS_TO_SHOW);
  }, [mI, cArray.length]);

  const NextF = useCallback(() => {
    if (arrowRDisabled) return;
    let N = ITEMS_TO_SHOW;
    while (N > 0 && mI + N >= cArray.length - (ITEMS_TO_SHOW - 1)) {
      N -= 1;
    }
    if (N > 0) setMI(mI + N);
  }, [mI, arrowRDisabled, cArray.length]);

  const PrevF = useCallback(() => {
    if (arrowLDisabled) return;
    let N = ITEMS_TO_SHOW;
    while (N > 0 && mI - N < 0) {
      N -= 1;
    }
    if (N > 0) setMI(mI - N);
  }, [mI, arrowLDisabled]);

  return (
    <div>
      <div className="grid grid-flow-col place-content-center place-items-center w-full">
        <div className="text-center text-3xl font-extrabold">{name}</div>
      </div>
      <div className="pb-2 text-[--white3] px-2 min-[1500px]:px-4">
        <div className="grid grid-flow-col place-self-center place-content-center place-items-center gap-1 min-[1500px]:gap-2">
          <button
            className={`${baseArrowClass} ${arrowLDisabled ? "opacity-0 pointer-events-none" : "opacity-90 hover:opacity-100"}`}
            onClick={PrevF}
            aria-label="Anterior"
          >
            {"<"}
          </button>
          <div className="grid grid-cols-4 gap-2 min-[1500px]:gap-4">
            {cArray.slice(mI, mI + ITEMS_TO_SHOW).map((item, idx) => (
              <div key={idx}>{item}</div>
            ))}
          </div>
          <button
            className={`${baseArrowClass} ${arrowRDisabled ? "opacity-0 pointer-events-none" : "opacity-90 hover:opacity-100"}`}
            onClick={NextF}
            aria-label="Siguiente"
          >
            {">"}
          </button>
        </div>
      </div>
    </div>
  );
}