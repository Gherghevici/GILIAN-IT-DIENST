import ImgCard from "../components/ImgCard"
import Image from "next/image";

import {setRequestLocale} from 'next-intl/server';
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";


export default function Blog({params}){

    async function loc(){
        const {locale} = await params;
        return locale
      }
      setRequestLocale(loc());
      const t = useTranslations("Blog")

    const data = [
        {
            "img":"",
            "articleTitle":"test",
            "articleText":"dadadad"
        },
        {
            "img":"...",
            "title":"test2",
            "description":"dadadad"
        },
        {
            "img":"...",
            "title":"test3",
            "description":"dadadad"
        },
        {
            
            "img":"...",
            "title":"test4",
            "description":"dadadad"
            
        }
        
    ]
    
    return(
        <main className="px-5 md:px-10 lg:px-20 xl:px-32 2xl:px-60 py-20 flex flex-col justify-between " >

<section className="px-5 md:px-10 lg:px-20 xl:px-32 2xl:px-60 flex flex-col gap-2">
        <h1 className="text-center text-xl sm:text-2xl md:text-3xl ">{t("section1.h1")}</h1>
        <h2 className="text-center text-xl sm:text-2xl md:text-3xl ">{t("section2.h2")}</h2>
        <div className="flex flex-col items-center gap-2 md:flex-row md:justify-between text-2xl sm:text-3xl lg:text-4xl text-lime-900">
          <ImgCard title={t("section3.imgcard1.h3")} description={t("section3.imgcard1.p")}  bgColor={"bg-white"} />
          <ImgCard title={t("section3.imgcard2.h3")} description={t("section3.imgcard2.p")} bgColor={"bg-white"} />
          <ImgCard title={t("section3.imgcard3.h3")} description={t("section3.imgcard3.p")}  bgColor={"bg-white"} />
        </div>
      </section>

            {data.map((val)=>{
                return <ImgCard key={val?.title} title={val?.title} description={val?.description} img={val?.img}/>
            })}
        </main >
    )
}