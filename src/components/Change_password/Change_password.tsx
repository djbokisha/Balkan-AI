import { FormEvent, useState } from "react";
import "./Change_password.css";

import Axios from "axios";
import { z, ZodType } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";

type FormData = {
  oldPassword: string;
  newPassword: string;
  repeatNewPassword: string;
};

function Change_password() {
  const navigate = useNavigate();

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
    Axios.post("http://localhost:5000/auth/signup", {
      ...data,
    })
      .then((res) => {
        console.log(res);
        if (res.status >= 200 && res.status <= 300) {
          navigate("/login");
        }
      })
      .catch((err) => {
        console.log(err);
      });
      console.log(data)
  };

  return (
    <div className="changepassword-side">
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
                  <span className="error-span">
                    {errors.oldPassword.message}
                  </span>
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
  );
}

export default Change_password;
