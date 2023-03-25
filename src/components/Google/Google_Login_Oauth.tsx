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
            if (email_verified) {
              Axios.post("http://localhost:5000/auth/loginGoogle", {
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
