import Image from "next/image";
import Design from "@/components/Design";

export default function Home() {
  return (
    <main className="">
      <section className="flex flex-col px-5 py-20 md:flex-row md:px-20">
        <aside className="flex flex-col gap-2 md:w-1/2">
          <h1 className="text-2xl text-center md:text-start">Elevate Your Business With Tailored IT Solutions</h1>
          <p className="text-sm text-black/60 ">From DevOps to custom development, we support companies across Europe with solutions built for growth</p>
          <div className="flex flex-row justify-between items-center md:flex-col md:items-start md:gap-2">
            <button className="text-sm px-2 py-1 rounded-lg bg-lime-800 text-white">Schedule a Consultation</button>
            <button className="text-sm px-2 py-1 rounded-lg bg-gradient-to-r from-lime-900 from-10% via-lime-800 via-50% to-lime-900 to-90%  text-white">Discover Our Services</button>
          </div>
        </aside>
        {/* <Design/> */}
      </section>
      


    </main>
  );
}
