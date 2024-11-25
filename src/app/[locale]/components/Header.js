import Image from "next/image";
import { HiBars3CenterLeft } from "react-icons/hi2";
import { IoCloseOutline } from "react-icons/io5";
import {Link} from "@/i18n/routing";
import LanguageSwitcher from "./LanguageSwitcher";


export default  function Header({home,about,blog,careers,contact}){
    
    return(
       <header className="flex justify-between z-50 px-5 md:px-10 lg:px-20 xl:px-32 2xl:px-60 py-2 fixed w-full bg-white/95 border-b-4 border-lime-900 rounded-b-3xl md:rounded-b-full ">
            <div className="order-2 basis-1/2 text-center md:order-1 md:text-left md:basis-1/4 ">{/*<Image src={test} alt="hm" className="h-[32px] object-contain"/>*/}LOGO</div>
            <div className="basis-1/3 sm:basis-1/4  order-1 md:order-2 md:basis-1/2 peer group">
                <input type="checkbox" id="nav" className="hidden"/>
                <label htmlFor="nav" className="peer-has-[input:checked]:block hidden md:hidden"><IoCloseOutline  className="w-8 h-8"/></label>
                <label htmlFor="nav" className="peer-has-[input:checked]:hidden block md:hidden"><HiBars3CenterLeft  className="w-8 h-8"/></label>
                <div className={`group-has-[input:checked]:flex hidden flex-col gap-1 md:gap-0 md:flex-row  md:flex md:justify-between md:items-center `}>
                    <Link href={"/"}>
                        <p className=" hover:text-lime-900 cursor-pointer">{home}</p>
                    </Link>
                    <p className=" hover:text-lime-900  cursor-pointer">{about}</p>
                    <p className=" hover:text-lime-900  cursor-pointer">{blog}</p>
                    <Link href={"/Careers"}>
                        <p className=" hover:text-lime-900  cursor-pointer">{careers}</p>
                    </Link>
                    <Link href={"/contact"}>
                        <p className=" hover:text-lime-900  cursor-pointer">{contact}</p>
                    </Link>
                </div>
            </div>
            <div className="order-3 basis-1/4 flex justify-end items-start md:items-center md:order-3 md:basis-1/4">
                <LanguageSwitcher/>
            </div>
       </header>
    )
}