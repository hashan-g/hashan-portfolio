import React, { useState, useEffect } from 'react';
import { githubData } from '../data/github';
import { Github } from './icons/BrandIcons';
import { ExternalLink, GitBranch } from 'lucide-react';

export default function GitHub() {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    // Fetch real public profile metrics from GitHub REST API
    const fetchGithubData = async () => {
      try {
        const res = await fetch(`https://api.github.com/users/${githubData.username}`);
        if (res.ok) {
          const data = await res.json();
          setUserData(data);
        }
      } catch (err) {
        // Graceful handling - fallback to static verified data
        console.debug('GitHub API rate limited or offline; fallback active', err);
      }
    };

    fetchGithubData();
  }, []);

  return (
    <section id="github" className="py-24 relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-cyan/10 border border-accent-cyan/25 text-accent-cyan text-xs font-mono uppercase tracking-wider mb-3">
              <Github className="w-3.5 h-3.5" />
              <span>Open Source & Repositories</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              GitHub Showcase
            </h2>
            <p className="mt-2 text-slate-400 text-sm sm:text-base max-w-xl">
              Transparent, verifiable source code repositories across mobile applications, backend microservices, and modern web platforms.
            </p>
          </div>

          {/* GitHub Profile CTA */}
          <a
            href={githubData.profileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2.5 px-5 py-3 rounded-xl text-sm font-semibold bg-white/10 hover:bg-white/15 text-white border border-white/15 transition-all shadow-lg hover:border-accent-cyan/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-cyan shrink-0 self-start md:self-auto"
          >
            <Github className="w-4 h-4 text-accent-cyan" />
            <span>Visit @{githubData.username}</span>
            <ExternalLink className="w-4 h-4 opacity-70" />
          </a>
        </div>

        {/* GitHub Profile Overview Card */}
        <div className="p-6 rounded-2xl bg-dark-card border border-white/10 mb-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4 text-center sm:text-left">
            <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-accent-cyan shrink-0">
              <Github className="w-7 h-7" />
            </div>
            <div>
              <div className="flex items-center justify-center sm:justify-start gap-2">
                <h3 className="text-xl font-bold text-white">
                  {userData?.name || "Hashan Ganegoda"}
                </h3>
                <span className="text-xs font-mono text-accent-cyan bg-accent-cyan/10 px-2 py-0.5 rounded">
                  @{githubData.username}
                </span>
              </div>
              <p className="text-xs sm:text-sm text-slate-400 mt-1">
                {userData?.bio || githubData.tagline}
              </p>
            </div>
          </div>

          {/* Real Metrics Badges */}
          <div className="flex items-center gap-3">
            <div className="px-4 py-2 rounded-xl bg-white/5 border border-white/5 text-center">
              <span className="text-xs text-slate-400 font-mono block">Public Repos</span>
              <span className="text-base font-bold text-white font-mono">
                {userData?.public_repos !== undefined ? userData.public_repos : "4+"}
              </span>
            </div>

            <div className="px-4 py-2 rounded-xl bg-white/5 border border-white/5 text-center">
              <span className="text-xs text-slate-400 font-mono block">Profile Status</span>
              <span className="text-xs font-semibold text-emerald-400 font-mono flex items-center gap-1 justify-center">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                Active
              </span>
            </div>
          </div>
        </div>

        {/* Repositories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {githubData.pinnedRepos.map((repo, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-dark-card/80 border border-white/5 hover:border-white/20 transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div className="flex items-center gap-2">
                    <GitBranch className="w-4 h-4 text-accent-cyan" />
                    <span className="font-mono text-xs text-slate-400">
                      {repo.owner} /
                    </span>
                    <a
                      href={repo.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-bold text-base text-white hover:text-accent-cyan transition-colors"
                    >
                      {repo.name}
                    </a>
                  </div>

                  <a
                    href={repo.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
                    aria-label={`Open repository ${repo.name}`}
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                  {repo.description}
                </p>
              </div>

              <div>
                {/* Tech Tags */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {repo.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded text-[11px] font-mono bg-white/5 text-slate-300 border border-white/5"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Footer with language indicator */}
                <div className="pt-3 border-t border-white/5 flex items-center justify-between text-xs font-mono text-slate-400">
                  <span className="flex items-center gap-1.5">
                    <span
                      className="w-2.5 h-2.5 rounded-full inline-block"
                      style={{ backgroundColor: repo.languageColor }}
                    />
                    <span>{repo.language}</span>
                  </span>

                  <a
                    href={repo.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent-cyan hover:underline text-[11px]"
                  >
                    View Repository &rarr;
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
