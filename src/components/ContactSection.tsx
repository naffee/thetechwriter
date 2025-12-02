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
            Let's create something <span className="text-brand-purple">amazing together</span>
          </h2>

          {/* Description */}
          <p className="text-lg md:text-xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed animate-fade-in-up" style={{animationDelay: '0.1s'}}>
            Whether you need help with documentation, developer content, or a web project, 
            I'd love to hear from you. Let's talk about your next project.
          </p>

          {/* Contact Methods */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {/* Email */}
            <a
              href="mailto:hello@thetechwriter.dev"
              className="bg-white/10 backdrop-blur-sm hover:bg-white/20 rounded-xl sm:rounded-2xl p-4 sm:p-6 transition-all duration-300 hover:-translate-y-1 group animate-scale-in"
              style={{animationDelay: '0.2s'}}
            >
              <svg className="w-8 sm:w-12 h-8 sm:h-12 text-brand-purple mx-auto mb-2 sm:mb-4 group-hover:scale-110 group-hover:animate-wiggle transition-transform" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
              <h3 className="font-heading font-bold text-base sm:text-lg mb-1 sm:mb-2">Email</h3>
              <p className="text-gray-300 text-xs sm:text-sm">hello@thetechwriter.dev</p>
            </a>

            {/* LinkedIn */}
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 backdrop-blur-sm hover:bg-white/20 rounded-xl sm:rounded-2xl p-4 sm:p-6 transition-all duration-300 hover:-translate-y-1 group animate-scale-in"
              style={{animationDelay: '0.3s'}}
            >
              <svg className="w-8 sm:w-12 h-8 sm:h-12 text-brand-blue mx-auto mb-2 sm:mb-4 group-hover:scale-110 group-hover:animate-wiggle transition-transform" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd" />
              </svg>
              <h3 className="font-heading font-bold text-base sm:text-lg mb-1 sm:mb-2">LinkedIn</h3>
              <p className="text-gray-300 text-xs sm:text-sm">Connect with me</p>
            </a>

            {/* GitHub */}
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 backdrop-blur-sm hover:bg-white/20 rounded-xl sm:rounded-2xl p-4 sm:p-6 transition-all duration-300 hover:-translate-y-1 group animate-scale-in"
              style={{animationDelay: '0.4s'}}
            >
              <svg className="w-8 sm:w-12 h-8 sm:h-12 text-brand-purple mx-auto mb-2 sm:mb-4 group-hover:scale-110 group-hover:animate-wiggle transition-transform" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
              </svg>
              <h3 className="font-heading font-bold text-base sm:text-lg mb-1 sm:mb-2">GitHub</h3>
              <p className="text-gray-300 text-xs sm:text-sm">View my code</p>
            </a>
          </div>

          {/* CTA Button */}
          <div className="pt-6 sm:pt-8 animate-fade-in-up" style={{animationDelay: '0.5s'}}>
            <a
              href="mailto:hello@thetechwriter.dev"
              className="inline-block bg-brand-purple hover:bg-brand-purple/90 text-white px-8 sm:px-12 py-3 sm:py-5 rounded-lg sm:rounded-2xl font-heading font-bold text-sm sm:text-lg transition-all duration-300 hover:shadow-2xl hover:shadow-brand-purple/30 hover:-translate-y-1 group"
            >
              <span className="inline-block group-hover:animate-bounce-soft">Send Me a Message</span>
            </a>
          </div>

          {/* Availability Note */}
          <div className="mt-6 sm:mt-8 inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 sm:px-6 py-2 sm:py-3 rounded-full animate-scale-in" style={{animationDelay: '0.6s'}}>
            <span className="w-2 sm:w-3 h-2 sm:h-3 bg-green-400 rounded-full animate-pulse" />
            <span className="text-xs sm:text-sm text-gray-300">Currently available for new projects</span>
          </div>
        </div>
      </div>
    </section>
  );
}
