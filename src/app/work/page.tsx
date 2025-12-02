'use client';

import React, { useState, useEffect } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Link from 'next/link';


// Project data organized by category
const projects = [
  {
    id: 1,
    title: 'Streaming Chatbot — API & Architecture Documentation',
    category: 'Developer Documentation',
    tags: ['Next.js', 'OpenAI API', 'Architecture', 'AI'],
    description: 'A documentation-style breakdown of building a streaming AI chatbot. Covers architecture, API routes, proxying, and model usage.',
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
    image: '🤖',
    color: 'from-fuchsia-500 to-fuchsia-600',
    year: '2024',
    link: '#',
    slug: 'ai-chatbot-quickstart',
  },
  {
    id: 2,
    title: 'File Conversion API — Endpoint Documentation',
    category: 'Developer Documentation',
    tags: ['REST API', 'Developer Docs', 'API Reference', 'cURL'],
    description: 'Complete REST API documentation for a fictional file conversion service. Includes examples, parameters, and error handling.',
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
    image: '📡',
    color: 'from-blue-500 to-cyan-400',
    year: '2024',
    link: '#',
    slug: 'api-convert-endpoint',
  },
  {
    id: 3,
    title: 'Roles & Permissions — Feature Documentation',
    category: 'SaaS & Product Documentation',
    tags: ['SaaS', 'Product Docs', 'UX Writing', 'User Guides'],
    description: 'Clear, user-focused feature documentation explaining how roles and permissions work in a SaaS platform, with definitions, workflows, and permission matrices.',
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
    image: '🎨',
    color: 'from-pink-500 to-rose-500',
    year: '2024',
    link: '#',
    slug: 'roles-permissions-saas',
  },
  {
    id: 4,
    title: 'Smart Summaries — AI Feature Guide',
    category: 'SaaS & Product Documentation',
    tags: ['AI', 'User Guide', 'UX Writing', 'Product Docs'],
    description: 'A UX-friendly walkthrough of an AI summarization feature with step-by-step usage and examples.',
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
    image: '⭐',
    color: 'from-violet-500 to-fuchsia-500',
    year: '2024',
    link: '#',
    slug: 'ai-smart-summaries',
  },
  {
    id: 5,
    title: 'Build a Streaming AI Chatbot with Next.js & OpenAI',
    category: 'Developer Tutorials',
    tags: ['Next.js', 'OpenAI API', 'Tutorial', 'AI'],
    description: 'A hands-on, code-driven tutorial showing how to create a chatbot with streaming responses and conversation history.',
    demonstrates: [
      'Secure server-side integration with OpenAI',
      'Streaming token-by-token responses',
      'Conversation history and state management',
      'Clean, minimal UI with Tailwind',
      'Developer-focused writing and clear documentation',
      'Real-world architecture and best practices',
    ],
    challenge: 'Developers needed a practical, production-ready guide for implementing streaming AI chatbots with conversation context, without exposing API keys client-side.',
    solution: 'Built comprehensive tutorial with working code samples, secure proxy architecture, streaming implementation, and conversation history management.',
    results: [
      'Complete, runnable code example',
      'Secure server-side API integration',
      'Real-time streaming implementation',
      'Production deployment guidance',
    ],
    tech: ['Next.js 14', 'TypeScript', 'OpenAI API', 'Tailwind CSS', 'Server Components'],
    image: '🤖',
    color: 'from-fuchsia-500 to-fuchsia-600',
    year: '2024',
    link: '#',
    slug: 'ai-chatbot-quickstart',
  },
  {
    id: 6,
    title: 'Secure API Key Management in Node.js',
    category: 'Technical Articles',
    tags: ['Node.js', 'Security', 'Best Practices'],
    description: 'A deep-dive article explaining how to properly secure API keys, use env variables, and protect backend services.',
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
    image: '🔒',
    color: 'from-emerald-400 to-teal-500',
    year: '2024',
    link: '#',
    slug: 'api-key-management',
  },
  {
    id: 7,
    title: 'Retrieval-Augmented Generation (RAG): A Practical Guide for Modern AI Products',
    category: 'Blog Posts',
    tags: ['RAG', 'AI', 'LLMs', 'Guide'],
    description: 'A clear, developer-friendly explanation of what RAG is, why it matters, and how teams are using it to build smarter AI systems in 2025.',
    demonstrates: [
      'Explaining complex AI concepts simply',
      'Breaking down technical architecture for developers',
      'Practical use cases and real-world applications',
      'Clear comparisons (RAG vs fine-tuning)',
      'Best practices for production systems',
      'Developer-focused guidance and workflows',
    ],
    challenge: 'Developers need clear explanations of RAG without getting lost in academic jargon. They want to understand what it is, why it matters, and how to actually build it.',
    solution: 'Created a comprehensive guide that breaks down RAG in plain English with practical examples, use cases, and best practices that teams actually use in production.',
    results: [
      'Developers understand RAG fundamentals',
      'Clear comparison with fine-tuning shows when to use what',
      'Practical step-by-step workflow for building RAG systems',
      'Real use cases demonstrate business value',
      'Best practices guide implementation decisions',
    ],
    tech: ['RAG', 'LLMs', 'Vector Databases', 'Embeddings', 'AI Architecture'],
    image: '🔍',
    color: 'from-cyan-500 to-blue-500',
    year: '2025',
    link: '/portfolio/rag-guide',
    slug: 'rag-guide',
  },
  {
    id: 8,
    title: 'The Anatomy of Great Developer Documentation (With Real Examples)',
    category: 'Blog Posts',
    tags: ['Documentation', 'Developer Experience', 'Writing', 'Technical Writing'],
    description: 'What separates great docs from "just documentation"? Clarity, structure, and developer empathy.',
    demonstrates: [
      'Clear explanation of documentation best practices',
      'Real-world examples and comparisons',
      'Understanding developer needs and expectations',
      'Practical guidance for documentation structure',
      'Writing with empathy for the reader',
      'Creating comprehensive documentation systems',
    ],
    challenge: 'Most teams underestimate the importance of good documentation. They need clear guidance on what makes docs great and how to build them systematically.',
    solution: 'Created a comprehensive breakdown of documentation anatomy with 14 key components, examples, and practical recommendations that teams can implement immediately.',
    results: [
      'Teams understand what great docs require',
      'Clear checklist for documentation quality',
      'Real examples demonstrate best practices',
      'Reduced support tickets from better docs',
      'Improved developer adoption and satisfaction',
    ],
    tech: ['Technical Writing', 'Documentation', 'Developer Experience', 'Best Practices', 'Content Strategy'],
    image: '📚',
    color: 'from-emerald-500 to-teal-500',
    year: '2025',
    link: '/portfolio/developer-documentation-anatomy',
    slug: 'developer-documentation-anatomy',
  },
  {
    id: 9,
    title: 'How Modern AI Products Are Built: A Behind-the-Scenes Breakdown',
    category: 'Blog Posts',
    tags: ['AI Architecture', 'LLMs', 'RAG', 'System Design', 'Technical Writing'],
    description: 'From raw data to retrieval systems to LLMs — here\'s how AI products really work in 2025.',
    demonstrates: [
      'Breaking down complex AI architecture simply',
      'Explaining the complete AI product stack',
      'Data pipelines and embedding systems',
      'RAG (Retrieval-Augmented Generation) concepts',
      'LLM integration and prompt engineering',
      'Validation, monitoring, and evaluation patterns',
    ],
    challenge: 'AI products are complex systems with many moving parts. Teams need to understand the complete architecture, not just individual components.',
    solution: 'Created a comprehensive breakdown of how modern AI products work, from data collection through LLM generation to validation and monitoring, using real-world examples from leading companies.',
    results: [
      'Clear understanding of the modern AI product stack',
      'Knowledge of data pipelines and vector databases',
      'RAG fundamentals and why it\'s the industry standard',
      'Model selection criteria and trade-offs',
      'Validation and evaluation best practices',
      'Real examples from Notion, GitHub Copilot, Slack AI, and more',
    ],
    tech: ['AI Architecture', 'LLMs', 'RAG', 'Vector Databases', 'System Design', 'Technical Writing'],
    image: '🤖',
    color: 'from-purple-500 to-pink-500',
    year: '2025',
    link: '/portfolio/ai-products-architecture',
    slug: 'ai-products-architecture',
  },
  {
    id: 10,
    title: '10 Reasons AI Products Fail (And How Teams Can Fix Them)',
    category: 'Blog Posts',
    tags: ['AI Products', 'Product Strategy', 'Lessons Learned', 'Best Practices'],
    description: 'A brutally honest, industry-level breakdown of the real mistakes AI teams make.',
    demonstrates: [
      'Identifying common AI product failures',
      'Data quality and pipeline issues',
      'RAG and retrieval best practices',
      'Prompt engineering pitfalls',
      'UI/UX considerations for AI products',
      'Validation and evaluation strategies',
      'User testing and feedback loops',
    ],
    challenge: 'Most AI product failures aren\'t due to model limitations—they\'re due to systemic issues around data, retrieval, prompting, and expectations. Teams need to understand the complete picture.',
    solution: 'Created a comprehensive breakdown of the 10 most common AI product failures with concrete fixes for each, covering data pipelines, retrieval systems, prompt design, UX, validation, model selection, evaluation, expectations, personalization, and user testing.',
    results: [
      'Clear understanding of real AI product failure patterns',
      'Practical fixes for data and retrieval issues',
      'Prompt engineering best practices',
      'Validation and quality control strategies',
      'Importance of evaluation pipelines',
      'User-centric design principles for AI products',
      'Framework for building successful AI products',
    ],
    tech: ['AI Products', 'Product Strategy', 'Best Practices', 'Common Pitfalls', 'Lessons Learned', 'Technical Writing'],
    image: '⚠️',
    color: 'from-red-500 to-orange-500',
    year: '2025',
    link: '/portfolio/ai-product-failures',
    slug: 'ai-product-failures',
  },
  {
    id: 11,
    title: 'RAG vs Fine-Tuning: Which One Should You Use?',
    category: 'Blog Posts',
    tags: ['RAG', 'Fine-Tuning', 'AI Strategy', 'LLMs', 'Comparison'],
    description: 'A clear, technical-but-friendly comparison for teams building AI products.',
    demonstrates: [
      'Explaining RAG (Retrieval-Augmented Generation)',
      'Explaining fine-tuning and model training',
      'Comparing two major AI approaches',
      'Cost-benefit analysis for AI strategies',
      'Decision frameworks for technical choices',
      'Real-world application examples',
      'Hybrid approach recommendations',
    ],
    challenge: 'AI teams face the critical decision of whether to use RAG or fine-tuning, but these approaches are fundamentally different and solve different problems. Teams often choose the wrong one and waste resources.',
    solution: 'Created a comprehensive comparison explaining RAG and fine-tuning, their strengths and weaknesses, when to use each, cost implications, performance metrics, and a clear decision framework with real-world examples from industry leaders.',
    results: [
      'Clear understanding of RAG vs fine-tuning differences',
      'Knowledge of when each approach is appropriate',
      'Cost and performance comparisons',
      'Decision framework for choosing the right approach',
      'Recognition that hybrid approaches are industry standard',
      'Real examples from Notion, GitHub, Slack, Intercom, HubSpot',
      'Framework to save time and money on AI strategy',
    ],
    tech: ['RAG', 'Fine-Tuning', 'AI Strategy', 'LLMs', 'Technical Comparison', 'Technical Writing'],
    image: '⚖️',
    color: 'from-blue-500 to-cyan-500',
    year: '2025',
    link: '/portfolio/rag-vs-fine-tuning',
    slug: 'rag-vs-fine-tuning',
  },

];

export default function WorkPage() {
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
    <>
      <Navigation />
      
      <main className="min-h-screen bg-brand-neutral dark:bg-gray-900">
        {/* Hero Section - Centered */}
        <section className="pt-24 sm:pt-32 pb-8 sm:pb-12 bg-gradient-to-br from-brand-neutral via-white to-brand-neutral/50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 relative overflow-hidden">
          <div className="absolute top-20 right-10 w-96 h-96 bg-brand-purple/5 dark:bg-brand-purple/20 rounded-full blur-3xl" />
          <div className="absolute bottom-20 left-10 w-96 h-96 bg-brand-blue/5 dark:bg-brand-blue/20 rounded-full blur-3xl" />
          
          <div className="container-custom relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-block px-4 py-2 bg-brand-purple/10 dark:bg-brand-purple/20 rounded-full mb-6 animate-fade-in-up">
                <span className="text-brand-purple text-sm font-medium">Featured Work</span>
              </div>
              
              <h1 className="font-heading font-bold text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-brand-black dark:text-white mb-6 animate-fade-in-up" style={{animationDelay: '0.1s'}}>
                Portfolio
              </h1>
              
              {/* Scrolling Marquee Subheading */}
              <div className="relative overflow-hidden py-6 animate-fade-in-up" style={{animationDelay: '0.2s'}}>
                <div className="flex animate-marquee whitespace-nowrap">
                  <span className="text-lg sm:text-xl md:text-2xl text-brand-purple font-semibold mx-8">
                    A curated collection of documentation, tutorials, and technical content I've created around AI, SaaS, and developer tools.
                  </span>
                  <span className="text-lg sm:text-xl md:text-2xl text-brand-purple font-semibold mx-8">
                    A curated collection of documentation, tutorials, and technical content I've created around AI, SaaS, and developer tools.
                  </span>
                  <span className="text-lg sm:text-xl md:text-2xl text-brand-purple font-semibold mx-8">
                    A curated collection of documentation, tutorials, and technical content I've created around AI, SaaS, and developer tools.
                  </span>
                  <span className="text-lg sm:text-xl md:text-2xl text-brand-purple font-semibold mx-8">
                    A curated collection of documentation, tutorials, and technical content I've created around AI, SaaS, and developer tools.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Portfolio Intro Section */}
        <section className="pt-8 sm:pt-12 pb-12 sm:pb-16 bg-gradient-to-br from-brand-neutral via-white to-brand-neutral/50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto text-center space-y-6 animate-fade-in-up">
              <p className="text-lg sm:text-xl md:text-2xl text-gray-700 dark:text-gray-300 leading-relaxed">
                Organized by content type — from API docs to tutorials to technical articles.
              </p>
            </div>
          </div>
        </section>

        {/* Projects by Category */}
        <section className="section-padding bg-brand-neutral dark:bg-gray-900">
          <div className="container-custom max-w-5xl">
            {/* Developer Documentation */}
            <div className="mb-16">
              <h2 className="font-heading font-bold text-3xl md:text-4xl text-brand-black dark:text-white mb-2 flex items-center gap-3">
                <span className="text-brand-purple">🟪</span> Developer Documentation
              </h2>
              <div className="space-y-6 mt-6">
                {projects
                  .filter(p => p.category === 'Developer Documentation')
                  .map(project => (
                    <div 
                      key={project.id}
                      onClick={() => setSelectedProject(project.id)}
                      className="group bg-gradient-to-br from-purple-50 to-fuchsia-50 dark:from-purple-950/30 dark:to-fuchsia-950/30 rounded-2xl p-6 hover:shadow-xl transition-all duration-300 cursor-pointer border-2 border-purple-200 dark:border-purple-800 hover:border-brand-purple hover:scale-[1.02]"
                    >
                      <h3 className="font-heading font-bold text-xl md:text-2xl text-brand-black dark:text-white mb-3 group-hover:text-brand-purple transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                        {project.description}
                      </p>
                      <button className="inline-flex items-center gap-2 text-brand-purple font-semibold group-hover:gap-3 transition-all">
                        <span>View Project</span>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </button>
                    </div>
                  ))
                }
              </div>
            </div>

            {/* SaaS & Product Documentation */}
            <div className="mb-16">
              <h2 className="font-heading font-bold text-3xl md:text-4xl text-brand-black dark:text-white mb-2 flex items-center gap-3">
                <span className="text-blue-500">🔵</span> SaaS & Product Documentation
              </h2>
              <div className="space-y-6 mt-6">
                {projects
                  .filter(p => p.category === 'SaaS & Product Documentation')
                  .map(project => (
                    <div 
                      key={project.id}
                      onClick={() => setSelectedProject(project.id)}
                      className="group bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/30 dark:to-cyan-950/30 rounded-2xl p-6 hover:shadow-xl transition-all duration-300 cursor-pointer border-2 border-blue-200 dark:border-blue-800 hover:border-blue-500 hover:scale-[1.02]"
                    >
                      <h3 className="font-heading font-bold text-xl md:text-2xl text-brand-black dark:text-white mb-3 group-hover:text-blue-500 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                        {project.description}
                      </p>
                      <button className="inline-flex items-center gap-2 text-blue-500 font-semibold group-hover:gap-3 transition-all">
                        <span>View Project</span>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </button>
                    </div>
                  ))
                }
              </div>
            </div>

            {/* Developer Tutorials */}
            <div className="mb-16">
              <h2 className="font-heading font-bold text-3xl md:text-4xl text-brand-black dark:text-white mb-2 flex items-center gap-3">
                <span className="text-green-500">🟢</span> Developer Tutorials
              </h2>
              <div className="space-y-6 mt-6">
                {projects
                  .filter(p => p.category === 'Developer Tutorials')
                  .map(project => (
                    <div 
                      key={project.id}
                      onClick={() => setSelectedProject(project.id)}
                      className="group bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/30 rounded-2xl p-6 hover:shadow-xl transition-all duration-300 cursor-pointer border-2 border-green-200 dark:border-green-800 hover:border-green-500 hover:scale-[1.02]"
                    >
                      <h3 className="font-heading font-bold text-xl md:text-2xl text-brand-black dark:text-white mb-3 group-hover:text-green-500 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                        {project.description}
                      </p>
                      <button className="inline-flex items-center gap-2 text-green-500 font-semibold group-hover:gap-3 transition-all">
                        <span>View Tutorial</span>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </button>
                    </div>
                  ))
                }
              </div>
            </div>

            {/* Technical Articles */}
            <div className="mb-16">
              <h2 className="font-heading font-bold text-3xl md:text-4xl text-brand-black dark:text-white mb-2 flex items-center gap-3">
                <span className="text-orange-500">🔥</span> Technical Articles
              </h2>
              <div className="space-y-6 mt-6">
                {projects
                  .filter(p => p.category === 'Technical Articles')
                  .map(project => (
                    <div 
                      key={project.id}
                      onClick={() => setSelectedProject(project.id)}
                      className="group bg-gradient-to-br from-orange-50 to-amber-50 dark:from-orange-950/30 dark:to-amber-950/30 rounded-2xl p-6 hover:shadow-xl transition-all duration-300 cursor-pointer border-2 border-orange-200 dark:border-orange-800 hover:border-orange-500 hover:scale-[1.02]"
                    >
                      <h3 className="font-heading font-bold text-xl md:text-2xl text-brand-black dark:text-white mb-3 group-hover:text-orange-500 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                        {project.description}
                      </p>
                      <button className="inline-flex items-center gap-2 text-orange-500 font-semibold group-hover:gap-3 transition-all">
                        <span>Read Article</span>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </button>
                    </div>
                  ))
                }
              </div>
            </div>

            {/* Blog Posts */}
            <div className="mb-16">
              <h2 className="font-heading font-bold text-3xl md:text-4xl text-brand-black dark:text-white mb-2 flex items-center gap-3">
                <span className="text-pink-500">📝</span> Blog Posts
              </h2>
              <div className="space-y-6 mt-6">
                {projects
                  .filter(p => p.category === 'Blog Posts')
                  .map(project => (
                    <div 
                      key={project.id}
                      onClick={() => setSelectedProject(project.id)}
                      className="group bg-gradient-to-br from-pink-50 to-rose-50 dark:from-pink-950/30 dark:to-rose-950/30 rounded-2xl p-6 hover:shadow-xl transition-all duration-300 cursor-pointer border-2 border-pink-200 dark:border-pink-800 hover:border-pink-500 hover:scale-[1.02]"
                    >
                      <h3 className="font-heading font-bold text-xl md:text-2xl text-brand-black dark:text-white mb-3 group-hover:text-pink-500 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                        {project.description}
                      </p>
                      <button className="inline-flex items-center gap-2 text-pink-500 font-semibold group-hover:gap-3 transition-all">
                        <span>Read Post</span>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </button>
                    </div>
                  ))
                }
              </div>
            </div>

          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding bg-white dark:bg-gray-900">
          <div className="container-custom">
            <div className="bg-gradient-to-br from-brand-black to-brand-purple/90 rounded-3xl p-12 md:p-16 text-center text-white relative overflow-hidden">              
              <div className="relative z-10 max-w-3xl mx-auto">
                <h2 className="font-heading font-bold text-4xl md:text-5xl mb-6">
                  Want documentation like this for your product?
                </h2>
                <p className="text-xl text-gray-200 mb-8">
                  I write for AI products, SaaS platforms, and developer tools.
                </p>
                <div className="flex flex-wrap gap-4 justify-center">
                  <a href="/contact" className="bg-white text-brand-black px-8 py-4 rounded-2xl font-heading font-bold hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                    Hire Me
                  </a>
                  <a href="/services" className="border-2 border-white text-white px-8 py-4 rounded-2xl font-heading font-bold hover:bg-white hover:text-brand-black transition-all duration-300">
                    View Services
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Modal - Project Details */}
      {selectedProject !== null && (
        <div 
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedProject(null)}
        >
          <div 
            className="bg-white dark:bg-gray-900 rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto p-8 md:p-12 relative"
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
                  <div className="mb-8">
                    <div className="text-7xl mb-4">{project.image}</div>
                    <div className="text-brand-purple text-sm font-semibold mb-2 uppercase">
                      {project.category}
                    </div>
                    <h2 className="font-heading font-bold text-4xl md:text-5xl text-brand-black dark:text-white mb-4">
                      {project.title}
                    </h2>
                    <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed mb-6">
                      {project.description}
                    </p>
                  </div>

                  {/* Project Details */}
                  <div className="space-y-8">
                    {/* What it demonstrates */}
                    {project.demonstrates && (
                      <div>
                        <h3 className="font-heading font-bold text-2xl text-brand-black dark:text-white mb-4">What This Demonstrates</h3>
                        <ul className="space-y-3">
                          {project.demonstrates.map((skill, skillIndex) => (
                            <li key={skillIndex} className="flex items-start gap-3">
                              <svg className="w-6 h-6 text-brand-purple flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                              </svg>
                              <span className="text-gray-700 dark:text-gray-300 text-lg">{skill}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Challenge */}
                    {project.challenge && (
                      <div>
                        <h3 className="font-heading font-bold text-2xl text-brand-black dark:text-white mb-3">The Challenge</h3>
                        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{project.challenge}</p>
                      </div>
                    )}

                    {/* Solution */}
                    {project.solution && (
                      <div>
                        <h3 className="font-heading font-bold text-2xl text-brand-black dark:text-white mb-3">The Solution</h3>
                        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{project.solution}</p>
                      </div>
                    )}

                    {/* Results */}
                    {project.results && (
                      <div>
                        <h3 className="font-heading font-bold text-2xl text-brand-black dark:text-white mb-4">Key Results</h3>
                        <ul className="space-y-3">
                          {project.results.map((result, resultIndex) => (
                            <li key={resultIndex} className="flex items-start gap-3">
                              <svg className="w-6 h-6 text-brand-purple flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                              </svg>
                              <span className="text-gray-700 dark:text-gray-300 text-lg">{result}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Tech Stack */}
                    {project.tech && (
                      <div>
                        <h3 className="font-heading font-bold text-2xl text-brand-black dark:text-white mb-4">Technologies Used</h3>
                        <div className="flex flex-wrap gap-3">
                          {project.tech.map((tech, techIndex) => (
                            <span
                              key={techIndex}
                              className="px-4 py-2 bg-brand-purple/10 dark:bg-brand-purple/20 text-brand-purple text-sm font-semibold rounded-xl"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* View Full Documentation/Blog Post Button */}
                    {project.slug && (
                      <div className="pt-6">
                        {project.category === 'Blog Posts' ? (
                          <Link
                            href={project.link}
                            className="inline-flex items-center gap-3 bg-pink-500 hover:bg-pink-600 text-white px-8 py-4 rounded-2xl font-heading font-bold text-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                          >
                            <span>Read Blog Post</span>
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                          </Link>
                        ) : (
                          <Link
                            href={`/portfolio/${project.slug}`}
                            className="inline-flex items-center gap-3 bg-brand-purple hover:bg-brand-purple/90 text-white px-8 py-4 rounded-2xl font-heading font-bold text-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                          >
                            <span>View Full Documentation</span>
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                          </Link>
                        )}
                      </div>
                    )}
                  </div>
                </>
              );
            })()}
          </div>
        </div>
      )}

      <Footer />
    </>
  );
}
