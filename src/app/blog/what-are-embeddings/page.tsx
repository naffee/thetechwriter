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
        <section className="pt-24 sm:pt-32 pb-12 bg-gradient-to-br from-blue-50 via-white to-cyan-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
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

            <div className="inline-block px-4 py-2 bg-blue-500/10 dark:bg-blue-500/20 rounded-full mb-6">
              <span className="text-blue-600 dark:text-blue-400 text-sm font-medium">AI & Machine Learning</span>
            </div>

            <h1 className="font-heading font-bold text-4xl sm:text-5xl md:text-6xl text-brand-black dark:text-white mb-6">
              What Are Embeddings? A Simple Explanation With Examples
            </h1>

            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              A plain-English guide for anyone building or using AI-powered tools.
            </p>

            <div className="flex items-center gap-6 text-sm text-gray-500 dark:text-gray-400">
              <span>AI & Machine Learning</span>
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
              If you've spent any time around AI, you've probably heard the word <strong>embeddings</strong>.
            </p>

            <ul>
              <li>Developers use them.</li>
              <li>AI startups depend on them.</li>
              <li>Search engines run on them.</li>
              <li>And every RAG (Retrieval-Augmented Generation) system wouldn't work without them.</li>
            </ul>

            <p>
              But what are embeddings, really? Let's break it down in the simplest way possible.
            </p>

            <h2 className="flex items-center gap-3">
              <span className="text-blue-600">⭐</span> What Are Embeddings?
            </h2>

            <p>
              <strong>Embeddings are numeric representations of meaning.</strong>
            </p>

            <p>
              They turn text into a list of numbers (called a vector) so that machines can compare meaning mathematically.
            </p>

            <p>Here's the core idea:</p>

            <blockquote>
              <p>If two pieces of text have similar meaning, their embeddings will be mathematically close.</p>
            </blockquote>

            <p>That's it. Not as scary as it sounds.</p>

            <h2 className="flex items-center gap-3">
              <span className="text-blue-600">⭐</span> Example: Similar Meanings → Similar Embeddings
            </h2>

            <p>Let's take two sentences:</p>

            <ul>
              <li>"I love pizza."</li>
              <li>"Pizza is my favorite food."</li>
            </ul>

            <p>
              Even though they're worded differently, they mean almost the same thing.
            </p>

            <p>The embeddings might produce something like:</p>

            <div className="relative group">
              <pre className="bg-gray-900 text-gray-100 p-6 rounded-2xl overflow-x-auto">
                <code>{`Sentence 1 → [0.43, -1.22, 0.98, ...]
Sentence 2 → [0.41, -1.19, 1.02, ...]`}</code>
              </pre>
              <button
                onClick={() => copyToClipboard(`Sentence 1 → [0.43, -1.22, 0.98, ...]\nSentence 2 → [0.41, -1.19, 1.02, ...]`, 'example1')}
                className="absolute top-4 right-4 px-3 py-1 bg-blue-600 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity"
              >
                {copied === 'example1' ? '✓ Copied' : 'Copy'}
              </button>
            </div>

            <p>
              The numbers aren't important — the closeness between them is.
            </p>

            <p>This closeness can be measured using:</p>

            <ul>
              <li><strong>cosine similarity</strong> (most common)</li>
              <li><strong>dot product</strong></li>
              <li><strong>Euclidean distance</strong></li>
            </ul>

            <p>That's how AI knows these two sentences are related.</p>

            <h2 className="flex items-center gap-3">
              <span className="text-blue-600">⭐</span> Why Do We Need Embeddings?
            </h2>

            <p>
              Embeddings allow machines to do things that traditional search cannot — like understanding meaning instead of just matching keywords.
            </p>

            <p>Here's what they unlock:</p>

            <ul>
              <li><strong>Semantic search</strong> — Search for meaning, not exact words.</li>
              <li><strong>RAG systems</strong> — Your AI assistant can look up relevant info before responding.</li>
              <li><strong>Recommendations</strong> — Find similar items, documents, or content.</li>
              <li><strong>Clustering</strong> — Group similar things together automatically.</li>
              <li><strong>Classification</strong> — Assign categories based on similarity.</li>
              <li><strong>Deduplication</strong> — Find near-duplicate content.</li>
            </ul>

            <p>
              <strong>Embeddings = the backbone of modern AI intelligence.</strong>
            </p>

            <h2 className="flex items-center gap-3">
              <span className="text-blue-600">⭐</span> The Real Magic: Similarity Search
            </h2>

            <p>Let's say we have three sentences:</p>

            <ul>
              <li>"How do I reset my password?"</li>
              <li>"I forgot my login details."</li>
              <li>"What's the weather today?"</li>
            </ul>

            <p>
              Embeddings allow the AI to compare all three and see that:
            </p>

            <ul>
              <li>(1) and (2) are close → both about login issues</li>
              <li>(3) is far away → unrelated topic</li>
            </ul>

            <p>This is how AI:</p>

            <ul>
              <li>fetches relevant documents</li>
              <li>finds related support tickets</li>
              <li>improves chatbot accuracy</li>
              <li>avoids hallucinations</li>
            </ul>

            <h2 className="flex items-center gap-3">
              <span className="text-blue-600">⭐</span> Where Are Embeddings Used in Real Life?
            </h2>

            <p>You use embeddings every day, even without knowing it:</p>

            <ul>
              <li><strong>Search engines</strong> — Google uses embeddings to understand query meaning.</li>
              <li><strong>Spotify/YouTube recommendations</strong> — Finds similar songs or videos based on embeddings.</li>
              <li><strong>Customer support bots</strong> — "You may also like these help articles…"</li>
              <li><strong>AI writing tools</strong> — Find related examples or context to improve answers.</li>
              <li><strong>Fraud detection</strong> — Finds unusual patterns far from normal embedding clusters.</li>
            </ul>

            <p>Embedding-powered apps are everywhere.</p>

            <h2 className="flex items-center gap-3">
              <span className="text-blue-600">⭐</span> What Do Embeddings Look Like?
            </h2>

            <p>
              Embeddings are long lists of numbers. Typical sizes:
            </p>

            <ul>
              <li>256 dimensions</li>
              <li>768 dimensions</li>
              <li>1536 dimensions</li>
              <li>3072 dimensions</li>
            </ul>

            <p>Example snippet:</p>

            <div className="relative group">
              <pre className="bg-gray-900 text-gray-100 p-6 rounded-2xl overflow-x-auto">
                <code>{`[0.82, -0.11, 0.55, -0.77, 0.04, ... ]`}</code>
              </pre>
              <button
                onClick={() => copyToClipboard(`[0.82, -0.11, 0.55, -0.77, 0.04, ... ]`, 'example2')}
                className="absolute top-4 right-4 px-3 py-1 bg-blue-600 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity"
              >
                {copied === 'example2' ? '✓ Copied' : 'Copy'}
              </button>
            </div>

            <p>That's it — no magic, just math.</p>

            <h2 className="flex items-center gap-3">
              <span className="text-blue-600">⭐</span> How Do You Generate Embeddings?
            </h2>

            <p>Using the OpenAI API (example):</p>

            <div className="relative group">
              <pre className="bg-gray-900 text-gray-100 p-6 rounded-2xl overflow-x-auto">
                <code>{`curl https://api.openai.com/v1/embeddings \\
  -H "Authorization: Bearer $OPENAI_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "model": "text-embedding-3-small",
    "input": "This is a sentence about embeddings."
  }'`}</code>
              </pre>
              <button
                onClick={() => copyToClipboard(`curl https://api.openai.com/v1/embeddings \\
  -H "Authorization: Bearer $OPENAI_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "model": "text-embedding-3-small",
    "input": "This is a sentence about embeddings."
  }'`, 'curl')}
                className="absolute top-4 right-4 px-3 py-1 bg-blue-600 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity"
              >
                {copied === 'curl' ? '✓ Copied' : 'Copy'}
              </button>
            </div>

            <p>Or in JavaScript:</p>

            <div className="relative group">
              <pre className="bg-gray-900 text-gray-100 p-6 rounded-2xl overflow-x-auto">
                <code>{`const res = await openai.embeddings.create({
  model: "text-embedding-3-small",
  input: "This is a sentence about embeddings."
});`}</code>
              </pre>
              <button
                onClick={() => copyToClipboard(`const res = await openai.embeddings.create({
  model: "text-embedding-3-small",
  input: "This is a sentence about embeddings."
});`, 'js')}
                className="absolute top-4 right-4 px-3 py-1 bg-blue-600 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity"
              >
                {copied === 'js' ? '✓ Copied' : 'Copy'}
              </button>
            </div>

            <h2 className="flex items-center gap-3">
              <span className="text-blue-600">⭐</span> How to Think About Embeddings (The Analogy)
            </h2>

            <p>Imagine a giant 3D space.</p>

            <p>Now extend that to 1,536 dimensions.</p>

            <p>Every text you embed becomes a point in that space.</p>

            <ul>
              <li>Similar meanings → points close together</li>
              <li>Different meanings → points far apart</li>
            </ul>

            <p>It's like mapping the meaning of language into coordinates.</p>

            <h2 className="flex items-center gap-3">
              <span className="text-blue-600">⭐</span> When Should You Use Embeddings?
            </h2>

            <p>Use embeddings when you need:</p>

            <ul>
              <li><strong>Better search</strong> — Especially when keywords aren't enough.</li>
              <li><strong>RAG systems</strong> — AI agents need context retrieval.</li>
              <li><strong>Content understanding</strong> — Group or classify large datasets.</li>
              <li><strong>Data-driven insights</strong> — Detect patterns in user behavior.</li>
              <li><strong>Smarter chatbots</strong> — Ground responses in real data.</li>
            </ul>

            <p>
              If your AI app needs "understanding," embeddings are the foundation.
            </p>

            <h2 className="flex items-center gap-3">
              <span className="text-blue-600">⭐</span> When NOT to Use Embeddings
            </h2>

            <p>Avoid embeddings if:</p>

            <ul>
              <li><strong>You need structured output</strong> → use models</li>
              <li><strong>You want perfect accuracy</strong> → embeddings approximate</li>
              <li><strong>You're comparing extremely long documents</strong> → chunk them first</li>
            </ul>

            <p>Embeddings are powerful — but not magic.</p>

            <h2 className="flex items-center gap-3">
              <span className="text-blue-600">⭐</span> Final Thoughts
            </h2>

            <p>
              Embeddings are one of the most important AI concepts today. They power everything from semantic search to RAG to recommendations, and they're surprisingly simple once you understand them.
            </p>

            <p>
              If you're building an AI product or experimenting with modern tooling, learning embeddings is an instant upgrade to your skill set.
            </p>
          </article>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-br from-brand-black to-blue-600/90">
          <div className="container-custom max-w-4xl text-center text-white">
            <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4">
              Want more guides on AI and machine learning?
            </h2>
            <p className="text-xl text-gray-200 mb-8">
              I write practical explanations for developers building with AI, embeddings, and modern tools.
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
