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
              Designing Effective SaaS Onboarding (With Real Examples)
            </h1>

            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              How to create onboarding flows that reduce friction, increase activation, and keep users coming back.
            </p>

            <div className="flex items-center gap-6 text-sm text-gray-500 dark:text-gray-400">
              <span>SaaS & Product</span>
              <span>•</span>
              <span>11 min read</span>
              <span>•</span>
              <span>Nov 2024</span>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="py-12 bg-white dark:bg-gray-800">
          <article className="container-custom max-w-4xl prose prose-lg dark:prose-invert">
            <p className="lead">
              Great onboarding isn't about showing features. It's about getting users to value fast.
            </p>

            <p>
              Most SaaS products fail because users never reach the "aha moment." They see features, not solutions. They feel lost, not guided.
            </p>

            <p>
              Here are practical patterns used by top SaaS products (Notion, Figma, Slack) to make onboarding effective.
            </p>

            <h2 className="flex items-center gap-3">
              <span className="text-green-600">⭐</span> 1. Show Value Before Features
            </h2>

            <p>
              Most products do this wrong: feature tours → then users try to find value.
            </p>

            <p>
              <strong>Better approach:</strong> Let users experience value immediately.
            </p>

            <p><strong>Example:</strong> Figma's onboarding doesn't explain tools—it lets you draw on a blank canvas immediately. You discover tools as you need them.</p>

            <p><strong>How to implement:</strong></p>
            <ul>
              <li>Skip the 10-minute tutorial</li>
              <li>Show the core value in 30 seconds</li>
              <li>Help them create their first "win" in 2 minutes</li>
              <li>Then teach tools as they go</li>
            </ul>

            <h2 className="flex items-center gap-3">
              <span className="text-green-600">⭐</span> 2. Progressive Disclosure (Don't Show Everything)
            </h2>

            <p>
              New users feel overwhelmed when confronted with 50 features at once.
            </p>

            <p>
              <strong>Solution:</strong> Show only what they need, when they need it.
            </p>

            <p><strong>Example:</strong></p>
            <ul>
              <li><strong>Day 1:</strong> Create a project, add teammates</li>
              <li><strong>Day 3:</strong> Learn automations</li>
              <li><strong>Day 7:</strong> Advanced API options</li>
            </ul>

            <p>Each layer reveals when the user is ready.</p>

            <h2 className="flex items-center gap-3">
              <span className="text-green-600">⭐</span> 3. Guided Setup with Clear Goals
            </h2>

            <p>
              Users get stuck when they don't know what to do next.
            </p>

            <p>
              <strong>Better:</strong> A checklist that gives them direction.
            </p>

            <p><strong>Real Example (from Slack):</strong></p>
            <ul>
              <li>✓ Create workspace</li>
              <li>✓ Invite your team</li>
              <li>✓ Create first channel</li>
              <li>✓ Send first message</li>
            </ul>

            <p>Each step is small, achievable, and builds momentum.</p>

            <h2 className="flex items-center gap-3">
              <span className="text-green-600">⭐</span> 4. Reduce Friction at Key Moments
            </h2>

            <p>
              <strong>Top friction points:</strong>
            </p>
            <ul>
              <li>Signup forms (ask for less)</li>
              <li>First action (make it easy)</li>
              <li>Inviting teammates (lower barrier)</li>
              <li>Billing (show value before asking for credit card)</li>
            </ul>

            <p>
              <strong>Best practice:</strong> Let users experience 80% of value before hitting paywall.
            </p>

            <h2 className="flex items-center gap-3">
              <span className="text-green-600">⭐</span> 5. Contextual Help (Not a Separate Tutorial)
            </h2>

            <p>
              Users don't read help docs. They get help when stuck.
            </p>

            <p>
              <strong>Example:</strong> Hover over a button → see a small tip. Click a "?" icon → get specific help for that feature.
            </p>

            <p>Not a 5-minute video tour. Help where they need it.</p>

            <h2 className="flex items-center gap-3">
              <span className="text-green-600">⭐</span> 6. Measure the Right Metrics
            </h2>

            <p>
              <strong>Common mistake:</strong> Tracking "tutorial completion" (meaningless).
            </p>

            <p>
              <strong>What actually matters:</strong>
            </p>
            <ul>
              <li><strong>Time to first value:</strong> How long until they feel success?</li>
              <li><strong>Activation rate:</strong> % who complete core workflow in first 7 days</li>
              <li><strong>Drop-off points:</strong> Where do users leave?</li>
              <li><strong>Day 7 retention:</strong> Are they coming back?</li>
            </ul>

            <h2 className="flex items-center gap-3">
              <span className="text-green-600">⭐</span> 7. Use "Aha Moment" Events
            </h2>

            <p>
              For Figma: Creating your first shape.
              For Notion: Creating your first database.
              For Slack: Sending your first message.
            </p>

            <p>
              <strong>Identify YOUR aha moment, then make it the center of onboarding.</strong>
            </p>

            <p>Everything else is supporting that moment.</p>

            <h2 className="flex items-center gap-3">
              <span className="text-green-600">⭐</span> 8. Leverage Social Proof Early
            </h2>

            <p>
              <strong>Example flows:</strong>
            </p>
            <ul>
              <li>Show who's already using the product</li>
              <li>Display successful examples from Day 1</li>
              <li>Let them see teammates joining immediately</li>
            </ul>

            <p>Seeing others succeed builds confidence.</p>

            <h2 className="flex items-center gap-3">
              <span className="text-green-600">⭐</span> 9. Make Inviting Teammates Frictionless
            </h2>

            <p>
              Single-player products die. Multi-player products stick.
            </p>

            <p>
              <strong>Ideal flow:</strong>
            </p>
            <ul>
              <li>User creates account</li>
              <li>First action: invite teammate (not after 10 steps)</li>
              <li>Teammate joins → both see value together</li>
            </ul>

            <h2 className="flex items-center gap-3">
              <span className="text-green-600">⭐</span> 10. Keep the First Week Email Strategy Simple
            </h2>

            <p>
              Don't send 10 emails.
            </p>

            <p>
              <strong>Better approach:</strong>
            </p>
            <ul>
              <li><strong>Day 1:</strong> Welcome + 1 quick tip</li>
              <li><strong>Day 3:</strong> "Stuck?" support message</li>
              <li><strong>Day 7:</strong> "Here's what power users do"</li>
            </ul>

            <p>Quality over quantity. Helpful, not spammy.</p>

            <h2 className="flex items-center gap-3">
              <span className="text-green-600">⭐</span> Final Thoughts
            </h2>

            <p>
              Bad onboarding: Feature tour → hope they figure it out.
            </p>

            <p>
              Good onboarding: Value in 30 seconds → progressive learning → continuous support.
            </p>

            <p>
              <strong>The best onboarding feels invisible—users don't realize they're being guided.</strong>
            </p>

            <p>
              They just get results, fast.
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
