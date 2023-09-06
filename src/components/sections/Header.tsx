import React from 'react'
import { Poppins } from 'next/font/google'
import { motion } from 'framer-motion'
import Image from 'next/image'
import profileImage1 from "../../../public/images/profile_portfolio.jpg"
// import profileImage2 from "../../../public/images/profile_white.jpg"

const poppins = Poppins({ weight: ["400","500","900"], subsets: ['latin'], style: "italic"})

// const ImageProfileMask = () => (
//     <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
//       <svg
//                         xmlns="http://www.w3.org/2000/svg"
//                         width="300"
//                         height="400"
//                         viewBox="0 0 385 474"
//                         fill="none"
//                       >
//                         <mask
//                           id="mask0_53_78"
//                           // style="mask-type:alpha"
//                           maskUnits="userSpaceOnUse"
//                           x="0"
//                           y="0"
//                           width="385"
//                           height="474"
//                         >
//                           <motion.rect
//                             x="55"
//                             y="19"
//                             width="86"
//                             height="77"
//                             rx="12"
//                             fill="white"
//                             initial="hidden"
//                             animate="visible"
//                             custom={2}
//                           />
//                           <motion.rect
//                             x="146"
//                             width="98.7936"
//                             height="208.752"
//                             rx="12"
//                             fill="white"
//                             initial="hidden"
//                             animate="visible"
//                             custom={4}
//                           />
//                           <motion.rect
//                             x="250"
//                             y="62"
//                             width="62"
//                             height="97"
//                             rx="12"
//                             fill="white"
//                             initial="hidden"
//                             animate="visible"
//                             custom={5}
//                           />
//                           <motion.rect
//                             y="101"
//                             width="141"
//                             height="134"
//                             rx="12"
//                             fill="white"
//                             initial="hidden"
//                             animate="visible"
//                             custom={1}
//                           />
//                           <motion.rect
//                             x="250"
//                             y="165"
//                             width="112.907"
//                             height="136.559"
//                             rx="16"
//                             fill="white"
//                             initial="hidden"
//                             animate="visible"
//                             custom={3}
//                           />
//                           <motion.rect
//                             x="146.19"
//                             y="210.841"
//                             width="98.7936"
//                             height="107.855"
//                             rx="12"
//                             fill="white"
//                             initial="hidden"
//                             animate="visible"
//                             custom={3}
//                           />
//                           <motion.rect
//                             x="55"
//                             y="240"
//                             width="86"
//                             height="108"
//                             rx="12"
//                             fill="white"
//                             initial="hidden"
//                             animate="visible"
//                             custom={5}
//                           />
//                           <motion.rect
//                             x="252"
//                             y="409"
//                             width="60"
//                             height="52"
//                             rx="12"
//                             fill="white"
//                             initial="hidden"
//                             animate="visible"
//                             custom={1}
//                           />
//                           <motion.rect
//                             x="250"
//                             y="306"
//                             width="134.959"
//                             height="97.4177"
//                             rx="12"
//                             fill="white"
//                             initial="hidden"
//                             animate="visible"
//                             custom={2}
//                           />
//                           <motion.rect
//                             x="146"
//                             y="321"
//                             width="98.7936"
//                             height="152.215"
//                             rx="12"
//                             fill="white"
//                             initial="hidden"
//                             animate="visible"
//                             custom={4}
//                           />
//                           <motion.rect
//                             x="55"
//                             y="355"
//                             width="86"
//                             height="88"
//                             rx="12"
//                             fill="white"
//                             initial="hidden"
//                             animate="visible"
//                             custom={3}
//                           />
//                         </mask>
//                         <g mask="url(#mask0_53_78)">
//                           <motion.rect
//                             x="-18"
//                             y="-197"
//                             width="600"
//                             height="697.797"
//                             fill="url(#pattern0)"
//                           />
//                         </g>
//                         <defs>
//                           <pattern
//                             id="pattern0"
//                             patternContentUnits="objectBoundingBox"
//                             width="1"
//                             height="1"
//                           >
//                             <use
//                               xlinkHref="#image0_53_78"
//                               transform="translate(0 -0.0732323) scale(0.000330688 0.000284341)"
//                             />
//                           </pattern>
//                           <image
//                             id="image0_53_78"
//                             width="3024"
//                             height="4032"
//                             xlinkHref="https://firebasestorage.googleapis.com/v0/b/portfolio-bef3a.appspot.com/o/portfolioimg.jpg?alt=media&token=9f5bcb7e-2d07-4422-b4b1-7dd39c16bbd4"
//                           ></image>
//                         </defs>
//       </svg>
//     </motion.div>
// )

const ImageProfileStandard = () => (
  <div className='relative h-100 w-[60%] overflow-hidden rounded-[80px]'>
    <Image priority alt='Foto de Luciano Mariotti' src={profileImage1}/>
  </div>
)


export const Header = () => {
  return (
    <section id='section_header' className='grid grid-cols-1 lg:grid-cols-2 justify-items-center items-center pt-20 md:pt-14 md:mt-10'>
      <motion.div 
        initial={{
          opacity: 0,
          scale: 0
        }}
        animate={{
          opacity: 1,
          scale: 1
        }}
        transition={ {
          duration: 0.7,
          delay: 0.3,
          type: "spring"
        }}
        className='order-2 lg:order-1 flex justify-center'
      >
        <ImageProfileStandard/>
      </motion.div>
      <div className={`${poppins.className} order-1 lg:order-2`}>
        <motion.h1 
          className='text-4xl md:text-8xl font-black tracking-wide '
          initial={{
            opacity: 0,
            y: -40
          }}
          animate={{
            opacity: 1,
            y: 0

          }}
          transition={ {
            duration: 1,
          }}
        >
          Luciano <br/> Mariotti 
        </motion.h1>
        <motion.p 
          initial={{
            opacity: 0,
            y: -40
          }}
          animate={{
            opacity: 1,
            y: 0
          }}
          transition={ {
            duration: 1,
          }}
          className='mt-5 text-xl font-normal hidden lg:block'
        >
          Desarrollador front end que disfruta de diseñar y plasmar ideas creativas en la web.
        </motion.p>
      </div>
  </section>
  )
}
