export default function Card({title,description,icon}){
    return(
        <div className=" bg-lime-900 flex flex-col justify-center items-center px-2 pb-5 lg:pb-6 w-64 lg:w-72 h-36 lg:h-40 border-2 border-lime-900 rounded-md relative overflow-hidden after:content-[''] after:w-12 after:h-12 after:absolute after:rounded-full after:-top-4 after:-left-4 after:bg-amber-200 before:content-[''] before:w-12 before:h-12 before:absolute before:rounded-full before:-right-4 before:-bottom-4  before:bg-amber-200 ">
            <div>
                {icon}
            </div>
            <h3 className="text-lg text-white">{title}</h3>
            <p className="text-sm text-white text-center">{description}</p>
        </div>
    )
}