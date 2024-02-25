import CoffeAbout from '../../../public/coffeabout.svg';
import BgAbout from '../../../public/bgabout.svg';
import Image from "next/image";

export default function AboutUs() {
    return (
        <section className="w-[80dvw] mx-auto h-[50dvh] mt-24 lg:mt-10 relative">
            <Image src={BgAbout} alt={""} className="absolute hidden lg:flex" />
            <div className="flex flex-col lg:flex-row h-full justify-center z-20 relative">
                <div className="flex-1 flex justify-center h-full">
                    <Image src={CoffeAbout} alt={""} className='lg:w-96 lg:h-96 w-52 h-52 lg:absolute lg:-top-10' />
                </div>
                <div className="flex-1 flex flex-col items-start justify-center h-full gap-3 pb-5 pt-5 lg:pt-0">
                    <h1 className='text-2xl font-bold'>About us</h1>
                    <span className='text-black font-medium'>We provide quality coffee, and ready to deliver.</span>
                    <span className='text-sm text-[#7E7D7A] lg:w-[25dvw]'>We are a company that makes and distributes delicious drinks. our main product is made with a secret recipe and available in stores worldwide.</span>
                    <button className='rounded-full p-2 bg-[#2F2105] text-[#F4AE26] text-sm'>Get your coffee</button>
                </div>
            </div>
        </section>
    )
}