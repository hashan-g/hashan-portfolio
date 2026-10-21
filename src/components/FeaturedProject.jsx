import React, { useState } from 'react';
import { featuredProject } from '../data/projects';
import { Github, Youtube } from './icons/BrandIcons';
import {
  ExternalLink,
  Cpu,
  Bot,
  Activity,
  ShieldCheck,
  Fingerprint,
  Database,
  Cloud,
  LayoutDashboard,
  ScanLine,
  MessageSquareText,
  PieChart,
  Target,
  CheckCircle2,
  Flame,
} from 'lucide-react';

export default function FeaturedProject() {
  const [activeTab, setActiveTab] = useState('features'); // 'features', 'architecture', 'preview'

  // Map icon names to Lucide icon components
  const getFeatureIcon = (iconName) => {
    switch (iconName) {
      case 'MessageSquareText':
        return MessageSquareText;
      case 'ScanLine':
        return ScanLine;
      case 'PieChart':
        return PieChart;
      case 'Target':
        return Target;
      case 'Activity':
        return Activity;
      case 'Bot':
        return Bot;
      case 'Cpu':
        return Cpu;
      case 'LayoutDashboard':
        return LayoutDashboard;
      case 'ShieldCheck':
        return ShieldCheck;
      case 'Fingerprint':
        return Fingerprint;
      case 'Database':
        return Database;
      case 'Cloud':
        return Cloud;
      default:
        return CheckCircle2;
    }
  };

  return (
    <section id="featured-project" className="py-24 relative border-t border-white/5">
      {/* Subtle Glow Backdrop */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[450px] bg-accent-cyan/5 blur-[160px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-cyan/10 border border-accent-cyan/25 text-accent-cyan text-xs font-mono uppercase tracking-wider mb-3">
            <Flame className="w-3.5 h-3.5" />
            <span>Main Featured Project Case Study</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            SpendWise
          </h2>
          <p className="mt-2 text-accent-cyan font-semibold text-lg sm:text-xl">
            {featuredProject.subtitle}
          </p>
          <p className="mt-2 text-slate-400 text-sm sm:text-base max-w-3xl leading-relaxed">
            {featuredProject.overview}
          </p>
        </div>

        {/* Main Case Study Card Container */}
        <div className="bg-dark-card rounded-3xl border border-white/10 shadow-2xl shadow-black/80 overflow-hidden">
          
          {/* Top Bar: Tech Stack & Repos */}
          <div className="p-6 sm:p-8 bg-gradient-to-r from-dark-surface to-dark-card border-b border-white/10">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
              
              {/* Tech Tags */}
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-slate-400 block mb-2.5">
                  Technologies Used:
                </span>
                <div className="flex flex-wrap gap-2">
                  {featuredProject.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-lg text-xs font-mono font-medium bg-white/5 hover:bg-white/10 text-slate-200 border border-white/10 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons: 3 GitHub Repos + YouTube */}
              <div className="flex flex-wrap items-center gap-2.5 shrink-0">
                <a
                  href={featuredProject.links.frontend}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-medium bg-white/5 hover:bg-white/10 text-slate-200 border border-white/10 transition-all hover:border-accent-cyan/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-cyan"
                  title="SpendWise Flutter Frontend Repository"
                >
                  <Github className="w-3.5 h-3.5 text-accent-cyan" />
                  <span>Frontend Repo</span>
                  <ExternalLink className="w-3 h-3 opacity-60" />
                </a>

                <a
                  href={featuredProject.links.backend}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-medium bg-white/5 hover:bg-white/10 text-slate-200 border border-white/10 transition-all hover:border-accent-cyan/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-cyan"
                  title="SpendWise Backend Microservices Repository"
                >
                  <Github className="w-3.5 h-3.5 text-accent-indigo" />
                  <span>Backend Repo</span>
                  <ExternalLink className="w-3 h-3 opacity-60" />
                </a>

                <a
                  href={featuredProject.links.admin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-medium bg-white/5 hover:bg-white/10 text-slate-200 border border-white/10 transition-all hover:border-accent-cyan/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-cyan"
                  title="SpendWise React Admin Dashboard Repository"
                >
                  <Github className="w-3.5 h-3.5 text-purple-400" />
                  <span>Admin Repo</span>
                  <ExternalLink className="w-3 h-3 opacity-60" />
                </a>

                <a
                  href={featuredProject.links.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-medium bg-rose-500/10 hover:bg-rose-500/20 text-rose-300 border border-rose-500/30 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-rose-400"
                  title="SpendWise YouTube Channel / Video Demo"
                >
                  <Youtube className="w-4 h-4 text-rose-400" />
                  <span>Video Channel</span>
                  <ExternalLink className="w-3 h-3 opacity-60" />
                </a>
              </div>

            </div>
          </div>

          {/* Problem vs Solution Split */}
          <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-white/10 border-b border-white/10">
            {/* The Problem */}
            <div className="p-6 sm:p-8 space-y-3 bg-red-950/10">
              <div className="flex items-center gap-2 text-rose-400 font-mono text-xs uppercase tracking-wider">
                <span className="w-2 h-2 rounded-full bg-rose-400"></span>
                <span>The Challenge & Problem</span>
              </div>
              <h3 className="text-lg font-bold text-white">Manual Ingestion Friction & Static Advice</h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                {featuredProject.problem}
              </p>
            </div>

            {/* The Solution */}
            <div className="p-6 sm:p-8 space-y-3 bg-accent-cyan/5">
              <div className="flex items-center gap-2 text-accent-cyan font-mono text-xs uppercase tracking-wider">
                <span className="w-2 h-2 rounded-full bg-accent-cyan"></span>
                <span>The Engineering Solution</span>
              </div>
              <h3 className="text-lg font-bold text-white">Automated SMS/OCR Capture + Groq/LLaMA Intelligence</h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                {featuredProject.solution}
              </p>
            </div>
          </div>

          {/* Navigation Sub-Tabs */}
          <div className="px-6 sm:px-8 py-4 bg-[#0a0f1d] border-b border-white/10 flex items-center justify-between flex-wrap gap-3">
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => setActiveTab('features')}
                className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-cyan ${
                  activeTab === 'features'
                    ? 'bg-accent-cyan text-dark-bg shadow-md shadow-accent-cyan/20'
                    : 'text-slate-400 hover:text-white hover:bg-white/5'
                }`}
              >
                Key Features (12)
              </button>

              <button
                type="button"
                onClick={() => setActiveTab('architecture')}
                className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-cyan ${
                  activeTab === 'architecture'
                    ? 'bg-accent-cyan text-dark-bg shadow-md shadow-accent-cyan/20'
                    : 'text-slate-400 hover:text-white hover:bg-white/5'
                }`}
              >
                Architecture & Tech Highlights
              </button>

              <button
                type="button"
                onClick={() => setActiveTab('preview')}
                className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-cyan ${
                  activeTab === 'preview'
                    ? 'bg-accent-cyan text-dark-bg shadow-md shadow-accent-cyan/20'
                    : 'text-slate-400 hover:text-white hover:bg-white/5'
                }`}
              >
                Interactive UI & Simulation
              </button>
            </div>

            <span className="text-[11px] font-mono text-slate-500 hidden sm:inline-block">
              Case Study Navigation
            </span>
          </div>

          {/* Tab 1: Key Features Grid (Strictly all 12 requested features) */}
          {activeTab === 'features' && (
            <div className="p-6 sm:p-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {featuredProject.keyFeatures.map((feat, fIdx) => {
                  const Icon = getFeatureIcon(feat.icon);
                  return (
                    <div
                      key={fIdx}
                      className="p-5 rounded-2xl bg-dark-surface/80 border border-white/5 hover:border-accent-cyan/30 transition-all flex flex-col justify-between group"
                    >
                      <div>
                        <div className="w-9 h-9 rounded-xl bg-accent-cyan/10 border border-accent-cyan/20 flex items-center justify-center text-accent-cyan mb-3 group-hover:scale-105 transition-transform">
                          <Icon className="w-4 h-4" />
                        </div>
                        <h4 className="text-sm font-bold text-white mb-1.5 leading-snug">
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
          )}

          {/* Tab 2: Architecture & Technical Highlights */}
          {activeTab === 'architecture' && (
            <div className="p-6 sm:p-8 space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                
                {/* Visual Architecture Flow (12 cols) */}
                <div className="lg:col-span-12 space-y-4">
                  <div className="p-4 rounded-xl bg-accent-indigo/10 border border-accent-indigo/20 text-xs text-slate-300">
                    <strong className="text-white block mb-1">Architecture Flow Summary:</strong>
                    SpendWise utilizes a distributed hybrid architecture: the Flutter client operates offline-first using Hive local database storage and Android native receivers (SMS/OCR/Biometrics). Transactions sync to Node.js APIs and Cloud Firestore, while an inference pipeline in Python leverages Groq LPU hardware and LLaMA weights for real-time financial reasoning.
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pt-2">
                    {featuredProject.architectureHighlights.map((arch, aIdx) => (
                      <div
                        key={aIdx}
                        className="p-5 rounded-2xl bg-dark-surface border border-white/5 space-y-2.5"
                      >
                        <div className="flex items-center justify-between text-xs font-mono text-accent-cyan">
                          <span>Layer 0{aIdx + 1}</span>
                          <span className="text-[10px] bg-white/5 px-2 py-0.5 rounded text-slate-300">
                            {arch.tech}
                          </span>
                        </div>
                        <h4 className="text-sm font-bold text-white">
                          {arch.title}
                        </h4>
                        <p className="text-xs text-slate-400 leading-relaxed">
                          {arch.desc}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            </div>
          )}

          {/* Tab 3: Interactive UI Simulation & Architecture Preview */}
          {activeTab === 'preview' && (
            <div className="p-6 sm:p-8">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                
                {/* Simulated SpendWise Mobile Dashboard (6 cols) */}
                <div className="lg:col-span-6 bg-[#080d1a] p-6 rounded-2xl border border-white/10 shadow-inner space-y-5">
                  <div className="flex items-center justify-between border-b border-white/10 pb-3">
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 rounded-lg bg-accent-cyan/20 flex items-center justify-center text-accent-cyan font-bold text-xs">
                        SW
                      </div>
                      <span className="text-xs font-bold text-white">SpendWise Client View</span>
                    </div>
                    <div className="flex items-center gap-2 text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-full border border-emerald-500/20">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                      <span>Offline Sync (Hive Cache)</span>
                    </div>
                  </div>

                  {/* Financial Health Score Widget */}
                  <div className="p-4 rounded-xl bg-gradient-to-br from-dark-card to-dark-surface border border-white/10">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-medium text-slate-400">Financial Health Score</span>
                      <span className="text-xs font-mono text-emerald-400 bg-emerald-400/10 px-2 py-0.5 rounded">
                        Calculated by AI
                      </span>
                    </div>
                    <div className="flex items-baseline gap-3">
                      <span className="text-4xl font-extrabold text-white">88</span>
                      <span className="text-sm text-slate-400">/ 100</span>
                      <span className="text-xs font-semibold text-accent-cyan ml-auto">
                        Optimal Health
                      </span>
                    </div>
                    {/* Progress Bar */}
                    <div className="w-full bg-white/5 h-2 rounded-full mt-3 overflow-hidden">
                      <div className="bg-gradient-to-r from-accent-cyan to-accent-indigo h-full rounded-full w-[88%]"></div>
                    </div>
                  </div>

                  {/* Automated Capture Records */}
                  <div className="space-y-2">
                    <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block">
                      Recent Automated Ingestion
                    </span>

                    <div className="p-3 rounded-xl bg-white/5 border border-white/5 flex items-center justify-between text-xs">
                      <div className="flex items-center gap-2.5">
                        <MessageSquareText className="w-4 h-4 text-accent-cyan" />
                        <div>
                          <div className="font-semibold text-white">Bank SMS Auto-Parsed</div>
                          <div className="text-[11px] text-slate-400">Merchant: Fresh Mart • Groceries</div>
                        </div>
                      </div>
                      <span className="font-mono font-bold text-rose-400">-$34.50</span>
                    </div>

                    <div className="p-3 rounded-xl bg-white/5 border border-white/5 flex items-center justify-between text-xs">
                      <div className="flex items-center gap-2.5">
                        <ScanLine className="w-4 h-4 text-purple-400" />
                        <div>
                          <div className="font-semibold text-white">OCR Slip Extraction</div>
                          <div className="text-[11px] text-slate-400">Fuel Station Receipt • Utilities</div>
                        </div>
                      </div>
                      <span className="font-mono font-bold text-rose-400">-$42.00</span>
                    </div>
                  </div>

                  {/* Security Status */}
                  <div className="p-3 rounded-xl bg-white/5 border border-white/5 flex items-center justify-between text-[11px] text-slate-300">
                    <div className="flex items-center gap-2">
                      <ShieldCheck className="w-4 h-4 text-emerald-400" />
                      <span>Security: TOTP 2FA + Biometrics Active</span>
                    </div>
                    <Fingerprint className="w-4 h-4 text-slate-400" />
                  </div>
                </div>

                {/* Groq / LLaMA AI Assistant Prompt Simulation (6 cols) */}
                <div className="lg:col-span-6 bg-dark-card p-6 rounded-2xl border border-white/10 space-y-4">
                  <div className="flex items-center justify-between border-b border-white/10 pb-3">
                    <div className="flex items-center gap-2">
                      <Bot className="w-4 h-4 text-purple-400" />
                      <span className="text-xs font-bold text-white">AI Financial Assistant (Groq & LLaMA)</span>
                    </div>
                    <span className="text-[10px] font-mono text-purple-300 bg-purple-500/10 px-2 py-0.5 rounded border border-purple-500/20">
                      Inference &lt;180ms
                    </span>
                  </div>

                  {/* Chat Bubbles */}
                  <div className="space-y-3 font-sans text-xs">
                    {/* User Query */}
                    <div className="flex justify-end">
                      <div className="bg-accent-cyan/15 text-accent-cyan border border-accent-cyan/30 p-3 rounded-2xl max-w-sm rounded-tr-none">
                        "Can you analyze my current dining out budget pace and recommend adjustments for my emergency savings goal?"
                      </div>
                    </div>

                    {/* AI Response */}
                    <div className="flex justify-start">
                      <div className="bg-white/5 border border-white/10 text-slate-200 p-3.5 rounded-2xl max-w-md rounded-tl-none space-y-2">
                        <div className="flex items-center gap-1.5 text-purple-400 font-mono text-[11px]">
                          <Cpu className="w-3 h-3" />
                          <span>LLaMA Reasoning via Groq:</span>
                        </div>
                        <p className="leading-relaxed">
                          "Based on your 14 transaction entries from SMS and OCR this week, you have used 62% of your dining budget with 10 days remaining. If you reduce discretionary takeout by ~$25, you will stay within limits and reach 100% of your targeted $300 monthly savings goal."
                        </p>
                        <div className="pt-1.5 border-t border-white/10 flex items-center justify-between text-[10px] text-slate-400 font-mono">
                          <span>Financial Health Impact: +3 pts</span>
                          <span>Confidence: High</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Notice on Real Architecture */}
                  <div className="p-3 rounded-xl bg-[#090e1c] border border-white/5 text-[11px] text-slate-400">
                    <span className="text-white font-medium block mb-0.5">Microservice Coordination:</span>
                    The mobile app forwards prompt contexts through authenticated Node.js endpoints to Python inference microservices running Groq hardware acceleration.
                  </div>
                </div>

              </div>
            </div>
          )}

          {/* Bottom Bar: Action CTAs */}
          <div className="p-6 bg-dark-surface border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-xs text-slate-400 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-accent-cyan"></span>
              <span>Available on GitHub with open source repositories</span>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <a
                href={featuredProject.links.frontend}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold bg-accent-cyan text-dark-bg hover:brightness-110 transition-all shadow-md shadow-accent-cyan/15 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-cyan"
              >
                <Github className="w-3.5 h-3.5" />
                <span>Explore Code Repositories</span>
              </a>

              <a
                href={featuredProject.links.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold bg-white/5 hover:bg-white/10 text-white border border-white/10 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-cyan"
              >
                <Youtube className="w-3.5 h-3.5 text-rose-400" />
                <span>Watch Video Demo</span>
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
