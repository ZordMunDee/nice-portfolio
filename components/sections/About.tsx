import Section from "@/components/Section";
import { Card, CardContent } from "@/components/ui/card";

const facts = [
  { label: "Role", value: "Front-end Developer" },
  { label: "Degree", value: "B.Eng. Computer Engineering" },
  {
    label: "Location",
    value: "Phatthalung, Thailand",
  },
  { label: "Email", value: "zeroznice.nice@gmail.com" },
];

export default function About() {
  return (
    <Section id="about" title="About" kicker="Get to know me">
      <div className="grid gap-6 md:grid-cols-2">
        <div className="prose prose-slate dark:prose-invert max-w-none">
          <p>
            Hello, I am a Computer Engineering student with expertise in web
            development using <strong>React</strong>, <strong>Next.js</strong>,
            and <strong>Tailwind CSS</strong>. I enjoy designing in a minimal,
            clean, and user-friendly style. I am currently seeking an internship
            opportunity to further enhance my skills. I am passionate about
            learning new things, enjoy solving technical problems, and am always
            open to feedback to improve my work. My goal is to advance my career
            as a Front-end Developer.
          </p>
          <p>
            I enjoy collaborating, polishing details, and learning new tools.
            Outside of coding, take photos, and explore coffee shops.
          </p>
        </div>
        <Card>
          <CardContent className="grid grid-cols-2 gap-4 p-6 text-sm">
            {facts.map((f) => (
              <div key={f.label} className="grid">
                <span className="text-muted-foreground">{f.label}</span>
                <span className="font-medium">{f.value}</span>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </Section>
  );
}
