'use client';

import React from 'react';

export default function PlanSection() {
  const steps = [
    {
      number: '1',
      title: 'Book a call',
      description: 'Tell me about your audience, product, and content priorities.',
      icon: '📞'
    },
    {
      number: '2',
      title: 'I create strategic, user-focused content',
      description: 'Tutorials, explainers, guides, blog posts, and more — tailored to your goals.',
      icon: '✍️'
    },
    {
      number: '3',
      title: 'Users understand your product and adopt it faster',
      description: 'Clear content improves onboarding, reduces confusion, and builds trust.',
      icon: '🎯'
    },
  ];

  return (
    <section id="plan" className="relative section-padding bg-gradient-to-br from-gray-50 via-white to-brand-neutral/30 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900/50 overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-blue/5 dark:bg-brand-blue/10 rounded-full blur-3xl" />
      <div className="absolute bottom-40 left-0 w-80 h-80 bg-brand-purple/5 dark:bg-brand-purple/10 rounded-full blur-3xl" />

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div className="max-w-4xl mx-auto mb-16 sm:mb-20 text-center">
          <h2 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl text-brand-black dark:text-white leading-tight mb-6 sm:mb-8 animate-fade-in-up">
            Working together is simple.
          </h2>
          <p className="text-lg sm:text-xl text-brand-purple dark:text-brand-purple animate-fade-in-up" style={{animationDelay: '0.1s'}}>
            A straightforward 3-step process to get your content strategy right.
          </p>
        </div>

        {/* Steps Container */}
        <div className="max-w-5xl mx-auto mb-16 sm:mb-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {steps.map((step, index) => (
              <div
                key={index}
                className="group relative animate-fade-in-up"
                style={{animationDelay: `${0.2 + index * 0.15}s`}}
              >
                {/* Connector line for desktop */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-20 -right-4 w-8 h-0.5 bg-gradient-to-r from-brand-purple to-transparent" />
                )}

                {/* Card */}
                <div className="h-full p-8 sm:p-10 rounded-2xl bg-white dark:bg-gray-800 shadow-sm border border-gray-100 dark:border-gray-700 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                  {/* Step Number */}
                  <div className="absolute -top-5 left-8 sm:left-10">
                    <div className="inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-brand-purple text-white font-heading font-bold text-lg sm:text-xl shadow-lg">
                      {step.number}
                    </div>
                  </div>

                  {/* Icon and Content */}
                  <div className="space-y-4 mt-4 sm:mt-6">
                    <div className="text-4xl sm:text-5xl group-hover:scale-110 transition-transform duration-300">
                      {step.icon}
                    </div>

                    <div className="space-y-3">
                      <h3 className="font-heading font-bold text-lg sm:text-xl text-brand-black dark:text-white leading-snug">
                        {step.title}
                      </h3>
                      <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="max-w-2xl mx-auto text-center">
          <div className="space-y-8 animate-fade-in-up" style={{animationDelay: '0.65s'}}>
            <p className="text-lg sm:text-xl font-semibold text-gray-700 dark:text-gray-200">
              If you want a simple content process, take the first step.
            </p>
            <a href="/contact" className="btn-primary group text-sm sm:text-base inline-block">
              <span className="inline-block group-hover:animate-bounce-soft">Book a Call</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
