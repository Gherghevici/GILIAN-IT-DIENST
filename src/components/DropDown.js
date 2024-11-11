import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";

export default function DropDown({title,description,id}){
    return(
        <div>
            <div className="peer flex border-b-2 border-white justify-between items-center">
                <h3>{title}</h3>
                <input type="checkbox" id={`check${id}`} className="hidden "/>
                <label htmlFor={`check${id}`}><IoIosArrowDown/></label>
                
            </div>
            <p className="peer-has-[input:checked]:block hidden text-sm">{description}</p>
            
        </div>
    )
}