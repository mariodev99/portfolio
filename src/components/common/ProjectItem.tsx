import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowIcon } from "../icons";
import Image from "next/image";
import { useRouter } from "next/router";

export default function ProjectItem({ title, tecnologies, cover_image }: any) {
  const router = useRouter();
  const [letterAnimation, setLetterAnimation] = useState(false);

  const wordVariant = {
    hidden: {
      opacity: 0,
    },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.5,
      },
    },
  };

  // const letterVariant = {
  //   hidden: {
  //     x: -40
  //   },
  //   show: {
  //     x: 0,
  //   },
  //   transition: {
  //     delay: i * 0.5
  //   }
  // };
  const handleRedirect = () => {
    title && router.push(`/proyectos/${title}`);
  };

  return (
    <motion.div
      className="cursor-pointer"
      initial={{ scale: 0.9, rotateY: 5, rotateX: 40 }}
      whileInView={{ scale: 1, rotateY: 0, rotateX: 0 }}
      transition={{ duration: 0.8 }}
      onHoverStart={() => setLetterAnimation(true)}
      onHoverEnd={() => setLetterAnimation(false)}
      onClick={() => handleRedirect()}
    >
      <motion.div
        className="h-[200px] md:h-64 lg:h-96 rounded-3xl relative overflow-hidden "
        animate={{
          filter: letterAnimation
            ? ["blur(0px)", "blur(3px)", "blur(0px)"]
            : "blur(0px)",
        }}
      >
        {/* Imagen */}
        <Image
          className="object-cover"
          src={cover_image}
          layout="fill"
          alt="project image"
        />
      </motion.div>
      {/* tecnologia • tecnologia • tecnologia • tecnologia */}
      <div className="uppercase text-xs my-[1.5em]">
        {tecnologies.join(" • ")}
      </div>

      {/* Titulo */}
      <div className="flex gap-3 items-end">
        {/* Flecha */}
        <motion.div
          className="absolute "
          animate={{
            x: letterAnimation ? 0 : 0,
            opacity: letterAnimation ? 1 : 0,
          }}
        >
          <ArrowIcon />
        </motion.div>

        {/* Animacion de titulo */}
        <motion.div className="text-2xl md:text-5xl font-[400] overflow-hidden w-full ">
          {title.split("").map((letter: string, index: number) => (
            <motion.span
              key={index}
              className="inline-block"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: index * 0.01 }}
              animate={{
                opacity: 1,
                x: letterAnimation ? 60 : 0,
                textTransform: index === 0 ? "uppercase" : "lowercase",
              }}
            >
              {letter}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
}
