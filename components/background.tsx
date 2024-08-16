import { useActiveSection } from "@/hooks/use-active-section";
import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { Btn2 } from "./btn2";
import { IntroBtns } from "./intro-btn";

export function DotBackground() {
  const { ref, inView } = useInView({
    threshold: 0.5,
  });
  const { setActive } = useActiveSection();

  useEffect(() => {
    if (inView) setActive('Home');
  }, [inView, setActive]);

  return (
    <div id="home" ref={ref}>
      <div className="h-[43rem] w-full dark:bg-black bg-white dark:bg-dot-white/[0.2] bg-dot-black/[0.2] relative flex items-center justify-center">
        {/* Radial gradient for the container to give a faded look */}
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            type: "tween",
            duration: 0.2,
          }}
          className="flex flex-col"
        >
          <div className="text-4xl font-mono sm:text-5xl font-bold relative z-5 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-2 ">
            <div>
             <div className="flex  items-center">
             Hi
              <motion.span
                className="inline-block pb-2 text-yellow-300"
                animate={{
                  rotate: [0, 15, -10, 15,0], // Waving effect
                }}
                transition={{
                  duration: 2, // Slower wave
                  ease: "easeInOut",
                }}
              >
                👋
              </motion.span>
             </div>
              
              {`I'm Simarjeet`}
            </div>
          </div>
          <div className="text-4xl sm:text-xl font-mono font-bold relative z-5 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 ">
            {`I'm a self-taught fullstack developer`}
          </div>
          <div>
            <IntroBtns/>
          </div>
        </motion.div>
      </div>
    </div>
  );
}


