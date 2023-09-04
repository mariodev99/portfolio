import Image, { StaticImageData } from 'next/image'
import React, { useState } from 'react'
import { motion } from 'framer-motion'

interface Props {
  title: string
  image: StaticImageData
}

export const ProjectBox:React.FC<Props> = ({title, image}) => {
const [isHover, setIsHover] = useState(false)

  return (

      <motion.div  className='cursor-pointer overflow-hidden relative rounded-lg md:rounded-box lg:h-80 lg:w-80 h-48 w-48  '>
        <motion.div 
          onHoverStart={() => setIsHover(true)} 
          onHoverEnd={() => setIsHover(false)} 
          animate={{scale: isHover ? 1.1 : 1}}
          className='flex items-end relative w-full h-full z-20'
        >
          <Image 
            style={{ borderRadius: "50px", objectFit: "cover", zIndex: 20}}
            alt={"proyect"} 
            src={image}
            layout="fill"
          />
          <motion.div initial={{opacity: 0}} animate={{opacity: isHover ? 1 : 0}} className='p-10 flex items-end relative z-40 w-full h-full bg-gradient-to-t from-black to-transparent'>
            {title}
          </motion.div>
      </motion.div>
      </motion.div>


  )
}
