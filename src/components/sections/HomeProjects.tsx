import React from "react";
import { SectionTitle } from "../common/SectionTitle";
import "swiper/css";
import ProjectItem from "../common/ProjectItem";
import PrimaryButton from "../common/buttons/PrimaryButton";
import Link from "next/link";
import { usePortfolioContext } from "@/context/dataContext";

export default function HomeProjects() {
  const { projectsFromContext } = usePortfolioContext();

  return (
    <section id="section_proyects" className="my-10 md:my-36">
      <SectionTitle text="Proyectos" />
      <div className="mt-10 grid lg:grid-cols-2 gap-10">
        {projectsFromContext?.slice(0, 4).map((project, index) => (
          <ProjectItem key={project.title} {...project} />
        ))}
      </div>

      <Link href={"/proyectos"} className="flex justify-center mt-10 md:mt-20">
        <PrimaryButton
          text="VER MÁS"
          primary_color="#A8FF78"
          secundary_color="#1D2A16"
        />
      </Link>
    </section>
  );
}
