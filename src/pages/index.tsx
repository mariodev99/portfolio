import { Inter } from "next/font/google";
import { Layout } from "@/components/layout";
import { Header } from "@/components/sections/Header";
import { SliderProjects } from "@/components/sections/SliderProjects";
import Nav from "@/components/layout/Nav";
import { SectionTitle } from "@/components/common/SectionTitle";
import HomeProjects from "@/components/sections/HomeProjects";
import HomeExp from "@/components/sections/HomeExp";
import HomeSkills from "@/components/sections/HomeSkills";
import HomeContact from "@/components/sections/HomeContact";
import HomeAbout from "@/components/sections/HomeAbout";
import Footer from "@/components/layout/Footer";
import Head from "next/head";
import {
  MotionValue,
  motion,
  useMotionValue,
  useTransform,
} from "framer-motion";
import { useEffect, useRef } from "react";

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollYMotionValue = useMotionValue(0);

  const contactSectionPosition: MotionValue = useTransform(
    scrollYMotionValue,
    [3600, 4700],
    [300, 0]
  );

  // const scrollToTop = () => {
  //   if (containerRef.current) {
  //     containerRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
  //   }
  // };

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
      container.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (container) {
        container.removeEventListener("scroll", handleScroll);
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
        overflowX: "hidden",
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{
        duration: 0.5,
        ease: "easeInOut",
      }}
    >
      <Head>
        <title>Mariodev</title>
      </Head>
      <Layout>
        <Header />
      </Layout>
      <SliderProjects currentScroll={scrollYMotionValue} />
      <Layout>
        <>
          <HomeAbout />
          <HomeExp />
          <HomeProjects />
        </>
      </Layout>

      {/* efecto parallax a secciones */}
      <motion.div
        id="contact"
        className="bg-white rounded-t-[60px] py-5 shadow-2xl"
        style={{ y: contactSectionPosition }}
      >
        <Layout>
          <>
            <HomeContact currentScroll={scrollYMotionValue} />
            <Footer containerRef={containerRef} />
          </>
        </Layout>
      </motion.div>
    </motion.main>
  );
}
