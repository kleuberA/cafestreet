import Image from 'next/image';
import BgFooter from '../../../public/bgfooter.svg';

export default function Footer() {
    return (
        <footer className="w-full h-screen flex items-center mt-72 lg:mt-0 justify-center">
            <div className="w-[80dvw] h-[50dvh] relative">
                <Image src={BgFooter} alt={''} className='w-full lg:flex hidden' />
                <div className='absolute w-full h-full top-0 flex items-center justify-center'>
                    <div className='flex flex-col gap-2'>
                        <h1 className='text-xl lg:text-2xl lg:text-white font-bold'>Subscribe to get 50% discount price</h1>
                        <div className='relative'>
                            <input placeholder='Email address' type='email' className='w-full border border-black lg:border-none h-12 rounded-full p-2 outline-none' />
                            <button className='w-28 h-10 bg-[#2F2105] text-white rounded-full top-1 absolute right-1 px-2'>Order now</button>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}