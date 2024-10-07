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
  "React-Hook-Form",
  "Git/Github",
];

export default function HomeAbout() {
  return (
    <div id="about" className="my-10 md:my-36">
      <SectionTitle text="Sobre mi" />
      <div className="mt-2 grid grid-cols-1 md:grid-cols-[2fr,1fr]  gap-10">
        <div>
          <motion.p
            className="text-base md:text-3xl leading-relaxed md:leading-snug mt-5 font-regular text-[#63666A]"
            initial={{ y: 100 }}
            whileInView={{ y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            ¡Hola! Soy Luciano Mariotti, un desarrollador frontend enfocado en
            encontrar nuevas formas de resolver desafíos de desarrollo y romper
            con lo tradicional. Me apasionan los problemas complejos y busco
            soluciones innovadoras que no solo aborden aspectos técnicos, sino
            que también aporten valor al producto. A futuro, quiero seguir
            aprendiendo sobre arquitectura de software, mantenimiento y
            escalabilidad de aplicaciones, y participar en proyectos que me
            desafíen a pensar creativa y estratégicamente, contribuyendo también
            desde una visión global del negocio.
          </motion.p>
        </div>
        <div className="flex flex-wrap gap-3">
          {skills.map((skill) => (
            <div key={skill} className="flex items-center justify-center">
              <span className="bg-white shadow-lg rounded-full px-6 py-3 text-xs md:text-lg font-medium">
                {skill}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
