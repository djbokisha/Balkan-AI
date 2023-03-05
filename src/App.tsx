import { Helmet } from "react-helmet-async";
import {
  createBrowserRouter, Outlet,
  RouterProvider
} from "react-router-dom";
import Chat_Bot from "./components/Chat_Bot/Chat_Bot";
import Dashboard from "./components/Dashboard/Dashboard";
import Login from "./components/Login/Login";
import Navbar from "./components/Navbar/Navbar";
import Signup from "./components/Signup/Singup";
import ErrorPage from "./pages/Error-Page";
import Home from "./pages/Home";

function App(): JSX.Element {


  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      errorElement: <ErrorPage />,
      children: [{
        path: "/",
        element: <Home />,
      }, {
        path: "profile",
        element: < Dashboard />,
      },
      {
        path: "chat",
        element: < Chat_Bot />,
      },
      {
        path: 'login',
        element: <Login />
      },
      {
        path: 'signup',
        element: <Signup />
      }
      ]
    },
  ]);
  return (
    <>
      <Helmet>
        <title>Balkan AI</title>
        <link rel="canonical" href="#" />
      </Helmet>
      <RouterProvider router={router} />
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
