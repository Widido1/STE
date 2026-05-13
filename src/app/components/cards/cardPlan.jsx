import Image from "next/image";

export default function CardPlan(props) {
  return (
    <div className="Quantico grid grid-flow-col grid-cols-2 place-items-start rounded-md text-[--white1] gap-4"> 
        <div className="grid grid-flow-row w-full py-2">
            <div className="grid py-2 text-2xl rounded-md text-[--white1] bg-[--azulClaro] w-full px-4">{props.name}</div>
            <div className="grid whitespace-pre-line px-4 py-2 text-xl">
                {props.text}
            </div>
        </div>
        <div>
            <Image src={props.img} alt="Frente" width={600} height={600}
            className="grid rounded-[5%] w-[450px] min-[1450px]:w-[500px] min-[1650px]:w-[600px] h-[300px] min-[1450px]:h-[350px] min-[1650px]:h-[400px] py-2 px-4"/>
        </div>

    </div>
  );
}