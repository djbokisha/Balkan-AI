import React, { FormEvent, useRef } from "react";
import "./Signup.css";

function Singup() {
  const nameSingupRef = useRef<HTMLInputElement>(null);
  const surnamSingupRef = useRef<HTMLInputElement>(null);
  const emailSingupRef = useRef<HTMLInputElement>(null);
  const passwordSingupRef = useRef<HTMLInputElement>(null);
  const passwordRepeatdSingupRef = useRef<HTMLInputElement>(null);

  const formSingupRef = useRef<HTMLFormElement>(null);

  const singupHandler = (e: FormEvent) => {
    e.preventDefault();

    const name = nameSingupRef.current?.value;
    const surname = surnamSingupRef.current?.value;
    const email = emailSingupRef.current?.value;
    const password = passwordSingupRef.current?.value;
    const passwordRepeat = passwordRepeatdSingupRef.current?.value;

    console.log(name, surname, email, password, passwordRepeat);

    formSingupRef.current?.reset();
  };
  return (
    <div className="container-signup">
    <div className="signup">
      <p>Singup</p>
      <div>
        <form onSubmit={(e: FormEvent) => singupHandler(e)} ref={formSingupRef}>
          <div className="name-singup">
            <label htmlFor="">Name</label>
            <input type="text" placeholder="Name" ref={nameSingupRef} />
          </div>
          <div className="surname-singup">
            <label htmlFor="">Surname</label>
            <input type="text" placeholder="Surname" ref={surnamSingupRef} />
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
            <label htmlFor="">Password repeat</label>
            <input
              type="password"
              placeholder="password repeat"
              autoComplete="on"
              ref={passwordRepeatdSingupRef}
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
