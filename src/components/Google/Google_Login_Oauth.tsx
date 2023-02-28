import React from "react";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { GoogleLogin, googleLogout } from "@react-oauth/google";

import jwt_decode from "jwt-decode";

function Google_Login_Oauth() {
  const logOut = () => {
    googleLogout();
    console.log("gasi");
  };

  const clientId =
    "935014944125-p2kpcva18t13mgm79hl5u3p55sbd8ufa.apps.googleusercontent.com";

  return (
    <div>
      <GoogleOAuthProvider clientId={clientId}>
        <GoogleLogin
          onSuccess={(credentialResponse) => {
            const details = jwt_decode(credentialResponse.credential!);

            console.log(details);
            console.log(credentialResponse);
          }}
          onError={() => {
            console.log("Login Failed");
          }}
        />
      </GoogleOAuthProvider>
      <button onClick={() => googleLogout()}>Log out</button>
    </div>
  );
}

export default Google_Login_Oauth;
