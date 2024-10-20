import React from "react";
import { contactItems } from "../HomeContact";
import { motion } from "framer-motion";
import PrimaryButton from "@/components/common/buttons/PrimaryButton";

export default function ContactButtons() {
  return (
    <div className=" flex flex-col items-center mt-10 text-sm md:text-4xl gap-3 md:gap-5">
      {contactItems.map((item) => (
        <motion.a
          href={item.url}
          target="_blank"
          key={item.url}
          className="group"
          initial={{ y: 30 }}
          whileInView={{ y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <PrimaryButton
            text={item.text}
            primary_color="#fff"
            secundary_color="#121212"
          />
        </motion.a>
      ))}
    </div>
  );
}
