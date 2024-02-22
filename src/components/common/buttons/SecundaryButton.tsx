import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight } from '@/components/icons'

export default function SecundaryButton({text, primary_color, secundary_color}:{ text:string, primary_color: string, secundary_color: string}) {

    const [buttonAnimation, setButtonAnimation] = useState(false)

  return (
    <motion.button 
        className='hidden md:flex text-white overflow-hidden  items-center gap-2 rounded-full font-semibold px-3 py-2.5 bg-white'
        onHoverStart={() => setButtonAnimation(true) }
        onHoverEnd={() => setButtonAnimation(false) }
        animate={{  backgroundColor: buttonAnimation ? primary_color : secundary_color }}
    >
    <motion.span 
      animate={{  x: buttonAnimation ? 5 : -30 }}
    >
      <ArrowRight/>
    </motion.span>
    <motion.span
      animate={{ x: buttonAnimation ? 5 : -15}}
    >
    {text}
    </motion.span>
    <motion.span 
      className={`relative h-2 w-2 rounded-full bg-white`}
      animate={{ opacity: buttonAnimation ? 0 : 1, scale: buttonAnimation ? 0 : 1}}
      transition={{ duration: 0.2}}
      style={{  x: -10}}
    />
  </motion.button>
  )
}
