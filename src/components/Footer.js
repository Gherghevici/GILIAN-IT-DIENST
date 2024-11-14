import { IoLogoLinkedin } from "react-icons/io";
import { SiGooglestreetview } from "react-icons/si";
export default function Footer(){
    return(
        <footer className="flex justify-between items-center px-5 md:px-10 lg:px-20 xl:px-32 2xl:px-60">
            <section>
                <p>Terms of Service</p>
                <p>Privacy Policy</p>
                <div className="flex gap-5">
                    <IoLogoLinkedin className="w-9 h-9"/>
                    <SiGooglestreetview className="w-8 h-8"/>
                </div>
            </section>
            <section>
                <p>Gilian IT-Dienst S.R.L</p>
                <p>CUI:5083247</p>
                <p>J:J2024038529009</p>
            </section>
            <section>
                <p>Iasi-Romania</p>
                
                <p>email@gmail.com</p>
                <p>+40712363210</p>
            </section>
        </footer>
    )
}