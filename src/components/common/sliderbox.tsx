import { motion } from "framer-motion";
import Image from "next/image";
import profileImage1 from "../../../public/images/profile_portfolio.jpg";

export default function SliderBox() {
  const HEIGHT_BOX = "h-8 w-10 md:h-14 md:w-24 lg:h-20 lg:w-32";

  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 5.2, duration: 0.8, ease: "easeInOut" }}
      className={`${HEIGHT_BOX} hidden md:block bg-black relative overflow-hidden bg-[url('/images/profile_portfolio.jpg')] bg-cover bg-center rounded-2xl md:rounded-full mt-4`}
    >
      <motion.div
        animate={{ y: [80, 0, -80, -160, -240, -320] }} // Se mueve en pasos de 80px
        transition={{
          duration: 4,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "loop",
        }}
      >
        <div
          className={`${HEIGHT_BOX} h-20 w-32 bg-[url('/images/8bit_project.jpg')] bg-cover bg-center `}
        ></div>
        <div
          className={`${HEIGHT_BOX} h-20 w-32 bg-[url('/images/projects/martinmariotti.jpg')] bg-cover bg-center `}
        ></div>
        <div
          className={`${HEIGHT_BOX} h-20 w-32 bg-[url('/images/projects/zag.jpg')] bg-cover bg-center `}
        ></div>
        <div
          className={`${HEIGHT_BOX} h-20 w-32 bg-[url('/images/projects/hansen.jpg')] bg-cover bg-center `}
        ></div>
      </motion.div>
    </motion.div>
  );
}
