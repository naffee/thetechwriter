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
              Top Prompt Engineering Patterns That Actually Work (With Examples)
            </h1>

            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              Simple, practical patterns you can use to get better results from any AI model.
            </p>

            <div className="flex items-center gap-6 text-sm text-gray-500 dark:text-gray-400">
              <span>AI & Machine Learning</span>
              <span>•</span>
              <span>12 min read</span>
              <span>•</span>
              <span>Nov 2024</span>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="py-12 bg-white dark:bg-gray-800">
          <article className="container-custom max-w-4xl prose prose-lg dark:prose-invert">
            <p className="lead">
              Prompt engineering isn't about "magic tricks." It's about sending clear instructions so the model knows exactly what you want — in a format it understands.
            </p>

            <p>
              Here are some battle-tested prompt engineering patterns that consistently produce better outputs across OpenAI, Claude, Gemini, and other LLMs.
            </p>

            <h2 className="flex items-center gap-3">
              <span className="text-blue-600">⭐</span> 1. Role + Goal Prompting (The Most Reliable Pattern)
            </h2>

            <p>Give the model a role, then tell it the objective.</p>

            <p><strong>Pattern:</strong></p>

            <div className="relative group">
              <pre className="bg-gray-900 text-gray-100 p-6 rounded-2xl overflow-x-auto">
                <code>{`You are a [ROLE].
Your goal is to [OUTCOME].`}</code>
              </pre>
              <button
                onClick={() => copyToClipboard(`You are a [ROLE].\nYour goal is to [OUTCOME].`, 'pattern1')}
                className="absolute top-4 right-4 px-3 py-1 bg-blue-600 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity"
              >
                {copied === 'pattern1' ? '✓ Copied' : 'Copy'}
              </button>
            </div>

            <p><strong>Example:</strong></p>

            <blockquote>
              <p>
                You are a senior technical writer.<br />
                Your goal is to explain API keys in a simple, friendly way using everyday examples.
              </p>
            </blockquote>

            <p><strong>Why it works:</strong> LLMs respond better when you anchor their perspective.</p>

            <h2 className="flex items-center gap-3">
              <span className="text-blue-600">⭐</span> 2. "Few-Shot" Prompting (Give Examples to Get Examples)
            </h2>

            <p>Show the model exactly what you want.</p>

            <p><strong>Pattern:</strong></p>

            <div className="relative group">
              <pre className="bg-gray-900 text-gray-100 p-6 rounded-2xl overflow-x-auto">
                <code>{`Here are examples:
Input: X → Output: Y
Input: A → Output: B

Now generate:
Input: Z →`}</code>
              </pre>
              <button
                onClick={() => copyToClipboard(`Here are examples:
Input: X → Output: Y
Input: A → Output: B

Now generate:
Input: Z →`, 'pattern2')}
                className="absolute top-4 right-4 px-3 py-1 bg-blue-600 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity"
              >
                {copied === 'pattern2' ? '✓ Copied' : 'Copy'}
              </button>
            </div>

            <p><strong>Example:</strong></p>

            <blockquote>
              <p>
                Example:<br />
                Topic: Time Blocking<br />
                Summary: A productivity method that divides your day into scheduled chunks.<br />
                <br />
                Topic: Digital Decluttering<br />
                Summary: Removing unused apps, files, and notifications to reduce mental load.<br />
                <br />
                Now generate:<br />
                Topic: Habit Stacking →
              </p>
            </blockquote>

            <p><strong>Why it works:</strong> LLMs mimic the pattern + structure of your examples.</p>

            <h2 className="flex items-center gap-3">
              <span className="text-blue-600">⭐</span> 3. Chain-of-Thought Prompting ("Think Step by Step")
            </h2>

            <p>Ask the model to think before answering.</p>

            <p><strong>Pattern:</strong></p>

            <div className="relative group">
              <pre className="bg-gray-900 text-gray-100 p-6 rounded-2xl overflow-x-auto">
                <code>{`Think step by step before giving the final answer.`}</code>
              </pre>
              <button
                onClick={() => copyToClipboard(`Think step by step before giving the final answer.`, 'pattern3')}
                className="absolute top-4 right-4 px-3 py-1 bg-blue-600 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity"
              >
                {copied === 'pattern3' ? '✓ Copied' : 'Copy'}
              </button>
            </div>

            <p><strong>Example:</strong></p>

            <blockquote>
              <p>
                Explain how to design a simple database schema.<br />
                Think step by step before giving the final answer.
              </p>
            </blockquote>

            <p><strong>Why it works:</strong> LLMs reason better when guided to slow down.</p>

            <h2 className="flex items-center gap-3">
              <span className="text-blue-600">⭐</span> 4. Structure-First Prompting
            </h2>

            <p>Tell the model the exact structure you want.</p>

            <p><strong>Pattern:</strong></p>

            <div className="relative group">
              <pre className="bg-gray-900 text-gray-100 p-6 rounded-2xl overflow-x-auto">
                <code>{`Provide your answer using this format:
1. Title
2. Summary
3. Example
4. Best Practices`}</code>
              </pre>
              <button
                onClick={() => copyToClipboard(`Provide your answer using this format:
1. Title
2. Summary
3. Example
4. Best Practices`, 'pattern4')}
                className="absolute top-4 right-4 px-3 py-1 bg-blue-600 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity"
              >
                {copied === 'pattern4' ? '✓ Copied' : 'Copy'}
              </button>
            </div>

            <p><strong>Example:</strong></p>

            <blockquote>
              <p>
                Explain JSON Web Tokens using this format:<br />
                1. What it is<br />
                2. When to use it<br />
                3. Simple analogy<br />
                4. Example code snippet
              </p>
            </blockquote>

            <p><strong>Why it works:</strong> Models produce more predictable output and fewer hallucinations.</p>

            <h2 className="flex items-center gap-3">
              <span className="text-blue-600">⭐</span> 5. "Refine This" Prompting (Iterative Improvement)
            </h2>

            <p>You don't have to get it right on the first try.</p>

            <p><strong>Pattern:</strong></p>

            <div className="relative group">
              <pre className="bg-gray-900 text-gray-100 p-6 rounded-2xl overflow-x-auto">
                <code>{`Here is my draft. Rewrite it to be clearer and more concise.

Or:

Improve this paragraph while keeping the tone friendly.`}</code>
              </pre>
              <button
                onClick={() => copyToClipboard(`Here is my draft. Rewrite it to be clearer and more concise.

Or:

Improve this paragraph while keeping the tone friendly.`, 'pattern5')}
                className="absolute top-4 right-4 px-3 py-1 bg-blue-600 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity"
              >
                {copied === 'pattern5' ? '✓ Copied' : 'Copy'}
              </button>
            </div>

            <p><strong>Why it works:</strong> You're collaborating with the model instead of treating prompts as one-shot commands.</p>

            <h2 className="flex items-center gap-3">
              <span className="text-blue-600">⭐</span> 6. Delimiters (Prevent Confusion in Long Prompts)
            </h2>

            <p>Use separators to organize input.</p>

            <p><strong>Pattern:</strong></p>

            <div className="relative group">
              <pre className="bg-gray-900 text-gray-100 p-6 rounded-2xl overflow-x-auto">
                <code>{`Text: <text goes here>
Instructions: <instructions here>
Output Format: <your format here>`}</code>
              </pre>
              <button
                onClick={() => copyToClipboard(`Text: <text goes here>\nInstructions: <instructions here>\nOutput Format: <your format here>`, 'pattern6')}
                className="absolute top-4 right-4 px-3 py-1 bg-blue-600 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity"
              >
                {copied === 'pattern6' ? '✓ Copied' : 'Copy'}
              </button>
            </div>

            <p><strong>Use any delimiters:</strong></p>

            <ul>
              <li>triple quotes """</li>
              <li>XML tags &lt;start&gt; &lt;end&gt;</li>
              <li>Markdown fences</li>
            </ul>

            <p><strong>Example:</strong></p>

            <blockquote>
              <p>
                Input Article:<br />
                """<br />
                AI models learn patterns from large datasets...<br />
                """<br />
                <br />
                Rewrite the article in a simpler tone for beginners.
              </p>
            </blockquote>

            <p><strong>Why it works:</strong> It reduces ambiguity.</p>

            <h2 className="flex items-center gap-3">
              <span className="text-blue-600">⭐</span> 7. "Act as a Validator" Prompting (Catching Errors)
            </h2>

            <p>Useful when you want the model to check correctness, not generate.</p>

            <p><strong>Pattern:</strong></p>

            <div className="relative group">
              <pre className="bg-gray-900 text-gray-100 p-6 rounded-2xl overflow-x-auto">
                <code>{`Act as a code validator. Identify issues in the following:
<CODE>`}</code>
              </pre>
              <button
                onClick={() => copyToClipboard(`Act as a code validator. Identify issues in the following:\n<CODE>`, 'pattern7')}
                className="absolute top-4 right-4 px-3 py-1 bg-blue-600 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity"
              >
                {copied === 'pattern7' ? '✓ Copied' : 'Copy'}
              </button>
            </div>

            <p><strong>Example:</strong></p>

            <blockquote>
              <p>
                Act as a JavaScript validator.<br />
                Find syntax errors in:<br />
                const name = "Nina";<br />
                console.log(name))
              </p>
            </blockquote>

            <p><strong>Why it works:</strong> LLMs are good at evaluating when given a strict role.</p>

            <h2 className="flex items-center gap-3">
              <span className="text-blue-600">⭐</span> 8. Output Constraints (Format Control)
            </h2>

            <p>Tell the model exactly what the output must look like.</p>

            <p><strong>Pattern:</strong></p>

            <div className="relative group">
              <pre className="bg-gray-900 text-gray-100 p-6 rounded-2xl overflow-x-auto">
                <code>{`Your output must be:
- under 200 words
- include 3 bullet points
- contain no adjectives
- formatted in JSON only`}</code>
              </pre>
              <button
                onClick={() => copyToClipboard(`Your output must be:
- under 200 words
- include 3 bullet points
- contain no adjectives
- formatted in JSON only`, 'pattern8')}
                className="absolute top-4 right-4 px-3 py-1 bg-blue-600 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity"
              >
                {copied === 'pattern8' ? '✓ Copied' : 'Copy'}
              </button>
            </div>

            <p><strong>Example:</strong></p>

            <blockquote>
              <p>
                Summarize this document in:<br />
                - Less than 100 words<br />
                - With 3 bullet points<br />
                - Formal tone
              </p>
            </blockquote>

            <p><strong>Why it works:</strong> Models perform better with constraints than with open-ended prompts.</p>

            <h2 className="flex items-center gap-3">
              <span className="text-blue-600">⭐</span> 9. "Ask for Alternatives" Pattern
            </h2>

            <p>Get multiple versions to choose from.</p>

            <p><strong>Pattern:</strong></p>

            <div className="relative group">
              <pre className="bg-gray-900 text-gray-100 p-6 rounded-2xl overflow-x-auto">
                <code>{`Give me 3 variations of this:
<text>`}</code>
              </pre>
              <button
                onClick={() => copyToClipboard(`Give me 3 variations of this:\n<text>`, 'pattern9')}
                className="absolute top-4 right-4 px-3 py-1 bg-blue-600 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity"
              >
                {copied === 'pattern9' ? '✓ Copied' : 'Copy'}
              </button>
            </div>

            <p><strong>Example:</strong></p>

            <blockquote>
              <p>Generate 3 onboarding messages for a new SaaS product.</p>
            </blockquote>

            <p><strong>Why it works:</strong> You can pick or combine the best version.</p>

            <h2 className="flex items-center gap-3">
              <span className="text-blue-600">⭐</span> 10. "Break It Down" Prompting (Explain Like I'm New)
            </h2>

            <p>Perfect for technical content.</p>

            <p><strong>Pattern:</strong></p>

            <div className="relative group">
              <pre className="bg-gray-900 text-gray-100 p-6 rounded-2xl overflow-x-auto">
                <code>{`Explain this concept as if I'm a beginner.
Break it down into simple pieces with examples.`}</code>
              </pre>
              <button
                onClick={() => copyToClipboard(`Explain this concept as if I'm a beginner.\nBreak it down into simple pieces with examples.`, 'pattern10')}
                className="absolute top-4 right-4 px-3 py-1 bg-blue-600 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity"
              >
                {copied === 'pattern10' ? '✓ Copied' : 'Copy'}
              </button>
            </div>

            <p><strong>Example:</strong></p>

            <blockquote>
              <p>
                Explain embeddings to a beginner using simple analogies.<br />
                Break it down into 3 parts.
              </p>
            </blockquote>

            <p><strong>Why it works:</strong> LLMs follow your teaching style.</p>

            <h2 className="flex items-center gap-3">
              <span className="text-blue-600">⭐</span> Final Thoughts
            </h2>

            <p>Good prompt engineering isn't complicated. It's just clear communication + structured instructions.</p>

            <p>The real secret?</p>

            <p><strong>Don't write prompts. Write instructions.</strong></p>

            <p>
              Use these patterns regularly and you'll get more consistent, predictable, and high-quality outputs — no hacks required.
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
