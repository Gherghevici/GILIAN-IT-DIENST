import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";

export default function DropDown({title,description,id}){
    return(
        <div>
            <div className="peer group *:select-none flex border-b-2 border-white justify-between items-center">
                <h3 className="text-lg text-white">{title}</h3>
                <input type="checkbox" id={`check${id}`} className="hidden "/>
                <label htmlFor={`check${id}`} className=" cursor-pointer group-has-[input:checked]:rotate-0 -rotate-180 transition-all"><IoIosArrowDown className=" hover:text-amber-200 w-7 h-7 text-white "/></label>
                
            </div>
            <p className="peer-has-[input:checked]:block hidden text-sm select-none text-white px-1">{description}</p>
            
        </div>
    )
}