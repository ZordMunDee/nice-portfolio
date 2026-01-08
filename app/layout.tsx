import "./globals.css";
import type { Metadata } from "next";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "sonner";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ParticlesEffect from "@/components/particles-effect";

export const metadata: Metadata = {
  title: "Thanawat Bunprasob — Portfolio",
  description:
    "Frontend developer portfolio featuring projects with Next.js, React and Tailwind CSS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="relative flex min-h-svh w-full flex-col px-8">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <ParticlesEffect>
            <Header />
            <main className="container mx-auto max-w-3xl flex-1">
              {children}
            </main>
            <Footer />
            <Toaster />
          </ParticlesEffect>
        </ThemeProvider>
      </body>
    </html>
  );
}
