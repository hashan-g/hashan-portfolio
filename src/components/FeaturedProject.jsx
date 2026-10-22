import React from 'react';
import { featuredProject } from '../data/projects';
import { Github, Youtube } from './icons/BrandIcons';
import {
  ExternalLink,
  Users,
  ScanLine,
  Bot,
  PieChart,
  Database,
  ShieldCheck,
  LayoutDashboard,
  CheckCircle2,
  Sparkles,
  Info,
  Smartphone,
  Server,
  GitPullRequest,
} from 'lucide-react';

export default function FeaturedProject() {
  const getFeatureIcon = (iconName) => {
    switch (iconName) {
      case 'ScanLine':
        return ScanLine;
      case 'Bot':
        return Bot;
      case 'PieChart':
        return PieChart;
      case 'Database':
        return Database;
      case 'ShieldCheck':
        return ShieldCheck;
      case 'LayoutDashboard':
        return LayoutDashboard;
      default:
        return CheckCircle2;
    }
  };

  const getContribIcon = (iconName) => {
    switch (iconName) {
      case 'Smartphone':
        return Smartphone;
      case 'Server':
        return Server;
      case 'GitPullRequest':
        return GitPullRequest;
      case 'Users':
        return Users;
      default:
        return CheckCircle2;
    }
  };

  return (
    <section id="featured-project" className="py-20 relative border-t border-white/5">
      {/* Subtle Glow Backdrop */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[400px] bg-accent-cyan/5 blur-[160px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-10">
          <div className="flex flex-wrap items-center gap-2 mb-3">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-accent-cyan/10 border border-accent-cyan/25 text-accent-cyan text-xs font-mono font-medium">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Featured Project Case Study</span>
            </span>

            {/* MANDATORY: Visible Final-Year Team Project Label */}
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/25 text-indigo-300 text-xs font-mono font-medium">
              <Users className="w-3.5 h-3.5" />
              <span>{featuredProject.projectType}</span>
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            {featuredProject.title}
          </h2>
          <p className="mt-1 text-accent-cyan font-semibold text-lg sm:text-xl">
            {featuredProject.subtitle}
          </p>
          <p className="mt-2 text-slate-300 text-sm sm:text-base max-w-3xl leading-relaxed">
            {featuredProject.attribution}
          </p>
        </div>

        {/* Main Case Study Card Container */}
        <div className="bg-dark-card rounded-2xl sm:rounded-3xl border border-white/10 shadow-2xl shadow-black/80 overflow-hidden space-y-8 p-6 sm:p-8 lg:p-10">
          
          {/* Tech Stack Banner */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 border-b border-white/10">
            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-slate-400 block mb-2">
                Team Project Technologies:
              </span>
              <div className="flex flex-wrap gap-1.5 sm:gap-2">
                {featuredProject.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 rounded-lg text-xs font-mono bg-white/5 text-slate-200 border border-white/10"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Quick Channel Link */}
            <a
              href={featuredProject.channelUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-medium bg-rose-500/10 hover:bg-rose-500/20 text-rose-300 border border-rose-500/25 transition-colors self-start lg:self-auto shrink-0"
            >
              <Youtube className="w-4 h-4 text-rose-400" />
              <span>Project Video Channel</span>
              <ExternalLink className="w-3 h-3 opacity-60" />
            </a>
          </div>

          {/* Problem vs Solution Split */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-5 sm:p-6 rounded-2xl bg-dark-surface/60 border border-white/5 space-y-2">
              <span className="text-xs font-mono uppercase tracking-wider text-rose-400 block font-semibold">
                Problem &amp; Challenge
              </span>
              <h3 className="text-base font-bold text-white">Manual Ingestion Friction &amp; Static Tracking</h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {featuredProject.problem}
              </p>
            </div>

            <div className="p-5 sm:p-6 rounded-2xl bg-dark-surface/60 border border-white/5 space-y-2">
              <span className="text-xs font-mono uppercase tracking-wider text-accent-cyan block font-semibold">
                Team Engineering Solution
              </span>
              <h3 className="text-base font-bold text-white">Automated Ingestion + Groq/LLaMA Intelligence</h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {featuredProject.solution}
              </p>
            </div>
          </div>

          {/* Selected Key Features (Team Deliverables) */}
          <div className="space-y-4 pt-2">
            <div>
              <h3 className="text-lg font-bold text-white">
                Key Features (Team Project Scope)
              </h3>
              <p className="text-xs text-slate-400">
                Core deliverables implemented across the client mobile app, backend APIs, and admin dashboard.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {featuredProject.keyFeatures.map((feat, fIdx) => {
                const Icon = getFeatureIcon(feat.icon);
                return (
                  <div
                    key={fIdx}
                    className="p-4 sm:p-5 rounded-xl bg-dark-surface/80 border border-white/5 flex flex-col justify-between"
                  >
                    <div>
                      <div className="w-8 h-8 rounded-lg bg-accent-cyan/10 border border-accent-cyan/20 flex items-center justify-center text-accent-cyan mb-3">
                        <Icon className="w-4 h-4" />
                      </div>
                      <h4 className="text-sm font-bold text-white mb-1">
                        {feat.title}
                      </h4>
                      <p className="text-xs text-slate-400 leading-relaxed">
                        {feat.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* MANDATORY: Dedicated "My Contributions" Section */}
          <div className="p-6 sm:p-8 rounded-2xl bg-accent-cyan/5 border border-accent-cyan/20 space-y-5">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-white/10 pb-4">
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-accent-cyan font-semibold block mb-0.5">
                  Verified Individual Role
                </span>
                <h3 className="text-xl font-bold text-white">
                  My Contributions
                </h3>
              </div>
              <span className="text-xs font-mono text-slate-400">
                Mobile UI • Admin Backend • Code Review • Collaboration
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {featuredProject.myContributions.map((contrib, cIdx) => {
                const ContribIcon = getContribIcon(contrib.icon);
                return (
                  <div
                    key={cIdx}
                    className="p-4 sm:p-5 rounded-xl bg-dark-card/90 border border-white/10 space-y-2 hover:border-accent-cyan/30 transition-colors"
                  >
                    <div className="flex items-center gap-2.5 text-white font-semibold text-xs sm:text-sm">
                      <div className="w-7 h-7 rounded-lg bg-accent-cyan/10 border border-accent-cyan/20 flex items-center justify-center text-accent-cyan shrink-0">
                        <ContribIcon className="w-3.5 h-3.5" />
                      </div>
                      <span>{contrib.area}</span>
                    </div>
                    <p className="text-xs text-slate-300 leading-relaxed pl-9">
                      {contrib.details}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Attribution Transparency Note */}
            <div className="p-3.5 rounded-xl bg-white/5 border border-white/5 flex items-start gap-2.5 text-xs text-slate-400">
              <Info className="w-4 h-4 text-accent-cyan shrink-0 mt-0.5" />
              <span>{featuredProject.attributionNote}</span>
            </div>
          </div>

          {/* Team Repositories Bar */}
          <div className="pt-2 border-t border-white/10 flex flex-col lg:flex-row lg:items-center justify-between gap-4">
            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-slate-400 block font-semibold mb-0.5">
                Team Code Repositories:
              </span>
              <p className="text-xs text-slate-500 font-mono">
                Hosted under team repository account (@Jayo013)
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-2.5">
              {featuredProject.repositories.map((repo, rIdx) => (
                <a
                  key={rIdx}
                  href={repo.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-medium bg-white/5 hover:bg-white/10 text-white border border-white/10 hover:border-accent-cyan/30 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-cyan"
                  title={`${repo.name} - ${repo.type}`}
                >
                  <Github className="w-3.5 h-3.5 text-accent-cyan" />
                  <span>{repo.name}</span>
                  <ExternalLink className="w-3 h-3 opacity-60" />
                </a>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
