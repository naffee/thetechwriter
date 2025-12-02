'use client';

import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function RAGVsFTPage() {
  return (
    <>
      <Navigation />
      
      <main className="min-h-screen bg-brand-neutral dark:bg-gray-900">
        {/* Hero Section */}
        <section className="pt-24 sm:pt-32 pb-12 bg-gradient-to-br from-blue-50 via-white to-cyan-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
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
                  <span className="px-4 py-1 bg-blue-500/10 dark:bg-blue-500/20 text-blue-600 dark:text-blue-400 text-sm font-semibold rounded-full">
                    Blog Post
                  </span>
                  <span className="text-gray-500 dark:text-gray-400">2025</span>
                </div>
                
                <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl text-brand-black dark:text-white mb-6">
                  RAG vs Fine-Tuning: Which One Should You Use?
                </h1>
                
                <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                  A clear, technical-but-friendly comparison for teams building AI products.
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {['RAG', 'Fine-Tuning', 'AI Strategy', 'LLMs', 'Technical Comparison', 'Technical Writing'].map((tech, index) => (
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
                  <p>Every modern AI team eventually asks the same question:</p>
                  <p className="font-semibold italic">Should we use RAG, fine-tuning, or both?</p>
                  <p>Both methods improve LLM performance — but in completely different ways. Choosing the wrong one leads to wasted tokens, poor accuracy, slow performance, and expensive infrastructure.</p>
                  <p>This guide breaks down how each approach works, what problems they solve, and how to choose the right strategy for your AI product.</p>
                </div>
              </div>

              {/* What is RAG */}
              <div className="mb-12">
                <h2 className="font-heading font-bold text-3xl text-brand-black dark:text-white mb-6">⭐ What Is RAG? (Retrieval-Augmented Generation)</h2>
                <div className="text-gray-700 dark:text-gray-300 space-y-4">
                  <p>RAG gives AI access to external knowledge by retrieving relevant documents and inserting them into the prompt.</p>
                  <p><strong>The pipeline looks like this:</strong></p>
                  <ol className="space-y-1 ml-4 list-decimal">
                    <li>Break documents into chunks</li>
                    <li>Convert them into embeddings</li>
                    <li>Store them in a vector database</li>
                    <li>At runtime: embed the query</li>
                    <li>Retrieve top-matching chunks</li>
                    <li>Feed retrieved text + question into the model</li>
                  </ol>
                  <p className="mt-4"><strong>RAG powers:</strong></p>
                  <ul className="space-y-1 ml-4">
                    <li>• chatbots</li>
                    <li>• customer support assistants</li>
                    <li>• document search</li>
                    <li>• enterprise Q&A tools</li>
                    <li>• AI copilots</li>
                    <li>• internal knowledge assistants</li>
                  </ul>
                  <ul className="space-y-2 mt-4">
                    <li className="flex items-start gap-3">
                      <span className="text-green-500 font-bold mt-0.5">✔</span>
                      <span>RAG adds knowledge</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-green-500 font-bold mt-0.5">✔</span>
                      <span>RAG reduces hallucinations</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-green-500 font-bold mt-0.5">✔</span>
                      <span>RAG updates instantly</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-green-500 font-bold mt-0.5">✔</span>
                      <span>RAG is cheap and scalable</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* What is Fine-Tuning */}
              <div className="mb-12">
                <h2 className="font-heading font-bold text-3xl text-brand-black dark:text-white mb-6">⭐ What Is Fine-Tuning?</h2>
                <div className="text-gray-700 dark:text-gray-300 space-y-4">
                  <p>Fine-tuning teaches the model new patterns, skills, and behavior by training it on example prompts and responses.</p>
                  <p className="font-semibold">It does NOT give the model new knowledge. It teaches the model how to behave.</p>
                  <p><strong>Fine-tuning is used for:</strong></p>
                  <ul className="space-y-1 ml-4">
                    <li>• consistent tone</li>
                    <li>• specific writing style</li>
                    <li>• structured output</li>
                    <li>• task specialization</li>
                    <li>• reasoning patterns</li>
                    <li>• better adherence to rules</li>
                  </ul>
                  <ul className="space-y-2 mt-4">
                    <li className="flex items-start gap-3">
                      <span className="text-green-500 font-bold mt-0.5">✔</span>
                      <span>Fine-tuning improves behavior</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-green-500 font-bold mt-0.5">✔</span>
                      <span>Fine-tuning improves formatting</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-green-500 font-bold mt-0.5">✔</span>
                      <span>Fine-tuning improves style and consistency</span>
                    </li>
                  </ul>
                  <p className="mt-4 italic text-gray-600 dark:text-gray-400">But it cannot replace RAG when you need real-time data or factual accuracy.</p>
                </div>
              </div>

              {/* Core Difference */}
              <div className="mb-12">
                <h2 className="font-heading font-bold text-3xl text-brand-black dark:text-white mb-6">⭐ The Core Difference</h2>
                <div className="text-gray-700 dark:text-gray-300 space-y-4">
                  <div className="bg-blue-50 dark:bg-blue-950/30 p-6 rounded-lg border border-blue-200 dark:border-blue-800">
                    <p className="mb-3"><strong className="text-lg text-blue-900 dark:text-blue-100">RAG = Memory</strong></p>
                    <p>The model can reference facts.</p>
                  </div>
                  <div className="bg-purple-50 dark:bg-purple-950/30 p-6 rounded-lg border border-purple-200 dark:border-purple-800">
                    <p className="mb-3"><strong className="text-lg text-purple-900 dark:text-purple-100">Fine-tuning = Skill</strong></p>
                    <p>The model learns patterns and behavior.</p>
                  </div>
                  <p className="mt-4 italic"><strong>This is the simplest and truest way to think about the difference.</strong></p>
                </div>
              </div>

              {/* When RAG */}
              <div className="mb-12">
                <h2 className="font-heading font-bold text-3xl text-brand-black dark:text-white mb-6">⭐ When RAG Is the Right Choice</h2>
                <div className="text-gray-700 dark:text-gray-300 space-y-4">
                  <p><strong>Use RAG when your product needs:</strong></p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <span className="text-green-500 font-bold mt-0.5">✔</span>
                      <span><strong>Up-to-date knowledge</strong> (e.g., product updates, docs, help centers)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-green-500 font-bold mt-0.5">✔</span>
                      <span><strong>Access to large datasets</strong> (millions of documents, PDFs, logs)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-green-500 font-bold mt-0.5">✔</span>
                      <span><strong>High factual accuracy</strong> (reduced hallucinations)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-green-500 font-bold mt-0.5">✔</span>
                      <span><strong>Enterprise-level grounding</strong> (to avoid legal/compliance risk)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-green-500 font-bold mt-0.5">✔</span>
                      <span><strong>Dynamic information</strong> (content changes daily or weekly)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-green-500 font-bold mt-0.5">✔</span>
                      <span><strong>Personalized content retrieval</strong> (user-specific history, preferences)</span>
                    </li>
                  </ul>
                  <p className="mt-4"><strong>RAG is perfect for:</strong></p>
                  <ul className="space-y-1 ml-4">
                    <li>• support bots</li>
                    <li>• knowledge assistants</li>
                    <li>• semantic search</li>
                    <li>• AI copilots</li>
                    <li>• document Q&A</li>
                    <li>• internal chat systems</li>
                    <li>• enterprise AI apps</li>
                  </ul>
                  <p className="mt-4 italic"><strong>If you need the AI to "look things up," you need RAG.</strong></p>
                </div>
              </div>

              {/* When Fine-Tuning */}
              <div className="mb-12">
                <h2 className="font-heading font-bold text-3xl text-brand-black dark:text-white mb-6">⭐ When Fine-Tuning Is the Right Choice</h2>
                <div className="text-gray-700 dark:text-gray-300 space-y-4">
                  <p><strong>Use fine-tuning when your product needs:</strong></p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <span className="text-green-500 font-bold mt-0.5">✔</span>
                      <span><strong>Consistency of output</strong> (styles, tone, structured formats)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-green-500 font-bold mt-0.5">✔</span>
                      <span><strong>A specific voice</strong> (brand tone, UX writing, content patterns)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-green-500 font-bold mt-0.5">✔</span>
                      <span><strong>Reliable JSON or schema output</strong> (assistant tools, agents, workflow systems)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-green-500 font-bold mt-0.5">✔</span>
                      <span><strong>Task specialization</strong> (e.g., classification, reasoning patterns)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-green-500 font-bold mt-0.5">✔</span>
                      <span><strong>Style adaptation</strong> (legal tone, medical tone, friendly tone)</span>
                    </li>
                  </ul>
                  <p className="mt-4"><strong>Fine-tuning is ideal for:</strong></p>
                  <ul className="space-y-1 ml-4">
                    <li>• AI writing assistants</li>
                    <li>• classification models</li>
                    <li>• multi-step workflows</li>
                    <li>• sales email generators</li>
                    <li>• creative tone/style replication</li>
                    <li>• structured data extraction</li>
                  </ul>
                  <p className="mt-4 italic"><strong>If you need the AI to "behave consistently," you need fine-tuning.</strong></p>
                </div>
              </div>

              {/* When RAG Fails */}
              <div className="mb-12">
                <h2 className="font-heading font-bold text-3xl text-brand-black dark:text-white mb-6">⭐ When RAG Fails (And Fine-Tuning Helps)</h2>
                <div className="text-gray-700 dark:text-gray-300 space-y-4">
                  <p><strong>RAG alone struggles with:</strong></p>
                  <ul className="space-y-1 ml-4">
                    <li>• following strict formats</li>
                    <li>• multi-step reasoning</li>
                    <li>• stylistic writing</li>
                    <li>• long tasks with complex structure</li>
                    <li>• tasks requiring creative adaptation</li>
                  </ul>
                  <p className="mt-4 italic"><strong>If your retrieved content is good but your output quality is inconsistent, fine-tune.</strong></p>
                </div>
              </div>

              {/* When FT Fails */}
              <div className="mb-12">
                <h2 className="font-heading font-bold text-3xl text-brand-black dark:text-white mb-6">⭐ When Fine-Tuning Fails (And RAG Helps)</h2>
                <div className="text-gray-700 dark:text-gray-300 space-y-4">
                  <p><strong>Fine-tuning cannot:</strong></p>
                  <ul className="space-y-1 ml-4">
                    <li>• add new factual knowledge</li>
                    <li>• update information quickly</li>
                    <li>• guarantee accuracy of facts</li>
                    <li>• scale to large knowledge sets</li>
                    <li>• replace search or retrieval</li>
                  </ul>
                  <p className="mt-4 italic"><strong>If the model is making up facts → RAG, not fine-tuning.</strong></p>
                </div>
              </div>

              {/* Cost Comparison */}
              <div className="mb-12">
                <h2 className="font-heading font-bold text-3xl text-brand-black dark:text-white mb-6">⭐ Cost Comparison</h2>
                <div className="text-gray-700 dark:text-gray-300 space-y-6">
                  <div>
                    <h3 className="font-bold text-lg mb-3">RAG</h3>
                    <ul className="space-y-1 ml-4">
                      <li>• Cheap to build</li>
                      <li>• Cheap to scale</li>
                      <li>• Embeddings inexpensive</li>
                      <li>• Vector DB cost depends on size</li>
                      <li>• No model retraining cost</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-3">Fine-tuning</h3>
                    <ul className="space-y-1 ml-4">
                      <li>• More expensive</li>
                      <li>• Requires recurring training</li>
                      <li>• Costs increase as dataset grows</li>
                      <li>• May require larger models</li>
                    </ul>
                  </div>
                  <p className="mt-4 italic text-lg"><strong>RAG wins for cost efficiency in most practical use cases.</strong></p>
                </div>
              </div>

              {/* Performance Comparison */}
              <div className="mb-12">
                <h2 className="font-heading font-bold text-3xl text-brand-black dark:text-white mb-6">⭐ Performance Comparison</h2>
                <div className="text-gray-700 dark:text-gray-300">
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse">
                      <thead>
                        <tr className="bg-gray-100 dark:bg-gray-700">
                          <th className="border border-gray-300 dark:border-gray-600 p-3 text-left font-bold">Category</th>
                          <th className="border border-gray-300 dark:border-gray-600 p-3 text-left font-bold">RAG</th>
                          <th className="border border-gray-300 dark:border-gray-600 p-3 text-left font-bold">Fine-Tuning</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border border-gray-300 dark:border-gray-600 p-3 font-semibold">Accuracy</td>
                          <td className="border border-gray-300 dark:border-gray-600 p-3">⭐⭐⭐⭐⭐</td>
                          <td className="border border-gray-300 dark:border-gray-600 p-3">⭐⭐⭐</td>
                        </tr>
                        <tr className="bg-gray-50 dark:bg-gray-900">
                          <td className="border border-gray-300 dark:border-gray-600 p-3 font-semibold">Consistency</td>
                          <td className="border border-gray-300 dark:border-gray-600 p-3">⭐⭐⭐</td>
                          <td className="border border-gray-300 dark:border-gray-600 p-3">⭐⭐⭐⭐⭐</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 dark:border-gray-600 p-3 font-semibold">Factual reliability</td>
                          <td className="border border-gray-300 dark:border-gray-600 p-3">⭐⭐⭐⭐⭐</td>
                          <td className="border border-gray-300 dark:border-gray-600 p-3">⭐⭐</td>
                        </tr>
                        <tr className="bg-gray-50 dark:bg-gray-900">
                          <td className="border border-gray-300 dark:border-gray-600 p-3 font-semibold">Style control</td>
                          <td className="border border-gray-300 dark:border-gray-600 p-3">⭐⭐</td>
                          <td className="border border-gray-300 dark:border-gray-600 p-3">⭐⭐⭐⭐⭐</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 dark:border-gray-600 p-3 font-semibold">Updates over time</td>
                          <td className="border border-gray-300 dark:border-gray-600 p-3">Instant</td>
                          <td className="border border-gray-300 dark:border-gray-600 p-3">Requires retraining</td>
                        </tr>
                        <tr className="bg-gray-50 dark:bg-gray-900">
                          <td className="border border-gray-300 dark:border-gray-600 p-3 font-semibold">Scalability</td>
                          <td className="border border-gray-300 dark:border-gray-600 p-3">High</td>
                          <td className="border border-gray-300 dark:border-gray-600 p-3">Medium</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>

              {/* Decision Framework */}
              <div className="mb-12">
                <h2 className="font-heading font-bold text-3xl text-brand-black dark:text-white mb-6">⭐ Which Should You Use? (Simple Decision)</h2>
                <div className="text-gray-700 dark:text-gray-300 space-y-6">
                  <div className="bg-blue-50 dark:bg-blue-950/30 p-6 rounded-lg border border-blue-200 dark:border-blue-800">
                    <p className="font-bold mb-2">Use RAG if:</p>
                    <ul className="space-y-1 ml-4">
                      <li>• your product depends on content</li>
                      <li>• answers must be grounded in facts</li>
                      <li>• you have lots of unstructured data</li>
                      <li>• information changes frequently</li>
                    </ul>
                  </div>
                  <div className="bg-purple-50 dark:bg-purple-950/30 p-6 rounded-lg border border-purple-200 dark:border-purple-800">
                    <p className="font-bold mb-2">Use Fine-Tuning if:</p>
                    <ul className="space-y-1 ml-4">
                      <li>• you need consistent formatting</li>
                      <li>• the model needs a specific style</li>
                      <li>• the task is skill-based</li>
                      <li>• the output must follow strict patterns</li>
                    </ul>
                  </div>
                  <div className="bg-green-50 dark:bg-green-950/30 p-6 rounded-lg border border-green-200 dark:border-green-800">
                    <p className="font-bold mb-2">Use Both if:</p>
                    <ul className="space-y-1 ml-4">
                      <li>• you want grounded AND well-behaved answers</li>
                      <li>• you're building a high-quality AI assistant</li>
                      <li>• you need accuracy + structure</li>
                      <li>• your users depend on reliability</li>
                    </ul>
                  </div>
                  <p className="mt-4 italic text-lg"><strong>"Mature" AI products use RAG + Fine-Tuning together.</strong></p>
                </div>
              </div>

              {/* Real-world Examples */}
              <div className="mb-12">
                <h2 className="font-heading font-bold text-3xl text-brand-black dark:text-white mb-6">⭐ Real-world examples</h2>
                <div className="text-gray-700 dark:text-gray-300 space-y-2">
                  <p><strong>Notion AI</strong> → RAG + fine-tuned writing models</p>
                  <p><strong>Slack AI</strong> → RAG for context + formatting fine-tunes</p>
                  <p><strong>GitHub Copilot</strong> → fine-tuning + code retrieval</p>
                  <p><strong>Intercom Fin</strong> → heavy RAG + safety tuning</p>
                  <p><strong>HubSpot AI</strong> → RAG for CRM data + tone tuning for emails</p>
                  <p className="mt-4 italic"><strong>This hybrid approach is now industry standard.</strong></p>
                </div>
              </div>

              {/* Final Recommendation */}
              <div className="mb-12">
                <h2 className="font-heading font-bold text-3xl text-brand-black dark:text-white mb-6">⭐ Final Recommendation</h2>
                <div className="text-gray-700 dark:text-gray-300 space-y-4">
                  <p><strong>To choose the right approach:</strong></p>
                  <div className="bg-gray-100 dark:bg-gray-700 p-6 rounded-lg">
                    <p className="font-semibold mb-4">Ask: "Do we need accurate knowledge or consistent behavior?"</p>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-3">
                        <span className="text-green-500 font-bold mt-0.5">✔</span>
                        <span><strong>If knowledge</strong> → RAG</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-green-500 font-bold mt-0.5">✔</span>
                        <span><strong>If behavior</strong> → Fine-Tuning</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-green-500 font-bold mt-0.5">✔</span>
                        <span><strong>If both matter</strong> → Hybrid approach</span>
                      </li>
                    </ul>
                  </div>
                  <p className="mt-4 italic"><strong>This decision alone can save a team months of engineering time and thousands of dollars in model cost.</strong></p>
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
