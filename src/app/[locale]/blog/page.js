import ImgCard from "../components/ImgCard"
import img1 from "../../../../public/images/image01.png"
import img2 from "../../../../public/images/image02.png"

import {setRequestLocale} from 'next-intl/server';
import { useTranslations } from "next-intl";
export default function Blog({params}){
    
    async function loc(){
        const {locale} = await params;
        return locale
      }
      setRequestLocale(loc());
      const t = useTranslations("Blog")

    return(
        <>
            <section className="pt-20 pb-10 bg-lime-900 text-white/90 px-5 md:px-10 lg:px-20 xl:px-32 2xl:px-60">
                <h1 className="text-center text-4xl md:text-5xl font-extrabold">{t("section1.h1")}</h1>
                <p className="text-center text-sm md:text-base pt-5">{t("section1.p")}</p>
            </section>

            <main className="px-5 md:px-10 lg:px-20 xl:px-32 2xl:px-60 py-20 flex flex-col gap-5  " >
                    <div className="flex justify-center md:justify-start ">
                        <ImgCard title={t("cards.card1.h2")} description={t("cards.card1.p")} img={img1} isPhotoRight={true}/>
                    </div>
                    <div className=" flex justify-center md:justify-end">
                        <ImgCard title={t("cards.card2.h2")} description={t("cards.card2.p")} img={img2} isPhotoRight={false}/>
                    </div>
            </main>
        </>
       
    )
}