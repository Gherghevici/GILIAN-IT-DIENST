import Image from "next/image";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
export default function ImgCard({title,description,img, isPhotoRight}){
    return(
        <main className={`flex flex-col sm:flex-row rounded-2xl border-2 border-lime-900 h-fit w-fit `}>
            <div className={` ${isPhotoRight?"md:order-1":"md:order-2"} text-center  p-2 sm:p-4 w-80 sm:w-[23rem] flex flex-col items-center justify-around`}>
                <h2 className="text-2xl sm:text-3xl ">{title}</h2>
                <p className="text-sm text-black/80">{description}</p>
            </div>
            <div className={`${isPhotoRight?"md:order-2":"md:order-1"} flex flex-col gap-2 justify-center items-center  sm:py-4 w-80 sm:w-56 relative `}>
               <Image src={img} alt="img" className="rounded-xl object-scale-down w-[200px] h-[200px]"  /> 
               <button className={` sm:absolute w-full sm:w-16 h-8 sm:h-14  bg-amber-200 ${isPhotoRight? "sm:right-0 sm:rounded-tl-[100%] sm:rounded-br-2xl sm:border-l-2":"sm:right-0 sm:rounded-tl-[100%] sm:rounded-br-2xl sm:border-l-2 md:rounded-tl-none md:rounded-br-none md:border-l-0 md:left-0 md:rounded-tr-[100%] md:rounded-bl-2xl md:border-r-2"} sm:bottom-0  rounded-b-2xl sm:rounded-b-none   flex justify-center items-center border-t-2  border-lime-900 `}>
                    {isPhotoRight?
                        <IoIosArrowForward className="ml-2 mt-1"/>
                        :
                        <IoIosArrowBack className="rotate-180 md:rotate-0 ml-2 md:ml-0 md:mr-2 mt-1"/>
                    }
                
                </button>
            </div>
            

        </main>
    )
}