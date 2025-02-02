import { Helmet } from "react-helmet-async";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Chat_Bot from "./components/Chat_Bot/Chat_Bot";
import Dashboard from "./components/Dashboard/Dashboard";
import Login from "./components/Login/Login";
import Navbar from "./components/Navbar/Navbar";
import Pay_Pal from "./components/Pay_Pal/Pay_Pal";
import Signup from "./components/Signup/Singup";
import ErrorPage from "./pages/Error-Page";
import Home from "./pages/Home";
import Change_password from "./components/Change_password/Change_password";
import Admin_dashboard from "./components/Admin_dashboard/Admin_dashboard";

import { AuthContext } from "./context/AuthContext";
import { useAuth } from "./hooks/useAuth";


function App(): JSX.Element {

  const { user, login, logout } = useAuth();

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "profile",
          element: <Dashboard />,
        },
        {
          path: "chat",
          element: <Chat_Bot />,
        },
        {
          path: "login",
          element: <Login />,
        },
        {
          path: "signup",
          element: <Signup />,
        },
        {
          path: "paypal",
          element: <Pay_Pal />,
        },
        {
          path: "changepassword",
          element: <Change_password />,
        },
        {
          path: "admindashboard",
          element: <Admin_dashboard />,
        },
      ],
    },
  ]);
  return (
    <>
      <Helmet>
        <title>Balkan AI</title>
        <link rel="canonical" href="#" />
      </Helmet>
      <AuthContext.Provider value={{ user, setUser(user) {} }}>
        <RouterProvider router={router} />
      </AuthContext.Provider>
    </>
  );
}

export default App;
const Root = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};
