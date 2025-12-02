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
        <section className="pt-24 sm:pt-32 pb-12 bg-gradient-to-br from-orange-50 via-white to-amber-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
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

            <div className="inline-block px-4 py-2 bg-orange-500/10 dark:bg-orange-500/20 rounded-full mb-6">
              <span className="text-orange-600 dark:text-orange-400 text-sm font-medium">Deep Dives</span>
            </div>

            <h1 className="font-heading font-bold text-4xl sm:text-5xl md:text-6xl text-brand-black dark:text-white mb-6">
              REST vs GraphQL vs gRPC — Which Should You Choose in 2025?
            </h1>

            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              A practical comparison for engineers, PMs, and teams building modern APIs.
            </p>

            <div className="flex items-center gap-6 text-sm text-gray-500 dark:text-gray-400">
              <span>Deep Dives</span>
              <span>•</span>
              <span>13 min read</span>
              <span>•</span>
              <span>Nov 2024</span>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="py-12 bg-white dark:bg-gray-800">
          <article className="container-custom max-w-4xl prose prose-lg dark:prose-invert">
            <p className="lead">
              Choosing an API architecture used to be simple — everyone used REST.
            </p>

            <p>
              Then GraphQL arrived with flexible queries, and later gRPC brought high-performance, low-latency communication.
            </p>

            <p>
              In 2025, the conversation isn't "which one is best?" It's:
            </p>

            <blockquote>
              <p>Which one is right for your use case?</p>
            </blockquote>

            <p>Here's a clear, practical breakdown.</p>

            <h2 className="flex items-center gap-3">
              <span className="text-orange-600">⭐</span> What Is REST?
            </h2>

            <p>REST (Representational State Transfer) is the classic web API style we all know:</p>

            <div className="relative group">
              <pre className="bg-gray-900 text-gray-100 p-6 rounded-2xl overflow-x-auto">
                <code>{`/users
/users/:id
/products/:id/reviews`}</code>
              </pre>
              <button
                onClick={() => copyToClipboard(`/users\n/users/:id\n/products/:id/reviews`, 'rest-ex')}
                className="absolute top-4 right-4 px-3 py-1 bg-orange-600 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity"
              >
                {copied === 'rest-ex' ? '✓ Copied' : 'Copy'}
              </button>
            </div>

            <p>It uses:</p>

            <ul>
              <li>HTTP verbs (GET, POST, PUT, DELETE)</li>
              <li>JSON responses</li>
              <li>stateless requests</li>
            </ul>

            <p><strong>Why REST is still dominant:</strong></p>

            <ul>
              <li>✔ Simple</li>
              <li>✔ Easy to debug</li>
              <li>✔ Browser-friendly</li>
              <li>✔ Universal tooling</li>
              <li>✔ Great for CRUD apps</li>
              <li>✔ Works everywhere</li>
            </ul>

            <p><strong>Best for:</strong> traditional SaaS, user management, internal APIs, simple systems.</p>

            <h2 className="flex items-center gap-3">
              <span className="text-orange-600">⭐</span> What Is GraphQL?
            </h2>

            <p>GraphQL lets the client request exactly the data it needs, nothing more.</p>

            <p><strong>Example:</strong></p>

            <div className="relative group">
              <pre className="bg-gray-900 text-gray-100 p-6 rounded-2xl overflow-x-auto">
                <code>{`{
  user(id: 1) {
    name
    email
    posts {
      title
    }
  }
}`}</code>
              </pre>
              <button
                onClick={() => copyToClipboard(`{
  user(id: 1) {
    name
    email
    posts {
      title
    }
  }
}`, 'gql-ex')}
                className="absolute top-4 right-4 px-3 py-1 bg-orange-600 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity"
              >
                {copied === 'gql-ex' ? '✓ Copied' : 'Copy'}
              </button>
            </div>

            <p><strong>Strengths:</strong></p>

            <ul>
              <li>✔ No over-fetching</li>
              <li>✔ No under-fetching</li>
              <li>✔ Perfect for complex data</li>
              <li>✔ Great for mobile apps</li>
              <li>✔ Rich developer tools</li>
              <li>✔ Strong typing</li>
            </ul>

            <p>
              <strong>Best for:</strong> dashboards, multi-level relationships, mobile apps, social apps, frontend-heavy applications.
            </p>

            <h2 className="flex items-center gap-3">
              <span className="text-orange-600">⭐</span> What Is gRPC?
            </h2>

            <p>gRPC is a high-performance, binary communication protocol built on HTTP/2.</p>

            <p>It uses:</p>

            <ul>
              <li>Protocol Buffers (Protobuf)</li>
              <li>streaming</li>
              <li>bidirectional communication</li>
              <li>extremely fast serialization</li>
            </ul>

            <p><strong>Strengths:</strong></p>

            <ul>
              <li>✔ Very fast</li>
              <li>✔ Lightweight</li>
              <li>✔ Great for microservices</li>
              <li>✔ Ideal for real-time interactions</li>
              <li>✔ Strong contracts (Protobuf schemas)</li>
            </ul>

            <p><strong>Best for:</strong> microservices, internal services, real-time systems, IoT, high-performance apps.</p>

            <h2 className="flex items-center gap-3">
              <span className="text-orange-600">⭐</span> Side-by-Side Comparison
            </h2>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gray-100 dark:bg-gray-700">
                    <th className="border border-gray-300 dark:border-gray-600 p-3 text-left">Feature</th>
                    <th className="border border-gray-300 dark:border-gray-600 p-3 text-left">REST</th>
                    <th className="border border-gray-300 dark:border-gray-600 p-3 text-left">GraphQL</th>
                    <th className="border border-gray-300 dark:border-gray-600 p-3 text-left">gRPC</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 dark:border-gray-600 p-3"><strong>Performance</strong></td>
                    <td className="border border-gray-300 dark:border-gray-600 p-3">Medium</td>
                    <td className="border border-gray-300 dark:border-gray-600 p-3">Medium</td>
                    <td className="border border-gray-300 dark:border-gray-600 p-3">High</td>
                  </tr>
                  <tr className="bg-gray-50 dark:bg-gray-700/50">
                    <td className="border border-gray-300 dark:border-gray-600 p-3"><strong>Flexibility</strong></td>
                    <td className="border border-gray-300 dark:border-gray-600 p-3">Low</td>
                    <td className="border border-gray-300 dark:border-gray-600 p-3">Very High</td>
                    <td className="border border-gray-300 dark:border-gray-600 p-3">Medium</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 dark:border-gray-600 p-3"><strong>Browser Support</strong></td>
                    <td className="border border-gray-300 dark:border-gray-600 p-3">Native</td>
                    <td className="border border-gray-300 dark:border-gray-600 p-3">Native</td>
                    <td className="border border-gray-300 dark:border-gray-600 p-3">Poor (needs proxy)</td>
                  </tr>
                  <tr className="bg-gray-50 dark:bg-gray-700/50">
                    <td className="border border-gray-300 dark:border-gray-600 p-3"><strong>Learning Curve</strong></td>
                    <td className="border border-gray-300 dark:border-gray-600 p-3">Easy</td>
                    <td className="border border-gray-300 dark:border-gray-600 p-3">Medium</td>
                    <td className="border border-gray-300 dark:border-gray-600 p-3">Hard</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 dark:border-gray-600 p-3"><strong>Use Case Fit</strong></td>
                    <td className="border border-gray-300 dark:border-gray-600 p-3">CRUD/SaaS</td>
                    <td className="border border-gray-300 dark:border-gray-600 p-3">Data-heavy apps</td>
                    <td className="border border-gray-300 dark:border-gray-600 p-3">Microservices</td>
                  </tr>
                  <tr className="bg-gray-50 dark:bg-gray-700/50">
                    <td className="border border-gray-300 dark:border-gray-600 p-3"><strong>Typing</strong></td>
                    <td className="border border-gray-300 dark:border-gray-600 p-3">Weak</td>
                    <td className="border border-gray-300 dark:border-gray-600 p-3">Strong</td>
                    <td className="border border-gray-300 dark:border-gray-600 p-3">Strong</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 dark:border-gray-600 p-3"><strong>Streaming</strong></td>
                    <td className="border border-gray-300 dark:border-gray-600 p-3">Limited</td>
                    <td className="border border-gray-300 dark:border-gray-600 p-3">Limited</td>
                    <td className="border border-gray-300 dark:border-gray-600 p-3">Built-in</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="flex items-center gap-3">
              <span className="text-orange-600">⭐</span> When to Choose REST
            </h2>

            <p><strong>Pick REST if:</strong></p>

            <ul>
              <li>you're building a SaaS product</li>
              <li>your product is CRUD-heavy</li>
              <li>you need fast onboarding</li>
              <li>you want the simplest option</li>
              <li>you want great compatibility</li>
            </ul>

            <p>
              <strong>Examples:</strong> Todo apps, CMS tools, dashboards, marketplaces.
            </p>

            <p>
              <strong>REST shines for 80% of typical web apps.</strong>
            </p>

            <h2 className="flex items-center gap-3">
              <span className="text-orange-600">⭐</span> When to Choose GraphQL
            </h2>

            <p><strong>Pick GraphQL if you need:</strong></p>

            <ul>
              <li>nested data</li>
              <li>flexible queries</li>
              <li>reduced API calls</li>
              <li>strong typing</li>
              <li>powerful frontends</li>
              <li>mobile responsiveness</li>
              <li>schema-level automation</li>
            </ul>

            <p>
              <strong>Examples:</strong> social apps, marketplace apps, mobile apps, dashboards with complex relationships.
            </p>

            <p>
              <strong>GraphQL is perfect when the client needs control over the data.</strong>
            </p>

            <h2 className="flex items-center gap-3">
              <span className="text-orange-600">⭐</span> When to Choose gRPC
            </h2>

            <p><strong>Pick gRPC if you need:</strong></p>

            <ul>
              <li>high performance</li>
              <li>low latency</li>
              <li>streaming</li>
              <li>microservices</li>
              <li>strong contracts</li>
              <li>internal communication</li>
            </ul>

            <p>
              <strong>Examples:</strong> internal APIs, backend-to-backend communication, IoT, real-time apps, big enterprise systems.
            </p>

            <p>
              <strong>gRPC shines when machines talk to machines.</strong>
            </p>

            <h2 className="flex items-center gap-3">
              <span className="text-orange-600">⭐</span> What Should You Choose in 2025?
            </h2>

            <ul>
              <li>✔ If you're building a SaaS with typical CRUD features → <strong>REST</strong></li>
              <li>✔ If you're building a complex UI or mobile app → <strong>GraphQL</strong></li>
              <li>✔ If you're building microservices or real-time systems → <strong>gRPC</strong></li>
            </ul>

            <p>
              <strong>There is no "best" choice. There is only the right fit for the job.</strong>
            </p>

            <h2 className="flex items-center gap-3">
              <span className="text-orange-600">⭐</span> Final Thoughts
            </h2>

            <p>
              Many teams overcomplicate their choice of API architecture. The truth is simple:
            </p>

            <ul>
              <li><strong>REST</strong> is the default.</li>
              <li><strong>GraphQL</strong> is for flexibility.</li>
              <li><strong>gRPC</strong> is for performance.</li>
            </ul>

            <p>
              Each one exists for a reason — and understanding their strengths helps you build better systems.
            </p>
          </article>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-br from-brand-black to-orange-600/90">
          <div className="container-custom max-w-4xl text-center text-white">
            <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4">
              Want more technical deep dives?
            </h2>
            <p className="text-xl text-gray-200 mb-8">
              I write advanced technical articles for engineers building modern systems and architectures.
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
