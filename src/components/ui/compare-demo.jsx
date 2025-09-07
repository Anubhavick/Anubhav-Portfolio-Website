"use client";
import React from "react";
import { Compare } from "./compare";

export function CompareDemo() {
  return (
    <div
      className="w-full md:w-11/12 h-[60vh] px-2 md:px-8 flex items-center justify-center [perspective:800px] [transform-style:preserve-3d]">
      <div
        style={{
          transform: "rotateX(15deg) translateZ(80px)",
        }}
        className="p-2 md:p-6 border rounded-3xl dark:bg-neutral-900 bg-neutral-100 border-neutral-200 dark:border-neutral-800 mx-auto w-full max-w-[760px] h-[70%] md:h-[80%]">
        <Compare
          firstImage="/project1.png"
          secondImage="/project2.png"
          firstImageClassName="object-cover object-left-top w-full"
          secondImageClassname="object-cover object-left-top w-full"
          className="w-full h-full rounded-[22px] md:rounded-lg"
          slideMode="hover"
          autoplay={true} />
      </div>
    </div>
  );
}

export default CompareDemo;
