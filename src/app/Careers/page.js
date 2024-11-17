import { Button } from "@react-email/components";

export default function Careers(){
    return(
        <main className="flex flex-col gap-5">
            
            <section className="pt-20 pb-10 bg-lime-900 text-white/90 px-5 md:px-10 lg:px-20 xl:px-32 2xl:px-60">
                <h1 className="text-center text-4xl md:text-5xl font-extrabold">Your Future Starts Here</h1>
                <p className="text-center text-sm md:text-base pt-5">We’re excited to grow our team with talented, passionate individuals. Join us and make an impact as we work together to shape the future</p>
                <button className=" rounded-lg bg-gradient-to-r from-amber-300 from-5% via-amber-200 via-50% to-amber-300 to-95% text-black/80 px-2 py-1">Join Our Talent Pool</button>
            </section>
            <section className="flex flex-col justify-between  px-5 md:px-10 lg:px-20 xl:px-32 2xl:px-60">
                <div className=" flex justify-center items-center  border-2 border-black/90 px-5 py-2 h-60  rounded-lg">
                    
                    
                    <h2 className="text-3xl md:text-4xl text-center text-black/90">We’re not hiring right now, but you can subscribe to our newsletter and we'll let you know</h2>
                </div>
            </section>
        </main>
    )

}