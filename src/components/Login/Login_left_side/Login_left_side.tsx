import { zodResolver } from "@hookform/resolvers/zod";
import Axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { ZodType, z } from "zod";
import { useAuth } from "../../../hooks/useAuth";
import Google_Login_Oauth from "../../Google/Google_Login_Oauth";
import "./Login_left_side.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useLocalStorage } from "../../../hooks/useLocalStorage";
import client from "../../../services/createAxiosClient";
// import { axiosPrivate } from "../../../services/axiosPrivate";

type FormData = {
  email: string;
  password: string;
};

interface ChildAProps {
  userId: string;
  onUserIdFetched: (userId: string) => void;
}

export const axiosPrivate = Axios.create({
  baseURL: "http://localhost:5000",
});

function Login_left_side() {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [userId, setUserId] = useState("");
  const { getItem } = useLocalStorage();
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
      const loginResponse = await axiosPrivate.post(`/auth/login`, data);

      console.log("loginResponse", loginResponse);

      login({
        accessToken: loginResponse.data.accessToken,
        accessTokenExpire: loginResponse.data.accessTokenExpire,
        refreshToken: loginResponse.data.refreshToken,
        tokenId: loginResponse.data.tokenId,
        email: loginResponse.data.user.email,
        userId: loginResponse.data.user.id,
      });

      setUserId(loginResponse.data.user.id);
      console.log("userId", userId);

      if (loginResponse.status >= 200 && loginResponse.status <= 300) {
        navigate("/profile");
      }
    } catch (error: any) {
      console.log(error);
      if (error) {
        toast("username or password incorrect ", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      }
    }
  };

  function GoogleFunction() {
    return <Google_Login_Oauth />;
    console.log("aaaa");
  }

  return (
    <div className="left-login-side">
      <div className="login">
        <div className="position">
          <div className="google">
            {GoogleFunction()}
            {/* <button type="button" onClick={() => GoogleFunction}>
              <img src={googleIcon} alt="googleIcon" />
            </button> */}
          </div>
        </div>
        <div className="signin">
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
      <ToastContainer />
    </div>
  );
}

export default Login_left_side;
