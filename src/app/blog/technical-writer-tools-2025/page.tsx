'use client';

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
        <section className="pt-24 sm:pt-32 pb-12 bg-gradient-to-br from-teal-50 via-white to-cyan-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
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

            <div className="inline-block px-4 py-2 bg-teal-500/10 dark:bg-teal-500/20 rounded-full mb-6">
              <span className="text-teal-600 dark:text-teal-400 text-sm font-medium">Writing</span>
            </div>

            <h1 className="font-heading font-bold text-4xl sm:text-5xl md:text-6xl text-brand-black dark:text-white mb-6">
              The 10 Tools Every Technical Writer Should Use in 2025
            </h1>

            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              Writing is easier when you have the right tools — these are the ones that actually help.
            </p>

            <div className="flex items-center gap-6 text-sm text-gray-500 dark:text-gray-400">
              <span>Writing</span>
              <span>•</span>
              <span>10 min read</span>
              <span>•</span>
              <span>Nov 2024</span>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="py-12 bg-white dark:bg-gray-800">
          <article className="container-custom max-w-4xl prose prose-lg dark:prose-invert">
            <p className="lead">
              Technical writing today is more than "just writing."
            </p>

            <p>
              You're formatting code, managing versions, reviewing PRs, editing visuals, generating diagrams, and publishing to documentation platforms.
            </p>

            <p>
              Whether you're writing for AI tools, SaaS platforms, or dev teams — these tools will make your workflow smoother, faster, and more organized.
            </p>

            <p>Here are 10 tools every technical writer should use in 2025.</p>

            <h2 className="flex items-center gap-3">
              <span className="text-teal-600">⭐</span> 1. Notion — The Ultimate Workspace
            </h2>

            <p><strong>Perfect for:</strong></p>

            <ul>
              <li>drafting</li>
              <li>organizing ideas</li>
              <li>planning docs</li>
              <li>tracking writing tasks</li>
            </ul>

            <p>
              Notion is flexible, collaborative, and clean. It's the easiest place to keep your writing workflow organized.
            </p>

            <h2 className="flex items-center gap-3">
              <span className="text-teal-600">⭐</span> 2. GitHub — Version Control for Documentation
            </h2>

            <p>
              If you work with developers, you'll eventually work in GitHub.
            </p>

            <p><strong>It's essential for:</strong></p>

            <ul>
              <li>version control</li>
              <li>documentation in repos</li>
              <li>pull request reviews</li>
              <li>markdown-based docs</li>
            </ul>

            <p>
              Modern documentation = always living inside the codebase.
            </p>

            <h2 className="flex items-center gap-3">
              <span className="text-teal-600">⭐</span> 3. VS Code — Writing + Markdown + Code Snippets
            </h2>

            <p>
              Great technical writers know how to use a code editor.
            </p>

            <p><strong>Benefits:</strong></p>

            <ul>
              <li>write docs in Markdown</li>
              <li>test code snippets</li>
              <li>preview formatting</li>
              <li>lint your code examples</li>
            </ul>

            <p>
              VS Code is where writing and coding meet.
            </p>

            <h2 className="flex items-center gap-3">
              <span className="text-teal-600">⭐</span> 4. ChatGPT / Claude — For Drafting & Ideation
            </h2>

            <p>
              AI isn't replacing writers — it's helping them move faster.
            </p>

            <p><strong>Use AI tools for:</strong></p>

            <ul>
              <li>outlining</li>
              <li>idea generation</li>
              <li>breaking down complex concepts</li>
              <li>rewriting unclear explanations</li>
              <li>improving tone</li>
            </ul>

            <p>
              Just don't let them write your final draft.
            </p>

            <h2 className="flex items-center gap-3">
              <span className="text-teal-600">⭐</span> 5. Figma — Screenshots, Diagrams, UI Illustrations
            </h2>

            <p>
              Most SaaS docs need:
            </p>

            <ul>
              <li>annotated screenshots</li>
              <li>feature diagrams</li>
              <li>workflow illustrations</li>
            </ul>

            <p>
              Figma makes this easy — and teams love it.
            </p>

            <h2 className="flex items-center gap-3">
              <span className="text-teal-600">⭐</span> 6. Loom — Quick Video Walkthroughs
            </h2>

            <p>
              Some concepts are easier shown than typed.
            </p>

            <p><strong>Loom is perfect for:</strong></p>

            <ul>
              <li>internal explanations</li>
              <li>feature walkthroughs</li>
              <li>developer handoff</li>
              <li>training users</li>
            </ul>

            <p>
              It also helps you verify your own understanding.
            </p>

            <h2 className="flex items-center gap-3">
              <span className="text-teal-600">⭐</span> 7. Grammarly — Catch the Small Mistakes
            </h2>

            <p>
              Technical writers need clarity — not unnecessary errors.
            </p>

            <p><strong>Grammarly helps with:</strong></p>

            <ul>
              <li>tone</li>
              <li>grammar</li>
              <li>clarity</li>
              <li>readability</li>
            </ul>

            <p>
              Use it as a safety net, not a crutch.
            </p>

            <h2 className="flex items-center gap-3">
              <span className="text-teal-600">⭐</span> 8. ReadMe / Mintlify / GitBook — Modern Documentation Platforms
            </h2>

            <p>
              These platforms make documentation beautiful.
            </p>

            <p><strong>What they offer:</strong></p>

            <ul>
              <li>clean UI</li>
              <li>code blocks</li>
              <li>navigation sidebar</li>
              <li>API reference pages</li>
              <li>changelogs</li>
              <li>integrations</li>
            </ul>

            <p>
              Using modern tooling elevates your docs instantly.
            </p>

            <h2 className="flex items-center gap-3">
              <span className="text-teal-600">⭐</span> 9. Obsidian — Offline Knowledge Base
            </h2>

            <p>
              For writers who want more structure:
            </p>

            <ul>
              <li>local markdown</li>
              <li>backlinking</li>
              <li>graph view</li>
              <li>private vaults</li>
            </ul>

            <p>
              Great for deep research and long-term writing projects.
            </p>

            <h2 className="flex items-center gap-3">
              <span className="text-teal-600">⭐</span> 10. Mermaid.js — Technical Diagrams in Markdown
            </h2>

            <p><strong>Perfect for:</strong></p>

            <ul>
              <li>flowcharts</li>
              <li>sequence diagrams</li>
              <li>system architecture</li>
              <li>user journeys</li>
            </ul>

            <p>
              You can create diagrams inside your documentation, no design necessary.
            </p>

            <h2 className="flex items-center gap-3">
              <span className="text-teal-600">⭐</span> Bonus Tools (Worth Exploring)
            </h2>

            <ul>
              <li>✔ Typora (clean Markdown writing)</li>
              <li>✔ Docusaurus (developer docs framework)</li>
              <li>✔ Draw.io (simple diagrams)</li>
              <li>✔ Canva (quick visuals)</li>
              <li>✔ Raycast (productivity for Mac)</li>
            </ul>

            <h2 className="flex items-center gap-3">
              <span className="text-teal-600">⭐</span> Final Thoughts
            </h2>

            <p>
              Tools won't make you a great writer — but they will make you a faster, clearer, more effective one.
            </p>

            <p>
              In 2025, technical writing is a mix of:
            </p>

            <ul>
              <li>clear communication</li>
              <li>clean design</li>
              <li>technical accuracy</li>
              <li>efficient workflows</li>
            </ul>

            <p>
              <strong>These tools will help you excel at all four.</strong>
            </p>
          </article>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-br from-brand-black to-teal-600/90">
          <div className="container-custom max-w-4xl text-center text-white">
            <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4">
              Want more writing and productivity tips?
            </h2>
            <p className="text-xl text-gray-200 mb-8">
              I write practical guides for technical writers, content creators, and documentation teams.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                href="/blog"
                className="bg-white text-brand-black px-8 py-4 rounded-2xl font-heading font-bold hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
              >
                Read More Articles
              </Link>
              <Link
                href="/contact"
                className="border-2 border-white text-white px-8 py-4 rounded-2xl font-heading font-bold hover:bg-white hover:text-brand-black transition-all duration-300"
              >
                Get In Touch
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
