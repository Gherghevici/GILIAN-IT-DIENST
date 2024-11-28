import ImgCard from "../components/ImgCard"

export default function Blog(){
    const data = [
        {
            "img":"",
            "title":"test",
            "description":"dadadad"
        },
        {
            "img":"...",
            "title":"test2",
            "description":"dadadad"
        },
        {
            "img":"...",
            "title":"test3",
            "description":"dadadad"
        },
        {
            "img":"...",
            "title":"test4",
            "description":"dadadad"
        }
    ]
    return(
        <main className="px-5 md:px-10 lg:px-20 xl:px-32 2xl:px-60 py-20 flex flex-col justify-between " >
            {data.map((val)=>{
                return <ImgCard key={val?.title} title={val?.title} description={val?.description} img={val?.img}/>
            })}
        </main >
    )
}