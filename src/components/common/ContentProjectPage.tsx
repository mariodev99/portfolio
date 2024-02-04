import React, { useState } from 'react'
import { projectData } from '../sections/HomeProjects'
import { motion } from 'framer-motion'
import { ArrowUpRightCircle } from '../icons'
import Image from 'next/image'
import { paletteColorInterace } from '@/types'
import { useRouter } from 'next/router'

export default function ContentProjectPage({project}: {project: projectData}) {

  const [buttonAnimation, setButtonAnimation] = useState(false)

  const router = useRouter()

  return (
    <motion.div 
      className='mt-32 grid grid-cols-1 md:grid-cols-2 gap-3 py-5 '
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1}}
    >
      <motion.div

      >
        <h1 className='text-7xl mb-10'>{project?.title}</h1>
        <motion.div 
          className='flex flex-col md:flex-row gap-10'
          initial={{ y: 10 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.7 }}        
        >
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
        </motion.div>

        {project.urlSite && 
        <motion.button 
          className='overflow-hidden flex mt-10 py-3 items-center gap-3 rounded-full uppercase font-semibold px-5 py-2 bg-white shadow-lg text-[#159bff]'
          onHoverStart={() => setButtonAnimation(true) }
          onHoverEnd={() => setButtonAnimation(false) }
          onClick={() => router.push(project.urlSite)}
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
          <motion.div className=''
            animate={{ opacity: buttonAnimation ? 1 : 0, scale: buttonAnimation ? 1 : 0, x: -10 }}
          >
            <ArrowUpRightCircle stroke={project?.primaryColor} fill={"#fff"} />
          </motion.div>
        </motion.button>
        }

      </motion.div>
      <motion.div className='relative overflow-hidden rounded-3xl h-44 md:h-96 w-full' initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ duration: 1}} >
        <Image src={project?.image} alt='imagenes del proyecto codeparty'/>
      </motion.div>
    </motion.div>
  )
}
