import React from 'react';
import { secondaryProjects } from '../data/projects';
import { Github } from './icons/BrandIcons';
import { FolderGit2, ExternalLink, CheckCircle2, Clock } from 'lucide-react';

export default function Projects() {
  return (
    <section id="projects" className="py-20 relative border-t border-white/5 bg-dark-bg/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-indigo/10 border border-accent-indigo/20 text-accent-indigo text-xs font-mono uppercase tracking-wider mb-2">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>Additional Projects</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
            Other Projects
          </h2>
          <p className="mt-2 text-slate-400 text-sm sm:text-base max-w-2xl">
            Selected software platforms covering full-stack web applications, relational database design, and logistics tracking.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {secondaryProjects.map((project) => {
            const isVoyaGo = project.id === 'voyago';

            return (
              <div
                key={project.id}
                className="bg-dark-card rounded-2xl border border-white/10 hover:border-white/20 transition-all p-6 sm:p-8 flex flex-col justify-between relative group"
              >
                <div>
                  {/* Category & Status Pill */}
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-xs font-mono text-accent-cyan bg-accent-cyan/10 px-2.5 py-0.5 rounded-full border border-accent-cyan/20">
                      {project.category}
                    </span>

                    <span className="inline-flex items-center gap-1.5 text-xs text-slate-400 font-mono">
                      {isVoyaGo ? (
                        <>
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                          <span>{project.status}</span>
                        </>
                      ) : (
                        <>
                          <Clock className="w-3.5 h-3.5 text-amber-400" />
                          <span>{project.status}</span>
                        </>
                      )}
                    </span>
                  </div>

                  {/* Project Title */}
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 group-hover:text-accent-cyan transition-colors">
                    {project.title}
                  </h3>

                  {/* Role */}
                  <div className="text-xs font-mono text-slate-400 mb-3">
                    Role: <span className="text-slate-200 font-medium">{project.role}</span>
                  </div>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                    {project.description}
                  </p>

                  {/* Key Highlights */}
                  <div className="space-y-1.5 mb-6">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 block">
                      Technical Focus:
                    </span>
                    <ul className="space-y-1.5 text-xs text-slate-300">
                      {project.highlights.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="text-accent-cyan mt-0.5">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies Used */}
                  <div className="mb-6">
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
                </div>

                {/* Card Footer: Action Links */}
                <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                  {project.github ? (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl text-xs font-medium bg-white/5 hover:bg-white/10 text-white border border-white/10 hover:border-accent-cyan/30 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-cyan"
                    >
                      <Github className="w-3.5 h-3.5 text-accent-cyan" />
                      <span>View Repository</span>
                      <ExternalLink className="w-3 h-3 opacity-60" />
                    </a>
                  ) : (
                    <span className="text-xs font-mono text-slate-400">
                      {project.githubNote}
                    </span>
                  )}

                  <span className="text-[11px] font-mono text-slate-400">
                    {isVoyaGo ? "Full-Stack Project" : "Personal Platform"}
                  </span>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
