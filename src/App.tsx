import React from "react";
import { Helmet } from "react-helmet-async";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Chat_Bot from "./components/Chat_Bot/Chat_Bot";
import Dashboard from "./components/Dashboard/Dashboard";
import Login from "./components/Login/Login";
import Navbar from "./components/Navbar/Navbar";
import Signup from "./components/Signup/Singup";
import ErrorPage from "./pages/Error-Page";
import Pay_Pal from "./components/Pay_Pal/Pay_Pal";
import Home from "./pages/Home";
import Change_password from "./components/Change_password/Change_password";

function App(): JSX.Element {
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
      ],
    },
  ]);
  return (
    <>
      <Helmet>
        <title>Balkan AI</title>
        <link rel="canonical" href="#" />
      </Helmet>
      <React.StrictMode>
        <RouterProvider router={router} />
      </React.StrictMode>
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
