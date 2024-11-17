'use client'
import Card from "@/components/Card";

import { MdLocalPhone } from "react-icons/md";
import { IoIosMail } from "react-icons/io";
import { IoMdPin } from "react-icons/io";

export default function Contact(){
   
    const checkForNamedElement =(e)=> {
        return 'value' in e && 'name' in e;
    }

    const handleSubmit= async(e)=> {
        e.preventDefault();
        const formData ={};
        Array.from(e.currentTarget.elements).filter(checkForNamedElement).forEach((field)=>{
            if(!field.name) return;
            formData[field.name] = field.value;
            
        })
        console.log(formData);


        
        await fetch('/api/email',{
            method:'POST',
            body:JSON.stringify(formData)
        })
    }
    
    return(
        <>
        <section className="pt-20 pb-10 bg-lime-900 text-white/90 px-5 md:px-10 lg:px-20 xl:px-32 2xl:px-60">
            <h1 className="text-center text-4xl md:text-5xl font-extrabold">Contact Us</h1>
            <p className="text-center text-sm md:text-base pt-5">We’d love to hear from you! Whether you have a question, feedback, or simply want to say hello, we’re here to help. Use the form below to reach out, or connect with us via the provided contact details. We’ll get back to you as soon as possible!</p>
        </section>
        <main className="py-5 px-5 md:px-10 lg:px-20 xl:px-32 2xl:px-60">
            <section className="flex flex-col  justify-center items-center sm:flex-row md:justify-between">
                <form onSubmit={handleSubmit} className="w-[23.5rem] xl:w-[28rem] h-64 sm:h-72 xl:h-80  rounded-lg px-2 py-5  flex flex-col justify-center gap-5">
                    <div className="flex gap-2.5">
                        <input name="email" type="text" placeholder="Email:" className=" w-1/2 bg-gradient-to-r from-lime-900 from-5% via-lime-800 via-50% to-lime-900 to-95% px-2 py-1 text-white/90 rounded-lg focus:outline-none"/>
                        <input name="name" type="text" placeholder="Name:" className=" w-1/2 bg-gradient-to-r from-lime-900 from-5% via-lime-800 via-50% to-lime-900 to-95% px-2 py-1 text-white/90 rounded-lg focus:outline-none"/>
                    </div>
                    <div>
                        <input name="subject" type="text" placeholder="Subject:" className=" w-full bg-gradient-to-r from-lime-900 from-5% via-lime-800 via-50% to-lime-900 to-95% px-2 py-1 text-white/90 rounded-lg focus:outline-none"/>
                    </div>
                    <div>
                        <textarea name="textArea" placeholder="Type your message" className="resize-none w-full rounded-lg focus:outline-none  bg-gradient-to-r from-lime-900 from-5% via-lime-800 via-50% to-lime-900 to-95% px-2 py-1 text-white/90" ></textarea>
                    </div>
                    <button type="submit" className=" rounded-lg bg-gradient-to-r from-lime-950/90 from-5% via-lime-900/90 via-50% to-lime-950/90 to-95% px-2 py-1 text-white/90">Send</button>
                </form>
                <form className="flex flex-col justify-center gap-5 bg-lime-900 text-white/90 w-[23.5rem] xl:w-[28rem] h-64  sm:h-72 xl:h-80 rounded-xl px-5 py-2.5 ">
                    <div>
                        <h2 className="text-2xl md:text-3xl mb-3">Our Newsletters</h2>
                        <p className="text-sm md:text-base">Subscribe to our newsletter and never miss a thing! Get the latest updates, and news delivered straight to your inbox. Join our community today!</p>
                    </div>
                    <div className="flex flex-col gap-2.5">
                        <input type="text" placeholder="Email: " className="focus:outline-none px-2 py-1 rounded-lg text-black/80"></input>
                        <button onClick={(e)=>e.preventDefault()} type="submit" className="rounded-lg bg-gradient-to-r from-amber-300 from-5% via-amber-200 via-50% to-amber-300 to-95% text-black/80 px-2 py-1">Submit</button>

                    </div>
                </form>
            </section>
            <section className="flex flex-col md:flex-row justify-center items-center gap-5 md:justify-between py-5 ">
                <Card title={"+4071231231"} description={"Give us a call! We’re just a phone call away to assist you with anything you need."} bgColor={"bg-lime-900"} icon={<MdLocalPhone className="text-2xl sm:text-3xl lg:text-4xl text-amber-200"/>}/>
                <Card title={"email@email.com"} description={"Prefer to write? Drop us an email, and we’ll get back to you as soon as possible."} bgColor={"bg-lime-900"} icon={<IoIosMail className="text-2xl sm:text-3xl lg:text-4xl text-rose-300"/>}/>
                <Card title={"Iasi-Romania"} description={"Visit us in person! Here’s where you can find us – we’d love to see you."} bgColor={"bg-lime-900"} icon={<IoMdPin className="text-2xl sm:text-3xl lg:text-4xl text-amber-200"/>}/>
            </section>
            <section className="py-5">
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d2713.3701079289167!2d27.58663200656629!3d47.150605335595685!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sro!2sro!4v1731710856149!5m2!1sro!2sro"  className="border-none rounded-lg w-full h-72" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </section>
            
        </main>
        </>
        
    )
} 