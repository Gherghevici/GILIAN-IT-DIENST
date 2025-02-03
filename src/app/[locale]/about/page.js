    import ImgCard from "../components/ImgCard"
    import img3 from "../../../../public/images/image03-7.png"
    import img4 from "../../../../public/images/image04-5.png"
    import img5 from "../../../../public/images/image03.png"
    import img6 from "../../../../public/images/image04.png"
    
    import {setRequestLocale} from 'next-intl/server';
    import { useTranslations } from "next-intl";
    export default function Blog({params}){
        
        //export default function About(){
        //    return(
       //         <main>
        //                about
         //       </main>
         //   )

        async function loc(){
            const {locale} = await params;
            return locale
          }
          setRequestLocale(loc());
          const t = useTranslations("About")
    
        return(
            <>
                <section className="pt-20 pb-10 bg-lime-900 text-white/90 px-5 md:px-10 lg:px-20 xl:px-32 2xl:px-60">
                    <h1 className="text-center text-4xl md:text-5xl font-extrabold">{t("section1.h1")}</h1>
                    <p className="text-center text-sm md:text-base pt-5">{t("section1.p")}</p>
                </section>
    
                <main className="px-5 md:px-10 lg:px-20 xl:px-32 2xl:px-60 py-20 flex flex-col gap-5  " >
                        <div className="flex justify-center md:justify-start ">
                            <ImgCard title={t("cards.card1.h2")} description={t("cards.card1.p")} img={img3} isPhotoRight={true}/>
                        </div>
                        <div className=" flex justify-center md:justify-end">
                            <ImgCard title={t("cards.card2.h2")} description={t("cards.card2.p")} img={img4} isPhotoRight={false}/>
                        </div>
                </main>

                <section className="pt-20 pb-10 bg-lime-900 text-white/90 px-5 md:px-10 lg:px-20 xl:px-32 2xl:px-60">
                    <h1 className="text-center text-4xl md:text-5xl font-extrabold">{t("section2.h1")}</h1>
                    <p className="text-center text-sm md:text-base pt-5">{t("section2.p")}</p>
                </section>
    
                <main className="px-5 md:px-10 lg:px-20 xl:px-32 2xl:px-60 py-20 flex flex-col gap-5  " >
                        <div className="flex justify-center md:justify-start ">
                            <ImgCard title={t("cards.card1.h2")} description={t("cards.card1.p")} img={img5} isPhotoRight={false}/>
                        </div>
            </>
           
        )
    }