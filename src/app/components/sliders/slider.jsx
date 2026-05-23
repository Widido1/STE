"use client"
import {useEffect, useState} from "react";
import Image from "next/image";


export default function Slider(props){
    const nameClass = "imgGray w-[80px] h-[60px] rounded-md";
    const items = [
        <Image src="/images/Espheres/arca.webp" alt="logo" width={80} height={60} key={1} className={nameClass}/>,
        <Image src="/images/Espheres/meducacion.png" alt="logo" width={80} height={60} key={2} className={nameClass}/>,
        <Image src="/images/Espheres/mseguridad.svg" alt="logo" width={80} height={60} key={3} className={nameClass}/>,
        <Image src="/images/Espheres/asoem.jpg" alt="logo" width={80} height={60} key={4} className={nameClass}/>,
        <Image src="/images/Espheres/diag.jpg" alt="logo" width={80} height={60} key={5} className={nameClass}/>,
        <Image src="/images/Espheres/travel.jpg" alt="logo" width={80} height={60} key={6} className={nameClass}/>,
        <Image src="/images/Espheres/upcn.webp" alt="logo" width={80} height={60} key={7} className={nameClass}/>,
        <Image src="/images/Espheres/union.jpg" alt="logo" width={80} height={60} key={8} className={nameClass}/>
    ];
    const cArray = items; //creamos el arreglo de componentes usando el arreglo de las props
    const [mI, setMI] = useState(0); //creamos el indice maestro del slider
    const [arrowL, setArrowL] = useState("");
    const [arrowR, setArrowR] = useState("");
    const name = props.name;
    const ITEMS_TO_SHOW = 4; // Cantidad fija de elementos visibles

    useEffect(() => {
        if (mI === 0) {
        setArrowL(
            "invisible font-bold Bigger rounded-full text-[--white3] text-2xl w-[50px] h-[50px]"
        );
        } else {
        setArrowL(
            " font-bold Bigger rounded-full text-[--white3] text-2xl w-[50px] h-[50px] opacity-90"
        );
        }
        if (mI >= cArray.length - ITEMS_TO_SHOW) {
        setArrowR(
            "opacity-0 pointer-events-none font-bold Bigger rounded-full text-[--white3] text-2xl w-[50px] h-[50px]"
        );
        } else {
        setArrowR(
            " font-bold Bigger rounded-full text-[--white3] text-2xl w-[50px] h-[50px] opacity-90"
        );
        }
    }, [mI, cArray.length]);

    const NextF = () => {
        let N = ITEMS_TO_SHOW;
        while (N > 0 && mI + N >= cArray.length - (ITEMS_TO_SHOW - 1)) {
        N -= 1;
        }
        if (N > 0) {
        setMI(mI + N);
        }
    };

    const PrevF = () => {
        let N = ITEMS_TO_SHOW;
        while (N > 0 && mI - N < 0) {
        N -= 1;
        }
        if (N > 0) {
        setMI(mI - N);
        }
    };

    return (
        <div>
            <div className="grid grid-flow-col place-content-center place-items-center w-full">
                <div className="text-center text-3xl font-extrabold">{name}</div>
            </div>
            <div className="Slider mx-auto gap-[20px] px-4 pb-2 text-[--white3]">
                <div className="grid grid-flow-col place-self-center place-content-center place-items-center gap-4">
                <button className={arrowL} onClick={PrevF}>
                    {"<"}
                </button>
                <div className="grid grid-cols-4 gap-8">
                    {cArray.slice(mI, mI + ITEMS_TO_SHOW).map((item, index) => (
                    <div key={index}>{item}</div>
                    ))}
                </div>
                <button className={arrowR} onClick={NextF}>
                    {">"}
                </button>
                </div>
            </div>
        </div>
    );
}