import React from "react";
import { SectionTitle } from "../common/SectionTitle";
import { motion } from "framer-motion";
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
  "Git/Github",
];

export default function HomeAbout() {
  return (
    <div id="about" className="my-20 md:my-44">
      <SectionTitle text="Sobre mi" />
      <div className="mt-2 grid grid-cols-1 md:grid-cols-[2fr,1fr]  gap-10">
        <div>
          <motion.p
            className="text-base md:text-3xl leading-relaxed md:leading-snug mt-5 font-regular text-gray-500"
            initial={{ y: 100 }}
            whileInView={{ y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            Desarrollador Frontend con 2 años de experiencia. He diseñado y
            desarrollado paneles de control personalizados para gestionar
            grandes volúmenes de datos, optimizando el rendimiento y la
            experiencia del usuario. Habilidades solidas con CSS, Javascript,
            React.js y TypeScript. Interesado en arquitectura de software,
            escalabilidad de aplicaciones y diseño de interfaces. Busco
            oportunidades para crecer en proyectos desafiantes. Actualmente
            estoy explorando tecnologías cloud como AWS para construir
            aplicaciones más robustas y escalables.
          </motion.p>
        </div>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill) => (
            <div key={skill} className="flex items-center justify-center">
              <span className="bg-white border  rounded-full py-1 px-4 text-xs md:text-2xl font-medium">
                {skill}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
