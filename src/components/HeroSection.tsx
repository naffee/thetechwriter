'use client';

import React from 'react';

export default function HeroSection() {
 return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-brand-neutral via-white to-brand-neutral/50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900/50 relative overflow-hidden px-3 sm:px-4 md:px-6 lg:px-8">
      {/* Decorative Elements - Responsive sizes */}
      <div className="absolute top-10 sm:top-20 right-6 sm:right-10 w-32 sm:w-56 md:w-72 h-32 sm:h-56 md:h-72 bg-brand-purple/5 dark:bg-brand-purple/20 rounded-full blur-2xl sm:blur-3xl animate-float" />
      <div className="absolute -bottom-10 sm:bottom-20 -left-10 sm:left-10 w-40 sm:w-72 md:w-96 h-40 sm:h-72 md:h-96 bg-brand-blue/5 dark:bg-brand-blue/20 rounded-full blur-2xl sm:blur-3xl animate-float" style={{animationDelay: '1s'}} />

      <div className="container-custom pt-20 sm:pt-24 md:pt-32 lg:pt-40 pb-8 sm:pb-12 md:pb-16 w-full">
        {/* Centered Content */}
        <div className="max-w-5xl mx-auto text-center space-y-3 sm:space-y-5 md:space-y-6 lg:space-y-8 w-full">
          {/* Badge */}
          <div className="inline-flex items-center gap-1.5 sm:gap-2 bg-brand-purple/10 dark:bg-brand-purple/20 px-2.5 sm:px-3 md:px-4 py-1 sm:py-1.5 md:py-2 rounded-full animate-fade-in-up">
            <span className="w-1 sm:w-1.5 md:w-2 h-1 sm:h-1.5 md:h-2 bg-brand-purple rounded-full animate-pulse" />
            <span className="text-brand-purple dark:text-brand-purple text-xs sm:text-sm font-medium">Available for Projects</span>
          </div>

          {/* Main Headline */}
          <h1 className="font-heading font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl leading-tight text-brand-black dark:text-white animate-fade-in-up" style={{animationDelay: '0.1s'}}>
            I write. I build. I make complex tech simple.
          </h1>

          {/* Scrolling Marquee - Responsive with overflow handling */}
          <div className="relative overflow-hidden py-2 sm:py-3 md:py-4 lg:py-6 animate-fade-in-up w-full" style={{animationDelay: '0.2s'}}>
            <div className="flex animate-marquee whitespace-nowrap">
              <span className="font-heading font-bold text-xs sm:text-sm md:text-lg lg:text-2xl xl:text-3xl text-brand-purple mx-2 sm:mx-4 md:mx-6 lg:mx-8 flex-shrink-0">
                AI, SaaS, APIs — explained clearly.
              </span>
              <span className="font-heading font-bold text-xs sm:text-sm md:text-lg lg:text-2xl xl:text-3xl text-brand-purple mx-2 sm:mx-4 md:mx-6 lg:mx-8 flex-shrink-0">
                AI, SaaS, APIs — explained clearly.
              </span>
              <span className="font-heading font-bold text-xs sm:text-sm md:text-lg lg:text-2xl xl:text-3xl text-brand-purple mx-2 sm:mx-4 md:mx-6 lg:mx-8 flex-shrink-0">
                AI, SaaS, APIs — explained clearly.
              </span>
              <span className="font-heading font-bold text-xs sm:text-sm md:text-lg lg:text-2xl xl:text-3xl text-brand-purple mx-2 sm:mx-4 md:mx-6 lg:mx-8 flex-shrink-0">
                AI, SaaS, APIs — explained clearly.
              </span>
            </div>
          </div>

          {/* Subtext */}
          <p className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-2xl sm:max-w-3xl mx-auto px-2 sm:px-0 animate-fade-in-up" style={{animationDelay: '0.3s'}}>
            I create documentation, tutorials, and developer content that help your users learn faster and your product stand out.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-2.5 sm:gap-3 md:gap-4 pt-3 sm:pt-4 md:pt-6 animate-fade-in-up" style={{animationDelay: '0.4s'}}>
            <a href="/contact" className="btn-primary text-center group text-xs sm:text-sm md:text-base">
              <span className="inline-block group-hover:animate-bounce-soft">Hire Me</span>
            </a>
            <a href="/work" className="btn-outline text-center group text-xs sm:text-sm md:text-base">
              <span className="inline-block group-hover:animate-bounce-soft">View Portfolio</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
