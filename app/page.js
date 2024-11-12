"use client";
import { React, useState } from "react";
import { Spotlight } from "@/components/ui/spotlight";
import { motion } from "framer-motion";
import {
  TypewriterEffect,
  TypewriterEffectSmooth,
} from "@/components/ui/typewriter-effect";
import { useRouter } from "next/navigation";
import YtVideo from "@/components/YtVideo";
import StoryInput from "@/components/JiraAuth";
import { Button } from "@/components/ui/button";

export default function SpotlightPreview() {
  const [start, setStart] = useState(false);

  const router = useRouter();
  // const text = `Enhance your Agile workflow with intelligent task breakdowns and automated sprint planning. 
  // Seamlessly integrate with your Jira by entering your API token, project key & Jira URL. Instantly generate 
  // editable sub-tasks and accurate time estimates for each story, simplifying planning and boosting productivity.`;
  const words = [
    {
      text: "Effortless Agile Estimation using Gen-AI",
      className:
        " bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-lime-400",
    },
  ];
  return (
    <div className="h-screen w-full flex md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
      <Spotlight className="-top-40 left-0 md:left-60 md:-top-30" fill="lime" />
      {/* #a6c0d0 */}
      <div className="md:top-0 max-w-7xl  mx-auto relative z-10  w-full pt-20 md:pt-0">
        <motion.h1
          initial={{ y: 200, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.1, duration: 0.4 }}
          className=" text-4xl md:text-7xl py-1 font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-lime-400 bg-opacity-50"
        >
          Jira Copilot
        </motion.h1>
        <TypewriterEffectSmooth words={words} />
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          {start && <StoryInput /> 
          // :  <YtVideo />
          }
          {!start && (
            <Button
              onClick={() => setStart(true)}
              className="block mx-auto md:w-36 h-12 mt-10 border border-green-700"
            >
              Get Started
            </Button>
          )}
        </motion.div>
        {/* <TextGenerateEffect words={text} /> */}
        {/* <motion.button onClick={()=>router.push('/agile')}
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{delay:0.5, type:"spring"}}
        className="block mx-auto h-12 border-lime-600 hover:border-lime-300 animate-shimmer mt-10 rounded-md border  bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-white transition-colors focus:outline-none focus:ring-2 focus:ring-lime-600 focus:ring-offset-2 focus:ring-offset-lime-500">
          Get Started
        </motion.button> */}
      </div>
    </div>
  );
}
