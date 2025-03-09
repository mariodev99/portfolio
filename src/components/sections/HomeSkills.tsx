import { SectionTitle } from "../common/SectionTitle";
import Separator from "../common/Separator";

export default function HomeSkills() {
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
    "Git/Github",
  ];

  const Skill = ({ name }: { name: string }) => (
    <div className="rounded-full border-2 border-gray-100 px-4 py-2 flex justify-center items-center">
      {name}
    </div>
  );

  return (
    <div>
      <SectionTitle text="Software Skills" />
      <Separator />
      <div className="flex gap-3 flex-wrap text-lg md:text-3xl font-medium">
        {skills.map((skill) => (
          <Skill key={skill} name={skill} />
        ))}
      </div>
    </div>
  );
}
