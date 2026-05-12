import Link from "next/link";
import Image from "next/image";

const numberWSP = process.env.NEXT_PUBLIC_WSP;

export default function WSP(props){

    return(
        <div className="fixed top-1/2 -translate-y-1/2 right-20 min-[800px]:right-12 z-50">
            <Link href={`https://wa.me/${numberWSP}`} target="_blank" className="grid cursor-pointer">
                <Image
                    src="/images/icons/Whatsapp.svg"
                    alt="Banner principal"
                    width={75}
                    height={75}
                    className=" w-[75px] h-[75px] rounded-full ShineF2 Big"
                />
            </Link>
        </div>
    )
}