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
        <section className="pt-24 sm:pt-32 pb-12 bg-gradient-to-br from-purple-50 via-white to-fuchsia-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
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

            <div className="inline-block px-4 py-2 bg-brand-purple/10 dark:bg-brand-purple/20 rounded-full mb-6">
              <span className="text-brand-purple text-sm font-medium">Developer Tutorial</span>
            </div>

            <h1 className="font-heading font-bold text-4xl sm:text-5xl md:text-6xl text-brand-black dark:text-white mb-6">
              How to Build an AI Content Generator with Next.js & OpenAI
            </h1>

            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              A modern, developer-friendly tutorial for building practical AI tools.
            </p>

            <div className="flex items-center gap-6 text-sm text-gray-500 dark:text-gray-400">
              <span>Developer Tutorial</span>
              <span>•</span>
              <span>12 min read</span>
              <span>•</span>
              <span>Dec 2024</span>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="py-12 bg-white dark:bg-gray-800">
          <article className="container-custom max-w-4xl prose prose-lg dark:prose-invert">
            <p className="lead">
              AI writing tools are everywhere — but building your own is easier than you think.
              In this tutorial, you'll create a simple AI content generator using:
            </p>

            <ul>
              <li>Next.js 14 (App Router)</li>
              <li>OpenAI's Chat Completions API</li>
              <li>A server-side API route</li>
              <li>A minimal Tailwind UI</li>
            </ul>

            <p>
              By the end, you'll have a working app where users can enter a topic and generate a content outline, ideas, or full paragraphs.
            </p>

            <h2 className="flex items-center gap-3">
              <span className="text-brand-purple">⭐</span> What We're Building
            </h2>

            <p><strong>A simple interface:</strong></p>

            <ul>
              <li><strong>Input field:</strong> "Write about…"</li>
              <li><strong>Dropdown:</strong> Outline, Ideas, Paragraph, Full Article</li>
              <li><strong>Button:</strong> Generate</li>
              <li><strong>Output area:</strong> Displays AI-generated content</li>
            </ul>

            <h2 className="flex items-center gap-3">
              <span className="text-brand-purple">⭐</span> Prerequisites
            </h2>

            <p>You should have:</p>

            <ul>
              <li>Node.js 18+</li>
              <li>Basic Next.js knowledge</li>
              <li>An OpenAI API key</li>
              <li>TailwindCSS (optional but used)</li>
            </ul>

            <h2 className="flex items-center gap-3">
              <span className="text-brand-purple">⭐</span> Step 1 — Create the Project
            </h2>

            <div className="relative group">
              <pre className="bg-gray-900 text-gray-100 p-6 rounded-2xl overflow-x-auto">
                <code>{`npx create-next-app ai-content-generator
cd ai-content-generator
npm install`}</code>
              </pre>
              <button
                onClick={() => copyToClipboard(`npx create-next-app ai-content-generator\ncd ai-content-generator\nnpm install`, 'step1')}
                className="absolute top-4 right-4 px-3 py-1 bg-brand-purple text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity"
              >
                {copied === 'step1' ? '✓ Copied' : 'Copy'}
              </button>
            </div>

            <p><strong>Add Tailwind:</strong></p>

            <div className="relative group">
              <pre className="bg-gray-900 text-gray-100 p-6 rounded-2xl overflow-x-auto">
                <code>{`npx tailwindcss init -p`}</code>
              </pre>
              <button
                onClick={() => copyToClipboard(`npx tailwindcss init -p`, 'tailwind')}
                className="absolute top-4 right-4 px-3 py-1 bg-brand-purple text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity"
              >
                {copied === 'tailwind' ? '✓ Copied' : 'Copy'}
              </button>
            </div>

            <p>Update configs (standard setup).</p>

            <h2 className="flex items-center gap-3">
              <span className="text-brand-purple">⭐</span> Step 2 — Create the API Route
            </h2>

            <p><strong>Create the file:</strong> <code>src/app/api/generate/route.ts</code></p>

            <div className="relative group">
              <pre className="bg-gray-900 text-gray-100 p-6 rounded-2xl overflow-x-auto">
                <code>{`import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { topic, type } = await req.json();

  if (!topic || !type) {
    return NextResponse.json({ error: "Missing fields" }, { status: 400 });
  }

  const prompt = \`Generate a \${type} about: \${topic}. 
  Make it clear, structured, and helpful.\`;

  const res = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: \`Bearer \${process.env.OPENAI_API_KEY}\`,
    },
    body: JSON.stringify({
      model: "gpt-4o-mini",
      messages: [
        { role: "system", content: "You are a helpful content AI." },
        { role: "user", content: prompt },
      ],
      temperature: 0.7,
    }),
  });

  const data = await res.json();
  return NextResponse.json({ output: data.choices[0].message.content });
}`}</code>
              </pre>
              <button
                onClick={() => copyToClipboard(`import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { topic, type } = await req.json();

  if (!topic || !type) {
    return NextResponse.json({ error: "Missing fields" }, { status: 400 });
  }

  const prompt = \`Generate a \${type} about: \${topic}. 
  Make it clear, structured, and helpful.\`;

  const res = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: \`Bearer \${process.env.OPENAI_API_KEY}\`,
    },
    body: JSON.stringify({
      model: "gpt-4o-mini",
      messages: [
        { role: "system", content: "You are a helpful content AI." },
        { role: "user", content: prompt },
      ],
      temperature: 0.7,
    }),
  });

  const data = await res.json();
  return NextResponse.json({ output: data.choices[0].message.content });
}`, 'api')}
                className="absolute top-4 right-4 px-3 py-1 bg-brand-purple text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity"
              >
                {copied === 'api' ? '✓ Copied' : 'Copy'}
              </button>
            </div>

            <h2 className="flex items-center gap-3">
              <span className="text-brand-purple">⭐</span> Step 3 — Add the UI
            </h2>

            <p><strong>Create a page:</strong> <code>src/app/page.tsx</code></p>

            <div className="relative group">
              <pre className="bg-gray-900 text-gray-100 p-6 rounded-2xl overflow-x-auto max-h-[500px]">
                <code>{`"use client";

import React, { useState } from "react";

export default function Home() {
  const [topic, setTopic] = useState("");
  const [type, setType] = useState("outline");
  const [output, setOutput] = useState("");
  const [loading, setLoading] = useState(false);

  async function generate() {
    if (!topic.trim()) return;
    setLoading(true);

    const res = await fetch("/api/generate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ topic, type }),
    });

    const data = await res.json();
    setOutput(data.output);
    setLoading(false);
  }

  return (
    <main className="min-h-screen flex items-center justify-center p-6">
      <div className="max-w-xl w-full bg-white shadow rounded p-6 space-y-4">
        <h1 className="text-2xl font-bold">AI Content Generator</h1>

        <input
          className="w-full border p-2 rounded"
          placeholder="Enter topic... e.g. 'Benefits of remote work'"
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
        />

        <select
          className="w-full border p-2 rounded"
          value={type}
          onChange={(e) => setType(e.target.value)}
        >
          <option value="outline">Outline</option>
          <option value="ideas">Ideas</option>
          <option value="paragraph">Paragraph</option>
          <option value="full article">Full Article</option>
        </select>

        <button
          className="w-full bg-purple-600 text-white p-2 rounded"
          onClick={generate}
        >
          {loading ? "Generating..." : "Generate Content"}
        </button>

        {output && (
          <div className="mt-4 p-4 border rounded bg-gray-50 whitespace-pre-wrap">
            {output}
          </div>
        )}
      </div>
    </main>
  );
}`}</code>
              </pre>
              <button
                onClick={() => copyToClipboard(`"use client";

import React, { useState } from "react";

export default function Home() {
  const [topic, setTopic] = useState("");
  const [type, setType] = useState("outline");
  const [output, setOutput] = useState("");
  const [loading, setLoading] = useState(false);

  async function generate() {
    if (!topic.trim()) return;
    setLoading(true);

    const res = await fetch("/api/generate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ topic, type }),
    });

    const data = await res.json();
    setOutput(data.output);
    setLoading(false);
  }

  return (
    <main className="min-h-screen flex items-center justify-center p-6">
      <div className="max-w-xl w-full bg-white shadow rounded p-6 space-y-4">
        <h1 className="text-2xl font-bold">AI Content Generator</h1>

        <input
          className="w-full border p-2 rounded"
          placeholder="Enter topic... e.g. \'Benefits of remote work\'"
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
        />

        <select
          className="w-full border p-2 rounded"
          value={type}
          onChange={(e) => setType(e.target.value)}
        >
          <option value="outline">Outline</option>
          <option value="ideas">Ideas</option>
          <option value="paragraph">Paragraph</option>
          <option value="full article">Full Article</option>
        </select>

        <button
          className="w-full bg-purple-600 text-white p-2 rounded"
          onClick={generate}
        >
          {loading ? "Generating..." : "Generate Content"}
        </button>

        {output && (
          <div className="mt-4 p-4 border rounded bg-gray-50 whitespace-pre-wrap">
            {output}
          </div>
        )}
      </div>
    </main>
  );
}`, 'ui')}
                className="absolute top-4 right-4 px-3 py-1 bg-brand-purple text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity"
              >
                {copied === 'ui' ? '✓ Copied' : 'Copy'}
              </button>
            </div>

            <h2 className="flex items-center gap-3">
              <span className="text-brand-purple">⭐</span> Step 4 — Add Your OpenAI Key
            </h2>

            <p><strong>Create <code>.env.local</code>:</strong></p>

            <div className="relative group">
              <pre className="bg-gray-900 text-gray-100 p-6 rounded-2xl overflow-x-auto">
                <code>{`OPENAI_API_KEY=sk-xxxx`}</code>
              </pre>
              <button
                onClick={() => copyToClipboard(`OPENAI_API_KEY=sk-xxxx`, 'env')}
                className="absolute top-4 right-4 px-3 py-1 bg-brand-purple text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity"
              >
                {copied === 'env' ? '✓ Copied' : 'Copy'}
              </button>
            </div>

            <p>Restart the app.</p>

            <h2 className="flex items-center gap-3">
              <span className="text-brand-purple">⭐</span> Step 5 — Improve the Prompt (Optional)
            </h2>

            <p>You can make your generator more structured:</p>

            <div className="relative group">
              <pre className="bg-gray-900 text-gray-100 p-6 rounded-2xl overflow-x-auto">
                <code>{`const prompt = \`
You are an expert content writer.
Generate a \${type} for the topic: "\${topic}".

Guidelines:
- Keep the tone clear and informative
- Avoid unnecessary fluff
- Organize information logically
- Add bullet points when needed
\`;`}</code>
              </pre>
              <button
                onClick={() => copyToClipboard(`const prompt = \`
You are an expert content writer.
Generate a \${type} for the topic: "\${topic}".

Guidelines:
- Keep the tone clear and informative
- Avoid unnecessary fluff
- Organize information logically
- Add bullet points when needed
\`;`, 'prompt')}
                className="absolute top-4 right-4 px-3 py-1 bg-brand-purple text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity"
              >
                {copied === 'prompt' ? '✓ Copied' : 'Copy'}
              </button>
            </div>

            <p>This improves output quality dramatically.</p>

            <h2 className="flex items-center gap-3">
              <span className="text-brand-purple">⭐</span> Step 6 — Deploy
            </h2>

            <p><strong>Deploy on Vercel:</strong></p>

            <div className="relative group">
              <pre className="bg-gray-900 text-gray-100 p-6 rounded-2xl overflow-x-auto">
                <code>{`vercel deploy`}</code>
              </pre>
              <button
                onClick={() => copyToClipboard(`vercel deploy`, 'deploy')}
                className="absolute top-4 right-4 px-3 py-1 bg-brand-purple text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity"
              >
                {copied === 'deploy' ? '✓ Copied' : 'Copy'}
              </button>
            </div>

            <p>Add <code>OPENAI_API_KEY</code> to your Vercel Environment Variables.</p>

            <h2 className="flex items-center gap-3">
              <span className="text-brand-purple">⭐</span> Results
            </h2>

            <p>You now have:</p>

            <ul>
              <li>✔ A working AI content generator</li>
              <li>✔ API route</li>
              <li>✔ Frontend UI</li>
              <li>✔ Prompt engineering basics</li>
              <li>✔ Real Next.js + AI integration</li>
              <li>✔ Portfolio-ready project</li>
            </ul>

            <h2 className="flex items-center gap-3">
              <span className="text-brand-purple">⭐</span> Possible Improvements
            </h2>

            <ul>
              <li>Add streaming instead of static output</li>
              <li>Add templates ("Blog Post", "Email", "Social Copy")</li>
              <li>Add user authentication</li>
              <li>Add a history of generated items</li>
              <li>Add a UI editor for customizing tone/style</li>
            </ul>

            <p>These turn it into a full product.</p>

            <h2 className="flex items-center gap-3">
              <span className="text-brand-purple">⭐</span> Conclusion
            </h2>

            <p>
              You just built a practical AI content generator using Next.js + OpenAI.
            </p>

            <p>This same flow powers:</p>

            <ul>
              <li>AI writing apps</li>
              <li>Marketing tools</li>
              <li>SaaS productivity tools</li>
              <li>Internal automation systems</li>
            </ul>

            <p>It's a great foundation for deeper AI products.</p>
          </article>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-br from-brand-black to-brand-purple/90">
          <div className="container-custom max-w-4xl text-center text-white">
            <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4">
              Want more tutorials like this?
            </h2>
            <p className="text-xl text-gray-200 mb-8">
              I write practical guides for developers building with AI, Next.js, and modern web tools.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                href="/blog"
                className="bg-white text-brand-black px-8 py-4 rounded-2xl font-heading font-bold hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
              >
                Read More Tutorials
              </Link>
              <Link
                href="/contact"
                className="border-2 border-white text-white px-8 py-4 rounded-2xl font-heading font-bold hover:bg-white hover:text-brand-black transition-all duration-300"
              >
                Hire Me
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
