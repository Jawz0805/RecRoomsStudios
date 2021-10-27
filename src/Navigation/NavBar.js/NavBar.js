import React from "react";

import { Link } from "react-scroll";
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
      <motion.nav className="navbar" animate={variants}>
        <ul className="navbar-list">
          <li className="navbar-item">
            <Link to="home" spy={true} smooth={true}>Home</Link>
          </li>
          <li className="navbar-item">
            <Link to="studio" spy={true} smooth={true}>Our Studio</Link>
          </li>
          <li className="navbar-item">
            <Link to="services" spy={true} smooth={true}>Services</Link>
          </li>
          <li className="navbar-item">
            <Link to="gallery" spy={true} smooth={true}>Gallery</Link>
          </li>
          <li className="navbar-item">
            <Link to="contact" spy={true} smooth={true}>Contact</Link>
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
