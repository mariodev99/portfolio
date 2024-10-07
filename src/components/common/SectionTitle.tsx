import { motion } from "framer-motion";

interface Props {
  text: string;
}

export const SectionTitle = ({ text }: Props) => {
  return (
    <motion.h3
      className="text-2xl md:text-6xl font-medium"
      initial={{ y: 100 }}
      whileInView={{ y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      {text}
    </motion.h3>
  );
};
