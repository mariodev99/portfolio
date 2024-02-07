import React, { useEffect, useRef, useState } from 'react'
import { PrimaryBox } from '../common/PrimaryBox'
import { ArrowIcon, ArrowRight, ArrowUpRightCircle, FileDownload, GithubIcon, LinkedinIcon, LogoIconNav, MenuIcon } from '../icons'
import { AnimatePresence, animationControls, useCycle, useMotionValueEvent, useScroll } from 'framer-motion'
import { motion } from 'framer-motion'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { projectsList } from '../sections/HomeProjects'
import { Layout } from '.'
import SecundaryButton from '../common/buttons/SecundaryButton'

// OBJETO LINK DE NAVEGACION
interface navItem {
  name: string
  url: string
}

const navLinks:navItem[] = [
  {
    name: "Sobre mí",
    url: "/#section_about"
  },
  {
    name: "Experiencia",
    url: "/#section_experience"
  },
  {
    name: "Proyectos",
    url: "/#section_proyects"
  },
  {
    name: "Habilidades",
    url: "/#section_skills"
  },
  {
    name: "Contacto",
    url: "/#section_contact"
  },
]

// -----------------------------


// BARRA DE NAVEGACION MOBILE - MOTION VARIANTS
const itemVariants = {
  closed: {
    opacity: 0,
    y: 50,
    rotate: 5
  },
  open: {
    opacity: 1, 
    y : 0, 
    rotate: 0  }
};

const DesktopNavbar = ({logoPrimaryColor}:{logoPrimaryColor: string}) => {

  const [buttonContactAnimation, setButtonContactAnimation] = useState(false)
  const [buttonMenuAnimation, setButtonMenuAnimation] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  const LinkList = [
    {
      title: "Inicio",
      href: "/",
    },
    {
      title: "Proyectos",
      href: "/proyectos",
    },
    {
      title: "Contacto",
      href: "/contacto",
    },
  ]

  const NavItem = ({title, href, setIsOpen}: {title: string, href: string, setIsOpen:any}) => {

    const router = useRouter()
    let actualUrl = router.asPath

    const handleClick = (e:React.MouseEvent, path:string) => {
      e.preventDefault()
      
      if (actualUrl != path) {        
        setIsOpen(false)
        router.push(path)
      }
     };


    return (
      <Link href={href} onClick={(e) => handleClick(e, href)} className=''>
        {actualUrl === href ? 
        <li className='group flex justify-between items-center px-6 py-3 rounded-full cursor-auto'>
          {title}
          <div className='h-3 w-3 bg-black rounded-full'></div>
        </li> 
        :         
        <motion.li className='group flex justify-between items-center  cursor-pointer hover:bg-[#3232] px-6 py-3 rounded-full'>
          {title}
          <motion.div>
            <ArrowRight className="stroke-black opacity-0 w-8 h-8 group-hover:opacity-100 duration-300"/>
          </motion.div>
        </motion.li>}

      </Link>
    )
  }


  const ResumeButton = () => (
    
    <Link
    href="/files/Luciano_Mariotti_CV.pdf"
    target="_blank"
    rel="noopener noreferrer"
    >
      <motion.div
        className='bg-black text-white rounded-xl p-6 mt-2 flex justify-between items-center'
        initial={{opacity: 0}}
        animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : 50, rotate: isOpen ? 0 : -5    }}
        transition={{ type: "spring", duration: 1}}
      >
        <FileDownload stroke={"#fff"} width={"30"} height={"30"} />
        Resumen
        <ArrowRight/>
      </motion.div>
    </Link>
  )

  return (
    <div>
    <div className='flex justify-between items-center'>
      <Link href='/' className=' '>
        <LogoIconNav primaryColor={logoPrimaryColor}/>
      </Link>

      <div>
      {/* Botonera */}
      <div className='flex gap-3'>

        {/* CV Button */}
      <Link
        href="/files/Luciano_Mariotti_CV.pdf"
        target="_blank"
        rel="noopener noreferrer"
      >
      <motion.button 
        className='group hidden md:flex px-2.5 py-2.5 rounded-full bg-[#e4e6ef] hover:bg-[#00A3FF] duration-300' 
        >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="black" className='group-hover:stroke-white  duration-300'>
        <path d="M14 3V7C14 7.26522 14.1054 7.51957 14.2929 7.70711C14.4804 7.89464 14.7348 8 15 8H19M14 3H7C6.46957 3 5.96086 3.21071 5.58579 3.58579C5.21071 3.96086 5 4.46957 5 5V19C5 19.5304 5.21071 20.0391 5.58579 20.4142C5.96086 20.7893 6.46957 21 7 21H17C17.5304 21 18.0391 20.7893 18.4142 20.4142C18.7893 20.0391 19 19.5304 19 19V8M14 3L19 8M12 11V17M12 17L9 14M12 17L15 14"  strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </motion.button>
        </Link>

      {/* Contact Button */}
      <Link
        href={"mailto:luciano.mariotti99@gmail.com"}
      >
        <SecundaryButton text={"HABLEMOS"} primaryColor='#00A3FF' secundaryColor='#121212'/>
      </Link>

      {/* Menu Button */}
      <motion.button
        className='text-black overflow-hidden flex items-center gap-2 rounded-full uppercase font-semibold px-4 py-2.5 bg-white'
        onHoverStart={() => setButtonMenuAnimation(true) }
        onHoverEnd={() => {
          !isOpen && setButtonMenuAnimation(false) 
        }}
        onClick={() => setIsOpen(!isOpen)}
        animate={{  backgroundColor: buttonMenuAnimation ? "#fff" : "#e4e6ef" }}
      >
        <motion.span>
          Menu
        </motion.span>
        <motion.span 
          className={`flex gap-1 justify-center  `}
          animate={{ rotate: buttonMenuAnimation ? 90 : 0}}
        >
          <span className='h-1 w-1 bg-black rounded-full'></span>
          <span className='h-1 w-1 bg-black rounded-full'></span>
        </motion.span>
      </motion.button> 
      </div>

      {/* Menu Desktop  */}
      <motion.div 
        className='hidden md:block h-1 relative pt-2 text-2xl font-medium uppercase '
        animate={{pointerEvents: isOpen ? "visible" : "none"  }}
      >
          <motion.div         
            className=' bg-white rounded-xl py-6 px-1'
            variants={itemVariants}
            initial={"closed"}
            animate={isOpen ? "open" : "closed"}
            transition={{ type: "spring", duration: 1}}
          >
            <ol className='flex flex-col'>
              {LinkList.map( item => (
                <NavItem setIsOpen={setIsOpen} key={item.title} {...item} />
              ))}
            </ol>
          </motion.div>

          <Link
            href="/files/Luciano_Mariotti_CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <motion.div
              className='bg-black text-white rounded-xl p-6 mt-2 flex justify-between items-center'
              initial={{opacity: 0}}
              animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : 50, rotate: isOpen ? 0 : -5    }}
              transition={{ type: "spring", duration: 1}}
            >
              <FileDownload stroke={"#fff"} width={"30"} height={"30"} />
              Resumen
              <ArrowRight/>
            </motion.div>
        </Link>
      </motion.div>
      </div>

      </div>

      <div className='flex flex-col gap-4 md:hidden h-2 w-full'> 
      {/* Menu Mobile */}
        <motion.div
          className='block md:hidden h-1 relative pt-2 text-2xl font-medium uppercase '
          animate={{ pointerEvents: isOpen ? "visible" : "none"  }}
        >
          <motion.div         
            className='bg-white rounded-xl py-6 px-1'
            variants={itemVariants}
            initial={{opacity: 0}}
            animate={isOpen ? "open" : "closed"}
            transition={{ type: "spring", duration: 1}}
          >
            <ol className='flex flex-col'>
              {LinkList.map( item => (
                <NavItem setIsOpen={setIsOpen} key={item.title} {...item} />
              ))}
            </ol>
          </motion.div>
          <Link
            href="/files/Luciano_Mariotti_CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <motion.div
              className='bg-black text-white rounded-xl p-6 mt-2 flex justify-between items-center'
              initial={{opacity: 0}}
              animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : 50, rotate: isOpen ? 0 : -5    }}
              transition={{ type: "spring", duration: 1}}
            >
              <FileDownload stroke={"#fff"} width={"30"} height={"30"} />
              Resumen
              <ArrowRight/>
            </motion.div>
          </Link>
        </motion.div>
      </div>
    </div>

  )
}

export default function Nav() {

  const router = useRouter()
  const actualRoute = router.pathname

  let logoPrimaryColor = "#000"

  if (actualRoute != "/" && actualRoute != "/proyectos" && actualRoute != "/projects") {
    const routeParts = actualRoute.split('/');
    const lastPart = routeParts[routeParts.length - 1];
    logoPrimaryColor = projectsList?.filter( item => item.title === lastPart)[0].primaryColor
  }

  // Valores del scroll
  // const { scrollY } = useScroll();
  // const prevScrollY = useRef(0);

  // Estado de la barra de navegacion
  // const [hidden, setHidden] = useState(false);

  // Utiliza el valor del scroll para esconder la barra de navegacion 
  // cuando se scrollea para abajo
  // useEffect(() => {
  //   const handleScroll = () => {
  //     // Valores del scroll
  //     const currentScrollY = scrollY.get();
  //     const prevScrollValue = prevScrollY.current;
            
  //     if (currentScrollY > prevScrollValue) {
  //       setHidden(true)
  //     }else {
  //       setHidden(false)
  //     }

  //     prevScrollY.current = currentScrollY;
  //   };

  //   window.addEventListener('scroll', handleScroll);
  //   return () => {
  //     window.removeEventListener('scroll', handleScroll);
  //   };
  // }, []);

  return (

    <motion.div 
      className='fixed w-full z-50'
      initial={{ opacity: 0, y: -50}}
      animate={{opacity: 1, y: 0}}
      transition={{ duration: 0.8}}
    >
      <Layout>
      <motion.div
        // variants={variants}
        // animate={hidden ? "hidden" : "visible"}
        className='w-full py-5 md:py-2 mt-5'
      >
        {logoPrimaryColor && <DesktopNavbar logoPrimaryColor={logoPrimaryColor} />}
        {/* <MobileNavbar/> */}
      </motion.div>
    </Layout>
    </motion.div>

  )
}
