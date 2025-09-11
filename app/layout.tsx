import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Thanawat Bunprasob — Portfolio",
  description:
    "Frontend developer portfolio featuring projects with Next.js, React and Tailwind CSS",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} bg-background text-foreground`}>
        <Navbar />
        <main className="container mx-auto px-4 md:px-8">{children}</main>
      </body>
    </html>
  );
}
