import Section from "@/components/Section";
import { Progress } from "@/components/ui/progress";

const skills = [
  { name: "HTML", value: 90 },
  { name: "CSS", value: 85 },
  { name: "JavaScript", value: 85 },
  { name: "TypeScript", value: 80 },
  { name: "React", value: 90 },
  { name: "Next.js", value: 85 },
  { name: "Tailwind", value: 90 },
];

export default function Skills() {
  return (
    <Section id="skills" title="Skills" kicker="What I use">
      <div className="grid gap-4 md:grid-cols-2">
        {skills.map((s) => (
          <div key={s.name} className="grid gap-2">
            <div className="flex items-center justify-between text-sm">
              <span className="font-medium">{s.name}</span>
              <span className="text-muted-foreground">{s.value}%</span>
            </div>
            <Progress value={s.value} />
          </div>
        ))}
      </div>
    </Section>
  );
}
