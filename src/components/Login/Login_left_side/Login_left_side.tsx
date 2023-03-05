import { FormEvent, useState } from "react";
import "./Login_left_side.css";
import Google_Login_Oauth from "../../Google/Google_Login_Oauth";
import { useNavigate } from "react-router-dom";

function Login_left_side() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate()

  const loginHandler = (e: FormEvent): void => {
    e.preventDefault();
    console.log(email, password);
  };

  return (
    <div className="left-login-side">
      <div className="login">
        <div className="position">
          <div className="google">
            <Google_Login_Oauth />
          </div>
        </div>
        <div>
          <form onSubmit={(e: FormEvent) => loginHandler(e)}>
            <div className="email-login">
              <label htmlFor="">Email address</label>
              <input
                type="email"
                placeholder="Email address"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </div>
            <div className="password-login">
              <label htmlFor="">Password</label>
              <input
                type="password"
                placeholder="Password"
                autoComplete="on"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </div>
            <div className="remember-me">
              <button type="submit" className="btn-login-singup">
                Log in
              </button>
            </div>
          </form>
        </div>
        <div className="singup">
          <hr />

          <p>Don't have an account?</p>
          <button type="button" className="btn-login-singup" onClick={() => navigate('/signup')}>
            Sign up
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login_left_side;
