import React from "react";
import { SectionTitle } from "../common/SectionTitle";
import { motion } from "framer-motion";
import { PrimaryBox } from "../common/PrimaryBox";
import { skills } from "@/const";

export default function HomeAbout() {
  return (
    <div id="about" className="my-20 md:my-44">
      <div>
        <motion.p
          className=" text-center text-lg md:text-4xl leading-relaxed md:leading-snug mt-6 font-regular"
          initial={{ y: 100 }}
          whileInView={{ y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          Frontend Developer with over 2 years of experience. I have designed
          and developed applications managing large volumes of data, optimizing
          performance and user experience. Strong skills in CSS, JavaScript,
          React.js, and TypeScript. Interested in software architecture,
          application scalability, and interface design.
        </motion.p>
      </div>
    </div>
  );
}
