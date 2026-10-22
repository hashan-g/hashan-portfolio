import React, { useState } from 'react';
import {
  Mail,
  Download,
  Copy,
  Check,
  Send,
  ExternalLink,
  Loader2,
  CheckCircle2,
  AlertCircle,
  Info,
  RotateCcw,
} from 'lucide-react';
import { Linkedin, Github } from './icons/BrandIcons';
import { profileData } from '../data/profile';

// Detect whether a genuine Formspree endpoint is configured via environment variables
const FORMSPREE_ENDPOINT = import.meta.env.VITE_FORMSPREE_ENDPOINT?.trim();
const isLiveSubmissionConfigured = Boolean(
  FORMSPREE_ENDPOINT && FORMSPREE_ENDPOINT.startsWith('http')
);

export default function Contact() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [status, setStatus] = useState('idle'); // 'idle' | 'submitting' | 'success' | 'error' | 'fallback_triggered'
  const [errorMessage, setErrorMessage] = useState('');
  const [errors, setErrors] = useState({});
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

    // Real-time clearance of validation error once user types
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Please enter your name.';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters long.';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Please enter your email address.';
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email.trim())) {
        newErrors.email = 'Please enter a valid email address (e.g. name@domain.com).';
      }
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Please enter your message.';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters long.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleOpenMailtoDraft = () => {
    const mailtoSubject = encodeURIComponent(
      formData.subject.trim() || `Inquiry from ${formData.name.trim() || 'Visitor'}`
    );
    const mailtoBody = encodeURIComponent(
      `Name: ${formData.name.trim()}\nEmail: ${formData.email.trim()}\n\nMessage:\n${formData.message.trim()}`
    );
    window.location.href = `mailto:${profileData.links.emailRaw}?subject=${mailtoSubject}&body=${mailtoBody}`;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validate()) {
      return;
    }

    if (isLiveSubmissionConfigured) {
      // Real API POST submission via configured Formspree endpoint
      setStatus('submitting');
      setErrorMessage('');

      try {
        const response = await fetch(FORMSPREE_ENDPOINT, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
          body: JSON.stringify({
            name: formData.name.trim(),
            email: formData.email.trim(),
            subject: formData.subject.trim() || 'Portfolio Contact Inquiry',
            message: formData.message.trim(),
          }),
        });

        if (response.ok) {
          setStatus('success');
          setFormData({ name: '', email: '', subject: '', message: '' });
          setErrors({});
        } else {
          const data = await response.json().catch(() => null);
          const serverError =
            data?.errors?.map((err) => err.message).join(', ') ||
            'Failed to deliver message via web service. Please try again or use the email link.';
          throw new Error(serverError);
        }
      } catch (err) {
        console.error('Contact form submission error:', err);
        setStatus('error');
        setErrorMessage(
          err.message ||
            'Network or service error while submitting the form. You can send your message directly via email.'
        );
      }
    } else {
      // Transparent fallback: opens local email application with draft
      handleOpenMailtoDraft();
      setStatus('fallback_triggered');
    }
  };

  const handleResetForm = () => {
    setStatus('idle');
    setFormData({ name: '', email: '', subject: '', message: '' });
    setErrors({});
    setErrorMessage('');
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
                  className="px-2.5 py-1.5 rounded-lg bg-white/10 hover:bg-white/15 text-slate-200 transition-colors shrink-0 flex items-center gap-1.5 text-xs font-mono focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-cyan"
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
                className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl text-xs sm:text-sm font-semibold bg-accent-cyan/15 hover:bg-accent-cyan/25 text-accent-cyan border border-accent-cyan/30 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-cyan"
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
              className="flex items-center justify-between p-4 rounded-xl bg-[#0A66C2]/10 hover:bg-[#0A66C2]/20 border border-[#0A66C2]/30 text-white transition-all group focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-cyan"
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
              className="flex items-center justify-between p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white transition-all group focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-cyan"
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

          {/* Right Column: Contact Form with Real Submission & Transparent Fallback (7 cols) */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl bg-dark-card border border-white/10 space-y-5">
              
              {/* Card Header & Status Badge */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-white/5 pb-4">
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-white">
                    Send a Message
                  </h3>
                  <p className="text-xs text-slate-400 mt-0.5">
                    Direct communication for roles, questions, or project inquiries.
                  </p>
                </div>

                {/* Transparent Status Indicator */}
                <div className="shrink-0">
                  {isLiveSubmissionConfigured ? (
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-mono bg-emerald-500/10 border border-emerald-500/30 text-emerald-300">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                      <span>Live Submission Ready</span>
                    </span>
                  ) : (
                    <span
                      title="Direct web submission pending VITE_FORMSPREE_ENDPOINT. Mailto client draft active."
                      className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-mono bg-white/5 border border-white/10 text-slate-300"
                    >
                      <span className="w-2 h-2 rounded-full bg-amber-400/80"></span>
                      <span>Mailto Draft Active</span>
                    </span>
                  )}
                </div>
              </div>

              {/* Status Message Banners */}
              {status === 'success' && (
                <div className="p-5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 space-y-3">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-emerald-400 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-sm font-bold text-white">Message Delivered Successfully!</h4>
                      <p className="text-xs text-emerald-200 mt-1 leading-relaxed">
                        Thank you for reaching out. Your message has been sent to Hashan Ganegoda at{' '}
                        <strong className="text-white">{profileData.links.emailRaw}</strong>. I will review it and get back to you shortly.
                      </p>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={handleResetForm}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-emerald-500/20 hover:bg-emerald-500/30 text-white border border-emerald-500/30 transition-colors"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    <span>Send Another Message</span>
                  </button>
                </div>
              )}

              {status === 'error' && (
                <div className="p-4 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-300 space-y-3">
                  <div className="flex items-start gap-2.5">
                    <AlertCircle className="w-5 h-5 text-rose-400 shrink-0 mt-0.5" />
                    <div className="text-xs leading-relaxed">
                      <span className="font-bold text-white block mb-0.5">Submission Could Not Complete</span>
                      <span>{errorMessage}</span>
                    </div>
                  </div>
                  <div className="flex flex-wrap items-center gap-2 pt-1">
                    <button
                      type="button"
                      onClick={() => setStatus('idle')}
                      className="px-3 py-1 rounded-lg text-xs font-medium bg-white/10 hover:bg-white/15 text-white border border-white/10 transition-colors"
                    >
                      Try Again
                    </button>
                    <button
                      type="button"
                      onClick={handleOpenMailtoDraft}
                      className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-semibold bg-accent-cyan/20 hover:bg-accent-cyan/30 text-accent-cyan border border-accent-cyan/30 transition-colors"
                    >
                      <Mail className="w-3.5 h-3.5" />
                      <span>Send Draft via Email App Instead</span>
                    </button>
                  </div>
                </div>
              )}

              {status === 'fallback_triggered' && (
                <div className="p-4 rounded-xl bg-accent-cyan/10 border border-accent-cyan/30 text-slate-200 space-y-3">
                  <div className="flex items-start gap-2.5">
                    <Info className="w-5 h-5 text-accent-cyan shrink-0 mt-0.5" />
                    <div className="text-xs leading-relaxed">
                      <span className="font-bold text-white block mb-0.5">
                        Opening Email Application...
                      </span>
                      <span>
                        A message draft has been prepared and addressed to{' '}
                        <strong className="text-white">{profileData.links.emailRaw}</strong> in your default email client.
                        If your email client did not open automatically, you can send your message directly using the email button on the left.
                      </span>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => setStatus('idle')}
                    className="px-3 py-1 rounded-lg text-xs font-medium bg-white/10 hover:bg-white/15 text-white border border-white/10 transition-colors"
                  >
                    Return to Form
                  </button>
                </div>
              )}

              {/* Notice when endpoint is not configured */}
              {!isLiveSubmissionConfigured && status === 'idle' && (
                <div className="p-3 rounded-xl bg-white/5 border border-white/5 flex items-start gap-2 text-xs text-slate-400">
                  <Info className="w-4 h-4 text-accent-cyan shrink-0 mt-0.5" />
                  <span>
                    Direct web submission endpoint is pending configuration. Submitting this form prepares a formatted message in your email client addressed to <strong className="text-slate-300">{profileData.links.emailRaw}</strong>.
                  </span>
                </div>
              )}

              {/* Main Form Fields */}
              {status !== 'success' && (
                <form onSubmit={handleSubmit} noValidate className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-xs font-mono text-slate-300 mb-1">
                        Your Name <span className="text-accent-cyan">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        disabled={status === 'submitting'}
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Jane Doe"
                        className={`w-full px-3.5 py-2.5 rounded-xl bg-dark-surface border text-white placeholder-slate-500 text-xs sm:text-sm focus:outline-none transition-colors ${
                          errors.name
                            ? 'border-rose-500/80 focus:border-rose-500'
                            : 'border-white/10 focus:border-accent-cyan'
                        } disabled:opacity-50`}
                      />
                      {errors.name && (
                        <p className="mt-1 text-[11px] font-mono text-rose-400 flex items-center gap-1">
                          <span>•</span>
                          <span>{errors.name}</span>
                        </p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-xs font-mono text-slate-300 mb-1">
                        Your Email <span className="text-accent-cyan">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        disabled={status === 'submitting'}
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="jane@company.com"
                        className={`w-full px-3.5 py-2.5 rounded-xl bg-dark-surface border text-white placeholder-slate-500 text-xs sm:text-sm focus:outline-none transition-colors ${
                          errors.email
                            ? 'border-rose-500/80 focus:border-rose-500'
                            : 'border-white/10 focus:border-accent-cyan'
                        } disabled:opacity-50`}
                      />
                      {errors.email && (
                        <p className="mt-1 text-[11px] font-mono text-rose-400 flex items-center gap-1">
                          <span>•</span>
                          <span>{errors.email}</span>
                        </p>
                      )}
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
                      disabled={status === 'submitting'}
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder="Software Developer Role / Project Discussion"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-dark-surface border border-white/10 text-white placeholder-slate-500 text-xs sm:text-sm focus:outline-none focus:border-accent-cyan transition-colors disabled:opacity-50"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-xs font-mono text-slate-300 mb-1">
                      Message <span className="text-accent-cyan">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows="4"
                      disabled={status === 'submitting'}
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Hello Hashan, we reviewed your portfolio and would like to connect regarding..."
                      className={`w-full px-3.5 py-2.5 rounded-xl bg-dark-surface border text-white placeholder-slate-500 text-xs sm:text-sm focus:outline-none transition-colors resize-none ${
                        errors.message
                          ? 'border-rose-500/80 focus:border-rose-500'
                          : 'border-white/10 focus:border-accent-cyan'
                      } disabled:opacity-50`}
                    ></textarea>
                    {errors.message && (
                      <p className="mt-1 text-[11px] font-mono text-rose-400 flex items-center gap-1">
                        <span>•</span>
                        <span>{errors.message}</span>
                      </p>
                    )}
                  </div>

                  {/* Submit Button with Loading State */}
                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="flex items-center justify-center gap-2 w-full py-2.5 sm:py-3 rounded-xl text-xs sm:text-sm font-semibold bg-accent-cyan text-dark-bg hover:bg-sky-300 shadow-md shadow-accent-cyan/15 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-cyan disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {status === 'submitting' ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>Sending Message...</span>
                      </>
                    ) : isLiveSubmissionConfigured ? (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Send Message</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Prepare Email Draft (Mail Client)</span>
                      </>
                    )}
                  </button>

                  {/* Clarification footer below button */}
                  <div className="text-[11px] font-mono text-slate-400 text-center pt-1">
                    {isLiveSubmissionConfigured ? (
                      <span>Direct form delivery configured via Formspree API.</span>
                    ) : (
                      <span>
                        Opens your email client pre-addressed to {profileData.links.emailRaw}
                      </span>
                    )}
                  </div>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
