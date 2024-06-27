import { motion } from "framer-motion"

export const AnimBox = (prop: {ele: JSX.Element}) => {
    return <motion.div
        animate={{
            x: [0, 500, 0],
            y: [-50, -50, -50]
        }}
        transition={{
            duration: 5,
            ease: "easeInOut",
            repeat: Infinity,
            repeatDelay: 0,
        }}
    >
    {prop.ele}
  </motion.div>
}