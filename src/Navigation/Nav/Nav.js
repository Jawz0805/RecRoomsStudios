import React from "react";
import { Link } from 'react-scroll'
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
          <li className="nav-item" >
            <Link activeClass="active" to="home" spy={true} smooth={true} onClick={() => handleClick()}>Home</Link>
          </li>
          <li className="nav-item" >
            <Link activeClass="active" to="studio" spy={true} smooth={true} onClick={() => handleClick()}>
              Our Studio
            </Link>
          </li>
          <li className="nav-item">
            <Link activeClass="active" to="services" spy={true} smooth={true} onClick={() => handleClick()}>
              Services
            </Link>
          </li>
          <li className="nav-item">
            <Link activeClass="active" to="contact" spy={true} smooth={true} onClick={() => handleClick()}>
              Contact
            </Link>
          </li>
          <li className="nav-item">
            <a href="tel:+447512267981" >Call</a>
          </li>
          <li className="nav-item">
            <a href="mailto: recroomslive@gmail.com" >Email</a>
          </li>
        </ul>
      </motion.nav>
    </AnimatePresence>
  );
};

export default Nav;
