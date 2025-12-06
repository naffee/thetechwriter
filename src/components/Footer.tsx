'use client';

import React from 'react';
import CatMascot from './CatMascot';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-black text-white py-12 sm:py-16">
      <div className="container-custom">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-8 sm:gap-12 mb-8 sm:mb-12">
          {/* Brand Column */}
          <div className="col-span-2 sm:col-span-1 md:col-span-2">
            <div className="flex items-center gap-3 mb-3 sm:mb-4">
              <CatMascot variant="peeking" className="w-8 sm:w-10 h-8 sm:h-10" />
              <span className="font-heading font-bold text-lg sm:text-2xl">
                thetechwriter<span className="text-brand-purple">.dev</span>
              </span>
            </div>
            <p className="text-gray-400 leading-relaxed max-w-md mb-4 sm:mb-6 text-xs sm:text-sm">
              Clear writing for AI and SaaS teams.
            </p>
            {/* Social Links */}
            <div className="flex gap-3 sm:gap-4">
              <a
                href="https://www.linkedin.com/in/nafisat-damisa-29956831a"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 sm:w-10 h-8 sm:h-10 bg-white/10 hover:bg-brand-purple rounded-lg flex items-center justify-center transition-colors"
                aria-label="LinkedIn"
              >
                <svg className="w-4 sm:w-5 h-4 sm:h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading font-bold text-base sm:text-lg mb-3 sm:mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="/work" className="text-gray-400 hover:text-brand-purple transition-colors text-xs sm:text-sm">
                  Work
                </a>
              </li>
              <li>
                <a href="/about" className="text-gray-400 hover:text-brand-purple transition-colors text-xs sm:text-sm">
                  About
                </a>
              </li>
              <li>
                <a href="/blog" className="text-gray-400 hover:text-brand-purple transition-colors text-xs sm:text-sm">
                  Blog
                </a>
              </li>
              <li>
                <a href="/services" className="text-gray-400 hover:text-brand-purple transition-colors text-xs sm:text-sm">
                  Services
                </a>
              </li>
              <li>
                <a href="/contact" className="text-gray-400 hover:text-brand-purple transition-colors text-xs sm:text-sm">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-heading font-bold text-base sm:text-lg mb-3 sm:mb-4">Get in Touch</h3>
            <ul className="space-y-2 text-gray-400 text-xs sm:text-sm">
              <li>
                <a href="mailto:nafisat@thetechwriter.dev" className="hover:text-brand-purple transition-colors">
                  nafisat@thetechwriter.dev
                </a>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                <span>Available for projects</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-6 sm:pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-xs sm:text-sm text-center sm:text-left">
            © {currentYear} thetechwriter.dev. All rights reserved.
          </p>
          <div className="flex gap-4 sm:gap-6 text-xs sm:text-sm text-gray-400">
            <a href="#" className="hover:text-brand-purple transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-brand-purple transition-colors">
              Terms of Service
            </a>
          </div>
        </div>

        {/* Hidden Cat Easter Egg */}
        <div className="absolute bottom-3 sm:bottom-4 right-3 sm:right-4 opacity-20 hover:opacity-100 transition-opacity">
          <CatMascot variant="paw" className="w-6 sm:w-8 h-6 sm:h-8" />
        </div>
      </div>
    </footer>
  );
}
