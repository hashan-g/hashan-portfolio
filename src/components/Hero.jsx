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

  return (
    <section id="hero" className="relative min-h-[92vh] flex items-center pt-28 pb-16 overflow-hidden">
      {/* Background Subtle Gradient Blobs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[350px] bg-accent-cyan/10 blur-[120px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 w-[420px] h-[320px] bg-accent-indigo/10 blur-[130px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 xl:gap-16 items-center">
          
          {/* Main Hero Content (Left Column: ≈ 58%) */}
          <div className="lg:col-span-7 flex flex-col items-start order-1">
            
            {/* Status Beacon */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-accent-cyan/10 border border-accent-cyan/25 text-accent-cyan text-xs font-mono font-medium mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-cyan opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-cyan"></span>
              </span>
              <span>Available for Software Engineering & Data/AI Roles</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.15] mb-4">
              Hi, I'm{' '}
              <span className="text-gradient">
                {profileData.name}
              </span>
            </h1>

            {/* Professional Positioning Title */}
            <h2 className="text-xl sm:text-2xl font-semibold text-slate-200 mb-6 flex items-center gap-2">
              <span className="text-accent-cyan font-mono">&gt;</span>
              <span>{profileData.role}</span>
            </h2>

            {/* Required Positioning Statement */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-8 max-w-2xl bg-dark-card/40 p-4 rounded-2xl border border-white/5 backdrop-blur-sm">
              "{profileData.positioningStatement}"
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 mb-8 lg:mb-10 w-full sm:w-auto">
              {/* Primary CTA: View Featured Project */}
              <a
                href="#featured-project"
                className="flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold bg-accent-cyan text-dark-bg hover:bg-sky-300 transition-all shadow-lg shadow-accent-cyan/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-cyan group"
              >
                <span>View Featured Project (SpendWise)</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              {/* Secondary CTA: Download CV */}
              <a
                href={profileData.links.resume}
                download="Hashan_Ganegoda_CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold bg-white/5 hover:bg-white/10 text-white border border-white/15 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-cyan"
              >
                <Download className="w-4 h-4 text-accent-cyan" />
                <span>Download CV</span>
              </a>

              {/* LinkedIn Button in Hero */}
              <a
                href={profileData.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-sm font-medium bg-[#0A66C2]/15 text-[#70b5f9] hover:bg-[#0A66C2]/25 border border-[#0A66C2]/30 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-cyan"
              >
                <Linkedin className="w-4 h-4 text-[#70b5f9]" />
                <span>LinkedIn</span>
              </a>

              {/* GitHub Button in Hero */}
              <a
                href={profileData.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-sm font-medium bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white border border-white/10 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-cyan"
              >
                <Github className="w-4 h-4" />
                <span>GitHub</span>
              </a>
            </div>

            {/* Desktop Credentials / Domains (Visible on Desktop) */}
            <div className="hidden lg:grid grid-cols-2 gap-2.5 w-full max-w-xl">
              {highlightPills.map((pill, idx) => {
                const Icon = pill.icon;
                return (
                  <div
                    key={idx}
                    className="flex items-center gap-2.5 px-3 py-2 rounded-xl bg-dark-card/60 border border-white/5 text-xs text-slate-300"
                  >
                    <Icon className={`w-3.5 h-3.5 ${pill.color} shrink-0`} />
                    <span className="truncate">{pill.label}</span>
                  </div>
                );
              })}
            </div>

          </div>

          {/* Premium Professional Profile Photo Visual (Right Column: ≈ 42%) */}
          <div className="lg:col-span-5 flex flex-col items-center lg:items-end justify-center order-2 w-full">
            <div className="relative w-full max-w-sm sm:max-w-md lg:max-w-[430px] xl:max-w-[460px] group">
              
              {/* Soft Ambient Glow Effect matching website accent */}
              <div className="absolute -inset-2 bg-gradient-to-tr from-accent-cyan/15 via-accent-indigo/15 to-transparent rounded-3xl blur-2xl opacity-60 group-hover:opacity-90 transition-opacity duration-500 pointer-events-none -z-10" />

              {/* Clean Profile Card Framing */}
              <div className="relative rounded-2xl sm:rounded-3xl bg-dark-card/60 border border-white/10 p-2.5 sm:p-3 backdrop-blur-md shadow-2xl shadow-black/80 transition-all duration-300 group-hover:border-accent-cyan/30">
                
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
                <div className="mt-3.5 px-2 pb-1.5 text-center sm:text-left">
                  <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                    {profileData.name}
                  </h3>
                  <div className="mt-1 space-y-0.5">
                    <div className="text-xs sm:text-sm font-semibold text-accent-cyan">
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
            <div className="grid lg:hidden grid-cols-2 gap-2.5 w-full max-w-sm sm:max-w-md mt-8">
              {highlightPills.map((pill, idx) => {
                const Icon = pill.icon;
                return (
                  <div
                    key={idx}
                    className="flex items-center gap-2.5 px-3 py-2 rounded-xl bg-dark-card/60 border border-white/5 text-xs text-slate-300"
                  >
                    <Icon className={`w-3.5 h-3.5 ${pill.color} shrink-0`} />
                    <span className="truncate">{pill.label}</span>
                  </div>
                );
              })}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
