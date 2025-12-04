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
          
          <div className="container-custom relative z-10 max-w-4xl mx-auto text-center">
            <h1 className="font-heading font-bold text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-brand-black dark:text-white mb-6 animate-fade-in-up">
              About Me
            </h1>
            
            <p className="text-xl sm:text-2xl md:text-3xl text-brand-purple font-semibold mb-6 animate-fade-in-up" style={{animationDelay: '0.1s'}}>
              I write clear content for AI and SaaS products.
            </p>
            
            <p className="text-base sm:text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed max-w-3xl mx-auto animate-fade-in-up" style={{animationDelay: '0.2s'}}>
              I'm a content writer who helps product teams explain their features, educate users, and communicate technical ideas in simple, useful ways.
            </p>
          </div>
        </section>

        {/* Main Content Sections */}
        <section className="section-padding bg-white dark:bg-gray-800">
          <div className="container-custom max-w-4xl mx-auto space-y-16 text-center">
            <div>
              <p className="text-base sm:text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed mx-auto">
                I write tutorials, explainers, product content, and user-focused articles for companies building modern technology — especially AI-powered tools and SaaS platforms.
              </p>
            </div>

            {/* Why I Focus Section */}
            <div>
              <h2 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl text-brand-black dark:text-white mb-6 mx-auto">
                Why I Focus on AI & SaaS Content
              </h2>
              
              <div className="space-y-6">
                <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                  Today's products are powerful, but also complex.
                </p>
                
                <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                  Users often need guidance to understand:
                </p>
                
                <ul className="space-y-2 ml-6">
                  <li className="flex items-start gap-3 text-gray-700 dark:text-gray-300">
                    <span className="text-brand-purple font-bold">•</span>
                    <span>what a feature does</span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-700 dark:text-gray-300">
                    <span className="text-brand-purple font-bold">•</span>
                    <span>how it works</span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-700 dark:text-gray-300">
                    <span className="text-brand-purple font-bold">•</span>
                    <span>why it matters</span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-700 dark:text-gray-300">
                    <span className="text-brand-purple font-bold">•</span>
                    <span>how to use it correctly</span>
                  </li>
                </ul>
                
                <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 leading-relaxed pt-4">
                  Clear writing solves this.
                </p>
                
                <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                  I enjoy taking something technical, breaking it down, and turning it into content that feels easy to read and helpful to users.
                </p>
              </div>
            </div>

            {/* What I Do */}
            <div>
              <h2 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl text-brand-black dark:text-white mb-6 mx-auto">
                What I Do
              </h2>
              
              <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                I write:
              </p>
              
              <ul className="space-y-2 ml-6 mb-6">
                <li className="flex items-start gap-3 text-gray-700 dark:text-gray-300">
                  <span className="text-brand-purple font-bold">•</span>
                  <span>tutorials and how-to guides</span>
                </li>
                <li className="flex items-start gap-3 text-gray-700 dark:text-gray-300">
                  <span className="text-brand-purple font-bold">•</span>
                  <span>product explainers</span>
                </li>
                <li className="flex items-start gap-3 text-gray-700 dark:text-gray-300">
                  <span className="text-brand-purple font-bold">•</span>
                  <span>feature breakdowns</span>
                </li>
                <li className="flex items-start gap-3 text-gray-700 dark:text-gray-300">
                  <span className="text-brand-purple font-bold">•</span>
                  <span>blog posts</span>
                </li>
                <li className="flex items-start gap-3 text-gray-700 dark:text-gray-300">
                  <span className="text-brand-purple font-bold">•</span>
                  <span>educational content</span>
                </li>
                <li className="flex items-start gap-3 text-gray-700 dark:text-gray-300">
                  <span className="text-brand-purple font-bold">•</span>
                  <span>AI content</span>
                </li>
                <li className="flex items-start gap-3 text-gray-700 dark:text-gray-300">
                  <span className="text-brand-purple font-bold">•</span>
                  <span>developer-friendly articles</span>
                </li>
                <li className="flex items-start gap-3 text-gray-700 dark:text-gray-300">
                  <span className="text-brand-purple font-bold">•</span>
                  <span>onboarding-style guides</span>
                </li>
              </ul>
              
              <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                Everything I create has the same goal:
              </p>
              <p className="text-base sm:text-lg font-semibold text-brand-black dark:text-white leading-relaxed mt-2">
                Help people understand your product.
              </p>
            </div>

            {/* How I Work */}
            <div>
              <h2 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl text-brand-black dark:text-white mb-6 mx-auto">
                How I Work
              </h2>
              
              <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                I keep my process simple:
              </p>
              
              <ul className="space-y-2 ml-6 mb-6">
                <li className="flex items-start gap-3 text-gray-700 dark:text-gray-300">
                  <span className="text-brand-purple font-bold">•</span>
                  <span>We talk about your product and audience</span>
                </li>
                <li className="flex items-start gap-3 text-gray-700 dark:text-gray-300">
                  <span className="text-brand-purple font-bold">•</span>
                  <span>I research and outline the content</span>
                </li>
                <li className="flex items-start gap-3 text-gray-700 dark:text-gray-300">
                  <span className="text-brand-purple font-bold">•</span>
                  <span>I write in a clear, structured, user-friendly style</span>
                </li>
                <li className="flex items-start gap-3 text-gray-700 dark:text-gray-300">
                  <span className="text-brand-purple font-bold">•</span>
                  <span>You get polished content that's ready to publish</span>
                </li>
              </ul>
              
              <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                I adapt to your voice, your product, and your goals.
              </p>
            </div>

            {/* Why Teams Work With Me */}
            <div>
              <h2 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl text-brand-black dark:text-white mb-6 mx-auto">
                Why Teams Work With Me
              </h2>
              
              <ul className="space-y-2 ml-6">
                <li className="flex items-start gap-3 text-gray-700 dark:text-gray-300">
                  <span className="text-brand-purple font-bold">•</span>
                  <span>I understand technical concepts</span>
                </li>
                <li className="flex items-start gap-3 text-gray-700 dark:text-gray-300">
                  <span className="text-brand-purple font-bold">•</span>
                  <span>I write in a simple, modern style</span>
                </li>
                <li className="flex items-start gap-3 text-gray-700 dark:text-gray-300">
                  <span className="text-brand-purple font-bold">•</span>
                  <span>I focus on clarity, not fluff</span>
                </li>
                <li className="flex items-start gap-3 text-gray-700 dark:text-gray-300">
                  <span className="text-brand-purple font-bold">•</span>
                  <span>I think like a user, not a marketer</span>
                </li>
                <li className="flex items-start gap-3 text-gray-700 dark:text-gray-300">
                  <span className="text-brand-purple font-bold">•</span>
                  <span>I make complex ideas feel easy to follow</span>
                </li>
                <li className="flex items-start gap-3 text-gray-700 dark:text-gray-300">
                  <span className="text-brand-purple font-bold">•</span>
                  <span>I help reduce confusion for your users</span>
                </li>
                <li className="flex items-start gap-3 text-gray-700 dark:text-gray-300">
                  <span className="text-brand-purple font-bold">•</span>
                  <span>I help you communicate your product more effectively</span>
                </li>
              </ul>
              
              <div className="mt-8 p-6 bg-brand-neutral dark:bg-gray-900 rounded-2xl">
                <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                  Good content helps users succeed — and when users succeed, your product grows.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding bg-gradient-to-br from-brand-black to-brand-purple/90 text-white relative overflow-hidden">
          <div className="container-custom relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-xl md:text-2xl mb-8">
                If you want clear content for your AI or SaaS product, let's work together.
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
