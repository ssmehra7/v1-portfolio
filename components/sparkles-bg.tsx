"use client";
import React, { useEffect } from "react";
import { SparklesCore } from "@/components/ui/sparkles";
import { SocialBtn } from "./social-btn";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { useActiveSection } from "@/hooks/use-active-section";
import { useInView } from "react-intersection-observer";

export function SparklesEnding({

}) {

  const {ref, inView} = useInView();
  const {setActive} = useActiveSection();
  
  useEffect(()=>{
    if (inView) setActive('Contact');
  },[inView,setActive]);

  return (
    <div id="contact" ref={ref} className="pb-10">
      <div className="h-[40rem] w-full bg-black flex flex-col items-center justify-center overflow-hidden rounded-md bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-2 font-bold">
      <div className="md:text-5xl text-5xl lg:text-7xl font-bold text-center relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500">
        Thanks For Visiting
      </div>
      <p className="flex justify-center items-center flex-col">Please contact me directly at <a
        className="underline" href="mailto:simarjeet.sm7@gmail.com">simarjeet.sm7@gmail.com</a></p>
        <div className="my-2 flex gap-2">
          {
            socials.map((item)=>(
              <SocialBtn 
                key={item.socialUrl}
                label={item.label} 
                url={item.socialUrl}
                icon={item.icon}
                />
            ))
          }

        </div>

      <div className="w-[40rem] h-40 relative">
        {/* Gradients */}
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />

        {/* Core component */}
        <SparklesCore
          background="transparent"
          minSize={0.4}
          maxSize={1}
          particleDensity={1200}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />

        {/* Radial Gradient to prevent sharp edges */}
        <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
      </div>
    </div>
    </div>
  );
}



 
 const socials = [
  {
      label:"Github", 
      icon:<FaGithub/>,
      socialUrl:"https://github.com/ssmehra7"
  },
  {
      label:"Linkedin", 
      icon:<FaLinkedin />, 
      socialUrl:"https://www.linkedin.com/in/simarjeetsm11/"
  }, 
  {
      label:"Twitter", 
      icon:<FaXTwitter/>, 
      socialUrl:"https://x.com/simarjeet_sm"
  }
]



