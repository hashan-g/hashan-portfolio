import React from 'react';
import { Code2, Brain, Sparkles, GraduationCap } from 'lucide-react';

export default function About() {
  const highlights = [
    {
      title: "Analytical & Academic Foundation",
      description:
        "Dual qualification spanning a BSc in Physical Science from the University of Ruhuna and the Bachelor of Information Technology (BIT) at UCSC, bridging mathematical modeling with formal computing principles.",
      icon: GraduationCap,
      color: "text-accent-cyan",
    },
    {
      title: "Practical Software & Mobile Engineering",
      description:
        "Hands-on development across cross-platform mobile apps in Flutter (offline Hive persistence), dynamic React interfaces, and backend services built with Node.js, Express, and PHP.",
      icon: Code2,
      color: "text-accent-indigo",
    },
    {
      title: "Applied AI & Data Problem Solving",
      description:
        "Experience integrating sub-second LLM inference via Groq and open LLaMA weights into real-world applications, coupled with structured data analysis and relational schema design.",
      icon: Brain,
      color: "text-purple-400",
    },
  ];

  return (
    <section id="about" className="py-20 relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-cyan/10 border border-accent-cyan/20 text-accent-cyan text-xs font-mono uppercase tracking-wider mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Background &amp; Profile</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
            About Me
          </h2>
          <p className="mt-2 text-slate-400 text-sm sm:text-base max-w-2xl">
            A software developer with a background in physical sciences, combining quantitative reasoning with practical full-stack and AI development.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Narrative Introduction (6 cols) */}
          <div className="lg:col-span-6 space-y-5">
            <div className="p-6 sm:p-7 rounded-2xl bg-dark-card border border-white/10 space-y-4">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-accent-cyan"></span>
                <span>Bridging Mathematical Logic with Applied Software</span>
              </h3>
              
              <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
                I hold a <strong className="text-white font-semibold">BSc in Physical Science from the University of Ruhuna</strong> and am currently pursuing the <strong className="text-white font-semibold">Bachelor of Information Technology (BIT)</strong> at the University of Colombo School of Computing (UCSC). This dual grounding gives me a strong balance of mathematical reasoning, scientific curiosity, and structured software engineering principles.
              </p>

              <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
                My practical work focuses on building reliable web platforms, cross-platform mobile apps with Flutter, backend microservices in Node.js and PHP, and integrating fast AI inference using Groq and open LLaMA models. Rather than limiting myself to a single silo, I enjoy tackling problems where software engineering and data analysis intersect.
              </p>

              <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
                As an early-career technologist, I am actively seeking junior software developer, data analytics, or applied AI roles where I can contribute to meaningful products, learn from experienced mentors, and continue building scalable solutions.
              </p>
            </div>

            {/* Quick Summary Pill Bar */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="p-3.5 rounded-xl bg-dark-card/60 border border-white/5">
                <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block mb-0.5">Education Foundation</span>
                <span className="text-xs font-semibold text-white">BSc Physical Science + BIT (UCSC)</span>
              </div>
              <div className="p-3.5 rounded-xl bg-dark-card/60 border border-white/5">
                <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block mb-0.5">Career Direction</span>
                <span className="text-xs font-semibold text-white">Software Dev • Data • Applied AI</span>
              </div>
            </div>
          </div>

          {/* Right Column: 3 Meaningful Highlights (6 cols) */}
          <div className="lg:col-span-6 space-y-4">
            {highlights.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-dark-card border border-white/5 hover:border-white/15 transition-all space-y-2 group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                      <Icon className={`w-4 h-4 ${item.color}`} />
                    </div>
                    <h4 className="text-base font-bold text-white group-hover:text-accent-cyan transition-colors">
                      {item.title}
                    </h4>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed pl-12">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
