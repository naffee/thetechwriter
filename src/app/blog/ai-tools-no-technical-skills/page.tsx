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
        <section className="pt-24 sm:pt-32 pb-12 bg-gradient-to-br from-pink-50 via-white to-rose-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
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

            <div className="inline-block px-4 py-2 bg-pink-500/10 dark:bg-pink-500/20 rounded-full mb-6">
              <span className="text-pink-600 dark:text-pink-400 text-sm font-medium">Everyday User</span>
            </div>

            <h1 className="font-heading font-bold text-4xl sm:text-5xl lg:text-6xl text-brand-black dark:text-white mb-6 leading-tight">
              AI Tools Anyone Can Use to Save Time (No Technical Skills Needed)
            </h1>

            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              These simple AI tools can help you write, plan, organize, learn, and work faster — even if you're not a "tech person."
            </p>

            <div className="flex flex-wrap items-center gap-6 text-sm text-gray-600 dark:text-gray-400">
              <span>The Tech Writer</span>
              <span>•</span>
              <span>Nov 18, 2024</span>
              <span>•</span>
              <span>10 min read</span>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-12 bg-white dark:bg-gray-800">
          <article className="container-custom max-w-4xl prose prose-lg dark:prose-invert prose-headings:font-heading prose-headings:font-bold prose-p:text-gray-700 dark:prose-p:text-gray-300">
            
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              AI isn't just for developers or engineers. There are dozens of tools anyone can use to save hours every week. Whether you're a student, a professional, a business owner, or someone just trying to stay organized — these AI tools can make life easier without requiring a single line of code.
            </p>

            {/* Tool 1 */}
            <h2 className="flex items-center gap-3 text-3xl mt-12 mb-6">
              <span className="text-pink-600">⭐</span> ChatGPT — Your Everyday Thinking Partner
            </h2>

            <p><strong>Best for:</strong> writing, learning, planning, summarizing.</p>

            <p><strong>What it can do:</strong></p>
            <ul>
              <li>Write emails</li>
              <li>Summarize documents</li>
              <li>Explain things simply</li>
              <li>Brainstorm ideas</li>
              <li>Help plan your week</li>
              <li>Draft messages</li>
            </ul>

            <p>It's like having a personal assistant available 24/7.</p>

            {/* Tool 2 */}
            <h2 className="flex items-center gap-3 text-3xl mt-12 mb-6">
              <span className="text-pink-600">⭐</span> Canva Magic Studio — Instant Design Help
            </h2>

            <p><strong>Best for:</strong> graphics, posters, presentations.</p>

            <p><strong>Canva's AI features can:</strong></p>
            <ul>
              <li>Remove backgrounds</li>
              <li>Generate designs</li>
              <li>Create presentation slides</li>
              <li>Turn text descriptions into images</li>
              <li>Improve your layout automatically</li>
            </ul>

            <p>Perfect for people who "aren't good at design."</p>

            {/* Tool 3 */}
            <h2 className="flex items-center gap-3 text-3xl mt-12 mb-6">
              <span className="text-pink-600">⭐</span> Grammarly — Fix Your Writing Automatically
            </h2>

            <p><strong>Best for:</strong> students, professionals, job applicants.</p>

            <p><strong>It helps you:</strong></p>
            <ul>
              <li>Correct grammar</li>
              <li>Simplify your writing</li>
              <li>Adjust tone (formal, friendly, confident)</li>
              <li>Avoid awkward sentences</li>
            </ul>

            <p>It works directly inside Gmail, Word, Google Docs, and social media.</p>

            {/* Tool 4 */}
            <h2 className="flex items-center gap-3 text-3xl mt-12 mb-6">
              <span className="text-pink-600">⭐</span> Notion AI — Organize Your Life Instantly
            </h2>

            <p><strong>Best for:</strong> productivity, note-taking, planning.</p>

            <p><strong>Notion AI can:</strong></p>
            <ul>
              <li>Create summaries of long notes</li>
              <li>Brainstorm ideas</li>
              <li>Generate task lists</li>
              <li>Rewrite rough drafts</li>
              <li>Help plan projects</li>
            </ul>

            <p>It turns messy notes into neat, structured pages.</p>

            {/* Tool 5 */}
            <h2 className="flex items-center gap-3 text-3xl mt-12 mb-6">
              <span className="text-pink-600">⭐</span> Google Gemini — AI Inside Your Google Workspace
            </h2>

            <p><strong>Best for:</strong> students, teams, researchers.</p>

            <p><strong>Gemini works inside:</strong></p>
            <ul>
              <li>Google Docs</li>
              <li>Google Sheets</li>
              <li>Gmail</li>
              <li>Google Slides</li>
            </ul>

            <p><strong>You can ask it to:</strong></p>
            <ul>
              <li>Summarize emails</li>
              <li>Generate slide content</li>
              <li>Analyze spreadsheets</li>
              <li>Rewrite text</li>
              <li>Find data in your docs</li>
            </ul>

            <p>Think of it as "Google supercharged."</p>

            {/* Tool 6 */}
            <h2 className="flex items-center gap-3 text-3xl mt-12 mb-6">
              <span className="text-pink-600">⭐</span> Otter.ai — Automatic Meeting Notes
            </h2>

            <p><strong>Best for:</strong> meetings, interviews, online classes.</p>

            <p><strong>Otter can:</strong></p>
            <ul>
              <li>Transcribe conversations</li>
              <li>Create bullet-point summaries</li>
              <li>Identify speakers</li>
              <li>Highlight key topics</li>
              <li>Integrate with Zoom and Google Meet</li>
            </ul>

            <p>If you hate taking notes — this is perfect.</p>

            {/* Tool 7 */}
            <h2 className="flex items-center gap-3 text-3xl mt-12 mb-6">
              <span className="text-pink-600">⭐</span> Perplexity — The Better Google Search
            </h2>

            <p><strong>Best for:</strong> research, learning, quick answers.</p>

            <p><strong>Perplexity gives:</strong></p>
            <ul>
              <li>Clearer answers</li>
              <li>Sources + citations</li>
              <li>Explanations</li>
              <li>Summaries</li>
            </ul>

            <p>It's like Google + ChatGPT + Wikipedia in one.</p>

            {/* Tool 8 */}
            <h2 className="flex items-center gap-3 text-3xl mt-12 mb-6">
              <span className="text-pink-600">⭐</span> Microsoft Copilot — Built Into Windows
            </h2>

            <p><strong>Best for:</strong> Windows users, everyday tasks.</p>

            <p><strong>Copilot can:</strong></p>
            <ul>
              <li>Answer questions</li>
              <li>Summarize files</li>
              <li>Rewrite text</li>
              <li>Help with Excel formulas</li>
              <li>Analyze documents</li>
            </ul>

            <p>And it's available right on your desktop.</p>

            {/* Tool 9 */}
            <h2 className="flex items-center gap-3 text-3xl mt-12 mb-6">
              <span className="text-pink-600">⭐</span> Adobe Express — AI Design for Non-Designers
            </h2>

            <p><strong>Best for:</strong> posters, flyers, ads, videos.</p>

            <p><strong>Features include:</strong></p>
            <ul>
              <li>AI-generated images</li>
              <li>AI background removal</li>
              <li>Instant video editing</li>
              <li>Text-to-template features</li>
            </ul>

            <p>It's Canva's biggest competitor — simple, visual, and easy.</p>

            {/* Tool 10 */}
            <h2 className="flex items-center gap-3 text-3xl mt-12 mb-6">
              <span className="text-pink-600">⭐</span> Duolingo Max — Learn Languages Faster With AI
            </h2>

            <p><strong>Best for:</strong> students, travelers, language learners.</p>

            <p><strong>AI can:</strong></p>
            <ul>
              <li>Explain your mistakes</li>
              <li>Roleplay conversation practice</li>
              <li>Personalize lessons</li>
              <li>Give immediate feedback</li>
            </ul>

            <p>The fastest way to learn a new language.</p>

            {/* Bonus Tools */}
            <h2 className="flex items-center gap-3 text-3xl mt-12 mb-6">
              <span className="text-pink-600">⭐</span> Bonus Tools Worth Exploring
            </h2>

            <p><strong>Krisp AI</strong> — remove background noise from calls</p>
            <p><strong>TLDV</strong> — meeting summaries</p>
            <p><strong>Beautiful.ai</strong> — auto-designed presentations</p>
            <p><strong>Sora</strong> (coming soon) — create video from text</p>
            <p><strong>Readwise AI</strong> — summarize books + articles</p>

            {/* Final Thoughts */}
            <h2 className="flex items-center gap-3 text-3xl mt-12 mb-6">
              <span className="text-pink-600">⭐</span> Final Thoughts
            </h2>

            <p>AI doesn't have to be complicated. These tools help you:</p>
            <ul>
              <li>Work faster</li>
              <li>Stay organized</li>
              <li>Write better</li>
              <li>Learn easier</li>
              <li>Reduce stress</li>
              <li>Save time</li>
            </ul>

            <p>No coding. No setup. No technical knowledge required.</p>

            <p>Just practical tools that make everyday life easier.</p>

          </article>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-br from-brand-black to-pink-600/90">
          <div className="container-custom max-w-4xl text-center text-white">
            <h2 className="font-heading font-bold text-3xl sm:text-4xl mb-6">
              Ready to save time with AI?
            </h2>
            <p className="text-lg text-gray-100 mb-8 leading-relaxed">
              Start with one tool today and explore how it fits into your workflow.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/blog"
                className="px-8 py-4 bg-white text-brand-black font-semibold rounded-2xl hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                ← Back to Blog
              </Link>
              <a
                href="/#contact"
                className="px-8 py-4 border-2 border-white text-white font-semibold rounded-2xl hover:bg-white/10 transition-all duration-300"
              >
                Get in Touch →
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
