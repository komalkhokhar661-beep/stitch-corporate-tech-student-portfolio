import React, { useState } from 'react';
import { api } from '../../services/api';

export default function Contact({ profile, onShowToast }) {
  const emailAddress = profile?.email || '2405301078@geetauniversity.edu.in';
  const linkedinUrl = profile?.linkedin || 'https://www.linkedin.com/in/pushpa-rani-36b652a9';

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
    'Project Collaboration',
    'Data Analytics / BI Inquiry',
    'AI Workflow Consultation',
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
      errors.subject = 'Please select or enter a subject';
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
      onShowToast({
        type: 'success',
        message: response.message || 'Your inquiry has been submitted to Pushpa Rani successfully!'
      });
    } catch (err) {
      setIsSubmitting(false);
      onShowToast({
        type: 'error',
        message: err.message || 'Failed to submit inquiry. Please try again or email directly.'
      });
    }
  };

  return (
    <section className="w-full max-w-[80rem] mx-auto px-margin-mobile lg:px-margin py-space-xl lg:py-space-2xl" id="contact">
      <div className="bg-surface-container-lowest rounded-3xl p-space-lg lg:p-space-2xl shadow-xl border border-outline-variant/30 relative overflow-hidden">
        {/* Glow Micro-Accents */}
        <div className="absolute -right-20 -bottom-20 w-80 h-80 rounded-full bg-surface-variant opacity-60 blur-3xl pointer-events-none" />

        <div className="flex flex-col gap-space-xl relative z-10">
          {/* Header */}
          <div className="flex flex-col gap-space-xs max-w-2xl">
            <div className="inline-flex items-center gap-2 text-primary font-code-badge text-xs tracking-wider uppercase font-semibold">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              Direct Collaboration
            </div>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-on-surface">
              Let&apos;s Connect
            </h2>
            <p className="font-body text-base sm:text-lg text-on-surface-variant leading-relaxed">
              I&apos;m open to opportunities involving business, analytics, technology and creative problem-solving.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-start">
            {/* Left 5 Cols: Direct Channel Cards */}
            <div className="lg:col-span-5 flex flex-col gap-space-md">
              {/* Email Card */}
              <div className="p-space-lg rounded-3xl bg-surface-container-low border border-outline-variant/30 flex flex-col justify-between gap-4 shadow-sm hover:shadow-md transition-all">
                <div className="flex flex-col gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-surface-container-lowest flex items-center justify-center text-primary shadow-sm">
                    <span className="material-symbols-outlined text-[24px]">mail</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="font-code-badge text-xs text-secondary uppercase font-semibold tracking-wider">
                      Email Address
                    </span>
                    <a
                      href={`mailto:${emailAddress}`}
                      className="font-display font-bold text-base sm:text-lg text-on-surface hover:text-primary transition-colors break-all pt-1"
                    >
                      {emailAddress}
                    </a>
                  </div>
                  <p className="font-body text-xs text-on-surface-variant leading-relaxed">
                    Reach out directly for internships, project inquiries, or analytical opportunities.
                  </p>
                </div>
                <div>
                  <a
                    href={`mailto:${emailAddress}`}
                    className="inline-flex items-center justify-center gap-2 px-space-lg py-2.5 rounded-xl bg-primary-container hover:bg-primary text-on-primary font-display text-xs font-bold shadow-md transition-all w-full sm:w-auto"
                  >
                    <span>Email Me</span>
                    <span className="material-symbols-outlined text-[16px]">send</span>
                  </a>
                </div>
              </div>

              {/* LinkedIn Card */}
              <div className="p-space-lg rounded-3xl bg-surface-container-low border border-outline-variant/30 flex flex-col justify-between gap-4 shadow-sm hover:shadow-md transition-all">
                <div className="flex flex-col gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-surface-container-lowest flex items-center justify-center text-primary shadow-sm">
                    <span className="material-symbols-outlined text-[24px]">share</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="font-code-badge text-xs text-secondary uppercase font-semibold tracking-wider">
                      LinkedIn Profile
                    </span>
                    <a
                      href={linkedinUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-display font-bold text-base sm:text-lg text-on-surface hover:text-primary transition-colors pt-1"
                    >
                      Pushpa Rani
                    </a>
                  </div>
                  <p className="font-body text-xs text-on-surface-variant leading-relaxed">
                    Connect professionally, explore background updates, and build industry connections.
                  </p>
                </div>
                <div>
                  <a
                    href={linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-space-lg py-2.5 rounded-xl bg-surface-container-lowest hover:bg-surface-container text-primary font-display text-xs font-bold border border-outline-variant/30 shadow-sm transition-all w-full sm:w-auto"
                  >
                    <span>Connect on LinkedIn</span>
                    <span className="material-symbols-outlined text-[16px]">open_in_new</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Right 7 Cols: Full-Stack Contact Form */}
            <div className="lg:col-span-7 bg-surface-container-low/70 border border-outline-variant/30 rounded-3xl p-6 sm:p-8 flex flex-col gap-5">
              <div className="flex items-center justify-between pb-2 border-b border-outline-variant/20">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary text-[22px]">contact_mail</span>
                  <h3 className="font-display font-bold text-lg text-on-surface">Send a Message</h3>
                </div>
                <span className="font-code-badge text-[11px] text-secondary flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span> REST API Active
                </span>
              </div>

              {submittedSuccess && (
                <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-900 flex items-start gap-3">
                  <span className="material-symbols-outlined text-emerald-600 text-[22px] mt-0.5">check_circle</span>
                  <div className="flex flex-col">
                    <span className="font-display font-bold text-sm">Message Sent Successfully!</span>
                    <p className="font-body text-xs text-emerald-800 mt-0.5">
                      Thank you for contacting Pushpa Rani. Your message has been saved in the system, and a reply will follow shortly.
                    </p>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="flex flex-col gap-4" noValidate>
                {/* Name & Email Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="name" className="font-display text-xs font-semibold text-on-surface">
                      Your Name <span className="text-error">*</span>
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Rahul Sharma"
                      className={`px-3.5 py-2.5 rounded-xl bg-surface-container-lowest border text-xs text-on-surface focus:outline-none transition-colors ${
                        formErrors.name 
                          ? 'border-error focus:ring-1 focus:ring-error' 
                          : 'border-outline-variant/50 focus:border-primary focus:ring-1 focus:ring-primary'
                      }`}
                    />
                    {formErrors.name && (
                      <span className="text-[11px] text-error font-medium">{formErrors.name}</span>
                    )}
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="email" className="font-display text-xs font-semibold text-on-surface">
                      Email Address <span className="text-error">*</span>
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="name@company.com"
                      className={`px-3.5 py-2.5 rounded-xl bg-surface-container-lowest border text-xs text-on-surface focus:outline-none transition-colors ${
                        formErrors.email 
                          ? 'border-error focus:ring-1 focus:ring-error' 
                          : 'border-outline-variant/50 focus:border-primary focus:ring-1 focus:ring-primary'
                      }`}
                    />
                    {formErrors.email && (
                      <span className="text-[11px] text-error font-medium">{formErrors.email}</span>
                    )}
                  </div>
                </div>

                {/* Subject Selection */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="subject" className="font-display text-xs font-semibold text-on-surface">
                    Inquiry Topic / Category <span className="text-error">*</span>
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="px-3.5 py-2.5 rounded-xl bg-surface-container-lowest border border-outline-variant/50 text-xs text-on-surface focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                  >
                    {subjectOptions.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Message */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="message" className="font-display text-xs font-semibold text-on-surface">
                    Message <span className="text-error">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Describe your project, team role, or collaborative opportunity in detail..."
                    className={`px-3.5 py-2.5 rounded-xl bg-surface-container-lowest border text-xs text-on-surface focus:outline-none transition-colors ${
                      formErrors.message 
                        ? 'border-error focus:ring-1 focus:ring-error' 
                        : 'border-outline-variant/50 focus:border-primary focus:ring-1 focus:ring-primary'
                    }`}
                  />
                  {formErrors.message && (
                    <span className="text-[11px] text-error font-medium">{formErrors.message}</span>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`mt-1 inline-flex items-center justify-center gap-2 py-3 px-6 rounded-xl font-display text-xs font-bold text-on-primary bg-primary-container hover:bg-primary shadow-md hover:shadow-lg transition-all ${
                    isSubmitting ? 'opacity-70 cursor-not-allowed' : 'active:scale-98'
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                      <span>Submitting via REST API...</span>
                    </>
                  ) : (
                    <>
                      <span>Send Message</span>
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
