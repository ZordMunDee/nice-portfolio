"use client";

import { useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import Section from "@/components/Section";

export default function ContactSection() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const to = "zeroznice.nice@gmail.com";
    const mailSubject = subject?.trim() || "New message from portfolio";
    const body = `Name: ${name}
Email: ${email}

${message}`;

    window.location.href = `mailto:${to}?subject=${encodeURIComponent(
      mailSubject
    )}&body=${encodeURIComponent(body)}`;

    setSent(true);
  };

  return (
    <Section id="contact" title="Contact" kicker="Let's talk">
      <form onSubmit={onSubmit} className="mx-auto grid max-w-2xl gap-4">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div className="grid gap-2">
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              placeholder="Thanawat Bunprasob"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
        </div>

        <div className="grid gap-2">
          <Label htmlFor="subject">Subject</Label>
          <Input
            id="subject"
            placeholder="Subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
          />
        </div>

        <div className="grid gap-2">
          <Label htmlFor="message">Message</Label>
          <Textarea
            id="message"
            placeholder="Message"
            className="min-h-[120px]"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
        </div>

        <div className="flex justify-end">
          <Button type="submit">Send message</Button>
        </div>

        {sent && (
          <p className="text-sm text-green-600" aria-live="polite">
            Thanks! I&apos;ll reply soon.
          </p>
        )}
      </form>
    </Section>
  );
}
