"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { FaReact } from "react-icons/fa";
import Image from "next/image";
import {  Frameworks, Languages, Tools } from "@/lib/data";
import { useActiveSection } from "@/hooks/use-active-section";
import { useInView } from "react-intersection-observer";


export function Skills() {

  const {ref, inView} = useInView();
  const {setActive} = useActiveSection();
  
  useEffect(()=>{
    if (inView) setActive('Skills');
  },[inView,setActive]);


  return (
   <div
   ref={ref} id="skills">

<div className="h-[40rem] mb-10 rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <div className=" text-5xl font-semibold pb-4 font-mono bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500">
            Skills
      </div>
      <div className="w-1/2">
      <InfiniteMovingCards
        items={languages}
        direction="right"
        speed="normal"
      />
      <InfiniteMovingCards
        items={frameworks}
        direction="left"
        speed="normal"
      />
       <InfiniteMovingCards
        items={tools}
        direction="right"
        speed="normal"
      />
      </div>
    </div>

   </div>
  );
}


const languages = Languages.map((item)=>({
    label:item.label,
    icon: (
        <Image 
            src={item.url}
            alt={`${item.label}-logo`}
            width={50}
            height={50}
        />
    ),
})); 

const frameworks = Frameworks.map((item)=>({
    label:item.label,
    icon: (
        <Image 
            src={item.url}
            alt={`${item.label}-logo`}
            width={50}
            height={50}
        />
    ),
})); 

const tools = Tools.map((item)=>({
    label:item.label,
    icon: (
        <Image 
            src={item.url}
            alt={`${item.label}-logo`}
            width={50}
            height={50}
        />
    ),
})); 
