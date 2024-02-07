import React from 'react'
import { SectionTitle } from '../common/SectionTitle'

interface experienceData {
    company: string
    position: string
    ages: string
    tasks: string
}

const timelineExp:experienceData[] = [
    {
        company: "Freelancer",
        position: "Desarrollador Fullstack",
        ages: "2023",
        tasks: "Me desempeño como desarrollador freelance haciendo pequeñas tareas como integración de APIs, componentes reutilizables, corrección de errores, diseños responsive y más.",
    },
    {
        company: "IF Soluciones",
        position: "Desarrollador Frontend",
        ages: "2022 - 2023",
        tasks: "Identificar y resolver problemas técnicos o errores que puedan surgir en la interfaz de usuario. Desarrollo de componentes reutilizables. Implementación de diseños de interfaz de usuario. Mantenimiento y soporte",
    },
    {
        company: "FrontEnd Cafe",
        position: "Desarrollador Frontend",
        ages: "2022",
        tasks: "Flashcards es un proyecto llevado a cabo por equipos de diseño y desarrollo. Desde el diseño hasta el desarrollo y la implementación, el proyecto proporciona una experiencia que se asemejó mucho a un trabajo del mundo real.",
    },
]


const Experiencie = ({ages, company, position, tasks, index}:experienceData & {index: number}) => (
    <div className='grid grid-cols-2 md:grid-cols-3 '>
        <div className=' h-40 md:h-56 flex flex-col justify-center items-end'>
            <div>
                <p className='text-sm md:text-xl'>{ages}</p>
                <h2 className='textxl md:text-3xl'>{company}</h2>
                <p className='text-sm md:text-xl'>{position}</p>
            </div>
        </div>

        {/* item */}
        {index > 0 ?
            <div className='flex justify-center'>
                <div className={`w-[2px]  bg-[#2b2e3a] flex items-center relative ${timelineExp.length === index + 1 && "bg-gradient-to-b from-black to-white"}`}>
                    <div className='absolute bg-primary left-[-7px] w-4 h-4 rounded-full'></div>
                </div>
                {/* {timelineExp.length === index + 1 &&             
                <div className='mt-1 font-medium flex justify-center'>
                    <p className='text-sm md:text-xl'>2020</p>
                </div> }      */}
            </div>

            : 
            <div className='flex justify-center items-end'>
                <div className='w-[2px] h-[50%] bg-[#2b2e3a] flex items-start relative'>
                    <div className='absolute bg-primary left-[-7px] w-4 h-4 rounded-full'></div>
                </div>
            </div>
        }

        <div className='hidden md:flex items-center h-40 md:h-56'>
            <p>{tasks}</p>
        </div>
    </div>
)

export default function HomeExp() {
  return (
    <section id='experience' className='my-10 md:my-20'>
        <SectionTitle text='Experiencia'/>
        
        <div className='mt-5'>
            {/* Timeline 1 */}
            
            {timelineExp.map( (experience, index) => (
                <Experiencie key={experience.company} {...experience} index={index} />
            ))}
            
            <div className='grid grid-cols-2 md:grid-cols-3 '>
                <div/>
                <div className='text-[#2b2e3a] text-sm md:text-xl mt-1 font-medium flex justify-center'>
                    <p>2020</p>
                </div>
                <div/>
            </div>
        </div>
  </section>
  )
}
