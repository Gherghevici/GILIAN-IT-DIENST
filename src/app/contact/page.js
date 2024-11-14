'use client'

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
        <h1 className="">Contact Us</h1>
        <main className="flex justify-center items-center h-full">
            <form onSubmit={handleSubmit} className="w-96 h-96 rounded-lg px-2 py-5 border-2 border-black flex flex-col justify-center gap-5">
                <div className="flex flex-col gap-2.5">
                    <input name="email" type="text" placeholder="Email:" className="border-2 w-1/2 px-2 rounded-md focus:outline-none"/>
                    <input name="subject" type="text" placeholder="Subject:" className="border-2 w-1/2 px-2 rounded-md focus:outline-none"/>
                </div>
                <div>
                    <textarea name="textArea" placeholder="Type your message" className="resize-none border-2 w-full px-2 rounded-md focus:outline-none" ></textarea>
                </div>
                <button type="submit">Send</button>
            </form>
            
        </main>
        </>
        
    )
} 