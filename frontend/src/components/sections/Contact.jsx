import React, { useState } from 'react';
import { api } from '../../services/api';

export default function Contact({ profile, onShowToast }) {
  const emailAddress = "pushparani10290@gmail.com";
  const linkedinUrl = "https://www.linkedin.com/in/pushpa-rani-36b6052a9/";

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'Recruitment Opportunity',
    message: ''
  });

  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedSuccess, setSubmittedSuccess] = useState(false);

  const subjectOptions = [
    'Recruitment Opportunity',
    'Data Analytics / BI Inquiry',
    'AI Workflow Consultation',
    'Project Collaboration',
    'General Inquiry'
  ];

  const validate = () => {
    const errors = {};
    if (!formData.name.trim()) {
      errors.name = 'Please enter your full name';
    } else if (formData.name.trim().length < 2) {
      errors.name = 'Name must be at least 2 characters';
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      errors.email = 'Please enter your email address';
    } else if (!emailPattern.test(formData.email.trim())) {
      errors.email = 'Please provide a valid email address';
    }

    if (!formData.subject.trim()) {
      errors.subject = 'Please select a subject';
    }

    if (!formData.message.trim()) {
      errors.message = 'Please write your message';
    } else if (formData.message.trim().length < 10) {
      errors.message = 'Message must be at least 10 characters long';
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (formErrors[name]) {
      setFormErrors((prev) => ({ ...prev, [name]: null }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setSubmittedSuccess(false);

    try {
      const response = await api.submitContact(formData);
      setIsSubmitting(false);
      setSubmittedSuccess(true);
      setFormData({
        name: '',
        email: '',
        subject: 'Recruitment Opportunity',
        message: ''
      });
      if (onShowToast) {
        onShowToast({
          type: 'success',
          message: response?.message || 'Your inquiry has been submitted to Pushpa Rani successfully!'
        });
      }
    } catch (err) {
      setIsSubmitting(false);
      if (onShowToast) {
        onShowToast({
          type: 'error',
          message: err?.message || 'Failed to submit inquiry. Please use the direct Email button below.'
        });
      }
    }
  };

  return (
    <section className="w-full max-w-[82rem] mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-28" id="contact">
      <div className="bg-[#F4F3EE] rounded-3xl p-6 sm:p-10 lg:p-14 relative overflow-hidden border border-slate-200/90 shadow-subtle">
        {/* Soft Background Accents */}
        <div className="absolute -right-24 -bottom-24 w-96 h-96 rounded-full bg-blue-500/5 blur-[120px] pointer-events-none -z-10" />
        <div className="absolute -left-24 -top-24 w-96 h-96 rounded-full bg-sky-500/5 blur-[120px] pointer-events-none -z-10" />

        <div className="flex flex-col gap-10 sm:gap-12 relative z-10">
          {/* Header */}
          <div className="flex flex-col gap-2 max-w-2xl">
            <div className="inline-flex items-center gap-2 text-blue-700 font-mono text-xs tracking-wider uppercase font-semibold">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-600 shadow-[0_0_6px_#2563eb] animate-pulse" />
              07 / Direct Reach-Out
            </div>
            <h2 className="font-headline font-bold font-section-headline text-slate-950 tracking-tight">
              Let&apos;s Build Something <span className="text-blue-600">Intelligent</span>
            </h2>
            <p className="font-body text-base sm:text-lg text-slate-600 leading-relaxed pt-1">
              Actively open to high-impact internships, quantitative data analytics roles, business intelligence consulting, and creative technology collaboration.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left 5 Cols: Direct Contact Channels (Official Email & LinkedIn) */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              {/* Official Email Card — Guaranteed mailto link */}
              <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200/90 shadow-subtle flex flex-col justify-between gap-6 transition-all hover:shadow-elevated hover:border-blue-300 group">
                <div className="flex flex-col gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 border border-blue-100 flex items-center justify-center shadow-sm">
                    <span className="material-symbols-outlined text-[26px]">mail</span>
                  </div>

                  <div className="flex flex-col gap-1">
                    <span className="font-mono text-xs text-slate-400 uppercase font-semibold tracking-wider">
                      DIRECT EMAIL ACCESS
                    </span>
                    {/* Clickable visible email anchor */}
                    <a
                      href={`mailto:${emailAddress}`}
                      target="_self"
                      id="contact-visible-email"
                      className="font-headline font-bold text-base sm:text-lg text-slate-950 hover:text-blue-600 transition-colors break-all pt-1 cursor-pointer relative z-10"
                      title={`Click to open default email client to email ${emailAddress}`}
                    >
                      {emailAddress}
                    </a>
                  </div>

                  <p className="font-body text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Direct reach-out for recruiters, internships, data analytics opportunities, and executive project discussions.
                  </p>
                </div>

                <div>
                  {/* Semantic CTA button with guaranteed mailto */}
                  <a
                    href={`mailto:${emailAddress}`}
                    target="_self"
                    id="contact-email-pushpa-button"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-headline text-xs font-bold shadow-glow-primary hover:shadow-lg transition-all duration-200 w-full sm:w-auto cursor-pointer relative z-10"
                    title={`Send an email directly to ${emailAddress}`}
                  >
                    <span className="pointer-events-none">Email Pushpa</span>
                    <span className="material-symbols-outlined text-[16px] pointer-events-none">send</span>
                  </a>
                </div>
              </div>

              {/* Verified LinkedIn Card */}
              <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200/90 shadow-subtle flex flex-col justify-between gap-6 transition-all hover:shadow-elevated hover:border-sky-300 group">
                <div className="flex flex-col gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-sky-50 text-sky-600 border border-sky-100 flex items-center justify-center shadow-sm">
                    <span className="material-symbols-outlined text-[26px]">share</span>
                  </div>

                  <div className="flex flex-col gap-1">
                    <span className="font-mono text-xs text-slate-400 uppercase font-semibold tracking-wider">
                      PROFESSIONAL NETWORK
                    </span>
                    {/* Clickable visible LinkedIn anchor */}
                    <a
                      href={linkedinUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      id="contact-visible-linkedin"
                      className="font-headline font-bold text-base sm:text-lg text-slate-950 hover:text-sky-600 transition-colors pt-1"
                      title="Open Pushpa Rani's verified LinkedIn profile in a new tab"
                    >
                      Pushpa Rani
                    </a>
                  </div>

                  <p className="font-body text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Connect professionally on LinkedIn, review academic updates, and initiate recruiter conversations directly.
                  </p>
                </div>

                <div>
                  <a
                    href={linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    id="contact-linkedin-button"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-sky-50 hover:bg-sky-100 text-sky-700 font-headline text-xs font-bold border border-sky-200 shadow-sm transition-all duration-200 w-full sm:w-auto"
                    title="Open LinkedIn profile"
                  >
                    <span>Connect on LinkedIn</span>
                    <span className="material-symbols-outlined text-[16px]">open_in_new</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Right 7 Cols: Direct Message Transmission Form */}
            <div className="lg:col-span-7 bg-white border border-slate-200/90 rounded-3xl p-6 sm:p-8 lg:p-10 shadow-subtle flex flex-col gap-6">
              <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                <div className="flex items-center gap-2.5">
                  <span className="material-symbols-outlined text-blue-600 text-[24px]">contact_mail</span>
                  <h3 className="font-headline font-bold text-lg sm:text-xl text-slate-950">Send a Direct Message</h3>
                </div>
                <span className="font-mono text-[11px] text-slate-500 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_6px_#10b981]" />
                  REST API Active
                </span>
              </div>

              {submittedSuccess && (
                <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-900 flex items-start gap-3">
                  <span className="material-symbols-outlined text-emerald-600 text-[22px] mt-0.5">check_circle</span>
                  <div className="flex flex-col">
                    <span className="font-headline font-bold text-sm text-emerald-950">Message Sent!</span>
                    <p className="font-body text-xs text-emerald-700 mt-0.5">
                      Thank you for reaching out. Your transmission has been logged and Pushpa will review it promptly.
                    </p>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="flex flex-col gap-4" noValidate>
                {/* Name & Email Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="name" className="font-headline text-xs font-semibold text-slate-700">
                      Your Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Talent Acquisition Lead"
                      className={`px-3.5 py-2.5 rounded-xl bg-slate-50 border text-xs text-slate-900 placeholder:text-slate-400 focus:outline-none focus:bg-white transition-colors ${
                        formErrors.name 
                          ? 'border-red-500 focus:ring-1 focus:ring-red-500' 
                          : 'border-slate-200 focus:border-blue-500 focus:ring-1 focus:ring-blue-500'
                      }`}
                    />
                    {formErrors.name && (
                      <span className="text-[11px] text-red-500 font-medium">{formErrors.name}</span>
                    )}
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="email" className="font-headline text-xs font-semibold text-slate-700">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="recruiter@enterprise.com"
                      className={`px-3.5 py-2.5 rounded-xl bg-slate-50 border text-xs text-slate-900 placeholder:text-slate-400 focus:outline-none focus:bg-white transition-colors ${
                        formErrors.email 
                          ? 'border-red-500 focus:ring-1 focus:ring-red-500' 
                          : 'border-slate-200 focus:border-blue-500 focus:ring-1 focus:ring-blue-500'
                      }`}
                    />
                    {formErrors.email && (
                      <span className="text-[11px] text-red-500 font-medium">{formErrors.email}</span>
                    )}
                  </div>
                </div>

                {/* Subject Selection */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="subject" className="font-headline text-xs font-semibold text-slate-700">
                    Topic / Category <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-900 focus:outline-none focus:bg-white focus:border-blue-500 transition-colors"
                  >
                    {subjectOptions.map((opt) => (
                      <option key={opt} value={opt} className="bg-white text-slate-900">
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Message */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="message" className="font-headline text-xs font-semibold text-slate-700">
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Outline your team's role, collaborative initiative, or project scope..."
                    className={`px-3.5 py-2.5 rounded-xl bg-slate-50 border text-xs text-slate-900 placeholder:text-slate-400 focus:outline-none focus:bg-white transition-colors ${
                      formErrors.message 
                        ? 'border-red-500 focus:ring-1 focus:ring-red-500' 
                        : 'border-slate-200 focus:border-blue-500 focus:ring-1 focus:ring-blue-500'
                    }`}
                  />
                  {formErrors.message && (
                    <span className="text-[11px] text-red-500 font-medium">{formErrors.message}</span>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`mt-1 inline-flex items-center justify-center gap-2 py-3 px-6 rounded-xl font-headline text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 shadow-glow-primary transition-all duration-200 ${
                    isSubmitting ? 'opacity-70 cursor-not-allowed' : 'active:scale-98'
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      <span>Transmitting via REST API...</span>
                    </>
                  ) : (
                    <>
                      <span>Transmit Message</span>
                      <span className="material-symbols-outlined text-[16px]">send</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
