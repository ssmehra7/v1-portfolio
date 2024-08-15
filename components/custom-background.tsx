import React, { ReactNode } from "react";

export function CustomBackground({children}:{children:ReactNode}) {
  return (
    <div className="h-[50rem] w-full dark:bg-black bg-white  dark:bg-dot-white/[0.2] bg-dot-black/[0.2] relative flex items-center justify-center">
     {children}
    </div>
  );
}
