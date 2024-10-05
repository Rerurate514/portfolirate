import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface AnimatedOnViewProps {
    children: ReactNode;
}

const AnimatedOnView: React.FC<AnimatedOnViewProps> = ({ children }) => {
    return <div>
        <motion.div
            initial={{ opacity: 0 }}
            transition={{ 
                duration: 1,
                delay: 1
            }}
            whileInView={{
                opacity: 1,
            }}
            viewport={{amount: 0.3}}
        >
            {children}
        </motion.div>
    </div>
};

export default AnimatedOnView;
