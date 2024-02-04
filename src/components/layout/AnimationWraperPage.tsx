import { ReactNode } from 'react'
import { motion } from 'framer-motion'

export default function AnimationWraperPage({children}:{children: ReactNode}) {
  return (
    <motion.main
    style={{
      position: "absolute",
      height: "100vh",
      width: "100%",
      overflow: "scroll",
    }}
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{opacity: 0 }}
    transition={{
      duration: 0.5,
      ease: "easeInOut",
    }}
  >
    {children}
  </motion.main>
  )
}
