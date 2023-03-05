import React from "react";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { GoogleLogin, googleLogout } from "@react-oauth/google";
import Axios from "axios";
import jwt_decode from "jwt-decode";

function Google_Login_Oauth() {
  const logOut = () => {
    googleLogout();
    console.log("gasi");
  };

  const clientId = import.meta.env.VITE_CLIENT_ID_GOOGLE;

  return (
    <div>
      <GoogleOAuthProvider clientId={clientId}>
        <GoogleLogin
          onSuccess={(credentialResponse) => {
            const details = jwt_decode(credentialResponse.credential!);
            // @ts-ignore
            const { email, email_verified } = details
            console.log(email, email_verified)
            if (email_verified) {
              Axios.post("http://localhost:5000/auth/loginGoogle", {
                email,
              })
                .then((res) => {
                  console.log("logged in", res);
                })
                .catch((err: any) => {
                  console.log(err)
                  throw new Error(err.message);
                });
            }
          }}
          onError={() => {
            console.log("Login Failed");
          }}
          type="icon"
          shape="circle"
        />
      </GoogleOAuthProvider>
      {/* <button onClick={() => googleLogout()}>Log out</button> */}
    </div>
  );
}

export default Google_Login_Oauth;
