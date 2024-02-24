"use client"
import ProductVanilla from '../../../public/productvanilla.svg';
import HazeInutlatte from '../../../public/hazelnutlatte.svg';
import CartButton from '../../../public/cartButton.svg';
import Espresso from '../../../public/espresso.svg';
import { Star } from '@phosphor-icons/react';
import Image from "next/image";

import Detail from '../../../public/Detail.svg';

export default function Popular() {
    return (
        <section className="w-[80dvw] mx-auto flex flex-col gap-3 relative pb-10">
            <Image className='absolute bottom-0 -z-10 hidden lg:flex' src={Detail} alt={''} />
            <h1 className="text-black text-2xl font-bold">Popular Now</h1>
            <div className="w-full flex flex-col lg:flex-row gap-5">
                <div className="bg-white/40 w-72 lg:w-96 rounded-md h-96 p-2">
                    <div className="w-full h-full bg-white rounded-md flex flex-col gap-3">
                        <div className="w-full flex justify-center pt-4 relative">
                            <Image src={ProductVanilla} alt={""} className="rounded-md" />
                            <div className='absolute w-full h-full top-7 left-10'>
                                <div className='bg-white/40 w-16 p-1 h-8 rounded-full flex justify-center items-center'>
                                    <div className='bg-white h-full w-full items-center justify-center rounded-full text-center flex flex-row gap-1'>
                                        <span className='text-sm text-[#2F2105] font-bold'>4.8</span>
                                        <Star size={15} className='fill-yellow-400' />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='flex flex-col'>
                            <div className='flex flex-row justify-between w-full lg:w-[20dvw] p-1 mx-auto'>
                                <h1 className="text-[#2F2105] text-xl font-bold m-0">Vanilla Latte</h1>
                                <span className="text-[#2F2105] font-bold text-xl">21K</span>
                            </div>
                            <div className='flex flex-row justify-between w-full lg:w-[20dvw] p-1 mx-auto'>
                                <div className='flex flex-row gap-3'>
                                    <span className='text-[#FF902B] border border-[#FF902B] p-1 rounded-md'>Hot</span>
                                    <span className='text-[#FFD28F] border border-[#FFD28F] p-1 rounded-md'>Cold</span>
                                </div>
                                <div>
                                    <Image src={CartButton} alt={''} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-white/40 w-72 lg:w-96 rounded-md h-96 p-2">
                    <div className="w-full h-full bg-white rounded-md flex flex-col gap-3">
                        <div className="w-full flex justify-center pt-4 relative">
                            <Image src={Espresso} alt={""} className="rounded-md" />
                            <div className='absolute w-full h-full top-7 left-10'>
                                <div className='bg-white/40 w-16 p-1 h-8 rounded-full flex justify-center items-center'>
                                    <div className='bg-white h-full w-full items-center justify-center rounded-full text-center flex flex-row gap-1'>
                                        <span className='text-sm text-[#2F2105] font-bold'>4.8</span>
                                        <Star size={15} className='fill-yellow-400' />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='flex flex-col'>
                            <div className='flex flex-row justify-between w-full lg:w-[20dvw] p-1 mx-auto'>
                                <h1 className="text-[#2F2105] text-xl font-bold m-0">Espresso</h1>
                                <span className="text-[#2F2105] font-bold text-xl">12K</span>
                            </div>
                            <div className='flex flex-row justify-between w-full lg:w-[20dvw] p-1 mx-auto'>
                                <div className='flex flex-row gap-3'>
                                    <span className='text-[#FFD28F] border border-[#FFD28F] p-1 rounded-md'>Hot</span>
                                    <span className='text-[#FFD28F] border border-[#FFD28F] p-1 rounded-md'>Cold</span>
                                </div>
                                <div>
                                    <Image src={CartButton} alt={''} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-white/40 w-72 lg:w-96 rounded-md h-96 p-2">
                    <div className="w-full h-full bg-white rounded-md flex flex-col gap-3">
                        <div className="w-full flex justify-center pt-4 relative">
                            <Image src={HazeInutlatte} alt={""} className="rounded-md" />
                            <div className='absolute w-full h-full top-7 left-10'>
                                <div className='bg-white/40 w-16 p-1 h-8 rounded-full flex justify-center items-center'>
                                    <div className='bg-white h-full w-full items-center justify-center rounded-full text-center flex flex-row gap-1'>
                                        <span className='text-sm text-[#2F2105] font-bold'>4.8</span>
                                        <Star size={15} className='fill-yellow-400' />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='flex flex-col'>
                            <div className='flex flex-row justify-between w-full lg:w-[20dvw] p-1 mx-auto'>
                                <h1 className="text-[#2F2105] text-xl font-bold m-0">Hazelnut Latte</h1>
                                <span className="text-[#2F2105] font-bold text-xl">23K</span>
                            </div>
                            <div className='flex flex-row justify-between w-full lg:w-[20dvw] p-1 mx-auto'>
                                <div className='flex flex-row gap-3'>
                                    <span className='text-[#FFD28F] border border-[#FFD28F] p-1 rounded-md'>Hot</span>
                                    <span className='text-[#FFD28F] border border-[#FFD28F] p-1 rounded-md'>Cold</span>
                                </div>
                                <div>
                                    <Image src={CartButton} alt={''} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}