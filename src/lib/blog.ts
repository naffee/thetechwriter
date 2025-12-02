import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postsDirectory = path.join(process.cwd(), 'content/blog');

export interface BlogPost {
  slug: string;
  title: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  tags: string[];
  excerpt: string;
  coverImage?: string;
  content: string;
}

/**
 * Get all blog posts from the content/blog directory
 */
export function getAllPosts(): BlogPost[] {
  // Check if directory exists
  if (!fs.existsSync(postsDirectory)) {
    return [];
  }

  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames
    .filter((fileName) => fileName.endsWith('.mdx') || fileName.endsWith('.md'))
    .map((fileName) => {
      // Remove ".mdx" or ".md" from file name to get slug
      const slug = fileName.replace(/\.mdx?$/, '');

      // Read markdown file as string
      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');

      // Use gray-matter to parse the post metadata section
      const { data, content } = matter(fileContents);

      // Combine the data with the slug and content
      return {
        slug,
        title: data.title || '',
        author: data.author || 'The Tech Writer',
        date: data.date || '',
        readTime: data.readTime || '5 min read',
        category: data.category || 'Uncategorized',
        tags: data.tags || [],
        excerpt: data.excerpt || '',
        coverImage: data.coverImage || '',
        content,
      };
    });

  // Sort posts by date
  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

/**
 * Get a single blog post by slug
 */
export function getPostBySlug(slug: string): BlogPost | null {
  try {
    const fullPath = path.join(postsDirectory, `${slug}.mdx`);
    
    // Try .mdx first, then .md
    let fileContents: string;
    if (fs.existsSync(fullPath)) {
      fileContents = fs.readFileSync(fullPath, 'utf8');
    } else {
      const mdPath = path.join(postsDirectory, `${slug}.md`);
      if (fs.existsSync(mdPath)) {
        fileContents = fs.readFileSync(mdPath, 'utf8');
      } else {
        return null;
      }
    }

    // Use gray-matter to parse the post metadata section
    const { data, content } = matter(fileContents);

    return {
      slug,
      title: data.title || '',
      author: data.author || 'The Tech Writer',
      date: data.date || '',
      readTime: data.readTime || '5 min read',
      category: data.category || 'Uncategorized',
      tags: data.tags || [],
      excerpt: data.excerpt || '',
      coverImage: data.coverImage || '',
      content,
    };
  } catch (error) {
    console.error(`Error loading post ${slug}:`, error);
    return null;
  }
}

/**
 * Get posts by category
 */
export function getPostsByCategory(category: string): BlogPost[] {
  const allPosts = getAllPosts();
  return allPosts.filter((post) => post.category === category);
}

/**
 * Get posts by tag
 */
export function getPostsByTag(tag: string): BlogPost[] {
  const allPosts = getAllPosts();
  return allPosts.filter((post) => post.tags.includes(tag));
}

/**
 * Get all unique categories
 */
export function getAllCategories(): string[] {
  const allPosts = getAllPosts();
  const categories = allPosts.map((post) => post.category);
  return Array.from(new Set(categories));
}

/**
 * Get all unique tags
 */
export function getAllTags(): string[] {
  const allPosts = getAllPosts();
  const tags = allPosts.flatMap((post) => post.tags);
  return Array.from(new Set(tags));
}
