import React, { FormEvent, useRef } from "react";
import "./Signup.css";
import Axios from "axios";

function Singup() {
  const usernameSingupRef = useRef<HTMLInputElement>(null);
  const surnamSingupRef = useRef<HTMLInputElement>(null);
  const emailSingupRef = useRef<HTMLInputElement>(null);
  const passwordSingupRef = useRef<HTMLInputElement>(null);
  const repeatPasswordSingupRef = useRef<HTMLInputElement>(null);

  const formSingupRef = useRef<HTMLFormElement>(null);

  const singupHandler = (e: FormEvent) => {
    e.preventDefault();

    const username = usernameSingupRef.current?.value;
    const email = emailSingupRef.current?.value;
    const password = passwordSingupRef.current?.value;
    const repeatPassword = repeatPasswordSingupRef.current?.value;

    console.log(username, email, password, repeatPassword);

    Axios.post("http://localhost:5000/auth/signup", {
      username,
      email,
      password,
      isEmailVerified: false,
      repeatPassword,
    })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });

    formSingupRef.current?.reset();
  };

  return (
    <div className="container-signup">
      <div className="signup">
        <p>Singup</p>
        <div>
          <form
            onSubmit={(e: FormEvent) => singupHandler(e)}
            ref={formSingupRef}
          >
            <div className="name-singup">
              <label htmlFor="">Username</label>
              <input
                type="text"
                placeholder="Username"
                ref={usernameSingupRef}
              />
            </div>

            <div className="email-singup">
              <label htmlFor="">Email address</label>
              <input
                type="email"
                placeholder="Email address"
                ref={emailSingupRef}
              />
            </div>
            <div className="password-singup">
              <label htmlFor="">Password</label>
              <input
                type="password"
                placeholder="Password"
                autoComplete="on"
                ref={passwordSingupRef}
              />
            </div>
            <div className="password-singup">
              <label htmlFor="">Repeat password</label>
              <input
                type="password"
                placeholder="Repeat password"
                autoComplete="on"
                ref={repeatPasswordSingupRef}
              />
            </div>
            <div className="remember-me">
              <button type="submit" className="btn-login-singup">
                Sing up
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Singup;
