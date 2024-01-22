import React from 'react'
import { ProjectBox } from '../common/ProjectBox'
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion'
import bitstoreImage from "../../../public/images/8bit_project.jpg"
import codepartyImage from "../../../public/images/codeparty_project.jpeg"
import mmchokersImage from "../../../public/images/mmchokers_project.jpg"
import MMrealestateImage from "../../../public/images/projects/realstateProject.jpg"

const projectList = [
  {title: "8bitStore", image:bitstoreImage, UrlSite:  null },
  {title: "Codeparty", image:codepartyImage , UrlSite:  null},
  {title: "MMChokers", image:mmchokersImage , UrlSite:  null},
  {title: "8bitStore2", image:bitstoreImage , UrlSite:  null},
  {title: "MMrealestate", image:MMrealestateImage , UrlSite:  null},
  {title: "Codeparty4", image:codepartyImage , UrlSite:  null},
]

export const SliderProjects = () => {

  const { scrollY } = useScroll()
  const toRight:MotionValue = useTransform(scrollY,[0,2000],[0,250])
  const toLeft:MotionValue = useTransform(scrollY,[0,2000],[0,-250])

  return (
    <motion.div  className='mt-20'>
      
      {/* Derecha */}
      <div className='mb-0 md:mb-10 overflow-hidden relative h-60 md:h-80 flex justify-end'>
              <motion.div style={{ x: toRight }} initial={{ opacity: 0}} animate={{ opacity: 1}} transition={{ duration: 1}} className=' w-50 flex flex-row-reverse justify-end gap-5 '>
              {projectList.map(project => (
                  <ProjectBox key={project.title} title={project.title} image={project.image}/>              
                ))}
              </motion.div>
      </div>
      
      {/* IZQUIERDA */}
      <div className='overflow-hidden relative w-full h-80 '>
            <div className='flex absolute left-0 '>
              <motion.div style={{ x: toLeft }} initial={{ opacity: 0}} animate={{ opacity: 1}} transition={{ duration: 1}} className='w-50 flex gap-5 '>
                {projectList.map(project => (
                  <ProjectBox key={project.title} {...project}/>              
                ))}
              </motion.div>
            </div> 
      </div>
  </motion.div>
  )
}
