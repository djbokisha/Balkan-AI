import { FormEvent, useState } from "react";
import "./Login_left_side.css";
import Google_Login_Oauth from "../../Google/Google_Login_Oauth";
import { useNavigate } from "react-router-dom";
import Axios from "axios";
import { z, ZodType } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

function Login_left_side() {
  const navigate = useNavigate();

  type FormData = {
    email: string;
    password: string;
  };

  const schema: ZodType<FormData> = z.object({
    email: z.string().email(),
    password: z.string().min(5).max(20),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const submitData = async (data: FormData) => {
    try {
      await Axios.post("http://localhost:5000/auth/login", data, {
        withCredentials: true,
      });
    } catch (error: any) {
      console.log(error);
    }
    navigate("/profile");
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
          <form onSubmit={handleSubmit(submitData)}>
            <div className="email-login">
              <label htmlFor="">Email address</label>
              <input
                type="email"
                placeholder="Email address"
                {...register("email")}
              />
              {errors.email && (
                <span className="error-span"> {errors.email.message}</span>
              )}
            </div>
            <div className="password-login">
              <label htmlFor="">Password</label>
              <input
                type="password"
                placeholder="Password"
                autoComplete="on"
                {...register("password")}
              />
              {errors.password && (
                <span className="error-span"> {errors.password.message}</span>
              )}
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
          <button
            type="button"
            className="btn-login-singup"
            onClick={() => navigate("/signup")}
          >
            Sign up
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login_left_side;
