'use client';

import React, { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import LoadingCat from '@/components/LoadingCat';

const projectTypes = [
  'Technical Documentation',
  'API Documentation',
  'Developer Content',
  'Web Development',
  'Content Strategy',
  'Other',
];

const budgetRanges = [
  'Under $5,000',
  '$5,000 - $10,000',
  '$10,000 - $25,000',
  '$25,000+',
  'Not sure yet',
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    projectType: '',
    budget: '',
    timeline: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission (replace with actual form handling)
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        company: '',
        projectType: '',
        budget: '',
        timeline: '',
        message: '',
      });
      
      // Reset success message after 5 seconds
      setTimeout(() => setSubmitStatus('idle'), 5000);
    }, 1500);
  };

  return (
    <>
      <Navigation />
      
      <main className="min-h-screen bg-brand-neutral dark:bg-gray-900">
        {/* Hero Section */}
        <section className="pt-24 sm:pt-32 pb-16 sm:pb-20 bg-gradient-to-br from-brand-neutral via-white to-brand-neutral/50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 relative overflow-hidden">
          <div className="absolute top-20 right-10 w-96 h-96 bg-brand-purple/5 dark:bg-brand-purple/20 rounded-full blur-3xl" />
          <div className="absolute bottom-20 left-10 w-96 h-96 bg-brand-blue/5 dark:bg-brand-blue/20 rounded-full blur-3xl" />          
          <div className="container-custom relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-block px-4 py-2 bg-brand-purple/10 dark:bg-brand-purple/20 rounded-full mb-6">
                <span className="text-brand-purple text-sm font-medium">Get in Touch</span>
              </div>
              
              <h1 className="font-heading font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-brand-black dark:text-white mb-6">
                Hire Me
              </h1>
              
              <p className="text-lg sm:text-xl md:text-2xl text-brand-purple font-semibold leading-relaxed max-w-3xl mx-auto mb-6">
                Let's build something clear.
              </p>
              
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed max-w-3xl mx-auto">
                If you're working on an AI tool, SaaS platform, or developer product and you need documentation, tutorials, or technical content that users can actually understand — I'd love to collaborate.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Form & Info Section */}
        <section className="section-padding bg-white dark:bg-gray-800">
          <div className="container-custom">
            <div className="grid lg:grid-cols-3 gap-12">
              {/* Left - Contact Info */}
              <div className="lg:col-span-1 space-y-8">
                <div>
                  <h2 className="font-heading font-bold text-3xl text-brand-black dark:text-white mb-6">
                    How I Can <span className="text-brand-purple">Help</span>
                  </h2>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                    I specialize in:
                  </p>
                  
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-brand-purple flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-700 dark:text-gray-300">Technical documentation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-brand-purple flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-700 dark:text-gray-300">API & SDK guides</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-brand-purple flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-700 dark:text-gray-300">Developer tutorials</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-brand-purple flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-700 dark:text-gray-300">AI workflows & feature guides</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-brand-purple flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-700 dark:text-gray-300">SaaS product documentation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-brand-purple flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-700 dark:text-gray-300">Technical blog posts</span>
                    </li>
                  </ul>
                  
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Whether you need a single tutorial or full product documentation, I can help you explain your product clearly and professionally.
                  </p>
                </div>

                {/* What to Expect */}
                <div className="bg-brand-neutral dark:bg-gray-800 rounded-2xl p-6">
                  <h3 className="font-heading font-bold text-xl text-brand-black dark:text-white mb-4">
                    What to <span className="text-brand-purple">Expect</span>
                  </h3>
                  <ul className="space-y-3 text-sm">
                    <li className="flex items-start gap-3">
                      <span className="text-2xl flex-shrink-0">💬</span>
                      <div>
                        <p className="font-semibold text-brand-black dark:text-white">Clear communication</p>
                        <p className="text-gray-600 dark:text-gray-400">You'll always know what I'm working on</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-2xl flex-shrink-0">⚙️</span>
                      <div>
                        <p className="font-semibold text-brand-black dark:text-white">Technical accuracy</p>
                        <p className="text-gray-600 dark:text-gray-400">I write and code — no vague docs</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-2xl flex-shrink-0">🚀</span>
                      <div>
                        <p className="font-semibold text-brand-black dark:text-white">Fast, modern workflow</p>
                        <p className="text-gray-600 dark:text-gray-400">GitHub, Notion, Confluence, or your tools</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-2xl flex-shrink-0">📦</span>
                      <div>
                        <p className="font-semibold text-brand-black dark:text-white">Flexible options</p>
                        <p className="text-gray-600 dark:text-gray-400">One-off tasks or ongoing support</p>
                      </div>
                    </li>
                  </ul>
                </div>

                {/* Email Contact */}
                <div className="space-y-4">
                  <a
                    href="mailto:hello@thetechwriter.dev"
                    className="flex items-center gap-4 p-4 rounded-2xl bg-brand-purple/10 dark:bg-brand-purple/20 hover:bg-brand-purple hover:text-white group transition-all"
                  >
                    <div className="w-12 h-12 bg-white/50 group-hover:bg-white/90 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors">
                      <svg className="w-6 h-6 text-brand-purple" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-heading font-bold text-brand-black dark:text-white group-hover:text-white mb-1">Email Me</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400 group-hover:text-white/90">hello@thetechwriter.dev</p>
                    </div>
                  </a>
                </div>

                {/* Availability Status */}
                <div className="bg-gradient-to-br from-brand-purple/10 to-brand-blue/10 dark:from-brand-purple/20 dark:to-brand-blue/20 rounded-2xl p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="w-3 h-3 bg-green-400 rounded-full animate-pulse" />
                    <span className="font-heading font-bold text-brand-black dark:text-white">Available for Projects</span>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    Currently accepting new projects. Response time: 24 hours.
                  </p>
                </div>
              </div>

              {/* Right - Contact Form */}
              <div className="lg:col-span-2">
                {isSubmitting ? (
                  <div className="card p-8 md:p-12 flex items-center justify-center min-h-[600px]">
                    <LoadingCat size="lg" message="Sending your message..." />
                  </div>
                ) : (
                  <div className="card p-8 md:p-12">
                  <h2 className="font-heading font-bold text-3xl text-brand-black dark:text-white mb-2">
                    Get in <span className="text-brand-purple">Touch</span>
                  </h2>
                  <p className="text-gray-600 dark:text-gray-300 mb-8">
                    To make our first conversation productive, share details about your project, timeline, and any examples of content you like.
                  </p>

                  {submitStatus === 'success' && (
                    <div className="mb-8 p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-2xl">
                      <div className="flex items-center gap-3">
                        <svg className="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <p className="text-green-800 font-medium">Thanks! I'll get back to you soon.</p>
                      </div>
                    </div>
                  )}

                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Name & Email */}
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-brand-black dark:text-white mb-2">
                          Your Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-xl border-2 border-brand-neutral dark:border-gray-700 dark:bg-gray-900 dark:text-white focus:border-brand-purple focus:outline-none transition-colors"
                          placeholder="John Doe"
                        />
                      </div>

                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-brand-black dark:text-white mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-xl border-2 border-brand-neutral dark:border-gray-700 dark:bg-gray-900 dark:text-white focus:border-brand-purple focus:outline-none transition-colors"
                          placeholder="john@example.com"
                        />
                      </div>
                    </div>

                    {/* Company */}
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-brand-black dark:text-white mb-2">
                        Company / Organization
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border-2 border-brand-neutral focus:border-brand-purple focus:outline-none transition-colors"
                        placeholder="Your Company"
                      />
                    </div>

                    {/* Project Type & Budget */}
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="projectType" className="block text-sm font-medium text-brand-black dark:text-white mb-2">
                          Project Type *
                        </label>
                        <select
                          id="projectType"
                          name="projectType"
                          value={formData.projectType}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-xl border-2 border-brand-neutral dark:border-gray-700 dark:bg-gray-900 dark:text-white focus:border-brand-purple focus:outline-none transition-colors"
                        >
                          <option value="">Select a type</option>
                          {projectTypes.map((type) => (
                            <option key={type} value={type}>
                              {type}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label htmlFor="budget" className="block text-sm font-medium text-brand-black dark:text-white mb-2">
                          Budget Range
                        </label>
                        <select
                          id="budget"
                          name="budget"
                          value={formData.budget}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-xl border-2 border-brand-neutral dark:border-gray-700 dark:bg-gray-900 dark:text-white focus:border-brand-purple focus:outline-none transition-colors"
                        >
                          <option value="">Select a range</option>
                          {budgetRanges.map((range) => (
                            <option key={range} value={range}>
                              {range}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    {/* Timeline */}
                    <div>
                      <label htmlFor="timeline" className="block text-sm font-medium text-brand-black dark:text-white mb-2">
                        When do you need this?
                      </label>
                      <input
                        type="text"
                        id="timeline"
                        name="timeline"
                        value={formData.timeline}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border-2 border-brand-neutral focus:border-brand-purple focus:outline-none transition-colors"
                        placeholder="e.g., ASAP, In 2 weeks, Next month"
                      />
                    </div>

                    {/* Message */}
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-brand-black dark:text-white mb-2">
                        Project Details *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={6}
                        className="w-full px-4 py-3 rounded-xl border-2 border-brand-neutral focus:border-brand-purple focus:outline-none transition-colors resize-none"
                        placeholder="Tell me about your project, goals, and any specific requirements..."
                      />
                    </div>

                    {/* Submit Button */}
                    <div className="flex items-center gap-4">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {isSubmitting ? 'Sending...' : 'Send Message'}
                      </button>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        * Required fields
                      </p>
                    </div>
                  </form>
                </div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="section-padding bg-brand-neutral dark:bg-gray-900">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="font-heading font-bold text-3xl md:text-4xl text-brand-black dark:text-white mb-4">
                Quick <span className="text-brand-purple">Questions</span>
              </h2>
              <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Common questions before we start working together
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-6">
                <h3 className="font-heading font-bold text-lg text-brand-black dark:text-white mb-2">
                  Do you work with early-stage startups?
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Yes — I regularly work with founders and small teams.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-2xl p-6">
                <h3 className="font-heading font-bold text-lg text-brand-black dark:text-white mb-2">
                  Do you sign NDAs?
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Absolutely.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-2xl p-6">
                <h3 className="font-heading font-bold text-lg text-brand-black dark:text-white mb-2">
                  Do you handle long-term projects?
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Yes. You can hire me for one project or ongoing monthly support.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-2xl p-6">
                <h3 className="font-heading font-bold text-lg text-brand-black dark:text-white mb-2">
                  Can you work in my internal tools?
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Yes. I can work directly in Notion, Confluence, GitHub, Google Docs, or anywhere your team prefers.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 md:col-span-2">
                <h3 className="font-heading font-bold text-lg text-brand-black dark:text-white mb-2">
                  Do you write code samples and runnable examples?
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Yes — especially for APIs, SDKs, and AI integrations. I write real code that works.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Alternative Contact CTA */}
        <section className="section-padding bg-white dark:bg-gray-900">
          <div className="container-custom">
            <div className="bg-gradient-to-br from-brand-black to-brand-purple/90 rounded-3xl p-12 md:p-16 text-center text-white relative overflow-hidden">              
              <div className="relative z-10 max-w-2xl mx-auto">
                <h2 className="font-heading font-bold text-4xl md:text-5xl mb-4">
                  Ready to start? Let's <span className="text-brand-purple">talk</span>.
                </h2>
                <p className="text-xl text-gray-200 mb-8">
                  I'd love to help you create documentation and content that makes your product easier to understand, easier to onboard, and easier to love.
                </p>
                <div className="flex flex-wrap gap-4 justify-center">
                  <a
                    href="mailto:hello@thetechwriter.dev"
                    className="inline-block bg-white text-brand-black px-8 py-4 rounded-2xl font-heading font-bold hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
                  >
                    Contact Me
                  </a>
                  <a
                    href="/services"
                    className="inline-block border-2 border-white text-white px-8 py-4 rounded-2xl font-heading font-bold hover:bg-white hover:text-brand-black transition-all duration-300"
                  >
                    View Services
                  </a>
                  <a
                    href="/work"
                    className="inline-block border-2 border-white text-white px-8 py-4 rounded-2xl font-heading font-bold hover:bg-white hover:text-brand-black transition-all duration-300"
                  >
                    View Portfolio
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
