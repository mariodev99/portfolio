import React, { ReactNode, useState } from 'react'
import { ArrowRight, EmailIcon, GithubIcon, LinkedinIcon } from '../icons'
import { SectionTitle } from '../common/SectionTitle'
import { MotionValue, motion, useTransform } from 'framer-motion'
import PrimaryButton from '../common/buttons/PrimaryButton'
import Image from 'next/image'
import selim_image from "@/../public/images/selim.png"

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

export default function HomeContact({currentScroll}:{currentScroll: MotionValue}) {


  const dogScale:MotionValue = useTransform(currentScroll,[4300,4800],[0,1])

  return (
    <section id='section_contact' className='my-20 flex flex-col items-center'>
      <SectionTitle text='Contacto'/>

        <p className='text-center mt-5 text-xl font-medium'>Mi bandeja de entrada siempre esta abierta para cualquier consulta que quieras hacerme.</p>
      {/* Imagen de Selim */}
      <motion.div
        style={{ position: "absolute", x: 500, y: 350, scale: dogScale}}
        // TODO: responsive
        animate={{
          y: [400, 350, 400], // Animación de elevación y descenso
          rotate: [0, 10, -10, 0], // Animación de rotación
        }}
        transition={{
          y: {
            duration: 2,
            repeat: Infinity, // Repetir infinitamente
            repeatType: 'reverse', // Invertir la animación al repetir
            ease: 'easeInOut',
          },
          rotate: {
            duration: 4,
            repeat: Infinity, // Repetir infinitamente
            repeatType: 'reverse', // Invertir la animación al repetir
            ease: 'easeInOut',
          },
        }}

      >
        <Image src={selim_image} alt='Perro de Luciano Mariotti'/>
      </motion.div>
      <div className=' flex flex-col items-center mt-10 text-sm md:text-4xl'>
        {contactItems.map( item => (
          <motion.a 
            href={item.url}
            target="_blank" 
            key={item.url} 
            className='group'
            initial={{y: 30}}
            whileInView={{ y:0}}
            transition={{ duration: 0.5}}
          >                    
            <PrimaryButton text={item.text} primaryColor='#fff' secundaryColor="#121212"  />
            {/* <SecundaryButton text={item.text} primaryColor='#00A3FF' secundaryColor='#2b2e3a'/> */}
          </motion.a>
        ))}
      </div>
    </section>
  )
}
