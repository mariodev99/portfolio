import { Inter } from 'next/font/google'
import { Layout } from '@/components/layout'
import { Header } from '@/components/sections/Header'
import { SliderProjects } from '@/components/sections/SliderProjects'
import Nav from '@/components/layout/Nav'
import { SectionTitle } from '@/components/common/SectionTitle'
import HomeProjects from '@/components/sections/Projects'
import HomeExp from '@/components/sections/HomeExp'
import HomeSkills from '@/components/sections/HomeSkills'
import HomeContact from '@/components/sections/HomeContact'
import HomeAbout from '@/components/sections/HomeAbout'
import Footer from '@/components/layout/Footer'
import StartAnimation from '@/components/layout/StartAnimation'
import { useEffect, useState } from 'react'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  
  const [endAnimation, setEndAnimation] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setEndAnimation(true)
    }, 4500);
  }, [])
  
  return (
    endAnimation ?  
    <main
      className={`bg-dark ${inter.className} `}
    >
      <Layout>
          <Header/>
      </Layout>
      <SliderProjects/>
      <Layout>
        <>
          <HomeAbout/>
          <HomeExp/>
          <HomeProjects/>
          <HomeSkills/>
          <HomeContact/>
        </>
      </Layout>
      <Footer/>
    </main> 
    :           
    <StartAnimation/>

  )
}
