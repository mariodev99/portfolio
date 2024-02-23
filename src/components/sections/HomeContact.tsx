import React, { ReactNode, useState } from "react";
import { ArrowRight, EmailIcon, GithubIcon, LinkedinIcon } from "../icons";
import { SectionTitle } from "../common/SectionTitle";
import { MotionValue, motion, useTransform } from "framer-motion";
import PrimaryButton from "../common/buttons/PrimaryButton";
import Image from "next/image";
import selim_image from "@/../public/images/selim.png";
import ContactButtons from "./contact/ContactButtons";

interface contactItems {
  url: string;
  text: string;
  icon: ReactNode;
}

export const contactItems: contactItems[] = [
  {
    url: "mailto:luciano.mariotti99@gmail.com",
    text: "luciano.mariotti99@gmail.com",
    icon: <EmailIcon />,
  },
  {
    url: "https://github.com/mariodev9/",
    text: "Github",
    icon: <GithubIcon />,
  },
  {
    url: "https://www.linkedin.com/in/luciano-mariotti/",
    text: "Linkedin",
    icon: <LinkedinIcon />,
  },
];

export default function HomeContact({
  currentScroll,
}: {
  currentScroll: MotionValue;
}) {
  const dogScale: MotionValue = useTransform(
    currentScroll,
    [4000, 4600],
    [0, 1]
  );

  return (
    <section id="section_contact" className="my-20 flex flex-col items-center">
      <SectionTitle text="Contacto" />

      <motion.p
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 1 }}
        className="text-center mt-5 text-md md:text-xl font-medium"
      >
        Mi bandeja de entrada siempre esta abierta para cualquier consulta que
        quieras hacerme.
      </motion.p>
      {/* Imagen de Selim */}
      <motion.div
        style={{
          position: "absolute",
          x: 500,
          y: 350,
          scale: dogScale,
        }}
        // TODO: responsive
        animate={{
          y: [350, 250, 350],
          rotate: [0, 10, -10, 0],
        }}
        transition={{
          y: {
            duration: 2,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          },
          rotate: {
            duration: 4,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          },
        }}
      >
        <Image src={selim_image} alt="Perro de Luciano Mariotti" />
      </motion.div>
      <ContactButtons />
    </section>
  );
}
