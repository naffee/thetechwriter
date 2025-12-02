'use client';

import React, { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

// Services data
const services = [
  {
    id: 1,
    icon: '📚',
    title: 'Technical Documentation',
    tagline: 'Clear, structured documentation for AI tools, SaaS products, and developer platforms',
    description: 'Clear, structured documentation for AI tools, SaaS products, and developer platforms.',
    color: 'from-brand-purple/20 to-brand-blue/20',
    features: [
      'Product & feature documentation',
      'Help-center pages',
      'UX & in-app content',
      'Release notes',
      'Knowledge bases',
      'Workflow overviews',
    ],
  },
  {
    id: 2,
    icon: '🔧',
    title: 'API & SDK Documentation',
    tagline: 'Developer-friendly guides that make integration smooth and straightforward',
    description: 'Developer-friendly guides that make integration smooth and straightforward.',
    color: 'from-brand-blue/20 to-brand-purple/20',
    features: [
      'API reference pages',
      'Endpoint documentation',
      'Parameter/response tables',
      'SDK usage examples',
      'Authentication guides',
      'Error documentation',
      'Sample apps + quickstarts',
    ],
  },
  {
    id: 3,
    icon: '✍️',
    title: 'Tutorials & Technical Articles',
    tagline: 'Step-by-step guides that teach users exactly how to use or integrate your product',
    description: 'Step-by-step guides that teach users exactly how to use or integrate your product.',
    color: 'from-brand-purple/20 to-brand-blush/40',
    features: [
      'AI Tutorials',
      'Integration guides',
      'Best practices',
      'How-to articles',
      'Code samples',
      'Deep-dive explainers',
    ],
  },
  {
    id: 4,
    icon: '🎨',
    title: 'SaaS Product & UX Content',
    tagline: 'Simple, clear explanations for non-technical users',
    description: 'Simple, clear explanations for non-technical users.',
    color: 'from-brand-blue/20 to-brand-blush/40',
    features: [
      'Feature documentation',
      'Onboarding flows',
      'UI microcopy',
      'Tooltips & empty states',
      'User guides',
      'Step-by-step walkthroughs',
    ],
  },
  {
    id: 5,
    icon: '🤖',
    title: 'AI Content & Model Guides',
    tagline: 'Clean documentation and explanations for AI-powered features',
    description: 'Clean documentation and explanations for AI-powered features.',
    color: 'from-violet-500/20 to-fuchsia-500/20',
    features: [
      'AI feature documentation',
      'Prompt guides',
      'RAG workflow guides',
      'Model behavior explanations',
      'AI onboarding content',
    ],
  },
  {
    id: 6,
    icon: '📝',
    title: 'Website & Product Messaging',
    tagline: 'Technical landing page copy that explains your product clearly and converts',
    description: 'Technical landing page copy that explains your product clearly and converts.',
    color: 'from-emerald-400/20 to-teal-500/20',
    features: [
      'Landing page copy',
      'Feature descriptions',
      'Product pages',
      'Value proposition writing',
      'Conversion-focused microcopy',
    ],
  },
];

// Pricing packages
const packages = [
  {
    name: 'Starter Package',
    description: 'Perfect for quick wins and one-off pieces',
    price: '$200–$500',
    popular: false,
    features: [
      '1 technical tutorial or',
      '1 feature documentation page or',
      '1 UX/content improvement task',
      'Light research',
      'Clean, modern formatting',
    ],
    cta: 'Get Started',
    color: 'border-gray-200',
  },
  {
    name: 'Standard Package',
    description: 'Best for teams launching new features or improving existing documentation',
    price: '$700–$1,500',
    popular: true,
    features: [
      '3–5 pages of documentation',
      'or 2 tutorials/integration guides',
      'or 1 API section with examples',
      'Editing of existing docs',
      '1 revision round',
    ],
    cta: 'Most Popular',
    color: 'border-brand-purple',
  },
  {
    name: 'Premium Package',
    description: 'For teams that need full, structured, developer-ready documentation',
    price: '$2,000–$5,000+',
    popular: false,
    features: [
      'Complete feature or product documentation',
      'Quickstarts + onboarding flow',
      'API reference + examples',
      'Tutorials with runnable code',
      'Product messaging',
      '2–3 revision rounds',
      'Priority communication',
    ],
    cta: 'Go Premium',
    color: 'border-gray-200',
  },
  {
    name: 'Monthly Retainer',
    description: 'For teams shipping updates every week',
    price: '$800–$3,500/mo',
    popular: false,
    features: [
      'Docs updates',
      'Release notes',
      'Tutorials',
      'Help-center content',
      'Feature messaging',
      'Reserved monthly hours',
    ],
    cta: 'Contact Me',
    color: 'border-gray-200',
  },
];

// Process steps
const process = [
  {
    step: '01',
    title: 'Discovery Call',
    description: 'We discuss your needs, goals, and timeline to ensure we\'re the right fit.',
    icon: '💬',
  },
  {
    step: '02',
    title: 'Scope Definition',
    description: 'I create a detailed proposal with scope, deliverables, and timeline.',
    icon: '📋',
  },
  {
    step: '03',
    title: 'Outline',
    description: 'I develop a content outline or structure for your approval before writing.',
    icon: '📑',
  },
  {
    step: '04',
    title: 'Drafts',
    description: 'I create high-quality drafts with clear examples and proper formatting.',
    icon: '✨',
  },
  {
    step: '05',
    title: 'Revisions',
    description: 'Collaborate on feedback and refine until it\'s perfect.',
    icon: '🔄',
  },
  {
    step: '06',
    title: 'Delivery',
    description: 'Final delivery with all assets and optional launch support.',
    icon: '🚀',
  },
];

// FAQ data
const faqs = [
  {
    question: 'Do you work with early-stage startups?',
    answer: 'Yes. I work with solo founders, small teams, and growing companies. I understand the constraints of early-stage startups and can work within your budget.',
  },
  {
    question: 'Do you sign NDAs?',
    answer: 'Yes — especially for unreleased products or sensitive APIs. Your intellectual property and confidential information are safe with me.',
  },
  {
    question: 'Do you provide revisions?',
    answer: 'All packages include 1–3 revision rounds depending on scope. I want to make sure you\'re 100% happy with the final deliverable.',
  },
  {
    question: 'Can you write code samples?',
    answer: 'Yes — including runnable examples and integration snippets. I\'m comfortable with JavaScript, TypeScript, Python, and modern frameworks like Next.js and React.',
  },
  {
    question: 'Do you work inside tools like GitHub, Notion, or Confluence?',
    answer: 'Absolutely. I can work directly in your existing tools and workflows, whether that\'s GitHub, Notion, Confluence, GitBook, or custom documentation systems.',
  },
  {
    question: 'What are your timelines?',
    answer: 'Small tasks: 3–5 days. Standard package: 1–2 weeks. Full documentation sets: 2–6 weeks. Timelines depend on scope and complexity, and I always provide realistic estimates upfront.',
  },
];

export default function ServicesPage() {
  const [selectedService, setSelectedService] = useState<number | null>(null);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  return (
    <>
      <Navigation />
      
      <main className="min-h-screen bg-brand-neutral dark:bg-gray-900">
        {/* Hero Section */}
        <section className="pt-24 sm:pt-32 pb-16 sm:pb-20 bg-gradient-to-br from-brand-neutral via-white to-brand-neutral/50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 relative overflow-hidden">
          <div className="absolute top-20 right-10 w-96 h-96 bg-brand-purple/5 dark:bg-brand-purple/20 rounded-full blur-3xl" />
          <div className="absolute bottom-20 left-10 w-96 h-96 bg-brand-blue/5 dark:bg-brand-blue/20 rounded-full blur-3xl" />
          
          <div className="container-custom relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-block px-4 py-2 bg-brand-purple/10 dark:bg-brand-purple/20 rounded-full mb-6">
                <span className="text-brand-purple text-sm font-medium">Services</span>
              </div>
              
              <h1 className="font-heading font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-brand-black dark:text-white mb-6">
                Services
              </h1>
              
              <p className="text-lg sm:text-xl md:text-2xl text-brand-purple font-semibold leading-relaxed max-w-3xl mx-auto mb-6">
                I write. I build. I make complex products easy to understand.
              </p>
              
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed max-w-3xl mx-auto">
                I help AI startups, SaaS teams, and developer tool companies create clear technical documentation, tutorials, and product content. If your users are confused, your product won't grow — I help fix that with content that's structured, accurate, and easy to follow.
              </p>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="section-padding bg-white dark:bg-gray-800">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="font-heading font-bold text-4xl md:text-5xl text-brand-black dark:text-white mb-4">
                What I <span className="text-brand-purple">Offer</span>
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Comprehensive services tailored to your documentation and development needs
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {services.map((service) => (
                <div
                  key={service.id}
                  className="card overflow-hidden group cursor-pointer"
                  onClick={() => setSelectedService(selectedService === service.id ? null : service.id)}
                >
                  <div className="p-8">
                    {/* Icon & Header */}
                    <div className="flex items-start justify-between mb-6">
                      <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center text-3xl group-hover:scale-110 transition-transform`}>
                        {service.icon}
                      </div>
                      <button className="text-brand-purple">
                        <svg 
                          className={`w-6 h-6 transition-transform duration-300 ${selectedService === service.id ? 'rotate-180' : ''}`}
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                    </div>

                    {/* Title & Tagline */}
                    <h3 className="font-heading font-bold text-2xl text-brand-black dark:text-white mb-2 group-hover:text-brand-purple transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-brand-purple font-medium mb-4">
                      {service.tagline}
                    </p>

                    {/* Description */}
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                      {service.description}
                    </p>

                    {/* Features List */}
                    <div className="grid grid-cols-2 gap-3">
                      {service.features.map((feature, index) => (
                        <div key={index} className="flex items-center gap-2">
                          <svg className="w-4 h-4 text-brand-purple flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          <span className="text-sm text-gray-700 dark:text-gray-300">{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* Expanded Content */}
                    {selectedService === service.id && (
                      <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700 space-y-6 animate-in fade-in duration-300">
                        {/* CTA */}
                        <div className="pt-4">
                          <a href="/contact" className="btn-primary inline-block">
                            Get Started
                          </a>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Packages */}
        <section className="section-padding bg-brand-neutral dark:bg-gray-900">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="font-heading font-bold text-4xl md:text-5xl text-brand-black dark:text-white mb-4">
                <span className="text-brand-purple">Packages</span>
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Transparent, flexible, and designed for real product teams
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
              {packages.map((pkg, index) => (
                <div
                  key={index}
                  className={`card p-8 relative ${pkg.popular ? 'ring-2 ring-brand-purple shadow-2xl scale-105' : ''}`}
                >
                  {pkg.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-brand-purple text-white px-6 py-2 rounded-full text-sm font-bold">
                      Most Popular
                    </div>
                  )}

                  {/* Package Header */}
                  <div className="text-center mb-6">
                    <h3 className="font-heading font-bold text-2xl text-brand-black dark:text-white mb-2">
                      {pkg.name}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                      {pkg.description}
                    </p>
                    <div className="text-4xl font-heading font-bold text-brand-purple mb-2">
                      {pkg.price}
                    </div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Based on project scope</p>
                  </div>

                  {/* Features */}
                  <ul className="space-y-3 mb-8">
                    {pkg.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-2">
                        <svg className="w-5 h-5 text-brand-purple flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <a
                    href="/contact"
                    className={`block text-center py-3 px-6 rounded-2xl font-heading font-bold transition-all duration-300 ${
                      pkg.popular
                        ? 'bg-brand-purple text-white hover:bg-brand-purple/90 hover:shadow-xl'
                        : 'bg-brand-neutral dark:bg-gray-700 text-brand-black dark:text-white hover:bg-brand-purple hover:text-white'
                    }`}
                  >
                    {pkg.cta}
                  </a>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Need something different? Let's create a custom package for your needs.
              </p>
              <a href="/contact" className="btn-outline">
                Request Custom Quote
              </a>
            </div>

            {/* Word-Based Pricing */}
            <div className="mt-20 max-w-4xl mx-auto">
              <div className="card p-8">
                <h3 className="font-heading font-bold text-3xl text-brand-black dark:text-white mb-4 text-center">
                  Content & Blog Writing <span className="text-brand-purple">(Word-Based Pricing)</span>
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-center mb-8">
                  Some content types are better priced by word count — especially educational and long-form articles.
                </p>
                
                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-brand-neutral dark:bg-gray-800 rounded-2xl p-6">
                    <h4 className="font-heading font-bold text-xl text-brand-black dark:text-white mb-3">
                      Standard Technical Articles
                    </h4>
                    <p className="text-3xl font-bold text-brand-purple mb-2">$0.20 – $0.40/word</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Developer blog posts, tutorials, how-tos</p>
                  </div>
                  
                  <div className="bg-brand-neutral dark:bg-gray-800 rounded-2xl p-6">
                    <h4 className="font-heading font-bold text-xl text-brand-black dark:text-white mb-3">
                      Advanced AI-Focused Articles
                    </h4>
                    <p className="text-3xl font-bold text-brand-purple mb-2">$0.40 – $0.60/word</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Deep dives, AI explainers, technical analysis</p>
                  </div>
                </div>
                
                <div className="bg-gradient-to-br from-brand-purple/10 to-brand-blue/10 dark:from-brand-purple/20 dark:to-brand-blue/20 rounded-2xl p-6 text-center">
                  <p className="text-brand-black dark:text-white font-semibold mb-2">
                    Flat rate options available starting at <span className="text-brand-purple font-bold">$150 per article</span>
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Best for: Developer blog posts • SEO content • AI explainers • Technical deep dives • Product tutorials
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Work With Me Section */}
        <section className="section-padding bg-white dark:bg-gray-800">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-heading font-bold text-4xl md:text-5xl text-brand-black dark:text-white mb-12 text-center">
                Why Teams Work <span className="text-brand-purple">With Me</span>
              </h2>
              
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <svg className="w-6 h-6 text-brand-purple flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <p className="text-lg text-gray-700 dark:text-gray-300">
                    I'm both a writer and developer, so my docs are accurate, modern, and developer-friendly.
                  </p>
                </div>
                
                <div className="flex items-start gap-4">
                  <svg className="w-6 h-6 text-brand-purple flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <p className="text-lg text-gray-700 dark:text-gray-300">
                    I specialize in AI, SaaS, and DevTools, not general writing.
                  </p>
                </div>
                
                <div className="flex items-start gap-4">
                  <svg className="w-6 h-6 text-brand-purple flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <p className="text-lg text-gray-700 dark:text-gray-300">
                    I explain complex concepts simply and clearly.
                  </p>
                </div>
                
                <div className="flex items-start gap-4">
                  <svg className="w-6 h-6 text-brand-purple flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <p className="text-lg text-gray-700 dark:text-gray-300">
                    I move fast and communicate well.
                  </p>
                </div>
                
                <div className="flex items-start gap-4">
                  <svg className="w-6 h-6 text-brand-purple flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <p className="text-lg text-gray-700 dark:text-gray-300">
                    I understand how real users think.
                  </p>
                </div>
                
                <div className="flex items-start gap-4">
                  <svg className="w-6 h-6 text-brand-purple flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <p className="text-lg text-gray-700 dark:text-gray-300">
                    I can work inside GitHub, Notion, Confluence, or your internal tools.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="section-padding bg-white dark:bg-gray-800">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="font-heading font-bold text-4xl md:text-5xl text-brand-black dark:text-white mb-4">
                How It <span className="text-brand-purple">Works</span>
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                A simple, transparent process from start to finish
              </p>
            </div>

            <div className="max-w-5xl mx-auto">
              <div className="space-y-8">
                {process.map((item, index) => (
                  <div key={index} className="flex gap-6 items-start">
                    {/* Step Number */}
                    <div className="flex-shrink-0">
                      <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-brand-purple/20 to-brand-blue/20 dark:from-brand-purple/30 dark:to-brand-blue/30 flex items-center justify-center">
                        <span className="text-3xl">{item.icon}</span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1 pt-2">
                      <div className="flex items-baseline gap-3 mb-2">
                        <span className="text-brand-purple font-heading font-bold text-lg">
                          {item.step}
                        </span>
                        <h3 className="font-heading font-bold text-2xl text-brand-black dark:text-white">
                          {item.title}
                        </h3>
                      </div>
                      <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                        {item.description}
                      </p>
                    </div>

                    {/* Connector Line */}
                    {index < process.length - 1 && (
                      <div className="absolute left-10 mt-24 w-0.5 h-16 bg-gradient-to-b from-brand-purple/20 to-transparent hidden md:block" />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="section-padding bg-brand-neutral dark:bg-gray-900">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="font-heading font-bold text-4xl md:text-5xl text-brand-black dark:text-white mb-4">
                Frequently Asked <span className="text-brand-purple">Questions</span>
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Got questions? Here are answers to some common ones
              </p>
            </div>

            <div className="max-w-3xl mx-auto space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="card overflow-hidden"
                >
                  <button
                    onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}
                    className="w-full p-6 text-left flex items-center justify-between gap-4"
                  >
                    <h3 className="font-heading font-bold text-lg text-brand-black dark:text-white">
                      {faq.question}
                    </h3>
                    <svg
                      className={`w-6 h-6 text-brand-purple flex-shrink-0 transition-transform duration-300 ${
                        openFaqIndex === index ? 'rotate-180' : ''
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  
                  {openFaqIndex === index && (
                    <div className="px-6 pb-6 animate-in fade-in duration-300">
                      <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Still have questions?
              </p>
              <a href="/contact" className="btn-primary">
                Let's Talk
              </a>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="section-padding bg-gradient-to-br from-brand-black to-brand-purple/90 text-white relative overflow-hidden">          
          <div className="container-custom relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="font-heading font-bold text-4xl md:text-5xl mb-6">
                Let's Work <span className="text-brand-purple">Together</span>
              </h2>
              <p className="text-xl text-gray-200 mb-8">
                Whether you're building an AI tool, a SaaS product, or a developer platform, I'd love to help you explain it clearly and professionally.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <a href="/contact" className="bg-white text-brand-black px-8 py-4 rounded-2xl font-heading font-bold hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                  Contact Me
                </a>
                <a href="/work" className="border-2 border-white text-white px-8 py-4 rounded-2xl font-heading font-bold hover:bg-white hover:text-brand-black transition-all duration-300">
                  View Portfolio
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
