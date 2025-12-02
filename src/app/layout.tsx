
import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "@/components/Providers";

export const metadata: Metadata = {
  title: "The Tech Writer | Technical Writing + Development",
  description: "Portfolio and blog for a Technical Writer + Developer. I write. I build. I bring ideas to life.",
  viewport: "width=device-width, initial-scale=1, maximum-scale=5",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className="bg-brand-neutral text-brand-black dark:bg-gray-900 dark:text-gray-100 font-sans antialiased">
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
