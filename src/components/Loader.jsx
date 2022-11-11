import React from "react";
import { motion } from "framer-motion";
import { GoPrimitiveDot } from "react-icons/go";

const ContainerVariants = {
  initial: {
    transition: {
      staggerChildren: 0.2,
    },
  },
  animate: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const DotVariants = {
  initial: {
    y: "0%",
  },
  animate: {
    y: "50%",
  },
};

const DotTransition = {
  duration: 0.5,
  yoyo: Infinity,
  type: "easeInOut",
};

const Loader = () => {
  return (
    <div className="w-full py-4 flex justify-center">
      <motion.div
        className="flex text-light gap-1"
        variants={ContainerVariants}
        initial="initial"
        animate="animate"
      >
        {/* children */}
        <motion.div variants={DotVariants} transition={DotTransition}>
          <GoPrimitiveDot className="text-4xl" />
        </motion.div>
        <motion.div variants={DotVariants} transition={DotTransition}>
          <GoPrimitiveDot className="text-4xl" />
        </motion.div>
        <motion.div variants={DotVariants} transition={DotTransition}>
          <GoPrimitiveDot className="text-4xl" />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Loader;
