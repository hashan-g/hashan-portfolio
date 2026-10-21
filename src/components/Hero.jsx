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
          
          {/* Main Hero Content (7 cols) */}
          <div className="lg:col-span-7 flex flex-col items-start">
            
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

          {/* Interactive Profile & Terminal Card (5 cols) */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="w-full max-w-md bg-dark-card/90 rounded-2xl border border-white/10 shadow-2xl shadow-black/60 overflow-hidden relative backdrop-blur-md">
              {/* Terminal Window Header */}
              <div className="bg-[#0b101c] px-4 py-3 border-b border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block"></span>
                  <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block"></span>
                  <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block"></span>
                  <span className="ml-2 font-mono text-xs text-slate-400">developer-profile.ts</span>
                </div>
                <span className="text-[10px] font-mono uppercase tracking-wider text-accent-cyan/80 bg-accent-cyan/10 px-2 py-0.5 rounded">
                  Status: Ready
                </span>
              </div>

              {/* Code Snippet Body */}
              <div className="p-5 font-mono text-xs leading-relaxed space-y-3 bg-[#0a0f1d]/90 text-slate-300">
                <div>
                  <span className="text-purple-400">const</span>{' '}
                  <span className="text-sky-300">developer</span> = &#123;
                </div>
                <div className="pl-4 space-y-1">
                  <div>
                    <span className="text-slate-400">name:</span>{' '}
                    <span className="text-emerald-300">"{profileData.name}"</span>,
                  </div>
                  <div>
                    <span className="text-slate-400">degrees:</span> [
                    <div className="pl-4 text-emerald-300/90">
                      "BSc Physical Science (Ruhuna)",
                    </div>
                    <div className="pl-4 text-emerald-300/90">
                      "BIT (UCSC)"
                    </div>
                    ],
                  </div>
                  <div>
                    <span className="text-slate-400">interests:</span> [
                    <div className="pl-4 text-indigo-300">
                      "Software Development", "Data Analytics", "AI/LLM"
                    </div>
                    ],
                  </div>
                  <div>
                    <span className="text-slate-400">featuredWork:</span>{' '}
                    <span className="text-accent-cyan">"SpendWise (AI Finance Manager)"</span>,
                  </div>
                  <div>
                    <span className="text-slate-400">openToWork:</span>{' '}
                    <span className="text-amber-300">true</span>
                  </div>
                </div>
                <div>&#125;;</div>

                {/* Live Terminal Output Box */}
                <div className="mt-4 pt-3 border-t border-white/5 space-y-1.5 text-[11px]">
                  <div className="text-slate-500">// Target Opportunity Roles:</div>
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {profileData.targetRoles.slice(0, 5).map((role, rIdx) => (
                      <span
                        key={rIdx}
                        className="px-2 py-0.5 rounded bg-white/5 text-slate-300 border border-white/5 text-[10px]"
                      >
                        {role}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom Card Footer */}
              <div className="px-5 py-3 bg-[#0b1120] border-t border-white/5 flex items-center justify-between text-xs">
                <span className="text-slate-400 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                  Active Portfolio
                </span>
                <a
                  href="#contact"
                  className="text-accent-cyan hover:underline font-mono text-xs"
                >
                  Contact &rarr;
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
