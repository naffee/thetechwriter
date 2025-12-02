'use client';

import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function BlogPost() {
  return (
    <>
      <Navigation />
      
      <main className="min-h-screen bg-brand-neutral dark:bg-gray-900">
        {/* Hero Section */}
        <section className="pt-24 sm:pt-32 pb-12 bg-gradient-to-br from-purple-50 via-white to-fuchsia-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
          <div className="container-custom max-w-4xl">
            <Link 
              href="/blog" 
              className="inline-flex items-center gap-2 text-brand-purple hover:gap-3 transition-all mb-8 font-medium"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Blog
            </Link>

            <div className="mb-6">
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 rounded-full text-sm font-semibold mb-4">
                🟪 Developer
              </span>
              <span className="mx-3 text-gray-400">•</span>
              <span className="text-gray-600 dark:text-gray-400">8 min read</span>
              <span className="mx-3 text-gray-400">•</span>
              <span className="text-gray-600 dark:text-gray-400">Dec 2, 2024</span>
            </div>

            <h1 className="font-heading font-bold text-4xl sm:text-5xl md:text-6xl text-brand-black dark:text-white mb-6 leading-tight">
              7 Things Developers Get Wrong When Using the OpenAI API
            </h1>
            
            <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 leading-relaxed">
              And how to fix them without losing your mind (or your tokens).
            </p>
          </div>
        </section>

        {/* Article Content */}
        <article className="section-padding bg-white dark:bg-gray-800">
          <div className="container-custom max-w-3xl">
            <div className="prose prose-lg dark:prose-invert max-w-none">
              
              <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                The OpenAI API is powerful — but many developers run into the same problems again and again.
                Most of them boil down to small misunderstandings about models, tokens, or how responses actually work behind the scenes.
              </p>

              <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                Here are 7 common mistakes and how to avoid them.
              </p>

              <h2 className="font-heading font-bold text-3xl text-brand-black dark:text-white mt-12 mb-6">
                ⭐ 1. Sending way too much text in every request
              </h2>

              <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                Developers often send the entire conversation history — even when it's thousands of tokens long.
              </p>

              <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300 font-semibold">
                Why it's a problem:
              </p>

              <ul className="space-y-2 text-lg text-gray-700 dark:text-gray-300 ml-6">
                <li>Higher cost per request</li>
                <li>Slower responses</li>
                <li>Models can lose context when input is too long</li>
              </ul>

              <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300 font-semibold mt-4">
                Fix:
              </p>
              <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                Use:
              </p>
              <ul className="space-y-2 text-lg text-gray-700 dark:text-gray-300 ml-6">
                <li>✔ message trimming</li>
                <li>✔ summarization</li>
                <li>✔ "memory" tokens</li>
                <li>✔ only keep essential messages</li>
              </ul>

              <h2 className="font-heading font-bold text-3xl text-brand-black dark:text-white mt-12 mb-6">
                ⭐ 2. Ignoring system prompts
              </h2>

              <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                Many beginners put everything inside the "user" role and leave the "system" role empty.
              </p>

              <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300 font-semibold">
                Why it matters:
              </p>
              <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                The system prompt controls:
              </p>

              <ul className="space-y-2 text-lg text-gray-700 dark:text-gray-300 ml-6">
                <li>tone</li>
                <li>behavior</li>
                <li>role</li>
                <li>constraints</li>
                <li>capability boundaries</li>
              </ul>

              <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300 font-semibold mt-4">
                Fix:
              </p>
              <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                Move instructions to:
              </p>

              <div className="bg-gray-900 dark:bg-gray-950 rounded-xl p-6 my-6 overflow-x-auto">
                <pre className="text-sm text-gray-100">
                  <code>{`{ "role": "system", "content": "You are a helpful assistant…" }`}</code>
                </pre>
              </div>

              <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                This alone improves output dramatically.
              </p>

              <h2 className="font-heading font-bold text-3xl text-brand-black dark:text-white mt-12 mb-6">
                ⭐ 3. Not handling rate limits properly
              </h2>

              <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                Developers often assume the API will always respond instantly.
              </p>

              <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300 font-semibold">
                Reality:
              </p>
              <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                If you send many requests in a short time, you may get:
              </p>

              <div className="bg-gray-900 dark:bg-gray-950 rounded-xl p-6 my-6 overflow-x-auto">
                <pre className="text-sm text-gray-100">
                  <code>429: Rate limit reached</code>
                </pre>
              </div>

              <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300 font-semibold">
                Fix:
              </p>

              <ul className="space-y-2 text-lg text-gray-700 dark:text-gray-300 ml-6">
                <li>add retry logic</li>
                <li>exponential backoff</li>
                <li>batching requests</li>
              </ul>

              <h2 className="font-heading font-bold text-3xl text-brand-black dark:text-white mt-12 mb-6">
                ⭐ 4. Sending API keys to the frontend 🤦‍♂️
              </h2>

              <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                Classic rookie mistake.
              </p>

              <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                If you place your API key inside client-side JS, it WILL be exposed.
              </p>

              <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300 font-semibold mt-4">
                Fix:
              </p>

              <ul className="space-y-2 text-lg text-gray-700 dark:text-gray-300 ml-6">
                <li>use server routes</li>
                <li>environment variables</li>
                <li>proxy requests through /api/...</li>
              </ul>

              <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300 font-semibold mt-4">
                Do NOT trust the browser to keep secrets.
              </p>

              <h2 className="font-heading font-bold text-3xl text-brand-black dark:text-white mt-12 mb-6">
                ⭐ 5. Using the wrong model for the wrong job
              </h2>

              <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                Many developers use the most expensive model when a cheaper one works better.
              </p>

              <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300 font-semibold">
                Examples:
              </p>

              <ul className="space-y-2 text-lg text-gray-700 dark:text-gray-300 ml-6">
                <li>embeddings → use an embeddings model</li>
                <li>classification → use a small model</li>
                <li>chat → use a chat model</li>
                <li>generation → choose based on cost/performance</li>
              </ul>

              <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300 font-semibold mt-4">
                Fix:
              </p>
              <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                Understand the model families and choose consciously.
              </p>

              <h2 className="font-heading font-bold text-3xl text-brand-black dark:text-white mt-12 mb-6">
                ⭐ 6. Not streaming when they should
              </h2>

              <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                Non-streaming responses are fine for tiny outputs.
                But for long outputs:
              </p>

              <ul className="space-y-2 text-lg text-gray-700 dark:text-gray-300 ml-6">
                <li>users wait longer</li>
                <li>UI feels laggy</li>
                <li>you risk timeouts</li>
              </ul>

              <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300 font-semibold mt-4">
                Fix:
              </p>
              <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                Use streamed responses for:
              </p>
              <ul className="space-y-2 text-lg text-gray-700 dark:text-gray-300 ml-6">
                <li>✔ long text</li>
                <li>✔ chatbots</li>
                <li>✔ real-time apps</li>
              </ul>

              <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300 mt-4">
                Streaming makes everything feel faster.
              </p>

              <h2 className="font-heading font-bold text-3xl text-brand-black dark:text-white mt-12 mb-6">
                ⭐ 7. No validation, error handling, or safety checks
              </h2>

              <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                Developers assume the model will always return perfect JSON or follow instructions exactly.
              </p>

              <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                But models sometimes:
              </p>

              <ul className="space-y-2 text-lg text-gray-700 dark:text-gray-300 ml-6">
                <li>hallucinate</li>
                <li>miss parameters</li>
                <li>return malformed data</li>
                <li>exceed token limits</li>
              </ul>

              <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300 font-semibold mt-4">
                Fix:
              </p>

              <ul className="space-y-2 text-lg text-gray-700 dark:text-gray-300 ml-6">
                <li>validate JSON</li>
                <li>set strict output formats</li>
                <li>add fallback prompts</li>
                <li>use "retry with instructions" patterns</li>
              </ul>

              <h2 className="font-heading font-bold text-3xl text-brand-black dark:text-white mt-12 mb-6">
                ⭐ Final Thoughts
              </h2>

              <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                Using the OpenAI API isn't hard — but using it well requires a bit of structure.
                If you follow these best practices, you'll build AI tools that are:
              </p>

              <ul className="space-y-2 text-lg text-gray-700 dark:text-gray-300 ml-6">
                <li>✔ faster</li>
                <li>✔ cheaper</li>
                <li>✔ more stable</li>
                <li>✔ more predictable</li>
                <li>✔ easier to scale</li>
              </ul>

              <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300 mt-6 font-semibold">
                Good AI apps aren't magic.
                <br />
                They're just good engineering.
              </p>

            </div>
          </div>
        </article>

        {/* CTA Section */}
        <section className="section-padding bg-gradient-to-br from-purple-50 to-fuchsia-50 dark:from-gray-900 dark:to-gray-800">
          <div className="container-custom max-w-4xl text-center">
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-brand-black dark:text-white mb-6">
              Want more Developer tutorials?
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
              Check out more articles on AI development, API integration, and practical coding tutorials.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link 
                href="/blog"
                className="inline-flex items-center gap-2 bg-brand-purple hover:bg-brand-purple/90 text-white px-8 py-4 rounded-2xl font-heading font-bold text-lg transition-all hover:gap-3"
              >
                <span>View All Posts</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
              <Link 
                href="/contact"
                className="inline-flex items-center gap-2 bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 hover:border-brand-purple dark:hover:border-brand-purple text-brand-black dark:text-white px-8 py-4 rounded-2xl font-heading font-bold text-lg transition-all"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
