import { FaPaperPlane } from "react-icons/fa"



export const SubmitBtn =() =>{
    
    
    return (
        <button type="submit" className="flex items-center gap-2 justify-center h-[3rem] w-[7rem] bg-gray-200 text-black rounded-full outline-none transition-all focus:scale-105 hover:scale-105 active:scale-105">
            Submit 
            <FaPaperPlane className="text-sm opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1"/>
         </button>
    )
}