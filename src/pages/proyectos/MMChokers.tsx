import { SectionTitle } from '@/components/common/SectionTitle'
import { Layout } from '@/components/layout'
import React, { useState } from 'react'
import { projectsList } from '@/components/sections/HomeProjects'
import Nav from '@/components/layout/Nav'
import ContentProjectPage from '@/components/common/ContentProjectPage'


export default function ChokersPage() {

  const project = projectsList.filter( project => (
    project.title === "MMChokers"
  ))[0]

  return (
      <>
      <Layout>
        <ContentProjectPage project={project} />
      </Layout>
      </>
  )
}
