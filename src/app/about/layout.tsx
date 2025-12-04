import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About - Content Writer for AI & SaaS Products",
  description: "Learn about The Tech Writer - a content writer specializing in AI and SaaS products. I create clear, user-focused content that helps teams explain complex features and improve product adoption.",
  openGraph: {
    title: "About - Content Writer for AI & SaaS Products",
    description: "Learn about The Tech Writer - a content writer specializing in AI and SaaS products. I create clear, user-focused content.",
    type: "website",
    url: "https://thetechwriter.dev/about",
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
