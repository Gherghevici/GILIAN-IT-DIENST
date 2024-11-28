import Image from "next/image";
export default function ImgCard({title,description,img}){
    return(
        <main>
            <div>
                {/* <Image src={""} alt="img"/> */}
            </div>
            <div>
                <h2>{title}</h2>
                <p>{description}</p>
            </div>

        </main>
    )
}