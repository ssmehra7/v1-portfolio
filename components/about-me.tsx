"use client"
import { useActiveSection } from "@/hooks/use-active-section";
import { motion } from "framer-motion"
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

export const About=()=>{
  const {ref, inView} = useInView({
    threshold:0.5,
  });
  const {setActive} = useActiveSection();
  
  useEffect(()=>{
    if (inView) setActive('About');
  },[inView,setActive]);

    return(
       <motion.div
       initial ={{y:-100, opacity:0}}
       animate = {{y:0,opacity:1}} id="about" ref={ref} className="flex items-center justify-center scroll-mt-32">
         <motion.div
        
    
        className="flex-col font-mono font-semibold flex items-center justify-center  mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28 z-5 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500">
            <h2 className="text-5xl pb-2">
                About Me 
            </h2>
            <p className="mb-3 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500">
        I{`'`}m Simarjeet Singh Mehra currently doing my bachelors in Electrical Engineering{" "}
        <span className="font-medium">from Delhi Technological University</span>, I have a strong foundation in fullstack web development
        {" "}
        <span className="font-medium">full-stack web development</span>.{" "}
        <span className="">I have developed several projects in MERN Stack which you can find in the below sections.</span>I have a proficiency in <span className="underline">JavaScript, TypeScript, C++, Python,</span>
        {" "}
        
        and frameworks like <span className="font-medium">React.js, Node.js, Express.js, and Tailwind CSS.
        </span>
        . I am also familiar with Prisma and PostgresSql. I am also good with databases and making scalable backend application.
      </p>

      <p className="bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500">
        <span className="italic">I'm currently looking for a </span> full-time position
        as a software developer{" "}
        
      </p>
        </motion.div>
       </motion.div>
    )
}