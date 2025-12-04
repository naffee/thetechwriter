'use client';

import React from 'react';

const services = [
  {
    icon: '📝',
    title: 'Content Writing for AI & SaaS',
    description: 'Blog posts, tutorials, guides, explainers, SEO content.',
    color: 'from-purple-500 to-purple-600',
    bgGradient: 'from-purple-500 to-violet-600',
  },
  {
    icon: '📚',
    title: 'Product Education Content',
    description: 'Feature breakdowns, onboarding content, emails, in-app copy.',
    color: 'from-indigo-500 to-blue-500',
    bgGradient: 'from-indigo-500 to-blue-600',
  },
  {
    icon: '🤖',
    title: 'AI Clarity',
    description: 'Explaining model behavior, workflows, limitations, and use cases.',
    color: 'from-violet-500 to-fuchsia-500',
    bgGradient: 'from-violet-500 to-fuchsia-600',
  },
  {
    icon: '🎯',
    title: 'Content Strategy',
    description: 'Editorial planning, topic research, structure, and optimization.',
    color: 'from-pink-500 to-rose-500',
    bgGradient: 'from-pink-500 to-rose-600',
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="section-padding bg-brand-neutral dark:bg-gray-800">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-brand-black dark:text-white mb-2 sm:mb-4">
            <span className="text-brand-purple">What I can help you with:</span>
          </h2>
        </div>

        {/* Services Stacked Cards - Mobile optimized */}
        <div className="relative overflow-hidden py-8 sm:py-12">
          {/* Mobile: Display cards in a stacked grid, Desktop: Animated carousel */}
          <div className="hidden md:flex animate-card-slide gap-6">
            {/* Desktop: Animated carousel */}
            {[...services, ...services, ...services].map((service, index) => {
              return (
                <div
                  key={index}
                  className={`flex-shrink-0 w-80 group cursor-pointer flex flex-col rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200/10 overflow-hidden hover:scale-105 hover:-translate-y-2 bg-gradient-to-br ${service.bgGradient} text-white`}
                  style={{
                    transform: `rotate(${(index % services.length) * 1.5 - 3}deg)`,
                  }}
                >
                  {/* Icon Background */}
                  <div className="h-32 flex items-center justify-center relative overflow-hidden bg-black/10">
                    <div className="text-6xl group-hover:scale-125 group-hover:rotate-12 transition-all duration-300">
                      {service.icon}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 flex flex-col flex-grow">
                    {/* Title */}
                    <h3 className="font-heading font-bold text-xl mb-3 transition-all duration-300 text-white group-hover:scale-[1.02]">
                      {service.title}
                    </h3>

                    {/* Description */}
                    <p className="text-sm leading-relaxed mb-4 transition-opacity duration-300 text-white/90 group-hover:text-white">
                      {service.description}
                    </p>

                    {/* Hover CTA */}
                    <div className="mt-auto pt-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                      <div className="flex items-center gap-2 text-sm font-semibold text-white">
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
              return (
                <div
                  key={index}
                  className={`group cursor-pointer flex flex-col rounded-xl sm:rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-200/10 overflow-hidden hover:scale-105 hover:-translate-y-1 bg-gradient-to-br ${service.bgGradient} text-white`}
                >
                  {/* Icon Background */}
                  <div className="h-16 sm:h-20 flex items-center justify-center relative overflow-hidden bg-black/10">
                    <div className="text-2xl sm:text-3xl group-hover:scale-125 group-hover:rotate-12 transition-all duration-300">
                      {service.icon}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-3 sm:p-4 flex flex-col flex-grow">
                    {/* Title */}
                    <h3 className="font-heading font-bold text-sm sm:text-lg mb-1.5 sm:mb-2 transition-all duration-300 text-white group-hover:scale-[1.02]">
                      {service.title}
                    </h3>

                    {/* Description */}
                    <p className="text-xs sm:text-sm leading-relaxed transition-opacity duration-300 text-white/90 group-hover:text-white">
                      {service.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 sm:mt-16 text-center space-y-6 sm:space-y-8">
          <p className="text-lg md:text-xl text-gray-700 dark:text-gray-200 font-semibold">
            If you want better content, explore my services.
          </p>
          <a href="/services" className="btn-primary inline-block text-sm sm:text-base">
            Explore Services
          </a>
        </div>
      </div>
    </section>
  );
}
