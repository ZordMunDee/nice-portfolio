import Section from "@/components/Section";
import { Card } from "@/components/ui/card";

type Education = {
  school: string;
  degree: string;
  year: string;
  desc: string;
  logo: string;
  gpa?: string;
};

const educations: Education[] = [
  {
    school: "KMUTT",
    degree: "B.Eng. Computer Engineering",
    year: "2023 – Present",
    desc: "Studying software engineering.",
    logo: "/KMITL.jpg",
    gpa: "2.61",
  },
  {
    school: "High School Name",
    degree: "Science – Mathematics Program",
    year: "2020 – 2022",
    desc: "Focused on science and mathematics with extracurricular programming.",
    logo: "/logo-payom.jpg",
    gpa: "3.37",
  },
];

export default function Education() {
  return (
    <Section id="education" title="Education" kicker="Education & Learning">
      <div className="space-y-4">
        {educations.map((edu) => (
          <Card key={edu.degree} className="p-0">
            <div className="flex items-start gap-4 p-4">
              <div className="h-16 w-16 flex-shrink-0 overflow-hidden rounded-full border">
                <img
                  src={edu.logo}
                  alt={edu.school}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="flex-1 text-left">
                <h3 className="font-semibold">{edu.degree}</h3>
                <p className="text-sm text-muted-foreground">
                  {edu.school} • {edu.year}
                </p>
                <p className="mt-1 text-sm">{edu.desc}</p>
                {edu.gpa && (
                  <p className="mt-1 text-sm font-medium text-primary">
                    GPA: {edu.gpa}
                  </p>
                )}
              </div>
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
}
