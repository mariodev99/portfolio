import { Inter } from 'next/font/google'
import { Layout } from '@/components/layout'
import { Header } from '@/components/sections/Header'
import { SliderProjects } from '@/components/sections/SliderProjects'
import Nav from '@/components/layout/Nav'
import { SectionTitle } from '@/components/common/SectionTitle'
import HomeProjects from '@/components/sections/HomeProjects'
import HomeExp from '@/components/sections/HomeExp'
import HomeSkills from '@/components/sections/HomeSkills'
import HomeContact from '@/components/sections/HomeContact'
import HomeAbout from '@/components/sections/HomeAbout'
import Footer from '@/components/layout/Footer'
import Head from 'next/head'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
    
  return (
    <main
      className={`bg-light ${inter.className} `}
    >
      <Head>
        <title>Mariodev</title>
      </Head>
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

  )
}
