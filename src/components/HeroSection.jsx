import { ThreeDMarquee } from './3d-marque';
import { FollowerPointerCard } from './following-pointer';

const HeroSection = () => {
  // Image URLs for 3D marquee
  const images = [
    "https://assets.aceternity.com/cloudinary_bkp/3d-card.png",
    "https://assets.aceternity.com/animated-modal.png",
    "https://assets.aceternity.com/animated-testimonials.webp",
    "https://assets.aceternity.com/cloudinary_bkp/Tooltip_luwy44.png",
    "https://assets.aceternity.com/github-globe.png",
    "https://assets.aceternity.com/glare-card.png",
    "https://assets.aceternity.com/layout-grid.png",
    "https://assets.aceternity.com/flip-text.png",
    "https://assets.aceternity.com/hero-highlight.png",
    "https://assets.aceternity.com/carousel.webp",
    "https://assets.aceternity.com/placeholders-and-vanish-input.png",
    "https://assets.aceternity.com/shooting-stars-and-stars-background.png",
    "https://assets.aceternity.com/signup-form.png",
    "https://assets.aceternity.com/cloudinary_bkp/stars_sxle3d.png",
    "https://assets.aceternity.com/spotlight-new.webp",
    "https://assets.aceternity.com/cloudinary_bkp/Spotlight_ar5jpr.png",
    "https://assets.aceternity.com/cloudinary_bkp/Parallax_Scroll_pzlatw_anfkh7.png",
    "https://assets.aceternity.com/tabs.png",
    "https://assets.aceternity.com/cloudinary_bkp/Tracing_Beam_npujte.png",
    "https://assets.aceternity.com/cloudinary_bkp/typewriter-effect.png",
    "https://assets.aceternity.com/glowing-effect.webp",
    "https://assets.aceternity.com/hover-border-gradient.png",
    "https://assets.aceternity.com/cloudinary_bkp/Infinite_Moving_Cards_evhzur.png",
    "https://assets.aceternity.com/cloudinary_bkp/Lamp_hlq3ln.png",
    "https://assets.aceternity.com/macbook-scroll.png",
    "https://assets.aceternity.com/cloudinary_bkp/Meteors_fye3ys.png",
    "https://assets.aceternity.com/cloudinary_bkp/Moving_Border_yn78lv.png",
    "https://assets.aceternity.com/multi-step-loader.png",
    "https://assets.aceternity.com/vortex.png",
    "https://assets.aceternity.com/wobble-card.png",
    "https://assets.aceternity.com/world-map.webp"
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
          images={images} 
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
