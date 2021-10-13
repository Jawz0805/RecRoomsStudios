import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const variants = {
  hidden: { opacity: 0, transition: { duration: 0.5 } },
  animate: { opacity: 1, transition: { duration: 0.5 } },
};

const PageWrapper = ({ children }) => {
  return (
    <AnimatePresence exitBeforeEnter>
      <motion.div
        initial="hidden"
        animate="animate"
        exit="hidden"
        variants={variants}
        className="page-wrapper"
        key={children}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default PageWrapper;
