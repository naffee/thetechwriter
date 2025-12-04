import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog - Content Writing Tips for AI & SaaS",
  description: "Read insights on content writing for AI and SaaS products. Learn about technical writing, product documentation, tutorials, and strategies for explaining complex features clearly.",
  keywords: "technical writing blog, SaaS content, AI writing tips, content writing, product documentation blog, tutorials",
  openGraph: {
    title: "Blog - Content Writing Tips for AI & SaaS",
    description: "Read insights on content writing for AI and SaaS products. Learn about technical writing, tutorials, and clear communication strategies.",
    type: "website",
    url: "https://thetechwriter.dev/blog",
  },
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
