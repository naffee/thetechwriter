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
              OAuth 2.0 in Plain English (Flows Explained Without Confusion)
            </h1>

            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              Finally understand OAuth without diagrams full of arrows.
            </p>

            <div className="flex items-center gap-6 text-sm text-gray-500 dark:text-gray-400">
              <span>Deep Dives</span>
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
              OAuth 2.0 is everywhere.
            </p>

            <p>You use it every time you:</p>

            <ul>
              <li>sign in with Google</li>
              <li>connect an app to your GitHub account</li>
              <li>authorize a payment system</li>
              <li>grant access to a third-party tool</li>
            </ul>

            <p>
              But OAuth documentation is famously confusing — full of jargon like "authorization servers," "resource owners," and "clients."
            </p>

            <p>Let's drop the jargon and explain OAuth like you're hearing it for the first time.</p>

            <h2 className="flex items-center gap-3">
              <span className="text-orange-600">⭐</span> What Problem Does OAuth Actually Solve?
            </h2>

            <p>Imagine you want App A to access data from App B without giving App A your password.</p>

            <p><strong>Example:</strong></p>

            <p>
              You want Notion (App A) to access your Google Calendar (App B).
            </p>

            <ul>
              <li>You don't want to give Notion your Google password.</li>
              <li>You do want Notion to read/write to your calendar.</li>
            </ul>

            <p>OAuth makes this secure and possible.</p>

            <blockquote>
              <p>OAuth lets you give apps limited access to your data — without sharing your password.</p>
            </blockquote>

            <h2 className="flex items-center gap-3">
              <span className="text-orange-600">⭐</span> The Real Players (But in Normal Language)
            </h2>

            <p>Forget the official names. Here's what they really mean:</p>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gray-100 dark:bg-gray-700">
                    <th className="border border-gray-300 dark:border-gray-600 p-3 text-left"><strong>Official Term</strong></th>
                    <th className="border border-gray-300 dark:border-gray-600 p-3 text-left"><strong>Plain English</strong></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 dark:border-gray-600 p-3">Resource Owner</td>
                    <td className="border border-gray-300 dark:border-gray-600 p-3">You (the user)</td>
                  </tr>
                  <tr className="bg-gray-50 dark:bg-gray-700/50">
                    <td className="border border-gray-300 dark:border-gray-600 p-3">Client</td>
                    <td className="border border-gray-300 dark:border-gray-600 p-3">The app that wants access (Notion)</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 dark:border-gray-600 p-3">Resource Server</td>
                    <td className="border border-gray-300 dark:border-gray-600 p-3">The API holding your data (Google Calendar API)</td>
                  </tr>
                  <tr className="bg-gray-50 dark:bg-gray-700/50">
                    <td className="border border-gray-300 dark:border-gray-600 p-3">Authorization Server</td>
                    <td className="border border-gray-300 dark:border-gray-600 p-3">The login page where you grant permission (Google Login)</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p>That's it. Four players — one of which is you.</p>

            <h2 className="flex items-center gap-3">
              <span className="text-orange-600">⭐</span> Step-by-Step: What Actually Happens During OAuth
            </h2>

            <p>Let's use the example:</p>

            <blockquote>
              <p>➡️ Notion wants permission to access your Google Calendar.</p>
            </blockquote>

            <p>Here's what happens behind the scenes:</p>

            <p><strong>Step 1 — Notion sends you to Google to log in</strong></p>

            <p>You click: "Connect Google Calendar"</p>

            <p>
              Notion does not collect your Google password. Instead, it redirects you to Google's login page.
            </p>

            <p><strong>Step 2 — Google asks: "Do you allow this?"</strong></p>

            <p>You see a page that says:</p>

            <blockquote>
              <p>"Notion wants to view your calendar. Allow or Deny?"</p>
            </blockquote>

            <p>This is Google's authorization server verifying whether YOU want this connection.</p>

            <p><strong>Step 3 — You click "Allow"</strong></p>

            <p>
              Google now issues Notion a one-time authorization code. This code is short-lived and useless if stolen.
            </p>

            <p><strong>Step 4 — Notion exchanges the code for an access token</strong></p>

            <p>Notion sends the code to Google (secretly, from the backend):</p>

            <blockquote>
              <p>
                Here's the authorization code.<br />
                Please give me an access token.
              </p>
            </blockquote>

            <p>Google replies:</p>

            <blockquote>
              <p>
                Here's your access token.<br />
                You can now access the user's calendar.
              </p>
            </blockquote>

            <p><strong>Step 5 — Notion uses the access token to call the calendar API</strong></p>

            <p>This token works like a temporary key.</p>

            <ul>
              <li>It does NOT reveal your password</li>
              <li>It expires</li>
              <li>It has limited permissions</li>
              <li>It may only allow read-only access</li>
            </ul>

            <p><strong>Final Step — Access token expires → Notion uses a refresh token</strong></p>

            <p>To keep you logged in silently:</p>

            <ul>
              <li>the access token expires quickly</li>
              <li>the refresh token lasts longer and can request new access tokens</li>
            </ul>

            <p>This keeps everything secure.</p>

            <h2 className="flex items-center gap-3">
              <span className="text-orange-600">⭐</span> The OAuth Flows Explained Simply
            </h2>

            <p>
              OAuth has multiple "flows." These are just different ways to perform the same basic idea depending on the app.
            </p>

            <p>Here they are in plain English:</p>

            <h3>⭐ 1. Authorization Code Flow (Most Popular)</h3>

            <p><strong>Used by:</strong></p>

            <ul>
              <li>SaaS products</li>
              <li>Web apps</li>
              <li>Backend apps</li>
              <li>Anything with a server</li>
            </ul>

            <p><strong>Why?</strong> Most secure. Tokens are exchanged on the backend.</p>

            <p><strong>Simple definition:</strong> Redirect user → ask permission → get a code → exchange code for token.</p>

            <h3>⭐ 2. PKCE Flow (For Mobile & Single-Page Apps)</h3>

            <p><strong>Pronounced "pixie."</strong></p>

            <p><strong>Used by:</strong></p>

            <ul>
              <li>React apps</li>
              <li>Mobile apps</li>
              <li>Any frontend without a backend</li>
            </ul>

            <p><strong>Why?</strong> These apps can't safely store secrets. PKCE protects the code exchange.</p>

            <p><strong>Simple definition:</strong> Authorization Code Flow but with extra steps to prevent interception.</p>

            <h3>⭐ 3. Client Credentials Flow (Machine → Machine)</h3>

            <p><strong>Used by:</strong></p>

            <ul>
              <li>microservices</li>
              <li>servers calling other servers</li>
              <li>No user involved</li>
            </ul>

            <p><strong>Simple definition:</strong> The app logs in as itself using its own credentials.</p>

            <h3>⭐ 4. Device Code Flow (For TVs, PlayStations, etc.)</h3>

            <p><strong>Used when you:</strong></p>

            <ul>
              <li>log in on your TV</li>
              <li>see a code</li>
              <li>go to a website on your phone</li>
              <li>authorize the device</li>
            </ul>

            <p><strong>Simple definition:</strong> Device shows a code → you approve from another device.</p>

            <h3>⭐ 5. Refresh Token Flow</h3>

            <p><strong>Not truly a flow — more like a system.</strong></p>

            <p><strong>Used when:</strong></p>

            <ul>
              <li>access token expires</li>
              <li>app requests a new one without asking you to log in again</li>
            </ul>

            <p><strong>Simple definition:</strong> Silent re-authentication.</p>

            <h2 className="flex items-center gap-3">
              <span className="text-orange-600">⭐</span> Why OAuth Exists (In One Sentence)
            </h2>

            <blockquote>
              <p>OAuth lets apps access your data safely, without sharing your password, and with limited permissions.</p>
            </blockquote>

            <p>That's it.</p>

            <h2 className="flex items-center gap-3">
              <span className="text-orange-600">⭐</span> The Most Common Misunderstanding
            </h2>

            <p>Many people think <strong>OAuth = login</strong>.</p>

            <p>It's not.</p>

            <ul>
              <li><strong>Logging in</strong> → Authentication</li>
              <li><strong>Allowing access</strong> → Authorization</li>
            </ul>

            <p>
              OAuth handles authorization. Hence the name: <strong>Open Authorization</strong>.
            </p>

            <h2 className="flex items-center gap-3">
              <span className="text-orange-600">⭐</span> When Should You Use OAuth in Your Product?
            </h2>

            <p><strong>Choose OAuth if:</strong></p>

            <ul>
              <li>✔ Your app connects to Google, GitHub, Slack, Notion, Stripe, etc.</li>
              <li>✔ You need to access user data from another platform</li>
              <li>✔ You want to avoid storing passwords</li>
              <li>✔ You want granular permissions</li>
              <li>✔ You want security best practices</li>
              <li>✔ You want scalable authentication/authorization</li>
            </ul>

            <p><strong>Skip OAuth if:</strong></p>

            <ul>
              <li>❌ You're building a small internal tool</li>
              <li>❌ You just need a username/password</li>
              <li>❌ You don't integrate with third-party services</li>
            </ul>

            <h2 className="flex items-center gap-3">
              <span className="text-orange-600">⭐</span> Final Thoughts
            </h2>

            <p>
              OAuth is powerful — but the explanations often make it sound more complicated than necessary.
            </p>

            <p>At its core, OAuth is just:</p>

            <ul>
              <li>sending users to a trusted login page</li>
              <li>getting permission</li>
              <li>receiving a safe, limited token</li>
              <li>using that token to access an API</li>
            </ul>

            <p>
              <strong>If you understand the why, the how becomes simple.</strong>
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
