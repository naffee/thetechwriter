'use client';

import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function AIProductsArchitecturePage() {
  return (
    <>
      <Navigation />
      
      <main className="min-h-screen bg-brand-neutral dark:bg-gray-900">
        {/* Hero Section */}
        <section className="pt-24 sm:pt-32 pb-12 bg-gradient-to-br from-purple-50 via-white to-pink-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
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
                  <span className="px-4 py-1 bg-purple-500/10 dark:bg-purple-500/20 text-purple-600 dark:text-purple-400 text-sm font-semibold rounded-full">
                    Blog Post
                  </span>
                  <span className="text-gray-500 dark:text-gray-400">2025</span>
                </div>
                
                <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl text-brand-black dark:text-white mb-6">
                  How Modern AI Products Are Built: A Behind-the-Scenes Breakdown
                </h1>
                
                <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                  From raw data to retrieval systems to LLMs — here's how AI products really work in 2025.
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {['AI Architecture', 'LLMs', 'RAG', 'Vector Databases', 'System Design', 'Technical Writing'].map((tech, index) => (
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
                  <p>AI products may look simple on the surface ("Ask a question → get an answer"), but behind that interface is a complex system made up of dozens of moving parts.</p>
                  <p>In this guide, we'll break down the real architecture modern AI companies use — in a clear, plain-English way that anyone on a product or engineering team can understand.</p>
                  <p>Whether you're building an AI feature or just want to understand how today's tools work, this is your behind-the-scenes look.</p>
                </div>
              </div>

              {/* #1 Data Foundation */}
              <div className="mb-12">
                <h2 className="font-heading font-bold text-3xl text-brand-black dark:text-white mb-6">⭐ 1. It Starts With Data — Not Models</h2>
                <div className="text-gray-700 dark:text-gray-300 space-y-4">
                  <p className="font-semibold">Most people think AI starts with the model. It doesn't.</p>
                  <p>Real AI products begin with data:</p>
                  <ul className="space-y-1 ml-4">
                    <li>• help center articles</li>
                    <li>• product documentation</li>
                    <li>• database records</li>
                    <li>• chat transcripts</li>
                    <li>• user files</li>
                    <li>• internal knowledge bases</li>
                    <li>• policies & guidelines</li>
                    <li>• logs</li>
                    <li>• product metadata</li>
                  </ul>
                  <p className="mt-4">Teams clean and organize this information before anything else happens.</p>
                  <p><strong>Because:</strong> LLMs are smart, but without the right data, they can't be accurate. This is why companies invest heavily in data pipelines.</p>
                </div>
              </div>

              {/* #2 Embeddings */}
              <div className="mb-12">
                <h2 className="font-heading font-bold text-3xl text-brand-black dark:text-white mb-6">⭐ 2. Data Is Converted Into Embeddings</h2>
                <div className="text-gray-700 dark:text-gray-300 space-y-4">
                  <p>Raw text isn't useful to a model as-is.</p>
                  <p>So AI products convert text into embeddings — numerical representations of meaning.</p>
                  <p>Each document, chunk, or paragraph becomes a vector like:</p>
                  <p className="font-mono text-sm bg-gray-100 dark:bg-gray-900 p-3 rounded">[0.82, -0.11, 0.55, ...]</p>
                  <p>This allows the system to compare meaning mathematically.</p>
                  <p>Embeddings power:</p>
                  <ul className="space-y-1 ml-4">
                    <li>• semantic search</li>
                    <li>• classification</li>
                    <li>• deduplication</li>
                    <li>• clustering</li>
                    <li>• retrieval for RAG</li>
                  </ul>
                  <p className="mt-4 italic"><strong>Embeddings = the "GPS coordinates" of your data.</strong></p>
                </div>
              </div>

              {/* #3 Vector Database */}
              <div className="mb-12">
                <h2 className="font-heading font-bold text-3xl text-brand-black dark:text-white mb-6">⭐ 3. Embeddings Are Stored in a Vector Database</h2>
                <div className="text-gray-700 dark:text-gray-300 space-y-4">
                  <p>Once your content is embedded, AI teams store it in a vector database such as:</p>
                  <ul className="space-y-1 ml-4">
                    <li>• Pinecone</li>
                    <li>• Chroma</li>
                    <li>• Weaviate</li>
                    <li>• Qdrant</li>
                  </ul>
                  <p className="mt-4">This database allows fast similarity search — meaning the system can find the pieces of text most related to any user query.</p>
                  <p><strong>Without a vector database, your AI product cannot retrieve relevant information reliably.</strong></p>
                </div>
              </div>

              {/* #4 Retrieval */}
              <div className="mb-12">
                <h2 className="font-heading font-bold text-3xl text-brand-black dark:text-white mb-6">⭐ 4. When a User Asks a Question, the System Runs Retrieval</h2>
                <div className="text-gray-700 dark:text-gray-300 space-y-4">
                  <p><strong>Retrieval is the "lookup" step.</strong></p>
                  <p className="font-semibold">Example:</p>
                  <p className="ml-4">User asks: "How do I reset my password?"</p>
                  <p className="mt-4">The system:</p>
                  <ul className="space-y-1 ml-4">
                    <li>• embeds the question</li>
                    <li>• looks for the most similar content in your vector DB</li>
                    <li>• retrieves the top matching chunks</li>
                    <li>• prepares these chunks for the LLM</li>
                  </ul>
                  <p className="mt-4">This retrieval step is the backbone of RAG (Retrieval-Augmented Generation).</p>
                </div>
              </div>

              {/* #5 RAG */}
              <div className="mb-12">
                <h2 className="font-heading font-bold text-3xl text-brand-black dark:text-white mb-6">⭐ 5. RAG Combines Retrieved Data + Model Intelligence</h2>
                <div className="text-gray-700 dark:text-gray-300 space-y-4">
                  <p><strong>RAG (Retrieval-Augmented Generation) is used in 90% of AI products today.</strong></p>
                  <p>Why?</p>
                  <p className="font-semibold">Because LLMs cannot remember your product's details.</p>
                  <p>They don't know:</p>
                  <ul className="space-y-1 ml-4">
                    <li>• your features</li>
                    <li>• your settings</li>
                    <li>• your policies</li>
                    <li>• your workflows</li>
                    <li>• your UI</li>
                  </ul>
                  <p className="mt-4">RAG fixes this by injecting retrieved snippets directly into the prompt.</p>
                  <p>The LLM then answers based on your actual data, not its internal guesses.</p>
                  <ul className="space-y-2 mt-4">
                    <li className="font-semibold text-green-600 dark:text-green-400">RAG = accuracy</li>
                    <li className="font-semibold text-green-600 dark:text-green-400">RAG = grounded answers</li>
                    <li className="font-semibold text-green-600 dark:text-green-400">RAG = reduced hallucinations</li>
                  </ul>
                  <p className="mt-4"><strong>This is why RAG is the modern standard.</strong></p>
                </div>
              </div>

              {/* #6 Prompt Layer */}
              <div className="mb-12">
                <h2 className="font-heading font-bold text-3xl text-brand-black dark:text-white mb-6">⭐ 6. The Prompt Layer Makes or Breaks Quality</h2>
                <div className="text-gray-700 dark:text-gray-300 space-y-4">
                  <p>Before sending the data to the LLM, the system constructs a prompt that includes:</p>
                  <ul className="space-y-1 ml-4">
                    <li>• system instructions</li>
                    <li>• retrieved text</li>
                    <li>• user query</li>
                    <li>• formatting rules</li>
                    <li>• safety rules</li>
                    <li>• style requirements</li>
                    <li>• reasoning guidelines</li>
                  </ul>
                  <p className="mt-4">A great prompt pipeline includes:</p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-3">
                      <span className="text-green-500 font-bold mt-0.5">✔</span>
                      <span>strong system prompts</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-green-500 font-bold mt-0.5">✔</span>
                      <span>few-shot examples</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-green-500 font-bold mt-0.5">✔</span>
                      <span>guardrails</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-green-500 font-bold mt-0.5">✔</span>
                      <span>structured output formats (JSON)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-green-500 font-bold mt-0.5">✔</span>
                      <span>reasoning instructions</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-green-500 font-bold mt-0.5">✔</span>
                      <span>citation requirements</span>
                    </li>
                  </ul>
                  <p className="mt-4"><strong>This layer is critical — it translates the product's needs into the LLM's language.</strong></p>
                </div>
              </div>

              {/* #7 LLM Generation */}
              <div className="mb-12">
                <h2 className="font-heading font-bold text-3xl text-brand-black dark:text-white mb-6">⭐ 7. The LLM Generates a Response (GPT, Claude, Gemini, etc.)</h2>
                <div className="text-gray-700 dark:text-gray-300 space-y-4">
                  <p>Finally, the LLM generates an answer based on:</p>
                  <ul className="space-y-1 ml-4">
                    <li>• the retrieved data</li>
                    <li>• the prompt</li>
                    <li>• its own reasoning</li>
                  </ul>
                  <p className="mt-4">Popular models:</p>
                  <ul className="space-y-1 ml-4">
                    <li>• GPT-4.1</li>
                    <li>• GPT-4o</li>
                    <li>• Claude 3.5 Sonnet</li>
                    <li>• Claude 3.5 Haiku</li>
                    <li>• Gemini 1.5 Pro</li>
                    <li>• Mistral Large</li>
                  </ul>
                  <p className="mt-4">Teams choose models based on:</p>
                  <ul className="space-y-1 ml-4">
                    <li>• accuracy</li>
                    <li>• cost</li>
                    <li>• speed</li>
                    <li>• context window</li>
                    <li>• safety</li>
                    <li>• reasoning capabilities</li>
                  </ul>
                  <p className="mt-4">Many companies use model multiplexing (choosing a model dynamically based on task complexity).</p>
                </div>
              </div>

              {/* #8 Validation */}
              <div className="mb-12">
                <h2 className="font-heading font-bold text-3xl text-brand-black dark:text-white mb-6">⭐ 8. The Response Is Validated and Post-Processed</h2>
                <div className="text-gray-700 dark:text-gray-300 space-y-4">
                  <p>AI output often needs cleaning:</p>
                  <ul className="space-y-1 ml-4">
                    <li>• JSON validation</li>
                    <li>• hallucination detection</li>
                    <li>• citation checks</li>
                    <li>• relevance scoring</li>
                    <li>• rewriting</li>
                    <li>• formatting</li>
                  </ul>
                  <p className="mt-4">Some teams use:</p>
                  <ul className="space-y-1 ml-4">
                    <li>• LLM-as-a-judge scoring</li>
                    <li>• self-correction prompts</li>
                    <li>• fallback prompts</li>
                    <li>• synthetic evaluation</li>
                  </ul>
                  <p className="mt-4"><strong>This step turns "LLM text" into trustworthy product output.</strong></p>
                </div>
              </div>

              {/* #9 Output Return */}
              <div className="mb-12">
                <h2 className="font-heading font-bold text-3xl text-brand-black dark:text-white mb-6">⭐ 9. The Final Output Is Returned to the User</h2>
                <div className="text-gray-700 dark:text-gray-300 space-y-4">
                  <p>Finally, the answer is passed back to the user through:</p>
                  <ul className="space-y-1 ml-4">
                    <li>• chat UI</li>
                    <li>• API</li>
                    <li>• product feature</li>
                    <li>• widget</li>
                    <li>• mobile app</li>
                  </ul>
                  <p className="mt-4">In many products, the UI displays:</p>
                  <ul className="space-y-1 ml-4">
                    <li>• retrieved sources</li>
                    <li>• citations</li>
                    <li>• references</li>
                    <li>• confidence estimates</li>
                  </ul>
                  <p className="mt-4"><strong>This improves trust — especially for B2B and enterprise teams.</strong></p>
                </div>
              </div>

              {/* #10 Monitoring */}
              <div className="mb-12">
                <h2 className="font-heading font-bold text-3xl text-brand-black dark:text-white mb-6">⭐ 10. Teams Monitor Performance Using Evaluation Pipelines</h2>
                <div className="text-gray-700 dark:text-gray-300 space-y-4">
                  <p>Great AI products constantly evaluate:</p>
                  <ul className="space-y-1 ml-4">
                    <li>• accuracy</li>
                    <li>• relevance</li>
                    <li>• latency</li>
                    <li>• hallucination rate</li>
                    <li>• user feedback</li>
                    <li>• token usage</li>
                    <li>• cost per request</li>
                  </ul>
                  <p className="mt-4">Evaluation systems often include:</p>
                  <ul className="space-y-1 ml-4">
                    <li>• test question sets</li>
                    <li>• regression testing</li>
                    <li>• human review</li>
                    <li>• automated scoring</li>
                    <li>• telemetry analytics</li>
                  </ul>
                  <p className="mt-4"><strong>In AI, evals = quality control.</strong></p>
                </div>
              </div>

              {/* Complete Stack */}
              <div className="mb-12">
                <h2 className="font-heading font-bold text-3xl text-brand-black dark:text-white mb-6">⭐ Putting It All Together (The Real AI Stack)</h2>
                <div className="text-gray-700 dark:text-gray-300 space-y-4">
                  <p><strong>The modern AI product lifecycle:</strong></p>
                  <ol className="space-y-2 ml-4 list-decimal">
                    <li>Collect data</li>
                    <li>Clean & chunk it</li>
                    <li>Embed content</li>
                    <li>Store in a vector database</li>
                    <li>Retrieve relevant content at runtime</li>
                    <li>Construct a contextual prompt</li>
                    <li>Generate with an LLM</li>
                    <li>Validate & format output</li>
                    <li>Return response to user</li>
                    <li>Evaluate performance continuously</li>
                  </ol>
                  <p className="mt-6">This is the real workflow behind ChatGPT plugins, AI copilots, support bots, AI search, document Q&A tools, and enterprise AI assistants.</p>
                  <p className="mt-4"><strong>This is the stack used by:</strong></p>
                  <ul className="space-y-1 ml-4">
                    <li>• Notion AI</li>
                    <li>• Intercom</li>
                    <li>• GitHub Copilot</li>
                    <li>• Slack AI</li>
                    <li>• HubSpot AI</li>
                    <li>• Airtable AI</li>
                    <li>• ClickUp AI</li>
                  </ul>
                  <p className="mt-4">…just to name a few.</p>
                </div>
              </div>

              {/* Final Thoughts */}
              <div className="mb-12">
                <h2 className="font-heading font-bold text-3xl text-brand-black dark:text-white mb-6">⭐ Final Thoughts</h2>
                <div className="text-gray-700 dark:text-gray-300 space-y-4">
                  <p><strong>Modern AI products aren't magic — they're systems.</strong></p>
                  <p>The best teams invest in:</p>
                  <ul className="space-y-1 ml-4">
                    <li>• great data</li>
                    <li>• strong retrieval</li>
                    <li>• smart prompt design</li>
                    <li>• careful validation</li>
                    <li>• rigorous evaluation</li>
                  </ul>
                  <p className="mt-4">LLMs are powerful, but without data, structure, and guardrails, they produce chaos.</p>
                  <p><strong>If you understand how this ecosystem works, you understand how real AI products are built.</strong></p>
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
