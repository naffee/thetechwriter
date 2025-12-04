'use client';

import Link from 'next/link';
import { useState } from 'react';

const blogPosts = [
  {
    title: 'How to Build an AI Content Generator with Next.js & OpenAI',
    excerpt: 'A modern, developer-friendly tutorial for building practical AI tools. Learn to create a simple AI content generator using Next.js 14 and OpenAI API.',
    slug: 'ai-content-generator-nextjs',
    date: 'Dec 01, 2024',
    readTime: '12 min read',
    category: 'Developer',
    image: '🤖',
    color: 'from-purple-500/20 to-fuchsia-500/20',
  },
  {
    title: '7 Things Developers Get Wrong When Using the OpenAI API',
    excerpt: 'And how to fix them without losing your mind (or your tokens). Common mistakes developers make with the OpenAI API and practical solutions.',
    slug: '7-openai-api-mistakes',
    date: 'Dec 02, 2024',
    readTime: '8 min read',
    category: 'Developer',
    image: '🟪',
    color: 'from-purple-500/20 to-fuchsia-500/20',
  },
  {
    title: 'What Are Embeddings? A Simple Explanation With Examples',
    excerpt: 'A plain-English guide for anyone building or using AI-powered tools. Learn what embeddings are, how they work, and why they power modern AI systems.',
    slug: 'what-are-embeddings',
    date: 'Nov 27, 2024',
    readTime: '10 min read',
    category: 'AI & ML',
    image: '🔵',
    color: 'from-blue-500/20 to-cyan-500/20',
  },
  {
    title: 'Top Prompt Engineering Patterns That Actually Work (With Examples)',
    excerpt: 'Simple, practical patterns you can use to get better results from any AI model. Learn battle-tested techniques for clearer, more consistent outputs.',
    slug: 'prompt-engineering-patterns',
    date: 'Nov 26, 2024',
    readTime: '12 min read',
    category: 'AI & ML',
    image: '🔵',
    color: 'from-blue-500/20 to-cyan-500/20',
  },
  {
    title: 'Designing Effective SaaS Onboarding (With Real Examples)',
    excerpt: 'How to create onboarding flows that reduce friction, increase activation, and keep users coming back. Real patterns from successful SaaS products.',
    slug: 'saas-onboarding-design',
    date: 'Nov 25, 2024',
    readTime: '11 min read',
    category: 'SaaS & Product',
    image: '🔐',
    color: 'from-green-500/20 to-emerald-500/20',
  },
  {
    title: '5 Examples of Perfect Onboarding Flows (And Why They Work)',
    excerpt: 'Great onboarding isn\'t about teaching users everything — it\'s about helping them win faster. Learn from Notion, Canva, Slack, Duolingo, and Figma.',
    slug: 'perfect-onboarding-flows',
    date: 'Nov 24, 2024',
    readTime: '10 min read',
    category: 'SaaS & Product',
    image: '🔐',
    color: 'from-green-500/20 to-emerald-500/20',
  },
  {
    title: 'REST vs GraphQL vs gRPC — Which Should You Choose in 2025?',
    excerpt: 'A practical comparison for engineers, PMs, and teams building modern APIs. Understand when to use REST, GraphQL, or gRPC.',
    slug: 'rest-graphql-grpc-comparison',
    date: 'Nov 23, 2024',
    readTime: '13 min read',
    category: 'Deep Dives',
    image: '🔥',
    color: 'from-orange-500/20 to-amber-500/20',
  },
  {
    title: 'OAuth 2.0 in Plain English (Flows Explained Without Confusion)',
    excerpt: 'Finally understand OAuth without diagrams full of arrows. Learn how OAuth works, why it matters, and when to use it.',
    slug: 'oauth-2-explained',
    date: 'Nov 22, 2024',
    readTime: '11 min read',
    category: 'Deep Dives',
    image: '🔥',
    color: 'from-orange-500/20 to-amber-500/20',
  },
  {
    title: 'The 10 Tools Every Technical Writer Should Use in 2025',
    excerpt: 'Writing is easier when you have the right tools — these are the ones that actually help. From Notion to GitHub to Figma.',
    slug: 'technical-writer-tools-2025',
    date: 'Nov 21, 2024',
    readTime: '10 min read',
    category: 'Writing',
    image: '🎨',
    color: 'from-teal-500/20 to-cyan-500/20',
  },
];

export default function BlogSection() {
  const [expandedCard, setExpandedCard] = useState<number | null>(null);

  return (
    <section id="blog" className="section-padding bg-gray-50 dark:bg-gray-900">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-brand-black dark:text-white">
            <span className="text-brand-purple">Blog</span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-brand-purple dark:text-brand-purple mt-2 sm:mt-4">
            Insights on AI, SaaS, and clarity.
          </p>
        </div>

        {/* Blog Posts Bento Grid - Static */}
        <div 
          className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-6 gap-1.5 sm:gap-2 md:gap-4 w-full auto-rows-[minmax(0,auto)] relative"
          onClick={(e) => {
            // Close expanded card when clicking on grid background (not on article)
            if (e.target === e.currentTarget) {
              setExpandedCard(null);
            }
          }}
        >
            {/* Display first 6 on mobile/tablet, all 9 on desktop */}
            {blogPosts.map((post, index) => {
              // Hide posts 7-9 on mobile and tablet
              if (index >= 6) {
                return (
                  <article key={index} className="hidden md:flex md:flex-col" />
                );
              }
              // Create varied sizes following bento box pattern
              const sizePattern = index % 6;
              const sizeClasses = [
                'col-span-1 row-span-1 sm:col-span-1 sm:row-span-1 md:col-span-2 md:row-span-1', // All same size on mobile
                'col-span-1 row-span-1 sm:col-span-1 sm:row-span-1 md:col-span-2 md:row-span-1', // All same size on mobile
                'col-span-1 row-span-1 sm:col-span-1 sm:row-span-1 md:col-span-2 md:row-span-1', // All same size on mobile
                'col-span-1 row-span-1 sm:col-span-1 sm:row-span-1 md:col-span-2 md:row-span-1', // All same size on mobile
                'col-span-1 row-span-1 sm:col-span-1 sm:row-span-1 md:col-span-2 md:row-span-1', // All same size on mobile
                'col-span-1 row-span-1 sm:col-span-1 sm:row-span-1 md:col-span-2 md:row-span-1', // All same size on mobile
              ];

              // Different color palette for blog - more vibrant!
              const colorPattern = index % 10;
              const cardColors = [
                'bg-gradient-to-br from-purple-600 to-violet-600',
                'bg-gradient-to-br from-blue-500 to-cyan-400',
                'bg-gradient-to-br from-indigo-600 to-purple-600',
                'bg-gradient-to-br from-pink-500 to-fuchsia-500',
                'bg-white dark:bg-gray-900',
                'bg-gradient-to-br from-violet-600 to-fuchsia-600',
                'bg-gradient-to-br from-teal-500 to-emerald-500',
                'bg-gradient-to-br from-orange-400 to-yellow-300',
                'bg-gradient-to-br from-rose-500 to-pink-500',
                'bg-gray-900 dark:bg-purple-500',
              ];
              const isColorful = colorPattern !== 4;
              const isDark = colorPattern === 7; // Yellow/Orange card needs dark text
              
              return (
                <article
                  key={index}
                  onClick={(e) => {
                    e.stopPropagation();
                    // On mobile, toggle the expanded state on click (only for visible cards)
                    if (window.innerWidth < 768 && index < 6) {
                      setExpandedCard(expandedCard === index ? null : index);
                    }
                  }}
                  className={`overflow-hidden flex flex-col relative ${sizeClasses[sizePattern]} ${cardColors[colorPattern]} rounded-lg sm:rounded-2xl md:rounded-3xl shadow-md border border-gray-200/10`}
                >
                  {/* Image/Icon Area */}
                  <div className={`h-16 sm:h-20 md:h-24 ${isColorful ? 'bg-black/20' : `bg-gradient-to-br ${post.color}`} flex items-center justify-center text-xl sm:text-2xl md:text-3xl relative overflow-hidden flex-shrink-0`}>
                    <span className="text-white">
                      {post.image}
                    </span>
                    {/* Category Badge - hide on mobile */}
                    <div className="hidden sm:block absolute top-0.5 sm:top-2 left-0.5 sm:left-2">
                      <span className={`px-1 sm:px-2 py-0.25 sm:py-1 ${isColorful ? 'bg-white/90 text-purple-600' : 'bg-white/90 text-brand-purple'} backdrop-blur-sm text-xs font-semibold rounded-full`}>
                        {post.category}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-2.5 sm:p-3 md:p-4 flex flex-col gap-1.5">
                    {/* Meta Info - hide on mobile */}
                    <div className={`hidden sm:flex items-center gap-0.5 text-xs flex-shrink-0 ${isColorful ? (isDark ? 'text-gray-700' : 'text-white/70') : 'text-gray-500 dark:text-gray-400'}`}>
                      <span className="text-xs leading-tight">{post.date}</span>
                      <span>•</span>
                      <span className="text-xs leading-tight">{post.readTime}</span>
                    </div>

                    {/* Title */}
                    <h3 className={`font-heading font-bold text-sm sm:text-base md:text-lg leading-tight flex-shrink-0 ${isColorful ? (isDark ? 'text-gray-900' : 'text-white') : 'text-brand-black dark:text-white'}`}>
                      {post.title}
                    </h3>

                    {/* Mobile Click Overlay - shows excerpt and button when card is clicked */}
                    <div className={`sm:hidden absolute inset-0 bg-black/80 transition-all duration-300 flex flex-col justify-between p-3 rounded-lg z-50 ${expandedCard === index ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
                      <div />
                      <div>
                        <p className="text-xs leading-tight text-white mb-3">
                          {post.excerpt}
                        </p>
                        <Link href={`/blog/${post.slug}`} className="inline-block">
                          <div className="flex items-center gap-2 text-xs font-semibold text-white bg-white/20 px-3 py-2 rounded-full hover:bg-white/30 transition-all">
                            <span>Read Blog</span>
                            <svg className="w-3 h-3 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                          </div>
                        </Link>
                      </div>
                    </div>

                    {/* Excerpt - show on tablet and desktop */}
                    <p className={`hidden sm:block text-xs md:text-sm leading-relaxed line-clamp-3 flex-grow ${isColorful ? (isDark ? 'text-gray-700' : 'text-white/80') : 'text-gray-600 dark:text-gray-300'}`}>
                      {post.excerpt}
                    </p>

                    {/* Read Article Link */}
                    <Link href={`/blog/${post.slug}`} className="hidden md:block mt-auto pt-3">
                      <div className={`flex items-center gap-2 text-xs font-semibold ${isColorful ? (isDark ? 'text-gray-900' : 'text-white') : 'text-brand-purple'}`}>
                        <span>Read Article</span>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </div>
                    </Link>
                  </div>
                </article>
              );
            })}
        </div>

        {/* CTA Below Blog */}
        <div className="mt-12 sm:mt-16 text-center space-y-6 sm:space-y-8">
          <p className="text-lg md:text-xl text-gray-700 dark:text-gray-200 font-semibold">
            If you want to see how I think and write, explore the blog.
          </p>
          <a href="/blog" className="btn-primary inline-block text-sm sm:text-base">
            Read the Blog
          </a>
        </div>
      </div>
    </section>
  );
}
