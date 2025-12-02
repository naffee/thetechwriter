'use client';

import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function AIProductFailuresPage() {
  return (
    <>
      <Navigation />
      
      <main className="min-h-screen bg-brand-neutral dark:bg-gray-900">
        {/* Hero Section */}
        <section className="pt-24 sm:pt-32 pb-12 bg-gradient-to-br from-red-50 via-white to-orange-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
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
                  <span className="px-4 py-1 bg-red-500/10 dark:bg-red-500/20 text-red-600 dark:text-red-400 text-sm font-semibold rounded-full">
                    Blog Post
                  </span>
                  <span className="text-gray-500 dark:text-gray-400">2025</span>
                </div>
                
                <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl text-brand-black dark:text-white mb-6">
                  10 Reasons AI Products Fail (And How Teams Can Fix Them)
                </h1>
                
                <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                  A brutally honest, industry-level breakdown of the real mistakes AI teams make.
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {['AI Products', 'Product Strategy', 'Best Practices', 'Common Pitfalls', 'Lessons Learned', 'Technical Writing'].map((tech, index) => (
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
                  <p>Most AI products don't fail because of the model. They fail because of everything around the model: data issues, poor retrieval, unclear UX, bad prompting, missing evaluation, and wrong expectations.</p>
                  <p>Here are the 10 most common reasons AI products fail — and what modern teams do differently.</p>
                </div>
              </div>

              {/* #1 Messy Data */}
              <div className="mb-12">
                <h2 className="font-heading font-bold text-3xl text-brand-black dark:text-white mb-6">⭐ 1. The data is messy, outdated, or unstructured</h2>
                <div className="text-gray-700 dark:text-gray-300 space-y-4">
                  <p><strong>AI only performs as well as the data you feed it.</strong></p>
                  <p>Common problems:</p>
                  <ul className="space-y-1 ml-4">
                    <li>• duplicated documents</li>
                    <li>• inconsistent formatting</li>
                    <li>• outdated content</li>
                    <li>• random PDFs</li>
                    <li>• multiple conflicting versions</li>
                  </ul>
                  <p className="mt-4 font-semibold">Fix:</p>
                  <ul className="space-y-1 ml-4">
                    <li>• Clean data pipelines</li>
                    <li>• Chunk documents properly</li>
                    <li>• Add metadata</li>
                    <li>• Version content</li>
                  </ul>
                </div>
              </div>

              {/* #2 Poor Retrieval */}
              <div className="mb-12">
                <h2 className="font-heading font-bold text-3xl text-brand-black dark:text-white mb-6">⭐ 2. Retrieval is poor (RAG fails silently)</h2>
                <div className="text-gray-700 dark:text-gray-300 space-y-4">
                  <p><strong>Most "AI wrong answers" are actually bad retrieval, not bad generation.</strong></p>
                  <p>Symptoms:</p>
                  <ul className="space-y-1 ml-4">
                    <li>• irrelevant chunks</li>
                    <li>• too much noise</li>
                    <li>• inconsistent similarity search</li>
                    <li>• no reranking</li>
                    <li>• no filters</li>
                  </ul>
                  <p className="mt-4 font-semibold">Fix:</p>
                  <ul className="space-y-1 ml-4">
                    <li>• Use rerankers</li>
                    <li>• Tune chunk sizes</li>
                    <li>• Store rich metadata</li>
                    <li>• Use hybrid search (BM25 + vector)</li>
                  </ul>
                </div>
              </div>

              {/* #3 Unclear Prompts */}
              <div className="mb-12">
                <h2 className="font-heading font-bold text-3xl text-brand-black dark:text-white mb-6">⭐ 3. Prompts are unclear, inconsistent, or too vague</h2>
                <div className="text-gray-700 dark:text-gray-300 space-y-4">
                  <p className="font-semibold italic">"If the prompt is vague, the output will be chaotic."</p>
                  <p>Common mistakes:</p>
                  <ul className="space-y-1 ml-4">
                    <li>• no system prompt</li>
                    <li>• no instructions</li>
                    <li>• no constraints</li>
                    <li>• no examples</li>
                    <li>• too much data stuffed in</li>
                  </ul>
                  <p className="mt-4 font-semibold">Fix:</p>
                  <ul className="space-y-1 ml-4">
                    <li>• Strong system instructions</li>
                    <li>• Few-shot examples</li>
                    <li>• Role + goal structure</li>
                    <li>• Clear formatting rules</li>
                  </ul>
                </div>
              </div>

              {/* #4 Hidden Information UI */}
              <div className="mb-12">
                <h2 className="font-heading font-bold text-3xl text-brand-black dark:text-white mb-6">⭐ 4. The UI hides important information</h2>
                <div className="text-gray-700 dark:text-gray-300 space-y-4">
                  <p><strong>Users need context, not just answers.</strong></p>
                  <p>Bad UI patterns:</p>
                  <ul className="space-y-1 ml-4">
                    <li>• no citations</li>
                    <li>• no listed sources</li>
                    <li>• no retrieved snippets</li>
                    <li>• no retry button</li>
                    <li>• no option to refine</li>
                  </ul>
                  <p className="mt-4 font-semibold">Fix:</p>
                  <ul className="space-y-1 ml-4">
                    <li>• Show sources</li>
                    <li>• Show retrieved docs</li>
                    <li>• Allow follow-up prompts</li>
                    <li>• Let users correct or refine</li>
                  </ul>
                </div>
              </div>

              {/* #5 No Validation */}
              <div className="mb-12">
                <h2 className="font-heading font-bold text-3xl text-brand-black dark:text-white mb-6">⭐ 5. The model is doing everything — no validation layer</h2>
                <div className="text-gray-700 dark:text-gray-300 space-y-4">
                  <p><strong>Without validation:</strong></p>
                  <ul className="space-y-1 ml-4">
                    <li>• JSON breaks</li>
                    <li>• instructions are ignored</li>
                    <li>• hallucinations appear</li>
                    <li>• formatting fails</li>
                  </ul>
                  <p className="mt-4 font-semibold">Fix:</p>
                  <p>Add post-processing:</p>
                  <ul className="space-y-1 ml-4">
                    <li>• JSON validators</li>
                    <li>• "LLM-as-a-judge" checks</li>
                    <li>• retry prompts</li>
                    <li>• output formatting layers</li>
                  </ul>
                </div>
              </div>

              {/* #6 Wrong Model */}
              <div className="mb-12">
                <h2 className="font-heading font-bold text-3xl text-brand-black dark:text-white mb-6">⭐ 6. Teams rely on the wrong model for the task</h2>
                <div className="text-gray-700 dark:text-gray-300 space-y-4">
                  <p><strong>Not every job needs GPT-4.</strong></p>
                  <p>Bad choices lead to:</p>
                  <ul className="space-y-1 ml-4">
                    <li>• unnecessary cost</li>
                    <li>• slow latency</li>
                    <li>• unpredictable behavior</li>
                  </ul>
                  <p className="mt-4 font-semibold">Fix:</p>
                  <p>Use the right model:</p>
                  <ul className="space-y-1 ml-4">
                    <li>• small models for classification</li>
                    <li>• medium models for summaries</li>
                    <li>• large models for complex workflow reasoning</li>
                    <li>• local models for cost control</li>
                  </ul>
                </div>
              </div>

              {/* #7 No Feedback Loop */}
              <div className="mb-12">
                <h2 className="font-heading font-bold text-3xl text-brand-black dark:text-white mb-6">⭐ 7. No feedback loop (no evaluation, no improvement)</h2>
                <div className="text-gray-700 dark:text-gray-300 space-y-4">
                  <p><strong>Most teams launch → pray → never measure anything.</strong></p>
                  <p>Without evals, you cannot:</p>
                  <ul className="space-y-1 ml-4">
                    <li>• detect regressions</li>
                    <li>• measure accuracy</li>
                    <li>• compare models</li>
                    <li>• improve retrieval</li>
                  </ul>
                  <p className="mt-4 font-semibold">Fix:</p>
                  <p>Add evaluation pipelines:</p>
                  <ul className="space-y-1 ml-4">
                    <li>• golden test sets</li>
                    <li>• auto-scoring</li>
                    <li>• human review loop</li>
                    <li>• retrieval quality metrics</li>
                  </ul>
                </div>
              </div>

              {/* #8 Wrong Expectations */}
              <div className="mb-12">
                <h2 className="font-heading font-bold text-3xl text-brand-black dark:text-white mb-6">⭐ 8. Wrong expectations ("AI will understand everything")</h2>
                <div className="text-gray-700 dark:text-gray-300 space-y-4">
                  <p><strong>LLMs are not:</strong></p>
                  <ul className="space-y-1 ml-4">
                    <li>• databases</li>
                    <li>• search engines</li>
                    <li>• knowledge graphs</li>
                    <li>• magic</li>
                  </ul>
                  <p className="mt-4">Misaligned expectations lead to poor product decisions.</p>
                  <p className="font-semibold">Fix:</p>
                  <ul className="space-y-1 ml-4">
                    <li>• Define clear boundaries</li>
                    <li>• Specify what the AI can't do</li>
                    <li>• Set correct user expectations</li>
                  </ul>
                </div>
              </div>

              {/* #9 No Personalization */}
              <div className="mb-12">
                <h2 className="font-heading font-bold text-3xl text-brand-black dark:text-white mb-6">⭐ 9. No personalization layer</h2>
                <div className="text-gray-700 dark:text-gray-300 space-y-4">
                  <p><strong>Generic answers → generic product → low retention.</strong></p>
                  <p className="font-semibold">Fix:</p>
                  <p>Personalize based on:</p>
                  <ul className="space-y-1 ml-4">
                    <li>• user history</li>
                    <li>• previous queries</li>
                    <li>• preferences</li>
                    <li>• context</li>
                    <li>• role (admin, student, developer, etc.)</li>
                  </ul>
                  <p className="mt-4 italic"><strong>Personalization turns AI from "chatbot" into "assistant."</strong></p>
                </div>
              </div>

              {/* #10 No User Testing */}
              <div className="mb-12">
                <h2 className="font-heading font-bold text-3xl text-brand-black dark:text-white mb-6">⭐ 10. The team never tests with real users</h2>
                <div className="text-gray-700 dark:text-gray-300 space-y-4">
                  <p><strong>AI breaks in unexpected ways:</strong></p>
                  <ul className="space-y-1 ml-4">
                    <li>• ambiguous questions</li>
                    <li>• typos</li>
                    <li>• slang</li>
                    <li>• missing context</li>
                    <li>• weird phrasing</li>
                  </ul>
                  <p className="mt-4"><strong>Real users expose real gaps.</strong></p>
                  <p className="font-semibold">Fix:</p>
                  <ul className="space-y-1 ml-4">
                    <li>• Watch users interact</li>
                    <li>• Collect confusion points</li>
                    <li>• Add clarifying questions</li>
                    <li>• Improve retrieval sources</li>
                  </ul>
                </div>
              </div>

              {/* Final Thoughts */}
              <div className="mb-12">
                <h2 className="font-heading font-bold text-3xl text-brand-black dark:text-white mb-6">⭐ Final Thoughts</h2>
                <div className="text-gray-700 dark:text-gray-300 space-y-4">
                  <p><strong>AI products fail not because models are bad — but because the system around the model is incomplete.</strong></p>
                  <p>An AI product is:</p>
                  <ul className="space-y-1 ml-4">
                    <li>• data</li>
                    <li>• retrieval</li>
                    <li>• prompting</li>
                    <li>• evaluation</li>
                    <li>• UX</li>
                    <li>• user behavior</li>
                    <li>• product strategy</li>
                  </ul>
                  <p className="mt-4"><strong>Teams that understand these layers build products that actually deliver value.</strong></p>
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
