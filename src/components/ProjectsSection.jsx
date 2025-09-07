import { PinContainer } from './3d-pin';
import { BackgroundBeamsWithCollision } from './background-beams-with-collision';
import { PointerHighlight } from './ui/pointer-highlight';
import { useState, useEffect } from 'react';

const ProjectsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const projectsPerPage = 3; // Show 3 projects at a time
  // Sample projects data - replace with your actual GitHub projects
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A fully responsive e-commerce platform built with React, Node.js, and MongoDB. Features include user authentication, product filtering, cart functionality, and payment integration.",
      image: "https://via.placeholder.com/600x400?text=E-Commerce+Project",
      tags: ["React", "Node.js", "MongoDB", "Express"],
      liveLink: "#",
      codeLink: "#",
      color: "#FF6B6B"
    },
    {
      id: 2,
      title: "Portfolio Website",
      description: "A modern and responsive portfolio website showcasing my projects and skills. Built with React and Tailwind CSS with smooth animations and dark mode support.",
      image: "https://via.placeholder.com/600x400?text=Portfolio+Website",
      tags: ["React", "Tailwind CSS", "Responsive Design"],
      liveLink: "#",
      codeLink: "#",
      color: "#4ECDC4"
    },
    {
      id: 3,
      title: "Task Management App",
      description: "A productivity application for managing tasks and projects. Features include drag-and-drop interfaces, task categorization, deadline reminders, and team collaboration tools.",
      image: "https://via.placeholder.com/600x400?text=Task+Management+App",
      tags: ["React", "Firebase", "Material UI"],
      liveLink: "#",
      codeLink: "#",
      color: "#45B7D1"
    },
    {
      id: 4,
      title: "Algorithm Visualizer",
      description: "An interactive tool for visualizing various algorithms including sorting, searching, and graph traversals. Helps users understand complex algorithms through visual representation.",
      image: "https://via.placeholder.com/600x400?text=Algorithm+Visualizer",
      tags: ["JavaScript", "Canvas API", "Algorithms", "Data Structures"],
      liveLink: "#",
      codeLink: "#",
      color: "#96CEB4"
    },
    {
      id: 5,
      title: "Weather Dashboard",
      description: "A beautiful weather application with forecasts, interactive maps, and location-based weather data. Built with modern APIs and responsive design.",
      image: "https://via.placeholder.com/600x400?text=Weather+Dashboard",
      tags: ["JavaScript", "Weather API", "Chart.js"],
      liveLink: "#",
      codeLink: "#",
      color: "#FFEAA7"
    },
    {
      id: 6,
      title: "Chat Application",
      description: "Real-time chat application with multiple rooms, file sharing, and user authentication. Built with Socket.io and modern web technologies.",
      image: "https://via.placeholder.com/600x400?text=Chat+App",
      tags: ["Socket.io", "Node.js", "React"],
      liveLink: "#",
      codeLink: "#",
      color: "#DDA0DD"
    }
  ];

  // Navigation functions
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      (prevIndex + projectsPerPage) >= projects.length ? 0 : prevIndex + projectsPerPage
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? Math.max(0, projects.length - projectsPerPage) : Math.max(0, prevIndex - projectsPerPage)
    );
  };

  // Get current projects to display
  const currentProjects = projects.slice(currentIndex, currentIndex + projectsPerPage);

  // Auto-slide functionality
  useEffect(() => {
    if (isPaused) return; // Don't auto-slide when paused
    
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        (prevIndex + projectsPerPage) >= projects.length ? 0 : prevIndex + projectsPerPage
      );
    }, 4000); // Change slide every 4 seconds

    return () => clearInterval(interval);
  }, [projects.length, projectsPerPage, isPaused]);

  // Create project cards for 3D pins
  // Create project cards for 3D pins
  const createProjectCard = (project) => (
    <div className="w-72 h-80 bg-gradient-to-br from-violet-500 to-purple-500 rounded-lg overflow-hidden flex flex-col">
      {/* Image Area */}
      <div className="h-40 bg-gradient-to-br from-blue-400 to-purple-600 relative overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title}
          className="w-full h-full object-cover opacity-90"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
      </div>
      
      {/* Content Area */}
      <div className="p-4 flex flex-col justify-between flex-1">
        <div>
          <h3 className="text-lg font-bold text-white mb-2">
            {project.title}
          </h3>
          <p className="text-white/80 text-sm mb-3 line-clamp-2">
            {project.description}
          </p>
        </div>
        <div>
          <div className="flex flex-wrap gap-1 mb-3">
            {project.tags.slice(0, 3).map((tag, index) => (
              <span key={index} className="px-2 py-1 bg-white/20 text-white rounded-full text-xs">
                {tag}
              </span>
            ))}
          </div>
          <div className="flex gap-2">
            <a 
              href={project.liveLink} 
              className="px-3 py-2 bg-white text-purple-600 rounded-lg text-sm font-medium hover:bg-white/90 transition-colors flex-1 text-center"
              onClick={(e) => e.stopPropagation()}
            >
              Live Demo
            </a>
            <a 
              href={project.codeLink} 
              className="px-3 py-2 bg-white/20 text-white rounded-lg text-sm font-medium hover:bg-white/30 transition-colors flex-1 text-center"
              onClick={(e) => e.stopPropagation()}
            >
              View Code
            </a>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <BackgroundBeamsWithCollision className="py-20 bg-white dark:bg-neutral-900">
      <section id="projects" className="relative z-10 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 text-deep-cove dark:text-white relative z-20">
            Projects
          </h2>
          
          <div className="text-center mb-6 max-w-4xl mx-auto relative z-20">
            <p className="text-gray-600 dark:text-gray-300 text-base leading-relaxed">
              Every project here represents a{' '}
              <PointerHighlight 
                containerClassName="inline-block"
                rectangleClassName="border-bright-turquoise"
                pointerClassName="text-bright-turquoise"
                delay={0}
              >
                <span className="font-bold text-bright-turquoise px-1">step forward</span>
              </PointerHighlight>
              {' '}in my growth as a developer. From small{' '}
              <PointerHighlight 
                containerClassName="inline-block"
                rectangleClassName="border-purple-500"
                pointerClassName="text-purple-500"
                delay={1.5}
              >
                <span className="font-bold text-purple-500 px-1">creative experiments</span>
              </PointerHighlight>
              {' '}to full-scale applications, I've explored new{' '}
              <PointerHighlight 
                containerClassName="inline-block"
                rectangleClassName="border-green-500"
                pointerClassName="text-green-500"
                delay={3}
              >
                <span className="font-bold text-green-500 px-1">technologies</span>
              </PointerHighlight>
              , {' '}
              <PointerHighlight 
                containerClassName="inline-block"
                rectangleClassName="border-blue-500"
                pointerClassName="text-blue-500"
                delay={4.5}
              >
                <span className="font-bold text-blue-500 px-1">solved challenging problems, and built solutions that reflect both technical skill and curiosity.</span>
              </PointerHighlight>
            </p>
          </div>

          {/* Slider Container */}
          <div 
            className="relative"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {/* Simple grid without complex sliding */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 justify-items-center">
              {currentProjects.map((project) => (
                <PinContainer
                  key={project.id}
                  title={project.title}
                  href={project.liveLink}
                  className="w-72 h-80"
                >
                  {createProjectCard(project)}
                </PinContainer>
              ))}
            </div>

            {/* Dots Indicator */}
            <div className="flex justify-center mt-12 gap-3 relative z-50">
              {Array.from({ length: Math.ceil(projects.length / projectsPerPage) }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index * projectsPerPage)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 hover:scale-125 border ${
                    Math.floor(currentIndex / projectsPerPage) === index
                      ? 'bg-bright-turquoise border-bright-turquoise shadow-lg shadow-bright-turquoise/50 scale-110'
                      : 'bg-gray-300 dark:bg-gray-600 border-gray-400 dark:border-gray-500 hover:border-bright-turquoise hover:bg-bright-turquoise/30'
                  }`}
                  style={{ 
                    transform: Math.floor(currentIndex / projectsPerPage) === index ? 'scale(1.1)' : 'scale(1)' 
                  }}
                  aria-label={`Go to slide ${index + 1}`}
                >
                  <span className="sr-only">Slide {index + 1}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>
    </BackgroundBeamsWithCollision>
  );
};

export default ProjectsSection;
