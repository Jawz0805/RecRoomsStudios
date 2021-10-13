import React from "react";
import { Link } from "react-router-dom";
import "./_Nav.scss";
import { motion, AnimatePresence } from "framer-motion";

const variants = {
  visible: { x: 0, opacity: 1, transition: { duration: 0.5 } },
  hidden: { x: "100%", opacity: 0, transition: { duration: 0.5 } },
  exit: { x: "100vh", opacity: 0, transition: { duration: 0.5 } },
};

const Nav = ({ handleClick, open }) => {
  return (
    <AnimatePresence exitBeforeEnter>
      <motion.nav
        initial="hidden"
        animate={open ? "visible" : "hidden"}
        variants={variants}
        className={open ? "nav modal-open" : "nav"}
      >
        <ul className="nav-list">
          <li className="nav-item" onClick={() => handleClick()}>
            <Link to="/home">Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/studio" onClick={() => handleClick()}>
              Our Studio
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/services" onClick={() => handleClick()}>
              Services
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" onClick={() => handleClick()}>
              Contact
            </Link>
          </li>
        </ul>
      </motion.nav>
    </AnimatePresence>
  );
};

export default Nav;
