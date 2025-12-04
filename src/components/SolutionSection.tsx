'use client';

import React from 'react';

export default function SolutionSection() {
  const services = [
    { icon: '📋', title: 'Product Explainers' },
    { icon: '📚', title: 'Tutorials' },
    { icon: '🎯', title: 'How-To Guides' },
    { icon: '🤖', title: 'AI Feature Breakdowns' },
    { icon: '🚀', title: 'Onboarding Content' },
    { icon: '📈', title: 'SEO-Driven Blog Posts' },
    { icon: '🎓', title: 'Educational Content' },
    { icon: '⚖️', title: 'Comparison Posts' },
  ];

  return (
    <section id="solution" className="relative section-padding bg-white dark:bg-gray-900 overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-40 -left-32 w-80 h-80 bg-brand-purple/5 dark:bg-brand-purple/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 -right-40 w-96 h-96 bg-brand-blue/5 dark:bg-brand-blue/10 rounded-full blur-3xl" />

      <div className="container-custom relative z-10">
        {/* Introduction Section */}
        <div className="max-w-4xl mx-auto mb-16 sm:mb-20 text-center">
          <div className="space-y-6 sm:space-y-8 animate-fade-in-up">
            <div className="space-y-4">
              <h2 className="font-heading font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-brand-black dark:text-white leading-tight">
                I help AI and SaaS companies explain their products clearly.
              </h2>
              <p className="text-xl sm:text-2xl md:text-3xl text-brand-purple dark:text-brand-purple leading-relaxed">
                You're building something innovative.
              </p>
            </div>

            <p className="text-2xl sm:text-3xl md:text-4xl font-semibold text-brand-black dark:text-white leading-relaxed animate-fade-in-up" style={{animationDelay: '0.1s'}}>
              My role is to help people understand it.
            </p>
          </div>
        </div>

        {/* Services Grid */}
        <div className="max-w-5xl mx-auto mb-16 sm:mb-20 text-center">
          <p className="text-xl sm:text-2xl md:text-3xl font-semibold text-brand-purple dark:text-brand-purple mb-8 sm:mb-10 animate-fade-in-up" style={{animationDelay: '0.2s'}}>
            I write:
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
            {services.map((service, index) => (
              <div
                key={index}
                className="group p-4 sm:p-5 rounded-xl bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-700 border border-gray-200 dark:border-gray-600 transition-all duration-300 hover:shadow-md dark:hover:shadow-lg animate-fade-in-up"
                style={{animationDelay: `${0.3 + index * 0.08}s`}}
              >
                <div className="space-y-3">
                  <div className="text-2xl sm:text-3xl group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <p className="text-base sm:text-lg md:text-xl font-semibold text-gray-800 dark:text-gray-100 leading-snug">
                    {service.title}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Value Proposition */}
        <div className="max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-brand-purple/8 via-brand-blue/8 to-transparent dark:from-brand-purple/15 dark:via-brand-blue/15 dark:to-transparent border border-gray-200 dark:border-gray-700 animate-fade-in-up" style={{animationDelay: '0.8s'}}>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-700 dark:text-gray-200 leading-relaxed">
              Everything I create is <span className="font-bold text-brand-black dark:text-white">structured</span>, <span className="font-bold text-brand-black dark:text-white">clear</span>, and <span className="font-bold text-brand-black dark:text-white">user-focused</span> — so your product is easier to understand and easier to adopt.
            </p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center animate-fade-in-up" style={{animationDelay: '0.9s'}}>
          <div className="space-y-6 sm:space-y-8">
            <p className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-800 dark:text-gray-100">
              If you want clear content, let's get started.
            </p>
            <a href="/contact" className="btn-primary group text-base sm:text-lg md:text-xl inline-block">
              <span className="inline-block group-hover:animate-bounce-soft">Start Your Project</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
