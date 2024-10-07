import React from "react";
import { SectionTitle } from "../common/SectionTitle";
import { PrimaryBox } from "../common/PrimaryBox";

const skills = [
  "CSS",
  "Javascript",
  "React.js",
  "Next.js",
  "Typescript",
  "Tailwind",
  "Bootstrap",
  "Chakra UI",
  "Node.js",
  "Express",
  "SQL",
  "MongoDB",
  "Firebase",
  "Framer-Motion",
  "React-Hook-Form",
  "Git/Github",
];

export default function HomeSkills() {
  return (
    <section id="section_skills" className="my-10 md:my-20">
      <SectionTitle text="Habilidades" />
      <div className="mt-10 flex flex-wrap gap-3"></div>
    </section>
  );
}
