import { Separator } from "@/components/ui/separator";

export default function Section({
  id,
  title,
  kicker,
  children,
}: {
  id: string;
  title: string;
  kicker?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="section scroll-mt-24">
      <div className="mx-auto max-w-5xl">
        <div className="mb-6">
          {kicker && (
            <div className="text-xs uppercase tracking-widest text-primary/80">
              {kicker}
            </div>
          )}
          <h2 className="text-2xl md:text-3xl font-bold">{title}</h2>
          <Separator className="mt-3" />
        </div>
        {children}
      </div>
    </section>
  );
}
