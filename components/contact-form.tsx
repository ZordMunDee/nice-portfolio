"use client";

import { z } from "zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

import { Loader2, Send } from "lucide-react";
import { toast } from "sonner";

/* ---------------- schema ---------------- */
const contactFormSchema = z.object({
  name: z.string().min(2, "Please enter your name").max(50, "Name is too long"),
  email: z.string().email("Please enter a valid email"),
  message: z.string().min(5, "Message is too short").max(500, "Message is too long"),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

/* ---------------- api ---------------- */
async function submitContact(values: ContactFormValues) {
  const res = await fetch("/api/contact", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(values),
  });

  if (!res.ok) {
    throw new Error("Request failed");
  }

  return res.json();
}

/* ---------------- component ---------------- */
export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: { name: "", email: "", message: "" },
  });

  const handleSubmit = async (values: ContactFormValues) => {
    setIsSubmitting(true);
    try {
      await submitContact(values);
      toast.success("Your message has been sent 🚀");
      form.reset();
    } catch {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(handleSubmit)}
        className="max-w-xl mx-auto p-8 rounded-2xl shadow-xl space-y-6 border"
      >
        <h2 className="text-2xl font-bold mb-2">Contact Me</h2>
        <p className="mb-6">
          Have a question or want to work together? Fill out the form below.
        </p>

        <div className="grid gap-4 md:grid-cols-2">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input placeholder="Your name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input placeholder="Your email" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Textarea placeholder="Your message..." rows={5} {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" disabled={isSubmitting} className="w-full flex justify-center items-center gap-2">
          {isSubmitting ? (
            <>
              <Loader2 className="h-5 w-5 animate-spin" />
              Sending...
            </>
          ) : (
            <>
              Send Message
              <Send className="h-5 w-5" />
            </>
          )}
        </Button>
      </form>
    </Form>
  );
}
