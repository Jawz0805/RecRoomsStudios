import React from "react";

import { Link } from "react-router-dom";
import "./_NavBar.scss";
import { motion, AnimatePresence } from "framer-motion";
const variants = {
  visible: { x: 0, opacity: 1, transition: { duration: 0.5 } },
  hidden: { x: "100%", opacity: 0, transition: { duration: 0.5 } },
  exit: { x: "100vh", opacity: 0, transition: { duration: 0.5 } },
};
const NavBar = () => {
  return (
    <AnimatePresence exitBeforeEnter>
      <motion.nav className="navbar">
        <ul className="navbar-list">
          <li className="navbar-item">
            <Link to="/home">Home</Link>
          </li>
          <li className="navbar-item">
            <Link to="/studio">Our Studio</Link>
          </li>
          <li className="navbar-item">
            <Link to="/services">Services</Link>
          </li>

          <li className="navbar-item">
            <Link to="/contact">Contact</Link>
          </li>
          <li className="navbar-item">
            <a href="tel:+447512267981" >Call</a>
          </li>
          <li className="navbar-item">
            <a href="mailto: recroomslive@gmail.com" >Email</a>
          </li>
        </ul>
      </motion.nav>
    </AnimatePresence>
  );
};

export default NavBar;
