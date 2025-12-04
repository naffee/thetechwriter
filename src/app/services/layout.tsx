import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Content Writing Services for AI & SaaS | Technical Writing",
  description: "Professional content writing services for AI and SaaS products. I offer blog posts, tutorials, product guides, documentation, and AI content writing. Per-word and project-based pricing available.",
  keywords: "content writing services, technical writing, SaaS content, AI content, blog writing services, product documentation writing",
  openGraph: {
    title: "Content Writing Services for AI & SaaS | Technical Writing",
    description: "Professional content writing services for AI and SaaS products. Blog posts, tutorials, product guides, and documentation.",
    type: "website",
    url: "https://thetechwriter.dev/services",
  },
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
