'use client';

import React, { useState, useEffect } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { DeveloperIcon, AIIcon, SaaSIcon, DeepDivesIcon, WritingIcon, EverydayUserIcon, AllPostsIcon, AIContentGeneratorIcon, APIErrorsIcon, EmbeddingsIcon, PromptEngineeringIcon, OnboardingDesignIcon, PerfectOnboardingIcon, APIComparisonIcon, OAuthIcon, WriterToolsIcon, SimplicityIcon, ChatPromptsIcon, AIToolsIcon } from '@/components/BlogSVGIcons';


// Blog post data
const blogPosts = [
  {
    title: 'How to Build an AI Content Generator with Next.js & OpenAI',
    slug: 'ai-content-generator-nextjs',
    excerpt: 'A modern, developer-friendly tutorial for building practical AI tools. Learn to create a simple AI content generator using Next.js 14 and OpenAI API.',
    content: 'AI writing tools are everywhere — but building your own is easier than you think...',
    category: 'Developer',
    tags: ['Next.js', 'OpenAI', 'AI', 'Tutorial'],
    author: 'The Tech Writer',
    date: '2024-12-01',
    readTime: '12 min read',
    image: '🤖',
    imageComponent: AIContentGeneratorIcon,
    featured: true,
    color: 'from-purple-500/20 to-fuchsia-500/20',
  },
  {
    id: 2,
    title: '7 Things Developers Get Wrong When Using the OpenAI API',
    slug: '7-openai-api-mistakes',
    excerpt: 'And how to fix them without losing your mind (or your tokens). Common mistakes developers make with the OpenAI API and practical solutions.',
    content: 'The OpenAI API is powerful — but many developers run into the same problems again and again...',
    category: 'Developer',
    tags: ['OpenAI', 'API', 'Best Practices', 'AI'],
    author: 'The Tech Writer',
    date: '2024-12-02',
    readTime: '8 min read',
    image: '🟪',
    imageComponent: APIErrorsIcon,
    featured: true,
    color: 'from-purple-500/20 to-fuchsia-500/20',
  },
  {
    id: 3,
    title: 'What Are Embeddings? A Simple Explanation With Examples',
    slug: 'what-are-embeddings',
    excerpt: 'A plain-English guide for anyone building or using AI-powered tools. Learn what embeddings are, how they work, and why they power modern AI systems.',
    content: 'If you\'ve spent any time around AI, you\'ve probably heard the word embeddings...',
    category: 'AI & ML',
    tags: ['Embeddings', 'AI', 'Machine Learning', 'Vector Search'],
    author: 'The Tech Writer',
    date: '2024-11-27',
    readTime: '10 min read',
    image: '🔵',
    imageComponent: EmbeddingsIcon,
    featured: true,
    color: 'from-blue-500/20 to-cyan-500/20',
  },
  {
    id: 4,
    title: 'Top Prompt Engineering Patterns That Actually Work (With Examples)',
    slug: 'prompt-engineering-patterns',
    excerpt: 'Simple, practical patterns you can use to get better results from any AI model. Learn battle-tested techniques for clearer, more consistent outputs.',
    content: 'Prompt engineering isn\'t about "magic tricks." It\'s about sending clear instructions...',
    category: 'AI & ML',
    tags: ['Prompt Engineering', 'AI', 'LLMs', 'Best Practices'],
    author: 'The Tech Writer',
    date: '2024-11-26',
    readTime: '12 min read',
    image: '🔵',
    imageComponent: PromptEngineeringIcon,
    featured: true,
    color: 'from-blue-500/20 to-cyan-500/20',
  },
  {
    id: 5,
    title: 'Designing Effective SaaS Onboarding (With Real Examples)',
    slug: 'saas-onboarding-design',
    excerpt: 'How to create onboarding flows that reduce friction, increase activation, and keep users coming back. Real patterns from successful SaaS products.',
    content: 'Great onboarding isn\'t about showing features. It\'s about getting users to value fast...',
    category: 'SaaS & Product',
    tags: ['Onboarding', 'Product Design', 'UX', 'SaaS'],
    author: 'The Tech Writer',
    date: '2024-11-25',
    readTime: '11 min read',
    image: '🔐',
    imageComponent: OnboardingDesignIcon,
    featured: true,
    color: 'from-green-500/20 to-emerald-500/20',
  },
  {
    id: 6,
    title: '5 Examples of Perfect Onboarding Flows (And Why They Work)',
    slug: 'perfect-onboarding-flows',
    excerpt: 'Great onboarding isn\'t about teaching users everything — it\'s about helping them win faster. Learn from Notion, Canva, Slack, Duolingo, and Figma.',
    content: 'Most SaaS onboarding fails because it overwhelms users, explains too much...',
    category: 'SaaS & Product',
    tags: ['Onboarding', 'UX Design', 'Product', 'Case Studies'],
    author: 'The Tech Writer',
    date: '2024-11-24',
    readTime: '10 min read',
    image: '🔐',
    imageComponent: PerfectOnboardingIcon,
    featured: true,
    color: 'from-green-500/20 to-emerald-500/20',
  },
  {
    id: 7,
    title: 'REST vs GraphQL vs gRPC — Which Should You Choose in 2025?',
    slug: 'rest-graphql-grpc-comparison',
    excerpt: 'A practical comparison for engineers, PMs, and teams building modern APIs. Understand when to use REST, GraphQL, or gRPC.',
    content: 'Choosing an API architecture used to be simple — everyone used REST...',
    category: 'Deep Dives',
    tags: ['API Design', 'REST', 'GraphQL', 'gRPC', 'Architecture'],
    author: 'The Tech Writer',
    date: '2024-11-23',
    readTime: '13 min read',
    image: '🔥',
    imageComponent: APIComparisonIcon,
    featured: true,
    color: 'from-orange-500/20 to-amber-500/20',
  },
  {
    id: 8,
    title: 'OAuth 2.0 in Plain English (Flows Explained Without Confusion)',
    slug: 'oauth-2-explained',
    excerpt: 'Finally understand OAuth without diagrams full of arrows. Learn how OAuth works, why it matters, and when to use it.',
    content: 'OAuth 2.0 is everywhere. You use it every time you sign in with Google...',
    category: 'Deep Dives',
    tags: ['OAuth', 'Security', 'Authentication', 'API'],
    author: 'The Tech Writer',
    date: '2024-11-22',
    readTime: '11 min read',
    image: '🔥',
    imageComponent: OAuthIcon,
    featured: true,
    color: 'from-orange-500/20 to-amber-500/20',
  },
  {
    id: 9,
    title: 'The 10 Tools Every Technical Writer Should Use in 2025',
    slug: 'technical-writer-tools-2025',
    excerpt: 'Writing is easier when you have the right tools — these are the ones that actually help. From Notion to GitHub to Figma.',
    content: 'Technical writing today is more than "just writing." You\'re formatting code, managing versions...',
    category: 'Writing',
    tags: ['Technical Writing', 'Tools', 'Productivity', 'Documentation'],
    author: 'The Tech Writer',
    date: '2024-11-21',
    readTime: '10 min read',
    image: '🎨',
    imageComponent: WriterToolsIcon,
    featured: true,
    color: 'from-teal-500/20 to-cyan-500/20',
  },
  {
    id: 10,
    title: 'How to Turn Complex Features Into Simple Explanations (That Users Actually Understand)',
    slug: 'simplifying-complex-features',
    excerpt: 'If your users don\'t understand your product, the problem isn\'t the feature — it\'s the explanation. Learn a repeatable system for clarity.',
    content: 'Every SaaS product eventually reaches a point where features become too advanced, too technical...',
    category: 'Writing',
    tags: ['Technical Writing', 'Product Clarity', 'Documentation', 'UX Writing'],
    author: 'The Tech Writer',
    date: '2024-11-20',
    readTime: '9 min read',
    image: '🎨',
    imageComponent: SimplicityIcon,
    featured: true,
    color: 'from-teal-500/20 to-cyan-500/20',
  },
  {
    id: 11,
    title: 'Top 20 ChatGPT Prompts for Everyday Life (That Actually Work)',
    slug: 'chatgpt-prompts-everyday-life',
    excerpt: 'Practical, real-world prompts for planning, writing, learning, organizing, and simplifying your daily life. No technical skill required.',
    content: 'ChatGPT isn\'t just for coding or technical work. You can use it to plan your day, write emails...',
    category: 'Everyday User',
    tags: ['AI', 'ChatGPT', 'Prompts', 'Productivity', 'Everyday Tips'],
    author: 'The Tech Writer',
    date: '2024-11-19',
    readTime: '8 min read',
    image: '💎',
    imageComponent: ChatPromptsIcon,
    featured: true,
    color: 'from-pink-500/20 to-rose-500/20',
  },
  {
    id: 12,
    title: 'AI Tools Anyone Can Use to Save Time (No Technical Skills Needed)',
    slug: 'ai-tools-no-technical-skills',
    excerpt: 'These simple AI tools can help you write, plan, organize, learn, and work faster — even if you\'re not a "tech person."',
    content: 'AI isn\'t just for developers or engineers. There are dozens of tools anyone can use...',
    category: 'Everyday User',
    tags: ['AI Tools', 'Productivity', 'Learning', 'Everyday Life'],
    author: 'The Tech Writer',
    date: '2024-11-18',
    readTime: '9 min read',
    image: '💎',
    imageComponent: AIToolsIcon,
    featured: true,
    color: 'from-pink-500/20 to-rose-500/20',
  },
];

// Categories for filtering
const categories = [
  { name: 'All', slug: 'all', icon: '📚', iconComponent: AllPostsIcon, description: 'All posts' },
  { name: 'Developer', slug: 'developer', icon: '🟪', iconComponent: DeveloperIcon, description: 'Hands-on guides with real code examples. Learn how to integrate APIs, build AI workflows, and create modern apps.', color: 'from-purple-50 to-fuchsia-50 dark:from-purple-950/30 dark:to-fuchsia-950/30', borderColor: 'border-purple-200 dark:border-purple-800', hoverColor: 'hover:border-brand-purple' },
  { name: 'AI & ML', slug: 'ai-ml', icon: '🔵', iconComponent: AIIcon, description: 'Simple explanations of complex AI systems — from embeddings and vector databases to model behavior and prompting.', color: 'from-blue-50 to-cyan-50 dark:from-blue-950/30 dark:to-cyan-950/30', borderColor: 'border-blue-200 dark:border-blue-800', hoverColor: 'hover:border-blue-500' },
  { name: 'SaaS & Product', slug: 'saas-product', icon: '🟢', iconComponent: SaaSIcon, description: 'Feature breakdowns, UX writing insights, onboarding strategies, and product clarity.', color: 'from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/30', borderColor: 'border-green-200 dark:border-green-800', hoverColor: 'hover:border-green-500' },
  { name: 'Deep Dives', slug: 'deep-dives', icon: '🔥', iconComponent: DeepDivesIcon, description: 'Advanced engineering topics explained with clarity — architecture, security, integrations, and dev tooling.', color: 'from-orange-50 to-amber-50 dark:from-orange-950/30 dark:to-amber-950/30', borderColor: 'border-orange-200 dark:border-orange-800', hoverColor: 'hover:border-orange-500' },
  { name: 'Writing', slug: 'writing', icon: '🌿', iconComponent: WritingIcon, description: 'Thoughts on technical writing, content strategy, documentation systems, and developer experience.', color: 'from-teal-50 to-cyan-50 dark:from-teal-950/30 dark:to-cyan-950/30', borderColor: 'border-teal-200 dark:border-teal-800', hoverColor: 'hover:border-teal-500' },
  { name: 'Everyday User', slug: 'everyday-user', icon: '💎', iconComponent: EverydayUserIcon, description: 'Simple, jargon-free guides for everyday users exploring AI tools, software, and technology.', color: 'from-pink-50 to-rose-50 dark:from-pink-950/30 dark:to-rose-950/30', borderColor: 'border-pink-200 dark:border-pink-800', hoverColor: 'hover:border-pink-500' },
];

export default function BlogPage() {
  const [expandedCard, setExpandedCard] = useState<number | null>(null);


  // Get 4 featured posts that change daily
  const getDailyFeaturedPosts = () => {
    const today = new Date();
    const dayOfYear = Math.floor((today.getTime() - new Date(today.getFullYear(), 0, 0).getTime()) / 86400000);
    const startIndex = (dayOfYear % (blogPosts.length - 3));
    return blogPosts.slice(startIndex, startIndex + 4);
  };

  const featuredPosts = getDailyFeaturedPosts();

  return (
    <>
      <Navigation />
      
      <main className="min-h-screen bg-brand-neutral dark:bg-gray-900">
        {/* Hero Section - Centered & Optimized */}
        <section className="pt-24 sm:pt-32 pb-16 sm:pb-20 bg-gradient-to-br from-brand-neutral via-white to-brand-neutral/50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 relative overflow-hidden">
          <div className="absolute top-20 right-10 w-96 h-96 bg-brand-purple/5 dark:bg-brand-purple/20 rounded-full blur-3xl" />
          <div className="absolute bottom-20 left-10 w-96 h-96 bg-brand-blue/5 dark:bg-brand-blue/20 rounded-full blur-3xl" />          
          <div className="container-custom relative z-10">
            <div className="max-w-5xl mx-auto text-center">
              <div className="inline-block px-4 py-2 bg-brand-purple/10 dark:bg-brand-purple/20 rounded-full mb-6">
                <span className="text-brand-purple text-sm font-medium">Blog</span>
              </div>
              
              <h1 className="font-heading font-bold text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-brand-black dark:text-white mb-6">
                Blog
              </h1>
              
              <p className="text-lg sm:text-xl md:text-2xl text-brand-purple font-semibold leading-relaxed max-w-3xl mx-auto mb-4">
                Insights, tutorials, and deep dives on AI, SaaS, and developer tools.
              </p>
              
              <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-3xl mx-auto mb-12">
                Browse by category or explore the latest posts.
              </p>

              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-8 pt-12 max-w-2xl mx-auto">
                <div className="text-center">
                  <div className="font-heading font-bold text-4xl md:text-5xl text-brand-purple mb-2">{blogPosts.length}</div>
                  <div className="text-sm md:text-base text-gray-600 dark:text-gray-400">Articles</div>
                </div>
                <div className="text-center">
                  <div className="font-heading font-bold text-4xl md:text-5xl text-brand-purple mb-2">{categories.length - 1}</div>
                  <div className="text-sm md:text-base text-gray-600 dark:text-gray-400">Categories</div>
                </div>
                <div className="text-center">
                  <div className="font-heading font-bold text-4xl md:text-5xl text-brand-purple mb-2">{featuredPosts.length}</div>
                  <div className="text-sm md:text-base text-gray-600 dark:text-gray-400">Featured</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Category Cards Section */}
        <section className="section-padding bg-white dark:bg-gray-800">
          <div className="container-custom">
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-brand-black dark:text-white mb-2 text-center">
              <span className="text-brand-purple">📚</span> Explore Categories
            </h2>
            <p className="text-gray-600 dark:text-gray-300 text-lg mb-12 text-center max-w-2xl mx-auto">
              Find content tailored to your interests. Dive deeper into any category on the all articles page.
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {categories.filter(cat => cat.name !== 'All').map((category) => (
                <Link
                  key={category.slug}
                  href={`/blog/all?category=${category.slug}`}
                  className={`group bg-gradient-to-br ${category.color} rounded-2xl p-6 border-2 ${category.borderColor} ${category.hoverColor} hover:shadow-xl transition-all duration-300 hover:scale-[1.02] flex flex-col h-full`}
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 flex-shrink-0 text-3xl">{category.icon}</div>
                    <h3 className="font-heading font-bold text-xl text-brand-black dark:text-white group-hover:text-brand-purple transition-colors">
                      {category.name}
                    </h3>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6 flex-grow">
                    {category.description}
                  </p>
                  <div className="flex items-center gap-2 text-brand-purple font-semibold group-hover:gap-3 transition-all">
                    <span>Explore</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Posts */}
        <section className="section-padding bg-white dark:bg-gray-800">
          <div className="container-custom">
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-brand-black dark:text-white mb-2">
              <span className="text-brand-purple">⭐</span> Featured Posts
            </h2>
            <p className="text-gray-600 dark:text-gray-300 text-lg mb-8">
              (These will change once you start publishing.)
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mb-12">
              {featuredPosts.map((post) => (
                <Link
                  key={post.id}
                  href={`/blog/${post.slug}`}
                  className="card overflow-hidden group cursor-pointer h-full flex flex-col hover:shadow-xl transition-shadow"
                >
                  {/* Image/Icon Area */}
                  <div className={`h-32 sm:h-40 lg:h-48 bg-gradient-to-br ${post.color} flex items-center justify-center text-4xl sm:text-5xl lg:text-6xl relative overflow-hidden`}>
                    <div className="w-16 sm:w-20 lg:w-24">
                      {post.imageComponent && <post.imageComponent />}
                    </div>
                    {/* Category Badge */}
                    <div className="absolute top-3 left-3 sm:top-4 sm:left-4">
                      <span className="px-2 sm:px-3 py-1 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm text-brand-purple text-xs sm:text-sm font-medium rounded-full">
                        {post.category}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-4 sm:p-5 lg:p-6 flex flex-col flex-grow">
                    {/* Meta Info */}
                    <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-500 dark:text-gray-400 mb-2 sm:mb-3">
                      <span>{post.date}</span>
                      <span>•</span>
                      <span>{post.readTime}</span>
                    </div>

                    {/* Title */}
                    <h3 className="font-heading font-bold text-base sm:text-lg lg:text-xl text-brand-black dark:text-white mb-2 sm:mb-3 group-hover:text-brand-purple transition-colors line-clamp-2">
                      {post.title}
                    </h3>

                    {/* Excerpt */}
                    <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed mb-3 sm:mb-4 line-clamp-2 sm:line-clamp-3">
                      {post.excerpt}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-3 sm:mb-4">
                      {post.tags.slice(0, 3).map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-2 py-1 bg-brand-neutral dark:bg-gray-700 text-brand-black dark:text-gray-200 text-xs font-medium rounded-lg"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Read More Link */}
                    <div className="flex items-center gap-2 text-brand-purple font-medium mt-auto text-sm sm:text-base">
                      <span>Read More</span>
                      <svg className="w-4 sm:w-5 h-4 sm:h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
            
            {/* View All Posts Button */}
            <div className="flex justify-center pt-8 border-t border-gray-200 dark:border-gray-700 mt-8">
              <Link
                href="/blog/all"
                className="px-8 py-3 bg-brand-purple text-white font-semibold rounded-2xl hover:bg-brand-purple/90 transition-colors shadow-lg hover:shadow-xl"
              >
                View All Posts
              </Link>
            </div>
          </div>
        </section>

        {/* Newsletter CTA */}
        <section className="section-padding bg-white dark:bg-gray-900">
          <div className="container-custom">
            <div className="bg-gradient-to-br from-brand-black to-brand-purple/90 rounded-3xl p-12 md:p-16 text-center text-white relative overflow-hidden">              
              <div className="relative z-10 max-w-2xl mx-auto">
                <div className="text-5xl mb-6">📧</div>
                <h2 className="font-heading font-bold text-4xl md:text-5xl mb-4">
                  Want clarity in your inbox?
                </h2>
                <p className="text-xl text-gray-200 mb-8">
                  Get tutorials, technical explainers, and AI how-tos — no spam, just value.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                  <input
                    type="email"
                    placeholder="your@email.com"
                    className="flex-1 px-6 py-4 rounded-2xl text-brand-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-purple"
                  />
                  <button className="bg-white text-brand-black px-8 py-4 rounded-2xl font-heading font-bold hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 whitespace-nowrap">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
