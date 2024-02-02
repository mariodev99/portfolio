import React, { useEffect } from 'react'
import { motion, useAnimationControls } from 'framer-motion'

export const Logo = () => {

const logoVariants = {
  primaryColor: {
    fill: "#007AFF"
  },
  secondaryColor: {
    fill: "#090909",
    transition: {
      delay: 1
    }
  },
}

    return (

      <motion.svg xmlns="http://www.w3.org/2000/svg" width="150" height="150" viewBox="0 0 150 150"
        initial="primaryColor"
        animate="secondaryColor"
        variants={logoVariants}
      >

          <motion.g          
            initial="primaryColor"
            animate="secondaryColor"  
            variants={logoVariants}
          >
        <motion.path 
          initial={{opacity: 0, x: -20}} 
          animate={{opacity: 1, x: 0}} 
          transition={{ delay: 1.1, duration: .5, ease: "easeInOut"}}

          d="M98.3663 104V93.0111L54 48H80.2834L116.846 85.0192V104H98.3663Z" 
          fill="#f0f1fa"
        />
        <motion.path
          initial={{opacity: 0, x: -20}} 
          animate={{opacity: 1, x: 0}} 
          transition={{ delay: 1, duration: .5, type: "spring"}}
          d="M26 104V48H44.4608L81.0233 85.0192V104H62.5436V93.0111L44.4608 74.9727V104H26Z" 
          fill="#f0f1fa"
        />
        <motion.path           
          initial={{opacity: 0, scale: 0}} 
          animate={{opacity: 1, scale: 1}} 
          transition={{ delay: 1.4, duration: 0.7, type: "spring"}}  
          d="M99.2386 55H96.5504V47.7273H99.2351C99.9761 47.7273 100.614 47.8729 101.149 48.1641C101.687 48.4529 102.101 48.8696 102.392 49.4141C102.683 49.9562 102.829 50.6049 102.829 51.3601C102.829 52.1177 102.683 52.7687 102.392 53.3132C102.103 53.8577 101.69 54.2756 101.153 54.5668C100.615 54.8556 99.9773 55 99.2386 55ZM98.3082 53.5014H99.1712C99.5784 53.5014 99.9228 53.4328 100.205 53.2955C100.489 53.1558 100.703 52.9297 100.847 52.6172C100.994 52.3023 101.067 51.8833 101.067 51.3601C101.067 50.8369 100.994 50.4202 100.847 50.1101C100.701 49.7976 100.484 49.5727 100.197 49.4354C99.9134 49.2957 99.563 49.2259 99.1463 49.2259H98.3082V53.5014ZM103.855 55V47.7273H108.926V49.1548H105.613V50.6463H108.667V52.0774H105.613V53.5724H108.926V55H103.855ZM111.678 47.7273L113.305 53.054H113.365L114.991 47.7273H116.959L114.505 55H112.165L109.711 47.7273H111.678Z" 
          fill="#f0f1fa"
        />
        </motion.g>
      </motion.svg>  
    )
}

export default function StartAnimation() {

  const ANIMATION_TIME = 3000

  const logoControls = useAnimationControls()

  useEffect(() => {
    logoControls.start({ scale: 1, opacity: 1, transition: { duration: 1,  type: "spring"}})

    logoControls.start({ borderRadius: "42px", transition: { duration: 1.5 ,  delay: 0.5 , type: "spring"} }) 
    
    setTimeout(() => {
      logoControls.start({ scale: 100, x: 1000, y: -800, transition: {  duration: 1.5, ease: "easeInOut"} }) 
    }, ANIMATION_TIME);
  }, [])
  


  return (
    <div className='bg-black absolute left-0 z-50 h-screen w-screen flex justify-center items-center overflow-hidden'>
      <motion.div 
        layout
        initial={{ scale: 0, opacity: 0, borderRadius: "999px"}}
        animate={logoControls}
      >
        <Logo/>
      </motion.div>
    </div>
  )
}
