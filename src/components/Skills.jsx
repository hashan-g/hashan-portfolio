import React, { useState } from 'react';
import { skillCategories } from '../data/skills';
import { Code, Info } from 'lucide-react';

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [statusFilter, setStatusFilter] = useState('all'); // 'all', 'Used in Projects', 'Familiar'

  const categories = [
    { id: 'all', title: 'All Skills' },
    ...skillCategories.map((c) => ({ id: c.id, title: c.title })),
  ];

  // Flatten or filter skills
  const allSkillsList = skillCategories.flatMap((category) =>
    category.skills.map((skill) => ({
      ...skill,
      categoryId: category.id,
      categoryTitle: category.title,
    }))
  );

  const filteredSkills = allSkillsList.filter((skill) => {
    const matchesCategory = selectedCategory === 'all' || skill.categoryId === selectedCategory;
    const matchesStatus = statusFilter === 'all' || skill.status === statusFilter;
    return matchesCategory && matchesStatus;
  });

  const projectSkillsCount = allSkillsList.filter((s) => s.status === 'Used in Projects').length;
  const familiarSkillsCount = allSkillsList.filter((s) => s.status === 'Familiar').length;

  return (
    <section id="skills" className="py-24 relative border-t border-white/5 bg-dark-bg/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-cyan/10 border border-accent-cyan/20 text-accent-cyan text-xs font-mono uppercase tracking-wider mb-3">
              <Code className="w-3.5 h-3.5" />
              <span>Technical Competencies</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Skills & Technologies
            </h2>
            <p className="mt-2 text-slate-400 text-sm sm:text-base max-w-xl">
              Organized into clear technical domains with transparent differentiation between technologies applied in production/real projects and foundational familiarity.
            </p>
          </div>

          {/* Transparency & Integrity Callout */}
          <div className="p-3.5 rounded-xl bg-dark-card border border-white/10 text-xs text-slate-300 max-w-md flex items-start gap-2.5">
            <Info className="w-4 h-4 text-accent-cyan shrink-0 mt-0.5" />
            <div>
              <span className="font-semibold text-white block mb-0.5">Honest Experience Representation</span>
              <span>
                Clearly tagged: <span className="text-accent-cyan font-medium">Used in Real Projects</span> (e.g. SpendWise, VoyaGo) versus <span className="text-slate-400 font-medium">Familiar</span> core concepts.
              </span>
            </div>
          </div>
        </div>

        {/* Filters Bar */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8 pb-4 border-b border-white/5">
          {/* Category Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto w-full sm:w-auto pb-2 sm:pb-0 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-cyan ${
                  selectedCategory === cat.id
                    ? 'bg-accent-cyan text-dark-bg font-semibold shadow-md shadow-accent-cyan/20'
                    : 'bg-dark-card/60 text-slate-300 hover:text-white hover:bg-white/5 border border-white/5'
                }`}
              >
                {cat.title}
              </button>
            ))}
          </div>

          {/* Status Filter Badges */}
          <div className="flex items-center gap-2 self-end sm:self-auto shrink-0">
            <span className="text-xs text-slate-500 font-mono hidden md:inline-block">Filter:</span>
            
            <button
              type="button"
              onClick={() => setStatusFilter('all')}
              className={`px-2.5 py-1 rounded-md text-xs transition-colors ${
                statusFilter === 'all'
                  ? 'bg-white/15 text-white font-medium'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              All ({allSkillsList.length})
            </button>

            <button
              type="button"
              onClick={() => setStatusFilter('Used in Projects')}
              className={`px-2.5 py-1 rounded-md text-xs flex items-center gap-1.5 transition-colors ${
                statusFilter === 'Used in Projects'
                  ? 'bg-accent-cyan/20 text-accent-cyan border border-accent-cyan/40 font-medium'
                  : 'text-slate-400 hover:text-accent-cyan'
              }`}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-accent-cyan"></span>
              <span>Used in Projects ({projectSkillsCount})</span>
            </button>

            <button
              type="button"
              onClick={() => setStatusFilter('Familiar')}
              className={`px-2.5 py-1 rounded-md text-xs flex items-center gap-1.5 transition-colors ${
                statusFilter === 'Familiar'
                  ? 'bg-slate-700 text-slate-200 font-medium'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-slate-400"></span>
              <span>Familiar ({familiarSkillsCount})</span>
            </button>
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {filteredSkills.map((skill, index) => {
            const isUsedInProjects = skill.status === 'Used in Projects';

            return (
              <div
                key={`${skill.categoryId}-${skill.name}-${index}`}
                className="p-4 rounded-xl bg-dark-card/70 border border-white/5 hover:border-white/15 transition-all flex flex-col justify-between group hover:-translate-y-0.5"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="text-base font-bold text-white group-hover:text-accent-cyan transition-colors">
                      {skill.name}
                    </span>

                    <span
                      className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-mono font-medium ${
                        isUsedInProjects
                          ? 'bg-accent-cyan/10 text-accent-cyan border border-accent-cyan/30'
                          : 'bg-slate-800 text-slate-300 border border-slate-700'
                      }`}
                    >
                      {isUsedInProjects && <span className="w-1 h-1 rounded-full bg-accent-cyan"></span>}
                      {skill.status}
                    </span>
                  </div>

                  <p className="text-xs text-slate-400 leading-relaxed mb-3">
                    {skill.highlight}
                  </p>
                </div>

                <div className="pt-2 border-t border-white/5 flex items-center justify-between text-[11px] text-slate-500 font-mono">
                  <span>{skill.categoryTitle}</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
