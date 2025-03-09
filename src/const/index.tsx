import {
  FreelanceLogo,
  HBAgency,
  IFSoluciones,
  Logo,
} from "@/components/icons";
import { experienceData } from "@/interfaces";

export const skills: string[] = [
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

export const timelineExp: experienceData[] = [
  {
    company: "HBAgency",
    position: "Fullstack Developer",
    ages: "September 2024 - Present",
    icon: <HBAgency />,
    tasks:
      "Trabaje en un proyecto llamado 'Flashcards' llevado a cabo por equipos de diseño y desarrollo. Desde el diseño hasta el desarrollo y la implementación, el proyecto proporciona una experiencia que se asemejó mucho a un trabajo del mundo real.",
  },
  {
    company: "Freelancer",
    position: "Frontend Developer",
    ages: "January 2024 - September 2024 ",
    icon: <FreelanceLogo />,
    tasks:
      "I work as a freelance developer, building websites to enhance my clients' online presence. I also handle smaller tasks such as API integration, reusable components, bug fixes, responsive designs, and more.",
  },
  {
    company: "IF Soluciones",
    position: "Frontend Developer",
    ages: "October 2022 - January 2024 ",
    icon: <IFSoluciones />,
    tasks:
      "As a frontend developer, I identified and resolved technical issues in the user interface, developed reusable components, and connected the frontend with system APIs to ensure seamless integration. I implemented responsive designs, ensuring compatibility across different devices, and provided ongoing maintenance to optimize performance and application stability.",
  },
];
