import Image from 'next/image';
import CoffeCup from '../../../public/coffee-cup.svg';
import FoodTruck from '../../../public/food-truck.svg';
import CoffeCupTwo from '../../../public/coffee-cup2.svg';

export default function Delivery() {
    return (
        <section className="w-[80dvw] mx-auto py-20">
            <h1 className="text-black font-bold text-2xl">How to use delivery service</h1>
            <div className="w-full flex flex-row justify-around gap-5 pt-5">
                <div className='flex flex-col gap-3 items-center justify-center'>
                    <Image src={CoffeCup} alt={''} />
                    <h1 className='text-[#2F2105] font-medium'>choose your coffee</h1>
                    <span className='text-sm text-black'>there are 20+ coffees for you</span>
                </div>
                <div className='flex flex-col gap-3 items-center justify-center'>
                    <Image src={FoodTruck} alt={''} />
                    <h1 className='text-[#2F2105] font-medium'>we delivery it to you</h1>
                    <span className='text-sm text-black'>Choose delivery service</span>
                </div>
                <div className='flex flex-col gap-3 items-center justify-center'>
                    <Image src={CoffeCupTwo} alt={''} />
                    <h1 className='text-[#2F2105] font-medium'>Enjoy your coffee</h1>
                    <span className='text-sm text-black'>Choose delivery service</span>
                </div>
            </div>
        </section>
    )
}