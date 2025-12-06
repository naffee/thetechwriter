
import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "@/components/Providers";
import SEOSchemas from "@/components/SEOSchemas";

export const metadata: Metadata = {
  title: "Content Writer for AI & SaaS | Technical Writing Services",
  description: "Professional content writer specializing in AI and SaaS products. I create clear, user-focused content including tutorials, explainers, blog posts, and product documentation.",
  viewport: "width=device-width, initial-scale=1, maximum-scale=5",
  keywords: "content writer, technical writer, AI content, SaaS content, blog writing, product documentation",
  authors: [{ name: "The Tech Writer" }],
  creator: "The Tech Writer",
  publisher: "The Tech Writer",
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://thetechwriter.dev",
    siteName: "The Tech Writer",
    title: "Content Writer for AI & SaaS | Technical Writing Services",
    description: "Professional content writer specializing in AI and SaaS products. I create clear, user-focused content including tutorials, explainers, blog posts, and product documentation.",
    images: [{
      url: "https://thetechwriter.dev/og-image.png",
      width: 1200,
      height: 630,
      alt: "The Tech Writer - Content Writer for AI & SaaS",
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Content Writer for AI & SaaS | Technical Writing Services",
    description: "Professional content writer specializing in AI and SaaS products. Clear, user-focused content that helps teams explain their products.",
    images: ["https://thetechwriter.dev/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <meta name="theme-color" content="transparent" />
        <meta name="color-scheme" content="light dark" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg?v=3" />
        <link rel="shortcut icon" type="image/svg+xml" href="/favicon.svg?v=3" />
        <link rel="apple-touch-icon" href="/favicon.svg?v=3" />
        <SEOSchemas />
      </head>
      <body className="bg-brand-neutral text-brand-black dark:bg-gray-900 dark:text-gray-100 font-sans antialiased">
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
