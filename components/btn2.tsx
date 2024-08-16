
"use client";
import React, { ReactNode } from "react";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import { AiOutlineDownload } from "react-icons/ai";

interface Props {
    label:string; 
    icon:ReactNode; 
}

export const  Btn2:React.FC<Props> =({
    label, 
    icon
})=> {
  return (
    <div className="z-[999] flex justify-center text-center">
      <HoverBorderGradient
        containerClassName="rounded-full"
        as="button"
        className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2"
      >
        
        <span className="text-md flex justify-center items-center">{label}</span>
        {icon}
      </HoverBorderGradient>
    </div>
  );
}

