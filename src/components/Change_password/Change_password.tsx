import { FormEvent, useState, useEffect } from "react";
import "./Change_password.css";

import Axios from "axios";
import { z, ZodType } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import Footer from "../Footer/Footer";

type FormData = {
  oldPassword: string;
  newPassword: string;
  repeatNewPassword: string;
};

function Change_password() {
  const navigate = useNavigate();
  const { getItem } = useLocalStorage();

  const [user, setUser] = useState([]);
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user")!);
    if (user !== null) {
      setUser(user);
    }
  }, []);

  const schema: ZodType<FormData> = z
    .object({
      oldPassword: z.string().min(5).max(20),
      newPassword: z.string().min(5).max(20),
      repeatNewPassword: z.string().min(5).max(20),
    })
    .refine((data) => data.newPassword === data.repeatNewPassword, {
      message: "Passwords do not match",
      path: ["repeatNewPassword"],
    });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const submitData = (data: FormData) => {
    // @ts-ignore
    const id = user.userId;
    console.log("UserID", id);
    // @ts-ignore
    const email = user.email;
    console.log("Email", email);
    const payload = {
      oldPassword: data.oldPassword.toString(),
      password: data.newPassword.toString(),
      email: email.toString(),
    };
    Axios.patch(`${import.meta.env.VITE_URL}/users/updatePassword`, payload)
      .then((res) => {
        console.log(res);
        if (res.status >= 200 && res.status <= 300) {
          navigate("/login");
        }
      })
      .catch((err) => {
        console.log(err);
      });
    console.log(data);
  };

  return (
    <>    <div className="changepassword-side">
      <div className="changepassword">
        <div>
          <form onSubmit={handleSubmit(submitData)}>
            <div className="password-change">
              <label htmlFor="">Old Password</label>
              <input
                type="password"
                placeholder="Old Password"
                {...register("oldPassword")}
              />
              {errors.oldPassword && (
                <span className="error-span">{errors.oldPassword.message}</span>
              )}
            </div>
            <div className="password-change">
              <label htmlFor="">New Password</label>
              <input
                type="password"
                placeholder="New Password"
                autoComplete="on"
                {...register("newPassword")}
              />
            </div>
            <div className="password-change">
              <label htmlFor="">Repeat New Password</label>
              <input
                type="password"
                placeholder="Repeat New Password"
                autoComplete="on"
                {...register("repeatNewPassword")}
              />
              {errors.repeatNewPassword && (
                <span className="error-span">
                  {errors.repeatNewPassword.message}
                </span>
              )}
            </div>
            <div className="change-me">
              <button type="submit" className="btn-login-change">
                Change
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
    <Footer/>
    </>

  );
}

export default Change_password;
