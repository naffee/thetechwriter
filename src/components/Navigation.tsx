'use client';

import React, { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import CatMascot from './CatMascot';
import ThemeToggle from './ThemeToggle';

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 dark:bg-gray-900/95 backdrop-blur-md shadow-lg py-4'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="container-custom flex items-center justify-between">
        {/* Logo with Cat */}
        <a href="/" className="flex items-center gap-2 group cursor-pointer">
          <CatMascot variant="peeking" className="w-12 h-12 sm:w-14 sm:h-14 group-hover:scale-110 transition-transform" />
          <span className="font-heading font-bold text-2xl sm:text-3xl text-brand-black dark:text-white">
            thetechwriter<span className="text-brand-purple">.dev</span>
          </span>
        </a>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="/work"
            className={`font-medium transition-colors ${
              pathname === '/work'
                ? 'text-brand-purple dark:text-brand-purple'
                : 'text-brand-black dark:text-gray-200 hover:text-brand-purple dark:hover:text-brand-purple'
            }`}
          >
            Portfolio
          </a>
          <a
            href="/about"
            className={`font-medium transition-colors ${
              pathname === '/about'
                ? 'text-brand-purple dark:text-brand-purple'
                : 'text-brand-black dark:text-gray-200 hover:text-brand-purple dark:hover:text-brand-purple'
            }`}
          >
            About
          </a>
          <a
            href="/blog"
            className={`font-medium transition-colors ${
              pathname?.startsWith('/blog')
                ? 'text-brand-purple dark:text-brand-purple'
                : 'text-brand-black dark:text-gray-200 hover:text-brand-purple dark:hover:text-brand-purple'
            }`}
          >
            Blog
          </a>
          <a
            href="/services"
            className={`font-medium transition-colors ${
              pathname === '/services'
                ? 'text-brand-purple dark:text-brand-purple'
                : 'text-brand-black dark:text-gray-200 hover:text-brand-purple dark:hover:text-brand-purple'
            }`}
          >
            Services
          </a>
          <ThemeToggle />
          <a
            href="/contact"
            className="btn-primary text-sm"
          >
            Hire Me
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-3">
          <ThemeToggle />
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-brand-black dark:text-white"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
          <div className="container-custom py-4 space-y-2">
            <a
              href="/work"
              className={`block py-3 px-4 rounded-xl font-medium transition-colors ${
                pathname === '/work'
                  ? 'bg-brand-purple/20 dark:bg-brand-purple/30 text-brand-purple'
                  : 'text-brand-black dark:text-gray-200 hover:bg-brand-purple/10 dark:hover:bg-brand-purple/20'
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Portfolio
            </a>
            <a
              href="/about"
              className={`block py-3 px-4 rounded-xl font-medium transition-colors ${
                pathname === '/about'
                  ? 'bg-brand-purple/20 dark:bg-brand-purple/30 text-brand-purple'
                  : 'text-brand-black dark:text-gray-200 hover:bg-brand-purple/10 dark:hover:bg-brand-purple/20'
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </a>
            <a
              href="/blog"
              className={`block py-3 px-4 rounded-xl font-medium transition-colors ${
                pathname?.startsWith('/blog')
                  ? 'bg-brand-purple/20 dark:bg-brand-purple/30 text-brand-purple'
                  : 'text-brand-black dark:text-gray-200 hover:bg-brand-purple/10 dark:hover:bg-brand-purple/20'
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Blog
            </a>
            <a
              href="/services"
              className={`block py-3 px-4 rounded-xl font-medium transition-colors ${
                pathname === '/services'
                  ? 'bg-brand-purple/20 dark:bg-brand-purple/30 text-brand-purple'
                  : 'text-brand-black dark:text-gray-200 hover:bg-brand-purple/10 dark:hover:bg-brand-purple/20'
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Services
            </a>
            <a
              href="/contact"
              className="block py-3 px-4 bg-brand-purple text-white hover:bg-brand-purple/90 rounded-xl font-medium text-center transition-colors mt-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Hire Me
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
