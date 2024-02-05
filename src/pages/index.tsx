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
import { motion, useMotionValue, useMotionValueEvent, useScroll, useTransform } from 'framer-motion'
import AnimationWraperPage from '@/components/layout/AnimationWraperPage'
import { useEffect, useRef, useState } from 'react'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const scrollYMotionValue = useMotionValue(0);

  // Seteo el scroll
  useEffect(() => {

    const container = containerRef.current;

    const handleScroll = () => {
      if (container) {
        const scrollTop = container.scrollTop;
        if (scrollYMotionValue) {
          scrollYMotionValue.set(scrollTop);
        }
      }
    };

    if (container) {
      container.addEventListener('scroll', handleScroll);
    }

    return () => {
      if (container) {
        container.removeEventListener('scroll', handleScroll);
      }
    };
  }, [scrollYMotionValue]);  

  return (
    <motion.main
      ref={containerRef}
      style={{
        position: "absolute",
        height: "100vh",
        width: "100%",
        overflow: "scroll",
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{opacity: 0 }}
      transition={{
        duration: 0.5,
        ease: "easeInOut",
      }}
    >
        <Head>
          <title>Mariodev</title>
        </Head>
        <Layout>
          <Header/>
        </Layout>
        <SliderProjects currentScroll={scrollYMotionValue}/>
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
      </motion.main>
  )
}
