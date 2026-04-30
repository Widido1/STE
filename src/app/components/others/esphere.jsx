import Image from "next/image";

export default function Esphere(props) {
    return (
        <div className="w-[100px] h-[100px] ml-8 my-4">
            <Image src={props.img} alt="Frente" width={200} height={200}
            className="imgBlue BoxShine2 rounded-full w-[100px] h-[100px] my-4"/>
        </div>
    )
}