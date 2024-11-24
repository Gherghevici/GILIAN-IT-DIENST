'use client'

import { usePathname, useRouter } from "@/i18n/routing"
import { useParams } from "next/navigation";
import { useTransition } from "react";
import { IoIosArrowDown } from "react-icons/io";

export default function LanguageSwitcherSelect({children,defaultValue,label}){
    const router =useRouter();
    const [isPending,startTransition] = useTransition();
    const pathname = usePathname();
    const params = useParams();
    
    const onSelectChange=(e)=>{
        const nextLocale = e.target.value;
        startTransition(()=>{
            router.replace(
                {pathname,params},
                {locale:nextLocale}
            )
        })
    }
    return(
        <label className={`relative  ${ isPending&&"transition-opacity [&:disabled]:opacity-30"}`}>
            <p className="sr-only">{label}</p>
            <select 
                className="inline-flex appearance-none bg-transparent pr-5 "
                defaultValue={defaultValue}
                disabled={isPending}
                onChange={onSelectChange}
            >
                {children}
            </select>
            <span className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2"><IoIosArrowDown /></span>
        </label>
    )
}