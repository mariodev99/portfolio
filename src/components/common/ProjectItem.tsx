import React, { ReactNode, useState } from "react";
import { motion } from "framer-motion";
import { ArrowIcon } from "../icons";
import Image from "next/image";
import { useRouter } from "next/router";

export default function ProjectItem({
  title,
  tecnologies,
  cover_image,
  illustration,
}: {
  title: string;
  tecnologies: string[];
  cover_image: string;
  illustration: ReactNode | string;
}) {
  const router = useRouter();
  const [letterAnimation, setLetterAnimation] = useState(false);

  const handleRedirect = () => {
    title && router.push(`/proyectos/${title}`);
  };

  return (
    <motion.div
      className="cursor-pointer bg-[#fcfcfc] rounded-box pt-8 "
      initial={{ scale: 0.9 }}
      whileInView={{ scale: 1 }}
      transition={{ duration: 0.8 }}
      onClick={() => handleRedirect()}
    >
      <div className="h-[200px] md:h-64 lg:h-96 flex items-center justify-center">
        {illustration ? (
          <div className="w-[150px] md:w-72 flex justify-center">
            {illustration}
          </div>
        ) : (
          <div className="flex justify-center items-center bg-slate-100 h-44 md:h-64 w-64 md:w-96 relative rounded-[28px] overflow-hidden">
            <Image
              src={cover_image}
              alt="project"
              style={{ objectFit: "cover" }}
              fill
            />
          </div>
        )}
      </div>

      <div className="p-8">
        <h4 className="text-2xl md:text-4xl font-medium">{title}</h4>
        <div className="uppercase text-xs my-[1.5em] flex gap-3 flex-wrap">
          {tecnologies.map((item) => (
            <div
              key={item}
              className="text-sm md:text-base py-1 px-2 md:px-4 font-regular border rounded-full"
            >
              {item}
            </div>
          ))}
        </div>
      </div>

      {/* Titulo */}
    </motion.div>
  );
}
