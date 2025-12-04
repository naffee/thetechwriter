import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio - Content Writing Examples for AI & SaaS",
  description: "Portfolio of content writing work including developer documentation, tutorials, blog posts, and product guides for AI and SaaS companies. See examples of my content writing expertise.",
  keywords: "content writing portfolio, technical writing examples, SaaS documentation, AI content examples, blog posts, product guides",
  openGraph: {
    title: "Portfolio - Content Writing Examples for AI & SaaS",
    description: "Portfolio of content writing work including developer documentation, tutorials, blog posts, and product guides for AI and SaaS companies.",
    type: "website",
    url: "https://thetechwriter.dev/work",
  },
};

export default function WorkLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
