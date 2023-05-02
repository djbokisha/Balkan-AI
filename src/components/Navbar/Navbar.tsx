import { useEffect, useState } from "react";
import logo from "../../assets/AiLogo.png";
import "./Navbar.css";
import hamburger from "../../assets/hamburger.svg";
import hamburger_close from "../../assets/hamburger-close.svg";
import { useNavigate } from "react-router-dom";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import { useAuth } from "../../hooks/useAuth";
import { axiosPrivate } from "../../services/axiosPrivate";

function Navbar() {
  const [click, setClick] = useState(false);
  const navigate = useNavigate();
  const hadleClick = () => setClick(!click);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const { getItem } = useLocalStorage();
  const { logout } = useAuth();

  function getUserId() {}

  useEffect(() => {
    const userString = getItem("user");
    const user = userString ? JSON.parse(userString) : null;
    const tokenId = user ? user.tokenId : null;
    console.log(tokenId);
    setIsLoggedIn(user ? true : false);
    setTokenId(tokenId);
  }, [getItem]);

  const [tokenId, setTokenId] = useState(null);

  const Logout = async () => {
    try {
      const response = await axiosPrivate.get("/auth/signout", {
        headers: {
          tokenId: tokenId,
        },
      });
      console.log(response);
      logout();
      navigate("/login");
      hadleClick();
    } catch (error) {
      console.log(error);
    }
  };

  function isAuthenticated() {
    return (
      <>
        <button
          className="btn-login btn-hover"
          type="button"
          onClick={() => profile()}
        >
          Profile
        </button>
        <button
          className="btn-login btn-hover"
          type="button"
          onClick={() => Logout()}
        >
          Log out
        </button>
      </>
    );
  }

  function profile() {
    navigate("/profile");
    hadleClick();
  }

  function login() {
    navigate("/login");
    hadleClick();
  }

  return (
    <div className="navbar">
      <div className="container">
        <div className="logo">
          <img src={logo} alt="logo" onClick={() => navigate("/")} />
          <h1>BALKAN AI</h1>
        </div>
        <div className={click ? "nav active" : "nav"}>
          {isLoggedIn ? (
            <>{isAuthenticated()}</>
          ) : (
            <>
              <button
                className="btn-login btn-hover"
                type="button"
                onClick={() => login()}
              >
                Log in
              </button>
            </>
          )}
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
