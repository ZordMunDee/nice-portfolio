"use client";

import * as motion from "motion/react-client";
import { Card } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { educations, intro, skills, socialLinks } from "@/lib/data";
import { Github, Linkedin, Mail, ArrowDownRight } from "lucide-react";
import { TypingAnimation } from "@/components/ui/typing-animation";
import { BlurFade } from "@/components/ui/blur-fade";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";

import Image from "next/image";
import Link from "next/link";

const Home = () => {
  return (
    <BlurFade className="flex flex-col gap-20">
      {/* ---------------- Hero Section ---------------- */}
      <section className="flex flex-col-reverse md:flex-row items-center justify-between gap-12 md:gap-16">
        <div className="flex flex-1 flex-col gap-6 max-w-lg">
          <TypingAnimation
            startOnView
            delay={500}
            className="text-3xl md:text-5xl font-extrabold tracking-tight leading-snug"
          >
            {`Hi, I'm ${intro.name}! 👋`}
          </TypingAnimation>
          <p className="text-base md:text-lg">{intro.firstDescription}</p>
          <p className="text-base md:text-lg">
            Looking for a{" "}
            <span className="font-semibold">Frontend</span> internship to
            learn, grow, and contribute.
          </p>

          <p className="font-semibold flex items-center gap-2 text-base md:text-lg">
            <ArrowDownRight className="animate-bounce h-5 w-5" />
            {intro.thirdDescription}
          </p>

          <div className="flex flex-wrap items-center gap-4 mt-4">
            <Link href="/resume.pdf" target="_blank">
              <InteractiveHoverButton className="px-4 py-2 text-sm rounded-full transition">
                Resume
              </InteractiveHoverButton>
            </Link>

            {socialLinks.map((link) => (
              <Link key={link.name} href={link.href} target="_blank">
                <InteractiveHoverButton className="px-3 py-2 rounded-full transition">
                  {link.icon === "Github" ? (
                    <Github className="h-4 w-4" />
                  ) : link.icon === "Linkedin" ? (
                    <Linkedin className="h-4 w-4" />
                  ) : link.icon === "Mail" ? (
                    <Mail className="h-4 w-4" />
                  ) : (
                    link.icon
                  )}
                </InteractiveHoverButton>
              </Link>
            ))}
          </div>
        </div>

        <div className="relative w-48 h-48 md:w-72 md:h-72 rounded-xl overflow-hidden shadow-xl">
          <Image
            src="/avatar.png"
            alt="profile"
            fill
            className="object-cover rounded-xl transform hover:scale-105 transition-transform duration-300"
          />
        </div>
      </section>

      {/* ---------------- Tabs Section ---------------- */}
      <section className="w-full flex flex-col items-center gap-8">
        <Tabs defaultValue="skills" className="w-full max-w-4xl">
          <TabsList className="grid grid-cols-2 rounded-lg p-1">
            <TabsTrigger value="skills" className="rounded-lg hover:opacity-80">
              Skills
            </TabsTrigger>
            <TabsTrigger value="education" className="rounded-lg hover:opacity-80">
              Education
            </TabsTrigger>
          </TabsList>

          {/* ---------------- Skills Tab ---------------- */}
          <TabsContent value="skills" className="mt-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {skills.map((skill) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="flex flex-col items-center gap-2 p-4 rounded-lg shadow hover:scale-105 transition-transform"
                >
                  <Image
                    src={skill.src}
                    alt={skill.name}
                    width={50}
                    height={50}
                    className="rounded-sm"
                  />
                  <span className="font-medium text-sm">{skill.name}</span>
                </motion.div>
              ))}
            </div>
          </TabsContent>

          {/* ---------------- Education Tab ---------------- */}
          <TabsContent value="education" className="mt-6">
            <div className="flex flex-col gap-6">
              {educations.map((edu) => (
                <motion.div
                  key={edu.name}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="flex flex-col md:flex-row gap-4 p-4 rounded-lg shadow"
                >
                  <Avatar className="w-14 h-14 border ">
                    <AvatarImage src={edu.image} alt={edu.name} />
                    <AvatarFallback>{edu.name}</AvatarFallback>
                  </Avatar>
                  <div className="flex flex-col justify-center">
                    {edu.year && <time className="text-xs">{edu.year}</time>}
                    <span className="font-medium">{edu.institution.join(", ")}</span>
                    <p className="text-sm">{edu.name} ({edu.descriptions[0]})</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </section>
    </BlurFade>
  );
};

export default Home;
