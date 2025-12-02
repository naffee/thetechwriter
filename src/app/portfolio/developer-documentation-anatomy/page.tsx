'use client';

import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function DocumentationAnatomyPage() {
  return (
    <>
      <Navigation />
      
      <main className="min-h-screen bg-brand-neutral dark:bg-gray-900">
        {/* Hero Section */}
        <section className="pt-24 sm:pt-32 pb-12 bg-gradient-to-br from-emerald-50 via-white to-teal-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              {/* Back Link */}
              <Link 
                href="/work" 
                className="inline-flex items-center gap-2 text-brand-purple hover:underline mb-6"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Back to Portfolio
              </Link>

              {/* Project Header */}
              <div className="mb-6">
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-4 py-1 bg-emerald-500/10 dark:bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-sm font-semibold rounded-full">
                    Blog Post
                  </span>
                  <span className="text-gray-500 dark:text-gray-400">2025</span>
                </div>
                
                <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl text-brand-black dark:text-white mb-6">
                  The Anatomy of Great Developer Documentation (With Real Examples)
                </h1>
                
                <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                  What separates great docs from "just documentation"? Clarity, structure, and developer empathy.
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {['Technical Writing', 'Documentation', 'Developer Experience', 'Best Practices', 'Content Strategy'].map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-white dark:bg-gray-800 text-brand-black dark:text-white text-sm font-medium rounded-lg border border-gray-200 dark:border-gray-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="py-12 bg-white dark:bg-gray-800">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto prose prose-lg dark:prose-invert prose-purple">
              
              {/* Introduction */}
              <div className="mb-12">
                <div className="text-gray-700 dark:text-gray-300 space-y-4">
                  <p>Developer documentation is one of the most important parts of any technical product. Good docs help developers build faster, integrate correctly, and avoid confusion. Bad docs drive them away.</p>
                  <p>The best documentation is simple, predictable, complete, and respectful of the reader's time.</p>
                  <p>This guide breaks down the anatomy of great developer documentation — what it includes, how it's structured, and what developers expect when they read it.</p>
                </div>
              </div>

              {/* #1 Getting Started */}
              <div className="mb-12">
                <h2 className="font-heading font-bold text-3xl text-brand-black dark:text-white mb-6">⭐ 1. Clear, Immediate "Getting Started" Instructions</h2>
                <div className="text-gray-700 dark:text-gray-300 space-y-4">
                  <p>Every great documentation site begins with:</p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-start gap-3">
                      <span className="text-green-500 font-bold mt-0.5">✔</span>
                      <span>A fast setup</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-green-500 font-bold mt-0.5">✔</span>
                      <span>A working example</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-green-500 font-bold mt-0.5">✔</span>
                      <span>A first successful API call or interaction</span>
                    </li>
                  </ul>
                  <p className="font-semibold">Developers judge your product fast. If they can get something working in the first 2–3 minutes, they trust the rest of the system.</p>
                  <p>A good "Getting Started" page includes:</p>
                  <ul className="space-y-1 ml-4">
                    <li>• prerequisites</li>
                    <li>• installation steps</li>
                    <li>• environment setup</li>
                    <li>• a copy-paste code snippet</li>
                    <li>• expected output</li>
                  </ul>
                  <p className="mt-4 italic text-gray-600 dark:text-gray-400"><strong>Why It Matters:</strong> Developers want momentum. A working "Hello World" builds confidence.</p>
                  
                  <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-950/30 rounded-lg border border-blue-200 dark:border-blue-800">
                    <p className="font-semibold text-blue-900 dark:text-blue-100 mb-3">✔ Example: Stripe "Quickstart"</p>
                    <p className="text-gray-700 dark:text-gray-300 mb-2">Stripe's Quickstart gives:</p>
                    <ul className="space-y-1 ml-4 text-gray-700 dark:text-gray-300 mb-3">
                      <li>• install command</li>
                      <li>• copy/paste code</li>
                      <li>• test API key</li>
                      <li>• expected output</li>
                    </ul>
                    <p className="text-gray-700 dark:text-gray-300 mb-2"><strong>In less than 60 seconds, developers see a successful payment request.</strong></p>
                    <p className="text-gray-700 dark:text-gray-300 italic"><strong>Why it's great:</strong> It jumps straight to a working result — no waiting, no confusion.</p>
                  </div>
                </div>
              </div>

              {/* #2 Navigation */}
              <div className="mb-12">
                <h2 className="font-heading font-bold text-3xl text-brand-black dark:text-white mb-6">⭐ 2. Clean, Consistent Navigation</h2>
                <div className="text-gray-700 dark:text-gray-300 space-y-4">
                  <p>The best docs all have the same structure:</p>
                  <ul className="space-y-1 ml-4">
                    <li>• Overview</li>
                    <li>• Getting Started</li>
                    <li>• Core Concepts</li>
                    <li>• API Reference</li>
                    <li>• Examples/Tutorials</li>
                    <li>• Guides</li>
                    <li>• SDKs</li>
                    <li>• Troubleshooting</li>
                  </ul>
                  <p className="mt-4">Consistency helps developers predict where information should be. Bad navigation = increased support tickets.</p>
                  
                  <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-950/30 rounded-lg border border-blue-200 dark:border-blue-800">
                    <p className="font-semibold text-blue-900 dark:text-blue-100 mb-3">✔ Example: Vercel Documentation</p>
                    <p className="text-gray-700 dark:text-gray-300 mb-2">Vercel's sidebar is:</p>
                    <ul className="space-y-1 ml-4 text-gray-700 dark:text-gray-300 mb-3">
                      <li>• predictable</li>
                      <li>• grouped logically</li>
                      <li>• always visible</li>
                      <li>• clearly separated by topics (Deploy, Integrations, Functions, etc.)</li>
                    </ul>
                    <p className="text-gray-700 dark:text-gray-300 italic"><strong>No surprises. No mystery sections.</strong></p>
                  </div>
                </div>
              </div>

              {/* #3 Core Concepts */}
              <div className="mb-12">
                <h2 className="font-heading font-bold text-3xl text-brand-black dark:text-white mb-6">⭐ 3. Clear Explanations of Core Concepts</h2>
                <div className="text-gray-700 dark:text-gray-300 space-y-4">
                  <p>Before throwing developers into endpoints or methods, good documentation explains the mental model behind the product.</p>
                  <p>Developers need to understand:</p>
                  <ul className="space-y-1 ml-4">
                    <li>• how data flows</li>
                    <li>• the key objects and entities</li>
                    <li>• what problems the product solves</li>
                    <li>• how authentication works</li>
                    <li>• what a "session," "workspace," or "resource" means</li>
                  </ul>
                  <p className="mt-4">This part is often called:</p>
                  <ul className="space-y-1 ml-4">
                    <li>• Concepts</li>
                    <li>• Fundamentals</li>
                    <li>• Architecture Overview</li>
                    <li>• Product Thinking</li>
                  </ul>
                  <p className="mt-4">Great example: Stripe's "Core Concepts." Stripe explains charges, customers, tokens, and payments before you ever touch an API.</p>
                  
                  <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-950/30 rounded-lg border border-blue-200 dark:border-blue-800">
                    <p className="font-semibold text-blue-900 dark:text-blue-100 mb-3">✔ Example: Supabase Auth Concepts</p>
                    <p className="text-gray-700 dark:text-gray-300 mb-2">Supabase explains:</p>
                    <ul className="space-y-1 ml-4 text-gray-700 dark:text-gray-300 mb-3">
                      <li>• JWTs</li>
                      <li>• Access tokens</li>
                      <li>• Refresh tokens</li>
                      <li>• Policies</li>
                    </ul>
                    <p className="text-gray-700 dark:text-gray-300 mb-2">Each concept has its own page, with diagrams.</p>
                    <p className="text-gray-700 dark:text-gray-300 italic"><strong>Why it's great:</strong> It builds a foundation before showing code.</p>
                  </div>
                </div>
              </div>

              {/* #4 API Reference */}
              <div className="mb-12">
                <h2 className="font-heading font-bold text-3xl text-brand-black dark:text-white mb-6">⭐ 4. A Detailed, Accurate API Reference</h2>
                <div className="text-gray-700 dark:text-gray-300 space-y-4">
                  <p>This is the heart of most developer docs.</p>
                  <p>A great API reference includes:</p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-start gap-3">
                      <span className="text-green-500 font-bold mt-0.5">✔</span>
                      <span>all endpoints</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-green-500 font-bold mt-0.5">✔</span>
                      <span>parameters</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-green-500 font-bold mt-0.5">✔</span>
                      <span>request bodies</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-green-500 font-bold mt-0.5">✔</span>
                      <span>response shapes</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-green-500 font-bold mt-0.5">✔</span>
                      <span>sample errors</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-green-500 font-bold mt-0.5">✔</span>
                      <span>clear descriptions</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-green-500 font-bold mt-0.5">✔</span>
                      <span>multiple language examples</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-green-500 font-bold mt-0.5">✔</span>
                      <span>curl + one SDK example at minimum</span>
                    </li>
                  </ul>
                  <p>The goal: Developers should be able to integrate without asking support.</p>
                  <p className="mt-4">Bonus points: Interactive API playgrounds.</p>
                  
                  <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-950/30 rounded-lg border border-blue-200 dark:border-blue-800">
                    <p className="font-semibold text-blue-900 dark:text-blue-100 mb-3">✔ Example: Twilio API Reference</p>
                    <p className="text-gray-700 dark:text-gray-300 mb-2">Twilio's API docs are the industry gold standard:</p>
                    <ul className="space-y-1 ml-4 text-gray-700 dark:text-gray-300 mb-3">
                      <li>• parameters</li>
                      <li>• responses</li>
                      <li>• error codes</li>
                      <li>• sample requests in 7 languages</li>
                      <li>• explanations under every field</li>
                    </ul>
                    <p className="text-gray-700 dark:text-gray-300 italic"><strong>Everything is consistent and instantly usable.</strong></p>
                  </div>
                </div>
              </div>

              {/* #5 Examples */}
              <div className="mb-12">
                <h2 className="font-heading font-bold text-3xl text-brand-black dark:text-white mb-6">⭐ 5. Realistic, End-to-End Examples</h2>
                <div className="text-gray-700 dark:text-gray-300 space-y-4">
                  <p>Developers don't just want references — they want to see how all the pieces fit together.</p>
                  <p>Examples should:</p>
                  <ul className="space-y-1 ml-4">
                    <li>• solve real problems</li>
                    <li>• show real data</li>
                    <li>• include working code</li>
                    <li>• demonstrate full workflows</li>
                  </ul>
                  <p className="mt-4">Examples:</p>
                  <ul className="space-y-1 ml-4">
                    <li>• "How to create a payment session"</li>
                    <li>• "How to upload a file and retrieve it later"</li>
                    <li>• "How to add AI summaries to your documents"</li>
                  </ul>
                  <p className="mt-4">Real-world examples = fewer mistakes + faster adoption.</p>
                  
                  <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-950/30 rounded-lg border border-blue-200 dark:border-blue-800">
                    <p className="font-semibold text-blue-900 dark:text-blue-100 mb-3">✔ Example: OpenAI "Embeddings Quickstart"</p>
                    <p className="text-gray-700 dark:text-gray-300 mb-2">OpenAI shows:</p>
                    <ul className="space-y-1 ml-4 text-gray-700 dark:text-gray-300 mb-3">
                      <li>• embedding a sentence</li>
                      <li>• storing vectors</li>
                      <li>• querying similarity</li>
                      <li>• returning results</li>
                    </ul>
                    <p className="text-gray-700 dark:text-gray-300 italic"><strong>It's a real workflow — not a toy example.</strong></p>
                  </div>
                </div>
              </div>

              {/* #6 Tutorials */}
              <div className="mb-12">
                <h2 className="font-heading font-bold text-3xl text-brand-black dark:text-white mb-6">⭐ 6. Clear Tutorials for Beginners</h2>
                <div className="text-gray-700 dark:text-gray-300 space-y-4">
                  <p>Tutorials are different from examples.</p>
                  <p className="font-semibold">Examples show a single workflow. Tutorials teach concepts step-by-step.</p>
                  <p>Tutorials should follow this structure:</p>
                  <ul className="space-y-1 ml-4">
                    <li>• What we're building</li>
                    <li>• Why it matters</li>
                    <li>• Prerequisites</li>
                    <li>• Steps (with code)</li>
                    <li>• Final output</li>
                    <li>• Common errors</li>
                  </ul>
                  <p className="mt-4">Beginners depend on these. They build confidence and reduce frustration.</p>
                  
                  <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-950/30 rounded-lg border border-blue-200 dark:border-blue-800">
                    <p className="font-semibold text-blue-900 dark:text-blue-100 mb-3">✔ Example: Firebase Tutorials</p>
                    <p className="text-gray-700 dark:text-gray-300 mb-2">Firebase tutorials always include:</p>
                    <ul className="space-y-1 ml-4 text-gray-700 dark:text-gray-300 mb-3">
                      <li>• prerequisites</li>
                      <li>• step-by-step setup</li>
                      <li>• code + screenshots</li>
                      <li>• expected output</li>
                    </ul>
                    <p className="text-gray-700 dark:text-gray-300 italic"><strong>A beginner can follow them without prior experience.</strong></p>
                  </div>
                </div>
              </div>

              {/* #7 Troubleshooting */}
              <div className="mb-12">
                <h2 className="font-heading font-bold text-3xl text-brand-black dark:text-white mb-6">⭐ 7. A Reliable Troubleshooting Section</h2>
                <div className="text-gray-700 dark:text-gray-300 space-y-4">
                  <p>Every good doc has a section for:</p>
                  <ul className="space-y-1 ml-4">
                    <li>• common errors</li>
                    <li>• common misunderstandings</li>
                    <li>• how to debug</li>
                    <li>• sample error messages</li>
                    <li>• possible solutions</li>
                  </ul>
                  <p className="mt-4">Developers Google errors often — this section reduces friction and support load.</p>
                  
                  <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-950/30 rounded-lg border border-blue-200 dark:border-blue-800">
                    <p className="font-semibold text-blue-900 dark:text-blue-100 mb-3">✔ Example: GitHub Actions: Troubleshooting</p>
                    <p className="text-gray-700 dark:text-gray-300 mb-2">GitHub gives common errors like:</p>
                    <ul className="space-y-1 ml-4 text-gray-700 dark:text-gray-300 mb-3">
                      <li>• "Workflow doesn't trigger"</li>
                      <li>• "Permissions denied"</li>
                      <li>• "Secrets not found"</li>
                    </ul>
                    <p className="text-gray-700 dark:text-gray-300 italic"><strong>Then explains why it happens and exactly how to fix it.</strong></p>
                  </div>
                </div>
              </div>

              {/* #8 Copy/Paste Experience */}
              <div className="mb-12">
                <h2 className="font-heading font-bold text-3xl text-brand-black dark:text-white mb-6">⭐ 8. The "Copy/paste Experience" Must Be Flawless</h2>
                <div className="text-gray-700 dark:text-gray-300 space-y-4">
                  <p>Great documentation respects developer time.</p>
                  <p>That means:</p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-3">
                      <span className="text-green-500 font-bold mt-0.5">✔</span>
                      <span>No broken code</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-green-500 font-bold mt-0.5">✔</span>
                      <span>No unused variables</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-green-500 font-bold mt-0.5">✔</span>
                      <span>No missing imports</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-green-500 font-bold mt-0.5">✔</span>
                      <span>No version mismatches</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-green-500 font-bold mt-0.5">✔</span>
                      <span>No API keys in wrong formats</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-green-500 font-bold mt-0.5">✔</span>
                      <span>No outdated instructions</span>
                    </li>
                  </ul>
                  <p className="mt-4">A single broken snippet destroys trust.</p>
                  
                  <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-950/30 rounded-lg border border-blue-200 dark:border-blue-800">
                    <p className="font-semibold text-blue-900 dark:text-blue-100 mb-3">✔ Example: Railway.app</p>
                    <p className="text-gray-700 dark:text-gray-300 mb-2">Railway's code blocks are:</p>
                    <ul className="space-y-1 ml-4 text-gray-700 dark:text-gray-300 mb-3">
                      <li>• copy-ready</li>
                      <li>• version-correct</li>
                      <li>• environment-variable-safe</li>
                      <li>• minimal but working</li>
                    </ul>
                    <p className="text-gray-700 dark:text-gray-300 italic"><strong>No missing imports. No broken commands.</strong></p>
                  </div>
                </div>
              </div>

              {/* #9 Multi-language */}
              <div className="mb-12">
                <h2 className="font-heading font-bold text-3xl text-brand-black dark:text-white mb-6">⭐ 9. Multi-language Support (When Applicable)</h2>
                <div className="text-gray-700 dark:text-gray-300 space-y-4">
                  <p>Good documentation includes examples in:</p>
                  <ul className="space-y-1 ml-4">
                    <li>• JavaScript</li>
                    <li>• Python</li>
                    <li>• cURL</li>
                  </ul>
                  <p className="mt-4">Great documentation includes:</p>
                  <ul className="space-y-1 ml-4">
                    <li>• Go</li>
                    <li>• Java</li>
                    <li>• TypeScript</li>
                    <li>• Ruby</li>
                    <li>• PHP</li>
                  </ul>
                  <p className="mt-4">This depends on the product, but multiple languages make adoption easier.</p>
                  
                  <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-950/30 rounded-lg border border-blue-200 dark:border-blue-800">
                    <p className="font-semibold text-blue-900 dark:text-blue-100 mb-3">✔ Example: Supabase</p>
                    <p className="text-gray-700 dark:text-gray-300 mb-2">Supabase shows the same action in:</p>
                    <ul className="space-y-1 ml-4 text-gray-700 dark:text-gray-300 mb-3">
                      <li>• JavaScript</li>
                      <li>• Python</li>
                      <li>• Dart</li>
                      <li>• cURL</li>
                      <li>• SQL</li>
                    </ul>
                    <p className="text-gray-700 dark:text-gray-300 italic"><strong>This gives instant relevance regardless of stack.</strong></p>
                  </div>
                </div>
              </div>

              {/* #10 Search */}
              <div className="mb-12">
                <h2 className="font-heading font-bold text-3xl text-brand-black dark:text-white mb-6">⭐ 10. Search That Actually Works</h2>
                <div className="text-gray-700 dark:text-gray-300 space-y-4">
                  <p>Bad search = developer frustration.</p>
                  <p>Great documentation sites have:</p>
                  <ul className="space-y-1 ml-4">
                    <li>• typo tolerance</li>
                    <li>• semantic search</li>
                    <li>• filter by section</li>
                    <li>• auto-suggest</li>
                    <li>• API-aware indexing</li>
                  </ul>
                  <p className="mt-4">If a developer can't find something in 3 seconds, they assume the product is poorly documented.</p>
                  
                  <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-950/30 rounded-lg border border-blue-200 dark:border-blue-800">
                    <p className="font-semibold text-blue-900 dark:text-blue-100 mb-3">✔ Example: Algolia Doc Search</p>
                    <p className="text-gray-700 dark:text-gray-300 mb-2">Algolia's own docs have search that:</p>
                    <ul className="space-y-1 ml-4 text-gray-700 dark:text-gray-300 mb-3">
                      <li>• autocompletes</li>
                      <li>• shows categories</li>
                      <li>• supports typos</li>
                      <li>• highlights exact sections</li>
                    </ul>
                    <p className="text-gray-700 dark:text-gray-300 italic"><strong>Search is so good it became a product.</strong></p>
                  </div>
                </div>
              </div>

              {/* #11 Versioning */}
              <div className="mb-12">
                <h2 className="font-heading font-bold text-3xl text-brand-black dark:text-white mb-6">⭐ 11. Versioning and Changelogs</h2>
                <div className="text-gray-700 dark:text-gray-300 space-y-4">
                  <p>Great documentation shows:</p>
                  <ul className="space-y-1 ml-4">
                    <li>• what changed</li>
                    <li>• when it changed</li>
                    <li>• what to update</li>
                    <li>• what's deprecated</li>
                  </ul>
                  <p className="mt-4">Developers need clarity when things break.</p>
                  
                  <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-950/30 rounded-lg border border-blue-200 dark:border-blue-800">
                    <p className="font-semibold text-blue-900 dark:text-blue-100 mb-3">✔ Example: Next.js Release Notes</p>
                    <p className="text-gray-700 dark:text-gray-300 mb-2">Next.js publishes clear release notes:</p>
                    <ul className="space-y-1 ml-4 text-gray-700 dark:text-gray-300 mb-3">
                      <li>• breaking changes</li>
                      <li>• new features</li>
                      <li>• migration guides</li>
                      <li>• examples</li>
                    </ul>
                    <p className="text-gray-700 dark:text-gray-300 italic"><strong>Developers never wonder "What changed?"</strong></p>
                  </div>
                </div>
              </div>

              {/* #12 Clear Writing */}
              <div className="mb-12">
                <h2 className="font-heading font-bold text-3xl text-brand-black dark:text-white mb-6">⭐ 12. Clear Writing, Free of Jargon</h2>
                <div className="text-gray-700 dark:text-gray-300 space-y-4">
                  <p>Great documentation:</p>
                  <ul className="space-y-1 ml-4">
                    <li>• avoids internal terminology</li>
                    <li>• explains acronyms</li>
                    <li>• uses short sentences</li>
                    <li>• puts the important information first</li>
                    <li>• defines terms early</li>
                    <li>• respects the reader's knowledge</li>
                  </ul>
                  <p className="mt-4">Developers want clarity, not marketing copy.</p>
                  
                  <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-950/30 rounded-lg border border-blue-200 dark:border-blue-800">
                    <p className="font-semibold text-blue-900 dark:text-blue-100 mb-3">✔ Example: Linear</p>
                    <p className="text-gray-700 dark:text-gray-300 mb-2">Linear's docs are minimal and precise.</p>
                    <p className="text-gray-700 dark:text-gray-300">They avoid all complexity unless absolutely needed.</p>
                    <p className="text-gray-700 dark:text-gray-300 italic"><strong>No fluff. No filler.</strong></p>
                  </div>
                </div>
              </div>

              {/* #13 Visuals */}
              <div className="mb-12">
                <h2 className="font-heading font-bold text-3xl text-brand-black dark:text-white mb-6">⭐ 13. Visuals When They Help</h2>
                <div className="text-gray-700 dark:text-gray-300 space-y-4">
                  <p>Use visuals for:</p>
                  <ul className="space-y-1 ml-4">
                    <li>• architecture diagrams</li>
                    <li>• workflows</li>
                    <li>• relationships between objects</li>
                    <li>• data flow</li>
                    <li>• UI explanations</li>
                  </ul>
                  <p className="mt-4">A single diagram can save a page of text.</p>
                  
                  <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-950/30 rounded-lg border border-blue-200 dark:border-blue-800">
                    <p className="font-semibold text-blue-900 dark:text-blue-100 mb-3">✔ Example: Stripe Webhooks Diagram</p>
                    <p className="text-gray-700 dark:text-gray-300 mb-2">Stripe's webhook diagram shows:</p>
                    <p className="text-gray-700 dark:text-gray-300 mb-3">event → endpoint → response → retries</p>
                    <p className="text-gray-700 dark:text-gray-300 italic"><strong>One simple visual explains an entire system.</strong></p>
                  </div>
                </div>
              </div>

              {/* #14 Tone */}
              <div className="mb-12">
                <h2 className="font-heading font-bold text-3xl text-brand-black dark:text-white mb-6">⭐ 14. Real-World Tone</h2>
                <div className="text-gray-700 dark:text-gray-300 space-y-4">
                  <p>The tone should be:</p>
                  <ul className="space-y-1 ml-4">
                    <li>• direct</li>
                    <li>• friendly</li>
                    <li>• calm</li>
                    <li>• confident</li>
                    <li>• precise</li>
                  </ul>
                  <p className="mt-4">No fluff. No hype. No "revolutionizing the future." Just clarity.</p>
                  
                  <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-950/30 rounded-lg border border-blue-200 dark:border-blue-800">
                    <p className="font-semibold text-blue-900 dark:text-blue-100 mb-3">✔ Example: DigitalOcean Tutorials</p>
                    <p className="text-gray-700 dark:text-gray-300 mb-2">Their tone is:</p>
                    <ul className="space-y-1 ml-4 text-gray-700 dark:text-gray-300 mb-3">
                      <li>• friendly</li>
                      <li>• direct</li>
                      <li>• calm</li>
                      <li>• senior-level</li>
                      <li>• practical</li>
                    </ul>
                    <p className="text-gray-700 dark:text-gray-300 italic"><strong>You trust the writer immediately.</strong></p>
                  </div>
                </div>
              </div>

              {/* Final Thoughts */}
              <div className="mb-12">
                <h2 className="font-heading font-bold text-3xl text-brand-black dark:text-white mb-6">⭐ Final Thoughts</h2>
                <div className="text-gray-700 dark:text-gray-300 space-y-4">
                  <p>Great documentation isn't just a list of endpoints — it's a full user experience.</p>
                  <p>It should help developers:</p>
                  <ul className="space-y-1 ml-4">
                    <li>• understand the product</li>
                    <li>• get started quickly</li>
                    <li>• solve real problems</li>
                    <li>• debug errors</li>
                    <li>• build confidently</li>
                  </ul>
                  <p className="mt-4"><strong>Docs are part of your product. Treat them with the same care as your features.</strong></p>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="py-16 bg-brand-neutral dark:bg-gray-900">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="font-heading font-bold text-3xl md:text-4xl text-brand-black dark:text-white mb-6">
                Want to work together?
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                I create documentation and technical content that makes complex technology simple.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Link href="/contact" className="btn-primary">
                  Get in Touch
                </Link>
                <Link href="/work" className="btn-outline">
                  View More Work
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
