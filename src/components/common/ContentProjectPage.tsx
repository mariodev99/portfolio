import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRightCircle, GithubIcon } from "../icons";
import Image from "next/image";
import { useRouter } from "next/router";
import { ProjectDataType } from "@/types";
import Link from "next/link";

export default function ContentProjectPage({
  project,
}: {
  project: ProjectDataType;
}) {
  const [buttonAnimation, setButtonAnimation] = useState(false);

  const router = useRouter();

  // const ImageGallery = ({ image_src }: string) => (
  //   <motion.div
  //     className="relative overflow-hidden rounded-3xl h-44 md:h-96 w-full mt-10 "
  //     initial={{ scale: 0 }}
  //     animate={{ scale: 1 }}
  //     transition={{ duration: 1 }}
  //   >
  //     <Image
  //       src={image_src}
  //       alt="imagenes del proyecto codeparty"
  //       className="object-cover "
  //       layout="fill"
  //     />
  //   </motion.div>
  // );

  return (
    <motion.div
      className="mt-32 grid grid-cols-1 md:grid-cols-2 gap-4 py-5 "
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.div className="">
        <h1 className="text-6xl md:text-7xl mb-10 capitalize">
          {project?.title}
        </h1>
        <motion.div
          className="flex flex-col md:flex-row gap-10"
          initial={{ y: 10 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="w-full md:w-[70%]">
            <p>{project?.description}</p>
          </div>
          <div className=" w-full md:w-[30%]">
            <h3
              className={`uppercase `}
              style={{ color: project?.primary_color }}
            >
              tecnologias
            </h3>
            <ul className="mt-3">
              {project?.tecnologies.map((tec) => (
                <li key={tec}>{tec}</li>
              ))}
            </ul>
          </div>
        </motion.div>

        <div className="flex items-center gap-5 mt-10">
          {project.url_site && (
            <motion.button
              className="overflow-hidden flex  py-3 items-center gap-3 rounded-full uppercase font-semibold px-5 py-2 bg-white shadow-lg text-[#159bff]"
              onHoverStart={() => setButtonAnimation(true)}
              onHoverEnd={() => setButtonAnimation(false)}
              onClick={() => router.push(project.url_site)}
            >
              <motion.div
                className={`relative h-2 w-2 rounded-full `}
                animate={{
                  opacity: buttonAnimation ? 1 : 1,
                  scale: buttonAnimation ? 50 : 1,
                  x: 10,
                }}
                transition={{ duration: 0.3 }}
                style={{ backgroundColor: project?.primary_color }}
              ></motion.div>
              <motion.div
                animate={{
                  x: buttonAnimation ? -10 : 10,
                  color: buttonAnimation ? "#fff" : `${project?.primary_color}`,
                }}
              >
                Ver proyecto
              </motion.div>
              <motion.div
                className=""
                animate={{
                  opacity: buttonAnimation ? 1 : 0,
                  scale: buttonAnimation ? 1 : 0,
                  x: -10,
                }}
              >
                <ArrowUpRightCircle
                  stroke={project?.primary_color}
                  fill={"#fff"}
                />
              </motion.div>
            </motion.button>
          )}
          {project.url_github && (
            <Link
              target="_blank"
              href={project.url_github}
              className="p-2 shadow-lg rounded-full bg-black"
            >
              <GithubIcon stroke={"#fff"} />
            </Link>
          )}
        </div>
      </motion.div>
      <motion.div
        className="relative overflow-hidden rounded-3xl h-44 md:h-96 w-full "
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1 }}
      >
        <Image
          className="object-cover "
          src={project?.cover_image}
          alt="imagenes del proyecto codeparty"
          layout="fill"
        />
      </motion.div>
      {/* {project?.images.map((image) => (
        <ImageGallery key={image} image_src={image} />
      ))} */}
    </motion.div>
  );
}
