import { motion } from "framer-motion";

interface Props {
  text: string;
}

export const SectionTitle = ({ text }: Props) => {
  return (
    <motion.h3
      className="text-3xl md:text-7xl font-medium"
      initial={{ y: 100 }}
      whileInView={{ y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      {text}
    </motion.h3>
  );
};
