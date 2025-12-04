'use client';

import React from 'react';

export default function ProblemSection() {
  const problems = [
    { icon: '😕', text: 'Users get confused by complex features' },
    { icon: '📰', text: 'Marketing content feels too shallow for technical audiences' },
    { icon: '🎯', text: 'Onboarding doesn\'t communicate value clearly' },
    { icon: '🤖', text: 'AI features need explanation, not just promotion' },
    { icon: '💬', text: 'Support keeps answering the same questions' },
    { icon: '📝', text: 'Blog content isn\'t consistent or strategic' },
    { icon: '📚', text: 'Product documentation is outdated or incomplete' },
  ];

  return (
    <section id="problems" className="relative section-padding bg-gradient-to-br from-red-50 via-white to-orange-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-red-200/10 dark:bg-red-900/10 rounded-full blur-3xl" />
      <div className="absolute -bottom-32 left-20 w-96 h-96 bg-orange-200/10 dark:bg-orange-900/10 rounded-full blur-3xl" />

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div className="max-w-4xl mx-auto mb-16 sm:mb-20 text-center">
          <h2 className="font-heading font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-brand-black dark:text-white leading-tight mb-6 sm:mb-8 animate-fade-in-up">
            Your product is powerful — but users won't adopt what they don't understand.
          </h2>

          <p className="text-xl sm:text-2xl md:text-3xl text-brand-purple dark:text-brand-purple leading-relaxed animate-fade-in-up" style={{animationDelay: '0.1s'}}>
            Most AI and SaaS teams face the same problems:
          </p>
        </div>

        {/* Problems Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 max-w-5xl mx-auto mb-16 sm:mb-20">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="group p-5 sm:p-6 rounded-2xl bg-white dark:bg-gray-800 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 dark:border-gray-700 animate-fade-in-up"
              style={{animationDelay: `${0.2 + index * 0.08}s`}}
            >
              <div className="flex items-start gap-4">
                <div className="text-3xl sm:text-4xl flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  {problem.icon}
                </div>
                <p className="text-lg sm:text-xl md:text-2xl text-gray-700 dark:text-gray-200 leading-relaxed">
                  {problem.text}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action Statement */}
        <div className="max-w-3xl mx-auto mb-12 sm:mb-16 text-center">
          <div className="space-y-6 sm:space-y-8 p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-brand-purple/10 to-brand-blue/10 dark:from-brand-purple/20 dark:to-brand-blue/20 border border-brand-purple/20 dark:border-brand-purple/30 backdrop-blur-sm animate-fade-in-up" style={{animationDelay: '0.8s'}}>
            <div>
            <p className="text-3xl sm:text-4xl md:text-5xl font-bold text-brand-black dark:text-white leading-tight mb-3">
                Your users deserve clarity.
              </p>
              <p className="text-3xl sm:text-4xl md:text-5xl font-bold text-brand-black dark:text-white leading-tight">
                Your product deserves to be understood.
              </p>
            </div>

            <p className="text-lg sm:text-xl md:text-2xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-2xl mx-auto">
              If you want users to stop feeling confused, let's make your product easier to understand.
            </p>
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center animate-fade-in-up" style={{animationDelay: '0.9s'}}>
          <a href="/contact" className="btn-primary group text-base sm:text-lg md:text-xl">
            <span className="inline-block group-hover:animate-bounce-soft">Book a Call</span>
          </a>
        </div>
      </div>
    </section>
  );
}
