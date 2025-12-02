'use client';

import React from 'react';
import { useParams } from 'next/navigation';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import CatMascot from '@/components/CatMascot';
import Image from 'next/image';

// Sample blog posts data (in production, fetch from MDX files or CMS)
const blogPosts: Record<string, any> = {
  'developer-first-documentation': {
    title: 'The Art of Writing Developer-First Documentation',
    author: 'The Tech Writer',
    date: '2024-11-20',
    readTime: '5 min read',
    category: 'Technical Writing',
    tags: ['Documentation', 'Developer Experience', 'Best Practices'],
    excerpt: 'How to create documentation that developers actually want to read, with practical examples and best practices from real-world projects.',
    coverImage: 'https://res.cloudinary.com/demo/image/upload/v1/sample.jpg', // Replace with your Cloudinary URL
    content: `
      <p class="lead">Documentation that developers love starts with understanding their mindset. They're problem-solvers who value efficiency, clarity, and getting to the point quickly.</p>

      <h2>Why Most Documentation Fails</h2>
      <p>After working with dozens of developer teams, I've identified three common problems that make documentation frustrating:</p>
      
      <ul>
        <li><strong>Too much jargon, not enough examples</strong> - Developers learn by doing, not reading theory</li>
        <li><strong>Poor organization</strong> - Can't find what you need when you need it</li>
        <li><strong>Outdated content</strong> - Nothing erodes trust faster than broken examples</li>
      </ul>

      <h2>The Developer-First Approach</h2>
      <p>Here's what works based on data from actual documentation analytics:</p>

      <h3>1. Start with Quick Wins</h3>
      <p>Your "Getting Started" guide should get developers to success in under 5 minutes. Include:</p>
      
      <pre><code class="language-bash">npm install your-package
# Run your first command
your-package init

# Expected output:
# ✓ Project initialized successfully!</code></pre>

      <h3>2. Show, Don't Tell</h3>
      <p>Instead of explaining how authentication works, show them:</p>

      <pre><code class="language-javascript">// Good: Actual working code
const client = new APIClient({
  apiKey: process.env.API_KEY
});

const user = await client.auth.login({
  email: 'user@example.com',
  password: 'secure-password'
});</code></pre>

      <h3>3. Progressive Disclosure</h3>
      <p>Structure content from simple to complex. Give developers the basics first, then link to advanced topics.</p>

      <blockquote>
        <p>"Great documentation meets developers where they are, not where you think they should be."</p>
      </blockquote>

      <h2>Real-World Example: Stripe's Documentation</h2>
      <p>Stripe's API docs are often cited as the gold standard. Here's why:</p>

      <ul>
        <li>Interactive code examples in multiple languages</li>
        <li>Try it in the browser without setup</li>
        <li>Clear error messages with solutions</li>
        <li>Searchable and well-organized</li>
      </ul>

      <h2>Measuring Success</h2>
      <p>How do you know if your documentation is working? Track these metrics:</p>

      <ol>
        <li><strong>Time to First Success</strong> - How long until a developer completes their first integration?</li>
        <li><strong>Support Ticket Volume</strong> - Good docs reduce support burden by 40-60%</li>
        <li><strong>Search Analytics</strong> - What are developers searching for but not finding?</li>
        <li><strong>Page Engagement</strong> - Are they reading or bouncing?</li>
      </ol>

      <h2>Action Steps</h2>
      <p>Ready to improve your docs? Start here:</p>

      <ol>
        <li>Audit your current "Getting Started" guide</li>
        <li>Add at least 3 real-world code examples</li>
        <li>Test it with someone who's never used your product</li>
        <li>Iterate based on feedback</li>
      </ol>

      <p>Remember: Documentation is a product feature, not an afterthought. Invest in it like you would any other part of your product.</p>
    `,
  },
  'nextjs-mdx-blog': {
    title: 'Building a Modern Blog with Next.js 14 and MDX',
    author: 'The Tech Writer',
    date: '2024-11-15',
    readTime: '8 min read',
    category: 'Web Development',
    tags: ['Next.js', 'React', 'MDX', 'Tutorial'],
    excerpt: 'A comprehensive guide to creating a performant, SEO-friendly blog platform with the latest Next.js features and MDX for rich content.',
    coverImage: 'https://res.cloudinary.com/demo/image/upload/v1/sample.jpg',
    content: `
      <p class="lead">Next.js 14 brings powerful features for content-heavy sites. Combined with MDX, you can create a blog that's both developer-friendly and performance-optimized.</p>

      <h2>Why Next.js + MDX?</h2>
      <p>This combination gives you the best of both worlds:</p>
      
      <ul>
        <li><strong>Developer Experience</strong> - Write content in Markdown with React components</li>
        <li><strong>Performance</strong> - Static generation for lightning-fast pages</li>
        <li><strong>SEO</strong> - Server-side rendering and metadata control</li>
        <li><strong>Flexibility</strong> - Use React components anywhere in your content</li>
      </ul>

      <h2>Setting Up Your Blog</h2>
      <p>Let's build this step by step.</p>

      <h3>1. Initialize Your Project</h3>
      <pre><code class="language-bash">npx create-next-app@latest my-blog --typescript
cd my-blog
npm install @next/mdx @mdx-js/loader @mdx-js/react gray-matter</code></pre>

      <h3>2. Configure MDX</h3>
      <p>Update your <code>next.config.js</code>:</p>

      <pre><code class="language-javascript">const withMDX = require('@next/mdx')({
  extension: /\\.mdx?$/,
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
  },
});

module.exports = withMDX({
  pageExtensions: ['ts', 'tsx', 'md', 'mdx'],
});</code></pre>

      <h3>3. Create Your Content Structure</h3>
      <p>Organize your blog posts in a content directory:</p>

      <pre><code class="language-plaintext">content/
  blog/
    my-first-post.mdx
    another-post.mdx</code></pre>

      <h2>Adding Images with Cloudinary</h2>
      <p>Since you're using Cloudinary, here's how to optimize image loading:</p>

      <pre><code class="language-jsx">import Image from 'next/image';

const cloudinaryLoader = ({ src, width, quality }) => {
  const params = ['f_auto', 'c_limit', \`w_\${width}\`, \`q_\${quality || 'auto'}\`];
  return \`https://res.cloudinary.com/your-cloud/image/upload/\${params.join(',')}/\${src}\`;
};

<Image
  loader={cloudinaryLoader}
  src="blog/my-image.jpg"
  width={1200}
  height={630}
  alt="Description"
/></code></pre>

      <h2>Styling with Tailwind Typography</h2>
      <p>The <code>@tailwindcss/typography</code> plugin makes your content beautiful out of the box:</p>

      <pre><code class="language-jsx"><article className="prose prose-lg prose-purple mx-auto">
  {/* Your MDX content */}
</article></code></pre>

      <h2>Performance Tips</h2>
      <ol>
        <li><strong>Static Generation</strong> - Generate pages at build time</li>
        <li><strong>Image Optimization</strong> - Use Next.js Image component with Cloudinary</li>
        <li><strong>Code Splitting</strong> - MDX automatically code-splits components</li>
        <li><strong>Caching</strong> - Leverage Cloudinary's CDN for images</li>
      </ol>

      <h2>Next Steps</h2>
      <p>Now that you have the basics:</p>
      <ul>
        <li>Add syntax highlighting with Prism or Shiki</li>
        <li>Implement search with Algolia or Fuse.js</li>
        <li>Add RSS feed generation</li>
        <li>Set up analytics</li>
      </ul>

      <p>Happy blogging! 🚀</p>
    `,
  },
};

export default function BlogPost() {
  const params = useParams();
  const slug = params?.slug as string;
  const post = blogPosts[slug];

  if (!post) {
    return (
      <>
        <Navigation />
        <main className="min-h-screen bg-brand-neutral flex items-center justify-center">
          <div className="text-center">
            <div className="text-6xl mb-4">📝</div>
            <h1 className="font-heading font-bold text-4xl text-brand-black mb-4">
              Post Not Found
            </h1>
            <p className="text-gray-600 mb-8">
              The blog post you're looking for doesn't exist.
            </p>
            <a href="/blog" className="btn-primary">
              Back to Blog
            </a>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navigation />
      
      <main className="min-h-screen bg-brand-neutral">
        {/* Hero/Header Section */}
        <section className="pt-32 pb-12 bg-gradient-to-br from-brand-neutral via-white to-brand-neutral/50 relative overflow-hidden">
          <div className="absolute top-20 right-10 w-96 h-96 bg-brand-purple/5 rounded-full blur-3xl" />
          <div className="absolute bottom-20 left-10 w-96 h-96 bg-brand-blue/5 rounded-full blur-3xl" />
          
          <div className="container-custom relative z-10">
            <div className="max-w-4xl mx-auto">
              {/* Breadcrumb */}
              <nav className="flex items-center gap-2 text-sm text-gray-600 mb-6">
                <a href="/blog" className="hover:text-brand-purple transition-colors">Blog</a>
                <span>/</span>
                <span className="text-brand-purple">{post.category}</span>
              </nav>

              {/* Category Badge */}
              <div className="inline-block px-4 py-2 bg-brand-purple/10 rounded-full mb-6">
                <span className="text-brand-purple text-sm font-medium">{post.category}</span>
              </div>

              {/* Title */}
              <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl text-brand-black mb-6 leading-tight">
                {post.title}
              </h1>

              {/* Excerpt */}
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                {post.excerpt}
              </p>

              {/* Meta Info */}
              <div className="flex flex-wrap items-center gap-6 text-gray-600">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-brand-purple/20 to-brand-blue/20 rounded-full flex items-center justify-center">
                    <CatMascot variant="peeking" className="w-8 h-8" />
                  </div>
                  <div>
                    <div className="font-medium text-brand-black">{post.author}</div>
                    <div className="text-sm">{post.date}</div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>{post.readTime}</span>
                </div>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mt-6">
                {post.tags.map((tag: string, index: number) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-brand-neutral text-brand-black text-sm font-medium rounded-full"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Cover Image */}
        {post.coverImage && (
          <section className="py-8 bg-white">
            <div className="container-custom">
              <div className="max-w-4xl mx-auto">
                <div className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl">
                  <Image
                    src={post.coverImage}
                    alt={post.title}
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Article Content */}
        <article className="section-padding bg-white">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              {/* Prose Content with Tailwind Typography */}
              <div 
                className="prose prose-lg prose-purple max-w-none
                  prose-headings:font-heading prose-headings:font-bold prose-headings:text-brand-black
                  prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6
                  prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-4
                  prose-p:text-gray-600 prose-p:leading-relaxed prose-p:mb-6
                  prose-a:text-brand-purple prose-a:no-underline hover:prose-a:underline
                  prose-strong:text-brand-black prose-strong:font-bold
                  prose-code:text-brand-purple prose-code:bg-brand-neutral prose-code:px-2 prose-code:py-1 prose-code:rounded
                  prose-pre:bg-brand-black prose-pre:text-white prose-pre:rounded-2xl prose-pre:p-6
                  prose-ul:my-6 prose-ol:my-6
                  prose-li:text-gray-600 prose-li:my-2
                  prose-blockquote:border-l-4 prose-blockquote:border-brand-purple prose-blockquote:pl-6 prose-blockquote:italic prose-blockquote:text-gray-700
                  prose-img:rounded-2xl prose-img:shadow-lg"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
            </div>
          </div>
        </article>

        {/* Author CTA */}
        <section className="py-16 bg-brand-neutral">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <div className="card p-8 md:p-12">
                <div className="flex flex-col md:flex-row gap-8 items-center">
                  <div className="flex-shrink-0">
                    <div className="w-24 h-24 bg-gradient-to-br from-brand-purple/20 to-brand-blue/20 rounded-full flex items-center justify-center">
                      <CatMascot variant="sitting" className="w-20 h-20" />
                    </div>
                  </div>
                  <div className="flex-1 text-center md:text-left">
                    <h3 className="font-heading font-bold text-2xl text-brand-black mb-2">
                      Written by {post.author}
                    </h3>
                    <p className="text-gray-600 mb-4">
                      Technical Writer + Developer who loves making complex things beautifully simple.
                      Helping teams create better products through clear documentation and modern development.
                    </p>
                    <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                      <a href="/about" className="btn-outline text-sm">
                        About Me
                      </a>
                      <a href="/contact" className="btn-primary text-sm">
                        Work Together
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Related Posts */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-heading font-bold text-3xl md:text-4xl text-brand-black mb-8 text-center">
                More from the <span className="text-brand-purple">Blog</span>
              </h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                {Object.entries(blogPosts)
                  .filter(([key]) => key !== slug)
                  .slice(0, 2)
                  .map(([key, relatedPost]) => (
                    <a
                      key={key}
                      href={`/blog/${key}`}
                      className="card overflow-hidden group cursor-pointer"
                    >
                      <div className="h-40 bg-gradient-to-br from-brand-purple/20 to-brand-blue/20 flex items-center justify-center text-5xl">
                        📝
                      </div>
                      <div className="p-6">
                        <div className="text-brand-purple text-sm font-medium mb-2">
                          {relatedPost.category}
                        </div>
                        <h3 className="font-heading font-bold text-xl text-brand-black mb-2 group-hover:text-brand-purple transition-colors line-clamp-2">
                          {relatedPost.title}
                        </h3>
                        <p className="text-gray-600 text-sm line-clamp-2">
                          {relatedPost.excerpt}
                        </p>
                      </div>
                    </a>
                  ))}
              </div>

              <div className="text-center mt-8">
                <a href="/blog" className="btn-outline">
                  View All Posts
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
