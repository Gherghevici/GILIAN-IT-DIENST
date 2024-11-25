'use client'
import {useState } from "react"


export default function CookiesModal({title,p,btn1,btn2}){
    const [isOpen,setIsOpen] = useState(true);
    
    const handleCookieStorage =(e)=>{
        e.preventDefault();
        setIsOpen(false);
    }
    if(!isOpen)
        return
    return(
        <main className={` px-2 sm:px-5 md:px-10 lg:px-20 py-5 bg-white/95 w-full bottom-0 z-50 fixed flex flex-col gap-2`}>
            <h2 className=" text-3xl text-center">{title}</h2>
            <p className="text-1xl font-bold text-center">{p}</p>
           
            <div className="flex justify-around items-center">
                <button onClick={handleCookieStorage} className="bg-lime-800 text-white px-2 py-1 rounded-lg basis-1/3">{btn1}</button>
                <button onClick={handleCookieStorage} className="bg-lime-800 text-white px-2 py-1 rounded-lg basis-1/3">{btn2}</button>
            </div>
        </main>
    )
}