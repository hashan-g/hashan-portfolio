import React, { useState } from 'react';
import { Mail, Download, Copy, Check, Send, ExternalLink } from 'lucide-react';
import { Linkedin, Github } from './icons/BrandIcons';
import { profileData } from '../data/profile';

export default function Contact() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [formDrafted, setFormDrafted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profileData.links.emailRaw);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    // Direct mailto draft trigger with encoded fields
    const mailtoSubject = encodeURIComponent(formData.subject || `Inquiry from ${formData.name}`);
    const mailtoBody = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    window.location.href = `mailto:${profileData.links.emailRaw}?subject=${mailtoSubject}&body=${mailtoBody}`;

    setFormDrafted(true);
    setTimeout(() => setFormDrafted(false), 5000);
  };

  return (
    <section id="contact" className="py-20 relative border-t border-white/5 bg-dark-bg/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-cyan/10 border border-accent-cyan/20 text-accent-cyan text-xs font-mono uppercase tracking-wider mb-2">
            <Mail className="w-3.5 h-3.5" />
            <span>Connect &amp; Inquire</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
            Contact &amp; Opportunities
          </h2>
          <p className="mt-2 text-slate-400 text-sm sm:text-base max-w-2xl">
            Open to junior software developer, data analytics, and applied AI opportunities. Let's discuss how my skills and background can contribute to your team.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column: Direct Links & Action Cards (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Direct Email Card */}
            <div className="p-5 sm:p-6 rounded-2xl bg-dark-card border border-white/10 space-y-4">
              <span className="text-xs font-mono uppercase tracking-wider text-slate-400 block font-semibold">
                Direct Email Communication
              </span>

              <div className="flex items-center justify-between gap-2 p-3 rounded-xl bg-white/5 border border-white/5">
                <span className="font-mono text-xs sm:text-sm text-accent-cyan truncate">
                  {profileData.links.emailRaw}
                </span>

                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="px-2.5 py-1.5 rounded-lg bg-white/10 hover:bg-white/15 text-slate-200 transition-colors shrink-0 flex items-center gap-1.5 text-xs font-mono"
                  title="Copy Email Address"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-slate-300" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              <a
                href={`mailto:${profileData.links.emailRaw}?subject=Inquiry%20regarding%20Software%20Developer%20Role`}
                className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl text-xs sm:text-sm font-semibold bg-accent-cyan/15 hover:bg-accent-cyan/25 text-accent-cyan border border-accent-cyan/30 transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span>Send Email via Default Client</span>
              </a>
            </div>

            {/* LinkedIn Card */}
            <a
              href={profileData.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-4 rounded-xl bg-[#0A66C2]/10 hover:bg-[#0A66C2]/20 border border-[#0A66C2]/30 text-white transition-all group"
            >
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-[#0A66C2] flex items-center justify-center text-white shrink-0">
                  <Linkedin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-sm font-bold text-white block">Connect on LinkedIn</span>
                  <span className="text-xs text-slate-300 font-mono">/in/hashan-ganegoda</span>
                </div>
              </div>
              <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-white transition-colors" />
            </a>

            {/* GitHub Card */}
            <a
              href={profileData.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white transition-all group"
            >
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-dark-bg border border-white/10 flex items-center justify-center text-accent-cyan shrink-0">
                  <Github className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-sm font-bold text-white block">Visit GitHub Profile</span>
                  <span className="text-xs text-slate-400 font-mono">github.com/hashan-g</span>
                </div>
              </div>
              <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-white transition-colors" />
            </a>

            {/* Download CV Card */}
            <a
              href={profileData.links.resume}
              download="Hashan_Ganegoda_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-3 rounded-xl text-xs sm:text-sm font-semibold bg-white/10 hover:bg-white/15 text-white border border-white/15 transition-all shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-cyan"
            >
              <Download className="w-4 h-4 text-accent-cyan" />
              <span>Download Curriculum Vitae (PDF)</span>
            </a>

          </div>

          {/* Right Column: Transparent Email Message Draft Composer (7 cols) */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl bg-dark-card border border-white/10 space-y-4">
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-white">
                  Compose Email Draft
                </h3>
                <p className="text-xs text-slate-400 mt-0.5">
                  Fills and opens a draft in your email application addressed directly to Hashan.
                </p>
              </div>

              {formDrafted && (
                <div className="p-3.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs">
                  Opening your email client... If it doesn't open automatically, you can email directly at <strong className="text-white">{profileData.links.emailRaw}</strong>.
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-3.5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div>
                    <label htmlFor="name" className="block text-xs font-mono text-slate-300 mb-1">
                      Your Name <span className="text-accent-cyan">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Jane Doe"
                      className="w-full px-3.5 py-2 rounded-xl bg-dark-surface border border-white/10 text-white placeholder-slate-500 text-xs sm:text-sm focus:outline-none focus:border-accent-cyan transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-xs font-mono text-slate-300 mb-1">
                      Your Email <span className="text-accent-cyan">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="jane@company.com"
                      className="w-full px-3.5 py-2 rounded-xl bg-dark-surface border border-white/10 text-white placeholder-slate-500 text-xs sm:text-sm focus:outline-none focus:border-accent-cyan transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-xs font-mono text-slate-300 mb-1">
                    Subject / Opportunity
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="Software Developer Role / Project Discussion"
                    className="w-full px-3.5 py-2 rounded-xl bg-dark-surface border border-white/10 text-white placeholder-slate-500 text-xs sm:text-sm focus:outline-none focus:border-accent-cyan transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-mono text-slate-300 mb-1">
                    Message <span className="text-accent-cyan">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows="4"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Hello Hashan, we reviewed your portfolio and would like to connect regarding..."
                    className="w-full px-3.5 py-2 rounded-xl bg-dark-surface border border-white/10 text-white placeholder-slate-500 text-xs sm:text-sm focus:outline-none focus:border-accent-cyan transition-colors resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl text-xs sm:text-sm font-semibold bg-accent-cyan text-dark-bg hover:bg-sky-300 shadow-md shadow-accent-cyan/15 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-cyan"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Open Email Draft</span>
                </button>
              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
