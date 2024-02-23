import Image from "next/image";
import BgImage from '../../../public/bg-image.png';
import NavBar from "../navbar/navbar";

export default function Hero() {
    return (
        <section className="w-full h-screen">
            <Image src={BgImage} alt={""} className="absolute w-full h-full" />
            <div className="z-10 relative">
                <NavBar />
            </div>
        </section>
    )
}