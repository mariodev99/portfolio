import { motion } from "framer-motion";

const shorttSlides = ["invest in real estate", "invest in real estate"];

const Slider = () => {
  return (
    <div className=" overflow-hidden py-4 font-bold uppercase text-sm md:text-xl">
      <div className={`relative w-full py-2 rotate-3 `}>
        {/* Wrapping div for seamless looping */}
        <motion.div
          className="flex"
          animate={{
            x: ["-100%", "0%"],
            transition: {
              ease: "linear",
              duration: 5,
              repeat: Infinity,
            },
          }}
        >
          {/* Render duplicated slides */}
          {[...shorttSlides, ...shorttSlides].map((slide, index) => (
            <div
              key={index}
              className="flex-shrink-0 bg-[#69fa26] py-5 "
              style={{ width: `${100 / shorttSlides.length}%` }}
            >
              <div className="flex items-center justify-center h-full ">
                {slide}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Slider;
