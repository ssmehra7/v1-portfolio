"use client"

import { useActiveSection } from "@/hooks/use-active-section"
import { links } from "@/lib/data"
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"
import Link from "next/link"
import { useState } from "react"

// export const Navbar =() =>{
//     return(
//         <div className="z-50  fixed left-1/2 -transalte-x-1/2 top-4flex  top-[0.15rem]  h-12 -translate-x-1/2 py-2 sm:top-[1.7rem] sm:h-[initial] sm:py-0">
//             <div className="rounded-full bg-white text-black flex justify-center items-center space-x-10 px-10 py-2 font-mono">
//                 <div>
//                     About
//                 </div>
//                 <div>
//                     Projects
//                 </div>
//                 <div>
//                     Resume
//                 </div>
//                 <div>
//                     Contact
//                 </div>
//             </div>
//         </div>
//     )
// }









export const Navbar =()=>{

    const {active, setActive}  = useActiveSection();


    return(
        <header className="z-[999] relative">
            <motion.div 
                initial ={{y:-100,x:"-50%", opacity:0}}
                animate = {{y:0,x:"-50%",opacity:1}}
                className="fixed top-0 left-1/2 -translate-x-1/2 h-[4.5rem] w-full rounded-none border border-white border-opacity-40 bg-white
                bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] sm:top-6 sm:w-[36rem] sm:h-[3.25rem] sm:rounded-full "
                    >
            </motion.div>
            <nav className="flex fixed top-[0.15rem] left-1/2 -translate-x-1/2 h-12 
               pu-2 sm:top-[1.7rem] sm:h-[initial] sm:py-0">

                    <ul className="flex justify-center items-center w-[22rem] flex-wrap gap-y-1 text-[0.9rem] font-medium text-gray-500 sm:w-[initial] sm:flex-nowrap sm:gap-5 ">
                        {links.map((link)=>(
                            <motion.li
                                initial={{y:-100, opacity:0}}
                                animate={{y:0, opacity:1}}
                                 className="relative h-3/4 flex item-center justify-center" key={link.hash}>
                                <Link onClick={()=>setActive(link.name)} className={cn(
                                    "text-md flex w-full items-center justify-center px-3 py-3 hover:text-gray-950 transition",
                                    { "text-gray-950": active === link.name }
                                )} href={link.hash}>
                                {
                                    link.name
                                }
                                {
                                    link.name === active && <span className="bg-grya-100 rounded-full absolute inset-0 -z-10">
                                    </span> 
                                }

                                </Link>
                            </motion.li>
                        ))}
                       <motion.li
                                initial={{y:-100, opacity:0}}
                                animate={{y:0, opacity:1}}
                                 className="relative h-3/4 flex item-center justify-center" key={"#resume"}>
                                <Link  className={cn(
                                    "flex w-full items-center justify-center px-3 py-3 hover:text-gray-950 transition",
                                    
                                )} href={"https://drive.google.com/file/d/1s-aaTc2HUpE3ebzQFuz62DeRAFA6Bp_j/view"} target="_blank">
                                {
                                    "Resume"
                                }

                                </Link>
                            </motion.li>
                    </ul>

            </nav>
        </header>
    )
}