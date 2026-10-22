import React, { useState, useEffect } from 'react';
import { githubData } from '../data/github';
import { Github } from './icons/BrandIcons';
import { ExternalLink, GitBranch, Users, User } from 'lucide-react';

export default function GitHub() {
  const [userData, setUserData] = useState(null);
  const [filter, setFilter] = useState('all'); // 'all', 'personal', 'team'

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
        console.debug('GitHub API rate limited or offline; fallback active', err);
      }
    };

    fetchGithubData();
  }, []);

  const filteredRepos = githubData.repositories.filter((repo) => {
    if (filter === 'personal') return repo.isPersonal;
    if (filter === 'team') return !repo.isPersonal;
    return true;
  });

  return (
    <section id="github" className="py-20 relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-cyan/10 border border-accent-cyan/25 text-accent-cyan text-xs font-mono uppercase tracking-wider mb-2">
              <Github className="w-3.5 h-3.5" />
              <span>Open Source &amp; Code</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
              GitHub Repositories
            </h2>
            <p className="mt-2 text-slate-400 text-sm sm:text-base max-w-xl">
              Verifiable code repositories distinguishing personal software projects from collaborative team codebases.
            </p>
          </div>

          {/* GitHub Profile CTA */}
          <a
            href={githubData.profileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold bg-white/10 hover:bg-white/15 text-white border border-white/15 transition-all shadow-md hover:border-accent-cyan/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-cyan shrink-0 self-start md:self-auto"
          >
            <Github className="w-4 h-4 text-accent-cyan" />
            <span>Visit @{githubData.username}</span>
            <ExternalLink className="w-3.5 h-3.5 opacity-70" />
          </a>
        </div>

        {/* GitHub Profile Metric Bar & Filter Tabs */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 pb-4 border-b border-white/5">
          {/* Profile Overview Pill */}
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono text-slate-300">
              Profile: <strong className="text-white">@{githubData.username}</strong>
            </span>
            <span className="text-slate-600">•</span>
            <span className="text-xs font-mono text-emerald-400 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
              Public Profile Verified
            </span>
            {userData?.public_repos !== undefined && (
              <>
                <span className="text-slate-600 hidden sm:inline">•</span>
                <span className="text-xs font-mono text-slate-400 hidden sm:inline">
                  {userData.public_repos} Public Repos
                </span>
              </>
            )}
          </div>

          {/* Category Filter Pills */}
          <div className="flex items-center gap-1.5 self-start sm:self-auto">
            <button
              type="button"
              onClick={() => setFilter('all')}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-colors ${
                filter === 'all'
                  ? 'bg-accent-cyan text-dark-bg font-semibold'
                  : 'bg-white/5 text-slate-300 hover:text-white'
              }`}
            >
              All Repos ({githubData.repositories.length})
            </button>
            <button
              type="button"
              onClick={() => setFilter('personal')}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-colors ${
                filter === 'personal'
                  ? 'bg-accent-cyan text-dark-bg font-semibold'
                  : 'bg-white/5 text-slate-300 hover:text-white'
              }`}
            >
              Personal Repos
            </button>
            <button
              type="button"
              onClick={() => setFilter('team')}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-colors ${
                filter === 'team'
                  ? 'bg-accent-cyan text-dark-bg font-semibold'
                  : 'bg-white/5 text-slate-300 hover:text-white'
              }`}
            >
              Team Projects (@Jayo013)
            </button>
          </div>
        </div>

        {/* Repositories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredRepos.map((repo, idx) => (
            <div
              key={idx}
              className="p-5 sm:p-6 rounded-2xl bg-dark-card border border-white/5 hover:border-white/20 transition-all flex flex-col justify-between group"
            >
              <div>
                {/* Header: Repo Owner & Tag */}
                <div className="flex items-start justify-between gap-3 mb-2.5">
                  <div className="flex items-center gap-1.5 text-xs font-mono text-slate-400">
                    <GitBranch className="w-3.5 h-3.5 text-accent-cyan" />
                    <span>{repo.owner} /</span>
                    <a
                      href={repo.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-bold text-sm sm:text-base text-white hover:text-accent-cyan transition-colors"
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

                {/* Attribution Badge: Personal vs Team */}
                <div className="mb-3">
                  <span
                    className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-md text-[10px] font-mono ${
                      repo.isPersonal
                        ? 'bg-accent-cyan/10 text-accent-cyan border border-accent-cyan/20'
                        : 'bg-indigo-500/10 text-indigo-300 border border-indigo-500/20'
                    }`}
                  >
                    {repo.isPersonal ? <User className="w-3 h-3" /> : <Users className="w-3 h-3" />}
                    <span>{repo.category}</span>
                  </span>
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
                    className="text-accent-cyan hover:underline text-xs"
                  >
                    View Code &rarr;
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
