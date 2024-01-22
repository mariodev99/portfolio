import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowUpRightCircle } from '@/components/icons'

export default function PrimaryButton({text, primaryColor}: {text:string, primaryColor: string}) {

    const [buttonAnimation, setButtonAnimation] = useState(false)

  return (
    <motion.button 
    className='overflow-hidden flex mt-10 py-3 items-center gap-3 rounded-full uppercase font-semibold px-5 py-2 bg-white shadow-lg text-[#159bff]'
    onHoverStart={() => setButtonAnimation(true) }
    onHoverEnd={() => setButtonAnimation(false) }
  >
    <motion.div className={`relative h-2 w-2 rounded-full `}
        animate={{ opacity: buttonAnimation ? 1 : 1, scale: buttonAnimation ? 50 : 1, x: 10}}
        transition={{ duration: 0.3}}
        style={{ backgroundColor: primaryColor}}
    >
    </motion.div>
    <motion.div
      animate={{ x: buttonAnimation ? -10 : 10, color: buttonAnimation ? "#fff" : `${primaryColor}` }}
    >
      {text}
    </motion.div>

    <motion.div 
      className=''
      animate={{ opacity: buttonAnimation ? 1 : 0, scale: buttonAnimation ? 1 : 0, x: -10 }}
    >
    <ArrowUpRightCircle stroke={primaryColor} fill={"#fff"} />
    </motion.div>
</motion.button>
  )
}
