import React, { ReactNode } from 'react'
import { ArrowRight, EmailIcon, GithubIcon, LinkedinIcon } from '../icons'
import { SectionTitle } from '../common/SectionTitle'
import { motion } from 'framer-motion'

interface contactItems {
  url: string
  text: string
  icon: ReactNode
}

const contactItems:contactItems[] = [
  {
    url: "mailto:luciano.mariotti99@gmail.com",
    text: "luciano.mariotti99@gmail.com",
    icon: <EmailIcon/>
  },
  {
    url: "https://github.com/mariodev9/",
    text: "Github",
    icon: <GithubIcon/>
  },
  {
    url: "https://www.linkedin.com/in/luciano-mariotti/",
    text: "Linkedin",
    icon: <LinkedinIcon/>
  },
]

export default function HomeContact() {
  return (
    <section id='section_contact' className='my-20 flex flex-col items-center'>
      <SectionTitle text='Contacto'/>
      <p className='text-center mt-5 text-lg'>Mi bandeja de entrada siempre esta abierta para cualquier consulta que quieras hacerme.</p>
      
      <div className=' flex flex-col items-center gap-3 mt-10 text-sm md:text-4xl'>
        {contactItems.map( item => (
          <motion.a 
            href={item.url}
            target="_blank" 
            key={item.url} 
            className='group'
            // whileHover={{ scale: 1.2, color: "#00A3FF"}}
          >                    
            <div className='flex items-center gap-2 group-hover:scale-125 ease-in duration-200 group-hover:text-[#00A3FF]'>
              <p>{item.text}</p>
              <div className='mt-1'>
                <ArrowRight width={24} height={24} className={"stroke-black group-hover:stroke-[#00A3FF] group-hover:rotate-[-45deg] group-hover:scale-150 ease-in duration-200"}  />
              </div>
            </div>
          </motion.a>
        ))}

      </div>
    </section>
  )
}
