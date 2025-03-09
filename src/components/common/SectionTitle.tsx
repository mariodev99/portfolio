import { motion } from "framer-motion";

interface Props {
  text: string;
}

export const SectionTitle = ({ text }: { text: string }) => {
  return (
    <motion.h3
      className="text-5xl md:text-7xl font-bold"
      initial={{ y: 100 }}
      whileInView={{ y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      {text}
    </motion.h3>
  );
};
