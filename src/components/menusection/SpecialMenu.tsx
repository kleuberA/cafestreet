"use client"

import CoffeIceCream from '../../../public/coffeIceCream.svg';
import CartButton from '../../../public/cartButton.svg';
import Moccacinno from '../../../public/moccaccino.svg';
import Cappucino from '../../../public/cappuccino.svg';
import Sandwich from '../../../public/sandwich.svg';
import HotMilk from '../../../public/hotMilk.svg';
import Waffle from '../../../public/waffle.svg';
import { Star } from "@phosphor-icons/react"
import Image from "next/image";

export default function SpecialMenu() {
    return (
        <section className="w-[80dvw] mx-auto h-screen pt-10">
            <h1 className="text-2xl font-bold pt-10">Special menu for you</h1>
            <div className="w-full flex flex-col lg:flex-row lg:flex-wrap gap-5">
                <div className="bg-white/40 w-72 lg:w-96 rounded-md h-96 p-2">
                    <div className="w-full h-full bg-white rounded-md flex flex-col gap-3">
                        <div className="w-full flex justify-center pt-4 relative">
                            <Image src={Sandwich} alt={""} className="rounded-md" />
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
                                <h1 className="text-[#2F2105] text-xl font-bold m-0">Sandwich</h1>
                                <span className="text-[#2F2105] font-bold text-xl">12K</span>
                            </div>
                            <div className='flex flex-row justify-between w-full lg:w-[20dvw] p-1 mx-auto'>
                                <div className='flex flex-row gap-3'>
                                    <span className='text-[#7E7D7A] text-sm'>bread with meat and vegetables</span>
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
                            <Image src={HotMilk} alt={""} className="rounded-md" />
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
                                <h1 className="text-[#2F2105] text-xl font-bold m-0">Hot Milk</h1>
                                <span className="text-[#2F2105] font-bold text-xl">12K</span>
                            </div>
                            <div className='flex flex-row justify-between w-full lg:w-[20dvw] p-1 mx-auto'>
                                <div className='flex flex-row gap-3'>
                                    <span className='text-[#7E7D7A] text-sm'>Hot Milk with less sugar</span>
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
                            <Image src={CoffeIceCream} alt={""} className="rounded-md" />
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
                                <h1 className="text-[#2F2105] text-xl font-bold m-0">Coffe Ice Cream</h1>
                                <span className="text-[#2F2105] font-bold text-xl">12K</span>
                            </div>
                            <div className='flex flex-row justify-between w-full lg:w-[20dvw] p-1 mx-auto'>
                                <div className='flex flex-row gap-3'>
                                    <span className='text-[#7E7D7A] text-sm'>Coffe with ice cream vanilla</span>
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
                            <Image src={Cappucino} alt={""} className="rounded-md" />
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
                                <h1 className="text-[#2F2105] text-xl font-bold m-0">Cappucino</h1>
                                <span className="text-[#2F2105] font-bold text-xl">12K</span>
                            </div>
                            <div className='flex flex-row justify-between w-full lg:w-[20dvw] p-1 mx-auto'>
                                <div className='flex flex-row gap-3'>
                                    <span className='text-[#7E7D7A] text-sm'>Hot Cappucino</span>
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
                            <Image src={Moccacinno} alt={""} className="rounded-md" />
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
                                <h1 className="text-[#2F2105] text-xl font-bold m-0">Moccacinno</h1>
                                <span className="text-[#2F2105] font-bold text-xl">12K</span>
                            </div>
                            <div className='flex flex-row justify-between w-full lg:w-[20dvw] p-1 mx-auto'>
                                <div className='flex flex-row gap-3'>
                                    <span className='text-[#7E7D7A] text-sm'>Hot Moccacino</span>
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
                            <Image src={Waffle} alt={""} className="rounded-md" />
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
                                <h1 className="text-[#2F2105] text-xl font-bold m-0">Waffle Ice Crem</h1>
                                <span className="text-[#2F2105] font-bold text-xl">12K</span>
                            </div>
                            <div className='flex flex-row justify-between w-full lg:w-[20dvw] p-1 mx-auto'>
                                <div className='flex flex-row gap-3'>
                                    <span className='text-[#7E7D7A] text-sm'>Wafle with Ice cream</span>
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