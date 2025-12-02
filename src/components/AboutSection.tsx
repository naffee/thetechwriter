'use client';

import React from 'react';

export default function AboutSection() {
  return (
    <section id="about" className="section-padding bg-brand-neutral dark:bg-gray-800 overflow-hidden">
      <div className="container-custom">
        {/* Section Header - Centered */}
        <div className="text-center max-w-4xl mx-auto mb-12 sm:mb-16">
          <h2 className="font-heading font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-brand-black dark:text-white leading-tight mb-6 sm:mb-8 animate-fade-in-up">
            <span className="text-brand-purple">About Me</span>
          </h2>

          <div className="space-y-4 sm:space-y-6 text-gray-600 dark:text-gray-300 leading-relaxed text-sm sm:text-base md:text-lg">
            <p className="animate-fade-in-up" style={{animationDelay: '0.1s'}}>
              I'm Nafisat — a technical writer and developer focused on AI, SaaS, and developer tools.
              I create documentation, tutorials, and product content that make complex technology simple, clear, and easy to use.
            </p>
            
            <p className="animate-fade-in-up" style={{animationDelay: '0.2s'}}>
              My work combines writing, development, and problem-solving to help teams launch faster and give users a better experience.
            </p>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="max-w-5xl mx-auto">          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 md:gap-6 mb-8 sm:mb-12">
            <div className="p-4 sm:p-6 rounded-2xl bg-white dark:bg-gray-900 shadow-sm text-center group hover:shadow-xl transition-all duration-300 animate-scale-in" style={{animationDelay: '0.3s'}}>
              <div className="text-3xl sm:text-4xl mb-2 sm:mb-3 group-hover:animate-bounce-soft">📝</div>
              <div className="font-bold text-xl sm:text-2xl text-brand-purple mb-1 sm:mb-2 group-hover:animate-pulse-glow transition-all">50+</div>
              <div className="font-medium text-xs sm:text-sm md:text-base text-gray-700 dark:text-gray-300">Writing samples and tutorials created</div>
            </div>
            <div className="p-4 sm:p-6 rounded-2xl bg-white dark:bg-gray-900 shadow-sm text-center group hover:shadow-xl transition-all duration-300 animate-scale-in" style={{animationDelay: '0.4s'}}>
              <div className="text-3xl sm:text-4xl mb-2 sm:mb-3 group-hover:animate-bounce-soft">🛠️</div>
              <div className="font-bold text-xl sm:text-2xl text-brand-purple mb-1 sm:mb-2 group-hover:animate-pulse-glow transition-all">2+</div>
              <div className="font-medium text-xs sm:text-sm md:text-base text-gray-700 dark:text-gray-300">Years working with modern dev tools</div>
            </div>
            <div className="p-4 sm:p-6 rounded-2xl bg-white dark:bg-gray-900 shadow-sm text-center group hover:shadow-xl transition-all duration-300 animate-scale-in" style={{animationDelay: '0.5s'}}>
              <div className="text-3xl sm:text-4xl mb-2 sm:mb-3 group-hover:animate-bounce-soft">🤖</div>
              <div className="font-bold text-xl sm:text-2xl text-brand-purple mb-1 sm:mb-2 group-hover:animate-pulse-glow transition-all">AI + SaaS</div>
              <div className="font-medium text-xs sm:text-sm md:text-base text-gray-700 dark:text-gray-300">Focused documentation</div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center animate-fade-in-up" style={{animationDelay: '0.6s'}}>
            <a href="/about" className="btn-primary group text-sm sm:text-base">
              <span className="inline-block group-hover:animate-bounce-soft">Learn More About Me</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
