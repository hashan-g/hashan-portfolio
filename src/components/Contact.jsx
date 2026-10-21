import React, { useState } from 'react';
import { Mail, Download, Copy, Check, Send, CheckCircle2 } from 'lucide-react';
import { Linkedin, Github } from './icons/BrandIcons';
import { profileData } from '../data/profile';

export default function Contact() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
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

    // Build mailto link as reliable fallback for developer portfolios
    const mailtoSubject = encodeURIComponent(formData.subject || `Inquiry from ${formData.name}`);
    const mailtoBody = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    window.location.href = `mailto:${profileData.links.emailRaw}?subject=${mailtoSubject}&body=${mailtoBody}`;

    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 4000);
  };

  return (
    <section id="contact" className="py-24 relative border-t border-white/5 bg-dark-bg/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-cyan/10 border border-accent-cyan/20 text-accent-cyan text-xs font-mono uppercase tracking-wider mb-3">
            <Mail className="w-3.5 h-3.5" />
            <span>Get in Touch</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Contact & Opportunities
          </h2>
          <p className="mt-2 text-slate-400 text-sm sm:text-base max-w-2xl">
            Currently open to opportunities as a Junior Software Developer, Full-Stack Engineer, Python Developer, Data Analyst, or AI/ML Junior Engineer.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Contact & Social Links (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Contact Information Card */}
            <div className="p-6 sm:p-8 rounded-2xl bg-dark-card border border-white/10 space-y-6">
              <h3 className="text-xl font-bold text-white">
                Let's Discuss Opportunities
              </h3>
              
              <p className="text-sm text-slate-300 leading-relaxed">
                Whether you have an open junior position, a collaborative software project, or would like to discuss my work on SpendWise, feel free to reach out directly.
              </p>

              {/* Email Address with Copy Button */}
              <div className="p-4 rounded-xl bg-white/5 border border-white/5 space-y-2">
                <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block">
                  Email Address
                </span>
                <div className="flex items-center justify-between gap-2">
                  <span className="font-mono text-xs sm:text-sm text-accent-cyan truncate">
                    {profileData.links.emailRaw}
                  </span>
                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    className="p-2 rounded-lg bg-white/10 hover:bg-white/15 text-slate-200 transition-colors shrink-0 flex items-center gap-1.5 text-xs"
                    title="Copy Email Address"
                    aria-label="Copy Email Address"
                  >
                    {copiedEmail ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                        <span className="text-emerald-400 text-[11px] font-mono">Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5 text-slate-300" />
                        <span className="text-slate-300 text-[11px] font-mono">Copy</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* LinkedIn Button (Mandatory in Contact Section) */}
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
                <span className="text-xs text-accent-cyan font-mono group-hover:translate-x-1 transition-transform">
                  Profile &rarr;
                </span>
              </a>

              {/* GitHub Button */}
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
                    <span className="text-sm font-bold text-white block">Explore GitHub Repositories</span>
                    <span className="text-xs text-slate-400 font-mono">github.com/hashan-g</span>
                  </div>
                </div>
                <span className="text-xs text-accent-cyan font-mono group-hover:translate-x-1 transition-transform">
                  Repos &rarr;
                </span>
              </a>

              {/* Download CV CTA */}
              <a
                href={profileData.links.resume}
                download="Hashan_Ganegoda_CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl text-sm font-semibold bg-gradient-to-r from-accent-cyan to-accent-indigo text-dark-bg hover:brightness-110 shadow-lg shadow-accent-cyan/15 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-cyan"
              >
                <Download className="w-4 h-4" />
                <span>Download Curriculum Vitae (PDF)</span>
              </a>

            </div>

          </div>

          {/* Right Column: Contact Message Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl bg-dark-card border border-white/10">
              <h3 className="text-xl font-bold text-white mb-2">
                Send a Direct Message
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 mb-6">
                Fill in the details below to generate an email inquiry directly to my inbox.
              </p>

              {formSubmitted && (
                <div className="mb-6 p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>
                    Thank you! Your email client has been prepared. If it didn't open automatically, please email me at <strong className="text-white">{profileData.links.emailRaw}</strong>.
                  </span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name Input */}
                  <div>
                    <label htmlFor="name" className="block text-xs font-mono text-slate-300 mb-1.5">
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
                      className="w-full px-4 py-2.5 rounded-xl bg-dark-surface border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-accent-cyan transition-colors"
                    />
                  </div>

                  {/* Email Input */}
                  <div>
                    <label htmlFor="email" className="block text-xs font-mono text-slate-300 mb-1.5">
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
                      className="w-full px-4 py-2.5 rounded-xl bg-dark-surface border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-accent-cyan transition-colors"
                    />
                  </div>
                </div>

                {/* Subject Input */}
                <div>
                  <label htmlFor="subject" className="block text-xs font-mono text-slate-300 mb-1.5">
                    Subject / Role Opportunity
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="Software Developer Role / Project Discussion"
                    className="w-full px-4 py-2.5 rounded-xl bg-dark-surface border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-accent-cyan transition-colors"
                  />
                </div>

                {/* Message Input */}
                <div>
                  <label htmlFor="message" className="block text-xs font-mono text-slate-300 mb-1.5">
                    Message <span className="text-accent-cyan">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows="4"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Hello Hashan, I came across your portfolio and would like to discuss..."
                    className="w-full px-4 py-2.5 rounded-xl bg-dark-surface border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-accent-cyan transition-colors resize-none"
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="flex items-center justify-center gap-2 w-full py-3 rounded-xl text-sm font-semibold bg-accent-cyan text-dark-bg hover:brightness-110 shadow-lg shadow-accent-cyan/15 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-cyan"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Message via Email</span>
                </button>
              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
