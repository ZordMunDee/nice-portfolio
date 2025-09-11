"use client";
import Section from "@/components/Section";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

export default function Contact() {
  const [sent, setSent] = useState(false);
  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: wire up to email or backend. For now, fake it.
    setSent(true);
  };
  return (
    <Section id="contact" title="Contact" kicker="Let's talk">
      <form onSubmit={onSubmit} className="mx-auto grid max-w-2xl gap-4">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <Input placeholder="Your name" required />
          <Input type="email" placeholder="Email" required />
        </div>
        <Input placeholder="Subject" />
        <Textarea placeholder="Message" className="min-h-[120px]" required />
        <div className="flex justify-end">
          <Button type="submit">Send message</Button>
        </div>
        {sent && (
          <p className="text-sm text-green-600">
            Thanks! I&apos;ll reply soon.
          </p>
        )}
      </form>
    </Section>
  );
}
