'use client';

import React from 'react';

const services = [
  {
    icon: '📚',
    title: 'Technical Documentation',
    description: 'Clear, structured documentation for AI tools, SaaS products, and developer platforms.',
    color: 'from-purple-500 to-purple-600',
  },
  {
    icon: '🔧',
    title: 'API & SDK Guides',
    description: 'Quickstarts, endpoint explanations, and integration examples written for real developers.',
    color: 'from-indigo-500 to-blue-500',
  },
  {
    icon: '✍️',
    title: 'Tutorials & Developer Content',
    description: 'Step-by-step guides, use cases, and technical articles with runnable examples.',
    color: 'from-violet-500 to-fuchsia-500',
  },
  {
    icon: '🎨',
    title: 'Product & UX Content',
    description: 'User guides, onboarding flows, feature explanations, and help center content.',
    color: 'from-pink-500 to-rose-500',
  },
  {
    icon: '💬',
    title: 'SaaS Messaging & Copy',
    description: 'Clear, modern landing page copy and feature messaging for technical products.',
    color: 'from-cyan-500 to-teal-500',
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="section-padding bg-brand-neutral dark:bg-gray-800">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-brand-black dark:text-white mb-2 sm:mb-4">
            <span className="text-brand-purple">How I Can Help</span>
          </h2>
        </div>

        {/* Services Stacked Cards - Mobile optimized */}
        <div className="relative overflow-hidden py-8 sm:py-12">
          {/* Mobile: Display cards in a stacked grid, Desktop: Animated carousel */}
          <div className="hidden md:flex animate-card-slide gap-6">
            {/* Desktop: Animated carousel */}
            {[...services, ...services, ...services].map((service, index) => {
              const isColorful = index % 2 === 0;
              return (
                <div
                  key={index}
                  className={`flex-shrink-0 w-80 group cursor-pointer flex flex-col rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200/10 overflow-hidden hover:scale-105 hover:-translate-y-2 ${
                    isColorful 
                      ? `bg-gradient-to-br ${service.color} text-white` 
                      : 'bg-white dark:bg-gray-900'
                  }`}
                  style={{
                    transform: `rotate(${(index % services.length) * 1.5 - 3}deg)`,
                  }}
                >
                  {/* Icon Background */}
                  <div className={`h-32 flex items-center justify-center relative overflow-hidden ${
                    isColorful ? 'bg-black/10' : 'bg-gradient-to-br from-purple-50 to-blue-50 dark:from-gray-800 dark:to-gray-700'
                  }`}>
                    <div className="text-6xl group-hover:scale-125 group-hover:rotate-12 transition-all duration-300">
                      {service.icon}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 flex flex-col flex-grow">
                    {/* Title */}
                    <h3 className={`font-heading font-bold text-xl mb-3 transition-all duration-300 ${
                      isColorful 
                        ? 'text-white group-hover:scale-[1.02]' 
                        : 'text-brand-black dark:text-white group-hover:text-brand-purple'
                    }`}>
                      {service.title}
                    </h3>

                    {/* Description */}
                    <p className={`text-sm leading-relaxed mb-4 transition-opacity duration-300 ${
                      isColorful 
                        ? 'text-white/90 group-hover:text-white' 
                        : 'text-gray-600 dark:text-gray-300 group-hover:text-gray-700 dark:group-hover:text-gray-200'
                    }`}>
                      {service.description}
                    </p>

                    {/* Hover CTA */}
                    <div className="mt-auto pt-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                      <div className={`flex items-center gap-2 text-sm font-semibold ${
                        isColorful ? 'text-white' : 'text-brand-purple'
                      }`}>
                        <span>Learn More</span>
                        <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Mobile: Grid layout */}
          <div className="md:hidden grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 max-w-xs sm:max-w-none mx-auto sm:mx-0">
            {services.map((service, index) => {
              const isColorful = index % 2 === 0;
              return (
                <div
                  key={index}
                  className={`group cursor-pointer flex flex-col rounded-xl sm:rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-200/10 overflow-hidden hover:scale-105 hover:-translate-y-1 ${
                    isColorful 
                      ? `bg-gradient-to-br ${service.color} text-white` 
                      : 'bg-white dark:bg-gray-900'
                  }`}
                >
                  {/* Icon Background */}
                  <div className={`h-16 sm:h-20 flex items-center justify-center relative overflow-hidden ${
                    isColorful ? 'bg-black/10' : 'bg-gradient-to-br from-purple-50 to-blue-50 dark:from-gray-800 dark:to-gray-700'
                  }`}>
                    <div className="text-2xl sm:text-3xl group-hover:scale-125 group-hover:rotate-12 transition-all duration-300">
                      {service.icon}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-3 sm:p-4 flex flex-col flex-grow">
                    {/* Title */}
                    <h3 className={`font-heading font-bold text-sm sm:text-lg mb-1.5 sm:mb-2 transition-all duration-300 ${
                      isColorful 
                        ? 'text-white group-hover:scale-[1.02]' 
                        : 'text-brand-black dark:text-white group-hover:text-brand-purple'
                    }`}>
                      {service.title}
                    </h3>

                    {/* Description */}
                    <p className={`text-xs sm:text-sm leading-relaxed transition-opacity duration-300 ${
                      isColorful 
                        ? 'text-white/90 group-hover:text-white' 
                        : 'text-gray-600 dark:text-gray-300 group-hover:text-gray-700 dark:group-hover:text-gray-200'
                    }`}>
                      {service.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 sm:mt-16 text-center">
          <div className="bg-white dark:bg-gray-900 rounded-2xl sm:rounded-3xl shadow-xl p-6 sm:p-8 md:p-12 max-w-4xl mx-auto">
            <h3 className="font-heading font-bold text-2xl sm:text-3xl md:text-4xl text-brand-black dark:text-white mb-3 sm:mb-4">
              Let's Build Something <span className="text-brand-purple">Clear.</span>
            </h3>
            <p className="text-sm sm:text-base md:text-lg text-gray-600 dark:text-gray-300 mb-6 sm:mb-8 max-w-2xl mx-auto">
              Whether you're working on an AI tool, SaaS platform, or developer product, I can help you create documentation and content that your users will actually understand.
            </p>
            <a href="/contact" className="btn-primary text-sm sm:text-base">
              Get in Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
