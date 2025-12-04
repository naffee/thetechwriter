'use client';

import React, { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import LoadingCat from '@/components/LoadingCat';

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
        <section className="pt-20 sm:pt-32 pb-12 sm:pb-20 bg-gradient-to-br from-brand-neutral via-white to-brand-neutral/50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 relative overflow-hidden px-3 sm:px-4">
          <div className="absolute top-10 sm:top-20 right-3 sm:right-10 w-24 sm:w-96 h-24 sm:h-96 bg-brand-purple/5 dark:bg-brand-purple/20 rounded-full blur-2xl sm:blur-3xl" />
          <div className="absolute -bottom-10 sm:bottom-20 -left-5 sm:left-10 w-32 sm:w-96 h-32 sm:h-96 bg-brand-blue/5 dark:bg-brand-blue/20 rounded-full blur-2xl sm:blur-3xl" />          
          <div className="container-custom relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 bg-brand-purple/10 dark:bg-brand-purple/20 rounded-full mb-4 sm:mb-6">
                <span className="text-brand-purple text-xs sm:text-sm font-medium">Get in Touch</span>
              </div>
              
              <h1 className="font-heading font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-brand-black dark:text-white mb-4 sm:mb-6">
                Hire Me
              </h1>
              
              <p className="text-lg sm:text-2xl md:text-3xl text-brand-purple font-semibold leading-relaxed max-w-3xl mx-auto mb-4 sm:mb-6 px-2 sm:px-0">
                Let's create clear, high-quality content for your AI or SaaS product.
              </p>
              
              <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-3xl mx-auto px-2 sm:px-0">
                If you'd like to work together, the first step is simple: send me a message with a bit about your project. I'll get back to you quickly with next steps.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Form & Info Section */}
        <section className="section-padding bg-white dark:bg-gray-800">
          <div className="container-custom">
            <div className="grid lg:grid-cols-3 gap-8 sm:gap-12">
              {/* Left - Contact Info */}
              <div className="lg:col-span-1 space-y-6 sm:space-y-8">
                <div>
                  <h2 className="font-heading font-bold text-xl sm:text-2xl md:text-3xl text-brand-black dark:text-white mb-4 sm:mb-6">
                    ⭐ What to <span className="text-brand-purple">Include</span>
                  </h2>
                  <p className="text-sm sm:text-base md:text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-3 sm:mb-4 font-medium">
                    To help me understand your needs, please share:
                  </p>
                  
                  <ul className="space-y-1.5 sm:space-y-2 mb-6 sm:mb-8">
                    <li className="flex items-start gap-2 sm:gap-3">
                      <span className="text-brand-purple font-bold flex-shrink-0">•</span>
                      <span className="text-sm sm:text-base md:text-lg text-gray-700 dark:text-gray-300">A short description of your product</span>
                    </li>
                    <li className="flex items-start gap-2 sm:gap-3">
                      <span className="text-brand-purple font-bold flex-shrink-0">•</span>
                      <span className="text-sm sm:text-base md:text-lg text-gray-700 dark:text-gray-300">What type of content you need (articles, tutorials, explainers, etc.)</span>
                    </li>
                    <li className="flex items-start gap-2 sm:gap-3">
                      <span className="text-brand-purple font-bold flex-shrink-0">•</span>
                      <span className="text-sm sm:text-base md:text-lg text-gray-700 dark:text-gray-300">Your audience</span>
                    </li>
                    <li className="flex items-start gap-2 sm:gap-3">
                      <span className="text-brand-purple font-bold flex-shrink-0">•</span>
                      <span className="text-sm sm:text-base md:text-lg text-gray-700 dark:text-gray-300">Any examples or references you like</span>
                    </li>
                    <li className="flex items-start gap-2 sm:gap-3">
                      <span className="text-brand-purple font-bold flex-shrink-0">•</span>
                      <span className="text-sm sm:text-base md:text-lg text-gray-700 dark:text-gray-300">Your ideal timeline</span>
                    </li>
                  </ul>
                  
                  <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 italic">
                    You don't need to have everything figured out — clarity is part of the work we do together.
                  </p>
                </div>

                {/* What to Expect */}
                <div className="bg-brand-neutral dark:bg-gray-800 rounded-2xl p-4 sm:p-6">
                  <h3 className="font-heading font-bold text-xl sm:text-2xl md:text-3xl text-brand-black dark:text-white mb-3 sm:mb-4">
                    ⭐ What You Can <span className="text-brand-purple">Expect</span>
                  </h3>
                  <ul className="space-y-2 sm:space-y-3 text-sm sm:text-base md:text-lg">
                    <li className="flex items-start gap-2 sm:gap-3">
                      <span className="text-brand-purple font-bold flex-shrink-0">•</span>
                      <span className="text-gray-700 dark:text-gray-300">a fast, friendly response</span>
                    </li>
                    <li className="flex items-start gap-2 sm:gap-3">
                      <span className="text-brand-purple font-bold flex-shrink-0">•</span>
                      <span className="text-gray-700 dark:text-gray-300">a simple, clear process</span>
                    </li>
                    <li className="flex items-start gap-2 sm:gap-3">
                      <span className="text-brand-purple font-bold flex-shrink-0">•</span>
                      <span className="text-gray-700 dark:text-gray-300">content that's accurate, easy to follow, and user-focused</span>
                    </li>
                    <li className="flex items-start gap-2 sm:gap-3">
                      <span className="text-brand-purple font-bold flex-shrink-0">•</span>
                      <span className="text-gray-700 dark:text-gray-300">writing tailored to your product and audience</span>
                    </li>
                    <li className="flex items-start gap-2 sm:gap-3">
                      <span className="text-brand-purple font-bold flex-shrink-0">•</span>
                      <span className="text-gray-700 dark:text-gray-300">communication that feels professional and reliable</span>
                    </li>
                  </ul>
                  <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 mt-3 sm:mt-4 italic">
                    My goal is to make your content process smooth, simple, and effective.
                  </p>
                </div>

                {/* Email Contact */}
                <div className="space-y-3 sm:space-y-4">
                  <h3 className="font-heading font-bold text-xl sm:text-2xl md:text-3xl text-brand-black dark:text-white mb-2 sm:mb-3">
                    ⭐ How to <span className="text-brand-purple">Reach Me</span>
                  </h3>
                  <p className="text-sm sm:text-base md:text-lg text-gray-600 dark:text-gray-300 mb-2 sm:mb-3">
                    📧 <span className="font-semibold">Email:</span> Nafisat@thetechwriter.dev
                  </p>
                  <p className="text-xs sm:text-sm md:text-base text-gray-500 dark:text-gray-400">
                    (Or use the form on this page.)
                  </p>
                  <p className="text-sm sm:text-base md:text-lg text-gray-600 dark:text-gray-300 font-medium mt-2 sm:mt-3">
                    I typically reply within 24 hours.
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
                  <div className="card p-5 sm:p-8 md:p-12">
                  <h2 className="font-heading font-bold text-2xl sm:text-3xl text-brand-black dark:text-white mb-2 sm:mb-3">
                    Send Me a <span className="text-brand-purple">Message</span>
                  </h2>
                  <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-6 sm:mb-8">
                    Share what you need, and I'll get back to you quickly with next steps.
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
                    <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm sm:text-base md:text-lg font-medium text-brand-black dark:text-white mb-1.5 sm:mb-2">
                          Your Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-xl border-2 border-brand-neutral dark:border-gray-700 dark:bg-gray-900 dark:text-white focus:border-brand-purple focus:outline-none transition-colors text-base sm:text-lg"
                          placeholder="John Doe"
                        />
                      </div>

                      <div>
                        <label htmlFor="email" className="block text-sm sm:text-base md:text-lg font-medium text-brand-black dark:text-white mb-1.5 sm:mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-xl border-2 border-brand-neutral dark:border-gray-700 dark:bg-gray-900 dark:text-white focus:border-brand-purple focus:outline-none transition-colors text-base sm:text-lg"
                          placeholder="john@example.com"
                        />
                      </div>
                    </div>

                    {/* Company Description */}
                    <div>
                      <label htmlFor="company" className="block text-sm sm:text-base md:text-lg font-medium text-brand-black dark:text-white mb-1.5 sm:mb-2">
                        A short description of your product *
                      </label>
                      <textarea
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        required
                        rows={3}
                        className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-xl border-2 border-brand-neutral dark:border-gray-700 dark:bg-gray-900 dark:text-white focus:border-brand-purple focus:outline-none transition-colors resize-none text-base sm:text-lg"
                        placeholder="What does your product do?"
                      />
                    </div>

                    {/* Content Type & Audience */}
                    <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                      <div>
                        <label htmlFor="projectType" className="block text-sm sm:text-base md:text-lg font-medium text-brand-black dark:text-white mb-1.5 sm:mb-2">
                          What type of content do you need? *
                        </label>
                        <input
                          type="text"
                          id="projectType"
                          name="projectType"
                          value={formData.projectType}
                          onChange={handleChange}
                          required
                          className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-xl border-2 border-brand-neutral dark:border-gray-700 dark:bg-gray-900 dark:text-white focus:border-brand-purple focus:outline-none transition-colors text-base sm:text-lg"
                          placeholder="e.g., blog posts, tutorials, product guides"
                        />
                      </div>

                      <div>
                        <label htmlFor="budget" className="block text-sm sm:text-base md:text-lg font-medium text-brand-black dark:text-white mb-1.5 sm:mb-2">
                          Your Audience
                        </label>
                        <input
                          type="text"
                          id="budget"
                          name="budget"
                          value={formData.budget}
                          onChange={handleChange}
                          className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-xl border-2 border-brand-neutral dark:border-gray-700 dark:bg-gray-900 dark:text-white focus:border-brand-purple focus:outline-none transition-colors text-base sm:text-lg"
                          placeholder="e.g., developers, product managers, end users"
                        />
                      </div>
                    </div>

                    {/* References */}
                    <div>
                      <label htmlFor="timeline" className="block text-sm sm:text-base md:text-lg font-medium text-brand-black dark:text-white mb-1.5 sm:mb-2">
                        Any examples or references you like?
                      </label>
                      <textarea
                        id="timeline"
                        name="timeline"
                        value={formData.timeline}
                        onChange={handleChange}
                        rows={3}
                        className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-xl border-2 border-brand-neutral dark:border-gray-700 dark:bg-gray-900 dark:text-white focus:border-brand-purple focus:outline-none transition-colors resize-none text-base sm:text-lg"
                        placeholder="Links, examples, or writing styles you like"
                      />
                    </div>

                    {/* Timeline */}
                    <div>
                      <label htmlFor="message" className="block text-sm sm:text-base md:text-lg font-medium text-brand-black dark:text-white mb-1.5 sm:mb-2">
                        Your ideal timeline *
                      </label>
                      <input
                        type="text"
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-xl border-2 border-brand-neutral dark:border-gray-700 dark:bg-gray-900 dark:text-white focus:border-brand-purple focus:outline-none transition-colors text-base sm:text-lg"
                        placeholder="e.g., ASAP, In 2 weeks, Next month"
                      />
                    </div>

                    {/* Submit Button */}
                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="btn-primary text-base sm:text-lg md:text-xl disabled:opacity-50 disabled:cursor-not-allowed w-full sm:w-auto"
                      >
                        {isSubmitting ? 'Sending...' : 'Send Message'}
                      </button>
                      <p className="text-sm sm:text-base md:text-lg text-gray-500 dark:text-gray-400">
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



        {/* Bottom CTA */}
        <section className="section-padding bg-white dark:bg-gray-900">
          <div className="container-custom">
            <div className="bg-gradient-to-br from-brand-black to-brand-purple/90 rounded-2xl sm:rounded-3xl p-6 sm:p-12 md:p-16 text-center text-white relative overflow-hidden">              
              <div className="relative z-10 max-w-2xl mx-auto">
                <p className="text-lg sm:text-2xl md:text-3xl mb-6 sm:mb-8 px-3 sm:px-0">
                  If you want clear content for your product, send me a message — I'd love to hear about your project.
                </p>
                <a
                  href="#contact-form"
                  className="inline-block bg-white text-brand-black px-6 sm:px-8 py-2.5 sm:py-4 rounded-2xl font-heading font-bold hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 text-base sm:text-lg md:text-xl"
                >
                  Contact Me
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
