import React from 'react';
import { Brain, Layers, GraduationCap, Sparkles, Terminal } from 'lucide-react';
import { profileData } from '../data/profile';

export default function About() {
  const pillars = [
    {
      title: "Analytical & Mathematical Rigor",
      description:
        "My background in Physical Science from the University of Ruhuna provided deep training in mathematics, quantitative analysis, and systematic problem formulation—skills directly applicable to complex algorithms and data structures.",
      icon: Terminal,
      accent: "from-cyan-500/20 to-blue-500/20 text-accent-cyan",
    },
    {
      title: "Formal IT & Computing Principles",
      description:
        "Through the Bachelor of Information Technology (BIT) at the University of Colombo School of Computing (UCSC), I developed structured knowledge in software engineering lifecycles, database modeling, and scalable systems.",
      icon: GraduationCap,
      accent: "from-indigo-500/20 to-purple-500/20 text-accent-indigo",
    },
    {
      title: "Applied AI & High-Speed LLM Integration",
      description:
        "Rather than treating AI as a theory, I build practical integrations—such as engineering sub-second inference pipelines with Groq and open LLaMA models for intelligent personal finance assistants.",
      icon: Brain,
      accent: "from-purple-500/20 to-pink-500/20 text-purple-400",
    },
    {
      title: "Full-Stack & Cross-Platform Delivery",
      description:
        "From cross-platform Flutter mobile apps with offline Hive persistence to React dashboards and Node/PHP backend APIs, I bridge the full development lifecycle to build complete products.",
      icon: Layers,
      accent: "from-emerald-500/20 to-teal-500/20 text-emerald-400",
    },
  ];

  return (
    <section id="about" className="py-24 relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-cyan/10 border border-accent-cyan/20 text-accent-cyan text-xs font-mono uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Profile & Background</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            About Me
          </h2>
          <p className="mt-3 text-slate-400 text-base max-w-2xl">
            A developer who unites scientific inquiry, mathematical reasoning, and hands-on software engineering.
          </p>
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Narrative (6 cols) */}
          <div className="lg:col-span-6 space-y-6">
            <div className="p-6 sm:p-8 rounded-2xl bg-dark-card border border-white/10 space-y-4">
              <h3 className="text-xl font-bold text-white flex items-center gap-2.5">
                <span className="w-2 h-2 rounded-full bg-accent-cyan"></span>
                <span>Connecting Software, Data & Artificial Intelligence</span>
              </h3>
              
              <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
                I am a Physical Science graduate with dual academic grounding across physical sciences and computer science/information technology. My goal is to build technology solutions that are dependable, performant, and genuinely useful to people.
              </p>

              <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
                Rather than confining myself to a single narrow track, I actively work across the intersection of <strong className="text-white font-medium">software development, data analytics, and artificial intelligence</strong>. Whether it is designing an offline-first mobile app in Flutter, structuring relational and NoSQL databases, or orchestrating LLMs with Groq and LLaMA, I enjoy mastering the full problem space.
              </p>

              {/* Highlight Quote Box */}
              <div className="p-4 rounded-xl bg-accent-cyan/5 border-l-2 border-accent-cyan text-slate-200 text-sm italic">
                "{profileData.positioningStatement}"
              </div>
            </div>

            {/* Quick Facts Grid */}
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-dark-card/60 border border-white/5">
                <span className="text-xs text-slate-400 uppercase tracking-wider block font-mono mb-1">Dual Academic Foundation</span>
                <span className="text-sm font-semibold text-white">BSc Physical Science + BIT (UCSC)</span>
              </div>
              <div className="p-4 rounded-xl bg-dark-card/60 border border-white/5">
                <span className="text-xs text-slate-400 uppercase tracking-wider block font-mono mb-1">Target Roles</span>
                <span className="text-sm font-semibold text-white">Software Dev • Data • AI/ML</span>
              </div>
            </div>
          </div>

          {/* Right Column: 4 Core Pillars (6 cols) */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {pillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-dark-card/70 border border-white/5 hover:border-white/15 transition-all flex flex-col justify-between group"
                >
                  <div>
                    <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${pillar.accent} border border-white/10 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <h4 className="text-base font-bold text-white mb-2">
                      {pillar.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
