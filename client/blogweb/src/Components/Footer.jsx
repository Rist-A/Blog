import React from "react";
import Logo from "../assets/B.png";

const Footer = () => {
  return (
    <footer>
      <img src={Logo} alt="" />
      <span>
        Made by  <b>Rist</b>.
      </span>
    </footer>
  );
};

export default Footer;