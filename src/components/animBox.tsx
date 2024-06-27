import { motion } from "framer-motion"

export const AnimBox = (prop: {ele: JSX.Element}) => {
    return <motion.div
        animate={{
            scale: [1, 1, 1, 1, 1],
        }}
        transition={{
            duration: 2,
            ease: "easeInOut",
            times: [0, 0.2, 0.5, 0.8, 1],
            repeat: Infinity,
            repeatDelay: 1,
        }}
    >
    {prop.ele}
  </motion.div>
}