import { FormEvent, useRef } from "react";
import "./Signup.css";
import Axios from "axios";
import { z, ZodType } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

type FormData = {
  username: string;
  email: string;
  password: string;
  repeatPassword: string;
};

function Signup() {
  const usernameSingupRef = useRef<HTMLInputElement>(null);
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

  const schema: ZodType<FormData> = z
    .object({
      username: z.string().min(2).max(30),
      email: z.string().email(),
      password: z.string().min(5).max(20),
      repeatPassword: z.string().min(5).max(20),
    })
    .refine((data) => data.password === data.repeatPassword, {
      message: "Passwor do not match",
      path: ["repeatPassword"],
    });

  const { register, handleSubmit } = useForm({ resolver: zodResolver(schema) });

  return (
    <div className="container-signup">
      <div className="left-login-side">
        <div className="signup">
          <p>Sign up</p>
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
                  {...register("username")}
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
                  Sign up
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div className="right-login-side"></div>
    </div>
  );
}

export default Signup;
