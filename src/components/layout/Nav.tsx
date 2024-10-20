import React, { useEffect, useRef, useState } from "react";
import {
  ArrowIcon,
  ArrowLeft,
  ArrowRight,
  ArrowUpRightCircle,
  FileDownload,
  GithubIcon,
  LinkedinIcon,
  LogoIconNav,
  MenuIcon,
} from "../icons";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import Link from "next/link";
import { Layout } from ".";
import SecundaryButton from "../common/buttons/SecundaryButton";
import { usePortfolioContext } from "@/context/dataContext";

// OBJETO LINK DE NAVEGACION
interface navItem {
  name: string;
  url: string;
}

const navLinks: navItem[] = [
  {
    name: "Sobre mí",
    url: "/#section_about",
  },
  {
    name: "Experiencia",
    url: "/#section_experience",
  },
  {
    name: "Proyectos",
    url: "/#section_proyects",
  },
  {
    name: "Habilidades",
    url: "/#section_skills",
  },
  {
    name: "Contacto",
    url: "/#section_contact",
  },
];

// -----------------------------

const itemVariants = {
  closed: {
    opacity: 0,
    y: 50,
    rotate: 5,
  },
  open: {
    opacity: 1,
    y: 0,
    rotate: 0,
  },
};

const DesktopNavbar = ({
  logoPrimaryColor,
  backButtonVisible,
  logoSecondaryColor,
  handleBack,
}: {
  logoPrimaryColor: string;
  backButtonVisible: boolean;
  logoSecondaryColor: string;
  handleBack: () => void;
}) => {
  const [buttonMenuAnimation, setButtonMenuAnimation] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

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
  ];

  interface NavItemProps {
    title: string;
    href: string;
    setIsOpen: any;
  }

  const NavItem = ({ title, href, setIsOpen }: NavItemProps) => {
    const router = useRouter();
    let actualUrl = router.asPath;

    const handleClick = (e: React.MouseEvent, path: string) => {
      e.preventDefault();

      if (actualUrl != path) {
        setIsOpen(false);
        router.push(path);
      }
    };

    return (
      <Link href={href} onClick={(e) => handleClick(e, href)} className="">
        {actualUrl === href ? (
          <li className="group flex justify-between items-center px-6 py-3 rounded-full cursor-auto">
            {title}
            <div className="h-3 w-3 bg-black rounded-full"></div>
          </li>
        ) : (
          <motion.li className="group flex justify-between items-center  cursor-pointer hover:bg-[#3232] px-6 py-3 rounded-full">
            {title}
            <motion.div>
              <ArrowRight className="stroke-black opacity-0 w-8 h-8 group-hover:opacity-100 duration-300" />
            </motion.div>
          </motion.li>
        )}
      </Link>
    );
  };

  // const ResumeButton = ({ isOpen }: { isOpen: boolean }) => (
  //   <Link
  //     href="/files/Luciano_Mariotti_CV.pdf"
  //     target="_blank"
  //     rel="noopener noreferrer"
  //   >
  //     <motion.div
  //       className="bg-black text-white rounded-xl p-6 mt-2 flex justify-between items-center"
  //       initial={{ opacity: 0 }}
  //       animate={{
  //         opacity: isOpen ? 1 : 0,
  //         y: isOpen ? 0 : 50,
  //         rotate: isOpen ? 0 : -5,
  //       }}
  //       transition={{ type: "spring", duration: 1 }}
  //     >
  //       <FileDownload stroke={"#fff"} width={"30"} height={"30"} />
  //       Resumen
  //       <ArrowRight />
  //     </motion.div>
  //   </Link>
  // );

  const backButtonVariables = {
    show: {
      y: 0,
      opacity: 1,
    },
    hidden: {
      y: 20,
      opacity: 0,
    },
  };

  return (
    <div>
      <div className="flex justify-between items-center">
        <Link href="/" className=" ">
          <LogoIconNav
            primary_color={logoPrimaryColor}
            secondary_color={logoSecondaryColor}
          />
        </Link>

        <div>
          {/* Botonera */}
          <div className="flex gap-3">
            <motion.button
              className="mr-0 md:mr-6 bg-white rounded-full px-2.5 md:px-4 py-2.5 flex gap-2 items-center group "
              variants={backButtonVariables}
              style={{ pointerEvents: backButtonVisible ? "all" : "none" }}
              animate={backButtonVisible ? "show" : "hidden"}
              transition={{ duration: 0.6 }}
              onClick={handleBack}
            >
              <ArrowLeft
                className={`group-hover:stroke-primary transition-all duration-200`}
              />
              <p className="hidden md:block uppercase font-semibold group-hover:text-primary transition-all duration-200 ">
                Atras
              </p>
            </motion.button>

            {/* CV Button */}
            <Link
              href="/files/Luciano_Mariotti_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <motion.button className="group hidden md:flex p-2.5 rounded-full bg-[#e4e6ef] hover:bg-primary duration-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="black"
                  className="group-hover:stroke-white  duration-300"
                >
                  <path
                    d="M14 3V7C14 7.26522 14.1054 7.51957 14.2929 7.70711C14.4804 7.89464 14.7348 8 15 8H19M14 3H7C6.46957 3 5.96086 3.21071 5.58579 3.58579C5.21071 3.96086 5 4.46957 5 5V19C5 19.5304 5.21071 20.0391 5.58579 20.4142C5.96086 20.7893 6.46957 21 7 21H17C17.5304 21 18.0391 20.7893 18.4142 20.4142C18.7893 20.0391 19 19.5304 19 19V8M14 3L19 8M12 11V17M12 17L9 14M12 17L15 14"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </motion.button>
            </Link>

            {/* Contact Button */}
            <Link href={"mailto:lucianomariodev@gmail.com"} target="_blank">
              <SecundaryButton
                text={"HABLEMOS"}
                primary_color="#A8FF78"
                secundary_color="#121212"
              />
            </Link>

            {/* Menu Button */}
            <motion.button
              className="text-black overflow-hidden flex items-center gap-2 rounded-full uppercase font-semibold  px-4 py-4 md:py-2.5 bg-white"
              onHoverStart={() => setButtonMenuAnimation(true)}
              onHoverEnd={() => {
                !isOpen && setButtonMenuAnimation(false);
              }}
              onClick={() => setIsOpen(!isOpen)}
              animate={{
                backgroundColor: buttonMenuAnimation ? "#fff" : "#e4e6ef",
              }}
            >
              <motion.span className="hidden md:block">Menu</motion.span>
              <motion.span
                className={`flex gap-1 justify-center  `}
                animate={{ rotate: buttonMenuAnimation ? 90 : 0 }}
              >
                <span className="h-1 w-1 bg-black rounded-full"></span>
                <span className="h-1 w-1 bg-black rounded-full"></span>
              </motion.span>
            </motion.button>
          </div>

          {/* Menu Desktop  */}
          <motion.div
            className="hidden md:block h-1 relative pt-2 text-2xl font-medium uppercase "
            animate={{ pointerEvents: isOpen ? "visible" : "none" }}
          >
            <motion.div
              className=" bg-white rounded-xl py-6 px-1"
              variants={itemVariants}
              initial={"closed"}
              animate={isOpen ? "open" : "closed"}
              transition={{ type: "spring", duration: 1 }}
            >
              <ol className="flex flex-col">
                {LinkList.map((item) => (
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
                className="bg-black text-white rounded-xl p-6 mt-2 flex justify-between items-center"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: isOpen ? 1 : 0,
                  y: isOpen ? 0 : 50,
                  rotate: isOpen ? 0 : -5,
                }}
                transition={{ type: "spring", duration: 1 }}
              >
                <FileDownload stroke={"#fff"} width={"30"} height={"30"} />
                Resumen
                <ArrowRight />
              </motion.div>
            </Link>{" "}
          </motion.div>
        </div>
      </div>

      {/* Menu Mobile */}
      <div className="flex flex-col gap-4 md:hidden h-2 w-full">
        <motion.div
          className="block md:hidden h-1 relative pt-2 text-2xl font-medium uppercase "
          animate={{ pointerEvents: isOpen ? "visible" : "none" }}
        >
          <motion.div
            className="bg-white rounded-xl py-6 px-1"
            variants={itemVariants}
            initial={{ opacity: 0 }}
            animate={isOpen ? "open" : "closed"}
            transition={{ type: "spring", duration: 1 }}
          >
            <ol className="flex flex-col">
              {LinkList.map((item) => (
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
              className="bg-black text-white rounded-xl p-6 mt-2 flex justify-between items-center"
              initial={{ opacity: 0 }}
              animate={{
                opacity: isOpen ? 1 : 0,
                y: isOpen ? 0 : 50,
                rotate: isOpen ? 0 : -5,
              }}
              transition={{ type: "spring", duration: 1 }}
            >
              <FileDownload stroke={"#fff"} width={"30"} height={"30"} />
              Resumen
              <ArrowRight />
            </motion.div>
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default function Nav() {
  const { projectsFromContext } = usePortfolioContext();
  const [backButtonVisible, setBackButtonVisible] = useState(false);
  const [currentLogoColor, setCurrentLogoColor] = useState("#232323");
  const [currentLogoSecondColor, setCurrentLogoSecondColor] =
    useState("#020202");

  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    if (id) {
      const project = projectsFromContext.find((item) => item.title == id);
      if (project) {
        setCurrentLogoColor(project.primary_color);
        setCurrentLogoSecondColor(project.secundary_color);
      }
      setBackButtonVisible(true);
    } else {
      setCurrentLogoColor("#232323");
      setCurrentLogoSecondColor("#020202");
      setBackButtonVisible(false);
    }
  }, [id]);

  const handleBack = () => router.back();

  return (
    <motion.div
      className="fixed w-full z-40"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <Layout>
        <motion.div className="w-full py-5 md:py-2 mt-5">
          <DesktopNavbar
            handleBack={handleBack}
            backButtonVisible={backButtonVisible}
            logoPrimaryColor={currentLogoColor}
            logoSecondaryColor={currentLogoSecondColor}
          />
        </motion.div>
      </Layout>
    </motion.div>
  );
}
