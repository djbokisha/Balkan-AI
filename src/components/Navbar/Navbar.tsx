import { useState } from "react";
import logo from "../../assets/AiLogo.png";
import "./Navbar.css";
import hamburger from "../../assets/hamburger.svg"
import hamburger_close from "../../assets/hamburger-close.svg"

function Navbar() {
  const [click, setClick] = useState(false);
  const hadleClick = () => setClick(!click);
  return (
    <div className="navbar">
      <div className="container">
        <div className="logo">
          <img src={logo} alt="" />
          <h1>BALKAN AI</h1>
        </div>

        <div className={click ? "nav active" : "nav"}>
          <button className="btn-login btn-hover">Log in</button>
        </div>
        <div onClick={hadleClick} className="hamburger">
          {click ? (
            <img src={hamburger_close} alt="h" className="icon" />
          ) : (
            <img src={hamburger} alt="ha" className="icon" />
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
