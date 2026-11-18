import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Mail, Phone, MapPin, Send, Check, Copy, Download, Heart, Sparkles, MessageSquare, AlertCircle } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import confetti from 'canvas-confetti';

export const ContactSection: React.FC = () => {
  const { content } = useLanguage();
  const { contact } = content;

  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'' | 'submitting' | 'success' | 'error'>('');
  const [statusMessage, setStatusMessage] = useState('');
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('blkfatine2@gmail.com');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) return;

    setStatus('submitting');
    setStatusMessage('');

    try {
      // POST to /api/contact matching the GitHub repository's exact architecture
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name.trim(),
          email: formData.email.trim(),
          message: formData.message.trim(),
        }),
      });

      const data = await response.json().catch(() => null);

      if (response.ok) {
        setStatus('success');
        setStatusMessage(contact.successMessage);
        setFormData({ name: '', email: '', message: '' });

        // Trigger celebratory confetti burst
        confetti({
          particleCount: 90,
          spread: 75,
          origin: { y: 0.6 },
          colors: ['#FFD6DF', '#C3ACFF', '#FFEAA0', '#9FD7EF', '#2E2833'],
        });

        setTimeout(() => {
          setStatus('');
        }, 8000);
      } else {
        setStatus('error');
        setStatusMessage(data?.error || contact.errorMessage);
      }
    } catch (err) {
      console.error('Contact submission error:', err);
      setStatus('error');
      setStatusMessage(contact.errorMessage);
    }
  };

  return (
    <section id="contact" className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-14">
        <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-[#FFD6DF] softy-border softy-shadow-sm mb-4">
          <Heart size={14} className="text-[#2E2833] fill-[#2E2833]" />
          <span className="font-heading font-bold text-xs uppercase tracking-wider text-[#2E2833]">
            {contact.badge}
          </span>
        </div>
        <h2 className="font-heading font-bold text-3xl sm:text-4xl text-[#2E2833] tracking-tight mb-4">
          {contact.heading}
        </h2>
        <p className="text-base sm:text-lg text-[#2E2833]/80 leading-relaxed">
          {contact.subheading}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Column: Direct Contact Info & Socials */}
        <div className="lg:col-span-5 space-y-6">
          
          <div className="bg-white softy-border rounded-3xl p-6 sm:p-8 softy-shadow-lg">
            <h3 className="font-heading font-bold text-xl text-[#2E2833] mb-6 flex items-center space-x-2">
              <span>{contact.directInfoTitle}</span>
              <Sparkles size={18} className="text-[#C3ACFF]" />
            </h3>

            <div className="space-y-4">
              
              {/* Email Card */}
              <div className="bg-[#FFF7EC] softy-border rounded-2xl p-4 flex items-center justify-between group">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-xl bg-[#C3ACFF] softy-border flex items-center justify-center flex-shrink-0">
                    <Mail size={18} className="text-[#2E2833]" />
                  </div>
                  <div>
                    <p className="text-[11px] font-heading font-bold text-[#2E2833]/60 uppercase">
                      {contact.emailLabel}
                    </p>
                    <a
                      href="mailto:blkfatine2@gmail.com"
                      className="font-bold text-sm text-[#2E2833] hover:underline"
                    >
                      blkfatine2@gmail.com
                    </a>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="w-8 h-8 rounded-full bg-white softy-border flex items-center justify-center text-[#2E2833] hover:bg-[#FFEAA0] transition-colors cursor-pointer"
                  title="Copy email address"
                >
                  {copiedEmail ? <Check size={14} className="text-emerald-600" /> : <Copy size={14} />}
                </button>
              </div>

              {/* Phone Card */}
              <div className="bg-[#FFF7EC] softy-border rounded-2xl p-4 flex items-center space-x-3">
                <div className="w-10 h-10 rounded-xl bg-[#FFEAA0] softy-border flex items-center justify-center flex-shrink-0">
                  <Phone size={18} className="text-[#2E2833]" />
                </div>
                <div>
                  <p className="text-[11px] font-heading font-bold text-[#2E2833]/60 uppercase">
                    {contact.phoneLabel}
                  </p>
                  <a
                    href="tel:+212635291627"
                    className="font-bold text-sm text-[#2E2833] hover:underline"
                  >
                    +212 6 35 29 16 27
                  </a>
                </div>
              </div>

              {/* Location Card */}
              <div className="bg-[#FFF7EC] softy-border rounded-2xl p-4 flex items-center space-x-3">
                <div className="w-10 h-10 rounded-xl bg-[#9FD7EF] softy-border flex items-center justify-center flex-shrink-0">
                  <MapPin size={18} className="text-[#2E2833]" />
                </div>
                <div>
                  <p className="text-[11px] font-heading font-bold text-[#2E2833]/60 uppercase">
                    {contact.locationLabel}
                  </p>
                  <p className="font-bold text-sm text-[#2E2833]">
                    Casablanca, Morocco 🇲🇦
                  </p>
                </div>
              </div>

            </div>

            {/* Social Network Links */}
            <div className="mt-8 pt-6 border-t-2 border-[#2E2833]/15">
              <p className="text-xs font-heading font-bold text-[#2E2833]/70 uppercase tracking-wider mb-3">
                {contact.socialTitle}
              </p>
              <div className="flex space-x-3">
                <a
                  href="https://linkedin.com/in/fatine-belkhammar-791aa1239"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-2.5 px-4 rounded-2xl bg-[#FFF7EC] hover:bg-[#FFEAA0] softy-border softy-shadow-sm flex items-center justify-center space-x-2 font-heading font-bold text-xs uppercase tracking-wider transition-all"
                >
                  <LinkedinIcon width={16} height={16} />
                  <span>LinkedIn</span>
                </a>
                <a
                  href="https://github.com/Blkfatine"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-2.5 px-4 rounded-2xl bg-[#FFF7EC] hover:bg-[#FFEAA0] softy-border softy-shadow-sm flex items-center justify-center space-x-2 font-heading font-bold text-xs uppercase tracking-wider transition-all"
                >
                  <GithubIcon width={16} height={16} />
                  <span>GitHub</span>
                </a>
              </div>
            </div>

            {/* Resume Downloads */}
            <div className="mt-6 pt-6 border-t-2 border-[#2E2833]/15">
              <p className="text-xs font-heading font-bold text-[#2E2833]/70 uppercase tracking-wider mb-3">
                {contact.downloadResumeTitle}
              </p>
              <div className="grid grid-cols-2 gap-3">
                <a
                  href="/CV_Fatine_Belkhammar_EN.pdf"
                  download="Fatine_Belkhammar_CV_EN.pdf"
                  className="py-2.5 px-3 rounded-2xl bg-[#FFD6DF] hover:bg-[#ffbdcb] softy-border softy-shadow-sm flex items-center justify-center space-x-1.5 font-heading font-bold text-xs tracking-wider uppercase transition-all"
                >
                  <Download size={14} />
                  <span>CV (EN)</span>
                </a>
                <a
                  href="/CV_Fatine_Belkhammar_FR.pdf"
                  download="Fatine_Belkhammar_CV_FR.pdf"
                  className="py-2.5 px-3 rounded-2xl bg-[#C3ACFF] hover:bg-[#b092ff] softy-border softy-shadow-sm flex items-center justify-center space-x-1.5 font-heading font-bold text-xs tracking-wider uppercase transition-all"
                >
                  <Download size={14} />
                  <span>CV (FR)</span>
                </a>
              </div>
            </div>

          </div>

        </div>

        {/* Right Column: Message Form */}
        <div className="lg:col-span-7">
          <div className="bg-white softy-border rounded-3xl p-6 sm:p-8 softy-shadow-lg">
            
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 rounded-2xl bg-[#FFD6DF] softy-border flex items-center justify-center">
                <MessageSquare size={20} className="text-[#2E2833]" />
              </div>
              <h3 className="font-heading font-bold text-xl text-[#2E2833]">
                {contact.formTitle}
              </h3>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              
              <div>
                <label className="block text-xs font-heading font-bold uppercase tracking-wider text-[#2E2833] mb-1.5">
                  {contact.nameField} <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder={contact.namePlaceholder}
                  className="w-full px-4 py-3 rounded-2xl bg-[#FFF7EC] softy-border text-sm text-[#2E2833] placeholder-[#2E2833]/40 transition-all font-medium"
                />
              </div>

              <div>
                <label className="block text-xs font-heading font-bold uppercase tracking-wider text-[#2E2833] mb-1.5">
                  {contact.emailField} <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder={contact.emailPlaceholder}
                  className="w-full px-4 py-3 rounded-2xl bg-[#FFF7EC] softy-border text-sm text-[#2E2833] placeholder-[#2E2833]/40 transition-all font-medium"
                />
              </div>

              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <label className="block text-xs font-heading font-bold uppercase tracking-wider text-[#2E2833]">
                    {contact.messageField} <span className="text-red-500">*</span>
                  </label>
                  <span className="text-[11px] text-[#2E2833]/60 font-semibold">
                    {formData.message.length} / 1000
                  </span>
                </div>
                <textarea
                  required
                  rows={5}
                  maxLength={1000}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder={contact.messagePlaceholder}
                  className="w-full px-4 py-3 rounded-2xl bg-[#FFF7EC] softy-border text-sm text-[#2E2833] placeholder-[#2E2833]/40 transition-all resize-none font-medium"
                ></textarea>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="w-full py-4 rounded-full bg-[#2E2833] text-[#FFF7EC] font-heading font-bold text-sm tracking-wider uppercase softy-border softy-btn-press flex items-center justify-center space-x-2 shadow-md hover:bg-[#3B3341] disabled:opacity-50 cursor-pointer"
                >
                  {status === 'submitting' ? (
                    <span>{contact.submitting}</span>
                  ) : (
                    <>
                      <Send size={16} />
                      <span>{contact.submitBtn}</span>
                    </>
                  )}
                </button>
              </div>

            </form>

            {/* Success Feedback Alert */}
            {status === 'success' && (
              <div className="mt-4 p-4 rounded-2xl bg-[#FFD6DF] softy-border softy-shadow-sm flex items-start space-x-3">
                <div className="w-7 h-7 rounded-full bg-white softy-border flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Heart size={14} className="text-[#2E2833] fill-[#2E2833]" />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-sm text-[#2E2833]">
                    {contact.successTitle}
                  </h4>
                  <p className="text-xs text-[#2E2833]/85 mt-0.5 font-medium">
                    {statusMessage}
                  </p>
                </div>
              </div>
            )}

            {/* Error Feedback Alert */}
            {status === 'error' && (
              <div className="mt-4 p-4 rounded-2xl bg-[#FFEAA0] softy-border softy-shadow-sm flex items-start space-x-3">
                <div className="w-7 h-7 rounded-full bg-white softy-border flex items-center justify-center flex-shrink-0 mt-0.5">
                  <AlertCircle size={14} className="text-[#2E2833]" />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-sm text-[#2E2833]">
                    {contact.errorTitle}
                  </h4>
                  <p className="text-xs text-[#2E2833]/85 mt-0.5 font-medium">
                    {statusMessage}
                  </p>
                </div>
              </div>
            )}

          </div>
        </div>

      </div>

    </section>
  );
};
