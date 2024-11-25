'use client'
export default function NewsLetterForm({h2,p,btn}){
    return(
        <form className="flex flex-col justify-center gap-5 bg-lime-900 text-white/90 w-[23.5rem] xl:w-[28rem] h-64  sm:h-72 xl:h-80 rounded-xl px-5 py-2.5 ">
                    <div>
                        <h2 className="text-2xl md:text-3xl mb-3">{h2}</h2>
                        <p className="text-sm md:text-base">{p}</p>
                    </div>
                    <div className="flex flex-col gap-2.5">
                        <input type="text" placeholder="Email: " className="focus:outline-none px-2 py-1 rounded-lg text-black/80"></input>
                        <button onClick={(e)=>e.preventDefault()} type="submit" className="rounded-lg bg-gradient-to-r from-amber-300 from-5% via-amber-200 via-50% to-amber-300 to-95% text-black/80 px-2 py-1">{btn}</button>

                    </div>
        </form>
    )
}