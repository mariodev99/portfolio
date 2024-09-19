import React from "react";
import { SectionTitle } from "../common/SectionTitle";
import "swiper/css";
import ProjectItem from "../common/ProjectItem";
import PrimaryButton from "../common/buttons/PrimaryButton";
import Link from "next/link";
import { usePortfolioContext } from "@/context/dataContext";
import { ProjectDataType } from "@/types";

// export const projectsList: ProjectDataType[] = [
//   {
//     position: 1,
//     title: "codeparty",
//     tecnologies: ["Next.js", "Firebase"],
//     url_github: "https://github.com/mariodev9/CodepartyV2",
//     url_site: "https://codeparty-v2.vercel.app/Home",
//     description:
//       "Red social donde puedes conectarte con otros desarrolladores! Puedes crear tu perfil incluyendo tu stack de tecnologias de una forma divertida, compartir, interactuar y comentar publicaciones.",
//     cover_image:
//       "https://firebasestorage.googleapis.com/v0/b/mariodev-f885e.appspot.com/o/codeparty_screen.jpg?alt=media&token=b604d619-5bad-46f6-b149-e949841fa394",
//     primary_color: "#159bff",
//     secundary_color: "#fff",
//   },

//   {
//     position: 2,

//     title: "flashcards",
//     tecnologies: ["Next.js", "Typescript", "Firebase", "Chakra UI"],
//     url_github: "https://github.com/frontendcafe/air-flashcards",
//     url_site: "",
//     description:
//       "Esta aplicación resuelve un problema de estudio mediante la creación de colecciones de cartas. A su vez estas cartas te ayudaran a aprender conceptos para facilitar el proceso de aprendizaje",
//     cover_image:
//       "https://firebasestorage.googleapis.com/v0/b/mariodev-f885e.appspot.com/o/codeparty_screen.jpg?alt=media&token=ff9ba55b-cfa0-4033-9594-ed1101055a20",
//     primary_color: "#1869ff",
//     secundary_color: "#fff",
//   },
//   {
//     position: 3,

//     title: "mmchokers",
//     tecnologies: ["Next.js", "Chakra UI", "Firebase"],
//     url_github: "https://github.com/mariodev9/mmchokersweb",
//     url_site: "https://mmchokers.vercel.app/",
//     description:
//       "Tienda de accesorios de moda como collares, cadenas pulseras y más! Utiliza mercadopago checkout API para realizar pagos",
//     cover_image:
//       "https://firebasestorage.googleapis.com/v0/b/mariodev-f885e.appspot.com/o/codeparty_screen.jpg?alt=media&token=ff9ba55b-cfa0-4033-9594-ed1101055a20",
//     primary_color: "#ffd52d",
//     secundary_color: "#fff",
//   },
//   {
//     position: 4,

//     title: "realstate",
//     tecnologies: ["Next.js", "Tailwind.css"],
//     url_github: "https://github.com/frontendcafe/air-flashcards",
//     url_site: "https://martinmariotti-realestate.com",
//     description:
//       "Esta aplicación resuelve un problema de estudio mediante la creación de colecciones de cartas. A su vez estas cartas te ayudaran a aprender conceptos para facilitar el proceso de aprendizaje",
//     cover_image:
//       "https://firebasestorage.googleapis.com/v0/b/mariodev-f885e.appspot.com/o/codeparty_screen.jpg?alt=media&token=ff9ba55b-cfa0-4033-9594-ed1101055a20",
//     primary_color: "#c0ff3f",
//     secundary_color: "#fff",
//   },
//   {
//     position: 5,

//     title: "8bitstore",
//     tecnologies: ["Next.js", "Framer-motion", "Chakra UI"],
//     url_github: "https://github.com/mariodev9/martinmariottirealestate",
//     url_site: "https://8bit-store.vercel.app/",
//     description:
//       "Tienda de camisetas basado en 8bitfootball. Mira las ultimas camisetas del momento de una forma divertida y elegí tus favoritas!",
//     cover_image:
//       "https://firebasestorage.googleapis.com/v0/b/mariodev-f885e.appspot.com/o/codeparty_screen.jpg?alt=media&token=ff9ba55b-cfa0-4033-9594-ed1101055a20",
//     primary_color: "#159bff",
//     secundary_color: "#fff",
//   },
//   {
//     position: 6,

//     title: "Home Design Page",
//     tecnologies: ["Framer-motion", "Tailwind.css"],
//     url_github: "https://github.com/mariodev9/LandingPage_1",
//     url_site: "https://ladingproject1.vercel.app/",
//     description:
//       "Diseño de una interfaz con animaciones en Figma, pasada a codigo con framer-motion, HTML y CSS",
//     cover_image:
//       "https://firebasestorage.googleapis.com/v0/b/mariodev-f885e.appspot.com/o/codeparty_screen.jpg?alt=media&token=ff9ba55b-cfa0-4033-9594-ed1101055a20",
//     primary_color: "#159bff",
//     secundary_color: "#fff",
//   },
//   {
//     position: 7,

//     title: "Portfolio 2",
//     tecnologies: ["React.js", "Chakra UI"],
//     url_github: "https://github.com/mariodev9/portfolio2",
//     url_site: "https://mariodev2.vercel.app/",
//     description: "Anterior portfolio",
//     cover_image:
//       "https://firebasestorage.googleapis.com/v0/b/mariodev-f885e.appspot.com/o/codeparty_screen.jpg?alt=media&token=ff9ba55b-cfa0-4033-9594-ed1101055a20",
//     primary_color: "#159bff",
//     secundary_color: "#fff",
//   },
// ];

export default function HomeProjects() {
  const { projectsFromContext } = usePortfolioContext();

  return (
    <section id="section_proyects" className="my-10 md:my-36">
      <SectionTitle text="Proyectos" />
      <div className="mt-10 grid md:grid-cols-2 gap-10">
        {projectsFromContext?.slice(0, 4).map((project, index) => (
          <ProjectItem key={project.title} {...project} />
        ))}
      </div>

      <Link href={"/proyectos"} className="flex justify-center mt-10">
        <PrimaryButton
          text="VER MÁS"
          primary_color="#00A3FF"
          secundary_color="#fff"
        />
      </Link>

      {/* <h3 className='mt-10 text-lg md:text-3xl'>Otros proyectos</h3>

    <div className='mt-5'>
    <Swiper
      spaceBetween={15}
      breakpoints={{
        0: {
          slidesPerView: 1.7,
        },
        450: {
          slidesPerView: 1.9,
        },
        620: {
          slidesPerView: 3,
        },
        960: {
          slidesPerView: 3.5,
        },
        1200: {
          slidesPerView: 3.5,
        },
      }}
    >
      {projectsList.slice(4).map((item:projectData) => (
        <SwiperSlide key={item.title}>
          <ProjectBox {...item} />
        </SwiperSlide>
      ))}
    </Swiper>
    </div> */}
    </section>
  );
}
