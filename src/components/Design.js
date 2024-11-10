function Cube(){
    return(
        <div className="w-20 h-20 bg-red-900 rotate-45 transform relative
         after:content-[''] after:w-full after:h-full after:bg-green-900 after:bottom-full after:left-full after:abs  " 
         
         />
    )
}

export default function Design(){
    return (
        <aside className="relative mt-5">
            <div>
                <Cube />
            </div>
        </aside>
    )
}