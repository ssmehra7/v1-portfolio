"use client";
import React, { useState, useRef, useEffect } from "react";
import { LayoutGrid } from "./ui/layout-grid";
import { ProjectImages } from "@/lib/data";
import Link from "next/link";
import { IoIosLink } from "react-icons/io";
import { useActiveSection } from "@/hooks/use-active-section";
import { useInView } from "react-intersection-observer";

export function LayoutGridProject() {
  const {ref, inView} = useInView({
    threshold:0.5
  });
  const {setActive} = useActiveSection();
  
  useEffect(()=>{
    if (inView) setActive('Projects');
  },[inView,setActive]);
  
  return (
    <div className="mb-10 scroll-mt-32" ref={ref} id="projects">
    <div className=" text-white flex z-auto font-semibold font-mono  justify-center items-center text-5xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500" >
        Projects
        </div>
        <div className="h-screen">
      <LayoutGrid cards={cards} />
    </div>
    </div>
   
  );
}


interface SkeletonProps {
  label:string; 
  description:string; 
  githubUrl:string; 
  LiveLinkUrl:string; 
}
const Skeleton:React.FC<SkeletonProps> = ({
  label, 
  description, 
  githubUrl, 
  LiveLinkUrl
}) => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
        {label}
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        {description}
      </p>
      <div className="flex space-x-3 justify-between items-center">
      <Link target="_blank" href={githubUrl} className="font-normal">Github</Link>
      {LiveLinkUrl && <Link target="_blank" href={LiveLinkUrl} className="flex items-center justify-center font-normal">
      <IoIosLink className="font-semibold"/>
      Live Link
      </Link>}
      </div>
    </div>
  );
};




const cards = ProjectImages.map((card, key)=>{
  let i = 1; 
  if (key%2){
    i = 1;
  }else{
    i =2;
  }

  return(
    {
      id:key,
      content:<Skeleton 
        label={card.label} 
        description={card.description} 
        githubUrl={card.github} 
        LiveLinkUrl={card.LiveLink}
        />,
      className:`md:col-span-${i}`,
      thumbnail:card.url.src, 

    }
  )
})