'use client'
import { useState } from "react"

export default function CookiesModal(){
    const [isOpen,setIsOpen] = useState(true);
    

    const handleCookieStorage =async (e)=>{
        
        setIsOpen(false);
    }
    
    return(
        <main className={`${isOpen?"":"hidden"} px-2 sm:px-5 md:px-10 lg:px-20 py-5 bg-white/95 w-full bottom-0 z-50 fixed flex flex-col gap-2`}>
            <h1 className="border-b-2 text-3xl text-center">Data collection policy</h1>
            <h2 className="text-1xl font-bold text-center">Cookie files are used to analyze website trafic</h2>
            <p className="text-center text-sm">Information about your beowsing and use of the website is sent to us and will be analyzed <span className="font-bold">anonymous</span> to improve services</p>
            <p className="text-center text-sm">We keep ypur choice for <span className="font-bold">10</span> days. You can reset your consent by deleting the <span className="font-bold">cookis</span> form your browser data</p>
            <div className="flex justify-around items-center">
                <button onClick={handleCookieStorage} className="bg-red-500 text-white px-2 py-1 rounded-lg basis-1/3">NO THANKS</button>
                <button onClick={handleCookieStorage} className="bg-green-500 text-white px-2 py-1 rounded-lg basis-1/3">ACCEPT</button>
            </div>
        </main>
    )
}