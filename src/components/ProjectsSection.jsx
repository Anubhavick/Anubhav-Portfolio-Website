import Folder from './Folder';

const ProjectsSection = () => {
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

  // Create project cards for folders
  const createProjectCard = (project) => (
    <div className="w-full h-full bg-white rounded-lg p-1 shadow-sm flex flex-col justify-center items-center text-center overflow-hidden">
      <div className="w-full">
        <h4 className="font-semibold text-gray-800 text-[8px] leading-tight mb-1 truncate">
          {project.title}
        </h4>
        <div className="flex flex-wrap justify-center gap-0.5 mb-1">
          {project.tags.slice(0, 2).map((tag, index) => (
            <span key={index} className="px-1 py-0.5 bg-gray-100 text-gray-600 rounded text-[6px] whitespace-nowrap">
              {tag}
            </span>
          ))}
        </div>
        <div className="flex justify-center gap-2 mt-1">
          <a 
            href={project.liveLink} 
            className="text-blue-600 hover:text-blue-800 text-[6px] font-medium"
            onClick={(e) => e.stopPropagation()}
          >
            Live
          </a>
          <a 
            href={project.codeLink} 
            className="text-gray-600 hover:text-gray-800 text-[6px] font-medium"
            onClick={(e) => e.stopPropagation()}
          >
            Code
          </a>
        </div>
      </div>
    </div>
  );

  return (
    <section id="projects" className="py-20 bg-white dark:bg-neutral-800 px-4">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-deep-cove dark:text-bright-turquoise">
          Projects
        </h2>
        
        <p className="text-center text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto">
          Click on the folders below to explore my projects. Each folder contains an interactive project card
          that you can hover over and explore.
        </p>

        {/* Folder Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 justify-items-center">
          {projects.map((project, index) => (
            <div key={index} className="flex flex-col items-center">
              <Folder
                color={project.color}
                size={1.5}
                items={[createProjectCard(project)]}
                className="mb-4"
              />
              <h3 className="text-lg font-semibold text-deep-cove dark:text-white">
                {project.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
