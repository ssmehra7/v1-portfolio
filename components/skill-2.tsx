


"use client";

import React, { useEffect } from "react";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { FaReact } from "react-icons/fa";
import Image from "next/image";
import { Frameworks, Languages, Tools } from "@/lib/data";
import { useActiveSection } from "@/hooks/use-active-section";
import { useInView } from "react-intersection-observer";
import { SkillBtn } from "./skillbtn";

export function Skills2() {
  const { ref, inView } = useInView();
  const { setActive } = useActiveSection();
  
  useEffect(() => {
    if (inView) setActive('Skills');
  }, [inView, setActive]);

  return (
    <div
      ref={ref} 
      id="skills"
      className="scroll-mt-48  h-screen  rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden px-4 sm:px-8"
    >
      <div className="text-5xl font-semibold pb-4 font-mono bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500">
        Skills
      </div>
      <div className="w-full max-w-6xl">
        <div className="flex flex-wrap gap-3 items-center justify-center">
          {languages.map((language, key) => (
            <SkillBtn key={key} label={language.label} icon={language.icon} />
          ))}
        </div>
        <div className="flex flex-wrap gap-3 items-center justify-center mt-4">
          {frameworks.map((framework, key) => (
            <SkillBtn key={key} label={framework.label} icon={framework.icon} />
          ))}
        </div>
        <div className="flex flex-wrap gap-3 items-center justify-center mt-4">
          {tools.map((tool, key) => (
            <SkillBtn key={key} label={tool.label} icon={tool.icon} />
          ))}
        </div>
      </div>
    </div>
  );
}

const languages = Languages.map((item) => ({
  label: item.label,
  icon: (
    <Image 
      src={item.url}
      alt={`${item.label}-logo`}
      width={20}
      height={20}
      className="object-cover"
    />
  ),
})); 

const frameworks = Frameworks.map((item) => ({
  label: item.label,
  icon: (
    <Image 
      src={item.url}
      alt={`${item.label}-logo`}
      width={20}
      height={20}
    />
  ),
})); 

const tools = Tools.map((item) => ({
  label: item.label,
  icon: (
    <Image 
      src={item.url}
      alt={`${item.label}-logo`}
      width={20}
      height={20}
    />
  ),
})); 
