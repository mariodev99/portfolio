import React from 'react'
import { SectionTitle } from '../common/SectionTitle'
import { PrimaryBox } from '../common/PrimaryBox'

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
    "Git/Github"
]

export default function HomeSkills() {
  return (
    <section id='section_skills' className='my-10 md:my-20'>
        <SectionTitle text='Habilidades y herramientas'/>
        <div className='mt-10 flex flex-wrap gap-3'>
        {skills.map( skill => (
            <PrimaryBox key={skill} size='lg' text={skill}/>
        ))}
        </div>
    </section>
  )
}
