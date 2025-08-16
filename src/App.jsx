import { Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import MacbookScroll from "./components/MacbookScroll"
import HeroSection from "./components/HeroSection"
import AboutSection from "./components/AboutSection"
import SkillsSection from "./components/SkillsSection"
import ProjectsSection from "./components/ProjectsSection"
import TimelineSection from "./components/TimelineSection"
import ContactSection from "./components/ContactSection"

import './App.css'

function App() {
  return (
    <div className="dark bg-neutral-50 dark:bg-neutral-900 min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 pt-16 pb-24">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <MacbookScroll 
                  title={
                    <span>
                      Scroll to Explore My Portfolio <br />
                      Interactive Experience Awaits
                    </span>
                  }
                  showGradient={false}
                />
                <HeroSection />
                <AboutSection />
                <SkillsSection />
                <ProjectsSection />
                <TimelineSection />
                <ContactSection />
              </>
            }
          />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
