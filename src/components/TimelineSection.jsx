"use client";
import { useScroll, useTransform, motion } from "motion/react";
import React, { useEffect, useRef, useState } from "react";

export const Timeline = ({
  data
}) => {
  const ref = useRef(null);
  const containerRef = useRef(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div
      className="w-full bg-white dark:bg-neutral-950 font-sans md:px-10"
      ref={containerRef}>
      <div className="max-w-7xl mx-auto py-20 px-4 md:px-8 lg:px-10">
        <h2 className="text-lg md:text-4xl mb-4 text-black dark:text-white max-w-4xl">
          Journey Timeline
        </h2>
        <p
          className="text-neutral-700 dark:text-neutral-300 text-sm md:text-base max-w-sm">
          My professional journey and educational milestones that shaped me as a developer.
        </p>
      </div>
      <div ref={ref} className="relative max-w-7xl mx-auto pb-20">
        {data.map((item, index) => (
          <div key={index} className="flex justify-start pt-10 md:pt-40 md:gap-10">
            <div
              className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
              <div
                className="h-10 absolute left-3 md:left-3 w-10 rounded-full bg-white dark:bg-black flex items-center justify-center">
                <div
                  className="h-4 w-4 rounded-full bg-neutral-200 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 p-2" />
              </div>
              <h3
                className="hidden md:block text-xl md:pl-20 md:text-5xl font-bold text-neutral-500 dark:text-neutral-500 ">
                {item.title}
              </h3>
            </div>

            <div className="relative pl-20 pr-4 md:pl-4 w-full">
              <h3
                className="md:hidden block text-2xl mb-4 text-left font-bold text-neutral-500 dark:text-neutral-500">
                {item.title}
              </h3>
              {item.content}
            </div>
          </div>
        ))}
        <div
          style={{
            height: height + "px",
          }}
          className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-200 dark:via-neutral-700 to-transparent to-[99%]  [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] ">
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0  w-[2px] bg-gradient-to-t from-purple-500 via-blue-500 to-transparent from-[0%] via-[10%] rounded-full" />
        </div>
      </div>
    </div>
  );
};

const TimelineSection = () => {
  // Timeline data adapted for the new component structure
  const timelineData = [
    {
      title: "2025",
      content: (
        <div>
          <h4 className="text-2xl font-bold text-neutral-800 dark:text-neutral-100 mb-2">
            Backend Developer
          </h4>
          <p className="text-lg text-blue-600 dark:text-blue-400 mb-4 font-medium">
            Central Herlath innovation MRIIRS
          </p>
          <p className="text-neutral-700 dark:text-neutral-300 text-sm md:text-base mb-4">
            Leading backend development for enterprise applications, mentoring junior developers, and implementing best practices for code quality and performance.
          </p>
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-xs">
              React
            </span>
            <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-xs">
              TypeScript
            </span>
            <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-xs">
              Team Leadership
            </span>
          </div>
        </div>
      ),
    },
    {
      title: "2023-2025",
      content: (
        <div>
          <h4 className="text-2xl font-bold text-neutral-800 dark:text-neutral-100 mb-2">
            Full Stack Developer
          </h4>
          <p className="text-lg text-green-600 dark:text-green-400 mb-4 font-medium">
            Digital Solutions Ltd.
          </p>
          <p className="text-neutral-700 dark:text-neutral-300 text-sm md:text-base mb-4">
            Developed and maintained full-stack web applications using React, Node.js, and MongoDB. Collaborated with UX/UI designers to implement responsive and accessible interfaces.
          </p>
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full text-xs">
              React
            </span>
            <span className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full text-xs">
              Node.js
            </span>
            <span className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full text-xs">
              MongoDB
            </span>
          </div>
        </div>
      ),
    },
    {
      title: "2023",
      content: (
        <div>
          <h4 className="text-2xl font-bold text-neutral-800 dark:text-neutral-100 mb-2">
            Advanced Backend Development
          </h4>
          <p className="text-lg text-purple-600 dark:text-purple-400 mb-4 font-medium">
            Self-Directed Learning & Certification
          </p>
          <p className="text-neutral-700 dark:text-neutral-300 text-sm md:text-base mb-4">
            Mastered advanced backend concepts including microservices, authentication systems, and API integration. Gained expertise in Google Maps API, payment gateways, and cloud deployment strategies.
          </p>
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded-full text-xs">
              Microservices
            </span>
            <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded-full text-xs">
              Authentication
            </span>
            <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded-full text-xs">
              Google Maps API
            </span>
            <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded-full text-xs">
              Cloud Deployment
            </span>
          </div>
        </div>
      ),
    },
    {
      title: "2021-2023",
      content: (
        <div>
          <h4 className="text-2xl font-bold text-neutral-800 dark:text-neutral-100 mb-2">
            MERN Stack Learning Journey
          </h4>
          <p className="text-lg text-orange-600 dark:text-orange-400 mb-4 font-medium">
            Intensive Skill Development
          </p>
          <p className="text-neutral-700 dark:text-neutral-300 text-sm md:text-base mb-4">
            Transitioned from frontend focus to full-stack development. Built multiple projects using MongoDB, Express.js, React, and Node.js. Developed expertise in backend architecture and RESTful API design.
          </p>
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1 bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200 rounded-full text-xs">
              JavaScript
            </span>
            <span className="px-3 py-1 bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200 rounded-full text-xs">
              REST APIs
            </span>
            <span className="px-3 py-1 bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200 rounded-full text-xs">
              Project-Based Learning
            </span>
          </div>
        </div>
      ),
    },
    {
      title: "2021",
      content: (
        <div>
          <h4 className="text-2xl font-bold text-neutral-800 dark:text-neutral-100 mb-2">
            Computer Science Foundation
          </h4>
          <p className="text-lg text-red-600 dark:text-red-400 mb-4 font-medium">
            Academic Excellence & Programming Fundamentals
          </p>
          <p className="text-neutral-700 dark:text-neutral-300 text-sm md:text-base mb-4">
            Graduated with strong foundation in computer science principles, algorithms, and data structures. Completed capstone project focusing on web application development and database management.
          </p>
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1 bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200 rounded-full text-xs">
              Algorithms
            </span>
            <span className="px-3 py-1 bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200 rounded-full text-xs">
              Data Structures
            </span>
            <span className="px-3 py-1 bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200 rounded-full text-xs">
              Programming Fundamentals
            </span>
            <span className="px-3 py-1 bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200 rounded-full text-xs">
              Database Management
            </span>
          </div>
        </div>
      ),
    },
  ];

  return (
    <section id="timeline" className="bg-white dark:bg-neutral-950">
      <Timeline data={timelineData} />
    </section>
  );
};

export default TimelineSection;
