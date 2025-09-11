"use client";
import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

const links = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        <Link href="#" className="font-semibold tracking-tight">
          Thanawat Bunprasob<span className="text-primary">.</span>
        </Link>
        <nav className="hidden items-center gap-6 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {l.label}
            </a>
          ))}
          <Button size="sm" asChild>
            <a href="#contact">Hire me</a>
          </Button>
        </nav>
        <Button
          size="icon"
          variant="ghost"
          className="md:hidden"
          onClick={() => setOpen(!open)}
        >
          <Menu className="h-5 w-5" />
        </Button>
      </div>
      {open && (
        <div className="border-t bg-background md:hidden">
          <div className="container px-4 py-2 grid gap-2">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm py-2"
                onClick={() => setOpen(false)}
              >
                {l.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
