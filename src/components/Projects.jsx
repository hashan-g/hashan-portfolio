import React from 'react';
import { secondaryProjects } from '../data/projects';
import { FolderGit2, Database, CheckCircle2, Clock, Info } from 'lucide-react';

export default function Projects() {
  return (
    <section id="projects" className="py-24 relative border-t border-white/5 bg-dark-bg/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-indigo/10 border border-accent-indigo/20 text-accent-indigo text-xs font-mono uppercase tracking-wider mb-3">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>Additional Software Projects</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Other Projects
          </h2>
          <p className="mt-2 text-slate-400 text-sm sm:text-base max-w-2xl">
            Selected web and software projects covering full-stack web applications, database design, and enterprise logistics workflows.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {secondaryProjects.map((project) => {
            const isVoyaGo = project.id === 'voyago';
            const isPlaceholder = project.isPlaceholder;

            return (
              <div
                key={project.id}
                className="bg-dark-card rounded-2xl border border-white/10 hover:border-white/20 transition-all p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden group"
              >
                {/* Top Subtle Accent Strip */}
                <div
                  className={`absolute top-0 left-0 right-0 h-1 ${
                    isVoyaGo ? 'bg-gradient-to-r from-accent-cyan to-accent-indigo' : 'bg-gradient-to-r from-accent-indigo to-purple-500'
                  }`}
                />

                <div>
                  {/* Category & Status Pill */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="text-xs font-mono text-accent-cyan bg-accent-cyan/10 px-2.5 py-1 rounded-full border border-accent-cyan/20">
                      {project.category}
                    </span>

                    <span className="inline-flex items-center gap-1.5 text-xs text-slate-400 font-mono">
                      {isPlaceholder ? (
                        <>
                          <Clock className="w-3.5 h-3.5 text-amber-400" />
                          <span>In Development</span>
                        </>
                      ) : (
                        <>
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                          <span>Completed Web Project</span>
                        </>
                      )}
                    </span>
                  </div>

                  {/* Project Title */}
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-accent-cyan transition-colors">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-slate-300 leading-relaxed mb-4">
                    {project.description}
                  </p>

                  <p className="text-xs text-slate-400 leading-relaxed mb-6">
                    {project.details}
                  </p>

                  {/* Technologies Used */}
                  <div className="mb-6">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-slate-500 block mb-2">
                      Technologies & Focus:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 rounded-md text-xs font-mono bg-white/5 text-slate-300 border border-white/5"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Key Features Bullet List */}
                  <div className="space-y-2 mb-6">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-slate-500 block">
                      Key Highlights:
                    </span>
                    <ul className="space-y-1.5 text-xs text-slate-300">
                      {project.features.map((feature, fIdx) => (
                        <li key={fIdx} className="flex items-start gap-2">
                          <span className="text-accent-cyan mt-0.5">•</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Card Footer */}
                <div className="pt-4 border-t border-white/5">
                  {isPlaceholder ? (
                    <div className="flex items-center gap-2 p-3 rounded-xl bg-white/5 border border-white/5 text-xs text-slate-400">
                      <Info className="w-4 h-4 text-amber-400 shrink-0" />
                      <span>
                        Detailed system architecture, schema definitions, and codebase modules available upon request.
                      </span>
                    </div>
                  ) : (
                    <div className="flex items-center justify-between text-xs text-slate-400">
                      <span className="flex items-center gap-1.5 font-mono">
                        <Database className="w-3.5 h-3.5 text-accent-cyan" />
                        <span>PHP & MySQL Architecture</span>
                      </span>
                      <span className="text-accent-cyan font-mono text-[11px]">
                        Academic Web Project
                      </span>
                    </div>
                  )}
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
