'use client';

import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function RAGGuidePage() {
  return (
    <>
      <Navigation />
      
      <main className="min-h-screen bg-brand-neutral dark:bg-gray-900">
        {/* Hero Section */}
        <section className="pt-24 sm:pt-32 pb-12 bg-gradient-to-br from-cyan-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
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
                  <span className="px-4 py-1 bg-cyan-500/10 dark:bg-cyan-500/20 text-cyan-600 dark:text-cyan-400 text-sm font-semibold rounded-full">
                    Blog Post
                  </span>
                  <span className="text-gray-500 dark:text-gray-400">2025</span>
                </div>
                
                <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl text-brand-black dark:text-white mb-6">
                  Retrieval-Augmented Generation (RAG): A Practical Guide for Modern AI Products
                </h1>
                
                <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                  A clear, developer-friendly explanation of what RAG is, why it matters, and how teams are using it to build smarter AI systems in 2025.
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {['RAG', 'LLMs', 'Vector Databases', 'Embeddings', 'AI Architecture'].map((tech, index) => (
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
              
              {/* What Is RAG */}
              <div className="mb-12">
                <h2 className="font-heading font-bold text-3xl text-brand-black dark:text-white mb-6">⭐ What Is RAG (In Plain English)?</h2>
                <div className="text-gray-700 dark:text-gray-300 space-y-4">
                  <p>LLMs don't automatically know about:</p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-brand-purple flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>your company docs</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-brand-purple flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>your database</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-brand-purple flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>your website</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-brand-purple flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>your user files</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-brand-purple flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>your policies</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-brand-purple flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>any recent information</span>
                    </li>
                  </ul>
                  <p className="font-semibold">RAG solves this by giving models "external memory."</p>
                  <p><strong>RAG = retrieval system + generative AI</strong></p>
                  <p>The model looks up relevant information before generating a response. Instead of relying only on the model's internal knowledge, RAG adds a retrieval step so it can reference ground truth data.</p>
                </div>
              </div>

              {/* Why RAG Works */}
              <div className="mb-12">
                <h2 className="font-heading font-bold text-3xl text-brand-black dark:text-white mb-6">⭐ Why RAG Works Better Than "Just the Model"</h2>
                <div className="text-gray-700 dark:text-gray-300 space-y-4">
                  <p><strong>Models alone can:</strong></p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-start gap-3">
                      <span className="text-red-500 font-bold mt-0.5">❌</span>
                      <span>forget things</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-red-500 font-bold mt-0.5">❌</span>
                      <span>hallucinate facts</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-red-500 font-bold mt-0.5">❌</span>
                      <span>make confident but wrong statements</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-red-500 font-bold mt-0.5">❌</span>
                      <span>answer inconsistently</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-red-500 font-bold mt-0.5">❌</span>
                      <span>lack domain-specific knowledge</span>
                    </li>
                  </ul>
                  <p><strong>With RAG, you get:</strong></p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-3">
                      <span className="text-green-500 font-bold mt-0.5">✔</span>
                      <span>more accurate answers</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-green-500 font-bold mt-0.5">✔</span>
                      <span>up-to-date information</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-green-500 font-bold mt-0.5">✔</span>
                      <span>explainable outputs</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-green-500 font-bold mt-0.5">✔</span>
                      <span>reduced hallucinations</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-green-500 font-bold mt-0.5">✔</span>
                      <span>domain-specific expertise</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-green-500 font-bold mt-0.5">✔</span>
                      <span>safer and more reliable AI behavior</span>
                    </li>
                  </ul>
                  <p className="mt-6">This is why nearly every AI product built today uses some form of RAG.</p>
                </div>
              </div>

              {/* How RAG Works */}
              <div className="mb-12">
                <h2 className="font-heading font-bold text-3xl text-brand-black dark:text-white mb-6">⭐ How RAG Works (The Simple Version)</h2>
                <div className="text-gray-700 dark:text-gray-300 space-y-4">
                  <p>Here's the process in 4 clean steps:</p>
                  <ol className="space-y-4">
                    <li className="flex gap-4">
                      <span className="font-bold text-brand-purple flex-shrink-0">1.</span>
                      <div>
                        <strong>Break your data into chunks</strong>
                        <p className="text-gray-600 dark:text-gray-400">Docs, FAQs, PDFs, articles, files → broken into small sections.</p>
                      </div>
                    </li>
                    <li className="flex gap-4">
                      <span className="font-bold text-brand-purple flex-shrink-0">2.</span>
                      <div>
                        <strong>Convert those chunks into embeddings</strong>
                        <p className="text-gray-600 dark:text-gray-400">Each chunk becomes a numeric vector (a meaning-based representation).</p>
                      </div>
                    </li>
                    <li className="flex gap-4">
                      <span className="font-bold text-brand-purple flex-shrink-0">3.</span>
                      <div>
                        <strong>Store them in a vector database</strong>
                        <p className="text-gray-600 dark:text-gray-400">Chroma, Pinecone, Weaviate, FAISS — these store embeddings for fast similarity search.</p>
                      </div>
                    </li>
                    <li className="flex gap-4">
                      <span className="font-bold text-brand-purple flex-shrink-0">4.</span>
                      <div>
                        <strong>When a user asks a question:</strong>
                        <ul className="text-gray-600 dark:text-gray-400 space-y-1 mt-2">
                          <li>• The system embeds the question</li>
                          <li>• Finds the top matching chunks</li>
                          <li>• Sends those chunks + the user question to the LLM</li>
                          <li>• The LLM uses retrieved info to answer accurately</li>
                        </ul>
                      </div>
                    </li>
                  </ol>
                  <p className="text-lg font-semibold mt-6">That's RAG.</p>
                </div>
              </div>

              {/* Common Use Cases */}
              <div className="mb-12">
                <h2 className="font-heading font-bold text-3xl text-brand-black dark:text-white mb-6">⭐ Common RAG Use Cases Developers Build Today</h2>
                <div className="text-gray-700 dark:text-gray-300 space-y-6">
                  <div>
                    <h3 className="font-bold text-lg mb-2">1. Customer Support Assistants</h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-2">Retrieve answers from:</p>
                    <ul className="space-y-1 ml-4">
                      <li>• help centers</li>
                      <li>• product documentation</li>
                      <li>• changelogs</li>
                      <li>• troubleshooting guides</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">2. Internal Knowledge Assistants</h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-2">Teams use RAG to query:</p>
                    <ul className="space-y-1 ml-4">
                      <li>• company policy</li>
                      <li>• HR docs</li>
                      <li>• onboarding materials</li>
                      <li>• engineering docs</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">3. Product Search & Semantic Search</h3>
                    <p className="text-gray-600 dark:text-gray-400">Better than keyword search — users can ask natural questions.</p>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">4. AI-Powered Chatbots & Agents</h3>
                    <p className="text-gray-600 dark:text-gray-400">Agents need accurate facts to avoid hallucinating. RAG gives them grounding.</p>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">5. Document Question Answering</h3>
                    <p className="text-gray-600 dark:text-gray-400">Upload a PDF → Ask questions → AI finds the right section. Perfect for contracts, reports, legal documents, and research papers.</p>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">6. Personalized User Experiences</h3>
                    <p className="text-gray-600 dark:text-gray-400">AI tools that reference user history, previous conversations, preferences, and stored notes.</p>
                  </div>
                </div>
              </div>

              {/* Best Practices */}
              <div className="mb-12">
                <h2 className="font-heading font-bold text-3xl text-brand-black dark:text-white mb-6">⭐ RAG Best Practices</h2>
                <div className="text-gray-700 dark:text-gray-300 space-y-4">
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <span className="text-green-500 font-bold mt-0.5">✔</span>
                      <div>
                        <strong>Chunk your data smartly</strong>
                        <p className="text-gray-600 dark:text-gray-400 text-sm">Too big → irrelevant. Too small → lacks context.</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-green-500 font-bold mt-0.5">✔</span>
                      <div>
                        <strong>Use metadata to improve retrieval</strong>
                        <p className="text-gray-600 dark:text-gray-400 text-sm">E.g., tags, dates, categories.</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-green-500 font-bold mt-0.5">✔</span>
                      <div>
                        <strong>Don't send all retrieved chunks</strong>
                        <p className="text-gray-600 dark:text-gray-400 text-sm">Always rerank → only send the best.</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-green-500 font-bold mt-0.5">✔</span>
                      <div>
                        <strong>Add system prompts that force citations</strong>
                        <p className="text-gray-600 dark:text-gray-400 text-sm">"Cite the document section where you found the answer."</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-green-500 font-bold mt-0.5">✔</span>
                      <div>
                        <strong>Evaluate regularly</strong>
                        <p className="text-gray-600 dark:text-gray-400 text-sm">RAG performance drops if data or embeddings change.</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Final Thoughts */}
              <div className="mb-12">
                <h2 className="font-heading font-bold text-3xl text-brand-black dark:text-white mb-6">⭐ Final Thoughts</h2>
                <div className="text-gray-700 dark:text-gray-300 space-y-4">
                  <p>RAG is the backbone of modern AI development. It turns generic LLMs into domain-specific, knowledge-grounded, and trustworthy systems.</p>
                  <p>If you're building an AI assistant, chat interface, knowledge tool, documentation helper, semantic search engine, or product support chatbot — you are almost certainly using RAG.</p>
                  <p>And as AI continues to evolve, RAG will remain one of the most important building blocks in real-world AI applications.</p>
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
