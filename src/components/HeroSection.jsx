import Dither from './Dither';

const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative flex flex-col items-center justify-center min-h-screen pb-10 text-center px-4 overflow-hidden bg-white dark:bg-neutral-900 z-20"
    >
      {/* Subtle Dithered Wave Background */}
      <div className="absolute inset-0 w-full h-full opacity-30">
        <Dither
          waveColor={[0.1, 0.4, 0.6]} // More subtle, muted colors
          disableAnimation={false}
          enableMouseInteraction={true}
          mouseRadius={0.2}
          colorNum={8} // More colors for smoother gradients
          waveAmplitude={0.15} // Gentler waves
          waveFrequency={1.5} // Larger, smoother patterns
          waveSpeed={0.02} // Slower movement
          pixelSize={0.8} // Much finer pixelation
        />
      </div>

      {/* Dark gradient overlay to hide MacBook content */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/80 via-white/90 to-white/95 dark:from-neutral-900/80 dark:via-neutral-900/90 dark:to-neutral-900/95"></div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-6xl mx-auto">
        <div className="relative py-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-deep-cove dark:text-bright-turquoise">
            Welcome to My Portfolio
          </h2>
          <p className="text-lg md:text-xl mb-10 text-neutral-700 dark:text-neutral-200 max-w-2xl mx-auto">
            Discover my journey as a Full-Stack Developer and explore the projects that showcase my passion for creating innovative digital solutions.
          </p>
          <a
            href="#projects"
            className="px-8 py-4 bg-bright-turquoise text-deep-cove rounded-full shadow-lg hover:bg-froly hover:text-white transition-all duration-300 font-semibold inline-block"
          >
            Explore My Work
          </a>
        </div>
      </div>
      
      {/* Scroll down indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-10">
        <svg className="w-6 h-6 text-gray-600 dark:text-gray-300" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
