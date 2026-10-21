import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import FeaturedProject from './components/FeaturedProject';
import Projects from './components/Projects';
import Education from './components/Education';
import Achievements from './components/Achievements';
import GitHub from './components/GitHub';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-dark-bg text-slate-200 flex flex-col font-sans selection:bg-accent-cyan/20 selection:text-accent-cyan">
      {/* Fixed Navigation Bar */}
      <Navbar />

      {/* Main Content Area */}
      <main className="flex-grow">
        {/* 1. Hero Section */}
        <Hero />

        {/* 2. About Me Section */}
        <About />

        {/* 3. Technical Skills Section */}
        <Skills />

        {/* 4. Featured Project — SpendWise Case Study */}
        <FeaturedProject />

        {/* 5. Other Projects (VoyaGo & Logistics Platform) */}
        <Projects />

        {/* 6. Education Timeline / Card Section */}
        <Education />

        {/* 7. Achievements (CodeRally Hackathon 2nd Place) */}
        <Achievements />

        {/* 8. Dedicated GitHub Showcase Section */}
        <GitHub />

        {/* 9. Contact Section */}
        <Contact />
      </main>

      {/* 10. Footer */}
      <Footer />
    </div>
  );
}
