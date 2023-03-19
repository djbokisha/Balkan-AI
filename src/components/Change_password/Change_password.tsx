import { FormEvent, useState } from "react";
import "./Change_password.css";

function Change_password() {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [repeatNewPassword, setRepeatNewPassword] = useState("");

  const changePasswordHandler = (e: FormEvent): void => {
    e.preventDefault();
    console.log(oldPassword, newPassword, repeatNewPassword);
  };

  return (
    <div className="changepassword-side">
      <div className="changepassword">
        <div>
          <form onSubmit={(e: FormEvent) => changePasswordHandler(e)}>
            <div className="password-change">
              <label htmlFor="">Old Password</label>
              <input
                type="password"
                placeholder="Old Password"
                onChange={(e) => {
                  setOldPassword(e.target.value);
                }}
              />
            </div>
            <div className="password-change">
              <label htmlFor="">New Password</label>
              <input
                type="password"
                placeholder="New Password"
                autoComplete="on"
                onChange={(e) => {
                  setRepeatNewPassword(e.target.value);
                }}
              />
            </div>
            <div className="password-change">
              <label htmlFor="">Repeat New Password</label>
              <input
                type="password"
                placeholder="Repeat New Password"
                autoComplete="on"
                onChange={(e) => {
                  setNewPassword(e.target.value);
                }}
              />
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
