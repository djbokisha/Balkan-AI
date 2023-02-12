import React from "react";
import "./Footer.css";
import linkedin from "../../assets/icons/linkedin.png";
import facebook from "../../assets/icons/facebook.png";
import twitter from "../../assets/icons/twitter.png";
import instagram from "../../assets/icons/instagram.png";

function Footer() {
  return (
    <div className="container-header">
      <h3>© 2023 by BALKAN AI</h3>
      <div className="icons">
        <a href="#" target="_blank">
          <img src={linkedin} alt="linkedin" />
        </a>
        <a href="https://www.facebook.com/" target="_blank">
          <img src={facebook} alt="facebook" />
        </a>
        <a href="#" target="_blank">
          <img src={twitter} alt="twitter" />
        </a>

        <a href="#" target="_blank">
          <img src={instagram} alt="instagram" />
        </a>
      </div>
    </div>
  );
}

export default Footer;
