import CartButton from '../../../public/cartButton.svg';
import ImageHero from '../../../public/img-hero.svg';
import BgImage from '../../../public/bg-image.png';
import NavBar from "../navbar/navbar";
import Image from "next/image";
import Popular from '../popularSection/popular';

export default function Hero() {
    return (
        <section className="w-full h-screen">
            <Image src={BgImage} alt={""} className="absolute w-full h-full" />
            <div className="z-10 relative">
                <NavBar />
                <div className="w-[80dvw] mx-auto h-[70dvh] flex flex-row items-center">
                    <div className="flex flex-col gap-3 flex-1">
                        <h1 className="text-6xl font-bold w-[45dvw] text-[#2F2105]">Enjoy your <span className='text-[#FF902B]'>coffee</span> before your activity</h1>
                        <span className='text-lg text-[#7E7D7A] w-[24dvw]'>Boost your productivity and build your mood with a glass of coffee in the morning</span>
                        <div className="flex flex-row gap-10">
                            <button className="rounded-full flex flex-row gap-2 items-center h-12 bg-[#2F2105] hover:bg-opacity-85 transition-all duration-300 p-3 w-36 text-white">
                                Order Now
                                <Image src={CartButton} alt={''} />
                            </button>
                            <button className='text-[#F4AE26] bg-transparent'>More menu</button>
                        </div>
                    </div>
                    <div>
                        <Image src={ImageHero} alt={""} />
                    </div>
                </div>
            </div>
            <div className='z-10 relative'>
                <Popular />
            </div>
        </section>
    )
}