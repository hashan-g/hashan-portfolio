import React from 'react';
import { achievementsData } from '../data/achievements';
import { Trophy, Users, CheckCircle2 } from 'lucide-react';

export default function Achievements() {
  return (
    <section id="achievements" className="py-20 relative border-t border-white/5 bg-dark-bg/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/10 border border-amber-400/25 text-amber-300 text-xs font-mono uppercase tracking-wider mb-2">
            <Trophy className="w-3.5 h-3.5" />
            <span>Honors &amp; Competitions</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
            Achievements
          </h2>
          <p className="mt-2 text-slate-400 text-sm sm:text-base max-w-2xl">
            Competitive programming and hackathon milestones demonstrating technical performance, rapid delivery, and teamwork under pressure.
          </p>
        </div>

        {/* Featured Achievement Card */}
        <div className="max-w-4xl mx-auto">
          {achievementsData.map((item) => (
            <div
              key={item.id}
              className="relative p-6 sm:p-10 rounded-3xl bg-gradient-to-br from-dark-card via-dark-surface to-[#0e172a] border border-amber-500/20 shadow-2xl shadow-amber-500/5 overflow-hidden"
            >
              {/* Subtle Ambient Glow */}
              <div className="absolute top-0 right-0 w-80 h-80 bg-amber-500/10 blur-[100px] pointer-events-none rounded-full" />

              <div className="relative z-10 space-y-6">
                
                {/* Header row with Trophy icon & Badges */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-6">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-amber-400/20 to-amber-600/20 border border-amber-400/30 flex items-center justify-center text-amber-400 shrink-0 shadow-lg shadow-amber-500/10">
                      <Trophy className="w-7 h-7" />
                    </div>
                    <div>
                      <div className="flex flex-wrap items-center gap-2 mb-1">
                        <span className="text-xs font-mono text-amber-300 bg-amber-400/10 px-2.5 py-0.5 rounded-full border border-amber-400/30 font-semibold">
                          {item.badge}
                        </span>
                        <span className="text-xs font-mono text-slate-400 bg-white/5 px-2.5 py-0.5 rounded-full border border-white/5">
                          Category: {item.category}
                        </span>
                      </div>
                      <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                        {item.title}
                      </h3>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 sm:self-start bg-white/5 px-3 py-1.5 rounded-xl border border-white/10 text-xs font-mono text-slate-300">
                    <Users className="w-4 h-4 text-accent-cyan" />
                    <span>Team: <strong className="text-white font-semibold">{item.team}</strong></span>
                  </div>
                </div>

                {/* Narrative Summary */}
                <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                  {item.summary}
                </p>

                {/* Key Execution Highlights */}
                <div className="space-y-3">
                  <span className="text-xs font-mono uppercase tracking-wider text-slate-400 block">
                    Execution Highlights:
                  </span>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                    {item.highlights.map((highlight, hIdx) => (
                      <div
                        key={hIdx}
                        className="p-3.5 rounded-xl bg-white/5 border border-white/5 text-xs text-slate-300 leading-relaxed flex items-start gap-2.5"
                      >
                        <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tag Pills */}
                <div className="pt-2 flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-lg text-xs font-mono bg-dark-bg text-slate-300 border border-white/10"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
