import React, { useState } from "react";
import Socials from "./Socials";
import { motion, AnimateSharedLayout, AnimatePresence } from "framer-motion";

const variants = {
  visible: {
    opacity: 1,
    scale: 1,
    x: 0,
    height: "100%",
    transition: { transition: "easeInOut", duration: 0.5 },
  },
  hidden: {
    opacity: 0,

    height: 0,
  },
  exit: {
    opacity: 0,
  },
};

const SocialsToggle = ({ socials }) => {
  const [showSocials, setShowSocials] = useState(false);
  return (
    <AnimateSharedLayout type="crossfade">
      <motion.div
        className="socials-container topic-socials"
        style={showSocials ? { height: "150px" } : { height: "70px" }}
      >
        {showSocials ? (
          <AnimatePresence exitBeforeEnter>
            <motion.div
              animate="visible"
              initial="hidden"
              exit="exit"
              variants={variants}
              layout
              key={"socials list"}
              className="socials-toggle-container"
            >
              <h2 className="socials-heading ">Follow Artist:</h2>
              <Socials socials={socials} />
            </motion.div>
          </AnimatePresence>
        ) : (
          <AnimatePresence exitBeforeEnter>
            <motion.div
              animate="visible"
              initial="hidden"
              exit="exit"
              variants={variants}
              layout
              key={"socials button"}
              className="socials-toggle-container"
            >
              <h2
                className="submit-button socials-heading"
                onClick={() => setShowSocials(true)}
                layout
              >
                Follow Artist
              </h2>
            </motion.div>
          </AnimatePresence>
        )}
      </motion.div>
    </AnimateSharedLayout>
  );
};

export default SocialsToggle;
