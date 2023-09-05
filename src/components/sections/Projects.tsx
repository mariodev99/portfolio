import React from 'react'
import { GithubIcon, SiteIcon } from '../icons'
import { SectionTitle } from '../common/SectionTitle'
import { PrimaryBox } from '../common/PrimaryBox'
import Image, { StaticImageData } from 'next/image'
import bitProjectImage from "../../../public/images/8bit_project.jpg"
import codepartyProjectImage from "../../../public/images/codeparty_project.jpeg"
import chokersProjectImage from "../../../public/images/mmchokers_project.jpg"
import flashcardsProjectImage from "../../../public/images/projects/flashcardsProject.jpg"
import realestateProjectImage from "../../../public/images/projects/realstateProject.jpg"
import ladingProjectImage from "../../../public/images/projects/ladingProject.png"
import portfolio2ProjectImage from "../../../public/images/projects/portfolio2Image.jpg"

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { ProjectBox } from '../common/ProjectBox'

interface projectData {
  title: string
    tecnologies: string[]
    urlGithub: string
    urlSite: string
    description: string
    image: StaticImageData
}

const list:projectData[] = [
    {
      title: "Codeparty",
      tecnologies: ["Next.js", "Firebase"],
      urlGithub: "https://github.com/mariodev9/CodepartyV2",
      urlSite: "https://codeparty-v2.vercel.app/Home",
      description:
        "Red social donde puedes conectarte con otros desarrolladores! Puedes crear tu perfil incluyendo tu stack de tecnologias de una forma divertida, compartir, interactuar y comentar publicaciones.",
      image: codepartyProjectImage
      },

    {
      title: "Flashcards",
      tecnologies: ["Next.js", "Typescript", "Firebase", "Chakra UI"],
      urlGithub: "https://github.com/frontendcafe/air-flashcards",
      urlSite: "",
      description:
        "Esta aplicación resuelve un problema de estudio mediante la creación de colecciones de cartas. A su vez estas cartas te ayudaran a aprender conceptos para facilitar el proceso de aprendizaje",
      image: flashcardsProjectImage
      },
      {
        title: "MMChokers",
        tecnologies: ["Next.js", "Chakra UI", "Firebase"],
        urlGithub: "https://github.com/mariodev9/mmchokersweb",
        urlSite: "https://mmchokers.vercel.app/",
        description:
          "Tienda de accesorios de moda como collares, cadenas pulseras y más! Utiliza mercadopago checkout API para realizar pagos",
        image: chokersProjectImage
    },
      {
        title: "Martin Mariotti Real Estate",
        tecnologies: ["Next.js", "Tailwind.css"],
        urlGithub: "https://github.com/frontendcafe/air-flashcards",
        urlSite: "",
        description:
          "Esta aplicación resuelve un problema de estudio mediante la creación de colecciones de cartas. A su vez estas cartas te ayudaran a aprender conceptos para facilitar el proceso de aprendizaje",
        image: realestateProjectImage
        },
        {
          title: "8bitstore",
          tecnologies: ["Next.js", "Framer-motion", "Chakra UI"],
          urlGithub: "https://github.com/mariodev9/8bitStore",
          urlSite: "https://8bit-store.vercel.app/",
          description:
            "Tienda de camisetas basado en 8bitfootball. Mira las ultimas camisetas del momento de una forma divertida y elegí tus favoritas!",
          image: bitProjectImage
          },
    {
      title: "Home Design Page",
      tecnologies: ["Framer-motion", "Tailwind.css"],
      urlGithub: "https://github.com/mariodev9/LandingPage_1",
      urlSite: "https://ladingproject1.vercel.app/",
      description:
        "Diseño de una interfaz con animaciones en Figma, pasada a codigo con framer-motion, HTML y CSS",
      image: ladingProjectImage
  },
    {
      title: "Portfolio 2",
      tecnologies: ["React.js", "Chakra UI"],
      urlGithub: "https://github.com/mariodev9/LandingPage_1",
      urlSite: "https://ladingproject1.vercel.app/",
      description:
        "Diseño de una interfaz con animaciones en Figma, pasada a codigo con framer-motion, HTML y CSS",
      image: portfolio2ProjectImage
  },
  ];


export default function HomeProjects() {
  return (
    <section id='section_proyects' className='my-10 md:my-20'>
    <SectionTitle text='Proyectos'/>
    <div className='mt-10 flex flex-col gap-5 md:gap-10'>
      {list.slice(0,3).map((project, index) => (
        <div key={project.title} className='grid grid-cols-1 md:grid-cols-2 items-center gap-5'>
          {/* Image */}
          <div className={`flex ${index % 2 != 0 ? "order-0" : "md:order-1 md:justify-end"} w-full h-auto md:h-80 `}>
            <div className='w-full md:w-[80%] h-48 md:h-auto overflow-hidden relative bg-gray-500 rounded-3xl'>
              <Image className='object-cover' src={project.image} alt='screens del projecto codeparty'/>
            </div>
          </div>

          {/* Info */}
          <div className={`flex flex-col gap-4 ${index % 2 != 0 ? "md:text-end md:items-end" : "text-start items-start"} `}>
            <h2 className=' text-xl md:text-4xl font-semibold'>0{index + 1} - {project.title}</h2>
            <p className={`${index % 2 != 0 ? "md:pl-5" : "pr-5"} text-lg`}>{project.description}</p>
            <div className='flex gap-4 flex-wrap'>
              {project.tecnologies.map((item) => (
                <PrimaryBox key={item} size='sm' text={item}></PrimaryBox>
              ))}
            </div>
            <div className='flex gap-4 md:justify-end'>
                <a href={project.urlGithub}><GithubIcon/></a>
                {project.urlSite && <a href={project.urlSite}><SiteIcon/></a>}
            </div>
          </div>  
        </div>
      ))}
    </div>
    
    <h3 className='mt-10 text-lg md:text-3xl'>Otros proyectos</h3>

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
      {list.slice(3).map((item:any, index:number) => (
        <SwiperSlide key={item.title}>
          {/* <div className='relative h-44 rounded-3xl overflow-hidden'>
            <Image className='object-cover' src={item.image} alt={`projecto ${item.title}`}/>
          </div> */}
          <ProjectBox {...item} />
        </SwiperSlide>
      ))}
    </Swiper>
    </div>
    </section>
  )
}
