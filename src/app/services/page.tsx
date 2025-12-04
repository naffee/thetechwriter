'use client';

import React, { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

// Services data
const services = [
  {
    id: 1,
    icon: '🔵',
    title: 'Content Writing for AI & SaaS',
    tagline: 'Smart, well-structured content designed to educate users and strengthen your product\'s presence.',
    color: 'from-blue-500/20 to-cyan-500/20',
    items: [
      'blog posts & long-form articles',
      'use-case content',
      'comparison posts',
      'feature explainers',
      'SEO content with depth',
      'thought-leadership pieces',
    ],
    bestFor: 'teams that want consistent, high-quality content that feels simple, helpful, and trustworthy.',
  },
  {
    id: 2,
    icon: '🟣',
    title: 'Tutorials & Developer-Friendly Guides',
    tagline: 'Clear, step-by-step tutorials written with technical accuracy and user-friendly language.',
    color: 'from-purple-500/20 to-fuchsia-500/20',
    items: [
      'feature tutorials',
      'integration guides',
      'how-to walkthroughs',
      'beginner-friendly technical guides',
      'developer articles with examples',
    ],
    bestFor: 'products that need practical, accessible guidance for new or technical users.',
  },
  {
    id: 3,
    icon: '🟡',
    title: 'AI Content & Technical Explanations',
    tagline: 'Simple, accurate explanations of AI concepts, workflows, and features.',
    color: 'from-yellow-500/20 to-amber-500/20',
    items: [
      'RAG, vector search & embeddings',
      'AI workflow breakdowns',
      'feature behavior explanations',
      'model limitations & expectations',
      'simple guides to complex concepts',
    ],
    bestFor: 'AI teams that need clarity and correct communication for users, sales, and marketing.',
  },
  {
    id: 4,
    icon: '🟢',
    title: 'Product Education & User Support Content',
    tagline: 'Content that reduces confusion, supports onboarding, and helps users succeed.',
    color: 'from-green-500/20 to-emerald-500/20',
    items: [
      'onboarding-friendly guides',
      'feature breakdowns',
      'help center articles',
      'in-app microcopy (light)',
      'FAQs',
      'release notes',
    ],
    bestFor: 'SaaS teams improving activation, retention, and everyday product clarity.',
  },
];

// Pricing data
const pricingData = [
  {
    title: 'Blog posts & articles (AI + SaaS):',
    price: '$0.25 – $0.40 per word',
  },
  {
    title: 'Technical tutorials & developer guides:',
    price: '$0.35 – $0.60 per word',
  },
  {
    title: 'Product explainers & onboarding content:',
    price: 'Project-based pricing starting at $250+ per feature',
  },
  {
    title: 'Monthly content packages:',
    price: 'Custom packages available for teams publishing consistently.',
  },
];

// FAQ data (updated)
const faqData = [
  {
    question: 'How do we get started?',
    answer: 'We begin with a short call to understand your product, audience, and content needs.',
  },
  {
    question: 'Can you work with technical concepts?',
    answer: 'Yes. I specialize in AI, SaaS, and developer-focused content.',
  },
  {
    question: 'Can you match our voice and style?',
    answer: 'Absolutely — I adapt to your tone and product personality.',
  },
  {
    question: 'Do you offer revisions?',
    answer: 'Yes. Every project includes revisions to make sure the content feels accurate and clear.',
  },
  {
    question: 'Do you provide content strategy?',
    answer: 'Yes — I can help with topic planning, structure, and overall content direction.',
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
    title: 'Content Planning',
    description: 'I research and outline the content structure with you.',
    icon: '📋',
  },
  {
    step: '03',
    title: 'Draft & Review',
    description: 'I create clear, well-structured drafts for your feedback.',
    icon: '✨',
  },
  {
    step: '04',
    title: 'Revisions',
    description: 'We refine until the content feels accurate, clear, and ready to publish.',
    icon: '🔄',
  },
];

// FAQ data (updated)
const faqs = faqData;

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
                Clear, high-quality content for AI and SaaS products.
              </p>
              
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed max-w-3xl mx-auto">
                I help modern tech teams communicate their product simply, accurately, and in a way users actually understand.
              </p>
              
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed max-w-3xl mx-auto mt-4">
                My work supports onboarding, adoption, product education, and everyday communication.
              </p>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="section-padding bg-white dark:bg-gray-800">
          <div className="container-custom">
            <div className="space-y-12">
              {services.map((service) => (
                <div key={service.id} className="card p-8">
                  <div className="flex items-start gap-4 mb-6">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center text-3xl flex-shrink-0`}>
                      {service.icon}
                    </div>
                    <div className="flex-grow">
                      <h3 className="font-heading font-bold text-2xl text-brand-black dark:text-white mb-2">
                        {service.title}
                      </h3>
                      <p className="text-brand-purple font-medium">
                        {service.tagline}
                      </p>
                    </div>
                  </div>

                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    What I write:
                  </p>
                  
                  <ul className="space-y-2 ml-6 mb-6">
                    {service.items.map((item, index) => (
                      <li key={index} className="flex items-start gap-3 text-gray-700 dark:text-gray-300">
                        <span className="text-brand-purple font-bold">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <p className="text-gray-600 dark:text-gray-300">
                    <span className="font-semibold">Best for:</span> {service.bestFor}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="section-padding bg-brand-neutral dark:bg-gray-900">
          <div className="container-custom max-w-4xl mx-auto">
            <h2 className="font-heading font-bold text-4xl md:text-5xl text-brand-black dark:text-white mb-12 text-center">
              <span className="text-brand-purple">⭐ Pricing</span>
            </h2>
            
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
              I charge per word for articles and long-form content.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-12">
              Rates depend on depth, research, and technical complexity.
            </p>

            <div className="space-y-4 mb-12">
              {pricingData.map((item, index) => (
                <div key={index} className="card p-6">
                  <div className="flex items-center justify-between">
                    <span className="text-lg text-gray-700 dark:text-gray-300 font-semibold">{item.title}</span>
                    <span className="text-xl text-brand-purple font-bold">{item.price}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="card p-8 text-center">
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                This pricing reflects the level of clarity, technical understanding, and research required to produce high-quality content for modern AI and SaaS products.
              </p>
            </div>
          </div>
        </section>

        {/* Why Work With Me Section - REMOVED */}
        {/* Process Section - REMOVED */}

        {/* FAQ Section */}
        <section className="section-padding bg-white dark:bg-gray-800">
          <div className="container-custom">
            <h2 className="font-heading font-bold text-4xl md:text-5xl text-brand-black dark:text-white mb-12 text-center">
              <span className="text-brand-purple">⭐ FAQ</span>
            </h2>

            <div className="max-w-3xl mx-auto space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="card overflow-hidden">
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
          </div>
        </section>

        {/* Final CTA */}
        <section className="section-padding bg-gradient-to-br from-brand-black to-brand-purple/90 text-white relative overflow-hidden">
          <div className="container-custom relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-xl md:text-2xl mb-8">
                If you want clear, high-quality content for your product, let's work together.
              </p>
              <a href="/contact" className="btn-primary inline-block bg-white text-brand-black px-8 py-4 rounded-2xl font-heading font-bold hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                Hire Me
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
