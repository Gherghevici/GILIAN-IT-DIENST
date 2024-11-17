import Design from "@/components/Design";
import Card from "@/components/Card";
import { MdLocalPhone } from "react-icons/md";
import { FaCloud } from "react-icons/fa";
import { FaFileCode } from "react-icons/fa6";
import DropDown from '@/components/DropDown'

export default function Home() {
  return (
    <main className="">
      <section className="flex flex-col px-5 md:px-10 lg:px-20 xl:px-32 2xl:px-60 py-20 md:flex-row ">
        <aside className="flex flex-col gap-2 md:w-1/2">
          <h1 className="text-2xl text-center md:text-start sm:text-3xl md:text-4xl">Elevate Your Business With Tailored IT Solutions</h1>
          <p className="text-sm text-black/60 sm:text-base ">From DevOps to custom development, we support companies across Europe with solutions built for growth</p>
          <div className="flex flex-row justify-between items-center sm:justify-center sm:gap-2 md:flex-col md:items-start">
            <button className="text-sm md:text-base px-2 py-1 rounded-lg bg-gradient-to-r from-lime-900 from-10% via-lime-800 via-50% to-lime-900 to-90% active:text-gray-100 active:bg-gradient-to-r active:from-lime-900 active:from-10%  active:via-lime-900 active:via-50% active:to-lime-900 active:to-90% transition-all text-white">Schedule a Consultation</button>
            <button className="text-sm md:text-base px-2 md:px-4 py-1 rounded-lg bg-gradient-to-r from-lime-900 from-10% via-lime-800 via-50% to-lime-900 to-90% active:text-gray-100 active:bg-gradient-to-r active:from-lime-900 active:from-10%  active:via-lime-900 active:via-50% active:to-lime-900 active:to-90% transition-all  text-white">Discover Our Services</button>
          </div>
        </aside>
        {/* <Design/> */}
      </section>
      
      <section className="px-5 md:px-10 lg:px-20 xl:px-32 2xl:px-60 flex flex-col gap-2">
        <h2 className="text-center text-xl sm:text-2xl md:text-3xl ">Our Expertise</h2>
        <div className="flex flex-col items-center gap-2 md:flex-row md:justify-between ">
          <Card title={"Consulting"} description={"We guide your business through the complexities of digital transformation"}  bgColor={"bg-lime-900"} icon={<MdLocalPhone className="text-2xl sm:text-3xl lg:text-4xl text-amber-200"/>} />
          <Card title={"DevOps"} description={"Optimizing processes and structure for a resilient, scalable IT environment"} bgColor={"bg-lime-900"} icon={<FaCloud className="text-2xl sm:text-3xl lg:text-4xl text-rose-300"/>} />
          <Card title={"Custom Development"} description={"Developing tailored Apps and Web solutions to drive your success"}  bgColor={"bg-lime-900"} icon={<FaFileCode className="text-2xl sm:text-3xl lg:text-4xl text-amber-200"/>}/>
        </div>
      </section>

      <section className="px-5 md:px-10 lg:px-20 xl:px-32 2xl:px-60 py-5 flex justify-center ">
        <div className="bg-lime-900 w-96 rounded-lg px-2 py-4 flex flex-col gap-4">
          <DropDown id={1} title={"Discovery"} description={"Understanding your needs and defining goals to shape the best possible solution"}/>
          <DropDown id={2} title={"Planning"} description={"Crafting a strategic plan that aligns with your objectives and timelines"}/>
          <DropDown id={3} title={"Development"} description={"Building and testing the solution with precision and attention to detail"}/>
          <DropDown id={4} title={"Launch & Support"} description={"Ensuring a smooth launch and providing ongoing support for optimal performance"}/>
        </div>
        
      </section>

    </main>
  );
}
