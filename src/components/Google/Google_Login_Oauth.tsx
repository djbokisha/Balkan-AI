import { GoogleOAuthProvider } from "@react-oauth/google";
import { GoogleLogin, googleLogout } from "@react-oauth/google";
import Axios from "axios";
import jwt_decode from "jwt-decode";
import { useNavigate } from "react-router-dom";

function Google_Login_Oauth() {
  const navigate = useNavigate();

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
            const { email, email_verified } = details;
            console.log(email, email_verified);
            if (email_verified) {
              Axios.post("http://localhost:5000/auth/loginGoogle", {
                email: email,
              })
                .then((res) => {
                  console.log("logged in", res);
                  const access_token = res.data.access_token;
                  const refreshToken = res.data.refreshToken;
                  // console.log("access_token", access_token);
                  // console.log("refreshToken", refreshToken);

                  document.cookie = `access_token=${access_token}; path=/; HttpOnly`;
                  console.log(access_token);
                })

                .catch((err: any) => {
                  console.log(err);
                  // throw new Error(err.message);
                });
            }

            navigate("/profile");
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
