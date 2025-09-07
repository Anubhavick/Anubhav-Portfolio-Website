import { HeroParallax } from './ui/hero-parallax';
import { FollowerPointerCard } from './ui/following-pointer';

// local products using images from /public
export const heroProducts = [
  { title: 'Project 1', link: '#projects', thumbnail: '/project1.png' },
  { title: 'Project 2', link: '#projects', thumbnail: '/project2.png' },
  { title: 'Project 3', link: '#projects', thumbnail: '/project3.png' },
  { title: 'Project 4', link: '#projects', thumbnail: '/project4.png' },
  { title: 'Project 5', link: '#projects', thumbnail: '/project5.png' },
  { title: 'Project 6', link: '#projects', thumbnail: '/project6.png' },
  { title: 'Project 7', link: '#projects', thumbnail: '/project7.png' },
  { title: 'Project 8', link: '#projects', thumbnail: '/project8.png' },
  { title: 'Project 9', link: '#projects', thumbnail: '/project9.png' },
  { title: 'Project 10', link: '#projects', thumbnail: '/project10.png' },
  // add a couple more entries by reusing images so parallax rows are populated
  { title: 'Project 11', link: '#projects', thumbnail: '/project1.png' },
  { title: 'Project 12', link: '#projects', thumbnail: '/project2.png' },
];

const HeroSection = () => {
  

  return (
    <FollowerPointerCard    
      title="Hello"
      className="relative flex flex-col items-center justify-center min-h-screen pb-10 text-center px-4 overflow-hidden bg-white dark:bg-neutral-900 z-20"
    >
      <section
        id="hero"
      >
      {/* Parallax Background (uses local project images) */}
      <div className="absolute inset-0 w-full h-full opacity-20 dark:opacity-30 pointer-events-none">
        <HeroParallax products={heroProducts} backgroundMode={true} />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-6xl mx-auto">
        <div className="relative py-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-deep-cove dark:text-bright-turquoise">
            Welcome to My Portfolio
          </h2>
          <p className="text-lg md:text-xl mb-10 text-neutral-700 dark:text-neutral-200 max-w-2xl mx-auto">
            Discover my journey as a Full-Stack Developer and explore me through my projects, and start your journey today with me to build your dream project
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
    </FollowerPointerCard>
  );
};

export default HeroSection;
