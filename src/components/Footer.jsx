import React from 'react';
import { ArrowUp, Download, Mail } from 'lucide-react';
import { Github, Linkedin } from './icons/BrandIcons';
import { profileData } from '../data/profile';

const CURRENT_YEAR = 2026;

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Featured Project', href: '#featured-project' },
    { name: 'Projects', href: '#projects' },
    { name: 'Education', href: '#education' },
    { name: 'Achievements', href: '#achievements' },
    { name: 'GitHub', href: '#github' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="bg-dark-bg border-t border-white/10 pt-16 pb-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/5">
          
          {/* Brand & Positioning (5 cols) */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-accent-cyan/20 to-accent-indigo/20 border border-white/10 flex items-center justify-center font-bold text-accent-cyan">
                <span className="font-mono text-sm">HG</span>
              </div>
              <span className="text-lg font-bold text-white tracking-tight">
                {profileData.name}
              </span>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm">
              Physical Science and Information Technology graduate focused on building dependable software applications, data analytics workflows, and applied AI systems.
            </p>

            <div className="flex items-center gap-2 pt-2">
              <a
                href={profileData.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Hashan's LinkedIn"
                className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white border border-white/5 transition-colors"
              >
                <Linkedin className="w-4 h-4" />
              </a>

              <a
                href={profileData.links.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Hashan's GitHub"
                className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white border border-white/5 transition-colors"
              >
                <Github className="w-4 h-4" />
              </a>

              <a
                href={profileData.links.email}
                aria-label="Send email to Hashan"
                className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white border border-white/5 transition-colors"
                title={`Email: ${profileData.links.emailRaw}`}
              >
                <Mail className="w-4 h-4" />
              </a>

              <a
                href={profileData.links.resume}
                download="Hashan_Ganegoda_CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-white/5 hover:bg-white/10 text-slate-200 border border-white/5 transition-colors"
              >
                <Download className="w-3.5 h-3.5 text-accent-cyan" />
                <span>Resume PDF</span>
              </a>
            </div>
          </div>

          {/* Quick Section Navigation (4 cols) */}
          <div className="md:col-span-4 space-y-3">
            <span className="text-xs font-mono uppercase tracking-wider text-slate-400 block font-semibold">
              Navigation
            </span>
            <div className="grid grid-cols-2 gap-2 text-xs">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-slate-400 hover:text-accent-cyan transition-colors py-1"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Target Opportunities & Stack (3 cols) */}
          <div className="md:col-span-3 space-y-3">
            <span className="text-xs font-mono uppercase tracking-wider text-slate-400 block font-semibold">
              Engineering Focus
            </span>
            <div className="space-y-1.5 text-xs text-slate-400">
              <div>• Junior Software Engineer</div>
              <div>• Full-Stack & Python Developer</div>
              <div>• Data Analyst / Data Science</div>
              <div>• AI/LLM Integration & Flutter</div>
            </div>

            <div className="pt-3">
              <button
                type="button"
                onClick={scrollToTop}
                className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-mono text-slate-300 hover:text-white transition-all"
                aria-label="Scroll back to top of page"
              >
                <ArrowUp className="w-3.5 h-3.5 text-accent-cyan" />
                <span>Back to Top</span>
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Credits & Legal */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 font-mono">
          <div>
            &copy; {CURRENT_YEAR} Hashan Ganegoda. All rights reserved.
          </div>

          <div className="flex items-center gap-2">
            <span>Built with React + Vite + Tailwind CSS</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
