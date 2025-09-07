import { useEffect, useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { TextRevealCard, TextRevealCardTitle, TextRevealCardDescription } from './ui/TextRevealCard';
import { TextGenerateEffect } from './ui/TextGenerateEffect';

const AboutSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  return (
    <section ref={sectionRef} id="about" className="py-20 pb-32 bg-white dark:bg-neutral-900 px-4 mb-20">
      <div className="container mx-auto max-w-6xl">
        {/* Title with simple motion animation */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-deep-cove dark:text-bright-turquoise">
            About Me
          </h2>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left Column - Text Content */}
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-deep-cove dark:text-white">
                Personal Journey
              </h3>
              <TextGenerateEffect 
                words="I'm a curious builder with a passion for creating modern, user-friendly web applications. With roots in computer science and a love for design-driven development, I focus on building products that are simple, fast, and delightful. Every project is an opportunity to learn, grow, and craft something meaningful."
                className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed font-normal"
                filter={true}
                duration={0.8}
              />
            </div>
            
            <motion.div 
              className="flex flex-wrap gap-3"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <span className="px-4 py-2 bg-gray-100 dark:bg-neutral-700 text-gray-700 dark:text-bright-turquoise rounded-full text-sm font-medium">
                Problem Solver
              </span>
              <span className="px-4 py-2 bg-gray-100 dark:bg-neutral-700 text-gray-700 dark:text-bright-turquoise rounded-full text-sm font-medium">
                Creative Thinker
              </span>
              <span className="px-4 py-2 bg-gray-100 dark:bg-neutral-700 text-gray-700 dark:text-bright-turquoise rounded-full text-sm font-medium">
                Continuous Learner
              </span>
              <span className="px-4 py-2 bg-gray-100 dark:bg-neutral-700 text-gray-700 dark:text-bright-turquoise rounded-full text-sm font-medium">
                Detail-Oriented
              </span>
            </motion.div>
          </motion.div>
          
          {/* Right Column - Interactive Experience */}
          <motion.div 
            className="flex justify-center lg:justify-start"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <TextRevealCard
              text="Passion for Development"
              revealText="Building Digital Dreams"
              className="w-full max-w-[40rem]"
            >
              <TextRevealCardTitle>Interactive Experience</TextRevealCardTitle>
              <TextRevealCardDescription>
                Hover over the text below to reveal my true passion for creating amazing digital experiences.
              </TextRevealCardDescription>
            </TextRevealCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
