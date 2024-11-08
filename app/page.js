"use client";
import React from "react";
import { Spotlight } from "@/components/ui/spotlight";
import { motion, useAnimate } from "framer-motion";
import {
  TypewriterEffect,
  TypewriterEffectSmooth,
} from "@/components/ui/typewriter-effect";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";

export default function SpotlightPreview() {
  const text = `Enhance your Agile workflow with intelligent task breakdowns and automated sprint planning. 
  Seamlessly integrate with your Jira by entering your API token, project key & Jira URL. Instantly generate editable sub-tasks and accurate time estimates for each story, simplifying planning and boosting productivity.`;
  const words = [
    {
      text: "Effortless Agile Estimation using AI",
      className:
        " bg-clip-text text-transparent bg-gradient-to-t from-neutral-50 to-green-400",
    },
  ];
  return (
    <div className="h-screen w-full rounded-md flex md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
      <Spotlight
        className="-top-40 left-50 md:left-64 md:-top-20"
        fill="green"
      />
      {/* #a6c0d0 */}
      <div className="md:top-0 max-w-7xl  mx-auto relative z-10  w-full pt-20 md:pt-0">
        <motion.h1
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.4 }}
          className=" text-4xl md:text-7xl py-1 font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-green-500 bg-opacity-50"
        >
          Dr. Sprint
        </motion.h1>
        <TypewriterEffectSmooth words={words} />
        <TextGenerateEffect words={text} />
        <motion.button
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{delay:6}}
        className="block mx-auto h-12 animate-shimmer mt-10 rounded-md border border-green-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-white transition-colors focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2 focus:ring-offset-green-50">
          Get Started
        </motion.button>
      </div>
    </div>
  );
}
