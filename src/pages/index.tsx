import { Inter } from 'next/font/google'
import { Layout } from '@/components/layout'
import { Header } from '@/components/sections/Header'
import { SliderProjects } from '@/components/sections/SliderProjects'
import Nav from '@/components/layout/Nav'
import { SectionTitle } from '@/components/common/SectionTitle'
import HomeProjects from '@/components/sections/Projects'
import HomeExp from '@/components/sections/HomeExp'
import HomeSkills from '@/components/sections/HomeSkills'
import { GithubIcon } from '@/components/icons'
import HomeContact from '@/components/sections/HomeContact'
import HomeAbout from '@/components/sections/HomeAbout'
import Footer from '@/components/layout/Footer'

const inter = Inter({ subsets: ['latin'] })


export default function Home() {
  


  // useMotionValueEvent(scrollY, "change", (latest) => {
  //   console.log("Page scroll: ", latest)
  // })

  return (
    <main
      className={`bg-dark ${inter.className} scroll-smooth`}
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
  )
}
