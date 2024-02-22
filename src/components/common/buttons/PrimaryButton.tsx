import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowUpRightCircle } from '@/components/icons'



export default function PrimaryButton({text, primary_color, secundary_color}: {text:string, primary_color: string, secundary_color:string}) {
  
  const textVariants = {
    "on_hover": {
      x: -10,
      color: secundary_color
    },
    "normal": {
      x: 10,
      color: primary_color
    }
  }

  const arrowVariants = {
    "on_hover": {
      opacity: 1,
      scale: 1,
    },
    "normal": {
      opacity: 0,
      scale: 0
    }
  }

  const [buttonAnimation, setButtonAnimation] = useState(false)

  return (
    <motion.button 
      className='overflow-hidden flex items-center py-3 gap-3 rounded-full font-semibold px-5 py-2 shadow-lg'
      animate={{ backgroundColor: secundary_color}}
      onHoverStart={() => setButtonAnimation(true) }
      onHoverEnd={() => setButtonAnimation(false) }
    >
      <motion.div 
        className={`relative h-2 w-2 rounded-full `}
        style={{ backgroundColor: primary_color, x: 10}}
        animate={{  scale: buttonAnimation ? 150 : 1}}
        transition={{ duration: 0.4}}
      />
      <motion.div
        variants={textVariants}
        animate={buttonAnimation ? "on_hover" : "normal"}
      >
        {text}
      </motion.div>
      <motion.div
        variants={arrowVariants}
        initial={{ x: -10}}
        animate={buttonAnimation ? "on_hover" : "normal"}
      >
        <ArrowUpRightCircle stroke={primary_color} fill={secundary_color} />
      </motion.div>
    </motion.button>
  )
}
