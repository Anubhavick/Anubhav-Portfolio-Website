import { FloatingDock } from "./FloatingDock";
import { 
  IconHome, 
  IconUser, 
  IconCode, 
  IconBriefcase, 
  IconTimeline, 
  IconMail,
  IconBrandGithub
} from "@tabler/icons-react";

const Navbar = () => {
  const navItems = [
    {
      title: "Home",
      icon: (
        <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#hero",
    },
    {
      title: "About",
      icon: (
        <IconUser className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#about",
    },
    {
      title: "Skills",
      icon: (
        <IconCode className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#skills",
    },
    {
      title: "Projects",
      icon: (
        <IconBriefcase className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#projects",
    },
    {
      title: "Timeline",
      icon: (
        <IconTimeline className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#timeline",
    },
    {
      title: "Contact",
      icon: (
        <IconMail className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#contact",
    },
    {
      title: "GitHub",
      icon: (
        <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://github.com/Anubhavick",
    },
  ];

  return (
    <>
      {/* Floating Dock Navigation */}
      <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50">
        <FloatingDock
          items={navItems}
          desktopClassName="bg-white/80 dark:bg-neutral-800/80 backdrop-blur-sm border border-gray-200/50 dark:border-neutral-700/50 shadow-xl"
          mobileClassName="right-6 bottom-6"
        />
      </div>
    </>
  );
};

export default Navbar;
