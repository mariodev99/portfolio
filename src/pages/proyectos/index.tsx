import ProjectItem from '@/components/common/ProjectItem'
import { Layout } from '@/components/layout'
import { projectsList } from '@/components/sections/HomeProjects'
import React from 'react'

export default function ProjectPage() {
  return (
    <Layout>
        <div className='py-20'>
        <h1 className='text-[10vw]'>Proyectos</h1>
        <div className='mt-10 grid md:grid-cols-2 gap-10'>
        {projectsList.map((project, index) => (
            <ProjectItem key={project.title} {...project} />
        ))}
        </div>
        </div>

    </Layout>
  )
}
