'use client'

export default function EmailForm({btn}){
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
                    <button type="submit" className=" rounded-lg bg-gradient-to-r from-lime-950/90 from-5% via-lime-900/90 via-50% to-lime-950/90 to-95% px-2 py-1 text-white/90">{btn}</button>
        </form>
    )
}