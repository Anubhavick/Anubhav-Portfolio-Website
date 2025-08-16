import { HeroSection } from '../components/HeroSection';
import { AboutSection } from '../components/AboutSection';
import { SkillsSection } from '../components/SkillsSection';
import { ProjectsSection } from '../components/ProjectsSection';
import { TimelineSection } from '../components/TimelineSection';
import { ContactSection } from '../components/ContactSection';

const Home = () => {
  return (
    <div>
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <TimelineSection />
      <ContactSection />
    </div>
  );
};

export default Home;
