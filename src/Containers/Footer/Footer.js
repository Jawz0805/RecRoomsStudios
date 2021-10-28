import React from "react";
import "./_Footer.scss";
import Socials from "../../Components/Socials/Socials";
import socialsLinks from "../../Components/Socials/SocialsLinks";
import Logo from "../../Assets/RecRoomsLogoWhiteSmall.svg";




const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-image-container">
        <img src={Logo} alt="RecRooms" className="footer-image" />
      </div>
      <a className="footer-contact" href="tel:+447512267981" >Call: +447512267981</a>
      <a className="footer-contact" href="mailto: recroomslive@gmail.com" >Email: recroomslive@gmail.com</a>
      <div className="footer-socials">
        <Socials socials={socialsLinks} color="white" />
      </div>

    </div>
  );
};

export default Footer;
