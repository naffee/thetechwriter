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
        <section className="pt-24 sm:pt-32 pb-12 bg-gradient-to-br from-green-50 via-white to-emerald-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
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

            <div className="inline-block px-4 py-2 bg-green-500/10 dark:bg-green-500/20 rounded-full mb-6">
              <span className="text-green-600 dark:text-green-400 text-sm font-medium">SaaS & Product</span>
            </div>

            <h1 className="font-heading font-bold text-4xl sm:text-5xl md:text-6xl text-brand-black dark:text-white mb-6">
              5 Examples of Perfect Onboarding Flows (And Why They Work)
            </h1>

            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              Great onboarding isn't about teaching users everything — it's about helping them win faster.
            </p>

            <div className="flex items-center gap-6 text-sm text-gray-500 dark:text-gray-400">
              <span>SaaS & Product</span>
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
              Most SaaS onboarding fails because it overwhelms users, explains too much, or asks them to make decisions they're not ready for.
            </p>

            <p>Great onboarding has one job:</p>

            <blockquote>
              <p>Help the user experience value as quickly as possible.</p>
            </blockquote>

            <p>
              Here are 5 real onboarding flows that do this brilliantly — and what every SaaS team can learn from them.
            </p>

            <h2 className="flex items-center gap-3">
              <span className="text-green-600">⭐</span> 1. Notion — "Create Your First Page"
            </h2>

            <p><strong>Why it works:</strong></p>

            <p>
              Notion avoids the temptation to explain all its complex features. Instead, it focuses on a single first win:
            </p>

            <blockquote>
              <p>➡️ Create your first page.</p>
            </blockquote>

            <p>
              No long tutorial. No questions. No gating. No confusion.
            </p>

            <p><strong>Smart design choices:</strong></p>

            <ul>
              <li>Clean welcome screen</li>
              <li>A single button ("Create a Page")</li>
              <li>Simple templates to reduce cognitive load</li>
              <li>Zero forced steps</li>
            </ul>

            <p><strong>The principle:</strong> Onboard around one simple action, not your entire feature set.</p>

            <h2 className="flex items-center gap-3">
              <span className="text-green-600">⭐</span> 2. Canva — Visual First, Account Later
            </h2>

            <p><strong>Why it works:</strong></p>

            <p>
              Canva breaks a major SaaS rule — it lets you start designing before you even sign up.
            </p>

            <p>This removes friction and gives users an instant dopamine hit:</p>

            <blockquote>
              <p>➡️ "Wow, I made something!"</p>
            </blockquote>

            <p><strong>Smart design choices:</strong></p>

            <ul>
              <li>Pre-filled templates</li>
              <li>Drag-and-drop onboarding</li>
              <li>"Try before registering"</li>
              <li>Gentle nudges to save your work</li>
            </ul>

            <p><strong>The principle:</strong> Let users experience success BEFORE asking for commitment.</p>

            <h2 className="flex items-center gap-3">
              <span className="text-green-600">⭐</span> 3. Slack — Invite One Teammate
            </h2>

            <p>
              Slack doesn't ask you to set up channels, apps, or workflows. It knows the product isn't valuable until other people join.
            </p>

            <p>So it focuses onboarding on a single step:</p>

            <blockquote>
              <p>➡️ Invite one teammate.</p>
            </blockquote>

            <p>Once a second person arrives, Slack becomes:</p>

            <ul>
              <li>a chat tool</li>
              <li>a notification hub</li>
              <li>a workspace</li>
              <li>and… addictive</li>
            </ul>

            <p><strong>Smart design choices:</strong></p>

            <ul>
              <li>Simple welcome messages</li>
              <li>Immediate onboarding checklist</li>
              <li>Clear CTA: "Invite teammates"</li>
            </ul>

            <p><strong>The principle:</strong> Align onboarding with the product's activation trigger.</p>

            <h2 className="flex items-center gap-3">
              <span className="text-green-600">⭐</span> 4. Duolingo — Micro-Steps + Immediate Reward
            </h2>

            <p>
              Even though Duolingo is B2C, its onboarding is a masterclass.
            </p>

            <p>It drops you straight into a lesson — no explanations — and gives you:</p>

            <ul>
              <li>sound effects</li>
              <li>animations</li>
              <li>progress bars</li>
            </ul>

            <p>Every tap feels like progress.</p>

            <p><strong>Smart design choices:</strong></p>

            <ul>
              <li>No long tutorial</li>
              <li>Immediate interaction</li>
              <li>Quick wins every few seconds</li>
              <li>Clear progress indicators</li>
            </ul>

            <p><strong>The principle:</strong> Break onboarding into tiny, rewarding micro-steps.</p>

            <h2 className="flex items-center gap-3">
              <span className="text-green-600">⭐</span> 5. Figma — "Playground First, Tools Later"
            </h2>

            <p>
              Figma's onboarding is genius because it doesn't even try to explain the UI. Instead, it opens a sandbox file where you can experiment.
            </p>

            <p>You learn by doing:</p>

            <ul>
              <li>dragging shapes</li>
              <li>resizing frames</li>
              <li>using colors</li>
              <li>editing text</li>
            </ul>

            <p><strong>Smart design choices:</strong></p>

            <ul>
              <li>Interactive tutorial file</li>
              <li>Animated hints</li>
              <li>Hands-on experience</li>
              <li>No pressure</li>
            </ul>

            <p><strong>The principle:</strong> Make onboarding interactive, not instructional.</p>

            <h2 className="flex items-center gap-3">
              <span className="text-green-600">⭐</span> What All Great Onboarding Flows Have in Common
            </h2>

            <p>Across all five examples, we see the same patterns:</p>

            <ul>
              <li><strong>1. A single clear first action</strong> — No tooltips forest.</li>
              <li><strong>2. Zero overwhelm</strong> — Teach the minimum viable knowledge.</li>
              <li><strong>3. Progressive disclosure</strong> — Show more features only when needed.</li>
              <li><strong>4. Early success</strong> — Users must feel progress in the first 30–60 seconds.</li>
              <li><strong>5. Contextual help</strong> — Not generic tutorials.</li>
            </ul>

            <h2 className="flex items-center gap-3">
              <span className="text-green-600">⭐</span> How to Apply These Lessons to Your SaaS Product
            </h2>

            <p><strong>Use this checklist:</strong></p>

            <ul>
              <li>What is the first win for a new user?</li>
              <li>Can they do it in under 60 seconds?</li>
              <li>What steps can be removed?</li>
              <li>What can be shown later?</li>
              <li>Can we reduce the onboarding to one screen?</li>
              <li>Can we give users a sandbox, templates, or pre-filled examples?</li>
              <li>Are we asking for information too early?</li>
            </ul>

            <p>
              <strong>Onboarding is a funnel — every extra step reduces conversion.</strong>
            </p>

            <h2 className="flex items-center gap-3">
              <span className="text-green-600">⭐</span> Final Thoughts
            </h2>

            <p>
              Onboarding is your product's first impression. If users are confused, overwhelmed, or bored, they won't come back.
            </p>

            <p>
              But with these five lessons from top SaaS products, you can design an onboarding experience that is:
            </p>

            <ul>
              <li>✔ simple</li>
              <li>✔ delightful</li>
              <li>✔ fast</li>
              <li>✔ and leads users to success immediately</li>
            </ul>

            <p>
              <strong>Clarity is not optional — it's a feature.</strong>
            </p>
          </article>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-br from-brand-black to-green-600/90">
          <div className="container-custom max-w-4xl text-center text-white">
            <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4">
              Want more SaaS & Product insights?
            </h2>
            <p className="text-xl text-gray-200 mb-8">
              I write practical guides for product teams, founders, and UX designers building better SaaS products.
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
