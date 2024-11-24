import Image from "next/image";
import { HiBars3CenterLeft } from "react-icons/hi2";
import { IoCloseOutline } from "react-icons/io5";
import {Link} from "@/i18n/routing";
import LanguageSwitcher from "./LanguageSwitcher";
export default function Header(){

    return(
       <header className="flex justify-between z-50 px-5 md:px-10 lg:px-20 xl:px-32 2xl:px-60 py-2 fixed w-full bg-white/95 border-b-4 border-lime-900 rounded-full ">
            <div className="order-2 basis-1/2 text-center md:order-1 md:text-left md:basis-1/4 ">{/*<Image src={test} alt="hm" className="h-[32px] object-contain"/>*/}LOGO</div>
            <div className="basis-1/4  order-1 md:order-2 md:basis-1/2 peer group">
                <input type="checkbox" id="nav" className="hidden"/>
                <label htmlFor="nav" className="peer-has-[input:checked]:block hidden md:hidden"><IoCloseOutline  className="w-8 h-8"/></label>
                <label htmlFor="nav" className="peer-has-[input:checked]:hidden block md:hidden"><HiBars3CenterLeft  className="w-8 h-8"/></label>
                <div className={`group-has-[input:checked]:block hidden  md:flex md:justify-between md:items-center `}>
                    <Link href={"/"}>
                        <p className="mt-0.5 md:mt-0 hover:text-lime-900 text-lg cursor-pointer">Home</p>
                    </Link>
                    <p className="mt-0.5 md:mt-0 hover:text-lime-900 text-lg cursor-pointer">About</p>
                    <p className="mt-0.5 md:mt-0 hover:text-lime-900 text-lg cursor-pointer">Articles</p>
                    <Link href={"/Careers"}>
                        <p className="mt-0.5 md:mt-0 hover:text-lime-900 text-lg cursor-pointer">Careers</p>
                    </Link>
                    <Link href={"/contact"}>
                        <button className="bg-gradient-to-r from-lime-900 from-10% via-lime-800 via-50% to-lime-900 to-90% px-2 md:px-5 py-1 rounded-lg  text-white active:text-gray-100 active:bg-gradient-to-r active:from-lime-900 active:from-10%  active:via-lime-900 active:via-50% active:to-lime-900 active:to-90% transition-all">Contact</button>
                    </Link>
                </div>
            </div>
            <div className="order-3 basis-1/4 flex justify-end items-center md:order-3 md:basis-1/4">
                <LanguageSwitcher/>
            </div>
       </header>
    )
}