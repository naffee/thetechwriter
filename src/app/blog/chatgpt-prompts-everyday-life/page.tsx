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

            <h1 className="font-heading font-bold text-4xl sm:text-5xl md:text-6xl text-brand-black dark:text-white mb-6">
              Top 20 ChatGPT Prompts for Everyday Life (That Actually Work)
            </h1>

            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              Practical, real-world prompts for planning, writing, learning, organizing, and simplifying your daily life.
            </p>

            <div className="flex items-center gap-6 text-sm text-gray-500 dark:text-gray-400">
              <span>Everyday User</span>
              <span>•</span>
              <span>8 min read</span>
              <span>•</span>
              <span>Nov 2024</span>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="py-12 bg-white dark:bg-gray-800">
          <article className="container-custom max-w-4xl prose prose-lg dark:prose-invert">
            <p className="lead">
              ChatGPT isn't just for coding or technical work.
            </p>

            <p>
              You can use it to plan your day, write emails, learn new skills, manage personal tasks, and even reduce stress.
            </p>

            <p>
              Here are 20 super practical prompts you can use right now — no technical skill required.
            </p>

            <h2 className="flex items-center gap-3">
              <span className="text-teal-600">⭐</span> 1. "Summarize this for me like I'm busy."
            </h2>

            <p>Paste any long text and use this:</p>

            <div className="relative group">
              <pre className="bg-gray-900 text-gray-100 p-6 rounded-2xl overflow-x-auto">
                <code>{"Summarize the text below in 5 bullet points. Keep it simple and tell me only the important parts."}</code>
              </pre>
              <button
                onClick={() => copyToClipboard("Summarize the text below in 5 bullet points. Keep it simple and tell me only the important parts.", 'prompt1')}
                className="absolute top-4 right-4 px-3 py-1 bg-pink-600 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity"
              >
                {copied === 'prompt1' ? '✓ Copied' : 'Copy'}
              </button>
            </div>

            <p><strong>Perfect for:</strong> emails, documents, articles, reports.</p>

            <h2 className="flex items-center gap-3">
              <span className="text-teal-600">⭐</span> 2. "Explain this to me like I'm 12."
            </h2>

            <p>Great for understanding complex ideas.</p>

            <div className="relative group">
              <pre className="bg-gray-900 text-gray-100 p-6 rounded-2xl overflow-x-auto">
                <code>{"Explain this concept in simple terms and give me an example a 12-year-old would get:\n[Paste topic]"}</code>
              </pre>
              <button
                onClick={() => copyToClipboard("Explain this concept in simple terms and give me an example a 12-year-old would get:\n[Paste topic]", 'prompt2')}
                className="absolute top-4 right-4 px-3 py-1 bg-pink-600 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity"
              >
                {copied === 'prompt2' ? '✓ Copied' : 'Copy'}
              </button>
            </div>

            <h2 className="flex items-center gap-3">
              <span className="text-teal-600">⭐</span> 3. "Write this email professionally."
            </h2>

            <p>For polite, clean communication:</p>

            <div className="relative group">
              <pre className="bg-gray-900 text-gray-100 p-6 rounded-2xl overflow-x-auto">
                <code>{"Rewrite the message below to sound clear, polite, and professional:"}</code>
              </pre>
              <button
                onClick={() => copyToClipboard("Rewrite the message below to sound clear, polite, and professional:", 'prompt3')}
                className="absolute top-4 right-4 px-3 py-1 bg-pink-600 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity"
              >
                {copied === 'prompt3' ? '✓ Copied' : 'Copy'}
              </button>
            </div>

            <p>Done in seconds.</p>

            <h2 className="flex items-center gap-3">
              <span className="text-teal-600">⭐</span> 4. "Help me plan my week."
            </h2>

            <p>A friendly way to organize tasks:</p>

            <div className="relative group">
              <pre className="bg-gray-900 text-gray-100 p-6 rounded-2xl overflow-x-auto">
                <code>{"Here are my tasks for the week. Help me plan them day by day and spread them in a realistic schedule:"}</code>
              </pre>
              <button
                onClick={() => copyToClipboard("Here are my tasks for the week. Help me plan them day by day and spread them in a realistic schedule:", 'prompt4')}
                className="absolute top-4 right-4 px-3 py-1 bg-pink-600 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity"
              >
                {copied === 'prompt4' ? '✓ Copied' : 'Copy'}
              </button>
            </div>

            <h2 className="flex items-center gap-3">
              <span className="text-teal-600">⭐</span> 5. "Give me 3 meal ideas based on what I have at home."
            </h2>

            <p>Paste your ingredients → instant recipes.</p>

            <h2 className="flex items-center gap-3">
              <span className="text-teal-600">⭐</span> 6. "Turn these notes into a structured document."
            </h2>

            <p>For meetings, school, or projects:</p>

            <div className="relative group">
              <pre className="bg-gray-900 text-gray-100 p-6 rounded-2xl overflow-x-auto">
                <code>{"Organize the notes below into sections, bullets, and clear points:"}</code>
              </pre>
              <button
                onClick={() => copyToClipboard("Organize the notes below into sections, bullets, and clear points:", 'prompt6')}
                className="absolute top-4 right-4 px-3 py-1 bg-pink-600 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity"
              >
                {copied === 'prompt6' ? '✓ Copied' : 'Copy'}
              </button>
            </div>

            <h2 className="flex items-center gap-3">
              <span className="text-teal-600">⭐</span> 7. "Help me study this in a way I'll remember."
            </h2>

            <p>Ask for:</p>

            <ul>
              <li>examples</li>
              <li>analogies</li>
              <li>practice questions</li>
              <li>flashcards</li>
            </ul>

            <div className="relative group">
              <pre className="bg-gray-900 text-gray-100 p-6 rounded-2xl overflow-x-auto">
                <code>{"Teach me this topic and quiz me until I understand it."}</code>
              </pre>
              <button
                onClick={() => copyToClipboard("Teach me this topic and quiz me until I understand it.", 'prompt7')}
                className="absolute top-4 right-4 px-3 py-1 bg-pink-600 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity"
              >
                {copied === 'prompt7' ? '✓ Copied' : 'Copy'}
              </button>
            </div>

            <h2 className="flex items-center gap-3">
              <span className="text-teal-600">⭐</span> 8. "Write a simple explanation I can send to someone."
            </h2>

            <p>Perfect for parents, coworkers, clients.</p>

            <div className="relative group">
              <pre className="bg-gray-900 text-gray-100 p-6 rounded-2xl overflow-x-auto">
                <code>{"Explain the following in 3 clear sentences anyone can understand:"}</code>
              </pre>
              <button
                onClick={() => copyToClipboard("Explain the following in 3 clear sentences anyone can understand:", 'prompt8')}
                className="absolute top-4 right-4 px-3 py-1 bg-pink-600 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity"
              >
                {copied === 'prompt8' ? '✓ Copied' : 'Copy'}
              </button>
            </div>

            <h2 className="flex items-center gap-3">
              <span className="text-teal-600">⭐</span> 9. "Help me prepare for this interview."
            </h2>

            <div className="relative group">
              <pre className="bg-gray-900 text-gray-100 p-6 rounded-2xl overflow-x-auto">
                <code>{"I'm interviewing for this role: [role]. Ask me practice questions and tell me how to improve my answers."}</code>
              </pre>
              <button
                onClick={() => copyToClipboard("I'm interviewing for this role: [role]. Ask me practice questions and tell me how to improve my answers.", 'prompt9')}
                className="absolute top-4 right-4 px-3 py-1 bg-pink-600 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity"
              >
                {copied === 'prompt9' ? '✓ Copied' : 'Copy'}
              </button>
            </div>

            <h2 className="flex items-center gap-3">
              <span className="text-teal-600">⭐</span> 10. "Make this message shorter but clearer."
            </h2>

            <p>For tidying up communication.</p>

            <h2 className="flex items-center gap-3">
              <span className="text-teal-600">⭐</span> 11. "Give me 10 gift ideas for someone who likes…"
            </h2>

            <p>Personalized, thoughtful, quick.</p>

            <h2 className="flex items-center gap-3">
              <span className="text-teal-600">⭐</span> 12. "Help me write a polite reminder."
            </h2>

            <p>For overdue payments, unanswered messages, or follow-ups:</p>

            <div className="relative group">
              <pre className="bg-gray-900 text-gray-100 p-6 rounded-2xl overflow-x-auto">
                <code>{"Write a polite reminder asking for an update on the message below."}</code>
              </pre>
              <button
                onClick={() => copyToClipboard("Write a polite reminder asking for an update on the message below.", 'prompt12')}
                className="absolute top-4 right-4 px-3 py-1 bg-pink-600 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity"
              >
                {copied === 'prompt12' ? '✓ Copied' : 'Copy'}
              </button>
            </div>

            <h2 className="flex items-center gap-3">
              <span className="text-teal-600">⭐</span> 13. "Rewrite this in a friendly tone."
            </h2>

            <p>Tone control = better messages.</p>

            <h2 className="flex items-center gap-3">
              <span className="text-teal-600">⭐</span> 14. "Help me create a daily routine based on my goals."
            </h2>

            <p>Works for:</p>

            <ul>
              <li>fitness</li>
              <li>work</li>
              <li>school</li>
              <li>self-care</li>
              <li>building habits</li>
            </ul>

            <h2 className="flex items-center gap-3">
              <span className="text-teal-600">⭐</span> 15. "Turn this WhatsApp message into something polite."
            </h2>

            <p>Fix awkward text messages.</p>

            <h2 className="flex items-center gap-3">
              <span className="text-teal-600">⭐</span> 16. "Write a short caption for this photo."
            </h2>

            <p>Perfect for social media.</p>

            <h2 className="flex items-center gap-3">
              <span className="text-teal-600">⭐</span> 17. "Help me understand both sides of this argument."
            </h2>

            <p>Great for learning or researching:</p>

            <div className="relative group">
              <pre className="bg-gray-900 text-gray-100 p-6 rounded-2xl overflow-x-auto">
                <code>{"Explain the pros and cons of [topic] simply."}</code>
              </pre>
              <button
                onClick={() => copyToClipboard("Explain the pros and cons of [topic] simply.", 'prompt17')}
                className="absolute top-4 right-4 px-3 py-1 bg-pink-600 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity"
              >
                {copied === 'prompt17' ? '✓ Copied' : 'Copy'}
              </button>
            </div>

            <h2 className="flex items-center gap-3">
              <span className="text-teal-600">⭐</span> 18. "Give me a checklist for doing this task."
            </h2>

            <p>
              Cleaning your room? Studying for an exam? Planning an event? ChatGPT can make a checklist in seconds.
            </p>

            <h2 className="flex items-center gap-3">
              <span className="text-teal-600">⭐</span> 19. "Rewrite this in simple English."
            </h2>

            <p>Perfect for beginners or non-native speakers.</p>

            <h2 className="flex items-center gap-3">
              <span className="text-teal-600">⭐</span> 20. "Help me learn a new skill."
            </h2>

            <div className="relative group">
              <pre className="bg-gray-900 text-gray-100 p-6 rounded-2xl overflow-x-auto">
                <code>{"Teach me the basics of [skill] and create a 7-day beginner plan."}</code>
              </pre>
              <button
                onClick={() => copyToClipboard("Teach me the basics of [skill] and create a 7-day beginner plan.", 'prompt20')}
                className="absolute top-4 right-4 px-3 py-1 bg-pink-600 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity"
              >
                {copied === 'prompt20' ? '✓ Copied' : 'Copy'}
              </button>
            </div>

            <p>Extremely powerful.</p>

            <h2 className="flex items-center gap-3">
              <span className="text-teal-600">⭐</span> Final Thoughts
            </h2>

            <p>
              You don't need to be technical to use AI effectively. With the right prompts, you can:
            </p>

            <ul>
              <li>communicate better</li>
              <li>learn faster</li>
              <li>work smarter</li>
              <li>stay organized</li>
              <li>reduce stress</li>
              <li>save time</li>
              <li>solve everyday problems</li>
            </ul>

            <p>
              <strong>AI becomes most powerful when you use it in practical, simple ways — starting with prompts like these.</strong>
            </p>
          </article>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-br from-brand-black to-pink-600/90">
          <div className="container-custom max-w-4xl text-center text-white">
            <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4">
              Want more practical AI and writing tips?
            </h2>
            <p className="text-xl text-gray-200 mb-8">
              I write practical guides for everyday users, writers, and professionals using AI tools effectively.
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
