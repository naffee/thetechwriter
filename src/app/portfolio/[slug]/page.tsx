'use client';

import React, { useState } from 'react';
import { useParams } from 'next/navigation';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Link from 'next/link';

// Content Renderer Component
function ContentRenderer({ content }: { content: string }) {
  const lines = content.split('\n');
  const elements: React.ReactElement[] = [];
  let listItems: string[] = [];
  let tableRows: string[][] = [];
  let inTable = false;
  
  const flushList = () => {
    if (listItems.length > 0) {
      elements.push(
        <ul key={elements.length} className="space-y-2 mb-6">
          {listItems.map((item, i) => (
            <li key={i} className="flex items-start gap-3">
              <svg className="w-5 h-5 text-brand-purple flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-gray-700 dark:text-gray-300">{item}</span>
            </li>
          ))}
        </ul>
      );
      listItems = [];
    }
  };
  
  const flushTable = () => {
    if (tableRows.length > 0) {
      const headers = tableRows[0];
      const rows = tableRows.slice(2); // Skip header and separator row
      
      elements.push(
        <div key={elements.length} className="overflow-x-auto mb-8">
          <table className="w-full border-collapse bg-white dark:bg-gray-900 rounded-lg overflow-hidden shadow-lg">
            <thead className="bg-brand-purple text-white">
              <tr>
                {headers.map((header, i) => (
                  <th key={i} className="px-6 py-4 text-left font-semibold">
                    {header.trim()}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((row, rowIndex) => (
                <tr 
                  key={rowIndex} 
                  className="border-b border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                >
                  {row.map((cell, cellIndex) => (
                    <td key={cellIndex} className="px-6 py-4 text-gray-700 dark:text-gray-300">
                      {cell.trim()}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
      tableRows = [];
      inTable = false;
    }
  };
  
  lines.forEach((line, index) => {
    // Check for table rows
    if (line.trim().startsWith('|')) {
      inTable = true;
      const cells = line.split('|').filter(cell => cell.trim()).map(cell => cell.trim());
      tableRows.push(cells);
      return;
    } else if (inTable) {
      flushTable();
    }
    
    // Check for bullet points
    if (line.trim().startsWith('•')) {
      flushTable();
      listItems.push(line.trim().substring(1).trim());
      return;
    } else {
      flushList();
    }
    
    // Bold text (**text**)
    if (line.includes('**')) {
      flushTable();
      const parts = line.split('**');
      const formatted = parts.map((part, i) => 
        i % 2 === 1 ? <strong key={i} className="font-bold text-brand-black dark:text-white">{part}</strong> : part
      );
      elements.push(
        <p key={elements.length} className="mb-4 text-gray-700 dark:text-gray-300">
          {formatted}
        </p>
      );
      return;
    }
    
    // Regular text or empty line
    if (line.trim()) {
      flushTable();
      elements.push(
        <p key={elements.length} className="mb-4 text-gray-700 dark:text-gray-300">
          {line}
        </p>
      );
    } else {
      elements.push(<div key={elements.length} className="h-2" />);
    }
  });
  
  // Flush any remaining items
  flushList();
  flushTable();
  
  return <div>{elements}</div>;
}

// Copy Button Component
function CopyButton({ code }: { code: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button
      onClick={handleCopy}
      className="absolute top-3 right-3 px-3 py-1.5 bg-white/10 hover:bg-white/20 text-white text-sm font-medium rounded-lg transition-all duration-200 flex items-center gap-2"
    >
      {copied ? (
        <>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
          Copied!
        </>
      ) : (
        <>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
          </svg>
          Copy
        </>
      )}
    </button>
  );
}

// Project full content data
const projectsContent: Record<string, {
  title: string;
  category: string;
  tech: string[];
  year: string;
  overview: string;
  sections: {
    title: string;
    content: string;
    code?: {
      language: string;
      filename?: string;
      code: string;
    };
  }[];
}> = {
  'ai-chatbot-quickstart': {
    title: 'AI Chatbot Quickstart (Streaming + Conversation History)',
    category: 'Developer Content',
    tech: ['Next.js 14', 'TypeScript', 'OpenAI API', 'Tailwind CSS', 'Server Components'],
    year: '2024',
    overview: 'This guide walks through building a streaming AI chatbot using Next.js 14 (App Router), OpenAI Chat Completions API, TailwindCSS, secure server-side streaming proxy, and conversation history for contextual replies.',
    sections: [
      {
        title: 'Prerequisites',
        content: 'You will need:\n\n• Node.js 18+\n• npm or pnpm\n• Next.js 13/14 (App Router)\n• OpenAI API key\n• TailwindCSS (optional but used here)\n\nBasic familiarity with:\n• fetch API\n• React hooks\n• server routes',
      },
      {
        title: 'Project Structure',
        content: 'Here\'s how the project is organized:',
        code: {
          language: 'bash',
          code: `/my-chatbot/
├─ src/
│  ├─ app/
│  │  ├─ page.tsx
│  │  └─ chat/
│  │     └─ page.tsx
│  ├─ components/
│  │  ├─ ChatWindow.tsx
│  │  └─ MessageBubble.tsx
│  └─ lib/
│     └─ openai-proxy.ts
├─ src/app/api/chat/route.ts
├─ .env.local
└─ package.json`,
        },
      },
      {
        title: 'Environment Variables',
        content: 'Create a .env.local file:\n\n⚠️ Never expose your API key in client-side code.',
        code: {
          language: 'bash',
          filename: '.env.local',
          code: `OPENAI_API_KEY=sk-xxxxx
NEXT_PUBLIC_CHAT_NAME=TheTechWriterBot`,
        },
      },
      {
        title: 'Server: Streaming Proxy Route',
        content: 'This server route securely handles OpenAI API calls and streams responses back to the client.',
        code: {
          language: 'typescript',
          filename: 'src/app/api/chat/route.ts',
          code: `import { NextResponse } from "next/server";

const OPENAI_API_URL = "https://api.openai.com/v1/chat/completions";
const OPENAI_API_KEY = process.env.OPENAI_API_KEY;

export async function POST(req: Request) {
  if (!OPENAI_API_KEY) {
    return NextResponse.json({ error: "Missing OPENAI_API_KEY" }, { status: 500 });
  }

  const body = await req.json();
  const { messages, model = "gpt-4o-mini", temperature = 0.2 } = body;

  if (!Array.isArray(messages) || messages.length === 0) {
    return NextResponse.json({ error: "Messages array required" }, { status: 400 });
  }

  const response = await fetch(OPENAI_API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: \`Bearer \${OPENAI_API_KEY}\`,
    },
    body: JSON.stringify({
      model,
      messages,
      temperature,
      stream: true,
    }),
  });

  if (!response.ok) {
    const errText = await response.text();
    return NextResponse.json({ error: errText }, { status: response.status });
  }

  const stream = new ReadableStream({
    async start(controller) {
      const decoder = new TextDecoder();
      const reader = response.body?.getReader();
      if (!reader) return controller.close();

      while (true) {
        const { value, done } = await reader.read();
        if (done) break;
        controller.enqueue(value);
      }
      controller.close();
    },
  });

  return new NextResponse(stream, {
    headers: { "Content-Type": "text/event-stream" },
  });
}`,
        },
      },
      {
        title: 'Chat UI + Streaming Logic',
        content: 'The ChatWindow component handles user input, maintains conversation history, and streams responses in real-time.',
        code: {
          language: 'typescript',
          filename: 'src/components/ChatWindow.tsx',
          code: `"use client";

import React, { useEffect, useRef, useState } from "react";

type Message = {
  role: "user" | "assistant" | "system";
  content: string;
};

export default function ChatWindow() {
  const [messages, setMessages] = useState<Message[]>([
    { role: "system", content: "You are a helpful assistant." },
  ]);
  const [input, setInput] = useState("");
  const [isStreaming, setIsStreaming] = useState(false);
  const messagesRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    messagesRef.current?.scrollTo({ top: messagesRef.current.scrollHeight });
  }, [messages]);

  async function handleSend() {
    if (!input.trim()) return;

    const userMsg: Message = { role: "user", content: input.trim() };
    setMessages((m) => [...m, userMsg]);
    setInput("");
    await sendToServer([...messages, userMsg]);
  }

  async function sendToServer(allMessages: Message[]) {
    setIsStreaming(true);
    setMessages((m) => [...m, { role: "assistant", content: "" }]);

    const res = await fetch("/api/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ messages: allMessages }),
    });

    const reader = res.body?.getReader();
    const decoder = new TextDecoder();

    if (!reader) {
      setIsStreaming(false);
      return;
    }

    while (true) {
      const { value, done } = await reader.read();
      if (done) break;
      const chunk = decoder.decode(value);

      setMessages((prev) => {
        const updated = [...prev];
        for (let i = updated.length - 1; i >= 0; i--) {
          if (updated[i].role === "assistant") {
            updated[i].content += chunk;
            break;
          }
        }
        return updated;
      });
    }

    setIsStreaming(false);
  }

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow">
      <div className="h-[60vh] overflow-auto mb-4" ref={messagesRef}>
        {messages.filter(m => m.role !== "system").map((m, idx) => (
          <div key={idx} className={\`mb-4 \${m.role === "user" ? "text-right" : "text-left"}\`}>
            <div className={\`inline-block px-4 py-2 rounded-lg \${
              m.role === "user" ? "bg-purple-600 text-white" : "bg-gray-100 text-gray-900"
            }\`}>
              <pre className="whitespace-pre-wrap">{m.content}</pre>
            </div>
          </div>
        ))}
      </div>

      <div className="flex gap-2">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-1 px-4 py-2 border rounded"
          placeholder="Ask the assistant..."
          onKeyDown={(e) => { if (e.key === "Enter") handleSend(); }}
        />
        <button
          onClick={handleSend}
          disabled={isStreaming}
          className="px-4 py-2 bg-purple-600 text-white rounded disabled:opacity-50"
        >
          {isStreaming ? "..." : "Send"}
        </button>
      </div>
    </div>
  );
}`,
        },
      },
      {
        title: 'How Conversation History Works',
        content: '• Each user message is appended to the messages state array.\n• On each request, the entire history is sent to the server.\n• The model uses previous messages as context for more accurate replies.\n\nReal-world apps should:\n• Summarize long histories\n• Limit token usage\n• Store past chats in a database',
      },
      {
        title: 'Testing the Chatbot Locally',
        content: 'Follow these steps to run the chatbot:',
        code: {
          language: 'bash',
          code: `# Install dependencies
npm install

# Add your .env.local file with OPENAI_API_KEY

# Start the dev server
npm run dev

# Navigate to:
# http://localhost:3000/chat`,
        },
      },
      {
        title: 'Troubleshooting',
        content: '**Common Issues:**\n\n• **401 errors** → invalid API key\n• **Stream not updating** → wrong response headers\n• **Vercel deployment issues** → enable Node.js runtime',
      },
      {
        title: 'Deployment Notes',
        content: '**Recommended: Vercel**\n\n1. Add OPENAI_API_KEY in project settings\n2. Ensure your API route uses the Node.js runtime (not Edge unless compatible)\n\nFor public deployments, add:\n• Authentication\n• Rate limiting\n• Message truncation',
      },
      {
        title: 'Suggested Improvements',
        content: '• SSE-parsed streaming (token-delta parsing)\n• RAG (Retrieval-Augmented Generation)\n• Chat history stored in DB\n• API cost display\n• Multi-model selector\n• Role-play modes / system toggle\n• UI accessibility improvements',
      },
    ],
  },
  'roles-permissions-saas': {
    title: 'Roles & Permissions — SaaS Feature Documentation',
    category: 'Feature Documentation',
    tech: ['SaaS Platforms', 'User Management', 'Access Control', 'Feature Documentation'],
    year: '2024',
    overview: 'This document explains how Roles & Permissions work inside a typical SaaS platform. It provides clear definitions, workflow behavior, permission rules, and example scenarios for users and administrators.',
    sections: [
      {
        title: 'Purpose of the Feature',
        content: 'The Roles & Permissions system allows organizations to:\n\n• Control what each user can view or modify\n• Protect sensitive data\n• Assign responsibilities\n• Keep workflows organized\n• Support teams of different sizes and structures\n\nThis feature is essential in SaaS products because it helps maintain security, accountability, and predictable access behavior.',
      },
      {
        title: 'Key Concepts',
        content: '**Role**\nA predefined access level assigned to a user. Roles determine what a user can see or do.\n\n**Permission**\nA specific action a user is allowed to perform (e.g., "Edit Projects," "View Billing," "Invite Members").\n\n**Admin**\nA user with full access to the workspace. Can manage everything, including billing, settings, and team members.\n\n**Member**\nA standard user with access only to features granted by their role.\n\n**Restricted Member**\nA user with limited access. They can view or edit only what is explicitly allowed.',
      },
      {
        title: 'Default Roles',
        content: 'Most SaaS platforms use 3–4 baseline roles:\n\n**Admin** - Full control of the workspace. Manages users, billing, settings, and all data.\n\n**Manager** - Manages teams, projects, and content but cannot access billing or advanced settings.\n\n**Member** - Standard access for day-to-day work. Can create and edit their own items.\n\n**Viewer** - Read-only access to specific areas. Cannot make changes.',
      },
      {
        title: 'Permissions Matrix',
        content: 'Below is a simplified permissions table showing what each role can do:\n\n**Table: Actions by Role**\n\n| Action | Admin | Manager | Member | Viewer |\n|--------|-------|---------|--------|--------|\n| Invite new users | ✅ | ❌ | ❌ | ❌ |\n| Manage user roles | ✅ | ❌ | ❌ | ❌ |\n| Access billing | ✅ | ❌ | ❌ | ❌ |\n| Create projects | ✅ | ✅ | ✅ | ❌ |\n| Edit all projects | ✅ | ✅ | ❌ | ❌ |\n| Edit own projects | ✅ | ✅ | ✅ | ❌ |\n| View all data | ✅ | ✅ | ❌ | ❌ |\n| View assigned data only | ✅ | ✅ | ✅ | ✅ |',
      },
      {
        title: 'How Roles Are Assigned',
        content: 'Roles can be assigned in two ways:\n\n**1. During User Invitation**\nAn admin selects a role when sending an invite to a new team member.\n\n**2. From Settings → Team → Manage Users**\nAdmin can adjust roles from a management dashboard.\n\n⚠️ Only Admins can change another user\'s role.',
      },
      {
        title: 'Behavior and Access Rules',
        content: '**Admin**\n• Full access\n• Can modify anything\n• Has billing permissions\n• Can downgrade themselves (if another admin exists)\n\n**Manager**\n• Ideal for team leads\n• Manages content & teams\n• Cannot access billing\n\n**Member**\n• Standard access\n• Creates and edits their own work\n• Cannot manage team settings\n\n**Viewer**\n• Read-only access\n• Ideal for auditors, clients, or external stakeholders',
      },
      {
        title: 'Example Scenarios',
        content: '**Scenario 1: A Manager assigns work to Members**\n\nManagers can:\n• Create a new project\n• Assign tasks to Members\n• Track progress\n\nMembers can edit assigned tasks but cannot modify the whole project.\n\n**Scenario 2: A Viewer needs temporary editing access**\n\nViewers cannot edit. A Manager or Admin must temporarily update their role to Member.\n\n**Scenario 3: Billing specialist joins the team**\n\nOnly Admins can access billing. Assign "Admin" to the billing specialist or give them a custom role with that permission.\n\n**Scenario 4: Team wants to limit project visibility**\n\nMembers can only see:\n• Projects assigned to them\n• Public items\n\nManagers/Admins can see all projects.',
      },
      {
        title: 'Custom Roles (Advanced Feature)',
        content: 'Some SaaS platforms allow organizations to create custom roles.\n\n**Custom roles support:**\n• Selecting individual permissions\n• Creating templates (e.g., "Finance Lead," "Support Agent")\n• Limiting access based on team or project\n\nThis increases flexibility for large organizations or regulated industries.',
      },
      {
        title: 'Best Practices',
        content: '• Follow the principle of least privilege: give users only the access they need\n• Keep billing restricted to Admins\n• Review user access monthly\n• Use custom roles for teams with specialized needs\n• Train new team members on what they can and can\'t do',
      },
      {
        title: 'Frequently Asked Questions',
        content: '**Can a Member promote themselves to Manager?**\nNo. Users cannot elevate their own access.\n\n**Can a Viewer upload files or edit content?**\nNo. Viewers have read-only access only.\n\n**Can an Admin remove themselves?**\nYes, but only if there is at least one other Admin remaining.\n\n**Can users have multiple roles?**\nOnly one role per user, unless custom roles allow combined permissions.',
      },
    ],
  },
  'api-convert-endpoint': {
    title: 'POST /api/convert — File Conversion API Documentation',
    category: 'API Documentation',
    tech: ['REST API', 'cURL', 'API Design', 'HTTP Methods', 'Authentication'],
    year: '2024',
    overview: 'This document provides a sample API reference for a fictional File Conversion API, which converts files into different formats using a REST endpoint.',
    sections: [
      {
        title: 'Endpoint: POST /api/convert',
        content: 'Converts an uploaded file into the specified format.',
      },
      {
        title: 'URL',
        content: '',
        code: {
          language: 'bash',
          code: 'POST https://api.filesuite.dev/v1/convert',
        },
      },
      {
        title: 'Headers',
        content: '| Header | Type | Required | Description |\n|--------|------|----------|-------------|\n| Authorization | string | Yes | Bearer token for authentication |\n| Content-Type | string | Yes | multipart/form-data |',
      },
      {
        title: 'Request Body',
        content: 'Multipart form fields:\n\n| Field | Type | Required | Description |\n|-------|------|----------|-------------|\n| file | file | Yes | The file to convert |\n| format | string | Yes | Output format (e.g., pdf, png) |\n| quality | number | No | Output quality (1–100) |',
      },
      {
        title: 'Example Request (cURL)',
        content: '',
        code: {
          language: 'bash',
          code: `curl -X POST https://api.filesuite.dev/v1/convert \\\n  -H "Authorization: Bearer YOUR_API_KEY" \\\n  -F "file=@resume.docx" \\\n  -F "format=pdf"`,
        },
      },
      {
        title: 'Example Response',
        content: '',
        code: {
          language: 'json',
          code: `{
  "success": true,
  "file_url": "https://cdn.filesuite.dev/output/resume.pdf",
  "format": "pdf",
  "size_kb": 248
}`,
        },
      },
      {
        title: 'Error Responses',
        content: '**400 — Bad Request**\nMissing required field: file\n\n**401 — Unauthorized**\nAPI key invalid or missing\n\n**415 — Unsupported Media Type**\nThe uploaded file format is not supported.\n\n**500 — Server Error**\nConversion failed. Try again later.',
      },
      {
        title: 'Notes',
        content: '• Files over 20MB require "Pro Tier" access\n• Conversion is asynchronous for large files\n• Webhooks are recommended for long-running conversions',
      },
    ],
  },
  'ai-smart-summaries': {
    title: 'Using Smart Summaries in FocusNote AI — Feature Walkthrough',
    category: 'AI Tool Guide',
    tech: ['AI Features', 'Product Documentation', 'User Guides', 'UX Writing'],
    year: '2024',
    overview: 'This guide explains how to use the Smart Summaries feature inside a fictional AI writing tool called FocusNote AI.',
    sections: [
      {
        title: 'What is Smart Summaries?',
        content: 'Smart Summaries use AI to convert long text into:\n\n• Bullet points\n• Short summaries\n• Key insights\n• Action items\n\n**This feature is ideal for:**\n\n• Meetings\n• Lectures\n• Research articles\n• Long messages',
      },
      {
        title: 'How to Use Smart Summaries',
        content: '**1. Open any document**\n\nNavigate to your document inside FocusNote AI.\n\n**2. Highlight the text you want summarized**\n\nSelect a sentence, paragraph, or entire document.\n\n**3. Click "Summarize" in the toolbar**\n\nA panel will open on the right.\n\n**4. Choose your summary style**\n\nOptions include:\n• Concise\n• Detailed\n• Bullet points\n• Action list\n\n**5. Click "Generate Summary"**\n\nThe AI processes the text and outputs a structured summary.',
      },
      {
        title: 'Example Output',
        content: '**Input:**\n\n"During the product meeting, the team discussed Q2 roadmap goals and upcoming engineering priorities..."\n\n**Output:**',
        code: {
          language: 'markdown',
          code: `• Added new dashboard\n• Improved onboarding\n• Updated mobile layout\n• Backend performance upgrades`,
        },
      },
      {
        title: 'Tips for Best Results',
        content: '• Use smaller chunks for more accurate summaries\n• Try multiple styles to compare outputs\n• Use action lists for task planning\n• Review and edit AI-generated summaries for accuracy\n• Combine with other AI features for enhanced productivity',
      },
      {
        title: 'Common Use Cases',
        content: '**Meeting Notes**\nQuickly extract action items and key decisions from long meeting transcripts.\n\n**Research Papers**\nGenerate concise summaries of academic articles for literature reviews.\n\n**Email Threads**\nSummarize lengthy email conversations into actionable points.\n\n**Content Planning**\nExtract main ideas from brainstorming sessions into organized lists.',
      },
      {
        title: 'Troubleshooting',
        content: '**Summary seems too short?**\nTry the "Detailed" style option for more comprehensive output.\n\n**Summary missing key points?**\nHighlight smaller sections and generate multiple summaries.\n\n**AI not responding?**\nCheck your internet connection and ensure you\'re logged in.\n\n**Need human review?**\nAlways review AI-generated content before sharing externally.',
      },
    ],
  },
  'api-key-management': {
    title: 'How to Build a Secure API Key Management System in Node.js',
    category: 'Technical Article',
    tech: ['Node.js', 'Environment Variables', 'API Security', 'dotenv', 'Server-side APIs'],
    year: '2024',
    overview: 'This article explains how to securely store and manage API keys in a Node.js backend using environment variables, server-side APIs, and deployment secrets.',
    sections: [
      {
        title: 'Why API Key Management Matters',
        content: 'API keys let you authenticate with external services.\n\n**Improper handling can lead to:**\n\n• Exposed credentials\n• Unauthorized access\n• Billing abuse\n• Data theft\n\nSecure API key management is a non-negotiable part of modern development, especially for AI and SaaS products.',
      },
      {
        title: 'Step 1: Create a .env File',
        content: 'Store your API keys in a `.env` file at the root of your project.\n\n⚠️ **Important:** Never commit this file to Git. Add it to your `.gitignore`.',
        code: {
          language: 'bash',
          filename: '.env',
          code: `OPENAI_API_KEY=sk-xxxxx\nSTRIPE_SECRET_KEY=sk_live_xxx\nDATABASE_URL=postgresql://...`,
        },
      },
      {
        title: 'Step 2: Load Environment Variables in Node.js',
        content: 'Use the `dotenv` package to load environment variables into your Node.js application.',
        code: {
          language: 'javascript',
          filename: 'server.js',
          code: `import dotenv from "dotenv";
dotenv.config();

// Access your API keys
const apiKey = process.env.OPENAI_API_KEY;
const stripeKey = process.env.STRIPE_SECRET_KEY;

console.log("API Key loaded:", apiKey ? "✅ Success" : "❌ Missing");`,
        },
      },
      {
        title: 'Step 3: Never Expose Keys in Frontend Code',
        content: 'This is the most critical security rule.\n\n**Bad Example ❌**\n\nNever hardcode API keys in client-side JavaScript:',
        code: {
          language: 'javascript',
          filename: 'bad-example.js',
          code: `// ❌ DANGEROUS - Exposed to everyone!
const KEY = "sk-xxxxx"; 

fetch("https://api.openai.com/v1/chat", {
  headers: { Authorization: \`Bearer \${KEY}\` }
});`,
        },
      },
      {
        title: 'The Right Way: Use Server Routes',
        content: '**Good Example ✅**\n\nAlways call your backend, which securely handles the API key:',
        code: {
          language: 'javascript',
          filename: 'frontend.js',
          code: `// ✅ SECURE - Key stays on server
const res = await fetch("/api/chat", {
  method: "POST",
  body: JSON.stringify({ message: "Hello" })
});

const data = await res.json();`,
        },
      },
      {
        title: 'Step 4: Create a Secure Server Route',
        content: 'Your backend acts as a protective layer between the client and external APIs.',
        code: {
          language: 'javascript',
          filename: 'api/process-payment.js',
          code: `export default async function handler(req, res) {
  // API key is loaded from environment variables
  const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
  
  try {
    const charge = await stripe.charges.create({
      amount: 2000,
      currency: "usd",
      source: req.body.token,
    });
    
    res.status(200).json({ success: true, charge });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}`,
        },
      },
      {
        title: 'Step 5: Deploy Safely',
        content: 'When deploying to production, follow these best practices:\n\n**Use Environment Variable Panels**\n\nPlatforms like Vercel, Netlify, and Railway provide secure environment variable storage in their dashboards.\n\n**Never Commit .env to Git**\n\nAdd `.env` to your `.gitignore` file:',
        code: {
          language: 'bash',
          filename: '.gitignore',
          code: `# Environment variables\n.env\n.env.local\n.env.production`,
        },
      },
      {
        title: 'Additional Security Best Practices',
        content: '• **Rotate keys regularly** - Change API keys every 3-6 months\n• **Use key restrictions** - Limit API keys to specific IP addresses or domains\n• **Monitor usage** - Set up alerts for unusual API activity\n• **Use separate keys** - Different keys for development, staging, and production\n• **Implement rate limiting** - Prevent abuse even if keys are compromised',
      },
      {
        title: 'Common Mistakes to Avoid',
        content: '**❌ Hardcoding keys in code**\nNever put API keys directly in your source code.\n\n**❌ Committing .env to GitHub**\nAlways add `.env` to `.gitignore` before your first commit.\n\n**❌ Using the same key everywhere**\nUse different keys for development and production environments.\n\n**❌ Sharing keys in chat or email**\nUse secure secret management tools instead.',
      },
      {
        title: 'Final Thoughts',
        content: 'Secure API key management is a **non-negotiable part of modern development**, especially for AI and SaaS products.\n\n**Remember:**\n• Store keys in `.env` files\n• Load them with `dotenv`\n• Never expose them client-side\n• Use server routes as a protective layer\n• Deploy with platform environment variables\n\nFollow these practices, and you\'ll build secure, production-ready applications that protect your users and your business.',
      },
    ],
  },
};

export default function ProjectPage() {
  const params = useParams();
  const slug = params?.slug as string;
  const project = projectsContent[slug];

  if (!project) {
    return (
      <>
        <Navigation />
        <main className="min-h-screen bg-brand-neutral dark:bg-gray-900 py-32">
          <div className="container-custom text-center">
            <h1 className="font-heading font-bold text-4xl text-brand-black dark:text-white mb-4">Project Not Found</h1>
            <Link href="/work" className="text-brand-purple hover:underline">
              ← Back to Portfolio
            </Link>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navigation />
      
      <main className="min-h-screen bg-brand-neutral dark:bg-gray-900">
        {/* Hero Section */}
        <section className="pt-24 sm:pt-32 pb-12 bg-gradient-to-br from-brand-neutral via-white to-brand-neutral/50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
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
                  <span className="px-4 py-1 bg-brand-purple/10 dark:bg-brand-purple/20 text-brand-purple text-sm font-semibold rounded-full">
                    {project.category}
                  </span>
                  <span className="text-gray-500 dark:text-gray-400">{project.year}</span>
                </div>
                
                <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl text-brand-black dark:text-white mb-6">
                  {project.title}
                </h1>
                
                <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                  {project.overview}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, index) => (
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

        {/* Documentation Content */}
        <section className="py-12 bg-white dark:bg-gray-800">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto prose prose-lg dark:prose-invert prose-purple">
              {project.sections.map((section, index) => (
                <div key={index} className="mb-12">
                  <h2 className="font-heading font-bold text-3xl text-brand-black dark:text-white mb-6">
                    {section.title}
                  </h2>
                  
                  <ContentRenderer content={section.content} />

                  {section.code && (
                    <div className="not-prose relative">
                      {section.code.filename && (
                        <div className="bg-gray-800 dark:bg-gray-900 px-4 py-2 rounded-t-lg">
                          <span className="text-gray-400 text-sm font-mono">{section.code.filename}</span>
                        </div>
                      )}
                      <div className="relative">
                        <CopyButton code={section.code.code} />
                        <pre className={`bg-gray-900 dark:bg-black p-6 ${section.code.filename ? 'rounded-b-lg' : 'rounded-lg'} overflow-x-auto`}>
                          <code className="text-sm text-gray-100 font-mono whitespace-pre">
                            {section.code.code}
                          </code>
                        </pre>
                      </div>
                    </div>
                  )}
                </div>
              ))}
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
