import BgImageAvaliation from '../../../public/bgimageavaliations.svg';
import Azura from '../../../public/azura.svg';
import Naura from '../../../public/nara.svg';
import John from '../../../public/john.svg';
import Image from "next/image";

export default function Avaliations() {
    return (
        <section className="w-full h-screen pt-72 lg:pt-0 flex items-center flex-row">
            <div className="relative flex items-center w-full h-full">
                <Image src={BgImageAvaliation} alt={""} className='lg:flex hidden' />
                <div className="absolute flex flex-col gap-3 w-full items-center justify-center">
                    <div className="flex flex-col lg:flex-row gap-5 lg:gap-16 items-center w-full">
                        <div className="pl-10">
                            <h1 className="text-3xl text-black font-bold">What they say about us</h1>
                            <span className="text-sm text-[#7E7D7A]">We always provide the best service and always maintain the quality of coffee</span>
                        </div>
                        <div className="relative">
                            <Image src={Naura} alt={""} />
                            <div className="absolute w-full bg-[#FFD390] h-20 bottom-6 -right-10 rounded-md p-1">
                                <div className="w-full h-full bg-[#FFCB7C] rounded-md flex flex-col gap-1">
                                    <h1 className="text-lg text-[#2F2105]">Naura</h1>
                                    <span className="text-sm text-[#2F2105]">I really love the cappucino, the coffee was very smooth</span>
                                </div>
                            </div>
                        </div>
                        <div className="relative">
                            <Image src={John} alt={""} />
                            <div className="absolute w-full bg-[#FFD390] h-20 bottom-6 -right-10 rounded-md p-1">
                                <div className="w-full h-full bg-[#FFCB7C] rounded-md flex flex-col gap-1">
                                    <h1 className="text-lg text-[#2F2105]">John</h1>
                                    <span className="text-sm text-[#2F2105]">this coffee shop is very convenient</span>
                                </div>
                            </div>
                        </div>
                        <div className="relative">
                            <Image src={Azura} alt={""} />
                            <div className="absolute w-full bg-[#FFD390] h-20 bottom-6 -right-10 rounded-md p-1">
                                <div className="w-full h-full bg-[#FFCB7C] rounded-md flex flex-col gap-1">
                                    <h1 className="text-lg text-[#2F2105]">Azura</h1>
                                    <span className="text-sm text-[#2F2105]">the coffee menu here is very much</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}