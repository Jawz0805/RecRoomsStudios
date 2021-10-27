import React, { useState } from "react";
import "./_Header.scss";
import Logo from "../../Assets/RecRoomsLogoWhiteSmall.svg";
import Nav from "../../Navigation/Nav/Nav";
import { Link } from "react-router-dom";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import NavBar from "../../Navigation/NavBar.js/NavBar";
import { useScrollPosition } from "./useScrollPosition";

const Header = () => {
  const [open, setOpen] = useState(false);


  const [sticky, setSticky] = useState(false);

  useScrollPosition(
    ({ prevPos, currPos }) => {
      const isShow = currPos.y > prevPos.y;
      if (isShow !== sticky) setSticky(isShow);
    },
    [sticky]
  );

  const handleClick = () => {
    setOpen(!open);

    if (open === false) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  };

  console.log(open)
  return (
    <header
      className={
        sticky ? "header-container visible" : "header-container hidden"
      }

    >
      <Link to="/home" className="logo-container">
        <img src={Logo} alt="RecRooms" className="logo" />
      </Link>
      {open ? (
        <FontAwesomeIcon
          icon={faTimes}
          style={{ color: "white" }}
          onClick={() => {
            handleClick();
          }}
          className="bars"
        />
      ) : (
        <FontAwesomeIcon
          icon={faBars}
          style={{ color: "white" }}
          onClick={() => {
            handleClick();
          }}
          className="bars"
        />
      )}
      {open ? <Nav handleClick={handleClick} open={open} /> : <></>}
      <NavBar />
    </header>
  );
};

export default Header;
