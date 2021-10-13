import React from "react";
import "./_Spinner.scss";
import { motion, AnimatePresence } from "framer-motion";

const pageVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { staggerChildren: 0.3 } },
  exit: { opacity: 0 },
};
const containerVariants = {
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
const dotVariants = {
  initial: { y: 0 },
  animate: {
    y: 20,
  },
};
const dotTransition = { duration: 1, yoyo: Infinity, ease: "easeInOut" };

const Spinner = () => {
  return (
    <AnimatePresence>
      <motion.div
        className="spinner-page-container"
        variants={pageVariants}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        <motion.div
          className="spinner-container"
          variants={containerVariants}
          initial="initial"
          animate="animate"
          exit="exit"
        >
          <motion.span
            className="spinner-dots"
            variants={dotVariants}
            transition={dotTransition}
          ></motion.span>
          <motion.span
            className="spinner-dots"
            variants={dotVariants}
            transition={dotTransition}
          ></motion.span>
          <motion.span
            className="spinner-dots"
            variants={dotVariants}
            transition={dotTransition}
          ></motion.span>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Spinner;
