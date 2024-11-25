
import Card from "@/app/[locale]/components/Card";
import EmailForm from "../components/EmailForm";
import NewsLetterForm from "../components/NewsLetterForm";

import {setRequestLocale} from 'next-intl/server';
import { useTranslations } from "next-intl";

import { MdLocalPhone } from "react-icons/md";
import { IoIosMail } from "react-icons/io";
import { IoMdPin } from "react-icons/io";

export default function Contact({params}){
    async function loc(){
        const {locale} = await params;
        return locale
      }
      setRequestLocale(loc());
      const t = useTranslations("Contact")
      
    return(
        <>
        <section className="pt-20 pb-10 bg-lime-900 text-white/90 px-5 md:px-10 lg:px-20 xl:px-32 2xl:px-60">
            <h1 className="text-center text-4xl md:text-5xl font-extrabold">{t("section1.h1")}</h1>
            <p className="text-center text-sm md:text-base pt-5">{t("section1.p")}</p>
        </section>
        <main className="py-5 px-5 md:px-10 lg:px-20 xl:px-32 2xl:px-60">
            <section className="flex flex-col  justify-center items-center sm:flex-row md:justify-between">
                <EmailForm btn={t("section2.emailForm.btn")}/>
                <NewsLetterForm btn={t("section2.newsLetterForm.btn")} h2={t("section2.newsLetterForm.h2")} p={t("section2.newsLetterForm.p")}/>
            </section>
            <section className="flex flex-col md:flex-row justify-center items-center gap-5 md:justify-between py-5 ">
                <Card title={t("section3.card1.h3")} description={t("section3.card1.p")} bgColor={"bg-lime-900"} icon={<MdLocalPhone className="text-2xl sm:text-3xl lg:text-4xl text-amber-200"/>}/>
                <Card title={t("section3.card2.h3")} description={t("section3.card2.p")} bgColor={"bg-lime-900"} icon={<IoIosMail className="text-2xl sm:text-3xl lg:text-4xl text-rose-300"/>}/>
                <Card title={t("section3.card3.h3")} description={t("section3.card3.p")} bgColor={"bg-lime-900"} icon={<IoMdPin className="text-2xl sm:text-3xl lg:text-4xl text-amber-200"/>}/>
            </section>
            <section className="py-5">
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d2713.3701079289167!2d27.58663200656629!3d47.150605335595685!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sro!2sro!4v1731710856149!5m2!1sro!2sro"  className="border-none rounded-lg w-full h-72" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </section>
            
        </main>
        </>
        
    )
} 