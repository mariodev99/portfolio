import React from "react";
import { ArrowUp } from "../icons";

interface FooterProps {
  containerRef: React.RefObject<HTMLDivElement>;
}

export default function Footer({ containerRef }: FooterProps) {
  const scrollToTop = () => {
    if (containerRef.current) {
      containerRef.current.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="px-5 h-28 md:h-52 flex flex-col justify-end">
      <div className="grid grid-cols-2 md:grid-cols-3 items-center">
        <p className=" text-sm md:text-lg font-medium">Luciano Mariotti</p>
        <div className=" hidden md:flex gap-3 justify-center text-xs">
          Hecho con ♥
        </div>
        <div className="flex justify-end">
          <button
            onClick={scrollToTop}
            className="group p-5 bg-light rounded-full hover:bg-dark cursor-pointer duration-500 "
          >
            <ArrowUp className="group-hover:stroke-white  " />
          </button>
        </div>
      </div>
    </div>
  );
}
