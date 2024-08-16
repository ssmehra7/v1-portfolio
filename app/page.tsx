"use client"

import { About } from "@/components/about-me";
import { DotBackground } from "@/components/background";
// import { BentoProject } from "@/components/bento-project";
// import { Contact } from "@/components/contact";
import { CustomBackground } from "@/components/custom-background";
import { LayoutGridProject } from "@/components/layout-project";

import { Skills } from "@/components/skills-card";
import { SparklesEnding } from "@/components/sparkles-bg";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <>


      <DotBackground />
      <About />
      <Skills />
      <LayoutGridProject />
      <SparklesEnding />





    </>
  );
}
