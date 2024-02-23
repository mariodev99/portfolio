import { SectionTitle } from "@/components/common/SectionTitle";
import { Layout } from "@/components/layout";
import AnimationWraperPage from "@/components/layout/AnimationWraperPage";
import HomeContact, { contactItems } from "@/components/sections/HomeContact";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import selim_image from "@/../public/images/selim.png";
import PrimaryButton from "@/components/common/buttons/PrimaryButton";
import ContactButtons from "@/components/sections/contact/ContactButtons";

export default function ContactoPage() {
  return (
    <AnimationWraperPage>
      <Layout>
        <section
          id="section_contact"
          className="my-20 flex flex-col items-center"
        >
          <SectionTitle text="Contacto" />

          <motion.p
            initial={{ y: 70 }}
            animate={{ y: 0 }}
            transition={{ duration: 1 }}
            className="text-center mt-5 text-md md:text-xl font-medium"
          >
            Mi bandeja de entrada siempre esta abierta para cualquier consulta
            que quieras hacerme.
          </motion.p>
          {/* Imagen de Selim */}
          <motion.div
            style={{
              position: "absolute",
              x: 500,
              y: 350,
              scale: 1,
            }}
            // TODO: responsive
            animate={{
              y: [350, 250, 350],
              rotate: [0, 10, -10, 0],
            }}
            transition={{
              y: {
                duration: 2,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
              },
              rotate: {
                duration: 4,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
              },
            }}
          >
            <Image src={selim_image} alt="Perro de Luciano Mariotti" />
          </motion.div>
          <ContactButtons />
        </section>
      </Layout>
    </AnimationWraperPage>
  );
}
