"use client";

import * as React from "react";
import { Sparkles } from "lucide-react";

const Hero = () => {
  return (
    <div className="min-h-screen bg-[#0c0414] text-white flex flex-col relative overflow-x-hidden">
      <div className="flex gap-[10rem] rotate-[-20deg] absolute top-[-40rem] right-[-30rem] z-[0] blur-[4rem] skew-[-40deg] opacity-50">
        <div className="w-[10rem] h-[20rem] bg-gradient-to-b from-white to-blue-300"></div>
        <div className="w-[10rem] h-[20rem] bg-gradient-to-b from-white to-blue-300"></div>
        <div className="w-[10rem] h-[20rem] bg-gradient-to-b from-white to-blue-300"></div>
      </div>
      <div className="flex gap-[10rem] rotate-[-20deg] absolute top-[-50rem] right-[-50rem] z-[0] blur-[4rem] skew-[-40deg] opacity-50">
        <div className="w-[10rem] h-[20rem] bg-gradient-to-b from-white to-blue-300"></div>
        <div className="w-[10rem] h-[20rem] bg-gradient-to-b from-white to-blue-300"></div>
        <div className="w-[10rem] h-[20rem] bg-gradient-to-b from-white to-blue-300"></div>
      </div>
      <div className="flex gap-[10rem] rotate-[-20deg] absolute top-[-60rem] right-[-60rem] z-[0] blur-[4rem] skew-[-40deg] opacity-50">
        <div className="w-[10rem] h-[30rem] bg-gradient-to-b from-white to-blue-300"></div>
        <div className="w-[10rem] h-[30rem] bg-gradient-to-b from-white to-blue-300"></div>
        <div className="w-[10rem] h-[30rem] bg-gradient-to-b from-white to-blue-300"></div>
      </div>

      <main className="flex-1 flex flex-col items-center justify-center px-4 text-center">
        <div className="max-w-4xl mx-auto space-y-6">
          <div className="flex-1 flex justify-center">
            <div className="bg-[#1c1528] rounded-full px-4 py-2 flex items-center gap-2 w-fit mx-4">
              <Sparkles className="w-4 h-4 text-purple-400" />
              <span className="text-xs">Cards as Unique as You</span>
            </div>
          </div>
          <h1 className="text-5xl font-bold leading-tight flex items-center justify-center gap-3">
            Pixiefy
          </h1>
          <p className="text-md">Pixiefy lets you generate beautiful gradient cards based on your social media handle.</p>
        </div>
      </main>
    </div>
  );
};

export { Hero };