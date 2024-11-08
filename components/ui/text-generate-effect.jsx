"use client";
import { useEffect } from "react";
import { motion, stagger, useAnimate } from "framer-motion";
import { cn } from "@/lib/utils";

export const TextGenerateEffect = ({
  words,
  className,
  filter = true,
  duration = 0,
}) => {
  const [scope, animate] = useAnimate();
  let wordsArray = words.split(" ");
  useEffect(() => {
    const startDelay = 1.6;
    animate("span", {
      opacity: 1,
      filter: filter ? "blur(0px)" : "none",
    }, {
      duration: duration ? duration : 1,
      delay: stagger(0.1, { startDelay }),
    });
  }, [scope.current]);

  const renderWords = () => {
    return (
      (<motion.div ref={scope}>
        
        {wordsArray.map((word, idx) => {
          return (
            (<motion.span
              key={word + idx}
              className="dark:text-white md:text-2xl text-white opacity-0"
              style={{
                filter: filter ? "blur(10px)" : "none",
              }}>
              {word}{" "}
            </motion.span>)
          );
        })}
      </motion.div>)
    );
  };

  return (
    (<div className={cn("font-bold", className)}>
      <div className="mt-10">
        <div
          className=" dark:text-white text-black text-2xl text-center leading-snug tracking-wide">
          {renderWords()}
        </div>
      </div>
    </div>)
  );
};
