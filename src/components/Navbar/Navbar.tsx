import { useState } from "react";
import logo from "../../assets/AiLogo.png";
import "./Navbar.css";
import hamburger from "../../assets/hamburger.svg"
import hamburger_close from "../../assets/hamburger-close.svg"
import { useNavigate } from "react-router-dom";

function Navbar() {
  const [click, setClick] = useState(false);
  const navigate = useNavigate();
  const hadleClick = () => setClick(!click);
  // const [isLoggedIn, setIsLoggedIn] = useState(false);


   function profile (){
    navigate('/profile')
    hadleClick() 
    // setIsLoggedIn(!isLoggedIn);

   }

   function login (){
    navigate('/login')
    hadleClick() 
    // setIsLoggedIn(!isLoggedIn);

   }
  return (
    <div className="navbar">
      <div className="container">
        <div className="logo">
          <img src={logo} alt="logo" onClick={() => navigate('/')} />
          <h1>BALKAN AI</h1>
        </div>
       <div className={click ? "nav active" : "nav"}>
        
      <button className="btn-login btn-hover"  type="button" onClick={() => profile() }>Profile</button>

    <button className="btn-login btn-hover" type="button" onClick={() =>login() }>Log in</button>
        </div>
        <div onClick={() => hadleClick()} className="hamburger">
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
