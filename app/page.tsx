"use client"

import { About } from "@/components/about-me";
import { DotBackground } from "@/components/background";

import { CustomBackground } from "@/components/custom-background";
import { LayoutGridProject } from "@/components/layout-project";

import { SparklesEnding } from "@/components/sparkles-bg";
import Image from "next/image";
import { motion } from "framer-motion";
import { Skills2 } from "@/components/skill-2";




export default function Home() {
  return (
    <>


      <DotBackground />
      <About />
      <Skills2 />
      <LayoutGridProject />
      <SparklesEnding />
   
      





    </>
  );
}
