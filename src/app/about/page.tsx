'use client';

import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const skills = [
  {
    category: 'Technical Writing',
    items: [
      'API Documentation',
      'Developer Guides',
      'User Documentation',
      'Technical Tutorials',
      'Release Notes',
      'Knowledge Base Articles',
    ],
    icon: '📝',
    color: 'from-brand-purple/20 to-brand-blue/20',
  },
  {
    category: 'Development',
    items: [
      'Next.js / React',
      'TypeScript / JavaScript',
      'Tailwind CSS',
      'Node.js',
      'REST APIs',
      'Git & GitHub',
    ],
    icon: '💻',
    color: 'from-brand-blue/20 to-brand-purple/20',
  },
  {
    category: 'Content Strategy',
    items: [
      'Content Planning',
      'SEO Optimization',
      'Information Architecture',
      'Developer Relations',
      'Technical Blogging',
      'Documentation Strategy',
    ],
    icon: '🎯',
    color: 'from-brand-purple/20 to-brand-blush/40',
  },
  {
    category: 'Tools & Platforms',
    items: [
      'Markdown / MDX',
      'Docusaurus / GitBook',
      'Figma',
      'Postman',
      'VS Code',
      'Cloudinary',
    ],
    icon: '🛠️',
    color: 'from-brand-blue/20 to-brand-blush/40',
  },
];

const experience = [
  {
    role: 'Senior Technical Writer',
    company: 'SaaS Platform Inc.',
    period: '2022 - Present',
    description: 'Leading documentation strategy for a B2B SaaS platform, managing API docs, developer guides, and SDK documentation.',
    achievements: [
      'Reduced developer onboarding time by 60%',
      'Established documentation-as-code workflow',
      'Built and maintained component library docs',
    ],
  },
  {
    role: 'Technical Writer & Developer',
    company: 'Tech Startup Co.',
    period: '2020 - 2022',
    description: 'Created documentation and built internal tools for developer experience team.',
    achievements: [
      'Wrote 100+ technical articles and guides',
      'Built custom documentation portal with Next.js',
      'Improved documentation search by 200%',
    ],
  },
  {
    role: 'Frontend Developer',
    company: 'Digital Agency',
    period: '2019 - 2020',
    description: 'Developed web applications and client websites with modern JavaScript frameworks.',
    achievements: [
      'Delivered 15+ client projects',
      'Established code documentation standards',
      'Mentored junior developers',
    ],
  },
];

const values = [
  {
    title: 'Clarity Over Complexity',
    description: 'Great documentation makes complex things simple, not simple things complex.',
    icon: '✨',
  },
  {
    title: 'Developer First',
    description: 'Always thinking from the developer\'s perspective. What would make their life easier?',
    icon: '🎯',
  },
  {
    title: 'Code as Craft',
    description: 'Whether it\'s writing or coding, I believe in doing it with care and attention to detail.',
    icon: '🎨',
  },
  {
    title: 'Continuous Learning',
    description: 'Tech changes fast. I stay curious, keep learning, and adapt to new tools and practices.',
    icon: '📚',
  },
];

export default function AboutPage() {
  return (
    <>
      <Navigation />
      
      <main className="min-h-screen bg-brand-neutral dark:bg-gray-900">
        {/* Hero Section */}
        <section className="pt-24 sm:pt-32 pb-16 sm:pb-20 bg-gradient-to-br from-brand-neutral via-white to-brand-neutral/50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 relative overflow-hidden">
          <div className="absolute top-20 right-10 w-96 h-96 bg-brand-purple/5 dark:bg-brand-purple/20 rounded-full blur-3xl" />
          <div className="absolute bottom-20 left-10 w-96 h-96 bg-brand-blue/5 dark:bg-brand-blue/20 rounded-full blur-3xl" />          
          <div className="container-custom relative z-10">
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
              {/* Left - Content */}
              <div>
                <div className="inline-block px-4 py-2 bg-brand-purple/10 dark:bg-brand-purple/20 rounded-full mb-6">
                  <span className="text-brand-purple text-sm font-medium">About Me</span>
                </div>
                
                <h1 className="font-heading font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-brand-black dark:text-white mb-6 leading-tight">
                  About Me
                </h1>
                
                <p className="text-lg sm:text-xl md:text-2xl text-brand-purple font-semibold leading-relaxed">
                  I write. I build. I make complex things simple.
                </p>
              </div>

              {/* Right - Profile Image Placeholder */}
              <div className="relative flex justify-center">
                <div className="relative w-full max-w-md">
                  {/* Decorative Background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-brand-purple/20 to-brand-blue/20 dark:from-brand-purple/30 dark:to-brand-blue/30 rounded-3xl blur-2xl scale-110" />
                  
                  {/* Image Container */}
                  <div className="relative bg-white dark:bg-gray-900 rounded-3xl overflow-hidden shadow-2xl aspect-square">
                    {/* Placeholder Image - Replace with your actual image */}
                    <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-800 flex items-center justify-center">
                      <div className="text-center">
                        <svg className="w-32 h-32 mx-auto text-gray-400 dark:text-gray-500 mb-4" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                        </svg>
                        <p className="text-gray-500 dark:text-gray-400 font-medium">Your Photo Here</p>
                        <p className="text-sm text-gray-400 dark:text-gray-500 mt-2">400 x 400px</p>
                      </div>
                    </div>
                    
                    {/* Optional: Floating Badge */}
                    <div className="absolute -bottom-6 -right-6 bg-brand-purple text-white px-6 py-3 rounded-2xl shadow-xl">
                      <div className="flex items-center gap-2">
                        <span className="text-2xl">👋</span>
                        <span className="font-heading font-bold">Nice to meet you!</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="section-padding bg-white dark:bg-gray-800">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-heading font-bold text-4xl md:text-5xl text-brand-black dark:text-white mb-8">
                Who I <span className="text-brand-purple">Am</span>
              </h2>
              
              <div className="space-y-6 text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                <p>
                  I'm Her Nafisat, a technical writer and developer specializing in AI, SaaS, and developer tools.
                </p>
                
                <p>
                  My work focuses on taking complex systems—APIs, AI workflows, technical features—and making them clear, usable, and easy to understand.
                </p>
                
                <p>
                  I combine writing, development, and problem-solving to help teams explain their product clearly and give users a smoother experience.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* What I Do Section */}
        <section className="section-padding bg-brand-neutral dark:bg-gray-900">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-heading font-bold text-4xl md:text-5xl text-brand-black dark:text-white mb-8">
                What I <span className="text-brand-purple">Do</span>
              </h2>
              
              <div className="space-y-6 text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                <p>
                  I help startups and product teams create:
                </p>
                
                <ul className="space-y-3 ml-6">
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-brand-purple flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Clean technical documentation</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-brand-purple flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Developer tutorials and guides</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-brand-purple flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>API & SDK documentation</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-brand-purple flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Product walkthroughs</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-brand-purple flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>UX and help-center content</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-brand-purple flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Technical articles & explainer posts</span>
                  </li>
                </ul>
                
                <p className="pt-4">
                  Whether you're building an AI tool, a SaaS platform, or a developer-focused product, I turn your features into content people understand.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* My Approach Section */}
        <section className="section-padding bg-white dark:bg-gray-800">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-heading font-bold text-4xl md:text-5xl text-brand-black dark:text-white mb-8">
                My <span className="text-brand-purple">Approach</span>
              </h2>
              
              <div className="space-y-6 text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                <p>
                  I believe good documentation should be:
                </p>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-brand-neutral dark:bg-gray-900 rounded-2xl p-6">
                    <h3 className="font-heading font-bold text-xl text-brand-black dark:text-white mb-2">
                      <span className="text-brand-purple">Clear</span> — no jargon walls
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">Simple language that anyone can understand</p>
                  </div>
                  
                  <div className="bg-brand-neutral dark:bg-gray-900 rounded-2xl p-6">
                    <h3 className="font-heading font-bold text-xl text-brand-black dark:text-white mb-2">
                      <span className="text-brand-purple">Useful</span> — real steps, real examples
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">Practical guidance that works in the real world</p>
                  </div>
                  
                  <div className="bg-brand-neutral dark:bg-gray-900 rounded-2xl p-6">
                    <h3 className="font-heading font-bold text-xl text-brand-black dark:text-white mb-2">
                      <span className="text-brand-purple">Modern</span> — structured, readable, developer-friendly
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">Built with modern tools and workflows</p>
                  </div>
                  
                  <div className="bg-brand-neutral dark:bg-gray-900 rounded-2xl p-6">
                    <h3 className="font-heading font-bold text-xl text-brand-black dark:text-white mb-2">
                      <span className="text-brand-purple">Fast</span> — gets users from confusion to success quickly
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">Minimize time to value, maximize clarity</p>
                  </div>
                </div>
                
                <p className="pt-4">
                  Everything I create is designed to reduce support tickets, shorten onboarding time, and help users adopt your product with confidence.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Grid */}
        <section className="section-padding bg-brand-neutral dark:bg-gray-900">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-heading font-bold text-4xl md:text-5xl text-brand-black dark:text-white mb-8">
                What Makes Me <span className="text-brand-purple">Different</span>
              </h2>
              
              <div className="space-y-6 text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
                <p className="text-2xl font-heading font-bold text-brand-black dark:text-white">
                  Many writers can explain concepts. I can explain and build them.
                </p>
                
                <p>
                  Because I write and code, I'm comfortable with:
                </p>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <svg className="w-6 h-6 text-brand-purple flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>APIs</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg className="w-6 h-6 text-brand-purple flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>SDKs</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg className="w-6 h-6 text-brand-purple flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>Integration flows</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg className="w-6 h-6 text-brand-purple flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>AI model behavior</span>
                    </li>
                  </ul>
                  
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <svg className="w-6 h-6 text-brand-purple flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>Frontend architecture</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg className="w-6 h-6 text-brand-purple flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>Backend logic</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg className="w-6 h-6 text-brand-purple flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>Modern frameworks (Next.js, Node.js, etc.)</span>
                    </li>
                  </ul>
                </div>
                
                <p className="pt-4">
                  This lets me produce accurate, developer-friendly content instead of surface-level descriptions.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* What I'm Working On */}
        <section className="section-padding bg-white dark:bg-gray-800">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-heading font-bold text-4xl md:text-5xl text-brand-black dark:text-white mb-8">
                What I'm <span className="text-brand-purple">Working On</span>
              </h2>
              
              <div className="space-y-6 text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                <p>
                  I regularly create:
                </p>
                
                <ul className="space-y-3 ml-6">
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-brand-purple flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Sample projects</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-brand-purple flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Documentation templates</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-brand-purple flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>AI tutorials</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-brand-purple flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>SaaS feature documentation</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-brand-purple flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Best-practice guides</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-brand-purple flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Workflow breakdowns</span>
                  </li>
                </ul>
                
                <p className="pt-4">
                  You can browse some of my work in the <a href="/work" className="text-brand-purple hover:underline font-semibold">Portfolio</a> section.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Fun Facts Section */}
        <section className="section-padding bg-brand-neutral dark:bg-gray-900">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-heading font-bold text-4xl md:text-5xl text-brand-black dark:text-white mb-8">
                Outside of <span className="text-brand-purple">Work</span>
              </h2>
              
              <div className="space-y-6 text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
                <p>
                  When I'm not writing or building something, I'm usually:
                </p>
                
                <ul className="space-y-3 ml-6">
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-brand-purple flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Learning new tools</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-brand-purple flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Experimenting with AI models</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-brand-purple flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Planning projects</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-brand-purple flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Teaching</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-brand-purple flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Exploring productivity systems</span>
                  </li>
                </ul>
                
                <p className="pt-4 text-xl font-heading font-bold text-brand-black dark:text-white">
                  I love simplicity, clarity, and tools that make life (and software) easier.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding bg-gradient-to-br from-brand-black to-brand-purple/90 text-white relative overflow-hidden">          
          <div className="container-custom relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="font-heading font-bold text-4xl md:text-5xl mb-6">
                Let's work <span className="text-brand-purple">together</span>
              </h2>
              <p className="text-xl text-gray-200 mb-8">
                If you need documentation, tutorials, or product content for your AI or SaaS product, I'd love to help.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <a href="/contact" className="bg-white text-brand-black px-8 py-4 rounded-2xl font-heading font-bold hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                  Get in Touch
                </a>
                <a href="/work" className="border-2 border-white text-white px-8 py-4 rounded-2xl font-heading font-bold hover:bg-white hover:text-brand-black transition-all duration-300">
                  View My Work
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
