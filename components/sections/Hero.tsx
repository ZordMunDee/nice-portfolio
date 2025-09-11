import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Github, Linkedin } from "lucide-react";

export default function Hero() {
  return (
    <SectionShell>
      <div className="grid items-center gap-8 md:grid-cols-2">
        <div>
          <Badge variant="secondary" className="mb-3">
            Frontend Developer
          </Badge>
          <h1 className="text-4xl md:text-3xl font-bold leading-tight">
            Hi, I'm <span className="text-primary">Thanawat Bunprasob</span> —{" "}
            Building modern front-end solutions with a focus on simplicity and
            usability.
          </h1>
          <p className="mt-4 text-muted-foreground">
            Building modern UIs with React, Next.js, and Tailwind — fast, clean,
            user-first.
          </p>

          {/* ปุ่ม action */}
          <div className="mt-6 flex gap-3">
            {/* Resume */}
            <Button asChild>
              <a href="#projects">View Resume</a>
            </Button>

            {/* GitHub */}
            <Button variant="outline" asChild>
              <a
                href="https://github.com/ZordMunDee" // 👈 ใส่ลิงก์ GitHub ของคุณ
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <Github className="h-4 w-4" />
                GitHub
              </a>
            </Button>

            {/* LinkedIn */}
            <Button variant="outline" asChild>
              <a
                href="https://www.linkedin.com/in/me/" // 👈 ใส่ลิงก์ LinkedIn ของคุณ
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <Linkedin className="h-4 w-4" />
                LinkedIn
              </a>
            </Button>
          </div>
        </div>

        {/* Avatar */}
        <div className="justify-self-center">
          <div className="relative h-56 w-56 overflow-hidden rounded-2xl border md:h-72 md:w-72">
            {/* replace with next/image */}
            <img
              src="/avatar.jpg"
              alt="Your portrait"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </SectionShell>
  );
}

function SectionShell({ children }: { children: React.ReactNode }) {
  return (
    <section className="section grid gap-6 py-8 md:py-12">
      <div className="mx-auto w-full max-w-5xl">{children}</div>
    </section>
  );
}
