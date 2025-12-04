'use client';

import React from 'react';

export default function ContactSection() {
  return (
    <section id="contact" className="section-padding bg-gradient-to-br from-brand-black via-brand-black to-brand-purple/20 dark:from-gray-950 dark:via-gray-900 dark:to-brand-purple/30 text-white relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-brand-purple/10 dark:bg-brand-purple/20 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-brand-blue/10 dark:bg-brand-blue/20 rounded-full blur-3xl animate-float" style={{animationDelay: '1.5s'}} />
      
      {/* Paw Prints - REMOVED */}

      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Cat Mascot - REMOVED */}

          {/* Heading */}
          <h2 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl mb-6 animate-fade-in-up">
            Ready to create content that helps users understand your product?
          </h2>

          {/* Description */}
          <p className="text-lg md:text-xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed animate-fade-in-up" style={{animationDelay: '0.1s'}}>
            Clear content reduces confusion, improves onboarding, and supports product adoption.
          </p>

          {/* CTA Message */}
          <p className="text-lg md:text-xl text-gray-300 mb-8 sm:mb-12 animate-fade-in-up" style={{animationDelay: '0.2s'}}>
            If you want better content, let's work together.
          </p>

          {/* CTA Button */}
          <div className="animate-fade-in-up" style={{animationDelay: '0.3s'}}>
            <a
              href="/contact"
              className="inline-block bg-brand-purple hover:bg-brand-purple/90 text-white px-8 sm:px-12 py-3 sm:py-5 rounded-lg sm:rounded-2xl font-heading font-bold text-sm sm:text-lg transition-all duration-300 hover:shadow-2xl hover:shadow-brand-purple/30 hover:-translate-y-1 group"
            >
              <span className="inline-block group-hover:animate-bounce-soft">Hire Me</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
