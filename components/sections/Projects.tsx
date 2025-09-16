import Section from "@/components/Section";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";

type Project = {
  title: string;
  desc: string;
  tags: string[];
  image?: string;
  live?: string;
  source?: string;
};

const projects: Project[] = [
  {
    title: "Color Palette Generator",
    desc: "Generate, save, and export Tailwind palettes.",
    tags: ["Next.js", "TypeScript", "Tailwind", "LocalStorage"],
    live: "https://frontend-projects-mood-journal-2fgt.vercel.app/palette",
    source: "https://github.com/ZordMunDee/projects-color-palette-generator",
    image: "/color.jpg",
  },
  {
    title: "Mood Journal",
    desc: "Track moods with charts and filters.",
    tags: ["Next.js", "React", "LocalStorage"],
    live: "https://frontend-projects-mood-journal-mlld.vercel.app/",
    source: "https://github.com/ZordMunDee/frontend-projects-mood-journal",
    image: "/Mood.jpg",
  },
  {
    title: "TasteTrail(In Process)",
    desc: "Uni eateries finder; I owned Auth & Edit Profile & Shop CRUD.",
    tags: ["Next.js", "Prisma", "Auth"],
    source: "https://github.com/KMITL-PCC/wongnok",
    image: "/wongnok.jpg",
  },
];

export default function Projects() {
  return (
    <Section id="projects" title="Projects" kicker="Selected work">
      <div className="grid gap-6 md:grid-cols-3">
        {projects.map((p) => (
          <Card key={p.title} className="overflow-hidden">
            <div className="aspect-video overflow-hidden">
              <Image
                src={p.image ?? "/placeholder.svg"}
                alt=""
                width={1280}
                height={720}
                className="h-full w-full object-cover"
              />
            </div>

            <CardHeader>
              <CardTitle className="text-base">{p.title}</CardTitle>
            </CardHeader>

            <CardContent className="text-sm text-muted-foreground">
              <p>{p.desc}</p>

              <div className="mt-3 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <Badge key={t} variant="outline">
                    {t}
                  </Badge>
                ))}
              </div>

              {/* Actions: Live / Source */}
              <div className="mt-5 flex flex-wrap gap-2">
                {p.live && (
                  <Button asChild size="sm">
                    <a
                      href={p.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2"
                    >
                      <ExternalLink className="h-4 w-4" />
                      Live
                    </a>
                  </Button>
                )}
                {p.source && (
                  <Button asChild size="sm" variant="outline">
                    <a
                      href={p.source}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2"
                    >
                      <Github className="h-4 w-4" />
                      Source
                    </a>
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </Section>
  );
}
