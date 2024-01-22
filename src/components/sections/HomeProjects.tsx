import React from 'react'
import { GithubIcon, SiteIcon } from '../icons'
import { SectionTitle } from '../common/SectionTitle'
import { PrimaryBox } from '../common/PrimaryBox'
import Image, { StaticImageData } from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { ProjectBox } from '../common/ProjectBox'
// Imagenes
import bitProjectImage from "../../../public/images/8bit_project.jpg"
import codepartyProjectImage from "../../../public/images/codeparty_project.jpeg"
import chokersProjectImage from "../../../public/images/mmchokers_project.jpg"
import flashcardsProjectImage from "../../../public/images/projects/flashcardsProject.jpg"
import realestateProjectImage from "../../../public/images/projects/realstateProject.jpg"
import ladingProjectImage from "../../../public/images/projects/ladingProject.png"
import portfolio2ProjectImage from "../../../public/images/projects/portfolio2Image.jpg"
import { motion } from 'framer-motion'
import ProjectItem from '../common/ProjectItem'
import PrimaryButton from '../common/buttons/primaryButton'
import Link from 'next/link'

export interface projectData {
  title: string
    tecnologies: string[]
    urlGithub: string
    urlSite: string
    description: string
    image: StaticImageData
    primaryColor: string
    secundaryColor: string
}

export const projectsList:projectData[] = [
    {
      title: "Codeparty",
      tecnologies: ["Next.js", "Firebase"],
      urlGithub: "https://github.com/mariodev9/CodepartyV2",
      urlSite: "https://codeparty-v2.vercel.app/Home",
      description:
        "Red social donde puedes conectarte con otros desarrolladores! Puedes crear tu perfil incluyendo tu stack de tecnologias de una forma divertida, compartir, interactuar y comentar publicaciones.",
      image: codepartyProjectImage,
      primaryColor: "#159bff",
      secundaryColor: "#fff"
      },

    {
      title: "Flashcards",
      tecnologies: ["Next.js", "Typescript", "Firebase", "Chakra UI"],
      urlGithub: "https://github.com/frontendcafe/air-flashcards",
      urlSite: "",
      description:
        "Esta aplicación resuelve un problema de estudio mediante la creación de colecciones de cartas. A su vez estas cartas te ayudaran a aprender conceptos para facilitar el proceso de aprendizaje",
      image: flashcardsProjectImage,
      primaryColor: "#1869ff",
      secundaryColor: "#fff"
      },
      {
        title: "MMChokers",
        tecnologies: ["Next.js", "Chakra UI", "Firebase"],
        urlGithub: "https://github.com/mariodev9/mmchokersweb",
        urlSite: "https://mmchokers.vercel.app/",
        description:
          "Tienda de accesorios de moda como collares, cadenas pulseras y más! Utiliza mercadopago checkout API para realizar pagos",
        image: chokersProjectImage,
        primaryColor: "#ffd52d",
        secundaryColor: "#fff"
    },
      {
        title: "RealState",
        tecnologies: ["Next.js", "Tailwind.css"],
        urlGithub: "https://github.com/frontendcafe/air-flashcards",
        urlSite: "https://martinmariotti-realestate.com",
        description:
          "Esta aplicación resuelve un problema de estudio mediante la creación de colecciones de cartas. A su vez estas cartas te ayudaran a aprender conceptos para facilitar el proceso de aprendizaje",
        image: realestateProjectImage,
        primaryColor: "#c0ff3f",
        secundaryColor: "#fff"
        },
        {
          title: "8bitstore",
          tecnologies: ["Next.js", "Framer-motion", "Chakra UI"],
          urlGithub: "https://github.com/mariodev9/martinmariottirealestate",
          urlSite: "https://8bit-store.vercel.app/",
          description:
            "Tienda de camisetas basado en 8bitfootball. Mira las ultimas camisetas del momento de una forma divertida y elegí tus favoritas!",
          image: bitProjectImage,
          primaryColor: "#159bff",
          secundaryColor: "#fff"
          },
        {
          title: "Home Design Page",
          tecnologies: ["Framer-motion", "Tailwind.css"],
          urlGithub: "https://github.com/mariodev9/LandingPage_1",
          urlSite: "https://ladingproject1.vercel.app/",
          description:
            "Diseño de una interfaz con animaciones en Figma, pasada a codigo con framer-motion, HTML y CSS",
          image: ladingProjectImage,
          primaryColor: "#159bff",
          secundaryColor: "#fff"
        },
        {
          title: "Portfolio 2",
          tecnologies: ["React.js", "Chakra UI"],
          urlGithub: "https://github.com/mariodev9/portfolio2",
          urlSite: "https://mariodev2.vercel.app/",
          description:
            "Anterior portfolio",
          image: portfolio2ProjectImage,
          primaryColor: "#159bff",
          secundaryColor: "#fff"
        },
];



export default function HomeProjects() {

  return (
    <section id='section_proyects' className='my-10 md:my-20'>
    <SectionTitle text='Proyectos'/>
    <div className='mt-10 grid md:grid-cols-2 gap-10'>
      {projectsList.slice(0,4).map((project, index) => (
        <ProjectItem key={project.title} {...project} />
      ))}
    </div>
    
    <Link href={"/proyectos"} className='flex justify-center mt-10'>
      <PrimaryButton text='ver más' primaryColor='#00A3FF'/>
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
  )
}
