import Link from "next/link";
import React from "react";
import { ArrowUp, LogoIcon } from "../icons";

interface FooterProps {
  containerRef: React.RefObject<HTMLDivElement>;
}

export default function Footer({ containerRef }: FooterProps) {
  const scrollToTop = () => {
    if (containerRef.current) {
      console.log(containerRef.current);
      containerRef.current.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "start",
      });
      // containerRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="px-5 h-28 md:h-52 flex flex-col justify-end">
      <div className="flex justify-between pb-5 text-sm md:text-lg font-medium items-center">
        <p className="">Luciano Mariotti</p>
        <div className="flex gap-5 hidden md:flex gap-3 items-center text-xs">
          {/* <Link href='#about'>Sobre mi</Link>
                <Link href='#contact'>Experiencia</Link>
                <Link href='/proyectos'>Proyectos</Link> */}
          Hecho con ♥
        </div>
        <button
          onClick={scrollToTop}
          className="group p-5 bg-light rounded-full hover:bg-dark cursor-pointer duration-500 "
        >
          <ArrowUp className="group-hover:stroke-white  " />
        </button>
      </div>
    </div>
  );
}
