import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import arg from "../../../public/images/arg.png";
import mate from "../../../public/images/mate.png";
import hand from "../../../public/images/hand.png";
import SliderBox from "../common/sliderbox";

export const Header = () => {
  return (
    <section
      id="section_header"
      className="mt-72 flex flex-col justify-center md:items-center text-4xl md:text-6xl lg:text-9xl text-graycontent cursor-default font-medium text-center"
    >
      <motion.div
        className="w-16 h-16 md:w-44 md:h-44 absolute top-48 left-16 md:top-56 md:left-56  "
        initial={{ scale: 0 }}
        animate={{ scale: 1, rotate: -20 }}
        transition={{ duration: 0.8, delay: 6, ease: "easeInOut" }}
      >
        <Image priority alt="Foto de Luciano Mariotti" src={arg} />
      </motion.div>
      <motion.div
        className="w-10 h-10 md:w-44 md:h-44 absolute top-[400px] right-24 md:top-[600px] md:right-56  "
        initial={{ scale: 0 }}
        animate={{ scale: 1, rotate: 20 }}
        transition={{ duration: 0.8, delay: 6, ease: "easeInOut" }}
      >
        <Image priority alt="Foto de Luciano Mariotti" src={mate} />
      </motion.div>
      <motion.div
        className="w-24 h-24 md:w-44 md:h-44  absolute top-52 right-10    md:top-56 md:right-80  "
        initial={{ scale: 0 }}
        animate={{ scale: 1, rotate: 20 }}
        transition={{ duration: 0.8, delay: 6, ease: "easeInOut" }}
      >
        <Image priority alt="Foto de Luciano Mariotti" src={hand} />
      </motion.div>
      <motion.div
        className=""
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 5.2, duration: 0.8, ease: "easeInOut" }}
      >
        Luciano Mariotti
      </motion.div>
      <div className="flex items-center justify-center gap-2 md:gap-4 text-black">
        <motion.div
          // animate={{ fontWeight: [500, 650, 500] }}
          // transition={{
          //   duration: 3,
          //   ease: "easeInOut",
          //   repeat: Infinity,
          //   repeatType: "loop",
          // }}
          initial={{}}
        >
          frontend
        </motion.div>
        {/* por cada letra hacer animacion de y e opacity */}
        <motion.div
          className="hidden md:block overflow-hidden"
          initial={{ width: 0 }}
          animate={{ width: "auto" }}
          transition={{ delay: 5.2, duration: 0.8, ease: "easeInOut" }}
        >
          <SliderBox />
        </motion.div>
        <motion.div
        // animate={{ fontWeight: [500, 650, 500] }}
        // transition={{
        //   duration: 3,
        //   ease: "easeInOut",
        //   repeat: Infinity,
        //   repeatType: "loop",
        //   delay: 2,
        // }}
        >
          developer
        </motion.div>
      </div>
      <motion.div
        className=""
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 5.5, duration: 0.8, ease: "easeInOut" }}
      >
        Sardegna
      </motion.div>
    </section>
  );
};
