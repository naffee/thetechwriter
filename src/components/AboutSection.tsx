'use client';

import React from 'react';

export default function AboutSection() {
  return (
    <section id="about" className="section-padding bg-brand-neutral dark:bg-gray-800 overflow-hidden">
      <div className="container-custom">
        {/* Section Header - Centered */}
        <div className="text-center max-w-4xl mx-auto mb-12 sm:mb-16">
          <h2 className="font-heading font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-brand-black dark:text-white leading-tight mb-6 sm:mb-8 animate-fade-in-up">
            A content writer who understands modern technology.
          </h2>

          <p className="text-base sm:text-lg md:text-xl text-brand-purple dark:text-brand-purple leading-relaxed mb-8 sm:mb-10 animate-fade-in-up" style={{animationDelay: '0.1s'}}>
            I specialize in writing for:
          </p>

          <div className="mb-10 sm:mb-12 animate-fade-in-up" style={{animationDelay: '0.2s'}}>
            <ul className="space-y-2 sm:space-y-3 text-base sm:text-lg text-gray-700 dark:text-gray-200">
              <li>• AI products</li>
              <li>• SaaS platforms</li>
              <li>• developer tools</li>
              <li>• B2B tech</li>
              <li>• early-stage startups</li>
            </ul>
          </div>

          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 leading-relaxed animate-fade-in-up" style={{animationDelay: '0.3s'}}>
            I write clear, simple content that helps users understand your product.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="max-w-5xl mx-auto">          
          {/* CTA */}
          <div className="text-center animate-fade-in-up" style={{animationDelay: '0.4s'}}>
            <a href="/about" className="btn-primary group text-sm sm:text-base">
              <span className="inline-block group-hover:animate-bounce-soft">About Me</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
