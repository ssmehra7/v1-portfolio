"use client";
import React from "react";
import { AnimatedTooltip } from "@/components/ui/animated-tooltip";
import { socials } from "@/lib/data";

const items =socials.map((item,key)=>(
  {
    id:key, 
    name:item.label, 
    designation:"",
    image:item.imgUrl
  }
));


export function ContactList() {
  return (
    <div className="flex flex-row items-center justify-center mb-10 w-full">
      <AnimatedTooltip items={items} />
    </div>
  );
}

