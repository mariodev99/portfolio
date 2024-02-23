import React from "react";
import { SectionTitle } from "../common/SectionTitle";
import { motion } from "framer-motion";

export default function HomeAbout() {
  return (
    <div id="about" className="my-10 md:my-20">
      <SectionTitle text="Sobre mi" />
      <motion.p
        className="text-base md:text-2xl mt-5 font-regular"
        initial={{ y: 100 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        Hola! Me llamo Luciano Mariotti, soy un desarrollador frontend en busca
        de nuevas formas de abordar los desafíos del desarrollo y disrumpir en
        lo tradicional. Tengo habilidades sólidas en HTML, CSS, JavaScript y
        React.js. Por otro lado tengo conocimiento en Node.js, SQL y manejo de
        base de datos relacionales y no relacionales. He trabajado en estrecha
        colaboración con diseñadores para garantizar la coherencia entre el
        diseño y la implementación de interfaces de usuario atractivas y fáciles
        de usar. Me gustan los problemas complejos. Mi enfoque es encontrar
        soluciones innovadoras que no solo resuelvan los problemas técnicos,
        sino que también agreguen valor al producto. Sobre mi desarrollo
        profesional a futuro quiero aprender más sobre la arquitectura de
        software, mantenimiento y escalabilidad de las aplicaciones. Tambien,
        estar involucrado en iniciativas donde pueda contribuir no solo con mi
        experiencia técnica, sino también con mi comprensión del panorama
        general del negocio y estar en proyectos que me desafíen a pensar de
        manera creativa y estratégica.
      </motion.p>
    </div>
  );
}
