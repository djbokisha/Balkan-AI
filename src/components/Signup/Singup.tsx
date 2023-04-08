import { FormEvent, useRef } from "react";
import "./Signup.css";
import Axios from "axios";
import { z, ZodType } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAuth } from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";

type FormData = {
  username: string;
  email: string;
  password: string;
  repeatPassword: string;
};

function Signup() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const schema: ZodType<FormData> = z
    .object({
      username: z.string().min(2).max(30),
      email: z.string().email(),
      password: z.string().min(5).max(20),
      repeatPassword: z.string().min(5).max(20),
    })
    .refine((data) => data.password === data.repeatPassword, {
      message: "Passwords do not match",
      path: ["repeatPassword"],
    });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const submitData = (data: FormData) => {
    Axios.post(`${import.meta.env.VITE_URL}/auth/signup`, {
      ...data,
      isEmailConfirmed: false,
    })
      .then((res) => {
        login({
          accessToken: res.data.accessToken,
          accessTokenExpire: res.data.accessTokenExpire,
          refreshToken: res.data.refreshToken,
          tokenId: res.data.tokenId,
          email: res.data.user.email,
          userId: res.data.user.id,
        });
        if (res.status >= 200 && res.status <= 300) {
          navigate("/profile");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="container-signup">
      <div className="left-login-side">
        <div className="signup">
          <p>Sign up</p>
          <div>
            <form onSubmit={handleSubmit(submitData)}>
              <div className="name-singup">
                <label htmlFor="">Username</label>
                <input
                  type="text"
                  id="username"
                  placeholder="Username"
                  {...register("username")}
                />
                {errors.username && (
                  <span className="error-span"> {errors.username.message}</span>
                )}
              </div>

              <div className="email-singup">
                <label htmlFor="">Email address</label>
                <input
                  type="email"
                  id="email"
                  placeholder="Email address"
                  {...register("email")}
                />
                {errors.email && (
                  <span className="error-span"> {errors.email.message}</span>
                )}
              </div>
              <div className="password-singup">
                <label htmlFor="">Password</label>
                <input
                  type="password"
                  id="password"
                  placeholder="Password"
                  autoComplete="on"
                  {...register("password")}
                />
                {errors.password && (
                  <span className="error-span"> {errors.password.message}</span>
                )}
              </div>
              <div className="password-singup">
                <label htmlFor="">Confirm Password</label>
                <input
                  type="password"
                  id="repeatPassword"
                  placeholder="Confirm Password"
                  autoComplete="on"
                  {...register("repeatPassword")}
                />
                {errors.repeatPassword && (
                  <span className="error-span">
                    {errors.repeatPassword.message}
                  </span>
                )}
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
