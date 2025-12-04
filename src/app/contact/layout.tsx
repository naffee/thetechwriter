import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hire a Content Writer for AI & SaaS Products",
  description: "Ready to work with a professional content writer? Contact The Tech Writer to discuss your AI or SaaS content needs. Clear, user-focused content that drives product adoption.",
  keywords: "hire content writer, technical writing services, AI content writer, SaaS content writer, contact content writer",
  openGraph: {
    title: "Hire a Content Writer for AI & SaaS Products",
    description: "Ready to work with a professional content writer? Contact The Tech Writer to discuss your AI or SaaS content needs.",
    type: "website",
    url: "https://thetechwriter.dev/contact",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
