import { CiLinkedin } from "react-icons/ci";
import { SiGooglestreetview } from "react-icons/si";
import { FaRegCopyright } from "react-icons/fa";
import { Link } from "@/i18n/routing";
export default function Footer({terms,privacy}){
    return(
        <footer className="flex flex-col sm:flex-row justify-between  py-2.5 px-5 md:px-10 lg:px-20 xl:px-32 2xl:px-60 bg-lime-900 text-white/90">
            <section className="order-3 sm:order-1">
                <div className="flex gap-5">
                    <CiLinkedin  className="w-9 h-9"/>
                    <Link href={"/contact"}>
                        <SiGooglestreetview className="w-8 h-8 cursor-pointer"/>
                    </Link>
                </div>
            </section>
            <section className="order-2">
                <p className="cursor-pointer">{terms}</p>
                <p className="cursor-pointer">{privacy}</p>
            </section>
            <section className="sm:order-3">
                <p className="flex items-center gap-1"><FaRegCopyright /> Gilian IT-Dienst</p>
                <p className="cursor-pointer">Impresum</p>
            </section>
        </footer>
    )
}