import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import { SmoothScroll } from "@/components/SmoothScroll";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Julian Portofolio's",
  description: "Portfolio of Joel, a Creative Developer specializing in Next.js, Motion, and advanced web interactions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-neutral-950 text-neutral-50 overflow-x-hidden selection:bg-white selection:text-neutral-950">
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
