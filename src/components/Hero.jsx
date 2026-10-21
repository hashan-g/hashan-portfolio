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
      <div className="absolute top-1/3 right-10 w-[400px] h-[300px] bg-accent-indigo/10 blur-[130px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Main Hero Content (7 cols - left) */}
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
            <div className="flex flex-wrap items-center gap-3.5 mb-10 w-full sm:w-auto">
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

            {/* Quick Credentials / Domains */}
            <div className="grid grid-cols-2 sm:grid-cols-2 gap-2.5 w-full max-w-xl">
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

          {/* Premium Profile Photo Card (5 cols - right on desktop, below on mobile) */}
          <div className="lg:col-span-5 flex justify-center order-2 w-full">
            <div className="relative w-full max-w-sm sm:max-w-md lg:max-w-[390px] xl:max-w-[420px] group">
              
              {/* Soft Ambient Glow Effect matching accent color */}
              <div className="absolute -inset-1 bg-gradient-to-r from-accent-cyan/20 via-accent-indigo/20 to-purple-500/20 rounded-3xl blur-xl opacity-70 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none -z-10" />

              {/* Profile Card Shell */}
              <div className="relative rounded-3xl bg-dark-card/90 border border-white/10 p-3 sm:p-4 backdrop-blur-md shadow-2xl shadow-black/80 transition-all duration-300 group-hover:border-accent-cyan/30">
                
                {/* Photo Framing Container */}
                <div className="relative rounded-2xl overflow-hidden bg-slate-900 border border-white/5">
                  <img
                    src="/hashan-profile.jpg"
                    alt="Hashan Ganegoda - Software Developer and Data & AI Enthusiast"
                    fetchPriority="high"
                    width="768"
                    height="1024"
                    className="w-full aspect-[3/4] object-cover object-[center_16%] transition-transform duration-500 group-hover:scale-[1.02]"
                  />

                  {/* Gradient shadow overlay at the bottom for smooth transition to card metadata */}
                  <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#0a0f1d] via-[#0a0f1d]/40 to-transparent pointer-events-none" />

                  {/* Top Floating Badge: Open to Opportunities */}
                  <div className="absolute top-3 left-3 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-dark-bg/85 backdrop-blur-md border border-white/10 text-[11px] font-mono text-emerald-400 shadow-md">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                    <span>Open to Opportunities</span>
                  </div>

                  {/* Bottom Internal Badge: Positioning */}
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs font-mono">
                    <span className="px-2.5 py-1 rounded-lg bg-dark-bg/80 backdrop-blur-md border border-white/10 text-slate-200">
                      Software Developer
                    </span>
                    <span className="px-2.5 py-1 rounded-lg bg-dark-bg/80 backdrop-blur-md border border-white/10 text-accent-cyan">
                      Data & AI
                    </span>
                  </div>
                </div>

                {/* Sub-Card Metadata & Identity Footer */}
                <div className="mt-3 px-2 py-1.5 flex items-center justify-between">
                  <div className="flex flex-col">
                    <span className="text-sm font-bold text-white tracking-tight">
                      {profileData.name}
                    </span>
                    <span className="text-[11px] font-mono text-slate-400">
                      BSc (Ruhuna) • BIT (UCSC)
                    </span>
                  </div>

                  <a
                    href="#about"
                    className="flex items-center gap-1 text-xs font-mono text-accent-cyan hover:underline transition-all"
                  >
                    <span>Profile Info</span>
                    <span className="text-[10px]">&rarr;</span>
                  </a>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
