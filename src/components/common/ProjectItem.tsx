import React, { useState } from 'react'
import { projectData } from '../sections/HomeProjects'
import { motion } from 'framer-motion'
import { ArrowIcon } from '../icons';
import Image from 'next/image';
import { useRouter } from 'next/router';

export default function ProjectItem({title, tecnologies, image}:projectData) {

  const router = useRouter()
  const [letterAnimation, setLetterAnimation] = useState(false)

  const wordVariant = {
    hidden: {    
      opacity: 0,   
    },
    show: {
      opacity: 1,   
      transition: {
        staggerChildren: 0.5
      }
    }
  };
  
  // const letterVariant = {
  //   hidden: {       
  //     x: -40 
  //   },
  //   show: {       
  //     x: 0,
  //   },
  //   transition: {
  //     delay: i * 0.5
  //   }
  // };

    return (

        <motion.div 
          className='cursor-pointer' 
          initial={{ scale: 0.9, rotateY: 5, rotateX: 40 }} 
          whileInView={{ scale: 1, rotateY: 0, rotateX: 0 }} 
          transition={{ duration: .8}}
          onHoverStart={() => setLetterAnimation(true)}
          onHoverEnd={() => setLetterAnimation(false)}
          onClick={() => router.push(`/proyectos/${title}`)} 
        >
          <div className='h-42 md:h-64 lg:h-96 rounded-3xl overflow-hidden'>
              {/* Imagen */}
              <Image src={image} alt='project image'/>
          </div>
          {/* concept • design • development • 3d */}
          <div className='uppercase text-xs my-[1.5em]'>{tecnologies.join(" • ")}</div>
          <div className='flex gap-3 items-center'>
            <motion.div
              className='absolute '
              animate={{ x:  letterAnimation ? 0 : 0, opacity: letterAnimation ? 1 : 0 }}
            >
              <ArrowIcon/>
            </motion.div>
          <motion.div className='text-2xl md:text-5xl font-[400] overflow-hidden w-full'> 
          {title.split('').map( (letter, index) => (
            <motion.span
              className='inline-block' 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1}}
              transition={{ delay: index * 0.01}}
              animate={{ opacity: 1, x: letterAnimation ? 60 : 0}}
             >
              {letter}
            </motion.span>
          ))}</motion.div>
          </div>
        </motion.div>
        )
}
