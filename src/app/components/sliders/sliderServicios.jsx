"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function SliderServicios(props) {
    const noimage = "/images/noimage.png";
    const [grande, setGrande] = useState(noimage); // La imagen Grande.
    const [texto, setTexto] = useState("");
    const ImgArr = props.ImgArr;
    const desArr = props.desArr;

    useEffect(() => {
        setGrande(ImgArr[0]); // Set the first product's image as default
        setTexto(desArr[0]);
    },[]);

  return (
    <div className="grid place-self-center place-content-center place-items-center">
        <div className="grid grid-flow-row min-[1000px]:grid-flow-col place-self-center place-content-center place-items-center gap-4 min-[1600px]:gap-8 px-8 py-4 w-[390px] min-[450px]:w-[450px] min-[550px]:w-[500px] min-[700px]:w-[650px] min-[1000px]:w-[900px] min-[1300px]:w-[1050px] min-[1500px]:w-[1150px]">
            <div className="grid place-self-center place-content-end">
                <Image
                    src={grande}
                    alt="no image"
                    width={400}
                    height={400}
                    className="rounded-[10%] mx-auto w-[400px] h-[400px]"
                />
            </div>
            <div className="grid grid-flow-row place-self-center place-content-start place-items-start gap-8">
                <div>
                    <Image src={ImgArr[0]} alt="no image" width={50} height={50} onClick={() => {setGrande(ImgArr[0]); setTexto(desArr[0])}} className="Bigger ShineF rounded-[10%] mx-auto w-[50px] h-[50px]"/>
                </div>
                <div>
                    <Image src={ImgArr[1]} alt="no image" width={50} height={50} onClick={() => {setGrande(ImgArr[1]); setTexto(desArr[1])}} className="Bigger ShineF rounded-[10%] mx-auto w-[50px] h-[50px]"/>
                </div>
                <div>
                    <Image src={ImgArr[2]} alt="no image" width={50} height={50} onClick={() => {setGrande(ImgArr[2]); setTexto(desArr[2])}} className="Bigger ShineF rounded-[10%] mx-auto w-[50px] h-[50px]"/>
                </div>
            </div>
        </div>
        <div className="Quantico text-2xl text-[--white1]">{texto}</div>
    </div>
  )    
}