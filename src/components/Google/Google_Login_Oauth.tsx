import { GoogleOAuthProvider } from "@react-oauth/google";
import { GoogleLogin, googleLogout } from "@react-oauth/google";
import Axios from "axios";
import jwt_decode from "jwt-decode";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import { useAuth } from "../../hooks/useAuth";

function Google_Login_Oauth() {
  const { login } = useAuth();

  const navigate = useNavigate();
  const [cookies, setCookies, removeCookie] = useCookies();

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

                  console.log("access_token", access_token);
                  console.log("refreshToken", refreshToken);

                  login({
                    id: "",
                    access_token: access_token,
                    refreshToken: refreshToken,
                    name: "",
                    email: "",
                  });

                  setCookies("access_token", access_token, { httpOnly: true });
                  // setCookies("refreshToken", refreshToken);
                })

                .catch((err: any) => {
                  console.log(err);
                  // throw new Error(err.message);
                  console.error();
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
    </div>
  );
}

export default Google_Login_Oauth;
