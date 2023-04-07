import "./Login.css";

import Login_left_side from "./Login_left_side/Login_left_side";
import Login_right_side from "./Login_right_side/Login_right_side";
import Footer from "../Footer/Footer";

function Login() {
  return (
    <>
      {" "}
      <div className="container-login">
        <Login_left_side />
        <Login_right_side />
      </div>
      <Footer />
    </>
  );
}

export default Login;
