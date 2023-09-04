import React, { ReactNode } from 'react'
import { EmailIcon, GithubIcon, LinkedinIcon } from '../icons'
import { SectionTitle } from '../common/SectionTitle'

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
    text: "linkedin",
    icon: <LinkedinIcon/>
  },
]

export default function HomeContact() {
  return (
    <section id='section_contact' className='my-20 flex flex-col items-center'>
      <SectionTitle text='Contacto'/>
      <p className='text-center mt-5 text-lg'>Mi bandeja de entrada siempre esta abierta para cualquier consulta que quieras hacerme. <br/>Te responderé lo mas rápido posible!</p>
      <div className='flex flex-col md:flex-row gap-5 mt-5'>


        {contactItems.map( item => (
          <a href={item.url} key={item.url}>                    
          <div className='text-lg md:text-xl bg-primary text-white px-5 md:px-6 py-4 md:py-5 rounded-full flex gap-3 justify-center items-center mx-5 md:mx-0'>
                <p>{item.text}</p>
                {item.icon}
            </div>
          </a>
        ))}

      </div>
    </section>
  )
}
