"use client"
import { useState } from "react";
import Image from "next/image";
import { HiBars3CenterLeft } from "react-icons/hi2";
import { IoCloseOutline } from "react-icons/io5";
import test from '../../public/test2.png'
export default function Header(){
    const [isOpen,setIsOpen] = useState(false);
    
    const openHandler = ()=> setIsOpen(!isOpen)
    

    return(
       <header className="flex justify-between px-5 md:px-10 lg:px-20 xl:px-32 py-2.5 md:px-10 fixed w-full bg-white/70 ">
            <div className="order-2 basis-1/2 text-center md:order-1 md:text-left md:basis-1/4 ">{/*<Image src={test} alt="hm" className="h-[32px] object-contain"/>*/}LOGO</div>
            <div className="basis-1/4  order-1 md:order-2 md:basis-1/2">
                {isOpen?<IoCloseOutline onClick={openHandler} className="w-8 h-8 md:hidden"/>:<HiBars3CenterLeft onClick={openHandler} className="w-8 h-8 md:hidden"/>}
                <div className={`${isOpen?"":"hidden "} md:block md:flex md:justify-between `}>
                    <p className="mt-0.5 md:mt-0 hover:text-lime-900 text-lg cursor-pointer">Home</p>
                    <p className="mt-0.5 md:mt-0 hover:text-lime-900 text-lg cursor-pointer">About</p>
                    <p className="mt-0.5 md:mt-0 hover:text-lime-900 text-lg cursor-pointer">Articles</p>
                    <p className="mt-0.5 md:mt-0 hover:text-lime-900 text-lg cursor-pointer">Careers</p>
                </div>
            </div>
            <div className="order-3 basis-1/4 flex justify-end items-start md:order-3 md:basis-1/4">
                <button className="bg-gradient-to-r from-lime-900 from-10% via-lime-800 via-50% to-lime-900 to-90% px-2 md:px-5 py-1 rounded-lg  text-white active:text-gray-100 active:bg-gradient-to-r active:from-lime-900 active:from-10%  active:via-lime-900 active:via-50% active:to-lime-900 active:to-90% transition-all">Contact</button>
            </div>
       </header>
    )
}