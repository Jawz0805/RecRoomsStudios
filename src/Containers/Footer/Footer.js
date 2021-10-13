import React from "react";
import "./_Footer.scss";
import Socials from "../../Components/Socials/Socials";
import socialsLinks from "../../Components/Socials/SocialsLinks";
import { Link } from "react-router-dom";
import Logo from "../../Assets/RecRoomsLogoWhiteSmall.svg";




const Footer = () => {
  return (
    <div className="footer-container bg-black white">
      <Link to="/home" width="100%" className="footer-image">
        <img src={Logo} alt="RecRooms" className="footer-image" />
      </Link>
      <div className="footer-socials">
        <Socials socials={socialsLinks} color="white" />
      </div>

    </div>
  );
};

export default Footer;
