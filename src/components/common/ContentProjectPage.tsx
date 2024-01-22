import React, { useState } from 'react'
import { projectData } from '../sections/HomeProjects'
import { motion } from 'framer-motion'
import { ArrowUpRightCircle } from '../icons'
import Image from 'next/image'
import { paletteColorInterace } from '@/types'

export default function ContentProjectPage({project}: {project: projectData}) {

    const [buttonAnimation, setButtonAnimation] = useState(false)


  return (
    <div className='mt-32 grid grid-cols-1 md:grid-cols-2 gap-3'>
    <div>
      <h1 className='text-7xl mb-10'>{project?.title}</h1>
      <div className='flex flex-col md:flex-row gap-10'>
        <div className='w-full md:w-[70%]'>
          <p>
          {project?.description}
          </p>

        </div>
        <div className=' w-full md:w-[30%]'>
          <h3 className={`uppercase `} style={{ color: project?.primaryColor}}>tecnologias</h3>
          <ul className='mt-3'>
            {project?.tecnologies.map(tec => (
              <li key={tec}>{tec}</li>
            ))}
          </ul>
        </div>
        
      </div>
      <motion.button 
            className='overflow-hidden flex mt-10 py-3 items-center gap-3 rounded-full uppercase font-semibold px-5 py-2 bg-white shadow-lg text-[#159bff]'
            onHoverStart={() => setButtonAnimation(true) }
            onHoverEnd={() => setButtonAnimation(false) }
          >
            <motion.div className={`relative h-2 w-2 rounded-full `}
                animate={{ opacity: buttonAnimation ? 1 : 1, scale: buttonAnimation ? 50 : 1, x: 10}}
                transition={{ duration: 0.3}}
                style={{ backgroundColor: project?.primaryColor}}
            >
            </motion.div>
            <motion.div
              animate={{ x: buttonAnimation ? -10 : 10, color: buttonAnimation ? "#fff" : `${project?.primaryColor}` }}
            >
              Ver proyecto
            </motion.div>

            <motion.div 
              className=''
              animate={{ opacity: buttonAnimation ? 1 : 0, scale: buttonAnimation ? 1 : 0, x: -10 }}
            >
            <ArrowUpRightCircle stroke={project?.primaryColor} fill={"#fff"} />
            </motion.div>
      </motion.button>
    </div>
    <div className='relative overflow-hidden rounded-3xl h-44 md:h-96 w-full'>
      <Image src={project?.image} alt='imagenes del proyecto codeparty'/>
    </div>
  </div>
  )
}
