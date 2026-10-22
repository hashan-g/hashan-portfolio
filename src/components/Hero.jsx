import React from 'react';
import { ArrowRight, Download, Terminal, Code2, Brain, Smartphone } from 'lucide-react';
import { Linkedin, Github } from './icons/BrandIcons';
import { profileData } from '../data/profile';

export default function Hero() {
  const highlightPills = [
    { label: "BSc in Physical Science", icon: Terminal, color: "text-accent-cyan" },
    { label: "Bachelor of IT (BIT - UCSC)", icon: Code2, color: "text-accent-indigo" },
    { label: "AI & LLM Integration (Groq/LLaMA)", icon: Brain, color: "text-purple-400" },
    { label: "Flutter Mobile Engineering", icon: Smartphone, color: "text-sky-400" },
  ];

  const renderHighlightPills = (extraClass = "") => (
    <div className={`grid grid-cols-2 gap-2 w-full ${extraClass}`}>
      {highlightPills.map((pill, idx) => {
        const Icon = pill.icon;
        return (
          <div
            key={idx}
            className="flex items-center gap-2 px-2.5 sm:px-3 py-1.5 rounded-lg bg-dark-card/60 border border-white/5 text-xs text-slate-300"
          >
            <Icon className={`w-3.5 h-3.5 ${pill.color} shrink-0`} />
            <span className="truncate">{pill.label}</span>
          </div>
        );
      })}
    </div>
  );

  return (
    <section id="hero" className="relative pt-24 pb-12 sm:pt-28 sm:pb-16 lg:py-20 flex items-center overflow-hidden">
      {/* Background Subtle Gradient Blobs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-accent-cyan/10 blur-[130px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 w-[380px] h-[280px] bg-accent-indigo/10 blur-[140px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 xl:gap-16 items-center">
          
          {/* Main Hero Content (Left Column: ≈ 58%) */}
          <div className="lg:col-span-7 flex flex-col items-start order-1">
            
            {/* Status Beacon */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-cyan/10 border border-accent-cyan/20 text-accent-cyan text-xs font-mono font-medium mb-4">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-cyan opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-cyan"></span>
              </span>
              <span>Available for Junior Developer &amp; Data/AI Roles</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.15] mb-2">
              Hi, I'm{' '}
              <span className="text-gradient">
                {profileData.name}
              </span>
            </h1>

            {/* Concise Professional Headline */}
            <h2 className="text-lg sm:text-xl lg:text-2xl font-semibold text-slate-200 mb-4 flex items-center gap-2">
              <span className="text-accent-cyan font-mono">&gt;</span>
              <span>{profileData.role}</span>
            </h2>

            {/* Short Introduction */}
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-6 max-w-2xl">
              {profileData.shortBio}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 mb-6 sm:mb-8 w-full sm:w-auto">
              {/* Primary CTA: View Projects */}
              <a
                href="#featured-project"
                className="flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold bg-accent-cyan text-dark-bg hover:bg-sky-300 transition-all shadow-md shadow-accent-cyan/15 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-cyan group"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              {/* Secondary CTA: Download CV */}
              <a
                href={profileData.links.resume}
                download="Hashan_Ganegoda_CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold bg-white/5 hover:bg-white/10 text-white border border-white/10 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-cyan"
              >
                <Download className="w-4 h-4 text-accent-cyan" />
                <span>Download CV</span>
              </a>

              {/* LinkedIn Button in Hero */}
              <a
                href={profileData.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Hashan's LinkedIn Profile"
                className="flex items-center justify-center gap-2 px-3.5 py-2.5 rounded-xl text-xs sm:text-sm font-medium bg-[#0A66C2]/15 text-[#70b5f9] hover:bg-[#0A66C2]/25 border border-[#0A66C2]/30 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-cyan"
              >
                <Linkedin className="w-4 h-4 text-[#70b5f9]" />
                <span>LinkedIn</span>
              </a>

              {/* GitHub Button in Hero */}
              <a
                href={profileData.links.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Hashan's GitHub Profile"
                className="flex items-center justify-center gap-2 px-3.5 py-2.5 rounded-xl text-xs sm:text-sm font-medium bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white border border-white/10 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-cyan"
              >
                <Github className="w-4 h-4" />
                <span>GitHub</span>
              </a>
            </div>

            {/* Desktop Credentials / Domains */}
            {renderHighlightPills("hidden lg:grid max-w-xl")}

          </div>

          {/* Premium Professional Profile Photo Visual (Right Column: ≈ 42%) */}
          <div className="lg:col-span-5 flex flex-col items-center lg:items-end justify-center order-2 w-full">
            <div className="relative w-full max-w-xs sm:max-w-sm lg:max-w-[380px] xl:max-w-[420px] group">
              
              {/* Soft Ambient Glow Effect matching website accent */}
              <div className="absolute -inset-1.5 bg-gradient-to-tr from-accent-cyan/15 via-accent-indigo/15 to-transparent rounded-3xl blur-2xl opacity-60 group-hover:opacity-90 transition-opacity duration-500 pointer-events-none -z-10" />

              {/* Clean Profile Card Framing */}
              <div className="relative rounded-2xl sm:rounded-3xl bg-dark-card/60 border border-white/10 p-2 sm:p-2.5 backdrop-blur-md shadow-2xl shadow-black/80 transition-all duration-300 group-hover:border-accent-cyan/30">
                
                {/* Photo Container - Clean, Uncluttered, Pure Natural Visual */}
                <div className="relative rounded-xl sm:rounded-2xl overflow-hidden bg-slate-900 border border-white/5">
                  <img
                    src="/hashan-profile.jpg"
                    alt="Hashan Ganegoda - Software Developer and Data & AI Enthusiast"
                    fetchPriority="high"
                    width="768"
                    height="1024"
                    className="w-full aspect-[3/4] object-cover object-[center_15%] transition-transform duration-700 ease-out group-hover:scale-[1.015]"
                  />
                </div>

                {/* Minimal Identity Information Directly Below Photo */}
                <div className="mt-3 px-1.5 pb-1 text-center sm:text-left">
                  <h3 className="text-base sm:text-lg font-bold text-white tracking-tight">
                    {profileData.name}
                  </h3>
                  <div className="mt-0.5 space-y-0.5">
                    <div className="text-xs font-semibold text-accent-cyan">
                      Software Developer
                    </div>
                    <div className="text-xs font-mono text-slate-400">
                      Data &amp; AI Enthusiast
                    </div>
                  </div>
                </div>

              </div>

            </div>

            {/* Mobile Credentials / Domains (Stacked below photo & minimal label on mobile) */}
            {renderHighlightPills("grid lg:hidden max-w-xs sm:max-w-sm mt-6")}

          </div>

        </div>
      </div>
    </section>
  );
}
