import Design from "@/app/[locale]/components/Design";
import Card from "@/app/[locale]/components/Card";
import { MdLocalPhone } from "react-icons/md";
import { FaCloud } from "react-icons/fa";
import { FaFileCode } from "react-icons/fa6";
import DropDown from '@/app/[locale]/components/DropDown'

import {setRequestLocale} from 'next-intl/server';
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
export default function Home({params}) {
  
  async function loc(){
    const {locale} = await params;
    return locale
  }
  setRequestLocale(loc());
  const t = useTranslations("HomePage")
  
  return (
    <main className="">
      <section className="flex flex-col px-5 md:px-10 lg:px-20 xl:px-32 2xl:px-60 py-20 md:flex-row ">
        <aside className="flex flex-col gap-2 md:w-1/2">
          <h1 className="text-2xl text-center md:text-start sm:text-3xl md:text-4xl">{t("section1.h1")}</h1>
          <p className="text-sm text-black/60 sm:text-base ">{t("section1.p")}</p>
          <div className="flex flex-row justify-between items-center sm:justify-center sm:gap-2 md:flex-col md:items-start">
          <Link href={"/contact"}>
            <button className="text-sm md:text-base px-2 py-1 rounded-lg bg-gradient-to-r from-lime-900 from-10% via-lime-800 via-50% to-lime-900 to-90% active:text-gray-100 active:bg-gradient-to-r active:from-lime-900 active:from-10%  active:via-lime-900 active:via-50% active:to-lime-900 active:to-90% transition-all text-white">{t("section1.btn1")}</button>
          </Link>
            <Link href={"/contact"}>
              <button className="text-sm md:text-base px-2 md:px-4 py-1 rounded-lg bg-gradient-to-r from-lime-900 from-10% via-lime-800 via-50% to-lime-900 to-90% active:text-gray-100 active:bg-gradient-to-r active:from-lime-900 active:from-10%  active:via-lime-900 active:via-50% active:to-lime-900 active:to-90% transition-all  text-white">{t("section1.btn2")}</button>
            </Link>
          </div>
        </aside>
        {/* <Design/> */}
      </section>
      
      <section className="px-5 md:px-10 lg:px-20 xl:px-32 2xl:px-60 flex flex-col gap-2">
        <h2 className="text-center text-xl sm:text-2xl md:text-3xl ">{t("section2.h2")}</h2>
        <div className="flex flex-col items-center gap-2 md:flex-row md:justify-between ">
          <Card title={t("section2.card1.h3")} description={t("section2.card1.p")}  bgColor={"bg-lime-900"} icon={<FaFileCode className="text-2xl sm:text-3xl lg:text-4xl text-amber-200"/> } />
          <Card title={t("section2.card2.h3")} description={t("section2.card2.p")} bgColor={"bg-lime-900"} icon={<FaCloud className="text-2xl sm:text-3xl lg:text-4xl text-rose-300"/>} />
          <Card title={t("section2.card3.h3")} description={t("section2.card3.p")}  bgColor={"bg-lime-900"} icon={<MdLocalPhone className="text-2xl sm:text-3xl lg:text-4xl text-amber-200"/>}/>
        </div>
      </section>

      <section className="px-5 md:px-10 lg:px-20 xl:px-32 2xl:px-60 py-5 flex justify-center ">
        <div className="bg-lime-900 w-96 rounded-lg px-2 py-4 flex flex-col gap-4">
          <DropDown id={1} title={t("section3.drD1.h3")} description={t("section3.drD1.p")}/>
          <DropDown id={2} title={t("section3.drD2.h3")} description={t("section3.drD2.p")}/>
          <DropDown id={3} title={t("section3.drD3.h3")} description={t("section3.drD3.p")}/>
          <DropDown id={4} title={t("section3.drD4.h3")} description={t("section3.drD4.p")}/>
        </div>
        
      </section>

    </main>
  );
}
