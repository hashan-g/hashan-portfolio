import React from 'react';
import { educationData } from '../data/education';
import { GraduationCap, BookOpen, CheckCircle2 } from 'lucide-react';

export default function Education() {
  return (
    <section id="education" className="py-20 relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-cyan/10 border border-accent-cyan/20 text-accent-cyan text-xs font-mono uppercase tracking-wider mb-2">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Academic Background</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
            Education
          </h2>
          <p className="mt-2 text-slate-400 text-sm sm:text-base max-w-2xl">
            Dual degree foundations spanning rigorous mathematical/physical sciences and formal software and computer systems.
          </p>
        </div>

        {/* Timeline / Card Design */}
        <div className="relative">
          {/* Vertical Connecting Line (Hidden on mobile, visible on md+) */}
          <div className="hidden md:block absolute left-8 top-6 bottom-6 w-0.5 bg-gradient-to-b from-accent-cyan via-accent-indigo to-transparent" />

          <div className="space-y-8">
            {educationData.map((edu) => (
              <div key={edu.id} className="relative md:pl-20">
                
                {/* Timeline Node Icon (Desktop) */}
                <div className="hidden md:flex absolute left-4 -translate-x-1/2 top-6 w-9 h-9 rounded-xl bg-dark-card border border-accent-cyan/40 items-center justify-center text-accent-cyan shadow-md shadow-accent-cyan/10 z-10">
                  <GraduationCap className="w-4 h-4" />
                </div>

                {/* Education Card */}
                <div className="bg-dark-card rounded-2xl border border-white/10 hover:border-white/20 transition-all p-6 sm:p-8 space-y-4">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-white/5 pb-4">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-xs font-mono text-accent-cyan bg-accent-cyan/10 px-2.5 py-0.5 rounded-full border border-accent-cyan/25">
                          {edu.badge}
                        </span>
                        <span className="text-xs text-slate-400 font-mono">
                          {edu.period}
                        </span>
                      </div>
                      <h3 className="text-xl sm:text-2xl font-bold text-white">
                        {edu.degree}
                      </h3>
                      <div className="text-base font-semibold text-slate-300 mt-0.5 flex items-center gap-2">
                        <BookOpen className="w-4 h-4 text-accent-indigo" />
                        <span>{edu.institution}</span>
                      </div>
                    </div>
                  </div>

                  {/* Summary */}
                  <p className="text-sm text-slate-300 leading-relaxed">
                    {edu.summary}
                  </p>

                  {/* Academic Highlights */}
                  <div className="space-y-2 pt-2">
                    <span className="text-xs font-mono uppercase tracking-wider text-slate-400 block">
                      Core Academic Pillars:
                    </span>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs text-slate-300">
                      {edu.highlights.map((item, hIdx) => (
                        <li key={hIdx} className="flex items-start gap-2 bg-white/5 p-2.5 rounded-xl border border-white/5">
                          <CheckCircle2 className="w-4 h-4 text-accent-cyan shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Skills tags */}
                  <div className="pt-2 flex flex-wrap gap-1.5">
                    {edu.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2.5 py-1 rounded-md text-xs font-mono bg-dark-surface text-slate-300 border border-white/5"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
