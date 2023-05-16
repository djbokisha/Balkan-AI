import { GoogleOAuthProvider } from "@react-oauth/google";
import { GoogleLogin } from "@react-oauth/google";
import Axios from "axios";
import jwt_decode from "jwt-decode";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import { useState } from "react";
// import {axiosPrivate} from "../../services/axiosPrivate"
import { useUser } from "../../hooks/useUser";
import { ToastContainer, toast } from "react-toastify";


export const axiosPrivate = Axios.create({
  baseURL: `${import.meta.env.VITE_URL}`,
  withCredentials: true,

});

function Google_Login_Oauth() {
  const { login } = useAuth();

  const navigate = useNavigate();
  const [userId, setUserId] = useState<string | null>(null);

  const clientId = import.meta.env.VITE_CLIENT_ID_GOOGLE;

  const userState =  useUser()


  return (
    <div>
      <GoogleOAuthProvider clientId={clientId}>
        <GoogleLogin
          onSuccess={(credentialResponse) => {
            const details = jwt_decode(credentialResponse.credential!);
            // @ts-ignore
            const { email, email_verified } = details;
            if (email_verified) {
              axiosPrivate
                .post("/auth/loginGoogle", {
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

                  if (res.status >= 200 && res.status <= 300) {
                    userState.setLoggedin(true)
                    navigate("/profile");
                  }
                })
                .catch((err: any) => {

                  if (err) {
                    toast("please sign up first", {
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
              <ToastContainer />

      </GoogleOAuthProvider>
    </div>
  );
}

export default Google_Login_Oauth;
