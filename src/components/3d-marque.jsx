"use client";

import { motion } from "motion/react";
import { cn } from "../lib/utils";
export const ThreeDMarquee = ({
  images,
  className
}) => {
  // If images are actually text strings, render them as text
  const isText = images.every(item => typeof item === 'string' && !item.includes('.'));
  
  // Duplicate the array multiple times to fill more space
  const duplicatedImages = [...images, ...images, ...images, ...images];
  
  // Split the duplicated images array into 6 columns instead of 4 for better coverage
  const chunkSize = Math.ceil(duplicatedImages.length / 6);
  const chunks = Array.from({ length: 6 }, (_, colIndex) => {
    const start = colIndex * chunkSize;
    return duplicatedImages.slice(start, start + chunkSize);
  });
  
  return (
    <div
      className={cn(
        "mx-auto block h-full overflow-hidden max-sm:h-100 w-full",
        className
      )}>
      <div className="flex size-full items-center justify-center">
        <div className="size-[2400px] shrink-0 scale-75 sm:scale-90 lg:scale-110">
          <div
            style={{
              transform: "rotateX(55deg) rotateY(0deg) rotateZ(-45deg)",
            }}
            className="relative top-96 right-[50%] grid size-full origin-top-left grid-cols-6 gap-2 transform-3d">
            {chunks.map((subarray, colIndex) => (
              <motion.div
                animate={{ y: colIndex % 2 === 0 ? 150 : -150 }}
                transition={{
                  duration: colIndex % 2 === 0 ? 8 : 12,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "linear",
                }}
                key={colIndex + "marquee"}
                className="flex flex-col items-start gap-1">
                <GridLineVertical className="-left-2" offset="100px" />
                {subarray.map((item, itemIndex) => (
                  <div className="relative" key={itemIndex + item + colIndex}>
                    <GridLineHorizontal className="-top-2" offset="15px" />
                    {isText ? (
                      <motion.div
                        whileHover={{
                          y: -8,
                          scale: 1.03,
                        }}
                        transition={{
                          duration: 0.2,
                          ease: "easeInOut",
                        }}
                        key={itemIndex + item + colIndex}
                        className="rounded-lg ring ring-gray-950/10 hover:shadow-xl bg-gradient-to-br from-blue-50/80 to-purple-50/80 dark:from-blue-900/30 dark:to-purple-900/30 flex items-center justify-center p-3 backdrop-blur-sm border border-white/30 dark:border-gray-700/30"
                        style={{ width: '320px', height: '200px' }}
                      >
                        <span className="text-base md:text-lg font-semibold text-gray-700 dark:text-gray-300 text-center">
                          {item}
                        </span>
                      </motion.div>
                    ) : (
                      <motion.img
                        whileHover={{
                          y: -8,
                        }}
                        transition={{
                          duration: 0.2,
                          ease: "easeInOut",
                        }}
                        key={itemIndex + item + colIndex}
                        src={item}
                        alt={`Image ${itemIndex + 1}`}
                        className="aspect-[970/700] rounded-lg object-cover ring ring-gray-950/5 hover:shadow-2xl"
                        width={280}
                        height={180} />
                    )}
                  </div>
                ))}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const GridLineHorizontal = ({
  className,
  offset
}) => {
  return (
    <div
      style={
        {
          "--background": "#ffffff",
          "--color": "rgba(0, 0, 0, 0.2)",
          "--height": "1px",
          "--width": "5px",
          "--fade-stop": "90%",

          //-100px if you want to keep the line inside
          "--offset": offset || "200px",

          "--color-dark": "rgba(255, 255, 255, 0.2)",
          maskComposite: "exclude"
        }
      }
      className={cn(
        "absolute left-[calc(var(--offset)/2*-1)] h-[var(--height)] w-[calc(100%+var(--offset))]",
        "bg-[linear-gradient(to_right,var(--color),var(--color)_50%,transparent_0,transparent)]",
        "[background-size:var(--width)_var(--height)]",
        "[mask:linear-gradient(to_left,var(--background)_var(--fade-stop),transparent),_linear-gradient(to_right,var(--background)_var(--fade-stop),transparent),_linear-gradient(black,black)]",
        "[mask-composite:exclude]",
        "z-30",
        "dark:bg-[linear-gradient(to_right,var(--color-dark),var(--color-dark)_50%,transparent_0,transparent)]",
        className
      )}></div>
  );
};

const GridLineVertical = ({
  className,
  offset
}) => {
  return (
    <div
      style={
        {
          "--background": "#ffffff",
          "--color": "rgba(0, 0, 0, 0.2)",
          "--height": "5px",
          "--width": "1px",
          "--fade-stop": "90%",

          //-100px if you want to keep the line inside
          "--offset": offset || "150px",

          "--color-dark": "rgba(255, 255, 255, 0.2)",
          maskComposite: "exclude"
        }
      }
      className={cn(
        "absolute top-[calc(var(--offset)/2*-1)] h-[calc(100%+var(--offset))] w-[var(--width)]",
        "bg-[linear-gradient(to_bottom,var(--color),var(--color)_50%,transparent_0,transparent)]",
        "[background-size:var(--width)_var(--height)]",
        "[mask:linear-gradient(to_top,var(--background)_var(--fade-stop),transparent),_linear-gradient(to_bottom,var(--background)_var(--fade-stop),transparent),_linear-gradient(black,black)]",
        "[mask-composite:exclude]",
        "z-30",
        "dark:bg-[linear-gradient(to_bottom,var(--color-dark),var(--color-dark)_50%,transparent_0,transparent)]",
        className
      )}></div>
  );
};
