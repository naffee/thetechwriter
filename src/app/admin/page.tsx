'use client';

import React, { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const ADMIN_PASSWORD = '1234'; // Change this to your preferred password

export default function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');

  // Form state
  const [title, setTitle] = useState('');
  const [slug, setSlug] = useState('');
  const [excerpt, setExcerpt] = useState('');
  const [content, setContent] = useState('');
  const [category, setCategory] = useState('Developer');
  const [tags, setTags] = useState('');
  const [readTime, setReadTime] = useState('');
  const [icon, setIcon] = useState('🤖');
  const [featured, setFeatured] = useState(false);
  const [generatedCode, setGeneratedCode] = useState('');
  const [generatedPageCode, setGeneratedPageCode] = useState('');

  const categories = [
    { name: 'Developer', color: 'from-purple-500/20 to-fuchsia-500/20' },
    { name: 'AI & ML', color: 'from-blue-500/20 to-cyan-500/20' },
    { name: 'SaaS & Product', color: 'from-green-500/20 to-emerald-500/20' },
    { name: 'Deep Dives', color: 'from-orange-500/20 to-amber-500/20' },
    { name: 'Writing', color: 'from-teal-500/20 to-cyan-500/20' },
    { name: 'Everyday User', color: 'from-pink-500/20 to-rose-500/20' },
  ];

  const icons = ['🤖', '📝', '⚡', '🔧', '💻', '✍️', '📚', '🎨', '🔌', '📈', '💬', '🔗', '🚀', '💡', '🔥', '⭐', '💎', '🌿'];

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === ADMIN_PASSWORD) {
      setIsAuthenticated(true);
      setPasswordError('');
    } else {
      setPasswordError('Incorrect password');
    }
  };

  const generateSlug = (title: string) => {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-+|-+$/g, '');
  };

  const handleTitleChange = (value: string) => {
    setTitle(value);
    if (!slug) {
      setSlug(generateSlug(value));
    }
  };

  const generateCode = () => {
    const selectedCategory = categories.find(cat => cat.name === category);
    const tagsArray = tags.split(',').map(tag => tag.trim()).filter(tag => tag);
    
    // Generate blog post array entry
    const code = `  {
    id: ${Date.now()}, // Replace with next available ID
    title: '${title}',
    slug: '${slug}',
    excerpt: '${excerpt}',
    content: 'Your blog content preview...',
    category: '${category}',
    tags: [${tagsArray.map(tag => `'${tag}'`).join(', ')}],
    author: 'The Tech Writer',
    date: '${new Date().toISOString().split('T')[0]}',
    readTime: '${readTime}',
    image: '${icon}',
    featured: ${featured},
    color: '${selectedCategory?.color}',
  },`;

    // Generate complete blog post page file
    const pageCode = `'use client';

import React, { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function BlogPost() {
  const [copied, setCopied] = useState<string | null>(null);

  const copyToClipboard = (code: string, id: string) => {
    navigator.clipboard.writeText(code);
    setCopied(id);
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <>
      <Navigation />
      
      <main className="min-h-screen bg-brand-neutral dark:bg-gray-900">
        {/* Hero Section */}
        <section className="pt-24 sm:pt-32 pb-12 bg-gradient-to-br ${selectedCategory?.color.replace('/20', '/10')} dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
          <div className="container-custom max-w-4xl">
            <Link 
              href="/blog" 
              className="inline-flex items-center gap-2 text-brand-purple hover:gap-3 transition-all mb-8 font-medium"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              <span>Back to Blog</span>
            </Link>

            <div className="inline-block px-4 py-2 bg-brand-purple/10 dark:bg-brand-purple/20 rounded-full mb-6">
              <span className="text-brand-purple text-sm font-medium">${category}</span>
            </div>

            <h1 className="font-heading font-bold text-4xl sm:text-5xl md:text-6xl text-brand-black dark:text-white mb-6">
              ${title}
            </h1>

            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              ${excerpt}
            </p>

            <div className="flex items-center gap-6 text-sm text-gray-500 dark:text-gray-400">
              <span>${category}</span>
              <span>•</span>
              <span>${readTime}</span>
              <span>•</span>
              <span>${new Date().toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}</span>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="py-12 bg-white dark:bg-gray-800">
          <article className="container-custom max-w-4xl prose prose-lg dark:prose-invert">
            ${content.split('\n\n').map(paragraph => {
              // Check if it's a heading
              if (paragraph.startsWith('## ')) {
                const headingText = paragraph.replace('## ', '');
                return `<h2 className="flex items-center gap-3">
              ${headingText.includes('⭐') ? headingText : `<span className="text-brand-purple">⭐</span> ${headingText}`}
            </h2>`;
              }
              // Check if it's a list
              if (paragraph.includes('\n- ')) {
                const items = paragraph.split('\n- ').filter(item => item.trim());
                return `<ul>
              ${items.map(item => `<li>${item}</li>`).join('\n              ')}
            </ul>`;
              }
              // Regular paragraph
              return `<p>
              ${paragraph.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')}
            </p>`;
            }).join('\n\n            ')}
          </article>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-br from-brand-black to-brand-purple/90">
          <div className="container-custom max-w-4xl text-center text-white">
            <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4">
              Want more tutorials like this?
            </h2>
            <p className="text-xl text-gray-200 mb-8">
              I write practical guides for developers building with AI, Next.js, and modern web tools.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                href="/blog"
                className="bg-white text-brand-black px-8 py-4 rounded-2xl font-heading font-bold hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
              >
                Read More Tutorials
              </Link>
              <Link
                href="/contact"
                className="border-2 border-white text-white px-8 py-4 rounded-2xl font-heading font-bold hover:bg-white hover:text-brand-black transition-all duration-300"
              >
                Hire Me
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
`;

    setGeneratedCode(code);
    setGeneratedPageCode(pageCode);
  };

  const copyPageCode = () => {
    navigator.clipboard.writeText(generatedPageCode);
    alert('Blog page code copied to clipboard!');
  };

  if (!isAuthenticated) {
    return (
      <>
        <Navigation />
        <main className="min-h-screen bg-brand-neutral dark:bg-gray-900 flex items-center justify-center p-6">
          <div className="max-w-md w-full bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl">
            <h1 className="font-heading font-bold text-3xl text-brand-black dark:text-white mb-6 text-center">
              Admin Access
            </h1>
            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-brand-black dark:text-white mb-2">
                  Password
                </label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 dark:border-gray-700 focus:border-brand-purple focus:outline-none text-brand-black dark:text-white dark:bg-gray-900"
                  placeholder="Enter admin password"
                />
                {passwordError && (
                  <p className="text-red-500 text-sm mt-2">{passwordError}</p>
                )}
              </div>
              <button
                type="submit"
                className="w-full bg-brand-purple text-white py-3 rounded-xl font-semibold hover:bg-brand-purple/90 transition-colors"
              >
                Login
              </button>
            </form>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-brand-neutral dark:bg-gray-900 py-24">
        <div className="container-custom max-w-5xl">
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl">
            <div className="flex items-center justify-between mb-8">
              <h1 className="font-heading font-bold text-4xl text-brand-black dark:text-white">
                Add New Blog Post
              </h1>
              <button
                onClick={() => setIsAuthenticated(false)}
                className="text-gray-500 hover:text-brand-purple transition-colors"
              >
                Logout
              </button>
            </div>

            <div className="space-y-6">
              {/* Title */}
              <div>
                <label className="block text-sm font-semibold text-brand-black dark:text-white mb-2">
                  Title *
                </label>
                <input
                  type="text"
                  value={title}
                  onChange={(e) => handleTitleChange(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 dark:border-gray-700 focus:border-brand-purple focus:outline-none text-brand-black dark:text-white dark:bg-gray-900"
                  placeholder="How to Build an AI Content Generator..."
                />
              </div>

              {/* Slug */}
              <div>
                <label className="block text-sm font-semibold text-brand-black dark:text-white mb-2">
                  Slug (URL) *
                </label>
                <input
                  type="text"
                  value={slug}
                  onChange={(e) => setSlug(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 dark:border-gray-700 focus:border-brand-purple focus:outline-none text-brand-black dark:text-white dark:bg-gray-900"
                  placeholder="ai-content-generator-nextjs"
                />
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                  URL: /blog/{slug || 'your-slug'}
                </p>
              </div>

              {/* Excerpt */}
              <div>
                <label className="block text-sm font-semibold text-brand-black dark:text-white mb-2">
                  Excerpt (Short Description) *
                </label>
                <textarea
                  value={excerpt}
                  onChange={(e) => setExcerpt(e.target.value)}
                  rows={3}
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 dark:border-gray-700 focus:border-brand-purple focus:outline-none text-brand-black dark:text-white dark:bg-gray-900"
                  placeholder="A short 1-2 sentence description that appears in the blog list..."
                />
              </div>

              {/* Full Content */}
              <div>
                <label className="block text-sm font-semibold text-brand-black dark:text-white mb-2">
                  Blog Content (Full Article) *
                </label>
                <textarea
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  rows={15}
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 dark:border-gray-700 focus:border-brand-purple focus:outline-none text-brand-black dark:text-white dark:bg-gray-900 font-mono text-sm"
                  placeholder={`Write your blog content here...

You can use:
- Plain paragraphs
- **Bold text** for emphasis
- ## Headings with ##
- ⭐ Emoji headers
- Code blocks (add them in the actual page file)
- Lists with - or numbers

Example:
## Introduction

Your introduction paragraph here...

## Step 1 — Setup

Instructions here...`}
                />
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                  💡 Tip: Write your full content here. You'll paste this into your blog post page file later.
                </p>
              </div>

              {/* Category & Icon */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-brand-black dark:text-white mb-2">
                    Category *
                  </label>
                  <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 dark:border-gray-700 focus:border-brand-purple focus:outline-none text-brand-black dark:text-white dark:bg-gray-900"
                  >
                    {categories.map((cat) => (
                      <option key={cat.name} value={cat.name}>
                        {cat.name}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-brand-black dark:text-white mb-2">
                    Icon
                  </label>
                  <div className="grid grid-cols-6 gap-2">
                    {icons.map((emoji) => (
                      <button
                        key={emoji}
                        type="button"
                        onClick={() => setIcon(emoji)}
                        className={`text-3xl p-2 rounded-xl border-2 transition-all hover:scale-110 ${
                          icon === emoji
                            ? 'border-brand-purple bg-brand-purple/10'
                            : 'border-gray-200 dark:border-gray-700'
                        }`}
                      >
                        {emoji}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Tags */}
              <div>
                <label className="block text-sm font-semibold text-brand-black dark:text-white mb-2">
                  Tags (comma-separated)
                </label>
                <input
                  type="text"
                  value={tags}
                  onChange={(e) => setTags(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 dark:border-gray-700 focus:border-brand-purple focus:outline-none text-brand-black dark:text-white dark:bg-gray-900"
                  placeholder="Next.js, OpenAI, AI, Tutorial"
                />
              </div>

              {/* Read Time */}
              <div>
                <label className="block text-sm font-semibold text-brand-black dark:text-white mb-2">
                  Read Time
                </label>
                <input
                  type="text"
                  value={readTime}
                  onChange={(e) => setReadTime(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 dark:border-gray-700 focus:border-brand-purple focus:outline-none text-brand-black dark:text-white dark:bg-gray-900"
                  placeholder="12 min read"
                />
              </div>

              {/* Featured */}
              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  id="featured"
                  checked={featured}
                  onChange={(e) => setFeatured(e.target.checked)}
                  className="w-5 h-5 rounded border-gray-300 text-brand-purple focus:ring-brand-purple"
                />
                <label htmlFor="featured" className="text-sm font-semibold text-brand-black dark:text-white">
                  Mark as Featured
                </label>
              </div>

              {/* Preview */}
              <div className="border-t-2 border-gray-200 dark:border-gray-700 pt-6">
                <h3 className="font-semibold text-lg text-brand-black dark:text-white mb-4">
                  Preview
                </h3>
                <div className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 rounded-xl p-6">
                  <div className="flex items-start gap-4">
                    <span className="text-5xl">{icon}</span>
                    <div className="flex-grow">
                      <div className="inline-block px-3 py-1 bg-brand-purple/10 text-brand-purple text-xs font-medium rounded-full mb-2">
                        {category}
                      </div>
                      <h4 className="font-heading font-bold text-xl text-brand-black dark:text-white mb-2">
                        {title || 'Your Blog Title'}
                      </h4>
                      <p className="text-gray-600 dark:text-gray-300 mb-3">
                        {excerpt || 'Your excerpt will appear here...'}
                      </p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        {readTime || '5 min read'}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Generate Button */}
              <button
                onClick={generateCode}
                className="w-full bg-brand-purple text-white py-4 rounded-xl font-heading font-bold text-lg hover:bg-brand-purple/90 transition-colors"
              >
                Generate Code
              </button>

              {/* Generated Code */}
              {generatedCode && (
                <div className="border-t-2 border-gray-200 dark:border-gray-700 pt-6 space-y-6">
                  {/* Step 1: Blog Post Entry */}
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="font-semibold text-lg text-brand-black dark:text-white">
                        Step 1: Add to Blog List
                      </h3>
                      <button
                        onClick={() => {
                          navigator.clipboard.writeText(generatedCode);
                          alert('Code copied!');
                        }}
                        className="px-4 py-2 bg-brand-purple text-white rounded-lg font-medium hover:bg-brand-purple/90 transition-colors"
                      >
                        Copy Code
                      </button>
                    </div>
                    <pre className="bg-gray-900 text-gray-100 p-6 rounded-2xl overflow-x-auto text-sm">
                      <code>{generatedCode}</code>
                    </pre>
                    <div className="mt-4 p-4 bg-blue-50 dark:bg-blue-900/20 border-2 border-blue-200 dark:border-blue-800 rounded-xl">
                      <p className="text-sm text-blue-700 dark:text-blue-300">
                        📍 Open <code className="bg-blue-100 dark:bg-blue-900 px-1 rounded">src/app/blog/page.tsx</code> and add this to the <code className="bg-blue-100 dark:bg-blue-900 px-1 rounded">blogPosts</code> array at the top.
                      </p>
                    </div>
                  </div>

                  {/* Step 2: Blog Page File */}
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="font-semibold text-lg text-brand-black dark:text-white">
                        Step 2: Create Blog Page File
                      </h3>
                      <button
                        onClick={copyPageCode}
                        className="px-4 py-2 bg-green-600 text-white rounded-lg font-medium hover:bg-green-700 transition-colors"
                      >
                        Copy Page Code
                      </button>
                    </div>
                    <pre className="bg-gray-900 text-gray-100 p-6 rounded-2xl overflow-x-auto text-sm max-h-96">
                      <code>{generatedPageCode}</code>
                    </pre>
                    <div className="mt-4 p-4 bg-green-50 dark:bg-green-900/20 border-2 border-green-200 dark:border-green-800 rounded-xl">
                      <p className="text-sm font-semibold text-green-800 dark:text-green-200 mb-2">
                        📝 Create new file:
                      </p>
                      <code className="block bg-green-100 dark:bg-green-900 px-3 py-2 rounded text-sm text-green-900 dark:text-green-100 mb-3">
                        src/app/blog/{slug}/page.tsx
                      </code>
                      <p className="text-sm text-green-700 dark:text-green-300">
                        1. Create the folder: <code className="bg-green-100 dark:bg-green-900 px-1 rounded">src/app/blog/{slug}</code><br/>
                        2. Create the file: <code className="bg-green-100 dark:bg-green-900 px-1 rounded">page.tsx</code><br/>
                        3. Paste the code from above<br/>
                        4. Save and you're done! 🎉
                      </p>
                    </div>
                  </div>

                  {/* Success Message */}
                  <div className="p-6 bg-gradient-to-br from-brand-purple to-brand-purple/80 text-white rounded-2xl text-center">
                    <div className="text-4xl mb-3">✨</div>
                    <h3 className="font-heading font-bold text-2xl mb-2">Ready to Publish!</h3>
                    <p className="text-purple-100">
                      Follow the 2 steps above and your blog post will be live at:<br/>
                      <code className="bg-white/20 px-2 py-1 rounded mt-2 inline-block">/blog/{slug}</code>
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
