"use client";
import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

const links = [
  { href: "#about", label: "About" },
  { href: "#education", label: "Education" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 w-full bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
  <div className="container mx-auto flex items-center px-4 py-3">
    {/* Nav ซ้าย */}
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

    
    <div className="ml-auto flex items-center gap-2">
      <ThemeToggle />

      <Button
        size="icon"
        variant="ghost"
        className="md:hidden"
        onClick={() => setOpen(!open)}
      >
        <Menu className="h-5 w-5" />
      </Button>
    </div>
  </div>

  
  {open && (
    <div className="bg-background/95 backdrop-blur md:hidden">
      <div className="container px-4 py-2 grid gap-2">
        {links.map((l) => (
          <a
            key={l.href}
            href={l.href}
            className="text-sm py-2 text-muted-foreground hover:text-foreground transition-colors"
            onClick={() => setOpen(false)}
          >
            {l.label}
          </a>
        ))}
        <Button size="sm" asChild className="mt-2">
          <a href="#contact" onClick={() => setOpen(false)}>
            Hire me
          </a>
        </Button>
      </div>
    </div>
  )}
</header>

  );
}
