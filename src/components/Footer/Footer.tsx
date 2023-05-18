import React from "react";
import "./Footer.css";
import linkedin from "../../assets/icons/linkedin.png";
import facebook from "../../assets/icons/facebook.png";
import twitter from "../../assets/icons/twitter.png";
import instagram2 from "../../assets/icons/instagram2.svg";
import tiktok2 from "../../assets/icons/tik-tok2.svg";

function Footer() {
  const current = new Date();
  const date = `${current.getFullYear()}`;

  return (
    <div className="container-footer">
      <h3>© {date} by BALKAN AI</h3>
      <div className="icons">
        <a href="https://www.instagram.com/balkan_ai" target="_blank">
          <img src={instagram2} alt="instagram" width={24} height={24} />
        </a>
        <a href="https://www.tiktok.com/@balkan_ai" target="_blank">
          <img width={24} height={24} src={tiktok2} alt="instagram" />
        </a>
      </div>
    </div>
  );
}

export default Footer;
