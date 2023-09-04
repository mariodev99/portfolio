import React from 'react'
import { ProjectBox } from '../common/ProjectBox'
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion'
import bitstoreImage from "../../../public/images/8bit_project.jpg"
import codepartyImage from "../../../public/images/codeparty_project.jpeg"
import mmchokersImage from "../../../public/images/mmchokers_project.jpg"
import MMrealestateImage from "../../../public/images/projects/realstateProject.jpg"

const projectList = [
  {title: "8bitStore", image:bitstoreImage },
  {title: "Codeparty", image:codepartyImage },
  {title: "MMChokers", image:mmchokersImage },
  {title: "8bitStore2", image:bitstoreImage },
  {title: "MMrealestate", image:MMrealestateImage },
  {title: "Codeparty4", image:codepartyImage },
]

export const SliderProjects = () => {

  const { scrollY } = useScroll()
  const toRight:MotionValue = useTransform(scrollY,[0,2000],[0,250])
  const toLeft:MotionValue = useTransform(scrollY,[0,2000],[0,-250])

  return (
    <div className='mt-20'>
      
      {/* Derecha */}
      <div className='mb-0 md:mb-10 overflow-hidden relative h-60 md:h-80 flex justify-end'>
              <motion.div style={{ x: toRight }} className=' w-50 flex flex-row-reverse justify-end gap-5 '>
              {projectList.map(project => (
                  <ProjectBox key={project.title} title={project.title} image={project.image}/>              
                ))}
              </motion.div>
      </div>
      
      {/* IZQUIERDA */}
      <div className='overflow-hidden relative w-full h-80 '>
            <div className='flex absolute left-0 '>
              <motion.div style={{ x: toLeft }} className='w-50 flex gap-5 '>
                {projectList.map(project => (
                  <ProjectBox key={project.title} title={project.title} image={project.image}/>              
                ))}
              </motion.div>
            </div>
      </div>
  </div>
  )
}
