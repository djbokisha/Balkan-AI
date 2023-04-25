import { GoogleOAuthProvider } from "@react-oauth/google";
import { GoogleLogin } from "@react-oauth/google";
import Axios from "axios";
import jwt_decode from "jwt-decode";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import { useState } from "react";
// import {axiosPrivate} from "../../services/axiosPrivate"

export const axiosPrivate = Axios.create({
  baseURL: "http://localhost:5000",
});


function Google_Login_Oauth() {
  const { login } = useAuth();

  const navigate = useNavigate();
  const [userId, setUserId] = useState<string | null>(null);

  const clientId = import.meta.env.VITE_CLIENT_ID_GOOGLE;

  return (
    <div>
      <GoogleOAuthProvider clientId={clientId}>
        <GoogleLogin
          onSuccess={(credentialResponse) => {
            const details = jwt_decode(credentialResponse.credential!);
            // @ts-ignore
            const { email, email_verified } = details;
            if (email_verified) {
              axiosPrivate.post("/auth/loginGoogle", {
                email: email,
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

                  const userId = res.data.user.id;

                  console.log(userId);

                  setUserId(userId);
                  console.log(userId);

                  const getCopy = (userType: string): string => {
                    if (userType.toLowerCase() === "admin") {
                      return userId;
                    }
                    return "Welcome user!";
                  };

                  if (res.status >= 200 && res.status <= 300) {
                    navigate("/profile");
                  }
                })
                .catch((err: any) => {
                  console.log(err);
                  // throw new Error(err.message);
                  console.error();
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
    </div>
  );
}

export default Google_Login_Oauth;
