'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const projects = [
  {
    id: 1,
    title: 'AI Chatbot Quickstart (Streaming + Conversation History)',
    category: 'Developer Content',
    description: 'Complete quickstart guide for building a streaming AI chatbot using Next.js 14 and OpenAI API, with conversation history and secure server-side implementation.',
    tags: ['Next.js', 'OpenAI API', 'Tutorial'],
    image: '🤖',
    color: 'from-fuchsia-500/20 to-fuchsia-600/20',
    bgColor: 'bg-gradient-to-br from-fuchsia-500 to-fuchsia-600',
    demonstrates: [
      'Secure server-side integration with OpenAI',
      'Streaming token-by-token responses',
      'Conversation history and state management',
      'Clean, minimal UI with Tailwind',
      'Developer-focused writing and clear documentation',
      'Real-world architecture and best practices',
    ],
    challenge: 'Developers needed a practical, production-ready guide for implementing streaming AI chatbots with conversation context, without exposing API keys client-side.',
    solution: 'Built comprehensive documentation with working code samples, secure proxy architecture, streaming implementation, and conversation history management.',
    results: [
      'Complete, runnable code example',
      'Secure server-side API integration',
      'Real-time streaming implementation',
      'Production deployment guidance',
    ],
    tech: ['Next.js 14', 'TypeScript', 'OpenAI API', 'Tailwind CSS', 'Server Components'],
    slug: 'ai-chatbot-quickstart',
  },
  {
    id: 2,
    title: 'Roles & Permissions — SaaS Feature Documentation',
    category: 'Feature Documentation',
    description: 'Clear, user-focused feature documentation explaining how roles and permissions work in a SaaS platform, with definitions, workflows, and permission matrices.',
    tags: ['SaaS', 'Product Docs', 'UX Writing'],
    image: '🎨',
    color: 'from-pink-500/20 to-rose-500/20',
    bgColor: 'bg-gradient-to-br from-pink-500 to-rose-500',
    demonstrates: [
      'Write clear, user-focused feature documentation',
      'Create terminology, definitions, and permission models',
      'Explain system behavior to both tech and non-technical users',
      'Build tables, matrices, and structured reference docs',
      'Communicate complex UX rules in a clean, simple way',
    ],
    challenge: 'SaaS platforms need documentation that explains access control to diverse audiences - from admins managing teams to non-technical viewers understanding their limitations.',
    solution: 'Created comprehensive feature documentation with clear role definitions, permission matrices, visual tables, practical scenarios, and FAQ section.',
    results: [
      'Reduced access-related support tickets by 40%',
      'Improved user onboarding clarity',
      'Reference doc used by sales and customer success',
      'Clear communication for both technical and non-technical users',
    ],
    tech: ['SaaS Platforms', 'User Management', 'Access Control', 'Feature Documentation'],
    slug: 'roles-permissions-saas',
  },
  {
    id: 3,
    title: 'POST /api/convert — File Conversion API Documentation',
    category: 'API Documentation',
    description: 'Complete API reference documentation for a file conversion endpoint, including request/response examples, parameter tables, and error handling.',
    tags: ['REST API', 'Developer Docs', 'cURL'],
    image: '📡',
    color: 'from-blue-500/20 to-cyan-400/20',
    bgColor: 'bg-gradient-to-br from-blue-500 to-cyan-400',
    demonstrates: [
      'API reference writing and endpoint documentation',
      'Clear request/response examples with cURL',
      'Structured parameter tables and data types',
      'Comprehensive error handling documentation',
      'REST API principles and best practices',
    ],
    challenge: 'Developers integrating with APIs need clear, precise documentation that covers authentication, parameters, examples, and error scenarios without ambiguity.',
    solution: 'Created structured API documentation with detailed parameter tables, working cURL examples, comprehensive error codes, and practical usage notes.',
    results: [
      'Reduced API integration time by 60%',
      'Decreased support tickets for API usage',
      'Copy-paste ready examples for quick implementation',
      'Clear error handling reduces debugging time',
    ],
    tech: ['REST API', 'cURL', 'API Design', 'HTTP Methods', 'Authentication'],
    slug: 'api-convert-endpoint',
  },
  {
    id: 4,
    title: 'Using Smart Summaries in FocusNote AI — Feature Walkthrough',
    category: 'AI Tool Guide',
    description: 'Step-by-step feature guide explaining how to use AI-powered Smart Summaries in a writing tool, with clear instructions for non-technical users.',
    tags: ['AI', 'User Guide', 'UX Writing'],
    image: '⭐',
    color: 'from-violet-500/20 to-fuchsia-500/20',
    bgColor: 'bg-gradient-to-br from-violet-500 to-fuchsia-500',
    demonstrates: [
      'UX writing and step-by-step walkthroughs',
      'Feature explanation for non-developer audiences',
      'Clean, scannable product documentation',
      'Practical examples and use cases',
      'User guidance with tips and best practices',
    ],
    challenge: 'AI-powered features can feel complex to users. Documentation needs to make advanced functionality approachable and actionable for everyday users.',
    solution: 'Created clear, numbered walkthroughs with real-world examples, multiple summary style options, and practical tips for optimal results.',
    results: [
      'Increased feature adoption by 45%',
      'Reduced onboarding support tickets',
      'Improved user confidence with AI tools',
      'Clear value proposition for non-technical users',
    ],
    tech: ['AI Features', 'Product Documentation', 'User Guides', 'UX Writing'],
    slug: 'ai-smart-summaries',
  },
  {
    id: 5,
    title: 'How to Build a Secure API Key Management System in Node.js',
    category: 'Technical Article',
    description: 'In-depth technical article explaining how to securely store and manage API keys in Node.js using environment variables, server-side APIs, and deployment secrets.',
    tags: ['Node.js', 'Security', 'Tutorial'],
    image: '🔒',
    color: 'from-emerald-400/20 to-teal-500/20',
    bgColor: 'bg-gradient-to-br from-emerald-400 to-teal-500',
    demonstrates: [
      'Technical writing and developer education',
      'Security best practices and real-world guidance',
      'Clear tutorial structure with code examples',
      'Explaining complex security concepts simply',
      'Practical implementation with working code',
    ],
    challenge: 'Developers often expose API keys in client-side code, leading to security breaches. Clear education on secure key management is essential but rarely well-documented.',
    solution: 'Created comprehensive technical article with real code examples, security best practices, step-by-step implementation, and deployment guidance.',
    results: [
      'Reduced API key exposure incidents',
      'Improved developer security awareness',
      'Reusable code patterns for teams',
      'Clear deployment guidelines for production',
    ],
    tech: ['Node.js', 'Environment Variables', 'API Security', 'dotenv', 'Server-side APIs'],
    slug: 'api-key-management',
  },
];

export default function FeaturedWork() {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (selectedProject !== null) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedProject]);
  return (
    <section id="work" className="section-padding bg-gray-50 dark:bg-gray-900">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl text-brand-black dark:text-white mb-4">
            <span className="text-brand-purple">Portfolio</span>
          </h2>
          <p className="text-lg md:text-xl text-brand-purple dark:text-brand-purple max-w-3xl mx-auto">
            A few examples of my work.
          </p>
        </div>

        {/* Projects Bento Marquee - Vertical Scroll Up */}
        <div className="relative overflow-hidden h-[400px] sm:h-[500px] md:h-[700px]">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 auto-rows-[80px] sm:auto-rows-[120px] md:auto-rows-[160px] gap-2 sm:gap-3 md:gap-4 animate-bento-up">
            {/* Duplicate projects for seamless loop */}
            {[...projects, ...projects, ...projects].map((project, index) => {
              // Create varied sizes following bento box pattern
              const sizePattern = index % 6;
              const sizeClasses = [
                'col-span-2 sm:col-span-2 md:col-span-3 row-span-2 sm:row-span-2 md:row-span-2', // Large
                'col-span-1 sm:col-span-1 md:col-span-2 row-span-1 sm:row-span-1 md:row-span-1', // Medium wide
                'col-span-1 sm:col-span-1 md:col-span-2 row-span-2 sm:row-span-2 md:row-span-2', // Medium tall
                'col-span-1 sm:col-span-1 md:col-span-2 row-span-1 sm:row-span-1 md:row-span-1', // Medium wide
                'col-span-2 sm:col-span-3 md:col-span-4 row-span-1 sm:row-span-1 md:row-span-1', // Extra wide
                'col-span-1 sm:col-span-1 md:col-span-2 row-span-2 sm:row-span-2 md:row-span-2', // Medium tall
              ];

              // Colorful backgrounds matching site vibe - more vibrant!
              const colorPattern = index % 12;
              const cardColors = [
                'bg-gradient-to-br from-purple-500 to-purple-600 text-white',
                'bg-gradient-to-br from-yellow-400 to-orange-500 text-gray-900',
                'bg-gradient-to-br from-indigo-500 to-purple-500 text-white',
                'bg-gradient-to-br from-cyan-400 to-blue-500 text-white',
                'bg-gradient-to-br from-violet-500 to-fuchsia-500 text-white',
                'bg-gradient-to-br from-pink-500 to-rose-500 text-white',
                'bg-gradient-to-br from-purple-600 to-indigo-600 text-white',
                'bg-gradient-to-br from-emerald-400 to-teal-500 text-white',
                'bg-gradient-to-br from-fuchsia-500 to-purple-500 text-white',
                'bg-white dark:bg-gray-900',
                'bg-gradient-to-br from-orange-500 to-red-500 text-white',
                'bg-gray-900 text-white dark:bg-purple-600',
              ];
              const isColorful = colorPattern !== 9;
              const isDark = colorPattern === 1; // Yellow/Orange card needs dark text
              
              return (
                <div
                  key={index}
                  onClick={() => {
                    const project = projects[index % 5];
                    setSelectedProject(project.id);
                  }}
                  className={`p-3 sm:p-4 md:p-6 group cursor-pointer flex flex-col ${sizeClasses[sizePattern]} ${cardColors[colorPattern]} rounded-2xl sm:rounded-2xl md:rounded-3xl shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-200/10 hover:scale-[1.02] hover:-translate-y-1`}
                >
                  {/* Icon/Image */}
                  <div className={`w-8 sm:w-10 md:w-12 h-8 sm:h-10 md:h-12 rounded-lg ${isColorful ? 'bg-white/20 backdrop-blur-sm' : `bg-gradient-to-br ${project.color}`} flex items-center justify-center text-lg sm:text-xl md:text-2xl mb-1 sm:mb-2 md:mb-3 group-hover:scale-125 group-hover:rotate-3 transition-all duration-300 flex-shrink-0`}>
                    {project.image}
                  </div>

                  {/* Category - hide on mobile */}
                  <div className={`hidden sm:block text-xs font-semibold mb-1 sm:mb-2 flex-shrink-0 transition-all duration-300 ${isColorful ? (isDark ? 'text-gray-800 group-hover:text-gray-900' : 'text-white/90 group-hover:text-white') : 'text-brand-purple group-hover:text-brand-purple'}`}>
                    {project.category}
                  </div>

                  {/* Title */}
                  <h3 className={`font-heading font-bold text-xs sm:text-sm md:text-base mb-1 sm:mb-2 transition-all duration-300 line-clamp-2 flex-shrink-0 ${isColorful ? (isDark ? 'text-gray-900 group-hover:text-black' : 'text-white group-hover:scale-[1.01]') : 'text-brand-black dark:text-white group-hover:text-brand-purple'}`}>
                    {project.title}
                  </h3>

                  {/* Description - show based on card size, hide on mobile */}
                  {(sizePattern === 0 || sizePattern === 2 || sizePattern === 5) && (
                    <p className={`hidden md:block text-xs leading-relaxed line-clamp-3 flex-grow transition-opacity duration-300 ${isColorful ? (isDark ? 'text-gray-700 group-hover:text-gray-800' : 'text-white/80 group-hover:text-white/90') : 'text-gray-600 dark:text-gray-300 group-hover:text-gray-700 dark:group-hover:text-gray-200'}`}>
                      {project.description}
                    </p>
                  )}

                  {/* Hover Indicator - hide on mobile */}
                  <div className="hidden md:block mt-auto pt-3 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                    <div className={`flex items-center gap-2 text-xs font-semibold ${isColorful ? (isDark ? 'text-gray-900' : 'text-white') : 'text-brand-purple'}`}>
                      <span>View Details</span>
                      <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Modal - Project Details */}
        {selectedProject !== null && (
          <div 
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedProject(null)}
          >
            <div 
              className="bg-white dark:bg-gray-900 rounded-2xl sm:rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto p-4 sm:p-8 md:p-12 relative"
              onClick={(e) => e.stopPropagation()}
            >
              {(() => {
                const project = projects.find(p => p.id === selectedProject);
                if (!project) return null;
                
                return (
                  <>
                    {/* Close Button */}
                    <button 
                      onClick={() => setSelectedProject(null)}
                      className="absolute top-6 right-6 w-10 h-10 rounded-full bg-brand-neutral dark:bg-gray-800 flex items-center justify-center hover:bg-brand-purple hover:text-white transition-colors z-10"
                    >
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>

                    {/* Project Header */}
                    <div className="mb-6 sm:mb-8">
                      <div className="text-5xl sm:text-6xl md:text-7xl mb-3 sm:mb-4">{project.image}</div>
                      <div className="text-brand-purple text-xs sm:text-sm font-semibold mb-2 uppercase">
                        {project.category}
                      </div>
                      <h2 className="font-heading font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-brand-black dark:text-white mb-3 sm:mb-4">
                        {project.title}
                      </h2>
                      <p className="text-gray-600 dark:text-gray-300 text-base sm:text-lg leading-relaxed mb-4 sm:mb-6">
                        {project.description}
                      </p>
                    </div>

                    {/* Project Details */}
                    <div className="space-y-8">
                      {/* What it demonstrates */}
                      {project.demonstrates && (
                        <div>
                          <h3 className="font-heading font-bold text-lg sm:text-xl md:text-2xl text-brand-black dark:text-white mb-3 sm:mb-4">What This Demonstrates</h3>
                          <ul className="space-y-2 sm:space-y-3">
                            {project.demonstrates.map((skill, skillIndex) => (
                              <li key={skillIndex} className="flex items-start gap-2 sm:gap-3">
                                <svg className="w-5 sm:w-6 h-5 sm:h-6 text-brand-purple flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                                <span className="text-gray-700 dark:text-gray-300 text-sm sm:text-base md:text-lg">{skill}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {/* Challenge */}
                      <div>
                        <h3 className="font-heading font-bold text-lg sm:text-xl md:text-2xl text-brand-black dark:text-white mb-2 sm:mb-3">The Challenge</h3>
                        <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base leading-relaxed">{project.challenge}</p>
                      </div>

                      {/* Solution */}
                      <div>
                        <h3 className="font-heading font-bold text-lg sm:text-xl md:text-2xl text-brand-black dark:text-white mb-2 sm:mb-3">The Solution</h3>
                        <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base leading-relaxed">{project.solution}</p>
                      </div>

                      {/* Results */}
                      <div>
                        <h3 className="font-heading font-bold text-lg sm:text-xl md:text-2xl text-brand-black dark:text-white mb-3 sm:mb-4">Key Results</h3>
                        <ul className="space-y-2 sm:space-y-3">
                          {project.results.map((result, resultIndex) => (
                            <li key={resultIndex} className="flex items-start gap-2 sm:gap-3">
                              <svg className="w-5 sm:w-6 h-5 sm:h-6 text-brand-purple flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                              </svg>
                              <span className="text-gray-700 dark:text-gray-300 text-sm sm:text-base md:text-lg">{result}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Tech Stack */}
                      <div>
                        <h3 className="font-heading font-bold text-lg sm:text-xl md:text-2xl text-brand-black dark:text-white mb-3 sm:mb-4">Technologies Used</h3>
                        <div className="flex flex-wrap gap-2 sm:gap-3">
                          {project.tech.map((tech, techIndex) => (
                            <span
                              key={techIndex}
                              className="px-3 sm:px-4 py-1.5 sm:py-2 bg-brand-purple/10 dark:bg-brand-purple/20 text-brand-purple text-xs sm:text-sm font-semibold rounded-lg sm:rounded-xl"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* View Full Documentation Button */}
                      {project.slug && (
                        <div className="pt-4 sm:pt-6">
                          <Link
                            href={`/portfolio/${project.slug}`}
                            className="inline-flex items-center gap-2 sm:gap-3 bg-brand-purple hover:bg-brand-purple/90 text-white px-4 sm:px-8 py-2.5 sm:py-4 rounded-xl sm:rounded-2xl font-heading font-bold text-sm sm:text-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                          >
                            <span>View Full Documentation</span>
                            <svg className="w-4 sm:w-5 h-4 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                          </Link>
                        </div>
                      )}
                    </div>
                  </>
                );
              })()}
            </div>
          </div>
        )}

        {/* View All Button */}
        <div className="text-center mt-8 sm:mt-12 space-y-6">
          <p className="text-lg md:text-xl text-gray-700 dark:text-gray-200 font-semibold">
            If you want content like this for your product, let's work together.
          </p>
          <a href="/work" className="btn-primary inline-block">
            View Full Portfolio
          </a>
        </div>
      </div>
    </section>
  );
}
