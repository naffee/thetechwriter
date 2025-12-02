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
              How to Turn Complex Features Into Simple Explanations (That Users Actually Understand)
            </h1>

            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              If your users don't understand your product, the problem isn't the feature — it's the explanation.
            </p>

            <div className="flex items-center gap-6 text-sm text-gray-500 dark:text-gray-400">
              <span>Writing</span>
              <span>•</span>
              <span>9 min read</span>
              <span>•</span>
              <span>Nov 2024</span>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="py-12 bg-white dark:bg-gray-800">
          <article className="container-custom max-w-4xl prose prose-lg dark:prose-invert">
            <p className="lead">
              Every SaaS product eventually reaches a point where features become:
            </p>

            <ul>
              <li>too advanced</li>
              <li>too technical</li>
              <li>too abstract</li>
              <li>too multi-step</li>
              <li>too "internal language"</li>
            </ul>

            <p>And users get lost.</p>

            <p>
              The solution isn't to dumb down the product — it's to explain it better.
            </p>

            <p>
              Here is a simple, repeatable system for turning complex features into explanations anyone can understand.
            </p>

            <h2 className="flex items-center gap-3">
              <span className="text-teal-600">⭐</span> 1. Start With the Problem, Not the Feature
            </h2>

            <p>
              Most feature descriptions start with:
            </p>

            <blockquote>
              <p>"This feature lets you…"</p>
            </blockquote>

            <p>
              But users don't care about the feature. They care about the problem it solves.
            </p>

            <p><strong>Before:</strong></p>

            <div className="relative group">
              <pre className="bg-gray-900 text-gray-100 p-6 rounded-2xl overflow-x-auto">
                <code>{"\"Our AI auto-tagging engine categorizes content using embeddings.\""}</code>
              </pre>
              <button
                onClick={() => copyToClipboard('"Our AI auto-tagging engine categorizes content using embeddings."', 'before1')}
                className="absolute top-4 right-4 px-3 py-1 bg-teal-600 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity"
              >
                {copied === 'before1' ? '✓ Copied' : 'Copy'}
              </button>
            </div>

            <p><strong>After:</strong></p>

            <div className="relative group">
              <pre className="bg-gray-900 text-gray-100 p-6 rounded-2xl overflow-x-auto">
                <code>{"\"Tired of manually tagging every document?\nThis feature organizes your content for you — automatically.\""}</code>
              </pre>
              <button
                onClick={() => copyToClipboard('"Tired of manually tagging every document?\nThis feature organizes your content for you — automatically."', 'after1')}
                className="absolute top-4 right-4 px-3 py-1 bg-teal-600 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity"
              >
                {copied === 'after1' ? '✓ Copied' : 'Copy'}
              </button>
            </div>

            <p>
              Always start with the pain point. Your user should think: "Yes, that's my problem."
            </p>

            <h2 className="flex items-center gap-3">
              <span className="text-teal-600">⭐</span> 2. Explain the Outcome Before the Process
            </h2>

            <p>
              Users shouldn't hear how something works before they know why it matters.
            </p>

            <p><strong>Before (bad):</strong></p>

            <blockquote>
              <p>"We analyze text and apply semantic labels using a clustering model."</p>
            </blockquote>

            <p><strong>After (good):</strong></p>

            <blockquote>
              <p>"You upload a file, and it comes back neatly organized with the correct labels."</p>
            </blockquote>

            <p>
              Outcome → THEN process. Never the reverse.
            </p>

            <h2 className="flex items-center gap-3">
              <span className="text-teal-600">⭐</span> 3. Use the "1 Sentence Rule"
            </h2>

            <p>
              If you can't explain the feature in one clean sentence, it's too complicated.
            </p>

            <p><strong>Try this formula:</strong></p>

            <blockquote>
              <p>[Feature] helps you [goal] by [simple mechanism].</p>
            </blockquote>

            <p><strong>Example:</strong></p>

            <blockquote>
              <p>"Smart Summaries help you understand long documents by generating quick, clear overviews."</p>
            </blockquote>

            <p>
              If this one sentence is unclear, the user won't read further.
            </p>

            <h2 className="flex items-center gap-3">
              <span className="text-teal-600">⭐</span> 4. Show Before You Tell (Use Examples)
            </h2>

            <p>
              Examples make explanations instantly clearer.
            </p>

            <p><strong>Before:</strong></p>

            <blockquote>
              <p>"We use semantic search to find relevant items."</p>
            </blockquote>

            <p><strong>After:</strong></p>

            <blockquote>
              <p>"Search for 'invoices from last month' and instantly see all matching documents — even if the title doesn't contain those words."</p>
            </blockquote>

            <p>
              <strong>Example {'>>'} explanation.</strong>
            </p>

            <h2 className="flex items-center gap-3">
              <span className="text-teal-600">⭐</span> 5. Reduce Your Vocabulary to the Essentials
            </h2>

            <p>
              Remove jargon. Remove internal terms. Remove words that only your team understands.
            </p>

            <p><strong>Before:</strong></p>

            <blockquote>
              <p>"Upload your assets into the repository workspace."</p>
            </blockquote>

            <p><strong>After:</strong></p>

            <blockquote>
              <p>"Upload your files to your library."</p>
            </blockquote>

            <p>
              Simple language attracts; confusing language repels.
            </p>

            <h2 className="flex items-center gap-3">
              <span className="text-teal-600">⭐</span> 6. Break the Feature Into 3 Simple Steps
            </h2>

            <p>
              Users love clarity. This pattern always works:
            </p>

            <ol>
              <li><strong>What it does</strong></li>
              <li><strong>How it works (simple version)</strong></li>
              <li><strong>How to use it (steps)</strong></li>
            </ol>

            <p><strong>Example:</strong></p>

            <p><strong>1. What it does:</strong></p>

            <blockquote>
              <p>Automatically turns long documents into short summaries.</p>
            </blockquote>

            <p><strong>2. How it works:</strong></p>

            <blockquote>
              <p>Our AI scans the text and extracts the important parts.</p>
            </blockquote>

            <p><strong>3. How to use it:</strong></p>

            <blockquote>
              <p>Upload → Click "Summarize" → Done.</p>
            </blockquote>

            <p>
              Users instantly get it.
            </p>

            <h2 className="flex items-center gap-3">
              <span className="text-teal-600">⭐</span> 7. Use Visual Metaphors (They Work Better Than Jargon)
            </h2>

            <p>
              Metaphors simplify complexity.
            </p>

            <p><strong>Examples:</strong></p>

            <ul>
              <li>"Think of it like a spreadsheet for your API."</li>
              <li>"Imagine your workspace as a folder that holds everything for a project."</li>
              <li>"It works like a librarian who knows every book instantly."</li>
            </ul>

            <p>
              Metaphors help non-technical users feel the concept.
            </p>

            <h2 className="flex items-center gap-3">
              <span className="text-teal-600">⭐</span> 8. Show a Real Use Case (Not a Theoretical One)
            </h2>

            <p>
              People don't learn from abstract descriptions. They learn from stories.
            </p>

            <p><strong>Before:</strong></p>

            <blockquote>
              <p>"Our automation engine triggers workflows based on conditions."</p>
            </blockquote>

            <p><strong>After:</strong></p>

            <blockquote>
              <p>
                "When a customer signs up, they automatically get a welcome email, their account is created, and their CRM record is updated — without you doing anything."
              </p>
            </blockquote>

            <p>
              This is how you make features feel practical.
            </p>

            <h2 className="flex items-center gap-3">
              <span className="text-teal-600">⭐</span> 9. Remove Anything the User Doesn't Need to Know (Yet)
            </h2>

            <p>
              Complexity often comes from explaining too much too early.
            </p>

            <p><strong>Example:</strong></p>

            <p>Don't show:</p>

            <ul>
              <li>API endpoints</li>
              <li>advanced settings</li>
              <li>hidden options</li>
              <li>edge cases</li>
              <li>developer notes</li>
            </ul>

            <p>until the user asks for them.</p>

            <p><strong>Use progressive disclosure:</strong></p>

            <ul>
              <li>Show the simple version first.</li>
              <li>Reveal complexity only when needed.</li>
            </ul>

            <h2 className="flex items-center gap-3">
              <span className="text-teal-600">⭐</span> 10. End With a Clear Call-To-Action
            </h2>

            <p>
              Once the user understands the feature, tell them exactly what to do next.
            </p>

            <p><strong>Examples:</strong></p>

            <ul>
              <li>"Try it with your first document."</li>
              <li>"Create your first workflow."</li>
              <li>"Upload a file to see it in action."</li>
            </ul>

            <p>
              Simple. Direct. Actionable.
            </p>

            <h2 className="flex items-center gap-3">
              <span className="text-teal-600">⭐</span> Bonus: The "Teacher Test"
            </h2>

            <p>
              Before publishing your explanation, ask:
            </p>

            <blockquote>
              <p>"Could a friend with no context explain this back to me after reading it?"</p>
            </blockquote>

            <p>
              If the answer is no → rewrite.
            </p>

            <p>
              If yes → you nailed it.
            </p>

            <h2 className="flex items-center gap-3">
              <span className="text-teal-600">⭐</span> Final Thoughts
            </h2>

            <p>
              The best SaaS products win not because they have the most features — but because they have the clearest explanations.
            </p>

            <p>
              When you master the skill of simplifying complexity, your:
            </p>

            <ul>
              <li>tutorials become easier to follow</li>
              <li>documentation becomes more helpful</li>
              <li>onboarding becomes smoother</li>
              <li>users become more confident</li>
              <li>product becomes more valuable</li>
            </ul>

            <p>
              <strong>Clarity is a competitive advantage.</strong>
            </p>
          </article>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-br from-brand-black to-teal-600/90">
          <div className="container-custom max-w-4xl text-center text-white">
            <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4">
              Want more writing and clarity tips?
            </h2>
            <p className="text-xl text-gray-200 mb-8">
              I write practical guides for technical writers, product teams, and documentation creators.
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
