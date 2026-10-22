import React from 'react';
import { skillCategories } from '../data/skills';
import { Code2, Layout, Server, Smartphone, Database, Brain, Wrench } from 'lucide-react';

export default function Skills() {
  const getCategoryIcon = (id) => {
    switch (id) {
      case 'programming-languages':
        return Code2;
      case 'frontend-development':
        return Layout;
      case 'backend-development':
        return Server;
      case 'mobile-development':
        return Smartphone;
      case 'databases-backend-services':
        return Database;
      case 'data-and-ai':
        return Brain;
      case 'developer-tools':
        return Wrench;
      default:
        return Code2;
    }
  };

  return (
    <section id="skills" className="py-20 relative border-t border-white/5 bg-dark-bg/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-cyan/10 border border-accent-cyan/20 text-accent-cyan text-xs font-mono uppercase tracking-wider mb-2">
              <Code2 className="w-3.5 h-3.5" />
              <span>Technical Skills</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
              Skills &amp; Technologies
            </h2>
            <p className="mt-2 text-slate-400 text-sm sm:text-base max-w-xl">
              Organized into 7 core domains with clear visual distinction for technologies applied in real projects.
            </p>
          </div>

          {/* Clean Legend */}
          <div className="flex items-center gap-4 text-xs font-mono bg-dark-card border border-white/10 px-4 py-2.5 rounded-xl self-start md:self-auto">
            <div className="flex items-center gap-1.5 text-slate-200">
              <span className="w-2 h-2 rounded-full bg-accent-cyan"></span>
              <span>Used in Projects</span>
            </div>
            <span className="text-slate-600">|</span>
            <div className="flex items-center gap-1.5 text-slate-400">
              <span className="w-2 h-2 rounded-full bg-slate-500"></span>
              <span>Core Familiarity</span>
            </div>
          </div>
        </div>

        {/* 7 Categorized Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category) => {
            const Icon = getCategoryIcon(category.id);
            return (
              <div
                key={category.id}
                className="p-5 sm:p-6 rounded-2xl bg-dark-card border border-white/5 hover:border-white/15 transition-all flex flex-col justify-between group"
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center gap-2.5 mb-3">
                    <div className="w-8 h-8 rounded-lg bg-accent-cyan/10 border border-accent-cyan/20 flex items-center justify-center text-accent-cyan shrink-0">
                      <Icon className="w-4 h-4" />
                    </div>
                    <h3 className="text-base font-bold text-white group-hover:text-accent-cyan transition-colors">
                      {category.title}
                    </h3>
                  </div>

                  <p className="text-xs text-slate-400 leading-relaxed mb-4">
                    {category.description}
                  </p>

                  {/* Technology Chips */}
                  <div className="flex flex-wrap gap-2 pt-1">
                    {category.skills.map((skill) => (
                      <div
                        key={skill.name}
                        title={skill.context}
                        className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono transition-all ${
                          skill.usedInProjects
                            ? 'bg-accent-cyan/10 text-white border border-accent-cyan/30 shadow-sm shadow-accent-cyan/5'
                            : 'bg-white/5 text-slate-300 border border-white/5'
                        }`}
                      >
                        {skill.usedInProjects && (
                          <span className="w-1.5 h-1.5 rounded-full bg-accent-cyan shrink-0"></span>
                        )}
                        <span>{skill.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
