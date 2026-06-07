import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const description =
  "A running ledger of design thieves caught on X: the people who lift, trace, and repost other people's design work as their own.";

export const metadata: Metadata = {
  metadataBase: new URL("https://designthieves-on-x.vercel.app"),
  title: "Design Thieves",
  description,
  openGraph: {
    title: "Design Thieves",
    description,
    url: "https://designthieves-on-x.vercel.app",
    siteName: "Design Thieves",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Design Thieves",
    description,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
