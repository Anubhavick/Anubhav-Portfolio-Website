import { ThreeDMarquee } from './3d-marque';
import { FollowerPointerCard } from './following-pointer';

const HeroSection = () => {
  // Create expanded tech skills array for better coverage
  const techSkills = [
    "React", "Node.js", "TypeScript", "MongoDB", "Express.js", "Next.js", 
    "Tailwind CSS", "JavaScript", "REST APIs", "GraphQL", "PostgreSQL", 
    "Docker", "AWS", "Git", "Redux", "Prisma", "HTML5", "CSS3", 
    "Python", "MySQL", "Firebase", "Vercel", "Netlify", "GitHub", 
    "VS Code", "Postman", "Figma", "Linux", "Nginx", "Socket.io",
    "Stripe", "JWT", "OAuth", "Webpack", "Babel", "ESLint"
  ];

  return (
    <FollowerPointerCard
      title="Hello"
      className="relative flex flex-col items-center justify-center min-h-screen pb-10 text-center px-4 overflow-hidden bg-white dark:bg-neutral-900 z-20"
    >
      <section
        id="hero"
      >
      {/* 3D Marquee Background */}
      <div className="absolute inset-0 w-full h-full opacity-20 dark:opacity-30">
        <ThreeDMarquee 
          images={techSkills} 
          className="h-full"
        />
      </div>

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
    </FollowerPointerCard>
  );
};

export default HeroSection;
