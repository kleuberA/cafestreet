"use client"
import Image from 'next/image';
import Logo from '../../../public/logo.svg';
import Link from 'next/link';
import { List, MagnifyingGlass } from '@phosphor-icons/react';
import Cart from '../../../public/cart.svg';
import { useState } from 'react';

export default function NavBar() {

    const [open, setOpen] = useState(false);

    return (
        <nav className="lg:w-[85dvw] w-[90dvw] mx-auto h-14 lg:h-14 flex items-center flex-row justify-between lg:justify-around">
            <div>
                <Image src={Logo} alt={''} />
            </div>
            <div className='flex lg:hidden'>
                <List size={30} onClick={() => setOpen(!open)} />
            </div>
            {open && (
                <div className='w-[80dvw] lg:hidden absolute left-0 top-0 h-screen bg-white/85'>
                    <div className='w-full justify-center items-center flex pt-5'>
                        <Image src={Logo} alt={''} />
                    </div>
                    <div className='w-full flex flex-col items-center justify-center h-full'>
                        <Link href="" className='text-[#FF902B] hover:underline text-xl'>About us</Link>
                        <Link href="" className='hover:text-[#FF902B] hover:underline text-xl'>Our Product</Link>
                        <Link href="" className='hover:text-[#FF902B] hover:underline text-xl'>Delivery</Link>
                    </div>
                </div>
            )}
            <div className='lg:flex flex-row gap-5 text-black hidden'>
                <Link href="" className='text-[#FF902B] hover:underline mb-1'>About us</Link>
                <Link href="" className='hover:text-[#FF902B] hover:underline'>Our Product</Link>
                <Link href="" className='hover:text-[#FF902B] hover:underline'>Delivery</Link>
            </div>
            <div className='relative lg:flex hidden flex-row gap-5'>
                <input type="search" className='rounded-full h-8 outline-none p-2 pl-7' placeholder='Cappuccino' />
                <MagnifyingGlass size={20} className='absolute top-2 left-1' />
                <div>
                    <Image src={Cart} alt='' className='cursor-pointer' />
                </div>
            </div>
        </nav>
    )
}